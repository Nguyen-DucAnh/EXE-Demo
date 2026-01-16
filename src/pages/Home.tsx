import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, BookOpen, MessageCircle, Users, ArrowRight } from 'lucide-react';
import type { LifeStage } from '@/types';
import { getStageLabel } from '@/services/knowledgeService';

const stages: LifeStage[] = ['preparing', 'trimester1', 'trimester2', 'trimester3', 'postpartum', 'newborn'];

export const Home = () => {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-orange-50 to-rose-50 opacity-50 rounded-3xl blur-3xl -z-10"></div>
        <div className="flex justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <Heart className="h-20 w-20 text-primary relative z-10 animate-pulse" fill="currentColor" />
          </div>
        </div>
        <h1 className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-pink-500 via-rose-400 to-orange-400 bg-clip-text text-transparent animate-gradient tracking-tight">
          HeyPaaaa
        </h1>
        <p className="text-2xl font-semibold text-gray-700 max-w-2xl mx-auto">
          Hướng dẫn chăm sóc vợ và con cho các ông bố tương lai
        </p>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Hành trình làm cha đầy thử thách nhưng cũng đầy niềm vui. Chúng tôi ở đây để đồng hành cùng bạn,
          cung cấp kiến thức và hỗ trợ bạn chăm sóc vợ trong thai kỳ, sau sinh, và chăm sóc em bé.
        </p>
        <div className="flex gap-4 justify-center flex-wrap pt-4">
          <Button size="lg" asChild className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-xl transition-all">
            <Link to="/knowledge">
              Khám phá kiến thức <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 hover:border-pink-400 transition-all">
            <Link to="/assistant">
              Hỏi trợ lý AI <MessageCircle className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">Tại sao chọn HeyPaaaa?</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="hover-lift border-2 border-transparent hover:border-pink-200 transition-all bg-gradient-to-br from-white to-pink-50/50">
            <CardHeader>
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-pink-400 to-rose-400 flex items-center justify-center mb-4">
                <BookOpen className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-xl mb-2">Kiến thức toàn diện</CardTitle>
              <CardDescription className="text-base">
                Tổng hợp kiến thức từ chuẩn bị mang thai đến chăm sóc trẻ sơ sinh
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover-lift border-2 border-transparent hover:border-orange-200 transition-all bg-gradient-to-br from-white to-orange-50/50">
            <CardHeader>
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center mb-4">
                <MessageCircle className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-xl mb-2">Trợ lý AI thông minh</CardTitle>
              <CardDescription className="text-base">
                Đặt câu hỏi và nhận tư vấn tức thì từ trợ lý AI được huấn luyện chuyên biệt
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover-lift border-2 border-transparent hover:border-rose-200 transition-all bg-gradient-to-br from-white to-rose-50/50">
            <CardHeader>
              <div className="h-14 w-14 rounded-full bg-gradient-to-r from-rose-400 to-pink-400 flex items-center justify-center mb-4">
                <Users className="h-7 w-7 text-white" />
              </div>
              <CardTitle className="text-xl mb-2">Đồng hành cùng bạn</CardTitle>
              <CardDescription className="text-base">
                Hiểu được những thử thách của các ông bố và hỗ trợ bạn vượt qua
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Life Stages */}
      <section>
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">Các giai đoạn trong hành trình</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stages.map((stage) => (
            <Card key={stage} className="hover-lift border-2 border-transparent hover:border-pink-200 transition-all bg-gradient-to-br from-white to-pink-50/30">
              <CardHeader>
                <CardTitle className="text-xl mb-4">{getStageLabel(stage)}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full border-2 border-pink-200 text-pink-600 hover:bg-pink-50 hover:border-pink-300 transition-all">
                  <Link to={`/knowledge?stage=${stage}`}>
                    Xem chi tiết <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-16 bg-gradient-to-r from-pink-50 via-orange-50 to-rose-50 rounded-3xl border-2 border-pink-100 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-100/50 to-orange-100/50 opacity-50"></div>
        <div className="relative z-10">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-pink-600 to-orange-500 bg-clip-text text-transparent">Sẵn sàng bắt đầu?</h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Khám phá kiến thức hoặc đặt câu hỏi cho trợ lý AI ngay bây giờ
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-xl transition-all">
              <Link to="/knowledge">Xem kiến thức</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="border-2 border-pink-300 text-pink-600 hover:bg-pink-50 hover:border-pink-400 transition-all">
              <Link to="/assistant">Hỏi trợ lý AI</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

