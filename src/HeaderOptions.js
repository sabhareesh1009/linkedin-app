import { Avatar } from '@material-ui/core'
import React from 'react'
import "./HeaderOptions.css"
function HeaderOptions({avatar, Icon, title}) {
    return (
        <div className="headerOptions">
            {Icon && <Icon className="headerOptions__icon" />}
            {avatar && <Avatar className="headerOptions__avatar" />}
            <h3 className="headerOptions__title">{title}</h3>
        </div>
    )
}

export default HeaderOptions
