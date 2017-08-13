import { PeaceFlowerPage } from './app.po';

describe('peace-flower App', () => {
  let page: PeaceFlowerPage;

  beforeEach(() => {
    page = new PeaceFlowerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
