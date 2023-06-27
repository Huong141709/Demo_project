import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3" style={{ backgroundColor: '#FFDAC1' }}>
        <h1 className="text-center">Về chúng tôi </h1>
        <hr />
        <div class="row my-4 h-100">
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Họ và tên</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="nhập tên"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="nhập email "
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Lời nhắn </label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Hãy để lại lời nhắn"
                />
              </div>
              <div className="text-center">
                <button
                  class="my-2 px-4 mx-auto btn btn-dark"
                  type="submit"
                  disabled
                >
                  Gửi
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

export default ContactPage;
