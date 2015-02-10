angular.module('app', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {


    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {


  $stateProvider
    
    .state('1_1', {
      url: '/1',
      templateUrl: '1_1.html'
    })
    
    .state('page5', {
      url: '/2_1',
      templateUrl: '2_1.html'
    })
    
    .state('2_2', {
      url: '/2_2',
      templateUrl: '2_2.html'
    })
    
    .state('3_1', {
      url: '/3_1',
      templateUrl: '3_1.html'
    })

    .state('3_2', {
      url: '/3_2',
      templateUrl: '3_2.html'
    })

    .state('4_1', {
      url: '/4_1',
      templateUrl: '4_1.html'
    })    
    //datajson.InmuebleNSJP
    .state('5_1', {
      url: '/5_1',
      templateUrl: '5_1.html'
    })

    .state('5_1_1', {
      url: '/5_1_1',
      templateUrl: '5_1_1.html'
    })

    .state('5_2', {
      url: '/5_2',
      templateUrl: '5_2.html'
    })

    .state('5_3', {
      url: '/5_3',
      templateUrl: '5_3.html'
    })

    .state('5_4', {
      url: '/5_4',
      templateUrl: '5_4.html'
    })
    //datajson.Anexo1ViewModel.Anexo1
    .state('a_1', {
      url: '/a_1',
      templateUrl: 'a_1.html'
    })
    //datajson.Anexo2ViewModel.Anexo2
    .state('a_2', {
      url: '/a_2',
      templateUrl: 'a_2.html'
    })
    //datajson.Anexo3ViewModel.Anexo3
    .state('a_3', {
      url: '/a_3',
      templateUrl: 'a_3.html'
    })

    .state('a_3_1', {
      url: '/a_3_1',
      templateUrl: 'a_3_1.html'
    })
    //datajson.Anexo4ViewModel.Anexo4
    .state('a_4', {
      url: '/a_4',
      templateUrl: 'a_4.html'
    })
    //datajson.Anexo5ViewModel.Anexo5
    .state('a_5', {
      url: '/a_5',
      templateUrl: 'a_5.html'
    })
    //datajson.Anexo5ViewModel.ListSala
    .state('a_5_1', {
      url: '/a_5_1',
      templateUrl: 'a_5_1.html'
    })
    ;


  
  $urlRouterProvider.otherwise('/1');
  

});
