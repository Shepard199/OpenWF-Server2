'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _model = require('../../modules/account/model');

var _model2 = _interopRequireDefault(_model);

var _nodeXmppServer = require('node-xmpp-server');

var _nodeXmppServer2 = _interopRequireDefault(_nodeXmppServer);

var _ltx = require('ltx');

var _ltx2 = _interopRequireDefault(_ltx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (client, stz, query) {

	function getPlayers(obj) {

		var array = '';
		for (var i = 0; i < obj.length; i++) {
			if (obj[i].online_id === stz.attrs.from) {
				array += "<player profile_id='" + obj[i].profile_id + "' team_id='" + obj[i].team_id + "' status='" + obj[i].status + "' observer='" + obj[i].observer + "' skill='" + obj[i].skill + "' nickname='" + obj[i].nickname + "' clanName='" + obj[i].clanName + "' class_id='" + obj[i].class_id + "' online_id='" + obj[i].online_id + "' group_id='" + obj[i].group_id + "' presence='" + obj[i].presence + "' experience='" + obj[i].experience + "' rank='" + obj[i].rank + "' banner_badge='" + obj[i].banner_badge + "' banner_mark='" + obj[i].banner_mark + "' banner_stripe='" + obj[i].banner_stripe + "' region_id='" + obj[i].region_id + "'/>";
			} else {
				array += "<player profile_id='" + obj[i].profile_id + "' team_id='" + obj[i].team_id + "' status='" + obj[i].status + "' observer='" + obj[i].observer + "' skill='" + obj[i].skill + "' nickname='" + obj[i].nickname + "' clanName='" + obj[i].clanName + "' class_id='" + obj[i].class_id + "' online_id='" + obj[i].online_id + "' group_id='" + obj[i].group_id + "' presence='" + obj[i].presence + "' experience='" + obj[i].experience + "' rank='" + obj[i].rank + "' banner_badge='" + obj[i].banner_badge + "' banner_mark='" + obj[i].banner_mark + "' banner_stripe='" + obj[i].banner_stripe + "' region_id='" + obj[i].region_id + "'/>";
			}
		}
		return array;
	}

	_model2.default.gameroomopen.findOne({ 'core.players': { $elemMatch: { online_id: stz.attrs.from } } }, function (err, res) {

		var setprivatestatus = _ltx2.default.parse("<iq to='" + stz.attrs.from + "' from='" + stz.attrs.to + "' id='" + stz.attrs.id + "' type='get'>" + "<query xmlns='urn:cryonline:k01'>" + "<gameroom_setprivatestatus>" + "<game_room room_id='" + res.room_id + "' room_type='" + res.room_type + "'>" + "<core teams_switched='" + res.core.teams_switched + "' room_name='" + res.core.room_name + "' private='" + query.private + "' players='" + res.core.players + "' can_start='" + res.core.can_start + "' team_balanced='" + res.core.team_balanced + "' min_ready_players='" + res.core.min_ready_players + "' revision='" + res.core.revision + "'>" + "<players>" + getPlayers(res.core.players) + "</players>" + "<playersReserved/>" + "</core>" + "<room_master master='" + res.room_master.master + "' revision='" + res.room_master.revision + "'/>" + "</game_room>" + "</gameroom_setprivatestatus>" + "</query>" + "</iq>");
		client.send(setprivatestatus);
	}).sort({ _id: 1 });
};
//# sourceMappingURL=setprivatestatus.js.map