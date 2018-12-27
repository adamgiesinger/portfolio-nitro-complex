'use strict';

import * as T from 'terrific';
import $ from 'jquery';

// Review: not needed, delete file

/**
 * project-title module implementation.
 *
 * @author Adam Giesinger <adam.giesinger@namics.com>
 */

// const selectors = { button: '.js-project-title__button' };
// const stateClasses = { disabled: 'state-project-title--disabled' };

T.Module.ProjectTitle = T.createModule({
	start(resolve) {
		const $ctx = $(this._ctx);

		resolve();
	},
});
