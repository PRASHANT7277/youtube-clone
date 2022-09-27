function navbar(){
    return `    <div id="logo">
    <div><i class="fas fa-bars"></i></div>
    <div>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqtQPafWHVc4udPbOgw2r3-sVbBOk8pbi1yA&usqp=CAU"
        alt=""
      />
    </div>
  </div>
  <div id="search">
    <input type="text" id="video" placeholder="Search" />
    <button onclick="searchmovie()"><i class="fas fa-search"></i></button>
  </div>
  <div id="right">
    <div><i class="fas fa-video"></i></div>
    <div><i class="fas fa-th"></i></div>
    <div><i class="fas fa-bell"></i></div>
    <div><i class="fas fa-user-circle"></i></div>
  </div>`
}

export default navbar