let medicineNames: string[] = ["Paracetamol", "Ibuprofen", "Amoxicillin", "Cetirizine"];
let medicinePrices: number[] = [53.5, 37.8, 210, 9.5];
let shelves: number[][] = [[10, 5, 2, 8], [3, 7, 1, 4], [6, 2, 0, 5]];

function calculateTotal(price: number, quantity: number): number {
    return price * quantity
};

function isAvailable(quantity: number): boolean {
    return quantity > 0;
};

function formatMedicineName(name: string): string {
    return name.toUpperCase();
};

let sum = (a: number, b: number): number => {
    return a + b;
};

function getMedicineLabel(name : string, stringht?: string): string {
    if (stringht) {
        return `${name} - ${stringht}`;
    }
    return name;
}

function calculateDiscount(price : number, percentage: number = 0): number {
    return price -= price * (percentage / 100);
}

function calculateAverage(...scores: number[]): number {
    if (scores.length === 0) {
        return 0;
    }
    let total = scores.reduce((acc, score) => acc + score, 0);
    return total / scores.length;
}

function getMedicineNames(medicines: { name: string } []): string[] {
    return medicines.map(medicine => medicine.name);
}

function totalSalesEntries (sales: number[][]): number {
    return sales.reduce((total, dailySales) => total + dailySales.length, 0);
    //let i = 0, i < sales.length; i++) {
    //}
}

let sales = [
{ medicine: "Panadol", price: 50, quantity: 3 },
{ medicine: "Augmentin", price: 120, quantity: 2 },
{ medicine: "Panadol", price: 50, quantity: 5 },
{ medicine: "Cataflam", price: 80, quantity: 1 }
];

function getTotalRevenue(sales: {price: number, quantity: number}[]): number {
    return sales.reduce((total,sales) => total + (sales.price * sales.quantity), 0);
}

function getTotalUnits(sales: {quantity: number}[]): number {
    return sales.reduce((total, sales) => total + sales.quantity, 0);
}

function getSaleValue(price: number, quantity: number): number {
    return price * quantity;
}

function getSalesAboveQuantity(sales: {quantity: number}[], limit: number): {quantity: number}[] {
    return sales.filter(sales => sales.quantity > limit);
}

function getMedicineName(sales: {medicine: string}[]): string[] {
    return sales.map (sales => sales.medicine);
}



