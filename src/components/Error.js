import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
    return (
        <section className="error-section">
                <h2>Whoooops... Wrong way</h2>
            <Link className="btn-error" to="/">Back to Movies List</Link>
        </section>
    )
}

export default Error
