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
