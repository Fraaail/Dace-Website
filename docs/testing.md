# Testing Guide 🧪

This project uses **Vitest** with **React Testing Library** to provide lightweight unit and component tests. Follow the steps below to run and add new tests.

## Setup

Dependencies are already declared in `package.json`:

```bash
npm install
```

(If you see a missing dependency error during the first test run, re-run `npm install`.)

## Running Tests

- Run all tests once with coverage report:
  ```bash
  npm run test
  ```
- Run in watch mode during development:
  ```bash
  npm run test:watch
  ```

Coverage output is configured via `vitest.config.ts` and will appear in the terminal and under `coverage/` when generated.

## File locations

- Test files live alongside source code in a `tests/` folder and use the `.test.ts`/`.test.tsx` suffix.
- A simple `Navbar.test.tsx` and `constants.test.ts` exist as examples.

## Writing New Tests

1. Import the component or module to test.
2. Use RTL helpers (`render`, `screen`, `fireEvent`, `waitFor`, etc.).
3. Use `describe`/`it` blocks to structure tests.
4. Keep UI tests focused on user-visible behavior rather than implementation.
5. If a test needs browser APIs such as `scrollTo` or `window.fetch`, polyfill or mock them in `vitest.setup.ts`.

## Additional Notes

- The `vitest.setup.ts` file currently imports `@testing-library/jest-dom` for extended matchers.
- JSDOM environment is used, so anything requiring a real browser (e.g. WebGL) should be mocked.

---

Feel free to expand this documentation as the test suite grows!