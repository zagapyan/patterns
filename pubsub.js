const events = (function(){
  const topics = {};
  const hOP = topics.hasOwnProperty;

  return {
    subscribe: function(topic, listener) {
      // Create the topic's object if not yet created
      if(!hOP.call(topics, topic)) topics[topic] = [];

      // Add the listener to queue
      const index = topics[topic].push(listener) -1;

      // Provide handle back for removal of topic
      return {
        remove: function() {
          delete topics[topic][index];
        }
      };
    },
    publish: function(topic, info) {
      // If the topic doesn't exist, or there's no listeners in queue, just leave
      if(!hOP.call(topics, topic)) return;

      // Cycle through topics queue, fire!
      topics[topic].forEach(function(item) {
                item(info != undefined ? info : {});
      });
    },
    topics: ()=>topics
  };
})();

const eventsObj = events;
eventsObj.subscribe('cats', (obj)=> console.log(obj));
eventsObj.subscribe('bunnies', (obj)=> console.log(obj));

eventsObj.publish('cats', 'There is a black cat on the loose!!!');
eventsObj.publish('cats', 'A black cat is spotted lurking in an alley.')
eventsObj.publish('bunnies', 'There is a brown bunny that is anxious...');

console.log(eventsObj.topics());