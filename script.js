const apikey = "f42cb48cce5a4e959007b4d57d0f1201";

const blogContainer = document.getElementById("blog-container");

async function fetchRandomNews(){
  try{
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=us&pageSize=10&apiKey=${apikey}`;
    const response=await fetch(apiUrl)
    const data= await response.json()


  }catch(error){
    console.error("Error fetching news",error)
    return []

  }
}


(async()=>{
  try{
    const articles=await fetchRandomNews()
    console.log(articles)

  }catch(error){
    console.error("Error fetching random news",error)
  }

})