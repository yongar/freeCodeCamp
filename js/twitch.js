var channels = ["freecodecamp", "test_channel", "ESL_SC2"];


function getChannelInfo() {
  channels.forEach(function (channel) {
    function makeURL(type, name) {
      return 'https://wind-bow.gomix.me/twitch-api/' + type + '/' + name +
        '?callback=?';
    };
    $.getJSON(makeURL("streams", channel), function (data) {
      var game, status;
      console.log(data);
      var channelID = "#" + channel;
      console.log(channelID);

      if (data.stream === null) {
        game = "Offline";
        status = "offline";
        $(channelID).addClass('panel-default');
        $(channelID + "> div.panel-body").text(channelID + " is offline!");

      } else if (data.stream === undefined) {
        $(channelID).addClass('panel-danger');
        $(channelID + "> div.panel-body").text(channelID + " is closed!");
      } else {
        game = data.stream.game;
        status = "online";
        $(channelID).addClass('panel-success');
        console.log(channelID);
        $(channelID + "> div.panel-body").text(channelID + " is online!");
        $(channelID + "> div.panel-body").append(
          '<BR><a href="https://www.twitch.tv/esl_sc2">ESL_SC2</a>');
      }; //end if
    });
  });
};
$(document).ready(function () {

  getChannelInfo();

});
