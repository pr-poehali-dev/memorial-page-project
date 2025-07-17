import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  dates: string;
  x: number;
  y: number;
}

interface TimelineEvent {
  id: string;
  year: string;
  event: string;
  description: string;
}

interface Material {
  id: string;
  type: 'photo' | 'document' | 'newspaper';
  title: string;
  description: string;
  url: string;
}

const Index = () => {
  const [familyMembers, setFamilyMembers] = useState<FamilyMember[]>([
    { id: '1', name: 'Сергей Иванов', relation: 'Усопший', dates: '1965-2019', x: 50, y: 50 },
    { id: '2', name: 'Мария Иванова', relation: 'Супруга', dates: '1968-н.в.', x: 25, y: 25 },
    { id: '3', name: 'Анна Иванова', relation: 'Дочь', dates: '1995-н.в.', x: 75, y: 25 },
    { id: '4', name: 'Николай Иванов', relation: 'Отец', dates: '1940-2010', x: 50, y: 75 },
  ]);

  const [timelineEvents] = useState<TimelineEvent[]>([
    { id: '1', year: '1965', event: 'Рождение', description: 'Родился в городе Москва' },
    { id: '2', year: '1983', event: 'Поступление в университет', description: 'Поступил в МГУ на факультет физики' },
    { id: '3', year: '1990', event: 'Свадьба', description: 'Женился на Марии Петровой' },
    { id: '4', year: '1995', event: 'Рождение дочери', description: 'Родилась дочь Анна' },
    { id: '5', year: '2000', event: 'Карьерный рост', description: 'Стал заведующим лабораторией' },
  ]);

  const [materials] = useState<Material[]>([
    { id: '1', type: 'photo', title: 'Семейное фото', description: 'Семья на даче, 2015 год', url: '/img/d4df52c8-9c63-4cac-8a77-534afe425033.jpg' },
    { id: '2', type: 'newspaper', title: 'Статья в газете', description: 'Публикация о научных достижениях', url: '/img/82c507b9-6460-435f-a2ce-7bbc556c9bb3.jpg' },
    { id: '3', type: 'document', title: 'Диплом', description: 'Диплом МГУ с отличием', url: '/placeholder.svg' },
  ]);

  const [newMember, setNewMember] = useState({ name: '', relation: '', dates: '' });
  const [isAddingMember, setIsAddingMember] = useState(false);

  const handleAddMember = () => {
    if (newMember.name && newMember.relation && newMember.dates) {
      const newFamilyMember: FamilyMember = {
        id: Date.now().toString(),
        ...newMember,
        x: Math.random() * 80 + 10,
        y: Math.random() * 80 + 10,
      };
      setFamilyMembers([...familyMembers, newFamilyMember]);
      setNewMember({ name: '', relation: '', dates: '' });
      setIsAddingMember(false);
    }
  };

  const getRelationColor = (relation: string) => {
    switch (relation.toLowerCase()) {
      case 'усопший': return 'bg-purple-600';
      case 'супруга': case 'супруг': return 'bg-pink-500';
      case 'дочь': case 'сын': return 'bg-blue-500';
      case 'отец': case 'мать': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        {/* Background stars */}
        <div className="absolute inset-0 opacity-30">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <h1 className="font-cormorant text-6xl font-bold text-white mb-4">
              Сергей Николаевич Иванов
            </h1>
            <div className="text-2xl text-amber-300 mb-2">
              10 мая 1965 — 22 ноября 2019
            </div>
            <div className="text-lg text-purple-200 flex items-center justify-center gap-2">
              <Icon name="MapPin" size={20} />
              Новодевичье кладбище, участок Б-8-12
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <img 
                    src="/img/d4df52c8-9c63-4cac-8a77-534afe425033.jpg" 
                    alt="Сергей Иванов" 
                    className="w-48 h-48 rounded-full object-cover border-4 border-amber-300 shadow-2xl"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xl text-white leading-relaxed mb-4">
                    Выдающийся физик-теоретик, заслуженный деятель науки, 
                    любящий отец и муж. Посвятил свою жизнь изучению квантовой механики 
                    и воспитанию нового поколения ученых.
                  </p>
                  <p className="text-lg text-purple-200">
                    «Наука - это не только знание, но и мудрость, 
                    которая должна служить человечеству» - его жизненное кредо.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-cormorant text-4xl font-bold text-center text-white mb-12">
          Хронология жизни
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-amber-300 to-purple-500"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={event.id} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} bg-white/10 backdrop-blur-md border-white/20`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-amber-300 text-slate-900 font-semibold">
                        {event.year}
                      </Badge>
                      <h3 className="font-cormorant text-xl font-semibold text-white">
                        {event.event}
                      </h3>
                    </div>
                    <p className="text-purple-200">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-amber-300 rounded-full border-4 border-slate-900 shadow-lg"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Materials */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-cormorant text-4xl font-bold text-center text-white mb-12">
          Дополнительные материалы
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {materials.map((material) => (
            <Card key={material.id} className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Icon 
                    name={material.type === 'photo' ? 'Image' : material.type === 'newspaper' ? 'Newspaper' : 'FileText'} 
                    size={24} 
                    className="text-amber-300"
                  />
                  <h3 className="font-cormorant text-xl font-semibold text-white">
                    {material.title}
                  </h3>
                </div>
                <p className="text-purple-200 mb-4">
                  {material.description}
                </p>
                <img 
                  src={material.url} 
                  alt={material.title}
                  className="w-full h-40 object-cover rounded-lg border border-white/20"
                />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Family Tree */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="font-cormorant text-4xl font-bold text-white">
            Генеалогическое дерево
          </h2>
          <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-amber-300 hover:bg-amber-400 text-slate-900">
                <Icon name="Plus" size={16} className="mr-2" />
                Добавить родственника
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-slate-900 border-white/20">
              <DialogHeader>
                <DialogTitle className="text-white">Добавить члена семьи</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white">Имя</Label>
                  <Input
                    id="name"
                    value={newMember.name}
                    onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="relation" className="text-white">Родство</Label>
                  <Input
                    id="relation"
                    value={newMember.relation}
                    onChange={(e) => setNewMember({...newMember, relation: e.target.value})}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="dates" className="text-white">Даты жизни</Label>
                  <Input
                    id="dates"
                    value={newMember.dates}
                    onChange={(e) => setNewMember({...newMember, dates: e.target.value})}
                    className="bg-white/10 border-white/20 text-white"
                  />
                </div>
                <Button onClick={handleAddMember} className="w-full bg-amber-300 hover:bg-amber-400 text-slate-900">
                  Добавить
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/20">
            <p className="text-center text-purple-200 mb-8">
              Связи между душами, объединенные любовью и памятью
            </p>
            
            <div className="relative h-96 overflow-hidden">
              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                {familyMembers.map((member, index) => 
                  familyMembers.slice(index + 1).map((otherMember) => (
                    <line
                      key={`${member.id}-${otherMember.id}`}
                      x1={`${member.x}%`}
                      y1={`${member.y}%`}
                      x2={`${otherMember.x}%`}
                      y2={`${otherMember.y}%`}
                      stroke="rgb(192, 132, 252)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.5"
                    />
                  ))
                )}
              </svg>
              
              {/* Family members */}
              {familyMembers.map((member) => (
                <div
                  key={member.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: `${member.x}%`, top: `${member.y}%` }}
                >
                  <div className={`w-20 h-20 rounded-full ${getRelationColor(member.relation)} flex items-center justify-center mb-2 shadow-lg animate-pulse`}>
                    <Icon name="User" size={32} className="text-white" />
                  </div>
                  <div className="text-white text-sm font-medium">{member.name}</div>
                  <div className="text-purple-200 text-xs">{member.relation}</div>
                  <div className="text-amber-300 text-xs">{member.dates}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                  <span className="text-purple-200">Душа усопшего</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-pink-500 rounded-full"></div>
                  <span className="text-purple-200">Супруг(а)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
                  <span className="text-purple-200">Дети</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full"></div>
                  <span className="text-purple-200">Родители</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="font-cormorant text-4xl font-bold text-center text-white mb-12">
          Место упокоения
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-md border-white/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <Icon name="MapPin" size={32} className="text-amber-300" />
                <div>
                  <h3 className="font-cormorant text-2xl font-semibold text-white">
                    Новодевичье кладбище
                  </h3>
                  <p className="text-purple-200">Участок Б-8-12</p>
                </div>
              </div>
              
              <div className="bg-white/5 rounded-lg p-6 border border-white/10">
                <div className="flex items-center justify-center h-64 text-purple-200">
                  <div className="text-center">
                    <Icon name="Map" size={64} className="mx-auto mb-4 text-amber-300" />
                    <p className="text-lg">Карта местоположения</p>
                    <p className="text-sm">Интерактивная карта будет добавлена</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-amber-300" />
                  <span className="text-purple-200">Время посещения: 9:00 - 18:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-amber-300" />
                  <span className="text-purple-200">Справки: +7 (495) 123-45-67</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;