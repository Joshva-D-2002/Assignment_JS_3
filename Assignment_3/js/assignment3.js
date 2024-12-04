// 1. {a:'one', b:'2', f:'5', c:'33', p:'do', q:'one' }: Using this object make an array consisting of all the keys of the given object in reverse order. (output should be ['q', 'p', 'c', 'f', 'b', 'a'])

let obj1 = {
  a: "one",
  b: "2",
  f: "5",
  c: "33",
  p: "do",
  q: "one",
};

let arr1 = Object.keys(obj1).reverse();

console.log(arr1);

// 2. { data: [{a:'one', id:'22'}, {a:'four', id:'7'}, {a:'six', b:'2'},  {a:'sixty', id:'24'},  {a:'five', id:'212'}] }
// From the given object remove the data arrays item with id as '24'. (consider that the data arrays order will be different every time you get, so write code in such a way that given any object it will remove the item with id as 24 if it exists )

const arr2 = [
  { a: "one", id: "22" },
  { a: "four", id: "7" },
  { a: "six", b: "2" },
  { a: "sixty", id: "24" },
  { a: "five", id: "212" },
];

const arr3 = arr2.filter((obj) => obj.id !== "24");

console.log(arr3);

// 3. Write a function to
// a. Calculate the height of the end user's browser screen
// b. To console the name of the web host
// c. To show a warning message if there is no https protocol used in the visited website.
// d. To show an alert message after 10sec while the page is refereshed.

function objectModels() {
  console.log(window.innerHeight);
  console.log(location.host);
  if (!location.protocol.includes("https")) {
    console.warn("Https protocol not used");
  }
  setTimeout(function () {
    alert("Its an alert message after 10 sec webpage loaded");
  }, 10000);
}

objectModels();

// 4. Store your basic details in localstorage of the browser every time the page loads, then console them and finally delete them after 1 minute of the page load.

const user = {
  firstName : 'Joshva',
  lastName : 'D',
  age : 22
}
localStorage.setItem('user', JSON.stringify(user));
localUser = JSON.parse(localStorage.getItem('user'));
console.log(localUser.firstName);
console.log(localUser.lastName);
console.log(localUser.age);

setTimeout(function () {
  localStorage.clear();
  if (localStorage.length === 0) {
    console.log("Local Storage is Empty");
  }
}, 60 * 1000);

// 5. Redirect to the homepage of google from the console.

setTimeout(function () {
  location.href = "https://www.google.co.in/";
}, 65 * 1000);


