import React, { useState, useEffect } from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import ExerciseView from './ExerciseView'
import url from '../config'
import { useParams } from 'react-router'

const ExercisesViewContainer = ({ history }) => {
    const { id } = useParams();
    const [data, setData] = useState([])
    let [loading, setLoading] = useState(true)
    let [error, setError] = useState(null)

    useEffect(() => {
        const fetchResource = async (id) => {
            try {
                let res = await fetch(`${url}/exercises/${id}`);
                let data = await res.json();
                console.log(data.exercise)
                setData(data.exercise);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                setError(error);
            }
        }
        fetchResource(id)
    }, [id])

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async e => {
        loading = true
        e.preventDefault()
        try {
            let config = {
                method: 'PUT',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    "title": data.title,
                    "description": data.description,
                    "img": data.img,
                    "leftColor": data.leftColor,
                    "rightColor": data.rightColor
                })
            }
            await fetch(`${url}/exercises/${id}`, config)
            loading = false
            history.push('/exercise')
            console.log(data)
        } catch (error) {
            loading = false
        }
    }

    if (loading)
        return <Loading />

    if (error)
        return <FatalError />

    return (
        <div className="container">
            <ExerciseView
                form={data}
                onChange={handleChange}
                onSubmit={handleSubmit}
                editing={true}
            />
        </div>
    )
}

export default ExercisesViewContainer
