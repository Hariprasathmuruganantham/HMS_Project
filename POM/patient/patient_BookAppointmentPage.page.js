import basePage from "./basePage.page"
export default class patient_BookingAppointmentPage extends basePage{
    constructor(page){
        super(page)
        this.page=page;
        this.bookAppointmentBtn = page.locator("//span[text()=' Book Appointment ']")
        this.doctorSpecializationDD=page.locator("select[name='Doctorspecialization']")
        this.doctorSelect=page.getByRole('combobox',{name:'Doctors'})
        this.aptDate=page.locator("input[name='appdate']")
        this.aptTime=page.locator("input[name='apptime']")
        this.submitBtn=page.getByRole('button',{name:'Submit'})
    }
    async bookAppointment(DtrSpec,DtrName,date,time){
        await this.elementActions.click(this.bookAppointmentBtn)
        await this.elementActions.selectOption(this.doctorSpecializationDD,DtrSpec)
        await this.elementActions.selectOption(this.doctorSelect,DtrName)
        await this.elementActions.type(this.aptDate,date)
        await this.elementActions.fill(this.aptTime,time)
        await this.elementActions.click(this.submitBtn)
        //await this.elementActions.handlingalert()
    }
}