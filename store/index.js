import { createStore } from 'vuex'

export default createStore({
  state: {
    id: 9681,
    password: "VLntRgAvaf",
    first_name: "Dane",
    last_name: "Welch",
    SIN: "268533924",
    country: "United States",
    city: "Sixtaview",
    gender: "Non-binary",
    username: "dane.welch",
    email: "dane.welch@email.com",
    date_birth: "1975-12-17",
    phone_number:"+264 262.942.3473 x4607",
    employment: "Direct Consulting Strategist",
    street_name:"Bahringer Pike",
    avatar: "https://robohash.org/accusamusquamut.png?size=300x300\u0026set=set1",
    street_address:"2095 Mayer Manor","zip_code":"19592-7803",
    state:"Ohio",
    credit_card: {"cc_number":"5185-0022-7145-2072"},
    subscription:{"plan":"Premium","status":"Idle","payment_method":"Money transfer","term":"Payment in advance"},
  },
  getters: {
    firstLetters(state) {
return (state.first_name.charAt(0)) + (state.last_name.charAt(0))
    }
  }

})
