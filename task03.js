module.exports = {
    countGs: function(str) {

        const upCase = /[A-Z]/;
        var count = 0;
        
        for (let i = 0; i < str.length; i++) {
            if (str[i].match(upCase)) {
                count++;
            }
        }
        return count
    }
    }
    