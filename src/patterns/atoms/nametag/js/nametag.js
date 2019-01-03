'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * nametag module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-nametag__button' };
// const stateClasses = { disabled: 'state-nametag--disabled' };

T.Module.Nametag = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});

window.onscroll = function() {
	nameScroll();
};

function nameScroll() {
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	const name = document.getElementsByClassName('a-nametag__h1')[0];

	name.style.opacity = 1 - scrollTop / 400;
}
