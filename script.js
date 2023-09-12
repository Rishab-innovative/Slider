const slides = document.querySelectorAll(".img-container");
console.log(slides);

let counter = 0;
if (counter == 0) {
  document.getElementById("left").disabled = true;
}

setInterval(() => {
  counter++;
  if (counter >= 6) {
    counter = 0;
  }
  slideImage();
}, 5000);

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

const next = () => {
  counter++;
  slideImage();
};

const prev = () => {
  counter--;
  slideImage();
};

const slideImage = () => {
  for (let i = 0; i < 6; i++) {
    if (i == counter) {
      document.getElementById(i).style.backgroundColor = "white";
    } else {
      document.getElementById(i).style.backgroundColor = "black";
    }
  }
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;

    counter == 5
      ? (document.getElementById("right").disabled = true)
      : (document.getElementById("right").disabled = false);

    counter != 0
      ? (document.getElementById("left").disabled = false)
      : (document.getElementById("left").disabled = true);
  });
};

function sliderBtn(data) {
  counter = data;
  slideImage();
}
