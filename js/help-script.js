// القائمة الجانبية
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// فتح وإغلاق الأسئلة الشائعة (Accordion)
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        
        // غلق باقي الأسئلة وإبقاء السؤال المفتوح فقط
        document.querySelectorAll('.faq-item').forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('open');
            }
        });

        faqItem.classList.toggle('open');
    });
});

// إرسال كارت الدعم
const helpForm = document.getElementById('helpForm');

helpForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('شكراً لك! تم إرسال رسالتك بنجاح، وسيقوم فريق الدعم الفني بالرد عليك في أقرب وقت.');
    helpForm.reset();
});