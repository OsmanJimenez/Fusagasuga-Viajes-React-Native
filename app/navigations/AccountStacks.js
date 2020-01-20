import { createStackNavigator} from 'react-navigation-stack';
import AccountScreen from '../screens/Account/MyAccount';
import LoginScreen from '../screens/Account/Login';
import RegisterScreen from '../screens/Account/Register';


const AccountStacks = createStackNavigator({
    Account: {
        screen: AccountScreen,
        navigationOptions: () => ({
            title: "Mi cuenta"
        })
    },
    Login: {
        screen: LoginScreen,
        navigationOptions: () => ({
            title: "Iniciar Sesión"
        })
    },
    Register:{
        screen: RegisterScreen,
        navigationOptions: () => ({
            title: "Registro"
        })
    }
});

export default AccountStacks;