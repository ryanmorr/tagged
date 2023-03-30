import { expect } from 'chai';
import sinon from 'sinon';
import tagged from '../../src/tagged.js';

describe('tagged', () => {
    it('should return a function that can be called as a tagged template literal', () => {
        const spy = sinon.spy((msg) => msg);
        const fn = tagged(spy);

        const foo = 'foo';
        const bar = 'bar';
        const value1 = fn`this is a test`;
        const value2 = fn`${foo} ${bar}`;

        expect(spy.callCount).to.equal(2);
        expect(value1).to.equal('this is a test');
        expect(value2).to.equal('foo bar');
    });

    it('should be able to mutate the values passed to the tagged template literal', () => {
        const spy = sinon.spy((val) => (val + 1));
        const fn = tagged((msg) => msg, spy);

        const foo = 'foo';
        const bar = 'bar';
        const value = fn`${foo} ${bar}`;

        expect(spy.callCount).to.equal(2);

        const call1 = spy.getCall(0);
        expect(call1.calledWith('foo')).to.equal(true);
        expect(call1.returned('foo1')).to.equal(true);

        const call2 = spy.getCall(1);
        expect(call2.calledWith('bar')).to.equal(true);
        expect(call2.returned('bar1')).to.equal(true);

        expect(value).to.equal('foo1 bar1');
    });
});
