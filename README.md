# Movies
Another TMDb client, this time in React Native.
Movie listings provided by [The Movie Database API](https://www.themoviedb.org/documentation/api).

## Features

* Search for movies by title.
* Listing shows the poster, title, and description.

## Future Features

If I had time, I'd fix/add the following, but I needed to get somethign working in about 4 hours.

* Master-Detail views.
* Paging. Currently only the first page of results, up to 20 items, is shown.
* Animations.
* Change the search box to be at the top of the results list instead of a separate page.
* Add an icon.

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
9. You'll see a Terminal window open up with "Metro Builder". This is the thing that turns JS -> Native components.
   Don't close it until you're done testing.

## Notes for Testing

If you run using the newest iPhone devices, React Native throws warnings about invalid screen size. I assume
they'll update to include these soon.

You'll need to allow `node` to accept incoming network connections. That's the way the simulator with Watchman
works. Running on an actual device doesn't require Watchman, so I've set the project up for that way of testing
right now.

## Notes for Developers

This is my first React Native app. It follows the structure of the [Ray Wenderlich tutorial](https://www.raywenderlich.com/485-react-native-tutorial-building-ios-apps-with-javascript) pretty closely. It took about 3 hours to go through the tutorial and another 2.5 hours to replicate/adapt it to TMDb. It's not fancy, but it works pretty well.

There are a ton of warnings showing upon building the app. These look like mostly React Native not being fully
compatible with Swift 4.2 and Xcode 10. They don't affect the running, but should be fixed so they don't make us
ignore any real errors in the long list.


