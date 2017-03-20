import { OrderNowBackEndPage } from './app.po';

describe('order-now-back-end App', () => {
  let page: OrderNowBackEndPage;

  beforeEach(() => {
    page = new OrderNowBackEndPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
