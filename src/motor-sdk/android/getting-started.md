# Getting Started

This guide assumes you're familiar with Android development and [Android Studio](https://developer.android.com/studio/intro).

## Project Setup

Start by creating a new project. 
<img src="https://raw.githubusercontent.com/sonr-io/docs/main/assets/new-project.png" width="100%" />

Next, grab the latest version of Motoroid from [Jitpack.io](https://jitpack.io/#sonr-io/motor-android). Select the "motoroid" subproject and follow the instructions to finish adding the dependency.

Your project level `build.gradle` should look like this when you're done...
<img src="https://raw.githubusercontent.com/sonr-io/docs/main/assets/build-gradle.png" width="100%" />

...and your `:app` level `build.gradle` should look like this.
<img src="https://raw.githubusercontent.com/sonr-io/docs/main/assets/build-gradle-app.png" width="100%" />

Note: You may need to delete the `dependencyResolutionManagement` section from `settings.gradle` if you receive an error.

## Initialization

With Motoroid added to your project, all you need to do is initialize the `Motoroid` instance and you'll have access to a singleton throughout the lifetime of your application! It's a good idea to do this early on the lifetime of your app. For example, in your app's `onCreate` handler.

```java
...
import io.sonr.motoroid.Motoroid;

...

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    // Initialize motor
    try {
        Motoroid.init(getApplicationContext());
    } catch (Exception e) {
        e.printStackTrace();
    }

    ...
}
```

You're ready to start using Motor in your app! Check out one of the guides for next steps.

* [Authentication](./authenticate.md)
* [Documents](./documents.md)
* [Buckets](./buckets.md)
* [Updating Buckets](./updating-buckets.md)
* [API Reference](./reference.md)
