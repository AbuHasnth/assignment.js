// https://github.com/AbuHasnth/assignment.js


        // First Task


function kilometerToMeter (input){
            if(input <=0){
                return "invalid input"
            }
            else{
                var result = input * 1000;
                return result;
            }
        }





            // Second Task


function budgetCalculator(watch, phone, laptop){
            var content1= watch *50;
            var content2= phone * 100;
            var content3 = laptop * 500;
            var total = content1 + content2 + content3;
            return total;
        }




                // Third Task
                

function hotelCost(days){
            if (days<=0){
                return "invalid format";
            }
            else if(days<=10){
                var total= days * 100;
                return total;
            }
            else if(days>10 && days<= 20){
                var first10= 1000;
                var remainDays= days- 10;
                var secondPart = remainDays * 80;
                var total = first10 + secondPart;
                return total;
                
            }
            else if(days>20){
                var first10= 1000;
                var secondPart = 80 *10;
                var remainDays = days - 20;
                var thirdPart = remainDays * 50;
                var total = first10 + secondPart + thirdPart;
                return total;
            }
        }


                // Fourth Task

                function megaFriend(names){
                    if(names ==0 && names < 0){
                        console.log("invalid string");
                    }
                    else{
                        var bigger= names[0];
                for(var i= 0; i<names.length; i++){
                    var element = names[i];
                    if (element.length > bigger.length){
                        bigger = element;
                    }
                }
                console.log(bigger)
                    }
                }
    

