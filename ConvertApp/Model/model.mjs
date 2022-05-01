export default class Model {
  constructor() {
    this.leftCurrency = "RUB";
    this.rightCurrency = "USD";
    this.coefficient = 1;
    this.leftValue = 1;
    this.rightValue = 1;
  }

  setRightCurrency = (currency) => {
    this.rightCurrency = currency;
  };

  setLeftCurrency = (currency) => {
    this.leftCurrency = currency;
  };

  setCoefficent = (amount) => {
    this.coefficient = amount;
  };

  setLeftValue = (value) => {
    this.leftValue = value;
  };

  setRightValue = (value) => {
    this.rightValue = value;
  };
}
