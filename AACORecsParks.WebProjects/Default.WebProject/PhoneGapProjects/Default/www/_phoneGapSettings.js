function _phoneGapSettings() { 
 return {
    "appId": "org.aacounty.aacorecsparks",
    "preferences": {
        "permissions": "none",
        "orientation": "default",
        "target-device": "tablet",
        "fullscreen": "false",
        "webviewbounce": "true",
        "prerendered-icon": "true",
        "stay-in-webview": "false",
        "ios-statusbarstyle": "black-opaque",
        "detect-data-types": "true",
        "exit-on-suspend": "false",
        "show-splash-screen-spinner": "true",
        "auto-hide-splash-screen": "true",
        "disable-cursor": "false",
        "android-minSdkVersion": "7",
        "android-installLocation": "internalOnly",
        "phonegap-version": "cli-6.0.0",
        "FadeSplashScreen": "true",
        "FadeSplashScreenDuration": "2",
        "EnableViewportScale": "true",
        "MediaPlaybackRequiresUserAction": "true",
        "AllowInlineMediaPlayback": "false",
        "TopActivityIndicator": "gray",
        "BackupWebStorage": "none",
        "iosPersistentFileLocation": "Library",
        "KeyboardDisplayRequiresUserAction": "true",
        "SurpressesIncrementalRendering": "true",
        "android-maxSdkVersion": "",
        "android-targetSdkVersion": "",
        "KeepRunning": "true",
        "splash-screen-duration": "5000",
        "ErrorUrl": "error.html",
        "LoadingDialog": "Please wait, the app is loading.",
        "LoadingPageDialog": "Please wait, the data is loading.",
        "LoadUrlTimeoutValue": "20000",
        "AndroidPersistentFileLocation": "Internal",
        "android-build-tool": "gradle"
    },
    "plugins": {
        "console": "npm",
        "media-capture": "npm",
        "file": "npm",
        "file-transfer": "npm",
        "globalization": "npm",
        "inappbrowser": "npm",
        "media": "npm",
        "network-information": "npm",
        "dialogs": "npm",
        "splashscreen": "npm",
        "x-toast": "npm",
        "whitelist": "npm",
        "camera": "npm",
        "phonegap-plugin-barcodescanner": "npm"
    }
};
}