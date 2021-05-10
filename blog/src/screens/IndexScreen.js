import React, {useContext,useEffect} from 'react';
import { View, Text, StyleSheet,FlatList,Button,TouchableOpacity } from 'react-native';
import {Contex} from '../contex/BlogContex';
import { EvilIcons } from '@expo/vector-icons'; 
import { AntDesign } from '@expo/vector-icons';


const IndexScreen = ({navigation}) => {

  const {state,addBlogPost,deleteBlogPost,getBlogPost} = useContext(Contex);

  useEffect(function(){
    getBlogPost();
    navigation.addListener("didFocus",function(){
      getBlogPost();
    })
  },[])
  return (
    <View>
      <Text>Index Screen hello </Text>
      
      <FlatList
      data = {state}
      keyExtractor = {function(blog){ return blog.title}}
      renderItem = {function({item}){
        return(
          <View style = {styles.row}>

          <TouchableOpacity onPress = {function(){
            console.log("just checking");
            navigation.navigate("Show",{id:item.id})}}>
          <Text style = {styles.blogTitle}>{item.title}, id is: {item.id}</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress = {function(){deleteBlogPost(item.id,function(){
              navigation.navigate("index");

          })}}>
            <EvilIcons name="trash" size={29} color="black" />
          </TouchableOpacity>
          </View>

        )
      }}
      
      />

    </View>
  );
};

IndexScreen.navigationOptions = function({navigation}){
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <AntDesign name="plus" size={30} />
      </TouchableOpacity>
    ),
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <AntDesign name="plus" size={30} />
      </TouchableOpacity>
    ),

  };
}

const styles = StyleSheet.create({
  row:{
    flexDirection:"row-reverse",
    justifyContent:"space-between",
    paddingVertical:10,
    paddingHorizontal:10,
    borderTopWidth:1,
    borderColor:"grey",
  
  },
  blogTitle:{
    fontSize:18
  },
  btnstyle:{
    margin:10,
  }

});
export default IndexScreen;
