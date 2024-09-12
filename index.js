let themeButton = document.getElementById("theme-button");

const toggleDarkMode = () => {

  // Write your code to manipulate the DOM here
  document.body.classList.toggle("dark-mode");

}

// Set toggleDarkMode as the callback function.
themeButton.addEventListener("click", toggleDarkMode);

// Add your query for the sign now button here
const signNowButton = document.getElementById("sign-now-button");

const addSignature = (person) => {
    const signaturesSection = document.querySelector(".signatures");
    const newSignature = document.createElement("p");
    newSignature.innerText = `✔️ ${person.name} from ${person.hometown} supports this cause.`;
    
    signaturesSection.appendChild(newSignature);
}

// Add a click event listener to the sign now button here
// signNowButton.addEventListener("click", addSignature);

const validateForm = () => {

  let containsErrors = false;

  var petitionInputs = document.getElementById("sign-petition").elements;

  let person = {
    name: petitionInputs[0].value,
    hometown: petitionInputs[1].value,
    email: petitionInputs[2].value
  };
  
  for (let i = 0; i < petitionInputs.length; i++) {
    if (person.hometown.length < 2) {
      containsErrors = true;
      petitionInputs[i].classList.add('error');
    } else {
      petitionInputs[i].classList.remove('error');
    }
  }
  
  if (containsErrors == false) {
    addSignature(person);
    toggleModal(person);
    for (let i = 0; i < petitionInputs.length; i++) {
      petitionInputs[i].value = "";
      containsErrors = false;
    }
  }
}

signNowButton.addEventListener('click', validateForm);

// new object variable
let animation = {
  revealDistance: 200,
  initialOpacity: 0,
  transitionDelay: 0,
  transitionDuration: '2s',
  transitionProperty: 'all',
  transitionTimingFunction: 'ease'
};

let revealableContainers = document.querySelectorAll('.revealable');
let reveal = () => {
  for (let i = 0; i < revealableContainers.length; i++) {
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer = revealableContainers[i].getBoundingClientRect().top;
    if (topOfRevealableContainer < windowHeight - animation.revealDistance) {
      revealableContainers[i].classList.add('active');
    } else {
      revealableContainers[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', reveal);

let toggleModal = (person) => {
  let modal = document.getElementById("thanks-modal");
  let modalContent = document.getElementById("thanks-modal-content");
  modal.style.display = "flex";
  
  modalContent.textContent = `Thank you so much ${person.name}!`;
  
  let intervalId = setInterval(() => {
    scaleImage();
  }, 500);

  setTimeout(() => {
    modal.style.display = "none";
    clearInterval(intervalId);
  }, 4000);
}


let scaleFactor = 1;
let modalImage = document.querySelector('.modal-image');

let scaleImage = () => {
  if (scaleFactor === 1) {
      scaleFactor = 0.8;
  } else {
      scaleFactor = 1;
  }
  
  modalImage.style.transform = `scale(${scaleFactor})`;
};