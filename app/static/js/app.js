document.addEventListener('DOMContentLoaded', () => {
    // Корзина
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartCount = 0;
    const cartCountEl = document.querySelector('.cart-count');

    addToCartButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            cartCount++;
            cartCountEl.textContent = cartCount;
            btn.textContent = '✓ В корзине';
            btn.style.backgroundColor = '#4caf50';
            
            setTimeout(() => {
                btn.textContent = 'В корзину';
                btn.style.backgroundColor = '';
            }, 1500);
        });
    });

    // Плавная прокрутка
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Кнопка "Войти"
    document.getElementById('login-btn')?.addEventListener('click', () => {
        window.location.href = '/auth/login';
    });
});