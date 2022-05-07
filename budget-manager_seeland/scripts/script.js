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
        this.balance = this.currentBalance();
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
        return this.vorname;
    }
    getBalance() {
        return this.balance;
    }
    // der Kontostand entsteht aus der Summe der Beträge aller gespeicherten Transaktionen
    currentBalance() {
        let summeBetraege;
        if (this.transactions.length == 0 ) {
            summeBetraege = 0;
        } else {
            for (let i = 0; 1 < this.transactions.length; i++) {
                summeBetraege += transactions[i].getBetrag();
                console.log(transactions[i].getBetrag());
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
class Transaction {
    constructor(betrag, bezeichnung, datum, wiederholen) {
        this.betrag = Number(betrag);
        this.bezeichnung = bezeichnung;
        this.datum = datum;
        this.wiederholen = wiederholen;
    }
    setBetrag(neuerBetrag) {
        this.betrag = neuerBetrag;
    }
    getBetrag() {
        return this.betrag;
    }
    setBezeichnung(neueBezeichnung) {
        this.bezeichnung = neueBezeichnung;
    }
    getBezeichnung() {
        return this.bezeichnung;
    }
    setDatum(neuesDatum) {
        this.datum = neuesDatum;
    }
    getDatum() {
        return this.datum;
    }
    setWiederholen(anderePeriode) {
        this.wiederholen = anderePeriode;
    }
    getWiederholen() {
        return this.wiederholen;
    }
}

const acc1 = new Account("Kevin", "Seeland", "Testaccount", "444");
console.log(acc1);
console.log(acc1.transactions.length);


// INDEX ///////////////////////////////////////////////////////////////////////////////////////////

// login ////////////
const loginName = document.getElementById("loginName");
const loginPassword = document.getElementById("loginPassword");
const loginButton = document.getElementById("loginButton");

console.log(loginName);
console.log(loginPassword);
console.log(loginButton);

// functions

/* loginName.addEventListener("change", () => {
    if (loginName.value == acc1.getUsername() && loginPassword.value === acc1.getPassword()) {
        loginButton.removeAttribute("href");
    }
}); */

// HOME ////////////////////////////////////////////////////////////////////////////////////////////

const displayBalance = document.getElementById("displayBalance");
console.log(displayBalance);
if (displayBalance != null) {
    displayBalance.textContent = new Intl.NumberFormat("de-DE", {
        style: "currency", currency: "EUR" }).format(acc1.currentBalance());
}
console.log(acc1.transactions.length);

// TRANSACTIONS ////////////////////////////////////////////////////////////////////////////////////

const addTransaction = document.getElementById("addTransaction");
const taValuePlus = document.getElementById("taValuePlus");
const taValueMinus = document.getElementById("taValueMinus");
const taName = document.getElementById("taName");
const taDate = document.getElementById("taDate");

if (taValuePlus != null ) {
    addTransaction.addEventListener("click", function() {
        createTransaction(Number(taValuePlus.value), taName.value, taDate.value);
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
    taValue.value = null;
    taName.value = null;
    taDate.value = null;
    acc1.addTransaction(ta);
    console.log(acc1.transactions.length);
    console.log(ta.getBetrag());
    console.log(acc1.getBalance());
}