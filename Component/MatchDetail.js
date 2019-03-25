import React, {Component} from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'
import { connect } from 'react-redux'
import {PagerTabIndicator, IndicatorViewPager} from "rn-viewpager"
// Import Perso
import { logoTeam } from '../Function/logoTeam'
import { scoreTeam } from '../Function/scoreTeam'
  

class MatchDetail extends Component {
  _renderTabIndicator() {
    let tabs = [
      {
        text: 'Domicile',
      },
      {
        text: 'Extérieur',
      },
    ];
    return <PagerTabIndicator tabs={tabs} itemStyle={{height:20}} />;
  }
    render () {
        const arrayMatchDetail = []
        const teamHome         = []
        const teamAway         = []

        this.props.Match.map(item => {
           if (item.match_id === this.props.navigation.state.params.matchID) {
              arrayMatchDetail.push(item)

              if (item.lineup.home) 
                  teamHome.push(item.lineup.home)

              if (item.lineup.away) 
                  teamAway.push(item.lineup.away)

              if (arrayMatchDetail[0].lineup === 'undefined')
                  delete arrayMatchDetail[0].lineup
              }
        })
        
         //console.log(teamHome)
         //console.log('------')
         //console.log(teamAway);
         //console.log('------')
         //console.log(arrayMatchDetail);
        
    return (
        <View style={{flex: 1}}>
            {arrayMatchDetail.map(match => (
              <View key={match.match_id} style={styles.team}>
                <View style={{flexDirection: 'column'}}>
                  <Image
                    style={styles.imageTeam}
                    source={{ uri: logoTeam(match.match_hometeam_name)}}
                  /> 
                  <Text style={{textAlign:'center', fontWeight:'500', fontSize:18, marginTop:5}}>{match.match_hometeam_name}</Text>
                </View>      
                <Text style={styles.score}>{scoreTeam(match.match_hometeam_score,match.match_awayteam_score)}</Text>
                <View style={{flexDirection: 'column' }}>
                  <Image
                    style={styles.imageTeam}
                    source={{ uri: logoTeam(match.match_awayteam_name)}}
                  /> 
                  <Text style={{textAlign:'center', fontWeight:'500', fontSize:18, marginTop:5}}>{match.match_awayteam_name}</Text>
               </View>
              </View>
            ))}

          <Text style={{textAlign:'center', fontSize:20, fontWeight:'600', margin: 10}}>Composition d'équipe</Text>
          <IndicatorViewPager
            style={{ flex: 1,  backgroundColor: '#fff', }}
            indicator={this._renderTabIndicator()}
          >
          <View>
            {teamHome.map(team => ( 
              team.starting_lineups.map(player => (<Text key={player.lineup_position} style={{textAlign:'center'}}>{player.lineup_player}</Text>))
            ))}
          </View>
          <View>
            {teamAway.map(team => ( 
              team.starting_lineups.map(player => (<Text key={player.lineup_position} style={{textAlign:'center'}}>{player.lineup_player}</Text>))
            ))}
          </View>
        </IndicatorViewPager>
        </View>
    )}
}


const styles = StyleSheet.create({
  team:{
    flexDirection: 'row',
    justifyContent:'space-around',
    
  },
  imageTeam:{
    width: 70, 
    height:70, 
    marginTop: 20,
    justifyContent:'center',
    alignItems:'center'
  },
  score:{
    textAlign:'center',
    fontWeight: '800',
    fontSize: 40,
    marginTop: 40
  }
})


  // Mappe le state 
  const mapStateToProps = (state) =>{ 
    return {
      // Dans le Return on précise quelle donnée du state global on a besoin 
      Match: state.Match
    }
  }
  // Connecte le State au component MatchDetail
  export default connect(mapStateToProps)(MatchDetail)
  