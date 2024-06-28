
it('should calculate the monthly rate correctly', function () {
  const values = {
    "amount" : "50000",
    "years" : "15",
    "rate" : ".14"
  }
  expect(calculateMonthlyPayment(values)).toEqual("665.87");
});


it("should return a result with 2 decimal places", function() {
  const amount = Math.random() * 50000;
  const years = Math.random() * 30;
  const rate = Math.random();
  const values = {
    "amount" : amount,
    "years" : years,
    "rate" : rate
  }
  console.log(values);
  const monthlyPayment = calculateMonthlyPayment(values); 
  expect(monthlyPayment * 1000 % 10).toEqual(0);
});

/// etc
