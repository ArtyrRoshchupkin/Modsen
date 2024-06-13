function findUniq(arr) {
    const count = {};
  
    
    for (const num of arr) {
      count[num] = (count[num] || 0) + 1;
    }
  
    
    for (const num in count) {
      if (count[num] === 1) {
        return Number(num);
      }
    }
  }