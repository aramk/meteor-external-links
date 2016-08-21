$.fn.extend({
  openLinksInNewWindow: function() {
    const domain = document.location.protocol + '//' + document.location.hostname;
    return $('a[href]', this).each(function() {
      const href = $(this).attr('href');
      if (href.indexOf(domain) === -1 && href.indexOf('://') >= 0) {
        $(this).attr('target', '_blank');
      }
    });
  }
});

Meteor.startup(function() {
  return _.each(Object.keys(Template), function(name) {
    const template = Template[name];
    if (name.indexOf('_') !== 0 && Blaze.isTemplate(template)) {
      return template.onRendered(function() {
        return this.$('>').openLinksInNewWindow();
      });
    }
  });
});
