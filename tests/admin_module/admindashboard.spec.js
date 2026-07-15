import {test} from "@playwright/test"
import Dotenv from "dotenv"
import admindashboardpage from "../../POM/admindashboardpage.spec"

test("dashboard implementation", async ({page})=>{

    //creating the object for admindashboardpage class
    let  admindash= new admindashboardpage(page)

await page.goto(process.env.ADMINURL)
await admindash.createdoctor("Dental Care", "Azmat","600", "test@gmail.com")



})