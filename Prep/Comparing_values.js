//1
const showResult = (number, result) => {
	console.log(number, result ? "True" : "False")
}
//"hello" === "hello"
showResult(1, "hello" === "hello")

//2
//"CYF" === "cyf"
showResult(2, "CYF" === "cyf")

//3 
//const homeTown = "Newcastle"
//homeTown === "Liverpool"

const homeTown = "Newcastle"
showResult(3, homeTown === "Liverpool")

//4
showResult(4, 42 === 42)

//5
showResult(5, 42 === "42")

//6
showResult(6, 42 == "42")