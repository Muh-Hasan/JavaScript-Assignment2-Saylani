// ASSIGNMENT PART-2
// ASSIGNMENT 21 - 25

var  first_name = prompt("Enter First Name","first Name")
var  last_name = prompt("Enter Last Name","last")
alert("Thank for Coming "+first_name+" "+last_name)

var fav_phone = prompt("Enter favorite Phone","favorite Phone")
alert("My favorite Phone Is : "+fav_phone+"\nLenght of string Is : "+fav_phone.length)

var pak = "Pakistani"
alert("String : "+pak+"\nIndex of 'n' : "+pak.indexOf("n"))

var hello = "Hello World"
alert("String : "+hello+"\nIndex of 'd' : "+hello.indexOf("d"))

var paki = "Pakistani"
alert("String : "+paki+"\nCharacter at 3 Index  : "+paki.charAt(3))


var  first_name1 = prompt("Enter First Name","first Name")
var  last_name1 = prompt("Enter Last Name","last")
var name = first_name1.concat(last_name1)
alert("Thank for Coming "+name)

var rep = "Hyderabad"
alert("Before Replace : "+rep+"\nAfter Replace : "+rep.replace("Hyderabad","Islambad"))

var message = "Ali and Sami are best friends. They play cricket and football together.";
alert("Before Replace : "+message+"\nAfter Replace : "+message.replace(/and/g,"&"))

var number = "400"
var number1 = parseInt(number)
alert("Before Convert : "+number+"\nType : "+typeof(number)+"\nAfter Convert : "+number1+"\nType : "+typeof(number1))

var user_op =  prompt("Enter Auything ")
alert(user_op.toUpperCase())

var user_op1 = prompt("Enter Tittle")
var common = user_op1.slice(0,1).toUpperCase()
var common1 = user_op1.slice(1)
var final = common.concat(common1)
alert(final)

var number2 = 34.45
var numstr = number2.toString()
var common2 = numstr.replace(".","")
alert(common2)

var sp_char = ['@','_','-','$','!']
var user_name  = prompt("Enter User Name")
for (var i = 0 ; i <= user_name.length; i++){
    if (user_name[i] === sp_char[i]){
        alert("Please Enter A valid User Name ")
    }
    else{
        alert("Thank You")
        break
    }
}

var bakery = ['cookies','egg','pastery','cake','chip']
var search  = prompt("Enter Item")
for (var i = 0 ; i <= bakery.length; i++){
    if (search.toLowerCase() === bakery[i]){
        alert(search+" Is Available at Index of : "+bakery.indexOf(search.toLowerCase()))
    }

}

var password = prompt("Enter Password","Password")
var specialchar = ['<','>','/','?','@','.','$','%','&','|']
if (password.length < 6){
    alert("Password Is Not Valid")
}
else if (password[0] >= 0){
    alert("Password Is Not Valid")
}
else if (password.match(specialchar)){
    alert("Password Is Not Valid")
}

var university = "University of Karachi";
var uni = university.split("")
document.write(uni)

var input = prompt("Enter Anything")
alert("Last Character Of "+input+" is : "+input.slice(-1))

var string = "The quick brown fox jumps over the lazy dog"
var cal = string.match("the").length+ string.match("The").length
alert("There are "+cal+" occurance of 'The'")


// MATH METHODS

var user_5 = parseFloat(prompt("Enter Any Positive Integer","Integer"))
document.write("Number : "+user_5+ "<br>Round Off : "+Math.round(user_5)+"<br>Floor : "+Math.floor(user_5)+"<br>Ceil : "+Math.ceil(user_5))


var user_6 = parseFloat(prompt("Enter Any Negative Integer","Integer"))
document.write("Number : "+user_6+ "<br>Round Off : "+Math.round(user_6)+"<br>Floor : "+Math.floor(user_6)+"<br>Ceil : "+Math.ceil(user_6))

var num2 = -4
document.write("Absolute Value : "+num2+" is : "+Math.abs(num2))

