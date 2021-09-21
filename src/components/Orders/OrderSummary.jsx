/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Order from './Order/Order'
import OrderModal from '../Modal/OrderModal'
import burgerCheese from '../../images/burger-cheese.jpg'
import burgeChicken from '../../images/burger-chicken.jpg'
import chickenManchurian from '../../images/chicken-manchurian.jpg'
import chilliPepper from '../../images/chilli-pepper.jpg'


const OrderSummary = ({ order }) => {
  const product_images = [ burgerCheese, burgeChicken, chilliPepper, chickenManchurian ]

  const prices = order?.items?.map( item => item.price)
  const subTotal = prices?.reduce(( prevValue, currentValue) => currentValue + prevValue)
  const taxPrices = order?.items?.map( item => item.price * (item.tax_pct / 100) )
  const tax = taxPrices?.reduce(( prevValue, currentValue) => currentValue + prevValue)

  const [isOpen, setIsOpen ] = useState(false)
  const handleClose = () => setIsOpen(false);

    return (
        <>
      <section className="py-5">
        <div className="container">
          <div className="p-4 bg-gray-200">
          <Link to={`/users/${order?.user?.id}`}><i className="fas fa-arrow-left fa-2x mb-4"></i></Link>
          <p className="lead mb-4"> Order <span className="">{ order?.order_id }</span> was placed on <strong>{ moment(order?.createdAt).format("dddd, MMMM Do YYYY h:mm:ss a") }</strong> and is currently <strong>being prepared</strong>.</p>
          </div>
          <div className="row gy-5">
          <div className="col-lg-5">
          <div className="row">
  <div className="col-lg-12 col-sm-6 pb-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Ordered by:</h5>
        <div className="card-text">
        <div className="row">
            <div className="col-2"><i className="fas fa-user fa-lg"></i></div>
            <div className="col-10"><Link to={`/users/${order?.user?.id}`}>{ order?.user?.name }</Link></div>
          </div>
        </div>
        <div className="card-text">
        <div className="row">
            <div className="col-2"><i className="fas fa-phone fa-lg"></i></div>
            <div className="col-10">{ order?.user?.phone }</div>
          </div>
        </div>
        <div className="card-text">
          <div className="row">
            <div className="col-2"><i className="fas fa-map-marker-alt fa-lg"></i></div>
            <div className="col-10">{ order?.user?.address }</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="col-lg-12 col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{ order?.restaurant?.name }</h5>
        <div className="card-text">
          <div className="row">
            <div className="col-2"><i className="fas fa-location-arrow fa-lg px-2" aria-hidden="true"></i></div>
            <div className="col-10">{ order?.restaurant?.street }, {order?.restaurant?.state }</div>
          </div>
          </div>
        <div className="card-text">
          <div className="row">
              <div className="col-2"><i className="fas fa-globe-africa fa-lg px-2" aria-hidden="true"></i></div>
              <div className="col-10">{ order?.restaurant?.city }, { order?.restaurant?.zipcode}</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</div>
            </div>
            <div className="col-lg-7">
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
                      /*
                        If order items length is greater than 5 than the else part of the tenary is executed, a button becomes
                        avialable and when clicked the order items are viewed in a modal.
                      */
                      order?.items?.length < 5 ? // this checks for if the order items length exceeds a threshold: 5
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

                      ) :
                      <tr><td className="text-center" colSpan="7"><button className="btn btn-primary" onClick={ () => setIsOpen(true)}>View all items in your order</button></td></tr>
                    }
                    { isOpen && <OrderModal order={order} show={isOpen} handleClose={handleClose} /> }
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
            </div>
          </div>
        </div>
      </section>
      </>
    )
}

export default OrderSummary
