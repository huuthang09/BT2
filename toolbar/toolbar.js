import React from 'react';
import { createStackNavigator,CardStyleInterpolators} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../manhinh/trangchu';
import TrangThongTin from '../manhinh/thongtin';

const Stack = createStackNavigator();
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const closeConfig={
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: true,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}
export default  Navigator =() =>{
  return (
      <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          gestureEnabled:true,
          gestureDirection:'horizontal',
          cardStyleInterpolator:CardStyleInterpolators
          .forHorizontalIOS,
          transitionSpec:{
            open:config,
            close:closeConfig,
          }
        }}
        headerMod="float"
        animation="fade"
      >
        <Stack.Screen name='Home' component={Home} options={{ title: 'Trang đăng nhập'}} />
        
        <Stack.Screen 
 name='TrangThongTin' component={TrangThongTin} options={{ title: 'Danh sách người dùng'}} />

      </Stack.Navigator>
      </NavigationContainer>
  )
}