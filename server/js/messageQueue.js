const messages = []; // the storage unit for messages

module.exports.enqueue = (message) => {
  console.log(`Enqueing message: ${message}`);
  messages.push(message);
  console.log(messages);
};

module.exports.dequeue = () => {
  // returns undefined if messages array is empty
  if (messages.length > 0) {
    console.log(`Dequeing message: ${messages[0]}`);
    let command = messages.shift();
    console.log(messages);
    return command;
  } else {
    return 'failed';
  }
};

/*
refactor server receiving a command.
When server receives a key command, it's currently console loggin' the command received
We need server command receipt to invoke enqueue
We should have clinet  sed get request invoke dequeue
  and execute the command received from the queue



*/
