// Notice how Js and Python look very similar
// We typically run JS code thorugh a browser
//         a. Paste JS Code right into your terminal
//         b. Run it via a web-page

var uNames = []
var pWords = []

let url = "https://raw.githubusercontent.com/basarinan/Authentication_Folder/master/Authentication_Folder/logindata.json"

fetch(url,{

})
.then(response=> response.json())
.then(result=>
    for (i = 0; i < result.length; i = i+1)
    (uNames.push(result[i]["id"]))
    (pWords.push(result[i]["password"]))
   
    console.log(uNames)
    console.log(pWords)
});



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
console.log(checkLoging("user1@test.com","pword1"))
//console.log(checkLogin("user1","pWord1"))
//console.log(checkLogin("user1","pword2"))
//console.log(checkLogin("user5","pword5"))