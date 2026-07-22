import basePageDoctor from "./basePageDoctor.page";

export default class doctorLoginPage extends basePageDoctor{
    constructor(page){
        super(page);
        this.doctor_username=page.getByPlaceholder("Username");
        this.doctor_password=page.getByPlaceholder("Password");
        this.forgot_password_link=page.getByRole("link",{name:"Forgot Password ?",exact:false});
        this.login_btn=page.getByRole("button",{name:"Login",exact:false});
    }

    async doctorLogin(username,password){
        await this.elementActions.fill(this.doctor_username,username);
        await this.elementActions.fill(this.doctor_password,password);
        await this.elementActions.click(this.login_btn);
    }
}