//no.1

const lha  = (numbers: number[]) =>
    console.log(
        Math.min(...numbers),
        Math.max(...numbers),
        (numbers.reduce((sum, n) => sum + n,0) / numbers.length).toFixed(4) 
    );

    lha([12, 5, 23, 18, 4, 45, 32]);
    

//no.2

const concatenating = (arr: string[]) =>
    console.log(
      arr.map((str, i) => (i == arr.length - 1 ? " and " + str : str)).toString()
    );
  
  concatenating(["apple", "banana", "cherry", "date"]);

  //no.3

  const smallestNumbers = (numbers: number []) =>
    console.log(numbers.sort((a, b) => a - b)[1]);

  smallestNumbers([5, 3, 1, 7, 2, 6]);

  //no.4

  const sumSamePos = (numbers1: number[], numbers2: number[]) =>
    console.log(numbers1.map((n, i) => n + numbers2[i]));

sumSamePos([1, 2, 3], [3, 2, 1]);

//no.5




    