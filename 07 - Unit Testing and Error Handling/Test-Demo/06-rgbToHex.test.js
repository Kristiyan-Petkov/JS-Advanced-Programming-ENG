const { expect, assert } = require('chai');
const rgbToHexColor = require('./06-rgbToHex');

describe('RGB converter', () => {
    it('convert white', () => {
        expect(rgbToHexColor(255, 255, 255)).to.equal('#FFFFFF');
    });
    it('convert black', () => {
        expect(rgbToHexColor(0, 0, 0)).to.equal('#000000');
    });
    it('testing random color', () => {
        expect(rgbToHexColor(143, 100, 200)).to.equal('#8F64C8');
    });
    it('not working with strings', () => {
        assert.isUndefined(rgbToHexColor('255', '255', '255'), true)
        assert.isUndefined(rgbToHexColor('255', 255, 255), true)
        assert.isUndefined(rgbToHexColor(255, '255', 255), true)
        assert.isUndefined(rgbToHexColor(255, 255, '255'), true)
    })
    it('negative integers do not work', () => {
        assert.isUndefined(rgbToHexColor(-1, -2, -3), true)
        assert.isUndefined(rgbToHexColor(1, 2, -3), true)
        assert.isUndefined(rgbToHexColor(1, -2, 3), true)
        assert.isUndefined(rgbToHexColor(-1, 2, 3), true)
    })
    it('integers over 255 do not work', () => {
        assert.isUndefined(rgbToHexColor(278, 293, 4000), true)
        assert.isUndefined(rgbToHexColor(200, 200, 4000), true)
        assert.isUndefined(rgbToHexColor(200, 293, 200), true)
        assert.isUndefined(rgbToHexColor(278, 200, 200), true)
    })
    it('input containig less than 3 values', () => {
        assert.isUndefined(rgbToHexColor(278, 293), true);
    })
    it('returns indefined if input format type is array', () => {
        assert.isUndefined(rgbToHexColor([255, 255, 255]), true);
    })
})