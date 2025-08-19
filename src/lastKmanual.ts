function lastKeleManual(arr:number[], k:number){
    //Extract last k element
    let n = arr.length;
    let lastk = [];
    for(let i=n-k; i<n; i++){
        lastk.push(arr[i]);
    }
    //extract first index to last n-k
    for(let i=0; i<n-k; i++){
        lastk.push(arr[i]);
    }
    return lastk;
}
console.log(lastKeleManual([1, 2, 3, 4, 5],2));