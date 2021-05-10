import React, {useContext,useReducer} from 'react';
import { View, Text, StyleSheet,FlatList,Button } from 'react-native';

export default function(reducer,actions, initState)
{
    const Contex = React.createContext();

    const Provider = function({children}){
        const [state,dispatch] = useReducer(reducer,initState)
        const boundAction = {};
        for(let key in actions)
        {
            boundAction[key] = actions[key](dispatch)
        }
        
        return <Contex.Provider value = {{state:state,...boundAction}}>
            {children}
        </Contex.Provider>

    }

    return{Contex,Provider};
}