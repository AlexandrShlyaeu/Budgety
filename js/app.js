const budgetController = (() => {})();
const UIController = (() => {
  const domStrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };
  return {
    getInput: () => {
      return {
        type: document.querySelector(domStrings.inputType).value,
        description: document.querySelector(domStrings.inputDescription).value,
        value: document.querySelector(domStrings.inputValue).value
      };
    },
    getDomStrings: () => {
      return domStrings;
    }
  };
})();
const controller = ((budgetCtrl, UICtrl) => {
  const setupEventListeners = () => {
    const DOM = UICtrl.getDomStrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);
    document.addEventListener("keypress", e => {
      if (e.keyCode === 13 || e.which === 13) {
        ctrlAddItem();
      }
    });
  };
  const ctrlAddItem = () => {
    const input = UICtrl.getInput();
    console.log("​ctrlAddItem -> input", input);
  };
  return {
    init: () => {
      console.log(`app started`);
      setupEventListeners();
    }
  };
})(budgetController, UIController);

controller.init();
