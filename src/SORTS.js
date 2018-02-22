const SORTS = {
  sorts: [
    {
      "index": "0",
      "title": "BUBBLE",
      "description": "This sorting algorithm gets it's name from the way the values 'bubble up', one at a time, to their proper position. The largest value finds it's place first, then the second largest, and so on. This will result in a sorted sublist accumulating from right to left. To begin, iterate through the list and compare adjacent elements. If they are incorrectly positioned- that is, if the element on the left is larger than the element on the right - swap them. Otherwise, do nothing and move on to the next pair. Note that you will only need to compare pairs of unsorted elements.",
      "video": "https://www.youtube.com/embed/lyZQPjUT5B4?rel=0&amp;start=45",
      "repl": "https://repl.it/@tmdarneille/Learn2Bubble?lite=true",
      "steps": ["Let i keep track of the index of the rightmost unsorted element in the list.", "You'll need to iterate through the unsorted list, comparing adjacent elements. Do this once for each element in the list. Write a loop to keep track of these iterations using i. Make sure the loops ends once the entire list is sorted.", "Let a and b be the indices of the pair of elements you compare.", "Write a loop that moves a and b through the unsorted sublist.", "Fill inside the loop, compare the values at indicies a and b. Swap them, if necessary."]
    },
    {
      "index": "1",
      "title": "INSERTION",
      "description": "Insertion sort builds a sorted sublist from left to right by inserting values from the unsorted sublist into the sorted sublist. To begin, the first element in the array is considered sorted. Then, the first element of the unsorted sublist is stored in a variable and compared to each element to it's left. Each element that is found to be larger than the current unsorted element gets shifted to the right to make room for the unsorted element to be placed in it's proper locaiton.",
      "video": "https://www.youtube.com/embed/ROalU379l3U",
      "repl": "https://repl.it/@tmdarneille/Learn2Insert?lite=true",
      "steps": ["Every element in the list, aside from the 0th element, will need to be sorted. Write a loop that uses i to keep track of the location of the unsorted element in the unsorted sublist. ", "Store the first unsorted element in a variable, first_unsorted.", "Now you'll need to iterate (right to left) through the sorted sublist. Write a loop that uses j to keep track of the index of the value you'll compare to first_unsorted. The loop should end if you find an element less than first_unsorted, or if you reach the beginning of the list.", "Inside the loop, move the value at j to the right, and increment j.", "Outside of the loop, insert first_unsorted, accounting for the fact that j was been incremented down before the loop ended."]
    },
    {
      "index": "2",
      "title": "SELECTION",
      "description": "Selection sort accumulates a sorted sublist from left to right. This algorithm repeatedly selects the smallest element from the unsorted portion of the list and places it at the end of the sorted sublist. It finds the smallest element from the unsorted sublist by storing the location of the first unsorted element in variable. Then it iterates through the rest of the sublist, comparing the assumed minimum value with the current value, and overriding the assumed minimum value with the current value if it is the smaller of the two.",
      "video": "https://www.youtube.com/embed/Ns4TPTC8whw",
      "repl": "https://repl.it/@tmdarneille/Learn2Select?lite=true",
      "steps": ["Write a loop that uses i to keep track of the index of the first unsorted element.", "Inside the loop, initialize min_index to be the index of the first unsorted element.", "Write a loop that uses j to iterate through the rest of the unsorted sublist.", "Compare the value at min_index to to the value at j, reassigning min_index if the value at j is smaller."]
    }
  ]
}

export default SORTS;
