$(function() {
  var $button = $('#copy-button');
  $button.updateTooltip = function(title) {
    return this
    .attr('title', title)
    .tooltip('fixTitle');
  };

  $button.updateTooltip($button.data('before'))
    .zclip({
      path: $button.data('movie'),
      copy: function() {
        return $('#copy-text').val();
      },
      afterCopy: function(){
        $button
          .updateTooltip($button.data('after'))
          .tooltip('show');
        setTimeout(function(){
          $button
            .tooltip('hide')
            .updateTooltip($button.data('before'));
        }, 1000);
      }
    });
  $button[0].hide = function() {};
});
