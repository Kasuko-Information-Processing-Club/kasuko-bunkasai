document.addEventListener('DOMContentLoaded', () => {
    // 必要な要素を取得
    const carousel = document.getElementById('carousel');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const dotsContainer = document.getElementById('pagination-dots');
    
    // カードの枚数を取得
    const cards = carousel.querySelectorAll('.card');
    const cardCount = cards.length;
    let currentIndex = 0; // 現在表示されているカードのインデックス
    const slideDuration = 4000; // 自動スライドの間隔 (4秒)
    let slideInterval;

    // --- 1. スライドの移動関数 ---
    const updateCarousel = () => {
        // translateX() で現在表示すべきカードの位置までトラックを移動
        const offset = -currentIndex * (100 / cardCount);
        carousel.style.transform = `translateX(${offset}%)`;
        
        // ドットの状態を更新
        updateDots();
    };

    // --- 2. ドットの生成と更新関数 ---
    const createDots = () => {
        for (let i = 0; i < cardCount; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i;
            // ドットをクリックしたときの処理
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
                resetAutoSlide();
            });
            dotsContainer.appendChild(dot);
        }
    };

    const updateDots = () => {
        const dots = dotsContainer.querySelectorAll('.dot');
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    };

    // --- 3. ナビゲーションボタンの処理 ---
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : cardCount - 1; // 最後のカードへ戻る
        updateCarousel();
        resetAutoSlide();
    });

    // --- 3. ナビゲーションボタンの処理 ---
    // ... (prevButton の処理) ...

    nextButton.addEventListener('click', () => {
        // 現在のインデックスが最後のカードより小さいかチェック
        // 小さければ+1、そうでなければ0（最初）に戻る
        currentIndex = (currentIndex < cardCount - 1) ? currentIndex + 1 : 0; // 👈 ここで0に戻しています
        updateCarousel();
        resetAutoSlide();
    });
    // ...

    // --- 4. 自動スライド機能 ---
    const startAutoSlide = () => {
        slideInterval = setInterval(() => {
            // 次へ移動
            currentIndex = (currentIndex < cardCount - 1) ? currentIndex + 1 : 0; 
            updateCarousel();
        }, slideDuration);
    };

    const stopAutoSlide = () => {
        clearInterval(slideInterval);
    };

    const resetAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };
    
    // ホバー時の停止/再開
    const outerCarousel = document.getElementById('outer-carousel');
    outerCarousel.addEventListener('mouseenter', stopAutoSlide);
    outerCarousel.addEventListener('mouseleave', startAutoSlide);

    // --- 5. 初期化処理 ---
    createDots();
    updateCarousel(); // 初期位置をセット
    startAutoSlide(); // 自動スライド開始
});