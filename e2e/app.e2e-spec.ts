import { AngularGetStartPage } from './app.po';

describe('angular-get-start App', () => {
  let page: AngularGetStartPage;

  beforeEach(() => {
    page = new AngularGetStartPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
