var homeCount = 0;
var homeFactButton = document.getElementById("homeFactButton");
var homeFact = document.getElementById("homeFact");

var homeFactArray = ["In a lawful response to these attacks, the COVID-19 Hate Crimes Act was passed to raise awareness on hate crime reporting" , "Culture appropriation not only dehumanizes the oppressed group, but they also don't accurately represent the rightful history and culture" , "Chinatown in the Manhattan area now faces gentrification and the pandemic as many family owned businesses have gone out of business" , "In New York City, there was a 395% increase in anti-Asian hate crimes"];

homeFactButton.addEventListener("click", runHomeFact);

function runHomeFact()
{
  homeFact.innerHTML = homeFactArray[homeCount];
  homeCount++;
  if(homeCount == homeFactArray.length)
  {
    homeCount=0;
  }
}

