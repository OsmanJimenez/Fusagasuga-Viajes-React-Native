import React from 'react';
import { Icon } from 'react-native-elements';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';


import SitesScreenStacks from './SitesStacks';
import TopListScreenStacks from './TopListsStacks';
import SearchScreenStacks from './SearchStacks';
import AcountScreenStacks from './AccountStacks';


const NavigationStacks = createBottomTabNavigator(
    {
        Sites: {
            screen: SitesScreenStacks,
            navigationOptions:() => ({
                tabBarLabel: "Sitios",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type="material-community"
                        name="compass-outline"
                        size={22}
                        color={tintColor}
                    />
                )
            })
        },
        TopLists: {
            screen: TopListScreenStacks,
            navigationOptions:() => ({
                tabBarLabel: "Ranking",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type="material-community"
                        name="star-outline"
                        size={22}
                        color={tintColor}
                    />
                )
            })
        },
        Search: {
            screen: SearchScreenStacks,
            navigationOptions:() => ({
                tabBarLabel: "Buscar",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type="material-community"
                        name="magnify"
                        size={22}
                        color={tintColor}
                    />
                )
            })
        },
        Acount: {
            screen: AcountScreenStacks,
            navigationOptions:() => ({
                tabBarLabel: "Mi cuenta",
                tabBarIcon: ({ tintColor }) => (
                    <Icon
                        type="material-community"
                        name="home-outline"
                        size={22}
                        color={tintColor}
                    />
                )
            })
        }
    },
    {
        initialRouteName: "Acount",
        order: ["Sites", "TopLists", "Search", "Acount"],
        tabBarOptions:{
            inactiveTintColor: "#646464",
            activeTintColor: "#00a680"
        }
    }
    );

export default createAppContainer(NavigationStacks);