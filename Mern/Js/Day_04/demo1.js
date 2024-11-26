// 1. No Arguments, No Return Type

function addNumbersNoArgsNoReturn() {
    const num1 = 5; // Example number
    const num2 = 10; // Example number
    const sum = num1 + num2;
    console.log("Sum (No Args, No Return):", sum);
  }
  
  addNumbersNoArgsNoReturn();

  
//   2. No Arguments, With Return Type

function addNumbersNoArgsWithReturn() {
    const num1 = 15; // Example number
    const num2 = 20; // Example number
    return num1 + num2;
  }
  
  const sum1 = addNumbersNoArgsWithReturn();
  console.log("Sum (No Args, With Return):", sum1);

//   3. With Arguments, No Return Type

function addNumbersWithArgsNoReturn(num1, num2) {
    const sum = num1 + num2;
    console.log("Sum (With Args, No Return):", sum);
  }
  
  addNumbersWithArgsNoReturn(25, 30);

  
//   4. With Arguments, With Return Type

function addNumbersWithArgsWithReturn(num1, num2) {
    return num1 + num2;
  }
  
  const sum2 = addNumbersWithArgsWithReturn(35, 40);
  console.log("Sum (With Args, With Return):", sum2);
  