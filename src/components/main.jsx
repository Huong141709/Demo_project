import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3" style={{ backgroundColor: '#ffffd8' }}>
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/main1..jpg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center" >
            <div className="container" >
              <h5 className="card-title fs-1 text fw-lighter">Candy shop </h5>
              <p className="card-text fs-5 d-none d-sm-block ">
                Đây là dòng thời trang cấp mang người dùng tới những đẳng cấp 
                Thời trang luôn đòng hành cùng bạn trên mọi hành trình
                Thời trang giúp bạn vươn tầm cuộc sống
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
