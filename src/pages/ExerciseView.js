import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

class ExerciseView extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: '',
        }
    }

    handleSubmit = async e => {
        e.preventDefault()
        try {
            await fetch('http://localhost:8000/api/exercises/1')
            this.setState = ({
                loading: false,
            })
        } catch (error) {

        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <React.Fragment>
                <Card {...this.state.form} />
                <ExerciseForm
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    form={this.state.form}
                />
            </React.Fragment>
        )
    }


}

export default ExerciseView