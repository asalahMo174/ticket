// القائمة الجانبية
const menuBtn = document.getElementById('menuBtn');
const dropdownMenu = document.getElementById('dropdownMenu');

menuBtn.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});

// عرض التذاكر المحفوظة من localStorage
document.addEventListener('DOMContentLoaded', () => {
    const ticketsList = document.querySelector('.tickets-list');
    const savedTickets = JSON.parse(localStorage.getItem('myTickets')) || [];

    if (savedTickets.length === 0) {
        ticketsList.innerHTML = '<p style="text-align:center; color:#64748b; padding:20px;">لا توجد تذاكر محجوزة حالياً.</p>';
        return;
    }

    // إفراغ القائمة وعرض التذاكر الحقيقية
    ticketsList.innerHTML = '';

    savedTickets.forEach((ticket, index) => {
        const ticketHTML = `
            <div class="ticket-card" id="ticket-${index}">
                <div class="ticket-header">
                    <span class="ticket-status active-status">مؤكدة</span>
                    <span class="ticket-id">تذكرة #${ticket.id}</span>
                </div>

                <div class="ticket-body">
                    <h3 class="service-name">${ticket.service}</h3>
                    <p class="branch-name"><i class="fa-solid fa-location-dot"></i> ${ticket.branch}</p>
                    <p style="font-size: 12px; color: #475569; margin-bottom: 8px;"><strong>الاسم:</strong> ${ticket.name}</p>
                    
                    <div class="ticket-details">
                        <div>
                            <span class="label">التاريخ</span>
                            <strong class="value">${ticket.date}</strong>
                        </div>
                        <div>
                            <span class="label">الموعد</span>
                            <strong class="value">${ticket.time}</strong>
                        </div>
                    </div>

                    <div class="qr-box">
                        <i class="fa-solid fa-qrcode qr-icon"></i>
                        <p>امسح الكود عند شباك الاستقبال</p>
                    </div>
                </div>

                <div class="ticket-actions">
                    <button class="btn-cancel" onclick="cancelTicket(${index})">إلغاء التذكرة</button>
                    <button class="btn-print" onclick="window.print()">طباعة</button>
                </div>
            </div>
        `;
        ticketsList.innerHTML += ticketHTML;
    });
});

// وظيفة إلغاء التذكرة وحذفها من localStorage
function cancelTicket(index) {
    const confirmCancel = confirm('هل أنت متأكد من رغبتك في إلغاء هذه التذكرة؟');
    if (confirmCancel) {
        let savedTickets = JSON.parse(localStorage.getItem('myTickets')) || [];
        
        // حذف التذكرة من المصفوفة
        savedTickets.splice(index, 1);
        
        // إعادة حفظ القائمة المعدلة
        localStorage.setItem('myTickets', JSON.stringify(savedTickets));
        
        alert('تم إلغاء التذكرة بنجاح.');
        location.reload(); // إعادة تحميل الصفحة لتحديث القائمة
    }
}