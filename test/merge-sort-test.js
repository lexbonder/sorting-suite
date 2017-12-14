const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-sorted'));
const mergeSort = require('../merge-sort.js');

describe('mergeSort', function() {

  it('Should be a function', function() {
    expect(mergeSort).to.be.a('function');
  })

  it('Should take an array', function() {
    let array = []
    expect(array).to.be.an('array');
  })

    it('Should sort an already sorted array', function() {
    let array = [1,2,3,4,5]
    expect(mergeSort(array)).to.be.sorted();
  })

  it('Should sort a sorted but descending array', function() {
    let array = [8, 7, 6, 5, 4, 3, 2, 1]
    expect(mergeSort(array)).to.be.sorted();
  })

  it('Should sort an unsorted array', function() {
    let array = [3, 4, 2, 5, 1];
    expect(mergeSort(array)).to.be.sorted();
  })

  it('Should sort negative numbers', function() {
    let array = [3, -3, 2, -2, 1, -1, 0];
    expect(mergeSort(array)).to.be.sorted();
  })

  it('Should sort letters', function() {
    let array = ['e', 'd', 'c', 'b', 'a'];
    expect(mergeSort(array)).to.be.sorted();
  })

  it('Should handle large arrays of random numbers', function() {
    let array = [];
    for (i = 0; i < 101711; i++) {
      array.push(Math.floor(Math.random() * 12000 + 1))
    }
    expect(mergeSort(array)).to.be.sorted();
  })

})
