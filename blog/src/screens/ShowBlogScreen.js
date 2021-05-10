import React,{useContext} from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import {Contex} from '../contex/BlogContex';
import { AntDesign } from '@expo/vector-icons'; 



const ShowBlogScreen = function({navigation}){
    //state == all the list blogs
    const{state} = useContext(Contex)
    const id = navigation.getParam("id");
     console.log(id);
     console.log(state);
    const blogPost = state.find(function(blogPost){ 
        if(blogPost.id === id)
        {
            console.log(id);
            console.log(blogPost.id);
            return blogPost;
        }
    })
    console.log(blogPost);

    return(
        <View>
            <Text style = {styles.title}>
                 {blogPost.title}
            </Text>
            <Text style = {styles.content}>
                {blogPost.content}
            </Text>
        </View>
    )
};
ShowBlogScreen.navigationOptions = function({navigation})
{
    return {
        headerRight: () => (
          <TouchableOpacity onPress={() =>{
          console.log(navigation.getParam("id"));
          navigation.navigate('Edit',{id:navigation.getParam("id")})}}>
            <AntDesign name="edit" size={24} color="black" />
          </TouchableOpacity>
        ),
        headerLeft: () => (
            <TouchableOpacity onPress={() =>{
            console.log(navigation.getParam("id"));
            navigation.navigate('Edit',{id:navigation.getParam("id")})}}>
              <AntDesign name="edit" size={24} color="black" />
            </TouchableOpacity>
        ),
    
      };
}


styles = StyleSheet.create({
    title:{
        textAlign:"center",
        fontSize:24,
        
    },
    content:{
        fontSize:20,
        marginTop:20
    }
});

export default ShowBlogScreen;