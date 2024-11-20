const cart = ["Bike", "Watch", "Phone"];
// const cart = [];
createOrder(cart)
  .then(function (id) {
    console.log(id);
    return proceedToPayment(id);
  })
  .catch(function (err) {
    console.log(err);
  })
  .then(function (paymentInfo) {
    console.log(paymentInfo);
  })
  .catch(function (err) {
    console.log(err);
  });

function createOrder(cart) {
  const pr = new Promise(function (resolve, reject) {
    if (!validateOrder(cart)) {
      const err = new Error("Cart Is Empty");
      reject(err);
    }
    // logic to generate orderId
    orderId = generateOrderId();
    if (orderId) {
      setTimeout(function () {
        resolve(orderId);
      }, 2000);
    }
  });

  return pr;
}

function proceedToPayment(orderId) {
  // logic for payment
  return new Promise(function (resolve, reject) {
    // logic to reject and resolve
    paymentLogic = false;
    if (paymentLogic) {
      reject(new Error("Payment failed"));
    }

    const paymentInfo = "5000rs";
    resolve(paymentInfo);
  });
}
function generateOrderId() {
  return new Date().getUTCMilliseconds();
}

function validateOrder(cart) {
  if (cart.length === 0) {
    return false;
  }
  return true;
}
