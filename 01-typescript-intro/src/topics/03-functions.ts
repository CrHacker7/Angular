

function addNumbers(a: number, b: number): number {
    return a + b;
}

// after the parethesis you could say to return a string
// and put backsticks in return. 
// const addNumbersArrow = (a: number, b: number): string => {
//    return `a + b`; }
// You could use the backsticks for dependencies inyections: return `${ a + b }`;


/* const addNumbersArrow = (a: number, b: number) => {
    return a + b;

} */


const addNumbersArrow = (a: number, b: number): string => {
        return `${ a + b }`;
}

function multiply( firstNumber: number, secondNumber?: number, base: number = 2 ) {
    return firstNumber * base;

}

// const result: number = addNumbers(1, 2);
// const result2: string = addNumbersArrow(1, 2);
// const multiplyResult: number = multiply(5);

//console.log({ result, result2, multiplyResult }) 

//curly braces makes printing like an object, otherwise print only <3> 


interface Character {

    name: string;
    hp: number;
    showHp: () => void; //it could be any type for this function
}

const healCharacter = ( character: Character, amount: number ) => {

    character.hp += amount;
}

const strider: Character = {

    name: 'Strider',
    hp: 50,
    showHp() {
        console.log(`Puntos de vida ${this.hp }`);
    }

}

healCharacter( strider, 10);
healCharacter( strider, 50);


strider.showHp();


export {};