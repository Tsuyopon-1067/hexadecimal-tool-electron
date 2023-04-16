binList = [];

function clickNumButton(x) {
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

    binListHosu = binList.concat();
    for (let i = 0; i < binList.length; i++) {
        binListHosu[i] = 1 - binListHosu[i];
    }

    // 10進数に変換する
    dec = 0;
    decHosu = 0;
    for (let i = binList.length - 1; i > 0; i--) {
        dec += Math.pow(2, binList.length - 1 - i) * binList[i];
        decHosu += Math.pow(2, binList.length - 1 - i) * binListHosu[i];
    }
    dec -= Math.pow(2, binList.length - 1) * binList[0];
    decHosu -= Math.pow(2, binList.length - 1) * binListHosu[0];

    // 16進数に変換する
    hexText = "0x";
    hexTextHosu = "0x";
    for (let i = 0; i < binList.length; i += 4) {
        tmp = 0;
        tmpHosu = 0;
        for (let j = 0; j < 4; j++) {
            tmp += Math.pow(2, 3 - j) * binList[i + j];
            tmpHosu += Math.pow(2, 3 - j) * binListHosu[i + j];
        }
        hexText += getHexToken(tmp);
        hexTextHosu += getHexToken(tmpHosu);
    }

    console.log(dec);
    console.log(decHosu);
    console.log(hexText);
    console.log(hexTextHosu);
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