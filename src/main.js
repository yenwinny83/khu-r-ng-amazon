import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <header class="main-header">
    <nav class="navbar">
      <div class="logo">🌳 Amazon Rainforest</div>
      <ul class="nav-links">
        <li><a href="#overview">Tổng quan</a></li>
        <li><a href="#map">Bản đồ</a></li>
        <li><a href="#facts">Sự thật</a></li>
        <li><a href="#protect">Bảo vệ</a></li>
        <li><a href="#contact">Liên hệ</a></li>
      </ul>
    </nav>
  </header>
  <div class="amazon-container">
    <div>
      <section id="overview">
        <h1>Rừng Amazon - Kỳ quan xanh của Trái Đất</h1>
        <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Amazon Rainforest" class="amazon-img fade-in" />
        <p class="fade-in">
          Khi mặt trời vừa ló rạng trên những tán cây rậm rạp, rừng Amazon thức giấc với âm thanh của hàng ngàn loài chim, côn trùng và động vật hoang dã. Đây không chỉ là khu rừng nhiệt đới lớn nhất thế giới mà còn là nơi lưu giữ những bí ẩn chưa được khám phá.
        </p>
        <p class="fade-in">
          Amazon trải dài qua 9 quốc gia Nam Mỹ, là mái nhà của hơn 390 tỷ cây thuộc 16.000 loài khác nhau. Mỗi bước chân trong rừng đều có thể gặp những sinh vật kỳ lạ, từ loài cá piranha hung dữ đến những chú lười chậm chạp, hay những loài chim rực rỡ sắc màu.
        </p>
      </section>
      <section id="map" class="map-section fade-in">
        <h2>Bản đồ vị trí rừng Amazon</h2>
        <a href="https://www.google.com/maps/place/Amazon+Rainforest/" target="_blank">
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Amazon_rainforest_map.png" alt="Amazon Map" class="amazon-map" />
        </a>
        <p>
          <a href="https://www.google.com/maps/place/Amazon+Rainforest/" target="_blank" class="map-link">Xem trên Google Maps</a>
        </p>
      </section>
      <section id="contact" class="contact-section fade-in">
        <h2>Liên hệ & Nguồn tham khảo</h2>
        <p>Để biết thêm thông tin hoặc đóng góp ý kiến, hãy liên hệ qua email: <a href="mailto:amazon@protect.org">amazon@protect.org</a></p>
        <p>Nguồn: <a href="https://vi.wikipedia.org/wiki/R%E1%BB%ABng_Amazon" target="_blank">Wikipedia</a>, <a href="https://www.wwf.org.uk/where-we-work/amazon" target="_blank">WWF</a></p>
      </section>
    </div>
    <div>
      <section id="facts">
        <ul class="amazon-facts fade-in">
          <li><strong>Diện tích:</strong> Khoảng 5,5 triệu km², lớn hơn cả Tây Âu.</li>
          <li><strong>Lá phổi xanh:</strong> Amazon sản xuất 20% lượng oxy của thế giới.</li>
          <li><strong>Đa dạng sinh học:</strong> Khoảng 10% các loài đã biết trên thế giới sống ở đây.</li>
          <li><strong>Sông Amazon:</strong> Là con sông dài thứ hai thế giới, mang trong mình hàng ngàn loài cá độc đáo.</li>
          <li><strong>Người bản địa:</strong> Hàng trăm bộ tộc sinh sống, giữ gìn văn hóa và tri thức cổ xưa.</li>
        </ul>
        <div class="card">
          <button id="counter" type="button">Khám phá thêm</button>
          <button id="popupBtn" type="button">Sự thật thú vị</button>
        </div>
        <div id="popup" class="popup">
          <div class="popup-content">
            <span id="closePopup" class="close">&times;</span>
            <h3>🌿 Sự thật thú vị về Amazon</h3>
            <ul>
              <li>Amazon có loài cá điện có thể phát ra dòng điện lên tới 600 volt.</li>
              <li>Có loài ếch nhỏ chỉ dài 1cm sống trong rừng Amazon.</li>
              <li>Khoảng 2,5 triệu loài côn trùng được ghi nhận tại đây.</li>
              <li>Amazon là nơi có cây cao nhất Nam Mỹ: cây Sumaúma cao tới 80m.</li>
              <li>Một số bộ tộc ở Amazon chưa từng tiếp xúc với thế giới bên ngoài.</li>
            </ul>
          </div>
        </div>
      </section>
      <section id="protect">
        <blockquote style="font-style:italic; color:#a3e635; margin:2rem 0;">“Nếu rừng Amazon biến mất, thế giới sẽ mất đi một phần linh hồn xanh của mình.”</blockquote>
        <div class="tree-counter fade-in">
          <span>🌳 Số cây đã bảo vệ: <span id="treeCount">0</span></span>
          <button id="treeBtn">Bảo vệ thêm cây</button>
        </div>
      </section>
      <div class="slideshow-section fade-in">
        <h2>Ảnh đẹp về rừng Amazon</h2>
        <div class="slideshow">
          <img id="slideImg" src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Amazon Slideshow" />
          <div class="slideshow-controls">
            <button id="prevSlide">&#8592;</button>
            <button id="nextSlide">&#8594;</button>
          </div>
        </div>
      </div>
      <div class="faq-section fade-in">
        <h2>Câu hỏi thường gặp về rừng Amazon</h2>
        <div class="faq-group">
          <h3>Thông tin tổng quan</h3>
          <ul class="faq-list">
            <li><button class="faq-btn">Amazon đã tồn tại bao nhiêu năm?</button></li>
            <li><button class="faq-btn">Amazon ở đâu?</button></li>
            <li><button class="faq-btn">Amazon rộng, dài bao nhiêu?</button></li>
            <li><button class="faq-btn">Amazon sản xuất bao nhiêu phần trăm oxy cho thế giới?</button></li>
            <li><button class="faq-btn">Vì sao Amazon được gọi là lá phổi xanh của Trái Đất?</button></li>
          </ul>
        </div>
        <div class="faq-group">
          <h3>Động thực vật & đa dạng sinh học</h3>
          <ul class="faq-list">
            <li><button class="faq-btn">Amazon có bao nhiêu loài thực vật và động vật?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài chim?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài cá?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài côn trùng?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài bò sát?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài lưỡng cư?</button></li>
            <li><button class="faq-btn">Những loài nào phổ biến ở Amazon?</button></li>
            <li><button class="faq-btn">Có những loài động vật quý hiếm nào ở Amazon?</button></li>
            <li><button class="faq-btn">Amazon có những loài động vật nguy hiểm nào?</button></li>
            <li><button class="faq-btn">Amazon có những loài động vật tuyệt chủng nào?</button></li>
            <li><button class="faq-btn">Amazon có những loài chim quý hiếm nào?</button></li>
            <li><button class="faq-btn">Amazon có những loài hoa đặc sắc nào?</button></li>
            <li><button class="faq-btn">Amazon có những loài thực vật dược liệu nào?</button></li>
            <li><button class="faq-btn">Amazon giúp gì cho đa dạng sinh học?</button></li>
          </ul>
        </div>
        <div class="faq-group">
          <h3>Con người & văn hóa</h3>
          <ul class="faq-list">
            <li><button class="faq-btn">Amazon có bao nhiêu bộ tộc?</button></li>
            <li><button class="faq-btn">Amazon có ảnh hưởng gì đến văn hóa bản địa?</button></li>
            <li><button class="faq-btn">Amazon có những lễ hội truyền thống nào?</button></li>
            <li><button class="faq-btn">Amazon có những truyền thuyết nào?</button></li>
          </ul>
        </div>
        <div class="faq-group">
          <h3>Bảo tồn & môi trường</h3>
          <ul class="faq-list">
            <li><button class="faq-btn">Những nguy cơ nào đang đe dọa rừng Amazon?</button></li>
            <li><button class="faq-btn">Có những hoạt động bảo vệ rừng Amazon nào?</button></li>
            <li><button class="faq-btn">Amazon có những khu bảo tồn nổi tiếng nào?</button></li>
            <li><button class="faq-btn">Amazon có những dự án nghiên cứu nào?</button></li>
            <li><button class="faq-btn">Amazon có những nguồn nước ngọt nào?</button></li>
            <li><button class="faq-btn">Sông Amazon dài bao nhiêu km?</button></li>
          </ul>
        </div>
        <div class="faq-group">
          <h3>Địa lý & Khí hậu</h3>
          <ul class="faq-list">
            <li><button class="faq-btn">Amazon có khí hậu gì?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu mùa?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu hệ sinh thái?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu sông lớn?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu hồ nước?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu vùng đất ngập nước?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu đảo?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu khu vực bảo tồn?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu thành phố lớn?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu quốc gia có diện tích rừng lớn nhất?</button></li>
          </ul>
        </div>
        <div class="faq-group">
          <h3>Sinh học & Động thực vật</h3>
          <ul class="faq-list">
            <li><button class="faq-btn">Amazon có bao nhiêu loài cây thuốc?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài hoa lan?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài cá sấu?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài bướm?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài kiến?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài ong?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài dơi?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài chim săn mồi?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài động vật có vú?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loài động vật lưỡng cư?</button></li>
          </ul>
        </div>
        <div class="faq-group">
          <h3>Lịch sử & Văn hóa</h3>
          <ul class="faq-list">
            <li><button class="faq-btn">Amazon có lịch sử hình thành như thế nào?</button></li>
            <li><button class="faq-btn">Amazon có những truyền thuyết nổi tiếng nào?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu ngôn ngữ bản địa?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu lễ hội lớn?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại hình nghệ thuật truyền thống?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại nhạc cụ bản địa?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại trang phục truyền thống?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại thực phẩm đặc sản?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại hình du lịch sinh thái?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu dự án bảo tồn văn hóa?</button></li>
          </ul>
        </div>
        <div class="faq-group">
          <h3>Bảo tồn & Khoa học</h3>
          <ul class="faq-list">
            <li><button class="faq-btn">Amazon có bao nhiêu dự án nghiên cứu khoa học?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu chương trình bảo vệ động vật?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu chương trình giáo dục môi trường?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu trung tâm nghiên cứu?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu tổ chức phi chính phủ hoạt động?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu dự án hợp tác quốc tế?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu giải thưởng về bảo tồn?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu công trình khoa học nổi bật?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu phát minh liên quan đến sinh học?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu nghiên cứu về khí hậu?</button></li>
          </ul>
        </div>
        <div class="faq-group">
          <h3>Du lịch & Kinh tế</h3>
          <ul class="faq-list">
            <li><button class="faq-btn">Amazon có bao nhiêu điểm du lịch nổi tiếng?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại hình du lịch mạo hiểm?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại hình du lịch cộng đồng?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu sản phẩm xuất khẩu chính?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại hình kinh tế bản địa?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại hình nông nghiệp?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại hình thủ công mỹ nghệ?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại hình thương mại truyền thống?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại hình vận chuyển?</button></li>
            <li><button class="faq-btn">Amazon có bao nhiêu loại hình dịch vụ du lịch?</button></li>
          </ul>
        </div>
        <div id="faqAnswer" class="faq-answer"></div>
      </div>
    </div>
  </div>
  <footer class="main-footer fade-in">
    <p>&copy; 2025 Amazon Rainforest | Designed by yenwinny83</p>
  </footer>
