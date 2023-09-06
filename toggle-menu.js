window.addEventListener('load', function () {
    var button = document.querySelector('.toggle-menu-button');
    var menu = document.querySelector('.header-site-menu');
    var navs = document.querySelectorAll('.header-site-menu li');

    // ハンバーガーメニューのアクション
    button.addEventListener('click', function () {
        if (menu.classList.contains('is-show')) {
            menu.classList.remove('is-show');
        }
        else {
            menu.classList.add('is-show');
        }
    });
    
    // ハンバーガーメニュー内に格納されたヘッダーメニューのアクション
    navs.forEach(element => {
        element.addEventListener('click', function () {
            if (menu.classList.contains('is-show')) {
                menu.classList.remove('is-show');
            }
        })
        
    });
});
