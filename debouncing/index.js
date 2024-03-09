const debounce = (fn, delay) => {
  let timer;
  return function (message) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn(message);
    }, delay);
  };
};

function printMessage(message) {
  if (message.match(/^[a-zA-Z\s]+$/)) {
    console.log(message);
  }
}

function handleScroll() {
  console.log("I am scrolled");
}

const input = document.getElementsByTagName("input")[0];

const debouncedPrintMessage = debounce(printMessage, 400);
const debouncedHandleScroll = debounce(handleScroll, 1000);

document.addEventListener("scroll", function () {
  debouncedHandleScroll();
});

input.addEventListener("keyup", function (event) {
  debouncedPrintMessage(event.target.value);
});
