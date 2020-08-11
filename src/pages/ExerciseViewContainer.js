import React, { useState } from 'react'
import Loading from '../components/Loading'
import FatalError from './500'
import ExerciseView from './ExerciseView'
import url from '../config'
import { useParams } from 'react-router'
import useFetch from '../hooks/useFetch'

const ExercisesViewContainer = ({ history }) => {
    const { id } = useParams()
    let { data, loading, error } = useFetch(`${url}/exercises/${id}`)
    let [form, setForm] = useState({
        title: '',
        description: '',
        img: '',
        leftColor: '',
        rightColor: ''
    })

    const handleChange = e => {
        setForm({
            ...form,
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
                body: JSON.stringify(form)
            }
            await fetch(`${url}/exercises/update/${id}`, config)
            loading = false
            history.push('/exercise')
            console.log('updated')
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
                form={form}
                onChange={handleChange}
                onSubmit={handleSubmit}
                editing={true}
            />
        </div>
    )
}

export default ExercisesViewContainer
