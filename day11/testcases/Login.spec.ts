import {test} from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

import { WelcomePage } from "../pages/WelcomePage";
import { MyHomePage } from "../pages/MyHomePage";
test("Test to verify login", async({page})=>{
    let loginPageObj=new LoginPage(page);
    let welcomePageObj=new WelcomePage(page);
    let myHomePageObj=new MyHomePage(page);
    
    await page.goto("https://leaftaps.com/opentaps/control/main");

    await loginPageObj.login("Demosalesmanager","crmsfa");

    //await welcomePageObj.clickCrmsfa();

    //await myHomePageObj.clickLeads();

    await page.waitForTimeout(5000);

})