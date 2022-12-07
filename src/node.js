class Node {
    constructor(value, parent=null, children=[]){
        this.data = value;
        this.parent = parent
        this.children = children;
    }
}

export {Node};