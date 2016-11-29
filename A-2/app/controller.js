import ProfileController from './profile/ProfileController';
import HelpController from './help/HelpController';
import ListingController from './listing/listing';
import NavController from './nav/nav-controller';
import SettingsController from './settings/settings';
import HomeController from './home/home';

export default (app) => {
    const c = app.controller.bind( app );
    c( 'ProfileController', ProfileController );
    c( 'HelpController', HelpController );
    c( 'ListingController', ListingController );
    c( 'NavController', NavController );
    c( 'SettingsController', SettingsController );
    c( 'HomeController', HomeController );
}

