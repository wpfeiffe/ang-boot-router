import { AngBootRouterPage } from './app.po';

describe('ang-boot-router App', function() {
  let page: AngBootRouterPage;

  beforeEach(() => {
    page = new AngBootRouterPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
