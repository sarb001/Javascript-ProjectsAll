// reverse a string 

function reversestring(str)
{
     return str.split('').reverse().join('');
}

console.log(reversestring('vrello'));


// js function for Palindrome 
// By  starting and reversing the character should et same results  

function checkpal(str)
{
    var reversestr = reversestring(str);

    if(str === reversestr)
    {
        return true;
    }
    return false;
}
console.log(checkpal('oppo'))

// Put the zero if month is less than 9 like 09 
// same for day also 

    function convertDatetoStr(date)
    {
      var dateStr = {day: '', month : '' , year : ''};

    //    if day no. is less  than 10 then append zero before digit 9
        if(date.day < 10)
        {
            dateStr.day = '0' + date.day;    // 0 + 9 = 09 
        }
        else{
            dateStr.day = date.day.toString(); // rest converted to string  10 ->  '10'
        }

        //    if month no. is less  than 10 then append zero before digit 9
        if(date.month < 10)
        {
            dateStr.month = '0' + date.month;    // 0 + 9 = 09 
        }else{
            dateStr.month = date.month.toString(); // restt converted to string  10 ->  '10'
        }

        dateStr.year = date.year.toString();
        return dateStr;
    }

    var date = {
      day : 29,
      month : 2,
      year : 2020
    }

    console.log(convertDatetoStr(date))


// get All date Formats 

function getallDateFormats()
{
    var dateStr = convertDatetoStr(date);

    var ddmmyyyy = dateStr.day + dateStr.month + dateStr.year ;
    var mmddyyyy = dateStr.month + dateStr.day + dateStr.year  ;
    var yyyymmdd =  dateStr.year + dateStr.month + dateStr.day ;
    var ddmmyy = dateStr.day + dateStr.month + dateStr.year.slice(-2) ;
    var mmddyy = dateStr.month + dateStr.day + dateStr.year.slice(-2) ;
    var yymmdd = dateStr.year.slice(-2) + dateStr.month + dateStr.day ;

    return [ddmmyyyy , mmddyyyy , yyyymmdd ,ddmmyy , mmddyy , yymmdd];

}

console.log(getallDateFormats(date));


function checkpalindromeforalldateformats()
{
     var listofpalindrome = getallDateFormats(date);

    //   loop over the array result of palindrome 
        var checkispalindrome = false;

     for(var i = 0;i<listofpalindrome.length;i++)
     {
        if(checkpal(listofpalindrome[i]))
        {   
            checkispalindrome = true;
            break;
        }
     }
     return checkispalindrome;
}

console.log(checkpalindromeforalldateformats(date))


//  check for leap yeaar 

 function  isleapyear(year)
 {
        if(year % 400 === 0)
        {
             return true;
        }
        if(year % 100 === 0){
             return false;
        }
        if(year % 4 === 0){
            return true;
        }
        return false;
 }
console.log(isleapyear(2021))


// get the next date bro


function getNextdate(date)
{
   var day   = date.day + 1 ;
   var month = date.month;
   var year  = date.year;

//    // Array of months  will go from 0-11 
   var daysinmonth = [31,28,31,30,31,30,31,31,30,31,30,31]

//    //  If Month is feb  
    if(month === 2)
    {
       if(isleapyear(year))
       {  if(day > 29)            // If day exceeed then day 29 
            {
                day = 1;           // make it to day 1
                month++;           // Jump to next Month
            }
       }else{
           if(day > 28)
           {
               day = 1;
               month++;
           }
       }
    }else{
       if(day > daysinmonth[month-1])
       {
           day = 1;
           month++;
       }
    }


    if(month > 12)
    {
       month = 1;
       year++;
    }
    return{
       day: day,
       month : month,
       year : year,
    }   
}

console.log(getNextdate(date));


// get next palidomrDATE 

function getnextpalindromedate(date)
{
    var ctr = 0;
    var nextdate = getNextdate(date);

    while(1){
       ctr++;
       var ispalindrome = checkpalindromeforalldateformats(nextdate);
         if(ispalindrome){
           break;
       }
       nextdate = getNextdate(nextdate);
    }
    return [ctr,nextdate];
}


var dateinputref = document.querySelector('#bday-input');
var showbtnref = document.querySelector('#show-btn');
var resultref =  document.querySelector('#result');

showbtnref.addEventListener('click',clickhandler);

function clickhandler(e)
{
     var bdaystr = dateinputref.value ;

     if(bdaystr !== '')
     {
        var listofdate = bdaystr.split('-');  // ['2020' , '10', '11']

        console.log(listofdate);

        var date = {
            day :Number(listofdate[2]),
            month : Number(listofdate[1]),
            year :Number(listofdate[0]),
        };

        console.log(date);

        var ispalindrome = checkpalindromeforalldateformats(date);

        if(ispalindrome) {
            resultref.innerText = 'Yay! your birthday is Palindorme!!';
        }
        else{
            var [ctr,nextdate] = getnextpalindromedate(date);

            resultref.innerText = `The  next palindrome date is ${nextdate.day} -${nextdate.month}-${nextdate.year},you missed 
            it by ${ctr} days!!`;
        }
     }
}