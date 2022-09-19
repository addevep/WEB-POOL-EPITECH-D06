module.exports = {
    range : function(start, end, step) {
        console.log("START : " + start);
        console.log("END : " + end);
        console.log("STEP : " + step);
        
        var tab = [];
        
        var len = tab.length;
        len = end - start;

        console.log("TAB LENGTH : " + len);

        tab[0] = start;
        tab[len-1] = end;
        temp = start + step;

        for (i = 1; i+1 < len || start > end ; i++) {
            tab.splice(i, 1, temp)
        }
        
        return tab;
    }
}