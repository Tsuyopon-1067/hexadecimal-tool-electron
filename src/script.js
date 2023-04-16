keta = 0;
binList = [];

function clickNumButton(x) {
    keta += 4;
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

    dec = 0;
    for (let i = keta - 1; i > 0; i--) {
        dec += Math.pow(2, keta - 1 - i) * binList[i];
    }
    dec -= Math.pow(2, keta - 1) * binList[0];
    console.log(dec);
}