
var dataArr=[1,8,2,4,70,20,30,12];
    //选择排序算法
    function selectionSort(){
        //设置最小值和临时变量
        var min,temp;
        //获取长度
        var getLen=dataArr.length;
        //从0开始到长度-1
        for(var i=0;i<getLen-1;i++){
            //设置最小值为i;
            min=i;
            for(var j=i+1;j<getLen;j++){
                //如果当前j索引值大于最小值，将索引赋值最小值
                if(dataArr[j]<dataArr[min]){
                    min=j;
                }

            }
            //i如果与最小值不相等则进行交互
            if(i!==min){
                //将进行交换
                temp=dataArr[min];
                dataArr[min]=dataArr[i];
                dataArr[i]=temp;

            }

        }
        return dataArr
    }




   var getContent=selectionSort();
    console.log(getContent);



