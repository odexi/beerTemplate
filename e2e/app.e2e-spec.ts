import { BeerTemplatePage } from './app.po';

describe('beer-template App', function() {
  let page: BeerTemplatePage;

  beforeEach(() => {
    page = new BeerTemplatePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
