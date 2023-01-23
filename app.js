if (process.argv.length == 2) {
    console.error('Argument --filter or --count are mandatory')
    process.exit()
}
let args = process.argv[2].split('=')
let data = require('./data.js')
const utils = require('./utils.js')

if (args[0] == '--filter') {
    data = utils.removeAnimalsFromRegex(data, args[1])
    console.dir(data, { depth: null, colors: true, maxArrayLength: null });
}

if (args[0] == '--count') {
    data = utils.addNumberToName(data)
    console.dir(data, { depth: null, colors: true, maxArrayLength: null });
}
