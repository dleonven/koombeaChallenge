
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Fighters from './Fighters'
import Filters from './Filters'

const Stack = createNativeStackNavigator();


export default function TabMessagesNavigator() {
    return(
        <Stack.Navigator>
            <Stack.Screen
                name="Fighters"
                component={Fighters}
                options={{ 
                    title: 'Mensajes',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        //fontFamily: 'JetBrainsMono_100Thin',
                        fontSize: 20,
                        color: '#FFFFFF'
                    }      
                }}
            /> 

            <Stack.Screen
                name="Filters"
                component={Filters}
                options={{ 
                    title: 'Mensajes',
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        //fontFamily: 'JetBrainsMono_100Thin',
                        fontSize: 20,
                        color: '#FFFFFF'
                    }      
                }}
            /> 
        </Stack.Navigator>

    )
}