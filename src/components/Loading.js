import React from 'react'
import loading from '../assets/movie.png'
const Loading = () => {
    return (
        <section className="loading-section">
                <div className="loading-image">
                    <img src={loading} alt="loading image"/>
                </div>
        </section>
    )
}

export default Loading
