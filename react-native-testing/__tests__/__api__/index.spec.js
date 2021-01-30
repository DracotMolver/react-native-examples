import AsyncStorage from '@react-native-async-storage/async-storage'; // This one is mocked in the setup jest file.

describe('API', () => {

  afterEach(() => {
    fetch.mockClear();
  });

  beforeAll(async () => {
    await AsyncStorage.setItem('@key', 'value');
  });

  afterAll(async () => {
    await AsyncStorage.removeItem('@key', 'value');
  });

  // ---------- GET ----------
  it('Should GET success', async () => {
    fetch.mockResolvedValue({
      json: jest.fn().mockResolvedValue({ data }),
    });

    // here goes the call to the api/fetch API

    expect(fetch).toHaveBeenCalledTimes(1);
  });
});
