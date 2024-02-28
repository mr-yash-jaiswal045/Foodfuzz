const avatarProfile = document.querySelector('.avatar-profile');
const navigationMenu = document.querySelector('.navigation__menu');

avatarProfile.addEventListener('click', () => {
    navigationMenu.classList.toggle('none');
});
const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');
  const formOption1 = document.getElementById('formOption1');
  const formOption2 = document.getElementById('formOption2');

  option1.addEventListener('change', function() {
    if (option1.checked) {
      formOption1.style.display = 'block';
      formOption2.style.display = 'none';
    }
  });

  option2.addEventListener('change', function() {
    if (option2.checked) {
      formOption1.style.display = 'none';
      formOption2.style.display = 'block';
    }
  });