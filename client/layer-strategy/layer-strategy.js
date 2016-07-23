Strategy = new Mongo.Collection('strategy');

if (Meteor.isClient) {
 Template.layerStrategy.helpers  ({ 
        //NOTE : 'event' is the name of variable from html template
        'event' : function () {
             //returns list of Objects for all Events
             return Strategy.find({id:'L1', rank:1}).fetch();
         },
         'event1' : function () {
             //returns list of Objects for all Events
             return Strategy.find({id:'L1',rank:2}).fetch();
         },
         'event2' : function () {
             //returns list of Objects for all Events
             return Strategy.find({id:'L1',rank:3}).fetch();
         },
         'event3' : function () {
             //returns list of Objects for all Events
             return Strategy.find({id:'L1',rank:4}).fetch();
         },
         'event4' : function () {
             //returns list of Objects for all Events
             return Strategy.find({id:'L2',rank:1}).fetch();
         },
         'event5' : function () {
             //returns list of Objects for all Events
             return Strategy.find({id:'L2',rank:2}).fetch();
         }
    });
    }