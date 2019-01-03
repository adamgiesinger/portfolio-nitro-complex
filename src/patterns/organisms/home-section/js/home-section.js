'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * home-section module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-home-section__button' };
// const stateClasses = { disabled: 'state-home-section--disabled' };

T.Module.HomeSection = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
