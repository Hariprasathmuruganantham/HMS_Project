class landingpage{
    constructor(page){
    this.page=page
    this.mainloginbtn=page.locator('//a[@href="#logins"]').first()
    }


//bussiness logic

async mainlogin(){
await this.mainloginbtn.click()

}
}

export default landingpage