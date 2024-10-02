
const skills: string[] = ['Bash','Counter','Healing'];


interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // with question sign no need to add a prop in object and could be undefined type
}

const strider: Character = {
    name: 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter']
   
};

strider.hometown = 'Rivendell';

console.table(strider);


export {};