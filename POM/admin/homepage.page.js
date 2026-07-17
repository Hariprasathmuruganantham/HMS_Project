class homepage{
    constructor (page){
        this.page=page;
        this.homepag=page.locator("(//button[text()='Click Here'])[3]")
    }

/// Business Logic
async clickonadminlogin() {

    let [newPage] = await Promise.all([
        this.page.waitForEvent('popup'),
        this.homepag.click()
    ]);

    await newPage.waitForLoadState();

    return newPage;
}
}
export default homepage