import React from 'react'

export const TeamPreview = ({ team }) => {

    return (
        <div className="team-preview-wrapper">
            <div className="crest-container ">
                <img
                    src={team.crestUrl ? team.crestUrl : 'https://image.flaticon.com/icons/png/512/189/189665.png'}
                    alt="team crest image"
                />
            </div>
            <div className="content">
                <h3 className="team-name">{team.name}</h3>
            </div>
        </div>
    )
}
