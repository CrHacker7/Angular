interface AudioPlayer {

    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {

    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Messing",
    details: {
        author: "Ted Shean",
        year: 2025
    }
}

const song = 'New Song';

//para dar valor a las props no se pone separación
const { song:anotherSong, songDuration:duration, details } = audioPlayer; // details:{ author }  para desestructurar un objeto se usa curly braces

const { author } = details; // otra manera es solo poner details en la desestructuración sin puntos ni llaves y ponerlo aquí

// console.log( 'Song ', anotherSong );
// console.log( 'Duration ', duration );
// console.log( 'Author ', author);
// console.log ( 'Author ', audioPlayer.details.author );  de esta manera es más tedioso

const [ , , trunks = 'Not found' ]: string[] = ['Goku', 'Vegeta'];

// const trunks = dbz[3] || 'No hay personaje';

console.error('Personaje 3:', trunks );


export {};