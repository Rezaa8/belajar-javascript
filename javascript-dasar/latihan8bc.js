var pilihanUser = prompt("Apakah kamu pilih gajah, orang, atau semut?");
var pilihanComputer = Math.random();


if (!["gajah", "orang", "semut"].includes(pilihanUser)) {
  alert("Pilihan Anda tidak valid. Silakan pilih gajah, orang, atau semut.");{
    setTimeout(() => {
      
    }, timeout);
    
  } 
}
  



if (pilihanComputer < 0.34) {
pilihanComputer = "gajah";
} else if(pilihanComputer <= 0.67) {
pilihanComputer = "orang";
} else {
pilihanComputer = "semut";
}


if (pilihanUser === "gajah" && pilihanComputer === "orang") {
    alert("Anda menang! komputer memilih :" + pilihanComputer + "\n Kamu memilih :" + pilihanUser);
  } else if (pilihanUser === "semut" && pilihanComputer === "gajah") {
    alert("Anda menang! komputer memilih :" + pilihanComputer + "\nKamu memilih :" + pilihanUser);
  } else if (pilihanUser === "orang" && pilihanComputer === "semut") {
    alert("Anda menang! komputer memilih : " + pilihanComputer + "\nKamu memilih :" + pilihanUser)
  } else if (pilihanUser === pilihanComputer) {
    alert("Seri! komputer memilih : " + pilihanComputer + "\nKamu memilih :" + pilihanUser);
  } else {
    alert("Anda kalah komputer memilih :" + pilihanComputer + "\nKamu memilih :" + pilihanUser);
  }