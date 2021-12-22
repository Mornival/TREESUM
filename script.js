let massive = [5, 7, [10 , [6 , [4]]],[4, [2, [2]], 8, [1, 3], 2], [9, []], 1, 8];
console.log(sum(massive));
// let depth = 0;
// let j = 0;
// let vlozh = false;
// while(vlozh != true){
//     depth++;
//     vlozh = true;
//     let mass = massive;
//     mass = mass.flat(depth);
//     for(let i = 0; i < mass.length;i++){
//         if(Array.isArray(mass[i])){
//             vlozh = false;
//         }
//     }
// }
// massive = massive.flat(depth);
// console.log(massive);
// let result = massive.reduce((sum,current) => sum + current, 0);
// console.log(result);
function sum(mass){
    let s = 0;
    for(let i = 0; i < mass.length; i++){
        if(Array.isArray(mass[i]) == true){
            s += sum(mass[i]);
        }
        if(typeof (mass[i]) === "number"){
            s += mass[i];
        }
    }
    return s;
}



