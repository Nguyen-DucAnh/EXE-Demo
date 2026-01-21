import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Target, Users, Lightbulb } from 'lucide-react';

export const About = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-6 py-8">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-sky-500 to-amber-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
          <Heart className="h-20 w-20 text-primary mx-auto relative z-10" fill="currentColor" />
        </div>
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-sky-700 via-indigo-600 to-amber-500 bg-clip-text text-transparent animate-gradient">Về HeyPaaaa</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Nền tảng hỗ trợ các ông bố trên hành trình làm cha đầy yêu thương
        </p>
      </div>

      <Card className="border-2 border-sky-100 bg-gradient-to-br from-white to-sky-50/30 hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 flex items-center justify-center">
              <Target className="h-5 w-5 text-white" />
            </div>
            Sứ mệnh
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-lg leading-relaxed">
            HeyPaaaa được tạo ra với sứ mệnh hỗ trợ các ông bố tương lai trong hành trình làm cha đầy thử thách
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

      <Card className="border-2 border-orange-100 bg-gradient-to-br from-white to-orange-50/30 hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-orange-400 to-amber-400 flex items-center justify-center">
              <Lightbulb className="h-5 w-5 text-white" />
            </div>
            Giá trị cốt lõi
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="p-4 rounded-lg bg-sky-50/50 border border-sky-100">
            <h3 className="font-bold text-lg mb-2 text-sky-700">Đồng cảm và hỗ trợ</h3>
            <p className="text-gray-700 leading-relaxed">
              Chúng tôi hiểu những thử thách mà các ông bố phải đối mặt và luôn ở đây để hỗ trợ bạn.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-orange-50/50 border border-orange-100">
            <h3 className="font-bold text-lg mb-2 text-orange-700">Kiến thức đáng tin cậy</h3>
            <p className="text-gray-700 leading-relaxed">
              Tất cả thông tin được biên soạn cẩn thận, dựa trên các nguồn đáng tin cậy và kinh nghiệm thực tế.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-slate-50/50 border border-slate-100">
            <h3 className="font-bold text-lg mb-2 text-slate-700">Dễ tiếp cận</h3>
            <p className="text-gray-700 leading-relaxed">
              Ngôn ngữ đơn giản, dễ hiểu, phù hợp với mọi ông bố, không cần kiến thức y tế chuyên sâu.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-amber-50/50 border border-amber-100">
            <h3 className="font-bold text-lg mb-2 text-amber-700">Tôn trọng và không phán xét</h3>
            <p className="text-gray-700 leading-relaxed">
              Mỗi hành trình là duy nhất. Chúng tôi tôn trọng mọi cách tiếp cận và luôn khuyến khích
              tham khảo ý kiến bác sĩ khi cần thiết.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card className="border-2 border-slate-100 bg-gradient-to-br from-white to-slate-50/30 hover-lift">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-xl">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-sky-500 to-amber-400 flex items-center justify-center">
              <Users className="h-5 w-5 text-white" />
            </div>
            Đối tượng
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg leading-relaxed">
            HeyPaaaa dành cho tất cả các ông bố - từ những người đang chuẩn bị có con, đang trong quá trình
            vợ mang thai, vừa có con, hoặc đang chăm sóc trẻ sơ sinh. Dù bạn ở giai đoạn nào, chúng tôi
            đều có thông tin hữu ích cho bạn.
          </p>
        </CardContent>
      </Card>

      <Card className="border-2 border-amber-200 bg-gradient-to-br from-amber-50/50 to-yellow-50/50">
        <CardHeader>
          <CardTitle className="text-xl flex items-center gap-2">
            <span className="text-2xl">⚠️</span>
            Lưu ý quan trọng
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="bg-yellow-50/80 border-2 border-yellow-300 rounded-xl p-6 space-y-3 shadow-sm">
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

