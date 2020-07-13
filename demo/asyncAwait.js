const tick = Date.now();
const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`);

// Part I - async basic
function g() {
    return 1
}

async function f() {
    return 1; // always return Promises
}

// log(g())
/// f().then(result => log(result))

// async function f() {
//     return Promise.resolve(1);
// }

// f().then(result => log(result)); // 1


//   Part II - async await basic

async function f() {
    try {
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve(2), 1000) // wait 1 second
            // resolve(2)
        })

        let result = await promise; // wait until the promise resolves (*) // 2

        const result_A = result * 2

        log(result_A)
        // log(result);
        return result; // "done!" // return a promise
    } catch (error) {

        console.log("ERROR", error)

    }


}

console.log("This is called first", f())

// log("I AM BELOW first call")