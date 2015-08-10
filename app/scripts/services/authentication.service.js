'use strict'
angular.module('MusicAPp')
  .factory('FirebaseAuthenticate',['$firebaseArray', '$firebaseObject', '$location', 'FIREBASE_URL', '$state', function ($firebaseArray, $firebaseObject, $location, FIREBASE_URL, $state) {



    var ref  = new Firebase(FIREBASE_URL);
    var usersRef = ref.child("profiles");

    function escapeEmailAddress(email) {
      if (!email) return false

      // Replace '.' (not allowed in a Firebase key) with ',' (not allowed in an email address)
      email = email.toLowerCase();
      email = email.replace(/\./g, ',');
      return email;
    }
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
            User.createProfile(user)
            User.login(user);
          }
        });
      },
      createProfile: function (user) {


        usersRef.set({
          username: user.email,
          doe: "20/08/2015"
        });

        // console.log(user)
        // var profile = {
        //   username: user.username,
        //   md5_hash: user.md5_hash
        // };
        // // fix this!!!
        // var profileRef = ref.child('profile');
        // console.log('creating profile!', profileRef);
        // return profileRef.$set(user.uid, profile);
      },
      getProfile: function(){
        
      },
      updateProfile: function(userEmail, profile){
        console.log('the email', userEmail);
        console.log('the passsed in profile', profile);
        var userProfile = usersRef.child(escapeEmailAddress(userEmail));
        userProfile.set({ email: userEmail, name: profile.name, bio: profile.bio, theme: profile.theme });
        // userProfile.set({ email: 'hello@hello.com', name: 'Alex', phone: 12912912 });
        // usersRef.child(userEmail).set({
        //   profileName: profile.name,
        //   bio: profile.bio
        // });
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
        $location.path('/home')
      },
      checkState: function(){
        var authData = ref.getAuth();
        if (authData) {
          console.log(authData);
          console.log("User " + authData.uid + " is logged in with " + authData.provider);
          return authData
        } else {
          console.log("User is logged out");
          $location.path('/login')
        }
      }
    }
  return User
  }])