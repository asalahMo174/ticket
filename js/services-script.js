// القائمة الجانبية
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// فلترة الخدمات حسب القسم عند الضغط على الأزرار
const tabBtns = document.querySelectorAll('.tab-btn');
const serviceCards = document.querySelectorAll('.service-card');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // إزالة حالة النشاط من كل الأزرار وتفعيل الزر المضغوط
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const category = btn.getAttribute('data-category');

        // إظهار وإخفاء الخدمات حسب التصنيف
        serviceCards.forEach(card => {
            if (category === 'all' || card.getAttribute('data-category') === category) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// عند الضغط على أي كارت خدمة يتم التحويل فوراً لصفحة الحجز
serviceCards.forEach(card => {
    card.addEventListener('click', () => {
        window.location.href = "booking.html";
    });
});