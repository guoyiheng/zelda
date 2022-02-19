let str = `
<div class="sectionHeading">第一回　西门庆热结十弟兄　武二郎冷遇亲哥嫂</div>
<div class="noteHeading">标注(<span class="highlight_pink">粉色</span>) - 位置 128</div>
<div class="noteText">一朝马死黄金尽，亲者如同陌路人。</div>
<div class="noteHeading">标注(<span class="highlight_pink">粉色</span>) - 位置 137</div>
<div class="noteText">
  说便如此说，这“财色”二字，从来只没有看得破的。若有那看得破的，便见得堆金积玉，是棺材内带不去的瓦砾泥沙；贯朽粟红，是皮囊内装不尽的臭淤粪土。高堂广厦，玉宇琼楼，是坟山上起不得的享堂；锦衣绣袄，狐服貂裘，是骷髅上裹不了的败絮。即如那妖姬艳女，献媚工妍，看得破的，却如交锋阵上将军叱咤献威风；朱唇皓齿，掩袖回眸，懂得来时，便是阎罗殿前鬼判夜叉增恶态。罗袜一弯，金莲三寸，是砌坟时破土的锹锄；枕上绸缪，被中恩爱，是五殿下油锅中生活。只有那《金刚经》上两句说得好，他说道：“如梦幻泡影，如电复如露。”见得人生在世，一件也少不得，到了那结束时，一件也用不着。随着你举鼎荡舟的神力，到头来少不得骨软筋麻；由着你铜山金谷的奢华，正好时却又要冰消雪散。假饶你闭月羞花的容貌，一到了垂眉落眼，人皆掩鼻而过之；比如你陆贾隋何的机锋，若遇着齿冷唇寒，吾未如之何也已。到不如削去六根清净，披上一领袈裟，参透了空色世界，打磨穿生灭机关，直超无上乘，不落是非窠，倒得个清闲自在，不向火坑中翻筋斗也。正是：三寸气在千般用，一日无常万事休。
</div>
<div class="sectionHeading">第二回　俏潘娘帘下勾情　老王婆茶坊说技</div>
<div class="noteHeading">标注(<span class="highlight_pink">粉色</span>) - 位置 406</div>
<div class="noteText">
  芙蓉面，冰雪肌，生来娉婷年已笄。袅袅倚门余。梅花半含蕊，似开还闭。初见帘边，羞涩还留住；再过楼头，款接多欢喜。行也宜，立也宜，坐也宜，偎傍更相宜。
</div>`
const re = /<div class="noteHeading">(.*)(\(.*\)) -(.*)<\/div>/g
const result = [...str.matchAll(re)]
result.forEach(iterator => {
  // console.log('iterator', iterator[0], iterator[1])
  // console.log('str.includes(iterator[0])', str.includes(iterator[0]))
  str = str.replace(iterator[0], `**${iterator[1]} -${iterator[3]}**`)
})
console.log('str', str)
