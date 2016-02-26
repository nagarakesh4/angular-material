/// <reference path="_all.ts" />

let a = [1, 2, 3];
let b = [...a, 4, 5, 6];
let c = [...b, 7, 8, 9];
for(var i of b){
    i++;
}