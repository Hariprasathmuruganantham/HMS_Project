class admindashboardpage {
  constructor(page) {
    this.page = page
    this.docbtn= page.locator("//span[text()=' Doctors ']")
    this.Adddocbtn = page.locator("//span[text()=' Add Doctor']")
    this.doctorspec = page.locator('//select[@name="Doctorspecialization"]')
    this.doctorname=page.locator('//input[@placeholder="Enter Doctor Name"]')
    this.consulfee=page.locator('//input[@placeholder="Enter Doctor Consultancy Fees"]')
    this.docemail=page.locator('//input[@placeholder="Enter Doctor Email id"]')
    this.admindashsubmitbtn=page.locator('//button[@id="submit"]')

  
  
  }

  async createdoctor(specialization, docname, consfee, docemai) {
    await this.page.waitForLoadState('load')
    await this.docbtn.click()
    await this.Adddocbtn.click()
    await this.doctorspec.selectOption({ label: specialization })
    await this.doctorname.fill(docname)
    await this.consulfee.fill(consfee)
    await this.docemail.fill(docemai)
    await this.admindashsubmitbtn.click()

}
}

export default admindashboardpage
