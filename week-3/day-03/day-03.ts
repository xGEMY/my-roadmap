type MedicineId = number;
type MedicineName = string;
type quantity = number;
type StockStatus = "in-stock" | "low-stock" | "out-of-stock";

let identifier: StockStatus;
let status: StockStatus = "expired";


let medicineTuple: [MedicineName, quantity] = ["Aspirin", 100];

function printMsg(massage: string): void {
    console.log(massage);
}
printMsg("Panadol is available");

function throwsError(): never {
    throw new Error ("This function always throws an error");
}

/*----------------*/

type StockMovement = {
    medicineId: MedicineId;
    medicineName: MedicineName;
    quantityChange: number;
    reason: "purchase" | "sale" | "correction";
}

let stockMovement : StockMovement = {
    medicineId: 3,
    medicineName: "Aspirin",
    quantityChange: 50,
    reason: "purchase"
}

enum MedicineCategory2 {
    Tablets,
    capsules,
    Vials,
    syrups,
    Other
}

function calculateNewQuantity(
    currentQuantity: number,
    movement: StockMovement
): number {
    const newQuantity = currentQuantity + movement.quantityChange;
    if (newQuantity < 0) {
        throw new Error("Resulting stock quantity cannot be negative");
    }

    return newQuantity;
}

let currentQuantity = 10;
console.log(calculateNewQuantity(currentQuantity, stockMovement));

function describeMovement(movement: StockMovement): string {
    const action = movement.quantityChange > 0 ? "added" : "removed";
    const quantity = Math.abs(movement.quantityChange);

    return `${movement.medicineName}: ${quantity} units ${action}, Reason: ${movement.reason}`;
}
console.log(describeMovement(stockMovement));

