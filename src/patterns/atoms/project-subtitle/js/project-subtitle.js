'use strict';

import * as T from 'terrific';
import $ from 'jquery';

// Review: not needed, delete file

/**
 * project-subtitle module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-project-subtitle__button' };
// const stateClasses = { disabled: 'state-project-subtitle--disabled' };

T.Module.ProjectSubtitle = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
