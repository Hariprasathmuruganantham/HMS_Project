import { chromium } from "playwright";
import patient_Login_Page from "./POM/patient/patient_Login_page.page";
import dotenv from "dotenv"
dotenv.config()
export default async function globalSetup() {
    const browser = await chromium.launch()
    //Patient Login 
    const patientcontext = await browser.newContext()
    const patientpage = await patientcontext.newPage()
    let PatientLoginPage = new patient_Login_Page(patientpage)
    await patientpage.goto(process.env.userLoginUrl)
    await PatientLoginPage.loginAction(process.env.patientUserName, process.env.patientPwd)
    await patientcontext.storageState({ path: 'storage/patient.json' })
    await patientcontext.close();
    await browser.close();
}