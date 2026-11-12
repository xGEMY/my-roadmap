let medicineName: string;
let unitPrice: number;
let isAvailable: boolean;

let patientAge: number;
let patientName: string;

let jobTitle: string | null;

let explicitType: number;
let inferredType = 'ahmed';

explicitType = 33;

medicineName = 'aspirin';
unitPrice = 19;
isAvailable = true;

console.log('medicine name: ' + medicineName + ', price: ' + unitPrice + ', availability:' + isAvailable);



let customerName: string = 'ahmed';
let medicinesName: string = 'aspirin';
let unitePrices: number = 10;
let quantity: number = 2;
let discountPercentage: number = 10;

let subTotal: number = unitePrices * quantity;
let discountAmount: number = (subTotal * discountPercentage) / 100;
let finalTotal: number = subTotal - discountAmount;

console.log('Subtotal: '+ subTotal +', Discount Amount: ' + discountAmount + ', Final Total: ' + finalTotal);

/*------------------------------*/

let medExpiry: boolean = true;

if (medExpiry) {
    console.log('The medicine is expired!.');
}
else {
    console.log('The medicine is not expired.');
};

