import "./index.css";

const descriptionContainers = document.querySelectorAll('.description__container');
const sliderButton = document.querySelectorAll('.slider__button');
const sliderContainer = document.querySelector('.slider__container');
const sliderWrapper = document.querySelector('.slider__wrapper');
const sliderItem = document.querySelector('.slider__item');
const widthSliderContainer = sliderContainer.offsetWidth - sliderWrapper.offsetWidth;
const widthSliderItem = sliderItem.offsetWidth + +window.getComputedStyle(sliderContainer).columnGap.match(/\d+/g).join();
let tr = 0;

const obj = {
  positive: 266,
  neutral: 41,
  negative: 66
}

const percent = obj.positive + obj.neutral + obj.negative;
const positive = obj.positive * 100 / percent;
const neutral = obj.neutral * 100 / percent;
const negative = obj.negative * 100 / percent;

descriptionContainers[0].style.background = `linear-gradient(to right, rgba(0, 245, 75, 0.5) ${positive}%, transparent ${positive}%)`;
descriptionContainers[1].style.background = `linear-gradient(to right, rgba(163, 134, 173, 0.5) ${neutral}%, transparent ${neutral}%)`;
descriptionContainers[2].style.background = `linear-gradient(to right, rgba(214, 28, 105, 0.5) ${negative}%, transparent ${negative}%)`;
descriptionContainers[0].querySelector('.number').textContent = obj.positive;
descriptionContainers[1].querySelector('.number').textContent = obj.neutral;
descriptionContainers[2].querySelector('.number').textContent = obj.negative;

sliderButton[0].addEventListener('click', () => {
  tr = tr + widthSliderItem;
  if (tr > widthSliderContainer) {
    tr = widthSliderContainer;
    sliderContainer.style.transform = `translate(${widthSliderContainer * -1}px)`;
    return;
  }
  sliderContainer.style.transform = `translate(${tr * -1}px)`;
})

sliderButton[1].addEventListener('click', () => {
  tr = tr - widthSliderItem;
  if (tr < 0) {
    tr = 0;
    sliderContainer.style.transform = `translate(${0}px)`;
    return;
  }
  sliderContainer.style.transform = `translate(${tr * -1}px)`;
})