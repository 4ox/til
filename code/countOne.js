
function count1(num) {
    var cnt = 0, firstInt = 0, tmpInt = num, pow, temp = num, term;
    for( var i = 0, ilen = Math.log10(num)+1; i < ilen; i++ ) {
        pow = Math.pow(10, i);
        firstInt = tmpInt % 10;
        tmpInt = Math.floor(tmpInt / 10);

        cnt += i * (Math.pow(10,i-1)) * firstInt;
        if( firstInt > 1 ) {
            cnt += pow;
        }
        else if( firstInt == 1 ) {
            term = num - temp;
            cnt+= term > 0 ? term + 1 : 1;
        }
        temp -= pow * firstInt;
    }
    return cnt;
}
function countOne(min,max) {
    return count1(max) - count1(min);
}
var count = countOne(10, 2000000 );
console.log( "COUNT : " + count );
