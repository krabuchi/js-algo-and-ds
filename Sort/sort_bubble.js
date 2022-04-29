/* Bubble sort
Push the largest number in the list to the end
keep doing this until we have a sorted list
*/

/* loop through an arr backwards i = arr.length i > 0
    inside it create another loop with j = 0 and j < i -1
    if arr[j] > arr[j + 1] swap

    return arr
*/

const bubble_sort = function (arr) {
    for(var i = arr.length; i > 0; i--) {
      for(var j = 0; j < i - 1; j++) {
        if(arr[j] > arr[j + 1]){
          var temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    console.log(arr);
    return arr;
  }
  
  bubble_sort([21, 7, 319, 42, 18]);