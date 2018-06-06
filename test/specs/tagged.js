import tagged from '../../src/tagged';

describe('tagged', () => {
    it('should be defined and callable', () => {
        expect(tagged).to.be.a('function');
    });

    it('should return a function that can be called as a tagged template literal', () => {
        const spy = sinon.spy((msg) => msg);
        const fn = tagged(spy);
        const value = fn`this is a test`;
        expect(spy.called).to.equal(true);
        expect(value).to.equal('this is a test');
    });
});
