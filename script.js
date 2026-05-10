$(function() { // Makes sure that your function is called once all the DOM elements of the page are ready to be used.
    
    // Called function to update the name, happiness, and weight of our pet in our HTML
    checkAndUpdatePetInfoInHtml();
  
    // When each button is clicked, it will "call" function for that button (functions are below)
    $('.treat-button').click(clickedTreatButton);
    $('.play-button').click(clickedPlayButton);
    $('.exercise-button').click(clickedExerciseButton);
    $('.bathe-button').click(clickedBatheButton);
 
    // ── MESSAGE LOGGING EXAMPLES ──────────────────────────────────────────
 
    // Log Info
    console.info("Pet app loaded. Sir Beerus is ready to RUMBLEEE!.");
 
    // Log Warning
    console.warn("Warning: Sir Beerus happiness starts at 100. Keep it above 0 to avoid getting devoured.");
 
    // Log Error
    console.error("Error: Sir Beerus (big boy) image may fail to load if images/ folder is missing.");
 
    // Log Table
    console.table(pet_info);
 
    // Log Group
    console.group("Pet Info on Load");
      console.log("Name:", pet_info.name);
      console.log("Weight:", pet_info.weight);
      console.log("Happiness:", pet_info.happiness);
    console.groupEnd();
 
    // Log Custom (styled)
    console.log("%cSir Beerus is online!", "color: white; background: #1e2835; font-size: 14px; padding: 4px 8px;");
 
    // ── BROWSER-GENERATED MESSAGES ────────────────────────────────────────
 
    // Cause 404 network error — request a file that doesn't exist
    var missingImg = new Image();
    missingImg.src = "images/not-found.png";
 
    // Cause TypeError — call a non-function (caught so it doesn't crash the app)
    try {
      var notAFunction = 42;
      notAFunction();
    } catch(e) {
      console.error("TypeError caught:", e.message);
    }
 
    // Cause Violation — block the main thread for >50ms
    var start = Date.now();
    while (Date.now() - start < 60) {}
 
  })
  
    // Add a variable "pet_info" equal to a object with the name (string), weight (number), and happiness (number) of your pet
    var pet_info = {name:"Sir Beerus", weight:1000, happiness:100};
  
    function clickedTreatButton() {
      // Increase pet happiness
      pet_info['happiness'] +=5;
      
      // Increase pet weight
      pet_info['weight'] +=1;
      checkAndUpdatePetInfoInHtml();
       animatePet('bounce');
      showPetMessage("WOW WOW WOW! SIR BEERUS WANTS MORE TREATS! 😋");
    }
    
    function clickedPlayButton() {
      // Increase pet happiness
      pet_info['happiness'] +=10;
      
      // Decrease pet weight
      pet_info['weight'] -=1;
      checkAndUpdatePetInfoInHtml();
       animatePet('bounce');
      showPetMessage("WOW WOW WOW! SIR BEERUS IS PLAYING! 😄");
    }
    
    function clickedExerciseButton() {
      // Decrease pet happiness
      pet_info['happiness'] -=3;
      // Decrease pet weight
      pet_info['weight'] -=2;
      checkAndUpdatePetInfoInHtml();
      animatePet('shake');
      showPetMessage("UGHHHH! THE HIGHNESS SIR BEERUS IS EXERCISING!? 🏃‍♂️");
    }
     function clickedBatheButton() {
      // decrease pet happiness
      pet_info['happiness'] -=3;
      animatePet('spin');
      showPetMessage("UGHHH! SIR BEERUS NEVER NEEDS A BATH! 🛁");
 
      checkAndUpdatePetInfoInHtml();
    }
  
    function checkAndUpdatePetInfoInHtml() {
      checkWeightAndHappinessBeforeUpdating();  
      updatePetInfoInHtml();
    }
 
    function showPetMessage(message) {
   
    // .show() - jQuery method that makes the hidden element visible
    $('.pet-message').show();
    $('.pet-message').text(message);
    setTimeout(function() {
    // .hide() - jQuery method that hides the element from the page
      $('.pet-message').hide();
    }, 5000);
}
 
  function animatePet(animationClass) {
    // .addClass() adds the animation class to trigger the CSS animation
    $('.pet-image').addClass(animationClass);
    
    // Remove the class after animation finishes so it can be triggered again
    setTimeout(function() {
        // .removeClass() removes the animation class after 500ms
        $('.pet-image').removeClass(animationClass);
    }, 500);
  }
    
    function checkWeightAndHappinessBeforeUpdating() {
      // Add conditional so if weight is lower than zero.
      if (pet_info['weight'] <0) {
        pet_info['weight']=0;
      }
      if (pet_info['happiness'] <0) {
        pet_info['happiness']=0;
      }
    }
    
    // Updates your HTML with the current values in your pet_info object
    function updatePetInfoInHtml() {
      $('.name').text(pet_info['name']);
      $('.weight').text(pet_info['weight']);
      $('.happiness').text(pet_info['happiness']);
      var maxHappiness = 200;
      var barWidth = Math.min((pet_info['happiness'] / maxHappiness) * 200, 200);
      // .width() - jQuery method that dynamically sets the width of an element
      $('.happiness-bar').width(barWidth);
    }
 