`

setupCounter(document.querySelector('#counter'))

// Đảm bảo DOM đã render xong mới gán sự kiện
setTimeout(() => {
  // Hiệu ứng động khi cuộn
  const fadeEls = document.querySelectorAll('.fade-in');
  const fadeInOnScroll = () => {
    fadeEls.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 50) {
        el.classList.add('visible');
      }
    });
  };
  window.addEventListener('scroll', fadeInOnScroll);
  fadeInOnScroll();

  // Chuyển đổi chủ đề sáng/tối
  const themeBtn = document.getElementById('themeBtn');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      document.body.classList.toggle('light-theme');
      themeBtn.textContent = document.body.classList.contains('light-theme') ? '🌚 Đổi chủ đề' : '🌞 Đổi chủ đề';
    });
  }

  // Popup sự thật thú vị
  const popupBtn = document.getElementById('popupBtn');
  const popup = document.getElementById('popup');
  const closePopup = document.getElementById('closePopup');
  if (popupBtn && popup && closePopup) {
    popupBtn.addEventListener('click', () => {
      popup.style.display = 'block';
    });
    closePopup.addEventListener('click', () => {
      popup.style.display = 'none';
    });
    window.addEventListener('click', (e) => {
      if (e.target === popup) popup.style.display = 'none';
    });
  }

  // Bộ đếm cây bảo vệ
  const treeBtn = document.getElementById('treeBtn');
  const treeCount = document.getElementById('treeCount');
  let count = 0;
  if (treeBtn && treeCount) {
    treeBtn.addEventListener('click', () => {
      count++;
      treeCount.textContent = count;
      // Hiển thị hiệu ứng +1 người bảo vệ cây cối
      const plusOne = document.createElement('span');
      plusOne.textContent = '+1 người bảo vệ cây cối :)';
      plusOne.className = 'plus-one';
      treeBtn.parentElement.appendChild(plusOne);
      setTimeout(() => {
        plusOne.remove();
      }, 1200);
    });
  }

  // Slideshow ảnh đẹp về Amazon
  const slideImgs = [
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
  ];
  let slideIndex = 0;
  const slideImg = document.getElementById('slideImg');
  const prevSlide = document.getElementById('prevSlide');
  const nextSlide = document.getElementById('nextSlide');
  if (slideImg && prevSlide && nextSlide) {
    const showSlide = idx => {
      slideImg.src = slideImgs[idx];
    };
    prevSlide.addEventListener('click', () => {
      slideIndex = (slideIndex - 1 + slideImgs.length) % slideImgs.length;
      showSlide(slideIndex);
    });
    nextSlide.addEventListener('click', () => {
      slideIndex = (slideIndex + 1) % slideImgs.length;
      showSlide(slideIndex);
    });
    showSlide(slideIndex);
  }

  // Xử lý câu hỏi thường gặp
  const faqBtns = document.querySelectorAll('.faq-btn');
  const faqAnswer = document.getElementById('faqAnswer');
  const faqMap = {
    'Amazon đã tồn tại bao nhiêu năm?': 'Rừng Amazon đã tồn tại khoảng 55 triệu năm.',
    'Amazon ở đâu?': 'Amazon nằm ở Nam Mỹ, trải dài qua 9 quốc gia: Brazil, Peru, Colombia, Venezuela, Ecuador, Bolivia, Guyana, Suriname và Guiana thuộc Pháp.',
    'Amazon có bao nhiêu loài thực vật và động vật?': 'Rừng Amazon có hơn 390 tỷ cây thuộc 16.000 loài thực vật và khoảng 2,5 triệu loài động vật.',
    'Amazon có bao nhiêu bộ tộc?': 'Có khoảng 400 bộ tộc bản địa sinh sống trong rừng Amazon.',
    'Những loài nào phổ biến ở Amazon?': 'Các loài phổ biến ở Amazon gồm: cá piranha, cá điện, lười, báo đốm, vẹt, rắn anaconda, ếch độc, kiến quân đội.',
    'Amazon rộng, dài bao nhiêu?': 'Amazon rộng khoảng 5,5 triệu km² và dài khoảng 6.400 km.',
    'Amazon có vai trò gì với khí hậu toàn cầu?': 'Amazon giúp điều hòa khí hậu toàn cầu bằng cách hấp thụ khí CO₂ và sản xuất oxy, góp phần giảm hiệu ứng nhà kính.',
    'Những nguy cơ nào đang đe dọa rừng Amazon?': 'Các nguy cơ lớn nhất với rừng Amazon là chặt phá rừng, cháy rừng, khai thác khoáng sản, biến đổi khí hậu và mất đa dạng sinh học.',
    'Amazon sản xuất bao nhiêu phần trăm oxy cho thế giới?': 'Amazon sản xuất khoảng 20% lượng oxy của thế giới.',
    'Có những loài động vật quý hiếm nào ở Amazon?': 'Một số loài động vật quý hiếm ở Amazon gồm: báo đốm, cá heo sông Amazon, rái cá khổng lồ, chim vẹt xanh, rắn anaconda.',
    'Amazon có bao nhiêu loài chim?': 'Amazon có hơn 1.300 loài chim khác nhau.',
    'Sông Amazon dài bao nhiêu km?': 'Sông Amazon dài khoảng 6.400 km.',
    'Amazon giúp gì cho đa dạng sinh học?': 'Amazon là nơi sinh sống của khoảng 10% các loài đã biết trên thế giới, đóng vai trò quan trọng trong bảo vệ đa dạng sinh học.',
    'Có những hoạt động bảo vệ rừng Amazon nào?': 'Các hoạt động bảo vệ rừng Amazon gồm: trồng cây, giáo dục cộng đồng, bảo tồn động thực vật, kiểm soát khai thác rừng, hỗ trợ người bản địa.',
    'Amazon có bao nhiêu loài côn trùng?': 'Amazon có khoảng 2,5 triệu loài côn trùng được ghi nhận.',
    'Vì sao Amazon được gọi là lá phổi xanh của Trái Đất?': 'Amazon được gọi là “lá phổi xanh của Trái Đất” vì sản xuất lượng lớn oxy và hấp thụ khí CO₂, giúp duy trì sự sống và cân bằng khí hậu.',
    'Amazon có bao nhiêu loài cá?': 'Amazon có hơn 2.200 loài cá khác nhau, nhiều loài đặc hữu chỉ có ở khu vực này.',
    'Amazon có những loại cây đặc biệt nào?': 'Một số loại cây đặc biệt ở Amazon gồm: cây Sumaúma (cao nhất Nam Mỹ), cây Brazil nut, cây cao su, cây cacao.',
    'Amazon có những lễ hội truyền thống nào?': 'Người bản địa Amazon tổ chức nhiều lễ hội truyền thống như lễ hội mưa, lễ hội thu hoạch, lễ hội cá thần.',
    'Amazon có những khu bảo tồn nổi tiếng nào?': 'Các khu bảo tồn nổi tiếng ở Amazon gồm: Vườn quốc gia Jaú, Khu bảo tồn Mamirauá, Vườn quốc gia Yasuní.',
    'Amazon có ảnh hưởng gì đến văn hóa bản địa?': 'Amazon là trung tâm văn hóa của hàng trăm bộ tộc, nơi lưu giữ ngôn ngữ, truyền thuyết, nghi lễ và tri thức cổ xưa.',
    'Amazon có những loài thực vật dược liệu nào?': 'Amazon có nhiều loài thực vật dược liệu như cây ayahuasca, cây guarana, cây cat’s claw, cây copaiba.',
    'Amazon có bao nhiêu loài bò sát?': 'Amazon có hơn 400 loài bò sát, bao gồm rắn, thằn lằn, cá sấu và rùa.',
    'Amazon có bao nhiêu loài lưỡng cư?': 'Amazon có hơn 1.000 loài lưỡng cư, chủ yếu là ếch và cóc.',
    'Amazon có những loài động vật nguy hiểm nào?': 'Các loài động vật nguy hiểm ở Amazon gồm: cá piranha, rắn anaconda, kiến quân đội, nhện độc, báo đốm.',
    'Amazon có những loài chim quý hiếm nào?': 'Một số loài chim quý hiếm ở Amazon gồm: vẹt xanh Hyacinth, chim toucan, chim harpy eagle.',
    'Amazon có những nguồn nước ngọt nào?': 'Amazon có hệ thống sông ngòi và hồ nước ngọt lớn nhất thế giới, nổi bật là sông Amazon và các phụ lưu.',
    'Amazon có những loài hoa đặc sắc nào?': 'Amazon có nhiều loài hoa đặc sắc như hoa Victoria amazonica, hoa Heliconia, hoa Passion flower.',
    'Amazon có những truyền thuyết nào?': 'Amazon có nhiều truyền thuyết như truyền thuyết về cá thần, cây thần, các vị thần rừng và linh vật bảo vệ.',
    'Amazon có những dự án nghiên cứu nào?': 'Có nhiều dự án nghiên cứu về đa dạng sinh học, bảo tồn, khí hậu, y học và văn hóa bản địa tại Amazon.',
    'Amazon có những loài động vật tuyệt chủng nào?': 'Một số loài động vật tuyệt chủng ở Amazon gồm: rái cá khổng lồ Nam Mỹ, một số loài chim và cá đặc hữu.',
    'Amazon có khí hậu gì?': 'Amazon có khí hậu nhiệt đới ẩm, mưa nhiều quanh năm.',
    'Amazon có bao nhiêu mùa?': 'Amazon chủ yếu có hai mùa: mùa mưa và mùa khô.',
    'Amazon có bao nhiêu hệ sinh thái?': 'Amazon có hơn 10 hệ sinh thái khác nhau, bao gồm rừng mưa, đất ngập nước, savan, đồng cỏ.',
    'Amazon có bao nhiêu sông lớn?': 'Amazon có hàng trăm sông lớn, nổi bật nhất là sông Amazon.',
    'Amazon có bao nhiêu hồ nước?': 'Amazon có hàng ngàn hồ nước tự nhiên và nhân tạo.',
    'Amazon có bao nhiêu vùng đất ngập nước?': 'Amazon có diện tích đất ngập nước lớn nhất thế giới.',
    'Amazon có bao nhiêu đảo?': 'Amazon có nhiều đảo lớn nhỏ, nổi bật là đảo Marajó.',
    'Amazon có bao nhiêu khu vực bảo tồn?': 'Amazon có hơn 300 khu vực bảo tồn thiên nhiên.',
    'Amazon có bao nhiêu thành phố lớn?': 'Amazon có các thành phố lớn như Manaus, Belém, Iquitos.',
    'Amazon có bao nhiêu quốc gia có diện tích rừng lớn nhất?': 'Brazil có diện tích rừng Amazon lớn nhất, tiếp theo là Peru và Colombia.',
    'Amazon có bao nhiêu loài cây thuốc?': 'Amazon có hàng ngàn loài cây thuốc quý hiếm.',
    'Amazon có bao nhiêu loài hoa lan?': 'Amazon có hơn 1.500 loài hoa lan.',
    'Amazon có bao nhiêu loài cá sấu?': 'Amazon có khoảng 10 loài cá sấu.',
    'Amazon có bao nhiêu loài bướm?': 'Amazon có hơn 7.000 loài bướm.',
    'Amazon có bao nhiêu loài kiến?': 'Amazon có hơn 2.000 loài kiến.',
    'Amazon có bao nhiêu loài ong?': 'Amazon có hàng trăm loài ong bản địa.',
    'Amazon có bao nhiêu loài dơi?': 'Amazon có hơn 150 loài dơi.',
    'Amazon có bao nhiêu loài chim săn mồi?': 'Amazon có nhiều loài chim săn mồi như đại bàng, diều hâu.',
    'Amazon có bao nhiêu loài động vật có vú?': 'Amazon có hơn 400 loài động vật có vú.',
    'Amazon có bao nhiêu loài động vật lưỡng cư?': 'Amazon có hơn 1.000 loài lưỡng cư.',
    'Amazon có lịch sử hình thành như thế nào?': 'Amazon hình thành từ kỷ Paleocene, khoảng 55 triệu năm trước.',
    'Amazon có những truyền thuyết nổi tiếng nào?': 'Có truyền thuyết về cá thần, cây thần, các vị thần rừng.',
    'Amazon có bao nhiêu ngôn ngữ bản địa?': 'Amazon có hơn 330 ngôn ngữ bản địa.',
    'Amazon có bao nhiêu lễ hội lớn?': 'Amazon có hàng chục lễ hội lớn mỗi năm.',
    'Amazon có bao nhiêu loại hình nghệ thuật truyền thống?': 'Amazon có nhiều loại hình nghệ thuật như múa, hát, vẽ mặt.',
    'Amazon có bao nhiêu loại nhạc cụ bản địa?': 'Amazon có hàng chục loại nhạc cụ truyền thống.',
    'Amazon có bao nhiêu loại trang phục truyền thống?': 'Amazon có nhiều loại trang phục đặc trưng của các bộ tộc.',
    'Amazon có bao nhiêu loại thực phẩm đặc sản?': 'Amazon có nhiều thực phẩm đặc sản như cá tambaqui, quả açaí.',
    'Amazon có bao nhiêu loại hình du lịch sinh thái?': 'Amazon có nhiều loại hình du lịch sinh thái như trekking, khám phá rừng, du thuyền.',
    'Amazon có bao nhiêu dự án bảo tồn văn hóa?': 'Amazon có hàng chục dự án bảo tồn văn hóa bản địa.',
    'Amazon có bao nhiêu dự án nghiên cứu khoa học?': 'Amazon có hàng trăm dự án nghiên cứu khoa học quốc tế.',
    'Amazon có bao nhiêu chương trình bảo vệ động vật?': 'Amazon có nhiều chương trình bảo vệ động vật quý hiếm.',
    'Amazon có bao nhiêu chương trình giáo dục môi trường?': 'Amazon có nhiều chương trình giáo dục môi trường cho cộng đồng.',
    'Amazon có bao nhiêu trung tâm nghiên cứu?': 'Amazon có hơn 50 trung tâm nghiên cứu sinh học và môi trường.',
    'Amazon có bao nhiêu tổ chức phi chính phủ hoạt động?': 'Amazon có hàng trăm tổ chức phi chính phủ bảo vệ rừng.',
    'Amazon có bao nhiêu dự án hợp tác quốc tế?': 'Amazon có nhiều dự án hợp tác quốc tế về bảo tồn và nghiên cứu.',
    'Amazon có bao nhiêu giải thưởng về bảo tồn?': 'Amazon đã nhận nhiều giải thưởng quốc tế về bảo tồn thiên nhiên.',
    'Amazon có bao nhiêu công trình khoa học nổi bật?': 'Amazon có nhiều công trình khoa học về đa dạng sinh học và khí hậu.',
    'Amazon có bao nhiêu phát minh liên quan đến sinh học?': 'Amazon là nguồn cảm hứng cho nhiều phát minh về y học, sinh học.',
    'Amazon có bao nhiêu nghiên cứu về khí hậu?': 'Amazon là trung tâm nghiên cứu khí hậu lớn nhất Nam Mỹ.',
    'Amazon có bao nhiêu điểm du lịch nổi tiếng?': 'Amazon có nhiều điểm du lịch nổi tiếng như Manaus, Belém, sông Negro.',
    'Amazon có bao nhiêu loại hình du lịch mạo hiểm?': 'Amazon có các loại hình du lịch mạo hiểm như leo núi, khám phá hang động.',
    'Amazon có bao nhiêu loại hình du lịch cộng đồng?': 'Amazon có nhiều loại hình du lịch cộng đồng với người bản địa.',
    'Amazon có bao nhiêu sản phẩm xuất khẩu chính?': 'Amazon xuất khẩu gỗ, cao su, quả açaí, cá.',
    'Amazon có bao nhiêu loại hình kinh tế bản địa?': 'Amazon có các loại hình kinh tế như săn bắt, hái lượm, nông nghiệp truyền thống.',
    'Amazon có bao nhiêu loại hình nông nghiệp?': 'Amazon có nông nghiệp truyền thống và hiện đại.',
    'Amazon có bao nhiêu loại hình thủ công mỹ nghệ?': 'Amazon nổi tiếng với các sản phẩm thủ công mỹ nghệ bản địa.',
    'Amazon có bao nhiêu loại hình thương mại truyền thống?': 'Amazon có các chợ truyền thống, trao đổi hàng hóa bản địa.',
    'Amazon có bao nhiêu loại hình vận chuyển?': 'Amazon chủ yếu vận chuyển bằng đường thủy, đường bộ và hàng không.',
    'Amazon có bao nhiêu loại hình dịch vụ du lịch?': 'Amazon có các dịch vụ du lịch như hướng dẫn viên, du thuyền, homestay.',
    'Amazon có bao nhiêu loại thực phẩm bản địa?': 'Amazon có nhiều loại thực phẩm bản địa như quả açaí, cá tambaqui, manioc.',
    'Amazon có bao nhiêu loại cây dược liệu?': 'Amazon có hàng ngàn loài cây dược liệu quý hiếm.',
    'Amazon có bao nhiêu loại thuốc truyền thống?': 'Amazon có nhiều loại thuốc truyền thống từ cây cỏ bản địa.',
    'Amazon có bao nhiêu loại cây ăn quả?': 'Amazon có hàng trăm loài cây ăn quả như açaí, cacao, cam, chuối.',
    'Amazon có bao nhiêu loại cây lấy gỗ?': 'Amazon có nhiều loài cây lấy gỗ như mahogany, teak.',
    'Amazon có bao nhiêu loại cây lấy nhựa?': 'Amazon có các loài cây lấy nhựa như cao su, copaiba.',
    'Amazon có bao nhiêu loại cây lấy dầu?': 'Amazon có các loài cây lấy dầu như cây dừa, cây copaiba.',
    'Amazon có bao nhiêu loại cây lấy sợi?': 'Amazon có các loài cây lấy sợi như cây bông, cây sisal.',
    'Amazon có bao nhiêu loại cây lấy lá?': 'Amazon có nhiều loài cây lấy lá dùng làm thuốc, thực phẩm.',
    'Amazon có bao nhiêu loại cây lấy hạt?': 'Amazon có các loài cây lấy hạt như Brazil nut, cacao, açaí.'
  };
  faqBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      faqAnswer.textContent = faqMap[btn.textContent] || 'Thông tin đang được cập nhật.';
    });
  });
}, 0);
