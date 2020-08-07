import React from 'react'
import circlesImg from '../images/circles.png'
import emptyImg from '../images/empty.png'
import './styles/Card.css'
import { Link } from 'react-router-dom'

class Card extends React.Component {

    handleDelete = async (e) => {
        this.setState = ({
            loading: true,
        })
        e.preventDefault()
        try {
            await fetch('http://localhost:8000/api/exercises/delete/'+this.props.id)
            this.setState = ({
                loading: false,
            })
            window.location.reload(false)
        } catch (error) {
            this.setState = ({
                loading: false,
                error
            })
        }
    }


    render() {
        const { id, title, description, img, leftColor, rightColor } = this.props
        return (
            <div className="card mx-auto Fitness-Card"
                style={{
                    backgroundImage: `url(${circlesImg}), linear-gradient(to right, ${leftColor || '#56CCF2'}  , ${rightColor || '#2F80ED'}) `
                }}
            >
                <div className="card-body">
                    <div className="row center">
                        <div className="col-6">
                            <img src={img || emptyImg} className="float-right" alt="exercise" />
                        </div>
                        <div className="col-6 Fitness-Card-Info">
                            <h1>{title}</h1>
                            <p>{description}</p>
                            {id ? (
                                <div className="float-right">
                                    <Link to={"/exercise/edit/" + id}>
                                        <button className="btn btn-link btn-sm text-white" ><i className="fa fa-pencil"></i></button>
                                    </Link>
                                    <Link to="/exercise">
                                        <button className="btn btn-link btn-sm text-white" onClick={this.handleDelete}><i className="fa fa-trash"></i></button>
                                    </Link>
                                </div>
                            ) : ('')}

                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
export default Card