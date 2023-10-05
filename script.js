(() => {
    //INCREASE COUNTER FUNCTION START------------------------
  
    // To find the scroll number incresing animation START---------------------------------------------------------
  
    function counter(element) {
      const scroll = element.getBoundingClientRect();
      return (
        scroll.top >= 0 &&
        scroll.left >= 0 &&
        scroll.bottom <=
          (window.innerHeight || document.documentElement.clientHeight) &&
        scroll.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  
    const incvalue = document.querySelector(".companydts");
  
    let runtime = 0;
    document.addEventListener(
      "scroll",
      function () {
        console.log("run this if condition", runtime);
  
        // counter incrementer START----------------
        function animateNumber(targetId, initialValue, finalValue, duration) {
          const element = document.getElementById(targetId);
          const increment = (finalValue - initialValue) / (duration / 30);
  
          let currentValue = initialValue;
  
          function updateValue() {
            currentValue += increment;
            element.textContent = Math.round(currentValue);
  
            if (currentValue < finalValue) {
              requestAnimationFrame(updateValue);
            }
          }
  
          updateValue();
        }
        if (counter(incvalue) && runtime == 0) {
          
  
          animateNumber("num1", 1, 34, 2000);
          animateNumber("num2", 1, 20, 2000);
          animateNumber("num3", 1, 12, 2000);
          timrun = timrun + 1;
          console.log("timrun +1", runtime);
  
          // counter incrementer END----------------
        }
        if (!counter(box) && runtime !== 0) {
          runtime = 0;
        }
      },
      {
        passive: true,
      }
    );
  
    // To find the element is in view port or not END----------------------------------------------------------------

  })(); // INCREASE COUNTER FUNCTION END

// Arrow image function START-----------------------------

let scrollCont=document.querySelector(".allcard")

let leftslide =document.getElementById("leftslidebtn")
let righttslide =document.getElementById("rightslidebtn")

// left arrow slider code----------------------

leftslide.addEventListener("click",()=>{
  scrollCont.style.scrollBehavior="smooth"
  scrollCont.scrollLeft -=200;
    
})

// right arrow slider code----------------------

righttslide.addEventListener("click",()=>{
  scrollCont.style.scrollBehavior="smooth"
  scrollCont.scrollLeft +=200;
    
})

// Arrow image function END-----------------------------
