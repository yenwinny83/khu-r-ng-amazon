import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="theme-toggle">
    <button id="themeBtn">🌞 Đổi chủ đề</button>
  </div>
  <div class="amazon-container">
    <h1>Rừng Amazon - Kỳ quan xanh của Trái Đất</h1>
    <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Amazon Rainforest" class="amazon-img fade-in" />
    <p class="fade-in">
      Khi mặt trời vừa ló rạng trên những tán cây rậm rạp, rừng Amazon thức giấc với âm thanh của hàng ngàn loài chim, côn trùng và động vật hoang dã. Đây không chỉ là khu rừng nhiệt đới lớn nhất thế giới mà còn là nơi lưu giữ những bí ẩn chưa được khám phá.
    </p>
    <p class="fade-in">
      Amazon trải dài qua 9 quốc gia Nam Mỹ, là mái nhà của hơn 390 tỷ cây thuộc 16.000 loài khác nhau. Mỗi bước chân trong rừng đều có thể gặp những sinh vật kỳ lạ, từ loài cá piranha hung dữ đến những chú lười chậm chạp, hay những loài chim rực rỡ sắc màu.
    </p>
    <ul class="amazon-facts fade-in">
      <li><strong>Diện tích:</strong> Khoảng 5,5 triệu km², lớn hơn cả Tây Âu.</li>
      <li><strong>Lá phổi xanh:</strong> Amazon sản xuất 20% lượng oxy của thế giới.</li>
      <li><strong>Đa dạng sinh học:</strong> Khoảng 10% các loài đã biết trên thế giới sống ở đây.</li>
      <li><strong>Sông Amazon:</strong> Là con sông dài thứ hai thế giới, mang trong mình hàng ngàn loài cá độc đáo.</li>
      <li><strong>Người bản địa:</strong> Hàng trăm bộ tộc sinh sống, giữ gìn văn hóa và tri thức cổ xưa.</li>
    </ul>
    <div class="map-section fade-in">
      <h2>Bản đồ vị trí rừng Amazon</h2>
      <a href="https://www.google.com/maps/place/Amazon+Rainforest/" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/Amazon_rainforest_map.png" alt="Amazon Map" class="amazon-map" />
      </a>
      <p>
        <a href="https://www.google.com/maps/place/Amazon+Rainforest/" target="_blank" class="map-link">Xem trên Google Maps</a>
      </p>
    </div>
    <p class="fade-in">
      Rừng Amazon không chỉ quan trọng với Nam Mỹ mà còn với toàn bộ hành tinh. Nơi đây giúp điều hòa khí hậu, hấp thụ khí CO₂ và bảo vệ đa dạng sinh học. Tuy nhiên, Amazon đang đối mặt với nguy cơ bị tàn phá do nạn chặt phá rừng, cháy rừng và biến đổi khí hậu.
    </div>
    <p class="fade-in">
      Rừng Amazon không chỉ quan trọng với Nam Mỹ mà còn với toàn bộ hành tinh. Nơi đây giúp điều hòa khí hậu, hấp thụ khí CO₂ và bảo vệ đa dạng sinh học. Tuy nhiên, Amazon đang đối mặt với nguy cơ bị tàn phá do nạn chặt phá rừng, cháy rừng và biến đổi khí hậu.
    </p>
    <blockquote style="font-style:italic; color:#a3e635; margin:2rem 0;">“Nếu rừng Amazon biến mất, thế giới sẽ mất đi một phần linh hồn xanh của mình.”</blockquote>
    <div class="card">
      <button id="counter" type="button">Khám phá thêm</button>
      <button id="popupBtn" type="button">Sự thật thú vị</button>
    </div>
    <div class="tree-counter fade-in">
      <span>🌳 Số cây đã bảo vệ: <span id="treeCount">0</span></span>
      <button id="treeBtn">Bảo vệ thêm cây</button>
    </div>
    <p class="read-the-docs fade-in">
      Hãy cùng nhau bảo vệ rừng Amazon, bảo vệ sự sống và tương lai của Trái Đất!
    </p>
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
  </div>
`

setupCounter(document.querySelector('#counter'))

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
themeBtn.addEventListener('click', () => {
  document.body.classList.toggle('light-theme');
  themeBtn.textContent = document.body.classList.contains('light-theme') ? '🌚 Đổi chủ đề' : '🌞 Đổi chủ đề';
});

// Popup sự thật thú vị
const popupBtn = document.getElementById('popupBtn');
const popup = document.getElementById('popup');
const closePopup = document.getElementById('closePopup');
popupBtn.addEventListener('click', () => {
  popup.style.display = 'block';
});
closePopup.addEventListener('click', () => {
  popup.style.display = 'none';
});
window.addEventListener('click', (e) => {
  if (e.target === popup) popup.style.display = 'none';
});

// Bộ đếm cây bảo vệ
const treeBtn = document.getElementById('treeBtn');
const treeCount = document.getElementById('treeCount');
let count = 0;
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
