'use client'

import { useState } from 'react'

// Mock data for streamers
const streamers = [
  {
    id: 1,
    name: 'Mia',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    viewers: '12.5K',
    title: '🎵 唱歌时间到！',
    category: '音乐',
    tags: ['才艺', '歌手', '治愈'],
    isLive: true,
  },
  {
    id: 2,
    name: 'Kai',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    viewers: '8.2K',
    title: '🎮 游戏上分中',
    category: '游戏',
    tags: ['游戏', '电竞', '竞技'],
    isLive: true,
  },
  {
    id: 3,
    name: 'Luna',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    viewers: '15.8K',
    title: '💄 化妆教学',
    category: '美妆',
    tags: ['美妆', '教程', '时尚'],
    isLive: true,
  },
  {
    id: 4,
    name: 'Alex',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
    viewers: '6.3K',
    title: '🍜 烹饪直播',
    category: '美食',
    tags: ['美食', '料理', '吃播'],
    isLive: true,
  },
  {
    id: 5,
    name: 'Yuki',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop',
    viewers: '22.1K',
    title: '🗣️ 聊天互动时间',
    category: '聊天',
    tags: ['聊天', '互动', '陪伴'],
    isLive: true,
  },
  {
    id: 6,
    name: 'Max',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
    viewers: '9.7K',
    title: '🎯 射击游戏冲冲冲',
    category: '游戏',
    tags: ['游戏', 'FPS', '竞技'],
    isLive: true,
  },
]

const categories = [
  { name: '🎮 游戏', count: '2.3K 直播中' },
  { name: '🎵 音乐', count: '1.8K 直播中' },
  { name: '💬 聊天', count: '3.1K 直播中' },
  { name: '🍜 美食', count: '890 直播中' },
  { name: '💄 美妆', count: '650 直播中' },
  { name: '🎨 艺术', count: '420 直播中' },
]

const gifts = [
  { name: '❤️ 爱心', price: '$0.50', emoji: '❤️' },
  { name: '🌹 玫瑰', price: '$1.00', emoji: '🌹' },
  { name: '🎵 音符', price: '$2.00', emoji: '🎵' },
  { name: '💎 钻石', price: '$5.00', emoji: '💎' },
  { name: '🚀 火箭', price: '$10.00', emoji: '🚀' },
  { name: '👑 皇冠', price: '$50.00', emoji: '👑' },
]

