//localStorage.clear();
const myDialog = document.getElementById("myDialog");
myDialog.showModal();
// Close button event
document.getElementById('close-popup').addEventListener('click', () => {
if (document.getElementById('do-not-show-again').checked) {
    localStorage.setItem('popupShown', 'true');
    alert('passed do-not-show check');
}
myDialog.remove();
});
// Check if the popup should be shown
if (localStorage.getItem('popupShown')) {
    myDialog.close();
    alert('Popup closed');
}