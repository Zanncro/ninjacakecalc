if(localStorage.getItem("storedExchangeRate") == null){
  localStorage.setItem("storedExchangeRate", 0.85);
  document.getElementById("storedExchangeRateOutput").innerHTML = localStorage.getItem("storedExchangeRate");
}
else{
  document.getElementById("storedExchangeRateOutput").innerHTML = localStorage.getItem("storedExchangeRate");
}

if(localStorage.getItem("storedPercentage") == null){
  localStorage.setItem("storedPercentage", 20);
  document.getElementById("percentOutput").innerHTML = localStorage.getItem("storedPercentage") + "%";
}
else{
  document.getElementById("percentOutput").innerHTML = localStorage.getItem("storedPercentage") + "%";
}

document.getElementById('saveRate').addEventListener('click', () => {
  if(document.getElementById("custExcha").value == ''){
  }
  else{
  localStorage.setItem("storedExchangeRate", document.getElementById("custExcha").value)
  document.getElementById("storedExchangeRateOutput").innerHTML = localStorage.getItem("storedExchangeRate");
  }
});

document.getElementById("savePercent").addEventListener("click", () => {

  if(document.getElementById("custBuyPercent").value == ''){
  }
  else{
  localStorage.setItem("storedPercentage", document.getElementById("custBuyPercent").value);
  document.getElementById("percentOutput").innerHTML = localStorage.getItem("storedPercentage") + "%";
  }
});

document.onkeydown = function (e) {
switch (e.keyCode) {
case 13:
    calculateValue();
    break;
default:
    return; // Do nothing for the rest
}
}
