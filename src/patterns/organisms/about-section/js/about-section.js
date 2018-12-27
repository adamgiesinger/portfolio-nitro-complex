'use strict';

import * as T from 'terrific';
import $ from 'jquery';

// Review: not needed, delete

/**
 * about-section module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-about-section__button' };
// const stateClasses = { disabled: 'state-about-section--disabled' };

T.Module.AboutSection = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
