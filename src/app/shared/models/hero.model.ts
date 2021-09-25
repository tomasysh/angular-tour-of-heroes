export interface Hero {
  id?: number;          // id
  name: string;        // 姓名
  image?: string;      // 圖像
  hp: string;          // 生命值
  attack: number;      // 攻擊力
  defence: number;     // 防禦力
  weapon?: string;     // 武器
  skill?: string;      // 必殺技
  description: string; // 人物介紹
}
