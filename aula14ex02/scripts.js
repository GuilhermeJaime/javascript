function tabuada() {
  let num = document.getElementById('txtn').value;
  let tab = document.getElementById('seltab');
  if (num.length == 0) {
    window.alert('Por favor, digite um número!');
    let n = Number(num);
  }
  else {
    let n = Number(num.value);
    let c = 1
    tab.innerHTML = ''; // limpa a tabuada
    while (c <= 20) {
      let item = document.createElement('option');
      item.text = `${num} x ${c} = ${num * c}`;
      item.value = `tab${c}`;
      tab.appendChild(item);
      c++;
    }
  }
}