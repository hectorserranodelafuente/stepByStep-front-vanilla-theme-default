  
        document.getElementById("goToLogin").addEventListener('click',function(){
            location.href = window.location.origin+`/view/basic-login/basicLoginForm.html`
        })

        document.getElementById("goToSignUp").addEventListener('click',function(){
            location.href = window.location.origin+`/view/basic-signUp/basicSignUpForm.html`
        })
        var imagesUrlSMSProviders = [
            "labsMobile.jpg"
        ]

        var imagesUrlEmailProviders = [
            "amazon.jpg",
            "aol.jpg",
            "brevo.jpg",
            "debugMail.jpg",
            "dyn.jpg",
            "fastMail.jpg",
            "gandi.jpg",
            "gmail.jpg",
            "goDaddy.jpg",
            "iCloud.jpg",
            "ionos.jpg",
            "mailchimp.jpg",
            "mailee.jpg",
            "mailjet.jpg",
            "mandrill.jpg",
            "microsoft.jpg",
            "onlineee.jpg",
            "postmark.jpg",
            "sendcloud.jpg",
            "sendgrid.jpg",
            "sparkpost.jpg",
            "yahoo.jpg",
            "yandex.jpg",
            "zoho.jpg"
        ]

        let htmlEmailProviders = ''
        let row = '<div  class="listProvidersContainer-email">'
        
        imagesUrlEmailProviders.forEach( (email,index) => {
            
            row += `<div class="imgProvider">
                        <img src="/public/img/logosProviders/${email}">
                    </div>`
            
            if((index%3==0&&index!==0)||index===(imagesUrlEmailProviders.length-1)){
                row += `</div>`
                htmlEmailProviders += row
                row = ``         
            }
        })

        document.getElementById("emailProviders").innerHTML = htmlEmailProviders

         let htmlSMSProviders = ''
             row = '<div  class="listProvidersContainer-sms">'

        imagesUrlSMSProviders.forEach( (sms,index) => {
            row += `<img src="/public/img/logosProviders/${sms}">`
            
            if((index%1==0&&index!==0)||index===(imagesUrlSMSProviders.length-1)){
                row += `</div>`
                htmlSMSProviders += row
                row = ``         
            }
        })

        document.getElementById("smsProviders").innerHTML = htmlSMSProviders
