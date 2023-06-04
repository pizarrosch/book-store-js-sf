import banner from '../assets/banner.png';
import business from '../assets/banner-2.png';
import autumnImg from '../assets/banner-3.png';


const imageContent = [banner, business, autumnImg]
let actualIndex = 0;

 function setSlider() {
  let imageContainer = document.querySelector('.banner');
  const bannerImage = document.querySelector('.banner img');
  let dotContainer = document.querySelector('.dots-container');

  function setImages() {
    imageContent.forEach((image, index) => {
      let imageDiv = `<img class="image n${index} ${index === 0 ? 'active' : 'inactive'}" src="${imageContent[index]}" data-index='${index}' />`;
      imageContainer.innerHTML += imageDiv;
    })
  }

   function showSlides() {
     moveSlides();
     setTimeout(showSlides, 5000); // Change image every 2 seconds
   }

   function moveSlides() {
     let i;
     let slides = document.getElementsByClassName("image");
     let dots = document.getElementsByClassName('dot');
     for (i = 0; i < slides.length; i++) {
       slides[i].style.opacity = '0';
       dots[i].classList.remove('violet');
     }
     actualIndex++;
     if (actualIndex > slides.length) {actualIndex = 1}
     slides[actualIndex-1].style.opacity = "1";
     dots[actualIndex-1].classList.add('violet');
   }

  function setDots() {
    imageContent.forEach((image, index) => {
      let dot = `<div class="dot n${index} ${index === 0 ? 'violet' : ''}" data-index='${index}'></div>`;
      dotContainer.innerHTML += dot;
    })
    dotContainer.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', function () {
        // moveSlider(this.dataset.index);
        // moveSlides();
        let slides = document.getElementsByClassName("image");
        let dots = document.getElementsByClassName('dot');

        for (let i = 0; i < slides.length; i++) {
          slides[i].style.opacity = '0';
          slides[this.dataset.index].style.opacity = '1';
          dots[i].classList.remove('violet');
          this.classList.add('violet')
        }
        // dotContainer.querySelector('.violet').classList.remove('violet');
        // this.classList.add('violet');
      })
    })
  }

  function moveSlider(num) {
    imageContainer.querySelector('.active').classList.add('inactive');
    imageContainer.querySelector('.active').classList.remove('active');
    imageContainer.querySelector('.n' + num).classList.remove('inactive');
    imageContainer.querySelector('.n' + num).classList.add('active');
    // dotContainer.querySelector('.violet').classList.remove('violet');
    // dotContainer.querySelector('.n' + num).classList.add('violet');
  }

  setImages();
  setDots();
  showSlides();
}

export default setSlider;