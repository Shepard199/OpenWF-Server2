import Account from '../../modules/account/model';
import xmpp from 'node-xmpp-server';
import ltx from 'ltx';

export default (client, stz) => {
	Account.auth.findOne({username: client.jid.user}, function(err, user) {
        let achievements = ltx.parse(
            "<iq to='"+stz.attrs.from+"' from='"+stz.attrs.to+"' id='"+stz.attrs.id+"' type='result'>"+
                "<query xmlns='urn:cryonline:k01'>"+
                    "<get_achievements>"+
                        "<achievement profile_id='"+user.profileid+"'>"+
                            "<chunk achievement_id='51' progress='33739' completion_time='0'/>"+
                            "<chunk achievement_id='52' progress='33739' completion_time='0'/>"+
                            "<chunk achievement_id='53' progress='33739' completion_time='0'/>"+
                            "<chunk achievement_id='54' progress='5' completion_time='0'/>"+
                            "<chunk achievement_id='55' progress='5' completion_time='0'/>"+
                            "<chunk achievement_id='56' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='57' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='58' progress='5' completion_time='0'/>"+
                            "<chunk achievement_id='73' progress='3' completion_time='0'/>"+
                            "<chunk achievement_id='74' progress='3' completion_time='0'/>"+
                            "<chunk achievement_id='75' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='76' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='77' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='79' progress='22' completion_time='0'/>"+
                            "<chunk achievement_id='80' progress='2' completion_time='0'/>"+
                            "<chunk achievement_id='83' progress='11' completion_time='0'/>"+
                            "<chunk achievement_id='89' progress='4' completion_time='0'/>"+
                            "<chunk achievement_id='96' progress='22' completion_time='0'/>"+
                            "<chunk achievement_id='103' progress='3' completion_time='0'/>"+
                            "<chunk achievement_id='109' progress='70' completion_time='0'/>"+
                            "<chunk achievement_id='110' progress='70' completion_time='0'/>"+
                            "<chunk achievement_id='111' progress='24' completion_time='0'/>"+
                            "<chunk achievement_id='112' progress='24' completion_time='0'/>"+
                            "<chunk achievement_id='113' progress='24' completion_time='0'/>"+
                            "<chunk achievement_id='114' progress='1898' completion_time='0'/>"+
                            "<chunk achievement_id='115' progress='1898' completion_time='0'/>"+
                            "<chunk achievement_id='116' progress='98' completion_time='0'/>"+
                            "<chunk achievement_id='117' progress='98' completion_time='0'/>"+
                            "<chunk achievement_id='118' progress='98' completion_time='0'/>"+
                            "<chunk achievement_id='136' progress='21' completion_time='0'/>"+
                            "<chunk achievement_id='200' progress='4' completion_time='0'/>"+
                            "<chunk achievement_id='201' progress='4' completion_time='0'/>"+
                            "<chunk achievement_id='202' progress='4' completion_time='0'/>"+
                            "<chunk achievement_id='203' progress='20' completion_time='1461038880'/>"+
                            "<chunk achievement_id='211' progress='66' completion_time='0'/>"+
                            "<chunk achievement_id='216' progress='20' completion_time='0'/>"+
                            "<chunk achievement_id='217' progress='20' completion_time='0'/>"+
                            "<chunk achievement_id='218' progress='20' completion_time='0'/>"+
                            "<chunk achievement_id='219' progress='4' completion_time='0'/>"+
                            "<chunk achievement_id='226' progress='5' completion_time='0'/>"+
                            "<chunk achievement_id='227' progress='5' completion_time='0'/>"+
                            "<chunk achievement_id='228' progress='1' completion_time='1460564758'/>"+
                            "<chunk achievement_id='247' progress='51' completion_time='0'/>"+
                            "<chunk achievement_id='251' progress='3' completion_time='0'/>"+
                            "<chunk achievement_id='267' progress='5' completion_time='0'/>"+
                            "<chunk achievement_id='296' progress='14' completion_time='0'/>"+
                            "<chunk achievement_id='404' progress='8' completion_time='0'/>"+
                            "<chunk achievement_id='405' progress='8' completion_time='0'/>"+
                            "<chunk achievement_id='406' progress='8' completion_time='0'/>"+
                            "<chunk achievement_id='413' progress='5' completion_time='0'/>"+
                            "<chunk achievement_id='414' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='416' progress='3' completion_time='0'/>"+
                            "<chunk achievement_id='418' progress='70' completion_time='0'/>"+
                            "<chunk achievement_id='419' progress='4' completion_time='0'/>"+
                            "<chunk achievement_id='422' progress='4' completion_time='0'/>"+
                            "<chunk achievement_id='432' progress='3' completion_time='0'/>"+
                            "<chunk achievement_id='435' progress='3' completion_time='0'/>"+
                            "<chunk achievement_id='441' progress='2' completion_time='0'/>"+
                            "<chunk achievement_id='442' progress='2' completion_time='0'/>"+
                            "<chunk achievement_id='451' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='452' progress='21' completion_time='0'/>"+
                            "<chunk achievement_id='453' progress='48' completion_time='0'/>"+
                            "<chunk achievement_id='454' progress='48' completion_time='0'/>"+
                            "<chunk achievement_id='455' progress='7' completion_time='0'/>"+
                            "<chunk achievement_id='456' progress='7' completion_time='0'/>"+
                            "<chunk achievement_id='457' progress='52' completion_time='0'/>"+
                            "<chunk achievement_id='458' progress='52' completion_time='0'/>"+
                            "<chunk achievement_id='499' progress='5' completion_time='0'/>"+
                            "<chunk achievement_id='1004' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='1012' progress='2' completion_time='0'/>"+
                            "<chunk achievement_id='1030' progress='1' completion_time='0'/>"+
                            
                            "<chunk achievement_id='500' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='501' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='502' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='503' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='504' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='505' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='506' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='507' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='508' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='509' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='510' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='511' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='512' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='513' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='514' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='515' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='516' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='517' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='518' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='519' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='520' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='521' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='522' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='523' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='524' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='525' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='526' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='527' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='528' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='529' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='530' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='531' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='532' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='533' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='534' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='535' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='536' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='537' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='538' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='539' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='540' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='541' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='542' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='543' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='544' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='545' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='546' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='547' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='548' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='549' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='550' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='551' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='552' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='553' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='554' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='555' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='556' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='557' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='558' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='559' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='560' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='561' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='562' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='563' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='564' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='565' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='566' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='567' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='568' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='569' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='570' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='571' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='572' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='573' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='574' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='575' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='576' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='577' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='578' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='579' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='580' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='581' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='582' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='583' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='584' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='585' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='586' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='587' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='588' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='589' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='590' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='591' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='592' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='593' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='594' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='595' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='596' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='597' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='598' progress='1' completion_time='0'/>"+
                            "<chunk achievement_id='599' progress='1' completion_time='0'/>"+

                        "</achievement>"+
                    "</get_achievements>"+
                "</query>"+
            "</iq>"
        )
        client.send(achievements); 
	});
};