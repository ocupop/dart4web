---
layout: guide
title: Dart4Web Guides
permalink: /guides/future-guides
---

Where can you learn more about web programming with Dart?

This page has some tips for debugging, testing, and
deploying your web application.

## Debug

TBD...  Right now all we can talk about is:

* WebStorm debugging support
* JavaScript console
* src maps

## Test

Use the [test](https://pub.dartlang.org/packages/test) package
to write and run tests in Dart.

## Deploy

Use the
[dart_to_js_script_rewriter](https://pub.dartlang.org/packages/dart_to_js_script_rewriter)
transformer when building an app for deployment.
This transformer rewrites your Dart script tags to JavaScript script tags,
eliminating 404s and speeding up initial loads.
Make sure that this transformer is listed last in the
`transformer:` section of your pubspec file.



---

xxx: We need more material here...
  What about relevant samples?
