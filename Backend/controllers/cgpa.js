const cgpaCal = (req,res)=>{

// const submitBtn = document.querySelector("#submit-button")
// const resetBtn = document.querySelector("#reset-button")
// const cgpaCard = document.querySelector("#cgpa-card")
var reference = 0

console.log(req.body);

function operation() {
  const courseOneCredits = parseInt(req.body.co1c)
  const courseOneGradePoints = parseInt(req.body.co1g)

  const courseTwoCredits = parseInt(req.body.co2c)
  const courseTwoGradePoints = parseInt(req.body.co2g)

  const courseThreeCredits = parseInt(req.body.co3c)
  const courseThreeGradePoints = parseInt(req.body.co3g)

  const courseFourCredits = parseInt(req.body.co4c)
  const courseFourGradePoints = parseInt(req.body.co4g)

  const courseFiveCredits = parseInt(req.body.co5c)
  const courseFiveGradePoints = parseInt(req.body.co5g)

 
  const totalCredits =
    courseOneCredits +
    courseTwoCredits +
    courseThreeCredits +
    courseFourCredits +
    courseFiveCredits 


  //document.getElementById("total-credits").innerHTML = totalCredits

  reference = totalCredits

  const courseOneCreditPoints = courseOneCredits * courseOneGradePoints
  const courseTwoCreditPoints = courseTwoCredits * courseTwoGradePoints
  const courseThreeCreditPoints = courseThreeCredits * courseThreeGradePoints
  const courseFourCreditPoints = courseFourCredits * courseFourGradePoints
  const courseFiveCreditPoints = courseFiveCredits * courseFiveGradePoints



  const totalCreditPoints =
    courseOneCreditPoints +
    courseTwoCreditPoints +
    courseThreeCreditPoints +
    courseFourCreditPoints +
    courseFiveCreditPoints 

    
//   document.getElementById("total-credit-points").innerHTML = totalCreditPoints

  const cgpa = totalCreditPoints / totalCredits

  console.log(cgpa);
  res.send({cgpa})

 // document.getElementById("your-cgpa").innerHTML = cgpa
}

// submitBtn.addEventListener("click", (e) => {
//   e.preventDefault()
//   operation()
//   if (reference == 0) return
//   cgpaCard.classList.add("open") //document.getElementById("my-form").reset()
// })

// resetBtn.addEventListener("click", (e) => {
//   document.getElementById("my-form").reset()
// })

operation()
}

module.exports={cgpaCal}