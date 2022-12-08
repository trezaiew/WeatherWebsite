//iran
//fetch("http://api.weatherapi.com/v1/current.json?key=a36665975aaa416ca59142849220612&q=iran&aqi=no");

//fetch("http://api.weatherapi.com/v1/current.json?key=a36665975aaa416ca59142849220612&q=USA&aqi=no");

//828328554d944e3f88d191709220712
let users = document.querySelector(".users");
let posts = document.querySelector(".posts");

fetch('http://api.weatherapi.com/v1/current.json?key= 828328554d944e3f88d191709220712&q=iran&aqi=yes')
.then((res) => res.json())
.then((data) => {
    
   const weather = Array(data);
   console.log(weather);
   
   
weather.forEach(element => {
    users.innerHTML += 
                     `<div class="card text-white bg-dark mb-3 col col-sm-12" style="min-width:350px;max-width:18rem;">
                       <div class="card-header">${element.location.name}</div>
                         <div class="card-body">
                         <div class="input-group rounded">
                            <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                               <span class="input-group-text border-0" id="search-addon">
                                    <i class="fas fa-search"></i>
                              </span>
                        </div>
                          <h3>${element.current.condition.text}</h3>
                          <h4 class="card-title"> ${element.current.feelslike_c}C</h4>
                          <h4 class="card-title"> ${element.current.feelslike_f}F</h4>
                         <p class="card-text">${element.location.localtime}</p>
                        </div>
                    </div>`;

})
});

