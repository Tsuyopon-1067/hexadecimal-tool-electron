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

    dec = 0;
    decM = 0;
    for (let i = binList.length - 1; i > 0; i--) {
        dec += Math.pow(2, binList.length - 1 - i) * binList[i];
        decM += Math.pow(2, binList.length - 1 - i) * binListHosu[i];
    }
    dec -= Math.pow(2, binList.length - 1) * binList[0];
    decM -= Math.pow(2, binList.length - 1) * binListHosu[0];
    console.log(dec);
    console.log(decM);
}