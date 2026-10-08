// Datas importantes
let hoje = new Date();
let ano_atual = new Date().getFullYear();
let dan_aniversario = new Date(ano_atual+"-07-25");
let bia_aniversario = new Date(ano_atual+"-11-05");
let inicio_namoro = new Date("2026-03-11");

// Quem ama mais?
let data_inicio = new Date("2026-07-25");
let diferenca = hoje - data_inicio;
let dias = Math.floor(diferenca / (1000 * 60 * 60 * 24));

let ama_mais;
if (dias % 2 === 0) {
    ama_mais = "Bia";
} else {
    ama_mais = "Dan";
}

// Quantos meses de namoro?
let meses_namoro =
    (hoje.getFullYear() - inicio_namoro.getFullYear()) * 12
    + (hoje.getMonth() - inicio_namoro.getMonth());

// Dias para o próximo mês?
hoje.setHours(0, 0, 0, 0);

let proximo_mes = new Date(
    hoje.getFullYear(),
    hoje.getMonth(),
    11
);

proximo_mes.setHours(0, 0, 0, 0);

let dias_proximo_mes =
    (proximo_mes - hoje) / (1000 * 60 * 60 * 24);

// Aniversário Bia?
let diferenca1 = bia_aniversario - hoje;
let calc_dias_bia = Math.ceil(
    diferenca1 / (1000 * 60 * 60 * 24)
);
let aniversario_bia;

if (calc_dias_bia >= 0) {
    aniversario_bia = calc_dias_bia;
} else {
    bia_aniversario.setFullYear(
        bia_aniversario.getFullYear() + 1
    );
    let diferenca2 = bia_aniversario - hoje;
    let calc_dias_bia2 = Math.ceil(
        diferenca2 / (1000 * 60 * 60 * 24)
    );
    aniversario_bia = calc_dias_bia2;
}

// Aniversário Dan?
let diferenca3 = dan_aniversario - hoje;
let calc_dias_dan = Math.ceil(
    diferenca3 / (1000 * 60 * 60 * 24)
);
let aniversario_dan;

if (calc_dias_dan >= 0) {
    aniversario_dan = calc_dias_dan;
} else {
    dan_aniversario.setFullYear(
        dan_aniversario.getFullYear() + 1
    );
    let diferenca4 = dan_aniversario - hoje;
    let calc_dias_dan3 = Math.ceil(
        diferenca4 / (1000 * 60 * 60 * 24)
    );
    aniversario_dan = calc_dias_dan3;
}

// Respostas
document.getElementById("ama_mais").textContent = ama_mais;
document.getElementById("meses_namoro").textContent = meses_namoro + " meses";
document.getElementById("dias_proximo_mes").textContent = dias_proximo_mes + " dias";
document.getElementById("aniversario_bia").textContent = aniversario_bia + " dias";
document.getElementById("aniversario_dan").textContent = aniversario_dan + " dias";