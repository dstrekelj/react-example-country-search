import { configure } from '@kadira/storybook';

var components = require.context('../src/stories', true, /\.(js|jsx)$/)

configure(() => components.keys().forEach(components), module);
