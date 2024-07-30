/* .js files add interaction to your website */
var count=0; 
var factButton=document.getElementById("factButton");
var fact=document.getElementById("fact");
var factArray = ["<a href='https://www.change.org/p/get-mainstream-news-coverage-of-national-elderly-asian-american-assaults-cnn-msnbc-fox-vice-buzzfeed-nyt-washpost-latimes-axios?recruiter=735455675&recruited_by_id=569a3300-53bd-11e7-b30b-f7e63e563bcd&utm_source=share_petition&utm_medium=copylink&utm_campaign=psf_combo_share_initial' target='_blank'>More News Coverage for Anti-Asian Hate Crimes</a>","<a href='https://secure.givelively.org/donate/mekong-inc' target='_blank'>Donate to Mekong NYC</a>", "<a href='https://caaav.ourpowerbase.net/civicrm/contribute/transact?reset=1&id=2' target='_blank'>Donate to CAAAV</a>", "<a href='https://www.change.org/p/stop-depicting-east-south-east-asians-in-coronavirus-related-media?utm_source=share_petition&utm_medium=custom_url&recruited_by_id=74e4a100-f3ff-11e7-81f0-b1653e987f56' target='_blank'>We Are Not A Virus</a>"];

factButton.addEventListener("click", runfact);

function runfact()
{
  fact.innerHTML = factArray[count];
  count++;
  if(count== factArray.length)
  {
    count = 0;
  }
}


