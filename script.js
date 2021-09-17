const botao = document.getElementById('button');
let input_peso = document.getElementById('input-number0');
let input_altura = document.getElementById('input-number1');
let slider_peso = document.getElementById('slider-peso');
let slider_altura = document.getElementById('slider-altura');
let opcao_calculadora = document.getElementById('opcao-calculadora')
let container_princtipal = document.getElementById('container')
let container_tabela = document.getElementById('container-tabela')

let opcao_tabela = document.getElementById('opcao-tabela').addEventListener('click', function() {
  container_princtipal.style.left = "25%";
  container_princtipal.style.opacity = "0";
  container_princtipal.style.transition = '0.5s';
  container_princtipal.style.zIndex = "-100"
  setTimeout(function() {
    container_tabela.style.left = "50%";
    container_tabela.style.opacity = "1";
    container_tabela.style.transition = '0.5s';
    container_tabela.style.zIndex = "1"
  }, 200);
});
opcao_calculadora.addEventListener('click', function() {
  container_tabela.style.left = "75%";
  container_tabela.style.opacity = "0";
  container_tabela.style.transition = '0.5s';
  container_tabela.style.zIndex = "-100";
  setTimeout(function() {
    container_princtipal.style.opacity = "1"
    container_princtipal.style.left = "50%";
    container_princtipal.style.transition = '0.5s';
    container_princtipal.style.animationDuration = "0.5s";
    container_princtipal.style.zIndex = "1";
  }, 200);
});

input_altura.oninput = (function() {
  let valueInputAltura = input_altura.value;
  slider_altura.value = valueInputAltura;
});
input_peso.oninput = (function() {
  let valueInputPeso = input_peso.value;
  slider_peso.value = valueInputPeso;
});

slider_altura.oninput = (function() {
  let valueSliderAltura = parseFloat(slider_altura.value).toFixed(2);
  input_altura.value = valueSliderAltura;
});
slider_peso.oninput = (function() {
  let valueSliderPeso = parseFloat(slider_peso.value).toFixed(1);
  input_peso.value = valueSliderPeso;
});

botao.addEventListener('click', function() {
  let resultado = document.getElementById('resultado');
  let peso = input_peso.value;
  let altura = input_altura.value;
  let resultIMC= peso / (altura*altura);
  let container_altura = document.getElementById('container-altura');
  let DivErro = document.getElementById('erro');
  if(input_altura.value === "" || input_peso.value === "") {
    DivErro.innerText = "*Preencha todos os campos*";
    DivErro.style.opacity = "1";
    DivErro.style.transition = "1s";
    container_altura.style.margin = "25px auto 15px";
    container_altura.style.transition = "0.2s";
  }else if(input_altura.value > 2.20 || input_altura.value < 1.40 || input_peso.value > 150.0 || input_peso.value < 0.1) {
    DivErro.innerText = "*Altura ou peso não correspondente"
    DivErro.style.opacity = "1";
    DivErro.style.transition = "1s";
    container_altura.style.margin = "25px auto 15px";
    container_altura.style.transition = "0.2s";
  }else {
    DivErro.innerHTML = ""
    resultado.innerText = `Seu IMC é: ${resultIMC.toFixed(2)}`;
    container_altura.style.margin = "25px auto 25px";
    container_altura.style.transition = "0.2s";
  }
});