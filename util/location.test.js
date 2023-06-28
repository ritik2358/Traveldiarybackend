const getCoordsForAddress = require('./location');

/**
 * this is an integration test since it tests a function that has external dependencies (Google Maps API)
 */
describe('getCoordsForAddress', () => {
    test("should throw HttpError if API key is incorrect", async () => {
        process.env.GOOGLE_API_KEY = "invalid_key";
        await expect(getCoordsForAddress("New York")).rejects.toThrow();
    });

    // TODO test happy and unhappy paths
});