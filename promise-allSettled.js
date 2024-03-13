Promise.promiseAllSettled = function (promises) {
  return new Promise((resolve) => {
    let result = [];
    let count = 0;

    function handlePromiseSettlement(data, status) {
      result.push({ status, [status === 'fulfilled' ? 'value' : 'reason']: data });
      if (++count === promises.length) {
        resolve(result);
      }
    }

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(data => handlePromiseSettlement(data, 'fulfilled'))
        .catch(data => handlePromiseSettlement(data, 'rejected'));
    });
  });
};

Promise.promiseAllSettled([Promise.resolve("he"), Promise.resolve("ddd")])
  .then(dev => console.log(dev))
  .catch(err => console.log(err));
