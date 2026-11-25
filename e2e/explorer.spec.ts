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
  const rows = page.locator('table tbody tr');

  // The first column is the block height, shown as "9,403". The loading
  // placeholder also has 20 rows, with empty cells that read as NaN, so wait
  // for a real height before reading it and again after paging.
  const firstHeight = async () => {
    const text = await rows.first().locator('td').first().innerText();
    return text.trim() ? Number(text.replace(/,/g, '')) : NaN;
  };
  await expect.poll(firstHeight).toBeGreaterThan(0);
  await expect(rows).toHaveCount(20);
  const newest = await firstHeight();

  await page.getByText('Older', { exact: true }).click();
  await expect(page).toHaveURL(/\/blocks\?height=\d+/);
  // The URL changes before the older blocks load, so wait for the data.
  await expect.poll(firstHeight).toBeLessThan(newest);
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
  // The labels render before the data, so check the values.
  const field = (label: string) =>
    page
      .locator('.tabled-labeled-value')
      .filter({ has: page.getByText(label, { exact: true }) })
      .locator('.value');
  await expect(field('Block')).toHaveText('5');
  await expect(field('Position in block')).toHaveText('0');
});

test('unknown address shows the not-found page', async ({ page }) => {
  const response = await page.goto('/no-such-page');
  expect(response?.status()).toBe(404);
  await expect(
    page.getByRole('heading', { name: 'Page not found' }),
  ).toBeVisible();
});
