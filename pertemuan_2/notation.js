function float2int (value) {
    return value | 0;
}

function string2int (value) {
    value = parseInt("10");
    return value;
}

function ganjilgenap (value) {
    if(value%2==0){
        return "genap";
    }
    else{
        return "ganjil";
    }
}