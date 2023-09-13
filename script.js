let counter = 0;
const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
];
let length = images.length - 1;
images.map((element, index) => {
  const selector = document.getElementById("container");
  const imgElement = document.createElement("img");
  imgElement.src = element;
  imgElement.id = "img-container";
  selector.appendChild(imgElement);

  const select = document.getElementById("carousel");
  const btnElement = document.createElement("span");
  btnElement.id = index;
  btnElement.className = "btn";
  select.appendChild(btnElement);

  const slideBtn = document.querySelectorAll(".btn");
  slideBtn[index].addEventListener("click", function () {
    counter = index;
    slideImage();
  });
});

const slides = document.querySelectorAll("#img-container");

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
  console.log("--slideImage--");
  images.forEach((el, index) => {
    index == counter
      ? (document.getElementById(index).style.backgroundColor = "white")
      : (document.getElementById(index).style.backgroundColor = "black");
  });
  slides.forEach((slide) => {
    slide.style.transform = `translateX(-${counter * 100}%)`;

    counter == length
      ? (document.getElementById("right").disabled = true)
      : (document.getElementById("right").disabled = false);

    counter
      ? (document.getElementById("left").disabled = false)
      : (document.getElementById("left").disabled = true);
  });
};
