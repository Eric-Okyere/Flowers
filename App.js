import { NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'
import { StyleSheet, View } from 'react-native';
import { AntDesign, EvilIcons,Feather,MaterialCommunityIcons  } from '@expo/vector-icons';
import Detail from './Details';
// import HomeScreen from './HomeScreen';
import {NativeBaseProvider, Spacer, Text } from "native-base"
import ButtonNav from "./ButtonNav"


const Stack = createStackNavigator();
export default function App() {
  return (

    
<NativeBaseProvider>
    <NavigationContainer style={{top:10}} >
    <Stack.Navigator
  
    >
   
   <Stack.Screen
    options={{
       
      headerRight:()=>(<AntDesign name="search1" style={{marginRight:15}} size={24} color="black" />),
      headerLeft:()=>( <MaterialCommunityIcons style={{marginLeft:10}} name="view-dashboard-outline" size={24} color="black" />),
    }}
   
   name='Discovery' component={ButtonNav} /> 
    
   <Stack.Screen
    options={{
      
      headerRight: () => (
        
        <View style={{flexDirection:"row", marginRight:25, justifyContent:"space-between" }} >
           <Feather name="headphones" size={22} color="black" />
 
           <Text><EvilIcons name="heart" size={33} color="black" /></Text>
      
           <Text><EvilIcons name="share-google" size={32} color="black" /></Text>
   </View>
   ),
        title:()=>null,
    
    }}
   name='detail' component={Detail} /> 
    

   
    
  </Stack.Navigator>
  </NavigationContainer>
  </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dae0db',
  },
});
