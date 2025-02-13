/** @type {import('jest').Config} */
const config = {
    preset: 'ts-jest',
    transform: {
        '^.+\\.(ts|tsx)?$': 'ts-jest',
        '^.+\\.(js|jsx)?$': 'babel-jest',
    },
    verbose: true,
};
  
module.exports = config;
  
  