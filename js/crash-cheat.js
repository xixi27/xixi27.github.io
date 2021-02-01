var oldTitle = document.title;
var titleTime; //标题恢复计时器
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    $("[rel='icon']").attr("href", "/images/crash.jpg");
    document.title = "网站崩溃了！";
    clearTimeout(titleTime);
  } else {
    document.title = "其实并没有！";
    $("[rel='icon']").attr("href", "/images/favicon.jpg");
    titleTime = setTimeout(function () {
      document.title = oldTitle;
    }, 1000);
  }
});