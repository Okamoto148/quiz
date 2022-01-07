function quiz() {
    const resultado = document.getElementById('resultado');
    var soma = document.querySelector('.form-check-input:checked').value;
    
if (soma<2){
resultado.textContent = `Resposta errada. A fervura elimina os microrganismos, no entanto não elimina a maioria das toxinas produzidas por estes`;}else{
resultado.textContent = `Você acertou!`;
}
}
