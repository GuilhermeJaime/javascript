function verificar() {
  var data = new Date()
  var ano = data.getFullYear()
  var fano = document.getElementById('txtano')
  var res = document.querySelector('div#res')
  if (fano.value.length == 0 || Number(fano.value) > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!')

  }
  else {
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.createElement('img') // cria um elemento de imagem
    img.setAttribute('id', 'foto') // define o id do elemento de imagem
    if (fsex[0].checked) {
      genero = 'Homem'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'homem-crianca.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'homem-jovem.png')
      } else if (idade < 50) {
        // Adulto
        img.setAttribute('src', 'homem-adulto.png')
      } else {
        // Idoso
        img.setAttribute('src', 'homem-idoso.png')
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher'
      if (idade >= 0 && idade < 10) {
        // Criança
        img.setAttribute('src', 'mulher-crianca.png')
      } else if (idade < 21) {
        // Jovem
        img.setAttribute('src', 'mulher-jovem.png')
      } else if (idade < 50) {
        // Adulta
        img.setAttribute('src', 'mulher-adulta.png')
      } else {
        // Idosa
        img.setAttribute('src', 'mulher-idosa.png')
      }
    }
    res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    res.appendChild(img) // adiciona a imagem ao elemento de resultado
    img.style.width = '200px' // define a largura da imagem
    img.style.borderRadius = '50%' // define o raio da borda para tornar a imagem circular
    img.style.height = '200px' // define a altura da imagem
    img.style.margin = '20px auto' // centraliza a imagem com margem
    img.style.display = 'block' // exibe a imagem como um bloco
    res.style.textAlign = 'center' // centraliza o texto do resultado
    res.style.fontSize = '20px'

  }
}


























