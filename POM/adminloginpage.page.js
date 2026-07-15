class adminloginpage{
    constructor(page){
    this.page=page
    this.userinput=page.locator('//input[@name="username"]')
    this.passinput=page.locator('//input[@name="password"]')
    this.subtn=page.locator('//button[@type="submit"]')
}

//bussiness logic
async loginadmin(un, pass){
   await  this.userinput.fill(un)
   await  this.passinput.fill(pass)
   await  this.subtn.click()

}
}

export default adminloginpage