/**
 * Function which remove animals who don't match regex, and remove empty array from people and countries
 * @param {*} array Array of Data
 * @param {*} regex Args from flag --filter
 * @returns 
 */
function  removeAnimalsFromRegex(array, regex) {
    let animals_to_remove = []
    array.forEach((countrie, countrie_index) => {
        countrie.people.forEach((people, people_index) => {
            people.animals.forEach((animal, animal_index) => {
                if (!animal.name.match(new RegExp(regex, 'gi'))) {
                    animals_to_remove.push(animal.name)
                }
            })
            people.animals = people.animals.filter(a => !animals_to_remove.includes(a.name))

        })
        countrie.people = countrie.people.filter(p => p.animals.length > 0)
    })
    array = array.filter(c => c.people.length > 0)
    return array
}

/**
 * Function which add number of people and animals in name of countries and people
 * @param {*} array Array of Data 
 * @returns array 
 */
function addNumberToName(array) {
    array.forEach((countrie, countrie_index) => {
        countrie.name += " [" + countrie.people.length + "]"
        countrie.people.forEach((people, people_index) => {
            people.name += " [" + people.animals.length + "]"
        })
    })
    return array
}

module.exports = {
    addNumberToName,
    removeAnimalsFromRegex
}