// ==========================================
// 🔐 1. ユーザーアカウント（メール・パスワード・他のユーザー含む）
// ==========================================
export const mockUsers = [
  {
    id: "user-001",
    name: "山田 太郎",
    email: "taro.yamada@example.com",
    password: "password123", // 本番ではハッシュ化される想定
    familySize: "一人暮らし",
    preferences: ["ガッツリ", "ラーメン", "辛いもの好き"],
    // ユーザー001の現在の冷蔵庫中身
    fridge: [
      { id: "ing-001", name: "豚バラ肉", amount: "150g", category: "肉類" },
      { id: "ing-002", name: "キャベツ", amount: "1/4玉", category: "野菜" },
      { id: "ing-003", name: "もやし", amount: "1袋", category: "野菜" }
    ]
  },
  {
    id: "user-002",
    name: "佐藤 美咲 (他のユーザー：ファミリー層)",
    email: "misaki.sato@example.com",
    password: "password456",
    familySize: "3人家族（夫婦＋子供1人）",
    preferences: ["ヘルシー", "和食", "薄味", "アレルギーなし"],
    // ユーザー002（他ユーザー）の現在の冷蔵庫中身
    fridge: [
      { id: "ing-004", name: "鶏もも肉", amount: "300g", category: "肉類" },
      { id: "ing-005", name: "玉ねぎ", amount: "2個", category: "野菜" },
      { id: "ing-006", name: "たまご", amount: "6個", category: "その他" },
      { id: "ing-007", name: "人参", amount: "1本", category: "野菜" },
      { id: "ing-008", name: "ほうれん草", amount: "1束", category: "野菜" }
    ]
  }
];

// ==========================================
// 🏢 2. 外食・テイクアウト店舗データ (バリエーション強化)
// ==========================================
export const mockRestaurants = [
  {
    id: "rest-001",
    name: "炭火焼肉 たけうち",
    branch: "渋谷店",
    category: "焼肉・お肉",
    moodTags: ["heavy", "肉系", "ガッツリ"],
    access: "現在地から徒歩4分",
    budget: "¥1,000〜¥2,000",
    recommendedMenu: "自家製タレのハラミランチ定食",
    description: "ジューシーで肉厚なハラミが自慢。ライス大盛り無料で午後への元気をフルチャージできます！",
    mapUrl: "https://google.com",
    isOpen: true
  },
  {
    id: "rest-002",
    name: "お魚処 みなとや",
    branch: "神南店",
    category: "和食・魚料理",
    moodTags: ["light", "魚系", "さっぱり"],
    access: "現在地から徒歩6分",
    budget: "¥1,200〜¥1,500",
    recommendedMenu: "極上 豊洲直送のサバ塩焼き定食",
    description: "皮はパリッと、身はふっくらジューシーに焼き上げたサバ。体に優しい小鉢も豊富にセット。",
    mapUrl: "https://google.com",
    isOpen: true
  },
  {
    id: "rest-003",
    name: "GREEN BOWL (グリーンボウル)",
    branch: "宇田川町店",
    category: "サラダ・カフェ",
    moodTags: ["healthy", "野菜多め", "ヘルシー"],
    access: "現在地から徒歩3分",
    budget: "¥900〜¥1,400",
    recommendedMenu: "蒸し鶏と完熟アボカドのプロテインサラダ",
    description: "1皿で1日の半分以上の野菜と、豊富なタンパク質を補給。ドレッシングも選べて飽きません。",
    mapUrl: "https://google.com",
    isOpen: true
  },
  {
    id: "rest-004",
    name: "麺処 えびす",
    branch: "渋谷東口店",
    category: "ラーメン",
    moodTags: ["heavy", "こってり", "ガッツリ"],
    access: "現在地から徒歩5分",
    budget: "¥850〜¥1,200",
    recommendedMenu: "特製濃厚魚介豚骨つけ麺",
    description: "モチモチの極太麺に、ドロッと濃厚な魚介豚骨スープが絡む至極の一杯。",
    mapUrl: "https://google.com",
    isOpen: true
  }
];

