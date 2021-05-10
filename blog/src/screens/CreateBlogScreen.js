import React,{useState,useContext} from 'react';
import {StyleSheet,Text,View,Button,TextInput} from 'react-native';
import { color } from 'react-native-reanimated';
import {Contex} from '../contex/BlogContex';


const CreateBlogScreen = function({navigation}){
    const [title,setTitle] = useState('');
    const [content,setContent] = useState('');
    const {state,addBlogPost,deleteBlogPost} = useContext(Contex);



    return(
        <View>
            <Text style={styles.lable}>Enter Title</Text>
            <TextInput style = {styles.inputTitle}
            value = {title}
            onChangeText = {function(title){
                console.log("hi");
                setTitle(title)}}
            
            />
            <Text style={styles.lable}>Enter Conent</Text>
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
            onPress = {function(){addBlogPost(title,content,function(){
                console.log("in call back");
                navigation.navigate("index")
            })}}
            title = "submit"
            style = {styles.ButtonStyle}
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

export default CreateBlogScreen