module.exports = {
    drawTriangle : function(limit) {
        for (let i = 0, print = "$"; i != limit; i++) {
            console.log(print.repeat(i+1));
        }
    }
}