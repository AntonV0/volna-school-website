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
        "Share a few details and the school will contact you to arrange a free lesson that fits the learner's level, goals, and timetable.",
      nextStep:
        "After submission, Volna School follows up directly to confirm the learner's needs, course fit, and trial lesson time.",
    },
    form: {
      title: "Trial lesson details",
      description:
        "Tell us how to reach you and which course you are interested in. Please do not include sensitive learner notes in this first form.",
      submitLabel: "Register for a Free Trial Lesson",
      pendingLabel: "Sending registration...",
      requiredLabel: "Required",
      successTitle: "Registration received",
      successMessage:
        "Thank you. The school will contact you to arrange the free trial lesson.",
      errorTitle: "Registration could not be sent",
      configError:
        "Registration storage is not configured yet. Please try again later or contact the school through the reviewed contact channel.",
      submitError:
        "The form could not be saved. Please try again later or contact the school through the reviewed contact channel.",
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
        "Оставьте несколько деталей, и школа свяжется с вами, чтобы подобрать бесплатный урок под уровень, цели и расписание ученика.",
      nextStep:
        "После отправки Volna School напрямую уточнит потребности ученика, подходящий курс и время пробного урока.",
    },
    form: {
      title: "Детали пробного урока",
      description:
        "Укажите, как с вами связаться и какой курс вам интересен. Пожалуйста, не добавляйте чувствительные заметки об ученике в эту первую форму.",
      submitLabel: "Записаться на бесплатный пробный урок",
      pendingLabel: "Отправляем заявку...",
      requiredLabel: "Обязательно",
      successTitle: "Заявка получена",
      successMessage:
        "Спасибо. Школа свяжется с вами, чтобы договориться о бесплатном пробном уроке.",
      errorTitle: "Не удалось отправить заявку",
      configError:
        "Хранение заявок пока не настроено. Попробуйте позже или свяжитесь со школой через проверенный контактный канал.",
      submitError:
        "Форму не удалось сохранить. Попробуйте позже или свяжитесь со школой через проверенный контактный канал.",
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
