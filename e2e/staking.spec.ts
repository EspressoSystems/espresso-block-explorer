import { expect, test } from './fixtures';

test('dashboard lists validators without a wallet', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByText('This Demo contains fake data')).toBeVisible();
  await expect(
    page.getByRole('heading', { name: 'ESP Delegation' }),
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'CONNECT WALLET' }),
  ).toBeVisible();
  await expect(
    page.getByRole('button', { name: 'DELEGATE' }).first(),
  ).toBeVisible();
});

test('validator page opens from the list', async ({ page }) => {
  await page.goto('/');
  await page
    .getByTitle('View validator details')
    .filter({ visible: true })
    .first()
    .click();
  await expect(page).toHaveURL(/\/validator\?address=0x[0-9a-fA-F]{40}/);
  await expect(page).toHaveTitle(/Validator/);
  await expect(
    page.getByRole('heading', { name: 'Total stake' }),
  ).toBeVisible();

  await page.getByText('ALL VALIDATORS').click();
  await expect(
    page.getByRole('heading', { name: 'ESP Delegation' }),
  ).toBeVisible();
});
