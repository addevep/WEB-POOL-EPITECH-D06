module.exports = {
  arraysAreEqual: function (arr1, arr2) {
    if (arr1.length != arr2.length) return false;
    else {
      for (var i = 0; arr1[i]; i++) {
        if(arr1[i] != arr2[i]) 
        return false
      }
      return true
    }
  },
};
