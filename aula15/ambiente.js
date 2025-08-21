let num = [1, 2, 3, 4, 5,]
num[3] = 6
num.push(7)

console.log(`Nosso vector é o ${num}`)

for (let pos = 0; pos < num.leght; pos++) {
  console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

for (let pos in num) {
  console.log(`A posição ${pos} tem valor ${num[pos]}`)
}

