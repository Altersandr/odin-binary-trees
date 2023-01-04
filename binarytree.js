class Node {
    constructor(data = null, leftChildren = null, rightChildren = null){
        this.data = data;
        this.left = leftChildren;
        this.right = rightChildren;
    }
};

class Tree {
    constructor(array){
      this.root = this.buildTree(array);
    }

    buildTree(array) {

      let left;
      let right;
      let mid;
      if(array.length <1) return null
      if(array.length <=1) return new Node(array[0])
      else{
        let start = 0;
        let end = array.length;
        mid = Math.floor((start+end)/2);
        left = array.slice(start, mid);
        right = array.slice(mid+1, end)
      }
        left = this.buildTree(left);
        right = this.buildTree(right);
        return new Node(array[mid], left, right);
    }

    insert(value) {
      let current = this.root;
      let prev = null;
      let node = new Node(value);
      while(current){
        if(value < current.data){
          prev = current;
          current = current.left
        }
        else if(value > current.data){
          prev = current;
          current = current.right;
        }
      }
      if(value < prev.data) prev.left = node;
      else prev.right = node;

        }

    delete(value, current = this.root) {
      
      if(current ==null) return current
      else if(value<current.data) current.left = this.delete(value, current.left);
      else if(value>current.data) current.right = this.delete(value, current.right);
      else{
        if(current.left ==null && current.right == null){
          current = null;
        }else if(current.left == null){
          current = current.right;
        }else if (current.right == null){
          current = current.left;
        }else{
          let temp = this.findMin(current.right);
          current.data = temp.data;
          current.right = this.delete(temp.data, current.right)

        }
      }
      return current
    }
    findMin(root){
      while(root.left!==null) root = root.left;
      return root;
    }
     
    find(value, current = this.root){
        if(current ==null) return null
        if(current.data ==value) return current
        else if(value<current.data) return this.find(value, current.left)
        else return this.find(value, current.right)

    }

    levelOrder(root= this.root){
      if(root==null)return console.log(array)
      let array = []
      let queue = [];
      queue.push(root);
      while(queue[0]!==undefined){
        let current = queue[0];
        array.push(current.data)
        if(current.left!==null)queue.push(current.left);
        if(current.right!==null)queue.push(current.right);
        queue.shift()
      }

      return array
    }

    preorder(root= this.root, result = []){
      if(root==null) return
      result.push(root.data)
      this.preorder(root.left, result)
      this.preorder(root.right, result)
      return result
    }

    inorder(root= this.root, result = []){
      if(root==null)return 
      this.inorder(root.left, result)
      result.push(root.data)
      this.inorder(root.right, result)
      return result
    }

    postorder(root= this.root, result = []){
      if(root==null)return 
      this.postorder(root.left, result)
      this.postorder(root.right, result)
      result.push(root.data)
      return result
    }

    depth(node, current = this.root, depth = 0){

      if(current.data == node) return depth
      else if(node <current.data) return this.depth(node, current.left, depth+=1)
      else return this.depth(node, current.right, depth+=1)
 
    }
    height(node, current = this.find(node)){

      if(current == null) return 0
      if(current.left==null && current.right ==null) return 0;

      let leftHeight = this.height(node, current.left)
      let rightHeight = this.height(node, current.right)

      return Math.max(leftHeight, rightHeight)+1;
    }

    isBalanced(node = this.root){
    
      if(node==null) return 0;

      let leftHeight = this.isBalanced(node.left);
      if(leftHeight==-1) return -1;

      let rightHeight = this.isBalanced(node.right);
      if(rightHeight==-1) return -1;
      if(Math.abs(leftHeight-rightHeight)>1)return -1
      else return Math.max(leftHeight, rightHeight)+1

    }

    rebalance(){
      const newTree = this.inorder(binaryTree.root)
      binaryTree = new Tree(newTree)
      prettyPrint(binaryTree.root);
      return binaryTree
    }
            
};

const ar =  [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const sorted = sortArray (ar);

function sortArray (array){
  return [...new Set (array.sort((a, b) => a < b ? -1 : 0))];
}

let binaryTree = new Tree(sorted);

prettyPrint = (node, prefix = '', isLeft = true) => {

  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

// prettyPrint(binaryTree.root)

binaryTree.insert(24);
binaryTree.insert(340);
binaryTree.insert(25);
binaryTree.insert(2);
binaryTree.insert(100);
binaryTree.insert(99);
binaryTree.insert(98);
binaryTree.insert(97);
binaryTree.insert(96);
binaryTree.insert(200);
binaryTree.insert(7754);
// prettyPrint(binaryTree.root)
// binaryTree.delete(23);
// binaryTree.delete(1);
// binaryTree.delete(98);
binaryTree.delete(200);

// binaryTree.preorder(binaryTree.root)

// binaryTree.inorder(binaryTree.root)
// binaryTree.height(97);

// binaryTree.levelOrder(binaryTree.root)

// binaryTree.rebalance();

// binaryTree.isBalanced()
// else console.log(false)

// prettyPrint(binaryTree.root)


module.exports 

