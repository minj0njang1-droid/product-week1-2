const menus = [
  { name: '김치찌개', category: '한식', emoji: '🥘' },
  { name: '된장찌개', category: '한식', emoji: '🍲' },
  { name: '비빔밥', category: '한식', emoji: '🥗' },
  { name: '불고기', category: '한식', emoji: '🥩' },
  { name: '삼겹살', category: '한식', emoji: '🥓' },
  { name: '파스타', category: '양식', emoji: '🍝' },
  { name: '스테이크', category: '양식', emoji: '🍽️' },
  { name: '피자', category: '양식', emoji: '🍕' },
  { name: '햄버거', category: '양식', emoji: '🍔' },
  { name: '초밥', category: '일식', emoji: '🍣' },
  { name: '라멘', category: '일식', emoji: '🍜' },
  { name: '돈가스', category: '일식', emoji: '🍱' },
  { name: '짜장면', category: '중식', emoji: '🥢' },
  { name: '짬뽕', category: '중식', emoji: '🍜' },
  { name: '탕수육', category: '중식', emoji: '🥣' },
  { name: '쌀국수', category: '아시안', emoji: '🍜' },
  { name: '팟타이', category: '아시안', emoji: '🍛' },
  { name: '떡볶이', category: '분식', emoji: '🍡' },
  { name: '치킨', category: '치킨', emoji: '🍗' },
  { name: '마라탕', category: '중식', emoji: '🥘' },
];

const pickBtn = document.getElementById('pick-btn');
const resultCard = document.getElementById('result-card');
const menuCategory = document.getElementById('menu-category');
const menuName = document.getElementById('menu-name');
const menuEmoji = document.getElementById('menu-emoji');
const historyList = document.getElementById('history-list');

let history = [];

function pickRandomMenu() {
  // Add animation class
  resultCard.classList.add('hidden');
  
  setTimeout(() => {
    const randomIndex = Math.floor(Math.random() * menus.length);
    const selected = menus[randomIndex];

    menuCategory.textContent = selected.category;
    menuName.textContent = selected.name;
    menuEmoji.textContent = selected.emoji;

    resultCard.classList.remove('hidden');
    
    // Add to history
    updateHistory(selected);
  }, 150);
}

function updateHistory(item) {
  history.unshift(item);
  if (history.length > 5) history.pop();

  historyList.innerHTML = history
    .map(menu => `<li><span>${menu.name}</span> <small>${menu.category}</small></li>`)
    .join('');
}

pickBtn.addEventListener('click', pickRandomMenu);
