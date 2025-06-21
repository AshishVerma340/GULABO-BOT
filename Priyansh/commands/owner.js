module.exports.config = {
  name: "owner",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "PREM BABU",
  description: "Friends Dp photos",
  commandCategory: "Random-IMG",
  usages: "bestie dp",
  cooldowns: 2,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
    
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
    var link = [
"https://i.ibb.co/jgk6rB0/7ce2390636d1a46a331662dbaaf693d6.jpg"
     ];
     var callback = () => api.sendMessage({body:`🔰𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🔰

   ༄𒁍≛⃝MR ASHISH VERMA•◡•)

𝐀𝐠𝐞 : 24

𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 : 𝐒𝐈𝐍𝐆𝐋𝐄 𝐁𝐇𝐀𝐓𝐀𝐊 𝐑𝐇I 𝐇𝐀𝐈

𝐅𝐫𝐨𝐦 : CHHATTISGARH  (𝐑.𝐉.N)

𝐒𝐭𝐮𝐝𝐲 : BA FINAL 

𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤  : https://www.facebook.com/share/16NXatKn7g/

𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐂𝐨𝐧𝐭𝐚𝐜𝐭 : +91 7600689803

JAI SHREE RAM JI 🥀 🥰 🌍❤️🙂!❤🙂♣️`,attachment: fs.createReadStream(__dirname + "/cache/1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.jpg"));  
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/1.jpg")).on("close",() => callback());
   };
