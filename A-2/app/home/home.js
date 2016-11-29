export default  [ '$scope','FooterService', function( $scope, FooterService ){
  $scope.title = "I am Angular1 app with title";
  $scope.title = FooterService.getFooterContent();
}];
