const calcular = document.getElementById('calcular');



function renda(){

     const nome = document.getElementById('nome').value;
     const p = document.getElementById('mensal').value;
     const n = document.getElementById('parcelas').value;
     const i = document.getElementById('juros').value;
     const resultado = document.getElementById('resultado');


if (nome!=='' && p!=='' && n!=='' && i!==''){

     const juros= i/100;
     const VF = (p*((((1+juros)**n)-1) / i)).toFixed(2);
     resultado.textContent = `Olá ${nome}, se você aplicar  R$ ${p}, à taxa de juros de ${i} %, durannte ${n} meses, acumulará uma poupança de R$ ${VF}`
 } else {
     resultado.textContent = `Para calcular sua poupança, peço que preecha todos os campos`
 }

}
calcular.addEventListener('click', renda);
