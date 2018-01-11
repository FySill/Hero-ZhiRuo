//公告------------------------------------------------------------------------------------------
function Xiao_Gst() {
    $.get(Jurl + Nurl + "Title", function (result) { $gameVariables.setValue(110, result) });
    $.get(Jurl + Nurl + "Contents", function (result) { $gameVariables.setValue(111, result) });
    $.get(Jurl + Nurl + "Remark", function (result) { $gameVariables.setValue(112, result) })
}
//签到------------------------------------------------------------------------------------------
function Xiao_Ci() { $.get(Jurl + Nurl + "CheckIn", function (result) { SessionData.CheckIn = result }) }
//激活------------------------------------------------------------------------------------------
function Xiao_starton() { $.get(Jurl + Nurl + "Start", function (resultj) { LocalData.starton = parseInt(resultj) }) }
//更新------------------------------------------------------------------------------------------
function Xiao_IosUrl() { $.get(Jurl + Uurl + "Iut", function (resulti) { eval(resulti) }) }
function Xiao_AndroidUrl() { $.get(Jurl + Uurl + "Aut", function (resulta) { eval(resulta) }) }
//评论------------------------------------------------------------------------------------------
function Xiao_Iost() { $.get(Jurl + Uurl + "Ipt", function (resulti) { eval(resulti) }) }
function Xiao_Androidt() { $.get(Jurl + Uurl + "Apt", function (resulta) { eval(resulta) }) }
//Inform------------------------------------------------------------------------------------------
function Xiao_Inform() {
    $.get(Jurl + Iurl + "IsEnable", function (result) { SessionData.InformIE = result });
    $.get(Jurl + Iurl + "Number", function (result) { SessionData.InformNB = result; });
    $.get(Jurl + Iurl + "Talk", function (result) { $gameVariables.setValue(114, result) });
    $.get(Jurl + Iurl + "Name", function (result) { SessionData.InformNA = result; });
    $.get(Jurl + Iurl + "Way", function (result) {
        switch (parseInt(result)) {
            case 1://英雄群侠传I的玩家收到消息
                SessionData.InformIG = false;
                SessionData.InformIP = false;
                break;
            case 2://英雄群侠传II的玩家收到消息
                SessionData.InformIG = true;
                SessionData.InformIP = false;
                break;
            case 3://所有玩家收到消息
                SessionData.InformIG = true;
                SessionData.InformIP = false;
                break;
            case 4://特定玩家收到消息和道具
                if ($gameActors._data[1]._name == SessionData.InformNA) {
                    SessionData.InformIG = true;
                    SessionData.InformIP = true;
                } else {
                    SessionData.InformIG = false;
                    SessionData.InformIP = false
                };
                break;
            case 5://英雄群侠传II的玩家收到消息和道具
                SessionData.InformIG = true;
                SessionData.InformIP = true;
                break;
            default:
                SessionData.InformIG = false;
                SessionData.InformIP = false
        }
    })
};
function Xiao_InformJS() { $.get(Jurl + Iurl + "Js", function (result) { eval(result) }) }
//Welfare------------------------------------------------------------------------------------------
function Xiao_Welfare() {
    $.get(Jurl + Wurl + "IsEnable", function (result) { SessionData.WelfareIE = result });
    $.get(Jurl + Wurl + "Number", function (result) { SessionData.WelfareNB = result });
    $.get(Jurl + Wurl + "Name", function (result) { SessionData.WelfareNA = result });
    $.get(Jurl + Wurl + "IdenCode", function (result) { SessionData.WelfareIC = result });
    $.get(Jurl + Wurl + "Contents", function (result) { $gameVariables.setValue(266, result) })
}
function Xiao_WelfareJS() { $.get(Jurl + Wurl + "Js", function (result) { eval(result); }); }
//Festival------------------------------------------------------------------------------------------
function Xiao_Festival() {
    $.get(Jurl + Furl + "IsEnable", function (result) { SessionData.FestivalIE = result });
    $.get(Jurl + Furl + "Number", function (result) { SessionData.FestivalNB = result });
    $.get(Jurl + Furl + "IdenCode", function (result) { SessionData.FestivalIC = result });
    $.get(Jurl + Furl + "Contents", function (result) { $gameVariables.setValue(263, result) })
}
function Xiao_FestivalJS() { $.get(Jurl + Furl + "Js", function (result) { eval(result) }) }
//------------------------------------------------------------------------------------------
function Xiao_Saveme() { for (var i = 1; i <= 3; i++) { Scene_File.prototype.onSavefileOk.call(this); $gameSystem.onBeforeSave(); DataManager.saveGame(i) } LocalData.Finderror = 500 }
function pyone() { $gameVariables.setValue(550, parseInt($gameVariables.value(550) + 1)); $gameVariables.setValue(551, parseInt($gameVariables.value(551) + 1)) }
function pytwo() { $gameVariables.setValue(550, parseInt($gameVariables.value(550) + 2)); $gameVariables.setValue(551, parseInt($gameVariables.value(551) + 1)) }
function puone() { $gameVariables.setValue(550, parseInt($gameVariables.value(550) + 1)); $gameVariables.setValue(552, parseInt($gameVariables.value(552) + 1)) }
function putwo() { $gameVariables.setValue(550, parseInt($gameVariables.value(550) + 2)); $gameVariables.setValue(552, parseInt($gameVariables.value(552) + 1)) }
function Xiao_Findme() {
    var HERO = $gameActors.actor($gameVariables.value(62));
    if (HERO.mat > $gameVariables.value(541)) { $gameVariables.setValue(541, parseInt(HERO.mat)) }
    if (HERO.mdf > $gameVariables.value(542)) { $gameVariables.setValue(542, parseInt(HERO.mdf)) }
    if (HERO.agi > $gameVariables.value(543)) { $gameVariables.setValue(543, parseInt(HERO.agi)) }
    if (HERO.luk > $gameVariables.value(544)) { $gameVariables.setValue(544, parseInt(HERO.luk)) }
    if (HERO.mhp > $gameVariables.value(545)) { $gameVariables.setValue(545, parseInt(HERO.mhp)) }
    if (HERO.mmp > $gameVariables.value(546)) { $gameVariables.setValue(546, parseInt(HERO.mmp)) }
    if ($gameParty.gold() > $gameVariables.value(547)) { $gameVariables.setValue(547, parseInt($gameParty.gold())) }
    if ($gameVariables.value(5) > $gameVariables.value(548)) { $gameVariables.setValue(548, parseInt($gameVariables.value(5))) }
    $gameVariables.setValue(550, parseInt(0)); $gameVariables.setValue(551, parseInt(0)); $gameVariables.setValue(552, parseInt(0));
    $gameVariables.setValue(553, parseInt(0)); $gameVariables.setValue(554, parseInt(0));
    if (LocalData.device == 3 && LocalData.device == 4) {
        if ($gameSystem.playtime() < 86400) {
            if (LocalData.Finderror != 404) {
                var HERO = $gameActors.actor($gameVariables.value(62));
                if (HERO.mat - $gameVariables.value(541) > 100 && HERO.mat - $gameVariables.value(541) <= 200) { pyone() } else if (HERO.mat - $gameVariables.value(541) > 200) { pytwo() }
                if (HERO.mdf - $gameVariables.value(542) > 100 && HERO.mdf - $gameVariables.value(542) <= 200) { pyone() } else if (HERO.mdf - $gameVariables.value(542) > 200) { pytwo() }
                if (HERO.agi - $gameVariables.value(543) > 100 && HERO.agi - $gameVariables.value(543) <= 200) { pyone() } else if (HERO.agi - $gameVariables.value(543) > 200) { pytwo() }
                if (HERO.luk - $gameVariables.value(544) > 100 && HERO.luk - $gameVariables.value(544) <= 200) { pyone() } else if (HERO.luk - $gameVariables.value(544) > 200) { pytwo() }
                if (HERO.mhp - $gameVariables.value(545) > 7000 && HERO.mhp - $gameVariables.value(545) <= 15000) { puone() } else if (HERO.mhp - $gameVariables.value(545) > 15000) { putwo() }
                if (HERO.mmp - $gameVariables.value(546) > 5000 && HERO.mmp - $gameVariables.value(546) <= 10000) { puone() } else if (HERO.mmp - $gameVariables.value(546) > 10000) { putwo() }
                if ($gameParty.gold() - $gameVariables.value(547) > 1000000) { $gameVariables.setValue(550, parseInt($gameVariables.value(550) + 1)); $gameVariables.setValue(553, ($gameParty.gold() - $gameVariables.value(547)) / 1000000) }
                if ($gameVariables.value(5) - $gameVariables.value(548) > 500000) { $gameVariables.setValue(550, parseInt($gameVariables.value(550) + 1)); $gameVariables.setValue(554, ($gameVariables.value(5) - $gameVariables.value(548)) / 500000) }
                if ($gameVariables.value(550) >= 4) { LocalData.Finderror = 404 } else {
                    if (HERO.mat > $gameVariables.value(541)) { $gameVariables.setValue(541, parseInt(HERO.mat)) }
                    if (HERO.mdf > $gameVariables.value(542)) { $gameVariables.setValue(542, parseInt(HERO.mdf)) }
                    if (HERO.agi > $gameVariables.value(543)) { $gameVariables.setValue(543, parseInt(HERO.agi)) }
                    if (HERO.luk > $gameVariables.value(544)) { $gameVariables.setValue(544, parseInt(HERO.luk)) }
                    if (HERO.mhp > $gameVariables.value(545)) { $gameVariables.setValue(545, parseInt(HERO.mhp)) }
                    if (HERO.mmp > $gameVariables.value(546)) { $gameVariables.setValue(546, parseInt(HERO.mmp)) }
                    if ($gameParty.gold() > $gameVariables.value(547)) { $gameVariables.setValue(547, parseInt($gameParty.gold())) }
                    if ($gameVariables.value(5) > $gameVariables.value(548)) { $gameVariables.setValue(548, parseInt($gameVariables.value(5))) }
                    $gameVariables.setValue(550, parseInt(0)); $gameVariables.setValue(551, parseInt(0)); $gameVariables.setValue(552, parseInt(0));
                    $gameVariables.setValue(553, parseInt(0)); $gameVariables.setValue(554, parseInt(0))
                }
            }
        }
    }
}
function Xiao_Finderror() {
    if (LocalData.device == 3 && LocalData.device == 4) {
        if (LocalData.Finderror != 500) {
            if ($gameSystem.playtime() < 28800) {
                if ($gameVariables.value(32) > 3) {
                    var HERO = $gameActors.actor($gameVariables.value(62));
                    if ($gameVariables.value(5) > 3000000) { LocalData.SOS = 1; LocalData.SOSvalue = $gameVariables.value(5); Xiao_Saveme() }
                    else if ($gameParty.gold() > 8000000) { LocalData.SOS = 2; LocalData.SOSvalue = $gameParty.gold(); Xiao_Saveme() }
                    else if (HERO.mat > 800) { LocalData.SOS = 3; LocalData.SOSvalue = HERO.mat; Xiao_Saveme() }
                    else if (HERO.mdf > 800) { LocalData.SOS = 4; LocalData.SOSvalue = HERO.mdf; Xiao_Saveme() }
                    else if (HERO.agi > 800) { LocalData.SOS = 5; LocalData.SOSvalue = HERO.agi; Xiao_Saveme() }
                    else if (HERO.luk > 800) { LocalData.SOS = 6; LocalData.SOSvalue = HERO.luk; Xiao_Saveme() }
                    else if (HERO.mhp > 20000) { LocalData.SOS = 7; LocalData.SOSvalue = HERO.mhp; Xiao_Saveme() }
                    else if (HERO.mmp > 13000) { LocalData.SOS = 8; LocalData.SOSvalue = HERO.mmp; Xiao_Saveme() }
                    else if ($gameVariables.value(2) > 220) { LocalData.SOS = 9; LocalData.SOSvalue = $gameVariables.value(2); Xiao_Saveme() }
                    else if ($gameVariables.value(4) > 220) { LocalData.SOS = 10; LocalData.SOSvalue = $gameVariables.value(4); Xiao_Saveme() }
                    else if ($gameVariables.value(9) > 1000) { LocalData.SOS = 11; LocalData.SOSvalue = $gameVariables.value(9); Xiao_Saveme() }
                    else if ($gameVariables.value(147) > 0) { LocalData.SOS = 12; LocalData.SOSvalue = $gameVariables.value(147); Xiao_Saveme() }
                    else if ($gameVariables.value(148) > 0) { LocalData.SOS = 13; LocalData.SOSvalue = $gameVariables.value(148); Xiao_Saveme() }
                    else if ($gameVariables.value(150) > 0) { LocalData.SOS = 14; LocalData.SOSvalue = $gameVariables.value(150); Xiao_Saveme() }
                    else if ($gameVariables.value(151) > 0) { LocalData.SOS = 15; LocalData.SOSvalue = $gameVariables.value(151); Xiao_Saveme() }
                    else if ($gameVariables.value(485) > 21) { LocalData.SOS = 16; LocalData.SOSvalue = $gameVariables.value(485); Xiao_Saveme() }
                    else if ($gameVariables.value(492) > 21) { LocalData.SOS = 17; LocalData.SOSvalue = $gameVariables.value(492); Xiao_Saveme() }
                    else if ($gameVariables.value(96) < 0) { LocalData.SOS = 18; LocalData.SOSvalue = $gameVariables.value(96); Xiao_Saveme() }
                }
            }
        }
    }
}
function Xiao_Loadme() {
    $.get(Jurl + Uurl + "Safety", function (Safety) { SessionData.Safety = Safety });
    if (LocalData.device == 3 && LocalData.device == 4) {
        if (LocalData.Finderror != 500) {
            var HERO = $gameActors.actor($gameVariables.value(62));
            for (var i = 82; i <= 96; i++) { if ($gameVariables.value(i) > 100) { LocalData.SOS = i; LocalData.SOSvalue = $gameVariables.value(i); Xiao_Saveme() } if ($gameVariables.value(i) > 100) break; }
            if (HERO.mat > 840) { LocalData.SOS = 16; LocalData.SOSvalue = HERO.mat; Xiao_Saveme() }
            else if (HERO.mdf > 840) { LocalData.SOS = 17; LocalData.SOSvalue = HERO.mdf; Xiao_Saveme() }
            else if (HERO.agi > 840) { LocalData.SOS = 18; LocalData.SOSvalue = HERO.agi; Xiao_Saveme() }
            else if (HERO.luk > 840) { LocalData.SOS = 19; LocalData.SOSvalue = HERO.luk; Xiao_Saveme() }
            else if (HERO.mhp > 27500) { LocalData.SOS = 20; LocalData.SOSvalue = HERO.mhp; Xiao_Saveme() }
            else if (HERO.mmp > 18500) { LocalData.SOS = 21; LocalData.SOSvalue = HERO.mmp; Xiao_Saveme() }
        }
    }
}
