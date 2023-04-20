/*  audio : A mil */
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
/* Audio : Puede Ser */
let tryMeLq = document.querySelector('.loQueSomos');
 let audiolo = document.getElementsByTagName('audio');
console.log(audiolo)

tryMeLq.addEventListener('mouseenter', () => {

    audiolo[1].play()

}
)
tryMeLq.addEventListener('mouseleave', () => {

    audiolo[1].pause()
    
    audiolo.currentTime = 0;
}
) 
/* Audio : El trato */
let tryMeTrato = document.querySelector('.elTrato');
 let audioTra = document.getElementsByTagName('audio');
console.log(audioTra)

tryMeTrato.addEventListener('mouseenter', () => {

    audioTra[2].play()

}
)
tryMeTrato.addEventListener('mouseleave', () => {

    audioTra[2].pause()
    
    audioTra.currentTime = 0;
}
) 
