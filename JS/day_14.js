//? Writa a function that shorten a string to a specific length and add ... at the end.

function shortenString(str, maxLength) {
  if (str.length > maxLength) {
    return str.slice(0, maxLength) + "...";
  } else {
    return str;
  }
}

console.log(shortenString("Hello World", 10)); // "Hello Worl..."
