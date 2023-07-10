//span error
const span_exp_date_err = document.querySelector("#span-exp-date-err")
const span_cvc_err = document.querySelector("#span-cvc-err")
const span_cardNumber_err = document.querySelector("#span-cardNumber-err")
const span_cardName_err = document.querySelector("#span-cardName-err")

//inputs
const holder_name = document.querySelector("#holder_name")
const card_number = document.querySelector("#card_number")
const exp_month_card = document.querySelector("#exp_month_card")
const exp_year_card = document.querySelector("#exp_year_card")
const card_cvc = document.querySelector("#card_cvc")
//button
const butSend = document.querySelector("#butSend")

//sections
const section_inputs = document.querySelector(".section_inputs")
const sendForm = document.querySelector(".sendForm")


//span_text_back_card.textContent=card_cvc .value



holder_name.addEventListener("input", (e) => {
    document.querySelector(".text_name_card").textContent = e.target.value

})
card_number.addEventListener("input", (e) => {


    let formattedNumber=e.target.value.toString().replace(/\d{4}(?=.)/g, '$& ');
    document.querySelector(".span_card_number").textContent = formattedNumber


})

exp_month_card.addEventListener("input", (e) => {
    document.querySelector(".span-month").textContent = e.target.value

})
exp_year_card.addEventListener("input", (e) => {
    document.querySelector(".span-year").textContent = e.target.value

})

card_cvc.addEventListener("input", (e) => {
    document.querySelector(".span_text_back_card").textContent = e.target.value

})


butSend.addEventListener("click", () => {

    validation(holder_name.value, card_number.value, exp_month_card.value, exp_year_card.value, card_cvc.value)


})
//validation of empty field
function validation(nameCard, numberCard, monthExp, yearExp, cvcCard) {
    if (nameCard != "" && numberCard != "" && monthExp != "" && yearExp != "" && cvcCard != "") {
        section_inputs.style.display = "none"
        sendForm.style.display = "flex"
        sendForm.style.transtition="0.3s"

    } else {

        if (nameCard == "") {
            paintError(holder_name, "Can´t be blank", span_cardName_err)
        } else {
            removeError(holder_name, "", span_cardName_err)

        }

        if (numberCard == "") {
            paintError(card_number, "Can´t be blank", span_cardNumber_err)
        } else {

            if (numberCard.length < 16) {
                paintError(card_number, "wrong length", span_cardNumber_err)
            } else {
                removeError(card_number, "", span_cardNumber_err)
                for (let i = 0; i <= 15; i++) {
                    let str = parseInt(numberCard.charCodeAt(i))
                    console.log(str, numberCard)
                    if (str >= 48 && str <= 57) {
                        console.log("strimng ok")
                    } else {
                        paintError(card_number, "Wrong format, numbers only", span_cardNumber_err)

                    }
                }
            }
        }


        if (yearExp == "") {
            paintError(exp_year_card, "Can´t be blank", span_exp_date_err)
        } else if (yearExp.length < 2) {
            paintError(exp_year_card, "Year need a second digit", span_exp_date_err)
        }
        else {

            exp_year_card.classList.remove("error-input")
            span_exp_date_err.textContent = ""
            span_exp_date_err.classList.remove("span_text_error")
        }

        if (monthExp == "") {
            paintError(exp_month_card, "Can´t be blank", span_exp_date_err)
        } else if (monthExp.length < 2) {
            console.log(monthExp.length)
            paintError(exp_month_card, "Month need a second digit", span_exp_date_err)

        } else {

            exp_month_card.classList.remove("error-input")

            //span_exp_date_err.classList.remove("span_text_error")
        }

        if (cvcCard == "") {
            paintError(card_cvc, "Can´t be blank", span_cvc_err)
        } else {
            removeError(card_cvc, "", span_cvc_err)
        }



    }
}
//function paint error

function paintError(type, msg, span) {
    type.classList.add("error-input")
    span.textContent = msg
    span.classList.add("span_text_error")
}
//function remove error

function removeError(type, msg, span) {
    type.classList.remove("error-input")
    span.textContent = ""
    span.classList.remove("span_text_error")
}
