const shareBtn = document.querySelector('.share-btn');
const shareBtnActive = document.querySelector('.share-btn-active');
const socialBox = document.querySelector('.card-holder-social');
if (window.innerWidth > 375) {
    shareBtn.addEventListener('click', () => {
        socialBox.classList.toggle('hidden');
    });
}
else {
    shareBtn.addEventListener('click', () => {
        socialBox.classList.remove('hidden');
    });
}

shareBtnActive.addEventListener('click', () => {
    socialBox.classList.add('hidden');
});
