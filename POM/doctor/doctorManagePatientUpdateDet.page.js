import basePage from "../doctor/basePageDoctor.page";
export default class doctorManagePatientUpdateDet extends basePage{
    constructor(page){
        super(page);
        this.updatePatientDetinManage=page.locator("//i[@class='fa fa-edit']").first()
        this.seePatientDetinManage=page.locator("//i[@class='fa fa-eye']");
    }

    async updatePatientDetinManageClick(){
        await this.elementActions.click(this.updatePatientDetinManage);
    }

    async seePatientDetinManageClick(){
        await this.elementActions.click(this.seePatientDetinManage);
    }
}