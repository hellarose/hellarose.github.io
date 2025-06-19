/**
 * ```ts
 * type T = {rate:number,}
 * ```
 * @param {T[]|number} rates 概率配置列表
 * @param {boolean} singleSuccess 寻到第一个真是否停止
 * @returns {T||T[]||null|boolean}
 */
function rpgRateCheck(rates=[],singleSuccess=false){
  if(typeof rates === 'number' ){
    return Math.random()*100 < rates
  }
  if(singleSuccess){
    return rates.find(item=>Math.random()*100<item.rate)
  }else{
    return rates.filter(item=>Math.random()*100<item.rate)
  }
}