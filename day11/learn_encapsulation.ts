class AccountDetails{

private amount:number=1000;

public getAmount():number{
return this.amount;
}

}
let accObj=new AccountDetails();
//console.log(accObj.amount);
console.log(accObj.getAmount());