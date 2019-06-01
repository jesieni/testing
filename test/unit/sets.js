const {expect} = require('chai');

function empty() {
    return [];
}

function has(a, x) {
    return a.includes(x);
}

function add(x, a) {
    if (!has(a, x))
        a.push(x);
}

function union(a, b) {
    const c = empty();
    for (const x of a)
        add(x, c);
    for (const y of b)
        if (!has(a, y))
            add(y, c);
    return c;
}

function size(a) {
    return a.length;
}

function intersection(a, b) {
    const c = empty();
    for (const x of a)
        if (has(b, x))
            add(x, c);
    return c;
}

function difference(a, b) {
    const c = empty();
    for (const x of a)
        if (!has(b, x))
            add(x, c);
    return c;
}

function equal(a, b) {
    if (size(a) !== size(b))
        return false;
    for (const x of a)
        if (!has(b, x))
            return false;
    return true;
}

function remove(x, a) {
    if (has(a, x)) {
        const index = a.indexOf(x);
        a.splice(index, 1);
    }
}

describe('Sets library', () => {
    it('empty set has size 0', () => {
        const a = empty();
        expect(size(a)).to.equal(0);
    });

    it('adding to empty set', () => {
        const a = empty();
        const x = 1;
        add(x, a);
        expect(size(a)).to.equal(1);
        expect(has(a, x)).to.be.true;
    });

    it('adding same element twice to empty set', () => {
        const a = empty();
        const x = 1;
        add(x, a);
        add(x, a);
        expect(size(a)).to.equal(1);
        expect(has(a, x)).to.be.true;
    });

    it('unioning two empty sets', () => {
        const a = empty();
        const b = empty();
        const c = union(a, b);
        expect(size(c)).to.equal(0);
    });

    it('unioning two sets', () => {
        const a = empty();
        const b = empty();
        add(1, a);
        add(2, b);
        const c = union(a, b);
        expect(size(c)).to.equal(2);
        expect(has(c, 2)).to.be.true;
        expect(has(c, 1)).to.be.true;
    });

    it('unioning two sets with right empty', () => {
        const a = empty();
        const b = empty();
        add(1, a);
        const c = union(a, b);
        expect(size(c)).to.equal(1);
        expect(has(c, 1)).to.be.true;
    });

    it('unioning two sets with left empty', () => {
        const a = empty();
        const b = empty();
        add(1, b);
        const c = union(a, b);
        expect(size(c)).to.equal(1);
        expect(has(c, 1)).to.be.true;
    });

    it('intersecting two sets', () => {
        const a = empty();
        const b = empty();
        add(1, a);
        add(2, a);
        add(1, b);
        const c = intersection(a, b);
        expect(size(c)).to.equal(1);
        expect(has(c, 1)).to.be.true;
        expect(has(c, 2)).to.be.false;
    });

    it('differencing two sets', () => {
        const a = empty();
        const b = empty();
        add(1, a);
        add(2, a);
        add(1, b);
        const c = difference(a, b);
        const d = difference(b, a);
        expect(size(c)).to.equal(1);
        expect(has(c, 2)).to.be.true;
        expect(has(c, 1)).to.be.false;
        expect(size(d)).to.equal(0);
        expect(has(d, 1)).to.be.false;
        expect(has(d, 2)).to.be.false;
    });

    it('comparing two sets I', () => {
        const a = empty();
        const b = empty();
        add(1, a);
        add(2, a);
        add(1, b);
        expect(equal(a, b)).to.be.false;
    });

    it('comparing two sets II', () => {
        const b = empty();
        const c = empty();
        add(1, b);
        add(1, c);
        expect(equal(b, c)).to.be.true;
    });

    it('comparing two sets III', () => {
        const a = empty();
        const d = empty();
        add(1, a);
        add(2, a);
        add(1, d);
        add(3, d);
        expect(equal(a, d)).to.be.false;
    });

    it('removing element from set', () => {
        const a = empty();
        add(1, a);
        add(2, a);
        remove(2, a);
        expect(size(a)).to.equal(1);
        expect(has(a, 1)).to.be.true;
        expect(has(a, 2)).to.be.false;
    });

    it('removing element from empty set', () => {
        const a = empty();
        remove(2, a);
        expect(size(a)).to.equal(0);
        expect(has(a, 2)).to.be.false;
    });

});
