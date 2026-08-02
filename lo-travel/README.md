# LO Travel Platform

A full-featured React Native (Expo SDK 54) travel super-app for Android. Book flights, hotels, tours, car rentals, and visas — all in one app.

## Features

- ✈️ **Flights** — Search, compare, and book flights
- 🏨 **Hotels** — Browse and reserve hotels worldwide
- 🗺️ **Tours** — Discover and book guided tours
- 🚗 **Car Rentals** — Reserve vehicles at your destination
- 🛂 **Visa Services** — Apply for travel visas
- 💳 **Wallet** — Manage travel credits and bookings
- 📋 **E-Tickets** — QR-code boarding passes and vouchers
- 🔔 **Notifications** — Booking confirmations and alerts
- 🎧 **Support** — In-app customer support

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React Native 0.81.5 + Expo SDK 54 |
| Language | TypeScript 5.3 |
| Navigation | @react-navigation/native (163 screens, flat stack) |
| State | Zustand |
| Forms | react-hook-form + yup |
| Storage | AsyncStorage |
| UI | Custom design token system (navy `#1C2374` → purple `#A53BFF`) |
| Engine | Hermes JS |

## Quick Start (Expo Go — no build required)

```bash
npm install --legacy-peer-deps --ignore-scripts
npx expo start
```

Scan the QR code with **Expo Go** (Android or iOS).

## Build Android APK

See [BUILD_INSTRUCTIONS.md](./BUILD_INSTRUCTIONS.md) for the full guide.

```bash
npm install --legacy-peer-deps --ignore-scripts
cd android
./gradlew assembleDebug
```

APK output: `android/app/build/outputs/apk/debug/app-debug.apk`

## GitHub Actions CI

Every push to `main` triggers an automated APK build.  
Download the APK from: **Actions → Build Android APK → Artifacts → Lo-Travel-Debug**

See [.github/workflows/android-build.yml](.github/workflows/android-build.yml) for the workflow definition.

## Project Structure

```
src/
├── components/     8 shared UI primitives
├── navigation/     RootNavigator (163 routes) + MainTabNavigator
├── screens/        163 screen components
├── services/       16 service modules (mock data in RC1)
├── store/          Zustand stores (auth, booking draft)
├── theme/          Design tokens + ThemeProvider
├── localData/      Mock JSON data for all 16 services
├── utils/          Storage wrappers, formatters
└── validators/     Yup schemas for all forms
```

## Architecture Notes

- **Navigation**: Uses `@react-navigation/native` with a flat stack (all 163 routes at root level). Expo Router is bypassed via `"main": "index.ts"` + `registerRootComponent`.
- **Backend**: RC1 runs entirely on local mock JSON. Each service has `// TODO: Replace with production endpoint` markers ready for the Node.js/Express/MySQL backend.
- **No native modules**: Only `expo-*` packages are used — the app runs in Expo Go for development.

## Roadmap

- **RC1** — Current: full UI, 163 screens, mock data, Android APK
- **Phase 2** — Node.js/Express + MySQL backend, real flight/hotel APIs (Amadeus, Duffel, Sabre), payment gateway
