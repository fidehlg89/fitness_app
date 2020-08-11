import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import ExercisesContainer from '../pages/ExercisesContainer'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import ExerciseViewContainer from '../pages/ExerciseViewContainer'
import NotFound from '../pages/404'
import HomePage from '../pages/HomePage'

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/exercise" component={ExercisesContainer} />
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route exact path="/exercise/edit/:id" component={ExerciseViewContainer} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App