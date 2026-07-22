export default class elementActions {
    constructor(page) {
        this.page = page
    }

    async click(locator) {
        await locator.click()
    }
    async fill(locator, value) {
        await locator.fill(value)
    }
    async waitForLoadstate() {
        await this.waitForLoadState()
    }
    async waitForSelector(locator){
        await this.waitForSelector(locator);
    }
    async selectOption(locator, value) {
        await locator.selectOption({ value: value })
    }
    async type(locator, value) {
        await locator.type(value)
    }
    async handlingpopup(locator1,method="click"){
        let [popup]=await Promise.all([
            this.page.waitForEvent('popup'),
            locator1[method]()
        ])
        await popup.waitForLoadState()
        return popup
    }

}