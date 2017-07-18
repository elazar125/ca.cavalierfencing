angular.module('ca.cavalierfencing.event')

.directive('cfEvent', function() {
  return {
    templateUrl: 'app/components/event/event.html',
    scope: {
    	event: '='
    }
  };
});
