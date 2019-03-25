import {createStackNavigator , createAppContainer} from 'react-navigation'
import ListMatch from '../Component/ListMatch'
import MatchDetail from '../Component/MatchDetail'

// Création du StackNavigator
const AppNavigator = createStackNavigator({
    ListMatch: {
        screen: ListMatch,
        navigationOptions:{
            title:"Football Ligue 2"
        }
    },
    MatchDetail:{
        screen: MatchDetail
    }
})

export default createAppContainer(AppNavigator) 