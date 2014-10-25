// jshint mocha: true
'use strict';

import utils from '../../dist/modules/utils';
import print from '../../dist/modules/print';

require('should');

describe('utils', function() {
	it('should sum 1 + 1', function() {
		utils.sum(1,1).should.equal(2);
	});

	it('should get the default value', function() {
		utils.message().should.equal('Hello World!');
	});

	it('should get the new value', function() {
		utils.message('foo bar').should.equal('foo bar');
	});

	it('should get the the message', function() {
		print('Jaydson').should.equal('print Jaydson');
	});

	it('should get the the message', function() {
		print('john').should.equal('print john');
	});

	it('should support ES6 in the unit tests too', function() {
		let foo = 'bar';
		foo.should.equal('bar');
	});

});
