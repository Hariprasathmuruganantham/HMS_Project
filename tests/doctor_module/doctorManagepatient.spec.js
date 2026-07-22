import {test} from "../../Fixtures/login.fixture";
import doctorHomePage from "../../POM/doctor/doctorHomePage.page";
import doctorManagePatientUpdateDet from "../../POM/doctor/doctorManagePatientUpdateDet.page";
import doctorPatientUpdateinMan from "../../POM/doctor/doctorPatientUpdateinMan.page";

test("Manage patient",async({doctorLogin})=>{
    let doctor_home_page=new doctorHomePage(doctorLogin)
    await doctor_home_page.managePatientLinkClick();
    let doctorManagePat=new doctorManagePatientUpdateDet(doctorLogin);
    await doctorManagePat.updatePatientDetinManageClick();
    let doctorPatientUpd=new doctorPatientUpdateinMan(doctorLogin);
    await doctorPatientUpd.updatePatientinManageFunc();
})