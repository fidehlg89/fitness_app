import React from 'react'
import ExerciseForm from '../components/ExerciseForm'
import Card from '../components/Card'

const ExerciseNew = ({form, onChange, onSubmit, editing}) => (
    <div className="ExerciseNew_Lateral_Spaces row">
        <div className="col-sm ExerciseNew_Card_Space">
            <Card 
                {...form}                
                editing={editing}
            />
        </div>
        <div className="col-sm ExerciseNew_Form_Space">
            <ExerciseForm
                onChange={onChange}
                onSubmit={onSubmit}
                form={form}
                editing={editing}
            />            
        </div>
    </div>
)

export default ExerciseNew