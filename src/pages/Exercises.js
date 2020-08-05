import React from 'react'
import Card from '../components/Card'
import Welcome from '../components/Welcome'

class Exercises extends React.Component {

    render() {
        return (
            <div>
                <Welcome username="Ernesto"
                />
                <Card
                    title="Techniques Guides"
                    description="Learn Amazing streap workout and calishtecnics"
                    leftColor="#A74CF2"
                    rightColor="#617BFB "
                />
            </div>
        )
    }

}

export default Exercises