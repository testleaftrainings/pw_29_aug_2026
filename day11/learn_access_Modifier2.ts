import { BankAccount } from "./learn_access_Modifier1";

class FetchAccountDetails extends BankAccount{

    public details(){
        this.withdraw();
    }

}

let accountObj=new FetchAccountDetails();
accountObj.depositCash();

let fetchObj=new BankAccount();
fetchObj.depositCash();
