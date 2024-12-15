function toggleTable() {
    const table = document.getElementById("myTable");
    if (table.style.display === "none" || table.style.display === "") {
        table.style.display= "table"; // إظهار الجدول
    } else {
        table.style.display = "none"; // إخفاء الجدول
    }
}