import axios from "axios";
const BASE_URL = "http://api.football-data.org/v2/competitions";
const API_TOKEN =
    "7c2e877f828d407891fd9ed1a0b1cd01";

export const soccerService = {
    queryLeagues,
    queryTeams,
};

async function queryLeagues() {
    const leagues = [2000, 2001, 2002, 2003, 2013].map(id => {
        const league = axios({
            method: 'GET',
            url: `${BASE_URL}/${id}`,
            headers: { 'X-Auth-Token': API_TOKEN },

        });
        return league
    })

    console.log(leagues);
    const leaguesDetails = await Promise.all(leagues)
    console.log(leaguesDetails);
    return leaguesDetails.map((league) => {

        const { id, name } = league.data;

        return {
            id,
            name
        };
    });
}

async function queryTeams(id) {
    const data = await axios({
        method: 'GET',
        url: `${BASE_URL}/${id}/teams`,
        headers: { 'X-Auth-Token': API_TOKEN },

    });
    console.log(data);
    return data.data.teams.map(team => {
        const { id, name, crestUrl } = team
        return {
            id,
            name,
            crestUrl
        }
    });
}