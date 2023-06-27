import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user login status from local storage
    localStorage.removeItem('isLoggedIn');
    navigate('/');
  }, [navigate]);

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3" style={{ backgroundColor: '#FFDAC1' }}>
        <h1 className="text-center">Đăng xuất</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <p>Bạn đã đăng xuất thành công.</p>
            <p>Quay về <Link to="/" className="text-decoration-underline text-info">Trang chủ</Link></p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Logout;
