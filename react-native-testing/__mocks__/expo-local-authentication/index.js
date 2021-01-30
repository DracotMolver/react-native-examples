const mockLocalAuthentication = {
  hasHardwareAsync: jest.fn(),
  supportedAuthenticationTypesAsync: jest.fn(),
  isEnrolledAsync: jest.fn(),
  authenticateAsync: jest.fn(),
};

module.exports = mockLocalAuthentication;
