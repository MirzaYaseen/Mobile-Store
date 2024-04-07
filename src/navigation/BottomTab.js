import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, TouchableOpacity, StyleSheet, Image} from 'react-native';
import DeviceListScreen from '../view/DeviceList';
import CreateDevice from '../view/CreateDevice';
import GetDeviceByID from '../view/DeviceCompanies';
import StatusList from '../view/ListStatus';
import FrontScreen from '../view/FrontScreen';

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({onPress, image, isFocused}) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.tabBarButton, isFocused && styles.activeTabButton]}>
    <Image
      source={image}
      style={[
        styles.tabBarIcon,
        isFocused ? styles.activeTabIcon : styles.inactiveTabIcon,
      ]}
    />
  </TouchableOpacity>
);

const CustomBottomTab = ({state, navigation}) => (
  <View style={styles.tabBarContainer}>
    {state.routes.map((route, index) => {
      const isFocused = state.index === index;

      const onPress = () => {
        const event = navigation.emit({
          type: 'tabPress',
          target: route.key,
          canPreventDefault: true,
        });

        if (!isFocused && !event.defaultPrevented) {
          navigation.navigate(route.name);
        }
      };

      let image = null;
      switch (route.name) {
        case 'MobilesScreen':
          image = require('../assets/mobile.png');
          break;
        case 'CreateDevice':
          image = require('../assets/mobilephone.png');
          break;
        case 'MobileDevices':
          image = require('../assets/category.png');
          break;
        case 'StatusList':
          image = require('../assets/status.png');
          break;
        case 'GetDevice':
          image = require('../assets/comapnies.png');
          break;
        default:
          break;
      }

      return (
        <CustomTabBarButton
          key={route.key}
          onPress={onPress}
          image={image}
          isFocused={isFocused}
        />
      );
    })}
  </View>
);

const BottomTab = () => {
  return (
    <Tab.Navigator tabBar={props => <CustomBottomTab {...props} />}>
      <Tab.Screen name="MobilesScreen" options={{title:"Mobiles", headerShown:false}} component={FrontScreen} />
      <Tab.Screen name="MobileDevices" options={{title:"Mobile Devices"}} component={DeviceListScreen} />
      <Tab.Screen name="CreateDevice"  options={{title:"Create New Device"}} component={CreateDevice} />
      <Tab.Screen name="StatusList"  options={{title:"Status List"}} component={StatusList} />
      <Tab.Screen name="GetDevice"  options={{title:"Device Companies"}} component={GetDeviceByID} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    borderTopLeftRadius: 30,
    borderTopEndRadius: 40,
    borderBottomStartRadius: 40,
    marginTop: 10,
    borderRadius: 70,
    borderTopColor: '#ccc',
    marginBottom: 10,
    justifyContent: 'center',
  },
  tabBarButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabBarIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  activeTabButton: {
    backgroundColor: '#F9FBFF', 
    borderRadius: 10,
  },
  activeTabIcon: {
    tintColor: '#3D8FEF', 
  },
  inactiveTabIcon: {
    tintColor: 'gray', 
  },
});

export default BottomTab;
