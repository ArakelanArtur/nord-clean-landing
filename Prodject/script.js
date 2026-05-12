
    // Маска телефона
    const phoneInput = document.getElementById('phone');
    if(phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let x = this.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
            if(!x) return;
            this.value = !x[2] ? '+' + x[1] : '+' + x[1] + ' (' + x[2] + (x[3] ? ') ' + x[3] : '') + (x[4] ? '-' + x[4] : '') + (x[5] ? '-' + x[5] : '');
        });
    }

    // FAQ аккордеон
    document.querySelectorAll('.faq-item').forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // Форма: имитация отправки
    const form = document.getElementById('leadForm');
    if(form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const msgDiv = document.getElementById('formMessage');
            msgDiv.innerHTML = '✅ Спасибо! Менеджер свяжется с вами в ближайшее время.';
            msgDiv.style.color = '#1f7b6e';
            form.reset();
            setTimeout(() => { msgDiv.innerHTML = ''; }, 4000);
        });
    }

    // Плавная навигация к якорям
    document.querySelectorAll('.nav-links a, .btn-outline-light, a[href="#request"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            if(this.getAttribute('href') && this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const target = document.getElementById(targetId);
                if(target) {
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
