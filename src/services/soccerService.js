import axios from "axios";
const BASE_URL = "https://api.football-data.org/v2/competitions";
const API_TOKEN =
    "7c2e877f828d407891fd9ed1a0b1cd01";

export const soccerService = {
    queryLeagues,
    queryTeams,
};

async function queryLeagues() {
    try {
        const leagues = [2000, 2001, 2002, 2003, 2013].map(id => {
            const league = axios({
                method: 'GET',
                url: `${BASE_URL}/${id}`,
                headers: { 'X-Auth-Token': API_TOKEN },

            });
            return league
        })

        const leaguesDetails = await Promise.all(leagues)
        return leaguesDetails.map((league) => {

            const { id, name } = league.data;

            return {
                id,
                name
            };
        });
    } catch (err) {
        throw new Error('Failed to fetch leagues', err)
    }
}

async function queryTeams(id) {
    try {
        const data = await axios({
            method: 'GET',
            url: `${BASE_URL}/${id}/teams`,
            headers: { 'X-Auth-Token': API_TOKEN },

        });
        return data.data.teams.map(team => {
            const { id, name, crestUrl } = team
            return {
                id,
                name,
                crestUrl
            }
        });
    } catch (err) {
        throw new Error('Failed to fetch teams', err)
    }
}