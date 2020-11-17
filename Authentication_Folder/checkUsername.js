// Notice how Js and Python look very similar
// We typically run JS code thorugh a browser
//         a. Paste JS Code right into your terminal
//         b. Run it via a web-page

var uNames = ["user1","user2","user3"]
var pWords = ["pword1","pword2","pword3"]

function checkLoging(u,p) {
    val = false // Assumes u and p do not exist
    //Loop through uNames check 

    for(i=0;i < uNames.length;i = i+1) {
        if(uNames[i]=== u){
            if (pNames[i]==p) {
                val = true;
            }
        }
    }
    return val
}
//console.log(checkLogin("user1","pWord1"))
//console.log(checkLogin("user1","pword2"))
//console.log(checkLogin("user5","pword5"))