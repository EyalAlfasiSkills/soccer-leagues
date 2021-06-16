import React from "react";

export const Tabs = ({ leagues, onPickLeague, currentCountryId }) => {

    return (
        <div className="tabs-wrapper flex justify-center align-center">
            <ul className="flex justify-center">
                {leagues &&
                    leagues.map((league) => {
                        return (
                            <li
                                key={league.id}
                                onClick={() => onPickLeague(league.id)}
                                className={`tab ${league.id === currentCountryId ? 'active' : ''}`}
                            >
                                {league.name}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};
