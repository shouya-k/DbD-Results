const parkData = [
  {
    id: 1,
    url: require('@/assets/img/park/park01.png'),
    name: '絆',
  },
  {
    id: 2,
    url: require('@/assets/img/park/park02.png'),
    name: '有能の証明',
  },
  {
    id: 3,
    url: require('@/assets/img/park/park03.png'),
    name: 'リーダー',
  },
  {
    id: 4,
    url: require('@/assets/img/park/park04.png'),
    name: '素早く静かに',
  },
  {
    id: 5,
    url: require('@/assets/img/park/park05.png'),
    name: '全力疾走',
  },
  {
    id: 6,
    url: require('@/assets/img/park/park06.png'),
    name: 'アドレナリン',
  },
  {
    id: 7,
    url: require('@/assets/img/park/park07.png'),
    name: '共感',
  },
  {
    id: 8,
    url: require('@/assets/img/park/park08.png'),
    name: '植物学の知識',
  },
  {
    id: 9,
    url: require('@/assets/img/park/park09.png'),
    name: 'セルフケア',
  },
  {
    id: 10,
    url: require('@/assets/img/park/park10.png'),
    name: '鋼の意思',
  },
  {
    id: 11,
    url: require('@/assets/img/park/park11.png'),
    name: '魂の平穏',
  },
  {
    id: 12,
    url: require('@/assets/img/park/park12.png'),
    name: 'サボタージュ',
  },
  {
    id: 13,
    url: require('@/assets/img/park/park13.png'),
    name: 'スマートな着地',
  },
  {
    id: 14,
    url: require('@/assets/img/park/park14.png'),
    name: '都会の逃走術',
  },
  {
    id: 15,
    url: require('@/assets/img/park/park15.png'),
    name: '都会の生存術',
  },
  {
    id: 16,
    url: require('@/assets/img/park/park16.png'),
    name: '手札公開',
  },
  {
    id: 17,
    url: require('@/assets/img/park/park17.png'),
    name: '掛け金のレイズ',
  },
  {
    id: 18,
    url: require('@/assets/img/park/park18.png'),
    name: '最後の切り札',
  },
  {
    id: 19,
    url: require('@/assets/img/park/park19.png'),
    name: 'テクニシャン',
  },
  {
    id: 20,
    url: require('@/assets/img/park/park20.png'),
    name: 'しなやか',
  },
  {
    id: 21,
    url: require('@/assets/img/park/park21.png'),
    name: '警戒',
  },
  {
    id: 22,
    url: require('@/assets/img/park/park22.png'),
    name: 'ずっと一緒だ',
  },
  {
    id: 23,
    url: require('@/assets/img/park/park23.png'),
    name: 'デッド・ハード',
  },
  {
    id: 24,
    url: require('@/assets/img/park/park24.png'),
    name: '弱音はナシだ',
  },
  {
    id: 25,
    url: require('@/assets/img/park/park25.png'),
    name: '置き去りにされ',
  },
  {
    id: 26,
    url: require('@/assets/img/park/park26.png'),
    name: '与えられた猶予',
  },
  {
    id: 27,
    url: require('@/assets/img/park/park27.png'),
    name: '不滅',
  },
  {
    id: 28,
    url: require('@/assets/img/park/park28.png'),
    name: '唯一の生存者',
  },
  {
    id: 29,
    url: require('@/assets/img/park/park29.png'),
    name: '執念の対象',
  },
  {
    id: 30,
    url: require('@/assets/img/park/park30.png'),
    name: '決死の一撃',
  },
  {
    id: 31,
    url: require('@/assets/img/park/park31.png'),
    name: '目を覚ませ',
  },
  {
    id: 32,
    url: require('@/assets/img/park/park32.png'),
    name: '調剤学',
  },
  {
    id: 33,
    url: require('@/assets/img/park/park33.png'),
    name: '寝ずの番',
  },
  {
    id: 34,
    url: require('@/assets/img/park/park34.png'),
    name: '執念',
  },
  {
    id: 35,
    url: require('@/assets/img/park/park35.png'),
    name: '刑事の直感',
  },
  {
    id: 36,
    url: require('@/assets/img/park/park36.png'),
    name: '張り込み',
  },
  {
    id: 37,
    url: require('@/assets/img/park/park37.png'),
    name: 'ダンスウィズミー',
  },
  {
    id: 38,
    url: require('@/assets/img/park/park38.png'),
    name: 'オポチュニティ',
  },
  {
    id: 39,
    url: require('@/assets/img/park/park39.png'),
    name: 'ボイルオーバー',
  },
  {
    id: 40,
    url: require('@/assets/img/park/park40.png'),
    name: '陽動',
  },
  {
    id: 41,
    url: require('@/assets/img/park/park41.png'),
    name: '開放',
  },
  {
    id: 42,
    url: require('@/assets/img/park/park42.png'),
    name: '独学者',
  },
  {
    id: 43,
    url: require('@/assets/img/park/park43.png'),
    name: 'ブレイクダウン',
  },
  {
    id: 44,
    url: require('@/assets/img/park/park44.png'),
    name: 'アフターケア',
  },
  {
    id: 45,
    url: require('@/assets/img/park/park45.png'),
    name: 'ディストーション',
  },
  {
    id: 46,
    url: require('@/assets/img/park/park46.png'),
    name: '連帯感',
  },
  {
    id: 47,
    url: require('@/assets/img/park/park47.png'),
    name: '平常心',
  },
  {
    id: 48,
    url: require('@/assets/img/park/park48.png'),
    name: '真っ向勝負',
  },
  {
    id: 49,
    url: require('@/assets/img/park/park49.png'),
    name: 'ベビーシッター',
  },
  {
    id: 50,
    url: require('@/assets/img/park/park50.png'),
    name: '仲間意識',
  },
  {
    id: 51,
    url: require('@/assets/img/park/park51.png'),
    name: 'セカンドウインド',
  },
  {
    id: 52,
    url: require('@/assets/img/park/park52.png'),
    name: '一緒にいよう',
  },
  {
    id: 53,
    url: require('@/assets/img/park/park53.png'),
    name: '執着心',
  },
  {
    id: 54,
    url: require('@/assets/img/park/park54.png'),
    name: '内なる力',
  },
  {
    id: 55,
    url: require('@/assets/img/park/park55.png'),
    name: 'フリップフロップ',
  },
  {
    id: 56,
    url: require('@/assets/img/park/park56.png'),
    name: 'ベルトを締めろ',
  },
  {
    id: 57,
    url: require('@/assets/img/park/park57.png'),
    name: '英雄の奮起',
  },
  {
    id: 58,
    url: require('@/assets/img/park/park58.png'),
    name: '怪我の功名',
  },
  {
    id: 59,
    url: require('@/assets/img/park/park59.png'),
    name: '強行手段',
  },
  {
    id: 60,
    url: require('@/assets/img/park/park60.png'),
    name: '突破',
  },
  {
    id: 61,
    url: require('@/assets/img/park/park61.png'),
    name: 'ソウルガード',
  },
  {
    id: 62,
    url: require('@/assets/img/park/park62.png'),
    name: '血の協定',
  },
  {
    id: 63,
    url: require('@/assets/img/park/park63.png'),
    name: '抑圧の同盟',
  },
  {
    id: 64,
    url: require('@/assets/img/park/park64.png'),
    name: 'ツルツルとした肉体',
  },
  {
    id: 65,
    url: require('@/assets/img/park/park65.png'),
    name: '痛みも気から',
  },
  {
    id: 66,
    url: require('@/assets/img/park/park66.png'),
    name: '闇の感覚',
  },
  {
    id: 67,
    url: require('@/assets/img/park/park67.png'),
    name: 'デジャブ',
  },
  {
    id: 68,
    url: require('@/assets/img/park/park68.png'),
    name: '希望',
  },
  {
    id: 69,
    url: require('@/assets/img/park/park69.png'),
    name: '血族',
  },
  {
    id: 70,
    url: require('@/assets/img/park/park70.png'),
    name: '身軽',
  },
  {
    id: 71,
    url: require('@/assets/img/park/park71.png'),
    name: '誰も見捨てない',
  },
  {
    id: 72,
    url: require('@/assets/img/park/park72.png'),
    name: 'コソ泥の本能',
  },
  {
    id: 73,
    url: require('@/assets/img/park/park73.png'),
    name: '予感',
  },
  {
    id: 74,
    url: require('@/assets/img/park/park74.png'),
    name: '逆境魂',
  },
  {
    id: 75,
    url: require('@/assets/img/park/park75.png'),
    name: '小さな獲物',
  },
  {
    id: 76,
    url: require('@/assets/img/park/park76.png'),
    name: '凍りつく背筋',
  },
  {
    id: 77,
    url: require('@/assets/img/park/park77.png'),
    name: 'きっとやり遂げる',
  },
  {
    id: 78,
    url: require('@/assets/img/park/park78.png'),
    name: 'オフレコ',
  },
  {
    id: 79,
    url: require('@/assets/img/park/park79.png'),
    name: 'おとり',
  },
  {
    id: 80,
    url: require('@/assets/img/park/park80.png'),
    name: '人々のために',
  },
  {
    id: 81,
    url: require('@/assets/img/park/park81.png'),
    name: '透視家',
  },
  {
    id: 82,
    url: require('@/assets/img/park/park82.png'),
    name: '苦肉の策',
  },
  {
    id: 83,
    url: require('@/assets/img/park/park83.png'),
    name: '耐久設計',
  },
  {
    id: 84,
    url: require('@/assets/img/park/park84.png'),
    name: '査定',
  },
  {
    id: 85,
    url: require('@/assets/img/park/park85.png'),
    name: '欺き',
  },
  {
    id: 86,
    url: require('@/assets/img/park/park86.png'),
    name: '勢力争い',
  },
  {
    id: 87,
    name: 'なし',
  },
]

export default parkData
