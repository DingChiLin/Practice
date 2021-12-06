# 輸入方式：
1. 數字 N1 為第一天面試官總數
2. 接下來 N1 行為第一天面試官名稱
3. 數字 N2 為第二天面試官總數
4. 接下來 N2 行為第二天面試官名稱
5. 數字 M 為學生總數
6. 接下來 M 行為學生總名單

# 強條件（一定不能違反）：
1. 面試次數盡量均分，最多與最少相差不超過 1
2. 觀察 + 面試總數盡量均分，每人最多不可超過，最多與最少相差不超過 1
3. 同一時間不會有人同時面試或觀察
4. 不論觀察或面試，學員皆不會排到重複的面試官
5. 避免出現（面試 & 觀察）整組學員重複的狀況
6. 必須出現觀察者輪空的話，不會輪到相同的學員或面試官

# 弱條件（如果全都找不到符合條件的組合，降低限制）：
1. 上述條件 4 改為：同一個面試官，學員不可在被面試前觀察過，但有可能先面試後觀察

# 理論上可以支援，但還沒詳細測試：
1. 對每個人給定面試 & 觀察次數上限（不給面試的人就把上限設為0，或讓特定某些人多給面試機會）

# 未支援：

# 輸出：
測試 1M 次，