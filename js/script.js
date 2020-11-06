const cartProduct = document.querySelectorAll(".cart__product");
const cartSummaryEl = document.querySelector(
  ".cart__summary-total .cart__summary-price .value"
);
let cartSummary;

for (let i = 0; i < cartProduct.length; i++) {
  cartProduct[i]
    .querySelector(".btn-quantity--minus")
    .addEventListener("click", function () {
      removeQuantity(i);
    });
  cartProduct[i]
    .querySelector(".btn-quantity--plus")
    .addEventListener("click", function () {
      addQuantity(i);
    });
  cartProduct[i]
    .querySelector(".cart__quantity-input")
    .addEventListener("input", function () {
      calcTotal();
    });
}

const addQuantity = function (i) {
  const cartQuantity = cartProduct[i].querySelector(".cart__quantity-input");
  let quantity = Number(cartQuantity.value) + 1;
  cartQuantity.value = quantity;
  calcTotal();
};

const removeQuantity = function (i) {
  const cartQuantity = cartProduct[i].querySelector(".cart__quantity-input");
  let quantity = Number(cartQuantity.value) - 1;
  if (quantity < 0) quantity = 0;
  cartQuantity.value = quantity;
  calcTotal();
};

const calcTotal = function () {
  cartSummary = 0;
  for (let i = 0; i < cartProduct.length; i++) {
    const cartQuantity = Number(
      cartProduct[i].querySelector(".cart__quantity-input").value
    );
    const cartPrice = Number(
      cartProduct[i].querySelector(".cart__price--discounted .value")
        .textContent
    );
    cartSummary = cartSummary + cartQuantity * cartPrice;
    cartSummaryEl.textContent = cartSummary.toFixed(2);
  }
};
