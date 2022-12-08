export default function analyzeArray(arr) {
    let average = arr.reduce((total, current) =>{
        return  total+ current;
    },0) / arr.length;
    let max = arr.reduce((total, current) => Math.max(total, current), -Infinity);
    let min = arr.reduce((total, current) => Math.min(total, current), Infinity);
    return {
        average,
        min,
        max,
        length: arr.length
      }
}