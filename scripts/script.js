let sel = document.querySelector(".select_class");
let body = document.querySelector("body");
let but = document.querySelector("#but_vib");
let head_div = document.querySelector("#tag_list");
let input_search = document.querySelector(".input_search");
let search_btn = document.querySelector(".search_btn");
let cards_list = document.querySelector(".cards_list"); 


input_search.hidden = true;
search_btn.hidden = true; 

but.addEventListener("click", function () { 
    fetch(`https://acnhapi.com/v1a/${sel.value}`).then((res)=>{ 
       if (res.ok) {
           return res.json();
       }
    })
    .then((data) => {
        let del_divs_card = document.getElementsByClassName("div_card");
        let del_btn_tag = document.getElementsByClassName("btn_tag");
        input_search.hidden = false;
        search_btn.hidden = false;
        if(del_divs_card.length > 0)
        {
            while(del_divs_card.length){
            cards_list.removeChild(del_divs_card[del_divs_card.length-1]);
            }
        }
        if(del_btn_tag.length > 0)
        {
            while(del_btn_tag.length){
            head_div.removeChild(del_btn_tag[del_btn_tag.length-1]);
            }
        }
        switch (sel.value) {

            case "fish":
                let tag_array = []; 
                for (let index = 0; index < data.length; index++) {
                    let name = document.createElement("p");
                    let Availibility_location = document.createElement("p");
                    let Availibility_rarity = document.createElement("p");
                    let Price= document.createElement("p");
                    let img = document.createElement("img");

                    let div = document.createElement("div");

                    name.textContent = "Название: ";
                    Price.textContent = "Цена: ";
                    Availibility_location.textContent = "Локация: ";

                    Availibility_rarity.textContent = "Редкость: ";

                    name.textContent += data[index].name["name-EUru"];
                    Price.textContent += data[index]["price"];
                    Availibility_location.textContent += data[index]["availability"]["location"];
                    Availibility_rarity.textContent += data[index]["availability"]["rarity"];
                    img.src = data[index]["image_uri"];
                    div.appendChild(name);
                    div.appendChild(Price);
                    div.appendChild(Availibility_location);
                    div.appendChild(Availibility_rarity);
                    div.appendChild(img);
                    cards_list.appendChild(div);


                    div.setAttribute("class", "div_card");
                    name.setAttribute("class", "name");
                    Availibility_location.setAttribute("class", "p_class");
                    Availibility_rarity.setAttribute("class", "p_class");
                    Price.setAttribute("class", "p_class");
                    img.setAttribute("class", "image");

                    div.title += data[index]["availability"]["location"];
                    div.title += ` ${data[index]["availability"]["rarity"]}`;
        
                    tag_array.push(data[index]["availability"]["location"]);
                    tag_array.push(data[index]["availability"]["rarity"]);

                 }
                 let tag_array_unDuble = new Set(tag_array);
                 tag_array.sort();
                 
                 for (let item of tag_array_unDuble) {
                     let tag_button = document.createElement("button");
                     let schet = 0;
                     tag_button.textContent = item;
                     tag_button.value = item;
                     for (let arrindx = 0; arrindx < tag_array.length; arrindx++) {
                         if (tag_array[arrindx] == item) {
                            schet += 1;
                         }
                         
                     }
                     tag_button.textContent += ` ${schet}`;
                     head_div.appendChild(tag_button);
                     tag_button.setAttribute("class", "btn_tag");
                     tag_button.addEventListener("click",function () {
                         let divc = document.querySelectorAll(".div_card");
                         for (let index = 0; index < divc.length; index++) {
                            let strDivc = "";
                            strDivc += divc[index].title;
                            if(strDivc.indexOf(`${tag_button.value}`) == -1){
                                divc[index].hidden = true;
                            }
                            else{
                                divc[index].hidden = false;
                            }
                         }
                     } )

                 }

                break;

            case "sea":
                let tag_array_s = [];
                for (let index = 0; index < data.length; index++) {
                    let name = document.createElement("p");
                    let Availibility_month_array_northern = document.createElement("p");
                    let Price= document.createElement("p");
                    let img = document.createElement("img");

                    let div = document.createElement("div");

                    name.textContent = "Название: ";
                    Price.textContent = "Цена: ";
                    Availibility_month_array_northern.textContent = "Месяц: ";
                    

                    name.textContent += data[index].name["name-EUru"];
                    Price.textContent += data[index]["price"];
                   
                    for (let jm = 0; jm < data[index]["availability"]["month-array-northern"].length; jm++) {
                        switch (data[index]["availability"]["month-array-northern"][jm]) {
                            case 1:
                                Availibility_month_array_northern.textContent += "Январь ";
                                tag_array_s.push("Январь");
                                break;
                            case 2:
                                Availibility_month_array_northern.textContent += "Февраль ";
                                tag_array_s.push("Февраль");
                                break;
                            case 3:
                                Availibility_month_array_northern.textContent += "Март ";
                                tag_array_s.push("Март");
                                break;
                            case 4:
                                Availibility_month_array_northern.textContent += "Апрель ";
                                tag_array_s.push("Апрель");
                                break;
                            case 5:
                                Availibility_month_array_northern.textContent += "Май ";
                                tag_array_s.push("Май");
                                break;
                            case 6:
                                Availibility_month_array_northern.textContent += "Июнь ";
                                tag_array_s.push("Июнь");
                                break;
                            case 7:
                                Availibility_month_array_northern.textContent += "Июль ";
                                tag_array_s.push("Июль");   
                                break;
                            case 8:
                                Availibility_month_array_northern.textContent += "Август ";
                                tag_array_s.push("Август");    
                                break;
                            case 9:
                                Availibility_month_array_northern.textContent += "Сентябрь ";
                                tag_array_s.push("Сентябрь");    
                                break;
                            case 10:
                                Availibility_month_array_northern.textContent += "Октябрь ";
                                tag_array_s.push("Октябрь");   
                                break;
                            case 11:
                                Availibility_month_array_northern.textContent += "Ноябрь ";
                                tag_array_s.push("Ноябрь");   
                                break;
                            case 12:
                                Availibility_month_array_northern.textContent += "Декабрь ";
                                tag_array_s.push("Декабрь");        
                                break;
                        }
                    }
                    
                    img.src = data[index]["image_uri"];
                    
                    name.setAttribute("class", "name");

                    div.appendChild(name);
                    div.appendChild(Price);
                    div.appendChild(Availibility_month_array_northern);
                    div.appendChild(img);
                    cards_list.appendChild(div);

                    div.setAttribute("class", "div_card");
                    img.setAttribute("class", "image");

                    div.title += `${Availibility_month_array_northern.textContent}`;

                 }

                 let tag_array_unDuble_S = new Set(tag_array_s);
                 tag_array_s.sort();
                 
                 for (let item of tag_array_unDuble_S) {
                     let tag_button = document.createElement("button");
                     let schet = 0;
                     tag_button.textContent = item;
                     tag_button.value = item;
                     for (let arrindx = 0; arrindx < tag_array_s.length; arrindx++) {
                         if (tag_array_s[arrindx] == item) {
                            schet += 1;
                         }
                         
                     }
                     tag_button.textContent += ` ${schet}`;
                     head_div.appendChild(tag_button);
                     tag_button.setAttribute("class", "btn_tag");
                     tag_button.addEventListener("click",function () {
                         let divc = document.querySelectorAll(".div_card");
                         for (let index = 0; index < divc.length; index++) {
                            let strDivc = "";
                            strDivc += divc[index].title;
                            if(strDivc.indexOf(`${tag_button.value}`) == -1){
                                divc[index].hidden = true;
                            }
                            else{
                                divc[index].hidden = false;
                            }
                         }
                     } )

                 }
                break;
                
            case "bugs":
                let tag_array_b = [];
                for (let index = 0; index < data.length; index++) {
                    let name = document.createElement("p");
                    let Availibility_month_array_northern = document.createElement("p");
                    let Price= document.createElement("p");
                    let Availibility_rarity = document.createElement("p");
                    let Availibility_time = document.createElement("p");
                    let img = document.createElement("img");

                    let div = document.createElement("div");

                    name.textContent = "Название: ";
                    Price.textContent = "Цена: ";
                    Availibility_month_array_northern.textContent = "Месяц: ";
                    Availibility_rarity.textContent = "Редкость: ";
                    Availibility_time.textContent = "Время: ";

                    name.textContent += data[index].name["name-EUru"];
                    Price.textContent += data[index]["price"];
                    Availibility_rarity.textContent += data[index]["availability"]["rarity"];
                    Availibility_time.textContent += data[index]["availability"]["time"];
                    for (let jm = 0; jm < data[index]["availability"]["month-array-northern"].length; jm++) {
                        switch (data[index]["availability"]["month-array-northern"][jm]) {
                            case 1:
                                Availibility_month_array_northern.textContent += "Январь ";
                                tag_array_b.push("Январь");
                                break;
                            case 2:
                                Availibility_month_array_northern.textContent += "Февраль ";
                                tag_array_b.push("Февраль");
                                break;
                            case 3:
                                Availibility_month_array_northern.textContent += "Март ";
                                tag_array_b.push("Март");
                                break;
                            case 4:
                                Availibility_month_array_northern.textContent += "Апрель ";
                                tag_array_b.push("Апрель");
                                break;
                            case 5:
                                Availibility_month_array_northern.textContent += "Май ";
                                tag_array_b.push("Май");
                                break;
                            case 6:
                                Availibility_month_array_northern.textContent += "Июнь ";
                                tag_array_b.push("Июнь");
                                break;
                            case 7:
                                Availibility_month_array_northern.textContent += "Июль ";
                                tag_array_b.push("Июль");   
                                break;
                            case 8:
                                Availibility_month_array_northern.textContent += "Август ";
                                tag_array_b.push("Август");    
                                break;
                            case 9:
                                Availibility_month_array_northern.textContent += "Сентябрь ";
                                tag_array_b.push("Сентябрь");     
                                break;
                            case 10:
                                Availibility_month_array_northern.textContent += "Октябрь ";
                                tag_array_b.push("Октябрь");     
                                break;
                            case 11:
                                Availibility_month_array_northern.textContent += "Ноябрь ";
                                tag_array_b.push("Ноябрь");   
                                break;
                            case 12:
                                Availibility_month_array_northern.textContent += "Декабрь ";
                                tag_array_b.push("Декабрь");        
                                break;
                        }
                    }
                    
                    img.src = data[index]["image_uri"];

                    name.setAttribute("class", "name");

                    div.appendChild(name);
                    div.appendChild(Price);
                    div.appendChild(Availibility_month_array_northern);
                    div.appendChild(Availibility_time);
                    div.appendChild(Availibility_rarity);
                    div.appendChild(img);
                    cards_list.appendChild(div);
                    div.setAttribute("class", "div_card");
                    img.setAttribute("class", "image");


                    div.title += `${Availibility_month_array_northern.textContent}`;
                    div.title += ` ${data[index]["availability"]["rarity"]}`;
                    tag_array_b.push(data[index]["availability"]["rarity"]);

                 }

                 let tag_array_unDuble_b = new Set(tag_array_b);
                 tag_array_b.sort();
                 
                 for (let item of tag_array_unDuble_b) {
                     let tag_button = document.createElement("button");
                     let schet = 0;
                     tag_button.textContent = item;
                     tag_button.value = item;
                     for (let arrindx = 0; arrindx < tag_array_b.length; arrindx++) {
                         if (tag_array_b[arrindx] == item) {
                            schet += 1;
                         }
                         
                     }
                     tag_button.textContent += ` ${schet}`;
                     head_div.appendChild(tag_button);
                     tag_button.setAttribute("class", "btn_tag");
                     tag_button.addEventListener("click",function () {
                         let divc = document.querySelectorAll(".div_card");
                         for (let index = 0; index < divc.length; index++) {
                            let strDivc = "";
                            strDivc += divc[index].title;
                            if(strDivc.indexOf(`${tag_button.value}`) == -1){
                                divc[index].hidden = true;
                            }
                            else{
                                divc[index].hidden = false;
                            }
                         }
                     } )

                 }
                break;

            case "villagers":
                let tag_array_v = [];
                for (let index = 0; index < data.length; index++) {
                    let name = document.createElement("p");
                    let Personality = document.createElement("p");
                    let Birthday = document.createElement("p");
                    let Catch_phrase= document.createElement("p");
                    let img = document.createElement("img");

                    let div = document.createElement("div");

                    name.textContent = "Имя: ";
                    Personality.textContent = "Личность: ";
                    Birthday.textContent = "Дата рождения: ";
                    Catch_phrase.textContent = "Фраза: ";

                    name.textContent += data[index].name["name-EUru"];
                    Personality.textContent += data[index]["personality"];
                    Birthday.textContent += data[index]["birthday-string"];
                    Catch_phrase.textContent += data[index]["catch-phrase"];
                    img.src = data[index]["image_uri"];
         
                    div.appendChild(name);
                    div.appendChild(Personality);
                    div.appendChild(Birthday);
                    div.appendChild(Catch_phrase);
                    div.appendChild(img);
                    cards_list.appendChild(div);
                    
                    name.setAttribute("class", "name");
                    div.setAttribute("class", "div_card");
                    img.setAttribute("class", "image");

                    div.title += ` ${data[index]["personality"]}`;
                    tag_array_v.push(data[index]["personality"]);
                 }

                 let tag_array_unDuble_v = new Set(tag_array_v);
                 tag_array_v.sort();
                 
                 for (let item of tag_array_unDuble_v) {
                     let tag_button = document.createElement("button");
                     let schet = 0;
                     tag_button.textContent = item;
                     tag_button.value = item;
                     for (let arrindx = 0; arrindx < tag_array_v.length; arrindx++) {
                         if (tag_array_v[arrindx] == item) {
                            schet += 1;
                         }
                         
                     }
                     tag_button.textContent += ` ${schet}`;
                     head_div.appendChild(tag_button);
                     tag_button.setAttribute("class", "btn_tag");
                     tag_button.addEventListener("click",function () {
                         let divc = document.querySelectorAll(".div_card");
                         for (let index = 0; index < divc.length; index++) {
                            let strDivc = "";
                            strDivc += divc[index].title;
                            if(strDivc.indexOf(`${tag_button.value}`) == -1){
                                divc[index].hidden = true;
                            }
                            else{
                                divc[index].hidden = false;
                            }
                         }
                     } )

                 }

                break;

            case "songs":
                for (let index = 0; index < data.length; index++) {
                    let name = document.createElement("p");
                    let buy_price = document.createElement("p");
                    let sell_price = document.createElement("p");
                    let isOrderable= document.createElement("p");
                    let img = document.createElement("img");

                    let div = document.createElement("div");

                    name.textContent = "Название: ";
                    buy_price.textContent = "Цена покупки: ";
                    sell_price.textContent = "Цена продажи: ";
                    isOrderable.textContent = "Упорядочена: ";

                    name.textContent += data[index].name["name-EUru"];
                    buy_price.textContent += data[index]["buy-price"];
                    sell_price.textContent += data[index]["sell-price"];
                    isOrderable.textContent += data[index]["isOrderable"];
                    img.src = data[index]["image_uri"];
         
                    div.appendChild(name);
                    div.appendChild(buy_price);
                    div.appendChild(sell_price);
                    div.appendChild(isOrderable);
                    div.appendChild(img);
                    cards_list.appendChild(div);

                    name.setAttribute("class", "name");
                    div.setAttribute("class", "div_card");
                    img.setAttribute("class", "image");
                 }
            
                break;
            case "houseware":
                let tag_array_h = [];
                    for (let index = 0; index < data.length; index++) {
                        for (let jndex = 0; jndex < data[index].length; jndex++) {
                            let name = document.createElement("p");
                            let buy_price = document.createElement("p");
                            let sell_price = document.createElement("p");
                            let Miles_price = document.createElement("p");
                            let Source= document.createElement("p");
                            let Source_detail= document.createElement("p");
                            let Tag= document.createElement("p");
                            let img = document.createElement("img");
                            
                            let div = document.createElement("div");


                            Miles_price.textContent = "Miles_price: ";
                            name.textContent = "Название: ";
                            buy_price.textContent = "Цена покупки: ";
                            sell_price.textContent = "Цена продажи: ";
                            Source.textContent = "Источник: ";
                            Source_detail.textContent = "Истоник детали: "
                            Tag.textContent = "Тэг: ";


                            name.textContent += data[index][jndex].name["name-EUru"];
                            buy_price.textContent += data[index][jndex]["buy-price"];
                            sell_price.textContent += data[index][jndex]["sell-price"];
                            Miles_price.textContent += data[index][jndex]["miles-price"];
                            Source.textContent += data[index][jndex]["source"];
                            Source_detail.textContent += data[index][jndex]["source-detail"];
                            Tag.textContent += data[index][jndex]["tag"];
                            img.src = data[index][jndex]["image_uri"];

                            div.appendChild(name);
                            div.appendChild(buy_price);
                            div.appendChild(sell_price);
                            div.appendChild(Miles_price);
                            div.appendChild(Source);
                            div.appendChild(Source_detail);
                            div.appendChild(Tag);
                            div.appendChild(img);
                            cards_list.appendChild(div);

                            name.setAttribute("class", "name");
                            div.setAttribute("class", "div_card");
                            img.setAttribute("class", "image");

                            div.title += `${data[index][jndex]["tag"]}`
                            tag_array_h.push(data[index][jndex]["tag"]);

                        }
                        
                    }
                    let tag_array_unDuble_h = new Set(tag_array_h);
                    tag_array_h.sort();
                    
                    for (let item of tag_array_unDuble_h) {
                        let tag_button = document.createElement("button");
                        if (item == "") {
                            continue;
                            
                        }
                        let schet = 0;
                        tag_button.textContent = item;
                        tag_button.value = item;
                        for (let arrindx = 0; arrindx < tag_array_h.length; arrindx++) {
                            if (tag_array_h[arrindx] == item) {
                               schet += 1;
                            }
                            
                        }
                        tag_button.textContent += ` ${schet}`;
                        head_div.appendChild(tag_button);
                        tag_button.setAttribute("class", "btn_tag");
                        tag_button.addEventListener("click",function () {
                            let divc = document.querySelectorAll(".div_card");
                            for (let index = 0; index < divc.length; index++) {
                               let strDivc = "";
                               strDivc += divc[index].title;
                               if(strDivc.indexOf(`${tag_button.value}`) == -1){
                                   divc[index].hidden = true;
                               }
                               else{
                                   divc[index].hidden = false;
                               }
                            }
                        } )
   
                    }
                break;
        
        }

        search_btn.addEventListener("click", function(){
            let divc = document.querySelectorAll(".div_card");
            for (let index = 0; index < divc.length; index++) {
                if (!divc[index].hidden) {
                    for (let j = 0; j < divc[index].childNodes.length; j++) {
                        if (divc[index].childNodes[j].className == "name") {
                            let name = divc[index].childNodes[j];
                            let name_str = name.textContent;
                            let input_search_str = input_search.value;
                            input_search_str = input_search_str.toLowerCase();
                            name_str = name_str.toLowerCase();
                            if (name_str.match(input_search_str) == null) {
                                divc[index].hidden = true;
                            }
                        }
                        
                    }

                }
                
            }
        })
    })})


