---
layout: article
permalink: /tools/faq
title: "Web Tools FAQ"
short-title: "FAQ"
description: "FAQ and other tips for using Dart's Web Tools."
---

How do you debug an app once it has been compiled to JavaScript?
: Dart web apps are easiest to debug with an IDE, like WebStorm,
  and Dartium. However,
  the [debugging](/tools/dart2js#debugging)
  section of the dart2js documentation
  has some tips for specific browsers.

How can I write Dart code that compiles to performant JavaScript?
: See [Helping dart2js generate better
  code](/tools/dart2js#helping-dart2js-generate-efficient-code).
  Just be aware that this information might change as the implementation of
  dart2js changes.

How are floating point numbers handled when compiled to JavaScript?
: JavaScript has only one number representation: an IEEE-754 double-precision
  floating-point number. This means that any number&mdash;integer or floating
  point&mdash;is represented as a double. JavaScript has typed data arrays,
  and the mapping from native Dart typed lists to JavaScript typed arrays is trivial.

How are integers handled when compiled to JavaScript?
: Because all numbers are stored as doubles,
integers are restricted to a 53-bit precision.
Integer values in the range of -2<sup>53</sup> to 2<sup>53</sup> can be stored
without loss of accuracy.
Because JavaScript VMs play tricks
with the internal representation of numbers
(similar to those described above),
staying within smi range is still good practice.

How are typed lists handled when compiled to JavaScript?
: JavaScript offers typed arrays
that are compatible with Dart’s typed lists.
The mapping is trivial—for example,
Float32List becomes a Float32Array.
The one exception today is that dart2js does not support 64-bit integers
and thus does not support Int64List or Uint64List.
Dart code compiled via dart2js results in a runtime exception
if either of those lists is used.
