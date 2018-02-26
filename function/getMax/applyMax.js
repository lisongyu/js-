//Function.prototype.apply()让你可以使用提供的this与参数组与的数组来调用参数

// 取出数组中最大值
Array.max = function (array) {
    return Math.max.apply(Math, array);
};

var arr = [1, 45, 23, 3, 6, 2, 7, 2345, 56];
var getMax=Array.max(arr); // 234
console.log(getMax)

