// dom에서 path 찾기
const path = document.querySelector('#path');
const openBtn = document.querySelector('.btn-open');

// path의 전체 길이 구하기
const pathLength = path.getTotalLength();

// dash 의 길이와 공백
// path.style.strokeDasharray = 1000 + " " + 1000;
// path.style.strokeDasharray = pathLength + " " + pathLength;
path.style.strokeDasharray = `${pathLength} ${pathLength}`;

// dash를 어디서 부터 그릴지
path.style.strokeDashoffset = pathLength;

function scrollHandler() {
  // 현재 스크롤의 위치
  const scrollTop = document.documentElement.scrollTop;

  // 전체 스크롤의 길이
  const scrollHeight = document.documentElement.scrollHeight;

  // 뷰포트의 높이
  const clientHeight = document.documentElement.clientHeight;

  // 스크롤의 위치 => % 0 - 1 의 값을 가짐
  // 전체 스크롤 영역 높이에서 뷰포트 크기만큼을 빼줌.
  const scrollPercentage = scrollTop / (scrollHeight - clientHeight)

  const drawLength = pathLength * scrollPercentage;

  // pathLength -> 0
  path.style.strokeDashoffset = pathLength - drawLength;


  // button opacity 조절 0 - 1
  openBtn.style.opacity = scrollPercentage;

  if (scrollPercentage > 0.8) {
    openBtn.disabled = false;
  } else {
    openBtn.disabled = true;
  }
}
window.addEventListener('scroll', scrollHandler)