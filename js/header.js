document.getElementById('header')
    .innerHTML = `<h1 class = "hedder">bkvagnini portfolio</h1>
    <section class="modal hidden">
            <div class="flex">
              <img src="https://avatars.githubusercontent.com/u/2326127?s=40&v=4" width="50px" height="50px" alt="Github user avatar" />
              <button class="btn-close">⨉</button>
            </div>
            <div>
              <h3>Stay in touch</h3>
              <p><a href ="mailto:bkvagnini@gmail.com">Email: bkvagnini@gmail.com</a></p>
              <p> <a href="sms:850-583-0842">Text: 850-583-0842</a></p>
              <p> <a href="tel:850-583-0842">Call: 850-583-0842</a></p>
              <p></p>
              <p><a href="BKV_UX_Resume_072623.pdf">My UX Design Resume</a></p>
              <p><a href="BKV_TechWriter_Resume_072623.pdf">My Technical Writer Resume</a></p>
            </div>
          </section>
          
          <div class="overlay hidden"></div>
          <button class="btn btn-open">Contact</button>`;

    
//https://stackoverflow.com/questions/30148661/innerhtml-to-execute-multiple-lines
//use backticks for .innerHTML = "" to have multiple lines of HTML 

//<a href =\"mailto:bkvagnini@gmail.com\">Contact Me</a></button></div>";
