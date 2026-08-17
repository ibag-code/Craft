
const featureTab = document.querySelectorAll(".feature-content");
const tabImage = document.querySelector(".feature-image");

let currentIndex = 0;

// console.log (featureTab)
// console.log (featureTab.index)
// console.log (featureTab.length)

function tabDisplay (index) {
        //Loppinh into the nodeList
    featureTab.forEach((tabs) => {

        tabs.classList.remove("active")
        // console.log(tabs)
    })
    featureTab[index].classList.add("active")

    const newTabImage = featureTab[index].dataset.image;
    // console.log(newTabImage)

    tabImage.src = newTabImage;

    currentIndex = index;
}


setInterval(()=> {
    nextIndex = currentIndex + 1;

    if (nextIndex === featureTab.length) {
        nextIndex = 0;
    }

    tabDisplay(nextIndex)
},4000)






//ACCORDION

const tap = document.querySelectorAll(".accordion")
const answer = document.querySelectorAll(".accordion-answer")

// console.log (answer)


  tap.forEach((tabPlus, index)=> {
    tabPlus.addEventListener('click', () => {
      const itisOpen = answer[index].classList.contains('accord-active')

      answer.forEach((answerTab) => {
      answerTab.classList.remove('accord-active')

    })

    if (!itisOpen) {
      answer[index].classList.add('accord-active')
    }

    })
  })



































// const fuCk = document.getElementById("btn")
// fuCk.addEventListener('click', () => {
    
//     const printfuck = fuCk.dataset.fuck;
//     console.log(printfuck)

// })
