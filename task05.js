module.exports = {
    range : function(start, end, step) {
        
        var tab = [];

        if (start < end && step > 0) {
            for (i = 0; start <= end ; i++, start = start + step) {
                tab.push(start)
            }
        } else if (start > end && step < 0) {
            for (j = 0; start >= end ; j++, start = start + step) {
                tab.push(start)
            }
        } else if (step == null) {
            for (k = 0; start <= end ; k++, start = start + 1) {
                tab.push(start)
            }
        }

        return tab
    }
}