/* Bubble sort
Push the largest number in the list to the end
keep doing this until we have a sorted list

A sorting algorithm where largest always bubbles to the top.s
*/

/* loop through an arr backwards i = arr.length i > 0
	inside it create another loop with j = 0 and j < i -1
	if arr[j] > arr[j + 1] swap
	return arr
*/

const bubbleSort = arr => {
	const swap = (arr, idx1, idx2) => {
		let temp = arr[idx1];
		arr[idx1] = arr[idx2];
		arr[idx2] = temp;
	};

	for (let i = arr.length; i > 0; i--) {
		let didSwap = false;
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j+1);
				didSwap = true;
			}
		}
		if(!didSwap) break;
	}
	return arr;
};

bubbleSort([21, 7, 319, 42, 18]);