const promise = new Promise((resolve, reject) => {
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