import { createStackNavigator} from 'react-navigation-stack';
import SitesScreen from '../screens/Sites';

const SitesScreenStacks = createStackNavigator({
    Sites: {
        screen: SitesScreen,
        navigationOptions: () => ({
            title: "Sitios"
        })
    }
});

export default SitesScreenStacks;
