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

import './patterns/atoms/input-field';
import './patterns/atoms/submit';
import './patterns/atoms/nametag';
import './patterns/atoms/section-title';
import './patterns/atoms/project-title';
import './patterns/atoms/project-subtitle';
import './patterns/atoms/keyword';
import './patterns/molecules/project';
import './patterns/molecules/keywords';
import './patterns/molecules/about-me-text';
import './patterns/molecules/projects-list';
import './patterns/organisms/contact-section';
import './patterns/organisms/projects-section';
import './patterns/organisms/about-section';
import './patterns/organisms/home-section';

hot(module);

// custom code
console.log("I'm from the entry point ui"); // eslint-disable-line

// terrificjs
$(() => {
	const application = new T.Application();
	application.registerModules();
	application.start();
});
