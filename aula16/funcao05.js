// Fatorial usando recursividade
function fatorialRecursivo(n) {
  if (n == 1) {
    return 1
  } else {
    return n * fatorialRecursivo(n - 1)
  }
}
confirm.log(fatorialRecursivo(5)) // 120
