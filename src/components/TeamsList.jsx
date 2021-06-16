import React from 'react'
import { TeamPreview } from './TeamPreview'

export const TeamsList = ({ teams }) => {
    
    return (
        <div className="teams-list-wrapper">
            {teams && teams.map(team => {
                return <TeamPreview key={team.id} team={team} />
            })}
        </div>
    )
}
