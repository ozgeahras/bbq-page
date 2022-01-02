let emailCollectorForm = document.getElementById("Email-Collector")
let ourMainContent = document.getElementById("Main-Content")

emailCollectorForm.addEventListener("submit", event => {
    event.preventDefault()

    let ourFormData = new FormData(event.target)

    let ourFirstName = ourFormData.get("firstName");
    let updatedHtmlContent = `
    <h2>Congratulations, ${ourFirstName}!</h2>

    <p>You're on your way to becoming a BBQ Master!</p>
    
    `

    ourMainContent.innerHTML = updatedHtmlContent


})