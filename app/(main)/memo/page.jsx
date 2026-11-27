import React from 'react'

function page() {
  return (
    <div>
     <h1>食べたいものメモ</h1>
     <p>食べたいもの、お店などをメモして一覧で確認することが出来ます。</p>

      {/* 1. 入力フォームの骨組み */}
      <section>
        <input type="text" placeholder="食べたいもの・気になるお店" />
        <button type="button">追加</button>
      </section>

      {/* 2. 一覧表示の骨組み */}
      <section>
        <h2>メモ一覧</h2>
        <ul>
          <li>
            濃厚味噌ラーメン <button type="button">削除</button>
          </li>
          <li>
            駅前のここいち <button type="button">削除</button>
          </li>
          <li>
            豚の生姜焼き <button type="button">削除</button>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default page