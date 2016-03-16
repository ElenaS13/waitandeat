(function() {
    'use strict';
    
    angular
        .module('app.core')
        .constant('FIREBASE_URL', 'https://torrid-heat-8701.firebaseio.com/')
        .constant('PROTECTED_PATHS', ['/waitlist']);
    
})();