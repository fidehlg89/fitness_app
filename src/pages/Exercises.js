import React from 'react'
import Welcome from '../components/Welcome'
import ExcerciseList from './ExcerciseList'
import AddButton from '../components/AddButton'
//import data from '../db/data'

class Exercises extends React.Component {


    state = {
        data: [{
            "id": 1,
            "title": "Techniques Guides",
            "description": "Learn Amazing streap workout and calishtecnics",
            "img": require("../images/exercise.png"),
            "leftColor": "#A74CF2",
            "rightColor": "#617BFB"
        }, {
            "id": 2,
            "title": "Skills Training",
            "description": "Learn the secrets of bodyweight techniques",
            "img": require("../images/exercise.png"),
            "leftColor": "#17EAD9",
            "rightColor": "#6078EA"
        }, {
            "id": 3,
            "title": "Strength Training",
            "description": "Train anytime, everywere and become a superhero",
            "img": require("../images/exercise.png"),
            "leftColor": "#FAD961",
            "rightColor": "#F76B1C"
        }]
    }


    render() {
        return (
            <div>
                <Welcome username="Ernesto"
                />
                <ExcerciseList exercises={this.state.data}
                />
                <AddButton />

            </div>
        )
    }

}

export default Exercises