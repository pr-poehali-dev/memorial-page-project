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
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-black">
      {/* Cosmic background */}
      <div className="fixed inset-0 z-0">
        {/* Nebula effect */}
        <div className="absolute inset-0 bg-gradient-radial from-purple-900/20 via-indigo-900/10 to-transparent nebula"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-blue-900/30 via-purple-900/20 to-transparent rounded-full nebula" style={{animationDelay: '5s'}}></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-pink-900/20 via-purple-900/15 to-transparent rounded-full nebula" style={{animationDelay: '10s'}}></div>
        
        {/* Stars of different sizes */}
        {[...Array(200)].map((_, i) => {
          const size = Math.random();
          const starClass = size > 0.8 ? 'star-large' : size > 0.5 ? 'star-medium' : 'star-small';
          const starSize = size > 0.8 ? 'w-2 h-2' : size > 0.5 ? 'w-1.5 h-1.5' : 'w-1 h-1';
          return (
            <div
              key={i}
              className={`absolute ${starSize} bg-white rounded-full ${starClass}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
              }}
            />
          );
        })}
        
        {/* Shooting stars */}
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full shooting-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
        
        {/* Constellation lines */}
        <svg className="absolute inset-0 w-full h-full">
          {/* Constellation 1 */}
          <line x1="20%" y1="30%" x2="25%" y2="35%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" className="constellation-line" />
          <line x1="25%" y1="35%" x2="30%" y2="28%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" className="constellation-line" />
          <line x1="30%" y1="28%" x2="35%" y2="32%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" className="constellation-line" />
          
          {/* Constellation 2 */}
          <line x1="70%" y1="20%" x2="75%" y2="25%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" className="constellation-line" />
          <line x1="75%" y1="25%" x2="80%" y2="20%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" className="constellation-line" />
          <line x1="80%" y1="20%" x2="85%" y2="28%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" className="constellation-line" />
          
          {/* Constellation 3 */}
          <line x1="60%" y1="70%" x2="65%" y2="75%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" className="constellation-line" />
          <line x1="65%" y1="75%" x2="70%" y2="72%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" className="constellation-line" />
          <line x1="70%" y1="72%" x2="75%" y2="78%" stroke="rgba(255,255,255,0.3)" strokeWidth="1" className="constellation-line" />
        </svg>
      </div>

      {/* Header */}
      <div className="relative z-10 overflow-hidden">
        {/* Cosmic dust overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>
        
        <div className="relative container mx-auto px-4 py-16 text-center">
          <div className="mb-8">
            <h1 className="font-cormorant text-6xl font-bold text-white mb-4 drop-shadow-2xl">
              Сергей Николаевич Иванов
            </h1>
            <div className="text-3xl text-yellow-300 mb-4 drop-shadow-lg">
              ⭐ 10 мая 1965 — 22 ноября 2019 ⭐
            </div>
            <div className="text-lg text-cyan-200 flex items-center justify-center gap-2">
              <Icon name="MapPin" size={20} />
              🪐 Новодевичье кладбище, участок Б-8-12
            </div>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 relative">
                  <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-75 blur animate-pulse"></div>
                  <img 
                    src="/img/d4df52c8-9c63-4cac-8a77-534afe425033.jpg" 
                    alt="Сергей Иванов" 
                    className="relative w-48 h-48 rounded-full object-cover border-4 border-cyan-300 shadow-2xl shadow-cyan-500/50"
                  />
                </div>
                <div className="text-left">
                  <p className="text-xl text-white leading-relaxed mb-4 drop-shadow-md">
                    ✨ Выдающийся физик-теоретик, заслуженный деятель науки, 
                    любящий отец и муж. Посвятил свою жизнь изучению квантовой механики 
                    и воспитанию нового поколения ученых.
                  </p>
                  <p className="text-lg text-cyan-200 drop-shadow-sm">
                    🌟 «Наука - это не только знание, но и мудрость, 
                    которая должна служить человечеству» - его жизненное кредо.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="font-cormorant text-5xl font-bold text-center text-white mb-12 drop-shadow-2xl">
          ⏳ Звездный путь жизни
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Cosmic timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-cyan-400 via-purple-500 to-pink-500 rounded-full shadow-lg shadow-cyan-500/50"></div>
            
            {timelineEvents.map((event, index) => (
              <div key={event.id} className={`relative flex items-center mb-16 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <Card className={`w-5/12 ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'} bg-black/40 backdrop-blur-md border-cyan-500/30 shadow-xl shadow-cyan-500/20`}>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Badge variant="secondary" className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold text-lg px-3 py-1">
                        ⭐ {event.year}
                      </Badge>
                      <h3 className="font-cormorant text-xl font-semibold text-white">
                        {event.event}
                      </h3>
                    </div>
                    <p className="text-cyan-200">
                      {event.description}
                    </p>
                  </CardContent>
                </Card>
                
                {/* Cosmic timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full border-4 border-black shadow-lg shadow-cyan-500/50 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Materials */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="font-cormorant text-5xl font-bold text-center text-white mb-12 drop-shadow-2xl">
          🛸 Космические артефакты
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {materials.map((material) => (
            <Card key={material.id} className="bg-black/40 backdrop-blur-md border-cyan-500/30 hover:bg-black/60 hover:border-cyan-400/50 transition-all duration-300 shadow-xl shadow-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full">
                    <Icon 
                      name={material.type === 'photo' ? 'Image' : material.type === 'newspaper' ? 'Newspaper' : 'FileText'} 
                      size={20} 
                      className="text-black"
                    />
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold text-white">
                    {material.title}
                  </h3>
                </div>
                <p className="text-cyan-200 mb-4">
                  {material.description}
                </p>
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-lg opacity-30 blur"></div>
                  <img 
                    src={material.url} 
                    alt={material.title}
                    className="relative w-full h-40 object-cover rounded-lg border border-cyan-500/30"
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Family Tree */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="font-cormorant text-5xl font-bold text-white drop-shadow-2xl">
            🌌 Созвездие семьи
          </h2>
          <Dialog open={isAddingMember} onOpenChange={setIsAddingMember}>
            <DialogTrigger asChild>
              <Button size="sm" className="bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-500 hover:to-purple-500 text-black font-bold">
                <Icon name="Plus" size={16} className="mr-2" />
                ⭐ Новая звезда
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-black/80 border-cyan-500/30 backdrop-blur-md">
              <DialogHeader>
                <DialogTitle className="text-white font-cormorant text-2xl">🌟 Добавить звезду в созвездие</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-cyan-200">Имя</Label>
                  <Input
                    id="name"
                    value={newMember.name}
                    onChange={(e) => setNewMember({...newMember, name: e.target.value})}
                    className="bg-black/40 border-cyan-500/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="relation" className="text-cyan-200">Родство</Label>
                  <Input
                    id="relation"
                    value={newMember.relation}
                    onChange={(e) => setNewMember({...newMember, relation: e.target.value})}
                    className="bg-black/40 border-cyan-500/30 text-white"
                  />
                </div>
                <div>
                  <Label htmlFor="dates" className="text-cyan-200">Даты жизни</Label>
                  <Input
                    id="dates"
                    value={newMember.dates}
                    onChange={(e) => setNewMember({...newMember, dates: e.target.value})}
                    className="bg-black/40 border-cyan-500/30 text-white"
                  />
                </div>
                <Button onClick={handleAddMember} className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 hover:from-cyan-500 hover:to-purple-500 text-black font-bold">
                  🌟 Добавить звезду
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/30 backdrop-blur-md rounded-2xl p-8 border border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <p className="text-center text-cyan-200 mb-8 font-cormorant text-xl">
              ✨ Связи между душами, объединенные любовью и памятью ✨
            </p>
            
            <div className="relative h-96 overflow-hidden">
              {/* Cosmic connection lines */}
              <svg className="absolute inset-0 w-full h-full">
                {familyMembers.map((member, index) => 
                  familyMembers.slice(index + 1).map((otherMember) => (
                    <line
                      key={`${member.id}-${otherMember.id}`}
                      x1={`${member.x}%`}
                      y1={`${member.y}%`}
                      x2={`${otherMember.x}%`}
                      y2={`${otherMember.y}%`}
                      stroke="url(#gradient-line)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      opacity="0.7"
                      className="constellation-line"
                    />
                  ))
                )}
                <defs>
                  <linearGradient id="gradient-line" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="rgb(34, 211, 238)" />
                    <stop offset="100%" stopColor="rgb(168, 85, 247)" />
                  </linearGradient>
                </defs>
              </svg>
              
              {/* Family members as stars */}
              {familyMembers.map((member) => (
                <div
                  key={member.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 text-center"
                  style={{ left: `${member.x}%`, top: `${member.y}%` }}
                >
                  <div className="relative">
                    <div className={`absolute -inset-2 ${getRelationColor(member.relation)} rounded-full opacity-30 blur animate-pulse`}></div>
                    <div className={`relative w-20 h-20 rounded-full ${getRelationColor(member.relation)} flex items-center justify-center mb-2 shadow-lg shadow-cyan-500/50 border-2 border-cyan-300`}>
                      <span className="text-2xl">⭐</span>
                    </div>
                  </div>
                  <div className="text-white text-sm font-medium drop-shadow-md">{member.name}</div>
                  <div className="text-cyan-200 text-xs">{member.relation}</div>
                  <div className="text-yellow-300 text-xs">{member.dates}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <div className="flex gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-purple-600 rounded-full border border-cyan-300"></div>
                  <span className="text-cyan-200">🪐 Душа усопшего</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-pink-500 rounded-full border border-cyan-300"></div>
                  <span className="text-cyan-200">💝 Супруг(а)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border border-cyan-300"></div>
                  <span className="text-cyan-200">👶 Дети</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-green-500 rounded-full border border-cyan-300"></div>
                  <span className="text-cyan-200">👨‍👩‍👧‍👦 Родители</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="font-cormorant text-5xl font-bold text-center text-white mb-12 drop-shadow-2xl">
          🏛️ Место вечного покоя
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-black/40 backdrop-blur-md border-cyan-500/30 shadow-2xl shadow-cyan-500/20">
            <CardContent className="p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full">
                  <Icon name="MapPin" size={32} className="text-black" />
                </div>
                <div>
                  <h3 className="font-cormorant text-3xl font-semibold text-white">
                    Новодевичье кладбище
                  </h3>
                  <p className="text-cyan-200 text-lg">🌌 Участок Б-8-12</p>
                </div>
              </div>
              
              <div className="bg-black/30 rounded-lg p-6 border border-cyan-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
                <div className="relative flex items-center justify-center h-64 text-cyan-200">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <p className="text-xl font-cormorant">Космическая карта местоположения</p>
                    <p className="text-sm">Интерактивная карта будет добавлена</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Icon name="Clock" size={20} className="text-cyan-400" />
                  <span className="text-cyan-200">⏰ Время посещения: 9:00 - 18:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Icon name="Phone" size={20} className="text-cyan-400" />
                  <span className="text-cyan-200">📞 Справки: +7 (495) 123-45-67</span>
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