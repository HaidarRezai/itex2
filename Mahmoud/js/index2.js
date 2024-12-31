function sum(){
  let x1 = Number(document.getElementById("eng").value)
  let x2 = Number(document.getElementById("eng1").value)
  let x3 = Number(document.getElementById("eng2").value)
  let x4 = Number(document.getElementById("eng3").value)
  let x5 = Number(document.getElementById("eng4").value)
  document.getElementById("result").innerHTML = (x1 + x2 + x3 + x4 + x5) / 5
}