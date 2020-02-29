import React from 'react';
import {Platform} from "react-native";
import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";
import {createStackNavigator} from "react-navigation-stack";

import ActivityScreen from "../screens/Activity";
import HomeScreen from "../screens/Home";
import MypageScreen from "../screens/Mypage";
import PostingScreen from "../screens/Posting";
import SearchScreen from "../screens/Search";

import {BG_COLOR, ACTIVE_COLOR} from "../constants/Color";

import TabBarIcon from '../components/TabBarIcon';

import { createdStack } from "./Config";

const TabNavigation = createBottomTabNavigator (
    {
        Home: {
            screen: createdStack(HomeScreen, "HOME"),
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-home" : "md-home"}
                    />
                )
            }
        },
        Search: {
            screen: createdStack(SearchScreen, "SEARCH"),
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-search" : "md-search"}
                    />
                )
            }
        },
        Posting: {
            screen: createdStack(PostingScreen, "POSTING"),
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-add-circle-outline" : "md-add-circle-outline"}
                    />
                )
            }
        },
        Activity: {
            screen: createdStack(ActivityScreen, "ACTIVITY"),
            navigationOptions: {
                tabBarIcon: ({focused}) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-checkmark" : "md-checkmark"}
                    />
                )
            }
        },
        Mypage: {
            screen: createdStack(MypageScreen, "MYPAGE"),
            navigationOptions: {
                tabBarIcon: ({ focused }) => (
                    <TabBarIcon
                        focused={focused}
                        name={Platform.OS === "ios" ? "ios-film" : "md-film"}
                    />
                )
            }
        }
    }, 
    {
        tabBarOptions: {
            showLabel: true,
            style: {
                backgroundColor: BG_COLOR,
                
            },
            activeTintColor: ACTIVE_COLOR
        }
    }

)

export default createAppContainer(TabNavigation);