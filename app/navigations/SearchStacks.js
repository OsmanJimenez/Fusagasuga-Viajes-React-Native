import { createStackNavigator} from 'react-navigation-stack';
import SearchScreen from '../screens/Search';

const SearchtStacks = createStackNavigator({
    Search: {
        screen: SearchScreen,
        navigationOptions: () => ({
            title: "¿A donde quieres ir hoy?"
        })
    }
})

export default SearchtStacks;