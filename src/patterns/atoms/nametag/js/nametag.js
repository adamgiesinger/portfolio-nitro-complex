'use strict';

import * as T from 'terrific';
import $ from 'jquery';

// Review: not needed, delete file

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
