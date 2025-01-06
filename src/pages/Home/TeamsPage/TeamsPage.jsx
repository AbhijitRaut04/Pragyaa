import React from 'react'
import profiles from '../../../components/ProfileCard/data'
import ProfileCard from '../../../components/ProfileCard/ProfileCard'
import './TeamsPage.css'

export const TeamsPage = ({title}) => {
    return (
        <div className="profiles">
            <h2 className="title" >{title}</h2>
            <div>
            {
                profiles.map(user => (
                    <ProfileCard user={user} />
                ))
            }
            </div>
        </div>
    )
}
