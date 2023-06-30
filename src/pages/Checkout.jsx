import React, { useState } from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Checkout = () => {
  const state = useSelector((state) => state.handleCart);
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Thực hiện xử lý đặt hàng và gửi dữ liệu lên máy chủ

    // Giả lập đặt hàng thành công với một khoảng thời gian chờ (bạn có thể thay thế bằng xử lý thực tế trên máy chủ)
    setTimeout(() => {
      handleOrderSuccess();
    }, 2000); // Hiển thị thông báo thành công sau 2 giây

    // Chuyển hướng đến trang quản lý đơn hàng của quản trị viên
    window.location.href = "/admin/orders";
  };

  const handleOrderSuccess = () => {
    setOrderSuccess(true);
  };

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">Không có sản phẩm trong giỏ hàng</h4>
            <button className="btn btn-outline-dark mx-4" onClick={() => (window.location.href = "/")}>
              <i className="fa fa-arrow-left"></i> Tiếp tục mua sắm
            </button>
          </div>
        </div>
      </div>
    );
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let shipping = 30.0;
    let totalItems = 0;
    state.map((item) => {
      return (subtotal += item.price * item.qty);
    });

    state.map((item) => {
      return (totalItems += item.qty);
    });

    return (
      <>
        <div className="container py-5">
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products ({totalItems})<span>${Math.round(subtotal)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>${shipping}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>${Math.round(subtotal + shipping)}</strong>
                      </span>
                    </li>
                  </ul>
                  <button className="btn btn-dark btn-block" onClick={handleSubmit}>
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Billing details</h5>
                </div>
                <div className="card-body">
                  <form>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="firstName">First name</label>
                        <input type="text" className="form-control" id="firstName" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="lastName">Last name</label>
                        <input type="text" className="form-control" id="lastName" required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email">Email</label>
                      <input type="email" className="form-control" id="email" placeholder="you@example.com" required />
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address">Address</label>
                      <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                    </div>
                    <div className="row">
                      <div className="col-md-5 mb-3">
                        <label htmlFor="country">Country</label>
                        <select className="custom-select d-block w-100" id="country" required>
                          <option value="">Choose...</option>
                          <option>United States</option>
                        </select>
                      </div>
                      <div className="col-md-4 mb-3">
                        <label htmlFor="state">State</label>
                        <select className="custom-select d-block w-100" id="state" required>
                          <option value="">Choose...</option>
                          <option>California</option>
                        </select>
                      </div>
                      <div className="col-md-3 mb-3">
                        <label htmlFor="zip">Zip</label>
                        <input type="text" className="form-control" id="zip" placeholder="" required />
                      </div>
                    </div>
                    <hr className="mb-4" />
                    <h5 className="mb-4">Payment</h5>
                    <div className="d-block my-3">
                      <div className="custom-control custom-radio">
                        <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="credit">
                          Credit card
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="debit">
                          Debit card
                        </label>
                      </div>
                      <div className="custom-control custom-radio">
                        <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                        <label className="custom-control-label" htmlFor="paypal">
                          PayPal
                        </label>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-name">Name on card</label>
                        <input type="text" className="form-control" id="cc-name" placeholder="" required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="cc-number">Credit card number</label>
                        <input type="text" className="form-control" id="cc-number" placeholder="" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3 mb-3">
                        <label htmlFor="cc-expiration">Expiration</label>
                        <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                      </div>
                      <div className="col-md-3 mb-3">
                        <label htmlFor="cc-cvv">CVV</label>
                        <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                      </div>
                    </div>
                    <hr className="mb-4" />
                    
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3"   style={{ backgroundColor: "#FFDAC1" }}>
        <h1 className="text-center">Thanh toán</h1>
        <hr />
        {state.length ? <ShowCheckout /> : <EmptyCart />}
      </div>
    </>
  );
};

export default Checkout;
