angular.module('ca.cavalierfencing.schedule')

.directive('cfSchedule', function() {
  return {
    templateUrl: 'app/pages/schedule/schedule.html',
    scope: {
        event: '='
    }
  };
});
