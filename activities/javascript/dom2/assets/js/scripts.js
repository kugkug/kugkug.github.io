const $ = function (element) {
  return {
    on: (action, func) => {
      document.querySelector(element).addEventListener(action, func);
    },
    click: (func) => {
      document.querySelector(element).addEventListener("click", func);
    },
  };
};

$("#btnAlert").click(function () {
  this.style.display = " none";
});
