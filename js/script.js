// فتح وغلق القائمة الجانبية عند الضغط على زر القائمة
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// التفاعل عند الضغط على زر "احجز الآن" والتوجيه لصفحة الحجز
const bookNowBtn = document.getElementById('bookNowBtn');

bookNowBtn.addEventListener('click', () => {
    const service = document.getElementById('serviceSelect').value;
    const branch = document.getElementById('branchSelect').value;

    if (!service || !branch) {
        alert('من فضلك اختر الخدمة والفرع أولاً');
    } else {
        // التحويل المباشر لصفحة الحجز
        window.location.href = "booking.html";
    }
});