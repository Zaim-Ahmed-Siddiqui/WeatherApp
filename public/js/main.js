
const cityName = document.getElementById("cityName")
const submitBtn = document.getElementById("submitBtn")
const city_name = document.getElementById("city_name")
const temp = document.getElementById("temp")
const temp_status = document.getElementById("temp_status")
const datahide = document.querySelector(".middle_layer")

const getinfo = async (event) => {
    event.preventDefault()
    let cityVal = cityName.value

    if (cityVal === "") {
        city_name.innerText = "Please write the City Name before you search"
        datahide.classList.add("data_hide")

    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=f4c4e599995840deeddbe07c4a7ef9d9&units=metric`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            const arrdata = [data]

            city_name.innerText = `${arrdata[0].name} , ${arrdata[0].sys.country}`
            temp.innerText = arrdata[0].main.temp
            const tempMood = arrdata[0].weather[0].main


            if (tempMood === "Clear") {
                temp_status.innerHTML = "<i class= 'fas fa-sun' style='color: #eccc68;'></i>"
            } else if (tempMood === "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style= 'color: #f1f2f6;'></i>"
            } else if (tempMood === "Rain") {
                temp_status.innerHTML = "<i class='fa-solid fa-cloud-showers-heavy' style='color: #a4b0be></i>"
            } else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style= 'color: #f1f2f6;'></i>"
            }
            datahide.classList.remove("data_hide")


        } catch {
            city_name.innerText = "Please Enter City Name Properly"
            datahide.classList.add("data_hide")
        }

    }
}

submitBtn.addEventListener("click", getinfo)