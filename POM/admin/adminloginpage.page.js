class adminloginpage{
    constructor(page){
    this.page=page
    this.usertf=page.locator('//input[@placeholder="Username"]')
    this.passtf=page.locator('//input[@name="password"]')
    this.subtn=page.locator('//button[@type="submit"]')
}

//bussiness logic
async loginadmin(username, password){
   await  this.usertf.fill(username)
   await  this.passtf.fill(password)
   await  this.subtn.click()

}
}

export default adminloginpage