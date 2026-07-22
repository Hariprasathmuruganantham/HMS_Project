import basePage from "../doctor/basePageDoctor.page.js";

export default class doctorAddPatientPage extends basePage{
    constructor(page){
        super(page);
        this.patientName=page.getByPlaceholder("Enter Patient Name");
        this.patientContactNumber=page.getByPlaceholder("Enter Patient Contact no");
        this.patientEmailId=page.getByPlaceholder("Enter Patient Email id");
        this.genderFemale=page.locator("#rg-female");
        this.genderMale=page.locator("#rg-male");
        this.patientAddress=page.getByPlaceholder("Enter Patient Address");
        this.patientAge=page.getByPlaceholder("Enter Patient Age");
        this.patientMedicalHistory=page.getByPlaceholder("Enter Patient Medical History(if any)");
        this.addButton=page.getByRole("button",{name:"Add",exact:false})
    }
    
    async addPatientFunc(){
        await this.elementActions.fill(this.patientName,"Raghav Singh Thakur");
        await this.elementActions.fill(this.patientContactNumber,"8776190087");
        await this.elementActions.fill(this.patientEmailId,"raghav1231@gmail.com");
        await this.elementActions.click(this.genderMale);
        await this.elementActions.fill(this.patientAddress,"Rajajinagar,Bangalore");
        await this.elementActions.fill(this.patientAge,"25");
        await this.elementActions.fill(this.patientMedicalHistory,"Suffered a Cardiac Arrest.");
        await this.elementActions.click(this.addButton);
    }

}
