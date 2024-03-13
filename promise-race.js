Promise.promiseRace = (promises) => {
  return new Promise((resolve, reject) => {
    promises.forEach((promise) => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
};

Promise.promiseRace([Promise.reject("I am error"), Promise.reject("Hello")]).then((data)=>{
  console.log("Data: ", data);
}).catch((err)=>{
  console.log("Error: ", err);
})

