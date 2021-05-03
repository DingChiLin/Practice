const PriorityQueue = require('js-priority-queue');

var queue = new PriorityQueue({ comparator: function(a, b) { return b - a; }});
queue.queue(5);
queue.queue(3);
queue.queue(2);
var lowest = queue.dequeue(); // returns 5
console.log(lowest)
