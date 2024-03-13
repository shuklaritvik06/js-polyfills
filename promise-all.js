Promise.promiseAll = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;

    promises.forEach(promise => {
      Promise.resolve(promise)
        .then(data => {
          result.push(data);
          if (++count === promises.length) {
            resolve(result);
          }
        })
        .catch(reject);
    });
  });
};

Promise.promiseAll([Promise.resolve("he"), Promise.reject("ddd")])
  .then(dev => console.log(dev))
  .catch(err => console.log(err));
