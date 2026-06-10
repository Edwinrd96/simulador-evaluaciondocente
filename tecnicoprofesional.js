const bancoTecnicoProfesional = [
  {
    id: 1,
    categoria: "Evaluación de Competencias Laborales",
    pregunta: `Un/a docente de la familia profesional de Electricidad y Electrónica debe evaluar si sus estudiantes de 3.er año han alcanzado el Resultado de Aprendizaje (RA) establecido en la Ordenanza de su familia profesional: "Realiza instalaciones eléctricas domiciliarias cumpliendo la normativa técnica y las medidas de prevención de riesgos". Al cierre de la unidad, el/la docente aplica únicamente una prueba escrita de 40 ítems de selección múltiple sobre teoría de circuitos. Desde la perspectiva del modelo curricular por competencias de la DETP y del Instructivo de la Etapa V del ERP, ¿cuál es la debilidad más crítica de esta estrategia evaluativa?
 
La prueba escrita, de manera aislada, NO evidencia la competencia en su integralidad, porque el RA exige la demostración del "Saber Hacer" (ejecución técnica) y el "Saber Ser" (actitud ante la seguridad) en un contexto de desempeño real o simulado, dimensiones que una prueba teórica no puede valorar por sí sola.`,
    opciones: [
      "La debilidad principal radica en que la prueba escrita tiene demasiados ítems, lo cual genera fatiga cognitiva en el estudiante y reduce la validez del instrumento, por lo que debería reducirse a no más de 20 preguntas.",
      "La evaluación es insuficiente porque, según el modelo de competencias de la DETP alineado al CNC-RD, un Resultado de Aprendizaje que integra conocimientos, habilidades procedimentales y actitudes ante la seguridad solo se puede verificar mediante instrumentos que contemplen la ejecución práctica observable, tales como listas de cotejo de desempeño en taller o una rúbrica de proyecto técnico, en combinación con la prueba teórica.",
      "La debilidad consiste en que el docente debió asignar primero la FCT (pasantía en empresa) antes de evaluar, ya que el Módulo de Formación en Centros de Trabajo es prerequisito obligatorio para cualquier evaluación sumativa en la modalidad técnico-profesional.",
      "La prueba escrita es inapropiada porque en la Modalidad Técnico Profesional la evaluación debe ser exclusivamente práctica y demostrativa; el conocimiento teórico se certifica únicamente a través del portafolio de evidencias que el estudiante presenta al final del ciclo."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Ordenanza 03-2017 (Marco Curricular ETP-DETP); Guía Metodológica FCT-DETP; CNC-RD — Modelo de cualificaciones por Resultados de Aprendizaje. El diseño curricular por competencias de la DETP establece que los RA integran el "Saber" (conocimiento), el "Saber Hacer" (habilidad procedimental) y el "Saber Ser" (actitud/valor). Ninguno de estos tres saberes puede verificarse de forma aislada; la evaluación debe ser multimodal. Una prueba escrita es válida para el componente cognitivo, pero no evidencia si el estudiante ejecuta correctamente una instalación eléctrica respetando la norma de seguridad. El ERP del MINERD (Etapa V, EDD-2025) valora precisamente la capacidad del/a docente de diseñar estrategias evaluativas coherentes con la naturaleza de la competencia. La opción A confunde validez con extensión. La C distorsiona el rol de la FCT, que es formativa y no prerequisito de toda evaluación sumativa. La D cae en el extremo opuesto: eliminar la prueba teórica contradice el principio de evaluación integral.`
  },
 
  {
    id: 2,
    categoria: "Planificación del Taller y Prevención de Riesgos",
    pregunta: `Al iniciar el año escolar, la Coordinadora de la familia profesional de Construcción y Minería de un politécnico detecta que varios/as docentes no tienen incorporado en sus Planes de Módulo (PM) ningún resultado de aprendizaje ni criterio de evaluación asociado a higiene y seguridad laboral. Los docentes argumentan que "la seguridad es responsabilidad del encargado de taller, no del docente de teoría". Desde el marco normativo de la DETP y las competencias genéricas transversales del CNC-RD, ¿cuál es la orientación técnico-pedagógica correcta que debe impartir la coordinadora?`,
    opciones: [
      "La coordinadora debe validar la posición de los docentes y designar formalmente a un 'docente de seguridad' específico dentro de la familia profesional, elaborando un módulo autónomo de higiene y seguridad que se dicte de manera independiente a los módulos técnicos.",
      "La coordinadora debe informar a los docentes que la prevención de riesgos es una competencia genérica transversal de obligatoria integración en todos los módulos de la familia profesional, según la Ordenanza correspondiente y el CNC-RD, y que cada docente, independientemente de si imparte teoría o práctica de taller, debe incluir en su Plan de Módulo al menos un Resultado de Aprendizaje y sus criterios de evaluación relacionados con la identificación y control de riesgos propios de su especialidad.",
      "La coordinadora debe trasladar el tema a la Dirección del centro para que sea el director quien, mediante una circular interna, obligue a los docentes a incluir la seguridad como un ítem adicional al final de la planificación, sin modificar los RA ya establecidos por no afectar el tiempo lectivo.",
      "La coordinadora debe gestionar ante la Dirección Regional una capacitación externa de seguridad laboral que certifique a los docentes, pues sin esa certificación los docentes no están en capacidad pedagógica ni legal de abordar ese contenido con sus estudiantes."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Ordenanza 03-2017; familias profesionales CNC-RD; Guía FCT-DETP (sección "Marco disciplinario y de seguridad e higiene"). El modelo curricular de la DETP establece que las competencias genéricas —entre ellas la prevención de riesgos y la seguridad laboral— son transversales a todos los módulos de cada familia profesional. Ningún docente puede desligarse de su responsabilidad pedagógica frente a estas competencias argumentando que "es tarea de otro". La opción A fragmenta lo que el currículo manda integrar. La C convierte en opción normativa lo que sería una acción burocrática insuficiente. La D confunde requisito de certificación con competencia pedagógica; los docentes ya deben estar formados en los estándares de su título.`
  },
 
  {
    id: 3,
    categoria: "Formación en Centros de Trabajo (FCT) — Pasantía",
    pregunta: `Un estudiante de Bachiller Técnico en Mecánica Automotriz está realizando su Módulo de Formación en Centros de Trabajo (FCT) en un taller privado. A mediados del período de pasantía, el tutor empresarial informa al encargado de vinculación del politécnico que el joven "es muy hábil pero no anota nada en su cuaderno de seguimiento, no usa los Equipos de Protección Individual (EPI) cuando se le pide y llega tarde con frecuencia". El encargado de vinculación recibe esta información. Según la Guía para implementar el Módulo de FCT de la DETP y los protocolos de seguimiento establecidos, ¿cuál es la acción correcta e inmediata que debe emprender el encargado de vinculación?`,
    opciones: [
      "El encargado debe esperar al cierre del período de FCT para consignar las observaciones del tutor empresarial en el informe final de evaluación, ya que intervenir antes podría interferir en la autonomía pedagógica de la empresa colaboradora y en la valoración que el tutor está construyendo del estudiante.",
      "El encargado debe notificar de inmediato a los padres o tutores legales del estudiante para que sean ellos quienes corrijan la conducta del joven, eximiendo al centro educativo de mayor responsabilidad sobre lo que ocurre fuera de sus instalaciones.",
      "El encargado de vinculación debe realizar una visita de seguimiento presencial al centro de trabajo, revisar el cuaderno de seguimiento del estudiante, reunirse con el tutor empresarial para documentar las incidencias en la hoja de seguimiento mensual correspondiente, orientar al estudiante sobre sus compromisos actitudinales y técnicos conforme al programa formativo individual acordado, y reportar la situación al docente responsable del módulo para activar un plan de mejora antes del cierre del período.",
      "El encargado debe retirar al estudiante del taller de forma preventiva e iniciarle un expediente disciplinario en el centro educativo, ya que el uso de EPI es una normativa de obligatorio cumplimiento cuya infracción reiterada invalida automáticamente las horas de FCT acumuladas."
    ],
    respuestaCorrecta: 2,
    explicacion: `Base normativa: Guía para Implementar el Módulo de FCT — DETP/MINERD (en coordinación con Fundación Salesiana Don Bosco RD y AECID). La guía establece explícitamente que el encargado de vinculación debe recopilar las hojas de seguimiento mensual, realizar visitas presenciales para dar seguimiento al proceso formativo del estudiante y atender los problemas de aprendizaje y actitud que se presenten. El programa formativo individual es el instrumento que regula los compromisos del estudiante durante la FCT, incluyendo el uso de EPI. La opción A viola el principio de seguimiento continuo. La B transfiere indebidamente la responsabilidad institucional. La D aplica una sanción desproporcionada sin agotar el proceso pedagógico previo establecido en la guía.`
  },
 
  {
    id: 4,
    categoria: "Diseño Curricular por Competencias — Resultados de Aprendizaje",
    pregunta: `La DETP convoca una jornada técnica para revisar los Planes de Módulo de la familia profesional de Informática y Comunicaciones. Un docente presenta su planificación y al ser analizada se detecta que los Resultados de Aprendizaje (RA) redactados comienzan con expresiones como: "El/la docente explicará…", "Se presentará al estudiante…" y "Los contenidos a cubrir son…". El equipo técnico señala que los RA están mal formulados. Según el modelo de diseño curricular por competencias de la DETP alineado al CNC-RD y a las directrices de la Ordenanza 03-2017, ¿cuál es el criterio técnico que justifica el rechazo de esos enunciados y cómo deben estar correctamente redactados?`,
    opciones: [
      "Los RA son rechazados porque están escritos en tercera persona y deben redactarse en primera persona del singular para que el estudiante se identifique con el aprendizaje; la corrección consiste simplemente en cambiar el sujeto gramatical.",
      "Los RA son rechazados porque describen acciones del docente o listan contenidos temáticos, cuando deben centrarse en el desempeño observable y verificable del estudiante; según el modelo de la DETP, un RA bien formulado comienza con un verbo de acción en infinitivo que describe lo que el estudiante será capaz de hacer al finalizar el proceso formativo, en un contexto determinado y con los criterios de calidad especificados.",
      "Los RA son rechazados únicamente por razones de forma; el contenido es correcto porque en la Modalidad Técnico Profesional los Resultados de Aprendizaje son equivalentes a los objetivos instruccionales del docente, por lo que ambos enfoques son válidos y la diferencia es meramente terminológica.",
      "Los RA son rechazados porque en la Modalidad Técnico Profesional los enunciados de los Resultados de Aprendizaje deben extraerse literalmente del Catálogo Nacional de Cualificaciones sin ninguna adaptación contextual por parte del docente del politécnico."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: CNC-RD (modelo de cualificaciones); Ordenanza 03-2017; Metodología de Diseño Curricular ETP-DETP. El paradigma curricular por competencias desplaza el centro del proceso del docente al estudiante. Un RA describe un desempeño esperado y verificable del aprendiz, no una actividad del docente ni un listado de temas. La estructura canónica es: verbo de acción + objeto + condición/contexto + criterio de calidad. La opción A reduce el problema a gramática superficial. La C es falsa: RA y objetivo instruccional son conceptos distintos en el modelo de la DETP. La D niega la adaptación pedagógica, que es parte de la función docente.`
  },
 
  {
    id: 5,
    categoria: "Evaluación Integradora — Proyecto Técnico",
    pregunta: `Al finalizar el segundo semestre, un/a docente de la familia profesional de Hotelería y Turismo propone como evaluación integradora que cada equipo de estudiantes elabore y presente un "Proyecto Técnico de Servicio" en el que planifiquen, ejecuten y evalúen un evento gastronómico simulado para la comunidad educativa. Algunos colegas cuestionan la estrategia, argumentando que "proyectos así no tienen criterios objetivos de calificación y son muy subjetivos". Desde el marco evaluativo de la DETP y los Estándares Profesionales Docentes del MINERD, ¿cuál es la respuesta técnicamente correcta del/a docente que valida el uso del proyecto técnico como instrumento de evaluación integradora?`,
    opciones: [
      "Los colegas tienen razón; el proyecto técnico es una estrategia de aprendizaje válida, pero no puede usarse como instrumento de evaluación sumativa en la Modalidad Técnico Profesional porque no garantiza la estandarización de los resultados ni la comparabilidad entre estudiantes, requisitos indispensables de toda evaluación certificadora.",
      "El proyecto técnico es el instrumento de evaluación integradora por excelencia en la Modalidad Técnico Profesional porque permite valorar de manera simultánea y contextualizada los Resultados de Aprendizaje de las competencias específicas y genéricas; su objetividad se garantiza mediante el diseño previo de una rúbrica analítica con indicadores de logro precisos para cada dimensión del desempeño (planificación, ejecución técnica, trabajo en equipo, atención al cliente, normas de higiene), la cual debe ser socializada con los estudiantes al inicio de la actividad.",
      "El proyecto técnico es válido, pero su subjetividad solo se reduce si es evaluado por un jurado externo compuesto exclusivamente por empresarios del sector, ya que los docentes del propio centro tienen conflicto de interés al calificar a sus propios estudiantes, según los protocolos de evaluación de la DETP.",
      "El proyecto técnico es una excelente estrategia siempre que se combine con una prueba escrita que valga al menos el 60% de la calificación final, garantizando así que el componente teórico tenga mayor peso que el práctico, conforme al sistema de evaluación de la Ordenanza 1-96 que regula la evaluación en el sistema educativo dominicano."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Ordenanza 03-2017; Guía Metodológica ETP-DETP; Estándares Profesionales y de Desempeño Docente (MINERD). El proyecto técnico es coherente con el enfoque de evaluación auténtica que caracteriza a la Modalidad Técnico Profesional, porque permite demostrar competencias integradas en contextos reales o simulados. La objetividad no es incompatible con este instrumento: se logra mediante rúbricas con criterios explícitos y conocidos previamente por el estudiante. La opción A confunde estandarización con evaluación auténtica. La C distorsiona el rol del docente y de la empresa en el proceso evaluativo. La D aplica la ponderación de la Ordenanza 1-96, que corresponde a la educación general y no tiene la misma lógica que el currículo por competencias de la ETP.`
  },
 
  {
    id: 6,
    categoria: "Marco Nacional de Cualificaciones — Articulación Institucional",
    pregunta: `Durante una visita técnica de la DETP a un politécnico de la Regional 06, el equipo evaluador detecta que el director del centro ha firmado un convenio de pasantía con una empresa del sector de la construcción, pero el programa formativo individual que se entrega a los estudiantes solo describe las tareas del taller sin hacer referencia explícita a los niveles de cualificación del Catálogo Nacional de Cualificaciones (CNC-RD) ni a los Resultados de Aprendizaje de los módulos correspondientes. El director argumenta que "el CNC es un instrumento del INFOTEP, no del MINERD". ¿Cuál es la posición técnicamente correcta del equipo de la DETP frente a esta afirmación?`,
    opciones: [
      "El director tiene razón en que el CNC es un instrumento exclusivo del INFOTEP; sin embargo, los politécnicos del MINERD deben adoptar sus propios perfiles de egreso sin necesidad de alinearse a ese catálogo, ya que la Ley 66-97 otorga autonomía curricular a la Dirección de ETP para definir sus estándares de manera independiente.",
      "La afirmación del director es incorrecta; el CNC-RD es el instrumento del Sistema Nacional de Cualificaciones que articula a MINERD, MESCyT, INFOTEP y el sector productivo mediante el Decreto 173-16, y sus perfiles profesionales por niveles (1 al 4 para la FTP) son la referencia obligatoria para el diseño curricular de la Modalidad Técnico Profesional del MINERD, razón por la cual los programas formativos individuales de la FCT deben vincular explícitamente las actividades del puesto de trabajo con los RA y los niveles de cualificación correspondientes.",
      "El CNC es efectivamente un instrumento del INFOTEP, pero la DETP puede adoptar sus descriptores de manera voluntaria; el equipo evaluador no puede exigir su uso porque eso excede el mandato de la visita técnica, cuyo ámbito se limita a verificar la infraestructura y la matrícula del centro.",
      "El director tiene parcialmente la razón; el CNC aplica solo a los módulos de la FCT (pasantía), no a los módulos de formación impartidos en el politécnico, ya que estos últimos se rigen exclusivamente por las Ordenanzas de familia profesional emitidas por el Consejo Nacional de Educación."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Decreto 173-16 (crea la Comisión Tripartita del MNC, integrada por MINERD, MESCyT, Ministerio de Trabajo, Economía y el INFOTEP); CNC-RD; Ordenanza 03-2017. El Sistema Nacional de Cualificaciones es interinstitucional por mandato del Decreto 173-16: ninguna institución es propietaria exclusiva del CNC. El MINERD, a través de la DETP, es codiseñador del catálogo y sus títulos de Bachiller Técnico deben corresponder a los perfiles de niveles 3-4 del CNC. La opción A crea una autonomía que contradice el decreto. La C reduce el rol de la visita técnica. La D fragmenta incorrectamente el alcance del CNC.`
  },
 
  {
    id: 7,
    categoria: "Saber Ser — Ética Profesional en el Taller",
    pregunta: `Un/a estudiante de Técnico en Refrigeración y Climatización detecta que su compañero manipula un cilindro de gas refrigerante sin los guantes y las gafas protectoras reglamentarias, argumentando que "así es más rápido y yo sé lo que hago". El/la docente observa la situación desde el otro extremo del taller. Desde el enfoque de competencias del CNC-RD y del "Saber Ser" como dimensión evaluable en la Modalidad Técnico Profesional, ¿qué acción del/a docente refleja mejor la integración de la seguridad como competencia genérica transversal y no como simple imposición disciplinaria?`,
    opciones: [
      "El/la docente debe interrumpir la actividad de todo el grupo, llamar al estudiante infractor al frente y aplicar una amonestación oral pública para que el resto del grupo entienda que las normas de seguridad no son negociables, priorizando el efecto disuasorio sobre el grupo por encima de la reflexión individual.",
      "El/la docente debe anotar el incidente en el registro disciplinario del estudiante y comunicarlo a la dirección para que se aplique la consecuencia establecida en el reglamento interno, ya que el rol pedagógico del docente de taller se limita a la enseñanza técnica y la disciplina corresponde a la gestión administrativa.",
      "El/la docente debe detener la actividad del estudiante de manera inmediata por razón de seguridad, luego aprovechar el momento como una situación de aprendizaje auténtica: plantear al grupo una reflexión sobre los riesgos de exposición a gases refrigerantes, relacionar la situación con los criterios de evaluación del Saber Ser del módulo correspondiente, y registrar la observación en la rúbrica de seguimiento actitudinal, garantizando que el uso correcto de los EPI sea una competencia evaluada y no solo exigida verbalmente.",
      "El/la docente debe ignorar el incidente en ese momento para no interrumpir el flujo de la práctica y abordarlo en la próxima clase teórica, presentándolo como un caso hipotético anónimo para evitar que el estudiante se sienta señalado, lo que favorece un clima de aula más empático y libre de estigmas."
    ],
    respuestaCorrecta: 2,
    explicacion: `Base normativa: CNC-RD (competencias genéricas transversales: seguridad laboral); Guía FCT-DETP; Estándares Profesionales Docentes (MINERD). La seguridad laboral en los talleres es una competencia evaluable del "Saber Ser", no solo una regla disciplinaria. El/la docente eficaz transforma el incidente en una oportunidad de aprendizaje contextualizado, conecta la realidad con los RA del módulo y evidencia la evaluación mediante registros sistemáticos (rúbrica actitudinal). La opción A privilegia la sanción colectiva sobre el aprendizaje. La B delega pedagógicamente lo que es responsabilidad del docente. La D pospone la intervención de seguridad, lo cual es inaceptable ante un riesgo real e inmediato.`
  },
 
  {
    id: 8,
    categoria: "Vinculación Empresa-Escuela y Rol del Tutor Empresarial",
    pregunta: `Un politécnico de la familia profesional de Agropecuaria inicia el proceso de búsqueda de empresas colaboradoras para el Módulo de FCT. El director del centro contacta a varias fincas de la zona, pero un empresario le dice que participará "solo si el estudiante trabaja en producción desde el primer día sin que el docente venga a supervisar, porque eso interrumpe el trabajo de la finca". Según la Guía FCT-DETP y el marco de responsabilidades establecido, ¿cuál es la respuesta institucional correcta del director ante esta propuesta?`,
    opciones: [
      "El director debe aceptar las condiciones del empresario porque la inserción laboral temprana es el objetivo principal de la FCT y la presencia del docente supervisor puede intimidar al estudiante e interferir en su adaptación al entorno productivo real.",
      "El director debe negociar con el empresario que el convenio de colaboración se firme bajo las condiciones establecidas en el Marco FCT de la DETP, que incluyen obligatoriamente: la designación de un tutor empresarial, la autorización de acceso al encargado de vinculación para realizar visitas de seguimiento, la sujeción del plan de actividades al programa formativo individual acordado previamente, y el respeto al marco disciplinario y de seguridad e higiene; si el empresario no acepta estas condiciones, el centro no puede formalizar el convenio.",
      "El director puede aceptar las condiciones del empresario si el Encargado de Vinculación realiza las supervisiones de manera virtual (por videollamada) en lugar de presencial, adaptando el protocolo de seguimiento a la realidad operativa de la empresa colaboradora sin que esto invalide el convenio.",
      "El director debe aceptar la propuesta del empresario y compensar la ausencia de supervisión presencial solicitando al estudiante que lleve un diario personal de actividades, el cual sustituirá las visitas del encargado de vinculación y será la única evidencia evaluativa del módulo FCT."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Guía para Implementar el Módulo de FCT — DETP/MINERD. La guía establece con precisión los compromisos que asume la empresa al firmar el convenio: debe permitir el acceso del tutor del centro educativo y del encargado de vinculación para dar seguimiento, facilitar el equipamiento necesario para el aprendizaje, y sujetarse al programa formativo individual. Una empresa que prohíbe la supervisión externa no cumple con las condiciones mínimas del convenio y no puede ser sede formativa. La supervisión es garantía del proceso formativo, no una intromisión. Las opciones A, C y D comprometen la integridad pedagógica y la protección del estudiante durante la FCT.`
  },
 
  {
    id: 9,
    categoria: "Estándares Profesionales Docentes — Planificación",
    pregunta: `Al revisar los Planes de Módulo de un/a docente de la familia profesional de Electrónica Industrial, el equipo técnico de la DETP constata que el/la docente planifica las actividades de aprendizaje pensando únicamente en la secuencia de contenidos del libro de texto, sin hacer referencia explícita a los Resultados de Aprendizaje de la Ordenanza de su familia profesional, sin establecer criterios de evaluación observables y sin indicar los recursos materiales necesarios para el trabajo de taller. El/la docente argumenta que "la planificación detallada no es necesaria porque yo sé lo que enseño y adapto la clase según el grupo". Desde los Estándares Profesionales y de Desempeño del MINERD y del modelo pedagógico de la ETP, ¿cuál es la valoración correcta de este argumento?`,
    opciones: [
      "El argumento del/la docente es válido porque la experiencia pedagógica sustituye la planificación formal; los Estándares Profesionales reconocen la autonomía del docente experimentado para gestionar su práctica sin necesidad de documentos adicionales, siempre que los resultados de aprendizaje de los estudiantes sean satisfactorios.",
      "El argumento del/la docente es parcialmente válido; la adaptación al grupo es deseable, pero en la Modalidad Técnico Profesional, la planificación debe ser detallada y alineada a los RA porque: (i) garantiza la coherencia entre lo que se enseña, lo que se evalúa y lo que demanda el perfil profesional del CNC-RD; (ii) permite al equipo técnico verificar la pertinencia pedagógica; (iii) es el instrumento que organiza el uso del taller, los materiales e insumos, protegiendo la seguridad y la gestión eficiente del espacio formativo.",
      "El argumento es válido porque la Ley 66-97 garantiza la libertad de cátedra del docente, lo que implica que nadie puede obligarle a seguir un formato específico de planificación siempre que cumpla con el tiempo estipulado en el horario de su asignación.",
      "El argumento es válido únicamente para docentes con más de 10 años de experiencia en la familia profesional, quienes tienen derecho a planificar de manera simplificada según el Estatuto Docente; los docentes con menos antigüedad sí están obligados a seguir el formato completo de Plan de Módulo."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Estándares Profesionales y de Desempeño para la Certificación y Desarrollo de la Carrera Docente (MINERD); Ordenanza 03-2017; CNC-RD. La planificación detallada no es burocracia: es la columna vertebral del proceso de formación por competencias. En la ETP, el Plan de Módulo cumple funciones pedagógicas insustituibles: alinea los RA con las actividades, los recursos y los criterios de evaluación; organiza el uso de los talleres, herramientas e insumos (muchos de ellos peligrosos si se usan sin planificación previa); y es el instrumento que permite la supervisión técnica. La libertad de cátedra (opción C) no exime al docente de cumplir con el marco curricular aprobado por el Consejo Nacional de Educación. La D introduce una distinción inexistente en el Estatuto Docente.`
  },
 
  {
    id: 10,
    categoria: "Higiene y Seguridad Laboral en Talleres Educativos",
    pregunta: `En un politécnico con taller de Mecánica Industrial, el/la docente solicita a los estudiantes que realicen una práctica de torneado sin haber completado previamente la inducción de seguridad del equipo, argumentando que "la inducción es solo para el primer día del año y ya pasó". Un estudiante sufre una lesión leve al no sujetar correctamente la pieza metálica. El director del centro recibe el reporte del incidente. Desde el marco de responsabilidades pedagógicas y administrativas en la Modalidad Técnico Profesional, ¿cuál es el proceder institucional correcto e integral?`,
    opciones: [
      "El director debe registrar el incidente como un accidente doméstico menor, enviar al estudiante a la enfermería del centro y retomar las actividades con normalidad, ya que las lesiones leves en taller son estadísticamente esperables en el proceso de aprendizaje técnico y no requieren mayor protocolo.",
      "El director debe documentar el incidente en el libro de novedades del centro, activar el protocolo de atención médica correspondiente, notificar a los padres o tutores del estudiante lesionado, y convocar a una revisión inmediata del protocolo de seguridad del taller con el/la docente involucrado/a, dejando constancia escrita de que la inducción de seguridad es obligatoria antes de cada práctica con equipos de riesgo, independientemente de si ya se realizó una inducción general al inicio del año, y reportar el hecho al nivel de gestión correspondiente (distrito o regional).",
      "La responsabilidad recae exclusivamente en el estudiante porque este conocía las normas de seguridad desde la inducción general del primer día; el director solo debe requerir al docente que recuerde verbalmente las normas en la próxima clase, sin necesidad de documentar el incidente para no afectar la imagen del centro ante la comunidad educativa.",
      "El director debe suspender indefinidamente las prácticas de torneado hasta tanto el MINERD envíe un inspector de seguridad laboral que certifique el taller, ya que ningún docente puede impartir prácticas con equipos de riesgo sin una certificación técnica externa anual de las instalaciones."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Manual Operativo de Centro Educativo Público (MINERD) — Protocolo de Actuación en Situaciones de Emergencia; Guía FCT-DETP (marco de seguridad e higiene); Ley 136-03 (protección del menor). El incidente en taller activa múltiples obligaciones: atención médica inmediata, notificación a la familia, documentación formal, y revisión del protocolo pedagógico que lo ocasionó. La inducción de seguridad no es un evento anual único: en la ETP se renueva o refuerza antes de cada tipo de práctica de riesgo. La opción A trivializa una situación que tiene implicaciones legales y pedagógicas. La C transfiere indebidamente la culpa al estudiante. La D aplica una medida paralizante desproporcionada que no está contemplada en los protocolos institucionales.`
  },
 
  {
    id: 11,
    categoria: "Evaluación de los Aprendizajes — Retroalimentación Formativa",
    pregunta: `Un/a docente de Diseño Gráfico de un politécnico devuelve los proyectos técnicos de sus estudiantes con una única marca: "Aprobado" o "No aprobado", sin ninguna observación escrita ni indicación sobre qué aspectos deben mejorar. Cuando un estudiante pregunta "¿qué debo corregir?", el docente responde: "Revísalo todo, algo tiene que estar mal". Desde los Estándares Profesionales Docentes del MINERD (EDD-2025) y el modelo pedagógico del currículo por competencias de la DETP, ¿cuál es la competencia docente que este/a docente está dejando de ejercer y cuál sería la práctica correcta?`,
    opciones: [
      "El/la docente está dejando de ejercer la competencia de gestión del tiempo, porque si tuviera una mejor distribución de su carga horaria podría escribir comentarios en cada proyecto; la solución es que la dirección le reduzca la cantidad de grupos a cargo.",
      "El/la docente está dejando de ejercer la competencia de retroalimentación formativa y orientación al aprendizaje: según los Estándares Profesionales del MINERD, el docente debe proveer información precisa, oportuna y específica sobre el desempeño del estudiante, señalando tanto las fortalezas como las áreas de mejora con referencia explícita a los criterios de evaluación del módulo, de manera que el estudiante pueda autorregular su proceso y avanzar en el logro de los RA.",
      "El/la docente está dejando de ejercer la competencia de planificación curricular, porque si hubiera redactado correctamente los criterios de evaluación en su Plan de Módulo, los estudiantes ya sabrían qué corregir sin necesidad de recibir retroalimentación escrita individualizada.",
      "El/la docente está cumpliendo correctamente con sus funciones: en la Modalidad Técnico Profesional, la retroalimentación oral durante la práctica de taller es suficiente; la retroalimentación escrita detallada corresponde exclusivamente a las materias del área de formación general, no a los módulos técnicos."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Estándares Profesionales y de Desempeño para la Certificación y Desarrollo de la Carrera Docente (MINERD); Instructivo ERP EDD-2025 (Etapa V). La retroalimentación formativa es una competencia explícita en los Estándares Profesionales del MINERD: el docente debe orientar al estudiante sobre su proceso de aprendizaje de manera específica y continua. "Revísalo todo" no es retroalimentación: es la ausencia de ella. En el currículo por competencias, el estudiante necesita saber exactamente qué criterios no cumplió para poder mejorar. La opción A identifica un problema de gestión que puede coexistir pero no sustituye la responsabilidad pedagógica. La C confunde planificación con retroalimentación. La D establece una distinción inexistente entre materias generales y módulos técnicos en lo que respecta a la obligación de retroalimentar.`
  },
 
  {
    id: 12,
    categoria: "Gestión del Taller — Recursos y Materiales Técnicos",
    pregunta: `El/la docente encargado/a del taller de Confección Industrial de un politécnico detecta que varios equipos de costura industrial presentan fallas de mantenimiento que generan riesgos para los estudiantes. Solicita al director del centro que se realice el mantenimiento preventivo, pero el director argumenta que "el presupuesto para eso está agotado y hay que esperar el próximo año fiscal". El/la docente continúa usando los equipos con fallas por no interrumpir el programa. Desde la perspectiva del marco de responsabilidades de la DETP y los protocolos de seguridad en talleres educativos, ¿cuál es la acción correcta del/a docente?`,
    opciones: [
      "El/la docente actúa correctamente al continuar usando los equipos, ya que el director es la máxima autoridad del centro y su decisión debe respetarse; el docente no tiene atribuciones para suspender el uso de equipos sin autorización de la dirección.",
      "El/la docente debe suspender el uso de los equipos con fallas de forma inmediata, documentar por escrito el estado de los equipos y el riesgo identificado, notificar formalmente a la dirección del centro dejando constancia escrita de la solicitud de mantenimiento, y escalar la situación al Técnico Docente del Distrito si la dirección no actúa, dado que permitir que los estudiantes usen equipos con riesgos conocidos constituye una falta a los deberes de protección establecidos en la Ley 136-03 y en los protocolos de seguridad de la DETP.",
      "El/la docente debe adaptar las actividades prácticas para que los estudiantes solo observen la operación de los equipos defectuosos sin manipularlos directamente, lo que elimina el riesgo sin necesidad de escalar el problema ni afectar el cronograma de enseñanza.",
      "El/la docente debe gestionar de manera informal el mantenimiento de los equipos con algún técnico de la comunidad, sin reportarlo oficialmente para no crear conflictos con la dirección, siempre que el resultado sea que los equipos queden en condiciones operativas antes de la próxima práctica."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Guía FCT-DETP (marco de seguridad); Manual Operativo de Centro Educativo Público (MINERD); Ley 136-03. Un docente de taller tiene la responsabilidad pedagógica y ética de no exponer a los estudiantes a riesgos conocidos. La restricción presupuestaria del director no suspende las obligaciones de seguridad. El protocolo correcto es: suspender el uso del equipo, documentar el riesgo por escrito, notificar formalmente y escalar si no hay respuesta. La opción A subordina la seguridad a la jerarquía administrativa. La C es insuficiente: "observar sin manipular" no elimina todos los riesgos y no resuelve el problema. La D viola los protocolos de gestión institucional y puede generar responsabilidad legal.`
  },
 
  {
    id: 13,
    categoria: "Articulación Curricular ETP — Saber, Saber Hacer, Saber Ser",
    pregunta: `Un/a Inspector/a Técnico/a de la DETP visita un politécnico y, al revisar la planificación de un módulo de Instalaciones Sanitarias, observa que el/la docente dedica el 90% del tiempo al "Saber" (teoría: tipos de tuberías, cálculo de caudal, normativa sanitaria) y solo el 10% al "Saber Hacer" (práctica de ensamblaje en taller). Al ser consultado/a, el/la docente responde que "primero hay que conocer bien la teoría antes de tocar las herramientas". Desde el modelo pedagógico del currículo por competencias de la DETP y los principios de la metodología de enseñanza técnica, ¿qué señalamiento técnico debe hacer el/a inspector/a?`,
    opciones: [
      "El/la inspector/a debe validar la secuencia del docente, ya que el principio pedagógico de ir de lo simple a lo complejo requiere que el conocimiento teórico preceda siempre a la práctica; la proporción 90/10 es una decisión metodológica legítima que responde a la autonomía pedagógica del docente.",
      "El/la inspector/a debe señalar que la distribución es desequilibrada y no responde al modelo de formación por competencias de la DETP, que exige la integración progresiva y continua del Saber, el Saber Hacer y el Saber Ser desde el inicio del módulo; la teoría debe contextualizarse mediante la práctica y no puede precederla de manera tan desproporcionada, porque el aprendizaje significativo y duradero en la ETP ocurre cuando el estudiante comprende el por qué de un procedimiento en el mismo momento en que lo ejecuta.",
      "El/la inspector/a debe señalar que la distribución debería ser exactamente 33%-33%-33% entre Saber, Saber Hacer y Saber Ser, ya que el modelo pedagógico por competencias exige una proporción matemáticamente igualitaria entre las tres dimensiones del aprendizaje en todo momento del proceso formativo.",
      "El/la inspector/a solo puede hacer observaciones sobre la infraestructura del taller y la seguridad de los equipos; la distribución del tiempo entre teoría y práctica es una decisión exclusivamente pedagógica del docente y no puede ser cuestionada en una visita de inspección técnica."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Metodología de Diseño Curricular ETP-DETP; Ordenanza 03-2017; Modelo Pedagógico ETP (aprendizaje significativo y funcionalidad). El currículo por competencias de la DETP integra los tres saberes de manera continua: no hay una etapa teórica pura seguida de una etapa práctica pura. La práctica contextualiza y da sentido a la teoría desde el primer día. Una distribución 90/10 rompe este principio y reduce la competencia a conocimiento declarativo. La opción A confunde "lo simple a lo complejo" con "toda la teoría antes de toda la práctica". La C es una reducción mecánica que no existe en ningún documento normativo. La D limita incorrectamente el alcance de la función inspectora técnico-pedagógica.`
  },
 
  {
    id: 14,
    categoria: "Tutoría y Acompañamiento en FCT",
    pregunta: `Una estudiante de Técnica en Enfermería de un politécnico informa a su docente-tutor/a que en la empresa de FCT donde realiza su pasantía (una clínica privada) el tutor empresarial le está asignando tareas administrativas de archivo y limpieza de archivos físicos durante todo el día, sin permitirle observar ni participar en ningún procedimiento clínico. La estudiante señala que esto lleva tres semanas y que siente que "no está aprendiendo nada de lo que debe". Según la Guía FCT-DETP y el modelo de seguimiento del módulo, ¿cuál es la obligación del docente-tutor/a del centro educativo?`,
    opciones: [
      "El docente-tutor/a debe decirle a la estudiante que acepte las tareas asignadas porque la empresa tiene derecho a usar a los pasantes según sus necesidades operativas; la FCT implica también aprender a adaptarse a la cultura empresarial, aunque eso incluya tareas no directamente relacionadas con el perfil técnico.",
      "El docente-tutor/a debe realizar de inmediato una visita de seguimiento a la clínica, revisar el programa formativo individual con el tutor empresarial, constatar que las actividades asignadas no corresponden a los RA del módulo de FCT, y renegociar el plan de actividades con la empresa para que se adecúe al perfil formativo acordado en el convenio; si la empresa no corrige la situación, el docente debe evaluar el traslado de la estudiante a otra sede formativa que sí cumpla con las condiciones del convenio.",
      "El docente-tutor/a debe esperar el cierre del período de FCT para hacer constar en el informe final que la empresa no cumplió con el programa formativo, lo que resultará en la calificación automática de No Apto para la estudiante, ya que no completó las actividades técnicas requeridas.",
      "El docente-tutor/a debe orientar a la estudiante para que ella misma le solicite directamente al médico jefe de la clínica que le asigne actividades clínicas, ya que el docente no puede intervenir en las decisiones internas de la empresa colaboradora sin arriesgar el convenio institucional."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Guía para Implementar el Módulo de FCT — DETP/MINERD. La FCT es un módulo formativo regulado por un convenio y un programa formativo individual. Las actividades del estudiante deben responder a los RA del módulo. Si una empresa desvía al pasante hacia tareas ajenas a su perfil, el docente-tutor/a tiene la obligación activa de intervenir, primero mediante diálogo con el tutor empresarial, y luego, si es necesario, trasladando al estudiante. La opción A convierte la explotación formativa en pedagogía de la adaptación. La C castiga a la estudiante por la falta de la empresa. La D delega en la estudiante una responsabilidad institucional del docente.`
  },
 
  {
    id: 15,
    categoria: "Certificación de Competencias y Perfil de Egreso",
    pregunta: `Al finalizar el ciclo, el politécnico debe emitir la certificación de los estudiantes que han completado el Bachiller Técnico en Tecnología de Alimentos. El director del centro propone que todos los estudiantes que hayan aprobado el 70% de los módulos reciban el título automáticamente, sin necesidad de una evaluación integradora final, argumentando que "los módulos ya evalúan todo lo que necesitan saber". Desde la perspectiva del modelo de certificación de la ETP-DETP y el CNC-RD, ¿cuál es el problema técnico-normativo de esa propuesta?`,
    opciones: [
      "La propuesta del director es correcta; el sistema modular de la ETP establece que la suma de las aprobaciones parciales equivale a la competencia total del perfil profesional, por lo que una evaluación integradora final sería redundante y generaría carga administrativa innecesaria.",
      "La propuesta omite que el perfil profesional del CNC-RD y la Ordenanza de la familia profesional correspondiente exigen que la certificación del título de Bachiller Técnico acredite la competencia integrada del egresado, lo que requiere una evaluación final que verifique la capacidad del estudiante de movilizar de manera articulada todos los saberes adquiridos en los módulos ante situaciones reales o simuladas del contexto laboral; aprobar módulos de forma aislada no garantiza automáticamente esa integración.",
      "La propuesta es correcta porque el 70% de aprobación modular es el umbral establecido por la Ordenanza 1-96, que rige la promoción en todo el sistema educativo dominicano sin distinción de modalidad.",
      "La propuesta es correcta en términos pedagógicos, pero incorrecta en términos administrativos, ya que la certificación del título de Bachiller Técnico requiere únicamente que el director del centro envíe el acta de calificaciones a la Regional de Educación, independientemente de si existió o no una evaluación integradora."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: CNC-RD (modelo de cualificación: perfil profesional integrado); Ordenanza 03-2017; Metodología ETP-DETP. El currículo por competencias distingue entre la aprobación de módulos (saberes parciales) y la competencia integrada que debe demostrar el egresado del perfil profesional completo. La evaluación integradora verifica si el estudiante puede articular los conocimientos, habilidades y actitudes de varios módulos ante una situación laboral real o simulada. Sin esa verificación, la certificación no garantiza el nivel de cualificación que establece el CNC-RD. La opción A confunde sumatoria de aprobaciones con competencia integrada. La C aplica erróneamente la Ordenanza 1-96 (educación general) a la ETP. La D reduce la certificación a un trámite administrativo.`
  },
 
  {
    id: 16,
    categoria: "Competencias Genéricas — Comunicación y Trabajo en Equipo",
    pregunta: `Al diseñar la evaluación de un módulo de Construcción de Obras Civiles, el/la docente incluye exclusivamente pruebas individuales de desempeño técnico. El equipo de la DETP le sugiere que incorpore también una actividad grupal evaluada. El/la docente objeta: "En obra siempre se trabaja solo en el puesto asignado; el trabajo en equipo no es relevante para este perfil profesional". Desde el CNC-RD y las competencias genéricas transversales de la Modalidad Técnico Profesional, ¿cómo se debe responder a esta objeción?`,
    opciones: [
      "La objeción del docente es válida; el CNC-RD diferencia entre competencias específicas (técnicas) y competencias genéricas, y estas últimas solo son obligatorias en familias profesionales de servicios (turismo, salud, informática), no en familias de producción y construcción.",
      "La objeción es incorrecta; el CNC-RD establece que las competencias genéricas —entre ellas el trabajo en equipo, la comunicación técnica y la resolución colaborativa de problemas— son transversales a todas las familias profesionales y niveles de cualificación, porque responden a las demandas reales del mercado laboral donde los trabajadores de la construcción deben coordinarse con otros oficios, interpretar indicaciones del jefe de obra, comunicar irregularidades y tomar decisiones colaborativas en contexto de riesgo.",
      "La objeción es parcialmente válida; el trabajo en equipo es una competencia genérica transversal, pero en la familia profesional de construcción puede sustituirse por la competencia de autonomía operativa, que tiene mayor relevancia práctica según las ordenanzas específicas de esa familia profesional.",
      "La objeción del docente es válida desde el punto de vista técnico, pero inválida desde el punto de vista administrativo, ya que el MINERD obliga a incluir al menos una actividad grupal por período sin importar la pertinencia pedagógica, como requisito formal de los informes de evaluación del centro."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: CNC-RD (estructura de cualificaciones: competencias específicas + competencias genéricas transversales); Ordenanza 03-2017; Guía FCT-DETP. El modelo del CNC-RD establece explícitamente que todas las cualificaciones —sin excepción por familia profesional— incluyen competencias genéricas que reflejan las demandas transversales del mundo laboral. En el sector de la construcción, la coordinación entre cuadrillas, la comunicación de riesgos y el trabajo bajo dirección son competencias genéricas críticas. La opción A crea una distinción inexistente en el CNC-RD. La C inventa una "competencia de autonomía operativa" que sustituiría al trabajo en equipo. La D convierte un requisito pedagógico en una imposición administrativa vacía.`
  },
 
  {
    id: 17,
    categoria: "Rol del Docente ETP — Perfil y Funciones",
    pregunta: `Un docente de Mecatrónica recién incorporado al politécnico tiene una sólida formación técnica como ingeniero industrial, pero durante las observaciones de aula se detecta que sus clases son exclusivamente expositivas: él habla y los estudiantes escuchan. No usa instrumentos de evaluación escritos, no diseña actividades de aprendizaje diferenciadas, y cuando los estudiantes tienen dificultades, les dice que "si no entienden, estudien más". El director le sugiere participar en una capacitación de la DETP sobre metodologías activas. El docente responde: "Yo soy ingeniero, no pedagogo; mi trabajo es enseñar la técnica, no hacer dinámicas". Desde los Estándares Profesionales Docentes del MINERD y el perfil del docente de ETP, ¿cómo debe orientar el director esta situación?`,
    opciones: [
      "El director debe respetar la posición del docente porque la formación técnica en la Modalidad Técnico Profesional prioriza el dominio del saber técnico sobre las habilidades pedagógicas; los conocimientos de ingeniería del docente son más valiosos para los estudiantes que las metodologías activas.",
      "El director debe comunicarle al docente que en el MINERD, los Estándares Profesionales establecen que todo docente del sistema educativo —incluyendo los de la Modalidad Técnico Profesional— debe dominar tanto el saber disciplinar como el saber pedagógico, pues la competencia docente no es la suma de ambos sino su integración; un docente que solo transmite saber técnico sin diseñar situaciones de aprendizaje activas, sin evaluar de manera formativa y sin atender las dificultades de los estudiantes, no está ejerciendo la función docente completa que el perfil y los estándares demandan.",
      "El director debe trasladar al docente a funciones de apoyo técnico del taller (mantenimiento y preparación de equipos) y contratar un pedagogo que se ocupe de la parte metodológica, ya que la separación de roles técnico/pedagógico es más eficiente para el politécnico.",
      "El director debe esperar los resultados de la EDD-2025 del docente antes de tomar cualquier acción; si la evaluación resulta desfavorable, el MINERD definirá el plan de mejora correspondiente y el centro no tiene atribuciones para intervenir antes de ese proceso."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Estándares Profesionales y de Desempeño para la Certificación y Desarrollo de la Carrera Docente (MINERD); Instructivo ERP EDD-2025 (Etapa V — la ERP valora aplicación de conocimientos, habilidades, actitudes y valores en situaciones reales de la función docente). El docente de ETP debe articular el saber técnico con el saber pedagógico: diseñar situaciones de aprendizaje, aplicar metodologías activas, evaluar con instrumentos apropiados y acompañar a los estudiantes con dificultades. Los Estándares Profesionales del MINERD son explícitos en esto. La opción A separa el saber técnico del pedagógico, lo cual contradice el perfil del docente ETP. La C fragmenta roles que deben estar integrados. La D convierte la pasividad del director en un procedimiento institucional válido.`
  },
 
  {
    id: 18,
    categoria: "Evaluación Diagnóstica y Atención a la Diversidad",
    pregunta: `Al inicio del módulo de Automatización Industrial, el/la docente aplica una evaluación diagnóstica y encuentra que el grupo presenta niveles muy heterogéneos: algunos estudiantes tienen experiencia previa en electricidad básica (FCT en empresas del sector), mientras otros no han manipulado nunca un tablero eléctrico. El/la docente decide impartir el módulo de la misma manera para todos porque "el programa es el programa y no puedo hacer diferentes clases para diferentes niveles, eso no es posible con 35 estudiantes". Desde los principios del currículo de la DETP y los Estándares Profesionales del MINERD, ¿qué debería hacer correctamente el/la docente con los resultados de la evaluación diagnóstica?`,
    opciones: [
      "El/la docente actúa correctamente; la evaluación diagnóstica es un instrumento informativo y su resultado no obliga pedagógicamente a ninguna adecuación; su uso es indicativo para que el docente tenga contexto del grupo, no prescriptivo sobre cómo debe planificar.",
      "Los resultados de la evaluación diagnóstica deben utilizarse para ajustar la planificación del módulo, diferenciando las actividades de aprendizaje según los niveles de entrada detectados: diseñar actividades de nivelación o refuerzo para los estudiantes sin experiencia previa, y actividades de profundización o aplicación para quienes ya tienen conocimientos previos, utilizando el trabajo en equipo heterogéneo como estrategia de aprendizaje colaborativo que aproveche pedagógicamente la diversidad del grupo, en lugar de homogenizarla.",
      "El/la docente debe recomendar a los estudiantes sin experiencia previa que tomen un curso de nivelación de electricidad básica en el INFOTEP antes de continuar con el módulo, ya que el politécnico no tiene la obligación de nivelar conocimientos que debieron adquirirse en ciclos anteriores.",
      "El/la docente debe reportar al director que el grupo tiene estudiantes que no cumplen con los prerrequisitos del módulo y solicitar que sean reubicados en un grupo de nivel inferior, ya que la heterogeneidad dificulta el cumplimiento del programa y afecta la calidad del aprendizaje de los estudiantes más avanzados."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Diseño Curricular Modalidad Técnico Profesional (MINERD, adecuación curricular: funcionalidad del aprendizaje, atención a la diversidad); Estándares Profesionales Docentes. La evaluación diagnóstica tiene una función pedagógica activa: informar la planificación y la diferenciación de estrategias. El currículo dominicano (incluida la adecuación curricular de la ETP) asume la heterogeneidad como realidad a atender, no a eliminar. El trabajo en equipos heterogéneos es una estrategia validada pedagógicamente que convierte la diversidad en recurso de aprendizaje. La opción A convierte la diagnóstica en un ritual vacío. La C externaliza la responsabilidad del centro. La D aplica una solución burocrática que viola el principio de inclusión educativa.`
  },
 
  {
    id: 19,
    categoria: "Ordenanza 03-2017 — Marco Curricular ETP",
    pregunta: `Un grupo de directores de politécnicos solicita al técnico docente del distrito una aclaración sobre la diferencia entre el título de "Técnico Básico" y el de "Bachiller Técnico" que otorga el MINERD en la Modalidad Técnico Profesional. Uno de los directores sostiene que "son lo mismo pero con diferente nombre, y cualquier familia profesional puede ofrecer cualquiera de los dos títulos indistintamente". Desde la Ordenanza 03-2017 y el catálogo de títulos de la ETP establecido por el Consejo Nacional de Educación, ¿cuál es la aclaración técnicamente correcta?`,
    opciones: [
      "El director tiene razón; ambos títulos son equivalentes en términos de competencias laborales; la diferencia es solo la duración del programa: el Técnico Básico es más corto y el Bachiller Técnico más largo, pero ambos otorgan el mismo nivel de cualificación en el mercado laboral.",
      "Son títulos distintos en duración, nivel de cualificación y efectos académicos: el Técnico Básico corresponde a un nivel de cualificación inferior, tiene menor carga horaria y sus efectos académicos son principalmente laborales; el Bachiller Técnico corresponde a un nivel superior, incluye la acreditación del bachillerato y habilita para continuar estudios superiores. No todas las familias profesionales ofrecen ambos títulos: la Ordenanza 03-2017 estableció para cada familia profesional cuáles títulos corresponden, según el catálogo de 52 Bachilleres Técnicos y 23 Técnicos Básicos aprobados por el Consejo Nacional de Educación.",
      "La diferencia es únicamente administrativa: el Técnico Básico se obtiene aprobando el primer ciclo del programa y el Bachiller Técnico al completar el segundo ciclo; ambos pertenecen a la misma estructura curricular continua y cualquier familia profesional puede ofrecer ambos de manera automática sin necesidad de autorización adicional.",
      "La diferencia entre ambos títulos fue eliminada por la adecuación curricular de 2025, que unificó todos los programas de la ETP en un único título de Bachiller Técnico para simplificar la estructura de certificación y facilitar el reconocimiento de las cualificaciones en el mercado laboral dominicano."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Ordenanza 03-2017 (Directrices de la ETP); catálogo de títulos ETP-MINERD (52 Bachilleres Técnicos + 23 Técnicos Básicos aprobados por el Consejo Nacional de Educación). La Ordenanza 03-2017, con sus 17 ordenanzas de familia profesional, definió qué títulos corresponden a cada familia con base en el perfil de complejidad de las competencias y las necesidades del sector productivo. No es intercambiable ni automático. La opción A borra diferencias de nivel de cualificación reales y reconocidas. La C mezcla progresión curricular con estructura de títulos. La D es falsa: ninguna adecuación curricular de 2025 unificó los títulos; ese catálogo dual sigue vigente.`
  },
 
  {
    id: 20,
    categoria: "Integración Teoría-Práctica y Aprendizaje Significativo",
    pregunta: `El equipo técnico de la DETP realiza una evaluación del desempeño docente a través de la observación de clase en un politécnico de la familia profesional de Salud y Bienestar. El/la docente evaluado/a imparte el módulo "Atención de Urgencias Básicas". Durante la clase observada, el/la docente presenta casos clínicos simulados de diferente complejidad, solicita a los estudiantes que trabajen en equipo para diagnosticar, priorizar y proponer la intervención correspondiente, hace preguntas que movilizan el razonamiento clínico del estudiante, y al final de la clase pide a cada equipo que justifique su decisión técnica citando el protocolo de la familia profesional. El/la docente no usa libro de texto durante la sesión. Algunos colegas cuestionan que "sin libro no hay clase formal". Desde los principios del modelo pedagógico de la DETP y los Estándares Profesionales Docentes del MINERD (EDD-2025), ¿cómo debe valorar el equipo técnico la práctica observada?`,
    opciones: [
      "El equipo técnico debe señalarla como una práctica insuficiente, porque en la Modalidad Técnico Profesional el libro de texto es el referente curricular primario y su ausencia indica que el/la docente no está siguiendo el programa oficial establecido por el MINERD para esa familia profesional.",
      "El equipo técnico debe valorarla como una práctica pedagógica de alto nivel, porque el/la docente está aplicando correctamente la metodología de aprendizaje basado en problemas (ABP) contextualizada en situaciones reales del perfil profesional, integra los tres saberes (conocimiento protocolar, ejecución técnica, toma de decisiones éticas ante una urgencia), promueve el pensamiento crítico, el trabajo colaborativo y la justificación técnica, que son precisamente las competencias que el ERP del MINERD evalúa en la Etapa V como evidencia de un desempeño docente competente.",
      "El equipo técnico debe valorarla como una práctica innovadora pero riesgosa, ya que los casos clínicos simulados pueden generar en los estudiantes aprendizajes incorrectos si el/la docente no tiene la formación médica certificada para diseñar escenarios de urgencias con rigor clínico, independientemente de su dominio pedagógico.",
      "El equipo técnico debe valorarla como una práctica aceptable para las clases de repaso o cierre de unidad, pero no como práctica regular, porque el método de casos requiere que los estudiantes ya hayan memorizado los contenidos del libro de texto antes de poder aplicarlos en un escenario simulado."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Diseño Curricular Modalidad Técnico Profesional — MINERD (funcionalidad del aprendizaje, metodologías activas, aprendizaje significativo); Estándares Profesionales Docentes; Instructivo ERP EDD-2025 (Etapa V: valorar la capacidad de aplicar conocimientos, habilidades, actitudes y valores en situaciones reales de la función). La práctica observada reúne todos los elementos del aprendizaje significativo por competencias: contextualización real, integración de saberes, pensamiento crítico, trabajo colaborativo y evaluación de la justificación técnica. El libro de texto es un recurso entre muchos; su ausencia no invalida una clase. El ERP del MINERD valora exactamente este tipo de práctica docente reflexiva y centrada en el desempeño del estudiante. Las opciones A, C y D privilegian el recurso (libro), el riesgo hipotético o la secuencia memorística sobre el aprendizaje competencial integrado.`
  },

    {
    id: 21,
    categoria: "Planificación Curricular — Coherencia Interna del Plan de Módulo",
    pregunta: `Durante una jornada de revisión curricular en un politécnico de la familia profesional de Turismo y Hostelería, el equipo técnico de la DETP detecta que en el Plan de Módulo de "Servicio de Alimentos y Bebidas", los Resultados de Aprendizaje describen competencias de atención al cliente en contextos de restauración formal, pero las actividades de aprendizaje diseñadas por el/la docente consisten únicamente en investigaciones bibliográficas y exposiciones orales individuales sobre la historia de la gastronomía francesa. Los criterios de evaluación, por su parte, miden únicamente la capacidad de memorizar terminología técnica en francés e inglés. Al analizar la planificación completa, ¿cuál es el problema técnico-pedagógico más grave identificado y cuál es el principio del diseño curricular por competencias que se está vulnerando?`,
    opciones: [
      "El problema más grave es que el/la docente usa idiomas extranjeros en los criterios de evaluación, lo cual genera una barrera de acceso para los estudiantes que no dominan el francés ni el inglés; el principio vulnerado es el de equidad educativa, que exige que todos los instrumentos evaluativos estén en el idioma oficial del sistema.",
      "El problema más grave es la ruptura de la coherencia interna del Plan de Módulo: los RA, las actividades de aprendizaje y los criterios de evaluación deben estar articulados entre sí como un sistema lógico donde cada actividad se diseña para alcanzar los RA y cada criterio evalúa exactamente lo que los RA establecen; en este caso, los RA exigen competencias de desempeño en servicio real, pero las actividades solo desarrollan el saber declarativo y los criterios miden memorización, lo que genera una desconexión total entre lo que se enseña, lo que se aprende y lo que se evalúa.",
      "El problema más grave es la falta de actividades de trabajo en equipo, ya que el currículo de Turismo y Hostelería exige metodologías colaborativas en el 100% de las sesiones; el principio vulnerado es el de aprendizaje cooperativo, que en esta familia profesional tiene rango de obligatoriedad curricular según la Ordenanza específica.",
      "El problema más grave radica en que el/la docente no está utilizando el taller de cocina y el restaurante pedagógico del politécnico como espacios de aprendizaje, lo cual incumple la normativa de uso mínimo de infraestructura especializada; el principio vulnerado es el de uso eficiente de los recursos educativos del Estado."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Ordenanza 03-2017; Metodología de Diseño Curricular ETP-DETP (principio de coherencia interna: alineación RA-actividades-criterios de evaluación); Estándares Profesionales Docentes (MINERD). En el diseño curricular por competencias, la coherencia interna es el principio que exige que los tres componentes del Plan de Módulo —Resultados de Aprendizaje, actividades de aprendizaje y criterios de evaluación— formen un sistema articulado y coherente. Cuando los RA describen un desempeño (servir en restaurante formal) pero las actividades desarrollan conocimiento teórico histórico y los criterios miden memorización léxica, se produce una desalineación que invalida pedagógicamente el módulo completo: los estudiantes aprenden algo distinto a lo que se espera que demuestren. Las opciones A, C y D identifican problemas secundarios reales pero no el fallo estructural que compromete toda la planificación.`
  },
 
  {
    id: 22,
    categoria: "Seguridad Laboral — Equipos de Protección Individual (EPI)",
    pregunta: `En el taller de Soldadura Industrial de un politécnico, el/la docente tiene el hábito de iniciar las prácticas sin verificar si todos los estudiantes tienen puestos correctamente sus equipos de protección individual (careta de soldar, guantes de carnaza, mandil de cuero, botas de seguridad). Cuando un estudiante nuevo señala que su careta tiene el visor rayado y solicita cambiarla, el/la docente responde: "Eso es lo que hay, con cuidado sirve". El técnico docente del distrito realiza una visita ese día y observa la situación. Desde el marco de seguridad establecido en la Guía FCT-DETP, los protocolos del Manual Operativo de Centro Educativo y los deberes del docente de taller, ¿cuál de las siguientes acciones refleja el proceder correcto e integral del técnico docente?`,
    opciones: [
      "El técnico docente debe anotar la observación en su informe de visita y recomendarle al docente que mejore la práctica en próximas sesiones, sin interrumpir la clase en ese momento para no afectar el desarrollo del programa ni la autoridad del docente frente a sus estudiantes.",
      "El técnico docente debe interrumpir la práctica de inmediato por razones de seguridad, retirar del uso la careta con visor dañado documentando la incidencia, orientar al docente sobre su obligación de verificar el estado de los EPI antes de cada práctica y de suspender cualquier actividad que implique riesgo para la integridad física del estudiante cuando los equipos no estén en condiciones óptimas, y dejar constancia escrita de los hallazgos en el acta de visita técnica con los compromisos de mejora acordados.",
      "El técnico docente debe hablar con el director del centro en privado al final de la visita para informarle sobre la situación, sin mencionar el nombre del docente en el acta de visita para proteger su dignidad profesional, y solicitar que la dirección gestione la reposición de los EPI dañados ante la Regional de Educación.",
      "El técnico docente debe verificar si el politécnico cuenta con un Plan de Gestión de Riesgos aprobado por la DETP; si lo tiene, el docente está amparado para continuar la práctica bajo sus propios criterios de seguridad, ya que la existencia del plan transfiere la responsabilidad de los incidentes al centro y no al docente individual."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Guía FCT-DETP (marco disciplinario y de seguridad e higiene); Manual Operativo de Centro Educativo Público — Protocolo de Actuación en Situaciones de Emergencia; Estándares Profesionales Docentes. Un EPI dañado en una práctica de soldadura no es una observación para el informe posterior: es un riesgo activo e inmediato. El técnico docente tiene la autoridad y la obligación de interrumpir la práctica, documentar la incidencia y orientar pedagógicamente al docente. La función técnico-pedagógica de la visita incluye intervenir cuando se detectan condiciones inseguras. La opción A posterga lo urgente. La C privilegia la "protección" del docente sobre la seguridad del estudiante. La D crea un escudo normativo ficticio que no existe en ningún documento de la DETP.`
  },
 
  {
    id: 23,
    categoria: "Resultados de Aprendizaje — Criterios de Evaluación",
    pregunta: `Un/a docente de la familia profesional de Informática y Comunicaciones presenta en la jornada de planificación del centro los criterios de evaluación que usará para el Resultado de Aprendizaje: "Configura redes de área local (LAN) aplicando protocolos de seguridad informática". Los criterios que presenta son: "Participación en clase", "Puntualidad en la entrega del informe" y "Buena actitud durante las prácticas". El coordinador de la familia profesional señala que los criterios no son adecuados. Desde el modelo de diseño curricular por competencias de la DETP y el CNC-RD, ¿por qué son técnicamente insuficientes esos criterios y cómo deben ser correctamente formulados?`,
    opciones: [
      "Los criterios son insuficientes porque no especifican un porcentaje de ponderación para cada uno; la corrección consiste en asignar valores numéricos precisos (ej. participación = 30%, puntualidad = 30%, actitud = 40%) para que la evaluación sea objetiva y cuantificable.",
      "Los criterios son insuficientes porque no describen indicadores de desempeño técnico verificables y medibles relacionados con el RA; los criterios de evaluación deben especificar qué debe hacer el estudiante, en qué condiciones y con qué nivel de calidad técnica (por ejemplo: 'Configura correctamente los parámetros IP, máscara de subred y gateway en un mínimo de 5 equipos de la red', 'Aplica al menos dos protocolos de seguridad —autenticación y cifrado— justificando técnicamente su elección', 'Verifica la conectividad entre todos los nodos de la red usando herramientas de diagnóstico'), garantizando así que el criterio sea observable, técnico y alineado al RA.",
      "Los criterios son insuficientes únicamente porque 'buena actitud' es un término subjetivo; los otros dos criterios (participación y puntualidad) son pertinentes y deben mantenerse, ya que el 'Saber Ser' es una dimensión válida de la evaluación de competencias en la ETP.",
      "Los criterios son insuficientes porque en la familia profesional de Informática y Comunicaciones, los criterios de evaluación deben ser elaborados exclusivamente por el INFOTEP a través del CNC-RD y no por el docente del politécnico, quien solo puede aplicar los instrumentos diseñados centralmente."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: CNC-RD (estructura de cualificaciones: RA + criterios de evaluación); Ordenanza de la Familia Profesional de Informática y Comunicaciones; Metodología de Diseño Curricular ETP-DETP. Los criterios de evaluación en el modelo por competencias son indicadores de logro directamente derivados del RA: describen las evidencias observables y verificables de que el estudiante ha alcanzado la competencia. "Participación", "puntualidad" y "buena actitud" son comportamientos genéricos que pueden complementar la evaluación del Saber Ser, pero no son criterios técnicos del RA de configuración de redes. La opción A confunde ponderación con calidad del criterio. La C identifica correctamente que "buena actitud" es vaga, pero salva erróneamente los otros dos criterios. La D es falsa: el docente tiene la responsabilidad profesional de formular y contextualizar los criterios con base en el marco curricular.`
  },
 
  {
    id: 24,
    categoria: "FCT — Convenio de Colaboración y Responsabilidades Tripartitas",
    pregunta: `Un politécnico tiene un convenio de FCT vigente con una empresa del sector de la confección textil. A mitad del período de pasantía, la empresa comunica al encargado de vinculación que necesita que los estudiantes trabajen horas extra durante dos semanas para completar un pedido urgente de exportación, y que en ese período no podrán seguir el programa formativo individual porque "toda la producción estará dedicada a ese pedido". La empresa argumenta que esto "les dará a los estudiantes experiencia real de trabajo bajo presión". El encargado de vinculación lleva la situación a la dirección del centro. ¿Cuál es la posición institucional correcta del politécnico?`,
    opciones: [
      "El politécnico debe autorizar la modificación temporal del programa formativo individual porque la experiencia de trabajar bajo presión en una empresa real es un aprendizaje auténtico que no puede replicarse en el taller del politécnico, y la empresa tiene derecho a gestionar su producción durante el período de pasantía.",
      "El politécnico no puede autorizar que los estudiantes sean usados como mano de obra productiva para cubrir pedidos de exportación, ya que la FCT es un módulo formativo regulado por el convenio de colaboración y el programa formativo individual; si la empresa no puede garantizar el desarrollo del plan de actividades acordado durante ese período, el politécnico debe suspender temporalmente la asistencia de los estudiantes a esa sede hasta que la empresa pueda retomar las condiciones formativas pactadas, o reubicarlos en otra empresa colaboradora.",
      "El politécnico debe aceptar la propuesta de la empresa pero exigir que los estudiantes reciban una compensación económica por las horas extra trabajadas, ya que en ese caso estarían prestando un servicio laboral real que excede el marco formativo de la FCT y requiere una relación contractual diferente.",
      "El politécnico debe consultar a la Dirección Regional de Educación antes de tomar cualquier decisión, ya que los convenios de FCT son instrumentos legales que solo pueden modificarse con la aprobación de la Regional, y actuar sin esa autorización podría comprometer la validez jurídica del convenio vigente."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Guía para Implementar el Módulo de FCT — DETP/MINERD; Marco jurídico del convenio de colaboración empresa-escuela. La FCT es un módulo de formación, no una relación laboral ni un servicio de mano de obra para la empresa. El programa formativo individual es el instrumento que protege el propósito formativo del módulo y no puede ser suspendido unilateralmente por las necesidades productivas de la empresa. La empresa colaboradora asume compromisos formativos al firmar el convenio; cuando no puede cumplirlos, el centro tiene la obligación de proteger el proceso formativo de los estudiantes. La opción A convierte la explotación productiva en aprendizaje. La C introduce una relación laboral que contradice la naturaleza formativa de la FCT. La D crea una dependencia burocrática innecesaria para una decisión que corresponde al centro educativo.`
  },
 
  {
    id: 25,
    categoria: "Evaluación Formativa — Instrumentos y Portafolio de Evidencias",
    pregunta: `En la familia profesional de Salud y Bienestar de un politécnico, el/la coordinador/a propone implementar el portafolio de evidencias como instrumento central de evaluación formativa a lo largo del ciclo. Varios docentes se resisten argumentando que "el portafolio es solo un archivador de papeles, da más trabajo al docente que al estudiante y no mide si el estudiante sabe hacer". Desde el marco pedagógico del currículo por competencias de la DETP y las estrategias de evaluación auténtica, ¿cuál es la respuesta técnicamente fundamentada que debe ofrecer el/la coordinador/a?`,
    opciones: [
      "Los docentes tienen razón; el portafolio de evidencias es un instrumento propio de la educación superior universitaria y no tiene pertinencia en la formación técnica secundaria, donde los instrumentos apropiados son exclusivamente la lista de cotejo de desempeño y la prueba práctica cronometrada.",
      "El portafolio de evidencias, correctamente implementado, no es un archivador de papeles sino un instrumento de evaluación formativa que documenta de manera sistemática el proceso de aprendizaje del estudiante a lo largo del tiempo: incluye evidencias de desempeño práctico (fotografías del trabajo ejecutado, informes técnicos, rúbricas completadas), evidencias de reflexión metacognitiva (autoevaluaciones, análisis de errores) y evidencias de progresión en el logro de los RA; la carga mayor recae en el estudiante porque es él/ella quien selecciona, organiza y justifica sus evidencias, desarrollando así la competencia de autorregulación del aprendizaje.",
      "Los docentes tienen parcialmente razón; el portafolio es útil como instrumento complementario, pero solo puede ser evaluado por el tutor empresarial durante la FCT, ya que requiere evidencias de desempeño real en entornos productivos que el taller del politécnico no puede proporcionar.",
      "El portafolio de evidencias es válido siempre que el MINERD haya emitido una resolución específica que autorice su uso como instrumento de evaluación en la Modalidad Técnico Profesional; sin ese respaldo normativo expreso, su uso no puede contabilizar en la calificación oficial del módulo."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Metodología de Diseño Curricular ETP-DETP (estrategias e instrumentos de evaluación formativa); Estándares Profesionales Docentes (MINERD); Diseño Curricular Modalidad Técnico Profesional (adecuación curricular: funcionalidad del aprendizaje, metacognición). El portafolio de evidencias es un instrumento de evaluación auténtica reconocido en el modelo pedagógico de la ETP por su capacidad de documentar procesos, no solo productos finales, y de desarrollar la metacognición del estudiante. Cuando se implementa con criterios claros, el estudiante asume la responsabilidad de construir y justificar su propio registro de aprendizaje. La opción A limita incorrectamente los instrumentos de la ETP. La C restringe el portafolio a la FCT. La D crea un requisito normativo inexistente.`
  },
 
  {
    id: 26,
    categoria: "Familia Profesional — Perfil de Egreso y Mercado Laboral",
    pregunta: `El director de un politécnico recibe una solicitud de la comunidad empresarial de la provincia para abrir una nueva especialidad en Logística y Transporte, argumentando que hay alta demanda laboral en el sector. El director convoca al equipo docente y propone diseñar el programa de manera autónoma basándose en los contenidos de unos manuales que consiguió en internet. Un técnico docente de la DETP que participa en la reunión señala que ese no es el procedimiento correcto. Desde la normativa del diseño curricular de la ETP y el marco del CNC-RD, ¿cuál es el proceso institucional correcto para abrir una nueva especialidad técnica en un politécnico?`,
    opciones: [
      "El director puede diseñar el programa de manera autónoma ya que la Ley 66-97 otorga a los centros educativos la capacidad de desarrollar ofertas curriculares pertinentes a su contexto local; el único requisito es notificar a la Regional de Educación con 30 días de anticipación al inicio del programa.",
      "La apertura de una nueva especialidad requiere seguir el proceso normativo establecido por la DETP: la propuesta debe fundamentarse en un estudio de pertinencia y demanda del sector productivo, el diseño curricular debe seguir la metodología de competencias del CNC-RD (análisis funcional, elaboración del perfil profesional por RA, diseño de módulos), el programa debe ser validado por el Consejo Nacional de Educación mediante la Ordenanza correspondiente de familia profesional, y la DETP debe verificar que el centro cuente con la infraestructura, el equipamiento y el personal docente con el perfil técnico-pedagógico requerido antes de autorizar la apertura.",
      "La apertura de nuevas especialidades es una decisión exclusiva del INFOTEP en el marco del CNC-RD; el MINERD no tiene competencia para crear nuevos programas técnicos de manera independiente, por lo que el director debe tramitar la apertura a través del INFOTEP y luego solicitar al MINERD el reconocimiento de los títulos.",
      "El director puede proceder con el diseño del programa usando los manuales disponibles, siempre que contrate a profesionales del sector logístico como docentes; el CNC-RD es un referente opcional y no obligatorio para los politécnicos del MINERD, cuyo marco curricular se rige exclusivamente por las Ordenanzas del Consejo Nacional de Educación ya aprobadas."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Ordenanza 03-2017 (proceso de diseño curricular ETP); Metodología de Diseño Curricular ETP-DETP; CNC-RD; Ley 66-97 (Art. 63 — el Consejo Nacional de Educación aprueba el currículo). El proceso de creación de una nueva especialidad en la ETP no puede ser unilateral ni informal: requiere análisis de pertinencia, diseño curricular por competencias siguiendo la metodología del CNC-RD, validación técnica de la DETP y aprobación formal del Consejo Nacional de Educación. La opción A crea una autonomía curricular que la Ley no establece para los centros. La C confunde los roles institucionales: el MINERD-DETP tiene plena competencia para crear programas técnicos bajo el MNC. La D hace del CNC-RD una referencia opcional cuando es el marco articulador obligatorio del sistema.`
  },
 
  {
    id: 27,
    categoria: "Seguimiento y Acompañamiento Pedagógico — Función del Coordinador ETP",
    pregunta: `La coordinadora de la familia profesional de Electrónica Industrial de un politécnico detecta, a través de la revisión de los registros de evaluación de los últimos tres meses, que el 60% de los estudiantes de segundo año no ha alcanzado los RA del módulo de "Sistemas de Control Automatizado". Al conversar con el/la docente, este/a señala que "el problema es de los estudiantes: no estudian en casa y llegan sin la base de matemáticas que deberían traer de bachillerato". Desde las funciones del coordinador/a de familia profesional en la ETP y el marco de los Estándares Profesionales Docentes del MINERD, ¿cuál es el abordaje correcto e integral de la coordinadora ante esta situación?`,
    opciones: [
      "La coordinadora debe trasladar el problema al orientador del centro para que este identifique los factores emocionales y familiares que están afectando el rendimiento del 60% de los estudiantes, ya que un problema de esa magnitud tiene causas psicosociales que escapan al ámbito de la coordinación pedagógica.",
      "La coordinadora debe realizar un análisis técnico-pedagógico de la situación que incluya: revisión de los planes de módulo del docente para verificar si las estrategias de enseñanza son coherentes con los RA y los niveles de entrada del grupo; observación de al menos una sesión de clase para identificar si las metodologías usadas están generando aprendizaje activo; conversación con los estudiantes para conocer su perspectiva sobre las dificultades; y diseño colaborativo con el/la docente de un plan de ajuste pedagógico que incluya estrategias de nivelación, diferenciación de actividades y seguimiento periódico de los RA, sin descartar la posibilidad de que las dificultades sean multicausales.",
      "La coordinadora debe validar la explicación del docente, ya que los déficits de matemáticas del bachillerato general son una causa estructural reconocida y el politécnico no puede remediar los vacíos del nivel anterior; la solución es gestionar ante la DETP un módulo remedial de matemáticas que se dicte antes del módulo técnico.",
      "La coordinadora debe reportar la situación a la dirección del centro para que se apliquen medidas correctivas al docente, ya que el fracaso del 60% de los estudiantes es evidencia directa de un desempeño docente deficiente que debe quedar registrado en el expediente del docente para la EDD-2025."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Estándares Profesionales y de Desempeño Docente (MINERD); Metodología ETP-DETP; Instructivo ERP EDD-2025. El rol del coordinador/a de familia profesional incluye el acompañamiento técnico-pedagógico al docente, no solo la supervisión. Ante un fracaso masivo, la primera respuesta debe ser analítica y colaborativa: identificar si el problema está en las estrategias de enseñanza, en el diseño curricular, en los prerrequisitos del grupo o en factores contextuales. La coordinadora no puede atribuir el problema a una sola causa sin investigar. La opción A deriva el problema a orientación sin agotarlo pedagógicamente. La C acepta sin análisis la narrativa del docente. La D saltar directamente a la sanción sin diagnóstico previo viola el principio de desarrollo profesional docente que fundamenta la EDD-2025.`
  },
 
  {
    id: 28,
    categoria: "Higiene y Seguridad — Normativa en Talleres de Alta Peligrosidad",
    pregunta: `Un/a docente de la familia profesional de Construcción y Minería va a iniciar la práctica de "Mezcla y aplicación de morteros" en el taller. Antes de comenzar, un estudiante pregunta si es necesario usar mascarilla para ese tipo de trabajo. El/la docente responde: "Solo si quieren; el cemento no es tan peligroso como los solventes, y la práctica dura poco tiempo". Desde el marco de prevención de riesgos laborales aplicado a los talleres educativos de la ETP, ¿cuál es el error técnico del/a docente y cuál debe ser la instrucción correcta?`,
    opciones: [
      "El/la docente no comete un error técnico grave; la mascarilla es un equipo de protección recomendable pero no obligatorio para prácticas cortas de mortero, ya que el riesgo de inhalación de polvo de cemento es significativo solo en exposiciones prolongadas y en espacios sin ventilación.",
      "El/la docente comete un error técnico grave: el polvo de cemento contiene silica cristalina y compuestos alcalinos que generan riesgo real de irritación respiratoria, ocular y cutánea incluso en exposiciones breves; en el taller educativo, el uso de mascarilla de protección contra partículas (tipo FFP2 o equivalente), gafas protectoras y guantes de nitrilo o látex es obligatorio para esta práctica, independientemente de la duración; además, normalizar que el uso del EPI sea opcional transmite al estudiante una actitud ante la seguridad que contradice el 'Saber Ser' como competencia evaluable del perfil técnico.",
      "El/la docente comete un error menor que se corrige instruyendo a los estudiantes sensibles o alérgicos a usar mascarilla, mientras que los demás estudiantes pueden decidir libremente; esta diferenciación respeta la autonomía individual y es coherente con el principio de atención a la diversidad del currículo dominicano.",
      "El/la docente tiene razón en que el riesgo del cemento es menor que el de los solventes; el error consiste únicamente en no haber clasificado previamente el nivel de riesgo de la práctica en el Plan de Módulo, ya que esa clasificación es el único documento que obliga al uso del EPI específico y sin él el docente no puede ser sancionado por no exigirlo."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Guía FCT-DETP (marco de seguridad e higiene); normas de seguridad en talleres educativos (MINERD); CNC-RD (competencias genéricas: prevención de riesgos). El cemento Portland contiene silicatos y compuestos alcalinos; su polvo es un irritante respiratorio y dérmico reconocido. En la ETP, el uso del EPI no es optativo ni depende de la "sensibilidad" del individuo: es una competencia del Saber Ser que se enseña, se practica y se evalúa. Permitir que el uso sea opcional normaliza conductas inseguras que el estudiante llevará al mercado laboral. La opción A minimiza un riesgo real y documentado. La C introduce una distinción pedagógicamente inaceptable. La D convierte la responsabilidad de seguridad en una cuestión de documentación, no de práctica real.`
  },
 
  {
    id: 29,
    categoria: "Evaluación de los Estándares Profesionales — Dimensión Ética",
    pregunta: `Un/a docente de la familia profesional de Mecánica Automotriz descubre que tres estudiantes de su módulo avanzado entregaron informes técnicos de prácticas de taller que son copias casi idénticas, aunque cada uno firmó el suyo como trabajo individual. El/la docente, para evitar complicaciones, decide aprobarlos a todos con calificaciones diferentes (uno con 90, otro con 85 y el tercero con 80) para que "no se note que son iguales". Desde los Estándares Profesionales Docentes del MINERD y el marco ético de la ETP, ¿qué principio fundamental está violando el/la docente con esta decisión y cuál es el proceder correcto?`,
    opciones: [
      "El/la docente no está violando ningún principio grave; al asignar calificaciones diferentes está siendo flexible y considerando el contexto individual de cada estudiante, lo cual es coherente con el principio de atención a la diversidad y evaluación diferenciada que establece el currículo dominicano.",
      "El/la docente está violando el principio de integridad académica y ética profesional: encubrir una situación de plagio académico no solo priva a los estudiantes de la oportunidad de aprender que la deshonestidad tiene consecuencias, sino que también compromete la credibilidad del proceso evaluativo y del título que eventualmente recibirán; el proceder correcto es comunicar la situación a los estudiantes, aplicar el protocolo disciplinario del centro educativo para los casos de fraude académico, ofrecer a los estudiantes la oportunidad de presentar evidencias individuales de sus competencias mediante una nueva evaluación, y documentar el hecho conforme al reglamento interno del politécnico.",
      "El/la docente comete únicamente un error de gestión evaluativa al asignar calificaciones distintas a trabajos iguales; debería haber anulado los tres informes y asignado calificación de cero automáticamente a todos, sin otra intervención, ya que la penalización máxima es la única respuesta proporcional al fraude académico en la Modalidad Técnico Profesional.",
      "El/la docente actúa correctamente al gestionar la situación de manera discreta; en la ETP, la relación de confianza entre el docente y los estudiantes es la base del proceso formativo y una confrontación pública sobre el plagio dañaría irreparablemente ese vínculo, afectando el clima del taller durante el resto del ciclo."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Estándares Profesionales y de Desempeño Docente (MINERD) — dimensión ética; Manual Operativo de Centro Educativo Público; Estatuto Docente (deberes éticos del docente). Los Estándares Profesionales del MINERD incluyen explícitamente la integridad académica como componente del Saber Ser docente. Encubrir el plagio traiciona la función evaluativa del docente, que debe garantizar que las calificaciones reflejen competencias reales del estudiante. Además, en la ETP, los títulos certifican competencias laborales: un título obtenido con fraude no acreditado representa un riesgo real para el mercado laboral y la sociedad. La opción A pervierte el principio de atención a la diversidad. La C aplica una sanción sin proceso pedagógico. La D convierte el encubrimiento en protección del vínculo afectivo.`
  },
 
  {
    id: 30,
    categoria: "Diseño Curricular — Módulos Transversales y Competencias Genéricas",
    pregunta: `En la jornada de planificación anual de un politécnico, el equipo técnico propone incorporar explícitamente en todos los módulos de todas las familias profesionales tres competencias genéricas transversales: comunicación técnica oral y escrita, uso básico de herramientas digitales y emprendimiento técnico. Un grupo de docentes objeta que "eso nos obliga a enseñar informática y lengua española, que son materias del área de formación general y no de los módulos técnicos". Desde la estructura curricular de la ETP establecida en la Ordenanza 03-2017 y el CNC-RD, ¿cómo debe responder el equipo técnico a esta objeción?`,
    opciones: [
      "Los docentes tienen razón; la comunicación técnica y el uso de herramientas digitales son competencias del área de formación general y su desarrollo corresponde a los docentes de Lengua Española e Informática; incluirlas en los módulos técnicos duplicaría contenidos y reduciría el tiempo disponible para las competencias específicas de cada familia profesional.",
      "Las competencias genéricas transversales no son materias adicionales ni duplicaciones: son dimensiones del desempeño competente que deben desarrollarse en el contexto específico de cada familia profesional; comunicar técnicamente significa redactar un informe de diagnóstico mecánico o presentar un presupuesto de obra, no enseñar gramática; usar herramientas digitales significa operar software de diseño CAD o de gestión de redes, no enseñar ofimática básica; el emprendimiento técnico se desarrolla cuando el estudiante diseña un proyecto de servicio real en su especialidad; estas competencias genéricas se enseñan y evalúan integradas a los módulos técnicos porque adquieren sentido en el contexto de la profesión.",
      "Los docentes tienen parcialmente razón; las competencias genéricas son obligatorias, pero deben desarrollarse en módulos independientes transversales que se dicten en paralelo a los módulos técnicos, con docentes especializados del área de formación general asignados específicamente para esa función dentro del politécnico.",
      "El equipo técnico debe someter la propuesta a consulta de la DETP antes de implementarla, ya que modificar los planes de módulo para incluir competencias genéricas transversales requiere una autorización formal de la Dirección de ETP del MINERD, que debe verificar que el cambio no altere la carga horaria establecida en las Ordenanzas de familia profesional."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: CNC-RD (estructura de cualificaciones: competencias específicas + genéricas transversales); Ordenanza 03-2017; Metodología de Diseño Curricular ETP-DETP. El principio de transversalidad de las competencias genéricas es central en el modelo del CNC-RD: estas competencias no son materias paralelas sino dimensiones que se desarrollan dentro del contexto de las competencias específicas de cada familia profesional. Un electricista que no puede redactar un informe técnico o que no usa software de simulación de circuitos es un profesional incompleto. La integración no duplica: contextualiza. Las opciones A y C crean compartimentos estancos que contradicen el principio de integración curricular. La D convierte una decisión pedagógica necesaria en un trámite burocrático.`
  },
 
  {
    id: 31,
    categoria: "Evaluación EDD-2025 — Etapa V (ERP) y su Naturaleza",
    pregunta: `Varios docentes de un politécnico discuten en la sala de maestros sobre la naturaleza del Ejercicio de Rendimiento Profesional (ERP) de la EDD-2025. Un docente afirma que "el ERP es solo una prueba escrita de conocimientos teóricos sobre pedagogía general, como cualquier examen universitario". Otro docente sostiene que "el ERP evalúa únicamente el conocimiento de las leyes educativas dominicanas y los reglamentos del MINERD". Un tercer docente defiende que "el ERP evalúa si realmente puedo aplicar lo que sé en situaciones reales de mi función docente". Desde el Instructivo de la Etapa V del EDD-2025 emitido por el MINERD, ¿cuál de los tres docentes describe correctamente el propósito del ERP?`,
    opciones: [
      "El primer docente tiene razón; el ERP es una prueba de conocimientos teóricos pedagógicos que mide el nivel de actualización conceptual del docente en didáctica, psicología del aprendizaje y teorías curriculares, similar a un examen de oposición universitaria.",
      "El segundo docente tiene razón; el dominio del marco legal y normativo del sistema educativo dominicano es el eje central del ERP, ya que un docente que no conoce las leyes y ordenanzas no puede ejercer con responsabilidad su función, independientemente de sus habilidades pedagógicas.",
      "El tercer docente describe correctamente el ERP: según el Instructivo de la Etapa V del EDD-2025, el Ejercicio de Rendimiento Profesional valora la capacidad del docente para aplicar conocimientos, habilidades, actitudes y valores en situaciones reales propias de su función, trascendiendo la simple demostración de conocimiento declarativo; evalúa competencias profesionales en acción, es decir, el desempeño integrado ante casos y situaciones del contexto educativo real.",
      "Los tres docentes tienen parte de razón; el ERP es un instrumento multicomponente que combina por igual una prueba de teoría pedagógica, un examen de marco legal y una demostración de habilidades en el aula; los tres componentes tienen el mismo peso en la calificación final de la Etapa V."
    ],
    respuestaCorrecta: 2,
    explicacion: `Base normativa: Instructivo para la Etapa V — ERP, EDD-2025 (MINERD, Viceministerio de Acreditación y Certificación Docente). El instructivo establece con precisión que la Etapa V "valora la capacidad para aplicar conocimientos, habilidades, actitudes y valores en situaciones reales propias de su función". Esto es evaluación de competencias en acción, no solo de conocimiento declarativo. La formulación del tercer docente es la que reproduce el lenguaje y el espíritu del instructivo oficial. Las opciones A y B representan visiones parciales que no capturan la naturaleza competencial del instrumento. La D crea una estructura tripartita que no existe en el instructivo.`
  },
 
  {
    id: 32,
    categoria: "Proyecto Técnico Integrador — Metodología de Aprendizaje Basado en Proyectos",
    pregunta: `Un/a docente de la familia profesional de Agropecuaria propone como actividad de evaluación integradora del módulo de "Producción Vegetal Sostenible" que los estudiantes, organizados en equipos, diseñen e implementen una parcela demostrativa en el terreno del politécnico, documentando todo el proceso desde el análisis de suelo hasta la cosecha, incluyendo el cálculo de costos, la gestión de residuos orgánicos y la presentación de resultados a la comunidad escolar. Un colega le señala que "eso no es evaluación, es una actividad extracurricular". Desde los principios del aprendizaje basado en proyectos en el contexto del currículo ETP y los Estándares Profesionales del MINERD, ¿cómo se fundamenta la pertinencia de esta propuesta como instrumento de evaluación integradora?`,
    opciones: [
      "El colega tiene razón; implementar una parcela real en el politécnico es una actividad productiva que genera bienes para el centro, lo que la convierte en trabajo no remunerado del estudiante y no en una evaluación académica; el instrumento correcto para evaluar producción vegetal es una prueba práctica cronometrada en condiciones controladas.",
      "La propuesta es pertinente y técnicamente sólida como evaluación integradora porque el proyecto permite valorar de manera simultánea y contextualizada múltiples RA del módulo (análisis técnico, planificación, ejecución, gestión ambiental, cálculo de costos, comunicación de resultados) en un entorno productivo real; esto es exactamente lo que el currículo ETP y los Estándares Profesionales del MINERD definen como evaluación auténtica: la demostración de la competencia en el contexto real o simulado para el que fue diseñada, con instrumentos como rúbricas analíticas, listas de cotejo por etapas del proyecto y diario de campo.",
      "La propuesta es válida pedagógicamente, pero no puede constituir la evaluación sumativa del módulo porque las condiciones climáticas y las variables biológicas del cultivo están fuera del control del estudiante y del docente, lo que introduciría factores aleatorios que comprometerían la objetividad y la equidad de la calificación final.",
      "La propuesta es válida únicamente si el politécnico tiene convenio activo con el Ministerio de Agricultura, ya que desarrollar producción vegetal en instalaciones educativas requiere una autorización técnica de esa entidad para garantizar que los insumos agrícolas usados cumplan con la normativa fitosanitaria nacional."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Metodología de Diseño Curricular ETP-DETP (evaluación auténtica mediante proyectos); Estándares Profesionales Docentes (MINERD); Diseño Curricular Modalidad Técnico Profesional (funcionalidad del aprendizaje, integración de saberes). La evaluación auténtica en la ETP consiste precisamente en verificar la competencia en contextos reales o muy próximos a ellos. Un proyecto de producción vegetal en el propio centro no es extracurricular: es la forma más fiel de verificar si el estudiante puede movilizar todos los saberes del módulo de manera integrada. La objetividad se garantiza mediante rúbricas por etapas, no por la simplificación del entorno. La opción A confunde producción pedagógica con trabajo productivo. La C rechaza la variabilidad real que es precisamente lo que la competencia debe saber gestionar. La D crea una restricción normativa inexistente para el uso educativo de terrenos escolares.`
  },
 
  {
    id: 33,
    categoria: "Gestión de Aula — Clima de Aprendizaje en el Taller",
    pregunta: `Durante una observación de clase en el taller de Refrigeración y Climatización, el equipo técnico detecta que el/la docente gestiona el grupo con un estilo predominantemente autoritario: no permite preguntas durante la demostración técnica ("primero vean, luego hacen"), sanciona con llamados de atención públicos y humillantes a los estudiantes que cometen errores en la práctica ("¿cómo es posible que no sepas esto?"), y no promueve ningún tipo de reflexión grupal sobre los procedimientos ejecutados. Los estudiantes trabajan en silencio visible pero muestran poca iniciativa y cometen los mismos errores repetidamente. Desde los Estándares Profesionales Docentes del MINERD y el modelo pedagógico de la ETP, ¿qué elementos del desempeño docente deben ser señalados en la retroalimentación técnica?`,
    opciones: [
      "El estilo autoritario del docente es funcional en el taller porque la seguridad laboral requiere disciplina estricta; el silencio del grupo es evidencia de concentración y los errores repetidos son propios del proceso de adquisición de habilidades motoras en contextos técnicos; el equipo técnico no debe intervenir en el estilo de gestión del docente si no hay incidentes de seguridad graves.",
      "Deben señalarse múltiples elementos: la prohibición de preguntas durante la demostración elimina el andamiaje cognitivo que el estudiante necesita para comprender el procedimiento antes de ejecutarlo; las correcciones públicas humillantes generan un clima de aula de miedo que inhibe el aprendizaje y contradice el principio de dignidad del estudiante establecido en la Ley 66-97 y la Ley 136-03; la ausencia de reflexión grupal impide el desarrollo de la metacognición y la autorregulación, competencias del Saber Ser que el currículo ETP demanda; los Estándares Profesionales del MINERD requieren que el docente gestione el aula promoviendo un clima de respeto, participación activa y aprendizaje colaborativo.",
      "El único elemento que debe señalarse es el lenguaje inapropiado del docente durante las correcciones; el resto del estilo pedagógico es una decisión metodológica válida que el equipo técnico debe respetar en el marco de la autonomía pedagógica docente reconocida en el Estatuto Docente.",
      "El equipo técnico debe señalar que el docente necesita incorporar más actividades lúdicas y dinámicas de grupo para romper el clima de silencio; los estándares del MINERD para talleres técnicos establecen que al menos el 30% del tiempo de práctica debe dedicarse a actividades cooperativas con asignación de roles rotativos entre los miembros del equipo."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Estándares Profesionales y de Desempeño Docente (MINERD) — clima de aula, relación docente-estudiante; Ley 66-97; Ley 136-03 (dignidad e integridad del estudiante); Diseño Curricular Modalidad Técnico Profesional (aprendizaje activo, metacognición). El clima de aprendizaje en el taller es una variable pedagógica con impacto directo en el logro de los RA. La humillación pública no es disciplina: es una práctica que viola derechos del estudiante y sabotea el aprendizaje. Los Estándares Profesionales del MINERD incluyen explícitamente la gestión de un clima de aula positivo, participativo y respetuoso como indicador de desempeño docente. La opción A confunde disciplina de seguridad con autoritarismo pedagógico. La C limita el señalamiento al lenguaje y preserva un estilo pedagógicamente dañino. La D inventa una proporción porcentual que no existe en ningún estándar normativo.`
  },
 
  {
    id: 34,
    categoria: "Marco Legal — Estatuto Docente y Carrera Docente ETP",
    pregunta: `Un/a docente de la familia profesional de Informática y Comunicaciones de un politécnico solicita formalmente una transferencia a un centro de educación general para impartir clases de Ciencias Sociales, argumentando que tiene 15 años de servicio y que prefiere ese ambiente. El director del centro recibe la solicitud y no sabe cómo proceder. Un técnico docente del distrito le consulta al respecto. Desde el Estatuto Docente y la Carrera Docente del MINERD, ¿cuál es la orientación correcta sobre esta solicitud?`,
    opciones: [
      "La solicitud es procedente de manera automática porque el docente tiene 15 años de servicio, lo que le otorga el derecho a solicitar transferencia a cualquier cargo del sistema educativo sin más requisito que la antigüedad acumulada en la carrera.",
      "La solicitud debe tramitarse conforme al Estatuto Docente y los procedimientos de traslado establecidos por el MINERD: el docente puede solicitar el traslado, pero este debe ser evaluado en función de las necesidades del sistema, la disponibilidad de plazas en el centro de destino y, críticamente, la correspondencia entre el perfil del docente y el cargo solicitado; impartir Ciencias Sociales requiere una habilitación o formación diferente a la de Informática y Comunicaciones, por lo que el Viceministerio de Acreditación y Certificación Docente deberá verificar si el docente cumple con los requisitos académicos y profesionales del cargo al que aspira antes de aprobar el traslado.",
      "La solicitud debe ser denegada directamente por el director del centro porque los docentes de la Modalidad Técnico Profesional tienen una categoría especial dentro de la carrera docente que los limita exclusivamente a funciones en politécnicos; su movilidad hacia la educación general no está permitida bajo ninguna circunstancia por la normativa vigente.",
      "La solicitud debe aprobarse automáticamente porque la Ley 66-97 garantiza a todos los docentes del sistema la libertad de solicitar el cargo de su preferencia sin que el MINERD pueda condicionar ese derecho a criterios de perfil o de disponibilidad de plazas."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Estatuto Docente (MINERD) — movilidad, traslados y requisitos de cargo; Ley 66-97 (Carrera Docente); EDD-2025 (la evaluación se aplica conforme al cargo que el docente ejerce actualmente). La carrera docente dominicana reconoce el derecho al traslado, pero este está sujeto a condiciones: disponibilidad de plaza, necesidades del sistema y correspondencia entre el perfil del docente y el cargo. No es automático. El técnico docente de Informática y Comunicaciones tendría que demostrar habilitación para enseñar Ciencias Sociales. La opción A convierte la antigüedad en un derecho incondicional. La C inventa una restricción de inmovilidad que no existe en el Estatuto. La D absolutiza la "libertad de solicitud" ignorando que el MINERD debe garantizar la idoneidad docente en cada cargo.`
  },
 
  {
    id: 35,
    categoria: "Vinculación Sectorial — Responsabilidad Social y Pertinencia de la ETP",
    pregunta: `El director de un politécnico de la familia profesional de Electrónica Industrial recibe la visita de un representante de la principal zona franca industrial de su provincia, quien propone una alianza para que los estudiantes del politécnico realicen sus FCT en las plantas de la zona franca. El representante añade que la empresa estaría dispuesta a donar equipos tecnológicos actualizados al taller del politécnico a cambio de que el plan de estudios del último módulo se adapte exclusivamente a los procesos de producción de sus plantas. El director, entusiasmado con la donación de equipos, acepta verbalmente en el momento. Desde el marco normativo de la ETP y las funciones de la DETP, ¿qué error institucional está cometiendo el director?`,
    opciones: [
      "El director no comete ningún error; la vinculación empresa-escuela y la actualización de equipos son objetivos estratégicos de la ETP, y aceptar la propuesta es un ejercicio de pertinencia curricular que beneficia directamente a los estudiantes y al posicionamiento del politécnico en el mercado laboral local.",
      "El director comete un error institucional de doble dimensión: en primer lugar, ninguna empresa puede condicionar la modificación del plan de estudios de un módulo oficial del MINERD a cambio de una donación, ya que los planes de estudio son instrumentos curriculares aprobados por el Consejo Nacional de Educación que solo pueden modificarse mediante el proceso normativo de la DETP; en segundo lugar, el director no tiene atribuciones para aceptar ese tipo de condicionamiento de manera unilateral; la donación de equipos puede gestionarse formalmente sin comprometer la integridad curricular del programa.",
      "El único error del director es haber aceptado verbalmente sin formalizar el acuerdo por escrito; una vez que se firme el convenio por escrito con la empresa, la adaptación curricular del último módulo es válida porque se enmarca en el derecho de la empresa colaboradora a definir las competencias que necesita en sus trabajadores.",
      "El director comete un error de procedimiento menor al no haber consultado al coordinador de la familia profesional antes de aceptar; una vez que lo consulte, el convenio puede formalizarse sin mayor dificultad, ya que la zona franca es exactamente el tipo de empresa colaboradora que la DETP recomienda como sede de FCT para la familia profesional de Electrónica Industrial."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Ordenanza 03-2017 (proceso de modificación curricular); Guía FCT-DETP (marco del convenio); Ley 66-97 (el Consejo Nacional de Educación aprueba el currículo). La vinculación empresa-escuela es un principio de la ETP, pero no puede convertirse en un mecanismo de privatización curricular. El currículo es un bien público aprobado por el Estado; ninguna empresa puede modificarlo a cambio de una donación. El director tiene la autoridad para gestionar convenios de FCT y recepcionar donaciones de equipos, pero no para comprometer la estructura curricular oficial. La opción A confunde pertinencia legítima con condicionamiento inaceptable. La C convierte la formalización escrita en legitimación del error. La D minimiza el error a un problema de consulta interna.`
  },
 
  {
    id: 36,
    categoria: "Autoevaluación Docente — EDD-2025 Etapa III",
    pregunta: `Durante la Etapa III de la EDD-2025 (Autoevaluación), un/a docente de la familia profesional de Construcción y Minería realiza su proceso reflexivo marcando el nivel más alto en todos los indicadores del instrumento, aunque reconoce internamente que hay áreas de su práctica que no son tan sólidas. Cuando un colega le pregunta por qué marcó todo al máximo, responde: "Para protegerme; en estas evaluaciones hay que cuidarse". Desde el propósito institucional de la EDD-2025 y los principios éticos de la autoevaluación como instrumento de desarrollo profesional, ¿cuál es el problema fundamental de esta conducta?`,
    opciones: [
      "La conducta del docente es comprensible dado que la EDD-2025 tiene consecuencias económicas directas en la remuneración; en un contexto de incertidumbre laboral, inflar la autoevaluación es una estrategia defensiva racional que el MINERD debe prever al diseñar el instrumento.",
      "La conducta subvierte el propósito de la autoevaluación como instrumento de desarrollo profesional continuo: una autoevaluación que no refleja la práctica real impide que el docente identifique sus áreas de mejora, bloquea la elaboración de un plan de desarrollo profesional pertinente, y distorsiona el proceso de triangulación de fuentes que la EDD-2025 utiliza (autoevaluación + evaluación de pares + evaluación del superior + ERP) para construir una valoración integral y equilibrada del desempeño; además, compromete la integridad del proceso y contradice los valores de honestidad y responsabilidad profesional que los Estándares Docentes del MINERD exigen.",
      "La conducta es éticamente cuestionable, pero no tiene consecuencias prácticas porque la autoevaluación tiene el menor peso ponderado en la calificación final de la EDD-2025; los otros componentes (evaluación del superior y del par) corregirán automáticamente la distorsión.",
      "La conducta es incorrecta únicamente porque viola las instrucciones técnicas del instrumento de autoevaluación, que establece que los docentes con menos de 5 años de experiencia no pueden marcarse en el nivel más alto en ningún indicador; para docentes con más antigüedad, la autocalificación máxima es procedente si el docente considera que su desempeño lo justifica."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Instructivo ERP EDD-2025 (Etapa III: Autoevaluación — "tu oportunidad personal para detenerte, mirar hacia adentro y reflexionar honestamente sobre tu propia práctica docente"); Estándares Profesionales Docentes (valores: honestidad, integridad, desarrollo profesional continuo). El sistema de la EDD-2025 usa múltiples fuentes (autoevaluación, pares, superior, ERP) para construir una imagen triangulada del desempeño. La autoevaluación honesta es la que aporta la perspectiva más íntima y reflexiva del docente sobre su propia práctica; falsificarla no solo es deshonesta sino que priva al docente de su principal herramienta de autoconocimiento profesional. La opción A racionaliza la deshonestidad. La C minimiza el impacto de la autoevaluación incorrectamente. La D inventa restricciones por antigüedad que no existen en el instrumento.`
  },
 
  {
    id: 37,
    categoria: "Familia Profesional de Salud — Ética y Seguridad en Prácticas Clínicas",
    pregunta: `En el taller clínico del politécnico (familia profesional de Salud y Bienestar, especialidad de Enfermería), una estudiante comunica a la docente que durante la práctica de venopunción con maniquí, otro estudiante accidentalmente manipuló un catéter intravenoso usado (descartado en el contenedor de residuos peligrosos del taller) intentando observar su construcción interna, y se hizo una pequeña herida en el dedo. La docente responde: "Eso fue por curioso; que se lave bien la mano y ya". Desde los protocolos de bioseguridad, el marco de seguridad de los talleres educativos de la ETP y la normativa del MINERD, ¿cuál es el error crítico de la docente y el proceder correcto?`,
    opciones: [
      "La docente actúa correctamente en lo esencial; lavar la herida con agua y jabón es el primer paso del protocolo de exposición accidental a material potencialmente contaminado, y si el catéter proviene de un maniquí de práctica y no de un paciente real, el riesgo biológico es mínimo y no requiere mayor protocolo.",
      "La docente comete un error crítico: un pinchazo o corte con material médico descartado —incluso en un contexto educativo— activa el protocolo de exposición a riesgo biológico, que incluye limpieza inmediata de la herida, reporte del incidente al responsable del centro, valoración del riesgo real de la herida, notificación a la familia del estudiante y seguimiento médico correspondiente; además, el incidente debe documentarse formalmente; decir que se lave y ya ignora el protocolo de bioseguridad y la obligación institucional de proteger la integridad del estudiante.",
      "La docente debe aplicar el protocolo completo únicamente si el catéter proviene de una práctica con pacientes reales en una clínica de FCT; en el taller educativo, donde los materiales son nuevos o de simulación, no existe riesgo biológico real y el protocolo de exposición no aplica.",
      "La docente debe reportar el incidente únicamente si el estudiante presenta síntomas de infección en las siguientes 48 horas; si en ese plazo no hay manifestaciones clínicas, el incidente se considera resuelto y no requiere documentación formal, ya que los recursos del sistema de salud no deben sobrecargarse con reportes de incidentes menores en talleres educativos."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Protocolos de bioseguridad en talleres educativos de salud (MINERD/DETP); Manual Operativo de Centro Educativo Público (Protocolo de emergencias); Guía FCT-DETP; Ley 136-03 (protección de la integridad física del estudiante). En talleres de salud, cualquier exposición a material médico descartado —independientemente de su procedencia— activa el protocolo de bioseguridad porque el riesgo no puede descartarse sin evaluación médica. La docente tiene la obligación pedagógica y legal de proteger al estudiante. Las opciones A y C introducen distinciones (maniquí vs. paciente real; nuevo vs. usado) que no suspenden el protocolo de exposición accidental. La D convierte la espera de síntomas en un protocolo, lo cual es médica y pedagógicamente inaceptable.`
  },
 
  {
    id: 38,
    categoria: "Inclusión Educativa — Atención a la Diversidad en la ETP",
    pregunta: `Un estudiante con discapacidad auditiva (hipoacusia severa) se matricula en la familia profesional de Mecánica Industrial de un politécnico. El director del centro le comunica al coordinador de la familia que "este estudiante no puede estar en el taller porque no escucha las instrucciones de seguridad ni las alarmas, por lo que representa un riesgo para él y para el grupo; lo mejor es orientarlo a otra modalidad". Desde el marco de derechos del MINERD, la Ley 66-97 y los principios de educación inclusiva que rigen el sistema educativo dominicano, ¿cuál es la posición institucional correcta?`,
    opciones: [
      "El director actúa correctamente porque la seguridad en talleres de alta peligrosidad es una razón legítima para restringir el acceso de estudiantes con ciertas discapacidades; la ETP tiene estándares de desempeño físico y sensorial que deben cumplirse para garantizar la seguridad de todos.",
      "La posición del director es incorrecta: la exclusión de un estudiante de una modalidad educativa basada únicamente en su condición de discapacidad viola el principio de educación inclusiva consagrado en la Ley 66-97 y los compromisos internacionales del Estado dominicano; el centro tiene la obligación de realizar los ajustes razonables necesarios para garantizar el acceso y la participación del estudiante (señalización visual de alarmas, instrucciones escritas y visuales, adaptación de las normas de seguridad a formatos accesibles, asignación de un compañero-apoyo durante las prácticas) antes de concluir que la participación es inviable.",
      "El director tiene razón en la medida en que las familias profesionales de alta peligrosidad tienen restricciones de acceso establecidas por la DETP; sin embargo, en lugar de excluirlo, debe ofrecerle matrícula en una familia profesional de bajo riesgo como Diseño Gráfico o Informática, que son más compatibles con su condición.",
      "El estudiante puede cursar la teoría de Mecánica Industrial en el aula regular, pero debe ser eximido de todas las prácticas de taller por razones de seguridad; al final del ciclo, recibirá la certificación teórica del programa sin el componente práctico, lo que es una solución inclusiva porque le permite acceder al conocimiento sin exponerse al riesgo."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Ley 66-97 (Art. 44 — educación especial e integración); principios de educación inclusiva del MINERD; Convención sobre los Derechos de las Personas con Discapacidad (ratificada por RD). La educación inclusiva no consiste en integrar a los estudiantes "capaces" y derivar a los demás: consiste en realizar los ajustes razonables que garanticen el acceso y la participación en igualdad de condiciones. En un taller, los ajustes razonables para un estudiante con hipoacusia incluyen señalización visual, alarmas luminosas, instrucciones en formatos accesibles y apoyo entre pares. La exclusión sin haber explorado los ajustes posibles es discriminatoria. La opción A inventa estándares sensoriales de exclusión. La C re-dirige discriminatoriamente al estudiante. La D crea una "inclusión" que excluye la parte práctica y el título completo.`
  },
 
  {
    id: 39,
    categoria: "Evaluación de Diversas Fuentes — Etapa IV (EDA/ECO/ESI/ESA)",
    pregunta: `Un/a docente de la familia profesional de Turismo y Hostelería recibe los resultados de la Etapa IV de la EDD-2025 (Evaluación de Diversos Actores) y observa que en la Evaluación de Colegas o Pares (ECO), tres compañeros del mismo cargo le han otorgado calificaciones significativamente más bajas que las que él/ella se asignó en la autoevaluación, particularmente en los indicadores de "colaboración con el equipo docente" y "contribución a la mejora institucional". El/la docente reacciona afirmando que "la ECO es subjetiva y mis compañeros me calificaron mal por envidia". Desde el propósito de la evaluación de pares en el marco de la EDD-2025 y los Estándares Profesionales del MINERD, ¿cuál es la orientación técnica correcta ante esta situación?`,
    opciones: [
      "El/la docente tiene razón en que la ECO puede ser subjetiva; por eso, el MINERD la pondera con el menor peso de todos los componentes de la EDD-2025; si el/la docente considera que sus pares actuaron con mala fe, puede presentar una reclamación formal ante el Viceministerio de Acreditación y Certificación Docente para que se anulen esas calificaciones.",
      "La divergencia entre la autoevaluación y la evaluación de pares es exactamente una de las informaciones más valiosas del proceso: en lugar de atribuirla a la envidia, el/la docente debe usarla como oportunidad para reflexionar honestamente si su percepción de su propia colaboración e impacto institucional coincide con la percepción de sus colegas; la ECO valora específicamente la colaboración, el trabajo en equipo y las buenas prácticas desde una perspectiva lateral que la autoevaluación no puede proporcionar, y una diferencia significativa entre ambas es una señal de que existe una brecha entre la autopercepción y el impacto real en el equipo docente.",
      "La divergencia debe resolverse mediante un proceso de mediación facilitado por el orientador del centro, quien convocará a los pares evaluadores y al docente evaluado a una reunión de conciliación donde se revisen los indicadores en disputa y se llegue a un acuerdo sobre la calificación consensuada que refleje la realidad del desempeño.",
      "La divergencia es un error del diseño del instrumento ECO, ya que en el ámbito de la Educación Técnico Profesional los docentes de diferentes familias profesionales no tienen suficiente información sobre el trabajo cotidiano de sus colegas para evaluarlos con rigor; la ECO solo debería aplicarse entre docentes de la misma familia profesional para garantizar la pertinencia y la objetividad de la evaluación lateral."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Instructivo Etapa IV EDD-2025 (ECO: Evaluación de Colegas o Pares — "valora la colaboración, trabajo en equipo y buenas prácticas"); Instructivo ERP EDD-2025. La EDD-2025 utiliza la evaluación multiperspectiva precisamente porque cada fuente aporta una dimensión distinta del desempeño que las otras no pueden proveer. La ECO aporta la perspectiva lateral: cómo perciben los colegas la contribución del docente al trabajo colectivo. Una divergencia significativa con la autoevaluación no es evidencia de envidia: es una señal de alerta pedagógica que el docente reflexivo debe examinar. La opción A legitima la impugnación sin fundamento. La C convierte una oportunidad de desarrollo profesional en un conflicto de mediación. La D propone restringir la ECO a la misma familia, lo que no está en el diseño del instrumento y empobrecería su perspectiva.`
  },
 
  {
    id: 40,
    categoria: "Competencias Docentes Integradas — Caso Complejo de Taller",
    pregunta: `Un/a inspector/a técnico/a de la DETP realiza una visita integral a un politécnico de la familia profesional de Electrónica Industrial. Durante la jornada observa lo siguiente en el mismo docente: (i) el Plan de Módulo está bien estructurado con RA alineados al CNC-RD; (ii) en la práctica de taller, el docente demuestra alto dominio técnico del procedimiento; (iii) todos los estudiantes usan correctamente los EPI; (iv) sin embargo, el docente ejecuta él mismo toda la demostración sin hacer pausas para que los estudiantes participen, no hace preguntas durante el proceso, y al final dice "ahora repitan exactamente lo que hicieron" sin dar retroalimentación sobre lo observado; (v) cuando un estudiante comete un error en la réplica, el docente simplemente lo corrige en silencio sin explicar por qué estaba mal. Considerando este conjunto de evidencias, ¿cuál es la valoración técnica más precisa del desempeño docente observado y qué competencia crítica debe desarrollar?`,
    opciones: [
      "El desempeño es excelente en todos sus componentes; la corrección silenciosa de errores es una técnica pedagógica válida denominada 'modelado sin verbalización' que favorece el aprendizaje observacional; el docente no necesita intervención técnica.",
      "El desempeño muestra fortalezas reales en la planificación curricular, el dominio técnico y la gestión de seguridad, pero presenta una debilidad crítica en la dimensión pedagógica interactiva: el docente está utilizando un modelo de enseñanza por demostración sin mediación cognitiva, lo que significa que los estudiantes replican procedimientos mecánicamente sin comprender el por qué técnico de cada paso; la competencia que el docente debe desarrollar es la de mediación del aprendizaje: hacer preguntas que activen el razonamiento técnico del estudiante durante y después de la demostración, ofrecer retroalimentación específica y oportuna sobre los errores (no solo corregirlos en silencio), y cerrar cada práctica con una reflexión técnica que consolide la comprensión conceptual del procedimiento ejecutado.",
      "El desempeño es satisfactorio porque el docente cumple con los tres pilares fundamentales de la ETP: planificación correcta, dominio técnico y seguridad laboral; la dimensión pedagógica interactiva es un componente deseable pero no obligatorio en los módulos de práctica de taller, donde la prioridad es que el estudiante replique el procedimiento con precisión.",
      "El desempeño debe valorarse como insuficiente en su totalidad porque en la ETP el dominio técnico del docente no es suficiente para garantizar aprendizaje; el docente debe ser derivado a un programa de formación pedagógica intensiva antes de continuar frente a grupo, ya que la ausencia de interacción durante la demostración invalida retroactivamente la calidad de todos los módulos que ha impartido anteriormente."
    ],
    respuestaCorrecta: 1,
    explicacion: `Base normativa: Estándares Profesionales y de Desempeño Docente (MINERD); Instructivo ERP EDD-2025 (Etapa V: valorar la capacidad de aplicar conocimientos, habilidades, actitudes y valores en situaciones reales de la función); Metodología ETP-DETP (mediación pedagógica, aprendizaje significativo). Este ítem evalúa la capacidad del inspector/a de hacer una valoración matizada y técnicamente precisa: ni todo excelente ni todo deficiente. El docente tiene fortalezas reales (planificación, técnica, seguridad) pero una brecha pedagógica crítica: la enseñanza por demostración sin mediación cognitiva produce imitación, no comprensión competente. La retroalimentación silenciosa es la ausencia de retroalimentación. El ERP del MINERD busca exactamente este tipo de análisis integrado del desempeño docente, que es el que este ítem evalúa en el propio examinado. La opción A es complaciente sin fundamento. La C jerarquiza los estándares de manera arbitraria. La D aplica una sanción total desproporcionada a una debilidad específica que tiene solución mediante acompañamiento.`
  },

    {
        id: 41,
        categoria: "Evaluación",
        pregunta: "Durante una práctica de taller en el Bachillerato Técnico en Instalaciones Eléctricas, un docente observa que un estudiante ha realizado el montaje de un circuito de conmutación de forma impecable y funcional. Sin embargo, al revisar el 'Portafolio de Evidencias', el docente nota que el estudiante no completó el esquema unifilar previo ni el listado de comprobación de seguridad (Checklist). Según el enfoque de competencias de la MTP, ¿cuál es la acción evaluativa correcta?",
        opciones: [
            "Calificar con el puntaje máximo la dimensión procedimental, ya que el circuito funciona correctamente y eso demuestra la competencia técnica real exigida en el mercado laboral.",
            "Evaluar la práctica con el 70% de la nota y asignar un 30% a la teoría pendiente, promediando ambas dimensiones para no perjudicar el índice académico del estudiante.",
            "Registrar el Resultado de Aprendizaje (RA) como 'Aún No Logrado', realizar una retroalimentación sobre la importancia de la planificación técnica y exigir la evidencia documental antes de asentar la validación de la competencia.",
            "Reprobar el módulo de manera automática, puesto que la omisión de la documentación técnica invalida cualquier ejecución práctica por falta de rigor profesional."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Guía Metodológica para la MTP y Ordenanza 03-2017. En la formación por competencias, el RA es integral. El 'Saber Hacer' incluye ineludiblemente la planificación y la seguridad. Si falta la evidencia de proceso (esquema/seguridad), la competencia está incompleta. La normativa dominicana exige la evaluación formativa (retroalimentación y recuperación) antes de la calificación definitiva, por lo que reprobar automáticamente (opción D) o promediar (opción B) son prácticas incorrectas."
    },
    {
        id: 42,
        categoria: "Seguridad",
        pregunta: "Un docente del área de Mecanizado nota que un torno paralelo presenta una vibración inusual y que la guarda protectora del plato está ligeramente suelta. Hay una entrega de proyecto final del módulo en dos días y los estudiantes, de 6to de secundaria, presionan para seguir trabajando para no reprobar. ¿Cuál es el protocolo de actuación pedagógica y administrativa correcto?",
        opciones: [
            "Permitir que solo los estudiantes más aventajados terminen sus piezas bajo la supervisión directa y estricta del docente, minimizando el riesgo sin retrasar el calendario escolar.",
            "Colocar una cinta de advertencia en la máquina, pero permitir su uso exclusivo para cortes ligeros y de baja velocidad hasta que pase la evaluación final.",
            "Solicitar a los estudiantes que ellos mismos ajusten la guarda y revisen la vibración como parte de su formación en 'Mantenimiento Preventivo', validando esa competencia de paso.",
            "Suspender el uso de la máquina aplicando el protocolo de bloqueo, informar por escrito a la dirección/coordinación técnica del centro y reprogramar o adaptar la evaluación basándose en causas de fuerza mayor."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Reglamento 522-06 de Seguridad y Salud en el Trabajo y Manual de Gestión de Riesgos MTP. Ante un riesgo inminente por fallo mecánico que comprometa la integridad física, la única acción válida es la paralización del equipo. El docente es el garante de la seguridad; permitir el uso bajo 'supervisión' o delegar el arreglo a alumnos en equipos no didácticos para ese fin constituye una negligencia grave y responsabilidad civil."
    },
    {
        id: 43,
        categoria: "Inclusión",
        pregunta: "En el módulo de 'Gestión de Ventas', un estudiante con discapacidad motora (usuario de silla de ruedas) debe cumplir con el RA relativo a 'Organización de anaqueles y exhibición física de productos'. El taller del politécnico no cuenta con estanterías adaptadas a su altura. ¿Cómo debe proceder el docente para asegurar una evaluación equitativa sin alterar el estándar del CNC-RD?",
        opciones: [
            "Diseñar un 'Ajuste Razonable' donde el estudiante dirija la organización del anaquel mediante un planograma (software o plano físico) y supervise la ejecución de un compañero, evaluando su dominio técnico del merchandising.",
            "Eximir al estudiante de esa práctica operativa y asignarle una investigación teórica extensa sobre marketing digital para compensar la calificación de ese Resultado de Aprendizaje.",
            "Solicitar al departamento de Orientación el traslado del estudiante a una mención puramente administrativa donde no tenga que realizar esfuerzos físicos.",
            "Calificarlo con la nota mínima aprobatoria por consideración a su condición y barrera arquitectónica, sin exigirle la demostración de la competencia."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 04-2018 (Educación Inclusiva) y Diseño Universal para el Aprendizaje (DUA). Los ajustes razonables en la MTP no eliminan el Resultado de Aprendizaje, sino que adaptan el medio para demostrar la competencia. La capacidad intelectual de planificar y dirigir una exhibición (Saber Hacer técnico) es completamente válida frente a la limitación física, garantizando la inserción laboral en roles de supervisión o diseño."
    },
    {
        id: 44,
        categoria: "Ética",
        pregunta: "Un docente de Informática utiliza un 'Proyecto Integrador' para evaluar el fin de semestre. Al corregir, detecta que un equipo entregó un software funcional, pero el código fuente es una copia casi exacta de un repositorio público en internet. Los estudiantes argumentan que 'en las empresas de software reales se reutiliza código'. ¿Qué acción es la normativamente correcta?",
        opciones: [
            "Validar el proyecto como 'Logrado' puesto que los estudiantes demostraron la competencia transversal de 'Investigación y uso de recursos globales' para solucionar un problema real.",
            "Restar el 50% de la puntuación por falta de originalidad, pero aprobar el RA porque el programa compila y cumple con los requerimientos técnicos del cliente ficticio.",
            "Aplicar una evaluación de desempeño oral in situ donde cada estudiante deba explicar y modificar una función del código, invalidando el proyecto si no demuestran el dominio de la lógica subyacente.",
            "Expulsar a los estudiantes del módulo de programación por plagio documentado, enviando un reporte irreversible al comité disciplinario del centro educativo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual de Evaluación MTP. La evaluación busca certificar que el individuo posee el 'Saber Hacer'. La reutilización de código es una práctica industrial, pero en el ámbito formativo, el docente debe tener certeza de la autoría y comprensión lógica (evidencia de conocimiento). La triangulación mediante observación y cuestionamiento técnico directo es el mecanismo idóneo para validar competencias sospechosas."
    },
    {
        id: 45,
        categoria: "Planificación",
        pregunta: "Durante las visitas de supervisión de la Formación en Centros de Trabajo (FCT), el Docente Tutor nota que la empresa asignada a un estudiante de 'Gestión Administrativa y Tributaria' lo tiene exclusivamente sacando copias y archivando documentos muertos, sin tocar software contable ni procesos fiscales. ¿Cuál es el proceder inmediato del docente?",
        opciones: [
            "Valorar la experiencia positivamente, ya que el estudiante está desarrollando el 'Saber Ser' (humildad, disciplina y adaptación) en un entorno corporativo real.",
            "Retirar al estudiante de la empresa el mismo día sin previo aviso, al considerar que la integridad de su formación técnica está siendo vulnerada y explotada.",
            "Exigirle al estudiante que, bajo su propia iniciativa, se rebele y exija a su supervisor tareas acordes a su perfil profesional para demostrar proactividad.",
            "Reunirse formalmente con el Instructor de la Empresa, contrastar las actividades con el 'Programa Formativo de FCT' firmado previamente, y acordar una rotación inmediata del estudiante a áreas pertinentes."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Reglamento de Formación en Centros de Trabajo (FCT) del MINERD. La FCT no es trabajo no remunerado, es un módulo formativo con Resultados de Aprendizaje definidos en un acuerdo (Programa Formativo). El Tutor del centro debe intervenir institucionalmente (no abruptamente ni culpando al alumno) para garantizar que la empresa cumpla el acuerdo de rotación técnica."
    },
    {
        id: 46,
        categoria: "Evaluación",
        pregunta: "En el módulo de Cuidados de Enfermería, una estudiante realiza la técnica de canalización de vía periférica en el simulador anatómico con total precisión mecánica (ángulo perfecto, fijación correcta). Sin embargo, omitió el lavado clínico de manos y no se presentó al 'paciente' antes de iniciar. ¿Cómo se asienta esto en la rúbrica de evaluación?",
        opciones: [
            "El RA se considera 'No Logrado', ya que en los perfiles de Salud del CNC-RD, las normas de bioseguridad (Saber Hacer) y el trato humanizado (Saber Ser) son Criterios de Realización críticos y eliminatorios.",
            "Se aprueba con una nota de 85/100, descontando puntos en el renglón de actitudes, pero validando la destreza motora fina que es el núcleo real del módulo técnico.",
            "Se detiene la práctica, se le exige que se lave las manos, y si lo hace, se le otorga la calificación máxima porque corrigió el error en el momento.",
            "Se le asigna un trabajo de investigación sobre bioseguridad hospitalaria para compensar la falta práctica cometida durante la evaluación."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Catálogo Nacional de Cualificaciones (Familias de Salud) y Guía de Evaluación. En el enfoque de competencias, existen 'Criterios Críticos' (seguridad, higiene, normativas). Si un estudiante realiza bien el procedimiento técnico pero vulnera la bioseguridad, el desempeño general es nulo, pues en el mundo real pondría en riesgo la vida del paciente. No se promedian actitudes con procedimientos críticos."
    },
    {
        id: 47,
        categoria: "Evaluación",
        pregunta: "Un grupo de 4 estudiantes entrega un motor de combustión interna totalmente reconstruido y funcional. Al aplicar la técnica de interrogatorio, el docente percibe que un estudiante lideró y ejecutó el 90% del trabajo físico, mientras los otros tres solo limpiaron herramientas. ¿Cómo debe proceder el docente técnico al evaluar?",
        opciones: [
            "Otorgar la misma calificación a todo el grupo para fomentar el trabajo en equipo y la responsabilidad compartida, ya que el producto final (el motor) funciona.",
            "Evaluar de forma individual utilizando una rúbrica que mida los Criterios de Evaluación específicos para cada miembro, certificando la competencia solo al estudiante que demostró el 'Saber Hacer' procedimental completo.",
            "Aprobar a los cuatro estudiantes, pero colocarle la nota máxima solo al líder, y una calificación mínima aprobatoria a los demás por su participación pasiva.",
            "Reprobar al grupo completo por no haber distribuido equitativamente las tareas operativas desde el inicio del proyecto de taller."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza de Evaluación de los Aprendizajes. Aunque se utilicen estrategias de aprendizaje basado en proyectos (colaborativos), la certificación de la competencia laboral es ESTRICTAMENTE INDIVIDUAL. El docente debe garantizar mediante evidencias (observación directa, preguntas técnicas) que cada alumno alcanzó los Criterios de Evaluación exigidos por el currículo."
    },
    {
        id: 48,
        categoria: "Planificación",
        pregunta: "El docente del módulo de 'Operaciones Agrícolas' no cuenta con los agroquímicos específicos detallados en el diseño curricular porque el suplidor del centro falló. Decide proyectar videos de YouTube mostrando cómo se aplican, y luego evalúa a los estudiantes mediante un examen escrito de selección múltiple sobre los videos. ¿Cuál es el error técnico-pedagógico fundamental?",
        opciones: [
            "Haber utilizado YouTube, que no es una fuente oficial del MINERD ni del Ministerio de Agricultura para fines de formación técnica.",
            "Evaluar una Unidad de Competencia eminentemente procedimental (Saber Hacer) utilizando exclusivamente un instrumento de evaluación teórica (examen escrito), invalidando el aseguramiento de la destreza laboral.",
            "No haber exigido a los padres de los estudiantes que compraran los agroquímicos faltantes para poder realizar la práctica en la finca escolar.",
            "Que el examen de selección múltiple fomenta la memorización a corto plazo y debió utilizar preguntas de ensayo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Guía Metodológica para la MTP. Las competencias laborales integran conocimientos, habilidades y actitudes. No se puede certificar una habilidad motriz u operativa (Saber Hacer) basándose únicamente en la comprobación de conocimientos teóricos (Saber). Se debió utilizar simuladores o prácticas análogas seguras evaluadas con guías de observación."
    },
    {
        id: 49,
        categoria: "Ética",
        pregunta: "La Dirección del politécnico autoriza que el taller de Gastronomía se utilice para preparar un catering comercial de un evento privado del director los fines de semana. El director pide al docente técnico que 'seleccione a sus mejores alumnos' para trabajar gratis, prometiéndoles que eso contará como su FCT. ¿Cuál es el deber ético del docente?",
        opciones: [
            "Aceptar, ya que es una oportunidad excelente para que los estudiantes adquieran experiencia real bajo alta presión y cumplan sus horas de pasantía rápido.",
            "Negarse rotundamente y denunciar la irregularidad, puesto que la FCT debe realizarse en centros de trabajo formalmente vinculados, y el uso del patrimonio escolar y mano de obra estudiantil para lucro personal es un acto de corrupción.",
            "Negociar con el director para que al menos les pague un viático a los estudiantes por el transporte y la comida durante ese fin de semana.",
            "Acceder a la petición, pero asegurarse de evaluar a los estudiantes con rúbricas estrictas durante el evento para darle rigor académico a la actividad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 de Función Pública, Estatuto Docente y Reglamento FCT. El uso de recursos públicos (taller) y la explotación de estudiantes para beneficio privado de un funcionario constituye prevaricación. Además, la FCT requiere un convenio oficial, no puede ser una actividad ad-hoc de fin de semana para asuntos no institucionales."
    },
    {
        id: 50,
        categoria: "Seguridad",
        pregunta: "Durante una práctica de soldadura SMAW, el aire acondicionado del taller se daña. Por el intenso calor, los estudiantes solicitan al docente permiso para quitarse la chaqueta de cuero y soldar solo con la careta y guantes, usando su polo escolar. ¿Cuál debe ser la respuesta del docente basado en la normativa?",
        opciones: [
            "Permitirlo temporalmente y abrir las puertas para generar ventilación cruzada, ya que el estrés térmico también es un riesgo laboral grave.",
            "Denegar la solicitud y suspender la práctica de soldadura; el uso del Equipo de Protección Personal (EPP) completo es innegociable ante el riesgo de quemaduras por radiación UV y salpicaduras.",
            "Permitir que se quiten la chaqueta, pero exigirles que suelden en posiciones más alejadas del arco eléctrico para evitar que las chispas alcancen la piel.",
            "Dejarlo a discreción y responsabilidad de cada estudiante, haciéndoles firmar una hoja de descargo de responsabilidad (waiver) antes de iniciar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Reglamentación de Higiene y Seguridad Laboral en Talleres. El EPP en tareas de alto riesgo (como la soldadura) es una barrera primaria irrenunciable. El estrés térmico se gestiona suspendiendo la tarea o rotando personal, nunca disminuyendo el nivel de protección física. Un menor de edad (o adulto) en formación no puede eximir al docente de su responsabilidad garante (Opción D es ilegal)."
    },
    {
        id: 51,
        categoria: "Inclusión",
        pregunta: "Un estudiante recién llegado al país, cuya lengua materna no es el español, se inscribe en el Bachillerato Técnico en 'Logística y Transporte'. El estudiante es brillante en matemáticas operativas, pero reprueba los módulos porque no entiende las instrucciones complejas en los manuales de inventario. ¿Cuál es el enfoque correcto del docente técnico?",
        opciones: [
            "Exigirle que domine el idioma español antes de tomar los módulos técnicos, enviándolo de oyente hasta que pueda leer los manuales sin ayuda.",
            "Evaluarlo exclusivamente mediante observación de sus habilidades matemáticas en la hoja de cálculo, ignorando la competencia de comprensión lectora de manuales.",
            "Proveer glosarios bilingües técnicos, permitir el uso de traductores tecnológicos durante las prácticas y adaptar lingüísticamente los instrumentos de evaluación sin rebajar el estándar técnico.",
            "Pedir a los demás compañeros que le hagan el trabajo escrito y que él solo ejecute la parte numérica para balancear las cargas del grupo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Enfoque de Educación Inclusiva del MINERD. La barrera del idioma no debe confundirse con una deficiencia cognitiva o técnica. El docente debe realizar ajustes razonables de acceso (glosarios, tecnología) para permitir que el estudiante adquiera y demuestre la competencia técnica mientras desarrolla el dominio del idioma vehicular."
    },
    {
        id: 52,
        categoria: "Planificación",
        pregunta: "El Coordinador Técnico del Politécnico revisa la planificación anual de un docente de 'Desarrollo y Administración de Aplicaciones Informáticas' y nota que está enseñando un lenguaje de programación obsoleto que ya no se exige en el CNC-RD, justificando que 'es el que domina el docente y los libros del centro están basados en ese'. ¿Cuál es la retroalimentación institucional?",
        opciones: [
            "Felicitar al docente por adaptar los recursos disponibles en el centro para asegurar que los estudiantes tengan material de apoyo impreso (libros).",
            "Requerir la actualización inmediata de la planificación; el diseño curricular por competencias y el CNC-RD responden a los perfiles profesionales actuales demandados por el sector productivo, no a la zona de confort del docente.",
            "Permitir que termine el año escolar con el lenguaje obsoleto, pero condicionar al docente a que tome un diplomado en vacaciones para el próximo año.",
            "Solicitar al docente de la materia optativa que enseñe el lenguaje moderno para compensar el atraso del módulo principal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Catálogo Nacional de Cualificaciones. La MTP tiene un mandato de pertinencia y vinculación laboral. Enseñar tecnologías obsoletas vulnera el derecho del estudiante a la empleabilidad. El docente técnico tiene la obligación contractual y profesional de la actualización continua; la planificación debe ceñirse al currículo vigente, no a los libros de texto antiguos."
    },
    {
        id: 53,
        categoria: "Evaluación",
        pregunta: "Al finalizar el módulo de 'Mantenimiento Preventivo de Vehículos', una estudiante demuestra destreza excepcional en el cambio de aceite, filtros y revisión de frenos. Sin embargo, en la rúbrica actitudinal, el docente le coloca baja puntuación porque la estudiante tiene 'tatuajes visibles y cabello teñido de azul'. El docente afirma que el 'Saber Ser' implica buena presencia tradicional. ¿Es válida esta evaluación?",
        opciones: [
            "Sí, la imagen personal conservadora es un elemento transversal que las empresas dominicanas exigen, por lo que el docente la está preparando para la realidad laboral.",
            "No, el 'Saber Ser' evalúa actitudes profesionales vinculadas directamente al riesgo y ejecución de la tarea (responsabilidad, trabajo en equipo, ética), no características estéticas o de identidad personal amparadas en el libre desarrollo de la personalidad.",
            "Sí, pero el docente debió advertirle a principio de año escolar que los tatuajes restarían puntos en el área técnica.",
            "No, porque el docente solo debió evaluar los conocimientos procedimentales, ya que las actitudes no se evalúan numéricamente en la Educación Técnico Profesional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución de la República y Ordenanza de Evaluación MINERD. Sancionar la estética personal es una práctica discriminatoria que confunde el 'Saber Ser' (competencias sociolaborales, resolución de conflictos, iniciativa, seguridad) con los códigos de apariencia tradicionales. Las actitudes SÍ se evalúan (descarta opción D), pero con indicadores objetivos vinculados a la cualificación, no a prejuicios estéticos."
    },
    {
        id: 54,
        categoria: "FCT",
        pregunta: "Durante la Fase de Centro de Trabajo (FCT), el Instructor de la Empresa le informa al Tutor del Politécnico que la pasante de 'Turismo' está sufriendo comentarios inapropiados y acercamientos no deseados por parte de algunos clientes del hotel, pero que la gerencia considera que 'es parte del negocio hotelero'. ¿Qué medida exige el rigor administrativo y ético?",
        opciones: [
            "Orientar a la estudiante sobre cómo manejar clientes difíciles, desarrollando su competencia de resiliencia e inteligencia emocional.",
            "Solicitar a la gerencia que cambie a la estudiante al turno nocturno donde hay menos flujo de clientes problemáticos.",
            "Suspender inmediatamente la pasantía en esa empresa por vulneración a la integridad e incumplimiento de un entorno laboral seguro, reubicando a la estudiante y reportando el incidente a las autoridades del MINERD.",
            "Evaluar la situación al final de la pasantía, asegurando que la empresa le otorgue una nota sobresaliente en compensación por los malos ratos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03 (Código para el Sistema de Protección de Niños, Niñas y Adolescentes) y Reglamento FCT. El centro educativo es garante de la seguridad física y moral del estudiante durante la FCT. Un entorno de acoso tolerado por la empresa inhabilita inmediatamente a dicha institución como 'Centro Colaborador'. Mantener al alumno allí por 'resiliencia' constituye complicidad y negligencia."
    },
    {
        id: 55,
        categoria: "Planificación",
        pregunta: "Un docente del área de Contabilidad planifica que todas las evidencias del módulo de 'Gestión de Tesorería' se entreguen exclusivamente de forma manuscrita en cuadernos físicos para 'evitar el copy-paste', desestimando el uso del laboratorio de informática. ¿Qué aspecto fundamental del perfil del egresado técnico está obviando?",
        opciones: [
            "El principio de ahorro de materiales, ya que los cuadernos son más costosos que el uso de computadoras del centro.",
            "La alineación con los Criterios de Evaluación del currículo, los cuales especifican el dominio obligatorio de herramientas ofimáticas y software contable (Alfabetización Digital) para la gestión de la tesorería real.",
            "La necesidad de practicar la caligrafía comercial, que sigue siendo una competencia altamente demandada en las corporaciones modernas.",
            "Que los estudiantes se van a quejar con la dirección por el dolor en las manos tras escribir tantos libros mayores."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: CNC-RD y Perfil Profesional del Técnico. Omitir la tecnología por miedo al plagio destruye la validez del Resultado de Aprendizaje. Un técnico en contabilidad hoy en día opera bajo entornos digitales y Sistemas ERP. Planificar de espaldas a las TIC genera una brecha formativa que invalida la pertinencia del título técnico."
    },
    {
        id: 56,
        categoria: "Evaluación",
        pregunta: "Al corregir un examen práctico de diagnóstico de fallas en redes informáticas, el docente nota que un estudiante logró identificar la falla, pero mediante un método de 'ensayo y error' desorganizado y no utilizando el protocolo de descarte estandarizado enseñado en clase. ¿Cómo se califica este RA?",
        opciones: [
            "Como 'Logrado' con la nota máxima, porque lo único que le importa a la empresa es que la red vuelva a funcionar, sin importar cómo se arregle.",
            "Como 'Logrado', pero con baja puntuación, retroalimentando que el 'Saber Hacer' metódico es fundamental para la optimización de tiempos e insumos (criterio de calidad y eficiencia laboral).",
            "Como 'Nulo', expulsando al estudiante de la práctica por desobedecer las instrucciones precisas del manual del fabricante.",
            "Promediando el resultado final (100) con el proceso desordenado (0), dándole un 50 y obligándolo a repetir el módulo completo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Guía Metodológica MTP. La evaluación por competencias valora el producto, pero también el PROCESO. Un técnico que resuelve por azar o desorden genera costos ocultos y riesgos en la industria. Si el resultado es correcto, se reconoce, pero la calificación de la rúbrica disminuirá en los indicadores de 'aplicación de procedimientos estandarizados', requiriendo retroalimentación formativa."
    },
    {
        id: 57,
        categoria: "Seguridad",
        pregunta: "En el laboratorio de Química Industrial, ocurre un derrame moderado de una sustancia corrosiva sobre una mesa de trabajo. El docente, para no perder tiempo de clase, ordena a dos estudiantes que lo limpien rápidamente con un paño húmedo. ¿Qué norma de seguridad y prevención se está violando?",
        opciones: [
            "El docente viola el protocolo universal de manejo de materiales peligrosos (uso de kit antiderrame, EPP específico, lectura de la Hoja de Datos de Seguridad/MSDS), exponiendo a los estudiantes a un riesgo químico innecesario.",
            "Ninguna, porque el derrame fue clasificado visualmente como 'moderado' y limpiar el área de trabajo es parte de la competencia del estudiante.",
            "El protocolo de cuidado del mobiliario escolar, porque el paño húmedo esparcirá el químico dañando la superficie de la mesa permanentemente.",
            "La jerarquía de roles, ya que la limpieza en los laboratorios debe realizarla única y exclusivamente el personal de conserjería del politécnico."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Normativa Ambiental y Gestión de Riesgos en Centros Educativos. Mandar a alumnos sin protección especializada a recoger un químico corrosivo es una violación directa al protocolo de bioseguridad industrial. La actuación correcta exige consultar la MSDS de la sustancia química, evacuar si es necesario, y contener con barreras adecuadas utilizando personal capacitado o estudiantes solo bajo estricta simulación controlada y EPP Nivel C/B."
    },
    {
        id: 58,
        categoria: "Planificación",
        pregunta: "Un Centro Educativo Técnico Profesional rural no cuenta con conexión a internet para impartir el módulo de 'Comercio Electrónico' en la familia de Administración. ¿Qué estrategia de planificación debe implementar el Equipo de Gestión y el docente para garantizar el 'Saber Hacer' sin evadir el diseño curricular?",
        opciones: [
            "Sustituir el módulo de 'Comercio Electrónico' por horas adicionales de 'Contabilidad Básica', que es más útil para los negocios rurales.",
            "Diseñar Simuladores Offline (tiendas virtuales en red local LAN/localhost), usar capturas de interfaz y maquetación de plataformas locales para que los estudiantes adquieran la lógica de e-commerce aunque no estén conectados al exterior.",
            "Dictar el módulo de manera puramente teórica en la pizarra, evaluando los conceptos de la web mediante exámenes de falso y verdadero.",
            "Exigir a los estudiantes que paguen paquetes de datos de internet en sus celulares personales para poder realizar las prácticas del Estado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Principio de Flexibilidad y Contextualización del Currículo Dominicano. La falta de recursos no autoriza la mutilación del diseño curricular (Opciones A y C), ni la transferencia del costo operativo al alumno (Opción D). La simulación en redes locales (LAN) o servidores locales (XAMPP/WAMP) permite desarrollar la competencia procedimental exacta requerida por el CNC-RD garantizando el derecho a la educación integral."
    },
    {
        id: 59,
        categoria: "FCT",
        pregunta: "Durante la evaluación final de la FCT, existe una discrepancia severa: el Instructor de la Empresa evalúa al estudiante con 100 en su reporte, pero el Docente Tutor del politécnico revisó el Cuaderno de Reportes (bitácora) y encontró serias deficiencias técnicas, falta de terminología y ausencia de anexos. ¿Cómo se consolida la nota final?",
        opciones: [
            "Se acata la nota de la empresa (100) porque ellos son el sector productivo y su criterio pesa más que el criterio del maestro en asuntos laborales.",
            "El Docente Tutor anula la evaluación de la empresa e impone su propia calificación fundamentada en las evidencias del cuaderno de reportes del estudiante.",
            "La calificación final de la FCT es el resultado de la ponderación colegiada entre la evaluación de desempeño en la empresa (actitudes y práctica) y la evaluación de la memoria/portafolio por parte del Docente Tutor, prevaleciendo la rúbrica oficial del centro.",
            "Se llama a los padres del estudiante para mediar en la situación y decidir mediante un acuerdo si se queda la nota alta o se promedia."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual Operativo de Formación en Centros de Trabajo (FCT). La FCT tiene una calificación compuesta. La empresa evalúa el desempeño in situ (comportamiento, asimilación de rutinas), pero el centro educativo (Tutor) evalúa la competencia reflexiva y documental (El 'Saber' y 'Saber Hacer' sustentado en la memoria técnica). Ambas notas se ponderan según la normativa de evaluación institucional; la nota de la empresa no sustituye la revisión académica de evidencias."
    },
    {
        id: 60,
        categoria: "Evaluación",
        pregunta: "Al término de un proyecto de 'Electromecánica Automotriz', un estudiante entrega un alternador perfectamente reparado. Sin embargo, durante todo el semestre el estudiante no limpió su área, dejaba las herramientas tiradas y usaba lenguaje soez con sus compañeros (Saber Ser). Al evaluarlo, el estudiante alega: 'Yo vine a aprender mecánica, no modales'. ¿Cuál es la respuesta técnica y normativa del evaluador?",
        opciones: [
            "Aprobarlo con alta calificación para no desmotivar su talento manual, aconsejándole en privado que mejore su actitud para el futuro.",
            "El 'Saber Ser' (orden, limpieza, comunicación asertiva, ética profesional) es una Unidad de Competencia Transversal evaluable y de cumplimiento obligatorio. Al reprobar sistemáticamente los Criterios de Realización actitudinales, el estudiante no alcanza el perfil profesional y el módulo se considera 'Aún No Logrado'.",
            "Imponerle un castigo disciplinario en coordinación con Orientación, pero aprobarle la parte académica porque la mecánica y el comportamiento son áreas separadas del currículo.",
            "Bajarle 5 puntos de la nota final, lo cual es la penalidad máxima permitida por el reglamento escolar por temas de indisciplina leve en el taller."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular de la MTP (CNC-RD). En el sistema de Educación Técnico Profesional, el 'Saber Ser' no es una sugerencia decorativa ni un aspecto meramente disciplinario (como en la educación tradicional); es un componente intrínseco de la Competencia Laboral. Actitudes como la organización del puesto de trabajo y el respeto a pares son Criterios de Realización formales. Una falla crítica en la dimensión actitudinal impide la certificación de la competencia en su conjunto."
    },


    {
        id: 61,
        categoria: "Seguridad",
        pregunta: "Durante una práctica en el laboratorio de 'Administración de Redes', el docente observa que sale humo negro del Rack principal de servidores debido a un cortocircuito. Un estudiante toma rápidamente un extintor de agua presurizada (Clase A) que estaba en el pasillo y se dispone a rociar el equipo para evitar un incendio mayor. ¿Cuál debe ser la intervención inmediata del docente basada en la normativa de seguridad industrial?",
        opciones: [
            "Felicitar la rápida acción proactiva del estudiante, ya que el agua enfriará los componentes y evitará que el fuego se propague a las mesas de madera.",
            "Evacuar el aula sin intentar apagar el conato, bloquear la puerta y esperar a que el Cuerpo de Bomberos determine la causa del cortocircuito.",
            "Detener al estudiante inmediatamente, ordenar el corte del suministro eléctrico general (breaker principal), utilizar un extintor Clase C (CO2 o PQS) y ordenar la evacuación preventiva por riesgo de gases tóxicos.",
            "Permitir que el estudiante use el extintor de agua solo si primero se pone guantes de goma aislantes, garantizando así su seguridad personal."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Reglamento 522-06 de Seguridad y Salud en el Trabajo. Usar agua (Clase A) en un fuego eléctrico (Clase C) energizado es un riesgo mortal por electrocución. La obligación del docente garante es detener la acción insegura, cortar la fuente de energía, usar el agente extintor correcto (CO2 no daña los equipos, PQS sí pero es válido) y proteger la vida mediante evacuación ante humos poliméricos tóxicos."
    },
    {
        id: 62,
        categoria: "Evaluación",
        pregunta: "En el módulo de 'Elaboración de Productos Cárnicos', un estudiante prepara un embutido con un sabor y textura excepcionales. Sin embargo, el docente nota que el alumno no pesó los ingredientes ni siguió la ficha técnica, sino que añadió los condimentos 'al ojo' y 'probando'. Según los Criterios de Evaluación del currículo técnico, ¿cómo debe ser calificado este desempeño?",
        opciones: [
            "Se aprueba el RA con la nota máxima, ya que en la industria alimentaria el resultado final (el sabor y la aceptación del cliente) es el indicador definitivo de competencia.",
            "Se califica como 'Aún No Logrado'. En la formación técnica, la competencia exige 'estandarización y reproductibilidad'. Al obviar la ficha técnica, el estudiante demuestra no poseer el 'Saber Hacer' procedimental de un técnico industrial.",
            "Se aprueba el producto final, pero se le solicita al estudiante que redacte una receta basándose en lo que recuerda haber echado a la mezcla para completar el portafolio.",
            "Se le descuentan 5 puntos en la dimensión de 'seguimiento de instrucciones', pero se valida el módulo porque el producto cumple con los estándares sanitarios de consumo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Guía Metodológica MTP y Normas de Calidad Industrial. Un técnico profesional no es un operador empírico. El dominio del proceso (medición, formulación, ficha técnica) es innegociable porque garantiza la calidad estándar en la producción en masa. Un acierto empírico no certifica la competencia laboral estipulada en el CNC-RD."
    },
    {
        id: 63,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 5to de secundaria diagnosticado con TDAH (Trastorno por Déficit de Atención e Hiperactividad) se somete a una prueba práctica de 'Conciliación Bancaria'. Pasados los 45 minutos reglamentarios, el estudiante solo ha completado el 50% del ejercicio por distracciones constantes, aunque sus cálculos son correctos. ¿Qué dicta el protocolo de evaluación inclusiva?",
        opciones: [
            "Calificar el examen basándose únicamente en el 50% completado, asignando una nota de 50/100, ya que en las empresas reales no se otorgan extensiones de tiempo para tareas financieras críticas.",
            "Eximirlo del examen práctico y validarle la competencia mediante una investigación teórica sobre la historia de los bancos en República Dominicana.",
            "Aplicar un ajuste razonable de acceso (DUA), otorgándole tiempo extendido en un entorno controlado libre de estímulos visuales, permitiendo que demuestre su dominio del 'Saber Hacer'.",
            "Evaluar la prueba de forma colaborativa, permitiendo que su compañero de asiento le termine los cálculos faltantes."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2018 (Educación Inclusiva). La falta de concentración por una condición neurodivergente es una barrera de acceso, no una falta de capacidad cognitiva o técnica. Dar tiempo adicional o fragmentar la prueba es un 'ajuste razonable' obligatorio que no rebaja el estándar técnico (los cálculos deben estar bien), pero garantiza equidad en la demostración del RA."
    },
    {
        id: 64,
        categoria: "Planificación",
        pregunta: "El docente del módulo técnico de 'Sistemas de Inyección Automotriz' decide no incluir en su planificación las Unidades de Competencia Transversales (como 'Emprendimiento' y 'Ética Profesional'), argumentando en su informe que 'eso le corresponde a los profesores de ciencias sociales y de formación humana'. ¿Cuál es la evaluación administrativa de esta decisión?",
        opciones: [
            "Es una decisión correcta que respeta la especialización docente, permitiendo al maestro de taller concentrarse 100% en las habilidades mecánicas de sus alumnos.",
            "Es incorrecta. El diseño curricular por competencias establece que las competencias transversales (Saber Ser) deben integrarse y evaluarse obligatoriamente dentro del contexto de los módulos técnicos de la especialidad.",
            "Es aceptable siempre y cuando el docente entregue una carta de mutuo acuerdo firmada por el profesor de Ciencias Sociales asumiendo esa carga horaria.",
            "Es incorrecta únicamente si los estudiantes no han cursado todavía la materia de Formación Integral Humana y Religiosa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular de la MTP (Resoluciones del CNE). El perfil profesional es integral. El emprendimiento o la ética no se dan en el vacío; deben aplicarse a casos de inyección automotriz (ej: cómo presupuestar un taller, no engañar al cliente con repuestos). El docente técnico es responsable de certificar estas competencias transversales en su propia rúbrica."
    },
    {
        id: 65,
        categoria: "FCT",
        pregunta: "Una prestigiosa empresa industrial ofrece 10 plazas excelentes para pasantías de FCT en su planta de ensamblaje automatizado. Sin embargo, notifican al centro educativo que, por la naturaleza de la producción, el horario asignado a los estudiantes (menores de 18 años) será en el turno de 8:00 p.m. a 4:00 a.m. ¿Cómo debe proceder el coordinador de FCT?",
        opciones: [
            "Aceptar la oferta inmediatamente debido al alto nivel tecnológico de la empresa, y solicitar a los estudiantes que descansen bien durante la mañana.",
            "Negociar con la empresa la aceptación de las plazas bajo la condición de que los padres de los estudiantes firmen un acta notarial asumiendo toda la responsabilidad.",
            "Rechazar formalmente la oferta para ese turno y solicitar reubicación diurna, ya que la legislación prohíbe terminantemente el trabajo nocturno a menores de edad y el horario escolar de FCT.",
            "Aceptar la oferta, pero exigir a la empresa el pago de un salario mínimo y horas extras nocturnas para compensar el esfuerzo de los estudiantes."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Código de Trabajo de la RD (Libro Cuarto: Trabajo de Menores, Art. 246) y Reglamento FCT. Es ilegal emplear o someter a formación práctica a menores de 18 años en horario nocturno (después de las 8 pm) o en trabajos peligrosos/insalubres no controlados. El centro educativo cometería una infracción gravísima si firma ese acuerdo de FCT."
    },
    {
        id: 66,
        categoria: "Ética",
        pregunta: "El taller de 'Ebanistería' tiene escasez de lija y barniz. El docente organiza a los estudiantes de 6to para fabricar mesas de centro, las cuales el docente vende a vecinos de la comunidad. Con ese dinero en efectivo, el docente compra los insumos que faltan y muestra las facturas a los estudiantes para enseñarles 'transparencia'. ¿Cómo se tipifica administrativamente esta acción?",
        opciones: [
            "Como un excelente proyecto de 'Aprender Haciendo y Emprendimiento', desarrollando competencias de autogestión financiera en tiempo de crisis.",
            "Como una falta leve, ya que el docente debió pedir permiso verbal al director antes de realizar la venta.",
            "Como una falta ética y administrativa grave por manejo irregular de fondos públicos. Todo ingreso generado por bienes del centro debe ser depositado en la cuenta oficial de la Junta de Centro para su fiscalización.",
            "Como una acción legítima, siempre que el docente no se quede con ninguna ganancia personal y entregue el cambio sobrante a los estudiantes."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Reglamento de Juntas Descentralizadas y Ley 340-06. La autogestión de recursos es válida, pero NUNCA mediante el manejo de efectivo (caja chica informal) por parte del docente. El uso de materiales del Estado (maquinaria, madera base, electricidad) obliga a que cualquier retorno económico se fiscalice institucionalmente para evitar el delito de peculado."
    },
    {
        id: 67,
        categoria: "Seguridad",
        pregunta: "Durante la FCT en una empresa de manufactura, un estudiante sufre un corte superficial con una lámina de metal. El dispensario médico de la empresa lo cura y el estudiante sigue trabajando. El tutor del Politécnico se entera del incidente dos semanas después durante la visita de supervisión. ¿Qué fallo crítico ocurrió en el protocolo de la MTP?",
        opciones: [
            "Ninguno. Al ser un corte superficial que no requirió sutura, la empresa actuó correctamente resolviendo el problema de forma interna sin alarmar a la escuela.",
            "Se violó el protocolo de notificación inmediata. Todo accidente en FCT, sin importar su gravedad, debe ser notificado al centro educativo el mismo día para activar el seguimiento, informar a los padres y reportar al seguro escolar.",
            "El fallo fue del estudiante, quien debió abandonar su puesto de trabajo de inmediato y regresar al politécnico para ser curado por la enfermera escolar.",
            "La empresa debió descontarle de su nota final los materiales gastados en el dispensario médico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Reglamento FCT y Ley 136-03. El centro educativo mantiene la custodia legal (Rol Garante) compartida durante la pasantía. Ocultar o retrasar el reporte de un accidente impide al MINERD fiscalizar las condiciones de seguridad de la empresa y deja al centro vulnerable a demandas civiles por negligencia en la notificación a los tutores legales."
    },
    {
        id: 68,
        categoria: "Evaluación",
        pregunta: "En el módulo de 'Promoción de la Salud', una estudiante no pudo asistir a la práctica de 'Medición de Signos Vitales' en el laboratorio del centro. Al día siguiente, entrega al docente varias fotografías en su celular donde se le ve midiendo la presión arterial a su abuela en el balcón de su casa. ¿Puede el docente aceptar esto como evidencia de logro del RA?",
        opciones: [
            "Sí, la fotografía es un instrumento de evaluación válido en el portafolio digital y demuestra iniciativa y aplicación del conocimiento en el entorno real.",
            "No, las evidencias de 'Saber Hacer' procedimental de Salud deben generarse en entornos controlados mediante la técnica de 'Observación Directa' del docente para validar precisión, bioseguridad y protocolo.",
            "Sí, siempre y cuando la abuela de la estudiante firme un papel certificando que la presión arterial anotada era la correcta.",
            "No, porque el paciente debe ser obligatoriamente un estudiante del centro educativo, no un familiar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Guía de Evaluación MTP. Una foto estática no permite evaluar el proceso: cómo colocó el esfigmomanómetro, el ritmo de insuflación, o si desinfectó el equipo. En competencias críticas (salud, mecánica pesada, electricidad), la validación del desempeño requiere observación continua de las condiciones de ejecución por parte de un evaluador certificado."
    },
    {
        id: 69,
        categoria: "Planificación",
        pregunta: "Un docente de 'Desarrollo Web' considera que el Resultado de Aprendizaje estipulado en el Diseño Curricular ('Implementa bases de datos relacionales seguras') es demasiado avanzado para sus estudiantes de 4to año. Decide modificar su planificación y solo enseñar a crear tablas en Excel. ¿Qué principio normativo está vulnerando?",
        opciones: [
            "El principio de autonomía pedagógica, el cual indica que el docente no puede cambiar la tecnología si el director no lo autoriza por escrito.",
            "El carácter vinculante del Catálogo Nacional de Cualificaciones (CNC-RD). Los RA son estándares nacionales innegociables diseñados con el sector productivo; el docente puede adaptar la estrategia, pero no rebajar o mutilar la competencia a lograr.",
            "Ninguno. La adecuación curricular permite al maestro simplificar el contenido si diagnostica que el grupo no tiene las bases previas de matemáticas.",
            "El principio de evaluación continua, ya que evaluar Excel es más difícil que evaluar bases de datos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Resoluciones del Consejo Nacional de Educación sobre el Diseño Curricular MTP. La cualificación técnica está homologada a nivel nacional e internacional. Si el estudiante se gradúa, el Estado certifica que sabe bases de datos relacionales. Rebajar el estándar crea una estafa académica y un técnico incompetente para el mercado laboral."
    },
    {
        id: 70,
        categoria: "Evaluación",
        pregunta: "Al revisar el expediente de evaluación de un estudiante en riesgo de reprobación, el coordinador técnico nota que en todos los instrumentos prácticos fallidos (rúbricas de soldadura y corte), el docente solo marcó la casilla 'Aún No Logrado' y escribió la palabra 'Deficiente' al final de la hoja. ¿Qué criterio pedagógico de evaluación no se está cumpliendo?",
        opciones: [
            "La economía de tiempo; el docente actuó bien porque un estudiante deficiente no requiere explicaciones largas.",
            "La objetividad estadística; debió colocar un número del 1 al 10 en lugar de una palabra.",
            "La Retroalimentación Formativa (Feedforward). La rúbrica debe evidenciar explícitamente en qué aspecto específico falló el estudiante (ej: exceso de temperatura, postura incorrecta) para permitir la recuperación de los aprendizajes.",
            "El principio de autoevaluación, porque era el estudiante quien debía escribir por qué falló, no el profesor."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023 sobre Evaluación de los Aprendizajes. La evaluación formativa es obligatoria. Un registro que solo sanciona el error sin describir la brecha de desempeño carece de valor pedagógico y vulnera el derecho del estudiante a un proceso de mejora continua antes de la prueba extraordinaria/completiva."
    },
    {
        id: 71,
        categoria: "Inclusión",
        pregunta: "En el bachillerato de 'Artes Gráficas', hay una estudiante con hipoacusia profunda (sorda profunda). Durante las clases prácticas en el laboratorio de Mac, el docente tiene la costumbre de dar instrucciones orales de espaldas al grupo mientras señala la pantalla grande. ¿Cómo afecta esto la accesibilidad al aprendizaje?",
        opciones: [
            "No afecta, porque en Diseño Gráfico lo importante es la percepción visual y la estudiante puede deducir los pasos viendo la pantalla del docente.",
            "Constituye una barrera excluyente. Al hablar de espaldas o en penumbra, el docente anula la posibilidad de lectura labio-facial. Debe implementar apoyo visual, hablar de frente y proveer manuales impresos del paso a paso.",
            "Afecta la disciplina, ya que la estudiante sorda tendrá que estar interrumpiendo a sus compañeros para preguntar qué dijo el profesor.",
            "Se soluciona eximiendo a la estudiante de la teoría y evaluándola solo por los dibujos que entregue al final del mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13 sobre Discapacidad y Marco de Diseño Universal (DUA). Las metodologías docentes tradicionales suelen ser capacitistas. Ajustar la posición corporal, la iluminación y los canales de comunicación (visual/escrito) es una obligación metodológica para garantizar la equidad en la instrucción procedimental."
    },
    {
        id: 72,
        categoria: "FCT",
        pregunta: "Un estudiante del Técnico en 'Mecanizado' se niega a realizar su FCT en la zona industrial asignada por el politécnico porque 'le queda a dos pasajes en guagua'. En su lugar, exige que se le permita hacer la pasantía en un taller informal de desabolladura que queda frente a su casa, el cual no tiene maquinarias CNC ni RNC. ¿Qué decisión toma el coordinador de FCT?",
        opciones: [
            "Obligar al taller informal a firmar un acuerdo con el politécnico para acomodar la preferencia del estudiante y evitar la deserción.",
            "Denegar la petición. La FCT debe realizarse en Centros Colaboradores evaluados que garanticen la tecnología y perfil del CNC-RD. Si el estudiante rechaza plazas válidas sin causa mayor, reprueba el módulo por inasistencia técnica.",
            "Aceptar el taller informal, pero exigirle al estudiante que busque videos en YouTube de máquinas CNC para compensar lo que no verá en la empresa de su casa.",
            "Darle una nota de 70 de manera administrativa y no enviarlo a ninguna pasantía por conflictivo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Reglamento de FCT. El MINERD no puede delegar la formación en empresas que no cumplan el Perfil de Puesto idóneo (equipamiento, formalidad, seguridad). La FCT es un módulo académico obligatorio; la conveniencia geográfica personal no justifica la degradación del estándar formativo técnico."
    },
    {
        id: 73,
        categoria: "Seguridad",
        pregunta: "El MINERD ha retrasado la entrega del presupuesto y el taller de 'Agricultura' no cuenta con guantes de carnaza ni botas de goma. El docente debe impartir la Unidad de 'Manejo de Herramientas de Corte (Machetes y Hachas)'. Decide suspender la práctica física y dictar una clase teórica sobre afilado. ¿Cómo se juzga su actuación?",
        opciones: [
            "Como negligencia y falta de compromiso, pues debió pedir prestadas las herramientas a los campesinos de la zona para no atrasar el currículo.",
            "Como una acción prudente y legalmente correcta. El docente tiene el deber de rehusar la ejecución de tareas de alto riesgo si las condiciones de Equipo de Protección Personal (EPP) y bioseguridad no están garantizadas.",
            "Como exagerada, ya que los estudiantes de zonas rurales están acostumbrados a usar machetes desde niños sin guantes ni botas.",
            "Como falta de autoridad, debiendo exigir que los estudiantes compren su propio equipo para el día siguiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley General de Educación 66-97 y Reglamento 522-06. Ninguna meta académica está por encima del derecho a la integridad física. El principio de precaución exige que ante la carencia de EPP en tareas contundentes/cortantes, la actividad se suspenda. La 'costumbre' comunitaria (opción C) no exime de responsabilidad institucional."
    },
    {
        id: 74,
        categoria: "Ética",
        pregunta: "Durante un examen práctico en el laboratorio de programación, el docente detecta que un estudiante en red local está utilizando Inteligencia Artificial (ChatGPT) para generar el bloque de código completo que resuelve el problema planteado, haciéndolo pasar por suyo. ¿Cuál es el proceder evaluativo correcto frente a la disrupción tecnológica?",
        opciones: [
            "Calificar con 100 puntos, valorando que el estudiante demostró una competencia del siglo XXI ('Saber automatizar').",
            "Reprobar la prueba (RA no logrado) e iniciar un abordaje formativo sobre Ética Digital. El instrumento evalúa el 'Saber Hacer' algorítmico del estudiante (lógica humana); tercerizar la ejecución de una evaluación sumativa constituye fraude académico.",
            "Permitir su uso, pero exigir que el estudiante también imprima el código y lo lea en voz alta frente a sus compañeros.",
            "Expulsar al estudiante del politécnico y prohibir permanentemente el acceso a internet en los laboratorios del MINERD."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Evaluación MTP y Reglamento de Convivencia. Si bien la IA es una herramienta válida en el aula para aprendizaje, su uso para evadir la demostración personal de una competencia fundamental (pensamiento lógico/sintaxis) durante un instrumento de certificación es fraude (plagio cibernético). Se sanciona la evidencia, no se expulsa al alumno."
    },
    {
        id: 75,
        categoria: "Planificación",
        pregunta: "Al supervisar la labor de un docente de nuevo ingreso en el área de 'Logística', el coordinador nota que de las 10 horas semanales del módulo, el docente pasa 8 horas dictando teoría en la pizarra y solo lleva a los alumnos 2 horas al almacén del politécnico a realizar inventario. ¿Qué falla estructural presenta esta planificación?",
        opciones: [
            "Que la teoría debe darse en diapositivas de PowerPoint y no dictada en la pizarra para ser más moderna.",
            "Inversión de la carga pragmática de la MTP. En el enfoque por competencias, el currículo exige que un mínimo del 60% al 70% del tiempo se dedique a la ejecución práctica en taller o laboratorio (Saber Hacer), subordinando la teoría a la necesidad de la práctica.",
            "Que los estudiantes se van a cansar de estar parados en el almacén por 2 horas seguidas.",
            "Ninguna, porque primero hay que enseñar toda la teoría del semestre antes de permitir que los estudiantes toquen las cajas y los equipos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Guía Metodológica para la MTP. La educación técnica se fundamenta en el 'Aprender Haciendo'. El modelo deductivo (primero toda la teoría y al final la práctica) está obsoleto. El conocimiento (Saber) debe impartirse de forma integrada y simultánea con la actividad motriz o procedimental (Saber Hacer)."
    },
    {
        id: 76,
        categoria: "Seguridad",
        pregunta: "En una inspección rutinaria al taller de 'Procesamiento de Productos Lácteos', el Técnico Distrital encuentra soda cáustica (usada para la limpieza de equipos) almacenada en botellas plásticas de refresco de naranja, sin etiquetas formales, puestas en la misma mesa donde los estudiantes empaquetan queso. ¿Qué protocolo se ha violado de forma crítica?",
        opciones: [
            "Se ha violado el protocolo de reciclaje, ya que las botellas de refresco deben ir al contenedor amarillo.",
            "Múltiples infracciones críticas de Bioseguridad: re-envasado de químicos corrosivos en envases de consumo humano (riesgo mortal de ingesta accidental), falta de etiquetado SGA (Sistema Globalmente Armonizado) y almacenamiento conjunto de químicos con alimentos.",
            "Ninguno, si los estudiantes ya fueron advertidos verbalmente por el profesor de que esa botella contiene veneno y no jugo.",
            "La falta de estética del taller, ya que las botellas dan aspecto de desorden frente a los visitantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Reglamentos del Ministerio de Medio Ambiente y Salud Pública. El re-envasado de químicos en recipientes alimenticios es la causa número uno de envenenamiento industrial y escolar accidental. Las advertencias verbales (opción C) carecen de validez legal en la gestión de riesgos químicos."
    },
    {
        id: 77,
        categoria: "FCT",
        pregunta: "A mitad del programa de FCT, un estudiante de 'Refrigeración' demuestra ser tan bueno que la empresa le ofrece un contrato laboral formal pagándole el salario mínimo. Sin embargo, lo sacan de la ruta técnica de reparaciones y lo ponen a tiempo completo a despachar piezas en el mostrador para cubrir una vacante urgente. ¿Cómo afecta esto al módulo FCT?",
        opciones: [
            "Es el escenario ideal, el politécnico certifica inmediatamente el FCT con 100 puntos porque el objetivo principal era la inserción laboral del joven.",
            "Afecta negativamente y requiere intervención. La firma de un contrato laboral no exime a la empresa de cumplir con la rotación del Programa Formativo. Si el estudiante se queda solo despachando, no desarrollará los RA técnicos (diagnóstico y reparación) exigidos para su graduación.",
            "Afecta a los demás compañeros porque se pondrán celosos del salario que está cobrando el estudiante.",
            "No afecta, un técnico en refrigeración solo necesita saber los nombres de las piezas para poder emprender su propio negocio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Reglamento FCT. El FCT es un módulo estrictamente formativo. La inserción laboral anticipada es un éxito de vinculación, PERO el estudiante sigue siendo sujeto de evaluación curricular. El tutor debe exigir que, a pesar del contrato, el estudiante cumpla las horas requeridas en las áreas operativas de refrigeración, no solo labores administrativas aisladas."
    },
    {
        id: 78,
        categoria: "Evaluación",
        pregunta: "Un docente de 'Desarrollo de Software' decide implementar metodologías activas. En el examen final, entrega las rúbricas a los propios estudiantes para que se evalúen entre ellos (Coevaluación) e ingresa directamente esos resultados al SIGERD (Sistema de Gestión) como la nota definitiva y final del módulo. ¿Cuál es el error legal en este procedimiento?",
        opciones: [
            "Que debió incluir también la autoevaluación (que el estudiante se ponga su propia nota) y promediarla con la nota de los compañeros.",
            "Ninguno, el diseño curricular fomenta la coevaluación para desarrollar el juicio crítico y la transparencia en el aula.",
            "La coevaluación es una excelente estrategia formativa, pero es ilegal usarla como única fuente para asentar la calificación sumativa/certificativa. La responsabilidad de validar y dictaminar el logro de la competencia (Saber Hacer) es exclusiva e indelegable del docente técnico.",
            "Que los estudiantes tienden a ponerse calificaciones altas entre amigos, lo que daña el prestigio de la institución frente al Ministerio."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación sumativa o de certificación da fe pública (por parte del Estado y el Docente Colegiado) de que un individuo tiene la pericia para operar sin peligro en la sociedad. Delegar esta certificación en pares (estudiantes no titulados) es un abandono de funciones y un fraude procesal."
    },
    {
        id: 79,
        categoria: "Inclusión",
        pregunta: "En el Politécnico, una estudiante brillante de origen extranjero en situación de irregularidad migratoria (sin cédula ni residencia, matriculada provisionalmente) llega a la etapa de FCT en 'Contabilidad'. El docente afirma que no puede enviarla a ninguna empresa porque no tiene los documentos de identidad para firmar en RRHH, y propone reprobarla administrativamente. ¿Es correcta la postura del docente?",
        opciones: [
            "Sí, las empresas dominicanas son formales y exigen cédula para asegurar a las personas en riesgos laborales; no se puede hacer FCT sin papeles.",
            "No. El Sistema Educativo Dominicano garantiza el derecho inalienable a la educación. El centro educativo y la dirección de FCT deben gestionar una 'Empresa Colaboradora' flexible o un proyecto de pasantía interna/ONG utilizando la Identificación Escolar del SIGERD, asegurando que adquiera la competencia técnica.",
            "Sí, porque la prioridad del Estado es formar a los nacionales, y la estudiante debió arreglar sus papeles antes de llegar a sexto de secundaria.",
            "No, el docente debe prestarle su propio número de cédula a la estudiante para que pueda registrarse en la plataforma de pasantes de la empresa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución de la RD, Ley 136-03 y Circulares de Inclusión MINERD. El derecho a la educación integral no está condicionado al estatus migratorio. El centro no puede truncar la titulación técnica de un menor por trabas burocráticas empresariales; debe buscar alternativas institucionales o proyectos de FCT en simuladores fiscales/internos."
    },
    {
        id: 80,
        categoria: "Ética",
        pregunta: "En el taller de 'Metalmecánica', un grupo de estudiantes esconde constantemente las herramientas de un compañero como forma de 'broma' y novatada. El docente lo observa en repetidas ocasiones, sonríe y no interviene, afirmando que 'en los talleres de hombres hay que desarrollar carácter y aguantar presión'. ¿Cuáles son las implicaciones legales de esta omisión?",
        opciones: [
            "Ninguna, fomenta el 'Saber Ser' y la adaptación a los micro-climas laborales que existen en el sector obrero real.",
            "Constituye complicidad en acoso escolar (Bullying). Además, en un taller de maquinado, la sustracción de herramientas genera frustración, prisas y estrés, factores causales directos de accidentes laborales graves (amputaciones). El docente incurre en falta administrativa pasible de destitución.",
            "Implicación menor; el docente solo debería intervenir si las herramientas perdidas son propiedad del centro y no de uso personal.",
            "Una excelente oportunidad para enseñar al estudiante afectado cómo fabricar sus propias herramientas y no depender de nadie."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (Protección a NNA), Normas de Convivencia Escolar y Seguridad MTP. La tolerancia de dinámicas abusivas y machistas en espacios de alto riesgo vulnera los derechos humanos y atenta contra la seguridad industrial básica. El docente es responsable civil y penalmente de mantener la disciplina y seguridad psicosocial en el recinto."
    },
  {
    id: 81,
    categoria: "Competencias Docentes Generales",
    especialidad: "Ética y Conducta Profesional",
    pregunta: "Un docente de la especialidad de Informática del segundo ciclo de secundaria crea un grupo de WhatsApp privado con tres estudiantes de sexto grado para darles seguimiento exclusivo sobre un proyecto de desarrollo de software, fuera del horario del politécnico y sin la presencia de los padres o tutores. ¿Qué valoración técnico-normativa corresponde a esta situación?",
    opciones: [
      "El docente actúa de manera correcta porque fomenta el uso de las TIC y el aprendizaje cooperativo avanzado según las bases curriculares.",
      "El docente viola el Código de Ética establecido en la Orden Departamental 22-2023, ya que las comunicaciones digitales deben realizarse por canales oficiales del MINERD, incluir a los padres o tutores y tener un fin estrictamente pedagógico institucional.",
      "El docente puede mantener el grupo privado siempre que los estudiantes sean mayores de 16 años y firmen un consentimiento escrito de participación en el proyecto.",
      "El docente debe solicitar una autorización verbal inmediata al Director del politécnico para convalidar el canal de comunicación empleado."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Orden Departamental 22-2023 prohíbe la creación de canales de comunicación informales, directos o privados entre el personal docente y los estudiantes sin la inclusión de los padres, tutores y fuera de los entornos institucionales del MINERD, con la finalidad de resguardar los derechos y la integridad de los menores.",
    fundamentoNormativo: {
      documento: "Orden Departamental No. 22-2023 que crea el Código de Ética",
      capitulo: "Capítulo II: De las Relaciones en el Entorno Escolar",
      apartado: "Artículos sobre límites en el uso de herramientas tecnológicas y redes de comunicación",
      justificacion: "Regula y limita la comunicación digital entre docentes y alumnos, ordenando la obligatoriedad de usar canales formales e institucionales."
    },
    competenciaEvaluada: "Cumplimiento del código de ética y la normativa de protección de Niños, Niñas y Adolescentes (NNA)",
    nivelDificultad: "Alta"
  },
  {
    id: 82,
    categoria: "Competencias Docentes Generales",
    especialidad: "Evaluación de los Aprendizajes",
    pregunta: "Durante el desarrollo de un Módulo Formativo de la especialidad de Contabilidad y Finanzas, un docente decide evaluar la competencia específica utilizando únicamente un examen escrito teórico de 50 preguntas de opción múltiple al final del período. Los estudiantes externan su inconformidad alegando que no han podido demostrar su dominio procedimental. ¿Qué principio del enfoque curricular ha sido vulnerado?",
    opciones: [
      "El principio de acumulación de conocimientos teóricos indispensables para las pruebas nacionales de fin de ciclo.",
      "El enfoque de evaluación auténtica y por evidencias contemplado en el currículo dominicano, el cual exige que en la Modalidad Técnico Profesional se evalúen desempeños y productos reales del perfil técnico.",
      "El derecho de cátedra del docente que le faculta a determinar de manera autónoma el tipo de instrumento evaluativo según la Ordenanza 03-2017.",
      "La vinculación directa con el examen de admisión requerido por las universidades del sector productivo nacional."
    ],
    respuestaCorrecta: 1,
    explicacion: "El diseño curricular basado en competencias de la República Dominicana prescribe la evaluación auténtica. En educación técnica, evaluar solo con exámenes memorísticos contradice la naturaleza procedimental y actitudinal de los Resultados de Aprendizaje (RA), requiriendo instrumentos que evalúen productos o simulaciones de desempeño real.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Ordenanza 03-2017",
      capitulo: "Componente de la Evaluación de los Aprendizajes",
      apartado: "Tipos de evaluación y recolección de evidencias",
      justificacion: "Establece que la evaluación debe ser integral, continua y basada en el desempeño técnico, requiriendo evidencias que demuestren el saber hacer."
    },
    competenciaEvaluada: "Diseño y aplicación de estrategias de evaluación auténtica orientadas al enfoque por competencias",
    nivelDificultad: "Alta"
  },
  {
    id: 83,
    categoria: "Competencias Docentes Generales",
    especialidad: "Inclusión Educativa y Atención a la Diversidad",
    pregunta: "Un estudiante con discapacidad motriz moderada ingresa al grado de 5to de la especialidad de Gestión Administrativa y Tributaria. El docente del módulo formativo asume que el estudiante no podrá cumplir con los Resultados de Aprendizaje porque el aula técnica se encuentra en un segundo nivel sin rampa de acceso y el mobiliario no está adecuado. ¿Cuál es el procedimiento normativo correcto en este caso?",
    opciones: [
      "Sugerir al estudiante o a sus tutores el traslado inmediato a una modalidad general para mitigar riesgos de accidentes en las instalaciones del politécnico.",
      "Coordinar con el equipo directivo y el Departamento de Orientación y Psicología la aplicación de ajustes razonables, tales como reubicar el aula técnica al primer nivel y adaptar el mobiliario, garantizando su permanencia y participación plena según la Ordenanza 05-2024.",
      "Exonerar al estudiante de las actividades prácticas de simulación de oficina y evaluarlo exclusivamente mediante monografías de investigación teórica.",
      "Suspender de forma temporal la asistencia del alumno hasta que el MINERD concluya una remodelación estructural integral del plantel educativo."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Ordenanza 05-2024 sobre Educación Inclusiva obliga a los centros educativos dominicanos a implementar ajustes razonables de carácter físico, metodológico y organizativo para eliminar las barreras de aprendizaje y garantizar la permanencia plena del estudiantado en cualquier modalidad de su elección.",
    fundamentoNormativo: {
      documento: "Ordenanza No. 05-2024 que regula la Educación Inclusiva en el Sistema Educativo Dominicano",
      capitulo: "Capítulo III: De los Ajustes Razonables y la Accesibilidad Universal",
      apartado: "Artículos sobre la eliminación de barreras físicas y curriculares en centros de educación secundaria",
      justificacion: "Estipula el derecho de los estudiantes a recibir educación adaptada en su propio entorno escolar mediante la gestión de adecuaciones razonables oportunas."
    },
    competenciaEvaluada: "Gestión de la inclusión educativa y aplicación de ajustes razonables en entornos de la Educación Técnico Profesional (ETP)",
    nivelDificultad: "Alta"
  },
  {
    id: 84,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Formación en Centros de Trabajo (FCT)",
    pregunta: "Durante el período de Formación en Centros de Trabajo (FCT), una empresa receptora de pasantías solicita que un estudiante de la especialidad de Servicios Turísticos realice de manera exclusiva y a tiempo completo labores de conserjería general durante sus 8 horas diarias, argumentando sobrecarga operativa en esa área. ¿Cómo debe proceder el Coordinador de FCT del politécnico?",
    opciones: [
      "Aceptar la solicitud de la empresa para proyectar una imagen de colaboración, adaptabilidad y flexibilidad del centro educativo ante el sector socioproductivo.",
      "Intervenir ante la empresa para reorientar las actividades del estudiante según el plan formativo y el convenio suscrito, ya que las actividades de FCT deben responder estrictamente a los Resultados de Aprendizaje (RA) del perfil profesional normado por la Ordenanza 03-2017.",
      "Modificar el plan curricular interno del Módulo Formativo para convalidar las tareas de conserjería como un nuevo indicador de logro técnico acumulativo.",
      "Instar al estudiante a cumplir con las tareas asignadas y prometerle compensar la calificación con una bonificación automática en los módulos teóricos ordinarios."
    ],
    respuestaCorrecta: 1,
    explicacion: "De acuerdo con el Reglamento de FCT y la Ordenanza 03-2017, la pasantía formativa no constituye un vínculo laboral y sus actividades deben alinearse estrictamente al programa formativo del título. Cualquier tarea que desvirtúe los Resultados de Aprendizaje debe ser corregida por el Coordinador de FCT.",
    fundamentoNormativo: {
      documento: "Ordenanza 03-2017 / Reglamento de Formación en Centros de Trabajo (FCT)",
      capitulo: "Título V: De la Vinculación con el Sector Socioproductivo y el Desarrollo de la FCT",
      apartado: "Artículos sobre deberes del centro, plan formativo concertado y derechos del alumno pasante",
      justificacion: "Determina que la permanencia en la empresa tiene fines pedagógicos insustituibles y debe regirse por las competencias establecidas en el Catálogo Nacional de Cualificaciones."
    },
    competenciaEvaluada: "Supervisión, gestión y aseguramiento de la calidad pedagógica en los procesos de Formación en Centros de Trabajo (FCT)",
    nivelDificultad: "Alta"
  },
  {
    id: 85,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Seguridad Industrial y Gestión de Riesgos",
    pregunta: "En el taller de Electromecánica de un politécnico, un estudiante se rehúsa a utilizar las gafas de protección de impacto y el calzado dieléctrico durante una práctica de mecanizado y conexionado eléctrico, argumentando que le provocan calor excesivo e incomodidad física. ¿Cuál es el accionar correcto del docente a cargo?",
    opciones: [
      "Permitirle realizar la práctica técnica sin el Equipo de Protección Personal (EPP) bajo un descargo de responsabilidad firmado de puño y letra por el alumno.",
      "Impedir inmediatamente el acceso del estudiante al área de máquinas de taller y aplicar el protocolo de seguridad establecido, debido a que el uso de EPP es obligatorio, mandatorio y no negociable según el Manual de Gestión de Talleres.",
      "Asignarle una actividad de investigación teórica en el aula común para que el alumno no pierda la puntuación correspondiente al indicador de logro del día.",
      "Autorizar el uso parcial de los EPP únicamente en los momentos en que se manipulen corrientes eléctricas superiores a los 220 voltios."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Manual de Gestión de Talleres de la Dirección de Educación Técnico Profesional del MINERD establece que la seguridad industrial es prioritaria. Ningún estudiante puede ingresar o trabajar en zonas de riesgo sin el EPP normado; el docente incurriría en una falta grave de supervisión si lo consiente.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios de la Dirección de Educación Técnico Profesional (MINERD)",
      capitulo: "Sección III: Protocolos de Seguridad, Higiene y Salud Ocupacional en Contextos Escolares",
      apartado: "Normativa de uso obligatorio de Equipos de Protección Personal (EPP)",
      justificacion: "Dispone el carácter imperativo del cumplimiento de las normas de protección biológica, física y mecánica dentro de todos los talleres técnicos de la red pública y privada."
    },
    competenciaEvaluada: "Aplicación y fiscalización de protocolos de seguridad industrial, salud ocupacional y prevención de riesgos en talleres",
    nivelDificultad: "Alta"
  },
  {
    id: 86,
    categoria: "Competencias Docentes Generales",
    especialidad: "Estrategias Metodológicas Activas (ABP)",
    pregunta: "Un docente del área de Desarrollo y Administración de Aplicaciones Informáticas implementa la estrategia de Aprendizaje Basado en Proyectos (ABP). Diseña una situación de aprendizaje donde los estudiantes deben programar un software de inventario real requerido por una microempresa del entorno geográfico del centro educativo. Respecto al marco curricular dominicano, ¿cómo se valora esta propuesta metodológica?",
    opciones: [
      "Es inapropiada porque la vinculación formal con empresas externas está reservada exclusivamente para el período de pasantías de FCT en sexto grado.",
      "Es altamente pertinente porque el ABP en la Modalidad Técnico Profesional fomenta la movilización de saberes, el desarrollo cooperativo y responde a necesidades reales del sector socioproductivo local.",
      "Es restrictiva debido a que expone al politécnico a litigios legales por derechos de propiedad intelectual con empresas comerciales no reguladas por el MINERD.",
      "Es válida únicamente si la microempresa realiza una donación económica formal o de licencias de software al laboratorio del politécnico."
    ],
    respuestaCorrecta: 1,
    explicacion: "Las Bases del Currículo Dominicano impulsan las estrategias de aprendizaje activo como el ABP. En la educación técnico-profesional, conectar el aprendizaje con demandas reales del sector socioproductivo potencia las competencias profesionales y transversales de los estudiantes de forma significativa.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Lineamientos Curriculares de la Modalidad Técnico Profesional",
      capitulo: "Capítulo de Estrategias de Enseñanza y Aprendizaje por Competencias",
      apartado: "El Aprendizaje Basado en Proyectos y la vinculación con el entorno socioproductivo",
      justificacion: "Valida la articulación comunitaria y empresarial como un recurso didáctico potente para el desarrollo de competencias fundamentales y específicas."
    },
    competenciaEvaluada: "Planificación didáctica y ejecución de estrategias metodológicas activas orientadas al perfil profesional técnico",
    nivelDificultad: "Alta"
  },
  {
    id: 87,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Resultados de Aprendizaje y Criterios de Evaluación",
    pregunta: "Un docente de la especialidad de Mecanizado de Metales evalúa un producto final fabricado por un estudiante. Al contrastarlo, nota que posee un acabado geométrico impecable, pero el alumno requirió el doble del tiempo estipulado en el Criterio de Evaluación (CE) del Módulo Formativo, el cual exige estándares de optimización temporal industrial. ¿Qué dictamen técnico metodológico debe emitir el docente?",
    opciones: [
      "Asignar la calificación máxima porque la calidad estética y estructural del producto subsana cualquier demora en el contexto escolar.",
      "Determinar que el Resultado de Aprendizaje (RA) no ha sido alcanzado plenamente en este proceso evaluativo, debido a que los Criterios de Evaluación actúan como referentes integrales de calidad y eficiencia estandarizados por el Catálogo Nacional de Cualificaciones.",
      "Calcular un promedio matemático simple entre la excelente puntuación del acabado y la penalización por el retraso para otorgar una nota mínima de aprobación.",
      "Modificar el Criterio de Evaluación del Módulo Formativo de manera autónoma para flexibilizar los tiempos de entrega generales del grupo pedagógico."
    ],
    respuestaCorrecta: 1,
    explicacion: "En el enfoque de la educación técnica basada en competencias del MINERD, los Criterios de Evaluación definen las condiciones obligatorias que validan el logro de un RA. El cumplimiento parcial (calidad sin eficiencia temporal) indica que la competencia laboral formal no se ha consolidado según el estándar del catálogo.",
    fundamentoNormativo: {
      documento: "Ordenanza 03-2017 / Catálogo Nacional de Cualificaciones de la República Dominicana",
      capitulo: "Estructura de los Módulos Formativos y Unidades de Competencia",
      apartado: "Función pedagógica y evaluativa de los Resultados de Aprendizaje (RA) y Criterios de Evaluación (CE)",
      justificacion: "Los Criterios de Evaluación son normativos y prescriptivos; garantizan que el egresado cumpla de forma exacta con los requerimientos técnicos exigidos por el sector laboral."
    },
    competenciaEvaluada: "Evaluación técnica del aprendizaje basada en criterios e indicadores de cualificación profesional",
    nivelDificultad: "Alta"
  },
  {
    id: 88,
    categoria: "Competencias Docentes Generales",
    especialidad: "Gestión del Aula y Convivencia Armoniosa",
    pregunta: "Durante un debate técnico en el aula de 6to grado de la especialidad de Logística y Transporte, dos estudiantes se insultan verbalmente de forma agresiva debido a una discrepancia sobre canales de distribución de mercancías. El docente interviene de inmediato y dictamina la expulsión definitiva de ambos alumnos del centro educativo por el resto del año escolar. ¿Qué evaluación normativa amerita el accionar del docente?",
    opciones: [
      "Es una medida correcta porque ejerce un control estricto del aula y sienta un precedente de disciplina rigurosa dentro de la modalidad técnica.",
      "Incurre en una falta grave que vulnera el derecho fundamental a la educación y el principio de proporcionalidad, ya que las Normas de Convivencia Armoniosa prohíben la expulsión expedita y exigen agotar el debido proceso disciplinario sin privar de la escolaridad.",
      "Es adecuada, siempre y cuando se cuente con la posterior ratificación verbal por parte del Coordinador Pedagógico del politécnico.",
      "Debió sustituir la expulsión definitiva por una sanción de trabajo forzoso continuo en las labores de limpieza del almacén de simulación del centro por un período de un mes."
    ],
    respuestaCorrecta: 1,
    explicacion: "Las Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa prohíben taxativamente medidas extremas de expulsión que vulneren la Ley 66-97 o la Ley 136-03. Las sanciones deben poseer un carácter restaurativo y formativo, ejecutadas por las instancias correspondientes del centro tras agotar el debido proceso.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa en los Centros Educativos Públicos y Privados",
      capitulo: "Capítulo IV: De las Faltas, sus Medidas Educativas y Disciplinarias y el Debido Proceso",
      apartado: "Artículos relativos a la tipificación de faltas graves y la prohibición de exclusión escolar directa",
      justificacion: "Regula los procedimientos disciplinarios e impide la vulneración del derecho a la permanencia escolar a través de decisiones unilaterales de los docentes."
    },
    competenciaEvaluada: "Gestión del clima de aula, resolución pacífica de conflictos y aplicación de normativas de convivencia institucional",
    nivelDificultad: "Alta"
  },
  {
    id: 89,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Gestión de Laboratorios y Protocolos de Emergencia",
    pregunta: "En el laboratorio de la especialidad de Química Industrial se produce un derrame menor de un reactivo corrosivo debido a la manipulación incorrecta de un matraz por parte de un alumno. El docente a cargo no cuenta con las Fichas de Datos de Seguridad (MSDS) visibles y desconoce el paradero del kit de neutralización química. De acuerdo con las normas de gestión técnica de espacios formativos, ¿qué se evidencia en este escenario?",
    opciones: [
      "Una situación habitual y aceptable, puesto que los reactivos utilizados en el ciclo de secundaria poseen baja concentración industrial.",
      "Un incumplimiento crítico de los estándares del Manual de Gestión de Talleres y Laboratorios de la DETP, el cual dictamina la obligatoriedad de indexar las fichas de seguridad y mantener operativos los recursos de mitigación ante emergencias.",
      "La necesidad regulatoria de clausurar definitivamente el laboratorio y transferir los Resultados de Aprendizaje de la especialidad a un formato 100% digitalizado.",
      "Que la responsabilidad directa del resguardo, limpieza y neutralización química de los espacios formativos recae únicamente sobre el personal de conserjería general."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Manual de Gestión de Talleres y Laboratorios de la Dirección de Educación Técnico Profesional exige que todo entorno donde se manipulen sustancias químicas posea un mapa de riesgos, fichas de seguridad accesibles y herramientas de contingencia operativas para asegurar la salud de los estudiantes y docentes.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios de la Dirección de Educación Técnico Profesional (MINERD)",
      capitulo: "Sección V: Lineamientos Operativos para la Administración de Laboratorios Técnicos y Manejo de Reactivos",
      apartado: "Protocolos de almacenamiento de sustancias, etiquetado y respuestas rápidas ante incidentes",
      justificacion: "Establece las directrices imperativas de organización de insumos peligrosos y la preservación de la seguridad colectiva en los entornos de aprendizaje técnico."
    },
    competenciaEvaluada: "Administración, control de riesgos y aplicación de planes de contingencia en laboratorios especializados",
    nivelDificultad: "Alta"
  },
  {
    id: 90,
    categoria: "Competencias Docentes Generales",
    especialidad: "Planificación Curricular",
    pregunta: "Durante la elaboración de su planificación docente didáctica, un profesor de la especialidad de Agropecuaria redacta un indicador de logro completamente nuevo que no figura en el documento de diseño curricular del MINERD, justificando que la infraestructura productiva de su politécnico cuenta con tecnologías avanzadas no contempladas en la norma nacional. ¿Qué evaluación amerita esta acción?",
    opciones: [
      "Es una iniciativa correcta, ya que el currículo basado en competencias es abierto y faculta al docente a crear indicadores según los recursos locales del centro.",
      "Es una infracción técnico-pedagógica que altera la homogeneidad de la certificación nacional, puesto que los indicadores de logro se encuentran preestablecidos y estandarizados con carácter obligatorio en el diseño curricular revisado y actualizado.",
      "Es válida siempre que sea avalada por una comisión mixta integrada por los empresarios del sector agropecuario de la provincia.",
      "Es facultativa, debido a que el componente técnico profesional no se rige por indicadores de logro oficiales, sino por los manuales de las maquinarias empleadas."
    ],
    respuestaCorrecta: 1,
    explicacion: "El currículo dominicano es flexible en sus estrategias y adaptaciones contextuales, pero los Indicadores de Logro e hitos evaluativos del Diseño Curricular Oficial del MINERD son normativos y de obligatorio cumplimiento a nivel nacional para certificar el perfil profesional de egreso de forma equitativa.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Diseños Curriculares del Segundo Ciclo de Secundaria",
      capitulo: "Componente Estructural del Currículo Dominicano",
      apartado: "Carácter vinculante y obligatorio de las competencias, contenidos e indicadores de logro oficiales",
      justificacion: "Norma la homogeneidad del sistema educativo preuniversitario dominicano para impedir la fragmentación o devaluación de las certificaciones técnicas."
    },
    competenciaEvaluada: "Diseño y estructuración de la planificación didáctica en estricta alineación con el Diseño Curricular Oficial del MINERD",
    nivelDificultad: "Alta"
  },
  {
    id: 91,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Mantenimiento e Infraestructura de Talleres",
    pregunta: "El docente responsable del taller de la especialidad de Instalaciones Eléctricas observa que los multímetros digitales de medición y las herramientas de corte manual muestran un desgaste severo que podría alterar las lecturas métricas en las prácticas estudiantiles e incrementar el riesgo de accidentes. No obstante, decide prorrogar su sustitución hasta que queden inoperables para evitar gestiones burocráticas. ¿Cómo se califica normativamente esta decisión?",
    opciones: [
      "Es un manejo presupuestario acertado que optimiza el ciclo de vida de los activos fijos del politécnico hasta su límite operativo real.",
      "Es un incumplimiento de las obligaciones de gestión de entornos formativos dispuestas en el Manual de Gestión de Talleres, el cual compromete al docente a planificar e informar sobre la ejecución de mantenimientos preventivos y calibraciones.",
      "Es adecuada, ya que la responsabilidad legal por el deterioro físico de cualquier instrumental dentro del politécnico recae de manera exclusiva en el Distrito Educativo.",
      "Es válida, siempre que el docente ordene a los estudiantes adquirir sus propios multímetros e instrumental de corte como requisito obligatorio de ingreso al taller."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Manual de Gestión de Talleres y Laboratorios de la DETP estipula de manera explícita que los docentes técnicos actúan como custodios de los activos didácticos e industriales y deben prever e informar el estado de los equipos para garantizar la precisión del aprendizaje y evitar riesgos de accidentes por fallos materiales.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios de la Dirección de Educación Técnico Profesional (MINERD)",
      capitulo: "Sección IV: Conservación, Inventario y Planes de Mantenimiento Preventivo y Correctivo de Equipos",
      apartado: "Responsabilidades del personal docente y técnico sobre la gestión de recursos de aprendizaje industriales",
      justificacion: "Establece las funciones docentes orientadas a la fiscalización del estado óptimo del equipamiento para mantener los estándares pedagógicos e industriales de seguridad."
    },
    competenciaEvaluada: "Planificación, conservación y reporte técnico de infraestructura y equipamiento de talleres bajo criterios de seguridad",
    nivelDificultad: "Alta"
  },
  {
    id: 92,
    categoria: "Competencias Docentes Generales",
    especialidad: "Retroalimentación Efectiva",
    pregunta: "Un docente de la especialidad de Enfermería recibe los cuadernos y portafolios de evidencias de sus estudiantes sobre técnicas de movilización de pacientes intrahospitalarios. Al momento de asentar la corrección, plasma una calificación numérica abstracta de 72/100 en la portada, omitiendo glosas, anotaciones cualitativas sobre los aciertos o recomendaciones metodológicas de mejora. ¿Qué principio pedagógico dominicano se está desatendiendo?",
    opciones: [
      "El principio de confidencialidad del dato numérico estipulado en las ordenanzas de la Modalidad General.",
      "La función diagnóstica y formativa de la evaluación curricular dominicana, la cual exige proveer una retroalimentación descriptiva y oportuna que guíe al estudiante a identificar cómo consolidar los aprendizajes específicos no logrados.",
      "La directriz técnica de la Ordenanza 03-2017 que prohíbe taxativamente realizar comentarios textuales en las evidencias evaluadas de los módulos de salud.",
      "La autonomía del estudiante para deducir de forma independiente sus propios errores procedimentales mediante el autoaprendizaje reflexivo puro."
    ],
    respuestaCorrecta: 1,
    explicacion: "El sistema de evaluación basado en competencias del MINERD determina que la calificación aislada no constituye una evaluación integral. La retroalimentación es un derecho del estudiante y un deber docente, indispensable para reorientar el proceso de aprendizaje y asegurar la superación de las brechas de desempeño técnico.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Normativas Oficiales de Evaluación de los Aprendizajes del MINERD",
      capitulo: "Estrategias de Evaluación y Acompañamiento Formativo",
      apartado: "La retroalimentación como motor del proceso formativo y el desarrollo metacognitivo del alumno",
      justificacion: "Mandata que todo proceso evaluativo debe ir acompañado de una comunicación clara y constructiva con el alumno respecto a su nivel de dominio y estrategias de mejora."
    },
    competenciaEvaluada: "Aplicación de retroalimentación formativa y descriptiva fundamentada en evidencias de aprendizaje",
    nivelDificultad: "Alta"
  },
{
    id: 93,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Sostenibilidad y Protección Ambiental",
    pregunta: "En el taller de Mecánica Automotriz de un politécnico público, el docente a cargo de la práctica de mantenimiento de motores térmicos instruye a los estudiantes a verter los aceites e hidrocarburos usados directamente en las rejillas del drenaje pluvial del centro educativo, aduciendo que la municipalidad local carece de camiones de recogida de residuos tóxicos. ¿Qué dictamen normativo aplica a esta situación?",
    opciones: [
      "Es un procedimiento tolerado ante condiciones de precariedad de infraestructura urbana e inexistencia de plantas de reciclaje municipales.",
      "Constituye una falta grave contra los protocolos de Seguridad, Salud y Protección Ambiental de la ETP, los cuales mandatan el almacenamiento hermético y la gestión de retiro regulado de desechos peligrosos con gestores autorizados conforme a la Ley 64-00.",
      "Es una acción permitida debido a que los volúmenes de aceites generados en laboratorios escolares están exentos de penalizaciones ambientales por ley.",
      "La responsabilidad penal y ambiental recae de manera exclusiva sobre los estudiantes que ejecutaron la acción de vertido físico del hidrocarburo."
    ],
    respuestaCorrecta: 1,
    explicacion: "La gestión de residuos en los talleres de la Modalidad Técnico Profesional debe apegarse a las normativas nacionales de medio ambiente y al Manual de Gestión de Talleres. El vertido de hidrocarburos es ilegal y altamente contaminante; el docente debe garantizar el acopio seguro (tanques herméticos etiquetados) hasta su disposición final autorizada.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios / Articulación con la Ley 64-00 de Medio Ambiente",
      capitulo: "Gestión de Residuos Sólidos y Peligrosos en Entornos de Aprendizaje",
      apartado: "Clasificación, almacenamiento y disposición final de desechos de talleres técnicos",
      justificacion: "Prohíbe estrictamente la contaminación de suelos y acuíferos, obligando a los politécnicos a establecer protocolos de manejo de residuos industriales."
    },
    competenciaEvaluada: "Aplicación de normativas de sostenibilidad, protección ambiental y manejo de residuos tóxicos en talleres",
    nivelDificultad: "Alta"
  },
  {
    id: 94,
    categoria: "Competencias Docentes Generales",
    especialidad: "Trabajo Colaborativo y Planificación",
    pregunta: "En una reunión de Comunidad de Práctica (Comunidad de Aprendizaje), el docente del módulo de 'Ofimática' se niega a coordinar su planificación con la docente del módulo de 'Comunicación Empresarial', argumentando que su carga horaria es independiente y que la articulación interdisciplinaria solo es obligatoria en el Primer Ciclo de Secundaria. ¿Cuál es el sustento técnico que invalida esta postura?",
    opciones: [
      "La articulación solo es exigible si el Director del politécnico emite un memorándum de obligatoriedad a principio del año escolar.",
      "El diseño curricular de la Modalidad Técnico Profesional estipula que los Módulos Formativos deben articularse de forma sinérgica para garantizar el desarrollo integral de las competencias del perfil profesional, superando la fragmentación del conocimiento.",
      "El docente de Ofimática tiene la potestad legal de rechazar el trabajo colaborativo basándose en el principio de libertad de cátedra del Estatuto del Docente.",
      "La articulación entre módulos técnicos y académicos se realiza exclusivamente durante el período de Formación en Centros de Trabajo (FCT)."
    ],
    respuestaCorrecta: 1,
    explicacion: "Las Bases de la Revisión y Actualización Curricular establecen la articulación de las áreas como una estrategia indispensable del enfoque por competencias. En la ETP, los módulos no son islas; se complementan para lograr el perfil de egreso, requiriendo planificación conjunta entre el equipo docente.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Ordenanza 03-2017",
      capitulo: "Estrategias de Planificación y Articulación Curricular",
      apartado: "La articulación de los Módulos Formativos y el trabajo colegiado docente",
      justificacion: "Define la obligatoriedad del trabajo colaborativo entre docentes para conectar los Resultados de Aprendizaje de distintos módulos en proyectos comunes."
    },
    competenciaEvaluada: "Integración de la planificación articulada y participación activa en el trabajo colegiado docente",
    nivelDificultad: "Alta"
  },
  {
    id: 95,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Vinculación Escuela-Empresa",
    pregunta: "Durante la tercera semana de FCT de un estudiante de Mecatrónica, el gerente de la empresa receptora contacta al Coordinador de Vinculación del politécnico y le ofrece contratar al alumno de manera inmediata con un salario fijo, a condición de que el estudiante abandone sus módulos teóricos pendientes en el centro educativo y asuma un horario laboral completo. ¿Cuál debe ser la respuesta institucional del Coordinador?",
    opciones: [
      "Aprobar la propuesta, procediendo a certificar automáticamente al estudiante, dado que la inserción laboral temprana es el objetivo último de la ETP.",
      "Rechazar la condición de abandono escolar, recordando a la empresa que la FCT es un proceso pedagógico inalienable y que el estudiante debe culminar su carga académica para obtener el título de bachiller técnico, promoviendo en su lugar alternativas de contratación post-egreso.",
      "Delegar la decisión exclusivamente en la asociación de padres y tutores (APMAE), eximiendo al politécnico de cualquier responsabilidad contractual.",
      "Exigir a la empresa que el salario ofertado al estudiante sea depositado en la cuenta institucional del politécnico en calidad de donación por reclutamiento."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Reglamento de FCT y la Ley 66-97 protegen el derecho a la educación formal. Promover o consentir la deserción escolar a cambio de empleo vulnera la misión del sistema educativo. El politécnico debe proteger la titulación del alumno y negociar su inserción laboral para el momento posterior a su graduación.",
    fundamentoNormativo: {
      documento: "Reglamento de Formación en Centros de Trabajo (FCT) / Ley General de Educación 66-97",
      capitulo: "Naturaleza y Fines de la Formación en Centros de Trabajo",
      apartado: "Prohibición de sustitución de puestos de trabajo y protección de la escolaridad",
      justificacion: "Establece que la FCT no implica relación laboral y el centro educativo es garante de la culminación del ciclo formativo del estudiante."
    },
    competenciaEvaluada: "Gestión ética de la vinculación escuela-empresa salvaguardando la trayectoria formativa y titulación del estudiante",
    nivelDificultad: "Alta"
  },
  {
    id: 96,
    categoria: "Competencias Docentes Generales",
    especialidad: "Protección de Niños, Niñas y Adolescentes (NNA)",
    pregunta: "Un docente de 4to grado de la Modalidad Técnico Profesional observa que una estudiante presenta hematomas recurrentes y un cambio drástico en su comportamiento, retrayéndose en las prácticas de taller. Al abordarla confidencialmente, la estudiante le confiesa ser víctima de maltrato físico severo en su hogar. ¿Cuál es el protocolo de actuación inmediato que debe agotar el docente según la legislación dominicana?",
    opciones: [
      "Visitar personalmente el hogar de la estudiante al finalizar la jornada para confrontar a los tutores e intentar mediar en el conflicto familiar.",
      "Comunicar el caso de manera formal, inmediata y por escrito a la Dirección del politécnico y al Departamento de Orientación y Psicología, para que estos activen la denuncia ante el Consejo Nacional para la Niñez y la Adolescencia (CONANI) y el Ministerio Público.",
      "Guardar el secreto profesional prometido a la estudiante para mantener su confianza, limitándose a brindarle apoyo moral dentro del horario de clases.",
      "Exponer la situación de la estudiante frente al pleno de la asamblea de padres y madres para generar presión social sobre los agresores."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Ley 136-03 (Código para el Sistema de Protección y los Derechos Fundamentales de NNA) y las normativas del MINERD establecen la obligatoriedad de denuncia ante casos de abuso. El docente no debe investigar ni confrontar, sino reportar a las instancias directivas y de orientación para que se canalice la protección legal de la menor.",
    fundamentoNormativo: {
      documento: "Ley 136-03 (Código de Protección de NNA) / Normas de Convivencia Armoniosa",
      capitulo: "Derechos de Protección contra el Abuso y la Violencia",
      apartado: "Obligatoriedad de denuncia por parte del personal de instituciones educativas",
      justificacion: "El personal docente actúa como garante de derechos y tiene responsabilidad legal vinculante de reportar sospechas o evidencias de maltrato infantil."
    },
    competenciaEvaluada: "Aplicación de protocolos de actuación ante vulneración de derechos y protección integral de estudiantes",
    nivelDificultad: "Alta"
  },
  {
    id: 97,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Mantenimiento Preventivo y Correctivo",
    pregunta: "Durante una evaluación práctica en el laboratorio de Procesamiento de Alimentos, la selladora industrial de vacío sufre un cortocircuito que funde su cableado externo. Faltando tres estudiantes por evaluarse, el docente decide empalmar los cables quemados utilizando cinta adhesiva de papelería para poder concluir el examen ese mismo día. ¿Qué valoración técnica merece este proceder?",
    opciones: [
      "Es una medida pedagógica eficiente que demuestra resiliencia y proactividad docente frente a imprevistos técnicos en evaluaciones críticas.",
      "Es una acción temeraria que transgrede los protocolos de Seguridad Industrial, ya que el equipo debió ser desenergizado, rotulado como inoperante (bloqueo/etiquetado) y reportado para un mantenimiento correctivo especializado.",
      "Es correcto, siempre y cuando el docente manipule la máquina personalmente y no permita que los estudiantes restantes entren en contacto directo con la misma.",
      "El procedimiento es válido si se reduce el voltaje de la maquinaria a la mitad para evitar nuevos cortocircuitos durante los exámenes pendientes."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Manual de Gestión de Laboratorios y las normas universales de salud ocupacional prohíben las reparaciones improvisadas en equipos eléctricos industriales, ya que exponen a la comunidad educativa a riesgos letales de electrocución e incendios. Ante una falla, aplica el protocolo de 'Lockout/Tagout' (Bloqueo y Etiquetado).",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios de la DETP",
      capitulo: "Gestión de Mantenimiento de Maquinarias y Equipos",
      apartado: "Procedimientos ante averías críticas y prohibición de intervenciones no especializadas",
      justificacion: "Protege la integridad física de los usuarios al normar que las fallas eléctricas estructurales requieren intervención de técnicos cualificados."
    },
    competenciaEvaluada: "Gestión de averías e implementación de protocolos de aislamiento de equipos defectuosos para prevenir riesgos",
    nivelDificultad: "Alta"
  },
  {
    id: 98,
    categoria: "Competencias Docentes Generales",
    especialidad: "Atención a la Diversidad y Ajustes Razonables",
    pregunta: "Un estudiante diagnosticado con daltonismo severo cursa la especialidad de Diseño Gráfico. Durante el Módulo Formativo de 'Teoría y Psicología del Color', el docente exige al estudiante que identifique y mezcle pigmentos basándose estrictamente en su apreciación visual cromática, asignándole la calificación mínima por no lograr la exactitud de las paletas. Según el marco inclusivo dominicano, ¿cómo debió proceder el educador?",
    opciones: [
      "El docente actuó conforme a los estándares técnicos, ya que el Catálogo Nacional de Cualificaciones no permite flexibilizar las capacidades físicas de los perfiles profesionales.",
      "Debió implementar ajustes razonables metodológicos, tales como proporcionar software con identificadores hexadecimales de color y paletas etiquetadas numéricamente, permitiendo al estudiante alcanzar el Resultado de Aprendizaje mediante herramientas tecnológicas.",
      "Exonerar permanentemente al estudiante de cursar todos los Módulos Formativos vinculados al diseño de interfaces y enfocarlo exclusivamente en programación de código fuente.",
      "Recomendar al Departamento de Psicología el traslado del estudiante a la especialidad de Contabilidad, dada la incompatibilidad de su condición con las artes gráficas."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Ordenanza 05-2024 de Educación Inclusiva obliga a los docentes a diseñar ajustes razonables que permitan a los estudiantes con discapacidad o condiciones específicas sortear las barreras de aprendizaje. En diseño, el uso de códigos de color (HEX, RGB) es una competencia profesional real y un ajuste inclusivo válido.",
    fundamentoNormativo: {
      documento: "Ordenanza No. 05-2024 sobre Educación Inclusiva",
      capitulo: "Estrategias de Diseño Universal para el Aprendizaje (DUA) y Ajustes Razonables",
      apartado: "Adecuaciones de acceso y metodológicas para estudiantes con discapacidad sensorial",
      justificacion: "Garantiza la participación y el aprendizaje en igualdad de condiciones, empleando herramientas alternativas sin reducir el nivel de exigencia de la competencia."
    },
    competenciaEvaluada: "Diseño e implementación de ajustes razonables en entornos técnicos garantizando el logro de las competencias",
    nivelDificultad: "Alta"
  },
  {
    id: 99,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Innovación y Empleabilidad",
    pregunta: "En el desarrollo de un proyecto productivo de la especialidad de Agropecuaria, un grupo de estudiantes diseña e implementa un sistema de riego automatizado con sensores de humedad de bajo costo (Arduino), el cual no estaba explícitamente detallado en el manual tradicional, pero que optimiza el uso del agua en un 40% y logra sobradamente los Resultados de Aprendizaje. ¿Qué evaluación normativa se debe hacer de esta iniciativa?",
    opciones: [
      "Debe ser sancionada por desviación del currículo tradicional, ya que los métodos didácticos técnicos deben ceñirse estrictamente a las tecnologías descritas en los manuales oficiales de los años 90.",
      "Debe valorarse como una demostración de excelencia, puesto que el currículo por competencias de la ETP promueve activamente el emprendimiento, la innovación tecnológica y la resolución sostenible de problemas profesionales.",
      "Debe anularse la calificación del módulo, argumentando que el uso de electrónica no corresponde a la especialidad Agropecuaria sino a la de Equipos Electrónicos.",
      "Es aceptable únicamente si el politécnico patenta el sistema y obliga a los estudiantes a ceder sus derechos comerciales a la Dirección Distrital."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Diseño Curricular de la Modalidad Técnico Profesional está orientado a desarrollar competencias transversales de innovación, emprendimiento y adaptación tecnológica. Las soluciones creativas que cumplan o superen los Criterios de Evaluación y promuevan la sostenibilidad son el ideal del perfil de egreso dominicano.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Perfil de Egreso de la Modalidad Técnico Profesional",
      capitulo: "Competencias Fundamentales y Profesionales",
      apartado: "Desarrollo del Pensamiento Lógico, Creativo y Crítico, y Resolución de Problemas",
      justificacion: "Incentiva a los estudiantes a integrar tecnologías emergentes y enfoques sostenibles (ahorro de agua) en la ejecución de sus proyectos productivos."
    },
    competenciaEvaluada: "Fomento de la innovación, el emprendimiento y la transferencia tecnológica en la ejecución de proyectos técnicos",
    nivelDificultad: "Alta"
  },
  {
    id: 100,
    categoria: "Competencias Docentes Generales",
    especialidad: "Permanencia Escolar y Atención al Contexto",
    pregunta: "Un estudiante excelente de 5to grado de la especialidad de Comercio y Mercadeo comienza a presentar inasistencias superiores al 20% en el semestre. Al investigar, el docente descubre que el estudiante está laborando de manera informal en las mañanas para sustentar a su familia debido a una crisis económica. ¿Qué estrategia integral debe activar el centro educativo según la normativa vigente?",
    opciones: [
      "Reprobar automáticamente al estudiante por incumplir con el 80% de asistencia presencial exigido, sin lugar a revisión ni consideraciones sociales.",
      "Referir el caso a la Unidad de Orientación y Psicología y a la Dirección para establecer una ruta de apoyo, flexibilización cronogramada y tutorías que protejan la permanencia escolar y eviten la deserción.",
      "Aprobar todos los módulos formativos del estudiante de manera administrativa por compasión, liberándolo de la responsabilidad de entregar evidencias de aprendizaje.",
      "Transferir compulsivamente al estudiante al subsistema de Educación de Personas Jóvenes y Adultas (PREPARA) para que libere su horario diurno completo."
    ],
    respuestaCorrecta: 1,
    explicacion: "Si bien la asistencia es un requisito, la Ley 66-97 y las políticas de retención del MINERD establecen que la escuela debe agotar todos los medios posibles (orientación, flexibilización de entregas, acompañamiento) para evitar la exclusión del sistema educativo por vulnerabilidad económica de los NNA.",
    fundamentoNormativo: {
      documento: "Ley General de Educación 66-97 / Normativas de Evaluación y Promoción",
      capitulo: "Garantía del Derecho a la Educación y Prevención del Abandono Escolar",
      apartado: "Responsabilidad institucional frente a factores de riesgo de deserción y trabajo infantil",
      justificacion: "Prioriza el interés superior del adolescente y mandata a la escuela a ser un ente protector que brinde alternativas formativas ante contextos de alta vulnerabilidad."
    },
    competenciaEvaluada: "Implementación de estrategias institucionales para la prevención de la deserción y protección del derecho a la educación",
    nivelDificultad: "Alta"
  },

  {
    id: 101,
    categoria: "Competencias Docentes Generales",
    especialidad: "Planificación por Competencias",
    pregunta: "En el Módulo Formativo de 'Atención al Cliente' de la especialidad de Comercio y Mercadeo, un docente diseña una unidad de aprendizaje cuyo Resultado de Aprendizaje (RA) exige 'Aplicar técnicas de comunicación asertiva en la resolución de quejas presenciales'. Sin embargo, en sus secuencias didácticas, todas las actividades se limitan a que los estudiantes copien en sus cuadernos las definiciones de comunicación emitidas por el libro de texto y respondan un cuestionario escrito de selección múltiple. ¿Qué deficiencia técnico-pedagógica presenta esta planificación?",
    opciones: [
      "No presenta deficiencias, ya que el dominio teórico de los conceptos es el paso fundamental y único requerido en el segundo ciclo de secundaria técnica.",
      "Muestra una ruptura en la alineación constructiva, debido a que las actividades de enseñanza y evaluación (teóricas) no son coherentes con la naturaleza procedimental y actitudinal (aplicación práctica) que demanda el Resultado de Aprendizaje oficial.",
      "La planificación es correcta, pero el docente debe asegurarse de utilizar un libro de texto avalado explícitamente por el Ministerio de Trabajo.",
      "La deficiencia radica en que no incluyó actividades de pasantía en la secuencia didáctica, las cuales son obligatorias en todos los módulos de cuarto grado."
    ],
    respuestaCorrecta: 1,
    explicacion: "En el diseño curricular dominicano basado en competencias, debe existir una 'alineación constructiva' (coherencia) entre el Resultado de Aprendizaje (RA), las actividades didácticas y la evaluación. Si el RA exige un desempeño o aplicación ('saber hacer'), las actividades no pueden limitarse a la memorización ('saber qué').",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Ordenanza 03-2017",
      capitulo: "Diseño y Planificación de la Enseñanza en la ETP",
      apartado: "Articulación entre Resultados de Aprendizaje, Actividades y Criterios de Evaluación",
      justificacion: "Establece que las estrategias de enseñanza deben movilizar recursos conceptuales, procedimentales y actitudinales en situaciones reales o simuladas congruentes con el RA."
    },
    competenciaEvaluada: "Diseño de planificaciones didácticas con estricta alineación constructiva hacia el perfil de egreso",
    nivelDificultad: "Alta"
  },
  {
    id: 102,
    categoria: "Competencias Docentes Generales",
    especialidad: "Evaluación por Evidencias",
    pregunta: "Al finalizar el módulo de 'Elaboración de Productos de Panadería', el docente requiere como evidencia de aprendizaje un portafolio físico. Al calificar a una estudiante, le otorga la nota mínima argumentando que, aunque incluyó todas las fichas técnicas, los cálculos de mermas correctos y las fotografías que demuestran un amasado y horneado impecables, la carpeta exterior no estaba decorada con creatividad ni tenía letras de colores. ¿Qué principio de la evaluación curricular dominicana se ha vulnerado?",
    opciones: [
      "El principio de estética profesional, el cual es transversal a todas las especialidades técnicas del sistema.",
      "La evaluación auténtica fundamentada en Criterios de Evaluación (CE), ya que el docente penalizó basándose en aspectos decorativos subjetivos ajenos a los indicadores de logro técnicos establecidos en el Catálogo Nacional de Cualificaciones.",
      "La autonomía del centro educativo para incorporar competencias de educación artística dentro de los módulos de la familia de industrias alimentarias.",
      "No se vulnera ningún principio, dado que el docente utilizó una rúbrica, la cual legitima cualquier criterio que él decida incluir de forma unilateral."
    ],
    respuestaCorrecta: 1,
    explicacion: "En la ETP, la evaluación es referida a criterios preestablecidos. Los Criterios de Evaluación (CE) del diseño curricular determinan exactamente qué se debe observar para validar la competencia. Calificar en base a decoraciones subjetivas desvirtúa la validez y confiabilidad de la evaluación técnica.",
    fundamentoNormativo: {
      documento: "Ordenanza 03-2017 / Diseño Curricular de la Modalidad Técnico Profesional",
      capitulo: "La Evaluación de los Aprendizajes en la ETP",
      apartado: "Función de los Criterios de Evaluación y objetividad del proceso evaluativo",
      justificacion: "Garantiza que la certificación del estudiante dependa exclusivamente de la demostración de las competencias profesionales definidas en su perfil, eliminando sesgos subjetivos."
    },
    competenciaEvaluada: "Aplicación de instrumentos de evaluación objetivos y centrados en evidencias de desempeño técnico",
    nivelDificultad: "Alta"
  },
  {
    id: 103,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Gestión de Talleres y Seguridad",
    pregunta: "Antes de iniciar una clase práctica de corte y soldadura en el taller de Mecanizado, el docente realiza su inspección rutinaria y detecta que los dos extintores del área están descargados y con la fecha de mantenimiento vencida. Pese a que los estudiantes ya tienen puestos sus Equipos de Protección Personal (EPP), ¿cuál es la decisión gerencial y normativa que debe tomar el docente?",
    opciones: [
      "Iniciar la práctica técnica ordenando a los estudiantes que trabajen con extrema precaución para no atrasar el cronograma del Módulo Formativo.",
      "Suspender inmediatamente cualquier actividad práctica que implique riesgo de ignición, reportar la irregularidad por escrito a la Dirección y reubicar a los estudiantes en una actividad teórica hasta que se recarguen los equipos de extinción.",
      "Proceder con la práctica, pero delegar en un estudiante la tarea de sostener una cubeta con agua cerca de las estaciones de soldadura como medida mitigadora.",
      "Avisar verbalmente al personal de conserjería para que busque un extintor de otra área al finalizar la jornada académica."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Manual de Gestión de Talleres prohíbe categóricamente el inicio de operaciones industriales, térmicas o mecánicas de alto riesgo si los dispositivos de respuesta a emergencias (extintores, botiquines, paradas de emergencia) no están operativos. La seguridad humana precede a cualquier cronograma académico.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios de la Dirección de Educación Técnico Profesional",
      capitulo: "Gestión de Riesgos y Protocolos de Seguridad Contra Incendios",
      apartado: "Condiciones habilitantes para el uso de talleres con maquinaria en caliente",
      justificacion: "Establece la paralización preventiva de actividades formativas ante la inoperancia de sistemas de seguridad crítica, protegiendo la vida de la comunidad escolar."
    },
    competenciaEvaluada: "Fiscalización de condiciones de seguridad y aplicación de la política de cero tolerancia ante riesgos no controlados",
    nivelDificultad: "Alta"
  },
  {
    id: 104,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Formación en Centros de Trabajo (FCT)",
    pregunta: "En una clínica privada receptora de estudiantes de la especialidad de Cuidados de Enfermería, el supervisor empresarial instruye a una alumna pasante de 17 años a administrar por vía intravenosa un medicamento de alto riesgo a un paciente en la Unidad de Cuidados Intensivos, sin la supervisión directa de una enfermera graduada. Al enterarse, ¿cómo debe proceder el Coordinador de FCT del politécnico?",
    opciones: [
      "Felicitar a la alumna por haber ganado la confianza de la clínica, documentando el hecho como una evidencia de excelencia profesional en su bitácora.",
      "Intervenir de urgencia ante la gerencia de la clínica para cancelar esa orden y recordar que los estudiantes de FCT tienen restricciones legales de actuación autónoma, no pueden asumir responsabilidades civiles directas sobre pacientes y deben estar bajo supervisión constante.",
      "Permitir la práctica siempre y cuando el paciente firme un descargo legal a favor del Ministerio de Educación.",
      "Modificar el convenio de pasantía para incluir una cláusula donde el centro educativo se responsabiliza económicamente por cualquier mala praxis de la estudiante."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Reglamento de FCT y las leyes de salud de la RD prohíben que estudiantes no titulados realicen procedimientos invasivos o de alto riesgo de forma autónoma. El pasante está en un proceso de aprendizaje, y el Coordinador debe velar porque la empresa respete los límites formativos y legales del convenio.",
    fundamentoNormativo: {
      documento: "Reglamento de Formación en Centros de Trabajo (FCT) / Ordenanza 03-2017",
      capitulo: "Derechos, Deberes y Restricciones del Estudiante durante la FCT",
      apartado: "Supervisión obligatoria y prohibición de asunción de responsabilidades civiles o penales por parte del pasante",
      justificacion: "Salvaguarda la integridad legal y física del estudiante y de terceros, enmarcando la pasantía estrictamente en la observación, asistencia y prácticas supervisadas."
    },
    competenciaEvaluada: "Monitoreo del cumplimiento normativo y protección del alcance legal de los estudiantes en la vinculación Escuela-Empresa",
    nivelDificultad: "Alta"
  },
  {
    id: 105,
    categoria: "Competencias Docentes Generales",
    especialidad: "Gestión de Aula y Convivencia Escolar",
    pregunta: "Un docente de Informática descubre que varios estudiantes de su curso han creado 'memes' degradantes sobre un compañero con discapacidad auditiva y los están difundiendo masivamente a través del Wi-Fi del laboratorio. El estudiante afectado está llorando en el aula. Siguiendo las Normas de Convivencia Armoniosa del MINERD, ¿cuál es el protocolo inmediato que el docente debe ejecutar?",
    opciones: [
      "Ignorar la situación argumentando que las interacciones en redes sociales escapan a la jurisdicción disciplinaria del politécnico.",
      "Incautar y destruir los teléfonos móviles de los agresores frente a toda la clase para dar una lección ejemplarizadora de moralidad.",
      "Contener y proteger a la víctima, detener la actividad académica para abordar la gravedad de la situación, y derivar el caso inmediatamente al equipo de gestión y al departamento de Orientación y Psicología para agotar el debido proceso por falta grave (ciberacoso).",
      "Obligar a los agresores a pedir disculpas públicas instantáneas y cerrar el caso sin notificar a la dirección ni a los padres, para no afectar el récord académico de los implicados."
    ],
    respuestaCorrecta: 2,
    explicacion: "Las Normas de Convivencia Armoniosa tipifican el ciberacoso y la discriminación como faltas graves o muy graves. El docente actúa como primer respondiente: protege a la víctima, interviene pedagógicamente y canaliza hacia las instancias institucionales para aplicar el protocolo de atención y el debido proceso disciplinario.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa / Ordenanza 04-2023",
      capitulo: "Abordaje de Situaciones de Violencia, Acoso Escolar (Bullying) y Ciberacoso",
      apartado: "Protocolos de actuación docente frente a vulneraciones de derechos y dignidad estudiantil",
      justificacion: "Establece la ruta crítica obligatoria para detener el daño emocional, activar el acompañamiento psicológico e involucrar a las familias mediante un proceso justo."
    },
    competenciaEvaluada: "Implementación de protocolos institucionales para la prevención y abordaje del acoso escolar y protección de la dignidad",
    nivelDificultad: "Alta"
  },
  {
    id: 106,
    categoria: "Competencias Docentes Generales",
    especialidad: "Aprendizaje Basado en Problemas (ABP)",
    pregunta: "Para evaluar el Módulo de 'Gestión de Nóminas', el docente entrega a sus estudiantes un cálculo salarial completamente resuelto, con todas las deducciones fiscales de ley aplicadas. Luego les instruye: 'Transcriban este documento exacto en Excel y envíenlo. A esto le llamaremos Aprendizaje Basado en Problemas'. ¿Es correcta esta afirmación desde la didáctica técnico-profesional?",
    opciones: [
      "Sí, porque el uso de herramientas tecnológicas como Excel transforma automáticamente cualquier ejercicio de copia en una estrategia de ABP.",
      "No, porque en el Aprendizaje Basado en Problemas (ABP) el docente debe presentar una situación o caso abierto y desestructurado (ej. los datos brutos de empleados de una empresa ficticia), para que el estudiante investigue, aplique normativas y construya la solución de forma analítica.",
      "Sí, porque en el nivel secundario técnico no se exige que los estudiantes resuelvan problemas por sí mismos, sino que repliquen los modelos del docente.",
      "No, porque el ABP prohíbe el uso de software de cálculo, debiendo realizarse todos los procesos exclusivamente con papel y lápiz."
    ],
    respuestaCorrecta: 1,
    explicacion: "El ABP (Aprendizaje Basado en Problemas) es una estrategia metodológica activa donde el problema es el detonante del aprendizaje. Transcribir un ejercicio resuelto es una actividad mecánica de ofimática, no una resolución de problemas, pues no moviliza competencias de análisis, investigación ni toma de decisiones.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular",
      capitulo: "Estrategias de Enseñanza y Aprendizaje",
      apartado: "Definición y aplicación del Aprendizaje Basado en Problemas (ABP)",
      justificacion: "Define el ABP como una estrategia que parte de un problema del entorno profesional que los estudiantes deben analizar y resolver de manera colaborativa, no como un ejercicio de transcripción."
    },
    competenciaEvaluada: "Comprensión y diseño de situaciones de aprendizaje auténticas mediante estrategias metodológicas activas",
    nivelDificultad: "Alta"
  },
  {
    id: 107,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Resultados de Aprendizaje (RA)",
    pregunta: "Una docente asume un módulo formativo de la especialidad de Servicios Gastronómicos. Al revisar el diseño curricular oficial, nota que el último Resultado de Aprendizaje (RA) exige 'Dominar vocabulario técnico en idioma inglés para la presentación de menús internacionales'. Como ella no posee fluidez en inglés, decide omitir este RA y redistribuir la carga horaria entre los RAs de cocina nacional. ¿Cuál es el impacto normativo de esta decisión?",
    opciones: [
      "Es una adaptación curricular válida porque prioriza la cultura gastronómica dominicana por encima de lenguas extranjeras.",
      "Invalida la certificación del Módulo Formativo para ese grupo, ya que los Resultados de Aprendizaje son prescriptivos, obligatorios y conforman el estándar de la cualificación profesional; la docente debió solicitar apoyo a un profesor de idiomas para articular el contenido.",
      "Es una decisión pertinente basada en la flexibilidad curricular, siempre que los estudiantes sean evaluados rigurosamente en los demás Resultados de Aprendizaje.",
      "Solo amerita una amonestación menor, pero los estudiantes pueden graduarse con ese RA marcado como 'Exonerado por causa docente' en el sistema SIGERD."
    ],
    respuestaCorrecta: 1,
    explicacion: "En el sistema de Cualificaciones y en la Ordenanza 03-2017, los Resultados de Aprendizaje son innegociables, pues garantizan que el egresado posee las competencias que el sector productivo demanda. Un docente no puede eliminar un RA; ante carencias de perfil, debe recurrir al trabajo colaborativo o la co-enseñanza.",
    fundamentoNormativo: {
      documento: "Ordenanza 03-2017 y Catálogo Nacional de Cualificaciones",
      capitulo: "Estructura de los Módulos Formativos y Titulación",
      apartado: "Carácter vinculante de los Resultados de Aprendizaje en la evaluación de la competencia",
      justificacion: "Establece que para acreditar un Módulo Formativo, el estudiante debe demostrar competencia en absolutamente todos los Resultados de Aprendizaje que lo componen."
    },
    competenciaEvaluada: "Gestión de la integridad del diseño curricular y articulación interdisciplinaria para cubrir brechas de perfil",
    nivelDificultad: "Alta"
  },
  {
    id: 108,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Mantenimiento Preventivo de Laboratorios",
    pregunta: "En el laboratorio de Redes Informáticas, el docente nota que los 'racks' de servidores y 'switches' presentan una acumulación crítica de polvo y los ventiladores emiten ruidos por obstrucción. Considera que, como el equipo aún enciende, no es necesario intervenir y espera que el distrito educativo envíe personal de limpieza general. ¿Qué establece el Manual de Gestión de Talleres sobre esta situación?",
    opciones: [
      "El docente actúa correctamente, ya que el mantenimiento técnico de infraestructura tecnológica escapa a sus funciones pedagógicas.",
      "El docente incumple sus funciones, pues es su responsabilidad directa diseñar, documentar y coordinar con los estudiantes y la dirección rutinas periódicas de mantenimiento preventivo y limpieza técnica del equipamiento de su laboratorio.",
      "Debe esperar al cierre del año escolar para solicitar la sustitución completa de los equipos afectados por garantía del proveedor.",
      "La responsabilidad recae sobre la Asociación de Padres, Madres, Tutores y Amigos de la Escuela (APMAE), quienes deben contratar técnicos externos."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Manual de Gestión de Talleres responsabiliza a los docentes del área técnica de la custodia, conservación y mantenimiento preventivo nivel 1 (limpieza, ajuste, calibración) de sus equipos. Además, el mantenimiento preventivo es una competencia transversal que debe enseñarse a los estudiantes mediante la práctica real.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios de la Dirección de Educación Técnico Profesional",
      capitulo: "Planificación del Mantenimiento Preventivo y Correctivo",
      apartado: "Funciones del docente de taller respecto a la conservación de la infraestructura didáctica",
      justificacion: "Obliga al docente técnico a garantizar la operatividad de los equipos, previniendo el deterioro prematuro de la inversión estatal."
    },
    competenciaEvaluada: "Aplicación de planes de mantenimiento preventivo y salvaguarda de los activos tecnológicos del centro",
    nivelDificultad: "Alta"
  },
  {
    id: 109,
    categoria: "Competencias Docentes Generales",
    especialidad: "Inclusión y Ajustes Razonables",
    pregunta: "Un estudiante de la especialidad de Desarrollo de Software tiene un diagnóstico de TDAH (Trastorno por Déficit de Atención e Hiperactividad). El docente ha programado una prueba práctica de programación continua de 3 horas. Para garantizar la equidad evaluativa de acuerdo a la Ordenanza 05-2024, ¿qué ajuste razonable debe aplicar el docente?",
    opciones: [
      "Exigirle que complete la prueba en 1 hora para forzar su capacidad de concentración bajo presión profesional.",
      "Otorgarle un esquema de la misma prueba técnica fragmentada en bloques de 45 minutos, con pausas activas supervisadas de 10 minutos entre ellos, evaluando el mismo nivel de complejidad técnica pero adaptando el tiempo y la dinámica.",
      "Sustituir la prueba de programación por un ensayo teórico sobre la historia de las computadoras para evitarle frustraciones.",
      "Obligar al estudiante a consumir sus medicamentos recetados frente al docente como condición excluyente para participar en la evaluación."
    ],
    respuestaCorrecta: 1,
    explicacion: "La inclusión educativa exige 'ajustes razonables' metodológicos y de acceso. En el caso del TDAH, fragmentar las tareas largas y permitir pausas activas son estrategias avaladas científicamente e institucionalmente. Esto nivela el campo de juego sin rebajar la exigencia de la competencia técnica (programar).",
    fundamentoNormativo: {
      documento: "Ordenanza No. 05-2024 sobre Educación Inclusiva en el Sistema Educativo Dominicano",
      capitulo: "Ajustes Razonables en el Proceso de Evaluación",
      apartado: "Adecuaciones de tiempo, espacio y formato para estudiantes con neurodivergencias",
      justificacion: "Faculta y obliga al docente a diversificar la forma de administrar las evaluaciones para remover barreras vinculadas a la condición del estudiante."
    },
    competenciaEvaluada: "Diseño y aplicación de estrategias de evaluación equitativas mediante ajustes razonables documentados",
    nivelDificultad: "Alta"
  },
  {
    id: 110,
    categoria: "Competencias Docentes Generales",
    especialidad: "Ética Profesional Docente",
    pregunta: "Un docente de la especialidad de Contabilidad ofrece 'tutorías de reforzamiento técnico' los sábados en los laboratorios del mismo politécnico público. Por participar en estas tutorías, cobra a los padres de sus propios estudiantes una cuota mensual y asegura que quienes asistan obtendrán los indicadores de logro que reprobaron en la semana. ¿Cómo se valora este comportamiento según la normativa de ética del MINERD?",
    opciones: [
      "Es una acción lícita y aplaudible que demuestra vocación de servicio y fomento del emprendimiento docente en tiempo extra.",
      "Constituye una violación grave al Código de Ética y Conducta Profesional y a la gratuidad de la educación pública, ya que está prohibido lucrarse mediante cobros a sus propios alumnos por reforzamientos y utilizar bienes del Estado para beneficio personal.",
      "Es permitido, siempre que el docente entregue un 20% de los beneficios económicos a la Dirección del politécnico para la compra de materiales gastables.",
      "Solo es falta si las tutorías se imparten a estudiantes de otras escuelas, pero con sus alumnos directos es una práctica de extensión académica."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Orden Departamental 22-2023 (Código de Ética) y la Ley 66-97 prohíben tajantemente que el personal docente exija o reciba pagos de los estudiantes de la red pública, especialmente cuando se condiciona la superación de indicadores de logro (conflicto de intereses y corrupción). Además, usar el plantel para lucro privado es ilícito.",
    fundamentoNormativo: {
      documento: "Orden Departamental 22-2023 / Ley General de Educación 66-97",
      capitulo: "Código de Ética y Conducta / Principio de Gratuidad",
      apartado: "Prohibición de cobros indebidos, conflicto de intereses y uso indebido de las instalaciones escolares",
      justificacion: "Protege el derecho a la educación gratuita y salvaguarda la integridad y transparencia del proceso de evaluación de los aprendizajes."
    },
    competenciaEvaluada: "Cumplimiento del código de ética, transparencia y probidad en el ejercicio de las funciones docentes",
    nivelDificultad: "Alta"
  },
  {
    id: 111,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Evaluación en Formación en Centros de Trabajo (FCT)",
    pregunta: "Al concluir las 360 horas de FCT, un estudiante de 'Soporte de Redes y Sistemas Informáticos' presenta una bitácora impecable con todos los Resultados de Aprendizaje documentados y validados. Sin embargo, el tutor de la empresa decide otorgarle una calificación final de 50/100, alegando verbalmente que 'el joven es muy callado y no encaja con la cultura extrovertida de nuestra empresa'. ¿Cómo debe proceder el Coordinador de FCT institucional?",
    opciones: [
      "Registrar el 50/100 de forma automática en el SIGERD, puesto que la evaluación de la empresa es inapelable y soberana.",
      "Convocar una mesa de consenso entre el tutor empresarial y el politécnico para revisar la rúbrica de evaluación, demostrando que la calificación de FCT debe basarse en el logro de competencias técnicas y transversales acordadas, no en sesgos subjetivos de personalidad.",
      "Reprobar al estudiante y obligarlo a repetir las 360 horas de pasantía en otra empresa durante el verano.",
      "Ignorar la nota de la empresa y colocar un 100/100 por cuenta propia, falsificando la firma del gerente en el reporte final del MINERD."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Reglamento de FCT establece que la evaluación es compartida (Tutor de Empresa y Coordinador de FCT) y debe basarse en instrumentos objetivos (rúbricas, bitácoras) que midan los RAs. El Coordinador de FCT tiene el deber de garantizar la justicia evaluativa y mediar cuando existan sesgos personales que perjudiquen al estudiante.",
    fundamentoNormativo: {
      documento: "Reglamento de Formación en Centros de Trabajo (FCT)",
      capitulo: "Evaluación y Seguimiento de la FCT",
      apartado: "Proceso de evaluación concertada y uso de instrumentos de recolección de evidencias",
      justificacion: "Asegura que la evaluación del desempeño en pasantía sea justa, técnica y alineada a los estándares del currículo, evitando arbitrariedades empresariales."
    },
    competenciaEvaluada: "Mediación y aseguramiento de la evaluación objetiva por competencias en la vinculación empresarial",
    nivelDificultad: "Alta"
  },
  {
    id: 112,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Uso de Equipos de Protección Personal (EPP)",
    pregunta: "Durante la manipulación de gases refrigerantes en el taller de Refrigeración y Acondicionamiento de Aire, un docente permite a los estudiantes realizar las purgas sin usar guantes de nitrilo ni gafas de seguridad, indicando que 'los accidentes solo ocurren a los novatos y nosotros ya estamos en sexto grado'. ¿Qué análisis crítico merece esta instrucción desde la normativa de ETP?",
    opciones: [
      "Es una técnica de empoderamiento psicológico que eleva la autoconfianza laboral del estudiante próximo a graduarse.",
      "Es una negligencia grave e inaceptable; el manejo de refrigerantes conlleva riesgo de congelación por expansión brusca y ceguera. Los protocolos de seguridad industrial son de aplicación obligatoria sin distinción de grado o experiencia.",
      "Es aceptable si el taller cuenta con ventilación cruzada natural y las ventanas están completamente abiertas.",
      "Solo se considera falta si ocurre un accidente físico; de lo contrario, se enmarca en la libertad metodológica del maestro de taller."
    ],
    respuestaCorrecta: 1,
    explicacion: "En la educación técnica, la prevención no es negociable. La manipulación de gases a presión sin EPP es una violación directa al Manual de Gestión de Talleres y a los estándares universales de seguridad industrial (OSHA/Normas ISO). La falsa confianza es la principal causa de accidentes graves en entornos técnicos.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios / Protocolos de Seguridad Industrial",
      capitulo: "Manejo de Sustancias Peligrosas y Riesgos Químicos/Físicos",
      apartado: "Obligatoriedad permanente del uso de EPP según el nivel de riesgo de la operación",
      justificacion: "Estipula que los docentes son civil y administrativamente responsables de garantizar la seguridad física de los estudiantes, independientemente del nivel de pericia asumido."
    },
    competenciaEvaluada: "Aplicación inflexible de normativas de salud y seguridad en operaciones de alto riesgo técnico",
    nivelDificultad: "Alta"
  },
  {
    id: 113,
    categoria: "Competencias Docentes Generales",
    especialidad: "Trabajo Colaborativo Docente",
    pregunta: "Los docentes de 'Matemática' (modalidad académica) y 'Mecanizado' (modalidad técnica) diseñan un proyecto integrado donde los estudiantes deben fabricar engranajes en el torno, pero utilizando fórmulas trigonométricas de la clase de matemáticas para calcular los ángulos de corte con tolerancia micrométrica. ¿Cómo se clasifica esta práctica pedagógica en el marco del currículo dominicano?",
    opciones: [
      "Una sobrecarga académica innecesaria que contraviene la separación estricta de asignaturas dispuesta por el MINERD.",
      "Una excelente implementación de la articulación interdisciplinaria e integración de saberes, fomentada por las Bases de la Actualización Curricular para darle sentido práctico a las ciencias básicas en la ETP.",
      "Una intrusión del área académica en los módulos profesionales, lo cual está prohibido por la Dirección de Educación Técnico Profesional.",
      "Un proyecto válido solo para las escuelas politécnicas privadas que tienen currículos internacionales independientes."
    ],
    respuestaCorrecta: 1,
    explicacion: "El diseño curricular basado en competencias de la República Dominicana fomenta explícitamente la articulación de las áreas. Conectar la matemática con las operaciones de taller es el escenario ideal de la ETP, pues desarrolla competencias fundamentales (pensamiento lógico, resolución de problemas) aplicadas a un perfil profesional.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular",
      capitulo: "Estrategias de Articulación de las Áreas de Conocimiento",
      apartado: "Articulación Interdisciplinaria e Intradisciplinaria",
      justificacion: "Promueve la conexión transversal entre las asignaturas académicas y los módulos técnicos para generar un aprendizaje significativo y aplicado."
    },
    competenciaEvaluada: "Diseño y ejecución de proyectos de integración curricular interdisciplinaria",
    nivelDificultad: "Alta"
  },
  {
    id: 114,
    categoria: "Competencias Docentes Generales",
    especialidad: "Retroalimentación Efectiva y Evaluación Formativa",
    pregunta: "Una docente de 'Diseño de Itinerarios Turísticos' corrige un plan de viaje complejo elaborado por un estudiante. Al devolver el trabajo, la docente ha colocado una 'X' roja gigante sobre el presupuesto del itinerario, pero no agrega ningún comentario, explicación, ni indica dónde está el error de cálculo. ¿Por qué esta práctica contradice la normativa de evaluación del MINERD?",
    opciones: [
      "Porque el color rojo está prohibido por normativas de psicología escolar en la educación secundaria.",
      "Porque carece de retroalimentación descriptiva. La evaluación formativa exige que el docente comunique al estudiante de forma clara cuáles fueron sus fallas, por qué ocurrieron y cuáles son los pasos específicos para mejorar su desempeño y lograr la competencia.",
      "Porque los presupuestos turísticos no se evalúan de forma numérica, sino a través de sociodramas y exposiciones verbales.",
      "Porque un estudiante de secundaria tiene la madurez cognitiva para descubrir sus propios errores sin necesidad de orientación docente."
    ],
    respuestaCorrecta: 1,
    explicacion: "La evaluación en el currículo dominicano es continua y formativa. El simple señalamiento de un error (la 'X') es punitivo. La verdadera evaluación aporta información útil (retroalimentación descriptiva) que permite al estudiante movilizar recursos metacognitivos para enmendar sus fallas procedimentales.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Normas de Evaluación de los Aprendizajes",
      capitulo: "El Proceso de Evaluación por Competencias",
      apartado: "El carácter formativo y la obligatoriedad de la retroalimentación continua",
      justificacion: "Establece que la corrección de producciones debe constituir un proceso de acompañamiento dialógico que guíe al estudiante hacia el dominio del indicador de logro."
    },
    competenciaEvaluada: "Provisión de retroalimentación pedagógica constructiva orientada a la mejora continua del aprendizaje",
    nivelDificultad: "Alta"
  },
  {
    id: 115,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Innovación y Sostenibilidad Ambiental",
    pregunta: "Durante el desarrollo de un Módulo Formativo en la especialidad de Agropecuaria, un grupo de estudiantes propone a su docente aprovechar los residuos orgánicos del comedor escolar para crear un sistema de compostaje y lombricultura, sustituyendo así los fertilizantes químicos importados que usaban en las parcelas del politécnico. ¿Cómo debe gestionar el docente esta propuesta?",
    opciones: [
      "Rechazarla de plano, ya que la recolección de basura del comedor es competencia exclusiva del personal de conserjería.",
      "Integrar y apoyar el proyecto en su planificación, puesto que responde a las competencias transversales de protección ambiental, innovación sostenible y reducción de costos operativos, principios promovidos en la ETP dominicana.",
      "Cobrar una tarifa extra a la cooperativa del comedor para retirar sus desechos y depositar los fondos en la cuenta personal del docente de taller.",
      "Autorizar el proyecto únicamente si el Ministerio de Medio Ambiente emite una licencia de impacto ambiental clase A para la escuela."
    ],
    respuestaCorrecta: 1,
    explicacion: "El perfil de egreso de la ETP busca formar ciudadanos profesionales capaces de aportar soluciones sostenibles. El compostaje en escuelas agropecuarias (Economía Circular) es una práctica altamente recomendada, alinea los módulos con las competencias fundamentales del currículo (Ambiental y de Salud, Pensamiento Creativo).",
    fundamentoNormativo: {
      documento: "Diseño Curricular Modalidad Técnico Profesional / Competencias Fundamentales",
      capitulo: "Competencia Ambiental y de la Salud / Competencia Científica y Tecnológica",
      apartado: "Resolución de problemas técnicos aplicando criterios de sostenibilidad y ecología",
      justificacion: "Impulsa el desarrollo de prácticas técnico-profesionales que minimicen el impacto ambiental y promuevan el aprovechamiento de los recursos locales."
    },
    competenciaEvaluada: "Integración de la gestión ambiental y el desarrollo sostenible en las prácticas operativas de la especialidad",
    nivelDificultad: "Alta"
  },
  {
    id: 116,
    categoria: "Competencias Docentes Generales",
    especialidad: "Protección a NNA y Permanencia Escolar",
    pregunta: "Un docente de 6to grado técnico detecta que un estudiante de 16 años se queda dormido constantemente en el taller, presenta bajo rendimiento y signos de agotamiento extremo. Tras indagar, el alumno revela que está trabajando de noche cargando furgones en un muelle hasta las 3:00 a.m. para ayudar económicamente en su casa. ¿Qué responsabilidad ineludible tiene el docente en este caso?",
    opciones: [
      "Aconsejar al estudiante que consuma bebidas energéticas antes de entrar al politécnico para mantener la alerta en el taller.",
      "Reportar el caso al Departamento de Orientación y a la Dirección del centro, ya que el trabajo infantil nocturno y peligroso está prohibido por la Ley 136-03 y vulnera el derecho a la educación, debiendo el centro canalizar la intervención con las autoridades de protección (CONANI / Ministerio de Trabajo).",
      "Exigirle al estudiante que renuncie inmediatamente al trabajo bajo amenaza de ser reprobado por ausencias mentales en clase.",
      "Felicitar la actitud de responsabilidad familiar del joven y exonerarlo de tomar exámenes para que pueda dormir durante la jornada escolar."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Ley 136-03 prohíbe el trabajo en adolescentes que interfiera con su escolaridad o implique riesgos físicos graves (trabajo pesado y nocturno). El docente no es juez, pero es un garante de derechos que debe activar la ruta de protección institucional para salvaguardar la salud y educación del NNA.",
    fundamentoNormativo: {
      documento: "Ley 136-03, Código de Protección de Niños, Niñas y Adolescentes",
      capitulo: "Derechos de Protección y Regulaciones del Trabajo de Adolescentes",
      apartado: "Prohibición de peores formas de trabajo infantil y labores que impidan la educación",
      justificacion: "Establece el deber de los actores del sistema educativo de denunciar e intervenir ante situaciones de explotación laboral que comprometan el desarrollo integral de los menores."
    },
    competenciaEvaluada: "Detección y canalización institucional de casos de vulneración de derechos y prevención del trabajo infantil peligroso",
    nivelDificultad: "Alta"
  },
  {
    id: 117,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Control de Calidad en Talleres",
    pregunta: "En el Módulo de 'Confección Industrial de Prendas de Vestir', las rúbricas y criterios de evaluación estipulan márgenes de error de costura de máximo 2 milímetros. Un grupo de estudiantes entrega un lote de 20 camisas, pero el 30% presenta costuras torcidas y cuellos asimétricos. Argumentando que 'se esforzaron mucho', la docente les asigna la calificación de 'Logrado Excelencia'. ¿Qué principio técnico y evaluativo se compromete con esta decisión?",
    opciones: [
      "La calidad como estándar industrial y el rigor de los Criterios de Evaluación del Módulo, pues evaluar por 'esfuerzo' ignorando los defectos técnicos desvirtúa el perfil de egreso y certifica una competencia no dominada según el Catálogo Nacional de Cualificaciones.",
      "Ninguno, puesto que en el sistema preuniversitario dominicano la actitud y el esfuerzo tienen un peso normativo superior a la calidad técnica del producto terminado.",
      "El principio de producción en masa, dado que lo importante en la ETP es la cantidad de piezas elaboradas por minuto, no su acabado estético.",
      "Se compromete la relación laboral con la empresa proveedora de telas, que exigirá el pago inmediato por el material desperdiciado."
    ],
    respuestaCorrecta: 1,
    explicacion: "En la ETP, el 'saber hacer' incluye hacerlo con los estándares de calidad del sector socioproductivo. Si un estudiante no cumple los criterios de calidad (RAs y CEs), no se ha logrado la competencia. El esfuerzo se valora como competencia actitudinal, pero no puede sustituir la exactitud de la competencia técnica.",
    fundamentoNormativo: {
      documento: "Ordenanza 03-2017 y Marco Nacional de Cualificaciones",
      capitulo: "Evaluación de Competencias y Certificación",
      apartado: "El cumplimiento de los estándares de calidad definidos en los Criterios de Evaluación",
      justificacion: "Norma que la titulación técnica debe dar fe pública ante los empleadores de que el egresado domina los procesos productivos con rigor técnico, precisión y calidad."
    },
    competenciaEvaluada: "Aplicación estricta de métricas de control de calidad industrial en la evaluación de productos formativos",
    nivelDificultad: "Alta"
  },
  {
    id: 118,
    categoria: "Competencias Docentes Generales",
    especialidad: "Gestión del Aula y Resolución de Conflictos",
    pregunta: "En el laboratorio de Diseño Asistido por Computadora, dos estudiantes inician una fuerte discusión verbal arrebatándose un mouse porque ambos necesitan usar la única impresora 3D disponible para entregar su proyecto final en la próxima hora. El conflicto escala y se levantan de sus asientos. ¿Cuál es el abordaje metodológico y disciplinario que debe aplicar el docente?",
    opciones: [
      "Ignorar el conflicto para fomentar que los estudiantes desarrollen habilidades de supervivencia y negociación agresiva empresarial.",
      "Intervenir inmediatamente para detener la escalada física, separar a los estudiantes, utilizar el diálogo reflexivo (mediación) para desescalar la tensión, y reorganizar la logística de impresión, aplicando posteriormente las medidas formativas correspondientes de las Normas de Convivencia.",
      "Desconectar la impresora 3D y reprobar automáticamente a ambos estudiantes en el Módulo Formativo completo por alterar el orden público.",
      "Permitir que el estudiante con mayor índice académico imprima primero, estableciendo el mérito teórico como el único criterio de mediación técnica."
    ],
    respuestaCorrecta: 1,
    explicacion: "El docente es el mediador primario en el aula. Las Normas de Convivencia Armoniosa priorizan la resolución pacífica, la mediación y el restablecimiento de las relaciones operativas. El docente debe controlar el espacio físico, mediar para resolver el nudo logístico (la impresora) y aplicar medidas disciplinarias formativas, no destructivas.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      capitulo: "Estrategias Preventivas y de Resolución Pacífica de Conflictos",
      apartado: "La mediación escolar, el diálogo y el rol del docente como gestor del clima de aula",
      justificacion: "Establece protocolos para evitar la escalada de violencia, garantizando un clima de respeto y organizando los recursos educativos para minimizar fricciones."
    },
    competenciaEvaluada: "Mediación de conflictos interpersonales y gestión equitativa de recursos en ambientes de aprendizaje práctico",
    nivelDificultad: "Alta"
  },
  {
    id: 119,
    categoria: "Competencias Docentes Generales",
    especialidad: "Planificación de Secuencias Didácticas",
    pregunta: "Al auditar el cuaderno de planificación de un docente de Mecatrónica, el Coordinador Técnico observa que todas las secuencias didácticas diarias incluyen las fases de 'Inicio' (motivación, recuperación de saberes) y 'Desarrollo' (práctica en taller), pero omiten sistemáticamente la fase de 'Cierre'. ¿Por qué esta omisión impacta negativamente el aprendizaje según el currículo dominicano?",
    opciones: [
      "No impacta negativamente, ya que el 'Cierre' es una formalidad administrativa exclusiva para las escuelas de educación primaria.",
      "Porque elimina el espacio pedagógico destinado a la metacognición, síntesis, evaluación de los procesos realizados e institucionalización del aprendizaje, impidiendo que el estudiante reflexione sobre cómo y qué aprendió durante la práctica.",
      "Porque sin la fase de cierre el docente no puede asignar tareas para el hogar, incumpliendo la cuota de tareas obligatorias del MINERD.",
      "Porque el cierre es el único momento permitido legalmente para que los estudiantes limpien el taller técnico."
    ],
    respuestaCorrecta: 1,
    explicacion: "En el enfoque por competencias, la fase de cierre de una secuencia didáctica es indispensable. Es el momento de la metacognición ('¿Qué hicimos? ¿Cómo lo resolvimos? ¿Qué falló?'). Sin esta reflexión, la práctica en el taller corre el riesgo de convertirse en un activismo mecánico sin interiorización del aprendizaje.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular",
      capitulo: "Diseño y Momentos de la Secuencia Didáctica",
      apartado: "El Cierre Didáctico y los Procesos de Metacognición",
      justificacion: "Define la estructura innegociable de la clase (Inicio, Desarrollo, Cierre), siendo el cierre fundamental para la retroalimentación, síntesis y consolidación de las competencias movilizadas."
    },
    competenciaEvaluada: "Estructuración completa y efectiva de secuencias didácticas garantizando los procesos de metacognición",
    nivelDificultad: "Alta"
  },
  {
    id: 120,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Gestión de Inventario y Herramientas",
    pregunta: "Al finalizar el semestre, el politécnico realiza un inventario en el área de Electromecánica y descubre la pérdida de valiosas herramientas de precisión (micrómetros, verniers y multímetros). La auditoría revela que el docente permitía a los estudiantes tomar las herramientas directamente de los anaqueles sin firmar ninguna bitácora de préstamo, vale de salida o ficha de asignación diaria. ¿Qué establece la normativa técnica respecto a esta práctica operativa?",
    opciones: [
      "Que el docente confió correctamente en los valores morales de los estudiantes, y las pérdidas deben asumirse como mermas naturales del proceso educativo.",
      "Que el docente incurrió en una falta de controles administrativos severa, puesto que el Manual de Gestión de Talleres exige la implementación y supervisión estricta de sistemas de pañol, inventario rotativo y registros de préstamos (vales) para proteger los activos del centro.",
      "Que las herramientas de precisión, al ser materiales de uso común, no requieren registro de entrada o salida, a diferencia de la maquinaria pesada.",
      "Que la dirección del politécnico debe descontar el costo de las herramientas faltantes exclusivamente del salario de los estudiantes."
    ],
    respuestaCorrecta: 1,
    explicacion: "El control de inventario no solo es una necesidad administrativa escolar, sino una competencia procedimental de la industria. El Manual de Gestión de Talleres obliga a establecer un 'pañol' (almacén de herramientas) controlado con registros de préstamo. El docente técnico es responsable de auditar este proceso diariamente.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios de la Dirección de Educación Técnico Profesional",
      capitulo: "Gestión Administrativa, Pañol y Control de Inventarios de Activos",
      apartado: "Sistemas de vales, trazabilidad y control de entrada/salida de herramentales e insumos didácticos",
      justificacion: "Responsabiliza al docente del taller de implementar sistemas de control para salvaguardar los bienes del Estado y enseñar disciplina industrial a los pasantes."
    },
    competenciaEvaluada: "Implementación de sistemas administrativos y de pañol para el control y resguardo del inventario técnico",
    nivelDificultad: "Alta"
  },
  {
    id: 121,
    categoria: "Competencias Docentes Generales",
    especialidad: "Evaluación por Evidencias y Equidad",
    pregunta: "En el Módulo de Gestión Administrativa, un estudiante de escasos recursos entrega su portafolio de evidencias impreso en papel bond blanco y negro, estructurado con una impecable organización técnica, cálculos correctos y análisis financieros exactos. Sin embargo, el docente le descuenta 30 puntos de la calificación final porque no utilizó carpetas de cuero ni papel fotográfico a color como exigían las instrucciones de formato. ¿Qué valoración técnico-pedagógica tiene esta acción?",
    opciones: [
      "Es una acción pedagógica válida porque fomenta el estándar de presentación visual corporativa de alta gerencia.",
      "Es una práctica discriminatoria y contraria al enfoque de evaluación por competencias, el cual establece que la calificación debe centrarse en los Criterios de Evaluación y en las evidencias del saber hacer técnico, no en el poder adquisitivo del estudiante para costear recursos estéticos.",
      "Es aceptable siempre y cuando el docente haya notificado el descuento de puntos desde el inicio del semestre.",
      "Constituye un ejercicio de autonomía docente fundamentado en la libertad de cátedra del nivel secundario."
    ],
    respuestaCorrecta: 1,
    explicacion: "El sistema de evaluación dominicano es inclusivo y se basa en el logro de competencias. Penalizar a un estudiante por la falta de recursos económicos para adornos estéticos cuando la evidencia técnica y procedimental (el Resultado de Aprendizaje) es correcta, vulnera el principio de equidad y los estándares de evaluación de la Ordenanza 03-2017.",
    fundamentoNormativo: {
      documento: "Ordenanza 03-2017 / Bases de la Revisión Curricular",
      capitulo: "La Evaluación de los Aprendizajes y el Principio de Equidad",
      apartado: "Uso de evidencias de desempeño centradas en el indicador de logro",
      justificacion: "Garantiza que la evaluación mida el dominio de la competencia profesional y evite barreras de aprendizaje o penalizaciones por vulnerabilidad socioeconómica."
    },
    competenciaEvaluada: "Aplicación de evaluaciones objetivas y equitativas centradas en la evidencia del aprendizaje",
    nivelDificultad: "Alta"
  },
  {
    id: 122,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Formación en Centros de Trabajo (FCT)",
    pregunta: "El Coordinador de FCT realiza una visita de supervisión a un taller industrial y encuentra que un estudiante de sexto grado de Mecanizado está operando de manera autónoma una prensa hidráulica de 50 toneladas, mientras el supervisor de la empresa se encuentra en una reunión fuera de las instalaciones. ¿Cuál debe ser la intervención normativa inmediata del Coordinador?",
    opciones: [
      "Registrar el hecho como un excelente indicador de autonomía, madurez e integración laboral en la bitácora del estudiante.",
      "Intervenir para detener la operación inmediatamente, retirar al estudiante de la maquinaria y levantar un acta de incumplimiento a la empresa, debido a que el Reglamento de FCT prohíbe taxativamente que los pasantes operen maquinarias de alto riesgo sin la supervisión física y directa del tutor empresarial.",
      "Aprovechar la oportunidad para tomar una fotografía promocional del estudiante para las redes sociales del politécnico.",
      "Solicitar al estudiante que disminuya la velocidad de la máquina a un 50% hasta que el supervisor regrese de su reunión."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Reglamento de FCT establece límites claros sobre la actuación de los pasantes. Nunca reemplazan a un trabajador y no pueden ejecutar maniobras de riesgo industrial sin el acompañamiento directo de un profesional titulado. Dejar a un pasante solo ante una prensa pesada es una negligencia crítica compartida.",
    fundamentoNormativo: {
      documento: "Reglamento de Formación en Centros de Trabajo (FCT) / Ordenanza 03-2017",
      capitulo: "Obligaciones de la Empresa Colaboradora y Restricciones del Pasante",
      apartado: "Prohibición de asunción de roles de riesgo sin tutoría directa",
      justificacion: "Salvaguarda la integridad física y legal del estudiante frente a negligencias de supervisión en entornos laborales reales."
    },
    competenciaEvaluada: "Supervisión de prácticas laborales seguras y fiscalización del cumplimiento de convenios empresa-escuela",
    nivelDificultad: "Alta"
  },
  {
    id: 123,
    categoria: "Competencias Docentes Generales",
    especialidad: "Inclusión Educativa y Atención a la Diversidad",
    pregunta: "Una estudiante con discapacidad visual leve (ceguera parcial corregible) ingresa a la especialidad de Artes Culinarias. El docente del módulo de Cocina Básica, argumentando medidas de prevención de accidentes, decide exonerar permanentemente a la estudiante de las prácticas con cuchillos y estufas, asignándole en su lugar tareas exclusivas de mecanografiar recetas en la computadora. Según el marco legal, ¿cómo se evalúa esta decisión?",
    opciones: [
      "Es una medida proteccionista correcta que exonera al MINERD de cualquier demanda por negligencia civil.",
      "Es una acción segregadora que vulnera la Ordenanza 05-2024. El docente debió realizar ajustes razonables de acceso (ej. iluminación adecuada, estaciones con contraste visual, guantes de corte) para garantizar que la estudiante participe y desarrolle las mismas competencias prácticas que sus pares.",
      "Es pertinente porque los Catálogos Nacionales de Cualificaciones prohíben el ingreso de estudiantes con barreras visuales a familias profesionales relacionadas con alimentos y bebidas.",
      "Es un ajuste válido siempre que la estudiante firme un acuerdo aceptando que recibirá un título técnico con validez restringida a trabajos de oficina."
    ],
    respuestaCorrecta: 1,
    explicacion: "La inclusión educativa prohíbe la exclusión sistemática de las actividades núcleo del aprendizaje. Exonerar a un alumno de las prácticas técnicas por una discapacidad leve es discriminación. La Ordenanza 05-2024 obliga al politécnico a proporcionar 'ajustes razonables' que eliminen la barrera sin anular la competencia.",
    fundamentoNormativo: {
      documento: "Ordenanza No. 05-2024 sobre Educación Inclusiva / Ley 5-13 sobre Discapacidad",
      capitulo: "De los Ajustes Razonables y la Accesibilidad Universal",
      apartado: "Derecho a la participación plena en las actividades prácticas mediante apoyos específicos",
      justificacion: "Garantiza el derecho inalienable del estudiantado a formarse en las competencias de su perfil profesional sin ser relegados a roles teóricos por motivos de discapacidad."
    },
    competenciaEvaluada: "Aplicación del Diseño Universal para el Aprendizaje (DUA) y ajustes razonables en talleres técnicos",
    nivelDificultad: "Alta"
  },
  {
    id: 124,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Mantenimiento y Seguridad Industrial",
    pregunta: "Durante la preparación del taller de Instalaciones Eléctricas, el docente identifica que el cable de conexión a tierra del panel principal de simulación se ha roto. A pesar de esto, decide unir los cables con cinta adhesiva de papelería para no retrasar la evaluación práctica de circuitos trifásicos programada para ese día. ¿Qué implicaciones normativas conlleva esta acción?",
    opciones: [
      "Demuestra capacidad de resolución de problemas bajo presión y optimización de los escasos recursos del politécnico.",
      "Incurre en una falta grave de seguridad. Según el Manual de Gestión de Talleres, debió desenergizar el panel, aplicar el protocolo de bloqueo/etiquetado (Lockout/Tagout) y suspender las prácticas hasta que personal calificado repare la tierra física para evitar un riesgo de electrocución letal.",
      "Es un procedimiento permitido transitoriamente, siempre que el docente supervise personalmente cada conexión que realicen los estudiantes.",
      "Solo se considera falta si algún estudiante sufre una descarga eléctrica real durante la evaluación."
    ],
    respuestaCorrecta: 1,
    explicacion: "La conexión a tierra es el sistema de protección vital en talleres eléctricos. Repararla de forma negligente con cinta no aislante ante un circuito trifásico es un peligro inminente. La normativa prohíbe el uso de equipos en estado de riesgo y exige protocolos de aislamiento (LOTO) inmediatos.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios / Protocolos de Seguridad Ocupacional",
      capitulo: "Prevención de Riesgos Eléctricos y Sistemas de Protección",
      apartado: "Prohibición de uso de infraestructuras eléctricas defectuosas y aplicación de medidas de contingencia",
      justificacion: "Establece la preservación de la vida y la integridad de los estudiantes como prioridad absoluta sobre el cumplimiento del calendario de evaluaciones."
    },
    competenciaEvaluada: "Gestión de riesgos eléctricos e implementación de protocolos de seguridad ante fallas críticas de infraestructura",
    nivelDificultad: "Alta"
  },
  {
    id: 125,
    categoria: "Competencias Docentes Generales",
    especialidad: "Convivencia Escolar y Prevención de Violencia",
    pregunta: "Dos estudiantes del politécnico inician un forcejeo violento en el pasillo. El docente de turno interviene sujetando fuertemente a uno de ellos por el cuello de la camisa, empujándolo contra los casilleros y arrastrándolo hasta la oficina del director. Según el marco legal de protección de NNA y convivencia dominicana, ¿cómo se califica la intervención del maestro?",
    opciones: [
      "Es una técnica de contención física justificada y legítima para restaurar el orden público y la autoridad docente en situaciones de caos.",
      "Constituye una falta muy grave tipificada como maltrato físico y vulneración de derechos, ya que la Ley 136-03 y las Normas de Convivencia prohíben absolutamente el uso de la fuerza desproporcionada, golpes o castigos corporales por parte del personal educativo.",
      "Es una acción permitida exclusivamente si el estudiante agredido es mayor de 16 años y presenta complexión física robusta.",
      "Se considera correcta si el docente levanta un acta anecdótica justificando el uso de la fuerza como autodefensa preventiva."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Código para el Sistema de Protección y los Derechos Fundamentales de Niños, Niñas y Adolescentes (Ley 136-03) y las Normas de Convivencia Armoniosa del MINERD prohíben de forma absoluta los tratos crueles, denigrantes o físicos. Intervenir en un pleito requiere técnicas de mediación verbal y separación segura, nunca ejercer violencia física contra el NNA.",
    fundamentoNormativo: {
      documento: "Ley 136-03 (Código de NNA) / Normas del Sistema Educativo para la Convivencia Armoniosa",
      capitulo: "Derechos y Garantías / Faltas del Personal Docente",
      apartado: "Prohibición taxativa del castigo corporal, maltrato físico o psicológico",
      justificacion: "Garantiza la integridad personal de los estudiantes, penalizando cualquier agresión por parte de las autoridades escolares independientemente de la falta cometida por el alumno."
    },
    competenciaEvaluada: "Aplicación de normativas de disciplina escolar positiva y respeto a la integridad física de los estudiantes",
    nivelDificultad: "Alta"
  },
  {
    id: 126,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Vinculación Escuela-Empresa",
    pregunta: "Una empresa multinacional contacta al Coordinador Técnico del politécnico ofreciendo donar un lote de 50 monitores CRT (tubo de rayos catódicos) obsoletos y con fugas de plomo evidentes, con el fin de obtener certificaciones de reducción de impuestos. El docente acepta inmediatamente sin inspeccionar, argumentando que 'a caballo regalado no se le mira el colmillo'. ¿Qué infracción normativa ocurre aquí?",
    opciones: [
      "Ninguna, puesto que la autogestión de recursos tecnológicos es una competencia docente altamente valorada.",
      "Transgrede el Manual de Gestión de Talleres, el cual obliga al centro a evaluar técnicamente las donaciones, rechazando aquellos equipos obsoletos o tóxicos que representen pasivos ambientales, riesgos de salud (plomo) o costos inasumibles de disposición final para el MINERD.",
      "Viola las normativas porque debió exigir adicionalmente que la empresa pagara un estipendio económico mensual a los estudiantes por usar los equipos.",
      "Es una infracción únicamente si los monitores no vienen acompañados de sus manuales de usuario originales."
    ],
    respuestaCorrecta: 1,
    explicacion: "Aceptar 'chatarra electrónica' (e-waste) peligrosa convierte al politécnico en un vertedero tóxico y genera un problema de salud ocupacional grave. El MINERD estipula que toda donación tecnológica debe someterse a una evaluación de pertinencia curricular y seguridad antes de ser aceptada e ingresada al inventario del centro.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios / Políticas de Vinculación y Donaciones",
      capitulo: "Gestión de Activos Fijos y Relaciones Corporativas",
      apartado: "Criterios técnicos para la recepción, inspección y descarte de equipamiento donado",
      justificacion: "Evita que las escuelas asuman pasivos ambientales y riesgos tóxicos disfrazados de filantropía corporativa."
    },
    competenciaEvaluada: "Gestión técnica de donaciones empresariales, control de calidad y prevención de riesgos ambientales",
    nivelDificultad: "Alta"
  },
  {
    id: 127,
    categoria: "Competencias Docentes Generales",
    especialidad: "Aprendizaje Basado en Proyectos (ABP)",
    pregunta: "Un docente de la especialidad de Turismo implementa la estrategia de Aprendizaje Basado en Proyectos (ABP). Para ello, indica a los estudiantes que su 'proyecto' consistirá únicamente en copiar la definición de ecoturismo de la página web del Ministerio de Turismo y pegarla en un trifolio digital para leerlo en clase. Desde el enfoque curricular por competencias, ¿qué evaluación merece esta actividad?",
    opciones: [
      "Es una actividad excelente porque el uso de herramientas digitales (trifolio) garantiza automáticamente el logro de las competencias profesionales.",
      "No clasifica como ABP. Un verdadero proyecto en la ETP requiere plantear un desafío real, investigación profunda, planificación, ejecución de un producto auténtico (ej. diseñar una ruta ecoturística sostenible local) y una evaluación integral de las competencias, no una simple transcripción.",
      "Es correcta, pero la lectura del trifolio debe realizarse obligatoriamente en idioma inglés para cumplir con la transversalidad.",
      "Se considera ABP siempre que el trabajo sea impreso y depositado físicamente en la biblioteca del politécnico."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Aprendizaje Basado en Proyectos (ABP) no es sinónimo de hacer una manualidad o copiar información. Las Bases del Currículo Dominicano definen el ABP como una metodología investigativa, colaborativa y productiva donde los estudiantes resuelven problemas del mundo real. La actividad descrita es un simple ejercicio de copia y pega.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular",
      capitulo: "Estrategias Metodológicas para el Aprendizaje Significativo",
      apartado: "Definición y rigor metodológico del Aprendizaje Basado en Proyectos",
      justificacion: "Establece el rigor necesario para que las estrategias activas realmente movilicen competencias complejas de análisis, síntesis y creación profesional."
    },
    competenciaEvaluada: "Dominio metodológico para el diseño y ejecución de la estrategia de Aprendizaje Basado en Proyectos",
    nivelDificultad: "Alta"
  },
  {
    id: 128,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Criterios de Evaluación y Calidad Técnica",
    pregunta: "En el Módulo de Redes y Comunicaciones, un Criterio de Evaluación oficial exige: 'Configurar enlaces de red optimizando la longitud del cableado estructurado según estándares TIA/EIA'. Un estudiante logra establecer la conexión a internet, pero desperdicia 20 metros de cable innecesarios, dejando la instalación desordenada. El docente lo califica con 100/100 afirmando que 'al final, el internet funciona'. ¿Cuál es el error técnico-evaluativo del maestro?",
    opciones: [
      "Ignorar que el Criterio de Evaluación del diseño curricular evalúa no solo el resultado final (conexión), sino también la eficiencia, el respeto a los estándares industriales (TIA/EIA) y la calidad del proceso, por lo cual la competencia no se ha logrado de forma óptima.",
      "Calificar de forma numérica, ya que las redes informáticas solo se evalúan mediante listas de cotejo cualitativas.",
      "No haber cobrado al estudiante el costo económico del cable desperdiciado como medida correctiva.",
      "Haber utilizado el estándar TIA/EIA, el cual fue derogado para escuelas públicas por ordenanzas recientes."
    ],
    respuestaCorrecta: 1,
    explicacion: "En la Educación Técnico Profesional (ETP), no basta con que un producto 'funcione'. El estudiante debe demostrar el dominio del proceso con los niveles de calidad y eficiencia dictados por el Catálogo Nacional de Cualificaciones. Ignorar el desperdicio y el desorden invalida la evaluación de la competencia profesional.",
    fundamentoNormativo: {
      documento: "Ordenanza 03-2017 / Catálogo Nacional de Cualificaciones",
      capitulo: "Evaluación de los Aprendizajes y Criterios de Calidad",
      apartado: "La integralidad de la evaluación (proceso, producto y estándares normativos)",
      justificacion: "Asegura que el estudiante no solo aprenda empirismo, sino que adquiera disciplina técnica, optimización de recursos y respeto por las normas de calidad empresarial."
    },
    competenciaEvaluada: "Aplicación de estándares técnicos y normativas de calidad industrial durante la evaluación de producciones",
    nivelDificultad: "Alta"
  },
  {
    id: 129,
    categoria: "Competencias Docentes Generales",
    especialidad: "Ética Profesional",
    pregunta: "Para financiar una excursión recreativa personal a fin de año, el docente encargado del taller de Electrónica instala una pequeña nevera dentro del laboratorio y se dedica a vender refrescos, golosinas y recargas telefónicas a sus estudiantes durante las horas de clase técnica. Frente al marco regulatorio del MINERD, ¿cómo debe ser procesada esta situación?",
    opciones: [
      "Como una excelente iniciativa de emprendimiento transversal que sirve de modelo de negocios para la asignatura de Formación y Orientación Laboral (FOL).",
      "Como una falta disciplinaria grave por conflicto de intereses, uso indebido del tiempo y espacio pedagógico para lucro personal, y violación al Código de Ética y Conducta Profesional establecido en la Orden Departamental 22-2023.",
      "Como una acción permitida si los precios de los productos no superan los establecidos por el Instituto Nacional de Protección a los Derechos del Consumidor (Pro Consumidor).",
      "Como un acuerdo informal válido entre el docente y los estudiantes, exento de regulaciones institucionales siempre que las ventas ocurran durante la hora de recreo."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Orden Departamental 22-2023 prohíbe explícitamente a los docentes realizar negocios personales, ventas, rifas o cobros a sus alumnos dentro del centro educativo. Utilizar el taller técnico como un establecimiento comercial distrae del objetivo pedagógico y constituye una grave falta ética y administrativa.",
    fundamentoNormativo: {
      documento: "Orden Departamental 22-2023 (Código de Ética y Conducta Profesional)",
      capitulo: "De los Deberes y Prohibiciones del Personal Docente",
      apartado: "Prohibición de actividades comerciales y lucro personal dentro de la jornada y recintos escolares",
      justificacion: "Preserva la integridad de la función docente y la naturaleza exclusivamente académica y formativa de los espacios escolares públicos y privados."
    },
    competenciaEvaluada: "Cumplimiento ético de la función docente y prohibición de actividades comerciales incompatibles",
    nivelDificultad: "Alta"
  },
  {
    id: 130,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Manejo de Sustancias y Gestión de Riesgos Químicos",
    pregunta: "En una práctica del módulo de Sanidad Vegetal (Especialidad Agropecuaria), sobran 2 litros de insecticida de alta toxicidad. El docente instruye a los estudiantes a trasvasar el químico a botellas plásticas de refresco recicladas, sin colocarles etiquetas de advertencia, y almacenarlas en el casillero de herramientas comunes. ¿Qué infracción técnica ocurre en este escenario?",
    opciones: [
      "Ninguna, ya que es una práctica de reutilización de plásticos alineada con la protección ambiental transversal del currículo.",
      "Una violación crítica a las normativas de Seguridad y Salud Ocupacional del MINERD y Medio Ambiente (Ley 64-00), ya que está estrictamente prohibido trasvasar agroquímicos a envases de alimentos sin rotulación, lo que podría ocasionar una intoxicación letal accidental.",
      "La única falta es no haber pedido a los estudiantes que pintaran las botellas de negro para evitar que la luz degrade el insecticida.",
      "El procedimiento es legal si el casillero de herramientas se mantiene cerrado con candado durante los fines de semana."
    ],
    respuestaCorrecta: 1,
    explicacion: "Almacenar sustancias tóxicas en envases de consumo humano sin rotular es una de las causas más comunes de intoxicaciones fatales. El Manual de Gestión de Talleres y las leyes ambientales obligan a almacenar químicos en sus envases originales, con Fichas de Seguridad (MSDS) y en gabinetes exclusivos y ventilados.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres / Ley 64-00 de Medio Ambiente y Recursos Naturales",
      capitulo: "Manejo Seguro de Sustancias Peligrosas y Agroquímicos",
      apartado: "Prohibición de almacenamiento de químicos en envases de grado alimenticio y obligatoriedad de etiquetado",
      justificacion: "Previene incidentes catastróficos y garantiza el manejo estandarizado de sustancias peligrosas en entornos de aprendizaje."
    },
    competenciaEvaluada: "Aplicación estricta de protocolos de bioseguridad, etiquetado y almacenamiento de materiales peligrosos",
    nivelDificultad: "Alta"
  },
  {
    id: 131,
    categoria: "Competencias Docentes Generales",
    especialidad: "Articulación y Trabajo Colaborativo",
    pregunta: "En un politécnico con la especialidad de Cuidados de Enfermería, los docentes técnicos solicitan al profesor de Idioma Extranjero (Inglés) que dedique un tiempo a enseñar vocabulario médico y frases de triaje hospitalario para fortalecer el perfil del egresado. El docente de Inglés se niega rotundamente, afirmando: 'Mi diseño curricular es general y no tengo obligación de enseñar cosas de salud'. ¿Qué sustento normativo refuta esta postura?",
    opciones: [
      "El profesor de inglés tiene la razón jurídica, ya que los módulos académicos y técnicos pertenecen a Direcciones Generales distintas dentro del MINERD y no deben mezclarse.",
      "La Ordenanza 03-2017 y las Bases Curriculares exigen la articulación intradisciplinar e interdisciplinar. En la ETP, las asignaturas académicas deben contextualizarse y alinearse sinérgicamente para tributar al perfil profesional técnico de los estudiantes.",
      "La negativa es correcta a menos que los docentes técnicos le paguen horas extras al profesor de inglés por diseñar ese contenido especializado.",
      "El vocabulario médico en inglés está reservado exclusivamente para los programas de educación universitaria, no para la secundaria."
    ],
    respuestaCorrecta: 1,
    explicacion: "En la Modalidad Técnico Profesional, el componente académico no es un apéndice aislado; su propósito es complementar la formación integral del técnico. El diseño curricular por competencias obliga a los docentes de áreas generales (Matemática, Lenguas, Ciencias) a contextualizar sus contenidos en beneficio de la especialidad técnica (articulación).",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Ordenanza 03-2017",
      capitulo: "Características de la Modalidad Técnico Profesional",
      apartado: "La integración y articulación del componente académico con el componente técnico-profesional",
      justificacion: "Determina que el politécnico debe funcionar como una unidad académica coherente, donde todas las áreas de conocimiento enriquecen el perfil laboral y humano del egresado."
    },
    competenciaEvaluada: "Participación en la articulación interdisciplinaria y contextualización de la enseñanza hacia el perfil profesional",
    nivelDificultad: "Alta"
  },
  {
    id: 132,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Emprendimiento e Innovación",
    pregunta: "Como proyecto final del módulo, una estudiante de Informática desarrolla una aplicación móvil innovadora y completamente funcional para la comercialización local de útiles escolares. El docente evaluador le resta 20 puntos argumentando que 'la educación técnica es para formar empleados que trabajen en empresas ajenas, no para que los alumnos hagan negocios propios'. ¿Cómo se evalúa esta justificación frente al diseño curricular vigente?",
    opciones: [
      "El docente acierta, porque el emprendimiento en el currículo dominicano es exclusivo de la modalidad académica en artes.",
      "El docente contraviene los fundamentos del diseño curricular, ya que el perfil de egreso de la ETP y las competencias transversales promueven explícitamente la capacidad emprendedora, la autogestión y la creación de iniciativas de negocio por parte de los bachilleres técnicos.",
      "La deducción de puntos es válida debido a que la estudiante no registró el código fuente de la aplicación en la Oficina Nacional de Derecho de Autor (ONDA) antes de la presentación.",
      "Es correcto, ya que el módulo de Formación y Orientación Laboral (FOL) prohíbe incentivar el autoempleo antes de la mayoría de edad."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Educación Técnico Profesional (ETP) en República Dominicana no solo forma para la inserción laboral subordinada, sino también para el emprendimiento productivo. Castigar la innovación y la mentalidad empresarial de un estudiante demuestra desconocimiento absoluto de la Competencia Fundamental de Pensamiento Lógico, Creativo y Crítico del MINERD.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Perfil del Egresado de ETP",
      capitulo: "Competencias Fundamentales y Emprendimiento",
      apartado: "Desarrollo de la cultura emprendedora, innovación y autogestión económica en los jóvenes",
      justificacion: "Establece el fomento de la innovación técnica y la creación de microempresas como un eje transversal deseable y necesario en la educación secundaria."
    },
    competenciaEvaluada: "Fomento, valoración y acompañamiento de la cultura emprendedora y la innovación técnica estudiantil",
    nivelDificultad: "Alta"
  },
  {
    id: 133,
    categoria: "Competencias Docentes Generales",
    especialidad: "Convivencia Escolar y Retroalimentación Ética",
    pregunta: "Tras aplicar una evaluación práctica en el taller, un docente decide imprimir la lista completa de calificaciones y pegarla en la puerta exterior del aula. Además, resalta con un marcador rojo fluorescente los nombres de los estudiantes reprobados, escribiendo al margen la palabra 'Deficientes'. Según la normativa de convivencia y evaluación dominicana, ¿cuál es el análisis de esta situación?",
    opciones: [
      "Es un método altamente eficaz para generar competitividad académica y motivación extrínseca entre el alumnado técnico.",
      "Constituye una práctica denigrante, humillante y vulneradora de la privacidad estudiantil, prohibida por las Normas de Convivencia y la Ley 136-03. La retroalimentación de la evaluación debe ser descriptiva, formativa y comunicarse en un ambiente de respeto y confidencialidad.",
      "Es una acción administrativa ordinaria amparada por las directrices de transparencia en la gestión pública escolar.",
      "Es correcto siempre que el docente haya obtenido previamente el permiso verbal del representante de curso."
    ],
    respuestaCorrecta: 1,
    explicacion: "Publicar listas humillantes ('escraches' académicos) transgrede los derechos fundamentales de los niños, niñas y adolescentes. La Ley 136-03 protege el derecho a la imagen y el respeto, mientras que las Normas de Evaluación del MINERD mandatan que los resultados deben discutirse como un proceso formativo, privado y constructivo.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa / Ley 136-03",
      capitulo: "Principios de Trato Digno y Confidencialidad",
      apartado: "Prohibición de prácticas evaluativas o disciplinarias que conlleven humillación o daño psicológico",
      justificacion: "Protege la integridad emocional del estudiante, garantizando un ambiente escolar libre de estigmatización y violencia psicológica."
    },
    competenciaEvaluada: "Comunicación ética de resultados evaluativos garantizando el respeto, la dignidad y la privacidad del estudiante",
    nivelDificultad: "Alta"
  },
  {
    id: 134,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "FCT y Prevención de Acoso",
    pregunta: "Una estudiante de 17 años en el programa de FCT se acerca llorando a su Coordinador Técnico y le informa que el supervisor de planta de la empresa le realiza comentarios sexuales inapropiados de forma constante e intenta aislarla en el almacén. El Coordinador le responde: 'Ignóralo y concéntrate en aprender, no podemos arruinar el convenio con la empresa por algo sin importancia'. ¿Qué mandato legal está violando el Coordinador?",
    opciones: [
      "La política de resiliencia empresarial promovida en el programa de Formación y Orientación Laboral.",
      "La Ley 136-03 y el Reglamento de FCT. El Coordinador es garante de derechos y tiene la obligación ineludible de suspender inmediatamente la pasantía en ese centro, proteger a la menor, reportar el caso a la Dirección y denunciar el presunto acoso ante las autoridades competentes.",
      "El mandato de secreto comercial corporativo, ya que debe discutirlo primero con Recursos Humanos de la empresa antes de escuchar a la estudiante.",
      "Ninguno, puesto que en el entorno laboral de la FCT los estudiantes asumen las normativas internas de la empresa, no las del centro educativo."
    ],
    respuestaCorrecta: 1,
    explicacion: "Ignorar una denuncia de acoso sexual hacia una menor (estudiante en FCT) hace al docente cómplice y responsable por omisión ante la ley dominicana. El Reglamento de FCT prioriza la integridad moral y física de los NNA. El convenio con la empresa debe cesar de inmediato si el entorno es hostil y peligroso.",
    fundamentoNormativo: {
      documento: "Ley 136-03 (Código de NNA) / Reglamento de Formación en Centros de Trabajo",
      capitulo: "Protección Contra el Abuso y Suspensión o Rescisión de Convenios",
      apartado: "Rutas de actuación obligatoria ante situaciones de abuso o acoso sexual en espacios de aprendizaje laboral",
      justificacion: "El centro educativo es legalmente responsable de asegurar ambientes de pasantía seguros, libres de violencia y acoso, debiendo intervenir sin dilación ante cualquier denuncia."
    },
    competenciaEvaluada: "Gestión de crisis y aplicación de protocolos legales ante situaciones de acoso en la Formación en Centros de Trabajo",
    nivelDificultad: "Alta"
  },
  {
    id: 135,
    categoria: "Competencias Docentes Generales",
    especialidad: "Derechos y Permanencia Escolar (Embarazo Adolescente)",
    pregunta: "El docente del taller de Logística nota que una estudiante de 5to grado técnico muestra signos físicos de embarazo. En medio de una clase, detiene la explicación y le exige en voz alta frente a todo el grupo que debe traer una prueba de embarazo al día siguiente, indicándole que 'en este politécnico no se permiten alumnas embarazadas porque dañan el prestigio del centro'. Según las leyes dominicanas, ¿qué constituye este accionar?",
    opciones: [
      "Una medida disciplinaria fundamentada en el Estatuto Estudiantil de Educación Media que protege el orden moral de las instituciones.",
      "Una vulneración múltiple y gravísima a la Ley 136-03 y la Constitución. La educación es un derecho universal, la expulsión o acoso por embarazo es discriminación ilegal, y la exhibición pública del tema viola el derecho a la privacidad e intimidad de la adolescente.",
      "Una acción amparada bajo el derecho constitucional de los colegios técnicos privados a seleccionar su propia matrícula de estudiantes.",
      "Un abordaje necesario para evitar que la estudiante levante objetos pesados en el taller durante el desarrollo del embarazo."
    ],
    respuestaCorrecta: 1,
    explicacion: "En la República Dominicana (Ley 136-03 y políticas del MINERD), está terminantemente prohibido suspender, expulsar o discriminar a una estudiante por estar embarazada. El docente, además de incurrir en discriminación ilegal, viola el derecho a la confidencialidad al exponer su salud médica ante todo el salón.",
    fundamentoNormativo: {
      documento: "Ley 136-03 (Código de Protección a NNA) / Constitución de la República Dominicana",
      capitulo: "Derecho a la Educación, a la Intimidad y a la No Discriminación",
      apartado: "Prohibición absoluta de exclusión escolar por motivos de embarazo adolescente",
      justificacion: "Establece la obligatoriedad del Estado y los centros educativos de garantizar la permanencia escolar de las adolescentes embarazadas en un entorno de respeto."
    },
    competenciaEvaluada: "Protección de los derechos fundamentales de las estudiantes y aplicación de normativas antidiscriminación institucional",
    nivelDificultad: "Alta"
  },
  {
    id: 136,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Diseño Curricular y Evaluación",
    pregunta: "Un docente, recién graduado de ingeniería, es contratado para impartir un módulo en el politécnico. En lugar de utilizar los Resultados de Aprendizaje (RA) del Diseño Curricular Oficial del MINERD, decide evaluar a los estudiantes aplicando un examen complejo descargado directamente de un pensum universitario internacional, incluyendo temas como termodinámica avanzada que no corresponden al nivel medio. ¿Cuál es el impacto normativo de este proceder?",
    opciones: [
      "Es una práctica de vanguardia que eleva los estándares del politécnico y prepara mejor a los estudiantes para el futuro.",
      "Es una infracción al principio de congruencia técnica. La certificación del MINERD requiere evaluar estrictamente las competencias y Resultados de Aprendizaje estipulados en el currículo de Nivel Secundario Técnico, siendo improcedente exigir competencias de educación superior no programadas.",
      "Es válido siempre y cuando el docente traduzca el examen al español y les otorgue un bono de 10 puntos por nivel de dificultad.",
      "Representa una falta menor que puede subsanarse si se promedian los resultados del examen universitario con las calificaciones de asistencia."
    ],
    respuestaCorrecta: 1,
    explicacion: "El diseño curricular de la ETP está basado en el Marco Nacional de Cualificaciones. Los Resultados de Aprendizaje son vinculantes y definen el límite y alcance del perfil del bachiller técnico (Nivel 3). Evaluar competencias ajenas al diseño oficial invalida el proceso, genera frustración y desvirtúa la titulación estatal.",
    fundamentoNormativo: {
      documento: "Ordenanza 03-2017 y Bases de la Revisión y Actualización Curricular",
      capitulo: "Alineación Curricular y Perfil del Egresado Técnico",
      apartado: "Obligatoriedad de ceñir los procesos de enseñanza y evaluación a los Resultados de Aprendizaje y Criterios preestablecidos",
      justificacion: "Asegura la coherencia, legalidad y estandarización nacional de los procesos de certificación técnica del nivel preuniversitario."
    },
    competenciaEvaluada: "Alineación estricta de los procesos evaluativos y de enseñanza con el diseño curricular oficial del nivel correspondiente",
    nivelDificultad: "Alta"
  },
  {
    id: 137,
    categoria: "Competencias Docentes Generales",
    especialidad: "Permanencia Escolar y Normativa de Evaluación",
    pregunta: "Un estudiante de la especialidad de Comercio se ausenta durante 15 días laborables porque estuvo hospitalizado a causa del virus del dengue. Al reintegrarse, presenta su certificado médico original sellado por la clínica. El docente rechaza la excusa médica afirmando: 'Las reglas son las reglas, si no viniste a presentar tus evidencias en la fecha, tienes un cero definitivo en esos Resultados de Aprendizaje'. Según el MINERD, ¿cómo debe procederse?",
    opciones: [
      "El docente actúa correctamente, ya que el calendario escolar y las fechas de evaluación son inamovibles bajo cualquier circunstancia.",
      "El docente incurre en una violación al derecho a la evaluación. Las normativas ordenan la flexibilización, reprogramación y aplicación de estrategias de recuperación para estudiantes que presentan ausencias justificadas por razones comprobables de salud mayor.",
      "El estudiante debe ser enviado directamente a la modalidad de educación de adultos porque superó el límite de inasistencias permitidas en el semestre.",
      "El centro educativo debe aplicar un examen genérico de cultura general para compensar todas las notas técnicas perdidas."
    ],
    respuestaCorrecta: 1,
    explicacion: "El sistema educativo es garante de derechos. Las normativas de evaluación contemplan explícitamente la reprogramación y la flexibilización ante causas de fuerza mayor comprobadas (enfermedad). Castigar a un alumno con 'ceros' tras sufrir una hospitalización es una práctica antipedagógica y contraria a la ley.",
    fundamentoNormativo: {
      documento: "Ordenanzas vigentes de Evaluación de los Aprendizajes / Normas de Convivencia",
      capitulo: "Disposiciones sobre Asistencia, Promoción y Estrategias de Recuperación",
      apartado: "Derecho a la reprogramación de evaluaciones ante inasistencias justificadas médica o legalmente",
      justificacion: "Garantiza el derecho a la educación y previene el fracaso escolar derivado de vulnerabilidades biológicas o accidentes."
    },
    competenciaEvaluada: "Aplicación de estrategias de flexibilización y recuperación pedagógica ante situaciones de fuerza mayor",
    nivelDificultad: "Alta"
  },
  {
    id: 138,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Conservación de Activos y Mantenimiento",
    pregunta: "En el taller de Mecanizado, el docente responsable utiliza la fresadora CNC (Control Numérico Computarizado) durante todo un semestre sin aplicar ninguna rutina de lubricación de los ejes, a pesar de que el panel digital emite alertas de falta de aceite. El docente alega que 'el Distrito no ha mandado presupuesto para comprar lubricantes'. Al final del ciclo, el motor de la máquina colapsa por fricción térmica. De acuerdo al Manual de Talleres, ¿cuál fue la falla del docente?",
    opciones: [
      "Ninguna, puesto que la gestión y compra de insumos de mantenimiento recae enteramente en las altas esferas del MINERD y no en el facilitador del aula.",
      "Incumplió su deber de salvaguarda. Ante la falta de insumos de lubricación que comprometan la integridad de un equipo de alto costo, el docente debe aplicar el protocolo de paro preventivo de la maquinaria, documentar el riesgo por escrito a la Dirección y evitar su uso destructivo.",
      "Fue un error menor; debió utilizar aceite de cocina o de motor automotriz usado como sustituto temporal para evitar el colapso de los engranajes.",
      "La falla fue de los estudiantes por no recolectar dinero entre ellos para comprar el aceite industrial requerido por la fresadora."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Manual de Gestión de Talleres establece que el docente es custodio de la infraestructura. Si un equipo reporta alarmas críticas de mantenimiento y no hay insumos, el equipo NO DEBE operarse. Forzar su funcionamiento hasta destruirlo es negligencia en la conservación de los bienes del Estado.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios de la DETP",
      capitulo: "Conservación, Mantenimiento Preventivo y Uso de Activos Fijos",
      apartado: "Protocolos de paralización preventiva de maquinarias ante riesgos de daños por falta de mantenimiento",
      justificacion: "Norma el deber fiduciario del docente respecto a la protección del equipamiento industrial, previniendo daños económicos graves al Estado."
    },
    competenciaEvaluada: "Toma de decisiones gerenciales frente al riesgo de deterioro de equipos e implementación de protocolos de paro preventivo",
    nivelDificultad: "Alta"
  },
  {
    id: 139,
    categoria: "Competencias Docentes Generales",
    especialidad: "Estrategias Metodológicas Activas",
    pregunta: "En un acompañamiento áulico al docente del Módulo de 'Promoción de Productos Turísticos', el supervisor observa que el docente dedica el 90% de sus clases a dictar textos en voz alta desde un libro mientras los estudiantes transcriben silenciosamente en sus cuadernos. Al finalizar, califica la 'buena caligrafía'. A la luz del currículo dominicano vigente, ¿cómo se evalúa esta dinámica de clase?",
    opciones: [
      "Como una práctica metodológica excelente y recomendada para fijar el conocimiento teórico fundamental previo a las pasantías.",
      "Como una metodología pasiva y obsoleta que contraviene radicalmente el enfoque por competencias y el paradigma constructivista de la Ordenanza 03-2017, los cuales exigen la aplicación de metodologías activas (estudio de casos, proyectos, simulaciones) centradas en el estudiante.",
      "Como una técnica apropiada si se complementa con exámenes teóricos de memorización a final del período escolar.",
      "Como una práctica exclusiva y normativamente correcta para los primeros tres meses del semestre, debiendo cambiar a prácticas al final."
    ],
    respuestaCorrecta: 1,
    explicacion: "El diseño curricular basado en competencias de la RD destierra explícitamente el dictado y la transcripción pasiva como herramientas centrales del aprendizaje. La ETP requiere movilizar saberes ('aprender haciendo'). Dictar conceptos durante el 90% del tiempo impide el desarrollo de competencias fundamentales y profesionales.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Diseño Curricular de Nivel Secundario",
      capitulo: "El Enfoque por Competencias y Estrategias Metodológicas Activas",
      apartado: "El rol protagónico del estudiante y el docente como guía, mediador y facilitador de experiencias auténticas",
      justificacion: "Determina que la enseñanza en la educación preuniversitaria debe alejarse del memorismo pasivo y enfocarse en la resolución de problemas y la producción técnica."
    },
    competenciaEvaluada: "Diseño e implementación de estrategias metodológicas constructivistas y activas en el aula técnica",
    nivelDificultad: "Alta"
  },
  {
    id: 140,
    categoria: "Competencias Técnicas Especializadas",
    especialidad: "Protocolos de Emergencia Industrial",
    pregunta: "Durante una sesión práctica en el taller de Soldadura, se activa repentinamente la alarma general de evacuación por un conato de incendio en el edificio administrativo contiguo. El docente de soldadura cierra la puerta del taller con llave por dentro y les dice a sus estudiantes: 'Ese problema es allá afuera. Aquí no podemos perder el tiempo porque nos faltan 5 puntos de soldadura para terminar el proyecto'. ¿Qué normativa transgrede el educador de manera flagrante?",
    opciones: [
      "El principio de concentración laboral intensiva propio de la familia profesional de Fabricación Mecánica.",
      "Las directrices universales de Seguridad Ocupacional y los protocolos de Gestión de Riesgos del MINERD, los cuales dictaminan que ante una alarma general de evacuación, todo el personal y estudiantado debe paralizar maquinarias y abandonar el edificio ordenadamente hacia el punto de encuentro.",
      "Los estatutos de protección de propiedad intelectual, puesto que debió guardar los proyectos en la caja fuerte antes de evacuar.",
      "Las reglas de limpieza, ya que el protocolo exige barrer el taller de soldadura completamente antes de salir en caso de incendio."
    ],
    respuestaCorrecta: 1,
    explicacion: "Ignorar una alarma de evacuación e impedir la salida de los estudiantes encerrándolos en un espacio lleno de gases y fuentes térmicas (taller de soldadura) es un acto de negligencia temeraria. Los protocolos de emergencia del MINERD (y la Ley) son de acatamiento forzoso y prioritario sobre cualquier objetivo académico.",
    fundamentoNormativo: {
      documento: "Manual de Gestión de Talleres y Laboratorios / Protocolos Institucionales de Emergencia",
      capitulo: "Planes de Evacuación, Contingencia y Seguridad Contra Incendios",
      apartado: "Obligatoriedad de paralización de tareas y evacuación inmediata ante activación de alarmas",
      justificacion: "Protege el derecho fundamental a la vida frente a contingencias, estipulando la evacuación obligatoria sin excepciones por motivos de productividad académica."
    },
    competenciaEvaluada: "Liderazgo en la aplicación rigurosa de planes institucionales de evacuación y manejo de emergencias",
    nivelDificultad: "Alta"
  }
  
 
];
