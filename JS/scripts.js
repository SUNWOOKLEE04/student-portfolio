// 1. 네비게이션 현재 페이지 활성화
document.querySelectorAll('nav ul li a').forEach(link => {
  if (link.href === window.location.href) link.classList.add('active');
});

// 2. 프로필/프로젝트 이미지 클릭 시 확대/축소 토글 (About Me)
document.querySelectorAll('.profile-img').forEach(img => {
  img.addEventListener('click', function () {
    img.classList.toggle('zoomed');
  });
});

// 3. 프로젝트 아이콘 클릭 시 홈으로 이동 (Projects)
document.querySelectorAll('.project-icon').forEach(icon => {
  icon.addEventListener('click', function () {
    // 원하는 주소로 이동
    window.location.href = "../Basketball/HTML/home.html";
  });
});

// 4. 하이라이트/프로젝트 설명 클릭 시 강조 효과
document.querySelectorAll('.highlight-list li, .project-info p').forEach(item => {
  item.addEventListener('click', function () {
    item.classList.toggle('highlighted');
  });
});

// 5. 스크롤 시 헤더 그림자 효과 (모든 페이지)
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if(header) {
    if(window.scrollY > 50) {
      header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
    } else {
      header.style.boxShadow = 'none';
    }
  }
});

// 6. 프로젝트 홈/클릭 시 잠깐 색상 변경 후 이동 (Projects)
document.querySelectorAll('.project-home-btn, .btn').forEach(btn => {
  btn.addEventListener('click', function(e) {
    e.preventDefault();
    btn.style.backgroundColor = '#003366';
    setTimeout(() => {
      window.location.href = btn.href;
    }, 150);
  });
});
