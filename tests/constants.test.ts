import {
  APP_NAME,
  TAGLINE,
  ADDRESS,
  PHONE_NUMBER,
  FACEBOOK_URL,
  MENU_ITEMS,
  TESTIMONIALS,
} from '../constants';

describe('Constants exports', () => {
  it('provides basic contact information', () => {
    expect(APP_NAME).toMatch(/Dace's/);
    expect(FACEBOOK_URL).toContain('facebook.com');
    expect(PHONE_NUMBER).toMatch(/\d+/);
  });

  it('exports a non-empty menu and testimonials', () => {
    expect(Array.isArray(MENU_ITEMS)).toBe(true);
    expect(MENU_ITEMS.length).toBeGreaterThan(0);
    expect(Array.isArray(TESTIMONIALS)).toBe(true);
    expect(TESTIMONIALS.length).toBeGreaterThan(0);
  });
});
