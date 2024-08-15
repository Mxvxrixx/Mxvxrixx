// JavaScript สำหรับการจัดการกับรูปโปรไฟล์และ Modal

// รับรูปโปรไฟล์และ Modal
var profilePic = document.getElementById('profilePic');
var modal = document.getElementById('modal');
var imgModal = document.getElementById('imgModal');
var closeModal = document.getElementById('closeModal');

// เมื่อคลิกรูปโปรไฟล์
profilePic.onclick = function() {
    modal.style.display = "block";
    imgModal.src = this.src;
}

// เมื่อคลิกปุ่มปิด (x)
closeModal.onclick = function() {
    modal.style.display = "none";
}

// เมื่อคลิกที่นอก Modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
