import {test} from "../../Fixtures/login.fixture";
import doctorAddPatientPage from "../../POM/doctor/doctorAddPatientPage.page";
import doctorHomePage from "../../POM/doctor/doctorHomePage.page";

test("Add patient",async({doctorLogin})=>{
    let doctor_home_page=new doctorHomePage(doctorLogin);
    await doctor_home_page.addPatientLinkClick();
})