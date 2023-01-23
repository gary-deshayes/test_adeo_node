
let data = require('./data.js')
const utils = require('./utils.js')

test('check results of remove animals', () => {
    let removeAnimalsData = utils.removeAnimalsFromRegex(data, "ry")
    let animalExcept = []
    let animalToBe = ["John Dory", "Oryx", "Ryan"]
    removeAnimalsData.forEach(countrie => {
        countrie.people.forEach(people => {
            people.animals.forEach(animal => {
                animalExcept.push(animal.name)
            })
        })
    })
    expect(animalToBe).toStrictEqual(animalExcept);
})

test('check results of add number count', () => {
    let countData = utils.addNumberToName(data)
    var lengthFirstCountrieName = countData[0].name.match(/\[(.*?)\]/);
    expect(parseInt(lengthFirstCountrieName[1])).toStrictEqual(countData[0].people.length);
})

