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
      studentName: string;
      parentName: string;
      email: string;
      phone: string;
      learnerAge: string;
      courseInterest: string;
      preferredContact: string;
      message: string;
      consent: string;
      website: string;
    };
    placeholders: {
      studentName: string;
      parentName: string;
      email: string;
      phone: string;
      learnerAge: string;
      message: string;
    };
    courseOptions: RegistrationOption[];
    contactOptions: RegistrationOption[];
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
        "Share a few details and the school will contact you to arrange the free lesson. These fields are safe placeholders inspired by the original form and can be refined after review.",
      nextStep:
        "After submission, Volna School follows up directly to confirm the learner's needs, course fit, and trial lesson time.",
    },
    form: {
      title: "Trial lesson details",
      description:
        "Use reviewed contact details only. Do not include sensitive student notes in this first form.",
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
        studentName: "Learner name",
        parentName: "Parent or guardian name",
        email: "Email",
        phone: "Phone",
        learnerAge: "Learner age",
        courseInterest: "Course interest",
        preferredContact: "Preferred contact method",
        message: "Anything helpful for arranging the trial",
        consent: "I agree that Volna School may contact me about arranging a free trial lesson.",
        website: "Website",
      },
      placeholders: {
        studentName: "Learner name",
        parentName: "Parent or guardian, if applicable",
        email: "name@example.com",
        phone: "+44...",
        learnerAge: "e.g. 8, GCSE, adult learner",
        message: "Preferred days, learner level, or course questions",
      },
      courseOptions: [
        { label: "Children's Russian classes", value: "children" },
        { label: "GCSE Russian", value: "gcse" },
        { label: "A-Level Russian", value: "alevel" },
        { label: "Adult Russian courses", value: "adults" },
        { label: "Not sure yet", value: "not_sure" },
      ],
      contactOptions: [
        { label: "Email", value: "email" },
        { label: "Phone", value: "phone" },
        { label: "Either is fine", value: "either" },
      ],
      validation: {
        required: "Please complete this field.",
        email: "Please enter a valid email address.",
        phone: "Please enter a phone number or email contact route.",
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
        "Оставьте несколько деталей, и школа свяжется с вами, чтобы договориться о бесплатном уроке. Поля формы безопасно вдохновлены прежней заявкой и могут быть уточнены после проверки.",
      nextStep:
        "После отправки Volna School напрямую уточнит потребности ученика, подходящий курс и время пробного урока.",
    },
    form: {
      title: "Детали пробного урока",
      description:
        "Используйте только проверенные контактные данные. Не добавляйте чувствительные заметки об ученике в эту первую форму.",
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
        studentName: "Имя ученика",
        parentName: "Имя родителя или опекуна",
        email: "Email",
        phone: "Телефон",
        learnerAge: "Возраст ученика",
        courseInterest: "Интересующий курс",
        preferredContact: "Удобный способ связи",
        message: "Что поможет организовать пробный урок",
        consent: "Я согласен, что Volna School может связаться со мной для организации бесплатного пробного урока.",
        website: "Website",
      },
      placeholders: {
        studentName: "Имя ученика",
        parentName: "Родитель или опекун, если применимо",
        email: "name@example.com",
        phone: "+44...",
        learnerAge: "например: 8 лет, GCSE, взрослый ученик",
        message: "Удобные дни, уровень ученика или вопросы о курсе",
      },
      courseOptions: [
        { label: "Детские занятия русским языком", value: "children" },
        { label: "GCSE Russian", value: "gcse" },
        { label: "A-Level Russian", value: "alevel" },
        { label: "Курсы русского языка для взрослых", value: "adults" },
        { label: "Пока не уверены", value: "not_sure" },
      ],
      contactOptions: [
        { label: "Email", value: "email" },
        { label: "Телефон", value: "phone" },
        { label: "Любой способ", value: "either" },
      ],
      validation: {
        required: "Пожалуйста, заполните это поле.",
        email: "Пожалуйста, укажите корректный email.",
        phone: "Пожалуйста, укажите телефон или email для связи.",
        consent: "Пожалуйста, подтвердите согласие на связь.",
        maxLength: "Пожалуйста, сократите ответ.",
      },
    },
  },
};
