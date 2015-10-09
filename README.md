# Ember.js URL parser

[Web application](https://ember-url-parser.firebaseapp.com) to visualize Ember.js URLs.

## What is this good for?

All started when I had URL like (scroll right):

```
http://localhost:4200/#/post/1/edit?contain=foo%3A%3Abar&status=failure&id=90a2685760bb937cf2dfa58f9648f01d8bfbe&title=baz%5B57%5D&type=foobar&duration=86400&end=1444405848&order_by=%5B%7B%22field%22%3A%22failure%22%2C%22order%22%3A%22asc%22%7D%5D&start=1444319448&summary=meow
```

And I needed to compare it to another insanely long URL. There are some URL visualizers around the net, but none supports Ember.js `locationType: 'hash'` for providing information about routes and query params. Long story short: This tool aspires to give you simple way easily extracting any data you need from Ember.js compatible URLs. Although this tool is not directly meant for parsing generic URLs, it might also help you with these.

## Features

### Visualize

Break down URL into individual pieces and see them one-by-one. Generic URL parts is highlighted by blue, whereas Ember.js by orange.

![Ember.js URL visualization](/public/doc/visualize.png?raw=true "Ember.js URL visualization")

### Compare

Paste two URLs and see the difference. On the top you will see standard diff where green are additions and red are deletions.

On the bottom you can see table which shows first URL on the left and highlights all parts which are deleted in the second URL. And on the right is second URL with highlighted parts which are added in the second URL.

![Compare two Ember.js URLs](/public/doc/compare.png?raw=true "Compare two Ember.js URLs")

## Disclaimer

Currently this is more of a proof - of - concept hacky implementation, which holds together with roll of ducttape and a good will. There are absolutely no (useful) tests. It it most likely that on any unusual input the application will just blow into your face. And that's fine. Raise an issue, create a feature proposal ticket, submit a pull request. I'm happy to move this thing forward. It is currently doing everything I need it to do.

I created this app partly as a demonstration of Ember.js v1.13.8 application for [this guy](https://plus.google.com/118250312679392585749/about). Give him a high five, if you are reading this 😘

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
