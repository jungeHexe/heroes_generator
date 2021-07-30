/*напиши функцию которая генерирует волшебников/ведьмочек*/
const firstName = ["Арадель", "Марсель", "Грин"];
const lastName = ["да Ларье", "Бергорф", "Хамбридж", "Виран"];
const character = ["добрая", "злая", "улыбчивая", "веселая", "вредина", "дружелюбная"];
const hobbys = ["легенды о звездах", "древние мифы", "волшебные существа", "волшебные растения"];
const prof = ["темная магия", "светлая магия", "некромантия", "техномагия", "экспериметы в области зелий"]
const hairColor = ["рыжие", "блонд", "темное дерево", "вишневые", "алые", "черные", "синие"];
const typeHair = ["кудрявые", "прямые", "вьющиеся", "короткие", "длинные"];
const eyeColor = ["зеленые", "голубые", "карие", "серые", "фиолетовые", "золотистые"];


const getRandomElement = (arr) => {
    return arr[Math.floor(Math.random() * arr.length)];
}

const getUniqArr = (arr, n) => {
    let arrTrue = new Array(n).fill(null);
    return Array.from(new Set(arrTrue.map(() => getRandomElement(arr))));
}

const createHero = () => {
    return {
        name: getRandomElement(firstName) + " " + getRandomElement(lastName),
        age: Math.floor(Math.random() * 100),
        height: Math.floor(Math.random() * 100) + 102,
        character:getUniqArr(character, 5),
        hobbys: getUniqArr(hobbys, 3),
        profession: getRandomElement(prof),
        hair: getRandomElement(hairColor) + ", " + getRandomElement(typeHair),
        eyes: getRandomElement(eyeColor),
    }
}

const heroes = new Array(5).fill(null).map(() => createHero());

for(i in heroes){
    for(key in heroes[i]){
        console.log(key + ":" + heroes[i][key])
    }
    console.log("\n");
}