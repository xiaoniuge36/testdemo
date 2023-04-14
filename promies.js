// const promise = new Promise((resolve, reject) => {
//     // 模拟异步
//     setTimeout(() => {
//         const num = Math.random(); // 生成一个随机数
//         if (num < 0.5) {
//             resolve(num); // 小于0.5，调用resolve
//         } else {
//             reject("数字太大了"); // 大于0.5，调用reject
//         }
//     }, 1000); 
// });

// promise.then(
//     (data) => {
//         console.log("resolved", data);
//     }
// ).catch(
//     (reason) => {
//         console.log("rejected", reason);
//     }
// );

// function getRanderNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const num = Math.random();
//             if (num < 0.5) {
//                 resolve(num);
//             } else {
//                 reject("数字太大了");
//             }
//         }, 1000);
//     });
// }

// async function test() {
//     try {
//         const num = await getRanderNum();
//         console.log("resolved", num);
//     }
//     catch (err) {
//         console.log("rejected", err);
//     }
// }

// test();

const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("promise1");
    }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("promise2");
    // }, 2000);
    resolve("promise2");
});

const promise3 = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve("promise3");
    // }, 3000);
    resolve("promise3");
});
// 返回最快的那个promise
Promise.race([promise1, promise2, promise3]).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});
