(function () {
  let arr = [1, 2, 3];

  arr.forEach(function (number, index) {
    console.log('number', index, '=', number);
  });

  arr.forEach(function(number) {
    console.log('number =', number);
  });
})();
