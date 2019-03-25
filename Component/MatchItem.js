import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import moment from 'moment'
import 'moment/locale/fr'
import { logoTeam } from '../Function/logoTeam'
import { scoreTeam } from '../Function/scoreTeam'

export default class MatchItem extends Component {

    render() {

        moment.locale('fr')
        const hourFR = moment(`${this.props.match.match_date} ${this.props.match.match_time}`).add(1, 'hours').calendar()
        const invalidDate = 'Reporté';

    return (
        <TouchableOpacity style={styles.main_container} onPress={()=> this.props.displayMatchDetail(this.props.match.match_id)} >
            <Image 
            style={styles.imageLigue2}
            source={require('../assets/Logo.png')} />
            <View style={styles.match_container} > 
                <View style={styles.team}>
                    <Text>{this.props.match.country_name}: {this.props.match.league_name}</Text>
                    <Text style={{ marginTop:5 }}>{this.props.match.match_hometeam_name} contre {this.props.match.match_awayteam_name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent:'space-around' }}>
                         <Image
                            style={styles.imageTeam}
                            source={{ uri: logoTeam(this.props.match.match_hometeam_name) }}
                         /> 
                       <Text style={styles.score}>{scoreTeam(this.props.match.match_hometeam_score,this.props.match.match_awayteam_score)}</Text>
                        <Image
                            style={styles.imageTeam}
                            source={{ uri: logoTeam(this.props.match.match_awayteam_name) }}
                         /> 
                    </View>
                </View>
                {this.props.match.match_status === "FT" ? <Text style={styles.finalTime}>TERMINÉ</Text> : null }
                <View style={{ flexDirection:'row', justifyContent:'center', fontWeight: '800', marginBottom:10 }}>
                    <Text>{hourFR === 'Invalid date' ? invalidDate : hourFR}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    main_container:{
        flex: 1,
        flexDirection: 'row',
        marginTop: 10,
        backgroundColor: '#E9E9EF'
    },
    match_container: {
        flex:1,
        flexDirection:'column',
        justifyContent:'space-around',
    },
    imageLigue2:{
        width:110,
        height: 150,
    },
    imageTeam:{
        width: 50, 
        height:50, 
        marginTop: 20
    }
    ,
    team:{
        flex:1,
        flexDirection: 'column',
        justifyContent:'flex-start',
        flexWrap: 'wrap',
        
    },
    score:{
        textAlign:'center',
        fontWeight: '800',
        fontSize: 40,
        marginTop: 20
    },
    finalTime:{
        textAlign:'center',
        fontWeight: '700',
        marginBottom: 3
    }
})