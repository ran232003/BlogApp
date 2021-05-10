import React, {useReducer} from 'react';
import createDataContex from "./createDataContex";
import jsonServer from '../api/jsonServer';

//const BlogContex = React.createContext();
const blogReducer = function(state,action)
{
    switch(action.type){
        case "getBlogPost":
            return action.payload;
        case "deleteBlogPost":
            return state.filter(function(blogPost){action.payload!==blogPost.id})
        case "addBlogPost":
            var newid = Math.floor(Math.random()*9999);
            return [...state,{id:newid,title:action.payload.title,content:action.payload.content}]
        case "editBlogPost":
            return state.map(function(blogPost){
                if(blogPost.id === action.payload.id)
                {
                    return action.payload;
                }
                else{
                    return blogPost;
                }
            })

        default:
            return state;


    }

}
const getBlogPost = function(dispatch){
    return async function(){
       const response = await jsonServer.get('/blogpost');
        //response.data == [{blog},{blog}.....]
        dispatch({type:"getBlogPost",payload:response.data})
    }
}
const addBlogPost = function(dispatch)
{
    return async function(title,content,callBackNav){
        await jsonServer.post('/blogpost',{title:title,content:content});
        //dispatch({type:"addBlogPost",payload:{title:title,content:content}});
        //console.log("in add");
        //callBackNav();

    }
}
const editBlogPost = function(dispatch)
{
    return async function(title,content,id,callback){
        console.log("in contex "+id);
        await jsonServer.put(`blogpost/${id}`,{title:title,content:content});
        //dispatch({type:"editBlogPost",payload:{title:title,content:content,id:id}});
        callback();
    }
}
const deleteBlogPost = function(dispatch)
{
    return async function(id,func){
        await jsonServer.delete("/blogpost/"+id);
        func();
        //dispatch({type:"deleteBlogPost",payload:id});

    }
}
// export const BlogProvider = function({children})
// {
//     const [blogPosts,dispatch] = useReducer(blogReducer,[]);
   
    
//     return(
//         <BlogContex.Provider value = {{data:blogPosts,addBlogPost}}>
//             {children}
//         </BlogContex.Provider>
//     )
// }
//export default BlogContex;
//put deafult post inside []
export const{Contex,Provider} = createDataContex(blogReducer,{addBlogPost,deleteBlogPost,editBlogPost,getBlogPost},[{title:"Test Post",content:"check",id:1}]);