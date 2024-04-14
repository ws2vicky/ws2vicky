import { timeZone } from "./config";

export async function getFooter() {
  return `
<p align="center">此文件 <i>README</i> <b>间隔 12 小时</b>自动刷新生成！
</br>
最近一次刷新于：${new Date().toLocaleString(undefined, {
    timeStyle: "medium",
    dateStyle: "short",
    hour12: false,
    timeZone,
  })}
</p>
  `;
}
