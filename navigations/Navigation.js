// Imports de librerias externas
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Projects from '../screens/Projects'
import Search from '../screens/Search'
import Account from '../screens/Account'

//Botton que permite la navegación
const Tab = createBottomTabNavigator()

export default function Navigation() {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name="poject"
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