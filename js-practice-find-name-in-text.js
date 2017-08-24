/*jshint multistr:true */

/*

You've done it! Nice work.

Now, as we mentioned, this system isn't perfect. For instance, if the paragraph contains both "Eric" and "Eddie", we'll see this in our hits array:

['E','r','i','c','E','d','d','i','e'];
Think about how you might fine-tune this program to make sure it only finds exact matches for your name. Search the Internet to see if there are any built-in JavaScript string methods that can help!

*/



var text ="Hello there Paula. How are you doing Paula? Nice to meet you Paula. How is your day going, Paula?";
var myName = "Paula";
var hits = [];

for (var i=0; i < text.length; i++){
    if (text[i] === myName[0]){
        for (var j = i; j < i + myName.length; j++){
            hits.push(text[j]);
        }
    }

    if(hits.push === 0){
        console.log("Your name was not found!");
    } else {
        console.log(hits);
    }
}
