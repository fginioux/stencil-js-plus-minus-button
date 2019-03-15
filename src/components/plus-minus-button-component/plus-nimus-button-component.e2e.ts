import { newE2EPage } from '@stencil/core/testing';

describe('plus-minus-button-component', () => {
  it('renders', async () => {
    const page = await newE2EPage();

    await page.setContent('<plus-minus-button-component></plus-minus-button-component>');
    const element = await page.find('plus-minus-button-component');
    expect(element).toHaveClass('hydrated');
  });
});
