
var dataArr=[1,8,2,4,70,20,30,12];
    //选择排序算法
function insertionSort(){
    var temp,inner;
    var getLen=dataArr.length;
    //从1开始
    for(var outer=1;outer<getLen;outer++){
        temp=dataArr[outer];
        inner=outer;
        //如果inner大于0并且前面的值大于后面的值
        while(inner>0&&(dataArr[inner-1]>=temp)){
            //后面的值等于前面的值
            dataArr[inner]=dataArr[inner-1];
            --inner;
        }
        dataArr[inner]=temp;
    }
    return dataArr
}

   var getContent=insertionSort();
    console.log(getContent);



