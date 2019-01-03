'use strict';

import * as T from 'terrific';
import $ from 'jquery';

/**
 * keyword module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-keyword__button' };
// const stateClasses = { disabled: 'state-keyword--disabled' };

T.Module.Keyword = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
