import { MoneyCounterSitePage } from './app.po';

describe('money-counter-site App', () => {
  let page: MoneyCounterSitePage;

  beforeEach(() => {
    page = new MoneyCounterSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
