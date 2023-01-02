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
        }
        if(value==current.data && side =="left") return prev.left = null;
        else if(value==current.data && side =="right") return prev.right = null;
      } 
    }
      
       

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
binaryTree.insert(7754);
prettyPrint(binaryTree.root)
binaryTree.delete(25);
binaryTree.delete(1);
prettyPrint(binaryTree.root)


