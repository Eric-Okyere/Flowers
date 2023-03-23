import {  Text,Image, Box,Heading } from 'native-base'
import {View,  ScrollView } from 'react-native';


function Detail({route}) {
 
  // const navigation=useNavigation()
  const item = route.params
  return (
   
    <Box style={{backgroundColor:"white"}} flex={1}>
      <Image source={{uri:item.image}}
      flex={1}
      resizeMode="cover"
      size="lg"
      w="full"
      alt="Logo"/>

  <Box 
  w="full"
  h="full"
  position="absolute"
  style={{top:60}}
  px="3"
    justifyContent="center"
  >
  
  <ScrollView style={{marginBottom:70}} showsVerticalScrollIndicator={false} >
  <Image source={{uri:item.image}}
      w="full"
      h={300}
     
      alt="Image"/>
      <Heading color="white" >{item.title}</Heading>
    <View style={{justifyContent:"space-between", flexDirection:"row" }} >
      <Image source={{uri:item.profImg}}
      w={50}
      h={50}
     mt={5}
     rounded={25}
      alt="Image" />
      <Text italic mt={8} color="#c0d2f0" fontSize={20}  >{item.profileName}</Text>
      <Text bg="#c0d2f0" w={1} h={1} mt={12} ></Text>
      <Text  mt={10} color="#c0d2f0"  >{item.time}</Text>
    </View>
       
       <Text italic fontSize={20} color="white" >{item.description}</Text>

     
    </ScrollView>
  </Box>
    </Box>
  )
}

export default Detail