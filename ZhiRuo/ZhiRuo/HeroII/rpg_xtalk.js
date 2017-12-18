//--------------陌生人随机对话----------------
function NPC_msdhid_Xiao() {

    var Npc_msdhID = $gameVariables.value(80)
    switch (Npc_msdhID) {
        case 1:
            $gameVariables.setValue(107, "你好，很高兴认识你！");
            break;
        case 2:
            $gameVariables.setValue(107, "找呀，找呀，找朋友，找到一个好朋友。");
            break;
        case 3:
            $gameVariables.setValue(107, "我最喜欢交朋友了，以后常经常来和我聊天呀！");
            break;
        case 4:
            $gameVariables.setValue(107, "你好呀！从此以后我们就是朋友了。");
            break;
        case 5:
            $gameVariables.setValue(107, "四海之内皆兄弟，以后有事尽管来找我。");
            break;
        case 6:
            $gameVariables.setValue(107, "我们能在茫茫人海中相遇也是一种缘分。");
            break;
        case 7:
            $gameVariables.setValue(107, "哈哈哈，今天又多认识了一位朋友！");
            break;

        default:
            $gameVariables.setValue(107, "我忘记我想说什么了。");

    }

}
//--------------普通人随机对话----------------
function NPC_ptdhid_Xiao() {

    var Npc_ptdhID = $gameVariables.value(80)
    switch (Npc_ptdhID) {
        case 1:
            $gameVariables.setValue(108, "今天的天气真是，哈哈。");
            break;
        case 2:
            $gameVariables.setValue(108, "我什么也都不知道，就算知道也不说，打死你我也不说。");
            break;
        case 3:
            $gameVariables.setValue(108, "没看到我在忙吗？你还是找别人聊天去吧。");
            break;
        case 4:
            $gameVariables.setValue(108, "我有一个小秘密，就不告诉你，就不告诉你。");
            break;
        case 5:
            $gameVariables.setValue(108, "不约！不约！我很忙的。");
            break;
        case 6:
            $gameVariables.setValue(108, "哎呀，我突然忘记想和你说什么了。");
            break;
        case 7:
            $gameVariables.setValue(108, "你造吗，武功的伤害中，威力系数是非常重要的。");
            break;
        case 8:
            $gameVariables.setValue(108, "你的臂力、技能等级、熟练度以及你的实战经验会影响武功威力。");
            break;
        case 9:
            $gameVariables.setValue(108, "有的人是有惊天秘密的，就看你能坚持和他说多少次！");
            break;
        case 10:
            $gameVariables.setValue(108, "虽然有的门派只收女弟子，但是男人想入也不是不可能！");
            break;
        case 11:
            $gameVariables.setValue(108, "听说有不少男子就加入过古墓派，只是条件比较复杂。");
            break;
        case 12:
            $gameVariables.setValue(108, "走过的地方越多，人的阅历就会越丰富。");
            break;
        case 13:
            $gameVariables.setValue(108, "听说有一个绝佳的离线挂机的地方叫琅嬛福地。");
            break;
        case 14:
            $gameVariables.setValue(108, "传说江湖上有一些武功绝技，只有不识字的人才可以学得会！");
            break;
        case 15:
            $gameVariables.setValue(108, "武功绝学有一定几率暴击，但是也会导致伤害不稳定。");
            break;
        case 16:
            $gameVariables.setValue(108, "门派的低级武功会对绝学有一定的加成影响哟！");
            break;
        case 17:
            $gameVariables.setValue(108, "如果那个人被杀掉了，你就永远都看不见他了。");
            break;
        case 18:
            $gameVariables.setValue(108, "友善度达到一定程度，送秘籍、传武功、甚至结婚生子也未尝不可！");
            break;
        case 19:
            $gameVariables.setValue(108, "运功打坐不可操之过急，如果连续运功可能会导致走火入魔！");
            break;
        case 20:
            $gameVariables.setValue(108, "太玄经上的武功，读书越低、悟性越低威力就会越大，反之亦然！");
            break;
        case 21:
            $gameVariables.setValue(108, "轻功练到一定程度便可穿梭往来，瞬间飞到你想要去的地方。");
            break;
        case 22:
            $gameVariables.setValue(108, "阅历和读书识字，能让你有更多机会学到高深的武功绝学。");
            break;
        case 23:
            $gameVariables.setValue(108, "积累一定的实战经验就连使用平凡无奇的招数都能伤人性命。");
            break;
        case 24:
            $gameVariables.setValue(108, "年龄也会随时增长，每长大一岁你的基础能力就会得到提高。");
            break;
        case 25:
            $gameVariables.setValue(108, "当你拥有内功之后就可以自行调息恢复生命和内力了。");
            break;
        case 26:
            $gameVariables.setValue(108, "有一些机关需要有一定阅历的人才能识破！");
            break;
        case 27:
            $gameVariables.setValue(108, "帮助他人会提高自己的善，为非作歹就会让自己的恶增加。");
            break;

        default:
            $gameVariables.setValue(108, "我忘记我想说什么了。");

    }

}
//--------------无剧情随机对话----------------
function NPC_wjdhid_Xiao() {

    var Npc_wjdhID = $gameVariables.value(80)
    switch (Npc_wjdhID) {
        case 1:
            $gameVariables.setValue(107, "你来早了，这个剧情还没做！");
            break;
        case 2:
            $gameVariables.setValue(107, "我现在只可以欣赏，别妄想对我动手动脚的。");
            break;
        case 3:
            $gameVariables.setValue(107, "我只是暂时站在这，我的剧情还没开放。");
            break;
        case 4:
            $gameVariables.setValue(107, "关注微信公众号或群公告就知道更新什么了。");
            break;
        case 5:
            $gameVariables.setValue(107, "在这个开放的世界中，谁都可以向小熊提剧情建议。");
            break;
        case 6:
            $gameVariables.setValue(107, "梦想不是一个人的，如果你也有梦想，就去实现吧！");
            break;
        case 7:
            $gameVariables.setValue(107, "你可以点一下我，但是不能对我指指点点的。");
            break;
        case 8:
            $gameVariables.setValue(107, "看什么看，再看我就把你给吃掉，哇！受不了。");
            break;
        default:
            $gameVariables.setValue(107, "我忘记我想说什么了。");

    }

}
//--------------叛徒地点----------------
function NPC_jsdid_Xiao() {

    var Npc_jsdID = $gameVariables.value(412)
    switch (Npc_jsdID) {
        case 1:
            $gameVariables.setValue(412, "华山派");//地点
            $gameSelfSwitches.setValue([36, 19, 'A'], true);
            break;
        default:
            $gameVariables.setValue(412, "未知地点：" + Npc_jsdID);

    }

}