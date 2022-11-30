// template_zrm3u3q
// service_29vbg9d
//Rpd_BHvjT673Tk5oU

function contact(event) {
  event.preventDefault();
  emailjs
    .sendForm(
      "service_29vbg9d",
      "template_zrm3u3q",
      event.target,
      "pd_BHvjT673Tk5oU"
    )
    .then(() => {
      console.log("this worked");
    });
}
