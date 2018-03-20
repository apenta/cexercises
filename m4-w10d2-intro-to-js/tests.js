QUnit.test("Sum Double", function (assert) {
    
    assert.equal(sumDouble(1, 2), 3);
    assert.equal(sumDouble(3, 2), 5);
    assert.equal(sumDouble(2, 2), 8);

});

QUnit.test("Has Teen", function (assert) { 
    
    assert.equal(hasTeen(13, 20, 10), true);
    assert.equal(hasTeen(20, 19, 10), true);
    assert.equal(hasTeen(20, 10, 13), true);
    assert.equal(hasTeen(9, 21, 5), false);

});

QUnit.test("Last Digit", function (assert) {
    
    assert.equal(lastDigit(7, 17), true);
    assert.equal(lastDigit(6, 17), false);
    assert.equal(lastDigit(3, 113), true);

});

QUnit.test("See Color", function (assert) {

    assert.equal(seeColor("redxx"), "red");
    assert.equal(seeColor("xxred"), "");
    assert.equal(seeColor("blueTimes"), "blue");
    assert.equal(seeColor("blue"), "blue");
    assert.equal(seeColor(""), "");

});

QUnit.test("Middle Three", function (assert) {    
    assert.equal(middleThree("Candy"), "and");
    assert.equal(middleThree("CANDY"), "AND");
    assert.equal(middleThree("and"), "and");
    assert.equal(middleThree("solving"), "lvi");
});

QUnit.test("Front Again", function (assert) {    
    assert.equal(frontAgain("edited"), true);
    assert.equal(frontAgain("edit"), false);
    assert.equal(frontAgain("ed"), true);
    assert.equal(frontAgain("Edited"), false);
});

QUnit.test("Alarm Clock", function (assert) {
    
    assert.equal("Monday 7:00", alarmClock(1, false));
    assert.equal("Friday 7:00", alarmClock(5, false));
    assert.equal("Friday 10:00", alarmClock(5, true));
    assert.equal("Sunday off", alarmClock(0, true));

});

QUnit.test("Make Middle", function (assert) {    
    assert.deepEqual(makeMiddle([1, 2, 3, 4]), [2, 3]);
    assert.deepEqual(makeMiddle([7, 1, 2, 3, 4, 9]), [2, 3]);
    assert.deepEqual(makeMiddle([]), []);
    assert.deepEqual(makeMiddle([1]), []);
    assert.deepEqual(makeMiddle([1, 3, 5]), []);
    assert.deepEqual(makeMiddle([1, 2]), [1,2]);
});

QUnit.test("Odd Only", function (assert) {    
    assert.deepEqual(oddOnly([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), [1, 3, 5, 7, 9, 11]);
    assert.deepEqual(oddOnly([2, 4, 8, 32, 256]), []);
});

QUnit.test("Weave", function (assert) {
    
    assert.deepEqual(weave([1, 3, 5], [2, 4]), [1, 2, 3, 4, 5]);
    assert.deepEqual(weave([1, 3, 5], [2, 4, 6, 8]), [1, 2, 3, 4, 5, 6, 8]);
    assert.deepEqual(weave([], []), []);

});

QUnit.test("Cigar Party", function (assert) {
    
    assert.equal(cigarParty(30, false), false);
    assert.equal(cigarParty(50, false), true);
    assert.equal(cigarParty(70, true), true);
    
});


QUnit.test("Fizz Buzz", function (assert) {

    assert.equal(fizzBuzz(1), 1);
    assert.equal(fizzBuzz(2), 2);
    assert.equal(fizzBuzz(3),"Fizz");
    assert.equal(fizzBuzz(5),"Buzz");
    assert.equal(fizzBuzz(9),"Fizz");
    assert.equal(fizzBuzz(10),"Buzz");
    assert.equal(fizzBuzz(15), "FizzBuzz");

});

QUnit.test("Count Values", function (assert) {

    assert.deepEqual(
        { 1: 1, 99: 3, 43: 1, 2: 2, 55: 1, 78: 1, 2345: 1, 438: 1, 107: 1 },
        countValues([1, 99, 43, 2, 55, 78, 99, 2345, 438, 2, 99, 107]));
    assert.deepEqual(countValues([]), {});
    assert.deepEqual(countValues([0]), { 0: 1 });
    assert.deepEqual(countValues([0, 20]), { 0: 1, 20: 1 });
});

QUnit.test("Filter Evens", function (assert) {

    assert.deepEqual([], filterEvens([]));
    assert.deepEqual([], filterEvens([1, 3, 5]));
    assert.deepEqual([2, 4, 6], filterEvens([2, 4, 6]));
    assert.deepEqual([100, 8, 24, 62], filterEvens([100, 8, 21, 24, 62, 9, 7]));
        
});

QUnit.test("Filter Numbers Bigger Than 100", function (assert) { 

    assert.deepEqual([121, 100, 162, 200], filterBigNumbers([7, 10, 121, 100, 24, 162, 200]));
    assert.deepEqual([], filterBigNumbers([3, 2, 7, 1, -100, -120]));
    assert.deepEqual([], filterBigNumbers([]));
    
});

QUnit.test("Filter Multiples of X", function(assert) { 

    assert.deepEqual([3, 9, 18, 21, 42], filterMultiplesOfX([3, 5, 1, 9, 18, 21, 42, 67], 3));
    assert.deepEqual([5, 10, 20], filterMultiplesOfX([3, 5, 10, 20, 18, 21, 42, 67], 5));

});

QUnit.test("Create Object", function(assert) { 

    const result = createObject();

    assert.notEqual(undefined, result.firstName, "Object needs a firstName property");
    assert.notEqual(undefined, result.lastName, "Object needs a lastName property");
    assert.notEqual(undefined, result.age, "Object needs an age property");
    
});


QUnit.test("Filter Inventors", function(assert) { 

    const inventors = [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
        { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
        { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
        { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
        { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
        { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
        { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
        { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
        { first: 'Hanna', last: 'HammarstrÃ¶m', year: 1829, passed: 1909 }
      ];

    assert.deepEqual(filterInventors([]), []);
    assert.deepEqual(filterInventors(inventors), [
        { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
        { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
        { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    ]);
});



