class adminloginpage{
    constructor(page){
    this.page=page
<<<<<<< HEAD
    this.usertf=page.locator('//input[@placeholder="Username"]')
    this.passtf=page.locator('//input[@name="password"]')
=======
    this.userinput=page.locator('//input[@name="username"]')
    this.passinput=page.locator('//input[@name="password"]')
>>>>>>> b8ef17667e1eb465943b54a2222483caf2a9bd83
    this.subtn=page.locator('//button[@type="submit"]')
}

//bussiness logic
<<<<<<< HEAD
async loginadmin(username, password){
   await  this.usertf.fill(username)
   await  this.passtf.fill(password)
=======
async loginadmin(un, pass){
   await  this.userinput.fill(un)
   await  this.passinput.fill(pass)
>>>>>>> b8ef17667e1eb465943b54a2222483caf2a9bd83
   await  this.subtn.click()

}
}

export default adminloginpage