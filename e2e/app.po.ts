import { browser, by, element } from 'protractor';

export class VideoRentalAppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('vrental-root h1')).getText();
  }
}
