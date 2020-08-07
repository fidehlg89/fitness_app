import React from 'react'
import ExerciseNew from './ExerciseNew'

class ExerciseNewContainer extends React.Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: '',
        },
        loading: false,
        error: null
    }

    handleSubmit = async e => {
        this.setState = ({
            loading: true,
        })
        e.preventDefault()
        
        try {
            let config = {
                method: 'POST',
                headers: {
                    'Accept': 'Application/json',
                    'Content-Type': 'Application/json'
                },
                body: JSON.stringify(this.state.form)
            }
            await fetch('http://localhost:8000/api/exercises', config)
            
            this.setState = ({
                loading: false,
            })

            this.props.history.push("/exercise")
        } catch (error) {
            this.setState = ({
                loading: false,
                error
            })
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
            <ExerciseNew
                form={this.state.form}
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
            />
        )
    }
}

export default ExerciseNewContainer