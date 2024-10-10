module.exports = {
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': [ 'ts-jest', {
            diagnostics: false,
        }],
    },
    testMatch: ['**/tests/*jest.+(ts|tsx|js)'],
};
