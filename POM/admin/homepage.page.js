class homepage{
    constructor (page){
<<<<<<< HEAD
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
=======
        this.homepag=page.locator('//a[@href="hms/admin"]')
    }

    async clickonadminlogin(){
        await this.homepag.click()
    }
}

>>>>>>> b8ef17667e1eb465943b54a2222483caf2a9bd83
export default homepage