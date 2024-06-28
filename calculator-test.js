
it('should calculate the monthly rate correctly', function () {
  const values = {
    "amount" : "50000",
    "years" : "15",
    "rate" : ".14"
  }
  expect(calculateMonthlyPayment(values)).toEqual("665.87");
});
//I'm getting the following error: 
//TypeError: Cannot read properties of null (reading 'value')


it("should return a result with 2 decimal places", function() {
  // ..
});

/// etc
