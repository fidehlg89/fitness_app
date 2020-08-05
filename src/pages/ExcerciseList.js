import React from 'react'
import Card from '../components/Card'

const ExcerciseList = ({exercises}) => (
    <div>
        {
            exercises.map((excercise) => {
                return (
                    <div>
                        <Card
                            key={excercise.id}
                            title={excercise.title}
                            description={excercise.description}
                            img={excercise.img}
                            leftColor={excercise.leftColor}
                            rightColor={excercise.rightColor}
                        />
                    </div>
                )
            })
        }
    </div>
)
export default ExcerciseList
