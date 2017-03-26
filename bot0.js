var linebot = require('linebot');

var bot = linebot({
    channelId: "1506550028",
    channelSecret: "61a5028a4d00c01d7c179dcc41f849c2",
    channelAccessToken: "Dhs/TAId7FiwLOfTtzMobtuMH1qTeKMhinhMagfXxwyFGdMeiMFvU1FDMYoawd8g4gG6zA4ccoqyXTfCPQFD/V8ZY2Mgr1PKPYR+AqXqs8zD3ftNbJEGbr1Z2vX+WwuKRMsEs/zTclZy8xf2coG2IgdB04t89/1O/w1cDnyilFU="
});

bot.on('message', function (event) {
    event.reply(event.message.text).then(function (data) {
      console.log("message success");
        // success
    }).catch(function (error) {
        // error
        console.log("message error");

    });
});

bot.on('join',     function (event) {
event.reply({ type: 'text', text: event.source.groupId});
});


bot.listen('/linebot', process.env.PORT || 3000);
