/**
 *
 * Homepage
 *
 */

import React from 'react';

import { connect } from 'react-redux';
import { Row, Col } from 'reactstrap';

import actions from '../../actions';
import banners from './banners.json';
import CarouselSlider from '../../components/Common/CarouselSlider';
import { responsiveOneItemCarousel } from '../../components/Common/CarouselSlider/utils';

class Homepage extends React.PureComponent {
  render() {
    return (
      <div className='homepage'>
        <Row className='flex-row'>
          <Col xs='12' lg='6' className='order-lg-2 mb-3 px-3 px-md-2'>
            <div className='home-carousel'>
              <CarouselSlider
                swipeable={true}
                showDots={true}
                infinite={true}
                autoPlay={false}
                slides={banners}
                responsive={responsiveOneItemCarousel}
              >
                {banners.map((item, index) => (
                  <img key={index} src={item.imageUrl} />
                ))}
              </CarouselSlider>
            </div>
          </Col>
          <Col xs='12' lg='3' className='order-lg-1 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/banners/banner-2.jpg' className='mb-3' />
              <img src='/images/banners/banner-5.jpg' />
            </div>
          </Col>
          <Col xs='12' lg='3' className='order-lg-3 mb-3 px-3 px-md-2'>
            <div className='d-flex flex-column h-100 justify-content-between'>
              <img src='/images/banners/banner-2.jpg' className='mb-3' />
              <img src='/images/banners/banner-6.jpg' />
            </div>
          </Col>
        </Row>
        <section id="homeblog">
          <div className="container">
            <div className="homeblog-inner">
              <div className="section-subtitle center" data-aos="fade-up" />
              <h2 className="section-title center" data-aos="fade-up"><span></span></h2>
              <div className="home-blogs row">
                <div className="col-sm-4" data-aos="fade-up">
                  <div className="blog-item">
                    <div className="blog-image">
                      <a href="https://nailroom.vn/2023/11/28/goi-y-nhung-set-nail-cho-mua-cuoi-2023/"><img src="https://nailroom.vn/wp-content/uploads/bfi_thumb/5BD4B1E2-F036-4969-B95E-FF28FE9F688F-qg1j0auw0hkqqv1ndoegicd8ut5wkdlmyy4glnd3yu.png" alt="" /></a>
                    </div>
                    <div className="blog-title">
                      <a href="https://nailroom.vn/2023/11/28/goi-y-nhung-set-nail-cho-mua-cuoi-2023/">GỢI Ý NHỮNG SET NAIL CHO MÙA CƯỚI 2023</a>
                    </div>
                    <div className="post-category">
                      <a href="https://nailroom.vn/category/tin-tuc-nailroom/">Tin tức</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4" data-aos="fade-up">
                  <div className="blog-item">
                    <div className="blog-image">
                      <a href="https://nailroom.vn/2023/08/22/%f0%9f%92%8c-uu-dai-dau-tuan-khuan-ngay-qua-hot-%f0%9f%92%8c/"><img src="https://nailroom.vn/wp-content/uploads/bfi_thumb/Thumbnail-qba0hc8lwuyj1bg6r57kp6acznl6ymng8fpq7yiz4m.png" alt="" /></a>
                    </div>
                    <div className="blog-title">
                      <a href="https://nailroom.vn/2023/08/22/%f0%9f%92%8c-uu-dai-dau-tuan-khuan-ngay-qua-hot-%f0%9f%92%8c/">💌 ƯU ĐÃI ĐẦU TUẦN – KHUÂN NGAY QUÀ HOT 💌</a>
                    </div>
                    <div className="post-category">
                      <a href="https://nailroom.vn/category/chuong-trinh/">Chương trình</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-4" data-aos="fade-up">
                  <div className="blog-item">
                    <div className="blog-image">
                      <a href="https://nailroom.vn/2023/03/19/%f0%9f%8c%9e-nhan-qua-sinh-nhat-check-in-cuc-chat-%f0%9f%8c%9e/"><img src="https://nailroom.vn/wp-content/uploads/bfi_thumb/Thumbnail-1-q3vqx7h6vs9tntlfcuxbzfzhfpmxung2gd03x6a1jq.png" alt="" /></a>
                    </div>
                    <div className="blog-title">
                      <a href="https://nailroom.vn/2023/03/19/%f0%9f%8c%9e-nhan-qua-sinh-nhat-check-in-cuc-chat-%f0%9f%8c%9e/">🌞 NHẬN QUÀ SINH NHẬT – CHECK-IN CỰC CHẤT 🌞</a>
                    </div>
                    <div className="post-category">
                      <a href="https://nailroom.vn/category/chuong-trinh/">Chương trình</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="clients" className="center" style={{backgroundImage: 'url(https://nailroom.vn/wp-content/uploads/2019/09/Background_BW.jpg)'}}>
          <div className="container">
            <h2 className="section-title revert" data-aos="fade-up"><span>KHÁCH HÀNG CỦA Stella</span></h2>
            <div className="home-clients">
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_1.png" alt="" className />
                </div>
                <div className="client-name">Tóc Tiên</div>
                <div className="client-title">Ca sĩ</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_2.png" alt="" className />
                </div>
                <div className="client-name">Angela Phương Trinh</div>
                <div className="client-title">Diễn viên</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_3.png" alt="" className />
                </div>
                <div className="client-name">Nga Wendy</div>
                <div className="client-title">Hot girl</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_4.png" alt="" className />
                </div>
                <div className="client-name">MLee</div>
                <div className="client-title">Ca sĩ</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_5.png" alt="" className />
                </div>
                <div className="client-name">Liz</div>
                <div className="client-title">Ca sĩ</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_6.png" alt="" className />
                </div>
                <div className="client-name">Khả Ngân</div>
                <div className="client-title">Hot girl</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_7.png" alt="" className />
                </div>
                <div className="client-name">Huyền My</div>
                <div className="client-title">Á hậu</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_8.png" alt="" className />
                </div>
                <div className="client-name">Huyền Lizzie</div>
                <div className="client-title">Diễn viên</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_9.png" alt="" className />
                </div>
                <div className="client-name">Hoàng Ku</div>
                <div className="client-title">Stylist</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_10.png" alt="" className />
                </div>
                <div className="client-name">Hiền Hồ</div>
                <div className="client-title">Ca sĩ</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_11.png" alt="" className />
                </div>
                <div className="client-name">Đan Lê</div>
                <div className="client-title">Diễn viên</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_12.png" alt="" className />
                </div>
                <div className="client-name">Bích Phương</div>
                <div className="client-title">Ca sĩ</div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_13.png" alt="" className />
                </div>
                <div className="client-name">An Japan</div>
                <div className="client-title">Hot girl </div>
              </div>
              <div className="client" data-aos="fade-up">
                <div className="client-image">
                  <img src="https://nailroom.vn/wp-content/uploads/2019/09/KOLs_14.png" alt="" className />
                </div>
                <div className="client-name">Ngọc Thảo</div>
                <div className="client-title">Diễn viên</div>
              </div>
            </div>
          </div>
        </section>
        <section id="home-testimonial">
          <div className="container">
            <h2 className="section-title center" data-aos="fade-up"><span>Cảm Nhận Về Stella Store</span></h2>
            <div className="home-test-slick">
              <div className="home-test-item" data-aos="fade-up">
                <div className="home-test-content">Mua tại Stella quá xinh mà còn bền kinh khủng. Mình mua một bộ móng mà chơi dài mấy tháng liền, nhân viên lại dễ thương, cute nữa, mãi yêu Stella.
                </div>
                <div className="home-test-name">Hương Nhi - Hà Nội</div>
                <div className="home-test-image"><img src="https://nailroom.vn/wp-content/uploads/bfi_thumb/Feedback1-odlxxa2a5gqsejbilvtqr9ym41jzdcxzaayl03v6co.png" alt="" /></div>
              </div>
              <div className="home-test-item" data-aos="fade-up">
                <div className="home-test-content">パステル紫ネイル?△ 予想外に三角の飾りが大きいけど、色味は可愛いしなんと言ってもネイル代が安いからまあいっか！って感じ?♥️
                </div>
                <div className="home-test-name">Kana Umemura - Nhật Bản</div>
                <div className="home-test-image"><img src="https://nailroom.vn/wp-content/uploads/bfi_thumb/Feedback4-odlxxcvspyundd7f5f1mgr8zw7630g96aox1fxqzu0.png" alt="" /></div>
              </div>
              <div className="home-test-item" data-aos="fade-up">
                <div className="home-test-content">Trung thành với duy nhất 1 brand nailbox thôi nhé? Chưa thấy ở đâu ổn hơn Stella luôn đó. Chính xác là giá cả và chất lượng đi đôi với nhau ?. Nhân viên còn đáng iu hết sức. Lần nào cũng phải đính tí lấp lánh ánh bình minh mới chịu được ? À mi ở đây cũng rất hợp style siêu tự nhiên, siêu đáng yêu của mình. Hị ❤️</div>
                <div className="home-test-name">Diệp Anh - Đà Nẵng</div>
                <div className="home-test-image"><img src="https://nailroom.vn/wp-content/uploads/bfi_thumb/Feedback3-odlxxbxyj4td1r8sawmzw9hjatapsr5fyk9jynse08.png" alt="" /></div>
              </div>
              <div className="home-test-item" data-aos="fade-up">
                <div className="home-test-content">The best nailbox store I had in Danang City. Full service include nail service, extension. </div>
                <div className="home-test-name">Kim Jeong - Hàn Quốc</div>
                <div className="home-test-image"><img src="https://nailroom.vn/wp-content/uploads/bfi_thumb/Feedback5-odlxx94fympi2xcvrdf46s75inom5nu8y6b3itwkiw.png" alt="" /></div>
              </div>
              <div className="home-test-item" data-aos="fade-up">
                <div className="home-test-content">Mình mua móng 3 lần ở NAIL Stella đều mua với chị Ngọc. Tiệm đẹp, nhân viên nhẹ nhàng, dễ thương, đi đúng giờ hay gặp người nổi tiếng =)))))
                </div>
                <div className="home-test-name">Vũ Thảo - Hà Nội</div>
                <div className="home-test-image"><img src="https://nailroom.vn/wp-content/uploads/bfi_thumb/Feedback2-odlxxb04cas2q5a5ge8dbrq2pffcl21pmfm2hdts6g.png" alt="" /></div>
              </div>
            </div>
          </div>
        </section>
        <section id="nailit">
          <div className="container">
            <div className="section-subtitle center" data-aos="fade-up" />
            <div className="section-subtitle2 center" data-aos="fade-up">"You Love It. We Nail It!"</div>
            <h2 className="section-title center">VỚI NAIL Stella<br />“AI CŨNG CÓ THỂ TRỞ NÊN ĐẸP HƠN”</h2>
            <div className="grid-inner">
              <div className="grid-content" data-aos="fade-up">
                <p>Xuất phất là một hệ thống Nail Hàn Quốc, Stella luôn đặt trọn vẹn trái tim &amp; tâm huyết vào việc làm đẹp cho các nàng.</p>
                <p>Bởi thế, slogan của Naill Stella là “Ai cũng có thể trở nên đẹp hơn”. Đến với Stella và ra về như những phụ nữ xinh đẹp hơn, hạnh phúc hơn là điều chúng mình hướng tới.</p>
                <p><span style={{color: '#b7752b'}}>Hãy ghé chơi với chúng mình để cảm nhận niềm vui từ việc yêu chiều bản thân nhé!</span></p>
                <div className="grid-url">
                  <a href="/introduction" className="button-a">Giới thiệu</a>
                  <a href="/contact" className="button-b">Hệ thống Stella <i className="fas fa-chevron-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="home-services">
          <div className="container">
            <h2 className="section-title center" data-aos="fade-up">DỊCH VỤ <span>STELLA</span><div className="title-image center"><img src="https://nailroom.vn/wp-content/themes/dev-theme/images/title-image.png" alt="" /></div></h2>
            <div className="home-services-slick" data-aos="fade-up">
              <div className="service-item">
                <div className="service-image">
                  <a href="https://nailroom.vn/service/mi-3/">
                    <img src="https://down-bs-vn.img.susercontent.com/vn-11134210-7r98o-ls8qkkdvcjh544.webp" alt="" />
                    <div className="service-hover">
                      <div className="service-hover-content">
                        <strong>từ 60000 VNĐ</strong>
                        <div className="detail-button">
                          Chi tiết dịch vụ <i className="fas fa-chevron-right" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="service-listing-detail">
                  <div className="service-name"><a href="/shop/brand/nailbox-thiet-ke">Nailbox Thiết kế</a></div>
                  <div className="shortdesc">Ở NAIL Stella hiện có dịch vụ thiết kế thủ công theo yêu cầu của khách hàng.</div>
                  <div className="booking-button">
                    <a href="/shop/brand/nailbox-thiet-ke" className="button-c" target="_blank">Đặt Hàng</a>
                  </div>
                </div>
              </div>
              <div className="service-item">
                <div className="service-image">
                  <a href="https://nailroom.vn/service/nail/">
                    <img src="https://cdn.toponseek.com/sites/5/2023/02/nail-box.jpg" alt="" />
                    <div className="service-hover">
                      <div className="service-hover-content">
                        <strong>từ 40000 VNĐ</strong>
                        <div className="detail-button">
                          Chi tiết dịch vụ <i className="fas fa-chevron-right" />
                        </div>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="service-listing-detail">
                  <div className="service-name"><a href="/shop/brand/nailbox-co-san">Nailbox Có Sẵn</a></div>
                  <div className="shortdesc">Là dịch vụ được yêu thích nhất tại NAIL Stella, với những mẫu nail độc đáo, hiện đại và không kém phần chất lượng.</div>
                  <div className="booking-button">
                    <a href="/shop/brand/nailbox-co-san" className="button-c" target="_blank">Mua Ngay</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="academy">
          <div className="container">
            <div className="academy-image" data-aos="fade-up">
              <img src="https://nailroom.vn/wp-content/uploads/2019/09/Học-viện-NR.png" alt="" />
            </div>
            <div className="academy-content">
              <h2 className="section-title" data-aos="fade-up">HỌC VIỆN <span>MH THE BEAUTY LAB</span></h2>
              <div className="academy-content-detail" data-aos="fade-up"><p><span style={{fontWeight: 400}}>Học viện đào tạo MH THE BEAUTY LAB là học viện Nail, Mi, Spa, Phun thêu chính thức của NAIL Stella – Hệ thống nail Hàn Quốc hàng đầu tại Việt Nam hiện nay. </span></p>
              </div>
              <div className="academy-urls">
                <div className="academy-url" data-aos="fade-up">
                  <a href="https://nailroom.vn/course/khoa-hoc-nail-4/">Khóa Nail <i className="fas fa-chevron-right" /></a>
                </div>
                <div className="academy-url" data-aos="fade-up">
                  <a href="https://nailroom.vn/course/khoa-hoc-mi/">Khóa Mi <i className="fas fa-chevron-right" /></a>
                </div>
                <div className="academy-url" data-aos="fade-up">
                  <a href="https://nailroom.vn/course/khoa-hoc-dieu-khac/">Khóa Điêu khắc <i className="fas fa-chevron-right" /></a>
                </div>
                <div className="academy-url" data-aos="fade-up">
                  <a href="https://nailroom.vn/tuyen-sinh/">Tuyển sinh <i className="fas fa-chevron-right" /></a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="partner">
          <div className="container">
            <div className="partner-slick" data-aos="fade-up">
              <div className="partner">
                <img src="https://nailroom.vn/wp-content/uploads/2019/08/1-1.png" alt="" />
              </div>
              <div className="partner">
                <img src="https://nailroom.vn/wp-content/uploads/2019/08/2-1.png" alt="" />
              </div>
              <div className="partner">
                <img src="https://nailroom.vn/wp-content/uploads/2019/08/3-1.png" alt="" />
              </div>
              <div className="partner">
                <img src="https://nailroom.vn/wp-content/uploads/2019/08/4-1.png" alt="" />
              </div>
              <div className="partner">
                <img src="https://nailroom.vn/wp-content/uploads/2019/08/5.png" alt="" />
              </div>
              <div className="partner">
                <img src="https://nailroom.vn/wp-content/uploads/2019/08/6.png" alt="" />
              </div>
              <div className="partner">
                <img src="https://nailroom.vn/wp-content/uploads/2019/08/7.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section id="calltoaction">
          <div className="container">
            <div className="cta-content" data-aos="fade-up" style={{backgroundImage: 'url("https://nailroom.vn/wp-content/uploads/2019/09/Banner1.png")', backgroundSize: 'cover', backgroundPosition: 'center'}}>
              <h2><span style={{color: '#b7752b'}}>Mua sắm trực Tuyến</span></h2>
              <p>HƯỞNG NGAY ƯU ĐÃI</p>
              <div className="cta-booking center">
                <a href="https://book.nailroom.vn" className="button-a" target="_blank">SHOPPING ONLINE</a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

export default connect(mapStateToProps, actions)(Homepage);