// ==========================================
// 🧡 3. 最近の「食べたいものメモ」データ
// ==========================================
export const mockWishlist = [
  {
    id: "wish-001",
    type: "restaurant", // 店舗のストック
    targetName: "炭火焼肉 たけうち",
    addedAt: "2026-09-15",
    memo: "テレビのグルメ特番で紹介されてた。ハラミ定食が美味そうだから次の一人ランチで行く。"
  },
  {
    id: "wish-002",
    type: "recipe", // 料理メニューのストック
    targetName: "本格四川風ピリ辛麻婆豆腐",
    addedAt: "2026-09-16",
    memo: "インスタでバズってたレシピ。ひき肉と豆腐が余ったら夜ご飯に挑戦してみたい。"
  },
  {
    id: "wish-003",
    type: "restaurant",
    targetName: "GREEN BOWL",
    addedAt: "2026-09-17",
    memo: "最近外食が続いて太ってきたから、リセット用のヘルシー飯としてストック。"
  }
];

// ==========================================
// 🍳 4. 自炊・レシピデータ（複数ジャンル・多ユーザー対応）
// ==========================================
export const mockRecipes = [
  // ユーザー001向け（時短・ガッツリ・少人数向け）
  {
    id: "recipe-001",
    title: "豚肉とキャベツのコク旨味噌炒め",
    cookingTime: "12分",
    category: "中華・炒め物",
    targetIngredients: ["豚バラ肉", "キャベツ"],
    nutritionTags: ["スタミナ", "タンパク質"],
    steps: [
      "キャベツはざく切り、豚バラ肉はひと口大に切る。",
      "フライパンにごま油を熱し、豚肉を炒めて色が変わったらキャベツを加える。",
      "キャベツがしんなりしたら、味噌・醤油・みりんで味を調えて完成。"
    ]
  },
  {
    id: "recipe-002",
    title: "包丁不要！もやしと豚バラのレンジ蒸し",
    cookingTime: "8分",
    category: "和食・レンジ調理",
    targetIngredients: ["豚バラ肉", "もやし"],
    nutritionTags: ["超時短", "低糖質"],
    steps: [
      "耐熱皿にもやしを敷き詰め、その上に豚バラ肉を広げる。",
      "ふんわりラップをかけ、電子レンジ（600W）で約5分加熱する。",
      "ポン酢とごま油を回しかけて完成。"
    ]
  },
  // ユーザー002向け（ファミリー向け・定番おかず）
  {
    id: "recipe-003",
    title: "じっくり染み込んだ和風鶏大根",
    cookingTime: "25分",
    category: "和食・煮物",
    targetIngredients: ["鶏もも肉", "大根"], 
    nutritionTags: ["優しい味", "作り置き向き"],
    steps: [
      "鶏もも肉と大根をひと口大に切る。",
      "鍋で鶏肉を炒め、表面に焼き色がついたらしつこくアクを取りながら大根と出汁を加える。",
      "醤油、酒、みりん、砂糖を加え、大根が柔らかくなるまで落とし蓋をして煮込む。"
    ]
  },
  {
    id: "recipe-004",
    title: "子供も大好き！ふんわりチキンオムライス",
    cookingTime: "15分",
    category: "洋食",
    targetIngredients: ["鶏もも肉", "玉ねぎ", "たまご"],
    nutritionTags: ["子供向け", "定番人気"],
    steps: [
      "鶏もも肉と玉ねぎを細かく刻んでフライパンで炒める。",
      "ご飯とケチャップを加えてケチャップライスを作り、一度お皿に盛る。",
      "卵を半熟に焼き、ケチャップライスの卵の上に乗せて完成。"
    ]
  }
];

// ==========================================
// 📅 5. 一週間分の献立カレンダー構築データ
// ==========================================
export const mockWeeklyCalendar = {
  id: "calendar-2026-w38",
  startDate: "2026-09-14",
  endDate: "2026-09-20",
  // 各曜日の食事意思決定データマッピング
  days: [
    { day: "月曜日", type: "自炊", recipeId: "recipe-001", restaurantId: null, memo: "冷蔵庫のキャベツを消費完了" },
    { day: "火曜日", type: "外食", recipeId: null, restaurantId: "rest-004", memo: "仕事が長引いたため『えびす』でつけ麺" },
    { day: "水曜日", type: "自炊", recipeId: "recipe-002", restaurantId: null, memo: "レンジ蒸しで8分超時短調理" },
    { day: "木曜日", type: "未定", recipeId: null, restaurantId: null, memo: "現在の気分や在庫からAIが自動提案する枠" },
    { day: "金曜日", type: "未定", recipeId: null, restaurantId: null, memo: "華金！外食モードでAI検索予定" },
    { day: "土曜日", type: "未定", recipeId: null, restaurantId: null, memo: "まとめ買い食材で自炊予定" },
    { day: "日曜日", type: "未定", recipeId: null, restaurantId: null, memo: "残り物一掃ルーレット起動予定" }
  ]
};
