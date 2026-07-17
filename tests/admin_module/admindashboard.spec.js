import { test } from "@playwright/test";
import homepage from "../../POM/admin/homepage.page";
import landingpage from "../../POM/admin/landingpage.page";
import adminloginpage from "../../POM/admin/adminloginpage.page";
import admindashboardpage from "../../POM/admin/admindashboardpage.page";
import admindoctor from "../../Test_data/admindoctor.json";
import dotenv from "dotenv";

dotenv.config();

test("admin login implementation1", async ({ page }) => {

    // Create Landing Page object
    const landingpag = new landingpage(page);

    // Open application
    await page.goto(process.env.URLMAIN);

    // Click Login
    await landingpag.mainlogin();

    // Create Home Page object
    const homeepag = new homepage(page);

    // Click Admin Login and capture the new tab
    const newtab = await homeepag.clickonadminlogin();

    // Create Admin Login Page object
    const adminlogin = new adminloginpage(newtab);

    // Wait for the admin page to load
    await newtab.waitForLoadState("load");

    // Login
    await adminlogin.loginadmin(
        process.env.ADMINUSERNAME,
        process.env.ADMINPASS
    );

    // Create Admin Dashboard Page object
    const admindash = new admindashboardpage(newtab);

    // Create Doctor using JSON data
    await admindash.createdoctor(
        admindoctor.doctor.specialization,
        admindoctor.doctor.doctorName,
        admindoctor.doctor.consultancyFee,
        admindoctor.doctor.email
    );

});