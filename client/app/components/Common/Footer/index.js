/**
 *
 * Footer
 *
 */

import React from 'react';

import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

import Newsletter from '../../../containers/Newsletter';

const Footer = () => {
  const infoLinks = [
    { id: 0, name: 'Liên hệ với chúng tôi', to: '/contact' },
    { id: 1, name: 'Bán cùng chúng tôi', to: '/sell' },
    { id: 2, name: 'Giao hàng', to: '/shipping' }
  ];

  const footerLinks = infoLinks.map(item => (
    <li key={item.id} className='footer-link'>
      <Link key={item.id} to={item.to}>
        {item.name}
      </Link>
    </li>
  ));

  return (
    <footer className='footer'>
      <Container>
        <div className='footer-content'>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Dịch vụ</h3>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Liên Kết</h3>
            </div>
            <div className='block-content'>
              <ul>{footerLinks}</ul>
            </div>
          </div>
          {/* <div className='footer-block'>
            <div className='block-title'>
              <h3 className='text-uppercase'>Tin tức - Ưu đãi</h3>
              <Newsletter />
            </div>
          </div> */}
        </div>
        <div className='footer-copyright'>
          <span>© {new Date().getFullYear()} Stella Store</span>
        </div>
        <ul className='footer-social-item'>
          <li>
            <a href='https://www.facebook.com/profile.php?id=61557173369935' rel='noreferrer noopener' target='_blank'>
              <span className='facebook-icon' />
            </a>
          </li>
          <li>
            <a href='https://www.instagram.com/stella_nailboxdanang/' rel='noreferrer noopener' target='_blank'>
              <span className='instagram-icon' />
            </a>
          </li>
        </ul>
      </Container>
    </footer>
  );
};

export default Footer;
