
interface Product {

    description: string;
    price: number;
}

const phone: Product = {
    description: 'Nokia A1',
    price: 150.0
}

const tablet: Product = {
    description: 'iPad Air',
    price: 250.0
}


interface TaxCalcutationOptions {
    tax: number;
    products: Product[];
}

// function taxCalcutation( options: TaxCalcutationOptions ): number[] {

//     let total = 0;

//     options.products.forEach(product => {
//         total += product.price;              //total = total + product.price;    
//                
//     });

//     return [total, total *options.tax ];
// }


// function taxCalcutation( options: taxCalcutationOptions ): [number, number] {
//function taxCalcutation( { tax, products }: TaxCalcutationOptions ): [number, number] {  //DESTRUCTURING this way it's long if we have 20 options
function taxCalcutation( options: TaxCalcutationOptions ): [number, number] {

    const { tax, products } = options;              //DESTRUCTURING options
    let total = 0;

    products.forEach( ({ price }) => {              //DESTRUCTURING 
        total += price;

    });

    return [total, total * tax ];                   // DESTRUCTURING
}


const shorppingCart = [phone, tablet];
const tax = 0.15;


// const result = taxCalcutation({         
const [ total, taxTotal ] = taxCalcutation({  //DESTRUCTURING
    products: shorppingCart,
    tax, // tax: tax, it's the same
})


// console.log('Total', result[0] );
// console.log('Tax', result[1] );

console.log('Total', total );               //DESTRUCTURING
console.log('Tax', taxTotal );              //DESTRUCTURING





export {};
