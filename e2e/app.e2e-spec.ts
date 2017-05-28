import { ToolsAppPage } from './app.po';

describe('tools-app App', () => {
  let page: ToolsAppPage;

  beforeEach(() => {
    page = new ToolsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
