import React from 'react'
import { Link } from 'react-router-dom'
import '../components/styles/AddButton.css'

const AddButton = () => 
    <Link to="/exercise/new">
        <img src={require('../images/add.png')} alt="" className="Fitness-Add" />
    </Link>


export default AddButton