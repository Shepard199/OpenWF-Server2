'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = require('../../modules/account/model');

var _model2 = _interopRequireDefault(_model);

var _model3 = require('../../modules/shop/model');

var _model4 = _interopRequireDefault(_model3);

var _ltx = require('ltx');

var _ltx2 = _interopRequireDefault(_ltx);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function moneyNew(money, item) {
    return parseInt(money - item);
}

exports.default = function (client, stz, query) {
    _model2.default.profile.findOne({ username: client.jid.user }, function (err, user) {
        _model4.default.items.findOne({ 'item.id': query.offer_id }, function (err, items) {

            var shop_buy_offer = _ltx2.default.parse("<iq to='" + stz.attrs.from + "' from='" + stz.attrs.to + "' id='" + stz.attrs.id + "' type='result'>" + "<query xmlns='urn:cryonline:k01'>" + "<shop_buy_offer offer_id='" + query.offer_id + "' error_status='0'>" + "<purchased_item>" + "<profile_item name='" + items.item.name + "' profile_item_id='" + items.item.id + "' offerId='" + items.item.id + "' added_expiration='" + items.item.expirationTime + "' added_quantity='" + items.item.quantity + "' error_status='0'>" + "<item id='" + items.item.id + "' name='" + items.item.name + "' attached_to='0' config='' slot='0' equipped='0' default='0' permanent='1' expired_confirmed='0' buy_time_utc='1466427941' total_durability_points='36000' durability_points='36000'/>" + "</profile_item>" + "</purchased_item>" + "<money game_money='" + moneyNew(user.game_money, items.item.game_price) + "' cry_money='" + moneyNew(user.cry_money, items.item.cry_price) + "' crown_money='" + moneyNew(user.crown_money, items.item.crown_price) + "'/>" + "</shop_buy_offer>" + "</query>" + "</iq>");
            client.send(shop_buy_offer);
        });
    });
};

// let shop_buy_offer = ltx.parse(
//         "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
//             "<query xmlns='urn:cryonline:k01'>"+
//                 "<shop_buy_offer offer_id='8000' error_status='0'>"+
//                     "<purchased_item>"+
//                         "<profile_item name='shg11_shop' profile_item_id='121783327' offerId='12' added_expiration='0' added_quantity='0' error_status='0'>"+
//                             "<item id='121783327' name='shg11_shop' attached_to='0' config='' slot='0' equipped='0' default='0' permanent='1' expired_confirmed='0' buy_time_utc='1466427941' total_durability_points='36000' durability_points='36000'/>"+
//                         "</profile_item>"+
//                     "</purchased_item>"+
//                     "<money game_money='1000000' cry_money='245000' crown_money='100000'/>"+
//                 "</shop_buy_offer>"+
//             "</query>"+
//         "</iq>"
//     )
//     client.send(shop_buy_offer);
//# sourceMappingURL=shop_buy_offer.js.map