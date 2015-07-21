'use strict'
angular.module('MusicAPp')
  .factory('FirebaseAuthenticate',['$firebaseArray', '$firebaseObject', '$location', 'FIREBASE_URL', '$state', function ($firebaseArray, $firebaseObject, $location, FIREBASE_URL, $state) {



    var ref  = new Firebase(FIREBASE_URL);

    var User = {
      register: function(user){
        console.log(user.email)
        ref.createUser({
          email    : user.email,
          password : user.password
        }, function(error, userData) {
          if (error) {
            console.log("Error creating user:", error);
          } else {
            console.log("Successfully created user account with uid:", userData.uid);
            this.createProfile(userData)
            $location.path('/app.profile');
          }
        });
      },
      createProfile: function (user) {
        var profile = {
          username: user.username,
          md5_hash: user.md5_hash
        };

        var profileRef = $firebase(ref.child('profile'));
        console.log('creating profile!')
        return profileRef.$set(user.uid, profile);
      },
      login: function(user){
        console.log(user)
        ref.authWithPassword({
          email    : user.email,
          password : user.password
        }, function(error, authData) {
          console.log('the user authData', authData)
          if (error) {
            console.log("Login Failed!", error);
          } else {
            console.log("Authenticated successfully with payload:", authData);
            $state.go('app.profile');
          }
        },{
          remember: "sessionOnly"
        }) 
      },
      logout: function(){
        ref.unauth()
      },
      checkState: function(){
        var authData = ref.getAuth();
        if (authData) {
          console.log("User " + authData.uid + " is logged in with " + authData.provider);
        } else {
          console.log("User is logged out");
          $location.path('/login')
        }
      }
    }
  return User
  }])