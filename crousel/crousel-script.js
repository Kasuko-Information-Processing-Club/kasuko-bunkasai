// --- 要素の取得 ---
const wrapper = document.querySelector('.slider-wrapper');
const slides = document.querySelectorAll('.slide');

//点々を入れる箱を取得する
const indicatorsContainer = document.querySelector('.slider-indicators');

// --- 変数（State） ---
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
let currentIndex = 0;
let autoSlideInterval;

// --- イベントリスナー設定 ---
slides.forEach((slide, index) => {
  // 画像ドラッグのゴースト防止
  const img = slide.querySelector('img');
  if (img) img.addEventListener('dragstart', (e) => e.preventDefault());

  // タッチ操作 (スマホ)
  slide.addEventListener('touchstart', touchStart(index));
  slide.addEventListener('touchend', touchEnd);
  slide.addEventListener('touchmove', touchMove);

  // マウス操作 (PC)
  slide.addEventListener('mousedown', touchStart(index));
  slide.addEventListener('mouseup', touchEnd);
  slide.addEventListener('mouseleave', touchEnd);
  slide.addEventListener('mousemove', touchMove);
});

////////点々の生成////////
//JSが点々を生成→スライドが動くたびupdateIndicator()が呼ばれる→
// uodateIndicatoe()が青点を消し、現在のスライドに青点をつける

slides.forEach((_, index) => {
  // divタグを作る
  const dot = document.createElement('div');
  dot.classList.add('indicator');
  
  // 最初だけactiveをつけておく
  if (index === 0) dot.classList.add('active');

// 点をクリックするとそのページに飛ぶ
dot.addEventListener('click', () => {
    currentIndex = index;
    setPositionByIndex();
    startAutoSlide(); // タイマーリセット
    });
    //HTMLに追加
    indicatorsContainer.appendChild(dot);
});


////////点々生成終わり////////

// 右クリックメニュー無効化
window.oncontextmenu = function(event) {
  event.preventDefault();
  event.stopPropagation();
  return false;
}

// 初期起動：オートスライド開始
startAutoSlide();


// --- Step 2: 開始処理 ---
function touchStart(index) {
  return function(event) {
    isDragging = true;
    currentIndex = index;
    startPos = getPositionX(event);
    
    wrapper.classList.add('grabbing');
    wrapper.style.transition = 'none'; // 操作中はアニメーションOFF
    
    stopAutoSlide(); // タイマー停止
    animationID = requestAnimationFrame(animation);
  }
}

// --- Step 3: 移動処理 ---
function touchMove(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    const currentMove = currentPosition - startPos;
    currentTranslate = prevTranslate + currentMove;
  }
}

// --- Step 4: 終了・判定処理 ---
function touchEnd() {
  isDragging = false;
  cancelAnimationFrame(animationID);
  wrapper.classList.remove('grabbing');

  const movedBy = currentTranslate - prevTranslate;
  const threshold = 50; // しきい値

  // 次へ
  if (movedBy < -threshold && currentIndex < slides.length - 1) {
    currentIndex += 1;
  } 
  // 前へ
  else if (movedBy > threshold && currentIndex > 0) {
    currentIndex -= 1;
  }

  setPositionByIndex();
  startAutoSlide(); // タイマー再開
}

// --- アニメーションループ ---
function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  wrapper.style.transform = `translateX(${currentTranslate}px)`;
}

// --- 位置確定・アニメーション ---
function setPositionByIndex() {
  currentTranslate = currentIndex * -wrapper.clientWidth;
  prevTranslate = currentTranslate;
  
  wrapper.style.transition = 'transform 0.3s ease-out';
  wrapper.style.transform = `translateX(${currentTranslate}px)`;
}

// --- ヘルパー関数 ---
function getPositionX(event) {
  return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

// --- オートスライド ---
function startAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(() => {
    if (currentIndex < slides.length - 1) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    setPositionByIndex();
  }, 3000);
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

////setPositionByIndex 関数をアップデート////
function setPositionByIndex() {
  currentTranslate = currentIndex * -wrapper.clientWidth;
  prevTranslate = currentTranslate;
  
  wrapper.style.transition = 'transform 0.3s ease-out';
  wrapper.style.transform = `translateX(${currentTranslate}px)`;

  //ここで点の表示を更新する関数を呼ぶ
  updateIndicators();
}
////終わり////

////点のクラスを付け替える////
function updateIndicators() {
  // すべての点を取得
  const dots = document.querySelectorAll('.indicator');
  
  dots.forEach((dot, index) => {
    // もし「今の番号(currentIndex)」と「点の番号(index)」が一致したらactive
    // dot.classList.toggle('クラス名', 条件式);
    dot.classList.toggle('active', index === currentIndex);
  });
}
////終わり////
