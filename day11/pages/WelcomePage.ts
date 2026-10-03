import {Page, Locator} from "@playwright/test";


export class WelcomePage{

page:Page;
crmsfaLink:Locator;

constructor(page:Page){
this.page=page;
this.crmsfaLink=this.page.getByRole("link",{name:"CRM/SFA"})
}

async clickCrmsfa(){
    await this.crmsfaLink.click();
}


}