let result = [{ a: 1},{ b: 2},{ c: 3}].reduce(function(result, item) {
    var key = Object.keys(item)[0]; //first property: a, b, c
    result[key] = item[key];
    return result;
  }, {});
 console.log(result)