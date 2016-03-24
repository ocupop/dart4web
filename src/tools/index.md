---
layout: page
reference: /tools
---

# Tools

The common Dart SDK tools are described on [dartlang.org](dartlang.org/xxx).
This page lists specialized tools for developing web apps.

---

<a name="tools"></a>
<h2>Dartium</h2>

Dartium is a special build of Chromium used for developing web apps.

<a href="dartium/">
<img src="images/dartium-logo-48.jpg" alt="Dart logo" /><br>
<b>Dartium</b>
</a>

---

<a name="ides"></a>
<h2>Recommended IDE</h2>

If you don't already have a favorite IDE,
we recommend WebStorm, which comes with Dart support.

<a href="dartlang.org/tools/webstorm/">
<img src="images/webstorm.png" alt="WebStorm logo"><br>
<b>WebStorm</b>
</a>

See [dartlang](dartlang.org/tools) for a list of other IDEs.

---

<a name="other-tools"></a>
<h2>Command-line tools</h2>

In addition to the [other Dart tools](dartlang.org/xxx)
included in the SDK, the following tools
offer specialized support for web programming.

<div class="row">
  <div class="col-md-4">
    <dt> <a href="dart2js.html">dart2js</a> </dt>
      <dd>Dart-to-JavaScript compiler </dd>
  </div>
  <div class="col-md-4">
    <dt> <a href="/tools/pub/">pub build</a> </dt>
      <dd>Pub command for building a web app </dd>
  </div>
  <div class="col-md-4">
    <dt> <a href="/tools/pub/">pub serve</a> </dt>
      <dd>Pub command for serving a web app </dd>
  </div>
</div>

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
<img src="images/dump-info-viewer.png" alt="sample Dump-info visualizer output">
<b>Dump-Info Visualizer</b></a>
