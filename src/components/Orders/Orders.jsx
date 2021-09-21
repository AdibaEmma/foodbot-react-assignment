import React from 'react'
import { Link } from 'react-router-dom'

const Orders = ({ order }) => {
    return (
        <div className="table-responsive">
        <h4 className="header mb-2">My Orders</h4>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col" colSpan="5">Items</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            <tr>
                                <td><Link to='/'>{ order?.order_id }</Link></td>
                                <td colSpan="5">{order?.items?.map( item => `${item.name}, `) }</td>
                                <td>{ order?.createdAt}</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Orders
