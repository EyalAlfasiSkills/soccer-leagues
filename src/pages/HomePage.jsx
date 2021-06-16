import React, { useEffect, useState } from "react";
import { Tabs } from "../components/Tabs";
import { TeamsList } from "../components/TeamsList";
import { soccerService } from "../services/soccerService";

export const HomePage = () => {
  const [leagues, setleagues] = useState(null);
  const [currentLeague, setCurrentLeague] = useState(null);

  const initializeLeagues = async () => {
    const leagues = await soccerService.query();
    setleagues(leagues)
  };

  useEffect(() => {
    initializeLeagues();
  }, []);

  return (
    <div className="home-page-wrapper">
      <Tabs leagues={leagues} />
      <TeamsList leagues={leagues} />
    </div>
  );
};
