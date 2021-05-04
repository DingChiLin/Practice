class ListNode:
	def __init__(self, val = None):
		self.val = val
		self.next = None

class LinkedList:
	def __init__(self):
		self.head = ListNode()

	def add(self, value):
		node = ListNode(value)
		node.next = self.head.next
		self.head.next = node

	def remove(self):
		self.head.next = self.head.next.next

	def print(self):
		cur = self.head.next
		while(cur != None):
			print(cur.val)
			cur = cur.next

linked_list = LinkedList()
linked_list.add(1)
linked_list.add(3)
linked_list.add(5)
linked_list.add(7)
linked_list.remove()
linked_list.print() # 5,3,1

