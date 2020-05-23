import { createStackNavigator } from "react-navigation-stack";
import SearchScreen from "../screens/Search";

const SearchScreenStacks = createStackNavigator({
  Restaurants: {
    screen: SearchScreen,
    navigationOptions: () => ({
      title: "¿A donde quieres ir hoy?"
    })
  }
});

export default SearchScreenStacks;
