import { expect, test } from './fixtures';

test('home shows the latest blocks and blobs', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('This Demo contains fake data')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Espresso Explorer' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Latest Blocks' }),
  ).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'Latest Blobs' }),
  ).toBeVisible();
  await expect(page.locator('table tbody tr').first()).toBeVisible();
});

test('blocks list pages to older blocks', async ({ page }) => {
  await page.goto('/blocks');
  await expect(page.getByRole('heading', { name: 'Blocks' })).toBeVisible();
  await expect(page.locator('table tbody tr')).toHaveCount(20);

  await page.getByText('Older', { exact: true }).click();
  await expect(page).toHaveURL(/\/blocks\?height=\d+/);
  await expect(page.locator('table tbody tr').first()).toBeVisible();
});

test('blobs list renders', async ({ page }) => {
  await page.goto('/transactions');
  await expect(page.getByRole('heading', { name: 'Blobs' })).toBeVisible();
  await expect(page.locator('table tbody tr').first()).toBeVisible();
});

test('block page shows the requested block', async ({ page }) => {
  await page.goto('/block/5');
  await expect(page.getByRole('heading', { name: 'Block #5' })).toBeVisible();
  await expect(page).toHaveTitle(/Block #5/);
  await expect(page.getByText('Fee Recipient')).toBeVisible();
});

test('blob page shows the requested blob', async ({ page }) => {
  await page.goto('/transaction/5-0');
  await expect(
    page.getByRole('heading', { name: 'Blob Details' }),
  ).toBeVisible();
  await expect(page.getByText('Position in block')).toBeVisible();
});

test('unknown address shows the not-found page', async ({ page }) => {
  const response = await page.goto('/no-such-page');
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole('heading', { name: 'Page not found' }),
  ).toBeVisible();
});
