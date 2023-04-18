
let tryMe = document.querySelector('.aMil');
let audioArr = document.getElementsByTagName('audio');
console.log(audioArr);

tryMe.addEventListener('mouseenter', () => {

    audioArr[0].play()
}
)
tryMe.addEventListener('mouseleave', () => {

    audioArr[0].pause()
    audioArr.currentTime = 0;
}
)

let tryMeLqS = document.querySelector('.loQueSomos');
let audioArrLqS = document.getElementsByName('loQueSomos');
console.log(audioArrLqS);

tryMeLqS.addEventListener('mouseenter', () => {

    audioArrLqS[0].play()
}
)
tryMeLqS.addEventListener('mouseleave', () => {

    audioArrLqS[0].pause()
    audioArrLqS.currentTime = 0;
}
)