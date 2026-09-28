const Capacity = 6

function sixToast(num) {
  const howmanymoreorless = Capacity - num;

  if (howmanymoreorless > 0) {
    return `Put ${howmanymoreorless} more toast${howmanymoreorless === 1 ? "" : "s"}.`;
  }

  if (howmanymoreorless === 0) {
    return "Toast count is just right.";
  }

  return `Toast overflow: take ${Math.abs(howmanymoreorless)} toast${Math.abs(howmanymoreorless) === 1 ? "" : "s"} away.`;
}

console.log(sixToast(2));
console.log(sixToast(6));
console.log(sixToast(7));

//initial thoughts
//set sixToast = 6  turn into  set capacity = 6
//input sixTost =(user input) is parameter , and arguments 
//6 - num (argument) = howmanymoreorless
//if howmanymoreorless > 0 return "put `howmanymoreorless` toast"
//if howmanymoreorless < 0 retrurn "toaster is full, take away abs(howmanymoreorless)"

//keys:
// capacity: number of toast process each time
//sixToast: count of toast put into
//howManymoreorless : the number need more or less

//arithmetics:
 
  // howManymoreorless = sixToast -toastPutinto
  // howManymoreorless = sixToast - num
  // howManymoreorless = 6 - num

//sixToast -toastPutinto = absolute count of howManymoreorless 