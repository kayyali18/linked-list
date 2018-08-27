import Node from './Node';

export default class LinkedList {
    constructor () {
        this.length = 0;
        this.head = null;
    }

    push (data) {
        this.length++;

        if (!this.head) this.head = new Node (data);
        else {
            let currNode = this.head;

            while (currNode.next) {
                currNode = currNode.next;
            }

            currNode.next = new Node(data);
        }
    }

    // //My build
    // pop () {
    //     if (!this.head) return null;
    //     else if (this.length == 0) {
    //         return;
    //     } else if (this.length == 1) {
    //         this.length--;
    //         let node = this.head;
    //         this.head = null;
    //         return node;
    //     } else {
    //         this.length--;
    //         let currNode = this.head;

    //         for (let i = 0; i < this.length - 1; i++) {
    //             currNode = currNode.next;
    //         }

    //         let poppedOff = currNode.next;
    //         currNode.next = null;
    //         return poppedOff;
    //     }
    // }

    // Nathan's Build
    pop () {
        let currNode = this.head;
        let prevNode;

        if (!this.head) return null;
        while (currNode.next) {
            prevNode = currNode;
            currNode = currNode.next;
        }
        if (this.length == 1) this.head = null;
        if (prevNode) prevNode.next = null;
        this.length--;
        return currNode;

    }

    find (data) {
        let foundNode = null;
        let currNode = this.head;

        while (currNode) {
            if (currNode.data == data) {
                foundNode = currNode;
                break;
            } else currNode = currNode.next;
        }

        return foundNode;

    }
}
