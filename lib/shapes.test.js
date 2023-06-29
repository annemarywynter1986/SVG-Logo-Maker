const { describe } = require('yargs')
const { Circle, Square, Triangle } = require('./shapes')
// zombie

// test for a circle shape

describe('Circle', () => {
    it('test if renders correctly', () => {
        const shape = new Circle();
        var color = ('blue')
        shape.setColor(color);
        expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}">`);
    });
});
    describe('Square', () => {
        it('test if renders correctly', () => {
            const shape = new Square();
            var color = ('pink')
            shape.setColor(color);
            expect(shape.render()).toEqual(`<rect x="50" height="200" width="200" fill="${this.color}">`);
        });
    });
    describe('Triangle', () => {
        it('test if renders correctly', () => {
            const shape = new Square();
            var color = ('red')
            shape.setColor(color);
            expect(shape.render()).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`);
        });
    })


