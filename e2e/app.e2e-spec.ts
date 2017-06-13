import { VideoRentalAppPage } from './app.po';

describe('video-rental-app App', () => {
  let page: VideoRentalAppPage;

  beforeEach(() => {
    page = new VideoRentalAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to vrental!!');
  });
});
