(() => {
    const refs = {
      openContactsBtn: document.querySelector('.contacts-button'),
      closeContactsBtn: document.querySelector('.contacts-button'),
      contacts: document.querySelector('.contacts__menu'),
 
    };
  
    refs.openContactsBtn.addEventListener('click', toggleContacts);
    refs.closeContactsBtn.addEventListener('click', toggleContacts);
  
    function toggleContacts() {
      refs.contacts.classList.toggle('is-hidden');

    }
  })();