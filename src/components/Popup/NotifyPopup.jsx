import React from 'react'

import './NotifyPopup.css'
function NotifyPopup({ content }) {
    return (
        <div className="NotifyPopup">
            <p>{content}</p>
        </div>
    )
}

export default NotifyPopup
