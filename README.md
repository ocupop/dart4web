# dart4web Website

This site uses the same tools and infrastructure as
www.dartlang.org.

## Building the site

One-time setup:

* If you're using a Mac, make sure you have Xcode 7.3 or greater.
* Ensure you have Ruby 1.9.3 or 2.0.
  Consider using [rvm](https://rvm.io/)
  to manage Ruby versions.
* Ensure you have Python 2.7.
* In a terminal, from the dartlang.org project root:
  1. Run `sudo gem install fast-stemmer -v '1.0.2'`
  2. Run `sudo gem install bundler`
  3. Run `bundle install`, which installs the gems listed in `Gemfile`
    (liquid, jekyll, etc.).

Then, to serve the site locally:

```
jekyll serve --watch
```

Navigate to localhost:4001. (www.dartlang.org is 4000)

-----
I get this error when I do the `jekyll` command:

> Dependency Error: Yikes! It looks like you don't have jekyll-assets or one of its dependencies installed. In order to use Jekyll as currently configured, you'll need to install this gem. The full error message from Ruby is: 'cannot load such file -- jekyll-assets' If you run into trouble, you can find helpful resources at http://jekyllrb.com/help/! 

The workaround I used: `bundle exec jekyll serve --watch`

-----
