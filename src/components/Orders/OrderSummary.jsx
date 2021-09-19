/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import moment from 'moment'

import Order from './Order/Order'
import { order_details } from '../../actions/orders'
import burgerCheese from '../../images/burger-cheese.jpg'
import burgeChicken from '../../images/burger-chicken.jpg'

const OrderSummary = ({ order, order_details }) => {

  const product_images = [ burgerCheese, burgeChicken, burgerCheese, burgeChicken ]

  useEffect(() => {
    order_details()
  }, [order_details])
console.log(order);
const prices = order?.items?.map( item => item.price)
const subTotal = prices?.reduce(( prevValue, currentValue) => currentValue + prevValue)
console.log(subTotal);
    return (
        <div>
      <section className="py-5">
        <div className="container">
          <div className="p-4 bg-gray-200">
            <p className="lead mb-4">Order <span className="">{ order?.order_id }</span> was placed on <strong>{ moment(order?.createdAt).format("dddd, MMMM Do YYYY h:mm:ss a") }</strong> and is currently <strong>being prepared</strong>.</p>
          </div>
          <div className="row gy-5">
          <div className="col-lg-5">
          <div className="row">
  <div className="col-lg-12 col-sm-6 pb-4">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Ordered by: <Link to={`/users/${order?.user?.id}`}>{ order?.user?.name }</Link></h5>
        <p className="card-text"><i className="fas fa-phone fa-lg px-2" aria-hidden="true"></i>{ order?.user?.phone }</p>
        <p className="card-text"><i className="fas fa-map-marker-alt fa-lg px-2" aria-hidden="true"></i><span className="text-sm">{ order?.user?.address }</span></p>
      </div>
    </div>
  </div>
  <div className="col-lg-12 col-sm-6">
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Restaurant: { order?.restaurant?.name }</h5>
        <p className="card-text"><i className="fas fa-location-arrow fa-lg px-2" aria-hidden="true"></i>{ order?.restaurant?.street }, {order?.restaurant?.state }</p>
        <p className="card-text"><i className="fas fa-globe-africa fa-lg px-2" aria-hidden="true"></i>{ order?.restaurant?.city }, { order?.restaurant?.zipcode}</p>
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
                      order?.items?.map( (item,index) => (
                          <Order
                            key={index}
                            image={ product_images[index] } 
                            name={item.name} 
                            category={item.category}
                            price={item.price}
                            quantity={item.quantity}
                            tax_pct={item.tax_pct}
                        />
                      ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="text-end lead py-3" colSpan="5">Order subtotal</th>
                      <th className="lead py-3"><i className={`fas fa-rupee-sign`}></i> { subTotal }</th>
                    </tr>
                    <tr>
                      <th className="text-end lead py-3" colSpan="5">Tax</th>
                      <th className="lead py-3"><i className={`fas fa-rupee-sign`}></i> 0.00</th>
                    </tr>
                    <tr>
                      <th className="text-end lead py-3" colSpan="5">Total</th>
                      <th className="lead py-3"><i className={`fas fa-rupee-sign`}></i> {}</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}

const mapStateToProps = (state) => {
  return { order: state.order}
}
export default connect(mapStateToProps, { order_details })(OrderSummary)
