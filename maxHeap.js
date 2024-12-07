class MaxHeap {
    constructor() {
        this.heap = [];
    }

    push(val) {
        this.heap.push(val);
        this.bubbleUp();
    }

    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > 0) {
            this.swap(0, bottom);
        }
        this.heap.pop();
        this.bubbleDown();
        return poppedValue;
    }

    peek() {
        return this.size() > 0 ? this.heap[0] : undefined;
    }

    size() {
        return this.heap.length;
    }

    bubbleUp() {
        let index = this.size() - 1;
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[index] > this.heap[parentIndex]) { // Corrected comparison
                this.swap(index, parentIndex);
                index = parentIndex;
            } else {
                break;
            }
        }
    }

    bubbleDown() {
        let index = 0;
        const length = this.size();
        while (index < length) {
            const leftChild = 2 * index + 1;
            const rightChild = 2 * index + 2;
            let largest = index;
            if (leftChild < length && this.heap[leftChild] > this.heap[largest]) { // Corrected comparison
                largest = leftChild;
            }
            if (rightChild < length && this.heap[rightChild] > this.heap[largest]) { // Corrected comparison
                largest = rightChild;
            }
            if (largest !== index) {
                this.swap(largest, index);
                index = largest;
            } else {
                break;
            }
        }
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }
}


var findKthLargest = function (nums, k) {
    const maxHeap = new MaxHeap();
    for (const num of nums) {
        maxHeap.push(num);
        if (maxHeap.size() > k) {
            maxHeap.pop();
        }
    }
    console.log('maxHeap', maxHeap);
    return maxHeap.peek();
};

// Example usage:
const nums = [3, 2, 1, 5, 6, 4];
const k = 2;
console.log(findKthLargest(nums, k)); // Output: 5