import template from './app.pug';

const rootElemet = $('#app');
// get data attributes from parent div
const data = rootElemet.data();
// render pug template with data
rootElemet.html(template(data.json));
