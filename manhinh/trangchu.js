import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  Alert,
  Button,
  Text,
  AsyncStorage,
} from "react-native";
import { Container } from "native-base";
import _ from "lodash";
import {TextInput } from "react-native-gesture-handler";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      data: [],
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    const api =
      "http://www.json-generator.com/api/json/get/bVRsAxjaiG?indent=2";
    fetch(api)
      .then((res) => res.json())
      .then((resJson) => {
        this.setState({
          data: this.state.data.concat(resJson),
        });
      });
  };

  render() {
    const { navigation } = this.props;
    return (
      <Container>
        <View style={styles.Container}>
          <Text
            style={{
              fontSize: 25,
              margin: 30,
              alignSelf: "center",
              color: "#F00",
            }}
          >
            ĐĂNG NHẬP
          </Text>

          <Text
            style={{
              fontSize: 16,
              marginLeft: 15,
            }}
          >
            Tên tài khoản
          </Text>
          <View style={styles.editText}>
            <Image
              style={{ width: 20, height: 20, alignSelf: "center", margin: 5 }}
              source={{
                uri:
                  "https://cdn4.iconfinder.com/data/icons/e-commerce-icon-set/48/Username_2-512.png",
              }}
            />
            <TextInput
              style={{ fontSize: 16, width: '80%' }}
              autoCapitalize = 'none'
              placeholder= 'Nhập tên tài khoản'
              underlineColorAndroid = '#F00'
              onChangeText={(username) => this.setState({ username })}
              value={this.state.username}
            />
          </View>

          <Text
            style={{
              fontSize: 16,
              marginLeft: 15,
            }}
          >
            Mật khẩu
          </Text>
          <View style={styles.editText}>
            <Image
              style={{ width: 20, height: 20, alignSelf: "center", margin: 5 }}
              source={{
                uri:
                  "https://cdn4.iconfinder.com/data/icons/glyphs/24/icons_password-512.png",
              }}
            />
            <TextInput
              style={{ fontSize: 16, width: '80%' }}
              placeholder='Nhập mật khẩu'
              underlineColorAndroid = '#F00'
              autoCapitalize = 'none'

              secureTextEntry
              onChangeText={(password) => this.setState({ password })}
              value={this.state.password}
            />
          </View>

          <View style={{ margin: 10 }}>
            <Button
              title="Đăng nhập ứng dụng"
              color="#F00"
              onPress={this.saveData}
            />
          </View>

          <View style={{ margin: 10 }}>
            <Button
              title="Tài khoản đã lưu"
              color="#F0F"
              onPress={this.loadData}

            />
          </View>

          <View style={{ margin: 10 }}>
            <Button
              title="Danh sách người dùng"
              color="#00F"
              onPress={() => navigation.navigate('TrangThongTin')}
            />
          </View>
        </View>
      </Container>
    );
  }

  saveData = async () => {
    let data = this.state.data;
    let username = this.state.username;
    let password = this.state.password;

    if (this.state.username.length != 0 && this.state.password.length != 0) {
      for (let i = 0; i < data.length; i++) {
        if (username == data[i].username && password == data[i].password) {
          let obj = {
            name: this.state.username,
            pass: this.state.password,
          };
          AsyncStorage.setItem("user", JSON.stringify(obj));
          this.props.navigation.navigate('TrangThongTin');
          break;
        } else {
          Alert.alert("Sai tài khoản hoặc mật khẩu");
          break;
        }
      }
    } else {
      Alert.alert("Nhập đầy đủ thông tin");
    }
  };

  loadData = async () => {
    try {
      let user = await AsyncStorage.getItem("user");
      let parsed = JSON.parse(user);
      Alert.alert(
        "Tài khoản: " + parsed.name + " " + "Mật khẩu: " + parsed.pass
      );
    } catch (error) {
      Alert.alert(error);
    }
  };
}

const styles = StyleSheet.create({
  editText: {
    margin: 10,
    height: 50,
    flexDirection: "row",
    width: "100%",
  },
});
