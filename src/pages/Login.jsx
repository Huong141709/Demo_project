import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Footer, Navbar } from "../components";
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    // Check if user is already logged in and redirect to homepage
    if (localStorage.getItem('isLoggedIn')) {
      navigate('/');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredentials = {
        email,
        password
      };

      const response = await axios.post('https://63a5725f2a73744b008e30cd.mockapi.io/user', userCredentials);

      if (response.status === 201) {
        console.log('Đăng nhập thành công');

        // Save user login status to local storage
        localStorage.setItem('isLoggedIn', true);

        // Redirect to homepage
        navigate('/');
      } else {
        setError('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.');
      }
    } catch (error) {
      setError('Đăng nhập không thành công. Vui lòng kiểm tra lại thông tin đăng nhập.');
      console.error(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3" style={{ backgroundColor: '#FFDAC1' }}>
        <h1 className="text-center">Đăng nhập</h1>
        <hr />
        <div className="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            {error && <p className="error-message">{error}</p>}
            <form onSubmit={handleSubmit}>
              <div className="my-3">
                <label htmlFor="floatingInput">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="floatingInput"
                  placeholder="name@example.com"
                  value={email}
                  onChange={handleEmailChange}
                />
              </div>
              <div className="my-3">
                <label htmlFor="floatingPassword">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Password"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="my-3">
                <p>Chưa có tài khoản? <Link to="/register" className="text-decoration-underline text-info">Đăng ký</Link> </p>
              </div>
              <div className="text-center">
                <button className="my-2 mx-auto btn btn-dark" type="submit" disabled={!email || !password}>
                  Đăng nhập
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

export default Login;
