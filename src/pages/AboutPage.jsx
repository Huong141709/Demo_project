import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3" style={{ backgroundColor: '#FFDAC1' }}>
        <h1 className="text-center"> Về chúng tôi</h1>
        <hr />
        <p className="lead text-center">
        Chào mừng đến với Candy - nơi mang đến cho bạn những trải nghiệm thời trang ngọt ngào và đáng yêu nhất!
          Candy là một cửa hàng thời trang độc đáo và phong cách, nơi bạn có thể tìm thấy những món đồ thời trang đẹp mắt
          và cá nhân hóa để thể hiện phong cách riêng của mình. Chúng tôi tự hào là điểm đến lý tưởng cho những người yêu 
          thích sự sáng tạo, sự trẻ trung và niềm đam mê với thời trang.
          Hãy đến Candy ngay hôm nay và khám phá thế giới thời trang tuyệt vời của chúng tôi. Đội ngũ chúng tôi rất mong 
          được đón tiếp và giúp bạn tìm kiếm những món đồ thời trang tuyệt vời, để bạn luôn tỏa sáng trong mọi dịp. Cùng nhau,
           hãy tạo ra những phong cách thật ngọt ngào và đáng yêu!
        </p>

        <h2 className="text-center py-4">Sản phẩm của chúng tôi</h2>
        <div className="row">
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/564x/27/21/d9/2721d9210cdbf453e1e0af0ce0db340b.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Thời trang nam </h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/564x/15/cd/a5/15cda5fee059172c7dc4863211c39391.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Thời trang nữ</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/564x/b2/aa/d9/b2aad9599bae250bb01f8c65f63670b7.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Sản phẩm nổi bật</h5>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-6 mb-3 px-3">
            <div className="card h-100">
              <img className="card-img-top img-fluid" src="https://i.pinimg.com/236x/5a/ab/ef/5aabef181e00c7084b3dfacc84552279.jpg" alt="" height={160} />
              <div className="card-body">
                <h5 className="card-title text-center">Sản phẩm giảm giá</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage