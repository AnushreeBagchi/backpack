import React, { PropTypes } from 'react';

import SideNavLayout from './../SideNavLayout';
import * as routes from './../../constants/routes';

const links = [
  {
    category: 'Bonds',
    links: [
      { route: routes.COLORS, children: 'Colors' },
      { route: routes.TYPESETTING, children: 'Typesetting' },
      { route: routes.LAYOUT, children: 'Layout' },
      { route: routes.RADII, children: 'Radii' },
      { route: routes.SHADOWS, children: 'Shadows' },
      { route: routes.ANIMATION, children: 'Animation' },
    ],
  },
  {
    category: 'Atoms',
    links: [
      { route: routes.TYPOGRAPHY, children: 'Typography' },
      { route: routes.BUTTONS, children: 'Buttons' },
      { route: routes.ICONS, children: 'Icons' },
      { route: routes.SPINNERS, children: 'Spinners' },
      { route: routes.FORMS, children: 'Forms' },
      { route: routes.CARDS, children: 'Cards' },
      { route: routes.BADGE, children: 'Badge' },
      { route: null, children: 'Illustrations' },
      { route: null, children: 'Image' },
    ],
  },
  {
    category: 'Molecules',
    links: [
      { route: routes.NOTIFICATIONS, children: 'Notifications' },
      { route: routes.MODALS, children: 'Modals' },
      { route: routes.AUTOSUGGEST, children: 'Autosuggest' },
      { route: routes.POPOVERS, children: 'Popovers' },
      { route: routes.CALENDAR, children: 'Calendar' },
      { route: routes.DATEPICKER, children: 'Datepicker' },
      { route: routes.TOOLTIPS, children: 'Tooltips' },
      { route: routes.ACCORDIONS, children: 'Accordions' },
      { route: routes.NUDGERS, children: 'Nudgers' },
      { route: routes.PROGRESS, children: 'Progress bars' },
      { route: routes.TICKETS, children: 'Tickets' },
      { route: null, children: 'Pagination' },
      { route: null, children: 'Slider' },
      { route: null, children: 'Carousel' },
      { route: null, children: 'Toast' },
      { route: null, children: 'Horizontal navigation' },
      { route: null, children: 'Vertical navigation' },
      { route: null, children: 'Overflow navigation' },
      { route: null, children: 'Breadcrumbs' },
      { route: null, children: 'Numerical rating' },
      { route: null, children: 'Star rating' },
      { route: null, children: 'Flight itinerary' },
      { route: null, children: 'Bar chart' },
      { route: null, children: 'Filters' },
    ],
  },
];

const DocsLayout = ({ children }) => <SideNavLayout links={links}>{children}</SideNavLayout>;

DocsLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default DocsLayout;
