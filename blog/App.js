import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import IndexScreen from './src/screens/IndexScreen';
import {Provider} from './src/contex/BlogContex';
import ShowBlogScreen from './src/screens/ShowBlogScreen';
import CreateBlogScreen from './src/screens/CreateBlogScreen';
import EditBlogScreen from './src/screens/EditBlogScreen';


const navigator = createStackNavigator(
  {
    Index: IndexScreen,
    Show:ShowBlogScreen,
    Create:CreateBlogScreen,
    Edit:EditBlogScreen,
  },
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blogs',
    },
  }
);



// export default createAppContainer(navigator);
const App = createAppContainer(navigator);

export default ()=>{
  return <Provider>
     <App/>
     </Provider>
     
};
