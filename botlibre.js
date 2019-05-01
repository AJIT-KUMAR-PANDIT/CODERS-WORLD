<script type='text/javascript' src="https://www.botlibre.com/scripts/sdk.js"></script>
<script type='text/javascript'>
SDK.applicationId = "7094200527321989267";
var sdk = new SDKConnection();
var web = new WebAvatar();
web.connection = sdk;
web.avatar = "12601502";
web.voice = "cmu-slt";
web.voiceMod = "default";
web.width = "300";
web.createBox();
web.addMessage("Welcome to my website", "", "", "");
web.processMessages();
</script>
