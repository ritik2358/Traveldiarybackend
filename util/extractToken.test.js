const extractToken = require('./extractToken');

describe('extractToken', () => {
    test('should return null if provided header value is null', () => {
        const actual = extractToken('');
        expect(actual).toBeNull();
    });

    test('should return null if provided header value is empty', () => {
        const actual = extractToken('   ');
        expect(actual).toBeNull();
    });

    test('should return null if no space in provided header value', () => {
        const actual = extractToken('Bearer_with_no_spaceze91g65r1grgvxx');
        expect(actual).toBeNull();
    });

    test('should return null if provided header value contains more than one space', () => {
        const actual = extractToken("Bearer ee91g65r1grgvxx 986tzrhzhzh zzhrzyzr");
        expect(actual).toBeNull();
    });

    test('should return token if provided header value is valid', () => {
        const expected = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
        const actual = extractToken(`Bearer ${expected}`);
        expect(actual).toBe(expected);
    });

    test('should return null if provided header value is not a bearer token', () => {
        const actual = extractToken(`NotBearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`);
        expect(actual).toBeNull();
    });
});