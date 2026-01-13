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
      <div className="space-y-2">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <MessageCircle className="h-8 w-8 text-primary" />
          Trợ lý AI - BỐCÓMẶT
        </h1>
        <p className="text-muted-foreground">
          Đặt câu hỏi về chăm sóc vợ trong thai kỳ, sau sinh, hoặc chăm sóc em bé.
          Trợ lý AI sẽ tìm kiếm trong cơ sở kiến thức và cung cấp câu trả lời hữu ích.
        </p>
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
          <strong>Lưu ý:</strong> Thông tin chỉ mang tính chất tham khảo. Luôn tham khảo ý kiến bác sĩ
          cho các vấn đề y tế quan trọng.
        </div>
      </div>

      <Card className="h-[600px] flex flex-col">
        <CardHeader className="border-b">
          <CardTitle>Cuộc trò chuyện</CardTitle>
        </CardHeader>
        <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
          {questions.length === 0 ? (
            <div className="text-center text-muted-foreground py-12">
              <MessageCircle className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p>Chưa có câu hỏi nào. Hãy bắt đầu đặt câu hỏi!</p>
            </div>
          ) : (
            questions.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-end">
                  <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 max-w-[80%]">
                    <p className="text-sm font-medium">Bạn</p>
                    <p className="text-sm">{item.question}</p>
                  </div>
                </div>
                {item.answer && (
                  <div className="flex justify-start">
                    <div className="bg-muted rounded-lg px-4 py-2 max-w-[80%]">
                      <p className="text-sm font-medium text-primary mb-1">Trợ lý AI</p>
                      <p className="text-sm whitespace-pre-wrap">{item.answer}</p>
                      <p className="text-xs text-muted-foreground mt-2">
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
              <div className="bg-muted rounded-lg px-4 py-2">
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <p className="text-sm">Đang suy nghĩ...</p>
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
        <div className="border-t p-4">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Textarea
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Đặt câu hỏi của bạn..."
              className="min-h-[80px] resize-none"
              disabled={loading}
            />
            <div className="flex flex-col gap-2">
              <Button type="submit" disabled={!inputValue.trim() || loading} size="icon">
                {loading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </form>
        </div>
      </Card>
    </div>
  );
};

