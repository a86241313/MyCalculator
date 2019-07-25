var op, pre_num;
var result = 0;

function get_num(num) {
    //螢幕顯示'Num字串累加'
    document.getElementById('shownum').innerHTML = document.getElementById('shownum').innerHTML +
        num;
    //將螢幕字串暫存至pre_num
    pre_num = document.getElementById('shownum').innerHTML;
}

function operator_click(str) {
    //顯示運算子
    document.getElementById('showop').innerHTML = str;
    //清除數字螢幕
    document.getElementById('shownum').innerHTML = "";
    // 判斷 result不等於0時(表示前面輸入數字已存入),result= result (運算) 數值(pre_num)
    //else
    if (result != 0) {
        //運算子func
        switch (op) {
            case "+":
                result = result + Number(pre_num);
                break;
            case "-":
                result = result - Number(pre_num);
                break;
            case "×":
                result = result * Number(pre_num);
                break;
            case "÷":
                result = result / Number(pre_num);
                break;
        }
    } else {
        result = result + Number(pre_num);
    }
    //將str暫存至op
    op = str;
   // console.log(result);
   
}

function all_clear(AC) {
    document.getElementById('shownum').innerHTML = "";
    document.getElementById('showop').innerHTML = '';
    result = 0;
    op = 0;
    pre_num = "";
   // console.log(result, op, pre_num);
}

function eql() {
    // 判斷 result不等於0時(表示前面輸入數字已存入),result= result (運算) 數值(pre_num)
    //else
    // console.log(result);
    // console.log(pre_num);
    document.getElementById('showop').innerHTML = '';
    if (pre_num != 0) {
        //運算子func
        switch (op) {
            case "+":
                result = result + Number(pre_num);
                break;
            case "-":
                result = result - Number(pre_num);
                break;
            case "×":
                result = result * Number(pre_num);
                break;
            case "÷":
                result = result / Number(pre_num);
                break;
        }
    } else {
        result = result + Number(pre_num);
    }

    document.getElementById('shownum').innerHTML = result;

}