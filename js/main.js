// Handle slider

let left = 1;
let right = 4;
const handleSliderShow = () => {
  for (i = left; i <= right; i++) {
    document.querySelector(`.product__item-${i}`).style.display = "flex";
  }
};
handleSliderShow();

const handleMoveLeft = () => {
  if (left >= 3 && right >= 6) {
    document.querySelector(`.product__item-${right}`).style.display = "none";
    left -= 1;
    right -= 1;
    for (i = left; i <= right; i++) {
      document.querySelector(`.product__item-${i}`).style.display = "flex";
    }
  } else {
    return;
  }
};

const handleMoveRight = () => {
  if (left <= 4 && right <= 7) {
    document.querySelector(`.product__item-${left}`).style.display = "none";
    left += 1;
    right += 1;
    for (i = left; i <= right; i++) {
      document.querySelector(`.product__item-${i}`).style.display = "flex";
    }
  } else {
    return;
  }
};
// Handle Show all product
const handleShowAll = () => {
  const btnShow = document.querySelector(".product__btn");
  const listItem = document.querySelectorAll(".product__item");
  const listBtn = document.querySelectorAll(".product__list__btn__arrow");
  btnShow.style.display = "none";
  Array.from(listItem).forEach((item) => (item.style.display = "flex"));
  Array.from(listBtn).forEach((item) => (item.style.display = "none"));
};
// Handle active sidebar
const handleActiveSidebar = () => {
  const sidebarNodes = document.querySelectorAll(".product__sidebar__link");
  const productList = document.querySelectorAll(".product__list");

  Array.from(sidebarNodes).forEach((item, index) => {
    const productListElement = productList[index];
    item.onclick = function () {
      document
        .querySelector(".product__sidebar__link.active")
        .classList.remove("active");
      document
        .querySelector(".product__list.active")
        .classList.remove("active");
      item.classList.add("active");
      productListElement.classList.add("active");
    };
  });
};
handleActiveSidebar();

// item.addEventListener("click", (e) => {
//   sidebarNodes.forEach((x) =>
//     x != e.target ? x.classList.remove("active") : ""
//   );
//   e.target.classList.toggle("active");
// })
