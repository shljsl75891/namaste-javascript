# Consumption of Promises

Promise is an object which represents eventual completion of asynchronous operation. It is used to handle asynchronous operations in javascript.

```javascript
const GITHUB_API = "https://api.github.com/users/shljsl75891";
const promise = fetch(GITHUB_API); // async operation
```

- **State**: There are only three possible states
  - `"pending"` - while executing the asynchronous operation
  - `"fullfilled"` - after asynchronous operation is executed successfully
  - `"rejected"` - if anything wrong happens during the asynchronous operation
- **Result:** which is accessible as parameter of `.then(function(result))`
  - `undefined` - while executing the asynchronous operation
  - `return value` - after asynchronous operation is executed successfully
  - `error` - if anything wrong happens during the asynchronous operation

The promises are far better for handling asynchronous operations then using callbacks:

- It comes with a lot of trust in transactions
- It can only be resolved once
- It has guranteed to call the callback function only once and when promise is in `"fulfilled"` state.
- It's properties are immutable (not result itself). We can only pass the result here and there, but it can never be changed by someone else. So, as developers, we have full control over our code.

```javascript
// a solution to callback hell using Promise Chaining
createOrder()
  // attaching callback function (not passing)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function () {
    return updateWalletStatus();
  });
```
