const budgetController = (() => {})();
const UIController = (() => {})();
const controller = ((budgetCtrl, UICtrl) => {
  const ctrlAddItem = () => {
    console.log(`clicked`);
  };
  document.querySelector(".add_btn").addEventListener("click", ctrlAddItem);
  document.addEventListener("keypress", e => {
    if (e.keyCode === 13 || e.which === 13) {
      ctrlAddItem();
    }
  });
})(budgetController, UIController);
