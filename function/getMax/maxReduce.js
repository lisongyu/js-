Array.prototype.max = function () {
    return this.reduce(function (preValue, curValue) {
        return preValue > curValue ? preValue : curValue;
    })
}
var arr = [1, 45, 23, 3, 6, 2, 7, 234, 56];
var getMax=arr.max();
console.log(getMax);
