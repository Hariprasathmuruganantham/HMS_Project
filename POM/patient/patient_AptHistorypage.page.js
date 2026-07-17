import basePage from "./basePage.page";
export default class patient_AptHistory extends basePage{
    constructor(page){
        super(page)
        this.page=page;
        this.apptHistoryBtn= page,locator("//span[text()=' Appointment History ']")
        
    }
}