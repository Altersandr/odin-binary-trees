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
      let root;
      let left;
      let right;
      let mid;
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
        return root = new Node(array[mid], left, right);
    }

    insert(value) {
      let current = this.root;
      console.log(current)
      while(current.data){
        if(value < current.data){
          current = current.left 
        }else{
        current = current.right
        }
      }
      current = new Node(value);
    }

};

const ar =  [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];

const ar1 = [1, 2, 3, 4];

const sorted = sortArray (ar);

function sortArray (array){
  return [...new Set (array.sort((a, b) => a < b ? -1 : 0))];
}

const binaryTree = new Tree(sorted);

// console.log(binaryTree.root.data)

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

binaryTree.insert(20);
// prettyPrint(binaryTree.root)
