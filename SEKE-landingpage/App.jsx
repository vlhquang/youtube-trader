import React from "react";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans">
      {/* HERO */}
      <section className="bg-gradient-to-br from-indigo-500 to-purple-600 text-white py-24 text-center">
        <h1 className="text-4xl font-bold mb-4">Phân Tích Từ Khóa YouTube Thông Minh</h1>
        <p className="text-lg max-w-xl mx-auto">
          Công cụ tối ưu nội dung YouTube bằng AI + dữ liệu thực tế. Khám phá từ khóa, đối thủ và xu hướng.
        </p>
        <a href="/login" className="mt-8 inline-block px-6 py-3 bg-white text-indigo-600 font-semibold rounded-full shadow hover:bg-gray-100 transition">
          🚀 Đăng nhập bằng Google
        </a>
      </section>

      {/* FEATURES */}
      <section className="py-20 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Bạn có thể làm gì?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard icon="🔍" title="Gợi ý từ khóa thông minh" text="Nhập 1 từ khóa, nhận 100 ý tưởng theo xu hướng, dài – ngắn – liên quan." />
          <FeatureCard icon="📊" title="Phân tích video & đối thủ" text="Tìm video top đầu & 3 kênh đối thủ cùng niche. Lấy dữ liệu phân tích kèm." />
          <FeatureCard icon="🎯" title="Phân tích kênh theo chiều sâu" text="Đào sâu kênh đối thủ: 5 video gần nhất, xem view, like, comment." />
        </div>
      </section>

      {/* CTA */}
      <section className="bg-indigo-600 text-white text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Bắt đầu ngay – Hoàn toàn miễn phí</h2>
        <p className="mb-6">Không cần cài đặt. Chỉ cần đăng nhập bằng Google và sử dụng quota của bạn.</p>
        <a href="/login" className="px-6 py-3 bg-white text-indigo-700 font-semibold rounded-full hover:bg-gray-200 transition">
          Đăng nhập bằng Google
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 text-sm py-8 text-center">
        © 2025 KeywordSage – Công cụ SEO YouTube | <a href="/terms" className="underline">Điều khoản</a>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, text }) {
  return (
    <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{text}</p>
    </div>
  );
}
