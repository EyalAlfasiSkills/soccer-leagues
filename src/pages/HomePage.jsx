import React, { useEffect, useState } from "react";
import { Tabs } from "../components/Tabs";
import { TeamsList } from "../components/TeamsList";
import { soccerService } from "../services/soccerService";

export const HomePage = () => {
    const [leagues, setleagues] = useState(null);
    const [currentCountryId, setCurrentCountryId] = useState(null);
    const [teams, setTeams] = useState(null);

    const initializeLeagues = async () => {
        const leagues = await soccerService.queryLeagues();
        setleagues(leagues);
        setCurrentCountryId(leagues[0].id)
    };

    const onPickLeague = (countryId) => {
        setCurrentCountryId(countryId);
    };

    useEffect(() => {
        initializeLeagues();
    }, []);

    const fetchTeams = async () => {
        const teams = await soccerService.queryTeams(currentCountryId);
        setTeams(teams);
    };

    useEffect(() => {
        if (currentCountryId) {
            fetchTeams(currentCountryId);
        }
    }, [currentCountryId]);

    return (
        <div className="home-page-wrapper">
            <Tabs
                leagues={leagues}
                onPickLeague={onPickLeague}
                currentCountryId={currentCountryId}
            />
            <TeamsList teams={teams} />
        </div>
    );
};
