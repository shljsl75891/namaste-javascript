# Callback Hell - Episode 1

Callbacks are the way to achieve tasks asynchronously in javascript. But, using a lot of callback functions lead to some very important concerns:

- **Callback Hell ([Pyramid of Doom](<https://en.wikipedia.org/wiki/Pyramid_of_doom_(programming)>))**
  - The codebase starts to grow horizontally rather than vertically.
  - Maintainability and Readability of codebases decreases

```javascript
const cart = ["shoes", "pants", "kurtas"];

api.createOrder(cart, function(orderId) {
    api.proceedToPayment(orderId, function(paymentDetails) {
        api.showOrderSummary(paymentDetails, function(status) {
            api.updateWallet(status);
        }):
    });
});
```

- **Inversion of Control**
  - We have to trust `createOrder` to invoke `proceedToPayment`, which is very risky.
  - We have given control of important piece of our app's code to an random API which may be written by someone else.
  - We have no guarantee that `proceedToPayment` will ever be invoked.
  - `createOrder` may have bugs as it would be written/changed by someone else.

```javascript
const cart = ["shoes", "pants", "kurtas"];

api.createOrder(cart, function (orderId) {
  api.proceedToPayment(orderId);
});
```
