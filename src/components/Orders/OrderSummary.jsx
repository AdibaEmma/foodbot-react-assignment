/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import Order from './Order/Order'
import { order_details } from '../../actions/orders'
const OrderSummary = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(order_details)
  }, [dispatch])

    return (
        <div>
      <section className="py-5">
        <div className="container">
          <div className="p-4 bg-gray-200">
            <p className="lead mb-4">Order #1735 was placed on <strong>22/06/2013</strong> and is currently <strong>being prepared</strong>.</p>
          </div>
          <div className="row gy-5">
          <div className="col-lg-5">
              <div className="mb-5">
                <div className="bg-light py-4 px-3">
                  <div className="row gy-4 pb-4">
                  <div className="col-md-6 text-end">
                    <h6 className="text-uppercase">Company Info</h6>
                    <p className="lead">This is the company info</p>
                  </div>
                <div className="col-md-6 text-end">
                  <h6 className="text-uppercase">Customer Info</h6>
                  <p className="lead">This is the user info</p>
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
                      <th className="border-gray-300 border-top py-3">Unit price</th>
                      <th className="border-gray-300 border-top py-3">Tax</th>
                      <th className="border-gray-300 border-top py-3">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Order />
                    <Order />
                    <Order />
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="text-end lead py-3" colSpan="5">Order subtotal</th>
                      <th className="lead py-3">$446.00</th>
                    </tr>
                    <tr>
                      <th className="text-end lead py-3" colSpan="5">Tax</th>
                      <th className="lead py-3">$0.00</th>
                    </tr>
                    <tr>
                      <th className="border-0 text-end lead py-3" colSpan="5">Total</th>
                      <th className="border-0 lead py-3">$456.00</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              {/* <div className="align-items-center bg-light px-4 py-3 text-center mb-5">
                <div className="row">
                  <div className="col-md-6 text-md-start py-1"><a className="btn btn-secondary my-1" href="#"><i className="fas fa-angle-left me-1"></i> Back to orders</a></div>
                  <div className="col-md-6 text-md-end py-1">
                    <button className="btn btn-primary my-1" type="submit">Place the order<i className="fas fa-angle-right ms-1"></i></button>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}

export default OrderSummary
