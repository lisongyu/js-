function Carray(numElements){
    //数据数组
    this.dataStore=[];
    this.pos=0;
    //设置元素数量
    this.numElements=numElements;
    //插入数据
    this.insert=insert;
    this.toString=toString;
    this.clear=clear;
    //设置数据
    this.setData=setData;
    this.swap=swap;
    this.selectionSort=selectionSort;
    this.bubbleSort=bubbleSort;
    this.insertionSort=insertionSort
    for(var i=0;i<numElements;++i){
        this.dataStore[i]=i;
    }
}
//建立方法设置数据
function setData(){
    for(var i=0;i<this.numElements;++i){
        this.dataStore[i]=Math.floor(Math.random()*(this.numElements+1));
    }
}
//清除数据
function clear(){
    for (var i=0;i<this.dataStore.length;++i){
        this.dataStore[i]=0;
    }
}
//插入数据
function insert(element){
    this.dataStore[this.pos++]=element;
}
//转为字符串
function toString(){
    var restr='';
    for(var i=0;i<this.dataStore.length;++i){
        restr+=this.dataStore[i]+" ";
        if(i>0&i%10==0){
            restr+='\n';
        }
    }
    return restr;
}
function swap(arr,index1,index2){
    var temp=arr[index1];
    arr[index1]=arr[index2];
    arr[index2]=temp;
}