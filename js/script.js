const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentIndex = 0;

function getSlideWidth() {
  // 첫 번째 슬라이드의 offsetWidth와 여백(20px)의 합을 사용
  return slides[0].offsetWidth + 20;
}

let slideWidth = getSlideWidth();

// 창 크기 변경 시 슬라이드 폭 재계산 및 현재 위치 보정
window.addEventListener('resize', () => {
  slideWidth = getSlideWidth();
  slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

// 다음 버튼 클릭 시
nextBtn.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});

// 이전 버튼 클릭 시
prevBtn.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--;
    slider.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
  }
});
