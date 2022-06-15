from typing import List

import abc 
from abc import ABC, abstractmethod 
"""
This is the interface for the expression tree Node.
You should not remove it, and you can define some classes to implement it.
"""

class Node(ABC):
    def __init__(self):
        self.left = None
        self.right = None
        
    @abstractmethod
    # define your fields here
    def evaluate(self) -> int:
        pass

class Add(Node):
    def evaluate(self):
        return self.left.evaluate() + self.right.evaluate()
    
class Subtract(Node):
    def evaluate(self):
        return self.left.evaluate() - self.right.evaluate()
    
class Multiple(Node):
    def evaluate(self):
        return self.left.evaluate() * self.right.evaluate()
    
class Divide(Node):
    def evaluate(self):
        return self.left.evaluate() // self.right.evaluate()

class Number(Node):
    def __init__(self, val):
        self.val = val

    def evaluate(self):
        return self.val

    
"""    
This is the TreeBuilder class.
You can treat it as the driver code that takes the postinfix input
and returns the expression tree represnting it as a Node.
"""

class TreeBuilder(object):
    
    def dfs(self, postfix):
        if not postfix:
            return None
        n = postfix.pop()
        if n.isdigit():
            return Number(int(n))
        else:
            if n == '+':
                node = Add()
            elif n == '-':
                node = Subtract()
            elif n == '*':
                node = Multiple()
            else: # n == '/'
                node = Divide()
            
            node.right = self.dfs(postfix)
            node.left = self.dfs(postfix)
            return node

    def buildTree(self, postfix: List[str]) -> 'Node':
        return self.dfs(postfix)
        
        
		
"""
Your TreeBuilder object will be instantiated and called as such:
obj = TreeBuilder();
expTree = obj.buildTree(postfix);
ans = expTree.evaluate();
"""

obj = TreeBuilder();

postfix = ["3","4","+","2","*","7","/"]
expTree = obj.buildTree(postfix);
ans = expTree.evaluate();
print(ans)

postfix = ["4","5","2","7","+","-","*"]
expTree = obj.buildTree(postfix);
ans = expTree.evaluate();
print(ans)


