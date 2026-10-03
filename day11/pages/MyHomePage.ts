import {Page, Locator} from "@playwright/test";
export class MyHomePage{

page:Page;
leadsLink:Locator;

constructor(page:Page){
    this.page=page;
    this.leadsLink=this.page.getByText("Leads",{exact:true});
}


async clickLeads(){
await this.leadsLink.click();
}


}