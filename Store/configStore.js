import {createStore} from 'redux'
import getMatch from './Reducers/getMatchReducer'

export default createStore(getMatch)