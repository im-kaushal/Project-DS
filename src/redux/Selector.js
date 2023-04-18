import {createSelector} from '@reduxjs/toolkit';

// Selector to get the cart state from the Redux store
const cartSelector = state => state.cart;

// Selector to calculate the total quantity of items in the cart
export const cartTotalSelector = createSelector([cartSelector], cart =>
  cart.reduce((total, current) => (total += current.quantity), 0),
);

// Selector to calculate the total price of items in the cart
export const cartTotalPriceSelector = createSelector([cartSelector], cart =>
  cart.reduce(
    (total, current) => (total += current.price * current.quantity),
    0,
  ),
);

// Selector to apply a coupon and calculate the discounted total price
export const cartDiscountedPriceSelector = createSelector(
  [cartTotalPriceSelector],
  total => couponCode => {
    // Implement coupon logic here
    let discountedPrice = total;
    if (couponCode === 'COUPON1') {
      discountedPrice *= 0.9; // 10% discount
    } else if (couponCode === 'COUPON2') {
      discountedPrice *= 0.8; // 20% discount
    }
    return discountedPrice.toFixed(2);
  },
);
