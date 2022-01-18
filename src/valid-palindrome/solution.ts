function isPalindrome(s: string) {
  const sArray = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");
  while(sArray.length > 1) {
    const b = sArray.pop();
    const a = sArray.shift();
    if(a === undefined || b === undefined) return true
    if(a !== b) return false;
  }
  return true
}







export { isPalindrome };
