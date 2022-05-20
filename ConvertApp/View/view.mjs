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
  }
}