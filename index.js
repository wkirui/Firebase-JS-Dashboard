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

        console.log(doc.data());

        // get data
        var title = doc.data().title;
        var author = doc.data().author;
        var published = new Date((doc.data().published.seconds + doc.data().published.nanoseconds)*1000).toLocaleDateString();
        var genre = doc.data().genre;
        var added = new Date((doc.data().added.seconds + doc.data().added.nanoseconds)*1000).toLocaleDateString();

        // console.log({title: title, author: author, 
        //         published:published,
        //         genre: genre, added: added});
        

        // display data
        document.getElementById("title").innerHTML = "Title: " + title;
        document.getElementById("author").innerHTML = "Author: " + author;
        document.getElementById("year").innerHTML = "Published: " + published;
        document.getElementById("genre").innerHTML = "Genre: " + genre;
        document.getElementById("added").innerHTML = "Date Added: " + added;
    });

}).catch(function(error){
    console.log("Error getting documents ", error);
});
// console.log(data);

// display data
// console.log(data.forEach(function(d){
//     console.log(d);
//     // console.log('author:', d['author']);
// }));