$.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    type: "GET", 
    success: function(response) {
        // console.log (response);

        var firstUser = response[0];
       
        console.log(firstUser);

for (var i = 0; i<response.length; i++) {
    var user = response [i];
    updateUserInformation(i, user);
}

}

});

function updateUserInformation(index, user){

// define variable as userOne
var $user = $('.user-profile').eq(index);

// find the user-name class
$user.find('.user-name').text(user.name);

//find the user's phone
$user.find('.user-phone').text(user.phone);

//find the user's company name
$user.find('.user-company').text(user.company.name);

//find the user's website url text
$user.find('.user-website').find('a').text(user.website);

//find the url
$user.find('.user-website').find('a').attr('href', "http://" + user.website);

}
