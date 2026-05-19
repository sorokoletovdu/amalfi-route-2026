---
title: "Капитанский Гид: Амальфи и Неаполитанский залив"
subtitle: "25.07 – 01.08.2026"
dates: "2026-07-25/2026-08-01"
boat:
  name: "Lagoon 380 S2"
  length_m: 11.55
  beam_m: 6.53
  draft_m: 1.15
crew:
  adults: 4
  children: 4
  children_ages: "8–11"
rules:
  - "Правило 14:00: Шкипер оценивает ветер (Windy) и подтверждает стоянку до 14:00 каждого дня."
  - "Красная Ветка: При южном ветре (Scirocco) — План А на Амальфи отменяется. Переход на северную сторону полуострова Сорренто."
days:
  - day: 1
    date: "2026-07-25"
    title: "Старт из Castellammare"
    notes: "Чек-ин 15:00. Одна семья принимает лодку, вторая закупает продукты и 5 пакетов льда. Цель выхода — 17:00, переход 2 часа."
    plan_a:
      trigger: "Выход до 18:00"
      destinations:
        - "Procida"
      mooring:
        type: buoy
        name: "Marina di Procida (Северная сторона)"
        booking_urls:
          - "https://marinedi.com/en/marina-di-procida/#prenota-ora"
        notes: "Безопасный понтон."
      activities:
        - "Пешком 1.2 км к Belvedere Terra Murata — закат на западе (море/Искья) и Везувий на востоке."
        - "Ужин в рыбацкой гавани Corricella."
    plan_b:
      trigger: "Выход позже 18:00"
      destinations:
        - "Vico Equense"
      mooring:
        type: anchor
        name: "Vico Equense (Соррентийский полуостров)"
        notes: "Якорь. 30 минут от базы."
      activities:
        - "На тузике на берег."
        - "Ужин в Università della Pizza — знаменитая 2-метровая Pizza al Metro."
  - day: 2
    date: "2026-07-26"
    title: "Festa di Sant'Anna — Искья"
    departure_time: "10:00"
    notes: "Внимание: остров Vivara — строгая Зона А, транзит запрещён."
    plan_a:
      trigger: "Восточный берег Искьи безопасен для якоря"
      destinations:
        - "Baia di Cartaromana"
        - "Sant'Angelo"
      mooring:
        type: buoy
        name: "Sant'Angelo (буи или марина)"
        phone: "+39 081 999 439"
        notes: "Связаться с мариной днём, оплатить место и попросить светящийся маркер — ночью швартовщиков не будет. Резерв: глубокий якорь на песке перед пляжем Maronti (вне зоны посидонии)."
      activities:
        - "Прибытие к Арагонскому замку. Якорь на внешнем рейде, строго за линией жёлтых буйков."
        - "Купание, подготовка к вечеру."
        - "Парад лодок, имитация пожара в замке, грандиозный салют в полночь."
        - "Ночной переход: выждать 30–40 минут после салюта, затем 40–50 мин на юг Искьи."
      warnings:
        - severity: critical
          text: "Ночной переход в ~02:00. Выждать 30–40 мин после салюта — пьяные капитаны на воде."
    plan_b:
      trigger: "Береговая охрана закрывает рейд или сильный восточный ветер"
      destinations:
        - "Sant'Angelo"
      mooring:
        type: buoy
        name: "Sant'Angelo"
      activities:
        - "Идём днём сразу на юг. Спокойный ужин."
        - "Салют виден как зарево за горой."
  - day: 3
    date: "2026-07-27"
    title: "Ленивое утро и Капри"
    departure_time: "11:30"
    notes: "Поздний завтрак на якоре у пляжа Maronti. Купание с лодки. Тузик в Sant'Angelo за кофе/джелато. Переход на Капри ≈ 2.5 часа."
    plan_a:
      trigger: "Нормальная погода, Scirocco отсутствует"
      destinations:
        - "Capri (Faraglioni)"
        - "Nerano"
      mooring:
        type: buoy
        name: "Marina del Nerano"
        booking_urls:
          - "https://www.marinadinerano.com/en/book-mooring/"
      activities:
        - "Capri: прибытие к 14:30, якорь у скал Faraglioni, купание, фото. Уход в 17:30."
        - "Nerano: ужин — Spaghetti alla Nerano на галечном пляже."
      scirocco_note: "Если здесь застал шторм Scirocco — активировать КРАСНУЮ ВЕТКУ."
  - day: 4
    date: "2026-07-28"
    title: "Острова Сирен и Позитано"
    departure_time: "10:30"
    plan_a:
      trigger: "Амальфи открыт, Scirocco отсутствует"
      destinations:
        - "Li Galli"
        - "Positano"
      mooring:
        type: buoy
        name: "Grassi Boat Positano (бухта Fornillo)"
        booking_urls:
          - "https://www.grassiboatpositano.com/en/service?code=SMAZS"
        notes: "Тише главного пирса Позитано."
      activities:
        - "Li Galli: Зона C заповедника. Якорь строго на песок. Купание в кристальной воде («дом сирен»)."
        - "Positano: водное такси. Прогулка по улицам-лестницам, шопинг."
        - "Посещение римской виллы MAR под церковью."
  - day: 5
    date: "2026-07-29"
    title: "Минори и хак со шкипером"
    departure_time: "09:00"
    notes: "Переход 1 час."
    plan_a:
      trigger: "Есть места в Минори"
      destinations:
        - "Minori"
      mooring:
        type: buoy
        name: "Marina Minori Boat Service"
        booking_urls:
          - "https://www.boatservice.org/en/book-mooring/"
          - "https://www.navily.com/port/boat-service-minori-campo-boe/8773"
        notes: "Лодка привязана, баки заправляются водой."
      activities:
        - "Весь экипаж со шкипером на паром Travelmar (€3, 10 мин) → Амальфи."
        - "Дети: Музей бумаги."
        - "Возврат на пароме в Минори к десертам в Sal De Riso."
    plan_b:
      trigger: "В Минори нет мест"
      destinations:
        - "Maiori"
      mooring:
        type: marina_or_anchor
        name: "Maiori"
        notes: "Самый большой песчаный пляж на побережье."
      activities:
        - "Логистика с паромом/автобусом до Амальфи сохраняется."
  - day: 6
    date: "2026-07-30"
    title: "Фьорд и рыбацкая бухта"
    departure_time: "10:00"
    notes: "Проход мимо ущелья с мостом Fiordo di Furore — фото с воды."
    plan_a:
      trigger: "Puolo свободен и безопасен"
      destinations:
        - "Marina di Puolo"
      mooring:
        type: marina_or_anchor
        name: "Marina di Puolo (кооператив)"
        phone: "+39 081 533 9797"
        notes: "Аутентичная старая рыбацкая деревня на севере Сорренто."
      activities:
        - "Спокойное прощание с морем в аутентичной рыбацкой деревне."
      warnings:
        - severity: warning
          text: "Сбросить чёрные воды за 3 мили до захода в залив Puolo."
    plan_b:
      trigger: "В Puolo нет мест"
      destinations:
        - "Meta di Sorrento"
      mooring:
        type: anchor
        name: "Meta di Sorrento"
        notes: "Якорь в песке перед длинным пляжем."
      activities: []
  - day: 7
    date: "2026-07-31"
    title: "Возвращение домой"
    departure_time: "10:00"
    notes: "Купание в заливе по пути. Чек-аут 01.08 в 08:30."
    plan_a:
      destinations:
        - "Castellammare di Stabia"
      mooring:
        type: marina
        name: "Домашнее место в базовой марине"
      activities:
        - "Купание в заливе."
        - "Заправка топливом на причале в Castellammare."
      warnings:
        - severity: critical
          text: "Строго быть на топливном причале до 14:00! В 17:00 там 3-часовая пробка."
scirocco_branch:
  - day_ref: "3/4"
    title: "Побег от шторма — Побережье Сорренто"
    destination: "Sorrento"
    mooring:
      type: marina_or_anchor
      name: "Porto Turistico Sorrento (Marina Piccola) или якорь у Meta di Sorrento"
    activities:
      - "Сухопутный опыт. Такси до Agriturismo (лимонная ферма) в холмах Сорренто."
      - "Дети готовят пиццу, взрослые дегустируют лимончелло."
  - day_ref: "5"
    title: "Смена дислокации — Север Искьи"
    destination: "Ischia North"
    mooring:
      type: marina
      name: "Casamicciola или Lacco Ameno"
      notes: "Закрыто горой Эпомео от южного ветра."
    activities:
      - "Безопасные набережные."
      - "Термальный парк Castiglione (разрешён для детей)."
  - day_ref: "6"
    title: "Слияние с маршрутом — Возврат"
    destination: "Marina di Puolo"
    mooring:
      type: marina_or_anchor
      name: "Marina di Puolo"
    activities:
      - "Переход 1.5–2 часа обратно к Marina di Puolo."
    merges_to: "День 6, План А"
---
