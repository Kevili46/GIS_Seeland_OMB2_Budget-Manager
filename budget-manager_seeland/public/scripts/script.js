

// GLOBAL //////////////////////////////////////////////////////////////////////////////////////////

// classes ////////////////////

class Account {
    constructor(vorname, nachname, username, password) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.username = username;
        this.password = password;
        // Array aus Transaction Objekten (alle Transaktionen, die ein Account eingespeichert hat)
        this.transactions = [];
    }
    setVorname(neuerVorname) {
        this.vorname = neuerVorname;
    }
    getVorname() {
        return this.vorname;
    }
    setNachname(neuerNachname) {
        this.nachname = neuerNachname;
    }
    getNachname() {
        return this.nachname;
    }
    setUsername(neuerUsername) {
        this.username = neuerUsername;
    }
    getUsername() {
        return this.username;
    }
    setPassword(neuesPassword) {
        this.password = neuesPassword;
    }
    getPassword() {
        return this.password;
    }
    getBalance() {
        return this.balance;
    }
    // der Kontostand entsteht aus der Summe der Beträge aller gespeicherten Transaktionen
    async currentBalance() {
        let summeBetraege;
        // let transactionsFromFile = await fetch('public/savings/transactions.txt');
        this.transactions = JSON.parse(transactionsFromFile);

        if (this.transactions.length == 0 ) {
            summeBetraege = 0;
        } else {
            for (let i = 0; i < this.transactions.length; i++) {
                summeBetraege += this.transactions[i].betrag;
                console.log(this.transactions[i].getBetrag());
            }
        }
        return summeBetraege;
    }
    // neue Transaktion in transactions-Array speichern
    addTransaction(neueTransaktion) {
        this.transactions.push(neueTransaktion);
    }
    // alte Transaktion aus transactions-Array löschen
    removeTransaction(alteTransaktion) {
        this.transactions.splice(alteTransaktion);
    }
}

const acc1 = new Account("Kevin", "Seeland", "Test", "444");
console.log(acc1);
console.log(acc1.transactions.length);


// INDEX ///////////////////////////////////////////////////////////////////////////////////////////

// login ////////////
const loginName = document.getElementById("loginName");
const loginPassword = document.getElementById("loginPassword");
const loginForm = document.getElementById("loginForm");
const errorSpace = document.getElementById("errorSpace");
const loginFormBox = document.getElementById("loginFormBox");

console.log(loginName);
console.log(loginPassword);
console.log(loginForm);
console.log(errorSpace);
console.log(loginFormBox);

if (loginForm != null) {
    loginForm.addEventListener("submit", (e) => {
        if (loginName.value == acc1.getUsername() && loginPassword.value == acc1.getPassword()) {
            window.location.replace("/home");
        }
        if (loginName.value != acc1.getUsername() || loginPassword.value != acc1.getPassword()) {
            errorSpace.textContent = "Falsche Anmeldedaten! (Name: Test, Passwort: 444)";
        }
        e.preventDefault();
    });
}

// HOME ////////////////////////////////////////////////////////////////////////////////////////////

/* const displayBalance = document.getElementById("displayBalance");
console.log(displayBalance);
if (displayBalance != null) {
    const currentBalance = calculateBalance(transactions);
    displayBalance.textContent = new Intl.NumberFormat("de-DE", {
        style: "currency", currency: "EUR" }).format(currentBalance);
}

// functions

function calculateBalance(transactions) {
    let balance = 100;
    if (transactions > 0 ) {
        for ( let transaction of transactions ) {
            balance += transaction.betrag;
        }
    }
    return balance;
}
*/
// EINNAHME & AUSGABE //////////////////////////////////////////////////////////////////////////////

/* const addTransaction = document.getElementById("addTransaction");
const taValuePlus = document.getElementById("taValuePlus");
const taValueMinus = document.getElementById("taValueMinus");
const taName = document.getElementById("taName");
const taDate = document.getElementById("taDate");
let balance = 0;

if (taValuePlus != null ) {
    addTransaction.addEventListener("click", function() {
        createTransaction(Number(taValuePlus.value), taName.value, taDate.value);
        balance += Number(taValuePlus.value);
        console.log(balance);
    });
}
if (taValueMinus != null) {
    addTransaction.addEventListener("click", function() {
        createTransaction(Number(-taValueMinus.value), taName.value, taDate.value);
    });
}

// functions

function createTransaction(taValue, taName, taDate) {
    const ta = new Transaction(taValue, taName, taDate);
    console.log(ta);
    acc1.addTransaction(ta);
    console.log(acc1.transactions.length);
    console.log(ta.getBetrag());
} */

// TRANSAKTIONEN ///////////////////////////////////////////////////////////////////////////////////

/* const tableBody = document.getElementById("addedTransactions");

if (tableBody != null) {
    const testEntry = document.createElement("tr");
    const testCells = [
        createCell("10000"),
        createCell("test"),
        createCell("20.20.2300")
    ];
    for (const testCell of testCells) {
        testEntry.append(testCell);
    }
    tableBody.appendChild(testEntry);
    for (let i = 0; i < acc1.transactions.length; i++) {
        const tableEntry = document.createElement("tr");
        tableEntry.classList.add("transactionEntry");
        const cells = [
            createCell(acc1.transactions[i].getBetrag().toString()),
            createCell(acc1.transactions[i].getBezeichnung()),
            createCell(acc1.transactions[i].getDatum())
        ];
        for (const cell of cells) {
            tableEntry.append(cell);
        }
        tableBody.appendChild(tableEntry);
    }
}


const alleEntries = document.querySelectorAll(".transactionEntry");
for (const singleEntry of alleEntries) {
    singleEntry.setAttribute("onclick", editWindow());
}

// functions
function createCell(information) {
    const tableCell = document.createElement("td");
    tableCell.textContent = information;
    return tableCell;
}
function editWindow() {
    alert("Clickable!");
}
*/

// Server functions
