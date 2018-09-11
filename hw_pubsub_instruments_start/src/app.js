const InstrumentFamilies = require('./models/instrument_families.js')
const SelectView = require('./views/select_view');
const InstrumentInfoView = require('./views/instrument_info_view')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();
});
