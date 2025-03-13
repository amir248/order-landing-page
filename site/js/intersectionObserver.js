const numSteps = 20.0;

let boxElement;
let prevRatio = 0.0;

// Set things up
// window.addEventListener(
//   "load",
//   (event) => {
//     boxElement = document.querySelector("#opacity");
//     boxElementTwo = document.querySelector("#opacityTwo");
//     boxElementThree = document.querySelector("#opacityThree");
//     boxElementFour = document.querySelector("#opacityFour");
//     boxElementFive = document.querySelector("#opacityFive");
//     boxElementSix = document.querySelector("#opacitySix");
//     boxElementSeven = document.querySelector("#opacitySeven");
//     boxElementEight = document.querySelector("#opacityEight");
//     boxElementNine = document.querySelector("#opacityNine");
//     boxElementTen = document.querySelector("#opacityTen");
//     boxElementEleven = document.querySelector("#opacityEleven");

//     createObserver();
//   },
//   false,
// );
function oK(){
    
        boxElement = document.querySelector("#opacity");
        boxElementTwo = document.querySelector("#opacityTwo");
        boxElementThree = document.querySelector("#opacityThree");
        boxElementFour = document.querySelector("#opacityFour");
        boxElementFive = document.querySelector("#opacityFive");
        boxElementSix = document.querySelector("#opacitySix");
        boxElementSeven = document.querySelector("#opacitySeven");
        boxElementEight = document.querySelector("#opacityEight");
        boxElementNine = document.querySelector("#opacityNine");
        boxElementTen = document.querySelector("#opacityTen");
        boxElementEleven = document.querySelector("#opacityEleven");
    
        createObserver();

};//oK
oK();
function createObserver() {
  let observer;

  let options = {
    root: null,
    rootMargin: "0px",
    threshold: buildThresholdList(),
  };

  observer = new IntersectionObserver(handleIntersect, options);
  observer.observe(boxElement);
  observer.observe(boxElementTwo);
  observer.observe(boxElementThree);
  observer.observe(boxElementFour);
  observer.observe(boxElementFive);
  observer.observe(boxElementSix);
  observer.observe(boxElementSeven);
  observer.observe(boxElementEight);
  observer.observe(boxElementNine);
  observer.observe(boxElementTen);
  observer.observe(boxElementEleven);
}

function buildThresholdList() {
  let thresholds = [];
  let numSteps = 20;

  for (let i = 1.0; i <= numSteps; i++) {
    let ratio = i / numSteps;
    thresholds.push(ratio);
  }

  thresholds.push(0);
  return thresholds;
}

function handleIntersect(entries, observer) {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > prevRatio) {
      entry.target.style.opacity = entry.intersectionRatio;
    } else {
      entry.target.style.opacity = entry.intersectionRatio;
    }

    prevRatio = entry.intersectionRatio;
  });
}
