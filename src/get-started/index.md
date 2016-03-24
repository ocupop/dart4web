---
layout: page
reference: new page
---

# Get Started

This is a quickstart guide to get you up and running so that you
can write Dart web apps.

## Download

To write a Dart app, you need to install the Dart SDK.
We also recommend Dartium,
a special build of Chromium with the Dart VM,
which provides faster turnaround during the development cycle.

[Download Dart and Dartium](https://dartlang.org/downloads)

## Set up Your IDE

If you don't already have a favorite IDE, we recommend WebStorm,
which comes with Dart support. You can also use a plugin to
add Dart support to other IDEs.
(See [dartlang](dartlang.org/tools) for a list of other IDEs.)

<a href="dartlang.org/tools/webstorm/">
<img src="images/webstorm.png" alt="WebStorm logo"><br>
<b>WebStorm</b>
</a>

If you have downloaded WebStorm, you need to configure
it with the paths to the Dart SDK and Dartium.

Here's one way to configure Dart support in WebStorm:

<ol>
<li>
  <p>
    Create a new Dart project:
  </p>

  <ol type="a">
    <li> From the Welcome screen, click <b>Create New Project</b>. </li>
    <li> In the next dialog, click <b>Dart</b>.</li>
  </ol>
  </li>
</li>
<br>

<li>
  <p>
    If you don't see values for the <b>Dart SDK</b> path and
    <b>Dartium</b> path, enter them.
  </p>

  <p>
    For example, the SDK path might be
    <code><em>&lt;dart installation directory></em>/dart/dart-sdk</code>,
    and the Dartium path might be
    <code><em>&lt;dartium installation directory></em>/Chromium</code>.
  </p>

<aside class="alert alert-info" markdown="1">
  <b>Note:</b>
  The <b>Dart SDK</b> path specifies the directory that
  contains the SDK's `bin` and `lib` directories;
  the `bin` directory contains tools such as `dart` and `dart2js`.
  The <b>Dartium</b> path specifies the full path to the
  `Chromium` executable that contains the Dart VM.
  WebStorm ensures that the paths are valid.
</aside>
</li>
</ol>

## Meet your tools

When you download the Dart SDK, you get a number of tools
that you will use directly or indirectly (through your IDE).

This is just a brief introduction to the most common Dart tools
that you may encounter.

* [pub](/tools/pub/)
: Every Dart app is also a package and the `pub` tool manages Dart packages.
  Pub has a number of commands. One of these commands, `pub get`,
  fetches the dependencies for your app. For example,
  an Angular Dart app would depend on the angular2 package;
  `pub get` fetches that package from the
  [pub repository](https://pub.dartlang.org/).
  The most commonly used pub commands can be accessed through WebStorm.

* [dartanalyzer](https://github.com/dart-lang/sdk/tree/master/pkg/analyzer_cli#dartanalyzer)
: Is your code free of errors and warnings? Dart's static analyzer
  evaluates and reports. WebStorm provides ongoing analysis
  of your code and lets you know if there are any problems.

* [dartfmt](https://github.com/dart-lang/dart_style#readme)
: Is your code well formatted, according to Dart style?
  Dart's formatter takes care of this for you. You can format
  the currently open file in WebStorm by right-clicking in the
  editor view and selecting **Reformat with Dart Style**.

* [dart2js](/tools/dart2js)
: Dart's JavaScript compiler builds your app so that it
  can be viewed in any browser.
  You rarely use `dart2js` directly, as the `pub build` and
  `pub serve` commands handle this for you. WebStorm provides
  a direct link to the `Build...` command, or you can right-click
  the `index.html` file and select **Open in Browser >**
  to launch your app in the selected browser.

## Write a web app

The [Avast Ye Pirates](/codelabs/ng2/) code lab walks you
through a mission critical Angular Dart app for generating
pirate name badges.

