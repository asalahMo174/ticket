// القائمة الجانبية
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// اختيار وقت الموعد
const timeBtns = document.querySelectorAll('.time-btn');
let selectedTime = null;

timeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        timeBtns.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedTime = btn.getAttribute('data-time');
    });
});

// حفظ التذكرة وتأكيد الحجز
const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const nationalId = document.getElementById('nationalId').value;
    const bookingDate = document.getElementById('bookingDate').value;

    if (!selectedTime) {
        alert('من فضلك اختر الموعد المتاح أولاً.');
        return;
    }

    if (nationalId.length !== 14 || isNaN(nationalId)) {
        alert('يرجى إدخال رقم قومي صحيح مكون من 14 رقم.');
        return;
    }

    // إنشاء كائن التذكرة الجديدة
    const newTicket = {
        id: 'A-' + Math.floor(100 + Math.random() * 900), // توليد رقم عشوائي للتذكرة
        name: fullName,
        nationalId: nationalId,
        date: bookingDate,
        time: selectedTime,
        service: 'تجديد بطاقة الرقم القومي', // الخدمة الافتراضية
        branch: 'فرع القاهرة الجديدة – القاهرة'
    };

    // جلب التذاكر القديمة أو إنشاء مصفوفة جديدة
    let savedTickets = JSON.parse(localStorage.getItem('myTickets')) || [];
    savedTickets.push(newTicket);

    // حفظ التذاكر في ذاكرة المتصفح
    localStorage.setItem('myTickets', JSON.stringify(savedTickets));

    alert('تم حجز التذكرة بنجاح! سيتم تحويلك لصفحة تذاكري.');
    
    // الانتقال مباشرة لصفحة تذاكري لرؤية التذكرة
    window.location.href = "tickets.html";
});