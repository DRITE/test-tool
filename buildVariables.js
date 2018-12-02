const fs = require('fs-extra');


const isProduction = process.argv.some(arg => arg === '-p' || arg === '--production' || arg === '--prod');

const packageJson = JSON.parse(fs.readFileSync('package.json', {encoding: 'UTF-8'}));

function withZero(num){
    return num < 10 ? `0${num}`: `${num}`
}

const now = new Date();
const day = withZero(now.getDate());
const month = withZero(now.getMonth() + 1);
const year = now.getFullYear();
const buildTime = `${day}.${month}.${year}`;
console.log('Build time: ' + buildTime);

const INTERVIEW_TOOL_UI_VERSION = `${packageJson.version} от ${buildTime}`;

module.exports = {
    isProduction,
    INTERVIEW_TOOL_UI_VERSION
};