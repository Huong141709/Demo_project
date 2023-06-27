import React, { useEffect, useState } from 'react';

const Account = () => {
  const [userData, setUserData] = useState(null);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch('https://63a5725f2a73744b008e30cd.mockapi.io/user');
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setOrders(data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, []);

  if (!userData) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Tài khoản của bạn</h1>
      <h2>Thông tin người dùng</h2>
      <p>Tên người dùng: {userData.username}</p>
      <p>Email: {userData.email}</p>
      <p>Số điện thoại: {userData.phone}</p>
      <p>Địa chỉ: {userData.address}</p>

      <h2>Đơn hàng đã mua</h2>
      {orders.length === 0 ? (
        <p>Chưa có đơn hàng.</p>
      ) : (
        <ul>
          {orders.map(order => (
            <li key={order.id}>
              <p>Mã đơn hàng: {order.id}</p>
              {/* Hiển thị thông tin khác của từng đơn hàng */}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Account;
