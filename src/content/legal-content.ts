import type { Locale } from "@/lib/i18n/config";
import type { PageRouteKey } from "@/lib/i18n/routing";

type LegalRouteKey = Extract<PageRouteKey, "privacy" | "refund">;

type LegalContent = {
  routeKey: LegalRouteKey;
  eyebrow: string;
  title: string;
  summary: string;
  reviewNotice: string;
  metadata: Array<{
    label: string;
    value: string;
  }>;
  highlights: string[];
  sections: Array<{
    title: string;
    body: string[];
    bullets?: string[];
  }>;
  contact: {
    title: string;
    body: string;
  };
};

const englishLegal: Record<LegalRouteKey, LegalContent> = {
  privacy: {
    routeKey: "privacy",
    eyebrow: "Privacy",
    title: "Privacy Policy",
    summary:
      "Volna School uses personal information to respond to enquiries, arrange trial lessons, support learning, and operate school administration.",
    reviewNotice:
      "Draft privacy notice for owner/legal review before final public launch. It should be checked against the school's actual systems, contracts, retention schedule, cookie tooling, and data processor list.",
    metadata: [
      { label: "Policy type", value: "Privacy notice" },
      { label: "Effective date", value: "Owner review required" },
      { label: "Last reviewed", value: "Draft for launch review" },
    ],
    highlights: [
      "Only collect information needed for enquiries, placement, lessons, and administration.",
      "Treat children's information with particular care and use parent or guardian contact for registration.",
      "Do not sell personal information or use trial enquiry data for unrelated purposes.",
    ],
    sections: [
      {
        title: "Who is responsible for information",
        body: [
          "Volna School is responsible for the personal information it collects through the website, trial registration forms, enquiries, lesson administration, and direct communication with families or learners.",
          "The school can be contacted at info@volnaschool.com for privacy questions, access requests, corrections, or deletion requests.",
        ],
      },
      {
        title: "Information collected",
        body: [
          "The school may collect contact details, learner name, learner age or year group, course interest, preferred contact method, placement notes, and learning-level information shared through forms or direct communication.",
          "For enrolled learners, the school may also hold lesson-related administration, attendance information, homework or progress notes, invoice/payment records, and communication needed to manage the learning relationship.",
        ],
        bullets: [
          "Parent or guardian contact details for children's enquiries",
          "Learner level, route, and class-placement information",
          "Administrative records needed for lessons, invoices, support, and safeguarding",
        ],
      },
      {
        title: "How information is used",
        body: [
          "Information is used to respond to enquiries, recommend a suitable class or private lesson route, arrange trial lessons, communicate with families and learners, provide teaching support, manage invoices, and keep appropriate school records.",
          "Where required, information may also be used to meet safeguarding, accounting, legal, or dispute-resolution responsibilities.",
        ],
      },
      {
        title: "Lawful basis and consent",
        body: [
          "The legal basis for processing should be confirmed by the owner/legal reviewer. In practice, different activities may rely on consent, contract, legitimate interests, or legal obligation depending on the context.",
          "Trial registration consent allows the school to contact the person who submits the form about arranging a free trial lesson. It should not be treated as blanket consent for unrelated marketing.",
        ],
      },
      {
        title: "Children's information",
        body: [
          "Children's information should be handled with particular care. Registration forms are intended to be completed by adults, parents, or guardians where a child is involved.",
          "The school should avoid collecting unnecessary sensitive information in the first enquiry form and should explain directly to families why placement information is needed.",
        ],
      },
      {
        title: "Sharing and service providers",
        body: [
          "The school may use trusted service providers for website hosting, email, online lessons, analytics, payment administration, data storage, security checks, and school administration.",
          "Those providers should only receive the information needed to perform their role. The final policy should name or describe actual providers after owner review.",
        ],
      },
      {
        title: "Cookies and analytics",
        body: [
          "The website may use essential cookies and similar technologies required for site security, forms, analytics, or performance monitoring.",
          "Analytics information should be used to understand website performance and improve the service, not to make high-impact decisions about learners.",
        ],
      },
      {
        title: "Retention and deletion",
        body: [
          "Personal information should be kept only for as long as it is needed for enquiries, lessons, administration, safeguarding, accounting, legal, or dispute-resolution purposes.",
          "The owner should confirm specific retention periods before launch. Families and learners can ask for information to be corrected or deleted, subject to records the school needs to keep.",
        ],
      },
      {
        title: "Your rights",
        body: [
          "Depending on the context, individuals may have rights to access, correct, erase, restrict, object to, or receive a copy of their personal information.",
          "Requests can be sent to info@volnaschool.com. The school should verify the requester before sharing or changing personal information.",
        ],
      },
      {
        title: "Security and updates",
        body: [
          "The school should use reasonable technical and organisational measures to protect personal information. No online transmission or storage method can be guaranteed as completely secure.",
          "This notice may be updated when the website, school systems, legal requirements, or service providers change.",
        ],
      },
    ],
    contact: {
      title: "Privacy contact",
      body:
        "For privacy questions or data requests, contact Volna School at info@volnaschool.com.",
    },
  },
  refund: {
    routeKey: "refund",
    eyebrow: "Payments",
    title: "Refund Policy",
    summary:
      "This policy summarises how Volna School handles lesson payments, cancellations, missed lessons, and refund requests.",
    reviewNotice:
      "Draft refund policy for owner/legal review before final public launch. It should be checked against the school's current invoices, group-course terms, private-tuition terms, and UK consumer rights requirements.",
    metadata: [
      { label: "Policy type", value: "Payments and refunds" },
      { label: "Effective date", value: "Owner review required" },
      { label: "Last reviewed", value: "Draft for launch review" },
    ],
    highlights: [
      "Refund requests should be reviewed against the agreed lesson arrangement and the family's statutory rights.",
      "Notice timing matters for missed lessons, especially for group classes with fixed teacher and class commitments.",
      "Nothing in this draft is intended to limit rights that cannot legally be restricted.",
    ],
    sections: [
      {
        title: "Scope of this policy",
        body: [
          "This policy covers trial-lesson follow-up, paid group courses, private tuition, missed lessons, cancellations, and refund requests for Volna School lessons.",
          "Course-specific payment terms, invoices, and written arrangements may give more detail. Those details should be consistent with this policy and with applicable consumer rights.",
        ],
      },
      {
        title: "Payments and invoices",
        body: [
          "Lesson and course fees should be paid according to the invoice or payment instructions provided by the school.",
          "Group courses and private tuition may have different scheduling, lesson-length, cancellation, and payment arrangements. The exact arrangement should be confirmed before paid lessons begin.",
        ],
      },
      {
        title: "Free trial lessons",
        body: [
          "The free trial lesson is intended to help the school understand the learner's level and recommend a suitable route. There is no charge for the free trial lesson unless the school and family have separately agreed otherwise.",
          "After the trial, the school should confirm the proposed route, timetable, teacher availability, payment arrangement, and any cancellation expectations before paid lessons continue.",
        ],
      },
      {
        title: "Missed lessons and absence notice",
        body: [
          "Where a family or learner cannot attend a scheduled lesson, they should contact the school as early as possible using the contact details provided by the school.",
          "Whether a missed lesson can be refunded, credited, rescheduled, or treated as chargeable depends on the agreed course type, notice given, teacher availability, and whether the place was reserved in a group or private slot.",
        ],
        bullets: [
          "Group classes usually depend on a fixed class timetable and reserved place.",
          "Private tuition may allow more flexibility if notice is given in time.",
          "Same-day absence or no notice may not be refundable unless the school agrees otherwise.",
        ],
      },
      {
        title: "Stopping lessons or cancelling future lessons",
        body: [
          "If a learner decides to stop lessons, the family or learner should contact the school as soon as possible.",
          "The school should review any prepaid future lessons, lessons already delivered, reserved group commitments, and reasonable administration or cancellation terms before confirming whether a refund or credit is due.",
        ],
      },
      {
        title: "Refund processing",
        body: [
          "Where a refund or credit is approved, the school should confirm the amount, method, and timing in writing.",
          "Depending on the arrangement, the refund may be returned to the original payment method, credited against a future invoice, or handled by another agreed method.",
        ],
      },
      {
        title: "How to request a refund",
        body: [
          "Refund requests should be sent to info@volnaschool.com with enough information for the school to review the request.",
          "The school should respond with the decision or any follow-up questions as soon as reasonably possible.",
        ],
        bullets: [
          "Learner name and parent or payer name, if different",
          "Course, lesson date, invoice, or payment reference",
          "Reason for the request and any relevant absence notice",
        ],
      },
      {
        title: "Statutory rights and policy updates",
        body: [
          "Nothing in this policy is intended to remove or restrict statutory rights that cannot legally be excluded.",
          "This policy may be updated when payment arrangements, school procedures, or legal requirements change.",
        ],
      },
    ],
    contact: {
      title: "Refund contact",
      body:
        "For payment, cancellation, or refund questions, contact Volna School at info@volnaschool.com.",
    },
  },
};

