/**
 * User: yukku
 * Date: 2013/05/27
 */
jQuery.fn.inputsAsOne = function (args) {
    var options = jQuery.extend({
        wayback: true
    }, args);
    var selector = 'input[type="text"]';

    jQuery(this).find(selector).each(function (idx, el) {
        jQuery(el).bind('keyup', function (e) {
            var $this = jQuery(this);
            var maxlen = $this.prop('maxlength');
            var currentlen = $this.val().length;

            var $target = null;
            if (currentlen >= maxlen) {
                $target = $this.nextAll(selector)[0];
            } else if (options.wayback && currentlen === 0 && e.keyCode === 8) {
                // when backspace up
                $target = $this.prevAll(selector)[0];
            }
            if ($target) {
                $target.focus();
            }
        });
    });
};
