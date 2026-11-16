$(function() {
  // Requirement: show the pet's starting name, weight, and happiness.
  checkAndUpdatePetInfoInHtml();

  // Requirement: connect each action button to its click behavior.
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.cuddle-button').click(clickedCuddleButton);

  // Unique jQuery method #2: .hover() runs one function when the pointer
  // enters the image and another when it leaves, applying/removing its animation class.
  $('.pet-image').hover(
    function() {
      $(this).addClass('pet-hover');
    },
    function() {
      $(this).removeClass('pet-hover');
    }
  );
});

// Requirement: keep the pet's name, weight, and happiness in an object.
var pet_info = {
  name: 'Maximus',
  weight: 12,
  happiness: 70
};

// Arrays provide a few different pet comments for each action.
var pet_comments = {
  treat: ['Yum! That was delicious!', 'Best snack ever!', 'Thanks for the treat!'],
  play: ['That was so much fun!', 'I could play all day!', 'Throw it again!'],
  exercise: ['Whew, I needed that!', 'Look at me go!', 'I feel healthier already!'],
  cuddle: ['You give the best hugs!', 'I feel so loved!', 'Cuddle time is the best!']
};

function clickedTreatButton() {
  // Requirement: a treat increases both happiness and weight.
  pet_info.happiness += 8;
  pet_info.weight += 1;
  finishAction(pet_comments.treat);
}

function clickedPlayButton() {
  // Requirement: playing increases happiness and reduces weight.
  pet_info.happiness += 6;
  pet_info.weight -= 1;
  finishAction(pet_comments.play);
}

function clickedExerciseButton() {
  // Requirement: exercise reduces both happiness and weight.
  pet_info.happiness -= 5;
  pet_info.weight -= 2;
  finishAction(pet_comments.exercise);
}

function clickedCuddleButton() {
  // Requirement: the added Cuddle action gives happiness without changing weight.
  pet_info.happiness += 10;
  finishAction(pet_comments.cuddle);
}

function finishAction(comments) {
  checkAndUpdatePetInfoInHtml();
  showPetComment(comments);
}

function checkAndUpdatePetInfoInHtml() {
  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
}

function checkWeightAndHappinessBeforeUpdating() {
  // Requirement: keep either stat from ever dropping below zero.
  if (pet_info.weight < 0) {
    pet_info.weight = 0;
  }
  if (pet_info.happiness < 0) {
    pet_info.happiness = 0;
  }
}

function showPetComment(comments) {
  var commentIndex = Math.floor(Math.random() * comments.length);
  var comment = '<p class="pet-note">' + comments[commentIndex] + '</p>';

  // Requirement: show a visible pet comment after every button press.
  // Unique jQuery method #1: .prepend() inserts the newest comment at the
  // beginning of the message area, so recent feedback appears above older comments.
  $('.pet-comments').prepend(comment);
}

// Requirement: update the page with the current values stored in pet_info.
function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
}
