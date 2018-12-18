'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * submit module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-submit__button' };
// const stateClasses = { disabled: 'state-submit--disabled' };

T.Module.Submit = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
