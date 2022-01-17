
  function reverseString(chars: string[]): void {
    for (let i = 0, j = chars.length - 1; i < j; i++, j--) {
      const temp = chars[i];
      chars[i] = chars[j];
      chars[j] = temp;
    }
  }
  export {reverseString}

  
