function join(arr) {
    const result = [];
    let minOverlap = Infinity;
  
    for (let i = 0; i < arr.length - 1; i++) {
      const currentWord = arr[i];
      const nextWord = arr[i + 1];
      let overlap = 0;
  
      // Find the minimum overlap between the current word and the next word
      for (let j = Math.max(currentWord.length - nextWord.length, 0); j < currentWord.length; j++) {
        if (currentWord.slice(j) === nextWord.slice(0, currentWord.length - j)) {
          overlap = currentWord.length - j;
          break;
        }
      }
  
      // Update the minimum overlap
      minOverlap = Math.min(minOverlap, overlap);
  
      // Append the next word to the result, eliminating repeated characters in the overlap
      result.push(nextWord.slice(minOverlap));
    }
  
    // Append the first word to the result
    result.unshift(arr[0]);
  
    return [result.join(""), minOverlap];
  }
  
  // Example usage:
  console.log(join(["oven", "envier", "erase", "serious"]));
  console.log(join(["move", "over", "very"]));
  console.log(join(["to", "ops", "psy", "syllable"]));
  console.log(join(["aaa", "bbb", "ccc", "ddd"]));