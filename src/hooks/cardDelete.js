import { useState, useEffect } from 'react'


const cardDelete = (url) => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const handleDelete = async e => {
            setLoading(true)
            e.preventDefault()
            try {
                await fetch(`${url}exercises/` + this.props.id)
                setLoading(false)
                window.location.reload()
            } catch (error) {
                setLoading(false)
                setError(error)
            }
        }
        handleDelete()
    }, [url])

    return { loading, error }
}


export default cardDelete
