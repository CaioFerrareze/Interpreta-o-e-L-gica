function atmWithdrawal(amount) {
    const notes = [100, 50, 20, 10];
    const maxLimit = 1000;

    if (amount <= 0 || amount > maxLimit || amount % 10 !== 0) {
        alert("Valor inválido. Digite um valor entre 10 e 1000, múltiplo de 10.");
        return;
    }

    alert(`Saque solicitado: R$${amount}`);
    let result = "Notas entregues:\n";

    for (let note of notes) {
        let count = Math.floor(amount / note);
        if (count > 0) {
            result += `${count} nota(s) de R$${note}\n`;
            amount -= count * note;
        }
    }

    alert(result);
}

const userInput = document.getElementById('atm');
const button = document.getElementById('btn');

if (button && userInput) {
    button.addEventListener('click', () => {
        const amount = parseInt(userInput.value, 10);
        if (!isNaN(amount)) {
            atmWithdrawal(amount);
        } else {
            alert("Por favor, insira um valor numérico válido.");
        }
    });
}
