function calcularNotas() {
    const semestre1 = parseFloat(document.getElementById('semestre1').value);
    const semestre2 = parseFloat(document.getElementById('semestre2').value);

    if (isNaN(semestre1) || isNaN(semestre2)) {
        document.getElementById('mediaAtual').textContent = "Por favor, insira notas válidas.";
        document.getElementById('quantoFalta').textContent = "";
        return;
    }

  
    let mediaAtual = semestre1 + semestre2;


    if (mediaAtual % 1 >= 0.5) {
        mediaAtual = Math.ceil(mediaAtual); 
    } else {
        mediaAtual = Math.floor(mediaAtual); 
    }

   
    const falta = 21 - mediaAtual;

    document.getElementById('mediaAtual').textContent = `Média Atual: ${mediaAtual} pontos.`;
    if (falta > 0) {
        document.getElementById('quantoFalta').textContent = `Faltam ${falta} pontos para atingir a média final.`;
    } else {
        document.getElementById('quantoFalta').textContent = "Parabéns! Você já alcançou ou ultrapassou a média.";
    }
}
