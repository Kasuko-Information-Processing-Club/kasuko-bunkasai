document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.querySelector("#carousel");

    // 1. カード要素を1つ取得
    const card = carousel.querySelector('.card');
    
    // 2. カードの実際の幅(px)を取得
    const cardWidth = card.offsetWidth;
    
    // 3. CSSで設定した gap: 16px の値
    const gap = 16; 

    // 4. 「カード1枚分 + 隙間」の距離を計算
    const scrollAmount = cardWidth + gap;

    // レイアウトが完全に確定するのを少し待つ
    setTimeout(() => {
        // 5. 計算した位置へスクロール
        carousel.scrollTo({
            left: scrollAmount, 
            behavior: "smooth",
        });
        
        // コンソールで確認用（F12キーで見れます）
        console.log("移動距離:", scrollAmount);

    }, 500); // 0.1秒だと計算が間に合わないことがあるので0.5秒くらいが安全です
});