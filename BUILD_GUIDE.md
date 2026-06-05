# Bullet Control — Mobile Build Guide

## What's in this project

```
bullet-game/
├── www/
│   └── index.html       ← The complete game (fully offline, no CDN)
├── package.json
├── capacitor.config.ts
└── BUILD_GUIDE.md
```

---

## Prerequisites

Install these once on your machine:

| Tool | Download |
|------|----------|
| Node.js (v18+) | https://nodejs.org |
| Android Studio | https://developer.android.com/studio |
| Xcode (iOS, Mac only) | App Store on Mac |

---

## Step 1 — Install dependencies

Open a terminal in the `bullet-game` folder and run:

```bash
npm install
```

---

## Step 2 — Add your target platform

**Android:**
```bash
npx cap add android
npx cap sync
```

**iOS (Mac only):**
```bash
npx cap add ios
npx cap sync
```

---

## Step 3 — Build the APK (Android)

```bash
npx cap open android
```

This opens Android Studio. Then:

1. Wait for Gradle sync to finish (first time takes a few minutes)
2. Go to **Build → Generate Signed Bundle / APK**
3. Choose **APK**
4. Create or choose a keystore (needed for signing)
5. Select **release** build variant
6. Click **Finish**

Your APK will be at:
`android/app/build/outputs/apk/release/app-release.apk`

To install directly on a connected phone (debug):
```bash
npx cap run android
```

---

## Step 4 — Build for iOS (Mac only)

```bash
npx cap open ios
```

This opens Xcode. Then:

1. Select your team under **Signing & Capabilities**
2. Connect your iPhone or choose a simulator
3. Press **Cmd+R** to run, or go to **Product → Archive** for App Store submission

---

## Publishing to stores

**Google Play Store:**
- Upload the signed `.apk` or generate an `.aab` (Android App Bundle) instead
- Needs a Google Play developer account ($25 one-time fee)

**Apple App Store:**
- Archive from Xcode → upload via Xcode Organizer
- Needs an Apple Developer account ($99/year)

---

## Testing without a store

**Android** — Enable "Install from unknown sources" on your phone, then share the `.apk` file directly via WhatsApp, email, or USB.

**iOS** — Use TestFlight (free, up to 10,000 testers) or install directly via Xcode on a connected device.

---

## App details (change in capacitor.config.ts)

| Field | Value |
|-------|-------|
| App ID | com.bulletcontrol.game |
| App Name | Bullet Control |
| Version | 1.0.0 |

---

## The game works 100% offline

No network calls, no CDN links, no API keys. Everything is in `www/index.html`.
