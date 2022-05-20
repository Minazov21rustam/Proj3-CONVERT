export default class View {
  constructor() {
    this.onLeftCurrencyChange = () => {};
    this.onRigthCurrencyChange = () => {};
    this.leftInp = document.getElementById("leftCurInp");
    this.rightInp = document.getElementById("rigthCurInp");

    this.init();
  }

  init() {
    this.leftButtons = document.querySelectorAll('.left-Btn')
    this.rightButtons = document.querySelectorAll('.right-Btn')
    // this.radio1 = document.querySelector("#radio-1");
    // this.radio2 = document.querySelector("#radio-2");
    // this.radio3 = document.querySelector("#radio-3");
    // this.radio4 = document.querySelector("#radio-4");
    // this.radio5 = document.querySelector("#radio-5");
    // this.radio6 = document.querySelector("#radio-6");
    // this.radio7 = document.querySelector("#radio-7");
    // this.radio8 = document.querySelector("#radio-8");
  }
}
