const myList = document.getElementById('my-list');

class ListBinding {
    constructor(element) {
        this.listElement = element; // listElement refers to the physical HTML element
        this.textLIst = [];
    }

    /* Makes an <li> text </li> element tag */
    static createListItem(text) {
        const li = document.createElement("li");

        li.textContent = text;

        return li
    }

    /* remove all existing li or list tags */
    update() { // The update method will fill up the physical list element in the HTML with the items contained inside the textLIst array;
        while (this.listElement.firstChild) {
            this.listElement.removeChild(this.listElement.firstChild); // This code removes all the elements from the list
        }

        /* Fill the <ul> element with <li> elements */
        /* Adds <li> tags for each text or string inside the textList array */
        for (const text of this.textLIst) {
            this.listElement.appendChild(ListBinding.createListItem(text));
        }
    }

    // This method passes text input from the user into the textList array, then invokes the update method which removes all pre-existing list elements and replaces them with new list elements according to the amount of text input by user.
    add(text) {
        this.textLIst.push(text); // this will push the text passed in by the user into the add() method, into the textList Array
        this.update(); // this will invoke the update method created inside the ListBinding class
    }

    // Removes a single item at an index input by user
    remove(index) {
        this.textLIst.splice(index, 1); // this means removes an item or items starting from "index" but only one of them. Basically it removes one item.
        this.update();
    }
    
}

let newListBinding = new ListBinding(myList) // We have basically registered the physical list element (myList) with the ListBinding class by passing it into an instance of the ListBinding class