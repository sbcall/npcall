//Rendering Service

function RenderService(data) {
    this.data = data;
    
    var pic = this.data.ProfilePic;
    var greet = this.data.Greeting;
    var bio = this.data.Bio;

    var contact = this.data.ContactInfo;
    var cDetails = [];
    var edu = this.data.EduInfo;

    var hobbiesOne = this.data.HobbyInfoOne;
    var hobbiesTwo = this.data.HobbyInfoTwo;

    var training = this.data.Training;
    var skills = [];

    this.renderProfilePic = function() {
        $("#picStub").attr("src", pic);
    }

    this.renderGreeting = function() {
        $("#greetStub").prepend(greet);
    }

    this.renderBio = function() {
        $("#bioStub").prepend(bio);
    }

    this.renderContact = function() {
        for(var cDetail in contact) {
            cDetails.push(cDetail);
        }

        for(var i=0; i < cDetails.length; i++) {
            $("#contactStub").append(contact[cDetails[i]]);
        }
    }



    this.renderEdu = function() {
        $("#eduStub").prepend(edu);
    }

    this.renderHobbiesOne = function() {
        $("#hobbyStubOne").prepend(hobbiesOne);
    }

    this.renderHobbiesTwo = function() {
        $("#hobbyStubTwo").prepend(hobbiesTwo);
    }



    this.renderTraining = function() {
        for(var skill in training) {
            skills.push(skill);
        }

        for(var i=0; i < skills.length; i++) {
            $("#skillStub").append(training[skills[i]]);
        }
    }
}



//Calling Rendering Functios

var rend = new RenderService(profile);
rend.renderProfilePic();
rend.renderGreeting();
rend.renderBio();

rend.renderContact();
rend.renderEdu();

rend.renderHobbiesOne();
rend.renderHobbiesTwo();

rend.renderTraining();