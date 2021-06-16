import axios from "axios";
const BASE_URL = "https://soccer.sportmonks.com/api/v2.0/";
const API_TOKEN =
  "Vf3JCFHiKRokt0mKlwIi7Xp5vITT5pdhjsqsurl6h7Uih8WffyfwrGCqmjGr";

export const soccerService = {
  query,
};

async function query() {
  const leagues = await axios.get(`${BASE_URL}leagues?api_token=${API_TOKEN}`);
  return leagues;
}
