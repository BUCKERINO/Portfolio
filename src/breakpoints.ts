/**
 * "Desktop" layout (sidebar navbar): a big screen with a mouse/trackpad, or any very wide screen.
 * Touch tablets (also in landscape, up to 1366px) get the phone layout with the top bar.
 * Keep in sync with `@custom-variant desktop` in assets/base.css and the media query in NavBar.vue.
 */
export const DESKTOP_QUERY = '(min-width: 1367px), (min-width: 1024px) and (hover: hover)';
