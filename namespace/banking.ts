namespace Banking {

    export interface BankAccount {
        accountNum: number;
        accountHolder: string;
        balance: number;
        nominee: string
    }
    export class Bank {


        constructor(
            public bank_name: string,
            public bank_branch_name: string,
            public bank_branch_manager: string
        ) {
            this.bank_branch_manager = 'Amit Shah'
        }

        displayBankName() {
            console.log(
                `${this.bank_name}`
            )

        }

    }

    export class NewCustomer extends Bank {


        constructor(
            public accountNumber: number,
            public accountHolder: string,
            public balance: number
        ) {
           super("SBI","Pune","Jiten Gandhi")

        }
        deposit(amount: number) {
            this.balance = this.balance + amount
        }
        withdraw(amount: number) {
            this.balance = this.balance - amount
            return this.balance
        }
        checkBalance() {
            return this.balance
        }
    }


}
export default Banking

