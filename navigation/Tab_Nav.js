import {createAppContainer} from "react-navigation";
import {createBottomTabNavigator} from "react-navigation-tabs";

import ActivityScreen from "../screens/Activity";
import HomeScreen from "../screens/Home";
import MypageScreen from "../screens/Mypage";
import PostingScreen from "../screens/Posting";
import SearchScreen from "../screens/Search";

import {BG_COLOR} from "../constants/Color";

const TabNavigation = createBottomTabNavigator (
    {
        Home: HomeScreen,
        Search: SearchScreen,
        Posting: PostingScreen,
        Activity: ActivityScreen,
        Mypage: MypageScreen
    }, {
        tabBarOptions: {
            showLabel: true,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }

)

export default createAppContainer(TabNavigation);