import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate(); // useNavigate hook to access the navigation functionality
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Mật khẩu không khớp');
      return;
    }

    try {
      const newUser = {
        name,
        email,
        password
      };

      const response = await axios.post('https://63a5725f2a73744b008e30cd.mockapi.io/user', newUser);

      // Check the response from the API if needed
      if (response.status === 201) {
        console.log('Đăng ký thành công');
        // Redirect to login page
        navigate('/login');
      } else {
        setError('Đăng ký không thành công. Vui lòng thử lại sau.');
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.message) {
        setError(error.response.data.message);
      } else {
        setError('Đăng ký không thành công. Vui lòng thử lại sau.');
      }
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3" style={{ backgroundColor: '#FFDAC1' }}>
        <h1 className="text-center"> Đăng ký </h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              {/* Form fields */}
              <div className="form my-3">
                <label htmlFor="Name">Họ và tên</label>
                <input
                  type="text"
                  className="form-control"
                  id="Name"
                  value={name}
                  onChange={handleNameChange}
                  placeholder="Hồ Văn A"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="Email"
                  value={email}
                  onChange={handleEmailChange}
                  placeholder="name@example.com"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="Password">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="Password"
                  value={password}
                  onChange={handlePasswordChange}
                  placeholder="Mật khẩu"
                />
              </div>
              <div className="form my-3">
                <label htmlFor="ConfirmPassword">Xác nhận mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="ConfirmPassword"
                  value={confirmPassword}
                  onChange={handleConfirmPasswordChange}
                  placeholder="Mật khẩu"
                />
              </div>
              <div className="my-3">
                <p>Đã có tài khoản? <Link to="/login" className="text-decoration-underline text-info">Đăng nhập</Link></p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit">
                  Đăng ký
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
