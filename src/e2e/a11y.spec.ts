import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright"; // 1

test.describe("homepage", () => {
  // 2
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto("/"); // 3

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});

test.describe("blog page", () => {
  // 2
  test("should not have any automatically detectable accessibility issues", async ({
    page,
    isMobile,
  }) => {
    await page.goto("/blog"); // 3
    if (isMobile) {
      await page.getByRole("button", { name: "Toggle menu" }).click();
    }
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});
