

    let {videoId,snippet:{title,description}} = JSON.parse(localStorage.getItem("clicked_video"))
   /// console.log('description:', description)

    let video_div = document.getElementById("video")

    
    let des = document.createElement("p")
    des.textContent = description

    let tit = document.createElement("p")
    tit.textContent = title

    let iframe = document.createElement("iframe")
    iframe.src = `https://www.youtube.com/embed/${videoId}`
    iframe.width = "100%";
    iframe.height="100%"

    iframe.setAttribute("allowFullscreen",true)

    video_div.append(iframe,tit,des)


    async function ab(){
     try{
        let res = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=random&type=video&key=AIzaSyAIGC7J5ud4Iwpnbvk2qxskEl-XbLWwfSE&maxResults=5`
          );
          let data = await res.json();
          let item = data.items;
          console.log('item:', item)
          appendvideo(item);
     }
     catch(er){
         console.log('er:', er)

     }
    }
    ab()

    const appendvideo = (item)=>{
        
        item.map((el)=>{
            let{snippet,id:{videoId}} =el
            console.log('snippet:', snippet)
            
            let iframe = document.createElement("iframe")
            iframe.src = `https://www.youtube.com/embed/${videoId}`
            iframe.width="90%"
            iframe.height = "100%"

            let title = document.createElement("p")
            title.textContent = snippet.title

            let div = document.createElement("div")
            div.append(iframe,title)
            document.getElementById('re').append(div)
        
        })

    }
