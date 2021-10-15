const heroes = [
    { name: 'Dr Nice', age: 23, power: 'Invisible' },
    { name: 'Narco', age: 42, power: 'Speed'},
    { name: 'Bombasto', age: 32, power: 'Fly' },
    { name: 'Celeritas', age: 42, power: 'Speed' },
    { name: 'Magneta', age: 32, power: 'Fly' },
    { name: 'RubberMan', age: 23, power: 'Invisible' },
    { name: 'Dynama', age: 42, power: 'Speed' },
    { name: 'Dr IQ', age: 65, power: 'Invisible' },
    { name: 'Magma', age: 57, power: 'Speed' },
    { name: 'Tornado', age: 20, power: 'Speed' }
]
const LENGTH = 500;

export const generateHeroes = ():object[] => {
    let newHeroesList = [];
    const id = 1;
    for (let i=id; i < LENGTH; i++){
        for (const hero of heroes){
            const { name, age, power } = hero;
            newHeroesList.push({
                id: i,
                name,
                age,
                power
            })
            i++;
        }
    }
    return newHeroesList
}
