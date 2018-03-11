var dataArr=[8,7,2,4,70,10,30,12,1];
//实现冒泡排序
 function bubble(dataArr){
     //获取数组的个数
     var getLen=dataArr.length;
     //第一个次数为传入数组个数，从左到右逐次比较次数减少1
     var tem;
     for(var i=getLen-1;i>0;i-- ){

         for (var j=0;j<i;j++){
             if(dataArr[j]>dataArr[j+1]){
                 tem=dataArr[j+1];
                 dataArr[j+1]=dataArr[j];

                 dataArr[j]=tem

             }
         }
         console.log(dataArr);
     }
     return dataArr;
 }
console.log(bubble(dataArr));