const upButton = document.getElementById("up");
const downButton = document.getElementById("down");

const Counter = (() => {
  this.counter = 0;

  const increase = () => {
    if (this.counter === 3) {
      this.counter = 0;
    } else {
      this.counter++;
    }
  };

  const decrease = () => {
    if (this.counter === 0) {
      this.counter = 3;
    } else {
      this.counter--;
    }
  };

  const getCount = () => {
    return this.counter;
  };

  return { increase, decrease, getCount };
})();

const Display = (() => {
  const display = document.getElementById("display");

  const update = () => {
    display.textContent = Counter.getCount();
  };

  return { update };
})();

upButton.addEventListener("click", () => {
  Counter.increase();
  Display.update();
});
downButton.addEventListener("click", () => {
  Counter.decrease();
  Display.update();
});
