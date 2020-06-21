var assert = require('assert');

const operations = require('../calculator.js')



  describe('Arithmetic Operations',function (){

    describe('Adding',function(){
        it('should return 12 when 5+7', function(){
            assert.equal(operations.add(5,7),12)
        })
    }
    )

    describe('Substract',function(){
        it('should return 2 when 7-5', function(){
            assert.equal(operations.substract(7,5),2)
        })
    }
    )

    describe('Adding',function(){
        it('should return 25 when 5*5', function(){
            assert.equal(operations.multiply(5,5),25)
        })
    }
    )

    describe('Adding',function(){
        it('should return 1 when 5/5', function(){
            assert.equal(operations.divide(5,5),1)
        })
    }
    )
  }
  )