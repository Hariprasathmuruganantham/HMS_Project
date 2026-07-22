import { chromium } from "playwright";
import patient_Login_Page from "./POM/patient/patient_Login_page.page";
import doctorLoginPage from "./POM/doctor/doctorLoginPage.page";
export default async function globalSetup(){
    const browser= await chromium.launch()
    //Patient Login 
    const patientcontext=await  browser.newContext()
    const patientpage=await  patientcontext.newPage()
    let PatientLoginPage=  new patient_Login_Page(patientpage)
    await patientpage.goto("http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/user-login.php")
    await PatientLoginPage.loginAction("johndoe12@test.com","Test@123")
    await patientcontext.storageState({path:'storage/patient.json'})
    await patientcontext.close();
    await browser.close();
    //Doctor Login
    const browser1=await chromium.launch()
    const doctorcontext=await browser1.newContext()
    console.log("doctor storage state")
    const doctorpage=await doctorcontext.newPage()
    await doctorpage.goto("http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/doctor/")
    let doctorloginpage=new doctorLoginPage(doctorpage)
    await doctorloginpage.doctorLogin("anujk123@test.com","Test@123")
    await doctorcontext.storageState({path:"storage/doctor.json"})
    await doctorcontext.close()
    await browser1.close()
}