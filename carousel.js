document.addEventListener('DOMContentLoaded', () => {
    //*****定義欄*****

    //Carousel設定
    const carousel = document.querySelector("#carousel");
    // 1. カード要素を1つ取得
    const card = carousel.querySelector('.card');
    // 2. カードの実際の幅(px)を取得
    const cardWidth = card.offsetWidth;
    // 3. CSSで設定した gap: 16px の値
    const gap = 16;
    //要素の数
    const indexMax = 3;
    

    //Script設定
    const intervalTime = 7000;

    //indexの場所にスライドする
    function ScrollToIndex(index){
        let scrollAmount = (cardWidth + gap) * index;
        carousel.scrollTo({
            left: scrollAmount, 
            behavior: "smooth",
        })
    }

    //*****実行欄*****

    {
        let intervalCount = 0;
        setInterval(()=>{
            ScrollToIndex(intervalCount);
            intervalCount ++;
            if (intervalCount > indexMax){
                intervalCount = 0;
            }
        }, 1000);
    }

    console.log("移動距離:", scrollAmount);
});