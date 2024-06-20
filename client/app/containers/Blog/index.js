import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../styles/core/_blog.scss';

function Blog() {
  return (
    <div className="container">
      <div className="row">
        <div className="col position-relative">
          <Link to='/blog/0' className="text-decoration-none text-dark">
            <img src='/images/blog/blog0.jpg' className="img-fluid" alt="Blog 0" />
            <div className="overlay-content">
              <p className='content'>Những câu chuyện của khách hàng về kẹp custom của Stella</p>
            </div>
          </Link>
        </div>
        <div className="col position-relative">
          <Link to='/blog/1' className="text-decoration-none text-dark">
            <img src='/images/blog/blog1.jpg' className="img-fluid" alt="Blog 1" />
            <div className="overlay-content">
              <p className='content'>Kẹp Tóc Custom Đính Chữ - Thể Hiện Cá Tính Riêng Của Bạn</p>
            </div>
          </Link>
        </div>
        <div className="col position-relative">
          <Link to='/blog/2' className="text-decoration-none text-dark">
            <img src='/images/blog/blog2.jpg' className="img-fluid" alt="Blog 2" />
            <div className="overlay-content">
              <p className='content'>Tỏa sáng cùng kẹp tóc custom đính chữ - Phụ kiện độc đáo mang đậm dấu ấn cá nhân</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col position-relative">
          <Link to='/blog/3' className="text-decoration-none text-dark">
            <img src='/images/blog/blog3.jpg' className="img-fluid" alt="Blog 0" />
            <div className="overlay-content">
              <p className='content'>Kẹp Tóc Custom Đính Chữ Độc Đáo - Món Quà Đầy Ý Nghĩa Dành Tặng Nửa Kia</p>
            </div>
          </Link>
        </div>
        <div className="col position-relative">
          <Link to='/blog/4' className="text-decoration-none text-dark">
            <img src='/images/blog/blog4.jpg' className="img-fluid" alt="Blog 1" />
            <div className="overlay-content">
              <p className='content'>Rạng Rỡ Cùng Kẹp Tóc Custom Đính Chữ Cho Một Ngày Mới Đầy Năng Lượng!</p>
            </div>
          </Link>
        </div>
        <div className="col position-relative">
          <Link to='/blog/5' className="text-decoration-none text-dark">
            <img src='/images/blog/blog7.jpg' className="img-fluid1" alt="Blog 1" />
            <div className="overlay-content">
              <p className='content'>Phụ kiện tóc thời trang cho mọi dịp</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="row">
        <div className="col position-relative">
          <Link to='/blog/6' className="text-decoration-none text-dark">
            <img src='/images/blog/blog6.jpg' className="img-fluid" alt="Blog 0" />
            <div className="overlay-content">
              <p className='content'>Kẹp tóc custom đính chữ: Hậu trường với Stella</p>
            </div>
          </Link>
        </div>
        <div className="col position-relative">
          <Link to='/blog/7' className="text-decoration-none text-dark">
            <img src='/images/blog/blog5.jpg' className="img-fluid" alt="Blog 2" />
            <div className="overlay-content">
              <p className='content'>Thể hiện cá tính cùng Stella - Kẹp Tóc Handmade Đà Nẵng</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Blog;
