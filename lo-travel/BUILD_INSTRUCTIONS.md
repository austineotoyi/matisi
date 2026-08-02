# LO Travel Platform — Android Build Instructions

## Environment Requirements

| Tool | Required Version | Notes |
|------|-----------------|-------|
| JDK | **17** (Temurin/Zulu/OpenJDK) | JDK 21 also works. JDK 11 or below will fail. |
| Android Studio | **Ladybug 2024.2.1** or newer | For local GUI builds only |
| Android SDK | API **35** | `compileSdkVersion` and `targetSdkVersion` |
| Android SDK | API **24** minimum | `minSdkVersion` — Android 7.0+ |
| Build Tools | **35.0.0** | |
| NDK | **27.1.12297006** | Required by React Native |
| Gradle | **8.14.3** | Provided by wrapper — do not install separately |
| Kotlin | **2.0.21** | Managed by the React Native Gradle Plugin |
| Node.js | **20 LTS** or **22 LTS** | |
| npm | **10+** | |

---

## Step-by-Step Build Guide

### 1. Clone and enter the project

```bash
git clone https://github.com/austineotoyi/Lo-travel2.git
cd Lo-travel2/artifacts/lo-travel
```

### 2. Install JavaScript dependencies

```bash
npm install --legacy-peer-deps --ignore-scripts
```

> `--ignore-scripts` skips postinstall hooks that require a native environment.

### 3. Configure local Android SDK path

Create `android/local.properties` (copy from the example):

```bash
cp android/local.properties.example android/local.properties
```

Edit `android/local.properties` to point to your SDK:

```properties
sdk.dir=/Users/YOU/Library/Android/sdk        # macOS
# sdk.dir=/home/YOU/Android/Sdk              # Linux
# sdk.dir=C\:\\Users\\YOU\\AppData\\Local\\Android\\Sdk   # Windows
```

### 4. Make gradlew executable (Linux / macOS only)

```bash
chmod +x android/gradlew
```

### 5. Build Debug APK

```bash
cd android
./gradlew assembleDebug
```

Output: `android/app/build/outputs/apk/debug/app-debug.apk`

### 6. Build Release APK (unsigned — uses debug keystore)

```bash
cd android
./gradlew assembleRelease
```

Output: `android/app/build/outputs/apk/release/app-release.apk`

> **Production signing**: For a Play Store release, generate a proper signing keystore and configure `signingConfigs.release` in `android/app/build.gradle` with your keystore credentials.

---

## Android Studio GUI Build

1. Open Android Studio
2. **File → Open** → select `artifacts/lo-travel/android/`
3. Wait for Gradle sync
4. **Build → Build Bundle(s) / APK(s) → Build APK(s)**

---

## Gradle Tasks Reference

```bash
# List all available tasks
./gradlew tasks

# Debug build (fastest, includes source maps)
./gradlew assembleDebug

# Release build (minified, R8 disabled unless enabled in gradle.properties)
./gradlew assembleRelease

# Both variants at once
./gradlew assemble

# Clean before rebuild
./gradlew clean assembleDebug

# Build with verbose logging
./gradlew assembleDebug --info

# Single architecture (faster for testing)
./gradlew assembleDebug -PreactNativeArchitectures=arm64-v8a
```

---

## Troubleshooting

### `SDK location not found`
Create `android/local.properties` with the correct `sdk.dir` path.

### `java.lang.OutOfMemoryError`
Edit `android/gradle.properties`:
```properties
org.gradle.jvmargs=-Xmx4096m -XX:MaxMetaspaceSize=1024m
```

### `JAVA_HOME is not set`
```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 17)   # macOS
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64  # Ubuntu
```

### `Command failed: node --print require.resolve(...)`
Ensure Node.js is installed and `node_modules` exists:
```bash
npm install --legacy-peer-deps --ignore-scripts
```

### Gradle daemon issues
```bash
./gradlew --stop
./gradlew assembleDebug --no-daemon
```
