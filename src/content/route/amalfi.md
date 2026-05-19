---
title: "Капитанский Гид: Амальфи и Неаполитанский залив"
subtitle: "25.07 – 01.08.2026"
dates: "2026-07-25/2026-08-01"
home_base: "Marina d'Arechi (Salerno)"
boat:
  name: 'Lagoon 380 S2 "Malvasia" (2018)'
  link: "https://www.boataround.com/us/boat/lagoon-380-s2-malvasia"
  length_m: 11.55
  beam_m: 6.53
  draft_m: 1.15
  water_tank_l: 600
  fuel_tank_l: 200
  ac: false
  inverter: true
crew:
  adults: 4
  children: 4
  children_ages: "8–11"
rules:
  - "Правило 14:00: Шкипер оценивает ветер (Windy) и подтверждает стоянку до 14:00 каждого дня."
  - "Красная Ветка: При устойчивом южном ветре (Scirocco) — активировать соответствующий вариант укрытия."
  - "Вода: Бак 600 л на 8 человек — 2–3 дня. Дозаправка в середине недели (Minori или Procida)."
days:
  - day: 1
    date: "2026-07-25"
    title: "Короткий старт на Амальфи"
    departure_time: "17:00"
    notes: "Чек-ин 15:00 в Marina d'Arechi. Выход: 17:00. Переход около 1.5 часов."
    plan_a:
      trigger: "Выход до 18:00"
      destinations:
        - "Minori"
      mooring:
        type: buoy
        name: "Marina Minori Boat Service"
        booking_urls:
          - "https://www.boatservice.org/en/book-mooring/"
          - "https://www.navily.com/port/boat-service-minori-campo-boe/8773"
      pois:
        - name: "Pasticceria Sal De Riso"
          description: "Знаменитая на всю страну кондитерская. Закажите Delizia al Limone."
          tripadvisor_url: "https://www.tripadvisor.com/Restaurant_Review-g194814-d1123166-Reviews-Pasticceria_Sal_De_Riso-Minori_Amalfi_Coast_Campania.html"
        - name: "Villa Romana e Antiquarium"
          description: "Руины роскошной римской виллы I века н.э. прямо в центре города."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194814-d2328227-Reviews-Villa_Romana_e_Antiquarium-Minori_Amalfi_Coast_Campania.html"
        - name: "Sentiero dei Limoni"
          description: "Поднимитесь на 15 минут по ступеням — шикарные фото лимонных террас."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194814-d8431057-Reviews-Il_Sentiero_Dei_Limoni-Minori_Amalfi_Coast_Campania.html"
    plan_b:
      trigger: "Выход позже 18:00"
      destinations:
        - "Maiori"
        - "Cetara"
      mooring:
        type: anchor
        name: "Maiori или Cetara"
        notes: "Ближайшие к базе стоянки."
      pois:
        - name: "Castello di San Nicola de Thoro-Plano"
          description: "Древний замок на холме (Maiori)."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194807-d3368297-Reviews-Castello_di_San_Nicola_de_Thoro_Plano-Maiori_Amalfi_Coast_Campania.html"
        - name: "Ristorante Al Convento"
          description: "Паста с местным соусом Colatura di Alici (Cetara)."
          tripadvisor_url: "https://www.tripadvisor.com/Restaurant_Review-g1028713-d1435252-Reviews-Al_Convento-Cetara_Amalfi_Coast_Campania.html"
  - day: 2
    date: "2026-07-26"
    title: "Великий Переход и Festa di Sant'Anna"
    departure_time: "08:00"
    notes: "Строго в 08:00. Переход ~32 мили (5–6 часов) вдоль всего побережья до Искьи."
    plan_a:
      trigger: "Погода безопасна для перехода"
      destinations:
        - "Baia di Cartaromana"
        - "Sant'Angelo"
      mooring:
        type: buoy
        name: "Sant'Angelo (буи или марина)"
        phone: "+39 081 999 439"
        notes: "Шкипер должен днём связаться с мариной и попросить повесить светящийся маркер на буй."
      pois:
        - name: "Castello Aragonese"
          description: "Огромный остров-крепость. Пройдите через 400-метровый скальный туннель."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g187783-d595240-Reviews-Castello_Aragonese-Ischia_Isola_d_Ischia_Province_of_Naples_Campania.html"
        - name: "Torre di Guevara"
          description: "Башня Микеланджело — отлично видна с якоря."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g187783-d2218153-Reviews-Torre_di_Guevara-Ischia_Isola_d_Ischia_Province_of_Naples_Campania.html"
        - name: "Scogli di Sant'Anna"
          description: "Скалы для снорклинга днём. Вечером — парад лодок и полночный салют."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g187783-d15024466-Reviews-Scogli_di_Sant_Anna-Ischia_Isola_d_Ischia_Province_of_Naples_Campania.html"
      warnings:
        - severity: critical
          text: "Ночной переход в ~02:00. Выждать 40 мин после салюта — пьяные капитаны на воде."
    plan_b:
      trigger: "Береговая охрана закрывает рейд или сильный ветер"
      destinations:
        - "Sant'Angelo"
      mooring:
        type: buoy
        name: "Sant'Angelo"
        notes: "Идём сразу на юг. Салют видим как зарево за горой."
  - day: 3
    date: "2026-07-27"
    title: "Ленивое утро и Прочида"
    departure_time: "14:00"
    notes: "Завтрак на якоре у пляжа Maronti. Купание с лодки. Выход в 14:00, переход 1 час на Прочиду."
    morning_pois:
      - name: "Le Fumarole Beach"
        description: "Пляж, где вулканический пар выходит сквозь песок — местные запекают еду прямо в нём."
        tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194680-d2105151-Reviews-Spiaggia_delle_Fumarole-Barano_d_Ischia_Isola_d_Ischia_Province_of_Naples_Campa.html"
      - name: "Cavascura Natural Springs"
        description: "Древнеримские термальные источники в каньоне."
        tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194680-d3230678-Reviews-Cavascura_Hot_Springs-Barano_d_Ischia_Isola_d_Ischia_Province_of_Naples_Campan.html"
    plan_a:
      trigger: "Свободные места в Marina di Procida"
      destinations:
        - "Procida"
      mooring:
        type: marina
        name: "Marina di Procida"
        booking_urls:
          - "https://marinedi.com/en/marina-di-procida/#prenota-ora"
      pois:
        - name: "Belvedere Terra Murata"
          description: "Идеальное место для заката — на востоке Везувий в розовых лучах."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194864-d3656157-Reviews-Terra_Murata-Procida_Province_of_Naples_Campania.html"
        - name: "Abbazia San Michele Arcangelo"
          description: "Под аббатством есть катакомбы со скелетами."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194864-d3656158-Reviews-Abbazia_San_Michele_Arcangelo-Procida_Province_of_Naples_Campania.html"
        - name: "Marina Corricella"
          description: "Спускайтесь сюда на ужин — цветные домики, 100% пешеходная зона."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194864-d2508750-Reviews-Marina_Corricella-Procida_Province_of_Naples_Campania.html"
    plan_b:
      trigger: "Marina di Procida заполнена"
      destinations:
        - "Procida (юг)"
      mooring:
        type: buoy
        name: "Yachting Santa Margherita (Chiaiolella)"
      pois:
        - name: "Spiaggia del Pozzo Vecchio"
          description: "Вулканический тёмный песок из фильма «Почтальон». Пешком — мост на остров Vivara."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194864-d4505191-Reviews-Spiaggia_del_Pozzo_Vecchio-Procida_Province_of_Naples_Campania.html"
  - day: 4
    date: "2026-07-28"
    title: "Капри и Бухта Спагетти"
    departure_time: "10:00"
    notes: "Переход на Капри 2.5 часа. Прибытие к 12:30. Уход в 16:30. Ночь в Nerano."
    plan_a:
      trigger: "Scirocco отсутствует"
      destinations:
        - "Capri (Faraglioni)"
        - "Nerano"
      mooring:
        type: buoy
        name: "Marina del Nerano"
        booking_urls:
          - "https://www.marinadinerano.com/en/book-mooring/"
      pois:
        - name: "I Faraglioni"
          description: "Проход на тузике сквозь арку в знаменитых скалах."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g187782-d195505-Reviews-I_Faraglioni-Capri_Island_of_Capri_Province_of_Naples_Campania.html"
        - name: "Marina Piccola"
          description: "Купание в чистейшей воде на фоне супер-яхт."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g187782-d195514-Reviews-Marina_Piccola-Capri_Island_of_Capri_Province_of_Naples_Campania.html"
        - name: "Ristorante Maria Grazia"
          description: "Место, где изобрели Spaghetti alla Nerano."
          tripadvisor_url: "https://www.tripadvisor.com/Restaurant_Review-g666355-d1502447-Reviews-Maria_Grazia-Nerano_Massa_Lubrense_Province_of_Naples_Campania.html"
        - name: "Baia di Ieranto"
          description: "Пешая тропа к заповедной бухте сирен."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g666355-d3600989-Reviews-Baia_di_Ieranto-Nerano_Massa_Lubrense_Province_of_Naples_Campania.html"
      scirocco_note: "Scirocco здесь — активировать Вариант 2 (укрытие в Baia / Pozzuoli)."
  - day: 5
    date: "2026-07-29"
    title: "Острова Сирен и Позитано"
    departure_time: "10:30"
    plan_a:
      trigger: "Буи Grassi свободны, Scirocco отсутствует"
      destinations:
        - "Li Galli"
        - "Positano"
      mooring:
        type: buoy
        name: "Grassi Boat Positano (бухта Fornillo)"
        booking_urls:
          - "https://www.grassiboatpositano.com/en/service?code=SMAZS"
      pois:
        - name: "MAR - Museo Archeologico Romano"
          description: "Потрясающая римская вилла под церковью."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194863-d14947937-Reviews-MAR_Positano_Villa_Romana-Positano_Amalfi_Coast_Campania.html"
        - name: "Chiesa di Santa Maria Assunta"
          description: "Знаменитый купол из майолики."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194863-d195568-Reviews-Chiesa_di_Santa_Maria_Assunta_e_Cripta_Medievale-Positano_Amalfi_Coast_Campania.html"
        - name: "Spiaggia del Fornillo"
          description: "Спокойный пляж — здесь стоит ваш буй."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194863-d2217684-Reviews-Fornillo-Positano_Amalfi_Coast_Campania.html"
    plan_b:
      trigger: "Позитано перегружен"
      destinations:
        - "Conca dei Marini"
      mooring:
        type: anchor
        name: "Conca dei Marini"
      pois:
        - name: "Grotta dello Smeraldo"
          description: "Пещера с водой невероятного изумрудного цвета."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g2279148-d2214459-Reviews-Grotta_dello_Smeraldo-Conca_dei_Marini_Amalfi_Coast_Campania.html"
  - day: 6
    date: "2026-07-30"
    title: "Амальфи и Четара"
    departure_time: "10:00"
    notes: "Движемся на восток, к базе. Экипаж высаживается в Амальфи на тузике."
    plan_a:
      trigger: "Погода безопасна, Scirocco отсутствует"
      destinations:
        - "Amalfi"
        - "Cetara"
      mooring:
        type: anchor
        name: "Cetara"
        notes: "Якорь или буи. Сброс чёрных вод перед заходом в порт."
      pois:
        - name: "Museo della Carta"
          description: "Дети смогут сами сделать лист бумаги."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g187780-d2208039-Reviews-Museo_della_Carta-Amalfi_Amalfi_Coast_Campania.html"
        - name: "Duomo di Amalfi"
          description: "Огромная лестница и крипта с мощами Святого Андрея."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g187780-d195551-Reviews-Duomo_di_Amalfi-Amalfi_Amalfi_Coast_Campania.html"
        - name: "Torre di Cetara"
          description: "Дегустация соуса Colatura di Alici в местных лавках."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g1028713-d14144558-Reviews-Torre_Vicereale-Cetara_Amalfi_Coast_Campania.html"
      warnings:
        - severity: warning
          text: "Сброс чёрных вод за 3 мили до захода в Четару."
      scirocco_note: "Scirocco здесь — активировать Вариант 1 (укрытие за горами Сорренто)."
    plan_b:
      trigger: "В Четаре нет мест"
      destinations:
        - "Vietri sul Mare"
      mooring:
        type: anchor
        name: "Vietri sul Mare"
      pois:
        - name: "Museo Provinciale della Ceramica"
          description: "Вьетри — столица керамики Италии."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194951-d4107693-Reviews-Museo_della_Ceramica-Vietri_sul_Mare_Amalfi_Coast_Campania.html"
  - day: 7
    date: "2026-07-31"
    title: "Возвращение домой"
    departure_time: "10:00"
    notes: "Переход 1 час. Купание в заливе по пути. Чек-аут 01.08 в 08:30."
    plan_a:
      destinations:
        - "Marina d'Arechi (Salerno)"
      mooring:
        type: marina
        name: "Marina d'Arechi — домашнее место"
      pois:
        - name: "Lungomare di Salerno"
          description: "Одна из красивейших набережных Италии — пятничный вечер."
          tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g187781-d2539121-Reviews-Lungomare_di_Salerno-Salerno_Amalfi_Coast_Campania.html"
      warnings:
        - severity: critical
          text: "Строго быть на топливном причале Marina d'Arechi до 14:00! В 17:00 там 3-часовая пробка."
