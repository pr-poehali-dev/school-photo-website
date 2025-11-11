import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      title: 'Портретная съёмка',
      description: 'Индивидуальные и групповые портреты учеников',
      icon: 'User',
      color: 'accent'
    },
    {
      title: 'Школьные события',
      description: 'Репортажи с мероприятий и праздников',
      icon: 'Camera',
      color: 'accent-cyan'
    },
    {
      title: 'Выпускные альбомы',
      description: 'Оформление и печать выпускных альбомов',
      icon: 'Book',
      color: 'accent-yellow'
    },
    {
      title: 'Студийная съёмка',
      description: 'Профессиональная съёмка в студии',
      icon: 'Aperture',
      color: 'accent'
    }
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      role: 'Мама ученика 5 класса',
      text: 'Потрясающая работа! Фотографии получились живыми и эмоциональными. Ребёнок был в восторге от процесса съёмки.',
      rating: 5
    },
    {
      name: 'Ирина Смирнова',
      role: 'Классный руководитель',
      text: 'Профессиональный подход и креативные идеи. Выпускной альбом стал настоящим произведением искусства.',
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      role: 'Директор школы №15',
      text: 'Сотрудничаем уже 3 года. Всегда качественно, вовремя и с душой. Рекомендую!',
      rating: 5
    }
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="font-heading text-4xl tracking-wider">PHOTO</div>
          <div className="hidden md:flex gap-8">
            {['home', 'services', 'about', 'testimonials', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`text-sm uppercase tracking-wide transition-colors ${
                  activeSection === section ? 'text-accent' : 'text-foreground hover:text-accent'
                }`}
              >
                {section === 'home' && 'Главная'}
                {section === 'services' && 'Услуги'}
                {section === 'about' && 'Обо мне'}
                {section === 'testimonials' && 'Отзывы'}
                {section === 'contact' && 'Контакты'}
              </button>
            ))}
          </div>
          <Button className="md:hidden" variant="ghost" size="icon">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section id="home" className="min-h-screen pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h1 className="font-heading text-8xl md:text-9xl leading-none text-primary">
                  ШКОЛЬНЫЙ<br />ФОТОГРАФ
                </h1>
                <div className="flex items-center gap-4">
                  <div className="h-1 w-24 bg-accent"></div>
                  <p className="text-lg text-muted-foreground uppercase tracking-widest">
                    Ловлю моменты
                  </p>
                </div>
              </div>
              <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                Превращаю школьные моменты в яркие воспоминания. 
                Каждый кадр — это история, эмоция, жизнь.
              </p>
              <div className="flex gap-4">
                <Button 
                  size="lg" 
                  className="bg-accent hover:bg-accent/90 text-white font-medium"
                  onClick={() => scrollToSection('contact')}
                >
                  Записаться на съёмку
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => scrollToSection('services')}
                >
                  Мои услуги
                </Button>
              </div>
            </div>
            <div className="relative animate-slide-in-right">
              <div className="absolute -top-8 -right-8 w-72 h-72 bg-accent/20 rounded-full blur-3xl"></div>
              <img
                src="https://cdn.poehali.dev/projects/46b4ceeb-48a8-4609-8938-d2a6b74c3376/files/1e12e646-4992-4a8b-a943-54e0113de2fa.jpg"
                alt="Фотограф"
                className="relative rounded-lg shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300"
              />
              <div className="absolute -bottom-8 -left-8 font-heading text-9xl text-accent/10 select-none">
                2024
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 mb-16">
            <h2 className="font-heading text-7xl text-primary">УСЛУГИ</h2>
            <div className="flex-1 h-0.5 bg-border"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`p-8 border-2 border-border hover:border-${service.color} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group animate-fade-in`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-full bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon name={service.icon as any} size={32} className={`text-${service.color}`} />
                </div>
                <h3 className="font-heading text-3xl mb-3 text-primary">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-5 gap-12 items-center">
            <div className="md:col-span-2 space-y-6">
              <div className="relative">
                <img
                  src="https://cdn.poehali.dev/projects/46b4ceeb-48a8-4609-8938-d2a6b74c3376/files/dd230035-04fc-4ad4-8a3d-5bb2f5e8211c.jpg"
                  alt="Работа"
                  className="rounded-lg shadow-xl"
                />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 border-4 border-accent-cyan rounded-lg -z-10"></div>
              </div>
              <div className="flex items-center gap-6 bg-secondary p-6 rounded-lg">
                <div className="text-center">
                  <div className="font-heading text-5xl text-accent">8+</div>
                  <div className="text-sm text-muted-foreground uppercase">Лет опыта</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div className="text-center">
                  <div className="font-heading text-5xl text-accent-cyan">500+</div>
                  <div className="text-sm text-muted-foreground uppercase">Съёмок</div>
                </div>
                <div className="h-16 w-px bg-border"></div>
                <div className="text-center">
                  <div className="font-heading text-5xl text-accent-yellow">50+</div>
                  <div className="text-sm text-muted-foreground uppercase">Школ</div>
                </div>
              </div>
            </div>
            <div className="md:col-span-3 space-y-6">
              <div className="flex items-start gap-4">
                <h2 className="font-heading text-7xl text-primary leading-none">ОБО МНЕ</h2>
                <div className="mt-4 font-heading text-8xl text-accent/20 select-none">/</div>
              </div>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  Привет! Я Александр, школьный фотограф с 8-летним стажем. 
                  Моя специализация — детская и школьная фотография.
                </p>
                <p>
                  Я верю, что школьные годы — это особенное время, которое нужно сохранить. 
                  Каждая съёмка для меня — это возможность запечатлеть искренние эмоции, 
                  дружбу и радость детства.
                </p>
                <p>
                  Работаю с современным оборудованием и использую креативные подходы, 
                  чтобы каждый кадр был уникальным. Люблю находить необычные ракурсы 
                  и создавать атмосферу, в которой дети чувствуют себя комфортно и естественно.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 pt-4">
                {['Canon EOS R5', 'Студийный свет', 'Lightroom', 'Photoshop', 'Печать альбомов'].map((skill) => (
                  <div key={skill} className="px-4 py-2 bg-secondary border border-border rounded text-sm uppercase tracking-wide">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="py-24 bg-primary text-primary-foreground overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-8 mb-16">
            <div className="font-heading text-9xl opacity-20 select-none">"</div>
            <h2 className="font-heading text-7xl">ОТЗЫВЫ</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/5 backdrop-blur border-white/10 p-8 hover:bg-white/10 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={20} className="fill-accent-yellow text-accent-yellow" />
                  ))}
                </div>
                <p className="text-white/90 leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-heading text-2xl text-white">{testimonial.name}</div>
                  <div className="text-sm text-white/60 uppercase tracking-wide">{testimonial.role}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div>
                  <h2 className="font-heading text-7xl text-primary mb-6">КОНТАКТЫ</h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Свяжитесь со мной, чтобы обсудить детали съёмки. 
                    Отвечу в течение 24 часов!
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <Icon name="Phone" size={24} className="text-accent" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">Телефон</div>
                      <div className="font-heading text-2xl">+7 (999) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-cyan/10 flex items-center justify-center">
                      <Icon name="Mail" size={24} className="text-accent-cyan" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">Email</div>
                      <div className="font-heading text-2xl">photo@school.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent-yellow/10 flex items-center justify-center">
                      <Icon name="Instagram" size={24} className="text-accent-yellow" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground uppercase tracking-wide">Instagram</div>
                      <div className="font-heading text-2xl">@school_photo</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/projects/46b4ceeb-48a8-4609-8938-d2a6b74c3376/files/02aaa136-53a9-4625-b859-ca69081277b7.jpg"
                    alt="Камера"
                    className="rounded-lg shadow-xl"
                  />
                </div>
              </div>
              <Card className="p-8 border-2 border-border shadow-xl">
                <h3 className="font-heading text-4xl mb-6">ЗАПИСАТЬСЯ</h3>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Ваше имя</label>
                    <Input placeholder="Иван Иванов" className="border-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Телефон</label>
                    <Input placeholder="+7 (999) 123-45-67" className="border-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Email</label>
                    <Input type="email" placeholder="example@mail.ru" className="border-2" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 uppercase tracking-wide">Сообщение</label>
                    <Textarea 
                      placeholder="Расскажите о желаемой съёмке..."
                      className="border-2 min-h-[120px]"
                    />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-white font-heading text-xl py-6">
                    ОТПРАВИТЬ ЗАЯВКУ
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="font-heading text-4xl">PHOTO</div>
            <div className="text-sm text-white/60 uppercase tracking-widest">
              © 2024 Школьный фотограф. Все права защищены.
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Icon name="Instagram" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Icon name="Facebook" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-white/10">
                <Icon name="Mail" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
