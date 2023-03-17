function sumOfDistinctElements(set1, set2) {
    let distinctElements = [];
    let sum = 0;
    
    // Add all elements from set1 that are not in set2
    for (let i = 0; i < set1.length; i++) {
      if (!set2.includes(set1[i])) {
        distinctElements.push(set1[i]);
      }
    }
    
    // Add all elements from set2
    for (let i = 0; i < set2.length; i++) {
      if (!distinctElements.includes(set2[i])) {
        distinctElements.push(set2[i]);
      }
    }
    
    // Sum all distinct elements
    for (let i = 0; i < distinctElements.length; i++) {
      sum += distinctElements[i];
    }
    
    return sum;
  }
  
  // Example usage
  const set1 = [3, 1, 7, 9];
  const set2 = [2, 4, 1, 9, 3];
  const result = sumOfDistinctElements(set1, set2); // result is 13

  //problem 2
  function dotProduct(v1, v2) {
    let ps = 0;
    for (let i = 0; i < v1.length; i++) {
      ps += v1[i] * v2[i];
    }
    return ps;
  }
  
  function checkOrthogonality(vectors) {
    for (let i = 0; i < vectors.length; i++) {
      for (let j = i + 1; j < vectors.length; j++) {
        let dotProduct = dotProduct(vectors[i], vectors[j]);
        if (dotProduct !== 0) {
          console.log(`Vectors ${i+1} and ${j+1} are not orthogonal.`);
        } else {
          console.log(`Vectors ${i+1} and ${j+1} are orthogonal.`);
        }
      }
    }
  }
  