document.querySelectorAll('.class-item button').forEach(button => {
    button.addEventListener('click', (event) => {
        let classItem = event.target.closest('.class-item');
        let className = prompt('Edit Class Name:', classItem.children[1].innerText);
        if (className) {
            classItem.children[1].innerText = className;
        }
    });
});
