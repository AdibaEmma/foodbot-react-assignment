/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import burgerCheese from '../../images/burger-cheese.jpg'
import burgerChicken from '../../images/burger-chicken2.jpg'

const OrderSummary = () => {
    return (
        <div>
      <section className="py-5">
        <div className="container">
          <div className="p-4 bg-gray-200">
            <h3 className="text-uppercase mb-0">Order summary</h3>
          </div>
          <div className="row gy-5">
          <div className="col-lg-5">
              <div className="mb-5">
                <div className="bg-light py-4 px-3">
                  <p className="text-muted">Shipping and additional costs are calculated based on the values you have entered.</p>
                  <div className="table-responsive">
                    <table className="table mb-0">
                      <tbody className="text-sm">
                        <tr>
                          <th className="text-muted"> <span className="d-block py-1 fw-normal">Order subtotal</span></th>
                          <th> <span className="d-block py-1 fw-normal text-end">$446.00</span></th>
                        </tr>
                        <tr>
                          <th className="text-muted"> <span className="d-block py-1 fw-normal">Shipping and handling</span></th>
                          <th> <span className="d-block py-1 fw-normal text-end">$10.00</span></th>
                        </tr>
                        <tr>
                          <th className="text-muted"> <span className="d-block py-1 fw-normal">Tax</span></th>
                          <th> <span className="d-block py-1 fw-normal text-end">$0.00</span></th>
                        </tr>
                        <tr className="total">
                          <td className="py-3 border-bottom-0 text-muted"> <span className="lead fw-bold">Total</span></td>
                          <th className="py-3 border-bottom-0"> <span className="lead fw-bold text-end">$456.00</span></th>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div>
                <div>
                  Resturant
                </div>
                <div>
                  User
                </div>
              </div>
              <div className="table-responsive">
                <table className="table text-nowrap">
                  <thead>
                    <tr className="text-sm">
                      <th className="border-gray-300 border-top py-3" colspan="2">Product</th>
                      <th className="border-gray-300 border-top py-3">Quantity</th>
                      <th className="border-gray-300 border-top py-3">Unit price</th>
                      <th className="border-gray-300 border-top py-3">Tax</th>
                      <th className="border-gray-300 border-top py-3">Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="text-sm">
                      <td className="align-middle border-gray-300 py-3"><a href="#"><img className="img-fluid flex-shrink-0" src={burgerCheese} alt="White Blouse Armani" width="60px" height="40px"/></a></td>
                      <td className="align-middle border-gray-300 py-3"><a href="#">Chilli pepper</a></td>
                      <td className="align-middle border-gray-300 py-3">2</td>
                      <td className="align-middle border-gray-300 py-3">$123.00</td>
                      <td className="align-middle border-gray-300 py-3">$0.00</td>
                      <td className="align-middle border-gray-300 py-3">$246.00</td>
                    </tr>
                    <tr className="text-sm">
                      <td className="align-middle border-gray-300 py-3"><a href="#"><img className="img-fluid flex-shrink-0" src={burgerChicken} alt="White Blouse Armani" width="60px"/></a></td>
                      <td className="align-middle border-gray-300 py-3"><a href="#">Burger Cheese</a></td>
                      <td className="align-middle border-gray-300 py-3">1</td>
                      <td className="align-middle border-gray-300 py-3">$200.00</td>
                      <td className="align-middle border-gray-300 py-3">$0.00</td>
                      <td className="align-middle border-gray-300 py-3">$200.00</td>
                    </tr>
                  </tbody>
                  <tfoot>
                    <tr>
                      <th className="py-3 border-0" colspan="5"> <span className="h5 text-gray-700 mb-0">Total</span></th>
                      <th className="py-3 border-0 text-end" colspan="2"> <span className="h5 text-gray-700 mb-0">$446.00</span></th>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="align-items-center bg-light px-4 py-3 text-center mb-5">
                <div className="row">
                  <div className="col-md-6 text-md-start py-1"><a className="btn btn-secondary my-1" href="shop-checkout3.html"><i className="fas fa-angle-left me-1"></i> Back to payment method</a></div>
                  <div className="col-md-6 text-md-end py-1">
                    <button className="btn btn-primary my-1" type="submit">Place the order<i className="fas fa-angle-right ms-1"></i></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
}

export default OrderSummary
