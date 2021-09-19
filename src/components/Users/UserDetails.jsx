import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from '../../images/avatar3.jpg'

const UserDetails = () => {
    return (
        <>
            <section className="py-5">
            <div className="container">
            <div className="card" style={{width: "18rem"}} >
                <img src={Avatar} className="card-img-top" alt="Avatar" />
                <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    <p className="card-text">
                    <div className="row mb-2">
                        <div className="col-2"><i className="fas fa-user fa-lg"></i></div>
                        <div className="col-10">Emma Adiba</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-2"><i className="fas fa-user fa-lg"></i></div>
                        <div className="col-10">Emma Adiba</div>
                    </div>
                    <div className="row mb-2">
                        <div className="col-2"><i className="fas fa-user fa-lg"></i></div>
                        <div className="col-10">Emma Adiba</div>
                    </div>
                    </p>
                    <Link to="/orders" className="btn btn-primary">View Orders</Link>
                </div>
            </div>
            </div>
            </section>
        </>
    )
}

export default UserDetails
