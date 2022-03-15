const content = document.getElementById('content')

fetch("https://restcountries.com/v3.1/all")
.then(r => r.json())
.then(data =>{
    data.forEach(country =>{

        const flagDiv = document.createElement("div")
        const flagImg = document.createElement("img")
        const countryName = document.createElement("h1")

        countryName.textContent = country.name.common

        flagImg.src = country.flags.png

        flagDiv.className = "flag"

        flagDiv.append(flagImg, countryName)
        content.append(flagDiv)
    })
})