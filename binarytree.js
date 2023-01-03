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

    delete(value) {
      let current = this.root;
      let prev = null;
      let side;
      let toRemove;
      //i go inside the loop, my current is my root, check if the root value is
      //bigger or smaller, if equal, set my current to null, 
      //if smaller go left, else go right.
      while(current){
        // console.log(current)

        if(value < current.data && current!=null){
          prev = current;
          current = current.left
          side = "left";
        }
        else if(value > current.data && current!=null){
          prev = current;
          current = current.right;
          side = "right"
        }else{

          //to delete a node with 2 children you first go to the right of the node
          //then recursively go to left to find the next just bigger node
          //once you find it make that node the new parent of the children

          if(value==current.data&&current.left!==null) return prev.left = current.left;
          if(value==current.data&&current.right!==null) return prev.right = current.right;
          if(value==current.data && side =="left") return prev.left = null;
          else if(value==current.data && side =="right") return prev.right = null;
        }
      } 
    }

    find(value, current = this.root){
        if(current.data ==value) return current
        else if(value<current.data) return this.find(value, current.left)
        else return this.find(value, current.right)
    }

    levelOrder(root){
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

      return console.log(array)
    }

    preorder(root, result = []){
      if(root==null) return
      result.push(root.data)
      this.preorder(root.left, result)
      this.preorder(root.right, result)
      return result
    }

    inorder(root, result = []){
      if(root==null)return 
      this.preorder(root.left, result)
      result.push(root.data)
      this.preorder(root.right, result)
      return result
    }

    postorder(root, result = []){
      if(root==null)return 
      this.preorder(root.left, result)
      this.preorder(root.right, result)
      result.push(root.data)
      return result
    }

    depth(node, current = this.root, depth = 0){

      if(current.data == node) return depth
      else if(node <current.data) return this.depth(node, current.left, depth+=1)
      else return this.depth(node, current.right, depth+=1)
 
    }
    // height(node, height = 0){
    //   let current = this.find(node);
    //   let leftHeight;
    //   if(current.left!==null) return leftHeight = this.height(current.left, height+=1)
    //   return node;
    // }
            
};

const ar =  [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const ar1 = [1, 2, 3, 4];

const sorted = sortArray (ar);

function sortArray (array){
  return [...new Set (array.sort((a, b) => a < b ? -1 : 0))];
}

const binaryTree = new Tree(sorted);

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
prettyPrint(binaryTree.root)
binaryTree.delete(23);
// binaryTree.delete(1);
binaryTree.delete(98);
binaryTree.delete(200);

binaryTree.preorder(binaryTree.root)

binaryTree.inorder(binaryTree.root)

// binaryTree.levelOrder(binaryTree.root)
prettyPrint(binaryTree.root)




