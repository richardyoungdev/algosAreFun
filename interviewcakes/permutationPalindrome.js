function hasPalindromePermutation(string) {
    const oddChars = new Set();
    
    for (let i = 0; i < string.length; i++) {
      const char = string[i];
      if (oddChars.has(char)) {
        oddChars.delete(char);
      } else {
        oddChars.add(char);
      }
    }
    
    return oddChars.size <= 1;
  }
  