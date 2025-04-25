const shareBtn = document.querySelector('.share-btn img'); 
const popup = document.querySelector('.share-popup');  

shareBtn.addEventListener('click', () => {
 
  popup.classList.toggle('hidden');
});