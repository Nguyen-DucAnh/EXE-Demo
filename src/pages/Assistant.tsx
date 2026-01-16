import { useState, useRef, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { askQuestion, setCurrentQuestion, clearCurrentQuestion } from '@/store/slices/aiSlice';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MessageCircle, Send, Loader2 } from 'lucide-react';

export const Assistant = () => {
  const dispatch = useAppDispatch();
  const { questions, loading, error } = useAppSelector((state) => state.ai);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [questions]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim() || loading) return;

    const question = inputValue.trim();
    setInputValue('');
    dispatch(setCurrentQuestion(question));
    await dispatch(askQuestion(question));
    dispatch(clearCurrentQuestion());
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="space-y-4 text-center py-6">
        <div className="flex items-center justify-center gap-3">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full blur-xl opacity-50 animate-pulse"></div>
            <MessageCircle className="h-10 w-10 text-primary relative z-10" fill="currentColor" />
          </div>
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-pink-600 via-rose-500 to-orange-500 bg-clip-text text-transparent">
            Trợ lý AI - HeyPaaaa
          </h1>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto">
          Đặt câu hỏi về chăm sóc vợ trong thai kỳ, sau sinh, hoặc chăm sóc em bé.
          Trợ lý AI sẽ tìm kiếm trong cơ sở kiến thức và cung cấp câu trả lời hữu ích.
        </p>
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-200 rounded-xl p-4 text-sm text-amber-900 max-w-2xl mx-auto shadow-sm">
          <strong className="flex items-center gap-2">
            <span>💡</span>
            Lưu ý:
          </strong>
          <span className="ml-6">Thông tin chỉ mang tính chất tham khảo. Luôn tham khảo ý kiến bác sĩ cho các vấn đề y tế quan trọng.</span>
        </div>
      </div>

      <Card className="h-[600px] flex flex-col border-2 border-pink-100 bg-gradient-to-br from-white to-pink-50/30 shadow-lg">
        <CardHeader className="border-b-2 border-pink-100 bg-gradient-to-r from-pink-50 to-orange-50">
          <CardTitle className="text-xl flex items-center gap-2">
            <MessageCircle className="h-5 w-5 text-primary" />
            Cuộc trò chuyện
          </CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-6 space-y-4 bg-gradient-to-b from-white to-pink-50/20">
          {questions.length === 0 ? (
            <div className="text-center text-gray-500 py-16">
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full blur-lg opacity-30"></div>
                <MessageCircle className="h-16 w-16 mx-auto relative z-10 text-pink-300" />
              </div>
              <p className="text-lg font-medium">Chưa có câu hỏi nào</p>
              <p className="text-sm mt-2">Hãy bắt đầu đặt câu hỏi để nhận được sự hỗ trợ!</p>
            </div>
          ) : (
            questions.map((item, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-end">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-2xl rounded-tr-sm px-5 py-3 max-w-[80%] shadow-md">
                    <p className="text-xs font-semibold mb-1 opacity-90">Bạn</p>
                    <p className="text-sm leading-relaxed">{item.question}</p>
                  </div>
                </div>
                {item.answer && (
                  <div className="flex justify-start">
                    <div className="bg-white border-2 border-pink-100 rounded-2xl rounded-tl-sm px-5 py-3 max-w-[80%] shadow-sm">
                      <p className="text-xs font-semibold text-pink-600 mb-2 flex items-center gap-2">
                        <MessageCircle className="h-3 w-3" />
                        Trợ lý AI - HeyPaaaa
                      </p>
                      <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">{item.answer}</p>
                      <p className="text-xs text-gray-400 mt-3 flex items-center gap-1">
                        <span>🕒</span>
                        {formatDate(item.timestamp)}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border-2 border-pink-100 rounded-2xl rounded-tl-sm px-5 py-3 shadow-sm">
                <div className="flex items-center gap-3">
                  <Loader2 className="h-5 w-5 animate-spin text-pink-500" />
                  <p className="text-sm text-gray-600 font-medium">Đang suy nghĩ...</p>
                </div>
              </div>
            </div>
          )}
          {error && (
            <div className="bg-destructive/10 text-destructive rounded-lg px-4 py-3 border border-destructive/20">
              <p className="text-sm font-semibold mb-1">⚠️ Lỗi:</p>
              <p className="text-sm">{error}</p>
              <p className="text-xs mt-2 text-muted-foreground">
                💡 Mẹo: Kiểm tra backend server đang chạy tại http://localhost:5000
              </p>
            </div>
          )}
          <div ref={messagesEndRef} />
        </CardContent>
        <div className="border-t-2 border-pink-100 p-4 bg-gradient-to-r from-pink-50/50 to-orange-50/50">
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="💬 Đặt câu hỏi của bạn về chăm sóc vợ và con..."
              className="min-h-[90px] resize-none border-2 border-pink-200 focus:border-pink-400 rounded-xl text-base"
              disabled={loading}
            />
            <div className="flex flex-col gap-2">
              <Button
                type="submit"
                disabled={!inputValue.trim() || loading}
                size="icon"
                className="h-[90px] w-[90px] bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 shadow-lg hover:shadow-xl transition-all rounded-xl"
              >
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <Send className="h-5 w-5" />
                )}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

