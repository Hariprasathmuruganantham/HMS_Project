class homepage{
    constructor (page){
        this.homepag=page.locator('//a[@href="hms/admin"]')
    }

    async clickonadminlogin(){
        await this.homepag.click()
    }
}

export default homepage