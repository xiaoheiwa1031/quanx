","UG","AE","US","UY","VU","ZM","BO","BN","CG","CZ","VA","FM","MD","PS","KR","TW","TZ","TL","GB"]
tff=["plus","on"]
let gpt;
let warps;
let iconUrl = ' ';
let iconColor = ' ';
let args = {};
if (typeof $argument !== 'undefined') {
  $argument.split('&').forEach(item => {
    const [key, value] = item.split('=');
    args[key] = value;
  });
}
if (args.icon) {
  iconUrl = args.icon;
}
if (args['icon-color']) {
  iconColor = args['icon-color'];
}
$httpClient.get(url, function(error, response, data){
	let lines = data.split("\n"); 
	let cf = lines.reduce((acc, line) => {
		let [key, value] = line.split("=");
		acc[key] = value;
		return acc;
	},{});
let ip = cf.ip
let warp = cf.warp
let loc = getCountryFlagEmoji(cf.loc)
let colo = cf.colo
//loc
let l = tf.indexOf(cf.loc)
if (l != -1) {
	gpt = "GPT状态 :                                     ✅"
} else {
	gpt = "GPT状态 :                                     ❌"
}
//warp
let w = tff.indexOf(warp)
if (w != -1) {
	warps = "                                ✅"
} else {
	warps = "                                ❌"
}
body = {
title: "🤖ChatGPT检测",
content: `节点ip : ${ip}\n节点区域 :                                 ${loc} | ${colo}\n${gpt}\nWarp+状态 : ${warps}`,
  icon: iconUrl,
  'icon-color': iconColor,
},$done(body);})

//获取国旗Emoji函数
function getCountryFlagEmoji(countryCode) {
    if (countryCode.toUpperCase() == 'TW') {
      countryCode = 'CN'
    }
    const codePoints = countryCode
      .toUpperCase()
      .split('')
      .map(char => 127397 + char.charCodeAt())
    return String.fromCodePoint(...codePoints)
}
