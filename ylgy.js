var Body = JSON.parse($response.body);
switch ($request.url.match(/maps|personal|json/)[0]){
 case "maps":
 Body.blockTypeData ={}
break;
 case "personal":
 var objk = Body.data;
objk["challenge"] = "999999";
objk["win_count"] = "999999";
objk["nick_name"] = "站在我下面的都是辣鸡";
objk["daily_count"] ="1";
objk["topic_count"] ="999999";
  break;
 default:
$done({ body: $response.body
.replace(/false/g,'true') });
 }
$done({body: JSON.stringify(Body)});
