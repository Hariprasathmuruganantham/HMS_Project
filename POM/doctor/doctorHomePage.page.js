import basePage from "../doctor/basePageDoctor.page.js";
export default class doctorHomePage extends basePage{
    constructor(page){
        super(page);
        this.dashBoardLink=page.getByRole("link",{name:"Dashboard",exact:false});
        this.appointmentHistoryLink=page.getByRole("link",{name:"Appointment History",exact:false});
        this.patientsLink=page.locator(".item-inner").filter({hasText:' Patients '});
        //this.patientsLink=page.getByRole("link",{name:"Patients",exact:false});
        this.addPatientLink=page.getByRole("link",{name:"Add Patient",exact:false});
        this.managePatientLink=page.getByRole("link",{name:"Manage Patient",exact:false});
        this.searchLink=page.getByRole("link",{name:"Search",exact:false});
        this.updateProfileLink=page.getByRole("link",{name:"Update Profile",exact:false});
        this.viewAppointmentHistoryLink=page.getByRole("link",{name:"View Appointment History",exact:false});
        this.profileLink=page.locator(".ti-angle-down");
        this.myProfileLink=page.getByRole("link",{name:"My Profile",exact:false});
        this.changePasswordLink=page.getByRole("link",{name:"Change Password",exact:false});
        this.logoutLink=page.getByRole("link",{name:"Log Out",exact:false});
    }

    async addPatientLinkClick(){
        await this.elementActions.click(this.patientsLink);
        //await this.elementActions.waitForSelector(this.addPatientLink);
        await this.page.waitForLoadState('load')
        await this.elementActions.click(this.addPatientLink);
    }

    async managePatientLinkClick(){
        await this.elementActions.click(this.patientsLink);
       // await this.elementActions.waitForSelector(this.managePatientLink);
       await this.page.waitForLoadState('load')
        await this.elementActions.click(this.managePatientLink);
    }


}
