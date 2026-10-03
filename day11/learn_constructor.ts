class LoginFunction{

   username:string;

    constructor(username:string){
       this.username=username;
       console.log(this.username);
  }

    clickLogin(){
        console.log("Login Clicked")
     }

    }

    let loginObj=new LoginFunction("Demosales");
    //loginObj.clickLogin();