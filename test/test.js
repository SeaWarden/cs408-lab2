import {helloWorld, add} from '../js/main.js';
// Import the sinon library to allow us to create a spy on the console.log function
import sinon from 'sinon';

QUnit.module('main.js tests', function() {

    // Throws error because preview does not have a windows alert
    QUnit.test('helloWorld should print Hello World as an alert', function(assert) {
        //Arrange
        const alertSpy = sinon.spy(window, 'alert');
        //Act
        helloWorld();
        //Assert
        assert.ok(alertSpy.calledWith('Hello World'), 'alert should be called with Hello World');
        alertSpy.restore();
    });

    QUnit.test('add should throw an error if num1 is not provided', function(assert) {
        //Arrange
        const num1 = undefined;
        const num2 = 3;
        //Act
        //Assert
        assert.throws(() => add(num1, num2), 'You must provide two numbers to add');
    });

    QUnit.test('add should throw an error if num2 is not provided', function(assert) {  
        //Arrange
        const num1 = 2;
        const num2 = undefined;
        //Act
        //Assert
        assert.throws(() => add(num1, num2), 'You must provide two numbers to add');
    });

    QUnit.test('add should throw an error if num1 is not a number', function(assert) {
        //Arrange
        const num1 = '2';
        const num2 = 3;
        //Act
        //Assert
        assert.throws(() => add(num1, num2), 'You must provide two numbers to add');
    });

    QUnit.test('add should throw an error if num2 is not a number', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = '3';
        //Act
        //Assert
        assert.throws(() => add(num1, num2), 'You must provide two numbers to add');
    });

    QUnit.test('add should return 0 if both numbers are 0', function(assert) {
        //Arrange
        const num1 = 0;
        const num2 = 0;
        const expected = 0;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(0, 0) should return 0');
    });

    QUnit.test('add should return the sum of two numbers', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = 3;
        const expected = 5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, 3) should return 5');
    });

    QUnit.test('add should return the sum of negative numbers', function(assert) {
        //Arrange
        const num1 = -2;
        const num2 = -3;
        const expected = -5;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(-2, -3) should return -5');
    });

    QUnit.test('add should return the sum of a positive and a negative number', function(assert) {
        //Arrange
        const num1 = 2;
        const num2 = -3;
        const expected = -1;
        //Act
        const result = add(num1, num2);
        //Assert
        assert.equal(result, expected, 'add(2, -3) should return -1');
    });

});
