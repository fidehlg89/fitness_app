import React from 'react'
import Exercises from './Exercises'

class ExerciseNew extends React.Component {
    
    constructor(props){
        super(props)

        this.handleClick=this.handleClick.bind(this)
    }


    handleClick () {
        console.log(this)
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                Send
            </button>
        )
    }
}

export default ExerciseNew