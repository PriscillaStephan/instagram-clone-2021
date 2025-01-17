import React, { Component } from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialComunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { connect } from 'react-redux'
import { bindActionCreators }  from 'redux'
import { fetchUser } from "../redux/actions/index"
import FeedScreen from './main/Feed'
import ProfileScreen from './main/Profile'

import * as firebase from 'firebase'
import '@firebase/firestore';
import { ColorPropType } from 'react-native';

const Tab = createMaterialBottomTabNavigator();
const EmptyScreen = () => {
    return(null)
}

export class Main extends Component {
    componentDidMount(){
       this.props.fetchUser();
    }
    render() {     
        return (
            <Tab.Navigator initialRouteName="Feed" labeled={false}> 
                <Tab.Screen name="Feed" component={FeedScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialComunityIcons name="home" color={color} size={26}/>                        
                        ),
                }} />
                <Tab.Screen name="AddContainer" component={EmptyScreen}
                    //changing the tab click behaviour
                    listeners={({ navigation }) => ({
                        tabPress: event => {
                            event.preventDefault();
                            navigation.navigate("Add")
                        }
                    })}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialComunityIcons name="plus-box" color={color} size={26}/>                        
                        ),
                }} />
                 <Tab.Screen name="Profile" component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialComunityIcons name="account-circle" color={color} size={26}/>                        
                        ),
                }} />
            </Tab.Navigator>
        )
    }
}

const mapStateToProps = (store) => ({
    currentUser: store.userState.currentUser
})

const mapDispatchProps = (dispatch) => bindActionCreators({fetchUser}, dispatch)

export default connect(mapStateToProps, mapDispatchProps)(Main);
