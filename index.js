const billAmount = document.querySelector('#bill-amount');
const cashGiven = document.querySelector('#cash-given');
const checkButton = document.querySelector('#check-button');
const message = document.querySelector('#error-message');
const numberofNotesinput = document.querySelector('#no-of-notes');

const availableNotes = [2000,500,100,20,10,5,1];

checkButton.addEventListener('click',() =>
{  
      message.style.display = "none";
      if(billAmount.value > 0)
      {
             if(cashGiven.value >= billAmount.value)
             {
                   const amountleft = cashGiven.value - billAmount.value;
                   calculatechange(amountleft);
             }else  {   
                  showmessage(" Cash Provided is not Enough Buddy ");
             }
      }
      else {
            showmessage('Invalid Bill Amount');
      }
})

function calculatechange(amountleft){
      for(let i = 0;i < availableNotes.length;i++)
      {
            const numberofNotes = Math.trunc(
                  amountleft / availableNotes[i]
            );
            amountleft  %=  availableNotes[i];
            numberofNotesinput[i].innerText = numberofNotes;
      }
}

function showmessage(msg){
      message.style.display = "block";
      message.innerText = msg;
}