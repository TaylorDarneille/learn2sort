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
      "video": "https://www.youtube.com/embed/ROalU379l3U",
      "repl": "https://repl.it/@tmdarneille/Learn2Insert?lite=true",
      "steps": ["step 0 of insertion sort", "step 1 of insertion sort", "step 2 of insertion sort"]
    },
    {
      "index": "2",
      "title": "SELECTION",
      "video": "https://www.youtube.com/embed/Ns4TPTC8whw",
      "repl": "https://repl.it/@tmdarneille/Learn2Select?lite=true",
      "steps": ["step 0 of selection sort", "step 1 of selection sort", "step 2 of selection sort"]
    }
  ]
}

export default SORTS;
