import React from 'react'
import { Link } from 'react-router-dom'

const Orders = ({ order }) => {
    return (
        <div className="table-responsive">
            <table class="table table-hover">
                <thead>
                    <tr>
                        <th scope="col">Order No.</th>
                        <th scope="col">Items</th>
                        <th scope="col">Date</th>
                    </tr>
                </thead>
                <tbody>
                    {
                            <tr>
                                <td><Link to='/'>{ order?.order_id }</Link></td>
                                <td colSpan="5">{order?.items?.map( item => `${item}, `) }</td>
                                <td>Date</td>
                            </tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Orders
