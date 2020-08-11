import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

const HomePage = () => (
    <div className="landing-page">
        <div className="jumbotron" align="center">
            <h1>Hello folks!</h1>
            <p className="lead">Welcome to Fitness APP</p>
            <p>
                <Link to='/exercise' className="btn btn-primary btn-lg">
                    Exercises
                </Link>
            </p>
        </div>
    </div>
)

export default HomePage 