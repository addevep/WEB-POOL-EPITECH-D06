module.exports = {
  arrayFiltering: function (array, test) {
    var tab = [];
    for (var i = 0; i < array.length; i++) {
        if (test(array[i]) == true) {
            tab.push(array[i]);
      }
    }
    return tab;
  },
};
