function MergeSortedArrays(array1, array2) {
    let merged = [];
    array1item = array1[0];
    array2item = array2[0];
    let i = 1;
    let j = 1;
    while (array1item || array2item) {
        if (!array2item || array1item < array2item) {
            merged.push(array1item);
            array1item = array1item[i];
            i++;

        } else {
            merged.push(array2item);
            array2item = array2item[j];
            j++;
        }

    }
    return merged;


}
const result = MergeSortedArrays([0, 3, 4, 31], [4, 6, 30]);
console.log(result);
//[0,3,4,31,4,6,30]//[0,3,4,4,6,30,31]
let x = [0, 3, 4, 31]
let y = [4, 6, 30]