export default function Home() {
  const [hoveredGift, setHoveredGift] = useState<string | null>(null)

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                逗播
              </span>
              <span className="text-sm text-slate-400 ml-1">Doubo</span>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-xl mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索主播、直播间..."
                  className="w-full bg-slate-800 border border-slate-600 rounded-full py-2 px-4 pl-10 text-white placeholder-slate-400 focus:outline-none focus:border-purple-500"
                />
                <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <button className="text-slate-300 hover:text-white transition-colors">
                🔔
              </button>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-2 rounded-full font-medium transition-all transform hover:scale-105">
                开始直播
              </button>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 p-0.5">
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop"
                    alt="User"
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Banner */}
          <div className="relative h-80 rounded-2xl overflow-hidden mb-8">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 to-pink-900/90" />
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&h=400&fit=crop')] bg-cover bg-center opacity-30" />
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center">
                <h1 className="text-5xl font-bold text-white mb-4">
                  发现有趣的直播 🎉
                </h1>
                <p className="text-xl text-slate-200 mb-6">
                  东南亚领先的娱乐直播平台，与你喜欢的主播互动！
                </p>
                <div className="flex gap-4 justify-center">
                  <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all transform hover:scale-105">
                    立即观看
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium backdrop-blur transition-all">
                    了解更多
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Categories */}
          <section className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">直播分类</h2>
              <a href="#" className="text-purple-400 hover:text-purple-300">查看全部 →</a>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((cat, i) => (
                <div
                  key={i}
                  className="bg-slate-800/50 hover:bg-slate-700/50 rounded-xl p-4 text-center cursor-pointer transition-all hover:transform hover:scale-105 border border-slate-700/50 hover:border-purple-500/50"
                >
                  <div className="text-3xl mb-2">{cat.name.split(' ')[0]}</div>
                  <div className="font-medium text-white">{cat.name.split(' ')[1]}</div>
                  <div className="text-sm text-slate-400">{cat.count}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Live Streams */}
          <section className="mb-8">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full live-badge" />
              <h2 className="text-2xl font-bold text-white">正在直播</h2>
              <span className="text-slate-400">8.4K 直播间</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {streamers.map((streamer) => (
                <div
                  key={streamer.id}
                  className="bg-slate-800 rounded-xl overflow-hidden cursor-pointer transition-all hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 border border-slate-700/50 hover:border-purple-500/30"
                >
                  {/* Thumbnail */}
                  <div className="relative h-40 bg-slate-700">
                    <img
                      src={streamer.avatar}
                      alt={streamer.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                        <span className="w-2 h-2 bg-white rounded-full live-badge" />
                        LIVE
                      </span>
                      <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                        {streamer.viewers} 观看
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <div className="flex flex-wrap gap-1">
                        {streamer.tags.map((tag, i) => (
                          <span key={i} className="bg-purple-500/80 text-white text-xs px-2 py-0.5 rounded-full">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-4">
                    <h3 className="font-bold text-white mb-1 truncate">{streamer.title}</h3>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <img
                          src={streamer.avatar}
                          alt={streamer.name}
                          className="w-8 h-8 rounded-full object-cover"
                        />
                        <span className="text-slate-300">{streamer.name}</span>
                      </div>
                      <span className="text-slate-500 text-sm">{streamer.category}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Gift Section */}
          <section className="mb-8">
            <div className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-2xl p-6 border border-purple-500/30">
              <h2 className="text-2xl font-bold text-white mb-4">🎁 礼物打赏</h2>
              <p className="text-slate-300 mb-4">
                支持你喜欢的主播，发送礼物表达你的喜爱！
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                {gifts.map((gift) => (
                  <div
                    key={gift.name}
                    className={`bg-slate-800/50 rounded-xl p-4 text-center cursor-pointer transition-all border-2 ${
                      hoveredGift === gift.name
                        ? 'border-purple-500 transform scale-110'
                        : 'border-transparent hover:border-purple-500/50'
                    }`}
                    onMouseEnter={() => setHoveredGift(gift.name)}
                    onMouseLeave={() => setHoveredGift(null)}
                  >
                    <div className="text-4xl mb-2">{gift.emoji}</div>
                    <div className="font-medium text-white">{gift.name}</div>
                    <div className="text-sm text-purple-400">{gift.price}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Top Streamers */}
          <section>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-white">🏆 热门主播</h2>
              <a href="#" className="text-purple-400 hover:text-purple-300">查看排行榜 →</a>
            </div>
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700/50">
              <div className="space-y-4">
                {[1, 2, 3].map((rank) => (
                  <div key={rank} className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700/50 cursor-pointer transition-colors">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                      rank === 1 ? 'bg-yellow-500' : rank === 2 ? 'bg-slate-400' : 'bg-orange-600'
                    } text-white`}>
                      {rank}
                    </div>
                    <img
                      src={`https://images.unsplash.com/photo-${rank === 1 ? '1494790108377-be9c29b29330' : rank === 2 ? '1507003211169-0a1dd7228f2d' : '1438761681033-6461ffad8d80'}?w=100&h=100&fit=crop`}
                      alt={`Top ${rank}`}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-bold text-white">主播 {rank}</div>
                      <div className="text-sm text-slate-400">🎵 音乐直播</div>
                    </div>
                    <div className="text-right">
                      <div className="text-purple-400 font-bold">{(100 - rank * 20)}.5K</div>
                      <div className="text-xs text-slate-500">月票</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <span className="text-xl">🎬</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  逗播
                </span>
              </div>
              <p className="text-slate-400 text-sm">
                东南亚领先的娱乐直播平台，发现有趣的直播内容！
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">探索</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-purple-400">热门直播</a></li>
                <li><a href="#" className="hover:text-purple-400">分类</a></li>
                <li><a href="#" className="hover:text-purple-400">主播排行</a></li>
                <li><a href="#" className="hover:text-purple-400">礼物商店</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">帮助</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#" className="hover:text-purple-400">如何直播</a></li>
                <li><a href="#" className="hover:text-purple-400">礼物说明</a></li>
                <li><a href="#" className="hover:text-purple-400">常见问题</a></li>
                <li><a href="#" className="hover:text-purple-400">联系我们</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-4">下载 App</h4>
              <div className="flex gap-2">
                <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm text-white transition-colors">
                  📱 iOS
                </button>
                <button className="bg-slate-800 hover:bg-slate-700 px-4 py-2 rounded-lg text-sm text-white transition-colors">
                  🤖 Android
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-500">
            © 2024 逗播 Doubo. 保留所有权利。
          </div>
        </div>
      </footer>
    </div>
  )
}
