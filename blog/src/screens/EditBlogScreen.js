import React,{useState,useContext} from 'react';
import {StyleSheet,Text,View,Button,TextInput} from 'react-native';
import { color } from 'react-native-reanimated';
import {Contex} from '../contex/BlogContex';

const EditBlogScreen = function({navigation})
{
    const {state,addBlogPost,deleteBlogPost,editBlogPost} = useContext(Contex);  
    console.log(addBlogPost);
    console.log(editBlogPost);
    const id = navigation.getParam("id");
    console.log(id);
    const blogPost = state.find(function(blogPost){ 
        if(blogPost.id === id)
        {
            console.log(id);
            console.log(blogPost.id);
            return blogPost;
        }
    })
    const [title,setTitle] = useState(blogPost.title);
    const [content,setContent] = useState(blogPost.content);
    
    console.log(title);

    return(
        <View>
            <Text style={styles.lable}>Edit Title</Text>
            <TextInput style = {styles.inputTitle}
            value = {title}
            onChangeText = {function(title){
                setTitle(title)}}
            
            />
            <Text style={styles.lable}>Edit Conent</Text>
            <View style = {styles.inputContent}>
            <TextInput 
            value = {content}
            onChangeText = {function(content){
                //console.log("hi");
                setContent(content)}}

            />
            
            </View>
            <View style = {styles.ButtonStyle}>
            <Button
            onPress = {function(){editBlogPost(title,content,id,function(){
                console.log(id);
                navigation.navigate("index")
            })}}
            title = "submit"
            style = {styles.ButtonStyle}
            />
            <Button
            onPress = {function(){
                navigation.navigate("index");
            }}
            title = "return to main page"
            />
            </View>
            
        </View>
    )
};

const styles = StyleSheet.create({
    inputTitle:{
        fontSize:18,
        borderColor:"black",
        borderWidth:1,
        marginRight:10
    },
    lable:{
        fontSize:24,
        textAlign:"center",
        marginBottom:10
    },
    inputContent:{
        width:220,
        height:200,
        borderColor:"black",
        borderWidth:1,
        marginLeft:80
    
    },
    ButtonStyle:{
    width:100,
    height:100,
    marginLeft:140,
    marginTop:20,

    }



}) ;

export default EditBlogScreen;