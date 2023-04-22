// У вас есть список из n элементов, которые представляют собой оценки студентов по математике.
//  Вам нужно отсортировать этот список в порядке убывания оценок с использованием алгоритма сортировки Merge sort.
// Для решения этой задачи напишите функцию, которая принимает на вход список оценок и возвращает новый список, отсортированный в порядке убывания.
const array = [3, 8, 1, 9, 4, 2, 7, 6, 5];

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let leftArr = arr.slice(0, mid);
    let rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
 }
 
 function merge(leftArr, rightArr) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if (leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(rightArr[rightIndex]);
            rightIndex++;
        } else {
            result.push(leftArr[leftIndex]); 
            leftIndex++;
        }
    }
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex));
 }
 
 console.log(mergeSort(array));