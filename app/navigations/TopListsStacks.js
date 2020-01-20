import { createStackNavigator} from 'react-navigation-stack';
import TopSitesScreen from '../screens/TopSites';

const TopListStacks = createStackNavigator({
    TopRestaurants: {
        screen: TopSitesScreen,
        navigationOptions: () => ({
            title: "Los mejores sitios"
        })
    }
})

export default TopListStacks;