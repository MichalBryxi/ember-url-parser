# Ember.js URL parser

[Web application](https://ember-url-parser.firebaseapp.com) to visualize Ember.js URLs.

## What is this good for?

All started when I had URL like:

```
http://localhost:4200/#/post/1/edit?contain=foo%3A%3Abar&status=failure&id=90a2685760bb937cf2dfa58f9648f01d8bfbe&title=baz%5B57%5D&type=foobar&duration=86400&end=1444405848&order_by=%5B%7B%22field%22%3A%22failure%22%2C%22order%22%3A%22asc%22%7D%5D&start=1444319448&summary=meow
```

And I needed to compare it to another insanely long URL. There are some URL visualizers around the net, but none supports Ember.js `locationType: 'hash'` for providing information about routes and query params. Long story short: This tool aspires to give you simple way easily extracting any data you need from Ember.js compatible URLs. Although this tool is not directly meant for parsing generic URLs, it might also help you with these.

## Features

### Visualize

![Ember.js URL visualization](/public/doc/visualize.png?raw=true "Ember.js URL visualization")

### Compare

![Compare two Ember.js URLs](/public/doc/compare.png?raw=true "Compare two Ember.js URLs")

## Running the application yourself

### Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

### Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

### Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `ember test`
* `ember test --server`

### Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
