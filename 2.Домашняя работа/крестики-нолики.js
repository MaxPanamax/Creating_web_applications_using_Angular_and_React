let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');
let curPlyr = document.getElementById('curPlyr');
// Создаем элемент изображения
const img = document.createElement('img');
const img2 = document.createElement('img');
// Устанавливаем путь к изображению
img.src = 'https://ekb.unitazshop.ru/images/promo/plumber.svg';
img2.src = 'https://sports.uz/img/avatar.png';
// Получаем контейнер, куда нужно вставить изображение
const container = document.querySelector('#image-container');
const container2 = document.querySelector('#image2-container');


// Вставляем изображение в контейнер
/*container.append(img);*/
let pla = "x";//начальный игрок
let winInd = [//выиграшные
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {//ячейки
    area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (let i = 0; i < cell.length; i++) {//цикл события клика
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {//события клика

    let data = [];

    if (!this.innerHTML) {//занята или нет если нет записываем текущего игрока
        this.innerHTML = pla;
    } else {
        alert("The cell is occupied");
        return;
    }

    for (let i in cell) {//если в ячеке соит позиция текущего игрока то в массив добавляем данные
        if (cell[i].innerHTML == pla) {
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if (checkWin(data)) {//проверка на победу
        restart("You played: " + pla);
    } else {//положение ничьи
        let draw = true;
        for (var i in cell) {
            if (cell[i].innerHTML == '') draw = false;
        }
        if (draw) {
            restart("Draw");
        }
    }

    pla = pla == "x" ? "o" : "x";//после каждого хода меняем игрока
    curPlyr.innerHTML = pla.toUpperCase();
    if (pla == "x") { container.append(img); container2.append(img2); }
    else { container.append(img2); container2.append(img); }
}

function checkWin(data) {//совподает ли текущее полложение игрока с текущем положением
    for (let i in winInd) {
        let win = true;
        for (let j in winInd[i]) {
            let id = winInd[i][j];
            let ind = data.indexOf(id);

            if (ind == -1) {
                win = false
            }
        }

        if (win) return true;
    }
    return false;
}

function restart(text) {//отчистка клеток

    alert(text);
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
}
