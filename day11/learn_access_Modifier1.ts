export class BankAccount{

public depositCash(){
this.withdraw();
console.log("Amount is deposited");
}

protected withdraw(){
console.log("Amount is deposited");
}

}
let bankOptions=new BankAccount();
bankOptions.depositCash();