scirocco_branch:
  - title: "Укрытие за горами Сорренто"
    condition: "Если шторм у Позитано / Амальфи (Дни 5–6)"
    shelter: "Marina di Puolo или якорь у Meta di Sorrento"
    mooring:
      type: marina_or_anchor
      name: "Marina di Puolo / Meta di Sorrento"
    pois:
      - name: "Bagni Regina Giovanna"
        description: "Природный морской бассейн в скалах — подойти на тузике."
        tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g187782-d2188688-Reviews-Bagni_della_Regina_Giovanna-Sorrento_Province_of_Naples_Campania.html"
      - name: "Agriturismo Primaluce"
        description: "Поездка на такси. Дети делают пиццу, взрослые дегустируют лимончелло."
        tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g187782-d8509176-Reviews-Primaluce-Sorrento_Province_of_Naples_Campania.html"
    return_notes: "Пятница: переход 4.5 часа обратно в Салерно."
  - title: "Затонувший город — Север Неаполитанского залива"
    condition: "Если шторм у Капри / Искьи / Прочиды (Дни 3–4)"
    shelter: "Якорь или марина в Baia / Pozzuoli"
    mooring:
      type: marina_or_anchor
      name: "Baia / Pozzuoli"
    pois:
      - name: "Parco Sommerso di Baia"
        description: "Снорклинг над древнеримскими статуями на глубине 3 метров."
        tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g2279147-d15217436-Reviews-Parco_Sommerso_di_Baia_Area_Marina_Protetta-Bacoli_Province_of_Naples_Campania.html"
      - name: "Anfiteatro Flavio (Pozzuoli)"
        description: "Третий по величине Колизей — спуститесь в подземелья к гладиаторским клеткам."
        tripadvisor_url: "https://www.tripadvisor.com/Attraction_Review-g194865-d195535-Reviews-Flavian_Amphitheater_Anfiteatro_Flaviano-Pozzuoli_Province_of_Naples_Campania.html"
    return_notes: "Четверг–пятница: спуск вдоль побережья обратно в Салерно."
---
