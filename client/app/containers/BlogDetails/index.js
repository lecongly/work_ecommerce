// BlogDetails.js

import React from 'react';
import { useParams } from 'react-router-dom';
import '../../styles/core/_blogDetails.scss';

const BlogDetails = () => {
    const { id } = useParams();

    // Tạo một object chứa thông tin chi tiết của từng blog
    const blogs = {
        0: {
            title: 'Kẹp Tóc Custom Đính Chữ - Thể Hiện Cá Tính Riêng Của Bạn',
            content: (
                <div>
                    <p>
                        Bạn đang tìm kiếm một phụ kiện độc đáo để thể hiện cá tính riêng của mình? Kẹp tóc
                        custom đính chữ chính là lựa chọn hoàn hảo dành cho bạn! Với những chiếc kẹp tóc này,
                        bạn có thể sáng tạo những câu chữ, thông điệp hoặc tên của mình để tạo điểm nhấn cho
                        mái tóc. Kẹp tóc custom đính chữ cũng là món quà ý nghĩa dành tặng cho bạn bè, người
                        thân hoặc chính bản thân mình.
                    </p>

                    <h2>Tại sao nên chọn kẹp tóc custom đính chữ của Stella?</h2>
                    <p>
                        <strong>Thể hiện cá tính riêng:</strong> Kẹp tóc custom đính chữ là phụ kiện độc đáo
                        giúp bạn thể hiện cá tính riêng của mình. Bạn có thể sáng tạo những câu chữ, thông
                        điệp hoặc tên của mình để tạo điểm nhấn cho mái tóc.
                    </p>
                    <p>
                        <strong>Là món quà ý nghĩa:</strong> Kẹp tóc custom đính chữ là món quà ý nghĩa dành
                        tặng cho bạn bè, người thân hoặc chính bản thân mình. Bạn có thể chọn kẹp tóc có thông
                        điệp đặc biệt để thể hiện tình cảm của mình.
                    </p>
                    <h2>Cách sử dụng kẹp tóc custom đính chữ:</h2>
                    <ul>
                        <p>Nên bảo quản kẹp tóc custom đính chữ ở nơi khô ráo, thoáng mát để tránh hư hỏng.</p>
                    </ul>
                    <p>
                        <strong>Mua kẹp tóc custom đính chữ ở đâu?</strong>
                        <br />
                        Bạn có thể mua kẹp tóc custom đính
                        chữ ở website hoặc fanpage của Stella. Stella là cửa hàng bán kẹp vô cùng uy tín và
                        đẹp.
                    </p>

                    <p className='text'>
                        <strong>Stella - Kẹp Handmade Đà Nẵng</strong>
                        <br />
                        Website: <a href="http://stella-clips.online/home" >http://stella-clips.online/home</a>
                        <br />
                        Facebook:{' '}
                        <a href="https://www.facebook.com/stellakephandmade">https://www.facebook.com/stellakephandmade</a>
                        <br />
                        Instagram:{' '}
                        <a href="https://www.instagram.com/stella_kephandmadedanang">https://www.instagram.com/stella_kephandmadedanang</a>
                    </p>
                </div>
            ),
        },
        1: {
            title: 'Tỏa sáng cùng kẹp tóc custom đính chữ - Phụ kiện độc đáo mang đậm dấu ấn cá nhân',
            content: (
                <div>
                    <p>
                        Bạn đang tìm kiếm món phụ kiện tóc vừa đẹp, độc đáo, lại mang đậm dấu ấn cá nhân? Vậy thì kẹp tóc custom đính chữ chính là lựa chọn hoàn hảo dành cho bạn!

                        Với kẹp tóc custom đính chữ, bạn có thể tự do sáng tạo phong cách riêng của mình bằng cách lựa chọn kiểu chữ, màu sắc và kiểu dáng kẹp theo ý thích. Dù là những câu slogan truyền cảm hứng, tên riêng hay những biểu tượng yêu thích, mọi thứ đều có thể được hiện thực hóa trên chiếc kẹp tóc nhỏ xinh này.

                    </p>
                    <h2>Stella - Địa chỉ uy tín để bạn sở hữu kẹp tóc custom ưng ý
                    </h2>
                    <p>
                        Là cửa hàng phụ kiện tóc được nhiều khách hàng yêu thích, Stella tự hào mang đến cho bạn những chiếc kẹp tóc custom chất lượng với thiết kế tinh xảo và giá cả phải chăng.

                    </p>
                    <h2>Tại sao nên chọn Stella?
                    </h2>
                    <p>
                        <strong>Chất lượng đảm bảo:</strong> Kẹp tóc được làm từ chất liệu cao cấp, bền đẹp và an toàn cho tóc.
                        Thiết kế theo yêu cầu: Bạn có thể tự do sáng tạo nội dung và kiểu chữ cho chiếc kẹp tóc của mình.
                        Giá cả hợp lý: Stella luôn mang đến cho khách hàng những sản phẩm với mức giá cạnh tranh nhất.
                        Dịch vụ chuyên nghiệp: Đội ngũ nhân viên nhiệt tình, chu đáo luôn sẵn sàng tư vấn và hỗ trợ bạn.


                    </p>
                    <h2>Cách đặt mua kẹp tóc custom tại Stella:</h2>
                    <p>Cách đặt mua kẹp tóc custom tại Stella:</p>
                    <p>
                        <ul>
                            <li >Truy cập website hoặc fanpage của Stella:
                                <ul className='text'>
                                    <li >Website: <a href="https://www.stelladot.com/">https://www.stelladot.com/</a></li>
                                    <li>Fanpage: <a href="https://es-la.facebook.com/custombonecarving/">https://es-la.facebook.com/custombonecarving/</a></li>
                                </ul>
                            </li>
                            <li>Lựa chọn kiểu dáng kẹp tóc mong muốn.</li>
                            <li>Nhập nội dung chữ bạn muốn đính.</li>
                            <li>Chọn màu sắc và kiểu chữ yêu thích.</li>
                            <li>Thêm sản phẩm vào giỏ hàng và tiến hành thanh toán.</li>
                            <li>Stella sẽ liên hệ bạn để xác nhận đơn hàng và tiến hành làm kẹp tóc theo yêu cầu.</li>
                        </ul>
                    </p>
                    <p>Hãy sở hữu ngay cho mình chiếc kẹp tóc custom độc đáo để tô điểm thêm phong cách cá nhân và tỏa sáng trong mọi khoảnh khắc!</p>

                    <p className='text'>
                        <strong>Stella - Kẹp Handmade Đà Nẵng</strong>
                        <br />
                        Website: <a href="http://stella-clips.online/home" >http://stella-clips.online/home</a>
                        <br />
                        Facebook:{' '}
                        <a href="https://www.facebook.com/stellakephandmade">https://www.facebook.com/stellakephandmade</a>
                        <br />
                        Instagram:{' '}
                        <a href="https://www.instagram.com/stella_kephandmadedanang">https://www.instagram.com/stella_kephandmadedanang</a>
                    </p>
                </div>
            ),
        },
        2: {
            title: 'Những câu chuyện của khách hàng về kẹp custom của Stella',
            content: (
                <div>
                    <p>
                        Kẹp tóc là phụ kiện không thể thiếu cho phái nữ, giúp tô điểm thêm cho mái tóc thêm xinh xắn và tạo điểm nhấn cho phong cách cá nhân. Hiểu được nhu cầu đó, Stella đã ra mắt sản phẩm kẹp tóc custom theo yêu cầu, mang đến cho khách hàng những chiếc kẹp tóc độc đáo và phù hợp với sở thích riêng của mỗi người.
                        <br />
                        Bài viết này sẽ chia sẻ một số câu chuyện của khách hàng đã tin tưởng và sử dụng dịch vụ kẹp tóc custom của Stella:


                    </p>
                    <h2>Câu chuyện 1: Mẹ và con gái cùng tỏa sáng với kẹp tóc custom</h2>
                    <p>
                        <strong>Chị Lan Anh chia sẻ:</strong> "Mình luôn muốn tìm kiếm những món đồ độc đáo để làm quà tặng cho con gái. Khi biết đến dịch vụ kẹp tóc custom của Stella, mình đã ngay lập tức đặt mua một cặp kẹp cho mình và con gái. Mình chọn hình trái tim màu trắng cho con gái và hình hoa cúc họa mi cho bản thân. Cả hai mẹ con đều rất thích những chiếc kẹp tóc này. Chúng không chỉ đẹp mà còn rất ý nghĩa vì được thiết kế theo sở thích riêng của mỗi người."
                    </p>
                    <h2>Câu chuyện 2: Kẹp tóc custom - món quà kỷ niệm ý nghĩa</h2>
                    <p>
                        <strong>Anh Minh chia sẻ: </strong> "Mình muốn tìm kiếm một món quà độc đáo để tặng sinh nhật cho bạn gái. Sau khi tham khảo nhiều nơi, mình quyết định chọn kẹp tóc custom của Stella. Mình đã gửi nhờ Stella đính chữ "Bae". Bạn gái mình rất thích món quà này và nó đã trở thành kỷ niệm đẹp giữa hai đứa."
                    </p>
                    <h2>Câu chuyện 3: Kẹp tóc custom - thể hiện cá tính riêng</h2>
                    <p>
                        <strong>Bạn Linh chia sẻ: </strong>  "Mình là một người thích sự độc đáo và cá tính. Vì vậy, mình luôn muốn tìm kiếm những món đồ thể hiện được phong cách riêng của bản thân. Khi biết đến kẹp tóc custom của Stella, mình đã ngay lập tức đặt mua một chiếc kẹp tóc với tên của mình. Mình rất thích chiếc kẹp tóc này vì nó giúp mình trở nên nổi bật hơn và thể hiện được cá tính riêng của mình."
                        <br />
                        Đây chỉ là một số trong số rất nhiều câu chuyện của khách hàng đã tin tưởng và sử dụng dịch vụ kẹp tóc custom của Stella. Stella luôn mong muốn mang đến cho khách hàng những sản phẩm chất lượng và dịch vụ tốt nhất.
                        <br />
                        Bạn muốn sở hữu những chiếc kẹp tóc custom độc đáo và ý nghĩa? Hãy liên hệ với Stella ngay hôm nay!
                    </p>
                    <p className='text'>
                        <strong>Stella - Kẹp Handmade Đà Nẵng</strong>
                        <br />
                        Website: <a href="http://stella-clips.online/home" >http://stella-clips.online/home</a>
                        <br />
                        Facebook:{' '}
                        <a href="https://www.facebook.com/stellakephandmade">https://www.facebook.com/stellakephandmade</a>
                        <br />
                        Instagram:{' '}
                        <a href="https://www.instagram.com/stella_kephandmadedanang">https://www.instagram.com/stella_kephandmadedanang</a>
                    </p>
                </div>
            ),
        },
        3: {
            title: 'Kẹp Tóc Custom Đính Chữ Độc Đáo - Món Quà Đầy Ý Nghĩa Dành Tặng Nửa Kia',
            content: (
                <div>
                    <p>
                        Bạn đang tìm kiếm một món quà độc đáo để dành tặng người ấy? <br /> Kẹp tóc custom đính chữ của Stella chính là lựa chọn hoàn hảo cho bạn!
                        <br />
                        Kẹp tóc không chỉ là phụ kiện thời trang, mà còn là cách thể hiện sự yêu thương và quan tâm của bạn đến người ấy. Với những chiếc kẹp tóc đính chữ độc đáo, đây chính là thông điệp yêu thương đầy ý nghĩa mà bạn có thể dành tặng nửa kia của mình.

                    </p>
                    <h2>Tại sao nên chọn kẹp tóc custom đính chữ làm quà tặng người ấy?</h2>
                    <p>
                        <strong>Thể hiện tình cảm:</strong> Những chiếc kẹp tóc custom đính chữ sẽ là cách để bạn thể hiện tình cảm, sự quan tâm của mình đến người ấy. Đây sẽ là món quà cảm động và đáng giá hơn những gì bạn tưởng tượng rất nhiều!
                    </p>
                    <p>
                        <strong>Độc đáo và cá tính:</strong>  Kẹp tóc custom đính chữ sẽ giúp người ấy thể hiện cá tính riêng, tạo nên nét riêng biệt cho phong cách của họ. Bạn có thể chọn kẹp tóc với màu sắc và màu chữ ưa thích của họ để tăng thêm giá trị cho món quà.
                    </p>
                    <p>
                        <strong>Lưu giữ kỷ niệm:</strong>  Bất cứ món quà nào cũng sẽ trở thành kỷ niệm đẹp khi được trao tặng bởi một người quan trọng. Kẹp tóc custom đính chữ cũng không phải là ngoại lệ, nó sẽ giúp người ấy nhớ mãi đến khoảnh khắc bạn trao tặng, từ đó khiến tình cảm của các bạn càng trở nên khăng khít..

                    </p>
                    <p>
                        <ul>
                            <li >Truy cập website hoặc fanpage của Stella:
                                <ul className='text'>
                                    <li >Website: <a href="https://www.stelladot.com/">https://www.stelladot.com/</a></li>
                                    <li>Fanpage: <a href="https://es-la.facebook.com/custombonecarving/">https://es-la.facebook.com/custombonecarving/</a></li>
                                </ul>
                            </li>
                            <li>Lựa chọn kiểu dáng kẹp tóc mong muốn.</li>
                            <li>Nhập nội dung chữ bạn muốn đính.</li>
                            <li>Chọn màu sắc và kiểu chữ yêu thích.</li>
                            <li>Thêm sản phẩm vào giỏ hàng và tiến hành thanh toán.</li>
                            <li>Stella sẽ liên hệ bạn để xác nhận đơn hàng và tiến hành làm kẹp tóc theo yêu cầu.</li>
                        </ul>
                    </p>
                    <p>Hãy sở hữu ngay cho mình chiếc kẹp tóc custom độc đáo để tô điểm thêm phong cách cá nhân và tỏa sáng trong mọi khoảnh khắc!</p>

                    <p className='text'>
                        <strong>Stella - Kẹp Handmade Đà Nẵng</strong>
                        <br />
                        Website: <a href="http://stella-clips.online/home" >http://stella-clips.online/home</a>
                        <br />
                        Facebook:{' '}
                        <a href="https://www.facebook.com/stellakephandmade">https://www.facebook.com/stellakephandmade</a>
                        <br />
                        Instagram:{' '}
                        <a href="https://www.instagram.com/stella_kephandmadedanang">https://www.instagram.com/stella_kephandmadedanang</a>
                    </p>
                </div>
            ),
        },
        4: {
            title: 'Rạng Rỡ Cùng Kẹp Tóc Custom Đính Chữ Cho Một Ngày Mới Đầy Năng Lượng!',
            content: (
                <div>

                    <h2>Làm đẹp với kẹp tóc custom đính chữ độc đáo</h2>
                    <p>
                        Những chiếc kẹp tóc custom đính chữ không chỉ là phụ kiện tóc thời trang mà còn là một công cụ tuyệt vời để tô điểm thêm vẻ đẹp và cá tính riêng của bạn.
                        <br />
                        Kẹp tóc custom đính chữ không chỉ giữ tóc gọn gàng mà còn giúp tôn lên nét đẹp của gương mặt. Các chữ cái được đặt ở những trung tâm kẹp tóc sẽ tạo điểm nhấn ấn tượng cho mái tóc của bạn. Đây chính là cách hoàn hảo để khoe những nét đẹp ưu điểm của bạn, khiến bạn ngày càng tự tin rạng rỡ khoe cá tính riêng hơn.


                    </p>
                    <h2>Thể hiện phong cách cá nhân - thích nghi mọi lúc</h2>
                    <p>
                        Không chỉ là một món phụ kiện, kẹp tóc custom đính chữ của Stella còn giúp bạn thể hiện cá tính và sở thích của mình. Bạn có thể chọn những chữ cái và màu sắc phản ánh tính cách, sở thích hoặc những điều quan trọng bạn muốn nhắn gửi.
                        <br />
                        <p>
                            Kẹp tóc custom đính chữ không chỉ phù hợp để làm đẹp hàng ngày mà còn có thể được sử dụng trong những dịp đặc biệt. Từ những buổi hẹn hò lãng mạn đến những hoạt động thể thao năng động, những món phụ kiện này luôn tạo được điểm nhấn ấn tượng cho mái tóc của bạn.
                        </p>

                        Bạn muốn sở hữu những chiếc kẹp tóc custom độc đáo và ý nghĩa?
                        <br />
                        <strong>Hãy liên hệ với Stella ngay hôm nay!  </strong>

                    </p>



                    <p className='text'>
                        <strong>Stella - Kẹp Handmade Đà Nẵng</strong>
                        <br />
                        Website: <a href="http://stella-clips.online/home" >http://stella-clips.online/home</a>
                        <br />
                        Facebook:{' '}
                        <a href="https://www.facebook.com/stellakephandmade">https://www.facebook.com/stellakephandmade</a>
                        <br />
                        Instagram:{' '}
                        <a href="https://www.instagram.com/stella_kephandmadedanang">https://www.instagram.com/stella_kephandmadedanang</a>
                    </p>
                </div>
            ),
        },
        5: {
            title: 'Thể hiện cá tính cùng Stella - Kẹp Tóc Handmade Đà Nẵng',
            content: (
                <div>
                    <p>
                        Trong thế giới của thời trang hiện đại, Stella ra đời nhằm mang đến cho bạn những phụ kiện tóc thủ công độc đáo, giúp bạn thể hiện phong cách cá nhân một cách rõ ràng và đầy sáng tạo.
                    </p>

                    <p>
                        Tại Stella, chúng tôi tin rằng mỗi người đều là độc nhất vô nhị và đáng để được tôn vinh thông qua những sản phẩm với chất lượng tốt nhất. Đó là lý do tại sao chúng tôi được thành lập và nỗ lực hết mình để tạo ra những chiếc kẹp tóc thủ công độc đáo nhằm tôn vinh phong cách và cá tính đa dạng của khách hàng.

                    </p>
                    <p>
                        Với đội ngũ nhân viên chuyên nghiệp, chúng tôi dồn tâm huyết vào từng sản phẩm, đảm bảo rằng mỗi chiếc kẹp tóc đều phản ánh cá tính của người đeo. Cho dù bạn bị thu hút bởi sự quyến rũ kỳ lạ của các thiết kế trang trí bằng vỏ sò hay sự đơn giản trang nhã của những chiếc kẹp tóc custom của chúng tôi, chúng tôi luôn sẵn sàng giúp bạn thể hiện cá tính của mình một cách tự tin nhất. Mỗi chiếc kẹp tóc Stella là một thành quả lao động của tình yêu, được truyền tải bằng sự quan tâm và chú ý đến từng chi tiết khiến thương hiệu của chúng tôi trở nên khác biệt.
                    </p>
                    <p>
                        Sứ mệnh của chúng tôi là giúp bạn nắm bắt được nét độc đáo của mình và thể hiện bản thân thông qua chiếc kẹp tóc bạn mang. Hãy cùng chúng tôi khám phá thế giới phụ kiện tóc độc đáo với Stella. Với chúng tôi, bạn sẽ không chỉ tìm thấy một món phụ kiện mà còn là một phần của phong cách và cá tính của bạn.
                    </p>


                    <p className='text'>
                        <strong>Stella - Kẹp Handmade Đà Nẵng</strong>
                        <br />
                        Website: <a href="http://stella-clips.online/home" >http://stella-clips.online/home</a>
                        <br />
                        Facebook:{' '}
                        <a href="https://www.facebook.com/stellakephandmade">https://www.facebook.com/stellakephandmade</a>
                        <br />
                        Instagram:{' '}
                        <a href="https://www.instagram.com/stella_kephandmadedanang">https://www.instagram.com/stella_kephandmadedanang</a>
                    </p>
                </div>
            ),
        },
        6: {
            title: 'Kẹp tóc custom đính chữ: Hậu trường với Stella',
            content: (
                <div>
                    <p>
                        Bạn có bao giờ tò mò về quá trình tạo ra những chiếc kẹp tóc custom độc đáo từ Stella không? Hãy cùng nhau tìm hiểu những bước công phu để mang lại cho những sản phẩm này sự độc đáo và sự cá tính riêng biệt nào.

                    </p>

                    <p>
                        Stella bắt đầu với việc nghiên cứu kỹ lưỡng giá cả của các nguyên liệu trên các nền tảng thương mại, tìm kiếm những ưu đãi hấp dẫn mà vẫn đảm bảo chất lượng. Từ đó, chúng tôi chọn lựa những nhà cung cấp đáng tin cậy và sản phẩm phù hợp với tiêu chuẩn của mình.

                    </p>
                    <p>
                        Khi đã có đủ các nguyên liệu, Stella bắt đầu quá trình chế tác những sản phẩm độc đáo này:
                    </p>
                    <p>
                        <strong> Bước 1:</strong> Stella chọn những chiếc kẹp tóc với màu sắc theo yêu cầu của khách hàng, bề mặt kẹp được xử lý một cách kỹ càng để đảm bảo quá trình đính các chữ cái được hoàn hảo nhất.

                    </p>
                    <p>
                        <strong> Bước 2:</strong> Sau khi vệ sinh sạch sẽ, chúng tôi sẽ dùng kẹp đính từng chữ cái lên theo yêu cầu bằng keo dán đặc biệt, nhằm đảm bảo các chi tiết trên sản phẩm hoàn hảo nhất.

                    </p>
                    <p>
                        <strong> Bước 3:</strong> Sau khi đính chữ lên kẹp, sản phẩm được đưa qua đèn UV để keo nhanh khô. Sau đó chúng tôi sơn một lớp sơn top lên để giúp sản phẩm không bị bay màu hay bong tróc theo thời gian.

                    </p>
                    <p>
                        Mỗi chiếc kẹp tóc customs từ Stella không chỉ đơn giản là một món phụ kiện, mà là một minh chứng cho sự khéo léo và tâm huyết. Cho dù bạn muốn thể hiện phong cách cá nhân của mình hay tìm kiếm một món quà ý nghĩa, những chiếc kẹp tóc từ Stella luôn sẵn sàng mang đến sự đặc biệt và cá tính riêng cho khách hàng.

                    </p>

                    <p className='text'>
                        <strong>Stella - Kẹp Handmade Đà Nẵng</strong>
                        <br />
                        Website: <a href="http://stella-clips.online/home" >http://stella-clips.online/home</a>
                        <br />
                        Facebook:{' '}
                        <a href="https://www.facebook.com/stellakephandmade">https://www.facebook.com/stellakephandmade</a>
                        <br />
                        Instagram:{' '}
                        <a href="https://www.instagram.com/stella_kephandmadedanang">https://www.instagram.com/stella_kephandmadedanang</a>
                    </p>
                </div>
            ),
        },
        7: {
            title: 'Phụ kiện tóc thời trang cho mọi dịp',
            content: (
                <div>
                    <p>
                        Phụ kiện tóc là một cách đơn giản và phong cách để nâng cao mọi diện mạo. Cho dù bạn đang chuẩn bị trang phục cho một sự kiện đặc biệt hay chỉ muốn thêm chút tinh tế cho phong cách hàng ngày của mình, phụ kiện tóc phù hợp có thể tạo nên sự khác biệt.

                    </p>

                    <p>
                    Các sản phẩm kẹp tóc handmade của Stella là một lựa chọn tuyệt vời cho những ai đang tìm kiếm phong cách cá nhân, độc đáo. Dưới đây là một số lời khuyên để bạn có thể chọn được kẹp tóc phù hợp cho từng sự kiện:

                    </p>
                    <p>
                    <ul>
                        <li><strong>Các Sự Kiện Trang Trọng:</strong> Chọn những chiếc kẹp tóc vỏ sò từ Stella với thiết kế được trang trí bằng ngọc trai hoặc các vỏ sò nổi bật. Những thiết kế tinh xảo này sẽ là điểm nhấn hoàn hảo cho những kiểu tóc và những bộ trang phục thanh lịch. </li>
                        <li><strong>Các Buổi Đi Chơi Thường Ngày:</strong> Lựa chọn những chiếc kẹp tóc customs để tăng phần cá tính cho phong cách ăn mặc hàng ngày của bạn. Có thể chọn các từ có ý nghĩa đặc biệt để thể hiện cá tính và phong cách riêng của bạn một cách dễ dàng.
                        </li>
                        <li><strong>Công Sở:</strong> Chọn những chiếc kẹp tóc vỏ sò đơn giản hoặc những chiếc kẹp tóc customs với gam màu sắc trung tính như trắng hoặc màu be để mang đến vẻ ngoài thanh lịch và chuyên nghiệp.
                        </li>
                        <li><strong>Các Dịp Đặc Biệt:</strong> Tạo nên những món quà khác biệt nhưng cũng đầy ý nghĩa và đáng nhớ với kẹp tóc customs trong các dịp đặc biệt như đám cưới, sinh nhật hay kỉ niệm.</li>
                    </ul>
                    </p>
                    <p>
                    Stella mang đến cho bạn những lựa chọn phụ kiện tóc thời trang đa dạng và đẳng cấp, phù hợp cho mọi dịp và phong cách cá nhân. Hãy khám phá bộ sưu tập của Stella ngay hôm nay để tìm ra chiếc kẹp tóc hoàn hảo nhất, từ những chiếc kẹp vỏ sò độc đáo đến những chiếc kẹp tóc custom thú vị, làm nổi bật vẻ đẹp tự nhiên và sự cá tính của bạn trong mọi thời điểm.
                    </p>


                    <p className='text'>
                        <strong>Stella - Kẹp Handmade Đà Nẵng</strong>
                        <br />
                        Website: <a href="http://stella-clips.online/home" >http://stella-clips.online/home</a>
                        <br />
                        Facebook:{' '}
                        <a href="https://www.facebook.com/stellakephandmade">https://www.facebook.com/stellakephandmade</a>
                        <br />
                        Instagram:{' '}
                        <a href="https://www.instagram.com/stella_kephandmadedanang">https://www.instagram.com/stella_kephandmadedanang</a>
                    </p>
                </div>
            ),
        },


        // Thêm các thông tin khác tương tự cho các blog khác nếu cần
    };

    // Kiểm tra xem id có tồn tại trong object blogs hay không
    if (id in blogs) {
        return (
            <div>
                <h1>{blogs[id].title}</h1>
                <div className='d-flex justify-content-center'>
                    <img style={{width: '500px'}} src={`/images/blog/blog${id}.jpg`} alt='image'/>
                </div>
                {blogs[id].content}
            </div>
        );
    } else {
        // Nếu không tìm thấy blog, có thể render thông báo hoặc chuyển hướng đến trang 404
        return <h1>Blog không tồn tại</h1>;
    }
};

export default BlogDetails;
