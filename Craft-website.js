





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
        console.log(tabs)
    })
    featureTab[index].classList.add("active")

    const newTabImage = featureTab[index].dataset.image;
    tabImage.src = newTabImage;

    currentIndex = index;
}


setInterval(()=> {
    nextIndex = currentIndex + 1;

    if (nextIndex === featureTab.length) {
        nextIndex = 0;
    }

    tabDisplay(nextIndex)
},3000)