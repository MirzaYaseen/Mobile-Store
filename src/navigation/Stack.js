import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DeviceListScreen from '../view/DeviceList';
import CreateDevice from '../view/CreateDevice';
import GetDeviceByID from '../view/DeviceCompanies';
import StatusList from '../view/ListStatus';
import CategoryList from '../view/ListCategory';
import BottomTab from '../navigation/BottomTab';
import DeviceDetails from '../view/DeviceDetail';
import FrontScreen from '../view/FrontScreen';
import EditDevice from '../view/EditDevice';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={BottomTab}
          options={{headerShown: false}}
        />
      <Stack.Screen
          name="Front"
          component={FrontScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="CreateDevice"
          component={CreateDevice}
          options={{title: 'Create Device'}}
        />
        <Stack.Screen
          name="CategoryList"
          component={CategoryList}
          options={{title: 'Category List'}}
        />
        <Stack.Screen
          name="StatusList"
          component={StatusList}
          options={{title: 'Status List'}}
        />
        <Stack.Screen
          name="GetDevice"
          component={GetDeviceByID}
          options={{title: 'Get Device By ID'}}
        />

        <Stack.Screen
          name="DeviceList"
          component={DeviceListScreen}
          options={{title: 'Device List'}}
        />
         <Stack.Screen
          name="DeviceDetails"
          component={DeviceDetails}
          options={{title: 'Device Detail'}}
        />
         <Stack.Screen
          name="EditDevice"
          component={EditDevice}
          options={{title: 'Edit Device Detail'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
