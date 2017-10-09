function doit(hex) {
    var num = 0;
    for(var x=0;x<hex.length;x++) {
        var hexdigit = parseInt(hex[x],16);
        num = (num << 4) | hexdigit;
    }
    return num;
}

console.log(doit("ff"));