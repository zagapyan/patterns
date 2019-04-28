const isPalindrome  = (string) => {
  return string === string.split('').reverse().join('');
}

document.getElementById('app').innerHTML = isPalindrome('tacocat');
