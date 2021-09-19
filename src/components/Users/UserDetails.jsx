import React from 'react'
import { Link } from 'react-router-dom'

import Avatar from '../../images/avatar3.jpg'

const UserDetails = ({ user }) => {
    return (
        <>
            <section className="py-5">
            <div className="container">
            <div className="card" style={{width: "18rem"}} >
                <img src={Avatar} className="card-img-top" alt="Avatar" />
                <div className="card-body">
                    <h5 className="card-title">Profile</h5>
                    <p className="card-text">
                    <div className="row py-2">
                        <div className="col-2"><i className="fas fa-user fa-lg"></i></div>
                        <div className="col-10 small">{ user.name }</div>
                    </div>
                    <div className="row py-2">
                        <div className="col-2"><i className="fas fa-phone fa-lg"></i></div>
                        <div className="col-10 small">{ user.phone }</div>
                    </div>
                    <div className="row py-2">
                        <div className="col-2"><i className="fas fa-map-pin fa-lg"></i></div>
                        <div className="col-10 small">{user.address}</div>
                    </div>
                    <div className="row py-2">
                        <div className="col-2"><i className="fas fa-info fa-lg"></i></div>
                        <div className="col-10 small">{user.about}</div>
                    </div>
                    <div className="row py-2">
                        <div className="col-2"><i className="fas fa-heart fa-lg"></i></div>
                        <div className="col-10 small">{user.likes}</div>
                    </div>
                    <div className="row py-2">
                        <div className="col-2"><i className="fas fa-heart-broken fa-lg"></i></div>
                        <div className="col-10 small">{user.dislikes}</div>
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
