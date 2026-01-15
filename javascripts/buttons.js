// ボタン要素を取得（class="menu-button"を持つbuttonタグを指定）
const menuButton = document.querySelector('button.menu-button');
// メニュー要素を取得
const navMenu = document.querySelector('.sp-menu');

menuButton.addEventListener('click', () => {
    // .sp-menu に "active" クラスを付け外しする
    navMenu.classList.toggle('active');
    
    // (オプション) ボタンの文字を切り替える
    if (navMenu.classList.contains('active')) {
        menuButton.textContent = '✕'; // 閉じる
    } else {
        menuButton.textContent = '☰'; // メニュー
    }
});

// (オプション) メニュー内のリンクをクリックしたら閉じる処理
const menuLinks = document.querySelectorAll('.sp-menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuButton.textContent = '☰';
    });
});
