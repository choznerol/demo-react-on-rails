import ReactOnRails from 'react-on-rails';

import { ConnectedClassroom as Classroom } from '../bundles/Classroom/ConnectedClassroom';

// This is how react_on_rails can see the Classroom in the browser.
ReactOnRails.register({
  Classroom,
});