const russianLegal: Record<LegalRouteKey, LegalContent> = {
  privacy: {
    routeKey: "privacy",
    eyebrow: "Конфиденциальность",
    title: "Политика конфиденциальности",
    summary:
      "Volna School использует персональные данные, чтобы отвечать на запросы, организовывать пробные уроки, вести обучение и школьную администрацию.",
    reviewNotice:
      "Черновик политики конфиденциальности для проверки владельцем и юристом перед финальной публикацией. Его нужно сверить с фактическими системами школы, договорами, сроками хранения, cookie-инструментами и списком обработчиков данных.",
    metadata: [
      { label: "Тип политики", value: "Конфиденциальность" },
      { label: "Дата вступления", value: "Требует проверки" },
      { label: "Последний обзор", value: "Черновик для запуска" },
    ],
    highlights: [
      "Собирать только данные, необходимые для запросов, подбора уровня, уроков и администрирования.",
      "Относиться к данным детей особенно внимательно и использовать контакт родителя или опекуна для регистрации.",
      "Не продавать персональные данные и не использовать заявки на пробный урок для несвязанных целей.",
    ],
    sections: [
      {
        title: "Кто отвечает за данные",
        body: [
          "Volna School отвечает за персональные данные, которые собираются через сайт, формы записи на пробный урок, запросы, администрирование уроков и прямую коммуникацию с семьями или учениками.",
          "По вопросам конфиденциальности, доступа, исправления или удаления данных можно написать на info@volnaschool.com.",
        ],
      },
      {
        title: "Какие данные собираются",
        body: [
          "Школа может собирать контактные данные, имя ученика, возраст или школьный год, интересующий курс, удобный способ связи, заметки для подбора уровня и информацию об уровне, которую семья или ученик передает через форму или напрямую.",
          "Для зачисленных учеников школа также может хранить административные данные об уроках, посещаемость, домашние задания или заметки о прогрессе, счета и платежные записи, а также коммуникацию, нужную для обучения.",
        ],
        bullets: [
          "Контакты родителя или опекуна для детских запросов",
          "Информация об уровне, маршруте и подборе класса",
          "Административные записи для уроков, счетов, поддержки и safeguarding",
        ],
      },
      {
        title: "Как используются данные",
        body: [
          "Данные используются, чтобы отвечать на запросы, рекомендовать подходящую группу или индивидуальный формат, организовывать пробные уроки, общаться с семьями и учениками, поддерживать обучение, вести счета и школьные записи.",
          "При необходимости данные могут использоваться для safeguarding, бухгалтерии, юридических обязанностей или разрешения спорных ситуаций.",
        ],
      },
      {
        title: "Правовое основание и согласие",
        body: [
          "Правовое основание обработки должно быть подтверждено владельцем и юристом. В разных ситуациях школа может опираться на согласие, договор, законный интерес или юридическую обязанность.",
          "Согласие в форме пробного урока разрешает школе связаться с отправителем заявки по поводу организации бесплатного пробного урока. Оно не должно считаться общим согласием на несвязанный маркетинг.",
        ],
      },
      {
        title: "Данные детей",
        body: [
          "Данные детей требуют особой осторожности. Если запрос касается ребенка, регистрационную форму должен заполнять взрослый, родитель или опекун.",
          "Школа не должна собирать лишнюю чувствительную информацию в первой форме и должна объяснять семье, зачем нужна информация для подбора уровня.",
        ],
      },
      {
        title: "Передача данных и сервисы",
        body: [
          "Школа может использовать доверенные сервисы для хостинга сайта, email, онлайн-уроков, аналитики, платежного администрирования, хранения данных, проверки безопасности и школьной администрации.",
          "Такие сервисы должны получать только данные, необходимые для своей роли. Финальная политика должна назвать или описать фактических поставщиков после проверки владельцем.",
        ],
      },
      {
        title: "Cookies и аналитика",
        body: [
          "Сайт может использовать обязательные cookies и похожие технологии для безопасности, форм, аналитики или мониторинга производительности.",
          "Аналитика должна использоваться для понимания работы сайта и улучшения сервиса, а не для важных решений об учениках.",
        ],
      },
      {
        title: "Хранение и удаление",
        body: [
          "Персональные данные должны храниться только столько, сколько нужно для запросов, уроков, администрации, safeguarding, бухгалтерии, юридических целей или разрешения спорных ситуаций.",
          "Конкретные сроки хранения должен подтвердить владелец перед запуском. Семьи и ученики могут попросить исправить или удалить данные, кроме записей, которые школа должна сохранить.",
        ],
      },
      {
        title: "Ваши права",
        body: [
          "В зависимости от ситуации у человека могут быть права доступа, исправления, удаления, ограничения обработки, возражения или получения копии своих персональных данных.",
          "Запросы можно отправлять на info@volnaschool.com. Школа должна проверить личность отправителя перед передачей или изменением персональных данных.",
        ],
      },
      {
        title: "Безопасность и обновления",
        body: [
          "Школа должна использовать разумные технические и организационные меры защиты персональных данных. При этом ни один способ передачи или хранения в интернете не может быть гарантирован как полностью безопасный.",
          "Эта политика может обновляться при изменении сайта, школьных систем, юридических требований или поставщиков сервисов.",
        ],
      },
    ],
    contact: {
      title: "Контакт по конфиденциальности",
      body:
        "По вопросам конфиденциальности или запросам о данных пишите в Volna School на info@volnaschool.com.",
    },
  },
  refund: {
    routeKey: "refund",
    eyebrow: "Оплата",
    title: "Политика возврата",
    summary:
      "Эта политика кратко описывает, как Volna School рассматривает оплату уроков, отмены, пропущенные занятия и запросы на возврат.",
    reviewNotice:
      "Черновик политики возврата для проверки владельцем и юристом перед финальной публикацией. Его нужно сверить с актуальными счетами школы, условиями групповых курсов, условиями индивидуальных занятий и требованиями прав потребителей в Великобритании.",
    metadata: [
      { label: "Тип политики", value: "Оплата и возвраты" },
      { label: "Дата вступления", value: "Требует проверки" },
      { label: "Последний обзор", value: "Черновик для запуска" },
    ],
    highlights: [
      "Запросы на возврат должны рассматриваться по согласованному формату уроков и с учетом законных прав семьи.",
      "Срок уведомления важен для пропущенных уроков, особенно для групп с фиксированным расписанием и местом.",
      "Ничто в этом черновике не должно ограничивать права, которые нельзя законно исключить.",
    ],
    sections: [
      {
        title: "Что покрывает политика",
        body: [
          "Эта политика относится к пробным урокам, платным группам, индивидуальным занятиям, пропущенным урокам, отменам и запросам на возврат за уроки Volna School.",
          "Условия конкретного курса, инвойсы и письменные договоренности могут уточнять детали. Они должны соответствовать этой политике и применимым правам потребителей.",
        ],
      },
      {
        title: "Оплата и инвойсы",
        body: [
          "Уроки и курсы оплачиваются согласно инвойсу или платежной инструкции школы.",
          "Для групповых курсов и индивидуальных занятий могут действовать разные условия расписания, длительности урока, отмены и оплаты. Точный формат должен быть подтвержден до начала платных уроков.",
        ],
      },
      {
        title: "Бесплатный пробный урок",
        body: [
          "Бесплатный пробный урок нужен, чтобы школа поняла уровень ученика и предложила подходящий маршрут. За бесплатный пробный урок плата не взимается, если школа и семья отдельно не договорились иначе.",
          "После пробного урока школа должна подтвердить маршрут, расписание, доступность преподавателя, порядок оплаты и ожидания по отменам до продолжения платных занятий.",
        ],
      },
      {
        title: "Пропущенные уроки и уведомление",
        body: [
          "Если семья или ученик не может прийти на запланированный урок, нужно связаться со школой как можно раньше через предоставленные контакты.",
          "Можно ли вернуть оплату, зачесть, перенести урок или считать его оплачиваемым, зависит от типа курса, срока уведомления, доступности преподавателя и того, было ли место зарезервировано в группе или индивидуальном слоте.",
        ],
        bullets: [
          "Групповые занятия обычно зависят от фиксированного расписания и зарезервированного места.",
          "Индивидуальные занятия могут быть гибче, если уведомление сделано вовремя.",
          "Отсутствие в день урока или без уведомления может не подлежать возврату, если школа не согласовала иное.",
        ],
      },
      {
        title: "Прекращение занятий или отмена будущих уроков",
        body: [
          "Если ученик решает прекратить занятия, семье или ученику нужно связаться со школой как можно раньше.",
          "Школа должна рассмотреть предоплаченные будущие уроки, уже проведенные занятия, обязательства по группе и разумные условия отмены перед подтверждением возврата или зачета.",
        ],
      },
      {
        title: "Обработка возврата",
        body: [
          "Если возврат или зачет одобрен, школа должна письменно подтвердить сумму, способ и сроки.",
          "В зависимости от договоренности возврат может быть отправлен тем же способом оплаты, зачтен в будущий инвойс или обработан другим согласованным способом.",
        ],
      },
      {
        title: "Как запросить возврат",
        body: [
          "Запрос на возврат нужно отправить на info@volnaschool.com с достаточной информацией для рассмотрения.",
          "Школа должна ответить с решением или уточняющими вопросами в разумные сроки.",
        ],
        bullets: [
          "Имя ученика и имя родителя или плательщика, если отличается",
          "Курс, дата урока, инвойс или платежная ссылка",
          "Причина запроса и информация об уведомлении об отсутствии",
        ],
      },
      {
        title: "Законные права и обновления",
        body: [
          "Ничто в этой политике не должно отменять или ограничивать законные права, которые нельзя исключить.",
          "Эта политика может обновляться при изменении порядка оплаты, школьных процедур или юридических требований.",
        ],
      },
    ],
    contact: {
      title: "Контакт по возвратам",
      body:
        "По вопросам оплаты, отмены или возврата пишите в Volna School на info@volnaschool.com.",
    },
  },
};

export const legalContent: Record<Locale, Record<LegalRouteKey, LegalContent>> = {
  en: englishLegal,
  ru: russianLegal,
};
