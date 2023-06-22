let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');
let curPlyr = document.getElementById('curPlyr');
// ������� ������� �����������
const img = document.createElement('img');
const img2 = document.createElement('img');
// ������������� ���� � �����������
img.src = 'https://ekb.unitazshop.ru/images/promo/plumber.svg';
img2.src = 'https://sports.uz/img/avatar.png';
// �������� ���������, ���� ����� �������� �����������
const container = document.querySelector('#image-container');
const container2 = document.querySelector('#image2-container');


// ��������� ����������� � ���������
/*container.append(img);*/
let pla = "x";//��������� �����
let winInd = [//����������
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
];

for (let i = 1; i <= 9; i++) {//������
    area.innerHTML += "<div class='cell' pos=" + i + "></div>";
}

for (let i = 0; i < cell.length; i++) {//���� ������� �����
    cell[i].addEventListener('click', cellClick, false);
}

function cellClick() {//������� �����

    let data = [];

    if (!this.innerHTML) {//������ ��� ��� ���� ��� ���������� �������� ������
        this.innerHTML = pla;
    } else {
        alert("The cell is occupied");
        return;
    }

    for (let i in cell) {//���� � ����� ���� ������� �������� ������ �� � ������ ��������� ������
        if (cell[i].innerHTML == pla) {
            data.push(parseInt(cell[i].getAttribute('pos')));
        }
    }

    if (checkWin(data)) {//�������� �� ������
        restart("You played: " + pla);
    } else {//��������� �����
        let draw = true;
        for (var i in cell) {
            if (cell[i].innerHTML == '') draw = false;
        }
        if (draw) {
            restart("Draw");
        }
    }

    pla = pla == "x" ? "o" : "x";//����� ������� ���� ������ ������
    curPlyr.innerHTML = pla.toUpperCase();
    if (pla == "x") { container.append(img); container2.append(img2); }
    else { container.append(img2); container2.append(img); }
}

function checkWin(data) {//��������� �� ������� ���������� ������ � ������� ����������
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

function restart(text) {//�������� ������

    alert(text);
    for (let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
}
