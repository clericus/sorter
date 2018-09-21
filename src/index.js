class Sorter {
  constructor() {
    this.arr=[];                                //empty
    this.sortFun = function(a,b){return a - b}  //default function
    }

  add(element) {           
    this.arr.push(element);
    }

  at(index) {
    return this.arr[index];
    }
  get length() {
    return this.arr.length;
    }
  
  toArray() {
    return this.arr;
    }

  sort(indices) { 
    let arrIndices = indices.sort((a, b) => a-b);    //sotred array of indices
    let arrNew = [];                                //empty array for selected elements
    for (let i = 0; i < arrIndices.length; i++)
      {
        arrNew.push(this.arr[arrIndices[i]]);      //filling of empty array
      } 
    arrNew.sort(this.sortFun);                      //sorting selected elements in new array with function
    for (let j = 0; j < arrNew.length; j++)
      {
        this.arr[arrIndices[j]] = arrNew[j];        //replacement selected elements 
      }
    }

  setComparator(compareFunction) {
    this.sortFun = compareFunction;                 //replacement default function
  }
}

module.exports = Sorter;