import React, { Component } from "react";
import {Text, View, FlatList} from "react-native";
import {
  Container,
  List,
  ListItem,
  Left,
  Body,
  Thumbnail, } from "native-base";

export default class TrangThongTin extends Component{
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
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

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <Container>
        <List>
          <FlatList
            data={this.state.data}
            renderItem={({ item }) => (
              <View>
                <ListItem avatar>
                  <Left>
                    <Thumbnail style={{width: 50, height: 50}} source={{ uri: item.avatar }} />
                  </Left>
                  <Body>
                    <Text style={{fontSize: 22}}>
                      {item.first_name} {item.last_name}
                    </Text>
                    <Text style={{fontSize: 14}}>Tài khoản: {item.username}</Text>
                    <Text style={{fontSize: 14}}>Mật khẩu: {item.password}</Text>
                  </Body>
                </ListItem>
              </View>
            )}
            keyExtractor={item => item.username}
          />
        </List>
      </Container>
    );
  }
}

