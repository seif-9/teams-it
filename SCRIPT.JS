// عندما ينقر الزائر على أي صورة أثرية، يظهر تنبيه باسم الأثر
document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", function () {
        alert("📜 هذه صورة لقطعة أثرية رومانية: " + this.title);
    });
});
