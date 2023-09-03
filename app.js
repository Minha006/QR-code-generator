const wrapper = document.querySelector(".wrapper");
const qrInput = wrapper.querySelector(".form input");
const generateBtn = wrapper.querySelector(".form button");
const qrImg = wrapper.querySelector(".qr-code img");
generateBtn.addEventListener("click", () => {
     let qrValue = qrInput.value;
      if(!qrValue) return;//if input is empty then return from here
     qrImg.src = ` https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`
     
     // console.log(qrValue);

  wrapper.classList.add("active");
});