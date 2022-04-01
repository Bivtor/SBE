// import React, { useRef } from 'react';
// import axios from 'axios';

// /*
//     TODO
//     ensure validation shows up on front end
//     currently: 
//         email syntax validation
//         text boxes at least 3 letters
// */
// function Contact(props) {
//     const name = useRef()
//     const email = useRef()
//     const subject = useRef()
//     const message = useRef()

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(name.current.value);
//         console.log(email.current.value);
//         console.log(subject.current.value);
//         console.log(message.current.value);

//         const contactmessage = {
//             name: name.current.value,
//             email: email.current.value,
//             subject: subject.current.value,
//             message: message.current.value
//         }
//         axios.post("http://localhost:8080/contact/addApplication", contactmessage)
//             .then((res) => console.log(res.data))
//             .catch((error) => console.log(error))
//         //window.location = '/'
//     }

//     return (
//         <div className='contactStyle'>
//             <h2 id ='applyNowStyle' className='contactElement'> Apply Now!</h2>
//             <form onSubmit={handleSubmit}>

//                 {/* NAME SECTION */}
//                 <div className='contactElement'>
//                     {/* <input type="hidden" name="contact_number" /> */}
//                     <label>Name</label>
//                     <input type="text" name="from_name" ref={name}/>
//                 </div>

//                 {/* EMAIL SECTION */}
//                 <div className='contactElement'>
//                     <label>Email</label>
//                     <input  type="email" name="from_email" ref={email}/>
//                 </div>

//                 {/* SUBJECT SECTION */}
//                 <div className='contactElement'>
//                     <label  >Subject</label>
//                     <input   type="text" name="subject" ref={subject} />
//                 </div>

//                     {/* MESSAGE SECTION */}
//                 <div className='contactElement'>
//                     <label>Message</label> 
//                     <textarea name="message" ref={message}/>
//                 </div>

//                     {/* SUBMIT BUTTON */}
//                 <div className='contactElement'>
//                     <input type="submit" value="Send"/>
//                 </div>

//             </form>
//         </div>
//     );
// }

// export default Contact;