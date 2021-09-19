import React, { Fragment } from 'react'
import Welcome from '../components/Welcome'
import ExerciseList from '../components/ExerciseList'
import AddButtom from '../components/AddButton'


const Exercises = ({ data }) => {
    return (
        <Fragment>
            <Welcome
                username="Ernesto"
            />
            <ExerciseList
                exercises={data}
            />
            <AddButtom />
        </Fragment>
    )
}

export default Exercises