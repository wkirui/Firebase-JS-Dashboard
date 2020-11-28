
// setup firebase
var firebaseConfig = {
    apiKey: "AIzaSyCWK4mBf3fxOUMotvoMtFcfPu8VkTlvfbo",
    authDomain: "web-apps-296807.firebaseapp.com",
    databaseURL: "https://web-apps-296807.firebaseio.com",
    projectId: "web-apps-296807",
    storageBucket: "web-apps-296807.appspot.com",
    messagingSenderId: "222628155634",
    appId: "1:222628155634:web:e6baff800318532d4f006b",
    measurementId: "G-G2FB4E9XXW"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  // get db
  const db = firebase.firestore();

// save data into an array
let data = [];
db.collection('books').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        book_info = {id: doc.id, ...doc.data()}
        data.push({id: doc.id, ...doc.data()});

    });
    // add data to the DOM
    var listPlaceHolder = document.getElementById('books-container');
    var bookList = ''
    for(var i=0; i< data.length; i++){

        var title = data[i].title;
        var author = data[i].author;
        var published = new Date((data[i].published.seconds + data[i].published.nanoseconds)*1000).toLocaleDateString();
        var genre = data[i].genre;
        var added = new Date((data[i].added.seconds + data[i].added.nanoseconds)*1000).toLocaleDateString();
        var rating = data[i].rating;

        var ratingScore = ''
        for(var j=0; j<rating; j++){
            var val = j+1;
            ratingScore+='<a class="stars-x" href="#">✭</a>';

        }
        bookList += '<li id="book-details">'
        bookList += '<img src="" alt="">'
        bookList += '<p id="title" >' + ' ' + title +'</p>'
        bookList += '<p id="author" >' + 'Author : ' + author +'</p>'
        bookList += '<p id="year" >' + 'Published : ' + published +'</p>'
        bookList += '<p id="genre" >' + 'Genre : ' + genre +'</p>'
        bookList += '<p id="added" >' + 'Date Added : ' + added +'</p>'
        bookList += '<p id ="rating">'+'Rating : ' + ratingScore+'</p>';
        bookList += '</li>'
    }
    
    listPlaceHolder.innerHTML = bookList;

}).catch(function(error){
    console.log("Error getting documents ", error);
});

// add data to the database
