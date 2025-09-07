import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');

  const featuredArtworks = [
    {
      id: 1,
      title: 'Портрет в золотой раме',
      artist: 'Анна Волкова',
      currentBid: '2 500 000',
      timeLeft: '2д 14ч',
      image: '/img/93b474c5-2a2b-42d5-b772-650e136b5739.jpg',
      status: 'active'
    },
    {
      id: 2,
      title: 'Абстрактная композиция',
      artist: 'Михаил Петров',
      currentBid: '1 200 000',
      timeLeft: '5д 8ч',
      image: '/img/ee3a3de1-fdb4-419a-ba31-bd433d059600.jpg',
      status: 'active'
    },
    {
      id: 3,
      title: 'Французский пейзаж',
      artist: 'Елена Сидорова',
      currentBid: '890 000',
      timeLeft: '1д 3ч',
      image: '/img/d0a7e3c3-865e-4f98-bb3b-836ff35a2fcc.jpg',
      status: 'ending-soon'
    }
  ];

  const upcomingAuctions = [
    {
      id: 1,
      title: 'Русское искусство XIX века',
      date: '15 сентября 2025',
      lots: 45,
      image: '/img/93b474c5-2a2b-42d5-b772-650e136b5739.jpg'
    },
    {
      id: 2,
      title: 'Современное искусство',
      date: '22 сентября 2025',
      lots: 32,
      image: '/img/ee3a3de1-fdb4-419a-ba31-bd433d059600.jpg'
    }
  ];

  const artists = [
    {
      id: 1,
      name: 'Анна Волкова',
      specialty: 'Портретная живопись',
      works: 12,
      avatar: '/img/93b474c5-2a2b-42d5-b772-650e136b5739.jpg'
    },
    {
      id: 2,
      name: 'Михаил Петров',
      specialty: 'Абстракционизм',
      works: 8,
      avatar: '/img/ee3a3de1-fdb4-419a-ba31-bd433d059600.jpg'
    },
    {
      id: 3,
      name: 'Елена Сидорова',
      specialty: 'Пейзажная живопись',
      works: 15,
      avatar: '/img/d0a7e3c3-865e-4f98-bb3b-836ff35a2fcc.jpg'
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Рекордная продажа картины Репина',
      date: '5 сентября 2025',
      excerpt: 'Работа "Бурлаки на Волге" продана за 15 миллионов рублей...'
    },
    {
      id: 2,
      title: 'Новая выставка современного искусства',
      date: '3 сентября 2025',
      excerpt: 'Открытие масштабной экспозиции молодых художников...'
    }
  ];

  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <Icon name="Palette" className="h-8 w-8 text-primary" />
                <h1 className="font-playfair text-2xl font-bold text-foreground">ART AUCTION</h1>
              </div>
              <div className="hidden md:flex space-x-8">
                <button 
                  onClick={() => setActiveTab('home')}
                  className={`text-sm font-medium transition-colors ${activeTab === 'home' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Главная
                </button>
                <button 
                  onClick={() => setActiveTab('catalog')}
                  className={`text-sm font-medium transition-colors ${activeTab === 'catalog' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Каталог
                </button>
                <button 
                  onClick={() => setActiveTab('auctions')}
                  className={`text-sm font-medium transition-colors ${activeTab === 'auctions' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Аукционы
                </button>
                <button 
                  onClick={() => setActiveTab('artists')}
                  className={`text-sm font-medium transition-colors ${activeTab === 'artists' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Художники
                </button>
                <button 
                  onClick={() => setActiveTab('news')}
                  className={`text-sm font-medium transition-colors ${activeTab === 'news' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Новости
                </button>
                <button 
                  onClick={() => setActiveTab('contact')}
                  className={`text-sm font-medium transition-colors ${activeTab === 'contact' ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                  Контакты
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm">
                    <Icon name="User" className="h-4 w-4 mr-2" />
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="font-playfair">Вход в аккаунт</DialogTitle>
                    <DialogDescription>
                      Войдите для участия в аукционах
                    </DialogDescription>
                  </DialogHeader>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Вход</TabsTrigger>
                      <TabsTrigger value="register">Регистрация</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Пароль</Label>
                        <Input id="password" type="password" />
                      </div>
                      <Button className="w-full">Войти</Button>
                    </TabsContent>
                    <TabsContent value="register" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Ваше имя" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-email">Email</Label>
                        <Input id="reg-email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-password">Пароль</Label>
                        <Input id="reg-password" type="password" />
                      </div>
                      <Button className="w-full">Зарегистрироваться</Button>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
              <Button className="hidden md:inline-flex">
                <Icon name="Gavel" className="h-4 w-4 mr-2" />
                Профиль
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'home' && (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center py-12">
              <h1 className="font-playfair text-5xl font-bold text-foreground mb-6">
                Премиальные аукционы произведений искусства
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                Откройте для себя уникальные шедевры от признанных мастеров. 
                Участвуйте в эксклюзивных аукционах и пополните свою коллекцию.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="text-lg px-8">
                  <Icon name="Search" className="h-5 w-5 mr-2" />
                  Просмотреть каталог
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8">
                  <Icon name="Calendar" className="h-5 w-5 mr-2" />
                  Ближайшие аукционы
                </Button>
              </div>
            </section>

            {/* Active Auctions */}
            <section>
              <div className="flex items-center justify-between mb-8">
                <h2 className="font-playfair text-3xl font-bold text-foreground">Активные аукционы</h2>
                <Button variant="link" className="text-primary">
                  Посмотреть все <Icon name="ArrowRight" className="h-4 w-4 ml-1" />
                </Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredArtworks.map((artwork) => (
                  <Card key={artwork.id} className="group hover:shadow-lg transition-all duration-300 hover-scale">
                    <div className="aspect-square overflow-hidden rounded-t-lg">
                      <img 
                        src={artwork.image} 
                        alt={artwork.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="font-playfair text-lg">{artwork.title}</CardTitle>
                          <CardDescription>{artwork.artist}</CardDescription>
                        </div>
                        <Badge variant={artwork.status === 'ending-soon' ? 'destructive' : 'secondary'}>
                          {artwork.status === 'ending-soon' ? 'Заканчивается' : 'Активен'}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between items-center">
                        <div>
                          <p className="text-sm text-muted-foreground">Текущая ставка</p>
                          <p className="text-xl font-bold text-primary">₽{artwork.currentBid}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Осталось</p>
                          <p className="font-semibold">{artwork.timeLeft}</p>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full">
                        <Icon name="Gavel" className="h-4 w-4 mr-2" />
                        Сделать ставку
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Каталог произведений</h2>
              <p className="text-xl text-muted-foreground">Изучите нашу коллекцию шедевров</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredArtworks.map((artwork) => (
                <Card key={artwork.id} className="hover-scale">
                  <div className="aspect-square overflow-hidden rounded-t-lg">
                    <img 
                      src={artwork.image} 
                      alt={artwork.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-playfair">{artwork.title}</CardTitle>
                    <CardDescription>{artwork.artist}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Icon name="Eye" className="h-4 w-4 mr-2" />
                      Подробнее
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'auctions' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Предстоящие аукционы</h2>
              <p className="text-xl text-muted-foreground">Не пропустите эксклюзивные события</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {upcomingAuctions.map((auction) => (
                <Card key={auction.id} className="hover-scale">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img 
                      src={auction.image} 
                      alt={auction.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="font-playfair">{auction.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center space-x-4 mt-2">
                        <div className="flex items-center">
                          <Icon name="Calendar" className="h-4 w-4 mr-1" />
                          {auction.date}
                        </div>
                        <div className="flex items-center">
                          <Icon name="Package" className="h-4 w-4 mr-1" />
                          {auction.lots} лотов
                        </div>
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button className="w-full">
                      <Icon name="Bell" className="h-4 w-4 mr-2" />
                      Уведомить о начале
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'artists' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Наши художники</h2>
              <p className="text-xl text-muted-foreground">Познакомьтесь с талантливыми мастерами</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {artists.map((artist) => (
                <Card key={artist.id} className="hover-scale text-center">
                  <CardHeader>
                    <div className="w-24 h-24 rounded-full mx-auto overflow-hidden mb-4">
                      <img 
                        src={artist.avatar} 
                        alt={artist.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardTitle className="font-playfair">{artist.name}</CardTitle>
                    <CardDescription>{artist.specialty}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{artist.works} произведений в галерее</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      <Icon name="User" className="h-4 w-4 mr-2" />
                      Посмотреть работы
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'news' && (
          <div className="space-y-8">
            <div className="text-center">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Новости</h2>
              <p className="text-xl text-muted-foreground">Последние события мира искусства</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.map((article) => (
                <Card key={article.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{article.date}</Badge>
                      <Icon name="Clock" className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <CardTitle className="font-playfair">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="link" className="p-0">
                      Читать полностью <Icon name="ArrowRight" className="h-4 w-4 ml-1" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'contact' && (
          <div className="max-w-2xl mx-auto space-y-8">
            <div className="text-center">
              <h2 className="font-playfair text-4xl font-bold text-foreground mb-4">Контакты</h2>
              <p className="text-xl text-muted-foreground">Свяжитесь с нами для получения консультации</p>
            </div>
            <Card>
              <CardHeader>
                <CardTitle className="font-playfair">Наши контакты</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Адрес</p>
                    <p className="text-muted-foreground">Москва, ул. Тверская, 15</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Телефон</p>
                    <p className="text-muted-foreground">+7 (495) 123-45-67</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-muted-foreground">info@artauction.ru</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Режим работы</p>
                    <p className="text-muted-foreground">Пн-Пт: 10:00-19:00, Сб-Вс: 12:00-17:00</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Palette" className="h-6 w-6 text-primary" />
                <h3 className="font-playfair text-xl font-bold">ART AUCTION</h3>
              </div>
              <p className="text-muted-foreground">
                Премиальная площадка для коллекционеров и ценителей искусства
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Разделы</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><button onClick={() => setActiveTab('catalog')}>Каталог</button></li>
                <li><button onClick={() => setActiveTab('auctions')}>Аукционы</button></li>
                <li><button onClick={() => setActiveTab('artists')}>Художники</button></li>
                <li><button onClick={() => setActiveTab('news')}>Новости</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>Оценка произведений</li>
                <li>Консультации</li>
                <li>Страхование</li>
                <li>Доставка</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Следите за нами</h4>
              <div className="flex space-x-4">
                <Icon name="Instagram" className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Icon name="Facebook" className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
                <Icon name="Twitter" className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
            <p>&copy; 2025 Art Auction. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;