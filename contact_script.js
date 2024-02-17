// // function checkMail(){
// //     var form = document.getElementById("contactForm");
// //                     if (form.checkValidity()) {
// //                         // Perform email sending logic here
// //                         sendMail();
// //                         alert("Form submitted successfully!");
            
// //                     } else {
// //                         // Form validation failed
// //                         alert("Please fill in all required fields.");
// //                     }
     
// // } 
// function sendMail(){
    
//     let params={
//         name: document.getElementById("user_name").value,
//         email: document.getElementById("user_email").value,
//         subject: document.getElementById("user_subject").value,
//         message: document.getElementById("message").value,
//      } 
//      const service_id ="service_jgl8ktc";
//      const templateId ="template_kqxt02v";
//      emailjs.send(service_id,templateId,params).then(alert("message sent!!!"))
     
    
// }
window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm("service_jgl8ktc", 'template_kqxt02v', this)
            .then(() => {
                alert('email sent successfully!');
                document.getElementById("contact-form").reset();
                return false;
    
            }, (error) => {
                alert('FAILED...', error);
            });
    });
}