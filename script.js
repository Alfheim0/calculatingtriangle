const btnRez = document.getElementById("btnRez")
const rezult = document.getElementById('rezult')

function cal() {
    // Получаем и преобразуем значения сразу
    const side1 = Number(document.getElementById("side1").value)
    const side2 = Number(document.getElementById("side2").value)
    const side3 = Number(document.getElementById("side3").value)

    if (isNaN(side1) || isNaN(side2) || isNaN(side3)) {
        rezult.textContent = "Неверный ввод ( ` ω ´ )"
        return;
    }

    if (document.getElementById("side1").value === '' || 
        document.getElementById("side2").value === '' || 
        document.getElementById("side3").value === '') {
        rezult.textContent = "Не все значения введены (ノ_<。)"
        return;
    }


    // Остальные проверки
    if (side1 <= 0 || side2 <= 0 || side3 <= 0) {
        rezult.textContent = "Треугольника не существует Σ(▼□▼メ)";
        return;
    }

    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
        rezult.textContent = "Треугольника не существует Σ(▼□▼メ)";
        return;
    }
    else if (side1 === side2 && side2 === side3) {
        rezult.textContent = "Треугольник равносторонний (◕‿◕)";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
        rezult.textContent = "Треугольник равнобедренный (─‿‿─)";
    } else {
        rezult.textContent = "Треугольник разносторонний (*ﾉ∀`*)";
    }
}

btnRez.addEventListener('click', cal)
