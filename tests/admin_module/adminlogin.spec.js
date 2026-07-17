import {test} from "@playwright/test"
import dotenv  from "dotenv";    //importinh here
import landingpage from "../../POM/landingpage.spec";
import homepage from "../../POM/homepage.spec";
import adminloginpage from "../../POM/adminloginpage.spec";
dotenv.config();   //loading here
test("admin login implementation", async ({page})=>{

    //we are reating object for landingpage
    let landingpag= new landingpage(page)
    //we are creating object for homepage
    let homeepag=new homepage(page)

    //we are creating object for loginpage
     let adminlogin=new adminloginpage(page)


await page.goto(process.env.URLMAIN)
await landingpag.mainlogin()           //click login, togo adminlogin page
await homeepag.clickonadminlogin()
await adminlogin.loginadmin(process.env.ADMINUSERNAME, process.env.ADMINPASS)

})