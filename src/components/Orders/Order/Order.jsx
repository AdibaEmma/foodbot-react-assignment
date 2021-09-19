import React from 'react'

const Order = ({ image }) => {
    return (
        <>
            <tr className="text-sm">
                <td className="align-middle border-gray-300 py-3"><img className="img-fluid flex-shrink-0" src={image} alt="White Blouse Armani" width="40px" height="40px"/></td>
                <td className="align-middle border-gray-300 py-3"><a href="#">Chilli pepper</a></td>
                <td className="align-middle border-gray-300 py-3">2</td>
                <td className="align-middle border-gray-300 py-3">$123.00</td>
                <td className="align-middle border-gray-300 py-3">$0.00</td>
                <td className="align-middle border-gray-300 py-3">$246.00</td>
            </tr>
        </>
    )
}

export default Order
