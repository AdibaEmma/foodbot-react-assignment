import React from 'react'
import {Modal, Button} from 'react-bootstrap';

import Order from '../Orders/Order/Order';
import burgerCheese from '../../images/burger-cheese.jpg'
import burgeChicken from '../../images/burger-chicken.jpg'
import chickenManchurian from '../../images/chicken-manchurian.jpg'
import chilliPepper from '../../images/chilli-pepper.jpg'

const OrderModal = ({ order, show, handleClose }) => {
    const product_images = [ burgerCheese, burgeChicken, chilliPepper, chickenManchurian ]

    const prices = order?.items?.map( item => item.price)
    const subTotal = prices?.reduce(( prevValue, currentValue) => currentValue + prevValue)
    const taxPrices = order?.items?.map( item => item.price * (item.tax_pct / 100) )
    const tax = taxPrices?.reduce(( prevValue, currentValue) => currentValue + prevValue)

    return (
        <>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                <Modal.Title>Order Items</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <div className="table-responsive">
                    <table className="table text-nowrap">
                        <thead>
                            <tr className="text-sm">
                                <th className="border-gray-300 border-top py-3" colSpan="2">Product</th>
                                <th className="border-gray-300 border-top py-3">Quantity</th>
                                <th className="border-gray-300 border-top py-3">Price <i className={`fas fa-rupee-sign`}></i></th>
                                <th className="border-gray-300 border-top py-3">Tax <i className={`fas fa-rupee-sign`}></i></th>
                                <th className="border-gray-300 border-top py-3">Total <i className={`fas fa-rupee-sign`}></i></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                            order?.items?.map( (item,index) => 
                                <Order
                                    key={index}
                                    image={ product_images[index] } 
                                    name={item.name} 
                                    category={item.category}
                                    price={item.price}
                                    quantity={item.quantity}
                                    tax_pct={item.tax_pct}
                                />
                            )
                            }
                            </tbody>
                        <tfoot>
                            <tr>
                                <th className="text-end lead py-3" colSpan="5">Order subtotal</th>
                                <th className="lead py-3"><i className={`fas fa-rupee-sign`}></i> { subTotal }</th>
                            </tr>
                            <tr>
                                <th className="text-end lead py-3" colSpan="5">Tax</th>
                                <th className="lead py-3"><i className={`fas fa-rupee-sign`}></i> {tax}</th>
                            </tr>
                            <tr>
                                <th className="text-end lead py-3" colSpan="5">Total</th>
                                <th className="lead py-3"><i className={`fas fa-rupee-sign`}></i> {subTotal + tax }</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                </Modal.Body>
                <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                Close
                </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default OrderModal
