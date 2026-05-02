import type { Locale } from "@/lib/i18n/config";

export type RegistrationOption = {
  label: string;
  value: string;
};

export type RegistrationContent = {
  metadata: {
    title: string;
    description: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    body: string;
    nextStep: string;
  };
  process: {
    eyebrow: string;
    title: string;
    steps: Array<{
      title: string;
      description: string;
    }>;
  };
  reassurance: {
    title: string;
    items: string[];
  };
  courseGuides: Array<{
    value: string;
    title: string;
    description: string;
    prompts: string[];
  }>;
  form: {
    title: string;
    description: string;
    submitLabel: string;
    pendingLabel: string;
    requiredLabel: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    configError: string;
    submitError: string;
    fields: {
      learnerName: string;
      parentName: string;
      email: string;
      phone: string;
      learnerAge: string;
      courseInterest: string;
      classPreference: string;
      preferredContact: string;
      speakingAbility: string;
      writingAbility: string;
      readingAbility: string;
      russianAtHome: string;
      message: string;
      consent: string;
      website: string;
    };
    placeholders: {
      learnerName: string;
      parentName: string;
      email: string;
      phone: string;
      learnerAge: string;
      message: string;
    };
    fieldHints: {
      courseInterest: string;
      classPreference: string;
      ability: string;
      message: string;
    };
    courseOptions: RegistrationOption[];
    classPreferenceOptions: RegistrationOption[];
    contactOptions: RegistrationOption[];
    abilityOptions: RegistrationOption[];
    russianAtHomeOptions: RegistrationOption[];
    validation: {
      required: string;
      email: string;
      phone: string;
      consent: string;
      maxLength: string;
    };
  };
};

