---
layout: guide
title: "Quick Start"
description: "A guide to get you quickly writing web apps in Dart."
---

This guide aims get you up and running so you
can write web apps using Dart.

## Install the Dart SDK and Dartium

To write a Dart app, you need to install the Dart SDK and Dartium,
a special build of Chromium with the Dart VM.
Dartium provides faster turnaround during the development cycle.

[Install Dart and Dartium]({{site.dartlang}}/install/)

## Set up your IDE

We recommend WebStorm, which comes with Dart support.
You can also use a plugin to add Dart support to other IDEs.
(See [dartlang]({{site.dartlang}}/tools) for a list of other IDEs.)

Click the WebStorm image to learn more about installing and
configuring WebStorm with the paths to the Dart SDK and Dartium.

<a href="/tools/webstorm">
<img src="{% asset_path 'webstorm.png' %}" alt="WebStorm logo"><br>
<b>WebStorm</b>
</a>

{% comment %}
## Meet your tools

When you install the Dart SDK, you get a number of tools
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
: This compiler converts your app to JavaScript so that your app
  can run in any modern browser.
  Usually, instead of running `dart2js` directly,
  you use an IDE or a command such as `pub build` or `pub serve`.
  In WebStorm, you can launch your app in whichever browser you choose
  by right-clicking `index.html` and selecting **Open in Browser >**.
  To build a deployable version of your app from within WebStorm,
  the `Build...` command.
{% endcomment %}

## Write a web app

Angular 2 is an application framework designed to make it easy to build
web applications, even large-scale applications.

Learn how to write a web app using Angular 2 for Dart in the
[Avast Ye Pirates: Write an Angular App](/codelabs/ng2/) code lab.
