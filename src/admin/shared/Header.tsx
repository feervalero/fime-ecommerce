import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <div>
            <ul>
                <Link to="/">Home</Link>
                <Link to="/settings">Settings</Link>
            </ul>
        </div>
    )
}
