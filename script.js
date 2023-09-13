const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
];

images.map((element) => {
  const selector = document.getElementById("container");
  const imgElement = document.createElement("img");
  imgElement.src = element;
  imgElement.id = "img-container";
  selector.appendChild(imgElement);
});
const slides = document.querySelectorAll("#img-container");
console.log("--->slides", slides);

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
  images.forEach((el, index) => {
    if (index == counter) {
      document.getElementById(index).style.backgroundColor = "white";
    } else {
      document.getElementById(index).style.backgroundColor = "black";
    }
  });
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
