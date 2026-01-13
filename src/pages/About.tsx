import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <Heart className="h-16 w-16 text-primary mx-auto" />
        <h1 className="text-4xl font-bold">Về BỐCÓMẶT</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-6 w-6 text-primary" />
            Sứ mệnh
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            BỐCÓMẶT được tạo ra với sứ mệnh hỗ trợ các ông bố tương lai trong hành trình làm cha đầy thử thách
            nhưng cũng đầy niềm vui. Chúng tôi hiểu rằng việc chăm sóc vợ trong thai kỳ, sau sinh, và chăm sóc
            em bé không phải là điều dễ dàng, đặc biệt là khi bạn lần đầu làm cha.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Chúng tôi cung cấp kiến thức toàn diện, dễ hiểu, và thực tế để giúp bạn tự tin hơn trong vai trò
            người chồng và người cha. Từ việc chuẩn bị tài chính, hiểu về các giai đoạn thai kỳ, đến cách
            chăm sóc vợ sau sinh và chăm sóc trẻ sơ sinh - chúng tôi có tất cả.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Lightbulb className="h-6 w-6 text-primary" />
            Giá trị cốt lõi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">Đồng cảm và hỗ trợ</h3>
            <p className="text-muted-foreground">
              Chúng tôi hiểu những thử thách mà các ông bố phải đối mặt và luôn ở đây để hỗ trợ bạn.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Kiến thức đáng tin cậy</h3>
            <p className="text-muted-foreground">
              Tất cả thông tin được biên soạn cẩn thận, dựa trên các nguồn đáng tin cậy và kinh nghiệm thực tế.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Dễ tiếp cận</h3>
            <p className="text-muted-foreground">
              Ngôn ngữ đơn giản, dễ hiểu, phù hợp với mọi ông bố, không cần kiến thức y tế chuyên sâu.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg mb-2">Tôn trọng và không phán xét</h3>
            <p className="text-muted-foreground">
              Mỗi hành trình là duy nhất. Chúng tôi tôn trọng mọi cách tiếp cận và luôn khuyến khích
              tham khảo ý kiến bác sĩ khi cần thiết.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Đối tượng
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            BỐCÓMẶT dành cho tất cả các ông bố - từ những người đang chuẩn bị có con, đang trong quá trình
            vợ mang thai, vừa có con, hoặc đang chăm sóc trẻ sơ sinh. Dù bạn ở giai đoạn nào, chúng tôi
            đều có thông tin hữu ích cho bạn.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Lưu ý quan trọng</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 space-y-2">
            <p className="font-semibold text-yellow-900">
              Thông tin trên website chỉ mang tính chất tham khảo và giáo dục.
            </p>
            <p className="text-yellow-800">
              Không thay thế cho tư vấn y tế chuyên nghiệp. Luôn tham khảo ý kiến bác sĩ hoặc chuyên gia
              y tế cho các vấn đề sức khỏe quan trọng. Trong trường hợp khẩn cấp, hãy gọi ngay cấp cứu.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

