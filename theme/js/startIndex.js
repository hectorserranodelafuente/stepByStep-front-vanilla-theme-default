  
        document.getElementById("goToLogin").addEventListener('click',function(){
            location.href = window.location.origin+`/view/basic-login/basicLoginForm.html`
        })

        document.getElementById("goToSignUp").addEventListener('click',function(){
            location.href = window.location.origin+`/view/basic-signUp/basicSignUpForm.html`
        })
        
        let basePathImg = `/public/img/`
        if(document.getElementById("weAreInCordova")){
            basePathImg = `../../img/`
        }
        
        var imagesUrlSMSProviders = [
            "labsMobile.jpg"
        ]

        var imagesUrlEmailProviders = [
            "amazon.jpg",
            "gmail.jpg",
            "microsoft.jpg",
            "iCloud.jpg",
            "ionos.jpg",
            "aol.jpg",
            "brevo.jpg",
            "debugMail.jpg",
            "dyn.jpg",
            "fastMail.jpg",
            "gandi.jpg",
            "goDaddy.jpg",
            "mailchimp.jpg",
            "mailee.jpg",
            "mailjet.jpg",
            "mandrill.jpg",
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
        let headerEmail = `  <div class = "providerEmail-container">
                                
                                <div class = "providerEmailTitle">
                                <img src="${basePathImg}logosProviders/email.jpg">
                                </div>
                                
                                <div class="providerEmailNodemailer">
                                <img src="${basePathImg}logosProviders/nodeMailer.jpg">
                                </div>

                            </div> 
                            <div class="providerEmail-container-href">
                               <a href="https://community.nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/">
                                https://community.nodemailer.com/2-0-0-beta/setup-smtp/well-known-services/
                               </a> 
                            </div>`
        
        let row = `${headerEmail}<div  class="listProvidersContainer-email">`
        
        imagesUrlEmailProviders.forEach( (email,index) => {
            
            row += `<div class="imgProvider">
                        <img src="${basePathImg}logosProviders/${email}">
                    </div>`
            
            if(((index+1)%4==0&&index!==0)||index===(imagesUrlEmailProviders.length-1)){
                row += `</div>`
                htmlEmailProviders += row
                row = `<div  class="listProvidersContainer-email">`         
            }
        })

        document.getElementById("emailProviders").innerHTML = htmlEmailProviders

        let headerSMS = `<div class = "providerSms">
                                    
                            <div class="providerSmsTitle">
                                <div style="width:150px;margin:0 auto;height:80px;">
                                <img src="${basePathImg}logosProviders/SMS.jpg" style="width:150px;"> 
                                </div>
                            </div>
                                    
                        </div>`

        let htmlSMSProviders =``             
        row = `${headerSMS}<div  class="listProvidersContainer-sms">
                        <div style="width:200px;margin:0 auto;height:80px;">
                   `

        imagesUrlSMSProviders.forEach( (sms,index) => {
            row += `<img src="/public/img/logosProviders/${sms}" style="width:200px;">`

            if((index%1==0&&index!==0)||index===(imagesUrlSMSProviders.length-1)){
                row += `</div></div>`
                htmlSMSProviders += row
                row = ``         
            }
        })

        document.getElementById("smsProviders").innerHTML = htmlSMSProviders
