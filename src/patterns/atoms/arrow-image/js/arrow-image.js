'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * arrow-image module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-arrow-image__button' };
// const stateClasses = { disabled: 'state-arrow-image--disabled' };

T.Module.ArrowImage = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
