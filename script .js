function convert() {
  const inputEl = document.getElementById("input");
  const inputVal = inputEl.value.trim();

  if (inputVal === "") {
    window.alert("Field Can't Be empty!!");
    return;
  }

  const tokens = inputVal.split(" ");
  const map = {
    "aa": "1", "bb": "2", "cc": "3", "dd": "4", "ee": "5",
    "ff": "6", "gg": "7", "hh": "8", "ii": "9", "jj": "0"
  };

  let result = "";
  for (let token of tokens) {
    let lower = token.toLowerCase();
    if (map[lower]!== undefined) {
      result += map[lower];
    }
  }

  document.getElementById("output").textContent = result;
  window.alert("Program By  0331|ozzy🫡🌐 ");
}