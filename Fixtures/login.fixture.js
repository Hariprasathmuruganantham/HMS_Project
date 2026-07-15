import {test as base} from "@playwright/test"

export const test=base.extend({
    patientLogin:async ({browser},use) => {
        const Context=await browser.newContext({storageState:'storage/patient.json'})
        const page= await Context.newPage()
        await page.goto("http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/dashboard.php")
        await use(page)
    }
})