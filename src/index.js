import React from 'react';
import ReactDOM from 'react-dom'
import Card from './components/Card'
import Welcome from './components/Welcome'
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById('root');
ReactDOM.render(<div>
                    <Welcome username="Ernesto"
                    />
                    <Card
                        title="Techniques Guides"
                        description="Learn Amazing streap workout and calishtecnics"
                        leftColor="#A74CF2"
                        rightColor="#617BFB "
                    />
                </div>, container);