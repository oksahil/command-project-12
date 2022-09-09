(() => {
  const refs = {
    openNameBtn: document.querySelector('.open__foto'),
    closeNameBtn: document.querySelector('.tap_close'),
    modal: document.querySelector('.back'),
    body: document.querySelector('body'),
  };

  refs.openNameBtn.addEventListener('click', toggleModal);
  refs.closeNameBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll');
  }
})();
