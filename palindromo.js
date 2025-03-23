palindromo("aba"); 
palindromo("radar"); 
palindromo("xyzzxy"); 
palindromo("bola"); 
palindromo("abcdbca"); 
palindromo(" "); 
palindromo("x"); 


function palindromo(s){
  if (s.length <= 1){
    console.log(s + "é palíndromo");
  }
  else {
    console.log(s + "é indefinido");
  }
}