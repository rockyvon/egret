//--------------------------------------------------
// <auto-generated>
//      本文件由《纳米娱乐-游戏编辑器-数据工具》自动生成
//      源文件： Skill.xlsx
// </auto-generated>
//--------------------------------------------------
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var SkillConfig = (function (_super) {
    __extends(SkillConfig, _super);
    function SkillConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(SkillConfig.prototype, "Type", {
        /**类型*/
        get: function () { return this.Get("Type"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillConfig.prototype, "Name", {
        /**技能名称*/
        get: function () { return this.Get("Name"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillConfig.prototype, "Damage", {
        /**技能伤害*/
        get: function () { return this.Get("Damage"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillConfig.prototype, "Res", {
        /**资源名*/
        get: function () { return this.Get("Res"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillConfig.prototype, "MinAward", {
        /**最低技能奖励*/
        get: function () { return this.Get("MinAward"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillConfig.prototype, "MaxAward", {
        /**最高技能奖励*/
        get: function () { return this.Get("MaxAward"); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SkillConfig.prototype, "AwardRate", {
        /**奖励概率*/
        get: function () { return this.Get("AwardRate"); },
        enumerable: true,
        configurable: true
    });
    return SkillConfig;
}(ConfigDataBase));
__reflect(SkillConfig.prototype, "SkillConfig");