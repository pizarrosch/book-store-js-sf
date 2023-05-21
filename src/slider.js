const imageContent = [
  {
    img: '../assets/banner.png',
  },
  {
    img: '../assets/business-competition.png',
  },
  {
    img: '../assets/autumn.png',
  }
]

function setSlider() {
  let imageContainer = document.querySelector('.banner');
  let dotContainer = document.querySelector('.dots-container');

  function setImages() {
    imageContent.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${index === 0 ? 'active' : 'inactive'}" style="background-image: url(${imageContent[index].img})" data-index='${index}'></div>`;
      imageContainer.innerHTML += imageDiv;
    })
  }

  function setDots() {
    imageContent.forEach((image, index) => {
      let dot = `<div class="dot n${index} ${index === 0 ? 'violet' : ''}" data-index='${index}'></div>`;
      dotContainer.innerHTML += dot;
    })
    dotContainer.querySelectorAll('.dot').forEach(dot => {
      dot.addEventListener('click', function () {
        moveSlider(this.dataset.index);
        dotContainer.querySelector('.violet').classList.remove('violet');
        this.classList.add('violet');
      })
    })
  }


  function moveSlider(num) {
    imageContainer.querySelector('.active').classList.remove('active');
    imageContainer.querySelector('.n' + num).classList.add('active');
    dotContainer.querySelector('.violet').classList.remove('violet');
    dotContainer.querySelector('.n' + num).classList.add('violet');
  }

  setImages();
  setDots();
}

setSlider();