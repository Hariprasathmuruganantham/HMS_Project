import {test} from "@playwright/test"
import dotenv  from "dotenv";    //importinh here
import landingpage from "../../POM/admin/landingpage.page"
import homepage from "../../POM/admin/homepage.page"
import adminloginpage from "../../POM/admin/adminloginpage.page";
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


   

  let newtab= await homeepag.clickonadminlogin()

  //we are creating object for loginpage
     let adminlogin=new adminloginpage(newtab)
//await adminlogin.loginadmin(process.env.ADMINUSERNAME, process.env.ADMINPASS)



await page.waitForLoadState('load')
await adminlogin.loginadmin("admin", "Test@12345")

await page.waitForTimeout(3000)

})
