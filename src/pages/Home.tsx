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
      <section className="text-center space-y-6 py-12">
        <div className="flex justify-center">
          <Heart className="h-16 w-16 text-primary" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold">
          BỐCÓMẶT
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Hướng dẫn chăm sóc vợ và con cho các ông bố tương lai
        </p>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Hành trình làm cha đầy thử thách nhưng cũng đầy niềm vui. Chúng tôi ở đây để đồng hành cùng bạn,
          cung cấp kiến thức và hỗ trợ bạn chăm sóc vợ trong thai kỳ, sau sinh, và chăm sóc em bé.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Button size="lg" asChild>
            <Link to="/knowledge">
              Khám phá kiến thức <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/assistant">
              Hỏi trợ lý AI <MessageCircle className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Features */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Tại sao chọn BỐCÓMẶT?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <BookOpen className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Kiến thức toàn diện</CardTitle>
              <CardDescription>
                Tổng hợp kiến thức từ chuẩn bị mang thai đến chăm sóc trẻ sơ sinh
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <MessageCircle className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Trợ lý AI thông minh</CardTitle>
              <CardDescription>
                Đặt câu hỏi và nhận tư vấn tức thì từ trợ lý AI được huấn luyện chuyên biệt
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <Users className="h-10 w-10 text-primary mb-2" />
              <CardTitle>Đồng hành cùng bạn</CardTitle>
              <CardDescription>
                Hiểu được những thử thách của các ông bố và hỗ trợ bạn vượt qua
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Life Stages */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Các giai đoạn trong hành trình</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stages.map((stage) => (
            <Card key={stage} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-lg">{getStageLabel(stage)}</CardTitle>
              </CardHeader>
              <CardContent>
                <Button variant="outline" asChild className="w-full">
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
      <section className="text-center py-12 bg-muted rounded-lg">
        <h2 className="text-3xl font-bold mb-4">Sẵn sàng bắt đầu?</h2>
        <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
          Khám phá kiến thức hoặc đặt câu hỏi cho trợ lý AI ngay bây giờ
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <Link to="/knowledge">Xem kiến thức</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/assistant">Hỏi trợ lý AI</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

