const tick = Date.now();
const log = function (v) {
    console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`)
}

const log_1 = (v) => {
    console.log(`${v} \n Elapsed: ${Date.now() - tick}ms`)

}


const codeBlocker = () => {

    // // Blocking

    // let i = 0;
    // while (i < 1000000000) {
    //     i++;
    // }

    // return log('*** billion loops done');


    // Async blocking

    // return new Promise((resolve, reject) => {

    //     let i = 0;
    //     while (i < 1000000000) { i++; }

    //     resolve(log('*** billion loops done'))
    // })

    // Non-blocking

    return Promise.reject("==========DATA===========").then(result => {

        log(result)

        let i = 0;
        while (i < 1000000000) {
            i++;
        }

        return log('*** billion loops done')

    }).catch(err => {

        log(err)

    })

}

log('=============Synchronous 1================');

codeBlocker()

log('=============Synchronous 2===============');