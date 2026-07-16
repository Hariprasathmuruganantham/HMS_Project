import {test} from "../../Fixtures/login.fixture"
import patientBookingAptPage from "../../POM/patient/patient_BookAppointmentPage.page"
test("bookappt",async ({patientLogin}) => {
    let PatientBookingPage= new patientBookingAptPage(patientLogin) 
    await PatientBookingPage.bookAppointment("General Surgery","8","2026-07-15","10:30 AM")
   
})  