import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {
  const state = useSelector(state => state.handleCart);
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  const user = localStorage.getItem('user');

  return (
    <nav className="navbar navbar-expand-lg navbar-pink bg-light py-3 sticky-top">
      <div className="container">
        <img src="" alt="" />
        <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/">
          Candy Shop
        </NavLink>
        <button
          className="navbar-toggler mx-2"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto my-2 text-center">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Trang chủ
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product">
                Sản phẩm
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Về chúng tôi
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Liên hệ
              </NavLink>
            </li>
          </ul>
          <div className="buttons text-center">
            {isLoggedIn ? (
              <>
                <NavLink to="/account" className="btn btn-outline-dark m-2">
                  <i className="fa fa-user mr-1"></i> {user}
                </NavLink>
                <NavLink to="/logout" className="btn btn-outline-dark m-2">
                  <i className="fa fa-sign-in-alt mr-1"></i> Đăng xuất
                </NavLink>
              </>
            ) : (
              <>
                <NavLink to="/login" className="btn btn-outline-dark m-2">
                  <i className="fa fa-sign-in-alt mr-1"></i> Đăng nhập
                </NavLink>
                <NavLink to="/register" className="btn btn-outline-dark m-2">
                  <i className="fa fa-user-plus mr-1"></i> Đăng ký
                </NavLink>
                <NavLink to="/admin" className="btn btn-outline-dark m-2">
              <i className="mr-1"></i> Quản trị viên
            </NavLink>
              </>
            )}
            <NavLink to="/cart" className="btn btn-outline-dark m-2">
              <i className="fa fa-cart-shopping mr-1"></i> Giỏ hàng ({state.length})
            </NavLink>
            
          </div>
        </div>
      </div>
    </nav> 
  );
};

export default Navbar;
