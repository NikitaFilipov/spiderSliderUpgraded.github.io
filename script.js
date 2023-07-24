const images =document.querySelectorAll('.images img')
const arrowRight = document.querySelector('.fa-arrow-right')
const arrowLeft  = document.querySelector('.fa-arrow-left')
const parentL =document.querySelector('.arrowleft')
const parentR =document.querySelector('.arrowright')
const imagesBG=document.querySelector('.images')
const button =document.querySelector('#play')
const button2=document.querySelector('#stop')
button2.classList.add('none')
let bullyAd;
let i =0
i++;
let m =2
const audioArr=['andrew.mp3','spiderman.mp3',
'spiderman2.mp3','spiderman3.mp3','spiderman4.mp3','bully-maguire.mp3','bully-maguire2.mp3','bully-maguire3.mp3']
 
images[1].classList.add('active')
    images[2].classList.add('active')
    images[3].classList.add('active')


arrowRight.addEventListener('click',function arrowDirRight(e){
    images[i].previousElementSibling.classList.add('active')
    images[i].classList.remove('active')
    i++
    
    
})

let b= 1
arrowLeft.addEventListener('click', function arrowDirLeft(e){
   
    if(i === 1){
        return
    }
    i--;
    images[i].previousElementSibling.classList.remove('active')
    
    images[i].classList.add('active')
    this.classList.add('transition')
    
})


function andrewAudio() {
    // Выбираем случайный аудиофайл из массива
    const randomAudioPath = audioArr[Math.floor(Math.random() * audioArr.length)];
    audioSpider = new Audio(randomAudioPath);
    audioSpider.play();
    audioSpider.loop()
}

button2.addEventListener('click', function (e) {
    // Остановить проигрывание аудио и скрыть кнопку "Stop"
    audioSpider.pause();
    this.classList.add('none');
    button.classList.remove('none');
});

button.addEventListener('click', function (e) {
    this.classList.add('none');
    button2.classList.remove('none');
    andrewAudio();
});