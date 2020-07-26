$(document).ready(() => {
    $(".submit").click((event) => {
        event.preventDefault();

        const name = $(".name").val();
        const email = $(".email").val();
        const subject = $(".subject").val();
        const message = $(".message").val();
        const statusElement = $(".status");
        let messageValid = true;
        statusElement.empty();

        if(email.length > 1 && email.includes("@") && email.includes(".")) {
            if(subject.length >= 2) {
                if(message.length != "") {
                    statusElement.append("<div>Message sent!</div>");
                } else {
                    statusElement.append("<div>Message cannot be blank</div>");
                    messageValid = false;
                }
            } else {
                statusElement.append("<div>Please enter a valid subject.</div>");
                messageValid = false;
            }
        } else {
            statusElement.append("<div>Please enter a valid email.</div>");
            messageValid = false;
        }

        
    });

});