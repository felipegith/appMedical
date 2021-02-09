import React from 'react'


import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Entypo, Feather, MaterialCommunityIcons,AntDesign } from '@expo/vector-icons'; 


const Tab = createBottomTabNavigator()


const icons ={

    Home:{
        lib: Entypo,
        name: 'home'
    },

    Calendary:{
        lib: Feather,
        name: 'calendar'
    },

    Account:{
        lib: MaterialCommunityIcons,
        name: 'account-child-outline'
    },

    Settings:{
        lib: AntDesign,
        name: 'setting'
    }

}

import Home from '../screens/Home/Home'
import Doctors from '../Doctors/Doctors'
import Settings from '../screens/Settings/Settings'
import Account from '../screens/Account/Account'

export default function Routes(){
    return(
        <Tab.Navigator
        screenOptions={({route})=>({
            tabBarIcon: ({color, size})=>{
                const {lib: Icon,name} = icons[route.name]
                return <Icon name={name} size={size} color={color} />
            }
        })}
        tabBarOptions={{
            style:{
                backgroundColor: '#FFF',
                borderTopColor: '#FFF'
            },
            activeTintColor: '#6a6c6e'
        }}
        >

            <Tab.Screen
            
            name="Home" 
            component={Home}
            options={{
                
                title: '',
                
            }} 
            />

            <Tab.Screen 
            name="Calendary" 
            component={Doctors} 
            options={{
                title: ''
            }} 
            />

            <Tab.Screen 
            name="Account" 
            component={Account} 
            options={{
                title: ''
            }} 
            />

            <Tab.Screen 
            name="Settings" 
            component={Settings} 
            options={{
                title: ''
            }} 
            />
            
            
        </Tab.Navigator>
    )
}