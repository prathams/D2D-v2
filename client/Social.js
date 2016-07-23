/*Meteor.Router.add({
  '/':'home',
  '/loadb':'loadb'
})*/
Router.route('/',{
  template: 'home'
});
Router.route('/loadb',{
  template: 'loadb'

});
Router.route('/register',{
  template: 'register'

});
Router.route('/login',{
  template: 'login'

});
Router.route('/loadb/constraints',{
  template: 'constraints'
});
Router.route('/loadb/upload',{
  template: 'upload'
});
Router.route('/loadb/layer-group',{
  template: 'layer-group'
});
Router.route('/loadb/layer-strategy',{
  template: 'layerStrategy'
});
Router.route('/loadb/criticality',{
  template: 'criticality'
});

Strategy = new Mongo.Collection('strategy');
Critical = new Mongo.Collection('critical');

if (Meteor.isClient) {
    Template.register.events({
    'submit form': function(event) {
        event.preventDefault();
        var clientVar = event.target.clientId.value;
        var emailVar = event.target.registerEmail.value;
        var passwordVar = event.target.registerPassword.value;
        Accounts.createUser({
        	client: clientVar,
            email: emailVar,
            password: passwordVar
        });
    }
});
    Template.login.events({
    'submit form': function(event,template){
        event.preventDefault();
        var clientVar = event.target.loginClient.value;
        var emailVar = event.target.loginEmail.value;
        var passwordVar = event.target.loginPassword.value;
        Meteor.loginWithPassword(emailVar, passwordVar);
    }
});
    Template.dashboard.events({
    'click .logout': function(event){
        event.preventDefault();
        Meteor.logout();
    }
});
    Template.layerStrategy.strategy = function() {
    return	Strategy.find().fetch();
    };
    Meteor.subscribe('strategy');

      Template.criticality.critical = function() {
    return	Critical.find().fetch();
    };
    Meteor.subscribe('critical');
}


if (Meteor.isServer) {
Meteor.publish('strategy', function(){
	return Strategy.find()
});
Meteor.publish('critical', function(){
	return Critical.find()
});
}