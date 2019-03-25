import React, {Component } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { connect } from 'react-redux'

// import Perso + Component
import {WeekEndMatch} from '../API/API_Football'
import MatchItem from './MatchItem'

class ListMatch extends Component {

    componentDidMount(){
      WeekEndMatch("2019-03-11", "2019-03-18")
      // Une fois les data reçu création de l'action FETCH_MATCH, la fonction DISPATCH envoie l'action au REDUCER 
      .then(data => {action ={type:'GET_MATCH', value: data}, this.props.dispatch(action)}) 
      /* 
      LIGUE 1, () => fetch(`https://apifootball.com/api/?action=get_events&from=2019-03-08&to=2019-03-11&league_id=127&APIkey=XXX`)
      .then(response => response.json()).then(data=>{action = {type:'ADD_LIGUE1', value: data}, this.props.dispatch(action)))) 
      */
      //this.refreshLive()
    }

    
    /* REFRESH LIVE 
    refreshLive() {
      setInterval(() => {
        WeekEndMatch("2019-03-08", "2019-03-11").then(data => {action ={type:'GET_MATCH', value: data}, this.props.dispatch(action)})
        console.log('refresh score');
      }, 10000);
    }*/

    displayMatchDetail = (match) =>{
      this.props.navigation.navigate('MatchDetail', {matchID: match}  )
    }

  render() {
    return (
     <View style={styles.container}>
         <FlatList
             data={this.props.Match}// this.props.Match ce trouve dans le state redux
            keyExtractor={item => item.match_id.toString()}
            renderItem={
                ({item}) => <MatchItem match={item} displayMatchDetail={this.displayMatchDetail} />
            }
         />
     </View>
    )
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFFFEA'
    },

  });
 
  // Connecte le State Redux au Props de la vue List Match.
  const mapStateToProps = (state) =>{ 
    return {
      // Dans le Return on précise quelle donnée du state global on a besoin 
      Match: state.Match
    }
  }
  export default connect(mapStateToProps)(ListMatch)
  