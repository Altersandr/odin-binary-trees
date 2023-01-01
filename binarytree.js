class Node {
    constructor(data = null, leftChildren = null, rightChildren = null){
        this.data = data;
        this.left = leftChildren;
        this.right = rightChildren;
    }
};

// class Tree {
//     constructor(root)
// };

const ar =  [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];


console.log(sorted)

const buildTree = (array) =>{
    const sorted = [...new Set (array.sort((a, b) => a < b ? -1 : 0))];
    let no
    return sorted.length / 2

};




const prettyPrint = (node, prefix = '', isLeft = true) => {
    if (node.right !== null) {
      prettyPrint(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
    }
    console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.data}`);
    if (node.left !== null) {
      prettyPrint(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
    }
  };

prettyPrint(buildTree(ar))  