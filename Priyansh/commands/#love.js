module.exports.config = {
    name: "love",
    version: "7.3.1",
    hasPermssion: 0,
    credits: " SHAH",///don't change my Credit Coz i Edit 
    description: "Get Pair From Mention",
    commandCategory: "img",
    usages: "[@mention]",
    cooldowns: 6,
    dependencies: {
        "axios": "",
        "fs-extra": "",
        "path": "",
        "jimp": ""
    }
};
 
module.exports.onLoad = async() => {
    const { resolve } = global.nodemodule["path"];
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { downloadFile } = global.utils;
    const dirMaterial = __dirname + `/cache/canvas/`;
    const path = resolve(__dirname, 'cache/canvas', 'ay.jpeg');
    if (!existsSync(dirMaterial + "canvas")) mkdirSync(dirMaterial, { recursive: true });
    if (!existsSync(path)) await downloadFile("https://i.imgur.com/yynJVyB.jpeg", path);
}
 
async function makeImage({ one, two }) {
    const fs = global.nodemodule["fs-extra"];
    const path = global.nodemodule["path"];
    const axios = global.nodemodule["axios"]; 
    const jimp = global.nodemodule["jimp"];
    const __root = path.resolve(__dirname, "cache", "canvas");
 
    let batgiam_img = await jimp.read(__root + "/ay.jpeg");
    let pathImg = __root + `/batman${one}_${two}.jpeg`;
    let avatarOne = __root + `/avt_${one}.jpeg`;
    let avatarTwo = __root + `/avt_${two}.jpeg`;
 
    let getAvatarOne = (await axios.get(`https://graph.facebook.com/${one}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarOne, Buffer.from(getAvatarOne, 'utf-8'));
 
    let getAvatarTwo = (await axios.get(`https://graph.facebook.com/${two}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: 'arraybuffer' })).data;
    fs.writeFileSync(avatarTwo, Buffer.from(getAvatarTwo, 'utf-8'));
 
    let circleOne = await jimp.read(await circle(avatarOne));
    let circleTwo = await jimp.read(await circle(avatarTwo));
    batgiam_img.composite(circleOne.resize(170, 170), 100, 120).composite(circleTwo.resize(170, 170), 445, 120);
 
    let raw = await batgiam_img.getBufferAsync("image/jpeg");
 
    fs.writeFileSync(pathImg, raw);
    fs.unlinkSync(avatarOne);
    fs.unlinkSync(avatarTwo);
 
    return pathImg;
}
async function circle(image) {
    const jimp = require("jimp");
    image = await jimp.read(image);
    image.circle();
    return await image.getBufferAsync("image/png");
}
 
module.exports.run = async function ({ event, api, args }) {    
    const fs = global.nodemodule["fs-extra"];
    const { threadID, messageID, senderID } = event;
    const mention = Object.keys(event.mentions);
    if (!mention[0]) return api.sendMessage("Please mention 1 person.", threadID, messageID);
    else {
        const one = senderID, two = mention[0];
        return makeImage({ one, two }).then(path => api.sendMessage({ body: "`⸙⸙LOVES⸙⸙\n  ༺𝙒𝙞𝙨𝙝 𝙮𝙤𝙪 𝙩𝙬𝙤 𝙝𝙪𝙣𝙙𝙧𝙚𝙙 𝙮𝙚𝙖𝙧𝙨 𝙤𝙛 𝙝𝙖𝙥𝙥𝙞𝙣𝙚𝙨𝙨😘🥰༻\n━━━━━━━━━━━━━━━━\n*★᭄𝗖𝗿𝗲𝗱𝗶𝘁𝘀  ཫ༄𒁍≛⃝mR Ashish verma", attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID));
    }
}
