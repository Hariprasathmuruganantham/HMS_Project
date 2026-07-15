import basePage from "./basePage.page"
export default class patient_BookingAppointmentPage extends basePage{
    constructor(page){
        super(page)
        this.page=page;
        this.doctorSpecializationDD=page.locator("select[name='Doctorspecialization']")
        this.doctorSelect=page.getByRole('combobox',{name:'Doctors'})
    }
}