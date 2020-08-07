import React from 'react'
import Card from '../components/Card'


const ExcerciseList = ({exercises}) => (
    <div>
        {
            exercises.map((excercise) => {
                return (
                    <React.Fragment key={excercise.id} >                        
                        <Card
                            id={excercise.id} 
                            title={excercise.title}
                            description={excercise.description}
                            img={excercise.img}
                            leftColor={excercise.leftColor}
                            rightColor={excercise.rightColor}
                        />
                    </React.Fragment>
                )
            })
        }
    </div>
)
export default ExcerciseList
