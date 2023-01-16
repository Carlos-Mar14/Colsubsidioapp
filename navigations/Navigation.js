// Imports de librerias externas
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Icon, mdiHome } from 'react-native-elements';

// Imports propios componentes
import Projects from '../screens/Projects'
import Search from '../screens/Search'
import Account from '../screens/Account'

//Botton que permite la navegación
const Tab = createBottomTabNavigator()

export default function Navigation() {
    const screenOptions = (route, color) =>{
        let iconName
        switch (route.name) {
            case "projects":
                iconName = "home"
                break;
            case "search":
                iconName = "magnify"
                break;
            case "account":
                iconName = "account"
                break; 
        }
        
        return(
            <Icon
                type="material-community"
                name={iconName}
                size={30}
                color={color}
            />
        )
    }

    return(
        //Componente para navegar entre las pantallas en el orden que se desea
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName="projects"
                screenOptions={({ route}) =>({
                    tabBarInactiveTintColor: "#0464b4",
                    tabBarActiveTintColor: "#fcd304",
                    tabBarIcon: ({color}) => screenOptions(route, color)
                })}
            >
                <Tab.Screen
                    name="projects"
                    component={Projects}
                    options={{ title: "Proyectos"}}
                />
                <Tab.Screen
                    name="search"
                    component={Search}
                    options={{ title: "Buscar"}}
                />
                <Tab.Screen
                    name="account"
                    component={Account}
                    options={{ title: "Cuenta"}}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}