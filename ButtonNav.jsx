import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import React from 'react';
import { Center,Text } from 'native-base';
import {Entypo,AntDesign,FontAwesome,FontAwesome5,EvilIcons, MaterialCommunityIcons} from '@expo/vector-icons'
import { Pressable } from 'native-base';

import Cart from './Cart';
import StackNav from './StackNav';
import ProfileScreen from './ProfileScreen';
import HomeScreen from './HomeScreen';
import FolderSet from './FolderSet';
import Settings from './Settings';



const Tab = createBottomTabNavigator();
const CustomTab = ({children, onPress})=> (
  <Pressable onPress={onPress}
  h={60}
  w={60}
  rounded="full"
  style={{ backgroundColor: 'black' }}
  top={-15}
  // shadow={2}
  >
{children}
  </Pressable>
)
function MyTabs() {
  return (
    <Tab.Navigator
    // initialRouteName="Login"
   
    // backBehavior='Home'
    screenOptions={{
      tabBarShowLabel:false,
      headersShown:false,
      tabBarHideOnKeyboard:true
      
    }}
    >

      <Tab.Screen name="ome" component={HomeScreen} 
      options={{
        title:()=>null,
        // header:()=>null,
        headersShown:false,
        tabBarIcon:({focused})=>(
          <Center>
          { focused ? (
             <FontAwesome name="home" color="#f542c8" size={26} />
          ):(
            <AntDesign name="home" color="#f542c8" size={26} />
          )

          }
       
        </Center>
        )
      }}
      />



      <Tab.Screen name="folder" component={FolderSet} 
      options={{
        title:()=>null,
        // header:()=>null,
        headersShown:false,
        tabBarIcon:()=>(
          <AntDesign name="folderopen" size={24} color="black" />
        )
      }}
      />



      <Tab.Screen name="Cart" component={Cart} 
      options={{
        tabBarButton:(props)=> <CustomTab {...props} />,
        tabBarIcon:({focused})=>(
          <Center>
          { focused ? (
             <FontAwesome5 name="shopping-basket" color="#f542c8" size={26} />
          ):(
            <EvilIcons name="heart" size={33} color="#f542c8" />
          )

          }
       
        </Center>
        )
      }}
      />
      



      <Tab.Screen name="Profile" component={ProfileScreen} 
      options={{
       
        tabBarIcon:({focused})=>(
          <Center>
          { focused ? (
             <Entypo name="user" color="#f542c8" size={26} />
          ):(
            <AntDesign name="user" color="#f542c8" size={26} />
          )

          }
       
        </Center>
        )
      }}
      />


      <Tab.Screen name="settings" component={Settings} 
      options={{
       
        tabBarIcon:()=>(
          <AntDesign name="setting" size={24} color="black" />
        )
      }}
      />
      
    </Tab.Navigator>
  );
}

export default MyTabs
