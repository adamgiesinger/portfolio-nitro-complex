'use strict';

import * as T from 'terrific';
import $ from 'jquery';

// Review: not used, delete file

/**
 * information-block module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-information-block__button' };
// const stateClasses = { disabled: 'state-information-block--disabled' };

T.Module.InformationBlock = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
