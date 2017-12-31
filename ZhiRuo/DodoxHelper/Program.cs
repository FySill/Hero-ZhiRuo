﻿using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Newtonsoft.Json;

namespace DodoxHelper
{
    class Program
    {
        static void Main(string[] args)
        {
            //TimeSpan ts = DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0, 0);
            //Console.WriteLine(Convert.ToInt64(ts.TotalMilliseconds).ToString());
            //string jsonStringWeapons = File.ReadAllText("Items.json").Replace("\r\n", "").Replace("\\\\c", "&&&&");
            //List<Item> weapons = JsonConvert.DeserializeObject<List<Item>>(jsonStringWeapons);

            var strSwitches = "'', '默认开关', '触摸模式', '手柄模式', '显/隐NPC_A', '显/隐NPC_B', '显/隐NPC_C', '显/隐NPC_D', '显/隐NPC_E', '是否联网中（不用）', '地图音乐', '教学开关', '-------------------', '冯村长的任务', '王婆婆的任务', '王婆婆的日常', '王婆婆的任务中', '张猎户的任务', '冯村长的日常', '张猎户的日常', '张猎户的任务中', '垃圾', '木材', '水桶', '-------------------', '张猎户的需求', '山贼的剧情', '冯村长的任务中', '小顽童的任务', '田伯光的任务中', '寻捕的任务中', '老裁缝的任务', '李白的任务', '盐商的任务', '荷西的任务', '厨师的任务', '中年妇女的任务中', '解救蝶舞的任务', '辟邪剑谱的任务', '张三丰的任务', '玄慈的任务', '已经成为掌门', '已经加入门派', '已经结婚', '已经自宫', '已经自创门派', '已经出家', '已经还俗', '-------------------', '阅读[属性]的奖励', '阅读[状态]的奖励', '阅读[技艺]的奖励', '阅读[门派]的奖励', '阅读[特色]的奖励', '阅读[任务]的奖励', '-------------------', '[状态]药物中毒', '[状态]走火入魔', '[状态]豹胎易经丸', '[状态]伴侣行动中', '[状态]离线挂机中', '华山派', '少林寺', '武当派', '全真教', '丐帮', '血刀门', '雪山派', '峨眉派', '古墓派', '星宿派', '灵鹫宫', '日月神教', '逍遥派', '-------------------', '押镖中', '平安镇镖局', '朱仙镇镖局', '龙泉镇镖局', '', '', '15岁英雄帖', '16岁英雄帖', '17岁英雄帖', '18岁英雄帖', '19岁英雄帖', '20岁英雄帖', '21岁英雄帖', '22岁英雄帖', '23岁英雄帖', '24岁英雄帖', '25岁英雄帖', '26岁英雄帖', '27岁英雄帖', '28岁英雄帖', '29岁英雄帖', '30岁英雄帖', '31岁英雄帖', '32岁英雄帖', '33岁英雄帖', '34岁英雄帖', '飞', '雪', '连', '天', '射', '白', '鹿', '笑', '书', '神', '侠', '倚', '碧', '鸳', '蝉', '圆', '流', '小', '游戏自动检测', '掌门人[保护]', '登峰造极[外功]', '登峰造极[内功]', '吃过豹胎易经丸', '今日已签到', '花已经卖完了', '[状态]已经评价', '[状态]在室内', '没有潘金莲的问候', '', '', '', '', '', '', '', '', '', '', '已经有队友[组队]', '酒已经卖完了', '1号善恶洞敌人 ', '2号善恶洞敌人 ', '3号善恶洞敌人 ', '4号善恶洞敌人 ', '5号善恶洞敌人 ', '6号善恶洞敌人 ', '7号善恶洞敌人 ', '8号善恶洞敌人 ', '9号善恶洞敌人 ', '10号善恶洞敌人 ', '1号善恶洞宝箱', '2号善恶洞宝箱', '3号善恶洞宝箱 ', '4号善恶洞宝箱 ', '5号善恶洞宝箱', '6号善恶洞宝箱', '7号善恶洞宝箱', '8号善恶洞宝箱', '9号善恶洞宝箱', '10号善恶洞宝箱', '[队友]蝶舞', '[队友]燕孤魂', '[队友]陆剑寒', '[队友]程嫣', '[队友]沐怜芯', '---------------------', '黄金·镐', '黄金·斧', '黄金·竿', '黄金工具', '无敌的萧遥无极', '[离线]挂机已完成', '[离线]挂机8小时', '', '[状态]木人巷', '藏经阁的扫地僧', '合成教学', '获得《梓人遗制》', '[鱼塘]关闭_芦溪', '[鱼塘]关闭_武当', '[绝学]金蛇剑法', '[绝学]辟邪剑法', '[传授]玄影剑法', '[绝学]太玄经', '[绝学]十八泥偶', '[武功]太极神功', '[武功]易筋经', '[武功]血海魔功', '[传授]针灸术', '[武功]先天气功', '[武功]混天功', '[绝学]胡家刀法', '[武功]五岳剑法', '[传授]护驾', '[武功]狂风快剑', '[传授]逍遥护心法', '[绝学]太玄神功', '[武功]水上漂', '[武功]越女剑法', '[武功]修罗刀法', '[称号]大善人', '[称号]恶贯满盈', '[称号]杀人狂魔', '[称号]血手屠城', '[称号]血阎罗', '[称号]雨露均沾', '[称号]路见不平一声吼', '[称号]八面玲珑小旋风', '[称号]修仙真人', '[称号]江湖百晓生', '[称号]万事通', '[称号]玉面财神', '[称号]妇女之友', '[称号]十步杀一人', '[称号]泰山石敢当', '', '', '', '', '', '[内功]嫁衣神功', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '[敌人]鸠摩智', '[敌人]小白', '已领取玉峰浆', '自动运行暂停', '[鱼塘]关闭_少林', '[鱼塘]关闭_华山', '[建设任务]·平安镇', '[建设任务]·扬州', '[建设任务]·京城', '[建设任务]·大理', '[建设任务]·朱仙镇', '指法秘籍[已学习]', '掌法秘籍[已学习]', '剑法秘籍[已学习]', '刀法秘籍[已学习]', '棍法秘籍[已学习]', '拳法秘籍[已学习]', '内功秘籍[已学习]', '心法秘籍[已学习]', '[NPC]剧情战斗', '梅庄地牢任务', '西门庆的任务', '潘金莲的任务', '王重阳的任务', '帮慧觉找经书任务中', '云中鹤的任务', '木婉清的任务', '段誉的血', '珍珑棋局的任务', '[连连看]胜利', '[拼图]胜利', '', '', '', '', '', '', '', '', '', '[筋脉·任]-百会穴', '[筋脉·任]-肩井穴', '[筋脉·任]-曲泽穴', '[筋脉·任]-巨阙穴', '[筋脉·任]-大横穴', '[筋脉·任]-气海穴', '[筋脉·任]-梁丘穴', '[筋脉·任]-血海穴', '[筋脉·督]-印堂穴', '[筋脉·督]-风池穴', '[筋脉·督]-曲池穴', '[筋脉·督]-阳溪穴', '[筋脉·督]-玉堂穴', '[筋脉·督]-气冲穴', '[筋脉·督]-太溪穴', '[筋脉·督]-涌泉穴', '大侠[保护]', '赎罪坐牢中', '药已经卖完了', '任我行切磋过了', '[绝学·内]-招式一', '[绝学·内]-招式二', '[绝学·外]-招式一', '[绝学·外]-招式二', '[绝学·内]-怒招', '[绝学·外]-怒招', '指法秘籍[已获得]', '掌法秘籍[已获得]', '剑法秘籍[已获得]', '刀法秘籍[已获得]', '棍法秘籍[已获得]', '拳法秘籍[已获得]', '内功秘籍[已获得]', '心法秘籍[已获得]', '[金蛇剑]威力解锁', '[武功]蟠龙棍法', '[武功]幻阴指', '', '', '', '[套装]·捕快', '[套装]·强盗', '获得[套装]·捕快', '获得[套装]·强盗', '获得《江南织造》', '获得《点石成金》', '获得《本草纲目》', '获得[套装]·达摩', '获得《考工记》', '获得金蛇装备的资格', '觉明禅师的头颅', '允许学习空明拳', '学会左右互搏术', '', '', '', '', '', '', '', '[轻功]芦溪村', '[轻功]平安镇', '[轻功]朱仙镇', '[轻功]扬州城', '[轻功]大理城', '[轻功]京城', '[轻功]紫禁城', '[轻功]华山', '[轻功]武当山', '[轻功]少室山', '[轻功]嵩山', '[轻功]恒山', '[轻功]峨眉山', '[轻功]终南山', '[轻功]活死人墓', '[轻功]泰山', '[轻功]杏子林', '[轻功]血刀门', '[轻功]黑木崖', '[轻功]星宿海', '[轻功]五毒教', '[轻功]雪山', '[轻功]缥缈峰', '[轻功]冰火岛', '[轻功]侠客岛', '[轻功]桃花岛', '[轻功]神龙岛', '[轻功]灵蛇岛', '[轻功]梅庄', '[轻功]衡山城', '[轻功]无极山庄', '[轻功]圆月山庄', '[轻功]青城山', '[轻功]商家堡', '[轻功]雁门关', '[轻功]金蛇洞', '[轻功]野猪林', '[轻功]快活林', '[轻功]东海渔村', '[轻功]燕子坞', '[轻功]名剑山庄', '[轻功]江南石窟', '[轻功]东厂', '[轻功]江南别院', '[轻功]聚贤庄', '[轻功]避暑山庄', '[轻功]唐家堡', '[轻功]无量山', '[轻功]百花谷', '[轻功]绝情谷', '[轻功]聋哑谷', '[轻功]柳溪村', '[轻功]女真部落', '[轻功]茅山', '[轻功]摩天崖', '[轻功]光明顶', '[轻功]一品堂', '[轻功]沙漠废墟', '[轻功]公主墓', '[轻功]昆仑山', '平一指的药卖完', '胡青牛的药卖完', '[状态]江南石窟', '[修复]项目1', '[修复]项目2', '[修复]项目3', '[修复]项目4', '[爆发]阎基的怒气', '[门派]交易关闭', '[丐帮]净衣派', '[剧情]成昆', '[战斗]体力下降', '[战斗]劳累过度', '[任务]破风刀', '自动保存[禁用]', '武当今日悟道', '抓奸细的任务', '今日俸禄领取', '血刀今日练功', '陆剑寒的对决', '[鱼塘]关闭_无量', '[鱼塘]关闭_灵鹫', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '偷物资的任务', '西洋火铳', '神木王鼎的任务', '阿紫的交谈任务', '获得代掌门令牌', '杨逍的刺杀任务', '打赢鳌拜', '老顽童剧情', '找玉峰浆任务', '战胜杨过', '救徐长老任务', '成功解救徐长老', '偷倚天剑', '史婆婆的烦恼', '可以学习金乌刀法', '十八铜人阵', '放过周芷若', '放过金花婆婆', '教训过柳若松', '明月堂机关解除', '[绝学任务]血刀门', '[绝学任务]星宿派', '[绝学任务]武当派', '[绝学任务]峨眉派', '[绝学任务]全真教', '[绝学任务]雪山派', '[绝学任务]少林派', '[绝学任务]日月神教', '[绝学任务]灵鹫宫', '', '', '', '', '', '', '', '', '', '', '', '燕孤魂的任务', '打败沐怜芯', '沐怜芯的任务', '打败燕孤魂', '', '', '', '', '', '', '', '', '', '', '', '', '', '', '', ''";
            //string strVariables = "'', '食物', '最大食物', '饮水', '最大饮水', '武艺潜能', '生活经验', '修为', '阅历', '杀人', '善恶', '实战', '任务', '武林排名', '江湖人缘', '当前年龄', '历史年龄', '性别[1男-2女-3中]', '姓名[玩家]', '随机消耗饮食度', '随机消耗饮水度', '增加经验', '增加潜能', '增加金钱', '[NPC]ID', '[NPC]姓名', '[NPC]武艺', '[NPC]内功', '[NPC]称号', '[NPC]描述', '[NPC]银两', '内功属性[1阳-2毒-3阴-4普通-5混元]', '游戏难度[3-6-10]', '获取当前生命', '获取最大生命', '获取当前内力', '获取最大内力', '获取臂力', '获取根骨', '获取敏捷', '获取悟性', '基本拳脚·等级', '基本拳脚·熟练度', '基本拳脚·升级条件', '基本兵器·等级', '基本兵器·熟练度', '基本兵器·升级条件', '基本轻功·等级', '基本轻功·熟练度', '基本轻功·升级条件', '基本外功·等级', '基本外功·熟练度', '基本外功·升级条件', '基本内功·等级', '基本内功·熟练度', '基本内功·升级条件', '----------------------', '[门派]ID', '历史版本号', '当前版本号', '最新版本号', 'ID[学习武功]', 'ID[角色]', '已练功次数', '欲练功次数', '练功消耗潜能', '特色[门派技艺]', '教学能力', '获取身上银两', '练功消耗银两', '打坐[外功回血]', '打坐[内功回内]', '走火入魔几率', '获取攻击力', '获取防御力', '药物中毒[概率]', '----------------------', '告示[联网内容]', '编号A', '编号B', '编号C', '技艺成功率', '音律', '书法', '医术', '棋术', '绘画', '毒术', '伐木', '赌运', '钓鱼', '打猎', '采矿', '锻造', '饮酒', '厨艺', '读书', '----------------------', '密码', '输入的数字', '排名调整', '仇恨度', '吃美味的次数', '喝美酒的次数', '追杀值', '完成寻物的次数', '----------------------', '对话[陌生人交谈]', '对话[普通随机交谈]', '----------------------', '标题[联网]', '内容[联网]', '日期[联网]', '[通知]本地序号', '[通知]千里传音内容', '[通知]更新时间', '上吊次数', '当前现实时间', '储存历史时间', '时间差', '江湖宝典页码', '拳脚一阶·等级', '拳脚一阶·熟练度', '拳脚一阶·升级条件', '拳脚二阶·等级', '拳脚二阶·熟练度', '拳脚二阶·升级条件', '兵器一阶·等级', '兵器一阶·熟练度', '兵器一阶·升级条件', '兵器二阶·等级', '兵器二阶·熟练度', '兵器二阶·升级条件', '门派轻功·等级', '门派轻功·熟练度', '门派轻功·升级条件', '内功一阶·等级', '内功一阶·熟练度', '内功一阶·升级条件', '上吊次数', '锻造结果', '内功二阶·等级', '内功二阶·熟练度', '内功二阶·升级条件', '门派外功·等级', '门派外功·熟练度', '门派外功·升级条件', '门派绝学一·等级', '门派绝学一·熟练度', '门派绝学一·升级条件', '门派绝学二·等级', '门派绝学二·熟练度', '门派绝学二·升级条件', '----------------------', '侠客的级别', '反贼的级别', '调戏女孩次数', '追杀反贼次数', '善恶任务次数', '连续寻物次数', '', '切磋[ID]', '屠杀[ID]', '签到时间', '连续签到', '卖花时间', '奖励金钱', '赌场买大小', '六面骰子', '骰子大小', '赌场连胜次数', '赢钱次数', '输钱次数', '检测游戏的时间', '', '卖酒时间', '----------------------', '[技艺]ID', '历史版本号', '当前版本号', '计数器', '村长-友善度', '王婆婆-友善度', '张猎户-友善度', '岳不群-友善度', '林平之-友善度', '玄慈-友善度', '扫地僧-友善度', '张三丰-友善度', '张翠山-友善度', '灭绝师太-友善度', '周芷若-友善度', '血刀老祖-友善度', '狄云-友善度', '王重阳-友善度', '尹志平-友善度', '小龙女-友善度', '杨过-友善度', '萧峰-友善度', '洪七公-友善度', '天山童姥-友善度', '虚竹-友善度', '段誉-友善度', '白自在-友善度', '白万剑-友善度', '阿秀-友善度', '丁春秋-友善度', '阿紫-友善度', '任我行-友善度', '东方不败-友善度', '任盈盈-友善度', '丁鹏-友善度', '玄痛-友善度', '燕孤魂-友善度', '沐怜芯-友善度', '', '', '', '', '', '', '新手引导任务', '张猎户的需求', '冯村长的日常', '拜见者的名字', '田伯光的日常', '调戏者的名字', '寻捕的日常', '反贼的名字', '反贼的地点', '中年妇女的日常', '寻物的名字', '寻物的地点', '[生长时间]铜矿', '[生长时间]铁矿', '[生长时间]银矿', '[生长时间]金矿', '[生长时间]枯树', '[生长时间]黄树', '[生长时间]绿树', '[生长时间]红树', '[随机敌人]ID', '[DI:1]随机善人', '[DI:2]随机善人', '[DI:3]随机善人', '[DI:4]随机善人', '[DI:5]随机善人', '[DI:1]随机恶人', '[DI:2]随机恶人', '[DI:3]随机恶人', '[DI:4]随机恶人', '[DI:5]随机恶人', '杀死善人总数', '杀死恶人总数', '', '', '', '', '', '', '[木人]ID', '[节日]输入错误次数', '[节日]本地序号', '[节日]内容', '[福利]输入错误次数', '[福利]本地序号', '[福利]内容', '----------------------', '善恶洞层数', '记录现实日', '记录现实时', '记录现实分', '当前现实日', '当前现实时', '当前现实分', '经过现实日', '经过现实时', '经过现实分', '[记录]离线挂机时间', '当前年月日', '[少林寺]武功倍率', '当前游戏时间', '经过现实时间', '还需现实时间', '挂机获得潜能', '挂机打坐次数', '总挂机次数', '离线分钟消耗', '掉落物品[1]', '掉落物品[2]', '掉落物品[3]', '增加饮水', '增加饮食', '游戏初始版本', '平一指的时间', '已经掌握的少林秘籍', '[更新]内容提示', '[赌运]提高成功率', '住宿花费银两', '[生长时间]草药', '[店铺]开业时间', '芦溪_铜矿_1', '芦溪_黄树_1', '芦溪_枯树_2', '芦溪_铁矿_1', '芦溪_草药_1', '宁静_黄树_1', '宁静_枯树_2', '宁静_铜矿_1', '镇东_黄树_1', '镇东_枯树_2', '芦溪_铜矿_2', '镇北_枯树_1', '华山_黄树_1', '华山_枯树_2', '华山_枯树_3', '华山_黄树_4', '华山_红树_5', '华山_铁矿_1', '华山_银矿_2', '华山_草药_1', '武当_黄树_1', '武当_枯树_2', '武当_草药_1', '峨眉_黄树_1', '峨眉_铁矿_1', '峨眉_铜矿_2', '峨眉_草药_1', '摩天_红树_1', '金蛇_金矿_1', '衡山_银矿_1', '少林_银矿_1', '名剑_铜矿_1', '名剑_金矿_2', '芦溪_鱼塘_1', '少林_黄树_1', '少林_黄树_2', '少林_金矿_1', '峨眉_绿树_1', '全真_绿树_1', '全真_绿树_2', '[套装]·独行', '[鱼塘]恢复时间', '[鱼塘]钓鱼次数_芦溪', '[耐久度]鱼竿', '[耐久度]斧头', '[耐久度]铁镐', '开箱子的次数', '[经脉]元气值', '[经脉]成功率', '[经脉]成功率提升', '[筋脉]毒内功伤害', '[筋脉]阳内功伤害', '[筋脉]阴内功伤害', '[鱼塘]钓鱼次数_武当', '[鱼塘]钓鱼次数_少林', '[鱼塘]钓鱼次数_华山', '买药时间', '任我行切磋时间', '[轻功]当前轻功值', '[轻功]最大轻功值', '全真_红树_1', '全真_铁矿_1', '全真_铜矿_2', '古墓_草药_1', '血刀_绿树_1', '丐帮_绿树_1', '丐帮_绿树_2', '丐帮_黄树_1', '丐帮_草药_1', '衡山_枯树_1', '古墓_玉峰_1', '武当_鱼塘_1', '少林_鱼塘_1', '华山_鱼塘_1', '雪山_雪莲_all', '江南_矿洞_all', '百花_草药_1', '百花_草药_2', '百花_草药_3', '绝情_草药_1', '坐牢时间', '[建设度]·平安镇', '[建设度]·扬州', '[建设度]·京城', '[建设度]·大理', '[建设度]·朱仙镇', '[建设度]·平安任务序号', '[百姓数量]·平安镇', '[百姓数量]·扬州', '[百姓数量]·京城', '[百姓数量]·大理', '[百姓数量]·朱仙镇', '[建设度]·扬州任务序号', '[建设度]·大理任务序号', '[建设度]·京城任务序号', '[建设度]·朱仙任务序号', '居民[序号]', '居民任务[序号]', '可掌握的少林秘籍', '[赌运]提高成功率', '[百姓时间]·平安镇', '[百姓时间]·扬州', '[百姓时间]·京城', '[百姓时间]·大理', '[百姓时间]·朱仙镇', '[搬迁时间]·平安镇', '[搬迁时间]·扬州', '[搬迁时间]·京城', '[搬迁时间]·大理', '[搬迁时间]·朱仙镇', '经书的名字', '经书的地点', '找经书的任务', '连续找经书次数', '胡青牛的时间', '[金蛇剑]威力系数', '[赤练神掌]威力爆发', '[金蛇剑]威力爆发', '[系列任务]胡斐', '[胡家刀法]威力爆发', '[全真教]武功倍率', '门派交易时间', '[丐帮]武功倍率', '[队伍]人员数量', '[系列任务]封不平', '[狂风快剑]威力爆发', '[系列任务]成昆', '[七伤拳]威力爆发', '[系列任务]一灯大师', '[太玄神掌]威力爆发', '[系列任务]岳飞', '[系列任务]杨不悔', '[系列任务]南贤', '[系列任务]韦小宝', '', '', '', '', '', '', '[冷却时间]切磋', '连续战斗', '五毒_蜘蛛_1', '五毒_青蛇_1', '五毒_蟾蜍_1', '五毒_蜈蚣_1', '五毒_蜘蛛_2', '五毒_蜘蛛_3', '五毒_蜘蛛_4', '五毒_蜘蛛_5', '五毒_青蛇_2', '五毒_蟾蜍_2', '五毒_蜘蛛_6', '五毒_蟾蜍_3', '五毒_蜘蛛_7', '五毒_青蛇_3', '五毒_蟾蜍_4', '五毒_青蛇_4', '五毒_蜈蚣_2', '少林_草药_1', '灵鹫_草药_1', '华山_草药_2', '灵鹫_红树_2', '[鱼塘]钓鱼次数_无量', '无量_鱼塘_1', '[鱼塘]钓鱼次数_灵鹫', '灵鹫_鱼塘_1', '无量_蟾蜍_1', '无量_草药_1', '无量_黄树_1', '绝情_绿树_1', '绝情_红树_1', '星宿_黄树_1', '星宿_绿树_1', '星宿_青蛇_1', '星宿_蜈蚣_1', '星宿_蟾蜍_1', '', '', '', '武当悟道时间', '抓奸细的任务', '抓奸细的日常', '被盗走的物品', '连续抓奸细的次数', '[官职]武官级别', '职位经验', '领取俸禄时间', '血刀练功时间', '指南针绑定点', '[五子棋]胜利', '连续偷物资的次数', '偷物资的日常', '偷物资的任务', '需要偷的物品', '[耐久度]连弩', '钱庄兑换汇率', '[唐诗剑法]威力系数', '[对话]显示', '[友善度]显示', '大理_黄树_1', '大理_绿树_1', '大理_黄树_2', '大理_绿树_2', '大理_银矿_1', '嵩山_金矿_1', '燕子_红树_1', '燕子_银矿_1', '燕子_草药_1', '聋哑_金矿_1', '聋哑_黄树_1', '野猪_大象_1', '野猪_野狼_1', '野猪_山羊_1', '野猪_水牛_1', '野猪_麋鹿_1', '野猪_白猿_1', '野猪_老虎_1', '野猪_白熊_1', '野猪_野狼_2', '野猪_野狼_3', '野猪_麋鹿_2', '野猪_山羊_2', '野猪_麋鹿_3', '野猪_野狼_4', '野猪_山羊_3', '野猪_野狼_5', '野猪_麋鹿_4', '野猪_黑熊_1', '野猪_野狼_6', '野猪_麋鹿_5', '野猪_白虎_1', '绝情_鳄鱼_1', '无量_鳄鱼_2', '柳溪_水牛_1', '芦溪_水牛_2', '', '', '', '', '[保存]臂力', '[保存]根骨', '[保存]敏捷', '[保存]悟性', '[保存]生命', '[保存]内力', '[保存]金钱', '[保存]武艺潜能', '----------------------', '[异常记录]可能性', '[异常]属性', '[异常]数值', '[异常]银两', '[异常]武艺潜能', '增加的仇恨度', '佛门弟子', '', '', '', ''";
            //FormatArray2Json(strVariables, "Variables.json");
            FormatArray2Json(strSwitches, "Switches.json");
 

            #region MyRegion
            //while (true)
            //{
            //    Console.WriteLine("请输入Variables序列：");
            //    string strInput = Console.ReadLine();
            //    int number = 0;
            //    string result = string.Empty;
            //    string[] inputs = strInput.Split(new char[] { ',', '，' });
            //    for (int j = 0; j < inputs.Count(); j++)
            //    {
            //        for (int i = 0; i < variablesArray.Count(); i++)
            //        {
            //            if (int.TryParse(inputs[j], out number))
            //            {
            //                if (j == i)
            //                {
            //                    result = variablesArray[number];
            //                    Console.Write(result + ",");
            //                }
            //            }
            //            else
            //            {
            //                if (variablesArray[i].Contains(inputs[j]))
            //                {
            //                    Console.Write($"{i}=={variablesArray[i]}, ");
            //                }
            //            }
            //        }
            //    }
            //    Console.WriteLine();
            //} 
            #endregion

            Console.ReadLine();
        }

        private static void FormatArray2Json(string strArr,string file)
        {
            string[] variablesArray = strArr.Split(',');
            List<ItemVariable> itemVariables = new List<ItemVariable>();
            for (int i = 0; i < variablesArray.Count(); i++)
            {
                itemVariables.Add(new ItemVariable() { Id = i, Value = variablesArray[i] });
            }
            string strItemVariables = JsonConvert.SerializeObject(itemVariables);
            File.WriteAllText(file, strItemVariables);
        }
    }
}