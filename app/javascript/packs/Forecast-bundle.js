import ReactOnRails from 'react-on-rails';

import Forecast from '../bundles/Forecast/components/Forecast';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  Forecast,
});
