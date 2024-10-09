    // "jest": {
    //     "globals": {
    //       "ts-jest": {
    //         "diagnostics": false
    //       }
    //     },
    //     "moduleFileExtensions": [
    //       "ts",
    //       "tsx",
    //       "js"
    //     ],
    //     "transform": {
    //       "^.+\\.(ts|tsx)$": "ts-jest"
    //     },
    //     "testMatch": [
    //       "**/tests/*jest.+(ts|tsx|js)"
    //     ]
    //   },
module.exports = {
    globals: {
        'ts-jest': {
            diagnostics: false,
        },
    },
    moduleFileExtensions: ['ts', 'tsx', 'js'],
    transform: {
        '^.+\\.(ts|tsx)$': 'ts-jest',
    },
    testMatch: ['**/tests/*jest.+(ts|tsx|js)'],
};
