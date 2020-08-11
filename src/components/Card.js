import React, { useState } from 'react'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'
import { Link } from 'react-router-dom'
import url from '../config'
import Loading from './Loading'
import FatalError from '../pages/500'

const Card = ({ id, title, description, img, leftColor, rightColor, editing }) => {

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handleDelete = async (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            let config = {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            }
            await fetch(`${url}/exercises/delete/${id}`, config)
            setLoading(false)
            window.location.reload(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }


    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    return (
        <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor || '#2F80ED'}) `
            }}
        >
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img src={img || emptyImg} className="float-right" alt="exercise" />
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                        <h1>{title}</h1>
                        <p>{description}</p>
                        {editing ? (
                            ''
                        ) : (
                                <div className="float-right">
                                    <Link to={"/exercise/edit/" + id}>
                                        <button className="btn btn-link btn-sm text-white" ><i className="fa fa-pencil"></i></button>
                                    </Link>
                                    <button className="btn btn-link btn-sm text-white" onClick={handleDelete}><i className="fa fa-trash"></i></button>
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Card