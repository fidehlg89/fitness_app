import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Exercises from '../pages/Exercises'
import ExerciseNewContainer from '../pages/ExerciseNewContainer'
import ExerciseView from '../pages/ExerciseView'
import NotFound from '../pages/404'
import Landing from '../pages/Landing'


const App = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Landing} />
            <Route exact path="/exercise" component={Exercises} />
            <Route exact path="/exercise/new" component={ExerciseNewContainer} />
            <Route exact path="/exercise/edit/:id" component={ExerciseView} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>

export default App