'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * about-me-text module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-about-me-text__button' };
// const stateClasses = { disabled: 'state-about-me-text--disabled' };

T.Module.AboutMeText = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
