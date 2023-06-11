"use strict";

const tabItem = document.querySelectorAll(".tabs__btn-item");
const tabContent = document.querySelectorAll(".tabs__content-item");

tabItem.forEach(function (element) {
  element.addEventListener("click", openContent);
});

function openContent(e) {
  const tabTarget = e.currentTarget;
  const btnTarget = tabTarget.dataset.button;

  tabItem.forEach(function (item) {
    item.classList.remove("tabs__btn-item--active");
  });
  tabContent.forEach(function (item) {
    item.classList.remove("tabs__content-item--active");
  });

  tabTarget.classList.add("tabs__btn-item--active");
  document
    .querySelector(`#${btnTarget}`)
    .classList.add("tabs__content-item--active");
}
