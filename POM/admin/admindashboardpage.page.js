class admindashboardpage {
  constructor(page) {
    this.page = page
    this.patientbtn = page.locator("//span[text()=' Doctors ']")
    this.Addpatientbtn = page.locator("//span[text()=' Add Doctor']")
    this.doctorspec = page.locator('//select[@name="Doctorspecialization"]')
    this.doctorname=page.locator('//input[@placeholder="Enter Doctor Name"]')
    this.consulfee=page.locator('//input[@placeholder="Enter Doctor Consultancy Fees"]')
    this.docemail=page.locator('//input[@placeholder="Enter Doctor Email id"]')
    this.admindashsubmitbtn=page.locator('//button[@id="submit"]')

  }

  async createdoctor(specialization, docname, consfee, docemai) {
    await this.patientbtn.click()
    await this.Addpatientbtn.click()
    await this.doctorspec.selectOption({ label: specialization })
    await this.doctorname.fill(docname)
    await this.consulfee.fill(consfee)
    await this.docemail.fill(docemai)
    await this.admindashsubmitbtn.click()



    
  }
}

export default admindashboardpage
