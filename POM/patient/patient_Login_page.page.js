import basePage from "./basePage.page";
/**
 * @param("import()")
 */
export default class patient_Login_Page extends basePage {
    constructor(page) {
        super(page)
        this.page = page;
        this.patientUsrName = page.getByRole('textbox', { name: 'Username' })
        this.patientPwd = page.getByRole('textbox', { name: 'Password' })
        this.loginBtn = page.getByRole('button', { name: 'Login ' })
    }
    async loginAction(usrname, pwd) {
        await this.elementActions.fill(this.patientUsrName, usrname)
        await this.elementActions.fill(this.patientPwd, pwd)
        await this.elementActions.click(this.loginBtn)
    }
}