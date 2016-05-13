---
reference: new page

layout: guide
title: Get Started
description: "xxx"
---

This is a quickstart guide to get you up and running so you
can write Dart web apps.

## Try it!

Play with Dart in any modern browser using
[DartPad]({{site.dartlang}}/tools/dartpad).
DartPad allows you to try out Dart's language
features and core APIs.

You can't import packages into Dart, so once you are
ready to go beyond DartPad, you must download the Dart SDK.

## Install Dart SDK and Dartium

To write a Dart app, you need to install the Dart SDK.
We also recommend Dartium,
a special build of Chromium with the Dart VM,
which provides faster turnaround during the development cycle.

[Install Dart and Dartium]({{site.dart_vm}}/downloads/)

## Set up Your IDE

If you don't already have a favorite IDE, we recommend WebStorm,
which comes with Dart support. You can also use a plugin to
add Dart support to other IDEs.
(See [dartlang]({{site.dartlang}}/tools) for a list of other IDEs.)

Click the WebStorm image to learn more about downloading and
configuring WebStorm with the paths to the Dart SDK and Dartium.

<a href="/tools/webstorm">
<img src="{% asset_path 'webstorm.png' %}" alt="WebStorm logo"><br>
<b>WebStorm</b>
</a>

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

