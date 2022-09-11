const photoItem = document.getElementsByClassName('photo__item');
const popupContainer = document.createElement('div');
const popupContent = document.createElement('div');
const popupImg = document.createElement('div');
const popupLeft = document.createElement('div');
const popupRight = document.createElement('div');

popupContainer.classList.add('popup');
popupContent.classList.add('popup-content');
popupLeft.classList.add('fa', 'fa-angle-left', 'popup-left');
popupRight.classList.add('fa', 'fa-angle-right', '.popup-right');

popupContainer.appendChild(popupContent);
popupContent.appendChild(popupImg);
popupContent.appendChild(popupLeft);
popupContent.appendChild(popupRight);
document.body.appendChild(popupContainer);

let index = 1;

function showpopup(n) {
  if (n > photoItem.length) {
    index = 1;
  } else if (n < 1) {
    index = photoItem.length;
  }

  let imageLocation = photoItem[index - 1].children[0].getAttribute('src');
  popupImg.setAttribute('src', imageLocation);
}

function currentImage(){
  popupContainer.style.display = 'block';

  let imageIndex = parseInt(this.getAttribute('data-index'));
  showpopup((index = imageIndex));
}

for (let i = 0; i < photoItem.length; i++){
  photoItem[i].addEventListener('click', currentImage);
}

function sliderImage(n){
  showpopup(index += n);
}

function prevImage(){
  sliderImage(-1);
}
function nextImage(){
  sliderImage(1);
}
popupLeft.addEventListener('click', prevImage);
popupRight.addEventListener('click', nextImage);

//close popup

function closepopup() {
  if(this === Event.target) {
    popupContainer.style.display = 'none';
  }
}
popupContainer.addEventListener('click', closepopup);
