// Node
class Node {
    constructor(data) {
		this.data = data;
		this.next = null;
    }
}

// What you need to do
class LinkedList {
	constructor() {
		this.head = null;
	}

	append(data) {
		if (this.head == null) {
			this.head = new Node(data);		
		} else {
			let cur = this.head;
			while(cur.next != null) {
				cur = cur.next;
			}
			cur.next = new Node(data);	
		}
	}

	print() {
		let cur = this.head;
		while(cur) {
			console.log(cur.data);
			cur = cur.next;
		}	
	}

}

let linked_list = new LinkedList()
linked_list.append(1)
linked_list.append(2)
linked_list.append(3)
linked_list.print()

