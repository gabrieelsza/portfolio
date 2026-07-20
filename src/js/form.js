emailjs.init("dRCb3qOCh8mryOoAb")

document.getElementById('contact-form').addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        mailBox: document.getElementById("mailito").value,
        message: document.getElementById("message").value,
    }

    const serviceID = "service_p0uagp9"
    const templateID = "template_9fu86jj"
    const submitButton = document.getElementById("btnSubmit");
    submitButton.textContent = "Enviando"
    submitButton.disabled = true; 
    
    emailjs.send(serviceID, templateID, formData)
    .then(() => {
        Toastify({
            text: "Email enviado com sucesso!",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #28A745, #96c93d)",
                borderRadius: "1rem",
                color: "F4F4F4",
                fontFamily: "var(--font-ui)",
                fontSize: ".8rem"
            }
            
        }).showToast();
        
        document.getElementById("contact-form").reset();
    })
    
    .catch((error) => {
        Toastify({
            text: "Email não enviado, tente novamente!",
            duration: 3000,
            style: {
                background: "linear-gradient(to right, #e22f2fec, rgb(241, 0, 0))",
                borderRadius: "1rem",
                color: "F4F4F4",
                textTransform: "uppercase",
                fontFamily: "var(--font-ui)",
                fontSize: ".8rem"
            }
            
        }).showToast();
    })
    
    .finally(() => {
            submitButton.textContent = "Enviar mensagem"
            submitButton.disabled = false; 
        })

}); 