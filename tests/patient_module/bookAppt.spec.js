import {test} from "../../Fixtures/login.fixture"
import patient_data from "../../Test_data/patient_data.json"
import patientBookingAptPage from "../../POM/patient/patient_BookAppointmentPage.page"
test("bookappt",async ({patientLogin}) => {
    let PatientBookingPage= new patientBookingAptPage(patientLogin) 
    await PatientBookingPage.bookAppointment(patient_data.DtrSpec,patient_data.DtrName,patient_data.date,patient_data.time)
   
})  