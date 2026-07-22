import basePage from "../doctor/basePageDoctor.page";

export default class doctorPatientUpdateinMan extends basePage{
    constructor(page){
        super(page);
        this.patientName=page.locator(".form-group input[name='patname']");
        this.patientContactNumber=page.locator(".form-group input[name='patcontact']");
        this.genderMale=page.locator(".form-group input[value='Male']");
        this.genderFemale=page.locator(".form-group input[value='Female']");
        this.patientAddress=page.locator(".form-group textarea[name='pataddress']");
        this.patientAge=page.locator(".form-group input[name='patage']")
        this.patientMedicalHistory=page.locator(".form-group textarea[name='medhis']");
        this.updateButton=page.getByRole("button",{name:"Update"});
    }
    
    async updatePatientinManageFunc(){
        await this.elementActions.fill(this.patientContactNumber,"8776190086");
        await this.elementActions.fill(this.patientAddress,"Rajajinagar,Bangalore,KA");
        await this.elementActions.fill(this.patientAge,"26");
        await this.elementActions.click(this.updateButton);
    }

}
