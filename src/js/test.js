import {webbuilder} from './index';
import {BuilderToolbox} from './types/BuilderToolbox';
import {BuilderContainer} from './types/BuilderContainer';

webbuilder.init(new BuilderToolbox('#toolbox'),new BuilderContainer('#container'));
// Element components
webbuilder.define('testelement','element','<p>some text</p>');
// Container components
webbuilder.define('testcontainer','container','<div class="somecontainer"></div>')