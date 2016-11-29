import ListingService from './listing/listing-service';

export default ( app ) => {
    const s = app.service.bind( app );
    s('ListingService', ListingService);
}