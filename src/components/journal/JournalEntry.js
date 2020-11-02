import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">
            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(data:image/png;base64,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)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    un nuevo dia
                </p>
                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, esse!
                </p>
            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>
        </div>
    )
}
