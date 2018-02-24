//取数组中最大值
//将数组中第一个元素赋值给一个变量，并且把这个变量作为最大值；
//开始遍历数组，从第二个元素开始依次和第一个元素进行比较
//如果当前的元素大于当前的最大值，就把当前的元素值赋值给最大值
//移动到下一个元素，继续按前面一步操作
//当数组元素遍历结束时，这个变量存储的就是最大值

Array.prototype.max=function(){
    var max=this[0];
    this.forEach(function(item,index){
        if(item>max){
            max=item;
        }


    })
    return max;

}
var arr = [1,45,23,3,6,2,7,234,56];
var getMax=arr.max();
console.log(getMax)