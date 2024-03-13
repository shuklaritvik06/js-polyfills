Promise.promiseAny = function (promises) {
  return new Promise((resolve, reject) => {
    let result = [];
    let count = 0;
    let errors = [];

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then((data) => {
          result.push(data);

          if (result.length === promises.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          errors.push(new Error(err));

          if (++count === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
};

Promise.promiseAny([Promise.reject("he"), Promise.reject("ddd")])
  .then((dev) => console.log(dev))
  .catch((err) => console.log(err));
