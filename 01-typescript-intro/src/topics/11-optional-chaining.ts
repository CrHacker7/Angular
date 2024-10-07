

export interface Passenger {
    name: string;
    children?: string[]; // optional date

}

const passenger1: Passenger = {
    name: 'Cameron',
}

const passenger2: Passenger = {
    name: 'Mom',
    children: ['children1', 'children2'],
}

const printChildren = ( passenger: Passenger) => {
    const howManyChildren = passenger.children?.length || 0;

    console.log( passenger.name,howManyChildren);
}

printChildren( passenger1);