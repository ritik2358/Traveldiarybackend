module.exports = (authHeader) => {
    const testingForSpace = authHeader.match(/\s/g);
    if(!authHeader || !testingForSpace || testingForSpace.length > 1 || authHeader.trim().length === 0) {
        return null;
    }
    const parts = authHeader.split(' ');
    if(parts[0] !== 'Bearer') {
        return null;
    }
    return parts[1];
};