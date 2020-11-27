// console.log(location.hash);
// console.log('js loaded');
// console.log(localStorage);
// console.log(location.hostname);

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
//   console.log(db);

// get data
let data = [];
db.collection('books').get().then(function(querySnapshot){
    querySnapshot.forEach(function(doc){
        book_info = {id: doc.id, ...doc.data()}
        data.push({id: doc.id, ...doc.data()});

        // console.log(doc.data());
        // console.log(data.length);

        // get data
        // var title = doc.data().title;
        // var author = doc.data().author;
        // var published = new Date((doc.data().published.seconds + doc.data().published.nanoseconds)*1000).toLocaleDateString();
        // var genre = doc.data().genre;
        // var added = new Date((doc.data().added.seconds + doc.data().added.nanoseconds)*1000).toLocaleDateString();
        // var rating = doc.data().rating;

    });
    // add data to the DOM
    var listPlaceHolder = document.getElementById('books-container');
    var bookList = ''
    for(var i=0; i< data.length; i++){
        console.log(data[i].title);

        var title = data[i].title;
        var author = data[i].author;
        var published = new Date((data[i].published.seconds + data[i].published.nanoseconds)*1000).toLocaleDateString();
        var genre = data[i].genre;
        var added = new Date((data[i].added.seconds + data[i].added.nanoseconds)*1000).toLocaleDateString();
        var rating = data[i].rating;

        // var itemList = '' //document.createElement('li');
        bookList += '<li id="book-list">'
        bookList += '<img src="" alt="">'
        bookList += '<p id="title" >' + 'Title: ' + title +'</p>'
        bookList += '<p id="author" >' + 'Author: ' + author +'</p>'
        bookList += '<p id="year" >' + 'Published: ' + published +'</p>'
        bookList += '<p id="genre" >' + 'Genre: ' + genre +'</p>'
        bookList += '<p id="rating" >' + 'Rating: ' + rating +'</p>'
        bookList += '<p id="added" >' + 'Date Added: ' + added +'</p>'
        bookList += '</li>'
    }
    
    listPlaceHolder.innerHTML = bookList;

}).catch(function(error){
    console.log("Error getting documents ", error);
});
// console.log(data);

// display data
// console.log(data.forEach(function(d){
//     console.log(d);
//     // console.log('author:', d['author']);
// }));