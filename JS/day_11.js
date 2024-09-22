//? Write a function to check if two strings are anagrams of each other.
function areAnagrams(str1, str2) {
    const sortedStr1 = str1
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    const sortedStr2 = str2
      .replace(/[^\w]/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");
    return sortedStr1 === sortedStr2;
  }
  
  console.log(areAnagrams("listen", "silent")); // true
  console.log(areAnagrams("hello", "world")); // false
