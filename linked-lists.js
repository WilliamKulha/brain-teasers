//If you put all of the class methods inside the class definition (after the constructor etc etc) every time the class is instantiated, it's creating
//Its own private versions of those functions. This turns into a memory nightmare if there are a bunch of these objects being created.
//Pulling them out into the prototype means they're only instantiated once.
function LinkedList() {
  this.head = null;
}

LinkedList.prototype.isEmpty = function() {
  return (this.head === null);
};

LinkedList.prototype.size = function() {
  let count = 0;
  let currentNode = this.head;
  while(currentNode.next) {
    currentNode = currentNode.next;
    count++;
  }
  return count;
};

LinkedList.prototype.prepend = function(val) {
  let newNode = {
    data: val,
    next: this.head
  };
  this.head = newNode;
};

LinkedList.prototype.append = function(val) {
  let newNode = {
    data: val,
    next: null
  }
  if (this.isEmpty()){
    this.head = newNode;
  }
  let currentNode = this.head;
  while (currentNode.next !== null) {
    currentNode = currentNode.next;
  }
  currentNode.next = newNode;
}

LinkedList.prototype.contains = function(val) {
  let currentNode = this.head;
  while (currentNode !== null) {
    if (currentNode.val === val) {
      return true
    }
    currentNode = currentNode.next;
  }
  return false;
};

LinkedList.prototype.remove = function(val) {
  if (!this.contains(val)) {
    return;
  }

  if (this.head.data === val) {
    this.head = this.head.next;
    return;
  }

  let prev = null;
  let currentNode = this.head;
  while(currentNode.data != val) {
    prev = curretnNode;
    curretnNode = currentNode.next;
  }
  prev.next = currentNode.next;
}


