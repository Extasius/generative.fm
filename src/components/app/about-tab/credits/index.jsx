import React from 'react';
import './credits.scss';

const supporters = [
  'theunis',
  'Lisa Sieverts',
  'Phil Langlois',
  'Casper Lourens',
  'James',
  'Anton Mironov',
  'Romain',
  'Price Comstock',
  'Jay Zehngebot',
  'Bruz Marzolf',
  'Laurent Baumann',
];
const majorSupporters = ['Brian Fountain', 'Mike Smith'];

const Credits = () => (
  <div className="credits">
    Thank you to the incredible Patrons who keep this project going:
    <div className="credits__supporters">
      {majorSupporters.map(name => (
        <div key={name} className="credits__name credits__name--major">
          {name}
        </div>
      ))}
    </div>
    <div className="credits__supporters">
      {supporters.map(name => (
        <div key={name} className="credits__name">
          {name}
        </div>
      ))}
    </div>
  </div>
);

export default Credits;