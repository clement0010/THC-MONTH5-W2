const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

// Part I - Reject & Reolsve
// let promise = new Promise(function (resolve, reject) {
//     // the function is executed automatically when the promise is constructed

//     // after 1 second signal that the job is done with the result "done"
//     setTimeout(() => reject("ERROR"), 2000);
// });

// promise.then(result => log(result)).catch(err => log(err))

// let promise_1 = new Promise(function (resolve, reject) {
//     // after 1 second signal that the job is finished with an error
//     setTimeout(() => reject(new Error("Whoops!")), 1000);

// });

// promise_1
//     .then(e => log(e))
//     .catch(err => log(err))

// // Part II - Reject & Resolve Combined

// // There can be only a single result or an error
// let promise = new Promise(function (resolve, reject) {
//     if("SUCCESFULLY GET SOMEHINTG"){
//         resolve("done");

//     } else {
//         reject(new Error("…")); // ignored

//     }

//     setTimeout(() => resolve("…")); // ignored
// });

// promise.then(e => log(e))

// Part III - Chaining

new Promise(function (resolve, reject) {

    resolve(1) // return 5
    // setTimeout(() => resolve(1), 1000); // (*)

})
    .then(function (result_A) { // (**)
        // result_A = 5
        log(result_A); // 5
        return result_A * 2; // 2

    })
    .then(function (result_B) { // (***)
        // result_B = result_A * 2
        log(result_B); // 2
        return result_B * 3; // 6

    })
    .then(function (result_C) {
        // result_C = result_B * 2
        log(result_C); // 6
        return result_C * 5; // 30

    })
    .catch(function (err) {
        log(err)
    })

// let promise = new Promise(function (resolve, reject) {
//     setTimeout(() => resolve(1), 1000);
// });

// promise.then(function (result) {
//     log(result); // 1
//     return result * 2;
// });

// promise.then(function (result) {
//     log(result); // 1
//     return result * 2;
// });

// promise.then(function (result) {
//     log(result); // 1
//     return result * 2;
// });

// Promise Hell

// loadScript("/article/promise-chaining/one.js").then(script1 => {
//     loadScript("/article/promise-chaining/two.js").then(script2 => {
//         loadScript("/article/promise-chaining/three.js").then(script3 => {
//             // this function has access to variables script1, script2 and script3
//             one();
//             two();
//             three();
//         });
//     });
// });

// // Promise All

// Promise.all([
//     new Promise(resolve => setTimeout(() => resolve(1), 3000)), // 1
//     new Promise(resolve => setTimeout(() => resolve(2), 2000)), // 2
//     new Promise(resolve => setTimeout(() => resolve(3), 1000))  // 3
// ]).then(result => log(result)); // 1,2,3 when promises are ready: each promise contributes an array member