

const result = document.getElementById("result");

async function abc() {
  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=random&type=video&key=AIzaSyAIGC7J5ud4Iwpnbvk2qxskEl-XbLWwfSE&maxResults=40`
    );
    let data = await res.json();
    let item = data.items;
    appendvideo(item);
  } catch (er) {
    console.log("er:", er);
  }
}
abc();
async function searchmovie() {
  let video = document.getElementById("video").value;

  try {
    let res = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${video}&type=video&key=AIzaSyAIGC7J5ud4Iwpnbvk2qxskEl-XbLWwfSE&maxResults=40`
    );
    let data = await res.json();
    let item = data.items;
    appendvideo(item);
  } catch (er) {
    console.log("er:", er);
  }
}

const appendvideo = (items) => {
  if (items == undefined) {
    return false;
  }
  result.innerHTML = null;
  items.map((el) => {
    let {
      snippet,
      id: { videoId },
    } = el;

    let img = document.createElement("img");
    img.style.width = "100%"
    img.src = snippet.thumbnails.medium.url;

    let title = document.createElement("p");
    title.textContent = snippet.title;

    let div = document.createElement("div");

    let data_to_send = {
      snippet,
      videoId,
    };

    div.onclick = () => {
      show_details(data_to_send);
    };

    div.append(img, title);
    result.append(div);
  });
};

function show_details(data) {
  console.log("data:", data);

  localStorage.setItem("clicked_video", JSON.stringify(data));
  window.location.href = "video.html";
}