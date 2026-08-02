# LO Travel Platform — Project Summary

## App Identity

| Field | Value |
|-------|-------|
| App Name | LO Travel |
| Package Name | `com.lotravelplatform` |
| Version Name | `1.0.0` |
| Version Code | `1` |
| URL Scheme | `lotravel` |
| Orientation | Portrait |

## Android SDK Configuration

| Field | Value |
|-------|-------|
| Min SDK Version | **24** (Android 7.0 Nougat) |
| Target SDK Version | **35** (Android 15) |
| Compile SDK Version | **35** |
| Build Tools Version | **35.0.0** |
| NDK Version | **27.1.12297006** |
| New Architecture | Disabled (stable old arch) |
| Hermes Engine | ✅ Enabled |
| JS Engine | Hermes |

## Framework Versions

| Framework / Tool | Version |
|-----------------|---------|
| React Native | **0.81.5** |
| Expo SDK | **54.0.36** |
| React | **19.1.0** |
| Kotlin | **2.0.21** |
| Gradle | **8.14.3** |
| Android Gradle Plugin | **8.10.x** |
| Node.js (recommended) | **20 LTS** |
| Java (required) | **17** |

## Key Dependencies

| Package | Version |
|---------|---------|
| @react-navigation/native | ^7.3.14 |
| @react-navigation/native-stack | ^7.3.0 |
| @react-navigation/bottom-tabs | ^7.3.0 |
| expo-linear-gradient | ~15.0.8 |
| expo-image | ~3.0.11 |
| expo-image-picker | ~17.0.9 |
| expo-location | ~19.0.8 |
| expo-splash-screen | ~31.0.12 |
| react-native-gesture-handler | ~2.28.0 |
| react-native-reanimated | ~4.1.1 |
| react-native-safe-area-context | ~5.6.0 |
| react-native-screens | ~4.16.0 |
| react-native-svg | 15.12.1 |
| zustand | ^5.0.3 |
| react-hook-form | ^7.54.2 |
| yup | ^1.6.1 |

## App Architecture

| Area | Detail |
|------|--------|
| Navigation | @react-navigation/native (flat stack, 163 routes) |
| State | Zustand (auth + booking draft stores) |
| Forms | react-hook-form + yup validation |
| Storage | @react-native-async-storage/async-storage |
| Data | Local mock JSON (no live backend in RC1) |
| Screens | 163 dedicated screen components |
| Services | 16 service modules (mock-backed) |

## Permissions Required

| Permission | Purpose |
|-----------|---------|
| `ACCESS_COARSE_LOCATION` | Approximate location for search |
| `ACCESS_FINE_LOCATION` | Precise location for maps |
| `INTERNET` | API calls |
| `READ_EXTERNAL_STORAGE` | Image picker |
| `WRITE_EXTERNAL_STORAGE` | Download tickets |
| `RECORD_AUDIO` | Voice search |
| `VIBRATE` | Haptic feedback |

## Build Outputs

| Variant | Path |
|---------|------|
| Debug APK | `android/app/build/outputs/apk/debug/app-debug.apk` |
| Release APK | `android/app/build/outputs/apk/release/app-release.apk` |

## Project Structure

```
artifacts/lo-travel/
├── App.tsx                  # Root component
├── index.ts                 # Expo entry point
├── app.json                 # Expo configuration
├── package.json             # JS dependencies
├── package-lock.json        # Lockfile
├── babel.config.js          # Babel config (babel-preset-expo)
├── metro.config.js          # Metro bundler config
├── tsconfig.json            # TypeScript config
├── BUILD_INSTRUCTIONS.md    # This project's build guide
├── PROJECT_SUMMARY.md       # This file
├── android/                 # Native Android project
│   ├── gradlew              # Gradle wrapper (Linux/macOS)
│   ├── gradlew.bat          # Gradle wrapper (Windows)
│   ├── build.gradle         # Top-level Gradle config
│   ├── settings.gradle      # Module settings
│   ├── gradle.properties    # Gradle + RN properties
│   ├── local.properties     # SDK path (git-ignored)
│   ├── gradle/wrapper/      # Gradle 8.14.3 wrapper
│   └── app/
│       ├── build.gradle     # App-level Gradle config
│       ├── debug.keystore   # Debug signing key
│       ├── proguard-rules.pro
│       └── src/main/
│           ├── AndroidManifest.xml
│           ├── java/com/lotravelplatform/
│           │   ├── MainActivity.kt
│           │   └── MainApplication.kt
│           └── res/         # Icons, splash, strings
├── src/
│   ├── components/          # 8 shared UI primitives
│   ├── navigation/          # RootNavigator + 163 routes
│   ├── screens/             # 163 screen components
│   ├── services/            # 16 service modules
│   ├── store/               # Zustand stores
│   ├── theme/               # Design tokens + ThemeProvider
│   ├── localData/mock/      # JSON mock data
│   ├── utils/               # Storage, formatting helpers
│   └── validators/          # Yup form schemas
└── assets/
    └── images/              # icon.png, splash.png
```
