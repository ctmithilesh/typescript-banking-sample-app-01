import Banking from "./namespace/banking";

const bank = Banking.Bank

const b1 = new bank("SBI","Pune","Jiten Gandhi")
b1.displayBankName()

const customer = Banking.NewCustomer
const c1 = new customer(135325,"Amit Gupta",1500)
const newBalance = c1.withdraw(500)
console.log("new Balance", newBalance)


