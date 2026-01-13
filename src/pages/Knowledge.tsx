import { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { fetchArticles, setSelectedStage, setSearchQuery, searchArticlesAsync } from '@/store/slices/knowledgeSlice';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { Search, ArrowRight } from 'lucide-react';
import type { LifeStage } from '@/types';
import { getStageLabel } from '@/services/knowledgeService';

const stages: { value: LifeStage | 'all'; label: string }[] = [
  { value: 'all', label: 'Tất cả giai đoạn' },
  { value: 'preparing', label: 'Chuẩn bị mang thai' },
  { value: 'trimester1', label: 'Tam cá nguyệt đầu tiên' },
  { value: 'trimester2', label: 'Tam cá nguyệt thứ hai' },
  { value: 'trimester3', label: 'Tam cá nguyệt thứ ba' },
  { value: 'postpartum', label: 'Chăm sóc sau sinh' },
  { value: 'newborn', label: 'Chăm sóc trẻ sơ sinh' },
];

export const Knowledge = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const { filteredArticles, loading, selectedStage } = useAppSelector(
    (state) => state.knowledge
  );
  const [localSearchQuery, setLocalSearchQuery] = useState('');

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);

  useEffect(() => {
    const stageParam = searchParams.get('stage') as LifeStage | null;
    if (stageParam) {
      dispatch(setSelectedStage(stageParam));
    }
  }, [searchParams, dispatch]);

  const handleStageChange = (stage: LifeStage | 'all') => {
    if (stage === 'all') {
      dispatch(setSelectedStage(null));
      setSearchParams({});
    } else {
      dispatch(setSelectedStage(stage));
      setSearchParams({ stage });
    }
  };

  const handleSearch = () => {
    dispatch(setSearchQuery(localSearchQuery));
    if (localSearchQuery.trim()) {
      dispatch(searchArticlesAsync({ query: localSearchQuery, stage: selectedStage || undefined }));
    } else {
      dispatch(fetchArticles());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold">Kiến thức chăm sóc</h1>
        <p className="text-muted-foreground">
          Tìm hiểu cách chăm sóc vợ và con trong từng giai đoạn của hành trình
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Tìm kiếm kiến thức..."
            value={localSearchQuery}
            onChange={(e) => setLocalSearchQuery(e.target.value)}
            onKeyPress={handleKeyPress}
            className="pl-10"
          />
        </div>
        <Select
          value={selectedStage || 'all'}
          onValueChange={(value) => handleStageChange(value as LifeStage | 'all')}
        >
          <SelectTrigger className="w-full md:w-[250px]">
            <SelectValue placeholder="Chọn giai đoạn" />
          </SelectTrigger>
          <SelectContent>
            {stages.map((stage) => (
              <SelectItem key={stage.value} value={stage.value}>
                {stage.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Button onClick={handleSearch}>
          <Search className="h-4 w-4 mr-2" />
          Tìm kiếm
        </Button>
      </div>

      {/* Results */}
      {loading ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Đang tải...</p>
        </div>
      ) : filteredArticles.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Không tìm thấy bài viết nào.</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredArticles.map((article) => (
            <Card key={article.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="text-xs text-muted-foreground mb-2">
                  {getStageLabel(article.stage)}
                </div>
                <CardTitle className="text-lg">{article.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {article.content.substring(0, 100)}...
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {article.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 bg-secondary rounded-full text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="outline" asChild className="w-full">
                  <Link to={`/knowledge/${article.id}`}>
                    Đọc thêm <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

