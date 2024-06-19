const image = document.getElementById("img1"); // Seleciona a imagem

image.addEventListener('mouseover', () => {
  // Aumenta a escala da imagem em 1.2 quando o mouse passa sobre ela
  image.style.transform = 'scale(1.2)';
});

image.addEventListener('mouseout', () => {
  // Retorna a escala da imagem para 1 quando o mouse sai de cima dela
  image.style.transform = 'scale(1)';
});
