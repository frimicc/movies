# Movies
Another TMDb client, this time in React Native.

Be sure to run `npm install` after cloning the repo.

## New to React Native?
1. Install [Homebrew](http://brew.sh/).
2. `brew install node`
3. `brew install watchman`
4. `npm install -g react-native-cli` (optional, but you'll want it)
5. `cd` into your clone of this repo.
6. `npm install`
7. `open ios/Movies.xcodeproj`
8. Build and Run.

## Notes for Testing

If you run using the newest iPhone devices, React Native throws warnings about invalid screen size. I assume
they'll update to include these soon.

You'll need to allow `node` to accept incoming network connections. That's the way the simulator with Watchman
works.

## Notes for Developers

This is my first React Native app. It follows the structure of the [Ray Wenderlich tutorial](https://www.raywenderlich.com/485-react-native-tutorial-building-ios-apps-with-javascript) pretty closely. It took about 3 hours to go through the tutorial and another 2.5 hours to replicate/adapt it to TMDb. It's not fancy, but it works pretty well.
