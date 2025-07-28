function carregar() {
  var msg = document.getElementById('msg');
  var foto = document.getElementById('foto');
  var imagem = document.getElementById('imagem');
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas.`;

  if (hora >= 0 && hora < 12) {
    // Bom dia!
    imagem.src = 'imagem-dia.png';
    document.body.style.background = '#e2cd9f';
  } else if (hora >= 12 && hora < 18) {
    // Boa tarde!
    imagem.src = 'imagem-tarde.png';
    document.body.style.background = '#df6e08';
  } else {
    // Boa noite!
    imagem.src = 'imagem-noite.png';
    document.body.style.background = '#18222c';
  }
}