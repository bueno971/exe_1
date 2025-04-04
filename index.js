function calcularMedia(event) {
  event.preventDefault();
  var name = document.getElementById("name").value;
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);

  if (!name || !nota1 || !nota2) {
    alert("Por Favor, Preencha Todos Os Campos");
    return;
  }
  var media = (nota1 + nota2) / 2;

  if (parseFloat(media) >= 60) {
    alert("Parabens " + name + ", Voce Está Aprovado");
  } else {
    alert(name + ", Voce Foi Reprovado");
  }
}
function calcularImc(event) {
  event.preventDefault();
  var name1 = document.getElementById("name1").value;
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);
  if (!name1 || !weight || !height) {
    alert("Por Favor, Preencha Todos Os Campos");
    return;
  }
  var imc = (weight / (height * height))
  alert("Olá " + name1 + ", seu imc atualmente é: " + imc)

}