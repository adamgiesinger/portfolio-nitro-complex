/* global module */

import '@babel/polyfill';
import * as T from 'terrific';
import $ from 'jquery';
import { hot } from '@gondel/plugin-hot';

import './shared/base/security/js/security';
import './shared/base/reset/css/reset.scss';
import './shared/utils/grid/css/grid.scss';
import './shared/base/document/css/document.scss';
import './shared/base/webfonts/css/webfont-gaegu.scss';
import './shared/base/webfonts/css/webfont-playfair-display.scss';

import './patterns/atoms/box';
import './patterns/atoms/input-field';
import './patterns/atoms/submit';
import './patterns/atoms/nametag';
import './patterns/atoms/section-title';
import './patterns/atoms/project-title';
import './patterns/atoms/project-subtitle';
import './patterns/atoms/button';
import './patterns/atoms/checkbox';
import './patterns/atoms/cta';
import './patterns/atoms/datepicker';
import './patterns/atoms/gondel';
import './patterns/atoms/heading';
import './patterns/atoms/icon';
import './patterns/atoms/image';
import './patterns/atoms/list';
import './patterns/atoms/loader';
import './patterns/atoms/lottie';
import './patterns/atoms/stage';
import './patterns/molecules/example';
import './patterns/molecules/project';
import './patterns/molecules/about-me-text';
import './patterns/molecules/projects-list';
import './patterns/organisms/contact-section';
import './patterns/organisms/projects-section';
import './patterns/organisms/about-section';

hot(module);

// custom code
console.log("I'm from the entry point ui"); // eslint-disable-line

// terrificjs
$(() => {
	const application = new T.Application();
	application.registerModules();
	application.start();
});
