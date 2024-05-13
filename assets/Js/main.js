function recebeIMC() {
  const form = document.querySelector(".form");
  const resultado = document.querySelector(".resultado");

  function recebeEventoIMC(evento) {
    evento.preventDefault();
    resultado.innerHTML = "";

    const inputPeso = document.querySelector("#idPeso");
    const inputAltura= document.querySelector("#idAltura");
    const peso = Number(inputPeso.value)
    const altura = Number(inputAltura.value)

    const imc = peso / altura ** 2

    if (!peso) {
      resultado.innerHTML += `<p>Peso Inválido!</p>`;
      resultado.style.backgroundColor = '#ff70ab'
    } else if (!altura) {
      resultado.innerHTML += `<p>Altura Inválido!</p>`;
      resultado.style.backgroundColor = '#ff70ab'
    } else if(imc < 18.5) {
      resultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Abaixo do peso) </p>`;
      resultado.style.backgroundColor = '#c3ff93'
    } else if( imc >= 18.5 && imc <= 24.9) {
      resultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Peso normal) </p>`
      resultado.style.backgroundColor = '#c3ff93'
    } else if (imc >= 25 && imc <= 29.9) {
      resultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Sobrepeso) </p>`
      resultado.style.backgroundColor = '#c3ff93'
    } else if (imc >= 30 && imc <= 34.9) {
      resultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 1) </p>`
      resultado.style.backgroundColor = '#c3ff93'
    } else if(imc >= 35 && imc <= 39.9) {
      resultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 2) </p>`
      resultado.style.backgroundColor = '#c3ff93'
    } else if(imc > 40) {
      resultado.innerHTML += `<p>Seu IMC é ${imc.toFixed(2)} (Obesidade grau 3) </p>`
      resultado.style.backgroundColor = '#c3ff93'
    }
  }
  form.addEventListener("submit", recebeEventoIMC);
}
recebeIMC();
