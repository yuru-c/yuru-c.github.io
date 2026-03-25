document.addEventListener('DOMContentLoaded', () => {
    const pic = document.getElementById('avatar'); // 確保 ID 是 avatar

    if (pic) {
        // 使用 click 事件監聽
        pic.addEventListener('click', function() {
            // 檢查目前的 src 字串裡有沒有包含 "cat1"
            // 使用 includes 比對更安全，因為瀏覽器會自動補全完整 URL
            if (this.src.includes("cat1")) {
                this.src = "/img/cat2.png";
            } else {
                this.src = "/img/cat1.png";
            }
            
            // 除錯用：按下去後，按 F12 打開 Console 看看路徑變了沒
            console.log("當前圖片路徑變更為:", this.src);
        });
    } else {
        console.error("錯誤：找不到 ID 為 avatar 的圖片！");
    }
});