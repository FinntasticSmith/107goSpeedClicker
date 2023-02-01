function calculateTotal() {
    let goombas = parseInt(document.querySelector("#goombas").value);
    let bobombs = parseInt(document.querySelector("#bobombs").value);
    let cheep = parseInt(document.querySelector("#cheep").value);
  
    let total = (goombas || 0) * 5 + (bobombs || 0) * 7 + (cheep || 0) * 11;
  
    document.querySelector("#total").innerHTML = "Grand Total Due: " + total + "Coins";
  }