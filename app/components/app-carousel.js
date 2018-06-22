import Component from '@ember/component';
import { schedule } from '@ember/runloop';
import $ from 'jquery';
// import motionUI from 'motion-ui';

export default Component.extend({
    init() {
        this._super();

        schedule("afterRender", this, function() {
            $(document).foundation();
        });
    }
});
