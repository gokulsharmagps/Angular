import { SIH2018Page } from './app.po';

describe('sih2018 App', function() {
  let page: SIH2018Page;

  beforeEach(() => {
    page = new SIH2018Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
