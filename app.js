let boxes = document.querySelectorAll(".box1")

for (let box1 of boxes){
    box1.addEventListener("click", function() {
        let url = this.DataTransferItem.url;
        window.open(url, "_blank");
    });
}