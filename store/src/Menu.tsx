import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/config">Config</Link>
            </nav>
        </div>
    )
}
