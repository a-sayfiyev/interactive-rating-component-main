let ratingValue;

const elRatingComponentForm = document.querySelector('#rating-component-form');
const elRatingComponentResultLabel = document.querySelector('.rating-component__result-label');

if (elRatingComponentForm) {
  elRatingComponentForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    let ratingFormData = new FormData(elRatingComponentForm);
    ratingValue = parseInt(ratingFormData.get('rating'), 10);

    elRatingComponentResultLabel.textContent = ratingValue;

    let currentStep = elRatingComponentForm.closest('.rating-component__step');

    currentStep.addEventListener('animationend', function (evt) {
      currentStep.classList.remove('rating-component__step--active');

      currentStep.nextElementSibling.classList.add('rating-component__step--active', 'rating-component__step--in');
    });

    currentStep.classList.add('rating-component__step--out');
  });
}
