import {test} from "../Fixtures/login.fixture"

test("clickview",async ({patientLogin}) => {
    await patientLogin.getByRole('link',{name:'[ View Appointment History ]'}).click()
    await patientLogin.waitForTimeout(6000)
})