import React from 'react'

const Order = ({ image, name, quantity, price, tax_pct }) => {
    const tax_price = (tax_pct / 100) * price
    return (
        <>
            <tr className="text-sm">
                <td className="align-middle border-gray-300 py-2"><img className="img-fluid flex-shrink-0" src={image} alt="White Blouse Armani" width="40px" height="40px"/></td>
                <td className="align-middle border-gray-300 py-2"><a href="#">{ name }</a></td>
                <td className="align-middle border-gray-300 py-2">{ quantity }</td>
                <td className="align-middle border-gray-300 py-2">{ price }</td>
                <td className="align-middle border-gray-300 py-2">{ tax_price }</td>
                <td className="align-middle border-gray-300 py-2">{ (quantity * price) + tax_price }</td>
            </tr>
        </>
    )
}

export default Order
