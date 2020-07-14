function encrypt(text, n) {
  if (text == null || text == '' || n <= 0) {
    return text;
  }

  let pseudoEncryption = '';
  let encryptedText = '';

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < text.length; j += 2) {
      pseudoEncryption += text[j];
    }
    for (let k = 0; k < text.length; k += 2) {
      pseudoEncryption += text[k];
    }
    text = pseudoEncryption;
    pseudoEncryption = '';
  }

  encryptedText = text;
  console.log(encryptedText);
}

function decrypt(encryptedText, n) {
  if (encryptedText == null || encryptedText == '' || n <= 0) {
    return encryptedText;
  }

  for (let i = 0; i < n; i++) {
    let subStringOne = encryptedText.substring(0, encryptedText.length / 2);
    let subStringTwo = encryptedText.substring(encryptedText.length / 2);
    let pseudoDecryption = '';

    for (let j = 0; j < encryptedText.length / 2; j++) {
      pseudoDecryption += subStringTwo[j];
      if (subStringOne[j] != undefined) {
        pseudoDecryption += subStringOne[j];
      }
    }

    encryptedText = pseudoDecryption;
  }
  console.log(encryptedText)
}
encrypt("This is a test!", 2)
decrypt("s eT ashi tist!", 2)