const borrowRecords = [
    {recordId: "PM01", studentId: "SV101", bookTitle: "JavaScript", borrowDays: 10, isReturned: false},
    {recordId: "PM02", studentId: "SV102", bookTitle: "HTML va CSS", borrowDays: 16, isReturned: false},
    {recordId: "PM03", studentId: "SV103", bookTitle: "Lap Trinh Python", borrowDays: 12, isReturned: false}
];


// 2. CREATE: Them phieu muon moi
let newRecordId = prompt("Nhap ma phieu muon moi: ");
let newStudentId = prompt("Nhap ma sinh vien moi: ");
let newBookTitle = prompt("Nhap ten sach: ");
let newBorrowDays = Number(prompt("Nhap so ngay muon: "));

let isDuplicate = false;

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].bookTitle === newBookTitle) {
        isDuplicate = true;
        break;
    }
}
if (isDuplicate) {
    console.log("Ten sach da ton tai, khong the them phieu muon!");
} else {
    borrowRecords.push({
        recordId: newRecordId,
        studentId: newStudentId,
        bookTitle: newBookTitle,
        borrowDays: newBorrowDays,
        isReturned: false
    });
}

console.log("Sau khi them phieu muon");
console.log(borrowRecords);

// 3. READ: Tinh phi phat cac phieu qua han
let reportData = [];

for (let i = 0; i < borrowRecords.length; i++) {
    let record = borrowRecords[i];
    let outDate = 0;
    let fee = 0
    if(record.borrowDays > 14){
        outDate = record.borrowDays - 14;
        fee = outDate * 5000;

        reportData.push({
            "Ma phieu": record.recordId,
            "Ma SV": record.studentId,
            "Ten sach": record.bookTitle,
            "Ngay muon": record.borrowDays,
            "Trang thai": record.isReturned ? "Da tra" : "Chua tra",
            "So ngay qua han": outDate,
            "Phi phat": fee
        });
    }
}
console.log(reportData);

// 4. UPDATE: Cap nhat phieu PM01 da tra sach
let borrowTicket = prompt("Nhap ma phieu muon cap nhat trang thai tra sach")

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === borrowTicket) {
        borrowRecords[i].isReturned = true;
        break;
    }
}
console.log(borrowRecords);

// 5. DELETE: Xoa phieu PM03
let deleteTicket = prompt("Nhap ma phieu muon can xoa");

for (let i = 0; i < borrowRecords.length; i++) {
    if (borrowRecords[i].recordId === deleteTicket) {
        borrowRecords.splice(i, 1);
        break;
    }
}
console.log(borrowRecords);


// 6. In bang tong ket
let totalFine = 0;
for (let i = 0; i < reportData.length; i++) {
    totalFine += reportData[i]["Phi phat"];
}

console.log(borrowRecords);
console.log("So phieu con lai:", borrowRecords.length);
console.log("Tong tien phat cac phieu qua han:", totalFine, "VNĐ");