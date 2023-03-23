import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ScrollView, Touchable, FlatList } from 'react-native';
import { Pressable } from 'react-native';
import { Image } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Flowers from './Data';







const Tab = createBottomTabNavigator();


const HomeScreen = () => {
    const navigation = useNavigation()

  return (

<View>
    <FlatList  
    data={Flowers}
    renderItem={({item})=>{
      return (
        <Pressable
        onPress={()=>navigation.navigate("detail", item)}
        >
        <View style={MyStyle.Main}>
            
            <View style={MyStyle.cont}  >
                <View style={MyStyle.imgView}>
                    
                <Image style={MyStyle.img} source={{uri:item.image}} alt="Image" />
                </View>
                <View style={MyStyle.textView}>
                <Text style={{top:5}}>{item.title}</Text>
                    <View style={MyStyle.flex}>
                    <Image style={MyStyle.profile} source={{uri:item.profImg}} alt="img" />
                    <Text style={{marginTop:30, flex:1, color:"#b0b5b1", fontStyle:"italic"}}>{item.profileName}</Text>
                    <Text style={{marginTop:30, flex:1, color:"#b0b5b1"}}>{item.time}</Text>
                    </View>
                </View>
            </View>
            
        </View>
        </Pressable>
      )
    }}
    keyExtractor={(item)=>item.id}
    />
</View>




    

    // <View style={MyStyle.cont}>
    //    <View style={MyStyle.imgView} >
    //   <Image style={MyStyle.img} source={require("./Images/2.jpg")} />
    //    </View>
    //    <View style={MyStyle.textView}>
    //   <Text>Ashiyanadecors Red and White Tulips with Vase Ideal for Home Decor and Gifting, Natural Look Flowers</Text>
    //   <View style={MyStyle.flex} >
     
    //   <Image style={MyStyle.profile} source={require("./Images/my.jpg")} />
    
    //   <Text style={{marginTop:30, flex:1, color:"#b0b5b1", fontStyle:"italic"}}>Eric Okyere</Text>
    //   <Text style={{marginTop:30, flex:1, color:"#b0b5b1"}}>10 min ago!</Text>
    //   </View>
    //    </View>

    // </View>
  )
}

export default HomeScreen;

const MyStyle = StyleSheet.create({
    Main:{
       
         margin:10
    },
    cont:{
        flexDirection:"row",
     margin:5,
      backgroundColor:"white"
    },
    flex:{
        flexDirection:"row"
    },
    imgView:{
        flex:1
    },
    textView:{
        flex:2,
       

    },
    img:{
        width:100,
        height:120,
        margin:5
    },
    profile:{
        width:40,
        height:40,
        borderRadius:20,
        margin:5,
        top:9
    }
})