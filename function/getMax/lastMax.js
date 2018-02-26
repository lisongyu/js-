// 取出数组中最大值
Array.prototype.max = function () {
    return Math.max.apply(Math, this);
};

var arr = [1, 45, 23, 3, 6, 2, 7, 23456, 56];
var getMax=arr.max(); // 2345
console.log(getMax)