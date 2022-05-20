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
    this.writeRightCurency();
    this.writeLeftCurency();
    this.addListeners();
  }

  setRightInp() {
    const toNumber = this.model.leftValue * this.model.coefficient;
    this.view.rightInp.value = toNumber.toFixed(3);
    this.model.rightValue = toNumber.toFixed(3);
  }
  setLeftInp() {
    const fromNumber = this.model.rightValue * this.model.coefficient;
    this.view.leftInp.value = fromNumber.toFixed(3);
    this.model.leftValue = fromNumber.toFixed(3);
  }

  onLeftCurrencyChange = async (currency) => {
    this.model.setLeftCurrency(currency);
    await this.getAndSetCurrency();

    this.setRightInp();

    this.writeRightCurency();
    this.writeLeftCurency();
  };

  onRigthCurrencyChange = async (currency) => {
    this.model.setRightCurrency(currency);
    await this.getAndSetCurrency();

    this.setRightInp();

    this.writeRightCurency();
    this.writeLeftCurency();
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
    const curLeftDiv = document.querySelector("#curency-Left");
    curLeftDiv.innerText = `1 ${
      this.model.leftCurrency
    } = ${this.model.coefficient.toFixed(3)} ${this.model.rightCurrency}`;
  }

  writeRightCurency() {
    const curRightDiv = document.querySelector("#curency-Right");
    curRightDiv.innerText = `1 ${this.model.rightCurrency} = ${(
      1 / this.model.coefficient
    ).toFixed(3)} ${this.model.leftCurrency}`;
  }
  addListeners() {
    this.view.radio1.addEventListener("click", () => {
      this.onLeftCurrencyChange("RUB");
    });

    this.view.radio2.addEventListener("click", () => {
      this.onLeftCurrencyChange("USD");
    });

    this.view.radio3.addEventListener("click", () => {
      this.onLeftCurrencyChange("EUR");
    });

    this.view.radio4.addEventListener("click", () => {
      this.onLeftCurrencyChange("GBP");
    });
    this.view.radio5.addEventListener("click", () => {
      this.onRigthCurrencyChange("RUB");
    });

    this.view.radio6.addEventListener("click", () => {
      this.onRigthCurrencyChange("USD");
    });

    this.view.radio7.addEventListener("click", () => {
      this.onRigthCurrencyChange("EUR");
    });

    this.view.radio8.addEventListener("click", () => {
      this.onRigthCurrencyChange("GBP");
    });
  }
}
