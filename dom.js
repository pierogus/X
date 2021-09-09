function init_chat() {
	document.getElementsByClassName("logitem")[0].innerHTML = /* html */`
	IP: Fetching <br/>
	City: Fetching <br/>
	Region: Fetching <br/>
	Country: Fetching <br/>
	ISP: Fetching <br/>
	<div id="time">Time: Fetching </div>
	Timezone: Fetching <br/>
	<div id="ctime">Connection: 00:00:00</div>
	<button type="button" onclick="list.blacklist_this()">Blacklist this IP</button>
	<button type="button" onclick="list.whitelist_this()">Whitelist this IP</button> <br/>
	<button type="button" onclick="dclick.new_connection()">New Connection</button>
	<button type="button" onclick="dclick.discconect()">Skip</button>
	<button type="button" onclick="dclick.reroll_skip()">Skip and stop reroll</button> <br/>
	<button type="button" onclick="local.save()">Save to local storage</button>
	<button type="button" onclick="local.clear()">Clear local storage</button>`;
}
const reg = /\("Omegle video chat might not work well in Microsoft Edge\. Please upgrade to Firefox or Chrome\."\)/g
const string = `("Omegle video chat might not work well in Microsoft Edge. Please upgrade to Firefox or Chrome."),init_chat()`;
let chat = startNewChat.toString();
chat = chat.substring(35);
chat = chat.substring(0, chat.length - 1);
chat = chat.replace(reg, string);
startNewChat = new Function (["a","b","c","e","f"], chat);
setShouldUseEnglish(true);
$("onlinecount").style.position = "absolute";
$("onlinecount").style.bottom = "18px";
$('sharebuttons').dispose();
$('tagline').dispose();
$("footer").dispose();
