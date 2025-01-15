import emailjs from '@emailjs/browser';


export function sendEmail(email:string,section:string,
name?:string,subject?:string, message?:string

) {
  let sendObj:any = {
    from_name: "Dev User" + email + name,
    message: "Check this out from section" +section +message,
  }
  if(section.includes("contact")){
    sendObj ={
      subject: subject,
      to_email:email,
    }
  }
  emailjs.send("service_6rgdna5", "template_7hiwa56", sendObj,{
    publicKey: 'xV_7E1yZdxFA0L313',
  }).then(
    (response) => {
      alert(`Your Response is send Successfully`);

      console.log("SUCCESS!", response.status, response.text);
    },
    (error) => {
      console.log("FAILED...", error);
      alert(`Your Response is send Successfully`);

    }
  );
}
