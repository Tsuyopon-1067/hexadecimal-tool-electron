binList = [];

function clickNumButton(x) {
    // 押されたボタンに応じて2進数配列に要素を加える
    for (let i = 3; i >= 0; i--) {
        binTmp = Math.pow(2, i);
        x -= binTmp;
        if (x >= 0) {
            binList.push(1);
        } else {
            binList.push(0);
            x += binTmp;
        }
    }
    console.log(binList);

    // 2の補数を求める
    binListHosu = getBinComplement(binList);

    // 2進数のテキストを用意する
    binText = getBinText(binList);
    binTextHosu = getBinText(binListHosu);

    // 10進数に変換する
    dec = getDec(binList);
    decHosu = getDec(binListHosu);

    // 16進数に変換する
    hexText = getHex(binList);
    hexTextHosu = getHex(binListHosu);

    console.log(dec);
    console.log(decHosu);
    console.log(binText);
    console.log(binTextHosu);
    console.log(hexText);
    console.log(hexTextHosu);
}

function getBinComplement(lst) {
    // 2の補数を求める
    res = lst.concat();
    for (let i = 0; i < lst.length; i++) {
        res[i] = 1 - lst[i];
    }
    return res;
}

function getBinText(lst) {
    // ２進数配列を文字列化する
    res = "0b";
    for (let i = 0; i < lst.length; i++) {
        res += lst[i].toString();
    }
    return res;
}

function getDec(lst) {
    // 10進数に変換する
    res = 0;
    for (let i = lst.length - 1; i > 0; i--) {
        res += Math.pow(2, lst.length - 1 - i) * lst[i];
    }
    res -= Math.pow(2, lst.length - 1) * lst[0];
    return res;
}

function getHex(lst) {
    // 16進数に変換する
    res = "0x";
    for (let i = 0; i < lst.length; i += 4) {
        tmp = 0;
        for (let j = 0; j < 4; j++) {
            tmp += Math.pow(2, 3 - j) * lst[i + j];
        }
        res += getHexToken(tmp);
    }
    return res;
}

function getHexToken(x) {
    if (x < 10) {
        return x.toString();
    } else {
        switch (x) {
            case 10:
                return "A";
            case 11:
                return "B";
            case 12:
                return "C";
            case 13:
                return "D";
            case 14:
                return "E";
            case 15:
                return "F";

            default:
                return "";
        }
    }
}