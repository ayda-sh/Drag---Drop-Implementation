const listBoxItems = document.querySelectorAll(".list-box");
const dragboxes = document.querySelectorAll(".dragbox");

listBoxItems.forEach(listBoxItem => {
    listBoxItem.addEventListener("dragstart", (event) => {
        event.dataTransfer.setData("text/plain", event.target.id);
    });
});

dragboxes.forEach(dragbox => {
    dragbox.addEventListener("dragover", (event) => {
        event.preventDefault();
    });

    dragbox.addEventListener("drop", (event) => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text/plain");
        const draggedItem = document.getElementById(data);
    
        dragbox.querySelector('.box').appendChild(draggedItem);
    });
});
