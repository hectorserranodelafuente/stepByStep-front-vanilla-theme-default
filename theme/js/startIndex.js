  
        document.getElementById("goToLogin").addEventListener('click',function(){
            location.href = window.location.origin+`/view/basic-login/basicLoginForm.html`
        })

        document.getElementById("goToSignUp").addEventListener('click',function(){
            location.href = window.location.origin+`/view/basic-signUp/basicSignUpForm.html`
        })

        var imagesUrlEmailProviders = [
            "/img/logosProviders/amazon.jpg",
            "/img/logosProviders/aol.jpg",
            "/img/logosProviders/brevo.jpg",
            "/img/logosProviders/debug;ail.jpg",
            "/img/logosProviders/dyn.jpg",
            "/img/logosProviders/fastMail.jpg",
            "/img/logosProviders/gandi.jpg",
            "/img/logosProviders/gmail.jpg",
            "/img/logosProviders/goDaddy.jpg",
            "/img/logosProviders/iCloud.jpg",
            "/img/logosProviders/ionos.jpg",
            "/img/logosProviders/mailchimp.jpg",
            "/img/logosProviders/mailee.jpg",
            "/img/logosProviders/mailjet.jpg",
            "/img/logosProviders/mandrill.jpg",
            "/img/logosProviders/microsoft.jpg",
            "/img/logosProviders/nodeMailer.jpg",
            "/img/logosProviders/onlineee.jpg",
            "/img/logosProviders/postmark.jpg",
            "/img/logosProviders/sendcloud.jpg",
            "/img/logosProviders/sendgrid.jpg",
            "/img/logosProviders/sparkpost.jpg",
            "/img/logosProviders/yahoo.jpg",
            "/img/logosProviders/yandex.jpg",
            "/img/logosProviders/zoho.jpg"
        ]

        let htmlEmailProviders = ''
        let row = '<div  class="listProvidersContainer-email">'
        
        imagesUrlEmailProviders.forEach( (email,index) => {
            
            row += `<div class="imgProvider">
                        <img src="/public/img/logosProviders/${email}.jpg">
                    </div>`
            
            if(index%4===0||index===(imagesUrlEmailProviders.length-1)){
                row += `</div>`
                htmlEmailProviders += row         
            }
        })

        document.getElementById("emailProviders").innerHTML = htmlEmailProviders
