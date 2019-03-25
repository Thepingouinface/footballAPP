const tokenAPI = 'XXX'

export function WeekEndMatch(date1, date2) {
    const url = `https://apifootball.com/api/?action=get_events&from=${date1}&to=${date2}&league_id=128&APIkey=${tokenAPI}`
    return fetch(url)
            .then(response => response.json())
            .catch(error => console.log(error)) 
}

/*
_loadingMatch = () => {
    const url = 'https://apifootball.com/api/?action=get_events&from=2019-03-02&to=2019-03-04&league_id=128&APIkey=XXX'
    return fetch(url)
    .then(response => response.json())
    .then(data => this.setState({Match: data}))
    .catch(error => console.log(error))
}
*/