export const registrationContent: Record<Locale, RegistrationContent> = {
  en: {
    metadata: {
      title: "Register for a Free Trial Lesson | Volna School",
      description:
        "Register interest in a free trial Russian lesson. Volna School will contact you to arrange the lesson.",
    },
    hero: {
      eyebrow: "Trial registration",
      title: "Register for a Free Trial Lesson",
      body:
        "Share a few details so the school can recommend the right starting point before you commit to lessons.",
      nextStep:
        "After submission, Volna School follows up directly to confirm the learner's needs, course fit, and trial lesson time. The first conversation is for placement, not pressure.",
    },
    process: {
      eyebrow: "How it works",
      title: "A simple route into the right class",
      steps: [
        {
          title: "Share the learner profile",
          description:
            "Age, current Russian level, home language background, and course interest help the school understand the starting point.",
        },
        {
          title: "Check class fit",
          description:
            "The school uses the trial lesson or consultation to recommend a group, private tuition, or a future exam pathway.",
        },
        {
          title: "Confirm next steps",
          description:
            "Families receive the practical details before continuing: format, teacher availability, homework rhythm, and timing.",
        },
      ],
    },
    reassurance: {
      title: "Before you send",
      items: [
        "Only basic contact and placement details are needed at this stage.",
        "You can choose “Not sure yet” if the right course or format is unclear.",
        "Please avoid medical, legal, or other sensitive notes in the first form.",
      ],
    },
    courseGuides: [
      {
        value: "children",
        title: "For children's classes",
        description:
          "Mention age, whether Russian is spoken at home, and whether the child is bilingual, beginning from scratch, or needs private support.",
        prompts: [
          "Younger or older age band",
          "Reading, writing, and speaking confidence",
          "Interest in a path toward GCSE later",
        ],
      },
      {
        value: "gcse",
        title: "For GCSE Russian",
        description:
          "Share the school year, target exam timing, current confidence, and whether the learner needs a one-year, two-year, mock, or private support route.",
        prompts: [
          "Pearson Edexcel GCSE route if known",
          "Mock exam or exam-entry questions",
          "Any skill that needs extra attention",
        ],
      },
      {
        value: "alevel",
        title: "For A-Level Russian",
        description:
          "Share the exam timeline, current study stage, and whether the learner needs support with speaking, writing, cultural topics, or the independent research project.",
        prompts: [
          "Current A-Level year or target exam year",
          "IRP or cultural-study support needs",
          "Preferred group or one-to-one format",
        ],
      },
      {
        value: "adults",
        title: "For adult learners",
        description:
          "Mention your current level, goals, and schedule. Adult lessons can focus on foundations, conversation, travel, family, culture, or professional use.",
        prompts: [
          "Beginner, returning learner, or confident speaker",
          "Conversation, reading, travel, family, or work goals",
          "Preferred lesson times",
        ],
      },
      {
        value: "not_sure",
        title: "Not sure yet",
        description:
          "That is completely fine. Share the learner's age or adult goal, current exposure to Russian, and what you hope lessons will help with.",
        prompts: [
          "What made you enquire now",
          "Any previous Russian learning",
          "Best days or times for a trial",
        ],
      },
    ],
    form: {
      title: "Trial lesson details",
      description:
        "Tell us how to reach you and which course you are interested in. The notes can be brief; the school will ask follow-up questions directly.",
      submitLabel: "Register for a Free Trial Lesson",
      pendingLabel: "Sending registration...",
      requiredLabel: "Required",
      successTitle: "Registration received",
      successMessage:
        "Thank you. The school will contact you to arrange the free trial lesson.",
      errorTitle: "Registration could not be sent",
      configError:
        "Registration storage is not configured yet. Please try again later or contact the school at info@volnaschool.com.",
      submitError:
        "The form could not be saved. Please try again later or contact the school at info@volnaschool.com.",
      fields: {
        learnerName: "Learner name",
        parentName: "Parent or guardian name",
        email: "Email",
        phone: "Phone",
        learnerAge: "Learner age or year group",
        courseInterest: "Course interest",
        classPreference: "Preferred lesson format",
        preferredContact: "Preferred contact method",
        speakingAbility: "Speaking confidence",
        writingAbility: "Writing confidence",
        readingAbility: "Reading confidence",
        russianAtHome: "Russian spoken at home",
        message: "Anything helpful for arranging the trial",
        consent: "I agree that Volna School may contact me about arranging a free trial lesson.",
        website: "Website",
      },
      placeholders: {
        learnerName: "Learner name",
        parentName: "Parent or guardian, if applicable",
        email: "name@example.com",
        phone: "+44...",
        learnerAge: "e.g. 8, Year 10, GCSE, adult learner",
        message: "Preferred days, learner level, or course questions",
      },
      fieldHints: {
        courseInterest:
          "Choose the closest match. If you arrived from a course page, this may already be selected.",
        classPreference:
          "A preference is helpful, but the school can advise after the trial conversation.",
        ability:
          "Use your best estimate. This helps placement and is not a test.",
        message:
          "Useful notes include availability, previous learning, exam timing, or whether the learner needs confidence-building support.",
      },
      courseOptions: [
        { label: "Children's Russian classes", value: "children" },
        { label: "GCSE Russian", value: "gcse" },
        { label: "A-Level Russian", value: "alevel" },
        { label: "Adult Russian courses", value: "adults" },
        { label: "Not sure yet", value: "not_sure" },
      ],
      classPreferenceOptions: [
        { label: "Group class", value: "group" },
        { label: "Private tuition", value: "private" },
        { label: "Not sure yet", value: "not_sure" },
      ],
      contactOptions: [
        { label: "Email", value: "email" },
        { label: "Phone", value: "phone" },
        { label: "Either is fine", value: "either" },
      ],
      abilityOptions: [
        { label: "Beginner or not yet confident", value: "beginner" },
        { label: "Some confidence", value: "some" },
        { label: "Confident for age or level", value: "confident" },
        { label: "Native or heritage speaker", value: "native" },
      ],
      russianAtHomeOptions: [
        { label: "Yes", value: "yes" },
        { label: "No", value: "no" },
        { label: "Sometimes", value: "sometimes" },
      ],
      validation: {
        required: "Please complete this field.",
        email: "Please enter a valid email address.",
        phone: "Please enter a valid phone number, or leave this optional field blank.",
        consent: "Please confirm consent to be contacted.",
        maxLength: "Please shorten this response.",
      },
    },
  },
  ru: {
    metadata: {
      title: "Запись на бесплатный пробный урок | Volna School",
      description:
        "Оставьте заявку на бесплатный пробный урок русского языка. Volna School свяжется с вами, чтобы договориться о занятии.",
    },
    hero: {
      eyebrow: "Запись на пробный урок",
      title: "Записаться на бесплатный пробный урок",
      body:
        "Оставьте несколько деталей, чтобы школа могла предложить подходящий старт до того, как вы решите продолжать занятия.",
      nextStep:
        "После отправки Volna School напрямую уточнит потребности ученика, подходящий курс и время пробного урока. Первая беседа нужна для подбора, а не для давления.",
    },
    process: {
      eyebrow: "Как это работает",
      title: "Простой путь к подходящему формату",
      steps: [
        {
          title: "Расскажите об ученике",
          description:
            "Возраст, текущий уровень русского, языковая среда дома и интересующий курс помогают понять стартовую точку.",
        },
        {
          title: "Проверка подходящего класса",
          description:
            "Пробный урок или консультация помогают рекомендовать группу, индивидуальный формат или будущий экзаменационный маршрут.",
        },
        {
          title: "Подтверждение следующих шагов",
          description:
            "Семья получает практические детали до продолжения: формат, доступность преподавателя, домашний ритм и время занятий.",
        },
      ],
    },
    reassurance: {
      title: "Перед отправкой",
      items: [
        "На этом этапе нужны только базовые контактные данные и информация для подбора.",
        "Можно выбрать «Пока не уверены», если курс или формат еще не ясен.",
        "Пожалуйста, не добавляйте медицинские, юридические или другие чувствительные заметки в первую форму.",
      ],
    },
    courseGuides: [
      {
        value: "children",
        title: "Для детских занятий",
        description:
          "Укажите возраст, говорят ли дома по-русски, и нужен ли ребенку билингвальный маршрут, старт с нуля или индивидуальная поддержка.",
        prompts: [
          "Младший или старший возрастной этап",
          "Уверенность в чтении, письме и речи",
          "Интерес к будущему пути к GCSE",
        ],
      },
      {
        value: "gcse",
        title: "Для GCSE Russian",
        description:
          "Укажите школьный год, примерные сроки экзамена, текущую уверенность и нужен ли маршрут на один год, два года, mock или индивидуальная поддержка.",
        prompts: [
          "Pearson Edexcel GCSE, если уже известно",
          "Вопросы по mocks или записи на экзамен",
          "Навык, которому нужна дополнительная поддержка",
        ],
      },
      {
        value: "alevel",
        title: "Для A-Level Russian",
        description:
          "Укажите сроки экзамена, текущий этап обучения и нужна ли помощь с устной речью, письмом, культурными темами или independent research project.",
        prompts: [
          "Текущий год A-Level или год экзамена",
          "Поддержка IRP или культурной темы",
          "Группа или индивидуальный формат",
        ],
      },
      {
        value: "adults",
        title: "Для взрослых учеников",
        description:
          "Укажите текущий уровень, цели и расписание. Занятия могут быть про базу, разговор, путешествия, семью, культуру или рабочие задачи.",
        prompts: [
          "Начинающий, возвращаетесь к языку или говорите уверенно",
          "Разговор, чтение, путешествия, семья или работа",
          "Удобное время занятий",
        ],
      },
      {
        value: "not_sure",
        title: "Пока не уверены",
        description:
          "Это нормально. Укажите возраст или цель взрослого ученика, текущий опыт русского и чего вы ждете от уроков.",
        prompts: [
          "Почему вы обратились сейчас",
          "Был ли раньше опыт изучения русского",
          "Удобные дни или время для пробного урока",
        ],
      },
    ],
    form: {
      title: "Детали пробного урока",
      description:
        "Укажите, как с вами связаться и какой курс вам интересен. Заметки могут быть короткими; школа уточнит детали напрямую.",
      submitLabel: "Записаться на бесплатный пробный урок",
      pendingLabel: "Отправляем заявку...",
      requiredLabel: "Обязательно",
      successTitle: "Заявка получена",
      successMessage:
        "Спасибо. Школа свяжется с вами, чтобы договориться о бесплатном пробном уроке.",
      errorTitle: "Не удалось отправить заявку",
      configError:
        "Хранение заявок пока не настроено. Попробуйте позже или напишите в школу на info@volnaschool.com.",
      submitError:
        "Форму не удалось сохранить. Попробуйте позже или напишите в школу на info@volnaschool.com.",
      fields: {
        learnerName: "Имя ученика",
        parentName: "Имя родителя или опекуна",
        email: "Email",
        phone: "Телефон",
        learnerAge: "Возраст или класс ученика",
        courseInterest: "Интересующий курс",
        classPreference: "Предпочтительный формат",
        preferredContact: "Удобный способ связи",
        speakingAbility: "Уверенность в устной речи",
        writingAbility: "Уверенность в письме",
        readingAbility: "Уверенность в чтении",
        russianAtHome: "Говорят ли дома по-русски",
        message: "Что поможет организовать пробный урок",
        consent: "Я согласен, что Volna School может связаться со мной для организации бесплатного пробного урока.",
        website: "Website",
      },
      placeholders: {
        learnerName: "Имя ученика",
        parentName: "Родитель или опекун, если применимо",
        email: "name@example.com",
        phone: "+44...",
        learnerAge: "например: 8 лет, Year 10, GCSE, взрослый ученик",
        message: "Удобные дни, уровень ученика или вопросы о курсе",
      },
      fieldHints: {
        courseInterest:
          "Выберите ближайший вариант. Если вы пришли со страницы курса, он может быть уже выбран.",
        classPreference:
          "Предпочтение полезно, но школа может посоветовать формат после пробного общения.",
        ability:
          "Достаточно примерной оценки. Это помогает подобрать уровень и не является тестом.",
        message:
          "Полезно указать доступность, предыдущий опыт, сроки экзамена или необходимость поддержки уверенности.",
      },
      courseOptions: [
        { label: "Детские занятия русским языком", value: "children" },
        { label: "GCSE Russian", value: "gcse" },
        { label: "A-Level Russian", value: "alevel" },
        { label: "Курсы русского языка для взрослых", value: "adults" },
        { label: "Пока не уверены", value: "not_sure" },
      ],
      classPreferenceOptions: [
        { label: "Групповой класс", value: "group" },
        { label: "Индивидуальные занятия", value: "private" },
        { label: "Пока не уверены", value: "not_sure" },
      ],
      contactOptions: [
        { label: "Email", value: "email" },
        { label: "Телефон", value: "phone" },
        { label: "Любой способ", value: "either" },
      ],
      abilityOptions: [
        { label: "Начинающий или пока не уверенно", value: "beginner" },
        { label: "Немного уверенно", value: "some" },
        { label: "Уверенно для возраста или уровня", value: "confident" },
        { label: "Носитель или билингвальный уровень", value: "native" },
      ],
      russianAtHomeOptions: [
        { label: "Да", value: "yes" },
        { label: "Нет", value: "no" },
        { label: "Иногда", value: "sometimes" },
      ],
      validation: {
        required: "Пожалуйста, заполните это поле.",
        email: "Пожалуйста, укажите корректный email.",
        phone: "Пожалуйста, укажите корректный телефон или оставьте это необязательное поле пустым.",
        consent: "Пожалуйста, подтвердите согласие на связь.",
        maxLength: "Пожалуйста, сократите ответ.",
      },
    },
  },
};