var bigDecimal = Math.random();
var improvedNum = (bigDecimal * 6) + 1;
var numberOfStars = Math.floor(improvedNum);
alert("Dice : "+numberOfStars)

var coinrandom = Math.random();
var improvedcoin = (coinrandom * 2) + 1;
var coin = Math.floor(improvedcoin);
if (coin === 1){
    alert("Heads : "+coin)
}
else{
    alert("Tails : "+coin)
}


var random = Math.random();
var improvedran = (random * 100) + 1;
var final_2 = Math.floor(improvedran);
alert("Random Number 1 - 100 : "+final_2)

var weight = parseFloat(prompt("Enter Your Weight","Weight"))
document.write("The Weight Is : "+weight+" Excepted : "+Math.floor(weight)+" Or "+Math.ceil(weight) )

var store = 2
var input_6 = parseInt(prompt("Enter Number","1-10"))
if (input_6 === store){
    alert("YOU WIN!!!")
}
else if (input_6 === store + 1){
    alert("TOO CLOSE !!!!")
}
else{
    alert("try again")
}


// DATE METHOD

var date  = new Date()
var datestring = date.toString()
alert(datestring)

var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
var datemonth = new Date()
var now_month = datemonth.getMonth()
alert("Month : "+months[now_month])

var day = ['Sun','Mon','Tue','Wed','Thu','Fir','Sat']
var dateday = new Date()
var now_month = dateday.getDay()
alert("Day : "+day[now_month])

if (now_month === day[6] || day[0]){
    alert("IT'S A FUN DAY!!")
}

var today_date = new Date()
var final_date = today_date.getDate()
if (final_date-30 <= 16){
    alert("LAST DAYS OF MONTH")
}
else {
    alert("START OF MONTH ")
}

var input_3 = parseFloat(prompt("Enter Time","24 Hours"))
if (input_3 <= 12){
    alert("It's AM")
}
else{
    alert("It's PM")
}

var one = new Date()
var two = one.setMonth(4)
var three = one.setDate(30)
var laterday = one.toString()
alert(laterday)

var o_1 = new Date("June 18, 2015")
var o_3 = new Date()
var minus = o_3.getTime() - o_1.getTime() 
var final_4= minus / (1000*60*60*24)
alert(Math.floor(final_4)+" have been Passed Since 1st of Ramadan 2015")

var q1 = new Date("Decmeber 5, 2015")
var q2 = new Date()
var df = Math.abs(q2 - q1 )
alert(df+ " Seconds Passed Till Now")

var set_change  = new Date()
var set_date = set_change.setHours(13)
var set_new = new Date()
alert("Current Hour : " +set_new.toString()+"\n Before 1 hour : "+set_change.toString())

var f1 = new Date()
var f2 = f1.setFullYear(1920)
var f3 = new Date()
alert("Current Date : "+f3.toString()+"\n 100 Years Back : "+f1.toString())

var user_input  = parseFloat(prompt("Enter Your Current Age","Age"))
var final_age = 2020 - user_input
alert("Birth Date : "+final_age)

var months1 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec']
var units = 400
var charge_units = 20
var amount_payable = units * charge_units
var late_pay = amount_payable + 300
var get_date = new Date()
var get_date1 = get_date.getMonth()
console.log("K - Electric Bill");
console.log("Name : Hasan");
console.log("Months : "+months1[get_date1]);
console.log("Units : "+units);
console.log("Charge Per Units : "+charge_units);
console.log("Amount Payable : "+amount_payable);
console.log("Late Amount Payable : "+late_pay);

// FUNTIONS 

function date(){
    var date = new Date()
    alert(date.toString())
}
date()

function name(){
    var first = prompt("Enter First Name : ")
    var last = prompt("Enter Last Name : ")
    alert("Thanks For Coming "+first+" "+last)
}
name()

function add(){
    var one  = parseInt(prompt("Enter Number"))
    var two  = parseInt(prompt("Enter Number"))
    var add1 = one + two
    return alert(add1)
}
add()

function cal(a,b){
    var min = a - b
    return alert(min)
}
cal(2,3)

