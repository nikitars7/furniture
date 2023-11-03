import { openMenu } from './features/burger.js';
import {useDynamicAdapt} from './features/dynamicAdapt.js';
import { smoothScrollTo } from './features/smoothAnchors.js';
import { isTitleAnimated, sectionInterObserver } from './features/sectionObserver.js';
import { swiper } from './features/swiper.js';
import { initRatings } from './features/rating.js';
import { spoilerInit } from './features/spoiler.js';
import { handleHoverClick } from './script.js';
import { arrowInitSpoilers } from './script.js';
import { ibg } from './features/ibg.js';
import { formValidate } from './features/formValidate.js';
import { scrollHeader } from './script.js';
import * as ndevFunctions from './modules/functions.js';

ndevFunctions.isWebp();

handleHoverClick();
openMenu();
arrowInitSpoilers();
ibg();
formValidate()
useDynamicAdapt();
scrollHeader();
// smoothScrollTo();
// isTitleAnimated();
// sectionInterObserver();
swiper();
// initRatings();
spoilerInit();


