import Ember from 'ember';

export default Ember.Component.extend({
  added: true,
  removed: true,
  method: 'diffChars',

  inlineDiff: function () {
    var diff,
        out = '',
        itemTag = 'span',
        wrapTag = '',
        added = this.get('added'),
        removed = this.get('removed'),
        a = this.get('a'),
        b = this.get('b');

    switch (this.get('method')) {
      case 'diffLines':
        itemTag = 'pre';
        console.log(a);
        console.log(b);
        diff = JsDiff.diffLines(a, b);
        break;
      case 'diffJson':
        diff = JsDiff.diffJson(a, b);
        break;
      case 'diffChars':
      default:
        diff = JsDiff.diffChars(a, b);
        break;
    }

    diff.forEach( function (part) {
      if ((added && part.added) || (removed && part.removed) || (!part.added && !part.removed)) {
        var color = part.added ? 'inline-diff-added' :
            part.removed ? 'inline-diff-deleted' : 'inline-diff-neutral';

        out += '<%@ class="%@">%@</%@>'.fmt(itemTag, color, part.value, itemTag);
      }
    });

    if (wrapTag) {
      out = '<%@>%@</%@>'.fmt(wrapTag, out, wrapTag);
    }

    return Ember.String.htmlSafe(out);
  }.property('a', 'b')
});
