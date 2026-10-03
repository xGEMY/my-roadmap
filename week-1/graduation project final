
const medicines = [
    { name: "Panadol", price: 50, quantity: 10 },
    { name: "Augmentin", price: 120, quantity: 5 },
    { name: "Cataflam", price: 80, quantity: 0 }
];

/*--------------------------- */

function listMedicines() {
    console.log("List of Medicines:");
    medicines.forEach(medicine => {
        console.log(`Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
    });
}

listMedicines();

/*--------------------------- */

function findMedicine(name) {
    const medicine = medicines.find(medicine => medicine.name.toLowerCase() === name.toLowerCase());
    if (medicine) {
        console.log(`Found Medicine: Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
    } else {
        console.log(`Medicine with name "${name}" not found.`);
    }
}

findMedicine("Panadol");
findMedicine("Aspirin");

/* -----------name.toLowerCase() = علشان يلاقيه بسهولة ودا طبعا بحثت عنه علشان مكنش بيطلع بسهولة في البحث------------------- */

function calculateInventoryValue() {
    const totalValue = medicines.reduce((acc, medicine) => acc + (medicine.price * medicine.quantity), 0);
    console.log(`Total Inventory Value: ${totalValue}`);
}

calculateInventoryValue();

/*--------------------------- */

function getOutOfStockMedicines() {
    const outOfStock = medicines.filter(medicine => medicine.quantity === 0);  
    console.log("Out of Stock Medicines:");
    if (outOfStock.length > 0) {
        outOfStock.forEach(medicine => {
            console.log(`Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
        });
    } else {
        console.log("No medicines are out of stock.");
    }
}

getOutOfStockMedicines();

/*--------------------------- */

function getMostExpensiveMedicine() {
    const mostExpensive = medicines.reduce((prev, current) => (prev.price > current.price) ? prev : current);
    console.log(`Most Expensive Medicine: Name: ${mostExpensive.name}, Price: ${mostExpensive.price}, Quantity: ${mostExpensive.quantity}`);
}

getMostExpensiveMedicine(); 

/*--------------------------- */

function addMedicine(medicine) {
    medicines.push(medicine);
    console.log(`Medicine added: Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
    if (medicine.quantity === 0) {
        console.log(`Note: The medicine "${medicine.name}" is currently out of stock.`);
    }
} 

addMedicine({ name: "avil", price: 30, quantity: 20 });

listMedicines();

/*--------------------------- */

function removeMedicine(name) {
    const medicine = medicines.find(med => med.name.toLowerCase() === name.toLowerCase());
    if (medicine) {
        medicines.splice(medicines.indexOf(medicine), 1);
        console.log(`Medicine removed: Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
    } else {
        console.log(`Medicine with name "${name}" not found.`);
    }
}

removeMedicine("Augmentin");

listMedicines();

/*--------------------------- */

function updateMedicineQuantity(name, quantity) {
    const medicine = medicines.find(med => med.name.toLowerCase() === name.toLowerCase()); 
    if (medicine) {
        medicine.quantity = quantity;
        console.log(`Medicine quantity updated: Name: ${medicine.name}, Price: ${medicine.price}, Quantity: ${medicine.quantity}`);
    } else {
        console.log(`Medicine with name "${name}" not found.`);
    }
}
updateMedicineQuantity("Panadol", 15);

/*--------------------------- */
