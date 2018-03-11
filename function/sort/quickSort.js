//快速排序
var dataArr=[1,8,2,4,15,20,30,12];
var quickSort = function(arr) {

    if (arr.length <= 1) {
        return arr;
    }

    var pivotIndex = Math.floor(arr.length / 2);
   //移除中间的
    var pivot = arr.splice(pivotIndex, 1)[0];
    console.log(pivot);

    var left = [];

    var right = [];

    for (var i = 0; i < arr.length; i++) {

        if (arr[i] < pivot) {
            //小于左边插入
            left.push(arr[i]);

        } else {
            //大于右边插入

            right.push(arr[i]);

        }

    }
    //采用递归调用
    return quickSort(left).concat([pivot], quickSort(right));
}
var getArr=quickSort(dataArr);
console.log(getArr)