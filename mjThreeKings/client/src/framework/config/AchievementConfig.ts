//--------------------------------------------------
// <auto-generated>
//      本文件由《纳米娱乐-游戏编辑器-数据工具》自动生成
//      源文件： Achievement.xlsx
// </auto-generated>
//--------------------------------------------------

class AchievementConfig extends ConfigDataBase
{
	/**任务名称*/
	public get Name():string {  return this.Get<string>("Name"); }

	/**任务描述*/
	public get Describe():string {  return this.Get<string>("Describe"); }

	/**关联任务*/
	public get PreId():number {  return this.Get<number>("PreId"); }

	/**星级*/
	public get Star():number {  return this.Get<number>("Star"); }

	/**资源名称*/
	public get Res():string {  return this.Get<string>("Res"); }

	/**任务类型*/
	public get Type():number {  return this.Get<number>("Type"); }

	/**功能号*/
	public get Action():number {  return this.Get<number>("Action"); }

	/**取值*/
	public get Count():number {  return this.Get<number>("Count"); }

	/**奖励类型*/
	public get AwardType():number[] {  return this.Get<number[]>("AwardType"); }

	/**奖励值*/
	public get AwardValue():number[] {  return this.Get<number[]>("AwardValue"); }

}