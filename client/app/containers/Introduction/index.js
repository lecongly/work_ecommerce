import React, { useEffect } from 'react';

const Introduction = () => {
  useEffect(() => {
    // Function to adjust image heights to be equal within each row
    const adjustImageHeights = () => {
      const rows = document.querySelectorAll('.row-equal-heights');
      rows.forEach(row => {
        let maxHeight = 0;
        // Find the maximum height in the current row
        row.querySelectorAll('.equal-image').forEach(img => {
          const height = img.offsetHeight;
          if (height > maxHeight) {
            maxHeight = height;
          }
        });
        // Set all images in the row to have the maximum height
        row.querySelectorAll('.equal-image').forEach(img => {
          img.style.height = `${maxHeight}px`;
        });
      });
    };

    // Adjust image heights on initial load and window resize
    adjustImageHeights();
    window.addEventListener('resize', adjustImageHeights);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', adjustImageHeights);
    };
  }, []);

  return (
    <div className='container-fluid d-flex flex-column align-items-center py-4' style={{ minHeight: '100vh' }}>
      <div className='text-center mb-4'>
        <p className='display-4 font-weight-bold text-white'>Stella Store</p>
        <div style={{ fontSize: '1.5em' }}> {/* Điều chỉnh kích thước chữ ở đây */}
          <p style={{ fontSize: '1.2em' }}>ĐẾN VỚI STELLA</p>
          <span style={{ fontSize: '1.2em' }}>"AI CŨNG CÓ THỂ TRỞ NÊN SANG CHẢNH,ĐIỆU ĐÀ HƠN"</span>
        </div>
      </div>
      <div className='d-flex w-100 justify-content-center mb-5'>
        <div className='w-50'>
          <img style={{width: '100%', height:'100%'}} src='/images/banners/banner-2.jpg' alt='Stella Store' className='img-fluid' />
        </div>
        <div className='w-50 p-5 bg-white'>
          <div>
            <h2>Hãy ghé chơi với chúng mình để cảm nhận niềm vui từ việc yêu chiều bản thân nhé!</h2>
            <p>Tự tay thiết kế ra các mẫu kẹp tóc thời trang, khách hàng có thể yêu cầu tên tùy thích. Với các thành viên trong nhóm có tay nghề sẽ làm ra sản phẩm chất lượng và đáng tin cậy.</p>
          </div>
        </div>
      </div>
      <div style={{ fontSize: '1.5em' }} className='text-center'>
        <p style={{ fontSize: '1.2em' }}>CÙNG NHAU TẬN HƯỞNG NHỮNG KHOẢNG KHẮC THẬT ĐẸP TẠI STELLA STORE!</p>
      </div>
      <div className='container mt-5'>
        <div className='row no-gutters row-equal-heights'> {/* Thêm class row-equal-heights để áp dụng cho các hàng */}
          <div className='col-md-4'>
            <img
              src='https://popshopamerica.com/wp-content/uploads/2018/08/dip-the-barrette-in-the-glue-how-to-make-diy-seashell-hair-accessories.jpg'
              alt='Stella Store'
              className='img-fluid equal-image'
            />
          </div>
          <div className='col-md-4'>
            <img
              src='https://irepo.primecp.com/2015/06/224341/Beach-Goddess-DIY-Seashell-Clips_Large600_ID-1041798.jpg?v=1041798'
              alt='Stella Store'
              className='img-fluid equal-image'
            />
          </div>
          <div className='col-md-4'>
            <img
              src='/images/banners/banner-3.jpg'
              alt='Stella Store'
              className='img-fluid equal-image'
            />
          </div>
        </div>
        <div className='row no-gutters row-equal-heights'> {/* Thêm class row-equal-heights để áp dụng cho các hàng */}
          <div className='col-md-4'>
            <img
              src='https://i.etsystatic.com/13333397/r/il/078619/2035013977/il_fullxfull.2035013977_289w.jpg'
              alt='Stella Store'
              className='img-fluid equal-image'
            />
          </div>
          <div className='col-md-4'>
            <img
              src='https://i.upanh.org/2024/05/22/2af57812-d755-47c7-9750-0af6fc09d325b53f6edfd4c7826c.jpeg'
              alt='Stella Store'
              className='img-fluid equal-image'
            />
          </div>
          <div className='col-md-4'>
            <img
              src='https://down-vn.img.susercontent.com/file/f0256c3fc199c977df17e01c8a1ed04c'
              alt='Stella Store'
              className='img-fluid equal-image'
            />
          </div>
        </div>
        <div className='row no-gutters row-equal-heights'> {/* Thêm class row-equal-heights để áp dụng cho các hàng */}
          <div className='col-md-4'>
            <img
              src='https://www.elle.vn/wp-content/uploads/2024/04/17/582281/362303593_1043176923758647_7109757407957046940_n-1024x1280.jpg'
              alt='Stella Store'
              className='img-fluid equal-image'
            />
          </div>
          <div className='col-md-4'>
            <img
              src='https://www.elle.vn/wp-content/uploads/2024/04/16/582281/sfw.trng-vo-so-1024x1280.jpg'
              alt='Stella Store'
              className='img-fluid equal-image'
            />
          </div>
          <div className='col-md-4'>
            <img
              src='https://img.ltwebstatic.com/images3_pi/2023/04/06/1680764023223c96e069c0f4cef166806266018a8c_thumbnail_720x.webp'
              alt='Stella Store'
              className='img-fluid equal-image'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
