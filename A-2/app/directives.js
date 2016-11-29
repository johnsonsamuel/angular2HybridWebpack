import sideNavDirective  from './nav/side-nav';
import navMenuDirective  from './home/nav-menu-directive';

export default( app ) => {
    const d = app.directive.bind( app );

    d( 'sideNav', sideNavDirective );
    d( 'navMenu', navMenuDirective );
}