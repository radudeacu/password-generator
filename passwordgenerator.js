//  10. Simulare a unui generator de parole personalizat:
//  Scrieți o funcție care generează parole personalizate. 
//  Funcția ar trebui să primească parametri precum lungimea parolei,
//  includerea literelor mari/mici, cifrelor și simbolurilor speciale.
//  min 8 char max 16
//  inlcude macar 1 uppercase
//  inlcude macar 1 lowercase
//  inlcude macar 1 numar
//  inlcude macar 1 char special



function passwordGenerator(length) {

    var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var lowercase = 'abcdefghijklmnopqrstuvwxyz';
    var nr = '0123456789';
    var symbol = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    // char range check
    if (length < 8 || length > 16) {
        return 'Parola tre sa fie intre 8 si 16 char';
    }

    // mandatory char in array
   var passwordArray = [
        getRandomCharacter(uppercase),
        getRandomCharacter(lowercase),
        getRandomCharacter(nr),
        getRandomCharacter(symbol)
      ];
    
    var allChars = uppercase + lowercase + nr + symbol;

    // adauga random chars pe laga cele mandatory
    for (let i = passwordArray.length; i < length; i++) {
        passwordArray.push(getRandomCharacter(allChars));
      }
    
    // facem un string
    return passwordArray.join("");
}

// luam random char dintr un string
function getRandomCharacter(characterSet) {
    var random = Math.floor(Math.random() * characterSet.length);
    return characterSet[random];
}


console.log(passwordGenerator(16));

// In forma actuala mereu primele 4 char o sa fie Upper, lower, nr, smybol
// ar trebui sa facem cv char shuffle la final oate dupa join sau cat timp e inca array?