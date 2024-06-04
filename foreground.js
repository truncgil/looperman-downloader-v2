


function button(href,x,y) {
    var button = '<a href="'+href+'" style="position:absolute;top:'+y+'px;right:'+x+'px;z-index:100;text-decoration:none;font-size:40px;" class="" download><span class="" >⬇️</span></a>';
    return button;
}
var player = $(".player-wrapper");
player.each(function(){
    let bu = $(this);
    let url = bu.attr("rel");
    console.log(url);
    let pos = bu.offset();
    console.log(pos);
    bu.append(button(url,0,75));
});
$(".player-wrapper").css("position","relative");
