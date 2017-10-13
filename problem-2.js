// Use of closure

// bookStore={
// 	var books=["Gandhi","Washington","Churchill","Mandela"];
// };

// bookStore.next();—>Gandhi
// bookStore.next();—>Washington
// bookStore.previous();—>Gandhi


// Solution: This is javascript snippet.


function bookStore() {

    var books = ["Gandhi","Washington","Churchill","Mandela"];
    this.currentIndex = -1;
    this.next = function() {
        if(this.currentIndex === books.lengh - 1) {
            console.log('there is no next item');
        }
        this.currentIndex = this.currentIndex + 1;
        return books[this.currentIndex];
    }

    this.previous = function() {
        if(this.currentIndex === 0) {
            console.log('there is no previous item');
        }
        this.currentIndex = this.currentIndex - 1;
        return books[this.currentIndex];
    }

}

var store = new bookStore();
   //next and previous calls gives any indexed value and logs error when there is no item to be shown
   console.log('Next Value::', store.next());
   console.log('Next Value::', store.next());
    console.log('Previous Value::', store.previous());



