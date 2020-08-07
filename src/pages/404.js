import React from 'react'

const NotFound = () =>
    <div className="text-center">
        <h1 className="Error-Text">Error: 404 Page Not Found</h1>
        <img src={require('../images/404.png')} alt="404 NotFound" className="Error_Image"/>        
    </div>

export default NotFound