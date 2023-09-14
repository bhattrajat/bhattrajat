import { test, expect } from "@playwright/test";

test("should navigate to the blog page", async ({ page }) => {
  // Start from the index page (the baseURL is set via the webServer in the playwright.config.ts)
  await page.goto("/");
  // Find an element with the text 'About Page' and click on it
  await page.click("text=Blog");
  // The new URL should be "/about" (baseURL is used there)
  await expect(page).toHaveURL("/blog");
  // The new page should contain an h2 with "Read my blog posts"
  await expect(page.locator("h2")).toContainText("Read my blog posts");
  // Goto homepage again
  await page.click(`text="Rajat Bhatt"`);
  await expect(page).toHaveURL("/");
  // Goto contact me
  await page.click(`text="Contact Me"`);
  await expect(page).toHaveURL("/#contact");
});
