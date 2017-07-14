angular.module('ca.cavalierfencing.gallery')

.directive('cfGallery', function() {
  return {
    templateUrl: 'app/pages/gallery/gallery.html',
    scope: {
        photo: '='
    }
  };
});
