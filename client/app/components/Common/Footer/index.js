/**
 * Footer
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

const Footer = () => {
  const infoLinks = [
    { id: 0, name: 'Liên hệ với chúng tôi', to: '/contact' },
    { id: 1, name: 'Bán cùng chúng tôi', to: '/sell' },
    { id: 2, name: 'Giao hàng', to: '/shipping' }
  ];

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
          {/* Column 1: DỊCH VỤ */}
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Dịch vụ</h3>
            </div>
            <div className='block-content'>
              <ul className='footer-links'>
                {infoLinks.slice(0, 3).map(item => (
                  <li key={item.id} className='footer-link'>
                    <Link to={item.to}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 2: THÔNG TIN LIÊN HỆ */}
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Thông tin liên hệ</h3>
            </div>
            <div className='block-content'>
              <ul className='footer-links'>
                <li className='footer-link'>
                  <span>SĐT: 0862-670-781</span>
                </li>
                <li className='footer-link'>
                  <span>Email: stellakepdn@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: LIÊN KẾT */}
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Liên kết</h3>
            </div>
            <div className='block-content'>
              <ul className='footer-links'>
                
                <li className='footer-social-item'>
                  <a href='https://www.instagram.com/stella_nailboxdanang/' target='_blank' rel='noopener noreferrer'>
                    <span className='instagram-icon' />
                    <span className='social-text'>Instagram</span>
                  </a>
                </li>
                <li className='footer-social-item'>
                  <a href='https://www.facebook.com/profile.php?id=61557173369935' target='_blank' rel='noopener noreferrer'>
                    <span className='facebook-icon' />
                    <span className='social-text'>Facebook</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} Stella Store</span>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
