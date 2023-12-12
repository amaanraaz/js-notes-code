export default function linearSearch(arr,x){
    for (let index = 0; index < arr.length; index++) {
        if(arr[index] === x) return index;        
    }
    return undefined;
}
 
export function binarySearch(arr,x){
    let lo = 0, hi = arr.length-1;
    while(lo<=hi){
        let mid = lo + Math.floor((hi-lo)/2);
        if(arr[mid]===x)return mid;
        else if(arr[mid]<x){
            lo = mid+1;
        }
        else{
            hi = mid-1;
        }
    }
    return undefined;
}