export default class Controller {
  constructor(view, model) {
    this.view = view;
    this.model = model;

    this.view.onLeftCurrencyChange = this.onLeftCurrencyChange;
    this.view.onRigthCurrencyChange = this.onRigthCurrencyChange;

    this.view.leftInp.onkeyup = (e) => {
      this.model.setLeftValue(e.target.value);
      this.setRightInp();
    };

    this.view.rightInp.onkeyup = (e) => {
      this.model.setRightValue(e.target.value);
      this.setLeftInp();
    };

    this.init();
  }

  init() {
    this.getAndSetCurrency();
  }

  setRightInp() {
    this.view.rightInp.value = this.model.leftValue * this.model.coefficient;
  //   console.log(this.view.rightInp.value, this.model.leftValue, this.model.coefficient);
  }
  setLeftInp() {
    this.view.leftInp.value = this.model.rightValue * this.model.coefficient;
    // console.log(this.view.leftInp.value, this.model.rightValue, this.model.coefficient);
  }

  onLeftCurrencyChange = async (currency) => {
    this.model.setLeftCurrency(currency);
    await this.getAndSetCurrency();
    this.setRightInp();
    this.setLeftInp();

    this.writeRightCurency();
    this.writeLeftCurency();
  };

  onRigthCurrencyChange = async (currency) => {
    this.model.setRightCurrency(currency);
    await this.getAndSetCurrency();
    this.writeRightCurency();
    this.writeLeftCurency();

    this.setRightInp();
    this.setLeftInp();
  };

  fetchCurency = async (base, symbols) => {
    const response = await fetch(
      `https://api.exchangerate.host/latest?base=${base}&symbols=${symbols}`
    );
    const data = await response.json();
    return data;
  };
  
  getAndSetCurrency = async () => {
    const data = await this.fetchCurency(
      this.model.leftCurrency,
      this.model.rightCurrency
    );
    this.model.setCoefficent(data.rates[this.model.rightCurrency]);
  };

  writeLeftCurency() {
    const curLeftDiv = document.querySelector(".curency-Left");
    curLeftDiv.innerText = `1 ${this.model.leftCurrency} = ${(this.model.coefficient).toFixed(3)} ${this.model.rightCurrency}`;
  }

  writeRightCurency() {
    const curRightDiv = document.querySelector(".curency-Right");
    curRightDiv.innerText = `1 ${this.model.rightCurrency} = ${(1/this.model.coefficient).toFixed(3)} ${this.model.leftCurrency}`;
  }
}
