---
reference: /tools
layout: page
title: Dart Tools for the Web
permalink: /tools/
---

# {{ page.title }}

The common Dart SDK tools are described on
[dartlang.org]({{site.dartlang}}/tools).
This page lists specialized tools for developing web apps.

---

<a name="tools"></a>
<h2>Dartium</h2>

Dartium is a special build of Chromium used for developing web apps.

<a href="dartium/">
<img src="{% asset_path 'dartium-logo-48.jpg' %}" alt="Dart logo" /><br>
<b>Dartium</b>
</a>

---

<a name="ides"></a>
<h2>Recommended IDE</h2>

If you don't already have a favorite IDE,
we recommend WebStorm, which comes with Dart support.

<a href="webstorm/">
<img src="{% asset_path 'webstorm.png' %}" alt="WebStorm logo"><br>
<b>WebStorm</b>
</a>

See [dartlang]({{site.dartlang}}/tools/) for a list of other IDEs.

---

<a name="other-tools"></a>
<h2>Command-line tools</h2>

In addition to the [other Dart tools]({{site.dartlang}}/tools)
included in the SDK, the following tools
offer specialized support for web programming.

* [dart2js](dart2js)
: Dart-to-JavaScript compiler

* [pub build](pub/pub-build)
: Pub command for building a web app

* [pub serve](pub/pub-serve)
: Pub command for serving a web app

---

## Other tools {#other-tools}

Many fine tools have been developed by the Dart community.
This page highlights one of them. You can find other projects and tools on
[GitHub](https://github.com/search?l=Dart&q=dart&type=Repositories).

### Curious about your generated JavaScript? {#dump-info-visualizer}

If you are compiling your Dart code to JavaScript with dart2js,
the Dump-Info Visualizer can give you insight into what is going on
behind the scenes.
Use it to analyze the generated code and see why that code is included in
your build.

<a href="https://github.com/dart-lang/dump-info-visualizer"><br>
<img src="{% asset_path 'dump-info-viewer.png' %}" alt="sample Dump-info visualizer output">
<b>Dump-Info Visualizer</b></a>
