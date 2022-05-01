export default class View {
  constructor() {
    this.onLeftCurrencyChange = () => {};
    this.onRigthCurrencyChange = () => {};
    this.leftInp = document.getElementById("leftCurInp");
    this.rightInp = document.getElementById("rigthCurInp");

    this.init();
  }

  init() {
    const radio1 = document.querySelector("#radio-1");
    radio1.addEventListener("click", (e) => {
      this.onLeftCurrencyChange("RUB");
    });

    const radio2 = document.querySelector("#radio-2");
    radio2.addEventListener("click", (e) => {
      this.onLeftCurrencyChange("USD");
    });

    const radio3 = document.querySelector("#radio-3");
    radio3.addEventListener("click", (e) => {
      this.onLeftCurrencyChange("EUR");
    });

    const radio4 = document.querySelector("#radio-4");
    radio4.addEventListener("click", (e) => {
      this.onLeftCurrencyChange("GBP");
    });
    // <===================================Right==================================>
    const radio5 = document.querySelector("#radio-5");
    radio5.addEventListener("click", (e) => {
      this.onRigthCurrencyChange("RUB");
    });

    const radio6 = document.querySelector("#radio-6");
    radio6.addEventListener("click", (e) => {
      this.onRigthCurrencyChange("USD");
    });

    const radio7 = document.querySelector("#radio-7");
    radio7.addEventListener("click", (e) => {
      this.onRigthCurrencyChange("EUR");
    });

    const radio8 = document.querySelector("#radio-8");
    radio8.addEventListener("click", (e) => {
      this.onRigthCurrencyChange("GBP");
    });
  }
}
