# Repository audit — 4 November 2026

Source reviewed: `cd5fa983123aabfc0f512f59ec36abeb6b602525` on `main`. Changes are proposed on `audit/repository-improvements-2026-11-04`; nothing was merged or deployed.

## Changes

- Reject invalid numeric addresses instead of returning negative or fractional IPv4 octets.
- Reject noninteger, zero, infinite and excessive custom output limits; permit 1–1024 rows.
- Retain the UI default of 16 rows and existing /0, /31 and /32 behavior.

## Verification

9 automated behavioral tests passed. All 4 recorded source/test checks passed. Local verification used Node.js 26.12.0 and Python 3.15.0; CI should also confirm the configured deployment versions.

- `node --test tests\network.test.js`
- `node --check for repository JavaScript files`

Local HTML asset references were compared with the complete GitHub file inventory. Real desktop/mobile visual verification was blocked in this environment: the in-app preview could not reach the local server and the desktop browser did not expose a usable window. No claim of browser/device acceptance is made. Automated DOM/canvas simulations, where present, do not replace that check.

## Remaining limits and rollout

- No authentication or database. Calculations run entirely in the browser.
