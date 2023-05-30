var ma = 10000;
var tps = 0;

while (ma <= 20000) {
    ma += 50;
    tps++;

    document.write("<h3> sur mon compte:" + ma + "</h3>");
    document.write("<h3> il faut: " + tps + "</h3>");
}