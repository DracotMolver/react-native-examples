const PixelRatio = {
  roundToNearestPixel: jest.fn((value) => Math.round(value)),
  getFontScale: jest.fn().mockReturnValue(1.14),
};

module.exports = PixelRatio;
