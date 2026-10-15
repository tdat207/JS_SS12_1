const subscriptions = [
    { subscriptionId: 'SUB-001', customerName: 'Nguyen Van An', planTier: 'FAMILY', deviceLimit: 5, daysOverdue: 3, status: 'ACTIVE' },
    { subscriptionId: 'SUB-002', customerName: 'Tran Thi Mai', planTier: 'FAMILY', deviceLimit: 5, daysOverdue: 4, status: 'ACTIVE' }
];

function auditSubscriptions(list) {
    for (let i = 0; i < list.length; i++) {
        const sub = list[i];

        // Nếu có nợ tiền > 0 ngày
        if (sub.daysOverdue > 0) {
            // Sửa: đổi >= 3 thành > 3 để từ ngày thứ 4 mới phạt
            if (sub.daysOverdue > 3) {
                sub.planTier = 'FREE';
                sub.deviceLimit = 1;
                sub.status = 'EXPIRED';
            } else {
                // Nợ từ 1 đến 3 ngày thì chỉ chuyển trạng thái ân hạn, vẫn giữ nguyên gói
                sub.status = 'GRACE_PERIOD';
            }
        }
    }
}
// Chạy vòng lặp kiểm tra từng người: quá 3 ngày mới hạ về FREE, còn 3 ngày trở xuống thì giữ nguyên gói và để GRACE_PERIOD

// Chạy hàm kiểm tra
auditSubscriptions(subscriptions);

// In ra bảng xem kết quả
console.table(subscriptions);