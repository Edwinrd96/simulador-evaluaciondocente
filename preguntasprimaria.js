/**
 * ============================================================================
 * BANCO DE 400 PREGUNTAS - ANÁLISIS DE CASOS
 * Evaluación de Desempeño Docente 2025-2026 (EDD)
 * Etapa 5: Ejercicio de Rendimiento Profesional (ERP)
 * Perfil: Maestra de Nivel Primario (1ero a 6to)
 * ============================================================================
 *
 * MARCO NORMATIVO:
 * - Adecuación Curricular 2023 (Enfoque por competencias)
 * - Ordenanza 04-2023 (Sistema de Evaluación: L, EP, I)
 * - Ordenanza 01-2023 (Alfabetización Inicial)
 * - Ley 136-03 (Código del Menor)
 * - Manual de Convivencia Escolar
 * - Orden Departamental 22-2023 (Ética del Servidor Docente)
 * - Ordenanza 05-2024 (Educación Inclusiva)
 * - Orden Departamental 50-2025 (EDD prioritaria)
 *
 * CLAVES DISCURSIVAS OFICIALES DEL ERP (MINERD):
 * 1. Mediación pedagógica: diálogo, acompañamiento (NO imposición)
 * 2. Atención a la diversidad: ajustes curriculares (NO "igual para todos")
 * 3. Evaluación formativa: retroalimentación y auto-revisión docente
 * 4. Gestión positiva del clima de aula: normas claras, refuerzo positivo
 *    (NO expulsión ni castigo físico/psicológico)
 *
 * CATEGORÍAS:
 * - Planificación | Evaluación | Inclusión | Ética | Alfabetización
 * - Convivencia | Protección Infantil | Gestión de Aula
 * ============================================================================
 */

const bancoPrimaria = [
    // ========================================================================
    // BLOQUE 1 (1-20): Fundamentos - Todas las categorías
    // ========================================================================
    {
        id: 1,
        categoria: "Evaluación",
        pregunta: "La maestra Rosa imparte 3er grado. Al finalizar la primera unidad de Matemática, observa que 8 de sus 32 estudiantes no logran resolver problemas de adición con reagrupación. El director le sugiere colocar 'I' (Insuficiente) a esos 8 estudiantes para 'que los padres reaccionen'. ¿Cuál es la actuación pedagógicamente correcta?",
        opciones: [
            "Colocar 'I' a los 8 estudiantes como sugiere el director, ya que él tiene la autoridad jerárquica en el centro.",
            "Registrar 'EP' (En Proceso) en el Registro de Grado, diseñar actividades de retroalimentación y documentar la intervención pedagógica antes de emitir un juicio final.",
            "Promediar las notas numéricas de las pruebas aplicadas y convertirlas al indicador correspondiente sin intervención adicional.",
            "Colocar 'L' (Logrado) a todos para evitar conflictos con los padres y con la dirección del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en Primaria es formativa, continua y por competencias. 'EP' reconoce que el estudiante avanza hacia el logro y obliga a implementar estrategias de retroalimentación documentadas. Colocar 'I' prematuramente viola el carácter formativo de la evaluación."
    },
    {
        id: 2,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, Luis (6 años) al finalizar el primer trimestre reconoce las vocales y algunas consonantes, pero aún no lee palabras completas. La madre exige que la maestra le aplique 'planas' diarias en casa como refuerzo. ¿Qué decisión profesional corresponde?",
        opciones: [
            "Enviar las planas solicitadas porque la familia tiene derecho a decidir sobre el aprendizaje de su hijo.",
            "Explicar a la madre el enfoque de alfabetización inicial basado en la construcción del sistema de escritura, y acordar actividades significativas de lectura y escritura contextualizadas en el hogar.",
            "Aplicar un dictado diario en el aula para presionar el avance de Luis hasta igualar a sus compañeros.",
            "Recomendar a la madre que repita el grado con Luis el próximo año escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El enfoque oficial concibe la alfabetización como un proceso de construcción donde el niño atraviesa niveles (presilábico, silábico, silábico-alfabético, alfabético). Las planas mecánicas contradicen este enfoque. Se orienta a la familia hacia prácticas significativas: lectura compartida, escritura con propósito comunicativo."
    },
    {
        id: 3,
        categoria: "Inclusión",
        pregunta: "Llega a 4to grado Ana, con diagnóstico de Trastorno del Espectro Autista (TEA) nivel 1. La maestra nunca ha trabajado con TEA. Algunos padres del curso se quejan porque 'Ana interrumpe las clases'. ¿Cuál es la actuación correcta de la docente?",
        opciones: [
            "Solicitar al director que Ana sea trasladada a un centro de educación especial donde 'pueda ser mejor atendida'.",
            "Activar el protocolo de educación inclusiva: coordinar con el equipo de gestión y orientación, elaborar adecuaciones curriculares con el psicólogo escolar, y realizar una jornada de sensibilización con las familias.",
            "Sentar a Ana al final del aula para que no distraiga a los demás y continuar con la planificación regular.",
            "Asignar a Ana tareas distintas y más sencillas sin realizar adecuaciones curriculares formales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Todo estudiante tiene derecho a educarse en el sistema regular con los apoyos necesarios. Corresponde al centro activar el Equipo de Gestión, realizar las adecuaciones curriculares pertinentes y trabajar con las familias para construir una cultura inclusiva."
    },
    {
        id: 4,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado descubre que un estudiante copió su examen de Ciencias Sociales del compañero. Es la primera vez que ocurre. ¿Cuál responde al marco ético docente?",
        opciones: [
            "Anular el examen públicamente frente al curso para que sirva de escarmiento a los demás estudiantes.",
            "Conversar en privado con el estudiante para comprender las causas, registrar la situación, informar a la familia y diseñar una nueva oportunidad de evaluación auténtica.",
            "Colocarle 'I' directamente en el Registro de Grado sin mayor procedimiento.",
            "Ignorar el hecho para no generar conflicto con la familia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Manual de Convivencia. La falta debe abordarse desde una perspectiva formativa, respetando la dignidad del estudiante, indagando causas, involucrando a la familia y ofreciendo una nueva oportunidad. La exposición pública vulnera el derecho a la intimidad (Ley 136-03)."
    },
    {
        id: 5,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado debe planificar una unidad integrada sobre 'La familia y la comunidad' que articula Ciencias Sociales, Lengua Española y Formación Humana. ¿Cuál es el punto de partida correcto según el Diseño Curricular vigente?",
        opciones: [
            "Seleccionar los contenidos del libro de texto y distribuirlos cronológicamente en las semanas de la unidad.",
            "Identificar las Competencias Fundamentales y Específicas a desarrollar, seleccionar indicadores de logro y diseñar situaciones de aprendizaje contextualizadas.",
            "Fotocopiar la planificación de la maestra del año anterior y ajustar las fechas.",
            "Comenzar elaborando las pruebas escritas que se aplicarán al final de la unidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación por competencias parte de las Competencias Fundamentales y Específicas, se concreta en indicadores de logro observables y se desarrolla mediante situaciones de aprendizaje significativas. El contenido es un medio, no el punto de partida."
    },
    {
        id: 6,
        categoria: "Ética",
        pregunta: "Un padre de familia de 6to grado le ofrece a la maestra RD$5,000 'como agradecimiento' por el esfuerzo con su hijo, justo antes de las evaluaciones del segundo período. ¿Cuál es la actuación correcta?",
        opciones: [
            "Aceptar el dinero ya que es un gesto voluntario de agradecimiento del padre.",
            "Rechazar el obsequio con cortesía, explicar que su labor es un deber profesional, y notificar la situación a la dirección del centro.",
            "Aceptar el dinero pero prometer imparcialidad en las calificaciones.",
            "Pedir al padre que mejor compre materiales para el aula con ese dinero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El docente no debe aceptar dádivas, regalos en efectivo o beneficios que comprometan su imparcialidad. La transparencia exige rechazar el obsequio y comunicar el hecho a la dirección."
    },
    {
        id: 7,
        categoria: "Inclusión",
        pregunta: "En 3er grado hay un estudiante haitiano, José Luis, que habla creole y español básico. Presenta dificultades para comprender las consignas escritas. Una colega le sugiere: 'no pierdas tiempo con él, mejor enfócate en los que sí entienden'. ¿Cómo debe actuar la maestra?",
        opciones: [
            "Seguir el consejo de la colega y atender prioritariamente a los estudiantes que dominan el español.",
            "Diseñar adecuaciones de acceso al currículo (apoyos visuales, pares tutores, instrucciones simplificadas), valorar sus saberes previos y promover un aula intercultural.",
            "Solicitar al director que José Luis sea reubicado en un grado inferior hasta que mejore su español.",
            "Traducir únicamente los exámenes al creole y mantener el resto de la enseñanza igual."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03 (principio de no discriminación). La diversidad lingüística y cultural es parte de la inclusión. Corresponde realizar adecuaciones de acceso, valorar los saberes del estudiante y construir un aula intercultural."
    },
    {
        id: 8,
        categoria: "Evaluación",
        pregunta: "Al final del primer período en 4to grado, la maestra debe reportar el desempeño de sus estudiantes en la competencia 'Comunicativa' de Lengua Española. Pedro ha logrado leer en voz alta con fluidez pero presenta dificultades para comprender textos expositivos. ¿Qué indicador corresponde?",
        opciones: [
            "'L' (Logrado), porque lee con fluidez, que es el indicador más visible.",
            "'EP' (En Proceso), porque ha alcanzado parcialmente los indicadores de la competencia comunicativa, y requiere continuar trabajando la comprensión.",
            "'I' (Insuficiente), porque no comprende textos expositivos.",
            "Un número del 70 al 79, convertido posteriormente a la escala literal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. 'EP' aplica cuando el estudiante demuestra avances parciales hacia el logro. La competencia comunicativa integra múltiples dimensiones. No se utilizan escalas numéricas en el Nivel Primario."
    },
    {
        id: 9,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 5to grado observa moretones en los brazos de Carla. Al preguntarle, la niña dice que 'se cayó'. Días después, nota nuevas marcas y Carla se muestra retraída. ¿Cuál es la obligación legal y ética de la docente?",
        opciones: [
            "Esperar a tener pruebas concretas antes de actuar, para no acusar injustamente a la familia.",
            "Notificar inmediatamente al equipo de orientación y al director del centro, quienes activarán el protocolo de referimiento al CONANI conforme al Código del Menor.",
            "Hablar directamente con los padres de Carla para confrontarlos sobre los moretones.",
            "Registrar la observación en el Registro de Grado pero no comunicarlo a terceros para proteger la privacidad de la familia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03, artículos 12, 13 y 14. La docente tiene obligación legal de notificar cualquier sospecha de maltrato. El protocolo exige comunicar a orientación y dirección, quienes referirán al CONANI. Confrontar a la familia directamente puede poner en riesgo a la niña."
    },
    {
        id: 10,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, durante una actividad de escritura espontánea, Miguel escribe 'MPLT' cuando intenta escribir 'Mi pelota'. Según el enfoque de alfabetización inicial, ¿cómo debe interpretar la maestra esta producción?",
        opciones: [
            "Como un error que debe corregirse inmediatamente copiando la palabra correcta diez veces.",
            "Como evidencia de que Miguel está en nivel silábico de construcción del sistema de escritura (una grafía por sílaba), y diseñar intervenciones para avanzar al nivel silábico-alfabético.",
            "Como señal de posible dislexia que amerita referimiento inmediato al psicólogo.",
            "Como indicador de que Miguel no está listo para 1er grado y debe repetir inicial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El enfoque psicogenético reconoce niveles de construcción (presilábico, silábico, silábico-alfabético, alfabético). La escritura 'MPLT' para 'Mi pelota' evidencia hipótesis silábica. La intervención docente debe ser específica para el nivel del estudiante."
    },
    {
        id: 11,
        categoria: "Planificación",
        pregunta: "Para 6to grado, la maestra planifica una unidad de Ciencias de la Naturaleza sobre 'Los ecosistemas'. Un colega le recomienda 'dar los conceptos primero y luego hacer un experimento al final'. ¿Cuál es el enfoque correcto según el currículo vigente?",
        opciones: [
            "Seguir la recomendación del colega porque los estudiantes necesitan primero la teoría para entender la práctica.",
            "Partir de una situación de aprendizaje contextualizada (ej. estudio del ecosistema local), movilizar saberes previos, integrar indagación científica y conceptualización a lo largo de la unidad.",
            "Dictar todos los conceptos del tema para que los estudiantes los memoricen antes del examen final.",
            "Asignar un proyecto de investigación individual sin orientación docente para que los estudiantes aprendan por cuenta propia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El enfoque por competencias articula la situación de aprendizaje como eje de la planificación. La indagación científica, la movilización de saberes previos y la conceptualización son procesos simultáneos y contextualizados."
    },
    {
        id: 12,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado aplicará una evaluación de la competencia matemática 'Resolución de problemas'. El libro de texto trae un examen con 20 operaciones aisladas. ¿Qué debe hacer la docente?",
        opciones: [
            "Aplicar el examen del libro tal como viene, pues fue diseñado por expertos en educación.",
            "Diseñar una evaluación auténtica con situaciones problema contextualizadas que permitan observar el razonamiento, la estrategia y la comunicación matemática del estudiante.",
            "Aplicar las 20 operaciones del libro y agregar dos problemas al final.",
            "Tomar dictado oral de las operaciones para que los estudiantes las resuelvan mentalmente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Adecuación Curricular 2023. La evaluación por competencias requiere situaciones auténticas donde el estudiante movilice saberes. Las operaciones aisladas evalúan procedimientos pero no la competencia matemática."
    },
    {
        id: 13,
        categoria: "Inclusión",
        pregunta: "En 3er grado, Sofía presenta discapacidad visual (baja visión). La maestra recibió el diagnóstico al inicio del año pero no ha realizado ninguna adecuación porque 'Sofía se esfuerza y se las arregla'. Ahora Sofía está bajando en rendimiento. ¿Qué debe hacer la maestra?",
        opciones: [
            "Felicitar a Sofía por su esfuerzo autónomo y mantener la enseñanza sin cambios.",
            "Realizar adecuaciones de acceso (material ampliado, ubicación cerca del pizarrón, tiempos extendidos, uso de recursos auditivos), coordinar con el equipo de orientación y documentar las adecuaciones en la planificación.",
            "Pedir a los compañeros de Sofía que le lean los materiales para que ella solo escuche.",
            "Eximir a Sofía de las evaluaciones escritas hasta que consiga lentes adecuados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las adecuaciones de acceso son obligatorias cuando el estudiante presenta discapacidad. La inclusión no consiste en esperar que el estudiante se adapte, sino en eliminar las barreras para el aprendizaje y la participación."
    },
    {
        id: 14,
        categoria: "Ética",
        pregunta: "La maestra de 4to grado es contactada por una editorial que le ofrece una comisión del 15% si recomienda sus libros de texto a los padres del curso. ¿Cuál es la respuesta éticamente correcta?",
        opciones: [
            "Aceptar la oferta porque los libros son de buena calidad y la comisión es un ingreso adicional legítimo.",
            "Rechazar la oferta, pues representa un conflicto de intereses incompatible con la función docente, y ceñirse a los textos oficiales o a los seleccionados por el centro educativo.",
            "Aceptar la oferta pero no cobrar la comisión, donándola a la biblioteca del aula.",
            "Consultar con los padres si están de acuerdo en que ella reciba la comisión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Aceptar comisiones por recomendar productos constituye conflicto de intereses y uso indebido del cargo. La selección de textos debe responder a criterios pedagógicos institucionales."
    },
    {
        id: 15,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado debe articular su planificación semanal con los Proyectos de Investigación y las Unidades de Aprendizaje. Un padre exige un 'cronograma rígido' semana por semana. ¿Qué corresponde hacer?",
        opciones: [
            "Entregar al padre un cronograma fijo e inmodificable de todas las semanas del año escolar.",
            "Compartir la planificación general por unidades/proyectos, explicando que la planificación es flexible y se ajusta a los intereses, ritmos y emergentes del grupo, conforme al enfoque por competencias.",
            "Negar al padre el acceso a la planificación por ser un documento docente interno.",
            "Entregar la planificación solo si el padre firma un compromiso de no cuestionarla."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación por competencias es flexible y responde a las necesidades emergentes del grupo. La familia tiene derecho a conocer la planificación general (Ley 136-03)."
    },
    {
        id: 16,
        categoria: "Evaluación",
        pregunta: "Al cierre del año escolar en 5to grado, Andrés obtiene 'EP' en tres de las cuatro competencias específicas de Matemática. El padre solicita que le asigne 'L' para que no tenga problemas el próximo año. ¿Qué debe hacer la docente?",
        opciones: [
            "Acceder a la solicitud del padre, pues Andrés es un niño esforzado y así no se desmotiva.",
            "Mantener el indicador 'EP' como reflejo fiel del desempeño, conversar con la familia sobre el plan de recuperación pedagógica, y documentar el acompañamiento.",
            "Cambiar los indicadores a 'L' pero registrar internamente las dificultades reales.",
            "Colocar 'I' para forzar la repitencia y que Andrés 'afiance' los contenidos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Orden Departamental 22-2023. Alterar el indicador por presión familiar viola la honestidad profesional. 'EP' indica que el estudiante está en camino al logro y activa el plan de acompañamiento."
    },
    {
        id: 17,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra nota que 5 estudiantes aún están en nivel silábico-alfabético mientras el resto ya escribe convencionalmente. Una colega le dice 'eso ya debieron traerlo de primero, no es tu problema'. ¿Cómo debe actuar?",
        opciones: [
            "Aceptar el comentario de la colega y enviarlos al Departamento de Orientación para que se encarguen del proceso.",
            "Diseñar un plan de alfabetización diferenciado dentro del aula, con actividades de escritura significativa, trabajo en pequeños grupos y monitoreo sistemático del avance en los niveles de construcción.",
            "Pedirle a la maestra de 1er grado que los reciba nuevamente hasta que aprendan a leer.",
            "Enviarles planas y dictados diarios como refuerzo hasta igualarlos al resto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La alfabetización es un proceso que continúa en todo el Primer Ciclo del Nivel Primario. Corresponde a cada docente diagnosticar el nivel de construcción de cada estudiante y diseñar intervenciones diferenciadas."
    },
    {
        id: 18,
        categoria: "Inclusión",
        pregunta: "En 6to grado hay un estudiante, Carlos, con TDAH. Durante los exámenes se distrae y no termina. La maestra piensa que 'debe aprender a concentrarse como los demás'. ¿Qué plantea la normativa?",
        opciones: [
            "Aplicar el examen en iguales condiciones a todos para no generar ventajas indebidas.",
            "Realizar adecuaciones de acceso (tiempos adicionales, ambiente con menos distractores, fraccionamiento de la prueba, apoyos visuales), documentadas en la planificación y coordinadas con orientación.",
            "Entregarle a Carlos un examen más corto y sencillo que al resto del grupo.",
            "Exonerarlo de los exámenes y evaluarlo solo con observación en clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las adecuaciones de acceso mantienen los mismos indicadores pero modifican condiciones, tiempos o recursos para garantizar equidad. La igualdad de condiciones no es equidad."
    },
    {
        id: 19,
        categoria: "Protección Infantil",
        pregunta: "Durante el recreo, la maestra de 4to grado ve a un colega gritarle e insultar a un estudiante delante de otros. El estudiante queda llorando. ¿Cuál es la actuación ética correcta de la maestra?",
        opciones: [
            "No intervenir, pues cada docente maneja su disciplina como entiende y no debe meterse en asuntos ajenos.",
            "Acompañar al estudiante, contenerlo emocionalmente, y notificar formalmente al director y al equipo de orientación el hecho observado, conforme al deber de protección del Código del Menor.",
            "Grabar al colega con su celular para tener pruebas antes de hablar.",
            "Confrontar públicamente al colega delante del estudiante para que se disculpe."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos 12-14) y Orden Departamental 22-2023. Todo adulto del centro tiene deber de garante frente a la integridad del niño. El maltrato verbal es violencia que debe notificarse. La omisión convierte al testigo en corresponsable."
    },
    {
        id: 20,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado diseña una situación de aprendizaje para Ciencias Sociales sobre 'Los servicios de mi comunidad'. Debe decidir cómo evaluar el desempeño. ¿Cuál es la decisión coherente con el enfoque por competencias?",
        opciones: [
            "Aplicar una prueba escrita de opción múltiple con 20 preguntas al final de la unidad.",
            "Diseñar una evaluación integrada con rúbrica de desempeño, que combine la producción de los estudiantes (maqueta, exposición, texto informativo), la observación sistemática y la autoevaluación, articulada con los indicadores de logro.",
            "Calificar solo la tarea final del proyecto y descartar el proceso previo.",
            "Poner una nota general subjetiva al finalizar la unidad según la impresión de la docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Adecuación Curricular 2023. La evaluación por competencias es auténtica, procesual e integrada. Utiliza instrumentos diversos (rúbricas, registros, portafolios, autoevaluación) articulados con indicadores de logro."
    },

    // ========================================================================
    // BLOQUE 2 (21-60): Gestión de Aula, Convivencia y Casos Complejos
    // ========================================================================
    {
        id: 21,
        categoria: "Gestión de Aula",
        pregunta: "En 5to grado, dos estudiantes discuten y uno empuja al otro durante la clase de Matemática. La maestra está explicando un contenido clave. ¿Cuál es la intervención pedagógicamente correcta?",
        opciones: [
            "Enviar inmediatamente a los dos estudiantes a la dirección para que los suspendan.",
            "Detener brevemente la clase, separar a los estudiantes, aplicar una estrategia de regulación emocional, y posteriormente mediar el conflicto mediante el diálogo siguiendo el Manual de Convivencia.",
            "Ignorar el hecho para no perder el hilo de la clase y continuar con la explicación.",
            "Gritarles delante de todos para que aprendan a respetar la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ordenanza 05-2024. La gestión positiva del aula prioriza la regulación emocional, la mediación y el diálogo como estrategias de resolución de conflictos, no la sanción punitiva inmediata."
    },
    {
        id: 22,
        categoria: "Evaluación",
        pregunta: "La maestra de 1er grado realizará la evaluación diagnóstica al inicio del año. Un colega le sugiere aplicar un examen escrito con 30 preguntas. ¿Cuál es la estrategia correcta para la evaluación diagnóstica en este nivel?",
        opciones: [
            "Aplicar el examen escrito sugerido por el colega para tener datos objetivos desde el inicio.",
            "Utilizar múltiples estrategias lúdicas y contextualizadas (conversaciones, observación, producciones orales y gráficas) que permitan identificar saberes previos y niveles de desarrollo.",
            "Asumir que todos los estudiantes de 1ero están en el mismo punto y comenzar desde cero.",
            "Basar el diagnóstico únicamente en los informes del Nivel Inicial sin aplicar nada adicional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Ordenanza 01-2023. La evaluación diagnóstica en 1er grado debe ser lúdica, multimodal y adaptada al nivel de desarrollo, recogiendo información sobre niveles de construcción de lengua escrita, pensamiento matemático y desarrollo socioemocional."
    },
    {
        id: 23,
        categoria: "Convivencia",
        pregunta: "En 6to grado, una estudiante se acerca a la maestra y le dice llorando que sus compañeras 'la están molestando por WhatsApp' fuera del horario escolar. ¿Cómo debe actuar la maestra?",
        opciones: [
            "Indicarle que no puede intervenir porque ocurre fuera del centro educativo.",
            "Acoger emocionalmente a la estudiante, documentar lo informado, activar el protocolo de convivencia con orientación y dirección, y trabajar con el grupo sobre ciudadanía digital.",
            "Llamar a las madres de las estudiantes involucradas y confrontarlas entre sí.",
            "Sancionar públicamente a las estudiantes implicadas en la próxima clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ley 136-03. El ciberacoso entre estudiantes del centro es competencia escolar aun cuando ocurra fuera del horario. Corresponde activar el protocolo de convivencia y abordar pedagógicamente la ciudadanía digital."
    },
    {
        id: 24,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado elabora su planificación de Lengua Española. Debe decidir cómo abordar la comprensión lectora durante el año. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Asignar un texto semanal con cuestionario de 10 preguntas literales al final.",
            "Diseñar secuencias didácticas con diversidad textual (narrativos, expositivos, instructivos), trabajando estrategias antes, durante y después de la lectura, articuladas con indicadores de la competencia comunicativa.",
            "Pedir a los estudiantes que lean en voz alta y corregir su pronunciación como único trabajo lector.",
            "Entregar guías de respuestas correctas para que los estudiantes las copien del libro de texto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. La comprensión lectora se desarrolla mediante diversidad textual, estrategias antes/durante/después de la lectura y producción de sentido, no mediante cuestionarios literales aislados."
    },
    {
        id: 25,
        categoria: "Inclusión",
        pregunta: "Llega a 2do grado un estudiante, Jorge, con discapacidad motora que usa silla de ruedas. El aula está en un segundo piso sin rampa. ¿Cuál es la actuación correcta de la maestra?",
        opciones: [
            "Pedir a los padres que transfieran a Jorge a otro centro con mejor infraestructura.",
            "Comunicar inmediatamente al Equipo de Gestión para gestionar la reubicación del aula en planta baja, solicitar apoyos al distrito educativo y garantizar el acceso pleno a todos los espacios escolares.",
            "Asignar a dos compañeros para que suban a Jorge en brazos cada día.",
            "Enviarle las tareas a su casa para que estudie desde allí."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La eliminación de barreras físicas es obligación del centro educativo. El acceso pleno al currículo y a los espacios es un derecho fundamental, no una concesión."
    },
    {
        id: 26,
        categoria: "Ética",
        pregunta: "La maestra de 3er grado utiliza el grupo de WhatsApp de padres para compartir información académica. Un día, un padre le pide por mensaje privado que 'le tenga paciencia' a su hijo porque 'tiene problemas en casa'. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "Compartir esta información con otros padres del grupo para que entiendan el comportamiento del niño.",
            "Mantener estricta confidencialidad, agradecer la confianza del padre, coordinar discretamente con orientación si procede, y registrar la información solo en medios oficiales del centro.",
            "Preguntarle al niño directamente en clase qué problemas tiene en casa.",
            "Divulgar la situación a las colegas en la sala de profesores como 'comentario informativo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 136-03. El docente está obligado a la confidencialidad respecto de información sensible de estudiantes y familias. Divulgar datos personales vulnera el derecho a la intimidad del niño y la ética profesional."
    },
    {
        id: 27,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza una actividad de escritura libre. Observa que Sara escribe sólo una letra para representar cada palabra (ej. 'C' para 'casa', 'P' para 'pelota'). ¿En qué nivel de construcción está Sara y qué intervención corresponde?",
        opciones: [
            "Nivel alfabético; aplicarle dictado diario de palabras completas para afianzar.",
            "Nivel presilábico con diferenciación; diseñar actividades que la hagan reflexionar sobre la cantidad y variedad de grafías (escritura con apoyos, comparación de palabras, juegos fonológicos).",
            "Nivel silábico convencional; felicitarla y avanzar al siguiente contenido.",
            "Dislexia; enviarla al psicólogo para evaluación especializada inmediata."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El nivel presilábico con diferenciación se caracteriza por usar grafías variadas pero sin correspondencia sonido-letra. La intervención debe ser específica: actividades de reflexión fonológica y conciencia de la cantidad y variedad de grafías."
    },
    {
        id: 28,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado debe evaluar la competencia 'Resolución de problemas' en Matemática. Diseña una situación donde los estudiantes planifican una excursión con un presupuesto dado. ¿Qué instrumento de evaluación es más coherente?",
        opciones: [
            "Prueba escrita de 20 operaciones de multiplicación y división.",
            "Rúbrica de desempeño que evalúe comprensión del problema, estrategias utilizadas, ejecución de cálculos, comunicación matemática y verificación de resultados.",
            "Lista de cotejo con la única pregunta '¿el estudiante resolvió correctamente?'.",
            "Promedio de calificaciones de tareas anteriores."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Adecuación Curricular 2023. La rúbrica de desempeño es el instrumento más coherente con la evaluación por competencias, pues permite valorar múltiples dimensiones del proceso de resolución y retroalimentar de forma específica."
    },
    {
        id: 29,
        categoria: "Gestión de Aula",
        pregunta: "En 2do grado, los estudiantes se muestran inquietos después del recreo y se dificulta iniciar la clase de Ciencias Sociales. ¿Cuál es la estrategia pedagógicamente adecuada?",
        opciones: [
            "Castigar al grupo quitándoles el próximo recreo hasta que 'aprendan a comportarse'.",
            "Implementar una rutina de transición post-recreo (respiración, actividad corporal breve, canción, ronda de emociones) que regule el estado del grupo y prepare para el aprendizaje.",
            "Amenazar con bajar la nota a quienes no se calmen inmediatamente.",
            "Enviarlos a sentarse en silencio absoluto durante 20 minutos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (dimensión socioemocional) y Manual de Convivencia. La regulación emocional grupal mediante rutinas pedagógicas es parte de la gestión positiva del aula. El castigo colectivo es contraproducente y vulnera derechos."
    },
    {
        id: 30,
        categoria: "Inclusión",
        pregunta: "En 4to grado hay un estudiante, Pedro, con altas capacidades intelectuales. Termina las actividades mucho antes que sus compañeros y se aburre. La maestra considera que 'adelantarle contenidos' sería injusto para el resto. ¿Qué corresponde hacer?",
        opciones: [
            "Pedirle que se quede quieto y espere a que sus compañeros terminen.",
            "Diseñar actividades de ampliación y profundización (investigaciones, retos cognitivos, proyectos personales) coordinadas con orientación, como parte de la atención a la diversidad.",
            "Asignarle a Pedro el rol de 'ayudante de la maestra' para que corrija tareas de sus compañeros.",
            "Ignorar su situación porque 'los niños inteligentes no necesitan atención especial'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las altas capacidades son parte de la diversidad educativa que requiere adecuaciones curriculares. Las actividades de profundización y ampliación son una respuesta inclusiva. No es función del estudiante sustituir al docente en sus tareas."
    },
    {
        id: 31,
        categoria: "Protección Infantil",
        pregunta: "Un estudiante de 3er grado le cuenta a la maestra que su tío 'lo toca de manera incómoda' cuando se queda solo con él. La maestra nunca ha manejado una situación así. ¿Cuál es la actuación correcta?",
        opciones: [
            "Dudar del relato del niño por su corta edad y esperar a que lo repita para tomarlo en serio.",
            "Acoger al niño sin interrogarlo extensamente, garantizar su seguridad inmediata, notificar de forma urgente al director y al equipo de orientación para activar el protocolo de referimiento al CONANI y al Ministerio Público.",
            "Llamar directamente al tío del niño para confrontarlo sobre los hechos.",
            "Recomendar al niño que 'no se quede más con su tío' y continuar con la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos 12-14, 396-404). Ante una sospecha o revelación de abuso sexual infantil, existe obligación legal de notificación inmediata al CONANI y al Ministerio Público. No se debe interrogar extensamente al niño ni confrontar al presunto agresor. El protocolo protege al niño y preserva la evidencia."
    },
    {
        id: 32,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica una unidad integrada sobre 'Derechos y deberes ciudadanos'. Debe seleccionar el tipo de evaluación. ¿Cuál es más coherente con el enfoque por competencias?",
        opciones: [
            "Un examen de opción múltiple con 30 preguntas al finalizar la unidad.",
            "Un proyecto participativo (asamblea simulada, campaña comunitaria, análisis de caso) evaluado con rúbrica que articule competencias Ética y Ciudadana, Comunicativa y Pensamiento Lógico, Creativo y Crítico.",
            "Un resumen escrito del libro de texto como única evidencia.",
            "Una prueba oral donde los estudiantes reciten los artículos de la Constitución."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 04-2023. Las competencias Ética y Ciudadana requieren movilización de saberes en contextos participativos reales, evaluados mediante instrumentos que capturen desempeños complejos (proyectos, rúbricas)."
    },
    {
        id: 33,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado es invitada por una ONG a dar un taller los sábados, con remuneración. El horario no interfiere con su jornada escolar. ¿Qué debe considerar éticamente?",
        opciones: [
            "Aceptar sin más, pues es su tiempo libre y puede disponer de él como quiera.",
            "Verificar compatibilidad con el régimen del servidor público docente, informar a su superior inmediato, asegurar que no existe conflicto de intereses ni uso indebido de recursos del MINERD.",
            "Rechazar la oferta por el simple hecho de ser docente en funciones.",
            "Aceptar y ofrecer descuentos solo a los padres de sus estudiantes para 'ayudar'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Estatuto del Docente. Las actividades complementarias fuera del horario oficial son permitidas siempre que no generen conflicto de intereses, no usen recursos del MINERD y se notifique al superior cuando corresponda."
    },
    {
        id: 34,
        categoria: "Evaluación",
        pregunta: "En 2do grado, la maestra implementa la coevaluación entre estudiantes como parte del proceso formativo. Un padre se queja de que 'los niños no saben evaluar'. ¿Cómo debe responder?",
        opciones: [
            "Eliminar la coevaluación por la queja del padre y volver sólo a la evaluación docente tradicional.",
            "Explicar al padre el valor formativo de la coevaluación y la autoevaluación, mostrar los criterios claros (rúbricas sencillas, pictogramas) que guían el proceso y cómo el docente acompaña y valida.",
            "Asignar a cada padre la tarea de evaluar a los compañeros de sus hijos.",
            "Usar la coevaluación solo como juego sin incidencia en el Registro de Grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La autoevaluación y la coevaluación son estrategias legítimas del enfoque formativo por competencias que desarrollan metacognición y autorregulación. El docente guía, valida e integra estos procesos con criterios claros."
    },
    {
        id: 35,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra planifica el trabajo con textos auténticos. Una colega le dice 'mejor usa sílabas aisladas primero: ma-me-mi-mo-mu, y cuando las dominen pasas a palabras'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Seguir el consejo de la colega porque 'así se aprendía antes y funcionaba'.",
            "Trabajar con textos auténticos y con sentido desde el inicio (nombres propios, cuentos, canciones, rótulos, listas), integrando la reflexión sobre el sistema de escritura en contextos significativos.",
            "Alternar una semana de sílabas aisladas y una semana de textos.",
            "Enseñar primero el abecedario en orden alfabético y luego cada sílaba."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El enfoque oficial de alfabetización inicial parte del trabajo con textos auténticos y significativos, no con unidades aisladas descontextualizadas. La reflexión sobre el sistema de escritura ocurre dentro de prácticas sociales del lenguaje."
    },
    {
        id: 36,
        categoria: "Gestión de Aula",
        pregunta: "En 3er grado, un estudiante nuevo no quiere participar y se muestra retraído. Llevan dos semanas de clase. ¿Cuál es la intervención más adecuada?",
        opciones: [
            "Exigirle que participe obligatoriamente frente al grupo para que 'rompa el hielo'.",
            "Generar un ambiente de confianza, asignarle un compañero-padrino, respetar sus ritmos de integración, y conversar en privado para conocer sus intereses y preocupaciones.",
            "Ignorar su conducta y esperar a que se adapte solo con el tiempo.",
            "Comunicar a los padres que 'el niño tiene problemas de socialización' sin mayor análisis."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Adecuación Curricular 2023 (dimensión socioemocional). La integración de un estudiante nuevo requiere estrategias de acogida, mediación de pares y respeto a los ritmos individuales, no imposición ni diagnósticos apresurados."
    },
    {
        id: 37,
        categoria: "Inclusión",
        pregunta: "En 5to grado, la estudiante Laura tiene epilepsia controlada con medicación. La familia informa que podría tener una crisis en el aula. La maestra se siente insegura. ¿Qué corresponde hacer?",
        opciones: [
            "Solicitar a la familia que retire a Laura del centro hasta que esté 'completamente controlada'.",
            "Coordinar con la familia y el equipo de salud escolar un protocolo de actuación, capacitarse sobre primeros auxilios básicos, informar al grupo en términos respetuosos y garantizar la plena inclusión.",
            "Mantener a Laura alejada de los demás estudiantes para evitar 'accidentes'.",
            "No informar a nadie más para 'proteger' la privacidad y que nadie la trate distinto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La inclusión de estudiantes con condiciones de salud crónicas requiere protocolos compartidos con la familia y el centro, formación docente básica y un ambiente sensibilizado. La exclusión o el silencio ponen en riesgo a la estudiante."
    },
    {
        id: 38,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado planifica su primera semana del año. Un colega le sugiere 'comenzar con la materia de una vez porque el tiempo es oro'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Seguir el consejo del colega y comenzar de inmediato con el primer contenido del libro.",
            "Dedicar las primeras sesiones a la construcción del grupo, el diagnóstico inicial, el establecimiento consensuado de acuerdos de convivencia y la activación de saberes previos.",
            "Aplicar exámenes escritos de todas las materias el primer día para saber 'cómo vienen'.",
            "Dictarles los objetivos del currículo para que los copien en sus cuadernos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. Las primeras semanas son clave para construir vínculos, diagnosticar el grupo y establecer acuerdos participativos, sin los cuales los aprendizajes posteriores se dificultan."
    },
    {
        id: 39,
        categoria: "Convivencia",
        pregunta: "En 6to grado, la maestra descubre que varios estudiantes se burlan recurrentemente de un compañero por su apariencia física. ¿Qué debe hacer?",
        opciones: [
            "Pedir al estudiante afectado que 'ignore las burlas' y aprenda a defenderse.",
            "Activar el protocolo de convivencia contra el acoso escolar: documentar, contener a la víctima, realizar sesiones de mediación con los agresores, trabajar con el grupo la diversidad y la empatía, involucrar a orientación y familias.",
            "Suspender inmediatamente a los estudiantes implicados para que sirva de ejemplo.",
            "Cambiar al estudiante afectado de sección para 'alejarlo' del problema."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ley 136-03. El acoso escolar (bullying) exige activación del protocolo: contención a la víctima, intervención con los agresores desde una perspectiva restaurativa, trabajo con el grupo y coordinación con orientación. Cambiar a la víctima revictimiza."
    },
    {
        id: 40,
        categoria: "Evaluación",
        pregunta: "La maestra de 1er grado debe reportar los resultados del primer período. Un padre le pregunta 'qué nota obtuvo su hijo en el examen'. ¿Cómo debe responder?",
        opciones: [
            "Darle una nota numérica del 1 al 100 para que entienda fácilmente.",
            "Explicar que en Primaria se reportan indicadores de logro (L, EP, I) por competencia, mostrar las evidencias del desempeño del niño y orientar sobre los avances y apoyos necesarios.",
            "Decirle que 'le fue bien' sin dar mayor detalle.",
            "Compararlo con los demás estudiantes para que 'sepa dónde está parado'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El sistema de evaluación en Primaria utiliza indicadores de logro cualitativos (L, EP, I), no calificaciones numéricas. La comunicación a la familia debe ser formativa, centrada en evidencias y orientada a la mejora, sin comparaciones."
    },

    // ========================================================================
    // BLOQUE 3 (41-80): Casos complejos de Evaluación e Inclusión
    // ========================================================================
    {
        id: 41,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, el estudiante Daniel escribe 'AETE' cuando intenta escribir 'Elefante'. Ha comenzado a usar algunas consonantes además de vocales. ¿En qué nivel se encuentra y cuál es la intervención adecuada?",
        opciones: [
            "Nivel alfabético consolidado; trabajar reglas ortográficas complejas.",
            "Nivel silábico-alfabético (transición); diseñar actividades que consoliden la correspondencia fonema-grafema mediante escritura significativa y reflexión metalingüística.",
            "Nivel presilábico; iniciar desde el reconocimiento de vocales.",
            "Estudiante con trastorno del aprendizaje; referir a evaluación clínica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El nivel silábico-alfabético es la transición donde el estudiante alterna hipótesis silábicas y alfabéticas. 'AETE' para 'Elefante' muestra esta coexistencia. La intervención debe consolidar la correspondencia fonema-grafema en prácticas significativas."
    },
    {
        id: 42,
        categoria: "Gestión de Aula",
        pregunta: "En 4to grado, la maestra observa que las clases se extienden y no alcanza a cumplir con los contenidos planificados. ¿Cuál es la estrategia correcta?",
        opciones: [
            "Acelerar el ritmo de las clases aunque no todos los estudiantes comprendan.",
            "Revisar su planificación, priorizar aprendizajes esenciales, ajustar tiempos por situación de aprendizaje y reflexionar sobre la gestión del tiempo didáctico.",
            "Asignar más tareas para la casa y avanzar en la siguiente unidad sin consolidar la actual.",
            "Culpar al grupo por 'ir lento' y comunicarlo a las familias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La gestión del tiempo didáctico requiere priorización de aprendizajes esenciales y reflexión permanente sobre la propia práctica. Esta es una de las claves discursivas del ERP: la auto-revisión docente."
    },
    {
        id: 43,
        categoria: "Inclusión",
        pregunta: "En 3er grado, un estudiante con dislexia presenta dificultades marcadas en lectoescritura. La maestra planifica las evaluaciones. ¿Cuál es la adecuación correcta?",
        opciones: [
            "Eximirlo de todas las evaluaciones escritas y evaluarlo solo por observación.",
            "Mantener los indicadores de logro pero adecuar el acceso: lectura oral de consignas, tiempo adicional, uso de audio, evaluación diversificada oral/gráfica, todo documentado en la planificación.",
            "Entregarle evaluaciones de grados inferiores.",
            "No hacer ninguna adecuación para 'no generar diferencias' con los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las adecuaciones de acceso (no significativas) eliminan barreras sin modificar los indicadores de logro. La diversificación de formatos de evaluación es un derecho del estudiante, no una concesión."
    },
    {
        id: 44,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado tiene una mala relación con una colega. En la sala de profesores, otras docentes le comentan negativamente sobre ella. ¿Cuál es la actuación éticamente correcta?",
        opciones: [
            "Participar en el comentario negativo, pues 'entre docentes se tienen confianza'.",
            "Abstenerse de comentarios que deterioren la imagen de la colega, mantener el profesionalismo, y buscar vías institucionales para resolver diferencias si las hay.",
            "Grabar los comentarios de las colegas para usarlos más adelante.",
            "Enfrentarse públicamente a la colega aludida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La ética del servidor docente incluye el respeto entre colegas y la abstención de conductas que afecten el clima laboral. Los conflictos se canalizan institucionalmente."
    },
    {
        id: 45,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado diseña una unidad de Ciencias de la Naturaleza sobre 'El cuerpo humano'. ¿Cuál es la estrategia más coherente con el enfoque por competencias?",
        opciones: [
            "Dictar las definiciones de cada sistema del cuerpo para que los estudiantes las memoricen.",
            "Partir de preguntas generadoras y situaciones de aprendizaje (estudio del propio cuerpo, investigación sobre hábitos saludables, experimentos sencillos) que integren la indagación científica y la competencia comunicativa.",
            "Mostrar videos durante toda la unidad sin actividades adicionales.",
            "Entregar fotocopias del libro para que los estudiantes respondan los ejercicios sin intervención docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La enseñanza de las Ciencias de la Naturaleza se sustenta en la indagación científica desde situaciones contextualizadas, no en la transmisión de definiciones memorísticas."
    },
    {
        id: 46,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado registra sistemáticamente sus observaciones en el Registro de Grado. Al final del trimestre, debe reportar avances. ¿Qué caracteriza un buen registro pedagógico?",
        opciones: [
            "Anotar solo las calificaciones finales de cada prueba escrita.",
            "Documentar evidencias diversas (observaciones, producciones, diálogos, rúbricas) a lo largo del período, articuladas con indicadores de logro, que permitan emitir juicios evaluativos fundamentados.",
            "Registrar únicamente los problemas de comportamiento de los estudiantes.",
            "Guardar los cuadernos de los estudiantes como única evidencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El Registro de Grado debe contener evidencias diversas y sistemáticas que sustenten los indicadores reportados. La evaluación por competencias exige triangulación de información, no una sola fuente."
    },
    {
        id: 47,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 1er grado nota que un estudiante llega frecuentemente sin desayunar, con ropa sucia y muestra signos de abandono. ¿Cuál es la actuación correcta?",
        opciones: [
            "Regañar al estudiante por 'no presentarse bien' en la escuela.",
            "Notificar a orientación y al equipo de gestión para activar el protocolo de detección de negligencia, coordinar apoyos del centro (desayuno escolar, útiles) y referir a las instancias correspondientes conforme al Código del Menor.",
            "Hablar con otros padres para que 'le ayuden' al niño con comida.",
            "Asumir que 'así viene de su casa' y continuar con la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos 12-14). La negligencia es una forma de maltrato infantil que exige notificación y activación del protocolo institucional. El centro debe garantizar los apoyos disponibles y referir cuando corresponda."
    },
    {
        id: 48,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra planifica la biblioteca de aula. Una colega le sugiere 'usar sólo libros con palabras sencillas de una o dos sílabas'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Seguir el consejo y armar una biblioteca solo con palabras simples.",
            "Conformar una biblioteca diversa y rica (cuentos, poesía, textos informativos, libros-álbum) que promueva la lectura por placer, la exploración autónoma y la formación de lectores.",
            "Eliminar la biblioteca hasta que todos los estudiantes sepan leer convencionalmente.",
            "Permitir el acceso a libros solo como premio por buen comportamiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La biblioteca de aula es un dispositivo pedagógico clave para la formación lectora. Debe ser diversa, abundante y accesible, promoviendo el contacto con textos auténticos desde antes de la lectura convencional."
    },
    {
        id: 49,
        categoria: "Gestión de Aula",
        pregunta: "En 4to grado, la maestra establecerá los acuerdos de convivencia del aula. ¿Cuál es el procedimiento correcto?",
        opciones: [
            "Escribir las normas y entregarlas para que los estudiantes las firmen.",
            "Facilitar una construcción participativa de los acuerdos con los estudiantes, identificando juntos las conductas que favorecen la convivencia, redactándolos en positivo y revisándolos periódicamente.",
            "Aplicar las mismas normas del año pasado sin modificación ni participación.",
            "Establecer solo las sanciones para cada tipo de falta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. Los acuerdos de convivencia deben construirse participativamente, redactarse en positivo y ser apropiados por los estudiantes. Esta es una práctica de ciudadanía democrática en el aula."
    },
    {
        id: 50,
        categoria: "Inclusión",
        pregunta: "En 5to grado, la estudiante Mariela vive con su abuela porque su madre emigró al extranjero. Ha bajado el rendimiento y se muestra triste. ¿Qué corresponde hacer?",
        opciones: [
            "Llamar la atención a la abuela por el bajo rendimiento de Mariela.",
            "Acompañar emocionalmente a la estudiante, coordinar con orientación para un apoyo psicosocial, ajustar estrategias de enseñanza a su momento, y trabajar con la familia extendida.",
            "Ignorar la situación personal y enfocarse sólo en los contenidos académicos.",
            "Compartir la situación familiar con el resto del curso para que 'la comprendan'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Ordenanza 05-2024. Las situaciones socioemocionales afectan el aprendizaje. La atención a la diversidad incluye contextos familiares diversos. La acogida emocional y el trabajo interdisciplinar son parte del rol docente."
    },
    {
        id: 51,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado aplicó una prueba de Matemática. Al corregir, nota que el 80% del grupo falló en un mismo ítem. ¿Cuál es la conclusión profesional correcta?",
        opciones: [
            "Concluir que 'el grupo es flojo' y colocar 'I' generalizado.",
            "Revisar su propia práctica docente: posiblemente el contenido no fue bien enseñado, la consigna fue ambigua o la estrategia didáctica no fue la adecuada; rediseñar la enseñanza y ofrecer retroalimentación.",
            "Eliminar el ítem del examen y promediar los demás.",
            "Aplicar un nuevo examen más fácil para subir las calificaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y clave discursiva del ERP: auto-revisión docente. Cuando la mayoría del grupo falla en algo, la primera pregunta profesional es '¿qué debo cambiar yo para que ellos aprendan?'. La evaluación es también un diagnóstico de la enseñanza."
    },
    {
        id: 52,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica una salida pedagógica a un museo. ¿Cuál es la secuencia didáctica correcta?",
        opciones: [
            "Llevar a los estudiantes sin preparación previa y que 'disfruten la experiencia'.",
            "Diseñar una secuencia de tres momentos: preparación previa (activación de saberes, guía de observación), experiencia en el museo, y sistematización posterior (producción, reflexión, integración con los contenidos).",
            "Pedir que los estudiantes escriban un resumen del paseo al día siguiente como única tarea.",
            "Evaluar con examen escrito el contenido del museo al regresar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las experiencias pedagógicas fuera del aula deben integrarse en una secuencia didáctica intencionada (antes-durante-después) articulada con competencias e indicadores específicos."
    },
    {
        id: 53,
        categoria: "Convivencia",
        pregunta: "En 4to grado, dos estudiantes se pelean físicamente en el recreo. La maestra es la primera adulta en llegar. ¿Cuál es la actuación correcta?",
        opciones: [
            "Gritarles para que se separen y enviarlos a suspensión inmediata.",
            "Separar a los estudiantes con firmeza y calma, atender posibles lesiones, contenerlos emocionalmente en espacios separados, y posteriormente activar el protocolo de mediación con orientación.",
            "Dejar que 'resuelvan solos' la situación para que 'aprendan a defenderse'.",
            "Obligarlos a pedirse perdón públicamente delante de todos los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ley 136-03. La mediación de conflictos físicos exige primero garantizar la seguridad, luego la contención emocional y posteriormente el abordaje restaurativo. El perdón forzado no resuelve el conflicto de fondo."
    },
    {
        id: 54,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado utiliza redes sociales personales donde publica fotos y comentarios sobre su vida. Un día publica imágenes de sus estudiantes sin autorización de las familias. ¿Cuál es la actuación correcta?",
        opciones: [
            "Continuar publicando mientras los comentarios sean 'positivos' sobre los estudiantes.",
            "Abstenerse de publicar imágenes o información de estudiantes sin consentimiento formal escrito de las familias, diferenciando vida personal y rol profesional.",
            "Publicar sólo imágenes de los niños cuyas familias no se hayan 'opuesto' explícitamente.",
            "Pedirles a los estudiantes que autoricen ellos mismos las publicaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la imagen e intimidad) y Orden Departamental 22-2023. La imagen de los niños es un derecho protegido. Se requiere consentimiento formal escrito del padre, madre o tutor. La separación entre vida personal y rol docente es una exigencia ética."
    },
    {
        id: 55,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza un taller de escritura donde los estudiantes producen textos propios con sus hipótesis actuales. Un padre se queja de que 'el niño escribe mal y la maestra no lo corrige'. ¿Cómo debe responder?",
        opciones: [
            "Comenzar a corregir cada palabra mal escrita para complacer al padre.",
            "Explicar al padre que los 'errores' son hipótesis constructivas que muestran el nivel de pensamiento del niño, y que la intervención pedagógica se diseña para avanzar desde ese nivel, no corrigiendo mecánicamente.",
            "Dejar de hacer producción libre y volver a dictados y planas.",
            "Ignorar la producción del estudiante y calificar sólo los dictados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La comunicación con las familias incluye explicar el enfoque pedagógico. Las hipótesis de escritura no son 'errores' sino evidencias del proceso constructivo. La intervención docente se diseña a partir de esos niveles."
    },
    {
        id: 56,
        categoria: "Inclusión",
        pregunta: "En 6to grado, un estudiante con dificultades específicas del aprendizaje en Matemática (discalculia) se frustra y deja de intentar. ¿Qué estrategia es adecuada?",
        opciones: [
            "Insistir en que resuelva las mismas actividades que los demás 'para que se acostumbre'.",
            "Diseñar adecuaciones significativas: fragmentar tareas, usar material concreto y visual, partir de sus fortalezas, ofrecer retroalimentación inmediata y trabajar la autoestima matemática en coordinación con orientación.",
            "Eximirlo de Matemática y reforzar solo en otras áreas.",
            "Asignarle problemas de cursos inferiores sin adecuación formal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las dificultades específicas del aprendizaje requieren adecuaciones significativas documentadas. Partir de las fortalezas, usar material concreto y trabajar el vínculo afectivo con el área son estrategias validadas."
    },
    {
        id: 57,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado planifica proyectos participativos de aula. ¿Cuál es la característica central de un proyecto de aula según el currículo?",
        opciones: [
            "Un conjunto de actividades sueltas agrupadas por tema.",
            "Una propuesta intencionada con una situación problema o reto significativo para los estudiantes, producto final concreto, articulación de competencias y evaluación procesual.",
            "El desarrollo completo del libro de texto de un área.",
            "Una tarea grupal asignada para la casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El proyecto de aula se caracteriza por una situación problema/reto auténtico, producto final concreto, articulación de múltiples competencias y evaluación procesual con protagonismo estudiantil."
    },
    {
        id: 58,
        categoria: "Evaluación",
        pregunta: "En 5to grado, la maestra implementa por primera vez el uso de portafolios. ¿Cuál es el propósito formativo del portafolio?",
        opciones: [
            "Guardar las pruebas escritas del trimestre en una carpeta.",
            "Sistematizar evidencias seleccionadas del proceso de aprendizaje del estudiante, con reflexiones propias y del docente, que permitan evidenciar avances, procesos y metacognición.",
            "Acumular todas las tareas del año sin criterio ni reflexión.",
            "Sustituir completamente los exámenes escritos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El portafolio es un instrumento de evaluación auténtica que sistematiza evidencias seleccionadas con intencionalidad y reflexiones metacognitivas, articulado con indicadores de logro."
    },
    {
        id: 59,
        categoria: "Ética",
        pregunta: "La maestra de 4to grado descubre que una colega está vendiendo materiales didácticos a los padres como 'obligatorios', cuando no lo son. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "Hacer lo mismo, ya que 'así todos los docentes mejoran sus ingresos'.",
            "Abstenerse de la práctica personalmente y notificar institucionalmente la situación al equipo de gestión, que deberá canalizar conforme al régimen ético del MINERD.",
            "Confrontar públicamente a la colega delante de los padres.",
            "Ignorar la situación porque 'cada docente hace lo que puede'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La venta obligada de materiales a las familias es una práctica prohibida que debe canalizarse institucionalmente. La omisión convierte al testigo en cómplice pasivo."
    },
    {
        id: 60,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 2do grado debe organizar el aula físicamente. ¿Cuál es la disposición más coherente con el enfoque por competencias?",
        opciones: [
            "Pupitres en filas rectas mirando al pizarrón, silencio absoluto como norma.",
            "Organización flexible (equipos, círculos, estaciones, rincones de aprendizaje) que se ajuste a los tipos de actividad, con espacios funcionales para la interacción, la producción y la exposición de trabajos.",
            "Pupitres separados por estudiante para evitar que 'se distraigan entre ellos'.",
            "Aula vacía sin materiales visibles para que 'se concentren mejor'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El aula es un ambiente de aprendizaje cuya organización debe ser flexible, funcional y estimulante, apoyando la interacción, la cooperación y la autonomía. El ambiente físico es parte del currículo."
    },

    // ========================================================================
    // BLOQUE 4 (61-100): Área Lengua Española y Matemática
    // ========================================================================
    {
        id: 61,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra trabaja el tipo textual 'instructivo' con recetas. Un estudiante pregunta '¿para qué sirve leer recetas si no cocinamos?'. ¿Cuál es la respuesta pedagógica correcta?",
        opciones: [
            "'Porque viene en el libro de texto y hay que estudiarlo'.",
            "Contextualizar la pregunta: reconocer la validez del planteamiento, explicar la función social del texto instructivo en la vida cotidiana (recetas, manuales, reglas de juego) y proponer una situación auténtica (elaborar instrucciones reales).",
            "Ignorar la pregunta y continuar con el ejercicio del libro.",
            "Regañar al estudiante por 'cuestionar' los contenidos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. La enseñanza de los tipos textuales debe estar anclada en prácticas sociales del lenguaje. Las preguntas de los estudiantes son oportunidades de sentido y anclaje contextual."
    },
    {
        id: 62,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado planifica la enseñanza de fracciones en Matemática. ¿Cuál es la secuencia didáctica adecuada?",
        opciones: [
            "Definir fracción, mostrar la notación y aplicar ejercicios de operaciones directamente.",
            "Partir de situaciones cotidianas (repartos, mediciones, recetas), usar material concreto y representaciones gráficas, construir el concepto progresivamente y llegar a la notación formal con comprensión del sentido.",
            "Dictar 50 ejercicios de fracciones para que los estudiantes los resuelvan en silencio.",
            "Mostrar un video y aplicar un examen al día siguiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La enseñanza de la matemática debe partir de situaciones problema contextualizadas, usar recursos concretos y representacionales, y construir el concepto antes que la notación formal."
    },
    {
        id: 63,
        categoria: "Evaluación",
        pregunta: "La maestra de 1er grado debe evaluar la competencia matemática 'Resuelve problemas sencillos'. ¿Cuál es el instrumento más adecuado en este nivel?",
        opciones: [
            "Una prueba escrita con 30 operaciones aritméticas.",
            "Una situación de aprendizaje lúdica con material concreto donde el estudiante manipule, explique su estrategia oralmente y represente con dibujos, valorada con registro de observación.",
            "Un dictado de números del 1 al 100.",
            "La copia repetida de las tablas de sumar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Adecuación Curricular 2023. En 1er grado, la evaluación debe ser lúdica, con material concreto, permitir la verbalización de estrategias y registrarse mediante observación sistemática."
    },
    {
        id: 64,
        categoria: "Inclusión",
        pregunta: "En 3er grado, un estudiante con mutismo selectivo no habla en el aula aunque habla en casa. La maestra lo pone a exponer frente al grupo y el niño llora. ¿Qué debe hacer?",
        opciones: [
            "Insistir en que exponga 'para superar su miedo' frente a los demás.",
            "Respetar sus tiempos, buscar formatos alternativos de participación (escritura, dibujo, exposición grabada, en pequeños grupos), coordinar con orientación y la familia un plan gradual.",
            "Asumir que 'es tímido' y eximirlo de toda participación.",
            "Castigarlo bajando su nota por no participar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El mutismo selectivo es una condición que requiere adecuaciones específicas y acompañamiento especializado. Forzar la exposición incrementa el cuadro. La diversificación de formatos de participación es una respuesta inclusiva."
    },
    {
        id: 65,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra organiza una jornada de lectura diaria. ¿Cuál es el propósito correcto de este espacio?",
        opciones: [
            "Que los estudiantes practiquen lectura oral en voz alta como único objetivo.",
            "Generar un espacio de encuentro con la lectura en múltiples modalidades (lectura mediada por el docente, exploración de libros, lectura compartida), promoviendo el gusto por leer y la comprensión.",
            "Medir la velocidad lectora de cada estudiante semanalmente.",
            "Copiar párrafos del libro de texto en el cuaderno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La lectura en Primaria tiene múltiples modalidades didácticas (mediada, compartida, por placer, guiada) cuyo propósito es formar lectores competentes y comprometidos, no medir velocidad."
    },
    {
        id: 66,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 4to grado nota que ciertos estudiantes monopolizan la participación oral. ¿Qué estrategia es adecuada?",
        opciones: [
            "Permitir que solo participen los más rápidos porque 'los demás no saben las respuestas'.",
            "Implementar estrategias de participación equitativa (turnos, trabajo en parejas antes de plenaria, tarjetas de nombres al azar, tiempo de pensamiento individual) que den voz a todos.",
            "Prohibir totalmente la participación oral y solo aceptar respuestas escritas.",
            "Llamar la atención públicamente a los estudiantes más callados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. La participación equitativa es responsabilidad docente. Estrategias como think-pair-share, tarjetas al azar y tiempo de pensamiento garantizan que todas las voces estén en el aula."
    },
    {
        id: 67,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado recibe en redes sociales una solicitud de amistad de un exestudiante menor de edad. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "Aceptar la solicitud por cortesía y mantener comunicación informal.",
            "No aceptar solicitudes de amistad en redes personales con estudiantes o exestudiantes menores de edad; si hay comunicación necesaria, canalizarla por vías institucionales del centro.",
            "Aceptar y publicar mensajes dirigidos específicamente al estudiante.",
            "Aceptar sólo si los padres lo autorizan expresamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 136-03. La relación docente-estudiante se circunscribe al ámbito pedagógico institucional. Las interacciones privadas en redes sociales con menores vulneran límites éticos y pueden configurar situaciones de riesgo."
    },
    {
        id: 68,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado diseña la evaluación final del año. Un colega le sugiere aplicar un solo examen sumativo de todas las áreas. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Seguir el consejo del colega y aplicar un único examen final sumativo.",
            "Evidenciar el desempeño mediante múltiples fuentes acumuladas durante el año (registros, portafolios, producciones, observaciones) articuladas con las competencias del grado, no un único evento final.",
            "No hacer ninguna evaluación formal y usar solo la impresión general del año.",
            "Aplicar sólo pruebas orales individuales de 2 minutos por estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación final integra evidencias recogidas procesualmente durante el año, no se reduce a un examen sumativo. El juicio evaluativo final debe estar fundamentado en múltiples evidencias."
    },
    {
        id: 69,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 5to grado nota que una estudiante, antes sociable, ahora está aislada, descuidada, con bajo rendimiento y ha faltado varios días. ¿Qué debe hacer?",
        opciones: [
            "Esperar a que la estudiante 'regrese a su estado normal' por sí sola.",
            "Comunicar inmediatamente a orientación y dirección las señales observadas, explorar pedagógicamente si hay factores que afectan a la estudiante, contactar a la familia y activar apoyos según protocolo.",
            "Preguntarle directamente al grupo 'qué le pasa' a la estudiante.",
            "Bajar la nota por las faltas sin indagar las causas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia. Los cambios significativos en el comportamiento son señales de alerta que requieren intervención interdisciplinar. El rol docente incluye la detección temprana y la activación de apoyos institucionales."
    },
    {
        id: 70,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado planifica la integración de las TIC en el aula. Solo cuenta con una tableta del centro. ¿Cuál es el enfoque pedagógico correcto?",
        opciones: [
            "No usar TIC porque 'no hay suficientes dispositivos'.",
            "Integrar la tableta en estaciones de trabajo rotativas, con propósitos pedagógicos claros (búsqueda, producción, consulta), articulada con otras actividades del aula.",
            "Entregar la tableta a los estudiantes 'más avanzados' como premio.",
            "Usar la tableta solo para que la maestra proyecte videos al grupo completo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La integración de las TIC debe responder a propósitos pedagógicos y se organiza según los recursos disponibles, mediante estaciones u otras estrategias que democraticen el acceso."
    },
    {
        id: 71,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra trabaja el nombre propio como punto de partida para la alfabetización. Un padre pregunta '¿por qué empieza por el nombre y no por el abecedario?'. ¿Cómo debe explicar?",
        opciones: [
            "'Porque así lo indica el libro de texto, hay que seguir el orden'.",
            "Explicar que el nombre propio es el primer texto significativo para el niño, que permite identificar constantes (letras), establecer correspondencias y construir sentido, siendo una entrada natural al sistema de escritura.",
            "Decirle que no tiene importancia y que 'ya llegará al abecedario'.",
            "Enseñar el abecedario de manera paralela para 'tranquilizar' al padre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El nombre propio es un texto fundador en la alfabetización inicial. Permite al niño observar constantes, establecer hipótesis sobre el sistema y construir sentido personal con las letras."
    },
    {
        id: 72,
        categoria: "Inclusión",
        pregunta: "En 4to grado hay un estudiante con Trastorno de Ansiedad diagnosticado. Durante los exámenes presenta bloqueo emocional y no logra responder aunque sabe los contenidos. ¿Qué debe hacer la maestra?",
        opciones: [
            "Exigirle que responda 'como todos' para que 'supere su ansiedad'.",
            "Implementar adecuaciones de acceso (ambiente tranquilo, fraccionar la evaluación, combinar formatos escrito/oral, permitir pausas, reducir estímulos), en coordinación con orientación y la familia.",
            "Eximirlo totalmente de las evaluaciones.",
            "Ignorar la condición y colocarle 'I' si no responde."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los trastornos emocionales son parte de la diversidad que requiere adecuaciones de acceso documentadas. No se trata de eximir ni de ignorar, sino de eliminar barreras que impiden demostrar lo aprendido."
    },
    {
        id: 73,
        categoria: "Convivencia",
        pregunta: "En 5to grado, un grupo de estudiantes excluye sistemáticamente a una compañera en los trabajos grupales. ¿Qué debe hacer la maestra?",
        opciones: [
            "Permitir que los estudiantes formen los grupos como quieran porque 'ya son grandes'.",
            "Organizar intencionalmente la formación de grupos heterogéneos, trabajar explícitamente competencias socioemocionales, abordar la situación con el grupo sin exponer a la víctima, y articular con orientación.",
            "Confrontar públicamente a los estudiantes excluyentes delante del grupo.",
            "Cambiar a la estudiante afectada a otra sección."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. La exclusión social es una forma de violencia que requiere intervención pedagógica. La organización intencionada de grupos heterogéneos y el trabajo socioemocional son estrategias preventivas y restaurativas."
    },
    {
        id: 74,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado recibe reclamos de varios padres porque sus hijos tienen 'EP' en Lengua Española. Le piden subir las calificaciones 'para que no afecte su ingreso a Secundaria'. ¿Cómo debe actuar?",
        opciones: [
            "Acceder a la solicitud porque 'los padres tienen razón en preocuparse'.",
            "Mantener la integridad de la evaluación, convocar a reunión para explicar el significado de 'EP', presentar las evidencias del desempeño y el plan de acompañamiento para el avance.",
            "Cambiar las calificaciones pero dejar constancia 'oculta' de las dificultades.",
            "Rendirse ante la presión y modificar todos los indicadores a 'L'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Orden Departamental 22-2023. La integridad evaluativa es un principio ético. La comunicación con las familias debe ser formativa y basada en evidencias, no cediendo a presiones que distorsionen el juicio evaluativo."
    },
    {
        id: 75,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado lleva tres días sin poder asistir por una emergencia familiar. No ha notificado formalmente al centro. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "Continuar ausente sin notificar, pues 'en algún momento volverá'.",
            "Notificar inmediatamente al director por los medios disponibles, presentar los justificantes correspondientes, y coordinar para que sus estudiantes no se vean afectados.",
            "Pedir a una colega que la 'cubra' sin informar al director.",
            "Esperar a reincorporarse para explicar verbalmente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Estatuto del Docente. La puntualidad y asistencia son deberes docentes. Ante imposibilidad, la comunicación inmediata al superior y la presentación de justificantes es una obligación ética y administrativa."
    },
    {
        id: 76,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado recibe en su grupo a estudiantes con muy diversos niveles de desempeño. ¿Cuál es el enfoque correcto de planificación?",
        opciones: [
            "Planificar para un 'estudiante promedio' y dejar que los demás se ajusten.",
            "Diseñar una planificación que contemple la diversidad mediante actividades de múltiples niveles de complejidad, diferentes formas de representación y expresión, trabajo cooperativo y apoyos diferenciados.",
            "Dividir el grupo en 'los que saben' y 'los que no saben' y enseñarles contenidos distintos.",
            "Planificar sólo para el grupo 'más adelantado' para cumplir con el currículo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Adecuación Curricular 2023. La planificación debe contemplar la diversidad desde su origen mediante principios del Diseño Universal para el Aprendizaje: múltiples medios de representación, expresión y motivación."
    },
    {
        id: 77,
        categoria: "Gestión de Aula",
        pregunta: "En 1er grado, la maestra establece rutinas diarias. ¿Cuál es el propósito pedagógico de las rutinas?",
        opciones: [
            "Rigidizar el aula para evitar cualquier alteración.",
            "Ofrecer previsibilidad y estructura que brinde seguridad emocional, optimice el tiempo didáctico y favorezca la autonomía progresiva de los estudiantes.",
            "Ocupar el tiempo cuando la maestra no sabe qué hacer.",
            "Controlar a los estudiantes para que 'no se muevan'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las rutinas pedagógicas son andamios que estructuran el tiempo del aula, dan seguridad emocional, favorecen la autonomía y liberan tiempo para el aprendizaje significativo."
    },
    {
        id: 78,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra trabaja la revisión y reescritura de textos producidos por los estudiantes. ¿Cuál es el sentido pedagógico de esta práctica?",
        opciones: [
            "Corregir con lápiz rojo todos los errores para que 'no los repitan'.",
            "Hacer visible que la escritura es un proceso recursivo, que todos los escritores revisan, y acompañar al estudiante en mejorar su texto según aspectos trabajados (coherencia, cohesión, ortografía según el nivel).",
            "Hacer que los estudiantes copien el texto correctamente escrito por la maestra.",
            "Evaluar solo la presentación final sin revisar el proceso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Adecuación Curricular 2023. La escritura es un proceso recursivo que incluye planificación, textualización, revisión y edición. La revisión acompañada es una práctica didáctica central, no una corrección punitiva."
    },
    {
        id: 79,
        categoria: "Inclusión",
        pregunta: "En 4to grado ingresa un estudiante con Síndrome de Down. La maestra se pregunta si debe 'exigirle lo mismo que a los demás'. ¿Cuál es el planteamiento correcto?",
        opciones: [
            "Exigirle exactamente lo mismo para 'no hacer diferencias'.",
            "Realizar adecuaciones curriculares significativas (modificar indicadores y/o contenidos), construir el plan educativo individualizado con el equipo de orientación y la familia, y valorar los avances en sus propios términos.",
            "Eximirlo de los contenidos y enviarle tareas recreativas.",
            "Calificarlo con 'L' automáticamente para 'motivarlo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las adecuaciones curriculares significativas modifican indicadores, contenidos o competencias cuando corresponde. El plan educativo individualizado se construye interdisciplinariamente y valora los avances del estudiante en relación a sí mismo."
    },
    {
        id: 80,
        categoria: "Evaluación",
        pregunta: "En 3er grado, la maestra diseña la retroalimentación a sus estudiantes. ¿Cuál es la característica de una retroalimentación formativa de calidad?",
        opciones: [
            "Una calificación numérica al final de cada tarea.",
            "Información específica, oportuna, descriptiva y orientadora que le permita al estudiante comprender qué logró, qué necesita mejorar y cómo hacerlo, dialogando con sus producciones.",
            "Frases generales como 'bien', 'regular', 'mal'.",
            "Únicamente marcar con rojo los errores."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La retroalimentación formativa es específica, descriptiva, oportuna y orientada al progreso. Es una de las estrategias de mayor impacto en el aprendizaje y una clave discursiva del ERP."
    },

    // ========================================================================
    // BLOQUE 5 (81-120): Casos de Ciencias Sociales, Naturales y Formación Humana
    // ========================================================================
    {
        id: 81,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado planifica Ciencias Sociales sobre 'Las regiones geográficas de República Dominicana'. ¿Cuál es la estrategia didáctica más pertinente?",
        opciones: [
            "Dictar las características de cada región para que las memoricen.",
            "Diseñar una situación de aprendizaje que integre indagación (fuentes diversas), comparación entre regiones, uso de mapas y recursos multimedia, y un producto final que evidencie la comprensión.",
            "Mostrar un documental extenso sin actividades de articulación.",
            "Entregar una fotocopia resumen para que la copien al cuaderno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las Ciencias Sociales se enseñan mediante indagación, uso de fuentes diversas, comparación y representación espacial, articulando contenidos con las competencias fundamentales."
    },
    {
        id: 82,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado recibe una invitación a un grupo de WhatsApp de 'padres descontentos' con el centro. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "Unirse al grupo para 'escuchar' lo que dicen los padres.",
            "Declinar la invitación y canalizar las preocupaciones legítimas de las familias por los mecanismos institucionales (Asamblea de Padres, APMAE, reuniones con el director).",
            "Unirse al grupo pero solo para defender al centro.",
            "Compartir información interna del centro para 'ganarse la confianza' de los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La participación en grupos informales contra la institución vulnera la ética profesional. Los canales institucionales (APMAE, Asamblea, reuniones) son los espacios legítimos para el diálogo."
    },
    {
        id: 83,
        categoria: "Inclusión",
        pregunta: "En 6to grado, un estudiante manifiesta abiertamente una orientación sexual distinta. Otros compañeros lo molestan. ¿Qué debe hacer la maestra?",
        opciones: [
            "Pedirle al estudiante que 'no lo mencione' para evitar molestias.",
            "Garantizar un aula respetuosa y libre de discriminación, abordar explícitamente la diversidad y el respeto a la dignidad humana, activar protocolos de convivencia contra la discriminación, y articular con orientación.",
            "Ignorar las burlas porque 'son cosas de niños'.",
            "Cambiar al estudiante de sección para 'evitarle' las burlas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (principio de no discriminación), Manual de Convivencia y Ordenanza 05-2024. Todo estudiante tiene derecho a un ambiente escolar libre de discriminación. La intervención docente contra el acoso discriminatorio es obligatoria."
    },
    {
        id: 84,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado diseña una evaluación de la competencia 'Pensamiento Lógico, Creativo y Crítico'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Aplicar un test de coeficiente intelectual.",
            "Diseñar situaciones auténticas donde los estudiantes resuelvan problemas, argumenten decisiones, generen alternativas y reflexionen sobre su pensamiento, valorado con rúbrica.",
            "Aplicar solo pruebas de memorización de contenidos.",
            "Calificar únicamente las respuestas 'correctas' sin analizar los procesos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las Competencias Fundamentales como el Pensamiento Lógico, Creativo y Crítico se evalúan mediante situaciones auténticas donde se movilizan procesos cognitivos complejos, no con tests o memorización."
    },
    {
        id: 85,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra introduce la lectura por placer. ¿Cuál es la práctica correcta?",
        opciones: [
            "Imponer un libro específico a todos los estudiantes para garantizar 'control'.",
            "Ofrecer variedad de textos, permitir la exploración autónoma, modelar la lectura a través de lecturas en voz alta del docente, y socializar las lecturas.",
            "Sólo leer cuando los estudiantes 'se lo ganen' por buen comportamiento.",
            "Evaluar la comprensión con cuestionarios extensos después de cada lectura."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La lectura por placer se fomenta mediante variedad, autonomía, modelaje docente y socialización. La lectura no debe ser usada como premio/castigo ni ser objeto de evaluación punitiva."
    },
    {
        id: 86,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 3er grado tiene un estudiante que constantemente interrumpe la clase hablando en voz alta. ¿Cuál es la estrategia pedagógica correcta?",
        opciones: [
            "Enviarlo fuera del aula cada vez que interrumpa.",
            "Identificar las causas posibles (necesidades de atención, falta de claridad en las consignas, estilo de aprendizaje), acordar con él señales y estrategias de autorregulación, reforzar positivamente la participación adecuada.",
            "Ignorarlo permanentemente para que 'se canse de llamar la atención'.",
            "Bajarle la nota cada vez que hable sin permiso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. La gestión positiva del aula implica comprender las causas de la conducta, acordar estrategias con el estudiante y reforzar lo positivo, no aplicar sanciones punitivas."
    },
    {
        id: 87,
        categoria: "Protección Infantil",
        pregunta: "Un estudiante de 2do grado cuenta espontáneamente que 'su papá le pega con una correa' cuando lo regaña. ¿Cuál es la obligación de la maestra?",
        opciones: [
            "Restarle importancia porque 'es forma de criar' común.",
            "Registrar lo informado sin interrogar extensamente al niño, notificar de manera urgente al equipo de orientación y a la dirección para activar el protocolo de referimiento al CONANI, conforme a la Ley 136-03.",
            "Llamar al padre para 'conversar' sobre el tema directamente.",
            "Pedirle al niño que 'no le cuente a nadie más'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos 12-14, 48 sobre integridad personal). El castigo corporal es una forma de violencia contra el niño, legalmente prohibida. La notificación al CONANI es obligatoria ante revelaciones de maltrato."
    },
    {
        id: 88,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado planifica el área de Formación Integral, Humana y Religiosa. Una estudiante es de familia de distinta religión. ¿Cuál es la actuación correcta?",
        opciones: [
            "Exigirle participar en las mismas actividades confesionales por 'uniformidad'.",
            "Respetar la libertad de conciencia y culto, ofrecer alternativas pedagógicas éticas y formativas coherentes con el currículo, y dialogar con la familia para acordar la participación.",
            "Eximirla completamente del área durante todo el año.",
            "Presionar a la familia a 'aceptar' la formación del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución de la República, Ley 136-03 (libertad de conciencia) y Ordenanza 05-2024. La libertad religiosa es un derecho fundamental. El currículo de Formación Integral, Humana y Religiosa incluye dimensiones éticas universales compartibles."
    },
    {
        id: 89,
        categoria: "Inclusión",
        pregunta: "La maestra de 2do grado identifica que varios estudiantes presentan signos de dificultades específicas del aprendizaje. ¿Cuál es el procedimiento correcto?",
        opciones: [
            "Diagnosticar ella misma las dificultades y actuar conforme a su criterio.",
            "Documentar las observaciones sistemáticamente, referir a orientación para evaluación pedagógica, diseñar adecuaciones pertinentes en coordinación con el equipo, y comunicar a las familias.",
            "Esperar al siguiente año sin intervenir.",
            "Asumir que todos aprenden distinto y no hacer nada específico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La detección temprana de dificultades del aprendizaje exige documentación, referimiento a equipos especializados y coordinación interdisciplinar. El diagnóstico clínico no es competencia docente, pero sí la observación pedagógica."
    },
    {
        id: 90,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado planifica la evaluación de egreso del Nivel Primario. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Un único examen final extenso que decida la promoción.",
            "Una valoración integral basada en evidencias acumuladas del grado sobre las Competencias Fundamentales y Específicas, articulada con el proceso formativo del año.",
            "Solo las pruebas estandarizadas externas.",
            "La impresión general del docente sobre cada estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La promoción en Primaria se basa en el logro de las competencias del grado, evidenciado a lo largo del año escolar mediante múltiples fuentes, no en un único examen final."
    },
    {
        id: 91,
        categoria: "Ética",
        pregunta: "La maestra de 3er grado necesita ausentarse durante una hora para un trámite personal. Piensa dejar a sus estudiantes solos con una actividad asignada. ¿Cuál es la actuación correcta?",
        opciones: [
            "Dejar a los estudiantes solos con la actividad porque 'son obedientes'.",
            "Gestionar con el director la autorización y la cobertura de otro docente, garantizando que los estudiantes estén bajo supervisión adulta responsable en todo momento.",
            "Pedir a un estudiante mayor 'cuidar' el grupo mientras ella sale.",
            "Adelantar el recreo para 'resolver' la ausencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (deber de garante) y Orden Departamental 22-2023. El docente es responsable de la integridad de los estudiantes durante la jornada escolar. Dejar a menores sin supervisión adulta constituye negligencia y vulnera su seguridad."
    },
    {
        id: 92,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado recibe el libro de texto oficial y una guía de la editorial privada. La guía propone una secuencia distinta a la del currículo. ¿Qué debe hacer?",
        opciones: [
            "Seguir la guía de la editorial porque 'tiene más ejercicios'.",
            "Priorizar el Diseño Curricular oficial, usar los materiales como recursos subordinados al currículo, y ajustar las secuencias a las competencias, indicadores y situaciones de aprendizaje pertinentes.",
            "Alternar una semana la guía privada y otra el currículo oficial.",
            "Dejar que los estudiantes escojan cuál material prefieren."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El Diseño Curricular es el referente obligatorio. Los materiales (libros, guías) son recursos auxiliares que se subordinan a las competencias y a la planificación institucional."
    },
    {
        id: 93,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra observa que Mario escribe textos con ideas interesantes pero con múltiples errores ortográficos. ¿Cuál es la estrategia correcta?",
        opciones: [
            "Bajar la nota por cada error y hacerle repetir el texto.",
            "Valorar positivamente la producción de sentido, trabajar progresivamente aspectos ortográficos según el nivel del grado, y fortalecer la revisión como parte del proceso de escritura.",
            "Ignorar los errores y no trabajar ortografía en 2do grado.",
            "Exigir ortografía perfecta antes de permitirle escribir textos nuevos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La ortografía se enseña progresivamente según los aspectos propios del grado. El reconocimiento de la producción de sentido y el trabajo sistemático de revisión son estrategias formativas."
    },
    {
        id: 94,
        categoria: "Gestión de Aula",
        pregunta: "En 5to grado, la maestra implementa el trabajo cooperativo. Algunos estudiantes se quejan de que 'otros no trabajan y aprovechan'. ¿Qué debe hacer?",
        opciones: [
            "Eliminar el trabajo cooperativo y volver solo al trabajo individual.",
            "Estructurar el trabajo cooperativo con roles definidos, responsabilidad individual dentro del grupo, evaluación combinada (grupal e individual) y autoevaluación del equipo.",
            "Calificar solo al 'líder' del grupo que asume todo el trabajo.",
            "Asignar el mismo grupo todo el año sin rotación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El trabajo cooperativo efectivo requiere estructura (roles, interdependencia positiva, responsabilidad individual) y no es simple agrupamiento. La formación en competencias ciudadanas pasa por estas prácticas."
    },
    {
        id: 95,
        categoria: "Inclusión",
        pregunta: "En 3er grado, un estudiante con hipoacusia (pérdida auditiva) usa audífonos. La maestra habla dándole la espalda mientras escribe en el pizarrón. El estudiante pierde el hilo. ¿Qué debe corregir?",
        opciones: [
            "Culpar al estudiante por 'no prestar atención'.",
            "Ajustar su práctica docente: hablar de frente al estudiante, asegurarse de que su rostro sea visible, apoyar con recursos visuales, ubicarlo estratégicamente, y verificar comprensión frecuentemente.",
            "Subir el volumen de voz para gritarle lo que dice.",
            "Asumir que 'con audífonos ya está resuelto' sin hacer ajustes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las adecuaciones de acceso para estudiantes con hipoacusia incluyen visibilidad del rostro del docente, apoyos visuales y ubicación estratégica. Los audífonos no sustituyen los ajustes pedagógicos."
    },
    {
        id: 96,
        categoria: "Convivencia",
        pregunta: "En 4to grado, la maestra planifica el trabajo con emociones como parte del desarrollo socioemocional. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Hablar de emociones solo cuando surge un conflicto puntual.",
            "Integrar de manera sistemática la educación socioemocional en rutinas de aula (rondas de emociones, diario emocional, regulación, resolución de conflictos), articulada con competencias personales y sociales del currículo.",
            "Asumir que 'las emociones se aprenden en casa' y no trabajarlas en la escuela.",
            "Pedir a los estudiantes que 'guarden' sus emociones durante la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (dimensión socioemocional) y Manual de Convivencia. La educación socioemocional es transversal, sistemática y articulada con competencias personales y sociales, no reactiva ni opcional."
    },
    {
        id: 97,
        categoria: "Evaluación",
        pregunta: "La maestra de 1er grado reporta el primer indicador del año. Dos estudiantes han sido ausentistas. ¿Qué debe hacer la maestra respecto a sus indicadores?",
        opciones: [
            "Colocar 'I' automáticamente porque 'no asistieron'.",
            "Reportar con las evidencias disponibles, registrar la situación de ausentismo, coordinar con orientación y la familia la búsqueda de causas, y articular un plan de acompañamiento y recuperación pedagógica.",
            "Inventar indicadores basándose en el comportamiento del año anterior.",
            "No reportar nada y dejar los campos en blanco."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Ley 136-03 (derecho a la educación). El ausentismo escolar requiere intervención institucional. Los indicadores se reportan con evidencias disponibles, y la articulación con orientación y familia es obligatoria."
    },
    {
        id: 98,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica una unidad sobre 'Ecosistemas dominicanos' en Ciencias de la Naturaleza. ¿Cuál es el recurso didáctico más coherente con el enfoque por competencias?",
        opciones: [
            "Clases magistrales con la maestra dictando los conceptos.",
            "Integración de recursos diversos (salida al entorno local, videos, experimentos sencillos, fuentes escritas, expertos locales), problematización y producción final auténtica.",
            "Únicamente el libro de texto y un cuestionario al final.",
            "Un documental extenso sin actividades de articulación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La enseñanza de las Ciencias requiere recursos diversos y experiencias directas con el entorno, articulando saberes formales con la realidad inmediata del estudiante."
    },
    {
        id: 99,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra trabaja la conciencia fonológica. ¿Cuál es el propósito y enfoque correcto?",
        opciones: [
            "Solo hacer planas de sílabas aisladas.",
            "Realizar actividades lúdicas y sistemáticas (rimas, segmentación, identificación de sonidos iniciales/finales, juegos orales) integradas con el trabajo sobre el sistema de escritura y textos significativos.",
            "Enseñar el abecedario de memoria en orden.",
            "Ignorar la conciencia fonológica porque 'no es importante' en 2do grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La conciencia fonológica es un componente clave de la alfabetización que se trabaja mediante actividades lúdicas integradas con la reflexión sobre el sistema de escritura y el trabajo con textos."
    },
    {
        id: 100,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado observa a un colega fumando dentro del centro educativo en presencia de estudiantes. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ignorar la situación porque 'no es mi asunto'.",
            "Notificar institucionalmente la situación al director, pues el centro es un espacio libre de humo y el docente es modelo de conducta para los estudiantes.",
            "Grabar al colega para exponerlo en redes sociales.",
            "Confrontarlo públicamente delante de los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 48-00 (sobre control del tabaco), Orden Departamental 22-2023 y Manual de Convivencia. Los centros educativos son espacios libres de humo. El docente es modelo de comportamiento. La canalización institucional es la vía correcta."
    },

    // ========================================================================
    // BLOQUE 6 (101-140): Casos de mayor complejidad
    // ========================================================================
    {
        id: 101,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 1er grado tiene 42 estudiantes (grupo grande). Un colega le dice que 'con tantos niños no se puede individualizar'. ¿Cuál es la actuación correcta?",
        opciones: [
            "Aceptar la idea del colega y dar clases magistrales uniformes.",
            "Organizar el grupo mediante estrategias que faciliten la atención diferenciada: estaciones de trabajo, pares tutores, grupos rotativos, apoyos visuales, observación sistemática registrada.",
            "Solicitar la reducción inmediata del grupo como única solución.",
            "Enfocarse solo en los 10 estudiantes 'más avanzados' y dejar a los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 05-2024. La atención a la diversidad es posible aun en grupos grandes mediante organización didáctica estratégica. La gestión docente debe buscar alternativas, no justificaciones."
    },
    {
        id: 102,
        categoria: "Evaluación",
        pregunta: "La maestra de 4to grado diseña un instrumento de observación sistemática. ¿Qué característica debe tener para ser un instrumento válido de evaluación?",
        opciones: [
            "Ser una lista improvisada de comportamientos generales.",
            "Ser una guía con indicadores específicos, observables y articulados con las competencias del grado, que registre evidencias durante situaciones de aprendizaje reales.",
            "Solo registrar aspectos de comportamiento disciplinario.",
            "Ser una encuesta de opinión a los estudiantes sobre sí mismos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Los instrumentos de observación sistemática son válidos cuando tienen indicadores específicos, observables y articulados con las competencias, y se aplican en situaciones auténticas de aprendizaje."
    },
    {
        id: 103,
        categoria: "Inclusión",
        pregunta: "En 6to grado, un estudiante con parálisis cerebral (funcional) requiere apoyo de un asistente. El asistente no asiste un día. ¿Qué debe hacer la maestra?",
        opciones: [
            "Negar el acceso del estudiante al aula ese día.",
            "Garantizar la participación del estudiante activando apoyos alternativos del centro, adecuando las actividades, y notificando formalmente la ausencia del asistente para buscar soluciones sostenibles.",
            "Sentarlo en un rincón sin actividades.",
            "Asignar a otro estudiante del aula como 'ayudante' permanente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. El derecho a la educación no puede suspenderse por la ausencia de apoyos previstos. El centro debe garantizar alternativas, adecuaciones y articular soluciones institucionales."
    },
    {
        id: 104,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra planifica el aprendizaje del nombre propio. ¿Cuál es la secuencia didáctica correcta?",
        opciones: [
            "Escribir todos los nombres en el pizarrón y pedir que los copien.",
            "Construir progresivamente: identificar el nombre propio entre otros, reconocer su letra inicial, compararlo con otros nombres, analizar cantidad y orden de letras, y usarlo en múltiples situaciones significativas.",
            "Enseñar el nombre solo si los estudiantes preguntan.",
            "Posponer el trabajo con el nombre hasta que sepan todas las letras."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El trabajo con el nombre propio es progresivo y multidimensional, usando el nombre como objeto de reflexión y como herramienta de identidad en contextos significativos."
    },
    {
        id: 105,
        categoria: "Ética",
        pregunta: "La maestra de 3er grado escucha a una colega expresar prejuicios raciales hacia estudiantes de su grupo. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "Asentir para no generar conflicto con la colega.",
            "Manifestar su desacuerdo con respeto pero con firmeza, y notificar institucionalmente los comentarios si se reiteran o afectan la relación pedagógica con los estudiantes, conforme al principio de no discriminación.",
            "Compartir los comentarios con los padres del grupo.",
            "Ignorar los comentarios por 'respeto' a la colega."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023, Ley 136-03 (principio de no discriminación) y Constitución. El docente debe posicionarse éticamente frente a expresiones discriminatorias. La complicidad silenciosa es una forma de validación."
    },
    {
        id: 106,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado integra el uso de un huerto escolar en Ciencias de la Naturaleza. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Usar el huerto solo como actividad recreativa sin articulación curricular.",
            "Integrar el huerto como contexto auténtico de aprendizaje que articula Ciencias de la Naturaleza, Matemática (mediciones), Lengua (registro), Sociales (alimentación) y desarrollo socioemocional, con indicadores claros.",
            "Asignar el huerto solo a los estudiantes 'con mal rendimiento' como 'ocupación'.",
            "Limitar el trabajo del huerto a los recreos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los espacios como el huerto escolar son contextos de aprendizaje integrado que articulan múltiples competencias y áreas curriculares de forma significativa."
    },
    {
        id: 107,
        categoria: "Convivencia",
        pregunta: "La maestra de 2do grado nota que un estudiante menciona repetidamente escenas violentas de un videojuego en sus dibujos y conversaciones. ¿Cuál es la actuación correcta?",
        opciones: [
            "Confiscar los dibujos y regañar al estudiante.",
            "Registrar las observaciones, conversar con la familia sobre el acceso a contenidos no adecuados para la edad, coordinar con orientación y trabajar con el grupo sobre uso responsable de medios.",
            "Exhibir los dibujos en el aula como 'ejemplo' de lo que no se debe hacer.",
            "Asumir que es 'normal' en niños y no intervenir."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (protección ante contenidos inadecuados) y Manual de Convivencia. La exposición a contenidos no apropiados para la edad afecta el desarrollo. La articulación familia-escuela es clave para la protección integral."
    },
    {
        id: 108,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado aplica una evaluación formativa intermedia. Descubre que los estudiantes comprendieron parcialmente un contenido clave. ¿Cuál es el uso correcto de esa información?",
        opciones: [
            "Registrar las calificaciones y continuar con el siguiente contenido.",
            "Rediseñar la enseñanza con nuevas estrategias, ofrecer retroalimentación específica, trabajar los conceptos débiles desde otro ángulo, y verificar nuevamente la comprensión.",
            "Enviar el contenido como tarea para la casa.",
            "Colocar 'I' a quienes no lo entendieron y avanzar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La función de la evaluación formativa es informar la enseñanza, no calificar. Cuando detecta vacíos, el docente reflexiona sobre su práctica y rediseña estrategias. Esta es una clave discursiva del ERP."
    },
    {
        id: 109,
        categoria: "Inclusión",
        pregunta: "En 4to grado, una estudiante transgénero solicita ser llamada por su nombre sentido. ¿Cuál es la actuación correcta de la maestra?",
        opciones: [
            "Negar el uso del nombre sentido por 'no estar en el registro oficial'.",
            "Acoger con respeto la identidad de la estudiante, coordinar con orientación y la familia, garantizar un ambiente libre de discriminación y manejar la situación con los protocolos correspondientes.",
            "Llamar la atención públicamente a la estudiante por 'generar problemas'.",
            "Compartir la situación con todos los padres del curso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (principio de no discriminación e interés superior del niño), Ordenanza 05-2024. La dignidad e identidad de cada niño o niña merecen respeto. La coordinación con orientación y familia es clave para el abordaje pedagógico adecuado."
    },
    {
        id: 110,
        categoria: "Protección Infantil",
        pregunta: "Durante una revisión de mochilas por seguridad, la maestra de 6to grado encuentra un arma blanca en la mochila de un estudiante. ¿Cuál es la actuación correcta?",
        opciones: [
            "Confiscar el objeto y devolverlo al final del día sin reportar.",
            "Mantener la calma, poner a resguardo el objeto y al estudiante, notificar inmediatamente al director para activar el protocolo de seguridad escolar, contactar a la familia y a las instancias pertinentes.",
            "Exhibir el objeto al grupo como advertencia.",
            "Expulsar inmediatamente al estudiante sin agotar el proceso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ley 136-03. Las situaciones que ponen en riesgo la integridad de la comunidad escolar exigen activación inmediata de protocolos institucionales, preservando la seguridad y el debido proceso."
    },
    {
        id: 111,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado planifica la integración de la competencia 'Ética y Ciudadana' transversalmente. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Trabajar Ética y Ciudadana solo en Formación Humana.",
            "Integrarla transversalmente en todas las áreas mediante situaciones de aprendizaje que impliquen decisiones éticas, participación democrática, respeto a la diversidad y análisis crítico.",
            "Dedicar una hora aislada a la semana a 'valores' sin articulación.",
            "Asumir que 'se aprende en casa' y no trabajarla en la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La competencia Ética y Ciudadana es transversal a todas las áreas. Se desarrolla en situaciones reales de toma de decisiones, participación y análisis crítico, no como contenido aislado."
    },
    {
        id: 112,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza dictados como evaluación semanal. Una estudiante con hipótesis silábica obtiene siempre 'I'. ¿Cuál es el error pedagógico de la maestra?",
        opciones: [
            "No hay error, el dictado es una herramienta objetiva.",
            "Usar un instrumento que no es coherente con el nivel de construcción de la estudiante y que no evidencia sus avances; debe diversificar instrumentos, valorar el proceso y trabajar desde el nivel actual.",
            "Debe hacer dictados más fáciles.",
            "Debe eximir a la estudiante de los dictados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Ordenanza 04-2023. La evaluación debe ser coherente con el enfoque de enseñanza y el nivel de construcción del estudiante. El dictado como instrumento único invisibiliza los avances reales."
    },
    {
        id: 113,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 5to grado inicia el año con un grupo que 'tiene mala fama'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Imponer disciplina estricta desde el primer día para 'dominarlos'.",
            "Conocer al grupo sin prejuicios, construir vínculos de confianza, establecer participativamente los acuerdos de convivencia, y generar experiencias pedagógicas significativas que reconstruyan la identidad del grupo.",
            "Pedir al director que la cambien de grupo.",
            "Tratarlos con distancia y frialdad para 'mantener el control'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. Las etiquetas estigmatizan y reproducen dinámicas negativas. La construcción positiva del grupo desde vínculos, acuerdos y experiencias significativas transforma las dinámicas."
    },
    {
        id: 114,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado debe justificar ante el distrito educativo los indicadores asignados. ¿Qué documentación debe presentar?",
        opciones: [
            "Solo los exámenes finales de cada trimestre.",
            "El Registro de Grado completo con evidencias diversas (producciones, registros de observación, rúbricas, portafolios) que sustenten los indicadores de logro por competencia.",
            "Las calificaciones numéricas promediadas.",
            "Una lista con apreciaciones generales sin evidencias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Reglamentos institucionales. Los indicadores asignados deben sustentarse en evidencias sistemáticas documentadas en el Registro de Grado y otros instrumentos. La trazabilidad es una exigencia profesional y ética."
    },
    {
        id: 115,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado presta su cédula a un amigo para un trámite. El amigo la usa de forma indebida y aparece un reporte negativo. ¿Cuál es la lección profesional?",
        opciones: [
            "Negar toda responsabilidad ya que 'no fue ella' quien actuó.",
            "Asumir que la documentación personal es intransferible, presentar las explicaciones pertinentes ante las instancias, y mantener la debida diligencia en el uso de documentos oficiales.",
            "Culpar al amigo ante las autoridades sin admitir haber cedido la cédula.",
            "Ignorar el reporte y esperar que 'pase solo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La debida diligencia en el uso de documentos oficiales personales es parte de la ética del servidor público. La imprudencia documental tiene consecuencias profesionales y legales."
    },
    {
        id: 116,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado enseña Matemática. Debe seleccionar la estrategia para enseñar multiplicación. ¿Cuál es la secuencia correcta?",
        opciones: [
            "Hacer memorizar las tablas del 1 al 10 antes de trabajar el sentido.",
            "Construir el sentido de la multiplicación a partir de situaciones problema (agrupaciones, arreglos rectangulares, proporcionalidad), usar material concreto, progresar a representaciones y luego al algoritmo y memorización contextualizada.",
            "Dictar las tablas diariamente durante un mes.",
            "Enseñar el algoritmo escrito sin trabajar el sentido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La construcción del sentido de las operaciones precede al algoritmo. La memorización de tablas tiene sentido cuando el estudiante ha construido el concepto de multiplicación a partir de situaciones significativas."
    },
    {
        id: 117,
        categoria: "Inclusión",
        pregunta: "En 5to grado, un estudiante proveniente del campo tiene poco contacto con la tecnología. Le asignan una tarea que requiere investigación en internet. ¿Qué debe hacer la maestra?",
        opciones: [
            "Bajarle la nota por no cumplir con la tarea.",
            "Diversificar las formas de investigación (libros, revistas, entrevistas, fuentes locales), garantizar acceso a recursos en el centro cuando sea posible, y no dar por supuesto el acceso tecnológico domiciliario.",
            "Eximirlo de toda investigación hasta que 'aprenda tecnología'.",
            "Asignarle un compañero que 'haga la tarea por él'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03 (principio de equidad). Dar por supuesto el acceso tecnológico domiciliario reproduce inequidades. La diversificación de fuentes y el apoyo desde el centro son estrategias inclusivas."
    },
    {
        id: 118,
        categoria: "Convivencia",
        pregunta: "En 3er grado, tras un conflicto entre dos estudiantes, la maestra implementa prácticas restaurativas. ¿Cuál es el propósito de estas prácticas?",
        opciones: [
            "Determinar culpables y aplicar sanciones.",
            "Restaurar los vínculos afectados, reconocer el daño, elaborar acuerdos de reparación, fortalecer la empatía y reconstruir la convivencia mediante el diálogo y la responsabilidad asumida.",
            "Humillar a los involucrados para que 'no repitan'.",
            "Ignorar el conflicto y 'dar vuelta a la página'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. Las prácticas restaurativas priorizan la reparación del vínculo sobre el castigo, el reconocimiento del daño, la responsabilidad asumida y la reconstrucción de la convivencia desde la empatía."
    },
    {
        id: 119,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra realiza un proyecto de producción de cuentos de autoría propia. ¿Cuál es la secuencia didáctica correcta?",
        opciones: [
            "Pedirles que escriban un cuento largo sin preparación previa.",
            "Trabajar lectura modelo de cuentos del género, analizar sus características, planificar la escritura, textualizar, revisar, editar y publicar/socializar, valorando cada etapa.",
            "Dictarles un cuento modelo para que lo copien.",
            "Pedirles que inventen un cuento oral sin escribirlo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Adecuación Curricular 2023. La producción textual es un proceso que incluye planificación, textualización, revisión, edición y socialización, precedido por el trabajo con modelos del género."
    },
    {
        id: 120,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado integra la autoevaluación como parte del proceso. Un estudiante se autoevalúa con 'L' mientras su desempeño evidencia 'EP'. ¿Cómo debe proceder?",
        opciones: [
            "Aceptar la autoevaluación sin diálogo para 'respetar la opinión del estudiante'.",
            "Dialogar con el estudiante sobre los criterios, mostrar evidencias concretas de su trabajo, acompañarlo en reconocer sus fortalezas y aspectos a mejorar, construyendo juntos una valoración fundamentada.",
            "Descalificar la autoevaluación y decirle que 'no sabe evaluarse'.",
            "Asignar la nota que ella considera y desestimar la del estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La autoevaluación es un proceso formativo que se acompaña docentemente. Las discrepancias son oportunidades de diálogo evaluativo y desarrollo de metacognición, no de descalificación."
    },

    // ========================================================================
    // BLOQUE 7 (121-160): Casos variados
    // ========================================================================
    {
        id: 121,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado planifica el inicio del año escolar. Muchos estudiantes lloran por la separación. ¿Cuál es el enfoque correcto de esas primeras semanas?",
        opciones: [
            "Exigir que 'se comporten como niños grandes' y no lloren.",
            "Diseñar un período de adaptación con rutinas claras, actividades lúdicas, acogida afectiva, comunicación con las familias, y progresiva introducción de la cultura escolar.",
            "Iniciar con evaluaciones diagnósticas escritas para 'saber qué saben'.",
            "Mantener a los estudiantes en silencio absoluto para 'acostumbrarlos'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. El período de adaptación en 1er grado es fundamental. La acogida emocional, las rutinas y la articulación familia-escuela son claves para una transición saludable."
    },
    {
        id: 122,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado descubre que un colega copia las planificaciones de otros docentes sin adaptarlas al contexto de su grupo. ¿Cuál es la actuación correcta?",
        opciones: [
            "Imitar la práctica del colega para 'ahorrar tiempo'.",
            "Mantener su compromiso ético con la planificación contextualizada y, si corresponde, apoyar al colega compartiendo estrategias profesionales de planificación.",
            "Reportar al colega públicamente ante los padres.",
            "Ignorar la situación y no involucrarse."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Adecuación Curricular 2023. La planificación es una responsabilidad profesional contextualizada. La ética profesional incluye el apoyo colegiado y el modelaje de buenas prácticas."
    },
    {
        id: 123,
        categoria: "Inclusión",
        pregunta: "En 4to grado, la maestra debe adecuar su aula para un estudiante con discapacidad visual (ceguera total). ¿Qué adecuaciones corresponden?",
        opciones: [
            "Ninguna adecuación específica, solo 'paciencia' con el estudiante.",
            "Adecuaciones de acceso: material en braille o digital adaptado, descripción verbal de imágenes, orientación espacial del aula, apoyo de tiflotecnología, coordinación con equipos especializados del distrito.",
            "Eximirlo de todas las actividades visuales.",
            "Enviarlo a un centro de educación especial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los estudiantes con discapacidad visual requieren adecuaciones de acceso específicas (materiales adaptados, descripción verbal, tecnologías de apoyo) y coordinación con equipos especializados."
    },
    {
        id: 124,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 2do grado observa que una estudiante siempre llega tarde al aula. ¿Cuál es la actuación correcta?",
        opciones: [
            "Cerrar la puerta y no dejarla entrar cuando llegue tarde.",
            "Indagar las causas de la tardanza (posibles dificultades familiares, logísticas), conversar respetuosamente con la familia, y buscar juntos soluciones sin perjudicar a la niña.",
            "Avergonzarla públicamente cada vez que llegue tarde.",
            "Bajarle la nota por las tardanzas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la educación) y Manual de Convivencia. Las tardanzas pueden tener múltiples causas. La indagación respetuosa y la búsqueda de soluciones con la familia son la vía correcta."
    },
    {
        id: 125,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado debe valorar la competencia 'Desarrollo Personal y Espiritual'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Aplicar un examen escrito sobre valores.",
            "Valorar mediante observación de actitudes, comportamientos, producciones reflexivas, autoevaluación y coevaluación en situaciones auténticas del aula y la comunidad.",
            "No evaluar esta competencia porque 'no es académica'.",
            "Asignar 'L' a todos sin evidencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Adecuación Curricular 2023. Las competencias personales y espirituales se evidencian en situaciones auténticas mediante observación, reflexión y autoevaluación acompañada."
    },
    {
        id: 126,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra trabaja la lectura en voz alta del docente como práctica diaria. ¿Cuál es el propósito central de esta práctica?",
        opciones: [
            "Hacer que los niños copien las palabras que escuchan.",
            "Modelar la lectura fluida y expresiva, introducir a los estudiantes en la cultura letrada, ampliar su vocabulario, enriquecer su imaginario y formar oyentes activos.",
            "Ocupar el tiempo cuando no hay actividad planificada.",
            "Evaluar la atención de los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La lectura en voz alta del docente es una práctica didáctica clave de la alfabetización inicial: modela, enriquece, forma comunidad lectora e introduce en la cultura escrita."
    },
    {
        id: 127,
        categoria: "Convivencia",
        pregunta: "En 6to grado, durante la clase, un estudiante imita a la maestra burlonamente mientras ella enseña. El grupo se ríe. ¿Cuál es la reacción profesional correcta?",
        opciones: [
            "Gritarle y sacarlo del aula inmediatamente.",
            "Mantener la calma, no reaccionar emocionalmente, retomar la clase, y al final abordar la situación con el estudiante y el grupo desde el diálogo y los acuerdos de convivencia.",
            "Imitarlo de vuelta para 'darle una lección'.",
            "Ignorar permanentemente al estudiante por el resto del año."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Orden Departamental 22-2023. La regulación emocional docente es parte del profesionalismo. El abordaje dialogado posterior, desde los acuerdos de convivencia, es más eficaz que la reacción inmediata."
    },
    {
        id: 128,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado planifica el trabajo con el área de Educación Artística integrada. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Usar el área solo como 'relleno' para cuando sobre tiempo.",
            "Planificar el área con rigor didáctico, articulada con otras áreas cuando corresponda, desarrollando sus competencias específicas (expresión, apreciación, creación) con indicadores claros.",
            "Dejar que los estudiantes 'hagan lo que quieran' sin orientación.",
            "Sustituir Educación Artística por más horas de Matemática y Lengua."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La Educación Artística es un área curricular con competencias propias y aporte fundamental al desarrollo integral. Merece planificación rigurosa y valoración profesional."
    },
    {
        id: 129,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 2do grado recibe a un estudiante con claros signos de fatiga extrema que dice 'dormirse en clase'. Al indagar, el niño menciona que 'trabaja en la noche' con sus padres. ¿Qué corresponde hacer?",
        opciones: [
            "Permitirle dormir en el aula para 'recuperarse'.",
            "Notificar inmediatamente al equipo de orientación y dirección para activar el protocolo ante sospecha de trabajo infantil, conforme a la Ley 136-03 y los convenios internacionales ratificados por el país.",
            "Preguntarle más detalles al niño para 'comprender mejor'.",
            "Bajarle la nota por su falta de atención."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos sobre trabajo infantil) y Convenios OIT ratificados. El trabajo infantil que afecta la educación y desarrollo del niño es una forma de vulneración que exige notificación institucional y referimiento al CONANI."
    },
    {
        id: 130,
        categoria: "Inclusión",
        pregunta: "En 5to grado, una estudiante tiene diagnóstico reciente de cáncer infantil y deberá recibir tratamientos que la ausentarán periódicamente. ¿Cuál es la actuación correcta?",
        opciones: [
            "Dar por perdido el año académico de la estudiante.",
            "Coordinar con la familia y el equipo médico un plan de continuidad pedagógica (atención domiciliaria o hospitalaria cuando aplique), adecuar indicadores y tiempos, garantizar la inclusión social y emocional del grupo.",
            "Dejar que la estudiante 'se recupere' y repita el año.",
            "Enviarle tareas normales sin ajuste alguno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. Los estudiantes con enfermedades crónicas tienen derecho a la continuidad educativa mediante modalidades alternativas (pedagogía hospitalaria, domiciliaria) cuando aplique, y adecuaciones correspondientes."
    },
    {
        id: 131,
        categoria: "Evaluación",
        pregunta: "En 3er grado, la maestra diseña una evaluación oral individual. Un estudiante con ansiedad social presenta bloqueo. ¿Cómo debe adecuar?",
        opciones: [
            "Exigir la evaluación oral 'como a todos' para no 'consentirlo'.",
            "Ofrecer formatos alternativos (evaluación oral en pequeño grupo, grabación audio/video en su casa, evaluación escrita equivalente) que permitan evidenciar el aprendizaje sin ser bloqueado por la ansiedad.",
            "Eximirlo totalmente de la evaluación.",
            "Colocarle 'I' por no haber respondido oralmente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ordenanza 04-2023. Los formatos evaluativos deben diversificarse para eliminar barreras. La evaluación debe permitir evidenciar lo aprendido, no ser una barrera adicional."
    },
    {
        id: 132,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado recibe un regalo de fin de año de sus estudiantes (una colecta voluntaria). ¿Cuál es la actuación ética correcta?",
        opciones: [
            "Aceptar sin más el regalo, independientemente de su valor.",
            "Valorar el afecto del grupo pero verificar que se trate de un gesto simbólico y colectivo, sin presiones económicas a las familias, y actuar conforme a las normas institucionales sobre obsequios.",
            "Exigir que todos los padres aporten la misma cantidad.",
            "Rechazar cualquier gesto de afecto por 'profesionalismo extremo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Los gestos simbólicos y colectivos pueden ser aceptables. Sin embargo, el docente debe velar porque no haya presiones económicas a las familias ni conflictos con la normativa institucional."
    },
    {
        id: 133,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado planifica las transiciones entre actividades. ¿Cuál es la importancia de este aspecto?",
        opciones: [
            "Ninguna, las transiciones no son parte de la planificación.",
            "Las transiciones bien planificadas optimizan el tiempo didáctico, reducen el caos, permiten la autorregulación de los estudiantes y mantienen la continuidad pedagógica.",
            "Sólo deben ser consideradas si 'el grupo es indisciplinado'.",
            "Las transiciones deben ser rígidas y en silencio absoluto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las transiciones son momentos pedagógicos que requieren intencionalidad, estructura y cuidado. Optimizan tiempo y favorecen autorregulación."
    },
    {
        id: 134,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra trabaja la diversidad textual. Un estudiante pregunta qué es 'una noticia'. ¿Cuál es la estrategia didáctica correcta?",
        opciones: [
            "Dictar una definición para que la memorice.",
            "Presentar noticias auténticas, analizar su estructura y función social, proponer la producción propia de una noticia sobre un evento real del aula o la comunidad.",
            "Pedirle que lea el diccionario.",
            "Ignorar la pregunta y continuar con la actividad del libro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La enseñanza de los tipos textuales parte del contacto con textos auténticos, el análisis funcional y la producción propia en contextos significativos."
    },
    {
        id: 135,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 5to grado observa que en los trabajos grupales, un estudiante siempre asume todo el trabajo y otros se aprovechan. ¿Cuál es la estrategia correcta?",
        opciones: [
            "Calificar a todos por igual ya que 'el trabajo es grupal'.",
            "Estructurar el trabajo con roles específicos y rotativos, responsabilidad individual evidenciable, coevaluación entre pares y valoración combinada (grupal e individual).",
            "Eliminar los trabajos grupales por completo.",
            "Calificar solo al estudiante trabajador y castigar a los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El trabajo cooperativo efectivo requiere estructura con roles, responsabilidad individual y evaluación combinada. Es un aprendizaje que se enseña intencionalmente."
    },
    {
        id: 136,
        categoria: "Inclusión",
        pregunta: "En 4to grado, un estudiante afrodescendiente recibe comentarios discriminatorios sobre su cabello. ¿Qué debe hacer la maestra?",
        opciones: [
            "Decirle al estudiante que 'no haga caso' para no 'darle importancia'.",
            "Abordar explícitamente la situación desde el principio de no discriminación, trabajar la diversidad étnica y cultural en el aula, intervenir con los estudiantes emisores de comentarios, y activar protocolos de convivencia si se reitera.",
            "Pedirle al estudiante que 'se peine diferente' para evitar comentarios.",
            "Ignorar la situación porque 'los niños se molestan entre sí'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (no discriminación), Constitución y Ordenanza 05-2024. El racismo es una forma de discriminación que requiere intervención pedagógica explícita, no minimización ni responsabilización de la víctima."
    },
    {
        id: 137,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado planifica la devolución individual de resultados a cada estudiante. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Entregar la nota en privado sin comentarios adicionales.",
            "Dialogar individualmente sobre el proceso, reconocer avances, identificar conjuntamente aspectos a mejorar, acordar acciones específicas, y promover la autogestión del aprendizaje.",
            "Leer las notas en público para que 'todos sepan'.",
            "Evitar la devolución para no 'perder tiempo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La devolución formativa individualizada es una práctica evaluativa de alto impacto. Articula autoconocimiento, metacognición y autorregulación del aprendizaje."
    },
    {
        id: 138,
        categoria: "Convivencia",
        pregunta: "En 3er grado, la maestra crea un 'rincón de la calma' para que los estudiantes regulen emociones difíciles. ¿Cuál es el sentido pedagógico?",
        opciones: [
            "Un lugar de castigo donde enviar a los estudiantes 'revoltosos'.",
            "Un espacio intencionalmente diseñado para la autorregulación emocional, accesible a los estudiantes cuando lo necesitan, con herramientas (respiración, mandalas, libros, cojín) que favorecen la calma y la reflexión.",
            "Un lugar solo para premiar a los estudiantes de buen comportamiento.",
            "Un espacio decorativo sin función pedagógica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (dimensión socioemocional) y Manual de Convivencia. El rincón de la calma es un dispositivo pedagógico para la autorregulación, no un espacio de castigo."
    },
    {
        id: 139,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado recibe una circular del distrito sobre una jornada especial. Debe ajustar su planificación. ¿Cuál es la respuesta profesional correcta?",
        opciones: [
            "Desechar la jornada oficial y continuar con lo planificado.",
            "Integrar la jornada en la planificación mediante articulaciones pedagógicas coherentes con los contenidos en curso, ajustando tiempos y aprovechando la temática como contexto de aprendizaje.",
            "Suspender toda actividad regular 'solo por ese día'.",
            "Ignorar la circular por considerarla un 'distractor'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Reglamentos institucionales. Las jornadas oficiales son oportunidades de integración curricular, no distractores. La planificación es flexible e integra estas temáticas con los aprendizajes en curso."
    },
    {
        id: 140,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado descubre que en el centro hay una práctica informal de 'quedarse' con útiles escolares sobrantes de los estudiantes. ¿Cuál es la actuación ética correcta?",
        opciones: [
            "Sumarse a la práctica porque 'todos lo hacen'.",
            "Abstenerse de la práctica, notificar institucionalmente la situación si corresponde, y promover una cultura de uso correcto de los recursos de los estudiantes y del centro.",
            "Denunciar públicamente a las colegas ante los padres.",
            "Ignorar la situación para 'llevarse bien' con las colegas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La apropiación de bienes ajenos, aún pequeños, es una falta ética. El docente debe abstenerse y promover institucionalmente una cultura de integridad."
    },

    // Archivo parcial - 140 preguntas de 400
    // Pendiente: 141-400


  // ========================================================================
    // BLOQUE 8 (141-180): Casos variados
    // ========================================================================
    {
        id: 141,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado trabaja una unidad sobre 'Los animales'. Un estudiante trae una iguana al aula. ¿Cuál es la mejor decisión pedagógica?",
        opciones: [
            "Pedirle que la retire porque 'no está en la planificación'.",
            "Aprovechar pedagógicamente el recurso vivo integrándolo como contexto auténtico de observación científica, articulando con los indicadores previstos y enriqueciendo la situación de aprendizaje.",
            "Permitir la iguana solo 5 minutos y luego retomar el libro.",
            "Llamar a los padres para que retiren al animal del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación por competencias es flexible e integra los emergentes pedagógicos significativos. Un recurso vivo es una oportunidad auténtica para el aprendizaje indagativo."
    },
    {
        id: 142,
        categoria: "Evaluación",
        pregunta: "La maestra de 4to grado aplica una prueba de Ciencias Sociales. Un estudiante con dislexia no entiende las preguntas por la forma escrita. ¿Qué debe hacer?",
        opciones: [
            "Dejar que 'se esfuerce' sin ayuda.",
            "Aplicar la adecuación de acceso prevista: leerle las preguntas en voz alta, dar tiempo adicional, permitir respuestas orales si procede, manteniendo los indicadores de logro.",
            "Aplicarle una prueba diferente con contenidos más sencillos.",
            "Eximirlo de la evaluación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ordenanza 04-2023. Las adecuaciones de acceso eliminan barreras sin modificar los indicadores. Son un derecho documentado del estudiante con dificultades específicas."
    },
    {
        id: 143,
        categoria: "Inclusión",
        pregunta: "En 5to grado, un estudiante de familia evangélica se niega a participar en una actividad escolar sobre Carnaval. ¿Qué debe hacer la maestra?",
        opciones: [
            "Obligarlo a participar como castigo por 'no integrarse'.",
            "Dialogar respetuosamente con la familia, ofrecer alternativas pedagógicas equivalentes que respeten sus convicciones y mantengan el logro de los indicadores (ej. investigación sobre el Carnaval sin participación ritual).",
            "Eximirlo del aprendizaje relacionado con el tema.",
            "Presentar su decisión ante el grupo como 'falta de integración'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución (libertad de culto), Ley 136-03 y Ordenanza 05-2024. La diversidad religiosa se respeta mediante alternativas pedagógicas equivalentes, no mediante imposición ni exención total."
    },
    {
        id: 144,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado detecta que un estudiante cometió plagio en un trabajo copiando de internet. ¿Cuál es la actuación pedagógicamente correcta?",
        opciones: [
            "Colocarle 'I' automáticamente y humillarlo ante el grupo.",
            "Conversar en privado con el estudiante sobre la propiedad intelectual y la honestidad académica, enseñarle a citar fuentes, ofrecer una nueva oportunidad de producción auténtica y registrar formativamente la situación.",
            "Informar a todos los padres del grupo sobre el caso.",
            "Anular todas sus calificaciones del trimestre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Manual de Convivencia. El plagio es oportunidad formativa para enseñar honestidad académica y manejo ético de la información, no ocasión de humillación pública."
    },
    {
        id: 145,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra nota que varios estudiantes quieren 'escribir' pero saben que no escriben convencionalmente. ¿Qué debe hacer?",
        opciones: [
            "Decirles que 'todavía no pueden escribir' hasta que aprendan las letras.",
            "Promover la escritura espontánea con sus hipótesis actuales, legitimar sus producciones, analizar con ellos lo escrito, y diseñar intervenciones para avanzar en los niveles de construcción.",
            "Copiarles las palabras para que ellos las calquen.",
            "Postergar toda escritura hasta 2do grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La escritura espontánea es una práctica fundamental desde el inicio de 1er grado. Las hipótesis de los estudiantes evidencian sus niveles de construcción y orientan la intervención."
    },
    {
        id: 146,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 3er grado nota que algunos estudiantes terminan siempre antes y otros se quedan rezagados. ¿Cuál es la estrategia correcta?",
        opciones: [
            "Hacer esperar a los que terminan hasta que todos terminen.",
            "Diseñar actividades escalonadas (tareas de ampliación para quienes terminan, andamios específicos para quienes necesitan más apoyo), respetando ritmos sin detener avances.",
            "Apurar a los rezagados públicamente para que 'se pongan al día'.",
            "Dejar salir al recreo a los que terminan primero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 05-2024. La atención a la diversidad incluye diferentes ritmos de aprendizaje. Las actividades escalonadas respetan esos ritmos sin detener avances ni presionar punitivamente."
    },
    {
        id: 147,
        categoria: "Convivencia",
        pregunta: "En 4to grado, dos grupos del curso se han formado y compiten agresivamente. La tensión afecta el clima. ¿Qué debe hacer la maestra?",
        opciones: [
            "Ignorar la situación porque 'los grupos son normales'.",
            "Trabajar intencionalmente la cohesión grupal mediante dinámicas, reorganización de equipos heterogéneos rotativos, proyectos que requieran colaboración entre todos, y reflexión sobre la diversidad como valor.",
            "Eliminar los recreos hasta que 'se comporten bien'.",
            "Sancionar al grupo 'más problemático'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. La cohesión grupal se construye intencionalmente mediante experiencias compartidas y diversificación de interacciones, no mediante sanciones ni indiferencia."
    },
    {
        id: 148,
        categoria: "Protección Infantil",
        pregunta: "Durante una reunión de padres, un padre habla de forma agresiva a la maestra delante del grupo. ¿Cuál es la actuación correcta?",
        opciones: [
            "Responder al padre con el mismo tono para 'defenderse'.",
            "Mantener la calma profesional, proponer retomar la conversación en privado, si la agresividad persiste pedir apoyo a dirección y documentar formalmente el hecho para su manejo institucional.",
            "Llamar a la policía inmediatamente ante el grupo.",
            "Ceder a todas las exigencias del padre para 'evitar conflicto'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Manual de Convivencia. El profesionalismo incluye manejo de situaciones difíciles con adultos. La contención, el encuadre privado y el apoyo institucional son las vías correctas."
    },
    {
        id: 149,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado recibe el listado de estudiantes el primer día. ¿Qué información debe priorizar para su planificación?",
        opciones: [
            "Solo las calificaciones del año anterior.",
            "Información integral: antecedentes pedagógicos, condiciones de salud relevantes, adecuaciones vigentes, situaciones socioemocionales conocidas, intereses y saberes previos del grupo.",
            "Solo los nombres de los estudiantes y nada más.",
            "El listado de 'estudiantes problemáticos' de años anteriores."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 05-2024. El conocimiento integral del grupo es base de la planificación pertinente. Se incluyen dimensiones pedagógicas, de salud, socioemocionales y de intereses."
    },
    {
        id: 150,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado debe elaborar el informe escrito a las familias al final del trimestre. ¿Cuál es la estructura adecuada?",
        opciones: [
            "Solo una tabla con los indicadores (L, EP, I) sin explicación.",
            "Un informe descriptivo por competencias que incluya fortalezas, aspectos en proceso, evidencias concretas del desempeño y recomendaciones específicas para el acompañamiento familiar.",
            "Un reporte de comportamiento y asistencia únicamente.",
            "Comparaciones con otros estudiantes del grupo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Los informes a familias deben ser descriptivos, centrados en el estudiante, evidenciales y orientadores, promoviendo la corresponsabilidad educativa sin comparaciones."
    },
    {
        id: 151,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra trabaja producción de textos. Ante la consigna, un estudiante dice 'no sé qué escribir'. ¿Cuál es la estrategia correcta?",
        opciones: [
            "Decirle que 'piense mejor' y esperar en silencio.",
            "Apoyar el proceso de planificación del texto mediante preguntas orientadoras, lluvia de ideas, modelaje del pensamiento escritor, uso de organizadores gráficos y recuperación de experiencias previas.",
            "Dictarle qué debe escribir.",
            "Darle el texto ya hecho para que lo copie."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La planificación textual es una fase del proceso de escritura que se enseña explícitamente mediante andamios y modelaje. El bloqueo es oportunidad didáctica, no problema del estudiante."
    },
    {
        id: 152,
        categoria: "Inclusión",
        pregunta: "En 3er grado hay un estudiante con TDAH que toma medicación. Un día llega sin haberla tomado y muestra alta agitación. ¿Qué debe hacer la maestra?",
        opciones: [
            "Regañarlo por su agitación y bajarle la nota.",
            "Contactar a la familia para coordinar el manejo, aplicar las estrategias pedagógicas previstas para regular su participación, ajustar las actividades para que pueda aprender, y registrar la situación.",
            "Enviarlo a la dirección por 'indisciplina'.",
            "Aislarlo del resto del grupo hasta que 'se calme'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las condiciones de salud que impactan el aprendizaje requieren coordinación familia-escuela y estrategias pedagógicas específicas, no sanciones por síntomas de la condición."
    },
    {
        id: 153,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado es invitada a un almuerzo pagado por una editorial que busca promover sus textos. ¿Cuál es la actuación correcta?",
        opciones: [
            "Aceptar la invitación porque 'es solo un almuerzo'.",
            "Declinar la invitación por el potencial conflicto de intereses, informar a la dirección si corresponde, y mantener las decisiones pedagógicas libres de influencias comerciales.",
            "Aceptar pero prometer no recomendar los textos.",
            "Aceptar e invitar también a otras colegas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El conflicto de intereses incluye invitaciones que puedan condicionar decisiones profesionales. La independencia de criterio es un valor ético central del servidor docente."
    },
    {
        id: 154,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado planifica actividades lúdicas integradas. Un supervisor le dice que 'el juego no es serio en la escuela'. ¿Cuál es su respuesta profesional?",
        opciones: [
            "Eliminar el juego y hacer solo actividades escritas 'serias'.",
            "Fundamentar que el juego es una estrategia didáctica válida y central en el Nivel Primario, especialmente en los primeros grados, y presentar cómo se articula con las competencias e indicadores del currículo.",
            "Aceptar la crítica sin argumentos profesionales.",
            "Usar el juego solo en el tiempo libre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. El juego es una estrategia didáctica central reconocida por el currículo, especialmente en los primeros grados del Nivel Primario, articulada con todas las competencias."
    },
    {
        id: 155,
        categoria: "Gestión de Aula",
        pregunta: "En 4to grado, varios estudiantes están cansados y distraídos después del almuerzo. ¿Cuál es la estrategia más adecuada?",
        opciones: [
            "Exigirles concentración máxima igual que en la primera hora.",
            "Diseñar actividades post-almuerzo que activen el cuerpo y la atención (dinámicas, actividades manipulativas, trabajo colaborativo), adaptando la secuencia al ritmo biológico del grupo.",
            "Dejarlos 'descansar' sin actividad alguna durante una hora.",
            "Castigarlos si se distraen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación debe considerar los ritmos biológicos y cognitivos del grupo. Las actividades activas post-almuerzo son estrategias reconocidas de manejo pedagógico."
    },
    {
        id: 156,
        categoria: "Convivencia",
        pregunta: "En 5to grado, la maestra implementa asambleas semanales de aula. ¿Cuál es el propósito central?",
        opciones: [
            "Un tiempo para que la maestra dé anuncios.",
            "Un espacio democrático donde los estudiantes expresen ideas, analicen situaciones del aula, propongan soluciones y construyan colectivamente la convivencia, desarrollando competencias ciudadanas.",
            "Un tiempo para que se quejen 'unos de otros'.",
            "Una actividad opcional sin estructura."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. Las asambleas de aula son dispositivos pedagógicos que desarrollan competencias ciudadanas mediante la participación democrática real."
    },
    {
        id: 157,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado quiere verificar si sus estudiantes comprendieron un texto leído. ¿Cuál es la estrategia más completa?",
        opciones: [
            "Aplicar un cuestionario con preguntas literales al pie de la letra.",
            "Combinar preguntas de distinto nivel (literales, inferenciales, críticas), actividades de reelaboración (resumen, mapa conceptual, dibujo explicativo) y diálogo sobre conexiones con su experiencia.",
            "Pedirles un resumen largo del texto.",
            "Pedirles que memoricen el texto completo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Ordenanza 04-2023. La comprensión lectora implica múltiples niveles (literal, inferencial, crítico) y se evalúa con diversidad de estrategias, no solo cuestionarios literales."
    },
    {
        id: 158,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 4to grado observa que una estudiante lleva semanas con la misma ropa sucia y huele mal. Los compañeros se burlan. ¿Cuál es la actuación correcta?",
        opciones: [
            "Llamar la atención a la estudiante públicamente por su higiene.",
            "Intervenir con los compañeros contra las burlas, abordar la situación con privacidad y dignidad, coordinar con orientación y la familia para comprender las causas, y activar apoyos institucionales si hay negligencia.",
            "Expulsarla temporalmente 'hasta que se presente limpia'.",
            "Ignorar la situación porque 'es asunto familiar'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia. La dignidad del niño se protege. Las condiciones materiales difíciles pueden ser indicio de negligencia y requieren intervención institucional sensible, no exposición pública."
    },
    {
        id: 159,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, una familia pregunta 'cuándo va a saber leer' su hijo. ¿Cuál es la respuesta profesional correcta?",
        opciones: [
            "'En Navidad tiene que saber, si no va a repetir'.",
            "Explicar que la alfabetización es un proceso que se extiende a lo largo del Primer Ciclo del Nivel Primario, mostrar el nivel actual del niño, compartir las acciones pedagógicas y sugerir prácticas familiares de alfabetización.",
            "'No se preocupe, eso viene con el tiempo'.",
            "'Usted debería enseñarle en casa con planas'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La comunicación con las familias debe ser profesional, basada en evidencias, reconocer el carácter procesual de la alfabetización y promover la corresponsabilidad."
    },
    {
        id: 160,
        categoria: "Inclusión",
        pregunta: "En 2do grado, un estudiante es mayor que sus compañeros (9 años) por haber repetido. Se siente diferente y se aísla. ¿Qué debe hacer la maestra?",
        opciones: [
            "Tratarlo como 'ejemplo negativo' para que los demás no repitan.",
            "Reconocer sus fortalezas, ofrecerle roles que potencien su liderazgo positivo, acompañarlo socioemocionalmente en coordinación con orientación, y trabajar con el grupo la diversidad de trayectorias.",
            "Ignorar su aislamiento social.",
            "Cambiarlo al grupo de 3ro sin evaluación pedagógica previa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La atención a trayectorias educativas diversas incluye fortalecer la autoestima, ofrecer roles positivos y trabajar la inclusión social en el grupo."
    },
    {
        id: 161,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica la 'investigación-acción' como estrategia. Un estudiante pregunta 'por qué investigar algo del barrio'. ¿Cuál es la fundamentación correcta?",
        opciones: [
            "'Porque lo dice el libro'.",
            "Explicar que la investigación contextualizada conecta los aprendizajes con la realidad, desarrolla competencias ciudadanas, promueve el pensamiento crítico y produce conocimiento con impacto en la comunidad.",
            "'Porque no hay otros temas disponibles'.",
            "'Porque es más fácil que investigar otras cosas'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La investigación-acción articula aprendizaje, ciudadanía y transformación de la realidad inmediata, coherente con el enfoque por competencias."
    },
    {
        id: 162,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado aplica una evaluación y detecta que un estudiante 'regala' respuestas a su compañero durante la prueba. ¿Cuál es la actuación correcta?",
        opciones: [
            "Gritarle públicamente y anular su examen.",
            "Detener discretamente la práctica en el momento, conversar en privado con ambos estudiantes al finalizar sobre la ética académica, documentar la situación y diseñar una evaluación de reemplazo o complementaria.",
            "Prohibir a ambos hablarse durante el resto del año.",
            "Informar del hecho en la siguiente reunión de padres delante de todos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Orden Departamental 22-2023. Las situaciones de integridad académica se abordan con discreción, formación ética y oportunidades de corrección, no mediante humillación pública."
    },
    {
        id: 163,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado es invitada por la familia de una estudiante al cumpleaños de la niña. ¿Cuál es la consideración ética correcta?",
        opciones: [
            "Aceptar sin reservas, es un gesto social.",
            "Valorar el invite pero considerar los límites éticos de la relación docente-familia: distinguir el rol profesional de amistades personales, evitar favoritismos y actuar con transparencia.",
            "Aceptar y llevar un regalo muy costoso como reciprocidad.",
            "Rechazar cualquier relación con familias por 'extremo profesionalismo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La relación docente-familia tiene límites profesionales. Los vínculos personales deben evitarse o manejarse con transparencia para no afectar la imparcialidad."
    },
    {
        id: 164,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 3er grado tiene un aula con pocos materiales. ¿Cuál es el enfoque correcto frente a esta limitación?",
        opciones: [
            "Quejarse con los padres y pedirles todos los materiales.",
            "Optimizar los recursos disponibles, generar materiales con objetos del entorno, promover la creatividad en las propuestas, y canalizar institucionalmente las necesidades sin trasladar la carga a las familias.",
            "Limitar las actividades y dar solo clases orales.",
            "Pedir a los estudiantes que no traigan nada y tampoco hacer nada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Orden Departamental 22-2023. La gestión pedagógica supera las limitaciones mediante creatividad. Las carencias se canalizan institucionalmente, no transfiriéndose a las familias."
    },
    {
        id: 165,
        categoria: "Convivencia",
        pregunta: "En 4to grado, un estudiante se niega repetidamente a seguir las instrucciones. La maestra pierde la paciencia. ¿Cuál es la regulación profesional correcta?",
        opciones: [
            "Castigarlo duramente 'para que aprenda'.",
            "Pausar, respirar, no reaccionar desde la emoción, buscar posteriormente en privado las causas de su oposición, reconstruir el vínculo y redefinir acuerdos concretos.",
            "Gritarle delante de todos.",
            "Expulsarlo del aula permanentemente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Orden Departamental 22-2023. La regulación emocional docente es competencia profesional. La oposición persistente requiere intervención relacional, no sancionatoria."
    },
    {
        id: 166,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza un registro sistemático del nivel de construcción de escritura de cada estudiante. ¿Cuál es la utilidad de este registro?",
        opciones: [
            "Calificar a cada estudiante y ordenarlos del mejor al peor.",
            "Fundamentar intervenciones pedagógicas diferenciadas, documentar avances en el proceso, informar a familias y orientación sobre el estado del grupo y cada estudiante.",
            "Usar la información como diagnóstico para 'eliminar' a los más rezagados.",
            "Solo archivarlo sin utilización pedagógica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El registro sistemático del nivel de construcción es herramienta pedagógica para fundamentar intervenciones diferenciadas y comunicar el proceso de alfabetización."
    },
    {
        id: 167,
        categoria: "Inclusión",
        pregunta: "En 6to grado, una estudiante viene de un contexto rural muy diferente. Tiene saberes valiosos sobre medicina tradicional y agricultura. ¿Cómo debe actuar la maestra?",
        opciones: [
            "Descartar sus saberes por 'no científicos'.",
            "Valorar y visibilizar sus saberes como conocimiento culturalmente legítimo, integrarlos en las situaciones de aprendizaje (Ciencias de la Naturaleza, Ciencias Sociales), promover el diálogo entre saberes.",
            "Limitarse a escuchar sus aportes sin integrarlos al currículo.",
            "Pedirle que 'no hable más de eso' en clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 05-2024. Los saberes culturales y tradicionales son riqueza educativa. El diálogo entre saberes enriquece el aprendizaje y respeta la diversidad cultural."
    },
    {
        id: 168,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 5to grado nota que un estudiante tiene marcas de dientes (mordeduras humanas) en el brazo. El niño dice que fue 'jugando'. ¿Cuál es la actuación correcta?",
        opciones: [
            "Aceptar la explicación del niño y no hacer más.",
            "Documentar lo observado con respeto y precisión, notificar al equipo de orientación y dirección para activar la evaluación del protocolo correspondiente, resguardando la confidencialidad e integridad del niño.",
            "Llamar inmediatamente a los padres para confrontarlos.",
            "Fotografiar las lesiones sin consentimiento y divulgarlas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Ante signos de posible maltrato, la notificación institucional y la activación del protocolo son obligatorias, aunque el niño ofrezca explicaciones alternativas. Se resguarda la integridad y confidencialidad."
    },
    {
        id: 169,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado planifica una unidad integrada sobre 'El agua'. ¿Cuál es la estructura correcta de la planificación?",
        opciones: [
            "Una lista de contenidos del libro de texto distribuidos en semanas.",
            "Situación de aprendizaje contextualizada, competencias específicas seleccionadas, indicadores de logro, experiencias/actividades articuladas, recursos, estrategias de evaluación y previsiones de atención a la diversidad.",
            "Solo los títulos de las lecciones y los ejercicios.",
            "Una planificación general del año sin secuencias específicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación por competencias integra situación de aprendizaje, competencias, indicadores, experiencias, recursos y evaluación, con previsiones de diversidad."
    },
    {
        id: 170,
        categoria: "Evaluación",
        pregunta: "La maestra de 4to grado aplica pruebas cada mes. Un padre se queja de que 'hay demasiadas pruebas'. ¿Cómo debe responder?",
        opciones: [
            "Eliminar todas las pruebas por la queja del padre.",
            "Explicar que la evaluación en el aula es procesual y cotidiana (observación, producciones, diálogos, rúbricas), y que las 'pruebas' son solo una de muchas fuentes de evidencia sobre el aprendizaje.",
            "Hacer pruebas escondidas sin que los padres se enteren.",
            "Aumentar las pruebas como desafío al padre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación formativa es procesual, cotidiana y multimodal. Las pruebas escritas son una entre múltiples fuentes de evidencia, no el centro del sistema evaluativo."
    },
    {
        id: 171,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado es amiga cercana de la madre de un estudiante. Debe calificar a ese estudiante al final del trimestre. ¿Cuál es la actuación correcta?",
        opciones: [
            "Favorecer al estudiante 'por la amistad'.",
            "Mantener absoluta transparencia en el proceso, basar la calificación en las mismas evidencias que para el resto del grupo, hacer explícita la situación ante la dirección si lo estima necesario.",
            "Pedir que otra colega califique a ese estudiante sin justificación.",
            "Ser especialmente dura con el estudiante para 'no parecer parcial'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La imparcialidad profesional exige mantener criterios uniformes. La amistad personal no debe generar ni favoritismo ni rigor excesivo; la transparencia es el principio rector."
    },
    {
        id: 172,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 1er grado establecerá el uso del tiempo en el aula. ¿Cuál es el principio correcto?",
        opciones: [
            "Dedicar la mayor parte del tiempo a actividades silenciosas de copia.",
            "Distribuir el tiempo equilibradamente entre momentos de instrucción directa, trabajo autónomo, colaborativo, lúdico y socioemocional, ajustado a las necesidades del grupo y de los aprendizajes.",
            "Priorizar únicamente Lengua y Matemática, reducir las otras áreas.",
            "No planificar el tiempo y hacer lo que surja."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La gestión del tiempo didáctico balancea distintos tipos de experiencias y áreas, respondiendo al desarrollo integral previsto en el currículo."
    },
    {
        id: 173,
        categoria: "Convivencia",
        pregunta: "En 3er grado, la maestra implementa el 'círculo de diálogo' para cerrar la jornada. ¿Cuál es el propósito pedagógico?",
        opciones: [
            "Un espacio para dar consejos a los estudiantes.",
            "Un ritual pedagógico donde los estudiantes expresan cómo se sintieron, qué aprendieron, qué agradecen y qué proponen, fortaleciendo comunidad, metacognición y desarrollo socioemocional.",
            "Un tiempo para que la maestra recapitule los contenidos.",
            "Una actividad opcional sin propósito claro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. Los círculos de diálogo son rituales pedagógicos que fortalecen comunidad, metacognición y regulación emocional en el aula."
    },
    {
        id: 174,
        categoria: "Inclusión",
        pregunta: "En 5to grado, una estudiante está en situación de embarazo adolescente. Algunos docentes sugieren 'que estudie desde su casa'. ¿Cuál es la postura correcta?",
        opciones: [
            "Apoyar la sugerencia de 'estudiar desde casa' para evitar molestias.",
            "Garantizar su derecho a continuar en el centro regular con las adecuaciones necesarias, articular con servicios de salud y orientación, y trabajar con la comunidad escolar la no estigmatización.",
            "Solicitar su expulsión del centro.",
            "Cambiarla a un 'turno especial' sin consulta a la familia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la educación, no discriminación) y Ordenanza 05-2024. La permanencia educativa es un derecho. La estigmatización y exclusión son inaceptables. La articulación con salud y orientación es obligatoria."
    },
    {
        id: 175,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra realiza sesiones de escritura en parejas. ¿Cuál es el sentido pedagógico?",
        opciones: [
            "Que los que saben 'ayuden' a los que no saben.",
            "Promover la conceptualización mediante la interacción entre hipótesis diferentes, la verbalización y la argumentación sobre el sistema de escritura, enriqueciendo el proceso constructivo de ambos.",
            "Hacer el trabajo más rápido porque son dos niños por tarea.",
            "Agrupar por amistad sin criterio pedagógico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La escritura en parejas con hipótesis próximas favorece el avance mediante la interacción, la verbalización de hipótesis y la argumentación, no es simple 'ayuda' mecánica."
    },
    {
        id: 176,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado debe comunicar a un padre que su hijo está en 'I' en Matemática. ¿Cuál es el enfoque comunicacional correcto?",
        opciones: [
            "'Su hijo es flojo y no pone atención'.",
            "Compartir la información con sensibilidad, mostrar evidencias concretas, reconocer las fortalezas del estudiante, explicar el plan de recuperación pedagógica y proponer acciones conjuntas familia-escuela.",
            "Comunicar la información por mensaje de texto sin explicación.",
            "Anunciar la calificación en reunión grupal de padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Ley 136-03. La comunicación evaluativa a familias es sensible, evidencial, constructiva y orientadora. La estigmatización y falta de privacidad vulneran derechos del niño y la ética profesional."
    },
    {
        id: 177,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 6to grado identifica señales de posible adicción en un estudiante (cambios de conducta, olor, pupilas). ¿Cuál es la actuación correcta?",
        opciones: [
            "Confrontarlo delante del grupo para que 'reaccione'.",
            "Notificar inmediatamente al equipo de orientación y dirección para activar el protocolo de atención, coordinar con la familia de manera sensible y articular con servicios de salud especializados.",
            "Hacerle una requisa inmediata en el aula.",
            "Expulsarlo del centro sin protocolo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia. Las adicciones en menores son problemas de salud que requieren abordaje interdisciplinar, articulación con familia y servicios de salud, no sanciones ni confrontaciones."
    },
    {
        id: 178,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado planifica un proyecto de feria científica. ¿Cuál es el enfoque pedagógico correcto?",
        opciones: [
            "Los estudiantes hacen sus proyectos en casa sin orientación y los presentan.",
            "Acompañar el proceso completo (identificación de preguntas, diseño de investigación, desarrollo, análisis, presentación), articular con competencias del currículo y evaluar proceso y producto.",
            "Solo los estudiantes 'más brillantes' participan.",
            "Reducir el proyecto a un cartel ilustrativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las ferias científicas son proyectos pedagógicos que se acompañan didácticamente. Son oportunidades de aprendizaje para todos los estudiantes con adecuaciones apropiadas."
    },
    {
        id: 179,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado encuentra una colega alterando indicadores de logro en el Registro de Grado. ¿Cuál es la actuación correcta?",
        opciones: [
            "Callar por lealtad gremial.",
            "Notificar formalmente la situación al director del centro, pues la alteración de registros oficiales es una falta grave que debe ser conocida por la instancia responsable.",
            "Confrontar a la colega públicamente.",
            "Alterar también los propios registros para 'igualar'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ordenanza 04-2023. Los registros oficiales son documentos con fe pública. Su alteración es falta grave. El deber ético del servidor es notificar institucionalmente."
    },
    {
        id: 180,
        categoria: "Gestión de Aula",
        pregunta: "En 1er grado, la maestra organiza los 'rincones de aprendizaje' en el aula. ¿Cuál es el propósito pedagógico?",
        opciones: [
            "Decorar el aula con espacios temáticos sin función.",
            "Ofrecer espacios especializados (biblioteca, matemáticas, arte, juego simbólico) donde los estudiantes trabajen de forma autónoma y diferenciada, favoreciendo múltiples formas de aprendizaje simultáneo.",
            "Separar a los estudiantes por 'nivel' de forma permanente.",
            "Usarlos solo como castigo cuando alguien se porta mal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los rincones de aprendizaje son espacios didácticos especializados que favorecen autonomía, diferenciación y múltiples formas de aprendizaje en simultáneo."
    },

 {
        id: 181,
        categoria: "Convivencia",
        pregunta: "En 5to grado, la maestra detecta un mensaje amenazante escrito en un pupitre dirigido a una compañera. ¿Cuál es la actuación correcta?",
        opciones: [
            "Borrarlo y continuar la clase como si no hubiera pasado nada.",
            "Documentar la evidencia, proteger a la estudiante afectada, activar el protocolo de convivencia contra el acoso, investigar con orientación y dirección de manera sensible, e intervenir pedagógicamente con el grupo.",
            "Interrogar a todos los estudiantes hasta encontrar al culpable.",
            "Comunicar solo a la familia de la víctima sin intervención institucional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Ley 136-03. Las amenazas son violencia. El protocolo institucional protege a la víctima y aborda integralmente la situación. La omisión es corresponsabilidad."
    },
    {
        id: 182,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, una familia pregunta por qué la maestra no 'enseña sílabas como antes'. ¿Cuál es la explicación profesional correcta?",
        opciones: [
            "Decir que 'así es ahora y ya'.",
            "Explicar el enfoque psicogenético vigente (Ordenanza 01-2023): los niños construyen el sistema de escritura desde textos con significado, y la reflexión sobre la sílaba emerge dentro de esa construcción, no como punto de partida mecánico.",
            "Volver al método silábico tradicional para complacer.",
            "Decir 'el MINERD lo obliga y por eso'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La comunicación profesional con familias incluye explicar los fundamentos pedagógicos del enfoque, no solo referir normativa."
    },
    {
        id: 183,
        categoria: "Inclusión",
        pregunta: "En 4to grado, un estudiante con diabetes tipo 1 necesita medir su glucemia durante la clase. Otro padre se queja de que 'es distractor'. ¿Cuál es la actuación correcta?",
        opciones: [
            "Pedirle al estudiante con diabetes que lo haga 'discretamente' fuera del aula.",
            "Garantizar el derecho del estudiante a las medidas de salud necesarias, trabajar con el grupo sobre condiciones crónicas y respeto a la diversidad, y dialogar con la familia quejosa para sensibilizar.",
            "Sancionar al estudiante con diabetes.",
            "Retirar al estudiante del aula en esos momentos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La atención a condiciones de salud en el aula es un derecho fundamental que no debe depender de la opinión de terceros. La inclusión incluye sensibilización grupal."
    },
    {
        id: 184,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado implementa la evaluación entre pares. Un padre teme que 'otros estudiantes juzguen a su hijo'. ¿Cómo debe responder?",
        opciones: [
            "Eliminar la evaluación entre pares por el temor del padre.",
            "Explicar que la coevaluación entre pares tiene propósito formativo, se realiza con criterios claros (rúbricas adaptadas a la edad), se acompaña docentemente y complementa (no sustituye) la evaluación docente.",
            "Permitir que solo su hijo no participe en la coevaluación.",
            "Hacer la coevaluación en secreto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La coevaluación entre pares es práctica formativa legítima con criterios explícitos y acompañamiento docente. Complementa, no sustituye, la evaluación profesional."
    },
    {
        id: 185,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado diseña una situación de aprendizaje. ¿Cuál es el elemento más importante que debe contener?",
        opciones: [
            "Múltiples ejercicios variados del libro de texto.",
            "Un contexto auténtico o reto significativo que movilice competencias, articule indicadores de logro de múltiples áreas y genere oportunidades para movilizar saberes.",
            "Un listado largo de contenidos por área.",
            "Una cronología detallada de cada minuto del día."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La situación de aprendizaje se caracteriza por un contexto auténtico/reto significativo que moviliza competencias múltiples, es el eje del diseño didáctico por competencias."
    },
    {
        id: 186,
        categoria: "Protección Infantil",
        pregunta: "Una madre llega agitada y pide a la maestra de 1er grado 'entregarle' al niño a su pareja, que espera afuera. El acta legal de custodia indica que solo la madre puede retirar al niño. ¿Qué debe hacer?",
        opciones: [
            "Entregar el niño para evitar conflicto con la madre.",
            "Negarse a entregar al niño a persona no autorizada, aunque la madre lo solicite verbalmente, explicar el procedimiento y canalizar con dirección cualquier modificación formal de la autorización.",
            "Llamar directamente a la pareja para autorizarse 'personalmente'.",
            "Entregar al niño si la madre firma un papel improvisado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (protección y custodia del niño). Los procedimientos formales de custodia y autorizaciones se cumplen rigurosamente. La seguridad del niño prevalece sobre conveniencias verbales."
    },
    {
        id: 187,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado recibe comentarios de un padre en redes sociales atacando su desempeño profesional. ¿Cuál es la respuesta correcta?",
        opciones: [
            "Responder en redes con la misma agresividad.",
            "Abstenerse de responder en redes sociales, documentar los comentarios si son difamatorios, canalizar institucionalmente la situación con la dirección del centro.",
            "Denunciar al padre ante todos los demás padres del grupo.",
            "Confrontar al padre delante de su hijo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 136-03. Los conflictos docente-familia se canalizan institucionalmente, no en redes sociales. La contención y el encuadre institucional protegen a todas las partes."
    },
    {
        id: 188,
        categoria: "Gestión de Aula",
        pregunta: "En 4to grado, un estudiante constantemente pide permiso para ir al baño durante las clases importantes. ¿Cuál es la actuación pedagógica correcta?",
        opciones: [
            "Negarle el permiso hasta que 'aprenda a aguantar'.",
            "Garantizar sus necesidades fisiológicas, observar patrones para identificar posibles causas (necesidades reales, evitación de la clase, condición médica) y abordar pedagógica o institucionalmente según corresponda.",
            "Avergonzarlo públicamente cada vez que pida permiso.",
            "Llamar a los padres para que 'le enseñen en casa'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (integridad y dignidad del niño) y Manual de Convivencia. Las necesidades fisiológicas son derechos. La observación pedagógica permite comprender y abordar causas sin sancionar."
    },
    {
        id: 189,
        categoria: "Convivencia",
        pregunta: "La maestra de 3er grado se encuentra con que otra docente le pide 'prestarle' su aula durante su hora libre para reuniones personales. ¿Cuál es la actuación correcta?",
        opciones: [
            "Prestar el aula sin más, por compañerismo.",
            "Aclarar que el aula es espacio pedagógico institucional con usos definidos, y que cualquier uso fuera de horario pedagógico debe canalizarse con dirección.",
            "Prestar el aula solo si recibe algo a cambio.",
            "Negarse agresivamente sin explicación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El uso de los espacios institucionales sigue normativas. La colegialidad no excluye el respeto a los procedimientos institucionales."
    },
    {
        id: 190,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, un estudiante escribe textos con coherencia pero sin usar mayúsculas ni puntos. ¿Cuál es la intervención correcta?",
        opciones: [
            "Bajar la nota por cada ausencia de mayúscula y punto.",
            "Reconocer la coherencia como logro, trabajar progresivamente los aspectos convencionales (mayúsculas, puntos) mediante situaciones significativas de revisión y edición, articulados con las particularidades del tipo textual.",
            "Ignorar los aspectos convencionales en 2do grado.",
            "Hacerlo copiar un texto con mayúsculas y puntos cien veces."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Los aspectos convencionales se trabajan progresivamente, reconociendo logros y enseñándolos mediante revisión y edición en contextos significativos."
    },
    {
        id: 191,
        categoria: "Inclusión",
        pregunta: "En 5to grado, un estudiante en situación de pobreza extrema no cuenta con útiles. ¿Cuál es la actuación correcta?",
        opciones: [
            "Excluirlo de actividades que requieran materiales.",
            "Activar apoyos institucionales del centro (materiales de reserva, coordinación con entidades solidarias), proteger la dignidad del estudiante, y asegurar su plena participación sin exposición estigmatizante.",
            "Humillarlo públicamente por no tener los útiles.",
            "Enviarlo a su casa hasta que traiga los materiales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La equidad educativa se garantiza activando apoyos disponibles con respeto a la dignidad. La exclusión o estigmatización vulneran derechos fundamentales."
    },
    {
        id: 192,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado debe diseñar una prueba escrita que evalúe la competencia comunicativa. ¿Cuál es la característica correcta?",
        opciones: [
            "Preguntas cerradas que solo evalúan memoria.",
            "Integrar textos auténticos, preguntas de distinto nivel (literal, inferencial, crítico), producción de textos propios en distintos géneros, y reflexión metacognitiva sobre el proceso comunicativo.",
            "Un dictado como única actividad.",
            "Preguntas sobre reglas gramaticales aisladas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación de la competencia comunicativa implica textos auténticos, diversidad de procesos cognitivos, producción real y metacognición, no memorización de reglas aisladas."
    },
    {
        id: 193,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado planifica la articulación entre Nivel Inicial y 1er grado. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Empezar desde cero sin considerar lo hecho en Inicial.",
            "Articular con el Nivel Inicial respetando y continuando sus aprendizajes (juego, exploración, autonomía), mantener prácticas consistentes en 1er grado y ampliar progresivamente la cultura escolar.",
            "Romper con las prácticas de Inicial porque 'ya no son niños pequeños'.",
            "Usar las mismas actividades que en Inicial sin progresión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La articulación Inicial-Primario es clave para trayectorias educativas continuas. Se conservan elementos valiosos (juego, exploración) y se amplía progresivamente."
    },
    {
        id: 194,
        categoria: "Ética",
        pregunta: "La maestra de 4to grado recibe una propuesta de un padre: 'pagar' clases particulares extra para su hijo fuera del horario. ¿Cuál es la consideración ética?",
        opciones: [
            "Aceptar sin más, son ingresos extra legítimos.",
            "Valorar el potencial conflicto de interés (el estudiante es de su grupo), verificar la normativa institucional, y actuar con transparencia; en principio, evitar servicios particulares remunerados a estudiantes propios.",
            "Aceptar y prometer 'subirle la nota' al estudiante.",
            "Ofrecer el servicio a todo el grupo como negocio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El servicio remunerado particular a estudiantes del propio grupo constituye conflicto de intereses potencial. La independencia del juicio evaluativo debe protegerse."
    },
    {
        id: 195,
        categoria: "Gestión de Aula",
        pregunta: "En 3er grado, la maestra nota que los estudiantes se mueven mucho y le cuesta mantener 'el orden'. ¿Cuál es la mirada profesional correcta?",
        opciones: [
            "'El grupo es muy indisciplinado, hay que controlarlos más'.",
            "El movimiento es necesidad natural en la infancia; planificar actividades que incluyan movimiento intencional (rincones, estaciones, actividades manipulativas) y no solo sentarse y escuchar.",
            "Castigar a los estudiantes que se muevan.",
            "Exigir silencio absoluto como indicador de aprendizaje."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El desarrollo infantil implica movimiento. La planificación incorpora intencionalmente oportunidades de movimiento, no lo reprime como problema de 'disciplina'."
    },
    {
        id: 196,
        categoria: "Convivencia",
        pregunta: "La maestra de 2do grado planifica la celebración del 'Día del Maestro'. Algunos padres proponen regalos costosos. ¿Cuál es la actuación correcta?",
        opciones: [
            "Aceptar los regalos costosos sin más.",
            "Orientar a los padres hacia gestos simbólicos no económicos (dibujos, cartas, pequeños detalles hechos por los estudiantes), evitando presiones económicas a las familias.",
            "Exigir un regalo específico y costoso.",
            "Rechazar cualquier gesto como señal de profesionalismo extremo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Las celebraciones deben construirse desde gestos simbólicos y afectivos, sin generar presiones económicas a las familias que reproduzcan inequidades."
    },
    {
        id: 197,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra trabaja con los nombres de los estudiantes. Una niña dice que su nombre 'es muy largo'. ¿Cuál es la intervención correcta?",
        opciones: [
            "Acortarle el nombre para facilitarle el aprendizaje.",
            "Validar la identidad plena del nombre, usarlo como objeto de análisis (cantidad de letras, comparación con otros), celebrarlo como riqueza personal, y trabajar la identidad como dimensión pedagógica.",
            "Burlarse de la longitud del nombre para 'aliviar' el tema.",
            "Ignorar el comentario."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Ley 136-03 (derecho al nombre e identidad). El nombre es identidad y objeto pedagógico. Su reducción sin consulta familiar es irrespetuosa de la identidad del niño."
    },
    {
        id: 198,
        categoria: "Inclusión",
        pregunta: "En 6to grado, un estudiante con Síndrome de Asperger tiene dificultades para interpretar consignas figuradas y metáforas. ¿Cuál es la actuación correcta?",
        opciones: [
            "Insistir en consignas figuradas 'para que aprenda'.",
            "Usar lenguaje claro y explícito, explicar las metáforas cuando aparezcan, enseñar sus formas y significados como contenido, coordinar con orientación un plan personalizado coherente con el currículo.",
            "Evitar completamente cualquier lenguaje figurado.",
            "Eximirlo de actividades con textos literarios."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Las condiciones del espectro autista requieren ajustes comunicacionales específicos. El lenguaje figurado puede ser enseñado explícitamente como parte del currículo adaptado."
    },
    {
        id: 199,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado aplica una evaluación y descubre que los estudiantes tuvieron acceso previo a las preguntas. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ignorar el hecho y calificar normalmente.",
            "Anular la evaluación comprometida, diseñar una nueva evaluación diferente, reflexionar con el grupo sobre la integridad académica, y mejorar las prácticas de custodia de instrumentos.",
            "Sancionar a todo el grupo bajándoles la nota.",
            "Expulsar a los sospechosos sin investigación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ordenanza 04-2023. La integridad evaluativa exige medidas correctivas. El rediseño, la reflexión formativa y la mejora de prácticas son respuestas profesionales."
    },
    {
        id: 200,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado planifica la evaluación diagnóstica de inicio de año. ¿Cuál es el propósito central?",
        opciones: [
            "Establecer un ranking de estudiantes desde el primer día.",
            "Identificar saberes previos, niveles de desarrollo en las distintas competencias, fortalezas y necesidades específicas del grupo, para ajustar la planificación pedagógica subsiguiente.",
            "Asignar calificaciones iniciales que cuenten para el primer trimestre.",
            "Seleccionar a los 'mejores' y 'peores' estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica identifica el punto de partida para ajustar la enseñanza. No asigna calificaciones ni establece jerarquías entre estudiantes."
    },
    {
        id: 201,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 3er grado escucha a un estudiante decir 'cuando sea grande me voy a matar'. Lo dice aparentemente 'en broma'. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ignorar el comentario por ser 'solo una broma'.",
            "Tomarlo en serio, acoger al estudiante con sensibilidad, registrar lo dicho, notificar inmediatamente al equipo de orientación para una evaluación psicosocial, comunicar con la familia coordinadamente.",
            "Regañarlo para que 'no diga esas cosas'.",
            "Comentar el incidente con otros estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (salud mental y protección integral). Toda expresión ideativa suicida, aun 'en broma', debe tomarse en serio y activar el protocolo de salud mental y protección, con acompañamiento especializado."
    },
    {
        id: 202,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado recibe un mensaje del director solicitándole alterar indicadores para mejorar estadísticas del centro. ¿Cuál es la actuación correcta?",
        opciones: [
            "Obedecer al director por 'jerarquía'.",
            "Declinar respetuosamente, pues la integridad evaluativa es deber profesional que precede la jerarquía; solicitar las instrucciones por escrito y, si la presión persiste, elevar formalmente al distrito educativo.",
            "Alterar algunos y otros no para 'complacer a medias'.",
            "Aceptar a cambio de beneficios personales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Constitución (principio de legalidad). La obediencia jerárquica tiene límites éticos. Las instrucciones ilegítimas no obligan al servidor público, y los canales institucionales superiores están disponibles."
    },
    {
        id: 203,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 2do grado establecerá la gestión del silencio en su aula. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Imponer silencio absoluto durante toda la jornada.",
            "Distinguir distintos momentos: silencio productivo para concentración, conversación para colaboración, voz alta para plenarias; enseñar a los estudiantes a autorregular sus voces según el tipo de actividad.",
            "Prohibir hablar completamente en todas las clases.",
            "Dejar que hablen libremente sin estructura alguna."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El aula no requiere silencio absoluto sino gestión diferenciada de la palabra según el tipo de actividad, enseñando autorregulación como competencia."
    },
    {
        id: 204,
        categoria: "Convivencia",
        pregunta: "En 6to grado, dos estudiantes tienen un conflicto no resuelto. Una quiere mediar la maestra. ¿Cuál es la secuencia correcta de mediación?",
        opciones: [
            "Determinar un culpable y sancionarlo.",
            "Escuchar a cada parte por separado, propiciar un encuentro en condiciones de calma, facilitar que ambos expresen su perspectiva y emociones, acompañar la búsqueda de acuerdos reparadores y dar seguimiento.",
            "Exigir disculpas inmediatas sin comprensión del conflicto.",
            "Avisar solo a los padres para que ellos resuelvan."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. La mediación restaurativa sigue etapas: escucha individual, encuentro facilitado, expresión, búsqueda de acuerdos, seguimiento. Supera la lógica culpable/sanción."
    },
    {
        id: 205,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra organiza el trabajo de revisión textual en el aula. ¿Cuál es la estrategia más coherente?",
        opciones: [
            "Que la maestra corrija todo con lápiz rojo.",
            "Enseñar estrategias de revisión con aspectos claros por etapa (contenido, organización, convencionalidades), incluir autorrevisión, revisión entre pares y revisión docente como etapas del proceso escritor.",
            "Pedir que los padres revisen los textos en casa.",
            "Ignorar la revisión y calificar solo la primera versión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La revisión textual es etapa del proceso escritor que se enseña explícitamente con aspectos claros, incluyendo autorrevisión, coevaluación entre pares y revisión docente."
    },
    {
        id: 206,
        categoria: "Inclusión",
        pregunta: "En 4to grado, una estudiante repentinamente deja de hablar en clase. La maestra la conocía participativa. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ignorar el cambio pues 'es decisión suya no participar'.",
            "Observar con sensibilidad, dialogar individualmente para ofrecer escucha, explorar posibles causas (socioemocionales, familiares, grupales), articular con orientación si corresponde.",
            "Exigirle participar delante de todos 'para quitarle el silencio'.",
            "Bajarle la nota por su falta de participación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Ordenanza 05-2024. Los cambios conductuales significativos son señales de alerta que requieren observación sensible, diálogo y articulación con equipos especializados."
    },
    {
        id: 207,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado quiere saber si sus estrategias didácticas son efectivas. ¿Cuál es la práctica profesional correcta?",
        opciones: [
            "Asumir que lo son si los estudiantes no se quejan.",
            "Reflexionar sistemáticamente sobre su práctica mediante autoevaluación docente, retroalimentación de los estudiantes, análisis de evidencias de aprendizaje, y ajuste continuo de las estrategias.",
            "Evaluarse solo por las notas finales de los estudiantes.",
            "Confiar únicamente en la opinión del director."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y claves discursivas del ERP. La reflexión docente sistemática ('¿qué debo cambiar yo para que ellos aprendan?') es dimensión esencial de la profesionalidad."
    },
    {
        id: 208,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado planifica la inclusión de las TIC en el aula. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Usar las TIC como un área separada sin articulación.",
            "Integrar las TIC transversalmente en todas las áreas con propósitos pedagógicos claros (búsqueda crítica de información, producción multimodal, colaboración, publicación), como recurso al servicio del aprendizaje.",
            "Usarlas solo para proyectar contenidos.",
            "Prohibir completamente su uso por ser 'distractores'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las TIC son recursos transversales con propósitos pedagógicos. Su integración crítica al servicio de las competencias es clave de la educación contemporánea."
    },
    {
        id: 209,
        categoria: "Ética",
        pregunta: "La maestra de 6to grado tiene una situación personal que la afecta emocionalmente. ¿Cuál es la actuación profesional correcta?",
        opciones: [
            "Desahogarse con los estudiantes compartiendo sus problemas personales.",
            "Buscar apoyo profesional apropiado fuera del aula, mantener el profesionalismo frente a los estudiantes, y si es necesario solicitar licencia o acompañamiento institucional.",
            "Ignorar la afectación emocional y 'seguir adelante'.",
            "Desquitarse con los estudiantes en momentos difíciles."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El cuidado de la salud mental docente es parte del profesionalismo. Los espacios de apoyo son externos al aula; los estudiantes no son interlocutores de dificultades personales."
    },
    {
        id: 210,
        categoria: "Gestión de Aula",
        pregunta: "En 1er grado, la maestra incorpora el 'calendario' como rutina diaria. ¿Cuál es la intencionalidad pedagógica?",
        opciones: [
            "Una actividad decorativa sin propósito pedagógico.",
            "Una rutina que integra nociones temporales (días, meses, secuencia), conteo, lectura de palabras, reconocimiento del clima, anticipación de eventos, articulada con competencias matemáticas y lingüísticas.",
            "Una actividad para matar tiempo al inicio de la jornada.",
            "Un momento para que la maestra pase lista únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. Las rutinas como el calendario son dispositivos pedagógicos que articulan múltiples aprendizajes en forma sistemática y significativa."
    },
    {
        id: 211,
        categoria: "Convivencia",
        pregunta: "La maestra de 4to grado organiza una jornada de sensibilización sobre la no violencia. Un padre se opone porque 'endulza' a los niños. ¿Cómo debe responder?",
        opciones: [
            "Cancelar la jornada por la oposición del padre.",
            "Explicar fundamentadamente que la educación para la paz y la no violencia es parte del currículo oficial dominicano, articulada con competencias ciudadanas e inscrita en la normativa educativa vigente.",
            "Discutir públicamente con el padre.",
            "Realizar la jornada excluyendo al hijo de ese padre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. La educación para la paz es parte del currículo oficial. La fundamentación profesional ante cuestionamientos familiares es dimensión del profesionalismo docente."
    },
    {
        id: 212,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra diseña un rincón de biblioteca. ¿Cuál es el criterio correcto para la selección de libros?",
        opciones: [
            "Solo libros escolares con texto gradual.",
            "Diversidad de géneros (cuentos, poesía, informativos, libros-álbum, historietas), diversidad cultural, calidad literaria, atractivo visual, y adecuación al desarrollo lector de los estudiantes.",
            "Solo libros 'clásicos' aunque no interesen.",
            "Libros seleccionados solo por la maestra sin diversidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Las bibliotecas de aula se caracterizan por diversidad de géneros, voces, calidad y atractivo. Son dispositivos para la formación de lectores competentes y comprometidos."
    },
    {
        id: 213,
        categoria: "Inclusión",
        pregunta: "En 5to grado, un estudiante migrante recientemente llegado se siente perdido académicamente. Las temáticas son nuevas para él. ¿Qué debe hacer la maestra?",
        opciones: [
            "Ignorar sus diferencias y 'que se ajuste como pueda'.",
            "Realizar una evaluación diagnóstica individual sobre sus saberes, implementar adecuaciones de acceso y de contenido progresivas, articular con orientación un plan de acogida, valorar y visibilizar sus aportes culturales.",
            "Asignarle actividades de grados inferiores permanentemente.",
            "Excluirlo de las evaluaciones hasta que 'se ponga al día'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La inclusión de estudiantes migrantes requiere diagnóstico, plan de acogida, adecuaciones progresivas y valoración de su bagaje cultural, no exclusión ni igualación pasiva."
    },
    {
        id: 214,
        categoria: "Evaluación",
        pregunta: "La maestra de 2do grado planifica la evaluación de un proyecto de aula. ¿Cuál es la característica correcta?",
        opciones: [
            "Evaluar solo el producto final del proyecto.",
            "Evaluar el proceso completo (planificación, desarrollo, producto, socialización) con instrumentos diversos (rúbricas, observación, autoevaluación, coevaluación) articulados con los indicadores de las competencias movilizadas.",
            "Calificar según la subjetividad del docente.",
            "Evaluar solo con examen escrito al final."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación de proyectos evalúa proceso y producto con diversidad de instrumentos y articulación con las competencias desarrolladas."
    },
    {
        id: 215,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica el cierre del año y la articulación con el Nivel Secundario. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Asumir que 'ya es cosa de Secundaria' cuando pasen.",
            "Consolidar aprendizajes clave, fortalecer competencias para la transición, desarrollar autonomía y autorregulación, acompañar socioemocionalmente el cambio, y articular con el Nivel Secundario cuando sea posible.",
            "Relajar los aprendizajes al final del año.",
            "Apresurar todos los contenidos faltantes sin consolidación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La articulación entre niveles requiere consolidación de aprendizajes clave, desarrollo de autonomía y acompañamiento socioemocional, no apresuramiento ni relajación."
    },
    {
        id: 216,
        categoria: "Ética",
        pregunta: "La maestra de 3er grado hereda un grupo con registros incompletos del docente anterior. ¿Cuál es la actuación correcta?",
        opciones: [
            "Asumir los registros tal como están sin verificar.",
            "Realizar una evaluación diagnóstica que fundamente el punto de partida propio, documentar formalmente las limitaciones de la información recibida, y coordinar con dirección y con el docente anterior si es posible.",
            "Inventar registros para completar lo faltante.",
            "Rechazar el grupo hasta que se completen los registros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ordenanza 04-2023. La integridad documental requiere fundamentar decisiones con evidencias propias y documentar formalmente las limitaciones, sin inventar información."
    },
    {
        id: 217,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 4to grado diseña el uso de recompensas y refuerzos. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Entregar 'premios materiales' constantemente por cualquier conducta.",
            "Priorizar el refuerzo social e intrínseco (reconocimiento específico, valoración de esfuerzos, responsabilidades, autonomía progresiva) sobre las recompensas materiales, construyendo motivación intrínseca.",
            "Usar castigos como principal sistema de control.",
            "No reforzar conductas positivas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. El refuerzo positivo intrínseco y social construye motivación duradera, superior a las recompensas materiales constantes que generan dependencia externa."
    },
    {
        id: 218,
        categoria: "Convivencia",
        pregunta: "En 2do grado, la maestra trabaja con los estudiantes la expresión de emociones difíciles. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Pedirles que 'no lleven' sus emociones a la escuela.",
            "Legitimar todas las emociones como parte del desarrollo humano, enseñar estrategias para reconocerlas, nombrarlas, expresarlas adecuadamente y regularlas, integrando la educación emocional en el currículo.",
            "Sancionar las expresiones de tristeza o rabia.",
            "Ignorar las emociones y enfocarse solo en lo 'académico'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (dimensión socioemocional) y Manual de Convivencia. Todas las emociones son legítimas. La educación emocional enseña reconocerlas, expresarlas y regularlas como competencias para la vida."
    },
    {
        id: 219,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra planifica la enseñanza de la numeración. ¿Cuál es la secuencia didáctica correcta?",
        opciones: [
            "Dictar los números del 1 al 100 para que los copien.",
            "Construir el concepto de número mediante situaciones significativas (contar, comparar, ordenar objetos reales), progresar del conteo al reconocimiento de la cantidad, y luego al registro escrito con sentido.",
            "Enseñar solo el trazo de los números sin comprensión.",
            "Memorizar las tablas de sumar como primer paso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 01-2023. La construcción del concepto de número parte de situaciones significativas con objetos, progresa del conteo al reconocimiento de cantidades y luego a la representación escrita."
    },
    {
        id: 220,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 5to grado descubre que una familia consume drogas en presencia del estudiante. El niño lo cuenta espontáneamente. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ignorar el relato porque 'no es evidencia'.",
            "Notificar inmediatamente al equipo de orientación y dirección, activar el protocolo de referimiento al CONANI para evaluación de la situación, acompañar al niño con sensibilidad y resguardar la confidencialidad.",
            "Confrontar directamente a la familia.",
            "Comentar el caso con otros estudiantes o colegas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (artículos sobre protección integral). La exposición a consumo de sustancias en el hogar es factor de riesgo que exige evaluación del CONANI. La confidencialidad y la activación institucional protegen al niño."
    },

 {
        id: 221,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado diseña una unidad sobre 'Nuestros alimentos'. ¿Cuál es el enfoque integrador correcto?",
        opciones: [
            "Dar el tema solo en Ciencias de la Naturaleza.",
            "Articular el tema con múltiples áreas: Ciencias (nutrición), Matemática (medidas, comparaciones), Lengua (recetas, etiquetas), Sociales (alimentación cultural), Formación Humana (hábitos saludables).",
            "Desarrollar el tema solo con fotocopias del libro.",
            "Hacer solo un dibujo sobre alimentos sin otra actividad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las unidades integradas articulan múltiples áreas en torno a una temática significativa, movilizando competencias de distintas dimensiones curriculares."
    },
    {
        id: 222,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado aplica una rúbrica. Un estudiante cuestiona su calificación. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ignorar el cuestionamiento y mantener la nota sin diálogo.",
            "Dialogar con el estudiante mostrando la rúbrica y los criterios, analizar la evidencia de su trabajo, reconocer si hay argumentos válidos para ajustar, y explicar el fundamento de la calificación.",
            "Bajarle más la nota por 'cuestionar'.",
            "Cambiarle la nota sin análisis para 'complacerlo'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación transparente permite diálogo sobre criterios y evidencias. Los cuestionamientos son oportunidades formativas y pueden llevar a ajustes fundamentados."
    },
    {
        id: 223,
        categoria: "Inclusión",
        pregunta: "La maestra de 3er grado tiene un grupo con gran diversidad cultural. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Ignorar las diferencias culturales para 'no hacer distinciones'.",
            "Reconocer y valorar explícitamente la diversidad cultural como riqueza, integrarla en las situaciones de aprendizaje, promover el diálogo intercultural y formar en el respeto activo.",
            "Resaltar solo la cultura dominante del grupo.",
            "Segmentar actividades por origen cultural."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024, Ley 136-03 y Adecuación Curricular 2023. La diversidad cultural es riqueza educativa que debe ser reconocida e integrada activamente, no ignorada ni segmentada."
    },
    {
        id: 224,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado es presionada por una gestión educativa para inflar resultados de pruebas diagnósticas. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ceder a la presión para 'mantener la paz'.",
            "Mantener la honestidad evaluativa como principio profesional, documentar por escrito la presión recibida, y elevar la situación por los canales institucionales superiores si es necesario.",
            "Inflar algunos resultados y otros no.",
            "Renunciar silenciosamente sin notificar nada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Constitución (principio de probidad). La integridad evaluativa es valor irrenunciable. Las presiones irregulares se canalizan institucionalmente superiores."
    },
    {
        id: 225,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 4to grado diseña un 'contrato de aula' con sus estudiantes. ¿Cuál es la característica correcta?",
        opciones: [
            "Normas impuestas por la maestra con sanciones predefinidas.",
            "Acuerdos construidos participativamente, redactados en positivo, con consecuencias lógicas reparadoras, revisados periódicamente y articulados con las competencias ciudadanas.",
            "Un documento solo firmado sin discusión previa.",
            "Una lista de prohibiciones sin explicación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. Los contratos de aula se construyen participativamente, en positivo, con consecuencias lógicas, ejerciendo competencias ciudadanas en su elaboración."
    },
    {
        id: 226,
        categoria: "Convivencia",
        pregunta: "La maestra de 5to grado observa que un estudiante rechaza constantemente el contacto físico con otros. ¿Qué debe hacer?",
        opciones: [
            "Forzarlo a abrazar a sus compañeros 'para integrarse'.",
            "Respetar sus límites corporales, trabajar con el grupo sobre consentimiento y respeto a la corporalidad de cada uno, articular con orientación si hay señales de alerta.",
            "Avergonzarlo públicamente por 'antisocial'.",
            "Ignorar completamente el comportamiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (integridad personal) y Manual de Convivencia. El respeto a los límites corporales es fundamental. El consentimiento es contenido educativo. Los rechazos persistentes pueden ser señales que requieren articulación especializada."
    },
    {
        id: 227,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra propone a los estudiantes producir un libro colectivo de cuentos. ¿Cuál es el propósito pedagógico?",
        opciones: [
            "Una actividad manual sin propósito de aprendizaje.",
            "Articular la comprensión del género narrativo, la escritura con propósito comunicativo auténtico (destinatarios reales), la revisión y edición, y la valoración del rol de autor en los estudiantes.",
            "Solo entretener al grupo al final del año.",
            "Ocupar tiempo sin planificación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La producción colectiva de libros articula múltiples competencias comunicativas con propósito auténtico, destinatarios reales y proceso completo de escritura."
    },
    {
        id: 228,
        categoria: "Evaluación",
        pregunta: "La maestra de 3er grado debe reportar los resultados del área de Educación Física. ¿Cuál es la actuación correcta?",
        opciones: [
            "Asignar 'L' a todos los estudiantes sin evidencia.",
            "Coordinar con el docente de Educación Física la información pertinente, y si asume esa área, fundamentar los indicadores en evidencias sistemáticas del desempeño motriz, actitudinal y conceptual según los indicadores del grado.",
            "Dar notas según el comportamiento general del estudiante.",
            "Pedirle al docente de educación física que 'firme' sin información real."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Cada área tiene indicadores específicos. Los docentes de área aportan las evidencias pertinentes y la articulación entre docentes es parte del trabajo colegiado."
    },
    {
        id: 229,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica una situación de aprendizaje sobre 'La democracia en mi escuela'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Dictar los conceptos de democracia para que los memoricen.",
            "Construir una experiencia democrática auténtica (elección de representantes, asamblea, análisis de decisiones reales) articulada con la investigación sobre democracia como sistema político y forma de convivencia.",
            "Solo leer el artículo del libro de texto sobre democracia.",
            "Prohibir la discusión política por considerarla 'ideológica'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Constitución. La democracia se aprende haciéndola. La articulación entre experiencia práctica y reflexión conceptual es clave del enfoque por competencias."
    },
    {
        id: 230,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 4to grado observa que un estudiante falta frecuentemente los lunes sin justificación y regresa intranquilo. ¿Cuál es la actuación correcta?",
        opciones: [
            "Asumir que 'no quiere venir' y no indagar.",
            "Registrar el patrón, dialogar sensiblemente con el estudiante, coordinar con orientación y con la familia para comprender las causas, articular con servicios de protección si hay indicios de riesgo en el hogar.",
            "Bajar la nota por inasistencia sin indagar.",
            "Regañar al estudiante por las faltas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la educación y protección). Los patrones de ausentismo con señales emocionales son alertas que requieren indagación sensible y articulación con orientación y servicios de protección."
    },
    {
        id: 231,
        categoria: "Inclusión",
        pregunta: "En 2do grado, un estudiante zurdo tiene dificultades con los útiles estandarizados (tijeras, sacapuntas). ¿Qué debe hacer la maestra?",
        opciones: [
            "Exigirle usar los útiles 'con la otra mano'.",
            "Gestionar útiles adaptados para zurdos, enseñar explícitamente técnicas ajustadas, acomodar su ubicación para favorecer su comodidad y considerar su lateralidad al planificar.",
            "Obligarlo a cambiar su lateralidad.",
            "Ignorar sus dificultades específicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La lateralidad es parte de la diversidad individual. Las adecuaciones (útiles, técnicas, ubicación) son obligatorias. La imposición de cambio de lateralidad es una práctica obsoleta y dañina."
    },
    {
        id: 232,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado se entera de que una decisión del centro educativo podría afectar injustamente a los estudiantes. ¿Cuál es la actuación correcta?",
        opciones: [
            "Guardar silencio para no meterse en problemas.",
            "Canalizar su preocupación por los mecanismos institucionales (reunión de docentes, equipo de gestión, APMAE, distrito), fundamentando pedagógica y normativamente su planteamiento en beneficio de los estudiantes.",
            "Organizar una protesta pública contra el centro.",
            "Divulgar la situación en redes sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El principio rector es el interés superior del niño. La ética profesional incluye el cuestionamiento fundado mediante canales institucionales legítimos."
    },
    {
        id: 233,
        categoria: "Gestión de Aula",
        pregunta: "En 1er grado, la maestra implementa el uso de los 'semáforos emocionales' (verde-amarillo-rojo). ¿Cuál es el propósito pedagógico?",
        opciones: [
            "Clasificar a los estudiantes en 'buenos' y 'malos'.",
            "Una herramienta visual que facilita a los estudiantes identificar su estado emocional, comunicarlo y elegir estrategias de regulación, desarrollando competencias socioemocionales.",
            "Un sistema para sancionar comportamientos.",
            "Una decoración sin función pedagógica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (dimensión socioemocional). Los semáforos emocionales son herramientas de identificación, comunicación y regulación emocional, no instrumentos clasificatorios ni sancionatorios."
    },
    {
        id: 234,
        categoria: "Convivencia",
        pregunta: "La maestra de 4to grado detecta un conflicto entre dos familias que se traslada al aula (los hijos se evitan mutuamente). ¿Qué debe hacer?",
        opciones: [
            "Obligar a los estudiantes a trabajar juntos 'hasta que se lleven bien'.",
            "Generar en el aula un ambiente respetuoso y profesional, no trasladar a los niños el conflicto adulto, trabajar gradualmente la inclusión mutua mediante actividades grupales cuidadosamente diseñadas.",
            "Separarlos completamente durante todo el año.",
            "Pedirles que 'resuelvan entre ellos' lo que sus padres no pueden."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. Los niños no deben cargar conflictos adultos. El aula genera su propio ambiente profesional y busca la inclusión mutua sin imposición ni separación permanente."
    },
    {
        id: 235,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, un estudiante lee en voz alta con fluidez pero no puede responder sobre el contenido del texto. ¿Cuál es la interpretación correcta?",
        opciones: [
            "Dominar la lectura significa leer fluidamente en voz alta.",
            "La fluidez oral sin comprensión es lectura mecánica, no lectura comprensiva. Debe trabajar explícitamente estrategias de comprensión (antes, durante y después de la lectura) con textos significativos.",
            "Bajarle la nota por no entender.",
            "Ignorar la comprensión y solo reforzar la velocidad lectora."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La lectura es construcción de significado. La fluidez oral sin comprensión es insuficiente. Las estrategias de comprensión se enseñan explícitamente en los tres momentos de la lectura."
    },
    {
        id: 236,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado planifica la evaluación de competencias ciudadanas. ¿Cuál es el instrumento más pertinente?",
        opciones: [
            "Una prueba escrita sobre definiciones de democracia.",
            "Registro de observación sistemática de conductas, dilemas éticos y casos para analizar, proyectos participativos con rúbrica, autoevaluación y coevaluación sobre prácticas ciudadanas reales.",
            "Memorizar los deberes y derechos constitucionales.",
            "Solo un dibujo sobre la patria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las competencias ciudadanas se evalúan en la práctica de la ciudadanía mediante dilemas, proyectos participativos, observación de conductas y reflexión, no con exámenes memorísticos."
    },
    {
        id: 237,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado debe planificar la articulación con el Departamento de Orientación y Psicología. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Derivar todos los casos difíciles al departamento sin seguimiento.",
            "Trabajar colaborativamente con orientación: compartir observaciones, participar en los planes individuales, implementar en el aula las estrategias acordadas, y hacer seguimiento conjunto.",
            "Ignorar al departamento por considerarlo 'innecesario'.",
            "Solo contactarlos cuando haya problemas graves."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Manual de Convivencia. El trabajo colaborativo con orientación es parte del enfoque integral. La articulación implica información compartida, planes conjuntos y seguimiento mutuo."
    },
    {
        id: 238,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado siente que un contenido que debe enseñar va contra sus creencias personales. ¿Cuál es la actuación correcta?",
        opciones: [
            "Omitir el contenido porque va contra sus creencias.",
            "Enseñar el contenido curricular oficial de manera profesional e integral, distinguiendo sus creencias personales del rol docente; canalizar cualquier desacuerdo por vías institucionales legítimas.",
            "Enseñar el contenido distorsionado según sus creencias.",
            "Criticar el currículo oficial ante los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El servidor docente implementa el currículo oficial con profesionalismo. Los desacuerdos personales se canalizan institucionalmente, no imponiendo criterios personales a los estudiantes."
    },
    {
        id: 239,
        categoria: "Gestión de Aula",
        pregunta: "En 5to grado, varios estudiantes usan celulares a escondidas durante la clase. ¿Cuál es la actuación correcta?",
        opciones: [
            "Confiscar los celulares permanentemente.",
            "Dialogar con el grupo sobre la normativa del centro respecto a celulares, construir acuerdos sobre su uso pedagógico cuando corresponda, trabajar la autorregulación y la ciudadanía digital.",
            "Castigar a todos los que tengan celular.",
            "Permitir el uso libre sin ningún acuerdo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. El uso de dispositivos se regula institucionalmente, se construyen acuerdos de uso pedagógico y se forma en ciudadanía digital, más que mediante confiscación punitiva."
    },
    {
        id: 240,
        categoria: "Inclusión",
        pregunta: "En 6to grado, una estudiante con discapacidad auditiva severa usa lengua de señas. La maestra no domina lengua de señas. ¿Qué debe hacer?",
        opciones: [
            "Asumir que la estudiante 'se las arregle' como pueda.",
            "Solicitar al centro y al distrito los apoyos especializados (intérprete, formación docente, recursos), aprender señas básicas, usar múltiples estrategias de acceso (visual, escrito, gestual) y articular con orientación.",
            "Excluir a la estudiante de las clases orales.",
            "Pedir su traslado a un centro 'especializado'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La inclusión de estudiantes sordos requiere apoyos especializados, formación docente y múltiples estrategias de acceso, gestionados institucionalmente."
    },
    {
        id: 241,
        categoria: "Convivencia",
        pregunta: "La maestra de 3er grado implementa 'palabras mágicas' (por favor, gracias, permiso) como parte del trabajo de convivencia. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Obligar a repetirlas mecánicamente sin comprensión.",
            "Trabajar su significado, modelarlas auténticamente, generar situaciones donde tengan sentido real, y conectarlas con el valor del respeto y el cuidado mutuo, más que imponerlas como fórmulas vacías.",
            "Premiar materialmente cada uso.",
            "Castigar cuando no las usen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. La formación en cortesía auténtica requiere comprensión, modelaje y situaciones significativas, no repetición mecánica ni sistema de premios/castigos."
    },
    {
        id: 242,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza lectura grupal de cuentos. ¿Cuál es el enfoque correcto durante la lectura?",
        opciones: [
            "Leer sin interrupciones y evaluar después con un cuestionario.",
            "Modelar lectura expresiva, hacer pausas para anticipar, verificar comprensión, conectar con experiencias, permitir intervenciones, y construir colectivamente el sentido del texto.",
            "Solo señalar cada palabra para que los estudiantes la lean.",
            "Hacer que los estudiantes lean todos en voz alta a la vez."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La lectura mediada es una práctica didáctica que modela estrategias de comprensión, genera diálogo y construye colectivamente el sentido, no solo la decodificación."
    },
    {
        id: 243,
        categoria: "Evaluación",
        pregunta: "La maestra de 4to grado diseña una evaluación oral. ¿Cuál es la característica correcta de una evaluación oral formativa?",
        opciones: [
            "Preguntas improvisadas sobre temas aleatorios.",
            "Propósito claro, criterios explícitos compartidos con el estudiante, situaciones comunicativas auténticas, valoración con rúbrica, retroalimentación específica y ambiente libre de ansiedad.",
            "Preguntas trampa para 'confundir' al estudiante.",
            "Evaluación sin criterios, basada en 'impresión general'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las evaluaciones orales formativas tienen propósito, criterios, autenticidad, rúbrica, retroalimentación y ambiente respetuoso, no son improvisaciones ni trampas."
    },
    {
        id: 244,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado recibe indicaciones del distrito de incorporar temáticas ambientales. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Dar una clase aislada sobre 'cuidado ambiental' el Día de la Tierra.",
            "Integrar la educación ambiental transversalmente en situaciones de aprendizaje de múltiples áreas (Ciencias, Sociales, Lengua, Matemática), con proyectos de impacto real en el entorno.",
            "Cambiar todo el currículo por temas ambientales.",
            "Ignorar las indicaciones por considerarlas 'extras'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La educación ambiental es transversal en el currículo, integrada en múltiples áreas, con proyectos de impacto auténtico en el entorno."
    },
    {
        id: 245,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 6to grado nota que una estudiante adelgazó visiblemente y rechaza comer. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ignorar la situación porque 'es cosa de niñas'.",
            "Observar con sensibilidad, registrar lo observado, notificar al equipo de orientación para evaluación, articular con la familia de forma cuidadosa y referir a servicios de salud especializados si procede.",
            "Presionar a la estudiante para que coma delante de todos.",
            "Comentar el caso con otros estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Las señales de trastornos alimentarios son de salud y requieren abordaje especializado interdisciplinar (familia, orientación, salud), no presión pública ni exposición."
    },
    {
        id: 246,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado percibe que el centro no dispone adecuadamente de los fondos asignados a material didáctico. ¿Qué corresponde?",
        opciones: [
            "Callar para mantener la armonía laboral.",
            "Consultar transparentemente la situación con la dirección, y si se confirman irregularidades, canalizar formalmente ante las instancias correspondientes (distrito, regional), documentando con rigor.",
            "Denunciar públicamente sin evidencia.",
            "Apropiarse de materiales también para 'no quedarse atrás'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El servidor público tiene deber de denunciar irregularidades en el uso de recursos públicos. El proceso es formal, documentado y por canales institucionales."
    },
    {
        id: 247,
        categoria: "Gestión de Aula",
        pregunta: "En 2do grado, la maestra planifica el uso del tiempo para la recuperación pedagógica de estudiantes en 'EP'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Quitarles el recreo para que 'recuperen'.",
            "Integrar las estrategias de apoyo en momentos regulares del aula (estaciones, tutorías entre pares, apoyos diferenciados), coordinar apoyos extras según recursos del centro, respetando el derecho al juego y descanso.",
            "Extender la jornada diaria solo para ellos.",
            "Enviar las recuperaciones como tareas adicionales a casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho al descanso y juego) y Ordenanza 04-2023. La recuperación pedagógica se integra en el aula regular. No se vulneran derechos fundamentales del niño para 'compensar' dificultades de aprendizaje."
    },
    {
        id: 248,
        categoria: "Inclusión",
        pregunta: "En 4to grado, un estudiante trans (que vive como niño habiendo sido asignado femenino al nacer) solicita usar el baño de varones. La familia lo apoya. ¿Cuál es la actuación correcta?",
        opciones: [
            "Negar la solicitud por 'mantener el orden' tradicional.",
            "Actuar en coordinación con la familia, el equipo de orientación y la dirección para acompañar la identidad del estudiante conforme al principio del interés superior del niño y al derecho a la no discriminación.",
            "Hacer público el caso ante toda la comunidad.",
            "Pedir el traslado del estudiante a otro centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (interés superior del niño, no discriminación), Ordenanza 05-2024. La coordinación institucional y el respeto a la identidad del niño en diálogo con la familia son la vía correcta."
    },
    {
        id: 249,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado quiere evaluar la capacidad de trabajo colaborativo. ¿Cuál es el instrumento apropiado?",
        opciones: [
            "Una prueba escrita individual sobre qué es trabajar en equipo.",
            "Observación sistemática con rúbrica sobre roles, responsabilidad individual, aportes al equipo, respeto mutuo, resolución de conflictos y logro de objetivos compartidos, durante situaciones auténticas.",
            "Una lista de cotejo de comportamientos superficiales.",
            "La nota grupal del producto final únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las competencias sociocognitivas se evalúan mediante observación sistemática con rúbrica en situaciones auténticas de colaboración, no con pruebas escritas sobre definiciones."
    },
    {
        id: 250,
        categoria: "Planificación",
        pregunta: "La maestra de 3er grado recibe un estudiante transferido a mitad de año. ¿Cuál es la actuación correcta?",
        opciones: [
            "Asumir que se adapte al grupo sin más.",
            "Realizar una recepción cálida, diagnosticar sus saberes previos y niveles, revisar registros anteriores, dialogar con la familia, planificar adecuaciones para su incorporación progresiva al currículo en curso.",
            "Aplicarle exámenes de los contenidos 'que se perdió'.",
            "Ignorar su situación específica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Adecuación Curricular 2023. La incorporación de un estudiante transferido requiere recepción, diagnóstico, diálogo con familia y adecuaciones para incorporación progresiva."
    },
    {
        id: 251,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra promueve juegos de palabras, rimas y adivinanzas. ¿Cuál es el propósito pedagógico?",
        opciones: [
            "Solo entretener a los estudiantes.",
            "Desarrollar conciencia fonológica, disfrute lúdico del lenguaje, memoria verbal, creatividad y sensibilidad poética, todos componentes del desarrollo lingüístico y alfabetizador.",
            "Ocupar tiempo cuando no hay actividad.",
            "Aprender vocabulario técnico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Los juegos verbales desarrollan conciencia fonológica, disfrute del lenguaje y sensibilidad poética, componentes centrales de la alfabetización inicial."
    },
    {
        id: 252,
        categoria: "Convivencia",
        pregunta: "En 5to grado, un estudiante se burla repetidamente del acento de un compañero de otra provincia. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ignorar el hecho porque 'son cosas de niños'.",
            "Intervenir pedagógicamente abordando la diversidad lingüística como riqueza, trabajar explícitamente el respeto a las variantes dialectales, generar conciencia sobre la discriminación, activar protocolos si persiste.",
            "Reírse también del acento para 'normalizar'.",
            "Separar al compañero afectado del grupo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Manual de Convivencia. La diversidad lingüística es riqueza. Las burlas por acento son formas de discriminación que requieren intervención pedagógica explícita."
    },
    {
        id: 253,
        categoria: "Inclusión",
        pregunta: "En 2do grado, un estudiante con talento excepcional en música quiere presentar sus canciones. La maestra no es músico. ¿Qué debe hacer?",
        opciones: [
            "Negar la oportunidad por 'no ser música'.",
            "Abrir espacios para que el estudiante comparta su talento, articular con el docente de Educación Artística, valorar sus aportes como enriquecimiento del aula, y gestionar apoyos externos si es posible.",
            "Prohibirle mencionar su interés musical.",
            "Limitar sus presentaciones a las fiestas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los talentos y altas capacidades requieren espacios de desarrollo. La articulación con especialistas y el reconocimiento en el aula son parte de la inclusión educativa."
    },
    {
        id: 254,
        categoria: "Ética",
        pregunta: "La maestra de 4to grado descubre que un estudiante hizo dibujos con contenido sexual explícito en su cuaderno. ¿Cuál es la actuación correcta?",
        opciones: [
            "Castigarlo públicamente por los dibujos.",
            "Abordar la situación con sensibilidad, en privado, notificar al equipo de orientación para evaluación (puede indicar exposición inadecuada, riesgo o abuso), coordinar con la familia de forma sensible.",
            "Exhibir los dibujos ante el grupo.",
            "Ignorar los dibujos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia. Los contenidos sexuales explícitos en producciones infantiles son señales de alerta que requieren evaluación especializada y protocolo de protección, no castigo ni exposición."
    },
    {
        id: 255,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 1er grado observa que un estudiante se duerme recurrentemente en clase. ¿Cuál es la actuación correcta?",
        opciones: [
            "Castigarlo por dormirse.",
            "Indagar sensiblemente posibles causas (sueño insuficiente, condiciones de salud, alimentación, situación familiar), coordinar con la familia, articular con orientación y servicios de salud si corresponde.",
            "Gritarle para que se despierte.",
            "Bajarle la nota por 'dormir en clase'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (protección integral). El sueño excesivo en un niño puede indicar problemas de salud, sueño, alimentación o situaciones familiares, que requieren indagación sensible y articulación especializada."
    },
    {
        id: 256,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica el cierre de una unidad didáctica. ¿Cuál es la función pedagógica del cierre?",
        opciones: [
            "Aplicar el examen y terminar con la unidad.",
            "Sistematizar aprendizajes, reflexionar metacognitivamente sobre los procesos, socializar producciones, autoevaluar el desempeño personal y grupal, y conectar con aprendizajes futuros.",
            "Celebrar con una fiesta sin reflexión pedagógica.",
            "Asignar tarea extra para la casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El cierre de unidades sistematiza, reflexiona metacognitivamente, socializa y conecta con aprendizajes futuros, es fase pedagógica intencionalmente diseñada."
    },
    {
        id: 257,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 3er grado ve que un estudiante llega con ropa de adulto muy grande y zapatos rotos. La familia ha quedado en situación de calle. ¿Cuál es la actuación correcta?",
        opciones: [
            "Asumir que no puede hacer nada pues es situación familiar.",
            "Notificar al equipo de orientación y dirección para activar apoyos institucionales y referimientos a servicios sociales del Estado, proteger la dignidad del estudiante en el aula, articular con la familia de forma sensible.",
            "Comentar la situación con otros padres.",
            "Excluir al estudiante hasta que 'esté presentable'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Las situaciones de vulnerabilidad extrema requieren activación inmediata de apoyos institucionales y referimientos a servicios sociales del Estado. La dignidad del estudiante se protege."
    },
    {
        id: 258,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado integra la autoevaluación al finalizar cada unidad. ¿Cuál es la pregunta formativa más valiosa para los estudiantes?",
        opciones: [
            "'¿Cuánto te mereces de nota?'",
            "'¿Qué aprendí?, ¿Qué me costó?, ¿Qué estrategias usé?, ¿Qué haría diferente la próxima vez?, ¿Cómo me sentí?'",
            "'¿Te portaste bien?'",
            "'¿Te gustó la unidad?'"
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La autoevaluación formativa desarrolla metacognición mediante preguntas sobre aprendizajes, procesos, estrategias, mejoras y dimensión emocional, no sobre calificaciones o comportamiento."
    },
    {
        id: 259,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, un estudiante escribe con letra muy irregular y desigual. La familia se preocupa. ¿Cuál es la respuesta profesional correcta?",
        opciones: [
            "Hacer planas diarias de caligrafía.",
            "Considerar que la caligrafía se consolida gradualmente con el desarrollo motriz, trabajar actividades motrices finas articuladas con la producción significativa, descartar posibles dificultades específicas con apoyo de orientación si persisten.",
            "Bajar la nota por 'mala letra'.",
            "Ignorar completamente la dimensión gráfica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La caligrafía es parte del desarrollo motriz fino que se consolida gradualmente. Se trabaja articuladamente con la producción significativa, no con planas aisladas ni sanciones."
    },
    {
        id: 260,
        categoria: "Inclusión",
        pregunta: "La maestra de 4to grado trabaja con un estudiante que tiene un cuidador por condición médica permanente. ¿Cómo articular el trabajo pedagógico?",
        opciones: [
            "Delegar en el cuidador toda la atención del estudiante.",
            "Mantener la responsabilidad pedagógica principal, coordinar roles con el cuidador, centrar la enseñanza en el estudiante, garantizar su participación plena y las adecuaciones pertinentes.",
            "Ignorar al cuidador y tratar al estudiante como 'normal'.",
            "Aislarlos juntos del resto del aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La presencia de cuidadores/asistentes apoya la inclusión. La responsabilidad pedagógica permanece con el docente, quien coordina roles y garantiza el protagonismo del estudiante."
    },

 {
        id: 261,
        categoria: "Planificación",
        pregunta: "La maestra de 2do grado debe planificar una unidad donde integra saberes previos de los estudiantes. ¿Cuál es la estrategia correcta?",
        opciones: [
            "Asumir que no saben nada sobre el tema.",
            "Activar y recoger los saberes previos mediante estrategias diversas (lluvia de ideas, dibujos, diálogos, preguntas generadoras), articularlos con los nuevos aprendizajes y revisarlos al final de la unidad.",
            "Solo preguntar al inicio 'quién sabe sobre el tema'.",
            "Ignorar los saberes previos e imponer los nuevos contenidos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La activación de saberes previos es fase pedagógica esencial. Se realiza con estrategias diversas, se articula con los nuevos aprendizajes y se revisa al cierre."
    },
    {
        id: 262,
        categoria: "Convivencia",
        pregunta: "En 1er grado, un estudiante llora porque no quiere ir al recreo. Dice que 'los grandes le dan miedo'. ¿Qué debe hacer la maestra?",
        opciones: [
            "Obligarlo a ir al recreo 'para que supere el miedo'.",
            "Acoger emocionalmente al estudiante, indagar sensiblemente qué ocurre (posible intimidación), coordinar con los docentes de acompañamiento del recreo, articular con orientación y trabajar con estudiantes mayores sobre convivencia.",
            "Dejarlo solo en el aula durante el recreo.",
            "Castigarlo por 'no querer integrarse'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Ley 136-03. El miedo persistente puede indicar situaciones de intimidación que requieren atención institucional. La acogida emocional y la articulación interdisciplinar son la vía correcta."
    },
    {
        id: 263,
        categoria: "Evaluación",
        pregunta: "La maestra de 6to grado aplica diferentes tipos de evaluación a lo largo del año. ¿Cuál es la articulación correcta?",
        opciones: [
            "Usar solo evaluación sumativa al final de cada trimestre.",
            "Combinar evaluación diagnóstica (al inicio), formativa (continua durante el proceso), sumativa (al cierre de unidades/períodos), autoevaluación y coevaluación, articuladas con los indicadores del grado.",
            "Aplicar solo un examen final al terminar el año.",
            "Basarse solo en la subjetividad personal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias integra momentos (diagnóstica, formativa, sumativa) y agentes (heteroevaluación, autoevaluación, coevaluación), articulados con los indicadores."
    },
    {
        id: 264,
        categoria: "Ética",
        pregunta: "La maestra de 3er grado debe enseñar un tema sobre el cual tiene conocimiento limitado. ¿Cuál es la actuación correcta?",
        opciones: [
            "Improvisar con información errada para 'cumplir con el plan'.",
            "Prepararse rigurosamente (consultar fuentes confiables, el Diseño Curricular, materiales oficiales, colegas), planificar con base en fuentes verificadas, y reconocer ante los estudiantes cuando algo requiere más indagación conjunta.",
            "Saltarse el tema.",
            "Pedirle a otro docente que lo enseñe sin razón justificada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La formación continua y la preparación rigurosa son deberes profesionales. Reconocer los límites del propio conocimiento e indagar con los estudiantes es práctica honesta y pedagógica."
    },
    {
        id: 265,
        categoria: "Gestión de Aula",
        pregunta: "La maestra de 4to grado establecerá los tiempos de respuesta durante las preguntas en clase. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Exigir respuestas inmediatas sin tiempo de pensamiento.",
            "Dar 'tiempo de espera' suficiente tras la pregunta, permitir pensar individualmente, ofrecer oportunidades de diálogo en parejas antes de la respuesta grupal, y valorar respuestas reflexivas sobre respuestas rápidas.",
            "Siempre llamar al primer estudiante que levante la mano.",
            "Preguntar solo a los 'más rápidos'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El tiempo de espera es estrategia pedagógica que favorece el pensamiento reflexivo, la participación equitativa y el desarrollo cognitivo, superior a la dinámica de respuestas inmediatas."
    },
    {
        id: 266,
        categoria: "Inclusión",
        pregunta: "En 5to grado, una estudiante con discapacidad intelectual leve participa en las clases. Los compañeros tienden a hacer las tareas por ella. ¿Qué debe hacer la maestra?",
        opciones: [
            "Permitir que sus compañeros hagan las tareas por ella.",
            "Promover su autonomía mediante adecuaciones adecuadas, orientar a los compañeros sobre el rol de apoyo (no sustitución), celebrar sus logros propios, y hacer visibles sus aportes al grupo.",
            "Aislarla para 'protegerla' de los demás.",
            "Asignarle trabajos totalmente distintos al resto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión busca desarrollar autonomía. La sustitución por pares, aunque bien intencionada, obstaculiza el aprendizaje propio. El rol de apoyo debe diferenciarse de la sustitución."
    },
    {
        id: 267,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra observa que una estudiante tiene hermano mayor que le 'enseña' en casa de forma mecánica (planas, silabeo). ¿Cuál es la actuación correcta?",
        opciones: [
            "Prohibir cualquier intervención familiar en el proceso.",
            "Dialogar con la familia explicando el enfoque pedagógico oficial, sugerir formas significativas de apoyo en casa (lectura compartida, juegos verbales, producción auténtica), valorar el interés familiar y reorientarlo.",
            "Ignorar la situación.",
            "Criticar a la familia por 'enseñar mal'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La articulación escuela-familia es clave. Se valora el interés familiar reorientándolo hacia prácticas significativas, sin prohibir ni criticar."
    },
    {
        id: 268,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 2do grado observa que un estudiante tiene marcas de cigarrillo en el brazo. Al preguntar, el niño mira al suelo. ¿Cuál es la actuación?",
        opciones: [
            "Asumir que fue un accidente y no hacer más.",
            "Documentar con precisión la observación, acoger al niño sin interrogarlo extensivamente, notificar urgentemente al equipo de orientación y dirección para activar el protocolo de referimiento al CONANI.",
            "Confrontar directamente a la familia.",
            "Comentar con otros docentes el caso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Las marcas de cigarrillo son indicadores graves de maltrato físico. La activación inmediata del protocolo institucional y del CONANI es obligatoria, con resguardo de la integridad del niño."
    },
    {
        id: 269,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica la enseñanza de la geometría. ¿Cuál es la estrategia correcta?",
        opciones: [
            "Dictar las definiciones de figuras geométricas para memorizarlas.",
            "Partir de la observación y manipulación de formas del entorno, experimentar con materiales concretos, progresar a representaciones gráficas y luego a la conceptualización y generalización formal.",
            "Pedir que copien figuras sin análisis.",
            "Mostrar un video sin actividades prácticas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La geometría se enseña desde la experiencia con formas reales, progresando a representaciones y conceptualización, coherente con el desarrollo cognitivo del ciclo."
    },
    {
        id: 270,
        categoria: "Ética",
        pregunta: "La maestra de 5to grado es solicitada para firmar un certificado de buena conducta de un estudiante, cuando sabe que ha tenido conductas preocupantes. ¿Cuál es la actuación correcta?",
        opciones: [
            "Firmar el certificado por 'no perjudicarlo'.",
            "Expresar con veracidad y profesionalismo lo que consta en los registros oficiales, coordinar con la dirección para el formato adecuado, y no emitir certificaciones falsas.",
            "Firmar dejando claro a otros colegas su incomodidad.",
            "Rechazar cualquier solicitud de certificación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Los documentos oficiales deben reflejar la realidad. Las certificaciones falsas son falta ética y pueden tener implicaciones legales. La honestidad documental es un valor irrenunciable."
    },
    {
        id: 271,
        categoria: "Gestión de Aula",
        pregunta: "En 3er grado, la maestra debe formar los equipos para un proyecto. ¿Cuál es el criterio correcto?",
        opciones: [
            "Dejar que los estudiantes se agrupen por amistad únicamente.",
            "Formar grupos heterogéneos (género, desempeño, estilos de aprendizaje, lenguas) que enriquezcan la interacción, garantizando equidad y evitando agrupaciones estigmatizantes, con rotación en distintos proyectos.",
            "Formar grupos 'homogéneos' por nivel de desempeño.",
            "Siempre el mismo agrupamiento durante todo el año."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Adecuación Curricular 2023. La heterogeneidad intencional enriquece el aprendizaje y favorece la inclusión. La rotación diversifica las interacciones a lo largo del año."
    },
    {
        id: 272,
        categoria: "Convivencia",
        pregunta: "La maestra de 4to grado detecta que un estudiante se esconde comida en la mochila porque dice que 'en casa no hay'. ¿Cuál es la actuación correcta?",
        opciones: [
            "Castigarlo por 'robar' comida del centro.",
            "Acoger la situación con sensibilidad, garantizar acceso digno a la alimentación escolar, notificar al equipo de orientación para evaluar la situación familiar, articular apoyos sociales sin exposición estigmatizante.",
            "Exponerlo ante el grupo como 'ladrón'.",
            "Ignorar la situación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la alimentación). La inseguridad alimentaria es vulneración de derechos que exige apoyo institucional y articulación con servicios sociales, no sanción."
    },
    {
        id: 273,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra observa que un estudiante siempre pregunta '¿cómo se escribe esta palabra?' antes de escribirla. ¿Qué revela esto y qué hacer?",
        opciones: [
            "Mala autonomía; castigarlo por preguntar tanto.",
            "Puede indicar dependencia excesiva de la maestra; promover la autoconfianza como escritor, permitir escribir con sus hipótesis, revisar después con estrategias de consulta (carteles de aula, diccionario), construir seguridad en la producción.",
            "Prohibirle preguntar hasta que 'se arriesgue solo'.",
            "Escribir siempre todas las palabras por él."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La autonomía escritora se construye permitiendo producir con las hipótesis actuales, y ofreciendo estrategias de consulta. La dependencia excesiva se supera con autoconfianza construida pedagógicamente."
    },
    {
        id: 274,
        categoria: "Inclusión",
        pregunta: "En 6to grado, un estudiante tiene padres divorciados con custodia compartida conflictiva. Ambos padres dan indicaciones contradictorias sobre el estudiante. ¿Cuál es la actuación correcta?",
        opciones: [
            "Atender solo al padre 'más razonable'.",
            "Solicitar documentación legal sobre custodia, aplicar lo que esté legalmente establecido, actuar con equidad hacia ambos padres en lo que le corresponde al centro, priorizar el interés superior del niño.",
            "Tomar partido por uno de los padres.",
            "Ignorar el conflicto familiar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (interés superior del niño). Las situaciones de custodia se manejan con documentación legal. El centro actúa con equidad y según lo legalmente establecido, priorizando siempre el interés del niño."
    },
    {
        id: 275,
        categoria: "Evaluación",
        pregunta: "La maestra de 1er grado aplica la evaluación de salida del primer año escolar. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Un examen estandarizado idéntico al que se aplica en Secundaria.",
            "Una evaluación integral, contextualizada y lúdica que recoja evidencias de los avances en las competencias del grado, integrando múltiples fuentes del año.",
            "Solo evaluar si sabe leer convencionalmente.",
            "Basarse solo en una prueba escrita de una hora."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación de cierre del grado es integral, contextualizada y adaptada al nivel, recogiendo evidencias acumuladas durante el año."
    },
    {
        id: 276,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado diseña la 'semana cultural' del aula. ¿Cuál es el propósito pedagógico correcto?",
        opciones: [
            "Presentar espectáculos sin articulación curricular.",
            "Articular aprendizajes de múltiples áreas (lengua, sociales, artes) en torno a manifestaciones culturales significativas, con investigación previa, producción auténtica y socialización con la comunidad.",
            "Suspender las clases durante la semana.",
            "Realizar actividades sin planificación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las semanas culturales son oportunidades pedagógicas para articular aprendizajes en torno a manifestaciones culturales, con investigación, producción y socialización."
    },
    {
        id: 277,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado usa material didáctico propio que compró con su dinero. Un padre le ofrece 'comprarle' todo el material para que lo regale a los estudiantes. ¿Cómo debe proceder?",
        opciones: [
            "Aceptar sin más porque 'son recursos para los estudiantes'.",
            "Agradecer y canalizar el apoyo institucionalmente (a través del centro, APMAE), para que beneficie a todos de manera transparente y equitativa, sin generar una relación de deuda personal.",
            "Aceptar el dinero directamente para 'administrarlo' ella.",
            "Rechazar todo apoyo externo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Los apoyos a la comunidad educativa se canalizan institucionalmente con transparencia. Las relaciones económicas directas entre familias y docentes generan dependencias éticamente problemáticas."
    },
    {
        id: 278,
        categoria: "Gestión de Aula",
        pregunta: "En 5to grado, la maestra debe establecer los criterios de 'limpieza' del aula. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Castigar a los estudiantes por dejar basura.",
            "Construir colectivamente los acuerdos de limpieza, establecer rutinas y responsabilidades rotativas, articular con competencias ciudadanas de corresponsabilidad, y educar en el cuidado del espacio común.",
            "Limpiar ella misma todo sin involucrar a los estudiantes.",
            "Pedir a los padres que limpien el aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023. El cuidado del espacio común es aprendizaje ciudadano. Se construye con acuerdos, rutinas y responsabilidades rotativas, no con castigos."
    },
    {
        id: 279,
        categoria: "Inclusión",
        pregunta: "En 3er grado, un estudiante con trastorno del lenguaje tiene dificultades para expresarse oralmente aunque comprende bien. ¿Cuál es la adecuación correcta?",
        opciones: [
            "Exigirle que hable 'como los demás'.",
            "Ofrecer múltiples formatos de expresión (escrita, gráfica, gestual, tecnológica), tiempo adicional, apoyos comunicacionales, articular con orientación y terapia del lenguaje, valorar la comprensión del estudiante.",
            "Excluirlo de toda actividad oral.",
            "Bajarle la nota por no participar oralmente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los trastornos del lenguaje requieren adecuaciones comunicacionales específicas y múltiples formatos de expresión. La participación se garantiza mediante eliminación de barreras comunicacionales."
    },
    {
        id: 280,
        categoria: "Convivencia",
        pregunta: "La maestra de 6to grado observa el surgimiento de 'grupos' cerrados en el aula que excluyen a otros. ¿Qué debe hacer?",
        opciones: [
            "Aceptar la formación de grupos como 'natural'.",
            "Intervenir intencionalmente mediante formación rotativa de equipos heterogéneos, actividades que promuevan interacción diversa, trabajo explícito sobre inclusión y análisis crítico de dinámicas grupales.",
            "Eliminar todas las actividades grupales.",
            "Sancionar a 'los grupos'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. La formación de grupos excluyentes requiere intervención pedagógica intencional para construir cohesión grupal y superar lógicas de exclusión, no aceptación pasiva ni sanción."
    },
    {
        id: 281,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra usa el ambiente letrado del aula. ¿Cuál es el propósito pedagógico?",
        opciones: [
            "Decoración visual sin uso pedagógico.",
            "Poner al alcance de los estudiantes textos diversos con funciones claras (carteles de nombres, calendario, días, rutinas, palabras del campo léxico, textos producidos) que sirvan de referente para sus hipótesis.",
            "Tapar paredes para que el aula 'se vea llena'.",
            "Solo para impresionar a los visitantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El ambiente letrado es recurso pedagógico clave. Textos funcionales al alcance de los estudiantes apoyan la construcción del sistema de escritura y sirven como referentes."
    },
    {
        id: 282,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 4to grado recibe una solicitud no habitual de un padre para 'estar presente' en el aula durante todo el día 'para ver a su hijo'. ¿Cuál es la actuación correcta?",
        opciones: [
            "Permitirlo sin consultar nada más.",
            "Canalizar la solicitud con la dirección del centro, aplicar los protocolos de visita de familias, indagar los motivos y garantizar la protección y privacidad de todos los estudiantes del aula.",
            "Negarle rotundamente la entrada.",
            "Permitirle entrar sin autorización institucional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia. Las visitas de familias siguen protocolos institucionales para proteger la privacidad y seguridad de todos los estudiantes, no solo de uno."
    },
    {
        id: 283,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado registra evidencias de la competencia comunicativa. ¿Cuál es un conjunto apropiado de evidencias?",
        opciones: [
            "Solo calificaciones numéricas de exámenes escritos.",
            "Producciones escritas en distintos géneros, grabaciones de exposiciones orales, participación en diálogos y debates, lecturas comprensivas documentadas, registros de procesos de escritura y edición.",
            "Solo la asistencia y puntualidad.",
            "Calificaciones de otras áreas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Ordenanza 01-2023. Las evidencias de la competencia comunicativa son diversas y multimodales: producciones escritas, orales, participaciones, lecturas, procesos."
    },
    {
        id: 284,
        categoria: "Planificación",
        pregunta: "La maestra de 1er grado planifica situaciones de aprendizaje manipulativas. ¿Cuál es el sustento pedagógico?",
        opciones: [
            "Entretener a los niños pequeños sin propósito.",
            "El aprendizaje en la infancia se construye desde la acción sobre objetos concretos, la manipulación y la experiencia sensorial, base para la progresiva abstracción.",
            "Evitar que los niños se aburran.",
            "Dejar de enseñar 'contenidos serios'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La manipulación es fase esencial del desarrollo del pensamiento en la primera infancia. La abstracción se construye sobre la experiencia concreta, no la sustituye."
    },
    {
        id: 285,
        categoria: "Ética",
        pregunta: "La maestra de 2do grado advierte que su vestimenta habitual es cuestionada por un padre como 'inapropiada'. Ella considera que su vestimenta cumple con las normas del centro. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ceder a la presión y cambiar su vestimenta personal.",
            "Mantener la vestimenta si cumple con las normativas institucionales, canalizar cualquier cuestionamiento por los mecanismos oficiales (dirección, distrito), y no aceptar juicios arbitrarios.",
            "Responder agresivamente al padre.",
            "Renunciar por el cuestionamiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Constitución. El servidor docente cumple las normas institucionales. Los cuestionamientos personales arbitrarios se canalizan institucionalmente, no dando espacio a imposiciones subjetivas."
    },
    {
        id: 286,
        categoria: "Gestión de Aula",
        pregunta: "En 4to grado, la maestra implementa el aprendizaje basado en proyectos. Un estudiante pregunta 'para qué hacer esto si no viene en el examen'. ¿Cómo debe responder?",
        opciones: [
            "'Tienes razón, volvamos a lo que viene en el examen'.",
            "Explicar que el aprendizaje tiene valor en sí mismo, que desarrolla competencias para la vida, y que los proyectos son formas auténticas de aprender y demostrar lo aprendido, articulados con la evaluación por competencias.",
            "Regañarlo por 'cuestionar'.",
            "Ignorar la pregunta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El aprendizaje por proyectos desarrolla competencias auténticas. La pregunta del estudiante es oportunidad para explicar el sentido del aprendizaje más allá del examen."
    },
    {
        id: 287,
        categoria: "Inclusión",
        pregunta: "En 6to grado, una estudiante viene de una familia donde 'la educación es para los hombres'. La estudiante está desmotivada. ¿Qué debe hacer la maestra?",
        opciones: [
            "Respetar la decisión familiar y no intervenir.",
            "Trabajar con sensibilidad cultural la importancia de la educación para todas las personas, articular con orientación para un plan de motivación y diálogo con la familia, promover la autoconfianza de la estudiante.",
            "Criticar a la familia frente a la estudiante.",
            "Ignorar la motivación de la estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (derecho a la educación, no discriminación), Constitución. La educación es derecho universal que trasciende prejuicios. El diálogo respetuoso con la familia y el acompañamiento a la estudiante son la vía."
    },
    {
        id: 288,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra planifica talleres de lectura. ¿Cuál es la estrategia correcta para promover la lectura?",
        opciones: [
            "Imponer un libro obligatorio y evaluar con examen.",
            "Ofrecer diversidad de textos, respetar los ritmos y elecciones individuales, generar conversaciones literarias, modelar estrategias lectoras, y celebrar la lectura como experiencia compartida.",
            "Castigar a los que no lean.",
            "Leer solo para evaluar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La formación lectora se logra con diversidad, respeto a ritmos, conversaciones literarias, modelaje y celebración, no con imposición y evaluación punitiva."
    },
    {
        id: 289,
        categoria: "Convivencia",
        pregunta: "La maestra de 3er grado planifica actividades para el 'Día de la Paz'. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Una simple ceremonia con cantos sobre la paz.",
            "Una jornada que articule reflexión sobre la violencia y la paz, análisis de casos reales del aula y el entorno, producción de acciones concretas de construcción de paz, e integración con competencias ciudadanas.",
            "Cancelar las clases ese día.",
            "Sustituir las clases regulares con videos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. La educación para la paz es curricular y articula reflexión, análisis, acciones concretas e integración con competencias ciudadanas."
    },
    {
        id: 290,
        categoria: "Evaluación",
        pregunta: "La maestra de 4to grado aplica una evaluación escrita. Un estudiante termina muy rápido y su prueba está perfecta. ¿Qué debe hacer?",
        opciones: [
            "Sospechar automáticamente que copió y anularla.",
            "Valorar la evidencia según la rúbrica y criterios establecidos; si tiene fundamentos pedagógicos para considerar irregularidad, aplicar mecanismos de verificación (conversación, pregunta complementaria) sin acusaciones injustas.",
            "Descontar puntos por terminar rápido.",
            "Calificar con 'L' automáticamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Orden Departamental 22-2023. La evaluación se basa en criterios y evidencias. Las sospechas de irregularidad requieren fundamento y mecanismos respetuosos, no acusaciones injustas."
    },
    {
        id: 291,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado planifica la articulación de la educación física con otras áreas. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Considerar Educación Física como área aislada.",
            "Articular cuando corresponda pedagógicamente: movimiento con matemáticas (medidas, patrones), con sociales (juegos tradicionales), con ciencias (cuerpo humano), respetando la especificidad de cada área.",
            "Eliminar la Educación Física por 'no académica'.",
            "Usarla solo como premio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La Educación Física tiene valor propio y puede articularse con otras áreas en proyectos integrados, desarrollando múltiples competencias de manera integral."
    },
    {
        id: 292,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado detecta un error en un documento oficial que ya firmó. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ocultar el error para 'no meterse en problemas'.",
            "Reportar inmediatamente el error a la dirección, solicitar la corrección formal del documento siguiendo los procedimientos institucionales, y asumir la responsabilidad profesional del ajuste.",
            "Alterar el documento sin autorización.",
            "Echar la culpa a otro colega."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Los errores documentales se corrigen por procedimientos formales institucionales. La ocultación o alteración no autorizada son faltas graves. La responsabilidad profesional incluye enmendar errores."
    },
    {
        id: 293,
        categoria: "Gestión de Aula",
        pregunta: "En 2do grado, la maestra implementa el 'responsable del día' entre los estudiantes. ¿Cuál es el propósito?",
        opciones: [
            "Tener un 'ayudante' que le ahorre trabajo a la maestra.",
            "Desarrollar responsabilidad, autonomía, liderazgo positivo rotativo, sentido de pertenencia y competencias ciudadanas, dando a cada estudiante la experiencia de servir a la comunidad del aula.",
            "Premiar solo a los estudiantes 'portados bien'.",
            "Seleccionar siempre al mismo estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Manual de Convivencia. Los roles rotativos desarrollan responsabilidad, autonomía y ciudadanía. Son dispositivos pedagógicos de formación integral, accesibles a todos los estudiantes."
    },
    {
        id: 294,
        categoria: "Inclusión",
        pregunta: "En 4to grado, un estudiante con dificultades económicas graves no puede traer recursos para una actividad. ¿Cuál es la actuación correcta?",
        opciones: [
            "Excluirlo de la actividad.",
            "Prever recursos del centro disponibles, adaptar la actividad para que no dependa del aporte familiar, articular apoyos discretos, y diseñar actividades accesibles económicamente para todas las familias.",
            "Exponerlo ante el grupo por no traer material.",
            "Pedir a los compañeros que 'le presten'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 136-03. La equidad educativa exige diseñar actividades accesibles para todas las familias, sin generar exclusión por condición económica ni exposición estigmatizante."
    },
    {
        id: 295,
        categoria: "Convivencia",
        pregunta: "La maestra de 6to grado recibe la noticia de que un estudiante perdió a un familiar cercano. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ignorar la situación al regreso del estudiante.",
            "Acoger al estudiante con sensibilidad, ofrecer un espacio cálido para expresar sus emociones si lo desea, flexibilizar exigencias académicas temporalmente, articular con orientación y familia, y trabajar el duelo con el grupo si es pertinente.",
            "Forzar al estudiante a hablar delante del grupo.",
            "Pedirle 'normalidad total' al regreso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar y Adecuación Curricular 2023 (dimensión socioemocional). El duelo requiere acogida sensible, flexibilización, articulación especializada y abordaje grupal cuando sea pertinente."
    },
    {
        id: 296,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra propone la escritura de listas como práctica. ¿Cuál es el sentido pedagógico?",
        opciones: [
            "Un ejercicio sin propósito real.",
            "Las listas son un tipo textual funcional que permite trabajar la escritura con propósito auténtico (lista de útiles, invitados, deseos), reflexionar sobre el sistema de escritura y sobre la función social de los textos.",
            "Un relleno cuando no hay otra actividad.",
            "Solo para practicar el trazo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Las listas son tipos textuales funcionales que permiten escribir con propósito auténtico desde el inicio del proceso de alfabetización, articulando reflexión sobre el sistema y la función social."
    },
    {
        id: 297,
        categoria: "Protección Infantil",
        pregunta: "La maestra de 3er grado recibe información anónima de que un estudiante es víctima de violencia doméstica. ¿Cuál es la actuación correcta?",
        opciones: [
            "Ignorar la información por ser anónima.",
            "Registrar formalmente la información, observar al estudiante con sensibilidad pedagógica, notificar al equipo de orientación y dirección para activar protocolo de evaluación conforme al Código del Menor.",
            "Llamar a la familia para confrontarla con la información.",
            "Divulgar la información entre los otros docentes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. La información sobre posible violencia contra un niño, aun anónima, debe activar los protocolos institucionales. La no acción frente a señales de vulneración puede configurar responsabilidad."
    },
    {
        id: 298,
        categoria: "Evaluación",
        pregunta: "La maestra de 5to grado diseña una matriz de evaluación para una unidad. ¿Cuál es la característica correcta?",
        opciones: [
            "Solo listar los contenidos.",
            "Articular competencias, indicadores de logro, instrumentos, momentos, agentes evaluadores y criterios claros, de forma coherente con la planificación didáctica.",
            "Usar solo pruebas escritas.",
            "Evaluar por impresión sin matriz."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La matriz de evaluación articula competencias, indicadores, instrumentos, momentos, agentes y criterios de forma coherente y sistemática, planificando la valoración integral."
    },
    {
        id: 299,
        categoria: "Planificación",
        pregunta: "La maestra de 6to grado planifica la articulación con el Nivel Secundario al final del año. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Ignorar el Nivel Secundario porque 'no le compete'.",
            "Consolidar competencias clave para la transición, desarrollar autonomía, orientar sobre las características del Nivel Secundario, articular con dirección para actividades de acercamiento cuando sea posible.",
            "Asustar a los estudiantes con 'lo difícil' que será Secundaria.",
            "Suspender el currículo para 'preparar' para el otro nivel."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La articulación entre niveles requiere consolidación de competencias, orientación y acercamiento progresivo, no generación de ansiedad ni suspensión del currículo."
    },
    {
        id: 300,
        categoria: "Ética",
        pregunta: "La maestra de 1er grado observa que el director del centro tiene prácticas irregulares en la administración de recursos. ¿Cuál es la actuación correcta?",
        opciones: [
            "Callar por temor a represalias.",
            "Documentar las irregularidades, reportar formalmente a las instancias superiores (distrito, regional, Ministerio) siguiendo los canales establecidos, con protección al denunciante conforme a la normativa pública.",
            "Enfrentar públicamente al director.",
            "Imitar las prácticas irregulares."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 41-08 (Función Pública). El deber de denuncia de irregularidades es un deber ético del servidor público, que se realiza por canales institucionales superiores con documentación adecuada."
    },


    {
        id: 301,
        categoria: "Alfabetización",
        pregunta: "En una evaluación diagnóstica, una maestra de 2do grado identifica que un estudiante se encuentra en la etapa presilábica, escribiendo pseudoletras sin correspondencia sonora. ¿Cuál es la decisión pedagógica más adecuada para propiciar su avance?",
        opciones: [
            "Asignar planas diarias de vocales y consonantes aisladas para que mejore su caligrafía y memorice los trazos.",
            "Diseñar actividades lúdicas con su nombre propio y palabras del contexto, promoviendo la reflexión sobre la direccionalidad y los sonidos.",
            "Referir al estudiante inmediatamente al equipo de Orientación y Psicología por sospecha de discapacidad cognitiva.",
            "Evaluarlo con los mismos indicadores de lectura convencional que al resto del grupo para no hacer diferencias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La alfabetización inicial es un proceso constructivo. La enseñanza debe partir de textos significativos (como el nombre propio) para generar conflicto cognitivo y avance hacia la etapa silábica, descartando prácticas mecánicas o derivaciones prematuras sin apoyo pedagógico previo."
    },
    {
        id: 302,
        categoria: "Evaluación",
        pregunta: "Al finalizar el segundo periodo, los padres de un estudiante de 4to grado reclaman que su hijo tiene 'I' (Iniciado) en varios indicadores de Logro de Lengua Española y exigen que se le asigne 'Logrado' porque él completó todas las tareas en el cuaderno. ¿Cómo debe proceder la maestra?",
        opciones: [
            "Modificar la valoración a 'EP' (En Proceso) para evitar conflictos con la familia y la dirección del centro.",
            "Mostrar a la familia las rúbricas y el portafolio de evidencias continuas, explicando que las tareas son parte del proceso, pero aún falta alcanzar la competencia, y proponer un plan de apoyo conjunto.",
            "Promediar las calificaciones de los cuadernos con un examen escrito para obtener un número objetivo que justifique la nota.",
            "Informarles que el registro de grado es un documento cerrado y no se admiten reclamaciones sobre las valoraciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El sistema de evaluación es criterial y formativo. Las evidencias (portafolios, rúbricas) justifican el nivel de dominio (L, EP, I). La comunicación con la familia debe ser transparente y orientada a establecer acuerdos para la mejora continua, no a ceder ante presiones."
    },
    {
        id: 303,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 5to grado con diagnóstico de TDAH tiene dificultades para mantener la atención en tareas prolongadas, dejando frecuentemente las producciones escritas a medias. ¿Cuál es el ajuste razonable más pertinente según el enfoque de educación inclusiva?",
        opciones: [
            "Eximirlo de las producciones escritas largas para evitar que se frustre y se levante del asiento.",
            "Aplicar la estrategia de fragmentación de la tarea (chunking) y permitirle pausas activas breves, evaluando el mismo indicador de logro mediante múltiples medios de expresión.",
            "Enviarlo al aula de recursos o a la orientación durante las asignaciones escritas para que no interrumpa al resto del curso.",
            "Exigirle que se quede en el recreo hasta que termine la asignación para fomentar su sentido de responsabilidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los Ajustes Razonables y el DUA (Diseño Universal para el Aprendizaje) buscan derribar barreras sin disminuir la expectativa de aprendizaje. Fragmentar la tarea y permitir pausas responde a su necesidad neurobiológica sin excluirlo ni castigarlo."
    },
    {
        id: 304,
        categoria: "Ética",
        pregunta: "Durante el recreo, dos estudiantes de 6to grado se enfrascan en una pelea física. La maestra interviene y los separa de inmediato sin que haya lesiones graves. Según la normativa disciplinaria, ¿cuál es el siguiente paso correcto?",
        opciones: [
            "Expulsarlos del centro educativo por 3 días como medida ejemplarizante para el resto del estudiantado.",
            "Garantizar su seguridad física, escuchar a ambas partes mediante un proceso de mediación y remitir el caso al equipo de gestión/orientación para aplicar medidas formativas.",
            "Obligarlos a darse un abrazo frente a todos y regresar al aula, restando importancia al incidente para no alterar la planificación.",
            "Llamar a la policía escolar para que levante un acta penal, ya que las peleas son delitos tipificados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia (OD 22-2023). Se prohíbe la suspensión como primera medida si niega el derecho a la educación (salvo casos gravísimos estipulados). La prioridad es la integridad, el debido proceso (escucha activa), la mediación y las medidas disciplinarias de carácter formativo, no punitivo."
    },
    {
        id: 305,
        categoria: "Planificación",
        pregunta: "Al diseñar una Unidad de Aprendizaje en 3er grado, la maestra debe asegurar la articulación de las áreas. ¿Cuál es el punto de partida normativo para lograr esta integración con el enfoque por competencias?",
        opciones: [
            "La tabla de contenidos conceptuales del libro de texto oficial.",
            "El diseño de una Situación de Aprendizaje contextualizada que problematice la realidad de los estudiantes y movilice las competencias fundamentales.",
            "La selección de los indicadores de logro más fáciles de evaluar en un examen escrito de selección múltiple.",
            "Las efemérides del calendario escolar exclusivamente, ignorando el contexto local."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La Situación de Aprendizaje es la estrategia por excelencia para dar sentido y contexto a los aprendizajes, permitiendo que los estudiantes apliquen saberes de diversas áreas para resolver un problema o alcanzar un producto."
    },
    {
        id: 306,
        categoria: "Evaluación",
        pregunta: "Al finalizar el grado, un estudiante domina conceptualmente un tema de Matemáticas (sabe las reglas de la división), pero procedimentalmente comete errores constantes y actitudinalmente se rinde rápido. ¿Cómo se debe registrar el Indicador de Logro?",
        opciones: [
            "Como 'Logrado' (L), porque el saber teórico es el fundamento de las matemáticas.",
            "Como 'En Proceso' (EP), ya que la competencia implica la movilización articulada de conceptos, procedimientos y actitudes, la cual aún no es plena.",
            "Como 'Iniciado' (I), como medida de castigo por su falta de esfuerzo actitudinal.",
            "Solicitar al director que decida la calificación, ya que los promedios no aplican."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Una competencia no está 'Lograda' si solo se domina la parte conceptual. Requiere saber, saber hacer y saber ser. Al evidenciar dominio parcial, se valora como En Proceso (EP) para continuar el acompañamiento."
    },
    {
        id: 307,
        categoria: "Ética",
        pregunta: "Una maestra nota que un estudiante de 1er grado tiene moretones repetidos en los brazos y el niño comenta con temor que 'se portó mal en casa'. ¿Cuál es el deber ético e inexcusable de la docente?",
        opciones: [
            "Confrontar directamente a los padres a la hora de la salida frente a otros representantes.",
            "Documentar las observaciones objetivamente y reportar el caso de manera confidencial y urgente al equipo de Orientación y a la Dirección para la activación del protocolo de protección.",
            "Citar al niño frente a todo el curso para que explique qué le pasó y generar empatía.",
            "Omitir la información, ya que los métodos de crianza familiares son privados y no competen a la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (Código del Menor) y protocolos del MINERD. El docente es garante de derechos y tiene la obligación de denunciar sospechas de abuso. Debe hacerse por la vía institucional (Orientación/Dirección) para proteger al menor y evitar revictimización o entorpecimiento legal."
    },
    {
        id: 308,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una clase de Ciencias de la Naturaleza en 4to grado, los estudiantes muestran apatía e indisciplina porque consideran que el tema 'El Sistema Digestivo' es aburrido. ¿Qué acción pedagógica demuestra una gestión efectiva del aprendizaje?",
        opciones: [
            "Imponer un reporte escrito de 5 páginas sobre el tema como tarea evaluativa para obligarlos a estudiar.",
            "Detener la clase expositiva, dialogar sobre sus intereses e introducir una estrategia activa (ej. simulación del recorrido de los alimentos, uso de modelos o recursos digitales) para reenganchar su motivación.",
            "Anotar a todos los estudiantes en el registro anecdótico por falta de respeto a la autoridad docente.",
            "Cambiar de tema a uno más fácil para evitar conflictos en el aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular (Enfoque Constructivista). El docente es un mediador. La motivación y el clima de aula son responsabilidad compartida. Ante la desmotivación, se debe flexibilizar la estrategia didáctica, promoviendo el rol activo del estudiante."
    },
    {
        id: 309,
        categoria: "Alfabetización",
        pregunta: "Un niño de 3er grado lee de manera silabeante, lo que afecta drásticamente su comprensión lectora. Al evaluar el caso, la maestra decide implementar estrategias de fluidez. ¿Cuál de las siguientes acciones es la correcta?",
        opciones: [
            "Hacer que el niño lea textos largos en voz alta frente al grupo para que pierda el miedo.",
            "Utilizar lectura compartida (teatro de lectores, lectura en eco) con textos cortos y significativos, modelando la prosodia sin exponerlo al estrés público.",
            "Dejar de evaluarle la lectura hasta que logre la fluidez por sí solo con el tiempo.",
            "Regresarlo a materiales de 1er grado (cartillas) para que repita las sílabas simples."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y enfoque de Prácticas Sociales del Lenguaje. La fluidez se logra mediante el modelaje y la repetición lúdica y con propósito (lectura en eco/teatro). Exponerlo al grupo genera ansiedad y retroceso (filtro afectivo alto)."
    },
    {
        id: 310,
        categoria: "Inclusión",
        pregunta: "En una sección de 6to grado hay un estudiante usuario de silla de ruedas. La clase de Educación Física requiere realizar un circuito de saltos y carreras. ¿Cómo debe proceder el maestro?",
        opciones: [
            "Eximir al estudiante de la asignatura y enviarlo a la biblioteca a leer sobre deportes.",
            "Adaptar el circuito (DUA) incluyendo estaciones de destreza motriz superior y lanzamientos, permitiendo que el estudiante participe activamente junto a sus compañeros bajo las mismas competencias.",
            "Pedirle que sea el árbitro o anotador durante todo el año escolar, ya que no puede ejecutar los ejercicios.",
            "Darle la máxima calificación por compasión, sin requerirle ningún esfuerzo físico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión exige participación, no solo presencia o roles pasivos. Adaptar la actividad mediante ajustes razonables garantiza su derecho al aprendizaje motor y a la socialización en igualdad de condiciones."
    },
    {
        id: 311,
        categoria: "Planificación",
        pregunta: "El equipo docente de un centro educativo decide implementar la estrategia de 'Proyectos Participativos de Aula'. ¿Cuál es el rol principal de los estudiantes en el diseño de este tipo de proyecto?",
        opciones: [
            "Ejecutar puntualmente las actividades planificadas por el maestro y entregar los recursos a tiempo.",
            "Participar activamente en la elección del problema de investigación, la planificación de actividades y la toma de decisiones, guiados por el docente.",
            "Evaluar exclusivamente el desempeño del maestro al finalizar la implementación del proyecto.",
            "Comprar los materiales necesarios para la feria de cierre de proyecto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los Proyectos Participativos de Aula (PPA) tienen como esencia la agencia del estudiante. Surgen de las necesidades sentidas del grupo, promoviendo ciudadanía, autonomía y competencias fundamentales."
    },
    {
        id: 312,
        categoria: "Evaluación",
        pregunta: "Según la Ordenanza 04-2023, la evaluación de las competencias se fundamenta en la recogida de evidencias. ¿Cuál es la herramienta idónea para organizar y registrar el progreso del estudiante de forma sistemática?",
        opciones: [
            "El examen final estandarizado.",
            "El portafolio de evidencias y el uso continuo de rúbricas, listas de cotejo o escalas estimativas.",
            "La libreta de anotaciones privadas del maestro.",
            "El cuaderno de reportes disciplinarios."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias exige pluralidad de técnicas e instrumentos. El portafolio recoge las producciones, y las rúbricas/escalas valoran el nivel de desempeño de manera objetiva frente a los indicadores."
    },
    {
        id: 313,
        categoria: "Ética",
        pregunta: "Una maestra observa que un padre retira frecuentemente a su hijo al mediodía para ponerlo a trabajar en un negocio informal, afectando gravemente su asistencia y rendimiento. ¿Qué indica el marco legal dominicano?",
        opciones: [
            "Es potestad de la familia decidir sobre el tiempo del menor, la escuela no debe intervenir en asuntos económicos.",
            "Constituye una vulneración al derecho a la educación y trabajo infantil. Debe notificarse a Orientación/Dirección para dialogar con la familia e involucrar a CONANI si hay resistencia.",
            "Dar de baja al estudiante en el SIGERD por inasistencia recurrente sin más trámites.",
            "Bajar las calificaciones del estudiante por faltar a sus responsabilidades escolares."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El interés superior del niño y el derecho a la educación priman sobre cualquier autoridad parental. El trabajo infantil que interfiere con la escuela es ilegal y la institución educativa es la primera red legal de protección y alerta."
    },
    {
        id: 314,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Al abordar la comprensión lectora en 5to grado, el docente nota que los niños decodifican bien, pero no logran inferir información implícita en los textos. ¿Qué estrategia es la más efectiva para superar este obstáculo?",
        opciones: [
            "Incrementar la cantidad de dictados diarios y copias de textos literarios.",
            "Modelar estrategias cognitivas de lectura, haciendo 'preguntas de pensamiento en voz alta' y enseñando a buscar pistas en el texto para conectar ideas.",
            "Obligarlos a buscar en el diccionario todas las palabras del texto antes de leer.",
            "Asignarles libros más gruesos como tarea para la casa para que practiquen solos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Enfoque Textual, Funcional y Comunicativo. La inferencia no se desarrolla por mecanicismo (copia/dictado), sino enseñando explícitamente estrategias de comprensión (hacer hipótesis, buscar pistas contextuales, dialogar sobre el texto)."
    },
    {
        id: 315,
        categoria: "Alfabetización",
        pregunta: "En el 1er ciclo de primaria, un docente observa que algunos estudiantes invierten las letras al escribir (ej. 'b' por 'd'). Según la normativa y el enfoque psicogenético, ¿cómo debe interpretarse este fenómeno en la etapa de apropiación inicial?",
        opciones: [
            "Como un síntoma inequívoco de dislexia severa que requiere medicación.",
            "Como un error constructivo común en la fase de apropiación del sistema de escritura, que debe trabajarse con lateralidad y conciencia fonológica.",
            "Como una falta de atención por uso excesivo de pantallas en el hogar.",
            "Como un déficit visual que impide la asimilación de la forma de las letras."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. En las etapas iniciales de lectura y escritura (1er ciclo), la inversión de grafías (escritura en espejo) es una etapa evolutiva normal que se va superando mediante experiencias ricas en lectoescritura, no patologizando al niño prematuramente."
    },
    {
        id: 316,
        categoria: "Planificación",
        pregunta: "La profesora de Ciencias Sociales de 6to grado decide utilizar el Eje Transversal 'Desarrollo Personal y Profesional' en su planificación. ¿Cómo debe evidenciarse este eje de manera efectiva en la secuencia didáctica?",
        opciones: [
            "Colocando el nombre del eje en el encabezado de la planificación como requisito administrativo.",
            "Integrando actividades donde los estudiantes reflexionen sobre su proyecto de vida, identidad y rol ciudadano mientras estudian procesos históricos o geográficos.",
            "Evaluándolo en un examen separado al final del periodo escolar.",
            "Asignando la responsabilidad de este eje exclusivamente a la orientadora del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los Ejes Transversales no son temas aislados ni trámites de formato; son grandes problemáticas sociales o temas de desarrollo humano que deben permear y dar contexto a las actividades de aprendizaje de las áreas académicas."
    },
    {
        id: 317,
        categoria: "Convivencia",
        pregunta: "Un grupo de alumnos de 5to grado excluye sistemáticamente a un compañero recién llegado al país, burlándose de su acento. ¿Qué acción docente se alinea con la disciplina positiva y las normas de convivencia?",
        opciones: [
            "Castigar al grupo dejándolos sin recreo por una semana para que sientan el rechazo.",
            "Implementar círculos de diálogo o asambleas de aula para abordar la diversidad cultural, fomentando la empatía, y establecer acuerdos colectivos de respeto.",
            "Cambiar al estudiante nuevo de sección para evitar el conflicto y protegerlo.",
            "Ignorar la situación asumiendo que son 'cosas de niños' y se adaptarán solos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. El bullying o acoso por xenofobia requiere intervención proactiva y formativa. El círculo de diálogo (práctica restaurativa) aborda la raíz del problema creando conciencia y empatía grupal, en lugar de evadir (cambiar de aula) o aplicar castigos ineficaces."
    },
    {
        id: 318,
        categoria: "Evaluación",
        pregunta: "Al aplicar la evaluación diagnóstica al inicio del año escolar en 3er grado, la maestra recopila resultados heterogéneos. ¿Cuál es la finalidad normativa principal de esta evaluación?",
        opciones: [
            "Asignar la primera calificación del año en el registro de grado para establecer jerarquías académicas.",
            "Identificar los saberes previos, ritmos y necesidades del grupo para ajustar la planificación pedagógica y diseñar estrategias de nivelación o enriquecimiento.",
            "Demostrar a los padres que los estudiantes no repasaron durante las vacaciones.",
            "Seleccionar a los estudiantes que deben ser excluidos del aula regular."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica tiene carácter estrictamente formativo y orientador (nunca sumativo ni calificador). Su fin es obtener datos para la toma de decisiones pedagógicas y la adaptación de la enseñanza."
    },
    {
        id: 319,
        categoria: "Inclusión",
        pregunta: "Llega al aula de 4to grado un estudiante que presenta mutismo selectivo (habla fluidamente en casa, pero no en la escuela). La planificación exige exposiciones orales individuales. ¿Cómo procede éticamente el docente?",
        opciones: [
            "Obligar al estudiante a exponer frente a todos para que rompa su 'timidez'.",
            "Proveer formas alternativas de expresión temporalmente (ej. grabar un video en casa o hacer un trabajo escrito) mientras coordina con Orientación un plan progresivo de desensibilización.",
            "Reprobarlo en el indicador de expresión oral, ya que el currículo exige la competencia comunicativa en público.",
            "Ignorarlo durante todas las clases para no causarle ansiedad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 (Ajustes Razonables). Forzar a un estudiante con mutismo selectivo agrava el trastorno por ansiedad. El DUA permite múltiples formas de acción y expresión; el medio (hablar en público) puede ajustarse si se demuestra el conocimiento del tema (grabación), mientras se trabaja el área afectiva paralelamente."
    },
    {
        id: 320,
        categoria: "Comportamiento Profesional",
        pregunta: "Se descubre que una maestra de 2do grado completó los registros de grado inventando valoraciones ('L', 'EP', 'I') al final del año porque no sistematizó la evaluación continua. ¿Qué principio normativo y ético está infringiendo gravemente?",
        opciones: [
            "El principio de economía de tiempo, ya que debió delegar esta tarea a los coordinadores.",
            "El principio de evaluación procesual, formativa y basada en evidencias, así como la veracidad ética del documento oficial que certifica el progreso del estudiante.",
            "El principio de autonomía docente, que le permite evaluar como ella considere pertinente al final del ciclo.",
            "Ninguno, si los estudiantes al final lograron ser promovidos de todas formas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Ética Docente. El registro de grado es un documento legal que debe reflejar fielmente un proceso continuo basado en evidencias objetivas recopiladas en el tiempo. La invención de notas falsea el perfil de salida del estudiante y viola la ética profesional."
    },
    
    {
        id: 321,
        categoria: "Evaluación",
        pregunta: "Una estudiante de 2do grado demuestra una excelente fluidez y comprensión lectora al participar en clase de forma oral, pero cuando la maestra le aplica una prueba escrita de comprensión, la niña se bloquea y deja la hoja en blanco. ¿Qué decisión evaluativa procede según la normativa vigente?",
        opciones: [
            "Calificarla con 'I' (Iniciado) porque la evidencia escrita es el único medio válido y auditable en el sistema educativo.",
            "Valorarla como 'EP' (En Proceso) hasta que logre superar su miedo a las pruebas escritas, que son obligatorias.",
            "Validar su comprensión a través de la observación oral, rúbricas de participación y registros anecdóticos, asignándole el 'Logrado' (L) si cumple con el indicador.",
            "Aplicarle la misma prueba escrita repetidas veces hasta que se acostumbre al formato y logre completarla."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias es multimodal y flexible. El docente debe utilizar una diversidad de técnicas e instrumentos. Si el indicador de logro (comprensión) se evidencia oralmente, exigir exclusivamente la vía escrita penaliza el formato, no la competencia."
    },
    {
        id: 322,
        categoria: "Inclusión",
        pregunta: "En una aula de 1er grado, un niño con Trastorno del Espectro Autista (TEA) se tapa los oídos, llora y se esconde debajo de la mesa cada vez que suena el timbre del recreo. ¿Cuál es el ajuste razonable primario que debe implementar la maestra?",
        opciones: [
            "Ignorar la conducta para no reforzarla, asumiendo que con el tiempo se habituará al ruido del centro.",
            "Solicitar a los padres que lo retiren del centro educativo antes de la hora del recreo para evitarle el sufrimiento.",
            "Anticipar el sonido del timbre mediante apoyos visuales y permitirle el uso de audífonos canceladores de ruido antes de que suene.",
            "Obligarlo a salir al patio de inmediato para que socialice, ya que el recreo es un derecho inalienable."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024 (Educación Inclusiva). Las personas con TEA suelen presentar hipersensibilidad sensorial. El Diseño Universal para el Aprendizaje (DUA) y los ajustes razonables exigen modificar el entorno o brindar apoyos (audífonos, anticipación) para eliminar la barrera del entorno, garantizando su bienestar sin excluirlo."
    },
    {
        id: 323,
        categoria: "Alfabetización",
        pregunta: "En 3er grado, un estudiante escribe sus producciones mezclando letras de molde (imprenta) y cursivas en la misma palabra. Su letra es legible y sus textos tienen coherencia. ¿Cuál debe ser la intervención de la docente?",
        opciones: [
            "Calificar negativamente sus producciones hasta que estandarice un solo tipo de caligrafía.",
            "Centrar la retroalimentación en la coherencia, el propósito comunicativo y la legibilidad, permitiendo la hibridación caligráfica mientras el texto sea funcional.",
            "Obligarlo a usar cuadernos de doble raya exclusivamente para cursiva durante todo el año.",
            "Asignarle planas de caligrafía durante el recreo para corregir el vicio motor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 (Alfabetización Inicial). El enfoque es funcional y comunicativo. La prioridad es que el estudiante produzca textos con sentido y propósito. La hibridación de letras (imprenta/cursiva) no es un error conceptual, siempre que la escritura cumpla su función comunicativa y sea legible."
    },
    {
        id: 324,
        categoria: "Planificación",
        pregunta: "Al iniciar el año escolar en 5to grado, la evaluación diagnóstica revela que el 70% del curso no domina la división por una cifra, un pre-requisito para el tema de fracciones contemplado en la primera Unidad de Aprendizaje. ¿Qué debe hacer el maestro?",
        opciones: [
            "Avanzar con las fracciones según el diseño curricular, ya que la división debió ser enseñada y aprendida en 4to grado.",
            "Derivar al 70% del curso al departamento de Orientación para que reciban tutorías extracurriculares.",
            "Suspender el currículo de 5to grado y usar los libros de 3er grado durante el primer semestre completo.",
            "Adecuar la planificación de la unidad, integrando actividades de nivelación y recuperación de la división como base para introducir el concepto de fracciones."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Adecuación Curricular 2023. La planificación debe ser flexible y contextualizada. Los resultados de la evaluación diagnóstica tienen carácter vinculante para la toma de decisiones pedagógicas, obligando al docente a nivelar los saberes previos antes de introducir mayores niveles de complejidad."
    },
    {
        id: 325,
        categoria: "Ética",
        pregunta: "A finales del año escolar, una madre se acerca a la maestra de 4to grado y le ofrece un 'regalo de agradecimiento' a cambio de que le modifique una valoración de 'EP' a 'L' en Matemáticas a su hijo para que pueda estar en el cuadro de honor. ¿Cómo debe proceder la docente?",
        opciones: [
            "Aceptar el regalo pero no cambiar la nota, para no ofender a la madre ni violar el registro.",
            "Rechazar el regalo cordialmente, explicar que la valoración refleja evidencias concretas del desempeño del niño y mantener la calificación ética y profesionalmente.",
            "Cambiar la calificación si el niño promete esforzarse más el próximo año, ya que el cuadro de honor motiva.",
            "Tomar el regalo y denunciar a la madre públicamente en la próxima reunión de padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estatuto del Docente y Ética Profesional. El docente debe mantener una conducta intachable, rechazando cualquier intento de soborno o coerción. La evaluación debe basarse estrictamente en el mérito académico (evidencias del registro de grado) y nunca en favores o compensaciones."
    },
    {
        id: 326,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante un trabajo colaborativo en 6to grado, la maestra nota que en un grupo un solo estudiante hace todo el trabajo mientras los demás conversan de otros temas. ¿Qué estrategia pedagógica corrige efectivamente esta dinámica?",
        opciones: [
            "Separar al grupo y ponerlos a trabajar de forma individual para evitar la distracción.",
            "Calificar con 'L' al estudiante que trabaja y con 'I' a los demás sin mediar palabra.",
            "Reestructurar la actividad asignando roles de interdependencia positiva (ej. coordinador, secretario, investigador), donde el producto final dependa del aporte de todos.",
            "Regañar al grupo frente a todo el curso para generar vergüenza y obligarlos a trabajar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Enfoque Constructivista y Competencia de Trabajo Colaborativo (Adecuación Curricular 2023). El trabajo en grupo no es simplemente 'sentarlos juntos'. Requiere estructurar la interdependencia positiva mediante roles claros, fomentando la corresponsabilidad y la participación equitativa."
    },
    {
        id: 327,
        categoria: "Convivencia",
        pregunta: "En 3er grado, un alumno constantemente interrumpe la clase hablando en voz alta sin levantar la mano, lo que desconcentra a sus compañeros. En el marco de la disciplina positiva, ¿cuál es la mejor intervención?",
        opciones: [
            "Colocarle una cinta adhesiva en la boca simbólicamente por 5 minutos.",
            "Enviar una nota diaria a los padres para que lo castiguen en casa.",
            "Establecer con el grupo acuerdos visuales para el turno de la palabra, ignorar (extinguir) la conducta cuando hable sin permiso y reforzar positivamente cuando levante la mano.",
            "Sacarlo del aula y dejarlo en el pasillo hasta que decida guardar silencio."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual de Convivencia Escolar y OD 22-2023. El conductismo punitivo (humillaciones, exclusión) está prohibido. La disciplina positiva se basa en el establecimiento de rutinas claras, la extinción de conductas disruptivas (no prestando atención al grito) y el refuerzo positivo sistemático de la conducta deseada."
    },
    {
        id: 328,
        categoria: "Evaluación",
        pregunta: "Durante la entrega de informes de progreso (boletines), varios padres de 1er grado expresan molestia porque no entienden las letras (L, EP, I) y exigen calificaciones numéricas del 1 al 100. ¿Cuál es la respuesta institucional de la maestra?",
        opciones: [
            "Convertir en una hoja aparte las letras a números para satisfacer a los padres y evitar conflictos.",
            "Organizar una reunión para socializar la Ordenanza de evaluación, explicando el sentido formativo de las escalas conceptuales y mostrando el portafolio de evidencias de los niños.",
            "Decirles que es una orden del Ministerio y que ella no puede hacer nada al respecto.",
            "Sugerirles que inscriban a sus hijos en un colegio privado si prefieren el sistema numérico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en el Nivel Primario es cualitativa y criterial (Logrado, En Proceso, Iniciado). La familia es un actor clave, por lo que el docente tiene el deber pedagógico de formarlos en la comprensión del modelo de evaluación por competencias y el valor de las evidencias."
    },
    {
        id: 329,
        categoria: "Inclusión",
        pregunta: "Una docente de 5to grado tiene en su aula a una estudiante con baja visión severa (no ceguera total). La estudiante se esfuerza, pero no logra copiar a tiempo de la pizarra. ¿Qué ajuste razonable debe aplicarse inmediatamente?",
        opciones: [
            "Proporcionarle el material impreso en macrotipo (letra ampliada), ubicarla en la primera fila con buena iluminación y verbalizar en voz alta lo que se escribe en la pizarra.",
            "Disminuir la cantidad de indicadores de logro que debe alcanzar, ya que su condición le impide aprender lo mismo que los demás.",
            "Asignarle un compañero que le copie todas las clases para que ella solo escuche.",
            "Recomendar a la familia su traslado a un centro de educación especial."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 05-2024. Los estudiantes con baja visión se benefician de ajustes de acceso (macrotipos, ubicación, contraste, iluminación) y apoyos verbales (DUA). Reducir los indicadores o derivarla a educación especial vulnera su derecho a una educación regular inclusiva y equitativa."
    },
    {
        id: 330,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la maestra observa que un estudiante escribe 'elperrocorre' todo junto. Desde la perspectiva de la alfabetización inicial, este fenómeno se conoce como hiposegmentación. ¿Qué actividad ayuda a corregir esto de manera constructiva?",
        opciones: [
            "Hacer que copie la oración 50 veces con los espacios correctos marcados en rojo.",
            "Restarle puntos en todas las materias hasta que comience a separar las palabras correctamente.",
            "Realizar juegos de conciencia léxica, como aplaudir por cada palabra en una oración oral, o usar bloques físicos para representar cada palabra antes de escribirla.",
            "Entregarle un diccionario para que busque cómo se escribe cada palabra por separado."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 01-2023. La hiposegmentación es común cuando el niño aún no diferencia la cadena hablada (que es continua) de la escrita (que requiere blancos). Las estrategias de conciencia léxica (contar palabras oralmente, usar fichas) ayudan a materializar el concepto de 'palabra' antes del trazo."
    },
    {
        id: 331,
        categoria: "Planificación",
        pregunta: "La maestra de 4to grado desea planificar utilizando el Eje Transversal 'Salud y Bienestar' en el área de Lengua Española. ¿Qué actividad evidencia una correcta integración de este eje según el enfoque por competencias?",
        opciones: [
            "Pedir a los estudiantes que dibujen una fruta en su cuaderno de dibujo libre.",
            "Analizar textos instructivos (recetas saludables) y luego redactar su propio texto informativo sobre los beneficios de la hidratación para publicarlo en el mural.",
            "Dictar una definición de 'salud' extraída de la Organización Mundial de la Salud para que la memoricen.",
            "Invitar a un médico a dar una charla mientras los niños se mantienen en silencio escuchando pasivamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La integración de los Ejes Transversales debe movilizar las competencias específicas del área. En Lengua Española, el eje debe abordarse produciendo y comprendiendo textos (instructivos, informativos) con propósito y significado."
    },
    {
        id: 332,
        categoria: "Ética",
        pregunta: "Al terminar su jornada, una maestra de 6to grado escucha a un grupo de sus estudiantes planificando una pelea a la salida, a dos cuadras del recinto escolar. ¿Cuál es la responsabilidad de la docente?",
        opciones: [
            "Ignorar la situación, ya que el evento ocurrirá fuera del horario escolar y fuera de las instalaciones del centro.",
            "Intervenir preventivamente informando de inmediato al equipo de gestión y a la Policía Escolar para disuadir la confrontación y contactar a las familias.",
            "Esperar a ver si la pelea ocurre realmente y al día siguiente sancionar a los que lleguen golpeados.",
            "Grabar la conversación con su teléfono celular para tener pruebas en caso de que los padres reclamen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código del Menor (Ley 136-03) y Manual de Convivencia. El deber de cuidado y la responsabilidad ética del docente no terminan estrictamente en el portón físico si tiene conocimiento previo de un riesgo inminente a la integridad física de sus estudiantes. Debe alertar a las autoridades correspondientes."
    },
    {
        id: 333,
        categoria: "Gestión del Aprendizaje",
        pregunta: "La maestra de 2do grado observa que las transiciones entre las asignaturas (ej. de Matemática a Lengua Española) son caóticas; los niños corren, gritan y tardan 15 minutos en acomodarse. ¿Cuál es la solución pedagógica adecuada?",
        opciones: [
            "Amenazar con quitarles el recreo si no se callan de inmediato.",
            "Implementar una rutina de transición clara (ej. una canción breve o una dinámica de palmas) que marque el inicio y fin de la actividad, modelándola y practicándola con el grupo.",
            "Aumentar el volumen de voz por encima de los gritos de los niños para imponer respeto.",
            "Dejar que hagan ruido libremente porque los niños de esa edad necesitan desahogarse."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Criterios de Gestión de Aula. El tiempo pedagógico es valioso. Las transiciones caóticas se deben a la falta de rutinas establecidas. Las dinámicas de anclaje (canciones, conteos) proveen predictibilidad y ayudan a la autorregulación infantil sin recurrir a gritos ni amenazas."
    },
    {
        id: 334,
        categoria: "Evaluación",
        pregunta: "En 5to grado, el profesor aplica una estrategia de coevaluación tras unas exposiciones. Nota que los estudiantes se califican entre ellos con la máxima puntuación ('Logrado') simplemente por amistad, sin importar los errores. ¿Cómo se corrige esta práctica?",
        opciones: [
            "Eliminar la coevaluación del sistema de calificación, ya que los niños no son maduros para evaluar objetivamente.",
            "Proveer a los estudiantes de una lista de cotejo o rúbrica con criterios simples y específicos observables, modelando primero cómo evaluar constructivamente.",
            "Bajarles la calificación a los estudiantes que mientan evaluando a sus amigos.",
            "Que la coevaluación se haga de forma secreta y anónima para evitar represalias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La coevaluación es obligatoria y desarrolla el pensamiento crítico y ético. No funciona si se deja a la subjetividad total; el docente debe andamiar el proceso entregando instrumentos (rúbricas/listas de cotejo) y enseñando a dar retroalimentación basada en evidencias."
    },
    {
        id: 335,
        categoria: "Inclusión",
        pregunta: "Un alumno de 3er grado posee Altas Capacidades (superdotación). Termina las tareas en la mitad del tiempo que sus compañeros y luego comienza a interrumpir la clase por aburrimiento. ¿Qué respuesta educativa corresponde?",
        opciones: [
            "Asignarle el doble de la misma tarea (ej. si son 10 sumas, ponerle 20) para mantenerlo ocupado.",
            "Promoverlo inmediatamente a 5to grado para que esté con niños de su nivel intelectual.",
            "Aplicar estrategias de enriquecimiento curricular, ofreciéndole proyectos de investigación autónomos o asignándole el rol de tutor de pares.",
            "Exigirle que se quede en silencio absoluto hasta que el último de sus compañeros termine."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024 (Educación Inclusiva). Las Altas Capacidades también son necesidades específicas de apoyo educativo (NEAE). Repetir la misma tarea no estimula, castiga. El enriquecimiento curricular y las tareas de mayor desafío cognitivo (o tutoría de pares) atienden su ritmo sin aislarlo socialmente."
    },
    {
        id: 3036,
        categoria: "Planificación",
        pregunta: "Una docente de 1er grado tiene 15 años usando un libro de texto que le encanta. El equipo de coordinación le indica que debe planificar por competencias usando la nueva adecuación, pero ella insiste en seguir el índice del libro. ¿Cuál es el rol normativo de los recursos didácticos?",
        opciones: [
            "El libro de texto es la guía oficial que dicta la secuencia, por lo tanto, la maestra tiene la razón.",
            "El libro de texto es solo un recurso de apoyo. La planificación debe guiarse por las Competencias, Indicadores de Logro y Situaciones de Aprendizaje estipuladas en la Adecuación Curricular vigente.",
            "Se debe dividir el año en dos: medio año para el libro y medio año para las competencias.",
            "La docente puede apelar al derecho de cátedra para no utilizar el currículo oficial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El currículo dominicano es prescriptivo en sus competencias e indicadores. Los libros de texto son medios y recursos de apoyo (mediadores del aprendizaje), pero nunca sustituyen al Diseño Curricular ni determinan la planificación contextualizada."
    },
    {
        id: 337,
        categoria: "Convivencia",
        pregunta: "En el aula de 4to grado se ha perdido un estuche valioso. Un alumno acusa directamente a otro de haberlo robado basándose en rumores. La situación está generando hostilidad grupal. ¿Qué medida asertiva debe tomar el docente?",
        opciones: [
            "Revisar públicamente las mochilas de todos los estudiantes para demostrar la culpabilidad o inocencia del acusado.",
            "Llamar a los implicados a un diálogo privado, evitar juicios prematuros, investigar los hechos con objetividad y fomentar un clima de restitución y honestidad.",
            "Obligar al acusado a reponer el estuche para calmar al resto del curso.",
            "Decir que 'lo que se pierde en la escuela no aparece' y prohibir que lleven cosas de valor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia Escolar. El cacheo público de mochilas vulnera la dignidad y privacidad del menor. Las acusaciones sin pruebas (difamación) deben manejarse mediante el debido proceso, indagación discreta y mediación, garantizando la presunción de inocencia y el respeto mutuo."
    },
    {
        id: 338,
        categoria: "Alfabetización",
        pregunta: "Para iniciar el proceso de alfabetización, un maestro de 1er grado dedica las primeras semanas exclusivamente a que los niños reconozcan que la palabra 'mariposa' tiene cuatro golpes de voz (ma-ri-po-sa) y busquen rimas. ¿Qué habilidad precursora está desarrollando?",
        opciones: [
            "La motricidad fina y el agarre de pinza.",
            "La conciencia fonológica (conciencia silábica y rima), indispensable para comprender el principio alfabético.",
            "La comprensión lectora de textos complejos.",
            "La ortografía visual de palabras trabadas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La conciencia fonológica (capacidad de identificar y manipular los sonidos del lenguaje oral) es el principal predictor del éxito en la alfabetización inicial. Jugar con rimas y segmentación silábica prepara el cerebro para la decodificación posterior."
    },
    {
        id: 339,
        categoria: "Evaluación",
        pregunta: "Un estudiante de 6to grado de un contexto socioeconómico vulnerable no entregó el informe de investigación final porque requería acceso a internet y su familia no tiene recursos. El resto del curso sí lo entregó. ¿Cómo procede el docente desde un enfoque de equidad?",
        opciones: [
            "Colocarle una calificación de 'I' (Iniciado), ya que es su responsabilidad cumplir con las tareas asignadas en la fecha límite.",
            "Facilitarle el uso de los equipos tecnológicos de la escuela durante un tiempo extra o adaptar el instrumento para evaluar su aprendizaje mediante fuentes bibliográficas físicas disponibles en el centro.",
            "Regalarle la calificación para no afectar su autoestima por ser pobre.",
            "Exigirle a los padres que vayan a un centro de internet (ciber) como obligación parental."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y principios de Equidad e Inclusión. La evaluación no debe penalizar la desigualdad socioeconómica. Si el estudiante carece de medios en casa, la escuela debe compensar esa brecha garantizando el acceso a los recursos (laboratorio TIC o biblioteca) para que pueda demostrar su competencia."
    },
    {
        id: 340,
        categoria: "Comportamiento Profesional",
        pregunta: "Al entregar una prueba de Matemática corregida en 5to grado, un estudiante levanta la mano y le demuestra al profesor, con respeto y argumentos lógicos, que un problema calificado como incorrecto estaba, en realidad, bien resuelto mediante otro método. ¿Cuál es la actitud ética del docente?",
        opciones: [
            "Decirle que el único método válido es el que se enseñó en la pizarra para evitar confusiones en los demás.",
            "Reconocer el error abiertamente frente a la clase, felicitar al estudiante por su pensamiento lógico y corregir la calificación en el registro.",
            "Cambiar la nota en privado pero decirle frente al grupo que no vuelva a contradecir al maestro.",
            "Borrar el problema del examen para todos, invalidando la pregunta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Perfil del Docente (Estatuto Docente) y Enfoque por Competencias. Promover el pensamiento crítico y la resolución de problemas (Competencia de Resolución de Problemas) implica aceptar la pluralidad de métodos. Un docente ético modela humildad intelectual, reconociendo el acierto del estudiante y valorando el proceso lógico divergente."
    },

    {
        id: 341,
        categoria: "Evaluación",
        pregunta: "Al corregir los cuadernos de 3er grado, la maestra nota que un estudiante ha logrado resolver problemas matemáticos complejos, pero su caligrafía es muy deficiente y hay tachaduras. ¿Cómo debe proceder la valoración del indicador de resolución de problemas según la Ordenanza 04-2023?",
        opciones: [
            "Calificar con 'Iniciado' (I) porque la presentación y la caligrafía son parte integral de la formación del estudiante.",
            "Valorar el indicador como 'Logrado' (L) basándose en la validez del razonamiento matemático, independientemente de la caligrafía, y tratar la escritura como un aspecto a mejorar en Lengua Española.",
            "Restar puntos de la calificación final por cada tachadura encontrada para fomentar el orden.",
            "Exigirle que pase todo el cuaderno a limpio antes de asignarle una valoración en el registro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias exige valorar cada competencia según sus propios criterios. Si el indicador evalúa razonamiento lógico-matemático, la caligrafía no debe penalizar ese logro específico; esta última debe ser abordada desde la competencia comunicativa."
    },
    {
        id: 342,
        categoria: "Alfabetización",
        pregunta: "Una maestra de 1er grado implementa la 'Lectura de Etiquetas' de productos comunes que los niños traen de casa. ¿Cuál es el propósito pedagógico fundamental de esta actividad según la Ordenanza 01-2023?",
        opciones: [
            "Que los niños aprendan a consumir productos específicos de marcas reconocidas.",
            "Aprovechar el contexto y los textos de circulación social para que el niño comprenda que las letras 'dicen algo' y desarrolle la conciencia gráfica.",
            "Entretener a los estudiantes con colores llamativos para mantener el orden en el aula.",
            "Evitar el uso de libros de texto oficiales porque las etiquetas son más económicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El enfoque funcional y comunicativo parte de textos reales. Leer etiquetas permite al niño en etapa inicial hacer predicciones sobre el contenido del texto basándose en el contexto (lectura no convencional), un paso previo vital para la alfabetización."
    },
    {
        id: 343,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 4to grado con discapacidad motora en las manos utiliza un software de dictado por voz para realizar sus producciones de Lengua Española. ¿Cómo debe ser considerada esta acción por el docente?",
        opciones: [
            "Como una trampa, ya que el currículo exige que el estudiante escriba de su puño y letra.",
            "Como un ajuste razonable de acceso que permite al estudiante demostrar su competencia de producción escrita sin que su limitación física sea una barrera.",
            "Como una excepción que solo se permite si el estudiante tiene una certificación médica de un hospital militar.",
            "Como una razón para calificarlo siempre con 'EP' (En Proceso), ya que no hace el mismo esfuerzo físico que los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes razonables incluyen el uso de tecnologías de apoyo. La competencia es 'producción escrita' (capacidad de organizar ideas y sintaxis), no el acto motor del trazo, por lo que el dictado por voz es una evidencia válida."
    },
    {
        id: 344,
        categoria: "Ética",
        pregunta: "La dirección del centro le solicita a una maestra de 5to grado que imparta tutorías remuneradas los sábados a sus propios estudiantes que están en riesgo de reprobar. ¿Es esta práctica éticamente correcta según la normativa docente dominicana?",
        opciones: [
            "Sí, siempre que el pago se haga a través de la asociación de padres (APMAE).",
            "No, el docente no debe recibir pagos directos de sus propios estudiantes o familias por servicios educativos, ya que genera un conflicto de intereses y falta de equidad.",
            "Sí, porque el docente tiene libertad de usar su tiempo libre como prefiera.",
            "No, a menos que el director del distrito escolar firme una autorización especial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código de Ética y Estatuto Docente. El cobro por tutorías a los propios alumnos del docente está prohibido por ética profesional, ya que puede condicionar la evaluación objetiva y crear privilegios basados en la capacidad económica de la familia."
    },
    {
        id: 345,
        categoria: "Planificación",
        pregunta: "Al planificar una unidad sobre 'La Comunidad' en 2do grado, la maestra decide realizar una visita al ayuntamiento local. ¿A qué componente del diseño curricular pertenece esta actividad?",
        opciones: [
            "Contenido conceptual.",
            "Estrategia de enseñanza y aprendizaje (Recuperación de experiencias previas y descubrimiento).",
            "Evaluación diagnóstica sumativa.",
            "Competencia fundamental ética únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las visitas o excursiones pedagógicas son estrategias didácticas que permiten el aprendizaje por descubrimiento y la inserción del estudiante en el entorno, facilitando el aprendizaje significativo."
    },
    {
        id: 346,
        categoria: "Evaluación",
        pregunta: "Un estudiante de 6to grado ha faltado al 25% de las clases de un periodo por enfermedad justificada, pero ha entregado todos los trabajos. ¿Qué establece la normativa sobre la promoción respecto a la asistencia?",
        opciones: [
            "Reprueba automáticamente por no cumplir con el 80% de asistencia mínima.",
            "El centro debe analizar la justificación médica y, si el estudiante demuestra el logro de las competencias a través de sus producciones, se puede validar su promoción.",
            "Se le deben asignar exámenes extraordinarios de todas las materias independientemente de sus notas.",
            "La asistencia no tiene ninguna importancia en el Nivel Primario, solo las notas finales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Aunque se requiere un 80% de asistencia, las ausencias justificadas (salud) deben ser tratadas con flexibilidad pedagógica, priorizando la demostración de las competencias sobre el conteo punitivo de días."
    },
    {
        id: 347,
        categoria: "Inclusión",
        pregunta: "En 3er grado hay una estudiante con Albinismo que sufre de fotofobia (sensibilidad extrema a la luz). ¿Cuál es la medida de gestión de aula más adecuada para ella?",
        opciones: [
            "Ubicarla en el lugar más oscuro del aula y no dejarla salir al recreo.",
            "Permitir el uso de lentes oscuros y gorra dentro del aula, y ubicar su pupitre lejos de las ventanas y del reflejo directo de la pizarra.",
            "Exigirle que se adapte a la iluminación estándar del aula para no acostumbrarla a privilegios.",
            "Asignarle una maestra sombra que le lea todo el tiempo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes razonables para estudiantes con condiciones visuales específicas incluyen la gestión del entorno (iluminación) y el permiso para usar apoyos personales (lentes/gorra) que garanticen su comodidad y acceso al aprendizaje."
    },
    {
        id: 348,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Un grupo de 5to grado muestra dificultades para trabajar en equipo, terminando siempre en discusiones. La maestra decide implementar la estrategia de 'Mediación de Pares'. ¿Qué busca lograr primordialmente?",
        opciones: [
            "Que los estudiantes se castiguen entre ellos sin que la maestra intervenga.",
            "Desarrollar la competencia ética y ciudadana, permitiendo que los mismos estudiantes resuelvan sus conflictos mediante el diálogo y el consenso.",
            "Identificar quién es el líder más agresivo para suspenderlo.",
            "Ahorrar tiempo de clase para poder terminar los contenidos del libro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Adecuación Curricular (Competencia Ética y Ciudadana). La mediación de pares es una estrategia formativa que empodera a los estudiantes en la cultura de paz y resolución pacífica de conflictos."
    },
    {
        id: 349,
        categoria: "Alfabetización",
        pregunta: "Durante la etapa de escritura silábica-alfabética, un niño escribe 'MAIPOSA' (omitiendo la 'R'). ¿Cómo debe reaccionar la maestra ante este 'error'?",
        opciones: [
            "Tacharlo con rojo y escribir 'MAL' al lado para que no lo repita.",
            "Realizar una intervención centrada en la conciencia fonológica, pidiéndole que repita la palabra lentamente y note el sonido que le falta, valorando el avance hacia la escritura convencional.",
            "Ignorarlo, ya que eventualmente aprenderá a escribir solo al llegar a 6to grado.",
            "Mandarlo a repetir la palabra 'Mariposa' 100 veces en casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. En la alfabetización inicial, las omisiones son parte del proceso de construcción del sistema de escritura. La retroalimentación debe ser constructiva, promoviendo la reflexión sobre el sonido-grafía (conciencia fonológica) sin penalizar el error como fracaso."
    },
    {
        id: 350,
        categoria: "Planificación",
        pregunta: "Al seleccionar los medios y recursos para una unidad de Ciencias de la Naturaleza, ¿cuál debe ser el criterio principal de la maestra de 4to grado?",
        opciones: [
            "Que sean los más costosos y modernos del mercado.",
            "Que sean coherentes con el nivel de desarrollo de los estudiantes, promuevan la indagación y faciliten el logro de los indicadores de logro propuestos.",
            "Que sean recursos que los estudiantes puedan usar solos sin que el maestro tenga que explicar nada.",
            "Que sean exclusivamente digitales, eliminando el uso de materiales concretos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los recursos deben servir como mediadores del aprendizaje. Su selección depende de la intención pedagógica y de su capacidad para movilizar competencias de manera efectiva en el contexto específico de los alumnos."
    },
    {
        id: 351,
        categoria: "Evaluación",
        pregunta: "Un docente de 6to grado decide utilizar el 'Registro Anecdótico' para evaluar. ¿Qué tipo de información debe asentar en este instrumento para que sea válido profesionalmente?",
        opciones: [
            "Opiniones personales sobre la personalidad de los padres del estudiante.",
            "Hechos significativos observables, descritos de forma objetiva, sin juicios de valor, junto con una interpretación pedagógica breve.",
            "Una lista de todos los estudiantes que no trajeron la tarea.",
            "Comentarios sobre la apariencia física de los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El registro anecdótico es una técnica de observación. Su validez radica en la objetividad de la descripción del hecho (incidente crítico o avance notable) para luego realizar un análisis pedagógico que oriente la intervención."
    },
    {
        id: 352,
        categoria: "Inclusión",
        pregunta: "Llega un estudiante de 2do grado que habla una lengua extranjera y no domina el español. ¿Cuál es la primera acción que debe tomar la maestra de grado?",
        opciones: [
            "Pedir que lo cambien de curso hasta que aprenda español en un instituto privado.",
            "Utilizar apoyos visuales, gestuales y el juego como lenguaje universal, mientras solicita apoyo al equipo de orientación para un plan de acogida lingüística.",
            "No evaluarlo durante todo el año escolar porque no entiende lo que se le dice.",
            "Prohibirle que hable su lengua materna en el aula para que se fuerce a aprender español rápido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Enfoque de Derechos. La barrera lingüística no debe ser causa de exclusión. El docente debe adaptar su comunicación y fomentar un ambiente de respeto a la identidad cultural del estudiante mientras facilita la adquisición del español."
    },
    {
        id: 353,
        categoria: "Alfabetización",
        pregunta: "En una actividad de 'Escritura Colectiva' en 1er grado, la maestra escribe en la pizarra lo que los niños le dictan sobre un paseo. ¿Qué está modelando principalmente con esta estrategia?",
        opciones: [
            "Que ella sabe escribir mejor que ellos.",
            "El proceso de planificación, textualización y revisión de un texto, y la correspondencia entre lo que se dice y lo que se escribe.",
            "Una forma de mantenerlos callados mientras ella escribe.",
            "Que no es necesario que ellos aprendan a escribir si ella lo hace por ellos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La escritura a través del maestro es una estrategia potente de alfabetización donde el docente actúa como 'escriba', permitiendo que los niños se centren en la composición del mensaje mientras observan las convenciones del sistema escrito."
    },
    {
        id: 354,
        categoria: "Planificación",
        pregunta: "Al diseñar una 'Situación de Aprendizaje', una maestra incluye: el contexto, el problema o reto, la estrategia, las actividades y el producto esperado. ¿Qué elemento falta para que esté completa según la Adecuación Curricular?",
        opciones: [
            "La firma de todos los padres de la sección.",
            "El punto de llegada o vinculación con las competencias y el para qué se aprende.",
            "El precio de los materiales que se van a utilizar.",
            "Una lista de castigos para quienes no participen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Una Situación de Aprendizaje debe tener una intención pedagógica clara, conectando el reto del contexto con las competencias que se pretenden desarrollar (el 'para qué')."
    },
    {
        id: 355,
        categoria: "Ética",
        pregunta: "Una maestra de 3er grado se da cuenta de que el refrigerio escolar llegó en mal estado (leche cortada). ¿Cuál es su acción inmediata según su rol profesional?",
        opciones: [
            "Decirle a los niños que se la tomen rápido para no desperdiciar comida del gobierno.",
            "Impedir la distribución del producto, informar inmediatamente a la dirección para que se reporte a INABIE y buscar una alternativa para asegurar la alimentación de los niños ese día.",
            "Llevarse la leche para su casa para dársela a sus mascotas.",
            "No decir nada para evitarse problemas con el suplidor del almuerzo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y protocolos de salud escolar. El docente tiene un deber de cuidado sobre la salud física de sus estudiantes. Distribuir alimentos en mal estado es una negligencia grave contra la integridad del menor."
    },
    {
        id: 356,
        categoria: "Evaluación",
        pregunta: "En 4to grado, la maestra utiliza la 'Autoevaluación'. Un estudiante que no trabajó nada se califica con la nota máxima. ¿Qué debe hacer la maestra para que esta estrategia sea efectiva?",
        opciones: [
            "Humillarlo frente a todos por mentiroso.",
            "Realizar una entrevista de retroalimentación privada donde se contrasten las evidencias del portafolio con su percepción, ayudándole a reflexionar sobre su proceso real.",
            "Aceptar la nota que él se puso porque la autoevaluación es subjetiva y no se puede cuestionar.",
            "Eliminar la autoevaluación y decidir ella sola la nota de todos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La autoevaluación es un proceso de metacognición. Cuando no coincide con la realidad, el docente debe intervenir como mediador para que el estudiante aprenda a valorar su propio desempeño con honestidad basándose en criterios y evidencias."
    },
    {
        id: 357,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para trabajar la resolución de conflictos en 6to grado, la maestra propone un 'Juego de Roles' donde los estudiantes representan una discusión por un turno de juego. ¿Cuál es la ventaja pedagógica de esta técnica?",
        opciones: [
            "Que los estudiantes se diviertan y pierdan el tiempo de clase.",
            "Que puedan experimentar empatía al ponerse en el lugar del otro y ensayar soluciones asertivas en un ambiente seguro.",
            "Identificar quién actúa mejor para enviarlo a un casting de televisión.",
            "Que los estudiantes se peleen de verdad para luego poder castigarlos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de aprendizaje (Adecuación Curricular). El juego de roles es una estrategia de aprendizaje socioemocional que permite el ensayo de conductas sociales y el desarrollo de la competencia comunicativa y ciudadana."
    },
    {
        id: 358,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 1er grado presenta dificultades severas de lenguaje oral (dislalia). Los compañeros se burlan cuando habla. ¿Qué acción debe priorizar la maestra?",
        opciones: [
            "Pedirle al estudiante que no hable en clase para que no se burlen de él.",
            "Trabajar con el grupo la valoración de la diversidad y el respeto, mientras realiza actividades de estimulación del lenguaje y coordina con la familia la visita a un fonoaudiólogo.",
            "Castigar a todos los que se rían con reportes en el registro anecdótico.",
            "Grabar al niño hablando para mostrarle lo mal que suena y que así intente mejorar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Manual de Convivencia. La inclusión implica eliminar barreras actitudinales (la burla) y brindar apoyos específicos. La maestra debe ser modelo de aceptación y facilitadora de apoyos externos necesarios."
    },
    {
        id: 359,
        categoria: "Planificación",
        pregunta: "La maestra de 5to grado integra el uso de tablets proporcionadas por el MINERD para que los estudiantes investiguen sobre el relieve dominicano. ¿Bajo qué competencia fundamental se ampara principalmente esta acción?",
        opciones: [
            "Competencia Ética y Ciudadana solamente.",
            "Competencia Científica y Tecnológica.",
            "Competencia de Desarrollo Personal y Espiritual.",
            "Competencia Ambiental y de la Salud únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El uso de herramientas digitales para la investigación, selección de información y resolución de problemas está directamente vinculado a la Competencia Científica y Tecnológica."
    },
    {
        id: 360,
        categoria: "Evaluación",
        pregunta: "Al finalizar un proyecto sobre 'Plantas Medicinales' en 2do grado, los estudiantes presentan un huerto escolar. ¿Qué tipo de evaluación se está realizando en este momento de cierre?",
        opciones: [
            "Evaluación diagnóstica inicial.",
            "Evaluación sumativa o de producto final para valorar el nivel de logro de las competencias trabajadas.",
            "Evaluación de castigo por no estudiar para el examen.",
            "No es evaluación, es solo una actividad recreativa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La presentación del producto de un proyecto es un hito de evaluación sumativa (integración de aprendizajes) que permite observar el desempeño final de los estudiantes frente a los indicadores de logro."
    },

    {
        id: 361,
        categoria: "Evaluación",
        pregunta: "En 4to grado, un docente utiliza una rúbrica para evaluar una exposición. Un estudiante cumple con el contenido técnico, pero muestra mucha inseguridad y lenguaje corporal retraído. El indicador a evaluar es: 'Expresa sus ideas con claridad y seguridad'. ¿Cuál es la valoración correcta?",
        opciones: [
            "'Logrado' (L), porque lo más importante es que dominaba los conceptos del tema.",
            "'En Proceso' (EP), ya que la competencia comunicativa integra tanto el dominio del contenido como las habilidades expresivas y actitudinales.",
            "'Iniciado' (I), para obligarlo a que practique más su oratoria en la próxima clase.",
            "No evaluarlo y pedirle que repita la exposición cuando se sienta más valiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 04-2023. Las competencias son integrales. Si el indicador especifica 'seguridad', y el estudiante muestra dificultades en ese aspecto, no ha alcanzado el nivel de logro total, por lo que corresponde 'En Proceso' con su debida retroalimentación orientadora."
    },
    {
        id: 362,
        categoria: "Alfabetización",
        pregunta: "Una maestra de 1er grado nota que varios estudiantes escriben de derecha a izquierda y de abajo hacia arriba. Según la Ordenanza 01-2023, ¿cuál es la intervención adecuada?",
        opciones: [
            "Remitirlos a terapia ocupacional por posible desorientación espacial grave.",
            "Modelar el uso del espacio en la pizarra y el cuaderno, reforzando la direccionalidad de la escritura (izquierda-derecha, arriba-abajo) mediante actividades de seguimiento visual.",
            "Ignorar el hecho, puesto que en 1er grado la forma de escribir no es relevante.",
            "Prohibirles escribir hasta que memoricen las reglas de direccionalidad de forma oral."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La direccionalidad es una convención del sistema de escritura que se adquiere mediante la práctica y el modelado del docente en situaciones reales de escritura, no es una patología en las etapas iniciales."
    },
    {
        id: 363,
        categoria: "Inclusión",
        pregunta: "En una clase de 3er grado, un estudiante con discapacidad auditiva parcial (hipoacusia) se pierde constantemente en las explicaciones orales. ¿Qué ajuste de acceso es prioritario?",
        opciones: [
            "Sentarlo al final del aula para que no se distraiga con los movimientos de sus compañeros.",
            "Ubicarlo cerca del docente, asegurar el contacto visual antes de hablar y apoyar las explicaciones con material visual o lenguaje escrito en la pizarra.",
            "Pedirle a un compañero que le grite las instrucciones al oído cada vez que el maestro hable.",
            "Eximirlo de todas las actividades que requieran escuchar, dándole tareas de dibujo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión efectiva requiere eliminar barreras de comunicación. El apoyo visual y la ubicación estratégica (proximidad al emisor) son ajustes razonables esenciales para estudiantes con dificultades auditivas."
    },
    {
        id: 364,
        categoria: "Ética",
        pregunta: "Un docente de 6to grado recibe un mensaje de WhatsApp de un padre criticando de forma ofensiva su método de enseñanza. ¿Cuál es la respuesta profesional correcta?",
        opciones: [
            "Responder al mensaje de la misma forma para defender su honor profesional.",
            "Bloquear al padre y no volver a hablar con él durante el resto del año escolar.",
            "Mantener la calma, no discutir por chat y citar al padre a una entrevista presencial en el centro, con presencia del coordinador si es necesario, para dialogar bajo las normas de respeto.",
            "Publicar la captura de pantalla en sus redes sociales para denunciar el acoso de los padres."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual de Convivencia y Estatuto del Docente. El docente debe ser mediador y mantener la compostura ética. Los conflictos con las familias deben resolverse por los canales institucionales presenciales y formales, evitando la escalada de agresión en medios informales."
    },
    {
        id: 365,
        categoria: "Planificación",
        pregunta: "Al planificar el área de Educación Artística en 5to grado, la maestra decide que los estudiantes creen un mural sobre la protección del medio ambiente. ¿Qué estrategia de enseñanza está aplicando?",
        opciones: [
            "Estrategia de recuperación de experiencias previas.",
            "Estrategia de socialización centrada en actividades grupales y expresión creativa.",
            "Descubrimiento e indagación únicamente.",
            "Inserción de maestros y el alumnado en el entorno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La elaboración de un mural permite la socialización, el trabajo colaborativo y la expresión de saberes a través del arte, conectando con el eje transversal ambiental de forma práctica."
    },
    {
        id: 366,
        categoria: "Evaluación",
        pregunta: "Un niño de 2do grado ha logrado todos los indicadores de Matemáticas, excepto uno relacionado con la resolución de problemas de suma con reagrupación. ¿Qué calificación final debe aparecer en el reporte de progreso?",
        opciones: [
            "Logrado (L), porque un solo indicador no debe afectar el promedio general.",
            "En Proceso (EP), porque la promoción al grado superior depende del logro de la competencia, y este indicador es fundamental para el siguiente nivel.",
            "Iniciado (I), para castigar su falta de atención en ese tema específico.",
            "Dejar el espacio en blanco hasta que el niño lo aprenda en las vacaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El sistema de evaluación en primaria es criterial. Si hay un indicador clave no logrado, la valoración global del periodo refleja que el proceso de aprendizaje aún no se ha completado satisfactoriamente."
    },
    {
        id: 367,
        categoria: "Alfabetización",
        pregunta: "En la fase de alfabetización, un docente utiliza el 'Banco de Palabras' del aula para que los niños de 1er grado comparen palabras largas y cortas (ej. 'sol' vs 'mariposa'). ¿Qué objetivo persigue?",
        opciones: [
            "Que aprendan a contar letras para Matemáticas.",
            "Desarrollar la conciencia gráfica y la reflexión sobre la longitud de las palabras, ayudándoles a desvincular el tamaño del objeto del tamaño de la palabra escrita.",
            "Que se cansen de escribir palabras largas y prefieran las cortas.",
            "Memorizar el abecedario en orden alfabético."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Es común que los niños piensen que objetos grandes deben tener palabras largas (realismo nominal). Comparar palabras ayuda a romper esta idea y a centrarse en las propiedades del sistema de escritura."
    },
    {
        id: 368,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 5to grado suele terminar sus tareas muy rápido y se pone a dibujar de forma excelente, pero se niega a participar en las actividades de grupo de Ciencias Sociales. ¿Cuál es el enfoque correcto?",
        opciones: [
            "Prohibirle dibujar en el centro educativo porque no es clase de Arte.",
            "Utilizar su talento para el dibujo como un canal para integrarlo al grupo, pidiéndole que sea el ilustrador del proyecto de Ciencias Sociales del equipo.",
            "Dejarlo que dibuje solo siempre que quiera para que no moleste a los demás.",
            "Bajarle puntos en Artística por dibujar cuando no le toca."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 (DUA). El docente debe aprovechar los intereses y talentos (fortalezas) del estudiante para motivar su participación en áreas donde muestra resistencia, fomentando la inclusión social a través de su capacidad creativa."
    },
    {
        id: 369,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una actividad de laboratorio en 6to grado, se rompe un instrumento por negligencia de un estudiante que estaba jugando. ¿Cuál es la consecuencia formativa más coherente?",
        opciones: [
            "Expulsar al estudiante del laboratorio por el resto del año.",
            "Aplicar una medida restaurativa donde el estudiante, junto a su familia, busque una forma de reparar el daño o contribuir al cuidado de los materiales, previo diálogo reflexivo sobre la seguridad.",
            "Cobrarle el triple del valor del instrumento como multa económica directa al maestro.",
            "Ignorar el hecho para no tener conflictos con los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y OD 22-2023. Las medidas disciplinarias deben ser formativas y restaurativas. La sanción debe estar vinculada al hecho y promover la responsabilidad y el cuidado del bien común, no solo el castigo."
    },
    {
        id: 370,
        categoria: "Evaluación",
        pregunta: "Una maestra de 3er grado utiliza la técnica de 'Observación' durante una dinámica grupal. ¿Cuál de estos instrumentos es el más adecuado para registrar el desempeño individual de forma objetiva?",
        opciones: [
            "Una hoja en blanco donde escribe lo que se le ocurre al final del día.",
            "Una Lista de Cotejo con indicadores de conducta y participación previamente establecidos.",
            "El registro de asistencia únicamente.",
            "Un cuaderno de quejas para los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La observación sistemática requiere de instrumentos que den rigor a la evaluación. La lista de cotejo permite verificar la presencia o ausencia de rasgos específicos alineados a los indicadores de logro."
    },
    {
        id: 371,
        categoria: "Planificación",
        pregunta: "En la Adecuación Curricular 2023, ¿cuál es la diferencia principal entre una Competencia Fundamental y una Competencia Específica?",
        opciones: [
            "Las fundamentales son solo para los maestros y las específicas para los alumnos.",
            "Las fundamentales expresan las intenciones educativas de mayor relevancia y validez universal, mientras que las específicas se concretan a partir de las áreas académicas.",
            "Las fundamentales se evalúan con números y las específicas con letras.",
            "No hay diferencia, son términos intercambiables."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las Competencias Fundamentales (ej. Ética y Ciudadana, Comunicativa) atraviesan todo el currículo. Las Específicas son la traducción de esas intenciones al campo del saber de cada asignatura (Lengua Española, Matemática, etc.)."
    },
    {
        id: 372,
        categoria: "Ética",
        pregunta: "Una docente se entera por un rumor que una colega del mismo grado está hablando mal de ella con los padres. ¿Cuál es el paso correcto según el compromiso profesional?",
        opciones: [
            "Esperarla a la salida para confrontarla físicamente.",
            "Solicitar una reunión privada con la colega y, de ser necesario, con la unidad de mediación del centro para aclarar la situación profesionalmente.",
            "Hablar mal de esa colega también con los estudiantes para que vean quién tiene la razón.",
            "Renunciar al centro inmediatamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estatuto Docente y Código de Ética. Los conflictos entre pares deben manejarse con madurez, respeto y siguiendo las vías de comunicación interna, priorizando siempre la armonía del clima escolar por el bienestar de los alumnos."
    },
    {
        id: 373,
        categoria: "Alfabetización",
        pregunta: "Al enseñar a leer en 1er grado, el docente prioriza que los niños comprendan primero el mensaje de un cuento antes de analizar las letras individuales. ¿A qué enfoque responde esto?",
        opciones: [
            "Enfoque fonético tradicional.",
            "Enfoque textual, funcional y comunicativo.",
            "Enfoque de memorización visual.",
            "Enfoque de caligrafía mecánica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El MINERD promueve un enfoque donde el texto es la unidad de sentido. Se busca que el niño entienda para qué sirve leer y qué dice el texto antes de pasar al análisis de los componentes mínimos (letras/sílabas)."
    },
    {
        id: 374,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 4to grado tiene dificultades de aprendizaje persistentes que no mejoran con los ajustes razonables del docente. ¿Cuál es el procedimiento administrativo a seguir?",
        opciones: [
            "Promoverlo de grado 'por piedad' para que no se sienta mal.",
            "Solicitar formalmente una evaluación psicopedagógica al equipo de Orientación y Psicología para determinar si existen necesidades específicas de apoyo educativo (NEAE) más complejas.",
            "Decirle a la madre que el niño no sirve para estudiar.",
            "Ignorar el caso y centrarse solo en los estudiantes que aprenden rápido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Cuando los ajustes de aula no son suficientes, se debe activar la ruta de apoyo institucional para realizar una evaluación profunda y, si aplica, diseñar un Plan de Apoyo a la Diversidad."
    },
    {
        id: 375,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para una clase sobre 'El Ciclo del Agua', el docente organiza a los niños en semicírculo para ver un experimento. ¿Por qué es importante la organización del espacio físico?",
        opciones: [
            "Porque se ve más bonito para las fotos de la dirección.",
            "Porque la organización del espacio debe responder a la intención pedagógica, facilitando la visibilidad, la interacción y el control de la actividad.",
            "Porque así el maestro puede sentarse y descansar.",
            "No tiene ninguna importancia pedagógica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Criterios de Gestión de Aula. El ambiente de aprendizaje es un 'tercer maestro'. La disposición de los muebles y estudiantes influye directamente en la atención y en el tipo de interacción social que se genera durante la clase."
    },
    {
        id: 376,
        categoria: "Evaluación",
        pregunta: "Según la Ordenanza 04-2023, ¿cuándo debe realizarse la evaluación formativa?",
        opciones: [
            "Solo al final de cada trimestre.",
            "Durante todo el proceso de enseñanza y aprendizaje, para identificar avances y dificultades y ajustar la intervención de inmediato.",
            "Únicamente cuando el director va a supervisar la clase.",
            "Al inicio del año escolar solamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación formativa es continua y procesual. Su objetivo no es poner una nota, sino ofrecer retroalimentación constante al estudiante y al docente para mejorar el aprendizaje en marcha."
    },
    {
        id: 377,
        categoria: "Alfabetización",
        pregunta: "Un niño de 2do grado escribe 'CASA' como 'KSA'. Desde el punto de vista de la alfabetización inicial, ¿cómo se valora esto?",
        opciones: [
            "Es un error ortográfico grave que debe ser castigado.",
            "Es una muestra de que el niño tiene conciencia fonológica y está en una etapa silábico-alfabética o alfabética inicial, asociando sonidos a letras aunque no domine aún la ortografía convencional.",
            "Es señal de que el niño no sabe nada.",
            "Debe repetir 1er grado inmediatamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La escritura es un proceso constructivo. El uso de la 'K' por 'C' demuestra que el niño entiende la relación fonema-grafema. La ortografía convencional es una meta posterior que se trabaja con la lectura frecuente de textos."
    },
    {
        id: 378,
        categoria: "Ética",
        pregunta: "Una maestra observa que un colega utiliza castigos físicos (reglazos en la mano) con sus estudiantes. ¿Cuál es su obligación legal?",
        opciones: [
            "Guardar silencio por compañerismo profesional.",
            "Reportar el hecho inmediatamente a la dirección del centro, ya que el castigo físico está estrictamente prohibido por la Ley 136-03 y el Manual de Convivencia.",
            "Pedirle al colega que le enseñe a ella también a dar reglazos.",
            "Hablar con los niños para decirles que se porten mejor para que no les peguen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Ordenanza 22-2023. El maltrato físico es una violación a los derechos fundamentales del niño. El docente que presencia o conoce de estos hechos tiene el deber legal de denunciar para proteger la integridad de los menores."
    },
    {
        id: 379,
        categoria: "Planificación",
        pregunta: "Al planificar por competencias, ¿qué papel juegan los 'Contenidos'?",
        opciones: [
            "Son el fin último de la educación: el niño debe memorizarlos todos.",
            "Son mediadores del aprendizaje que permiten el desarrollo de las competencias.",
            "Son elementos opcionales que el docente puede usar o no.",
            "Son los títulos de los libros de texto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. En el enfoque por competencias, los contenidos no se enseñan por sí mismos, sino como herramientas para que el estudiante aprenda a actuar y resolver problemas en la realidad."
    },
    {
        id: 380,
        categoria: "Evaluación",
        pregunta: "En 5to grado, tras un examen, el docente nota que el 90% del curso fracasó en una pregunta específica. ¿Qué debe hacer el docente?",
        opciones: [
            "Ignorar el resultado y seguir con el siguiente tema.",
            "Analizar si la pregunta estaba mal planteada o si el tema no fue bien enseñado, y realizar una retroalimentación colectiva o re-enseñanza del concepto.",
            "Ponerles una nota baja a todos por no estudiar.",
            "Culpar a la maestra del grado anterior por no darles buena base."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Los resultados de la evaluación deben servir para la reflexión docente. Un fracaso masivo en un ítem es un indicador de que el proceso de enseñanza en ese punto falló y requiere una acción correctiva pedagógica."
    },


    {
        id: 381,
        categoria: "Evaluación",
        pregunta: "Un docente de 4to grado aplica una técnica de 'Desempeño' solicitando a los estudiantes que realicen un mapa conceptual sobre el relieve. ¿Qué ventaja ofrece este instrumento frente a una prueba de selección múltiple?",
        opciones: [
            "Es más fácil y rápido de corregir para el docente.",
            "Permite observar la capacidad del estudiante para jerarquizar conceptos y establecer relaciones lógicas entre ellos.",
            "Garantiza que todos los estudiantes obtengan una calificación de 'Logrado'.",
            "No requiere que el docente haya impartido el tema previamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Los mapas conceptuales son instrumentos de evaluación de desempeño que evidencian procesos cognitivos de alto nivel, como la síntesis y la organización del conocimiento, fundamentales en el enfoque por competencias."
    },
    {
        id: 382,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, durante la 'Lectura Compartida', la maestra señala con el dedo cada palabra mientras lee en voz alta un texto ampliado. ¿Qué convención de la lengua escrita está reforzando?",
        opciones: [
            "La entonación y las pausas de los signos de puntuación únicamente.",
            "La correspondencia entre lo que se oye y lo que está escrito, y la linealidad de la escritura.",
            "La memorización del abecedario de forma visual.",
            "Que los niños no deben intentar leer por su cuenta todavía."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El seguimiento de la lectura con el dedo ayuda a los niños en etapa inicial a comprender que cada segmento de voz corresponde a un segmento escrito (conciencia de la palabra) y refuerza la direccionalidad izquierda-derecha."
    },
    {
        id: 383,
        categoria: "Inclusión",
        pregunta: "Se integra a un aula de 5to grado un estudiante con Trastorno por Déficit de Atención con Hiperactividad (TDAH). ¿Qué estrategia de gestión de aula es más efectiva para apoyar su aprendizaje?",
        opciones: [
            "Sentarlo al fondo del aula para que sus movimientos no distraigan a los demás.",
            "Fragmentar las tareas largas en pasos cortos y claros, permitir pausas activas y ubicarlo en un lugar con pocas distracciones visuales.",
            "Darle una carga doble de ejercicios para que gaste su energía y se quede tranquilo.",
            "Pedirle que guarde silencio absoluto durante toda la jornada escolar bajo amenaza de reporte."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El apoyo a estudiantes con TDAH requiere ajustes en la metodología (instrucciones breves) y en el ambiente (control de estímulos) para facilitar su autorregulación y enfoque en la tarea."
    },
    {
        id: 384,
        categoria: "Ética",
        pregunta: "Un docente observa que un grupo de padres ha creado un grupo de chat donde se difunden noticias falsas sobre las vacunas escolares. ¿Cuál es el rol del docente ante esta situación?",
        opciones: [
            "Unirse al grupo y discutir agresivamente para demostrar que tiene la razón.",
            "Informar al equipo de gestión y proponer una charla informativa con personal de salud para orientar a las familias con base científica.",
            "No intervenir, pues lo que los padres hablen en privado no es asunto de la escuela.",
            "Expulsar a los hijos de esos padres hasta que se retracten de lo dicho."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Rol de la Escuela y la Comunidad. El docente es un referente social y promotor de la salud. Ante la desinformación que afecta el bienestar estudiantil, debe propiciar canales institucionales de orientación y diálogo basados en la evidencia científica."
    },
    {
        id: 385,
        categoria: "Planificación",
        pregunta: "Al diseñar una Situación de Aprendizaje, el docente parte de un problema real: 'La acumulación de basura en el patio del centro'. ¿Qué componente curricular se moviliza prioritariamente con este reto?",
        opciones: [
            "La Competencia Fundamental Ambiental y de la Salud.",
            "El contenido conceptual de la historia dominicana solamente.",
            "El uso de la caligrafía artística únicamente.",
            "La memorización de las capitales de Europa."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las situaciones de aprendizaje vinculadas a problemas del entorno son el escenario ideal para desarrollar competencias transversales, en este caso, la responsabilidad ambiental y el cuidado de la salud."
    },
    {
        id: 386,
        categoria: "Evaluación",
        pregunta: "Un estudiante de 3er grado muestra un excelente desempeño en las actividades diarias, pero en la prueba trimestral escrita se bloquea y reprueba. Según la Ordenanza 04-2023, ¿cuál debe ser la decisión del docente?",
        opciones: [
            "Reportar la nota de la prueba como calificación final, ya que es la evidencia más reciente.",
            "Considerar la evaluación como un proceso integral, dando peso a las evidencias del proceso (portafolio, observación) y no solo a un instrumento puntual.",
            "Obligarlo a tomar una prueba de recuperación más difícil para que aprenda a manejar el estrés.",
            "Decirle al estudiante que no tiene capacidad para ese grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es procesual y continua. Un solo instrumento (la prueba escrita) no puede anular las evidencias acumuladas durante todo el proceso de aprendizaje que demuestran el logro de las competencias."
    },
    {
        id: 387,
        categoria: "Inclusión",
        pregunta: "Una niña de 2do grado presenta una timidez extrema que le impide hablar frente a sus compañeros. ¿Cómo debe evaluarse su competencia comunicativa oral?",
        opciones: [
            "Con 'Iniciado' (I), hasta que se decida a hablar como los demás.",
            "Buscando formas alternativas, como grabaciones de audio en privado o entrevistas individuales con la maestra, mientras se trabaja gradualmente su confianza.",
            "Ignorar su evaluación oral y ponerle la misma nota que saque en los exámenes escritos.",
            "Obligarla a subir al escenario en un acto escolar para que pierda el miedo 'a la fuerza'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes razonables también aplican a barreras socioemocionales. El docente debe diversificar los medios para que el estudiante demuestre lo que sabe sin que su condición emocional bloquee la evaluación de la competencia."
    },
    {
        id: 388,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de 6to grado, los estudiantes están muy inquietos porque es el último periodo del viernes. ¿Qué acción de gestión de aula es más productiva?",
        opciones: [
            "Gritar más fuerte que ellos para imponer autoridad.",
            "Realizar una dinámica breve de movimiento controlada y luego proponer una actividad de aprendizaje más lúdica o práctica que capture su interés.",
            "Sentarse en el escritorio y dejarlos que hagan lo que quieran hasta que suene el timbre.",
            "Ponerles una sanción colectiva de quedarse 10 minutos después de la hora de salida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de Gestión de Aula. Un docente efectivo reconoce los ritmos biológicos y niveles de energía del grupo, adaptando la metodología para mantener el enganche pedagógico sin recurrir a medidas punitivas ineficaces."
    },
    {
        id: 389,
        categoria: "Alfabetización",
        pregunta: "Un docente utiliza el 'Nombre Propio' de cada niño para iniciar actividades de lectura y escritura en 1er grado. ¿Por qué es esta una estrategia recomendada por la Ordenanza 01-2023?",
        opciones: [
            "Porque es la palabra con mayor carga afectiva y significado para el niño, sirviendo como referente estable de letras y sonidos.",
            "Porque así la maestra no confunde a los niños con sus nombres.",
            "Porque es la única palabra que los niños están obligados a aprender en todo el año.",
            "Porque es más corto que escribir oraciones completas."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 01-2023. El nombre propio es el primer texto que un niño reconoce y desea escribir. Sirve como 'fuente de información' confiable para identificar letras que luego encontrará en otras palabras, facilitando el proceso de alfabetización inicial."
    },
    {
        id: 390,
        categoria: "Planificación",
        pregunta: "Al final de cada unidad, una maestra de 5to grado dedica una sesión a que los estudiantes piensen sobre 'qué aprendieron' y 'cómo lo aprendieron'. ¿Qué proceso está fomentando?",
        opciones: [
            "El proceso de calificación sumativa.",
            "La metacognición, que es parte esencial del desarrollo de competencias autónomas.",
            "La pérdida de tiempo pedagógico.",
            "La preparación para un examen nacional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La metacognición permite que el estudiante tome conciencia de sus propios procesos de aprendizaje, identifique sus fortalezas y áreas de mejora, lo cual es clave para el 'aprender a aprender'."
    },
    {
        id: 391,
        categoria: "Evaluación",
        pregunta: "Según el registro de grado actual, si un indicador de logro aparece tres veces en diferentes periodos, ¿cómo se determina la valoración final de ese indicador?",
        opciones: [
            "Se suman los tres y se divide entre tres (promedio numérico).",
            "Se toma la valoración más reciente, ya que refleja el nivel de dominio alcanzado al final del proceso.",
            "Se elige la nota más baja para asegurar que el niño siga estudiando.",
            "Solo se toma en cuenta la primera vez que se evaluó."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo del Registro de Grado / Ordenanza 04-2023. La evaluación es sumativa al final del proceso. Lo que importa es el nivel de competencia que el estudiante demuestra al concluir el año o la unidad, valorando su progreso."
    },
    {
        id: 392,
        categoria: "Inclusión",
        pregunta: "En 4to grado hay un estudiante con discapacidad intelectual leve. El grupo está trabajando la división de tres cifras, pero él aún tiene dificultades con la resta. ¿Cómo debe proceder el docente?",
        opciones: [
            "Obligarlo a hacer la división de tres cifras igual que todos para que no se sienta discriminado.",
            "Realizar una adecuación curricular individualizada, trabajando con él la resta en contextos prácticos mientras el resto avanza, sin excluirlo de la dinámica grupal.",
            "Pedirle que salga del aula a la biblioteca cada vez que toque Matemática.",
            "Ponerle 'Logrado' aunque no sepa restar para cumplir con la inclusión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión no es que todos hagan lo mismo al mismo tiempo, sino que cada estudiante reciba los apoyos y adaptaciones (ajustes razonables) necesarios para progresar según su nivel y posibilidades."
    },
    {
        id: 393,
        categoria: "Ética",
        pregunta: "Una maestra encuentra a un estudiante llorando porque otro compañero le envió mensajes insultantes por redes sociales durante el fin de semana. ¿Cuál es el protocolo de actuación?",
        opciones: [
            "Decirle que como fue el fin de semana y por internet, la escuela no puede intervenir.",
            "Tratar el caso como ciberacoso según el Manual de Convivencia, citar a las familias involucradas y realizar acciones de orientación y mediación.",
            "Buscar el teléfono del agresor y borrarle la aplicación de redes sociales personalmente.",
            "Ignorar el llanto del niño para no fomentar la debilidad emocional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 22-2023 y Ley 136-03. El ciberacoso es una falta que afecta la convivencia escolar y el bienestar del menor. La institución debe intervenir independientemente de que el origen haya sido digital o fuera de horario."
    },
    {
        id: 394,
        categoria: "Alfabetización",
        pregunta: "Un docente de 2do grado organiza 'Tutorías de Pares' donde niños que ya leen fluidamente ayudan a los que aún están en proceso. ¿Qué beneficio pedagógico tiene esto?",
        opciones: [
            "Que la maestra pueda salir del aula a descansar mientras los niños enseñan.",
            "Refuerza el aprendizaje de ambos: el tutor consolida su conocimiento al explicarlo y el tutorado recibe apoyo en un lenguaje cercano.",
            "Identificar a los niños 'inteligentes' para separarlos de los 'lentos'.",
            "No tiene beneficios, los niños solo juegan cuando están juntos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Enfoque Histórico-Cultural (Vygotsky) / Adecuación Curricular. La interacción entre pares en la 'Zona de Desarrollo Próximo' facilita el andamiaje del aprendizaje y promueve valores de colaboración y solidaridad."
    },
    {
        id: 395,
        categoria: "Planificación",
        pregunta: "En la planificación docente, ¿qué diferencia a un 'Recurso' de un 'Medio' didáctico?",
        opciones: [
            "No hay diferencia, son sinónimos absolutos.",
            "Los medios son diseñados específicamente para educar (libros, láminas), mientras que los recursos son objetos del entorno aprovechados para la enseñanza (piedras, etiquetas).",
            "Los medios son digitales y los recursos son físicos.",
            "Los recursos los compra el MINERD y los medios los compra el profesor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular Dominicano. Es fundamental distinguir que cualquier elemento del contexto puede ser un recurso pedagógico si el docente le da una intención clara para facilitar el aprendizaje."
    },
    {
        id: 396,
        categoria: "Evaluación",
        pregunta: "Un docente de Educación Física nota que un estudiante tiene una condición física que le impide correr largas distancias. ¿Cómo debe evaluar la competencia de aptitud física?",
        opciones: [
            "Eximirlo de la materia y ponerle una nota promedio.",
            "Adaptar las actividades y los criterios de evaluación a sus posibilidades reales, valorando su esfuerzo y el cumplimiento de metas personales ajustadas.",
            "Reprobarlo porque no cumple con los estándares atléticos del grado.",
            "Obligarlo a correr hasta que desarrolle la resistencia necesaria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Enfoque de Derechos. La evaluación en Educación Física debe ser inclusiva. La competencia se mide en relación con el punto de partida y las capacidades del individuo, no por comparación con atletas de alto rendimiento."
    },
    {
        id: 397,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una lluvia intensa, el ruido en el techo de zinc impide que los niños escuchen la explicación. ¿Qué decisión de gestión de aula es la más acertada?",
        opciones: [
            "Seguir hablando a gritos para no perder el tiempo de la planificación.",
            "Cambiar la actividad a una de trabajo individual silencioso o lectura, que no dependa de la escucha de su voz en ese momento.",
            "Mandar a los niños a que salgan a mojarse para que se calmen.",
            "Sentarse a esperar que deje de llover sin dar ninguna instrucción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Flexibilidad Pedagógica. Un buen gestor de aula reacciona ante imprevistos del entorno, ajustando la dinámica para asegurar que el tiempo escolar siga siendo productivo a pesar de las interferencias externas."
    },
    {
        id: 398,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra utiliza 'Rimas' y 'Trabalenguas' constantemente. ¿Qué dimensión del lenguaje está trabajando principalmente?",
        opciones: [
            "La dimensión semántica (el significado de las palabras).",
            "La dimensión fonológica (sonidos, rima, aliteración), base para la decodificación escrita.",
            "La dimensión caligráfica (el dibujo de las letras).",
            "La dimensión histórica de la literatura española."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El juego con los sonidos del lenguaje (conciencia fonológica) es el paso previo y necesario para que el niño entienda cómo se relacionan los sonidos con las letras (principio alfabético)."
    },
    {
        id: 399,
        categoria: "Ética",
        pregunta: "Un docente se entera de que un estudiante de su curso no está asistiendo porque tiene que cuidar a sus hermanos menores mientras su madre trabaja. ¿Cuál es su deber?",
        opciones: [
            "Ponerle faltas en el registro hasta que pierda el año por inasistencia.",
            "Reportar el caso a Orientación y Psicología y a la dirección para que se realice una visita domiciliaria y se busque apoyo institucional para garantizar el derecho a la educación del niño.",
            "Ir a la casa del niño y regañar a la madre por ser irresponsable.",
            "No hacer nada, cada familia resuelve sus problemas como puede."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Código del Menor. El docente es garante de derechos. Ante una situación de riesgo social o vulneración del derecho a la educación (trabajo infantil o roles parentales inadecuados), debe activar las alarmas institucionales."
    },
    {
        id: 400,
        categoria: "Evaluación",
        pregunta: "La Adecuación Curricular 2023 establece que la evaluación debe ser 'Criterial'. ¿Qué significa esto?",
        opciones: [
            "Que el maestro evalúa según su criterio personal y humor del día.",
            "Que el desempeño del estudiante se compara con criterios e indicadores de logro predefinidos en el currículo, no con el desempeño de sus compañeros.",
            "Que solo se evalúa a los estudiantes que tienen buen criterio para hablar.",
            "Que la evaluación se basa en la cantidad de páginas que el niño escribió en el cuaderno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 / Ordenanza 04-2023. La evaluación criterial busca objetividad. El éxito del estudiante se mide por cuánto se acerca al indicador de logro esperado para su grado y edad, eliminando la competencia insana entre pares."
    },

    {
        id: 401,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una actividad de producción escrita en 4to grado, un estudiante interrumpe constantemente haciendo ruidos y levantándose de su asiento, afectando la concentración del grupo. El docente ya ha intentado redireccionarlo sin éxito. ¿Cuál es la decisión pedagógica y de gestión de aula más apropiada según el enfoque restaurativo?",
        opciones: [
            "Retirarle el derecho al recreo ese día para que comprenda que sus acciones tienen consecuencias directas sobre sus privilegios.",
            "Dialogar con el estudiante en privado para identificar qué necesidad o barrera le impide concentrarse, y asignarle un rol de liderazgo o responsabilidad en la dinámica (ej. monitor de materiales) para canalizar su energía.",
            "Referirlo inmediatamente a la unidad de Orientación y Psicología, ya que las interrupciones recurrentes escapan de la responsabilidad pedagógica del maestro de aula.",
            "Restarle puntos en el indicador de 'Participación ciudadana' del registro de grado, advirtiéndole frente al grupo para que sirva de escarmiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia (OD 22-2023) y Gestión de Aula. Castigar con el recreo o bajar puntos académicos por disciplina son prácticas prohibidas y punitivas. Derivar a orientación es una evasión del rol docente de primer nivel. La disciplina positiva busca el diálogo, identificar la causa (aburrimiento, TDAH, estilo de aprendizaje) y canalizar la conducta hacia roles positivos."
    },
    {
        id: 402,
        categoria: "Planificación Pedagógica",
        pregunta: "Una maestra de 2do grado desea diseñar una Situación de Aprendizaje para la unidad de 'Los Símbolos Patrios'. Para que sea válida según la Adecuación Curricular 2023, ¿cuál debe ser el punto de partida innegociable en su diseño?",
        opciones: [
            "La selección de los contenidos conceptuales exactos tal como aparecen en el libro de texto de Ciencias Sociales.",
            "La definición de una problemática, interés o necesidad real o simulada del contexto de los estudiantes que demande la movilización de competencias para resolverse o crear un producto.",
            "La redacción de preguntas de selección múltiple que aseguren que los niños memoricen las fechas patrias.",
            "La organización de un acto cívico general donde los estudiantes marchen en silencio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La Situación de Aprendizaje no parte del contenido (eso es conductismo), sino de un contexto y un reto/problema (ej. 'En la escuela se acercan las efemérides y no tenemos ambientación...'). El contenido es solo el medio para lograr el producto y movilizar la competencia."
    },
    {
        id: 403,
        categoria: "Comportamientos Profesionales",
        pregunta: "A la hora de la salida, un padre aborda a la maestra de 5to grado en el pasillo, gritándole y reclamando airadamente por la calificación de 'Iniciado' (I) que recibió su hijo. El padre amenaza con ir al distrito educativo. ¿Cuál es el proceder ético e institucional del docente?",
        opciones: [
            "Defender su autoridad profesional argumentando en voz alta para no mostrar debilidad frente a otros padres y estudiantes que están observando.",
            "Ignorar al padre, darle la espalda y subir a su vehículo, ya que su jornada laboral ha terminado.",
            "Mantener la calma, invitar al padre a la oficina de coordinación u orientación para garantizar la privacidad, aplicar la escucha activa y mostrar las evidencias (portafolio) que sustentan la valoración.",
            "Acceder a cambiar la calificación temporalmente a 'En Proceso' (EP) para calmar al padre y evitar un conflicto mayor en el centro."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Código de Ética Docente y Manual de Convivencia. El docente es un mediador y profesional. Debe desescalar la violencia, garantizar el debido proceso y la confidencialidad, y respaldar sus decisiones evaluativas con las evidencias del proceso, nunca alterando notas por coerción ni respondiendo con agresión."
    },
    {
        id: 404,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de Matemáticas de 6to grado, la docente introduce el tema de fracciones. Nota que el 75% del grupo no logra comprender las operaciones básicas con fracciones escritas en la pizarra. ¿Qué decisión refleja una gestión efectiva del aprendizaje?",
        opciones: [
            "Repetir la explicación en la pizarra utilizando el mismo método, pero hablando más despacio y con voz más alta.",
            "Pausar la explicación simbólica y retroceder a la etapa concreta (manipulativa), introduciendo material didáctico tangible (regletas, pizzas de papel) antes de volver al plano abstracto.",
            "Avanzar con el tema y asignar tarea extra para la casa, asumiendo que con la práctica y la ayuda de los padres entenderán.",
            "Evaluar con un examen escrito al final de la clase para forzarlos a prestar atención."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Enfoque Constructivista (Adecuación Curricular). Cuando hay una barrera generalizada en la comprensión abstracta, repetir el mismo método no funciona. Se debe aplicar la progresión CPA (Concreto-Pictórico-Abstracto), regresando al material manipulativo para garantizar la asimilación del concepto."
    },
    {
        id: 405,
        categoria: "Inclusión",
        pregunta: "Una maestra de 3er grado recibe a un estudiante diagnosticado con Dislexia. El estudiante tiene ideas brillantes de forma oral, pero sus producciones escritas son ininteligibles y se frustra al escribir. Según la Ordenanza 05-2024, ¿cuál es el ajuste razonable correcto para evaluar su comprensión en Ciencias Sociales?",
        opciones: [
            "Disminuirle la exigencia académica y evaluarlo con los indicadores de logro de 1er grado.",
            "Eximirlo de las pruebas escritas y enviarlo a la biblioteca durante las evaluaciones.",
            "Permitirle demostrar el indicador de logro mediante formatos alternativos de expresión (oralidad, exposiciones, dibujos o grabaciones) mientras se le brinda apoyo específico en su lectoescritura.",
            "Darle más tiempo en el examen escrito y penalizar sus faltas ortográficas para que se esfuerce en mejorar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024 (Diseño Universal para el Aprendizaje - DUA). La dislexia afecta la decodificación y escritura, no la inteligencia ni la comprensión social. El ajuste no es bajar el nivel (A) ni excluir (B), sino variar el MEDIO DE EXPRESIÓN para que el estudiante demuestre la competencia sin que el formato escrito sea una barrera."
    },
    {
        id: 406,
        categoria: "Planificación Pedagógica",
        pregunta: "Al planificar el Eje Transversal 'Salud y Bienestar' en 1er grado, un equipo docente debate sobre cómo abordarlo. ¿Cuál de las siguientes acciones demuestra una verdadera integración transversal alineada a la Adecuación Curricular?",
        opciones: [
            "Dedicar todos los viernes 15 minutos exclusivos para hablar de salud, separados de las asignaturas regulares.",
            "Organizar una charla magistral con un pediatra una vez al mes para todo el centro educativo.",
            "Articular el eje a través de un proyecto donde, en Lengua Española, los niños lean y escriban recetas saludables; en Matemáticas, cuenten frutas; y en Naturales, clasifiquen alimentos.",
            "Colocar el nombre del Eje Transversal en la portada de la unidad de aprendizaje sin alterar las actividades de los libros de texto."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Adecuación Curricular 2023. La transversalidad no es un evento aislado (charla) ni un mero requisito de formato. Consiste en permear las áreas curriculares (matemática, lengua, naturales) dotándolas de un contexto común que aborde una problemática social o de desarrollo personal."
    },
    {
        id: 407,
        categoria: "Evaluación",
        pregunta: "Al finalizar el primer trimestre en 4to grado, un maestro observa que un estudiante, a pesar de participar y asistir, no ha logrado movilizar los saberes para resolver problemas matemáticos, obteniendo 'Iniciado' (I). ¿Cuál es la implicación normativa y pedagógica de esta valoración?",
        opciones: [
            "Que el estudiante carece de aptitudes matemáticas y debe ser referido a una escuela especial.",
            "Que el estudiante debe repetir el grado inmediatamente sin esperar al final del año.",
            "Que el proceso de aprendizaje no se ha completado, lo que obliga al docente a diseñar e implementar un Plan de Apoyo y Recuperación Pedagógica adaptado a sus necesidades para el siguiente trimestre.",
            "Que la familia es responsable de pagar un tutor privado para que el niño alcance el nivel del grupo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. La valoración 'I' o 'EP' no es un dictamen de fracaso definitivo, es una alerta temprana de la evaluación formativa. Institucionalmente, obliga al docente y al centro a brindar intervenciones oportunas (tutorías, ajustes, planes de recuperación) antes de que finalice el año escolar."
    },
    {
        id: 408,
        categoria: "Comportamientos Profesionales",
        pregunta: "Una docente de 1er ciclo nota que su planificación no está dando los resultados esperados, ya que los estudiantes no avanzan en su proceso de alfabetización. Sus colegas de grado sí están logrando avances. ¿Qué acción demuestra un comportamiento profesional orientado a la mejora continua?",
        opciones: [
            "Solicitar una reunión de Comunidad de Aprendizaje (CAP) con sus colegas y el coordinador para analizar reflexivamente sus prácticas, pedir retroalimentación e integrar nuevas estrategias a su planificación.",
            "Justificarse argumentando que le tocó el grupo de estudiantes con mayor déficit del sector.",
            "Pedir a la dirección que le asigne otro grado el próximo año porque no tiene vocación para la alfabetización inicial.",
            "Copiar la planificación de sus compañeras exactamente igual y aplicarla sin considerar las particularidades de su grupo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Estándares Profesionales y del Desempeño (Dimensión de Desarrollo Profesional y Trabajo Colaborativo). El docente efectivo no se aísla ni se justifica. Utiliza la reflexión sobre su propia práctica y el aprendizaje entre pares (Grupos Pedagógicos / CAP) para mejorar su desempeño."
    },
    {
        id: 409,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Al iniciar una unidad didáctica, el docente de 5to grado proyecta un video corto y luego hace una serie de preguntas abiertas como: '¿Qué creen que pasaría si...?' y '¿Alguna vez han visto algo similar?'. ¿Qué propósito pedagógico principal persigue esta acción en la secuencia didáctica?",
        opciones: [
            "Evaluar sumativamente el conocimiento de los estudiantes para asignar la primera calificación del mes.",
            "Recuperar los saberes previos, generar conflicto cognitivo y conectar emocionalmente al estudiante con el nuevo objeto de aprendizaje.",
            "Mantener a los estudiantes entretenidos para poder terminar de escribir la planificación en el registro.",
            "Cumplir con el requisito de usar la tecnología en el aula según lo pide el MINERD."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Enfoque Constructivista (Adecuación Curricular 2023). El inicio de toda secuencia didáctica requiere la activación de saberes previos y el 'enganche' motivacional. El aprendizaje significativo de Ausubel exige que el nuevo contenido se ancle en las estructuras cognitivas preexistentes del estudiante."
    },
    {
        id: 410,
        categoria: "Alfabetización",
        pregunta: "En una evaluación diagnóstica en 1er grado, la maestra pide a un niño que escriba 'MARIPOSA'. El niño escribe 'M I O A' (cada letra corresponde a una sílaba y usa vocales o consonantes correctas de la palabra). ¿En qué nivel de conceptualización de la escritura se encuentra y qué significa esto?",
        opciones: [
            "Nivel Presilábico; significa que el niño no comprende nada del sistema de escritura y solo hace garabatos.",
            "Nivel Silábico con valor sonoro convencional; significa que el niño ha descubierto que las letras representan partes sonoras de la palabra (sílabas) y está en un proceso normal de construcción.",
            "Nivel Alfabético; significa que el niño ya está listo para leer textos largos sin ayuda.",
            "Es un nivel de retraso del aprendizaje; significa que necesita ser derivado a educación especial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 (Fascículos de Alfabetización Inicial). Bajo el enfoque psicogenético (Ferreiro y Teberosky), escribir una grafía por cada sílaba sonora (ej. M-I-O-A para ma-ri-po-sa) es el hito del nivel Silábico. Demuestra un gran avance cognitivo, no un retraso."
    },
    {
        id: 411,
        categoria: "Evaluación",
        pregunta: "Una maestra de 6to grado utiliza la técnica de 'Portafolio' para la evaluación. Al final del periodo, revisa la carpeta de un estudiante que contiene todos los trabajos, pero el estudiante solo los guardó sin orden y sin reflexionar sobre ellos. ¿Cuál fue el error metodológico de la maestra en la gestión de este instrumento?",
        opciones: [
            "Permitir que el estudiante eligiera qué guardar; la maestra debió guardar todo ella misma.",
            "No establecer criterios claros (rúbricas) ni propiciar momentos de reflexión (metacognición) donde el estudiante analizara sus propios avances y dificultades a través de las evidencias.",
            "No calificar cada hoja del portafolio con números en color rojo.",
            "Usar un portafolio físico en lugar de uno digital."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Un portafolio no es un simple archivo o 'folder' de acumulación de tareas. Su valor como instrumento de evaluación por competencias radica en la selección deliberada de evidencias y en la reflexión metacognitiva del estudiante sobre su propio proceso de aprendizaje."
    },
    {
        id: 412,
        categoria: "Planificación Pedagógica",
        pregunta: "El equipo docente de 4to grado decide implementar un 'Proyecto de Intervención de Aula' para abordar el problema de la mala alimentación en el recreo. En este tipo de proyecto, ¿quiénes son los principales responsables de proponer soluciones y ejecutar las acciones?",
        opciones: [
            "El departamento de Orientación y Psicología en conjunto con la Dirección.",
            "Los estudiantes, asumiendo un rol protagónico en la investigación, propuesta y ejecución de soluciones, bajo la mediación del docente.",
            "El docente, quien elabora un plan estricto y asigna tareas a los estudiantes para que las cumplan.",
            "Las familias y la Asociación de Padres, Madres y Amigos de la Escuela (APMAE)."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Estrategias de Planificación). La naturaleza de los Proyectos de Intervención y Proyectos Participativos de Aula es el desarrollo de la agencia, autonomía y ciudadanía activa del estudiante (Competencia Ética y Ciudadana y Resolución de Problemas). El docente facilita, pero el alumno lidera."
    },
    {
        id: 413,
        categoria: "Comportamientos Profesionales",
        pregunta: "Durante una jornada extendida, un docente presencia a dos colegas discutiendo acaloradamente con insultos frente a un grupo de estudiantes en el patio. ¿Cuál es el deber profesional del docente observador?",
        opciones: [
            "Intervenir poniéndose del lado del colega que tenga la razón para solucionar el conflicto rápido.",
            "Grabar la situación para tener pruebas y enviarlo al grupo de WhatsApp del centro.",
            "Intervenir pacíficamente para separar a los colegas, proteger la integridad emocional de los estudiantes alejándolos del área, e informar inmediatamente al equipo de gestión.",
            "Hacerse de la vista gorda argumentando que no es su problema y regresar a su aula."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estatuto Docente y Manual de Convivencia. El docente tiene un rol de cuidado frente a los estudiantes. Presenciar violencia (incluso entre adultos) afecta el clima escolar. Debe detenerse la exposición de los menores al conflicto y reportar a las autoridades del centro (Dirección) para la aplicación del régimen disciplinario institucional."
    },
    {
        id: 414,
        categoria: "Inclusión",
        pregunta: "Llega un niño de nuevo ingreso a 2do grado que utiliza lenguaje de señas para comunicarse. La maestra no conoce la lengua de señas dominicana. ¿Cuál es la primera decisión pedagógica correcta que garantiza la inclusión?",
        opciones: [
            "Rechazar la inscripción argumentando que la escuela no está preparada para recibir estudiantes sordos.",
            "Ubicar al niño en primera fila, utilizar abundante apoyo visual y corporal, fomentar que los compañeros interactúen con él mediante gestos y solicitar formalmente apoyo al Distrito Educativo (atención a la diversidad / intérprete).",
            "Sentarlo con un compañero para que este le escriba todo lo que el maestro dice oralmente.",
            "Aislarlo en el área de informática para que vea videos interactivos toda la mañana."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley General de Educación 66-97 y Ordenanza 05-2024. Las escuelas regulares tienen el mandato de ser inclusivas. Ningún niño puede ser rechazado. Mientras se gestiona el apoyo especializado (intérprete/modelo lingüístico), el docente debe maximizar los canales visuales de comunicación (DUA) y crear un clima de acogida."
    },
    {
        id: 415,
        categoria: "Gestión del Aprendizaje",
        pregunta: "La maestra de 3er grado propone una dinámica donde los estudiantes leen el borrador de un cuento escrito por su compañero y le hacen sugerencias para mejorarlo antes de entregarlo. ¿Qué estrategia está aplicando?",
        opciones: [
            "La evaluación diagnóstica de la unidad.",
            "La coevaluación en el proceso de revisión de la producción escrita.",
            "La delegación de su trabajo de corrección a los estudiantes.",
            "Una actividad de castigo por cometer errores ortográficos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Enfoque Textual Funcional. La revisión entre pares (coevaluación) es fundamental en el proceso de escritura. Desarrolla el pensamiento crítico, la colaboración y la comprensión de que la escritura es un proceso perfectible (borradores), no un producto inmediato."
    },
    {
        id: 416,
        categoria: "Planificación Pedagógica",
        pregunta: "Al diseñar los indicadores de logro para una unidad, ¿cuál debe ser la fuente principal y normativa de la cual el docente debe extraerlos?",
        opciones: [
            "Crearlos por sí mismo basándose en el nivel del grupo.",
            "Del Diseño Curricular y la Adecuación Curricular vigente, ya que son normativos, prescriptivos y aseguran el perfil de egreso.",
            "Del índice del libro de texto que utilizará durante el año.",
            "Del manual de pruebas nacionales pasadas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 y Ordenanza 04-2023. Los indicadores de logro no se inventan ni se cambian a discreción; son el referente oficial, legal y prescriptivo que establece el Estado Dominicano para garantizar la equidad y calidad en los aprendizajes de todos los niños del país."
    },
    {
        id: 417,
        categoria: "Alfabetización",
        pregunta: "Durante una actividad en 1er grado, la maestra escribe en papelógrafos las normas del aula acordadas por los niños y las deja pegadas en la pared todo el año. ¿Qué propósito específico de la alfabetización cumple esta ambientación?",
        opciones: [
            "Decorar el aula para que se vea bonita durante las visitas de supervisión.",
            "Proveer un ambiente alfabetizador (textos de circulación social y funcional) que sirva como fuente de información segura para que los niños consulten letras y palabras cuando intenten escribir de forma autónoma.",
            "Cumplir con un requisito administrativo del cuaderno de planificación.",
            "Mantener a los niños callados mirando la pared."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El ambiente alfabetizador no es decorativo, es funcional. Carteles con sentido, nombres y normas actúan como 'bancos de datos'. Si un niño no recuerda cómo hacer la 'T', puede ir al cartel que dice 'Tirar la basura' y observar el trazo, fomentando la autonomía."
    },
    {
        id: 418,
        categoria: "Comportamientos Profesionales",
        pregunta: "La Dirección del centro convoca a los docentes un sábado para una jornada de capacitación sobre el nuevo Sistema de Evaluación. Un docente se niega a asistir argumentando que ya conoce su materia y no necesita aprender nada nuevo. ¿Qué estándar del desempeño profesional se está vulnerando?",
        opciones: [
            "El derecho a la libre asociación.",
            "El estándar de Desarrollo Profesional, que exige una actitud de actualización permanente, apertura al aprendizaje y compromiso con las políticas y normativas educativas del MINERD.",
            "Ninguno, porque el sábado no es un día laborable.",
            "El estándar de gestión de aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estándares de Desempeño Profesional Docente. La actualización continua no es opcional en la carrera docente. Las capacitaciones oficiales sobre normativas (como la evaluación) son de carácter obligatorio para asegurar la correcta implementación de las políticas del Estado."
    },
    {
        id: 419,
        categoria: "Evaluación",
        pregunta: "Al evaluar la Competencia Científica en 5to grado, el profesor utiliza una Rúbrica para calificar el experimento sobre la germinación. ¿Cuál es el principal beneficio de compartir la Rúbrica con los estudiantes ANTES de realizar el experimento?",
        opciones: [
            "Para que los estudiantes puedan copiar las respuestas correctas.",
            "Promover la transparencia y la autorregulación, ya que el estudiante conoce de antemano qué se espera de él y cuáles son los criterios de excelencia que guiarán su desempeño.",
            "Para asustarlos y que se esfuercen más por miedo a reprobar.",
            "Para ahorrarle tiempo al maestro al momento de explicar las instrucciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias es transparente y participativa. Conocer los criterios de evaluación a priori (mediante rúbricas) orienta el esfuerzo del estudiante y elimina la subjetividad, transformando la evaluación en una herramienta de aprendizaje."
    },
    {
        id: 420,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de 4to grado sobre 'El clima local', el docente pide a los estudiantes que salgan al patio, observen el cielo, sientan la temperatura y anoten sus percepciones antes de abrir el libro de texto. ¿Qué principio pedagógico está favoreciendo?",
        opciones: [
            "La memorización mecánica de conceptos meteorológicos.",
            "El aprendizaje basado en la experiencia directa y el contacto con el entorno como puente para construir conocimientos significativos.",
            "El desgaste de tiempo para llenar la hora de clase.",
            "La sustitución total del conocimiento científico por el conocimiento empírico informal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de Inserción en el Entorno (Adecuación Curricular). El contacto con la realidad vivencial es una estrategia didáctica poderosa. La experiencia directa despierta la curiosidad y facilita que el posterior análisis teórico en el libro adquiera un sentido real para el niño."
    },

    {
        id: 421,
        categoria: "Inclusión",
        pregunta: "En una clase de 4to grado, una estudiante con baja visión no logra copiar los esquemas de la pizarra a tiempo, aunque se sienta en la primera fila. Se acerca la evaluación de Ciencias de la Naturaleza. ¿Cuál es el ajuste razonable correcto según la Ordenanza 05-2024?",
        opciones: [
            "Eximir a la estudiante de la evaluación escrita y calificarla solo por su asistencia y participación oral esporádica.",
            "Entregarle la evaluación impresa en macrotipo (letra ampliada y alto contraste) y permitirle más tiempo, asegurando que se evalúe el mismo indicador de logro.",
            "Asignarle un compañero permanente para que le dicte las preguntas durante la prueba y escriba las respuestas por ella.",
            "Bajar el nivel de exigencia de la prueba, evaluándola con los indicadores de logro correspondientes a 2do grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión exige realizar 'Ajustes de Acceso' (como el macrotipo y control de iluminación) sin disminuir las expectativas de aprendizaje ni alterar los indicadores de logro del grado, garantizando equidad en la evaluación."
    },
    {
        id: 422,
        categoria: "Evaluación",
        pregunta: "Durante una reunión de padres en 3er grado, una madre se queja de que el docente no aplica exámenes mensuales tradicionales y exige ver una prueba escrita con puntos. El docente utiliza rúbricas, listas de cotejo y portafolios. ¿Cuál es la respuesta pedagógica e institucional correcta?",
        opciones: [
            "Imprimir un examen tradicional de inmediato para complacer a la madre y evitar una queja formal en la dirección.",
            "Explicar que la Ordenanza 04-2023 prohíbe los exámenes y que los padres no deben intervenir en la metodología docente.",
            "Mostrar el portafolio y las rúbricas de la estudiante, explicando que la evaluación por competencias es continua, formativa y basada en múltiples evidencias, no en una sola prueba memorística.",
            "Promediar las notas de las rúbricas para convertirlas a una escala de 0 a 100 y así la madre lo entienda mejor."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en el Nivel Primario es criterial y cualitativa. El docente tiene el deber de educar a las familias sobre el modelo formativo, demostrando cómo los instrumentos de evaluación sistemática (rúbricas/portafolio) evidencian el nivel de logro real (L, EP, I) mejor que una prueba memorística."
    },
    {
        id: 423,
        categoria: "Planificación Pedagógica",
        pregunta: "Al diseñar una Unidad de Aprendizaje en 5to grado, el equipo docente debe integrar el Eje Transversal 'Ciudadanía y Convivencia'. ¿Cuál es la forma normativamente correcta de evidenciar esta integración en la práctica de aula?",
        opciones: [
            "Copiar la definición del eje transversal en la portada de la planificación para cumplir con el esquema solicitado por el coordinador.",
            "Asignar a los estudiantes la copia de un texto sobre la convivencia pacífica durante la clase de Formación Integral Humana y Religiosa.",
            "Articular actividades en diversas áreas (ej. debatir un conflicto histórico en Sociales y redactar normas de aula en Lengua Española) que conecten los saberes con la resolución de problemas ciudadanos.",
            "Realizar un acto a la bandera más largo los viernes para fomentar el civismo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los Ejes Transversales no son contenidos aislados ni requisitos burocráticos. Son grandes temas sociales que deben permear las áreas curriculares, dándoles contexto y obligando a los estudiantes a movilizar competencias para reflexionar y actuar sobre su realidad."
    },
    {
        id: 424,
        categoria: "Ética",
        pregunta: "Una maestra de 1er grado se siente muy orgullosa del trabajo de sus alumnos en una feria científica. Toma fotos de los niños exponiendo y las publica en su cuenta pública de Instagram y TikTok con el uniforme del centro. ¿Qué principio legal está vulnerando?",
        opciones: [
            "Ninguno, ya que las fotos resaltan el trabajo educativo positivo y dan buena imagen a la escuela.",
            "La Ley 136-03, que prohíbe la difusión de imágenes de menores de edad que permitan su identificación pública sin el consentimiento expreso y por escrito de sus tutores legales.",
            "El manual de uso de uniformes escolares, ya que los niños podrían estar mal peinados en la foto.",
            "El derecho de autor, porque los proyectos científicos pertenecen al centro educativo y no a ella."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (Código para el Sistema de Protección de Niños, Niñas y Adolescentes). El derecho a la intimidad y a la imagen del menor es inviolable. La publicación de fotos sin autorización formal en redes sociales (incluso con fines 'positivos') es una falta ética y legal grave."
    },
    {
        id: 425,
        categoria: "Alfabetización",
        pregunta: "En el segundo trimestre, un niño de 2do grado presenta inversiones sistemáticas al escribir, confundiendo la 'b' con la 'd' y la 'p' con la 'q'. El resto de su lectura avanza con normalidad. Según el enfoque de alfabetización inicial, ¿cómo debe actuar la docente?",
        opciones: [
            "Diagnosticar dislexia y solicitar al centro que lo transfiera a una escuela de educación especial.",
            "Tacharle las letras invertidas con bolígrafo rojo y hacerle repetir la palabra 50 veces para crear memoria muscular.",
            "Comprender que es una etapa transitoria común relacionada con la direccionalidad, e implementar juegos de lateralidad y apoyo visual con referentes estables en el aula.",
            "Restarle un nivel en su calificación de Lengua Española para que preste más atención al trazo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 01-2023 y Enfoque Psicogenético. Las inversiones grafomotrices (escritura en espejo) en el primer ciclo son fenómenos evolutivos normales asociados a la maduración de la lateralidad espacial, no un trastorno definitivo. Castigar o patologizar genera aversión a la escritura."
    },
    {
        id: 426,
        categoria: "Gestión del Aprendizaje",
        pregunta: "La maestra de 6to grado organiza un trabajo colaborativo. Observa que en el grupo de Juan, él investiga, escribe y expone todo, mientras los otros tres miembros conversan y no aportan. ¿Qué estrategia corrige esta disfunción pedagógica?",
        opciones: [
            "Ponerle calificación de 'L' a Juan y de 'I' a los demás para hacer justicia.",
            "Separar el grupo y ordenar que todos trabajen de forma individual en silencio.",
            "Diseñar la actividad con interdependencia positiva, asignando roles rotativos (ej. coordinador, secretario, relator, investigador) y evaluando tanto el producto como el proceso grupal.",
            "Llamar la atención del grupo frente a toda el aula para avergonzarlos y que se pongan a trabajar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estrategias Pedagógicas (Adecuación Curricular 2023). El trabajo colaborativo no ocurre mágicamente por sentar alumnos juntos. El docente debe estructurar la actividad garantizando la interdependencia positiva (el éxito de uno depende del éxito de todos) mediante roles claros y evaluables."
    },
    {
        id: 427,
        categoria: "Inclusión",
        pregunta: "Un alumno de 1er grado ingresa al centro ya leyendo con fluidez y resolviendo sumas complejas, terminando las actividades en 5 minutos y luego aburriéndose e interrumpiendo. ¿Cuál es el procedimiento normativo para atender sus Necesidades Específicas de Apoyo Educativo (NEAE)?",
        opciones: [
            "Ascenderlo automáticamente a 3er grado en el primer mes de clases.",
            "Asignarle que haga caligrafías adicionales para mantenerlo ocupado y en silencio.",
            "Solicitar evaluación por Orientación para confirmar Altas Capacidades y aplicar un programa de enriquecimiento curricular con retos de mayor profundidad cognitiva.",
            "Dejarlo salir a jugar al patio cuando termine para no entorpecer el ritmo de los demás."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024. Las Altas Capacidades son consideradas NEAE. La respuesta educativa no es dar 'más de lo mismo' (caligrafías) ni aislar, sino el enriquecimiento curricular (profundización, proyectos de investigación, tutoría de pares) para mantener el desafío cognitivo dentro de su grupo etario."
    },
    {
        id: 428,
        categoria: "Evaluación",
        pregunta: "Durante las primeras tres semanas del año escolar en 4to grado, el profesor aplica varias actividades diagnósticas. Obtiene resultados muy bajos en matemáticas. ¿Qué debe hacer administrativamente con estos resultados según el currículo?",
        opciones: [
            "Asignar estas valoraciones en el primer periodo del Registro de Grado como primera calificación.",
            "Registrar las deficiencias y realizar una nivelación de 4 semanas, adaptando su planificación para cubrir estas lagunas antes de avanzar a los temas de 4to grado.",
            "Convocar a los padres para que firmen un acta asumiendo la culpa del bajo rendimiento de sus hijos.",
            "Ignorar los resultados ya que la evaluación diagnóstica no tiene valor legal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica tiene una función estrictamente orientadora y predictiva, nunca sumativa (no va al registro como calificación). Su propósito es obligar al docente a ajustar su planificación y ejecutar planes de nivelación si los pre-requisitos no están consolidados."
    },
    {
        id: 429,
        categoria: "Planificación Pedagógica",
        pregunta: "Una docente está elaborando una Situación de Aprendizaje y redacta lo siguiente: 'Los estudiantes de 5to grado, ante la contaminación del río cercano, investigarán sobre el ciclo del agua guiados por la maestra para desarrollar la competencia científica'. Según la estructura del MINERD, ¿qué elemento clave le falta?",
        opciones: [
            "Las fechas exactas en que se realizará la investigación.",
            "El producto final o punto de llegada (ej. para elaborar una campaña de concientización y presentarla a la comunidad).",
            "Los nombres de todos los estudiantes que participarán.",
            "El presupuesto de los materiales a utilizar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Toda Situación de Aprendizaje debe contar con: contexto/problema, roles, estrategias, pero fundamentalmente un PRODUCTO FINAL o punto de llegada que evidencie la movilización de las competencias y dé sentido a la investigación."
    },
    {
        id: 430,
        categoria: "Ética",
        pregunta: "Una maestra observa marcas de golpes y quemaduras en los brazos de un estudiante de 2do grado. Al preguntarle sutilmente, el niño dice que 'su tío lo castiga con un cable'. ¿Cuál es el proceder obligatorio e inmediato de la docente?",
        opciones: [
            "Citar al tío al día siguiente y amenazarlo con llamar a la policía si vuelve a hacerlo.",
            "Levantar un informe escrito confidencial y entregarlo de inmediato a la Dirección y al departamento de Orientación para la activación del protocolo de protección a través del CONANI/Ministerio Público.",
            "Esperar unas semanas para ver si el abuso se repite antes de acusar a la familia injustamente.",
            "Recomendarle al niño que se porte bien para que no lo castiguen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Protocolos del MINERD. El docente es un garante de derechos. La omisión de denuncia en casos de maltrato infantil es un delito grave. La acción debe ser institucional, inmediata y articulada con Orientación/Dirección para no revictimizar al niño ni alertar al agresor indebidamente."
    },
    {
        id: 431,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, la maestra realiza diariamente la estrategia de 'Lectura en Voz Alta por parte del docente' utilizando cuentos con vocabulario rico. ¿Qué competencia fundamental de la alfabetización temprana se busca desarrollar con esto si los niños aún no saben decodificar?",
        opciones: [
            "Ninguna, es solo para relajarlos antes del recreo.",
            "Desarrollar habilidades de comprensión oral, incrementar el léxico, modelar la prosodia y acercar al niño a la estructura del lenguaje escrito y literario.",
            "Forzarlos a memorizar la historia para luego evaluarlos con un examen.",
            "Enseñarles exclusivamente las reglas de ortografía de manera teórica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 (Fascículos de Alfabetización). Leerle a los niños todos los días es indispensable. Aunque no decodifiquen, escuchando literatura desarrollan vocabulario avanzado, sintaxis compleja, imaginación y el deseo de aprender a leer (motivación), precursores absolutos de la comprensión lectora."
    },
    {
        id: 432,
        categoria: "Gestión del Aprendizaje",
        pregunta: "La maestra de 3er grado nota que pierde hasta 20 minutos de clase cada vez que los niños regresan del recreo; entran sudados, gritando y se niegan a sacar sus cuadernos. ¿Cuál es la estrategia de gestión de aula más asertiva?",
        opciones: [
            "Dejarlos sin recreo toda la semana siguiente para que valoren el tiempo.",
            "Gritar más fuerte que ellos y golpear el escritorio para recuperar la atención.",
            "Establecer y modelar una rutina de transición (ej. entrar en calma, hacer 2 minutos de respiración guiada profunda o leer un cuento corto) para bajar la energía y marcar el reinicio pedagógico.",
            "Anotar a todos en el registro anecdótico por indisciplina colectiva."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Disciplina Positiva y Gestión del Tiempo. Las transiciones caóticas roban tiempo pedagógico. Sancionar un estado fisiológico (alta energía post-recreo) no funciona. Se requiere una rutina de anclaje (respiración/mindfulness/lectura) que ayude a la autorregulación infantil y restablezca el clima de aula."
    },
    {
        id: 433,
        categoria: "Evaluación",
        pregunta: "Para evaluar las maquetas sobre el relieve en 5to grado, el profesor aplica la Coevaluación. Los estudiantes intercambian trabajos y todos se asignan una calificación de 'Logrado' (L) porque son amigos. ¿Cuál es el fallo en el diseño de esta evaluación?",
        opciones: [
            "Usar la coevaluación, ya que los niños de primaria no tienen capacidad ética para evaluarse.",
            "No haber provisto una rúbrica o lista de cotejo con criterios objetivos claros, ni haber modelado primero cómo dar retroalimentación formativa y constructiva.",
            "Que las maquetas deben evaluarse exclusivamente con pruebas escritas.",
            "Que la coevaluación solo sirve para restar puntos por mala conducta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La coevaluación es un proceso metacognitivo obligatorio, pero no puede dejarse a la subjetividad. Requiere andamiaje: el docente debe enseñar a usar instrumentos (rúbricas) para que la valoración se base en evidencias del producto y no en afinidades personales."
    },
    {
        id: 434,
        categoria: "Planificación Pedagógica",
        pregunta: "En la estructura de la Adecuación Curricular 2023, ¿cuál es la relación correcta entre las Competencias Fundamentales y las Competencias Específicas al momento de planificar?",
        opciones: [
            "Son independientes; en algunas unidades se usan las Fundamentales y en otras las Específicas.",
            "Las Fundamentales expresan las grandes intenciones (ej. Ética), y las Específicas son la traducción de esas intenciones a los saberes propios de cada asignatura (ej. argumentar en Lengua Española).",
            "Las Específicas evalúan a los estudiantes y las Fundamentales evalúan al maestro.",
            "Las Fundamentales reemplazaron a los indicadores de logro en el nuevo registro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Las Competencias Fundamentales (7) atraviesan todo el currículo. Las Específicas las operativizan en el área. Por ejemplo, la competencia comunicativa (fundamental) se vuelve específica en matemáticas al pedirle al niño que 'comunique matemáticamente un proceso'."
    },
    {
        id: 435,
        categoria: "Comportamientos Profesionales",
        pregunta: "Una maestra de 4to grado recibe quejas de que varios de sus estudiantes están creando memes ofensivos y burlándose de un compañero en un grupo de WhatsApp los sábados. ¿Cuál es su grado de responsabilidad institucional?",
        opciones: [
            "Ninguna, porque el uso de WhatsApp y el tiempo de fin de semana competen exclusiva y legalmente a los padres.",
            "Intervenir pedagógicamente al enterarse, ya que el ciberacoso impacta directamente la convivencia, la salud mental y el rendimiento del estudiante en el entorno escolar, reportando a Orientación.",
            "Revisar los teléfonos personales de todos los estudiantes el lunes para borrar los memes.",
            "Suspender a los implicados indefinidamente hasta que cierren el grupo de WhatsApp."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Manual de Convivencia Escolar (OD 22-2023). El ciberacoso, aunque ocurra fuera del horario y recinto físico, tiene un efecto expansivo en la escuela. La institución tiene el deber ético y legal de actuar de forma formativa y orientadora para restituir derechos y el clima escolar pacífico."
    },
    {
        id: 436,
        categoria: "Alfabetización",
        pregunta: "Al iniciar el año escolar en 1er grado, el profesor realiza diariamente el 'Juego de los Aplausos', donde los niños aplauden por cada golpe de voz que escuchan en palabras como 'E-LE-FAN-TE'. ¿Qué habilidad crítica está desarrollando?",
        opciones: [
            "La motricidad gruesa para educación física.",
            "La conciencia silábica, una sub-habilidad de la conciencia fonológica indispensable para que comprendan cómo el lenguaje oral se segmenta y se traduce a lenguaje escrito.",
            "El aprendizaje del abecedario de memoria.",
            "El control de la disciplina, usando los aplausos para que guarden silencio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La conciencia fonológica es el mayor predictor del éxito lector. Un niño no puede entender que la 'L' suena /l/ si primero no es capaz de aislar los sonidos más grandes del lenguaje oral (las sílabas) mediante estrategias corporales como aplausos o saltos."
    },
    {
        id: 437,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para llevar a cabo un debate sobre 'Los derechos de los niños' en 6to grado, la maestra decide romper la organización tradicional de pupitres en filas y los organiza en un gran círculo o asamblea. ¿Qué sustento pedagógico tiene esta decisión?",
        opciones: [
            "Solo busca que el aula se vea diferente para la foto institucional.",
            "Enviar a los estudiantes más indisciplinados al centro del círculo para vigilarlos mejor.",
            "Modificar el espacio (ambiente como 'tercer educador') para propiciar el contacto visual pleno, la escucha activa, la equidad en la participación y el desarrollo de la competencia comunicativa.",
            "Que la maestra pueda sentarse en su escritorio a calificar sin tener niños en frente."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Gestión del Ambiente (Adecuación Curricular). Las filas promueven una comunicación vertical (maestro-alumno) pasiva. Un debate exige comunicación horizontal y dialógica. El mobiliario debe ajustarse a la intención pedagógica; el círculo democratiza la palabra y fomenta la ciudadanía."
    },
    {
        id: 438,
        categoria: "Inclusión",
        pregunta: "Llega a la sección de 5to grado un estudiante de nacionalidad haitiana. Aunque comprende español básico, no logra redactar textos en este idioma. ¿Cómo debe evaluarse su producción escrita según el enfoque de equidad?",
        opciones: [
            "Ponerle 'I' en todas las materias hasta que domine perfectamente la gramática del español.",
            "Prohibirle usar el creole en la escuela para forzar una inmersión total rápida.",
            "Aplicar ajustes razonables, permitiéndole expresarse oralmente o con apoyos visuales/bilingües para evaluar sus saberes sobre las áreas (ej. Ciencias), mientras recibe apoyo progresivo de inmersión en español.",
            "Darlo por aprobado automáticamente en Lengua Española por consideración a su situación migratoria."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024 y Enfoque de Derechos. La barrera idiomática no puede confundirse con una deficiencia cognitiva. El estudiante tiene derecho a demostrar sus saberes de las demás áreas sin que el dominio perfecto del español sea un filtro excluyente, requiriendo adaptaciones curriculares y de acceso temporales."
    },
    {
        id: 439,
        categoria: "Evaluación",
        pregunta: "Un docente está redactando un Registro Anecdótico sobre un incidente en el aula de 4to grado. Escribe: 'Hoy Pedro se portó pésimo, como siempre es muy agresivo y golpeó a Carlos por maldad'. ¿Cuál es el error profesional en esta redacción según la técnica de evaluación?",
        opciones: [
            "Olvidó poner la fecha exacta del incidente.",
            "Utiliza juicios de valor, adjetivos subjetivos y etiquetas ('pésimo', 'agresivo', 'por maldad') en lugar de describir el hecho observable de manera neutral y objetiva.",
            "Que el registro anecdótico solo debe usarse para hechos positivos, nunca para conflictos.",
            "Que no obligó a Pedro a firmar el cuaderno debajo del reporte."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La técnica de observación (Registro Anecdótico) exige neutralidad. Un registro ético y profesional describe la acción exacta: 'Durante el recreo, Pedro empujó a Carlos tras discutir por un balón'. Los juicios subjetivos estigmatizan al estudiante y carecen de validez pedagógica."
    },
    {
        id: 440,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un maestro de 6to grado con 20 años de servicio se niega a utilizar el nuevo Registro de Grado basado en las valoraciones L, EP, I, argumentando que él siempre ha evaluado con números (0-100) y que le da mejores resultados. Pasa sus notas en una libreta personal. ¿Qué falta normativa comete?",
        opciones: [
            "Ninguna, el Estatuto Docente ampara su libertad de cátedra y autonomía metodológica.",
            "Incurre en un incumplimiento grave de sus deberes profesionales, ya que el Registro de Grado es el único documento oficial, auditable y legal que certifica los procesos bajo las normas del MINERD.",
            "Falta leve de formato, siempre y cuando al final del año él convierta sus números a letras para la dirección.",
            "Vulneración del derecho de los padres a recibir notas claras en números."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 y Estatuto Docente. La libertad de cátedra aplica a las estrategias, no a la normativa estatal de evaluación y certificación oficial. La no utilización del Registro de Grado invalida administrativamente los aprendizajes, siendo una falta disciplinaria y ética frente al sistema y al estudiante."
    },

    {
        id: 441,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una actividad de resolución de problemas en 5to grado, el docente nota que un grupo de estudiantes ha llegado a una respuesta incorrecta siguiendo un procedimiento lógico pero incompleto. ¿Cuál es la intervención pedagógica que mejor fomenta el aprendizaje significativo?",
        opciones: [
            "Señalarles inmediatamente el error en la pizarra para evitar que el resto de la clase aprenda un concepto equivocado.",
            "Realizar preguntas reflexivas que lleven al grupo a revisar su propio proceso, identificar la inconsistencia y ajustar su estrategia de manera autónoma.",
            "Asignarles una calificación de 'En Proceso' (EP) y pedirles que copien la solución correcta del libro de texto.",
            "Pedir a un estudiante que ya resolvió bien el problema que pase a la pizarra y les explique cómo se hace paso a paso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Enfoque Orientado a la Acción). El error es una oportunidad de aprendizaje. La intervención docente debe mediar el pensamiento crítico (metacognición) en lugar de dar la respuesta correcta, permitiendo que el estudiante sea protagonista de su propia corrección."
    },
    {
        id: 442,
        categoria: "Planificación Pedagógica",
        pregunta: "En la planificación de una Unidad de Aprendizaje de 3er grado, la docente incluye el uso de tabletas para investigar sobre 'Los seres vivos'. ¿Qué criterio técnico justifica prioritariamente el uso de este recurso según el currículo?",
        opciones: [
            "La necesidad de modernizar el aula para cumplir con los estándares tecnológicos del centro educativo.",
            "Que el uso de la tecnología facilita el control de la disciplina, ya que los niños se mantienen concentrados en las pantallas.",
            "La intención pedagógica de potenciar la competencia de Pensamiento Lógico, Crítico y Creativo a través de la curación y análisis de información digital.",
            "Que el Ministerio de Educación ha distribuido dispositivos y es obligatorio utilizarlos en cada sesión de clase."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estándares Profesionales (Dimensión Curricular). El uso de las TIC no es un fin en sí mismo ni un adorno. Debe estar subordinado a una intención pedagógica clara que movilice competencias específicas, en este caso, la investigación y el análisis crítico de la información."
    },
    {
        id: 443,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente de 4to grado observa que el equipo de gestión del centro no está aplicando correctamente los protocolos de registro de inasistencias en el sistema de gestión escolar. ¿Cuál es su deber según el marco de ética y eficiencia profesional?",
        opciones: [
            "Ignorar el hecho, ya que las tareas administrativas del equipo de gestión no son responsabilidad del docente de aula.",
            "Comunicar la observación de manera constructiva y formal al coordinador o director, ofreciendo su apoyo para asegurar la veracidad de los datos que impactan en los indicadores del centro.",
            "Quejarse con los padres de familia sobre la desorganización administrativa del centro para que ellos exijan mejoras.",
            "Realizar su propio registro en una libreta privada y no entregar reportes hasta que el sistema general funcione bien."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo ERP (Comportamientos Profesionales). El docente forma parte de una comunidad educativa y debe demostrar compromiso con la mejora institucional y la integridad de los procesos administrativos y pedagógicos del centro."
    },
    {
        id: 444,
        categoria: "Evaluación",
        pregunta: "Al evaluar la producción oral en 2do grado, el docente utiliza una 'Escala de Estimación'. Nota que un estudiante ha logrado los criterios de fluidez y coherencia, pero no los de entonación. ¿Cómo debe asentar esta valoración parcial en el proceso formativo?",
        opciones: [
            "Promediar los criterios logrados con los no logrados para obtener una nota numérica única.",
            "Identificar la dificultad específica de entonación para diseñar una actividad de apoyo pedagógico puntual, manteniendo el registro de los avances logrados.",
            "Esperar hasta que el estudiante logre todos los criterios antes de hacer cualquier anotación en el registro.",
            "Reprobar la actividad oral completa, ya que la competencia se considera lograda solo si se cumplen todos los criterios al 100%."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es procesual. Identificar qué aspectos del indicador de logro se han alcanzado y cuáles no, permite una intervención pedagógica diferenciada (retroalimentación formativa), que es el corazón de la evaluación por competencias."
    },
    {
        id: 445,
        categoria: "Inclusión",
        pregunta: "En una sección de 6to grado hay un estudiante con trastorno del espectro autista (TEA) que presenta sensibilidad sensorial ante ruidos fuertes. La escuela ha planeado una celebración de cumpleaños con música alta. ¿Qué acción docente garantiza la inclusión?",
        opciones: [
            "Pedir a la madre que no envíe al niño ese día para evitarle un mal momento de estrés.",
            "Realizar la actividad de manera normal, asumiendo que el niño debe aprender a adaptarse al entorno social de sus compañeros.",
            "Coordinar con el grupo y la familia ajustes ambientales (bajar el volumen, espacios de calma o uso de auriculares) y preparar al estudiante visualmente para la actividad.",
            "Obligar al estudiante a permanecer en el centro de la fiesta para que trabaje su tolerancia sensorial 'a la fuerza'."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes razonables incluyen modificaciones al entorno físico y social. Anticipar la situación y adaptar el ambiente permite que el estudiante participe en igualdad de condiciones sin vulnerar su bienestar emocional."
    },
    {
        id: 446,
        categoria: "Alfabetización",
        pregunta: "En 1er grado, durante la actividad de 'Lectura de textos que circulan en el ambiente', un niño identifica la palabra 'JUGOS' en un envase, pero al pedirle que lea la letra 'J' aislada, no sabe cuál es. ¿Qué evidencia este comportamiento según la etapa de alfabetización?",
        opciones: [
            "Que el niño no sabe leer y está adivinando por el dibujo del envase.",
            "Que el niño está en una etapa de lectura global/contextual, reconociendo el texto como una unidad con significado antes de analizar sus partes (letras).",
            "Que el niño tiene problemas de memoria visual a corto plazo.",
            "Que el docente debe dejar de usar envases y enfocarse exclusivamente en enseñar el abecedario de la A a la Z."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. En la alfabetización inicial, el reconocimiento de 'textos estables' (marcas, nombres) es un paso fundamental. El niño otorga significado al texto antes de dominar el código alfabético, lo cual es parte del proceso normal de construcción del sistema de escritura."
    },
    {
        id: 447,
        categoria: "Planificación Pedagógica",
        pregunta: "Al momento de planificar el horario escolar en el Nivel Primario, el docente debe asegurar que el tiempo dedicado a las Áreas Curriculares sea flexible. ¿Qué justifica esta flexibilidad normativa?",
        opciones: [
            "Que el maestro pueda salir más temprano si termina los contenidos rápido.",
            "La necesidad de extender el tiempo de una actividad si el interés de los estudiantes y la profundidad del aprendizaje lo requieren para lograr la competencia.",
            "Que el director pueda cambiar las clases según las visitas de técnicos que reciba el centro.",
            "Que los estudiantes no se aburran de estar mucho tiempo haciendo la misma tarea."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. El tiempo pedagógico está al servicio del aprendizaje, no de la burocracia. Si una investigación o debate está en su punto máximo de construcción de conocimiento, la flexibilidad permite agotar el proceso sin cortes arbitrarios."
    },
    {
        id: 448,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente recibe una retroalimentación de su coordinador pedagógico indicando que sus criterios de evaluación no son claros para los estudiantes. ¿Cuál es la actitud profesional esperada según el ERP?",
        opciones: [
            "Sentirse ofendido y argumentar que tiene muchos años de experiencia para ser cuestionado.",
            "Analizar las evidencias de su práctica junto al coordinador, identificar los puntos de mejora y ajustar sus instrumentos de evaluación para que sean más transparentes.",
            "Ignorar la sugerencia y seguir evaluando como siempre, ya que el registro es responsabilidad del docente.",
            "Pedir un cambio de centro educativo donde se respete más su autonomía docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo ERP / Estándares Profesionales. La reflexión sobre la práctica y la apertura a la supervisión pedagógica son dimensiones esenciales del desempeño. El docente profesional utiliza la retroalimentación para crecer y garantizar el derecho de los estudiantes a una evaluación justa."
    },
    {
        id: 449,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para trabajar la resolución de conflictos en 4to grado, la docente utiliza el 'Círculo de Diálogo' tras una pelea en el patio. ¿Cuál es el objetivo principal de esta técnica de gestión?",
        opciones: [
            "Identificar al culpable para imponerle una sanción ejemplar frente a todos.",
            "Restaurar los vínculos afectados, permitiendo que las partes expresen cómo se sintieron y lleguen a acuerdos de reparación consensuados.",
            "Evitar que los niños jueguen en el patio durante el próximo recreo.",
            "Llenar el tiempo de la clase de Formación Humana con una actividad dinámica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia (OD 22-2023). El enfoque restaurativo busca la sanación de la relación y la responsabilidad personal, alejándose del modelo puramente punitivo/expulsivo para fomentar una cultura de paz."
    },
    {
        id: 450,
        categoria: "Evaluación",
        pregunta: "En 5to grado, el docente decide evaluar la competencia comunicativa mediante un debate. ¿Qué instrumento es el más coherente para valorar desempeños complejos y variados durante este proceso?",
        opciones: [
            "Un examen de selección múltiple sobre las reglas del debate.",
            "Una Rúbrica Analítica que describa niveles de logro para criterios como argumentación, respeto al turno y uso del léxico.",
            "Una lista de cotejo que solo diga 'Sí' o 'No' participó en el debate.",
            "La observación general sin registro, asignando una nota al final por percepción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Para evaluar competencias (saber hacer en contexto), la rúbrica es el instrumento ideal porque permite desglosar la complejidad del desempeño en niveles descriptivos, facilitando una valoración objetiva y formativa."
    },
    {
        id: 451,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una aula de 4to grado, durante un trabajo en equipos, el ruido se eleva a un nivel que impide la comunicación. El docente utiliza un 'Semáforo de Ruido' y, al llegar al rojo, detiene la actividad. ¿Cuál es el fundamento de esta técnica en la gestión efectiva?",
        opciones: [
            "Imponer el silencio absoluto como norma principal de conducta en el aula.",
            "Desarrollar la autorregulación grupal mediante una señal visual que permite a los estudiantes monitorear y ajustar su propio volumen de trabajo.",
            "Suspender la actividad de forma punitiva para que los estudiantes sientan la pérdida del tiempo de juego.",
            "Demostrar que el docente tiene el control total de los dispositivos tecnológicos y las señales del aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de Gestión de Aula. El enfoque de competencias busca la autonomía. El semáforo no es un castigo, sino un recurso de autorregulación que ayuda a los niños a entender los niveles de ruido permitidos según la tarea (voz de equipo vs. voz de asamblea)."
    },
    {
        id: 452,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente de 5to grado identifica que un grupo de sus estudiantes utiliza términos despectivos sobre la orientación sexual de un compañero. ¿Cuál es la acción docente correcta según los estándares de desempeño?",
        opciones: [
            "Ignorar los comentarios si no hay agresión física, para no darle importancia a 'cosas de niños'.",
            "Abordar la situación de inmediato como una oportunidad pedagógica para trabajar la Competencia Ética y Ciudadana, promoviendo el respeto a la dignidad humana y la diversidad.",
            "Castigar a los estudiantes con una falta grave en el registro sin explicarles el motivo.",
            "Llamar a los padres del niño afectado para sugerirles que lo cambien de centro para evitarle sufrimientos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Constitución Dominicana. El docente debe garantizar un ambiente libre de discriminación y violencia. El hostigamiento verbal por prejuicios es una vulneración de derechos que debe ser intervenida desde la formación en valores y el cumplimiento de las normas de convivencia."
    },
    {
        id: 453,
        categoria: "Planificación Pedagógica",
        pregunta: "Al planificar una unidad sobre 'La nutrición' en 3er grado, la docente decide integrar a los padres para que compartan recetas saludables de la comunidad. ¿Qué dimensión de la planificación docente se está fortaleciendo?",
        opciones: [
            "La dimensión administrativa de control de la comunidad.",
            "La relación Escuela-Comunidad, reconociendo el contexto familiar como una fuente de saberes que enriquece el aprendizaje significativo.",
            "La delegación de la enseñanza de contenidos a personas externas para reducir la carga docente.",
            "El cumplimiento formal de un requisito del Programa de Alimentación Escolar (PAE)."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular (Relación Escuela-Comunidad). La educación no ocurre en el vacío. Integrar a la familia en los procesos de aprendizaje valida los saberes locales y fortalece el vínculo afectivo y social necesario para el desarrollo de competencias."
    },
    {
        id: 454,
        categoria: "Evaluación",
        pregunta: "En 6to grado, un docente aplica una 'Prueba de Desempeño' donde los estudiantes deben simular un noticiero sobre el cambio climático. ¿Cuál es el criterio principal para calificar esta actividad?",
        opciones: [
            "El estudiante que mejor sepa actuar o que tenga el disfraz más costoso.",
            "La capacidad del estudiante para integrar los conceptos científicos, comunicarlos con claridad y proponer soluciones basadas en evidencias.",
            "La cantidad de tiempo que duró la presentación frente al grupo.",
            "Que el estudiante no haya cometido ningún error de dicción durante la grabación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. En una evaluación de desempeño, el foco está en la integración de saberes (ser, saber, hacer). Se valora la competencia técnica (ciencia) y la transversal (comunicación/ciudadanía), no elementos superficiales como la vestimenta."
    },
    {
        id: 455,
        categoria: "Inclusión",
        pregunta: "Un docente nota que un estudiante con discapacidad motora no puede participar en la clase de Educación Física que consiste en jugar béisbol. ¿Qué acción refleja un compromiso con la inclusión?",
        opciones: [
            "Dejar al estudiante en el aula haciendo una tarea de lengua española mientras los demás juegan.",
            "Sentar al estudiante en las gradas para que sea el anotador oficial de los puntos del juego.",
            "Adaptar las reglas del juego o los materiales (ej. batear desde una base fija o usar pelotas sonoras/más grandes) para que el estudiante participe activamente según su posibilidad.",
            "Eximirlo de la calificación de la materia de forma definitiva."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión efectiva no es solo 'estar presente' o hacer tareas pasivas (anotador), sino garantizar la PARTICIPACIÓN. Los ajustes razonables en Educación Física implican adaptar la actividad para que el reto sea posible para todos."
    },
    {
        id: 456,
        categoria: "Alfabetización",
        pregunta: "La maestra de 1er grado utiliza 'El libro viajero', donde cada niño se lleva un cuaderno a casa para escribir con su familia algo que sucedió el fin de semana. ¿Qué proceso de alfabetización se fomenta?",
        opciones: [
            "La copia mecánica de textos para mejorar la caligrafía.",
            "El uso funcional de la lengua escrita como herramienta para comunicar vivencias y la vinculación afectiva con la lectura y escritura.",
            "La evaluación de la ortografía de los padres de familia.",
            "La sustitución de los libros de texto oficiales por cuadernos hechos en casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La alfabetización inicial debe ser significativa. Escribir sobre la propia vida ('textos de circulación social') ayuda al niño a entender para qué sirve escribir, superando la etapa de ver las letras como simples dibujos sin sentido."
    },
    {
        id: 457,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de 5to grado, surge un debate imprevisto sobre una noticia de actualidad que apasiona a los estudiantes. El docente decide posponer la actividad planificada de matemáticas por 20 minutos para mediar el debate. ¿Cómo se califica esta acción?",
        opciones: [
            "Como una falta de planificación y pérdida de tiempo pedagógico.",
            "Como una gestión flexible y oportuna del aprendizaje que aprovecha el 'momento pedagógico' para desarrollar la competencia comunicativa y el pensamiento crítico.",
            "Como una falta grave al cumplimiento del horario oficial del MINERD.",
            "Como una estrategia para trabajar menos contenidos en el mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Un docente profesional no es un esclavo del cronómetro, sino un gestor del aprendizaje. Aprovechar el interés genuino de los alumnos para desarrollar competencias transversales es una práctica de excelencia pedagógica."
    },
    {
        id: 458,
        categoria: "Evaluación",
        pregunta: "Un docente de 4to grado devuelve un trabajo de investigación a un estudiante con la única nota de '60/100'. ¿Qué principio de la evaluación formativa se está ignorando?",
        opciones: [
            "El principio de la justicia numérica.",
            "La retroalimentación cualitativa, que es la que explica al estudiante qué logró, qué le faltó y cómo puede mejorar en el futuro.",
            "El principio de ahorro de papel al no escribir comentarios largos.",
            "La obligación de que los padres firmen cada nota numérica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La calificación sin retroalimentación es 'muerta'. En el enfoque por competencias, el estudiante necesita saber los criterios detrás de la nota para poder aprender del proceso y superar sus dificultades."
    },
    {
        id: 459,
        categoria: "Comportamientos Profesionales",
        pregunta: "El equipo de gestión del centro solicita a los docentes que entreguen una autoevaluación de su desempeño. Un docente decide marcar 'Excelente' en todo sin reflexionar seriamente. ¿Qué impacto tiene esto en su desarrollo profesional?",
        opciones: [
            "Es positivo, ya que asegura que recibirá mejores incentivos económicos.",
            "Es negativo, porque anula la posibilidad de identificar necesidades reales de capacitación y estanca su crecimiento profesional.",
            "Es indiferente, ya que la autoevaluación no tiene peso en la calificación final del ERP.",
            "Es una muestra de alta autoestima, necesaria para la labor docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo ERP / Estándares Profesionales. La autocrítica y la reflexión sobre la práctica son motores del desarrollo profesional. La honestidad en la autoevaluación permite al MINERD y al docente diseñar rutas de mejora efectivas."
    },
    {
        id: 460,
        categoria: "Planificación Pedagógica",
        pregunta: "Al seleccionar los recursos para una unidad de 2do grado sobre 'La comunidad', el docente prefiere usar un mapa dibujado por los niños y una caminata por el sector en lugar de solo mostrar una foto en el libro. ¿Qué criterio pedagógico prima aquí?",
        opciones: [
            "La economía, al no querer gastar tiza o recursos digitales.",
            "El uso de recursos del entorno y la construcción de aprendizajes desde lo cercano y concreto hacia lo abstracto.",
            "La improvisación ante la falta de libros de texto suficientes.",
            "El cumplimiento de las horas de salida fuera del aula por recreación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Los recursos del entorno (la comunidad misma) son los más potentes en los primeros grados de primaria para generar conceptos geográficos y sociales sólidos y vivenciales."
    },
    {
        id: 461,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Una maestra de 4to grado utiliza la técnica de 'La Caja de las Dudas', donde los estudiantes depositan papeles con preguntas que no se atrevieron a hacer en público. ¿Qué aspecto del clima de aula está fortaleciendo?",
        opciones: [
            "La inseguridad de los estudiantes al no querer hablar frente a otros.",
            "Un ambiente de seguridad emocional y confianza que reconoce que el no saber es parte del proceso de aprendizaje y reduce la ansiedad por el error.",
            "El anonimato para evitar que el maestro identifique quién no estudia.",
            "La falta de comunicación directa entre maestro y alumno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estándares Profesionales (Dimensión de Gestión de Aula). Un clima de aula efectivo es aquel donde el error se despenaliza. Esta técnica fomenta la participación de estudiantes tímidos y garantiza que ninguna duda se quede sin respuesta pedagógica."
    },
    {
        id: 462,
        categoria: "Comportamientos Profesionales",
        pregunta: "Durante una asamblea de la APMAE, un grupo de padres critica duramente a la directora del centro. Un docente presente interviene diciendo: 'Ella es así, nunca escucha a nadie, yo también tengo problemas con ella'. ¿Cuál es la falta ética en este comportamiento?",
        opciones: [
            "Ninguna, el docente tiene derecho a la libre expresión de sus sentimientos.",
            "Vulneración del compromiso institucional y la lealtad profesional, ya que los conflictos internos deben dirimirse en los canales correspondientes y no ventilarlos para socavar la autoridad frente a la comunidad.",
            "Una falta de solidaridad con sus compañeros docentes.",
            "Un exceso de honestidad que ayuda a los padres a entender la realidad del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código de Ética Docente / Estatuto. El docente debe proyectar una imagen de unidad institucional frente a la comunidad externa. Las críticas a la gestión deben realizarse en reuniones técnicas o mediante los organismos de participación interna, no en espacios públicos que debiliten la institucionalidad."
    },
    {
        id: 463,
        categoria: "Evaluación",
        pregunta: "En 5to grado, para evaluar el indicador 'Utiliza estrategias de cálculo mental', el docente propone un juego de tienda escolar. Observa que una niña usa los dedos para sumar. ¿Cuál es la valoración correcta en ese momento?",
        opciones: [
            "Logrado (L), porque al final llegó al resultado correcto.",
            "En Proceso (EP), porque aunque resuelve el problema, todavía depende de una estrategia concreta y no ha alcanzado la abstracción del cálculo mental requerido por el indicador.",
            "Iniciado (I), porque usar los dedos es de niños de primer grado.",
            "Reprobada, por no seguir la instrucción de no usar las manos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo del Registro de Grado. La valoración 'EP' indica que el estudiante muestra avances pero requiere mediación para alcanzar el nivel de dominio técnico o abstracto esperado. El docente debe ahora proponer actividades que la ayuden a soltar el apoyo físico."
    },
    {
        id: 464,
        categoria: "Alfabetización",
        pregunta: "Un docente de 2do grado nota que un estudiante lee palabra por palabra, sin respetar los puntos ni las comas, lo que le impide entender el sentido del texto. ¿En qué debe enfocarse la intervención?",
        opciones: [
            "En la velocidad lectora, cronometrando cuántas palabras lee por minuto.",
            "En la fluidez y prosodia (entonación y ritmo), mediante lecturas modeladas y teatro de lectores para conectar la puntuación con el significado.",
            "En enseñarle más vocabulario difícil de diccionarios.",
            "En que copie el texto diez veces para que se lo aprenda de memoria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La comprensión lectora depende de la fluidez. Si el niño gasta toda su energía cognitiva en decodificar sílabas, no puede procesar el significado. Leer con entonación (prosodia) ayuda a segmentar las ideas correctamente en el cerebro."
    },
    {
        id: 465,
        categoria: "Planificación Pedagógica",
        pregunta: "El currículo dominicano actual se define como 'abierto, flexible y participativo'. ¿Cómo aplica un docente la característica de 'participativo' en su planificación de aula?",
        opciones: [
            "Dejando que los estudiantes decidan qué días no quieren tener clase.",
            "Involucrando a los estudiantes en la selección de temas de interés para proyectos y en la negociación de algunos criterios de evaluación.",
            "Permitiendo que los padres de familia dicten los contenidos que ellos consideran importantes.",
            "Haciendo que todos los estudiantes hablen al mismo tiempo durante la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Bases de la Revisión y Actualización Curricular. Lo participativo implica democratizar el proceso de aprendizaje. Cuando el alumno tiene voz en su formación (ej. elegir el tema de un Proyecto de Aula), aumenta su compromiso y motivación intrínseca."
    },
    {
        id: 466,
        categoria: "Inclusión",
        pregunta: "Un estudiante extranjero se incorpora a 3er grado a mitad de año. Sus compañeros lo excluyen de los juegos por su acento. El docente decide organizar una 'Feria de las Culturas' donde cada niño investigue y valore el origen de sus familias. ¿Qué está trabajando el docente?",
        opciones: [
            "Solo un contenido de Ciencias Sociales sobre geografía.",
            "El clima inclusivo y la Competencia Ética y Ciudadana, utilizando la diversidad como un valor pedagógico para prevenir el acoso escolar (bullying).",
            "Una actividad recreativa para que los niños no se aburran en el aula.",
            "Una estrategia para que el estudiante extranjero se sienta obligado a cambiar su acento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Manual de Convivencia. La inclusión no es solo para discapacidades; es para toda la diversidad (cultural, étnica, lingüística). El docente debe ser un agente activo que desarticule prejuicios mediante la educación en valores."
    },
    {
        id: 467,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Un docente de 6to grado utiliza 'Rúbricas de Autoevaluación' después de cada proyecto. Un estudiante se pone 'Excelente' en todo, pero el docente sabe que no trabajó. ¿Cuál es la respuesta educativa correcta?",
        opciones: [
            "Tacharle la autoevaluación y ponerle un cero por mentiroso.",
            "Sostener una entrevista individual de retroalimentación, pidiéndole al estudiante que muestre las evidencias que sustentan su valoración y ayudándole a reflexionar sobre su honestidad y compromiso.",
            "Ignorar la autoevaluación y poner la nota que el maestro considere.",
            "Llamar a los padres para informarles que el niño tiene problemas morales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La autoevaluación es un proceso de aprendizaje. Si el estudiante no es honesto, es porque aún no ha desarrollado la capacidad reflexiva. El papel del docente es mediar esa reflexión mediante el diálogo y la confrontación con las evidencias reales."
    },
    {
        id: 468,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente es asignado a un centro educativo muy lejano a su residencia. Durante los primeros meses, llega tarde frecuentemente alegando problemas de transporte. ¿Cómo afecta esto su evaluación de desempeño?",
        opciones: [
            "No le afecta, ya que es una causa justificada por la distancia.",
            "Le afecta negativamente en la dimensión de Compromiso Ético y Profesional, ya que la puntualidad es un deber básico y debe gestionar alternativas para cumplir con su horario.",
            "El Ministerio debe ponerle un transporte privado para que no llegue tarde.",
            "Se compensa si el docente se queda más tiempo después de la hora de salida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estatuto Docente y Reglamento de Carrera. El cumplimiento del horario es una obligación contractual y ética. Aunque la distancia sea un reto, el docente profesional debe buscar soluciones o realizar los trámites de traslado correspondientes, pero no vulnerar el tiempo de aprendizaje de los niños."
    },
    {
        id: 469,
        categoria: "Evaluación",
        pregunta: "En 4to grado, el profesor de Educación Física nota que un niño tiene miedo a saltar el obstáculo. En lugar de forzarlo, le pide que realice un salto más bajo y que explique la técnica. ¿Qué está evaluando?",
        opciones: [
            "Nada, porque el niño no cumplió con el estándar del salto alto.",
            "El componente actitudinal y el conocimiento procedimental de la competencia motriz, valorando el progreso individual y la gestión del miedo.",
            "Que el niño es flojo y no tiene aptitud física.",
            "Una falta de disciplina por no obedecer la instrucción original."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en Educación Física bajo el enfoque por competencias no es 'olímpica'. Se valoran los procesos, la conciencia corporal y la disposición, permitiendo que cada estudiante avance según su ritmo biológico y emocional."
    },
    {
        id: 470,
        categoria: "Planificación Pedagógica",
        pregunta: "Al final de la jornada en jornada extendida, los docentes de un centro se reúnen 30 minutos para coordinar las actividades del día siguiente. ¿Cómo se denomina técnicamente este espacio?",
        opciones: [
            "Tiempo de descanso docente.",
            "Comunidad de Aprendizaje o Espacio de Planificación Colaborativa, vital para asegurar la coherencia pedagógica del centro.",
            "Reunión de chismes pedagógicos.",
            "Tiempo perdido que debería usarse con los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Calendario Escolar / Jornada Extendida. La planificación colaborativa es un estándar de calidad. Permite que lo que pasa en matemáticas tenga sentido con lo que pasa en lengua española y que el centro educativo funcione como una unidad pedagógica y no como islas aisladas."
    },
    {
        id: 471,
        categoria: "Planificación Pedagógica",
        pregunta: "Al desarrollar una secuencia didáctica en 5to grado, el docente nota que el tiempo planificado fue insuficiente y está a punto de sonar el timbre de salida sin haber realizado la actividad de cierre. ¿Qué acción pedagógica procede según el modelo por competencias?",
        opciones: [
            "Dejar que los estudiantes salgan al recreo y comenzar la clase siguiente exactamente donde se quedó.",
            "Asignar la actividad de cierre como tarea para la casa, asegurando así que el currículo se cumpla a tiempo.",
            "Acelerar la explicación y dictar un resumen rápido en la pizarra para que los niños lo copien antes de irse.",
            "Reajustar la temporalización, pausar la actividad de desarrollo y priorizar un cierre breve (metacognición) para consolidar lo aprendido en la sesión."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Adecuación Curricular 2023. El cierre pedagógico (la metacognición y síntesis) es innegociable en la secuencia didáctica, pues es donde el estudiante da sentido a lo que aprendió. Es preferible acortar el desarrollo que omitir el cierre o enviarlo como tarea."
    },
    {
        id: 472,
        categoria: "Inclusión",
        pregunta: "En una evaluación de matemáticas en 3er grado, la maestra nota que un estudiante con discalculia severa diagnosticada no puede realizar el cálculo escrito de la resta, aunque comprende verbalmente la lógica del problema. ¿Cuál es el ajuste razonable primario para evaluar su competencia de resolución de problemas?",
        opciones: [
            "Proveerle apoyos tangibles (ábacos, material base 10) o permitirle el uso de calculadora para el proceso mecánico, evaluando su capacidad de razonamiento lógico frente al problema.",
            "Calificarlo con 'En Proceso' (EP) hasta que logre dominar el cálculo manual sin ayuda de herramientas.",
            "Eximirlo de las evaluaciones de matemáticas y evaluarlo únicamente en Lengua Española y Artística.",
            "Darle una prueba de un nivel inferior (de 1er grado) para que no se frustre al no poder restar."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 05-2024. La discalculia afecta la mecánica del cálculo, no la inteligencia ni la lógica. La competencia a evaluar es 'Resolución de Problemas', no el acto de restar a mano. El DUA permite el uso de herramientas tecnológicas o físicas para sortear la barrera del cálculo sin bajar la expectativa del grado."
    },
    {
        id: 473,
        categoria: "Evaluación",
        pregunta: "Durante la entrega de boletines, un padre se muestra inconforme porque su hija de 2do grado obtuvo 'En Proceso' (EP) en varios indicadores y exige una nota numérica. El docente intenta manejar la situación. ¿Cuál respuesta demuestra el correcto dominio del sistema de evaluación?",
        opciones: [
            "Indicarle que él solo sigue las reglas del MINERD y que si tiene quejas, debe dirigirse a la dirección del centro.",
            "Hacer una equivalencia no oficial (ej. EP equivale a 70 puntos) para que el padre se vaya tranquilo y sin dudas.",
            "Explicar el sentido cualitativo y formativo de la escala, mostrando el portafolio de la niña para evidenciar qué ha logrado, qué le falta y cómo trabajarán juntos para alcanzar el 'Logrado'.",
            "Sugerir al padre que pague una tutoría privada, ya que el 'EP' significa que la niña está reprobando el año escolar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en el Nivel Primario es cualitativa y criterial. Convertir letras a números desvirtúa el enfoque. El docente debe empoderar e informar a la familia utilizando evidencias (portafolios, rúbricas) para que comprendan la naturaleza formativa de la evaluación."
    },
    {
        id: 474,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Una maestra de 6to grado quiere implementar la estrategia de 'Aula Invertida' (Flipped Classroom) en Ciencias Sociales. ¿Qué dinámica de aula debe establecer para ejecutar correctamente esta estrategia?",
        opciones: [
            "Explicar el tema en la pizarra de forma tradicional y dejar que los niños hagan los ejercicios de práctica en sus casas.",
            "Asignar el consumo del material teórico (videos o lecturas) en casa, y utilizar el valioso tiempo de aula para debates, análisis y resolución de problemas mediado por la maestra.",
            "Que los estudiantes impartan las clases todos los días mientras la maestra se sienta al fondo a evaluarlos.",
            "Asignar trabajos grupales exclusivamente para que los hagan los fines de semana en casa de un compañero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de Aprendizaje (Adecuación Curricular 2023). El aula invertida delega el aprendizaje pasivo (conocer teoría) al espacio extraclase, reservando el aula para el aprendizaje activo (analizar, aplicar, crear) donde la mediación del docente es más necesaria."
    },
    {
        id: 475,
        categoria: "Alfabetización",
        pregunta: "La maestra de 1er grado nota que sus estudiantes se aburren y se distraen rápidamente al copiar sílabas repetitivas de la pizarra (ma-me-mi-mo-mu). Según el enfoque funcional de la enseñanza de la lengua, ¿cómo debe rediseñar la actividad?",
        opciones: [
            "Reducir la cantidad de sílabas a copiar a la mitad para que no se cansen tan rápido.",
            "Prometerles pegatinas o premios a los que copien sin levantar la cabeza de la libreta.",
            "Aplicar sanciones a los que se distraigan, colocándolos de pie al final del salón.",
            "Sustituir la copia mecánica por el análisis de textos de circulación social (envases, afiches, nombres propios) para que interactúen con el lenguaje escrito dotado de significado real."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 01-2023. El enfoque textual, funcional y comunicativo desecha el método silábico mecanicista (plana y copia sin sentido). Los niños aprenden a leer y escribir interactuando con textos auténticos que cumplen una función social real."
    },
    {
        id: 476,
        categoria: "Ética",
        pregunta: "La directiva de la APMAE se acerca a un maestro y le ofrece entregarle directamente una cuota de dinero mensual recolectada por los padres para que él compre materiales y 'mejore su salón' a su gusto. ¿Cuál debe ser el proceder ético del docente?",
        opciones: [
            "Rechazar la administración directa de los fondos, agradeciendo la iniciativa pero indicando que las compras y el manejo financiero corresponden exclusivamente a la APMAE y a la Dirección.",
            "Aceptar el dinero, guardarlo en una cuenta personal y llevar todos los recibos al final de mes para demostrar transparencia.",
            "Aceptar el dinero solo si todos los padres firman una carta donde conste que fue una donación voluntaria.",
            "Tomar el dinero y usarlo en su propio beneficio, ya que el salario docente no alcanza para comprar materiales del aula."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Estatuto Docente y Reglamento de las APMAE. El docente tiene prohibido administrar, cobrar o manejar fondos monetarios directos provenientes de las familias o estudiantes. Esto evita conflictos de interés, suspicacias y mantiene la relación estrictamente en el plano pedagógico."
    },
    {
        id: 477,
        categoria: "Convivencia",
        pregunta: "Durante un trabajo grupal en 4to grado, tres estudiantes se niegan abiertamente a incluir a un compañero argumentando que 'él es muy lento y siempre les baja la nota'. ¿Qué intervención formativa debe aplicar el docente?",
        opciones: [
            "Aceptar la decisión del grupo y poner al estudiante excluido a trabajar solo para evitar discusiones.",
            "Obligarlos a aceptarlo amenazándolos con quitarles 10 puntos de la calificación final del proyecto.",
            "Sostener un diálogo reflexivo con el grupo sobre la equidad y la empatía, y estructurar roles dentro del equipo (DUA) para que el estudiante excluido pueda aportar desde sus fortalezas.",
            "Cambiar al estudiante a otro grupo donde haya niños 'más buenos' que no se quejen."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 22-2023 (Manual de Convivencia) y Educación Inclusiva. La exclusión académica entre pares es una forma de violencia psicológica. Obligar o castigar no resuelve el prejuicio. Se debe mediar mediante el diálogo (práctica restaurativa) y garantizar una interdependencia estructurada donde todos brillen."
    },
    {
        id: 478,
        categoria: "Evaluación",
        pregunta: "Un docente está escribiendo un reporte anecdótico sobre un estudiante de 5to grado. Su apunte dice: 'Hoy María estuvo insoportable, siempre quiere llamar la atención y molesta a sus compañeros a propósito'. Según los criterios técnicos de evaluación, ¿cómo se califica este instrumento?",
        opciones: [
            "Excelente, porque resume perfectamente el perfil psicológico y la actitud negativa de la estudiante.",
            "Adecuado, porque permite a los padres ver exactamente cómo se porta su hija sin rodeos.",
            "Incompleto, porque le falta agregar la sanción que se le impuso a la estudiante.",
            "Inválido y carente de ética, ya que el registro anecdótico debe limitarse a describir los hechos observables objetivamente, desprovisto de juicios de valor, adjetivos estigmatizantes y suposiciones."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 04-2023. La técnica de observación sistemática requiere objetividad. Describir a un niño como 'insoportable' o asumir que hace las cosas 'a propósito' es una interpretación subjetiva y patologizante que viola la ética de la evaluación formativa."
    },
    {
        id: 479,
        categoria: "Planificación Pedagógica",
        pregunta: "Un equipo docente de 6to grado decide trabajar un Proyecto Participativo de Aula (PPA) sobre 'El rescate de las áreas verdes del sector'. Sin embargo, dudan sobre cómo integrar todas las materias. ¿Cuál es el lineamiento normativo para esta articulación?",
        opciones: [
            "Se deben forzar todas las materias, sin importar si encajan o no, para cumplir con el esquema curricular del mes.",
            "La articulación debe ser natural y pertinente; solo se integrarán las áreas y competencias específicas que realmente aporten a la solución y comprensión del problema central del proyecto.",
            "Se debe dividir el proyecto en horarios: los lunes para Matemáticas, los martes para Sociales, sin que se mezclen.",
            "En los PPA solo participa el maestro del área de Ciencias de la Naturaleza."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Estrategias de Articulación). La articulación de las áreas no debe ser artificial ni forzada. Un PPA convoca a las áreas cuyas competencias son necesarias para abordar el problema. Si un área no se conecta de forma lógica, se trabaja en paralelo mediante otra estrategia."
    },
    {
        id: 480,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de 2do grado, un estudiante brillante termina sus ejercicios de matemáticas en 10 minutos, mientras el resto del curso requiere 30 minutos. Tras terminar, comienza a jugar y a distraer a otros. ¿Cuál es la estrategia pedagógica de gestión idónea?",
        opciones: [
            "Implementar 'Zonas de Enriquecimiento' o 'Rincones de Aprendizaje' en el aula con desafíos autónomos (lectura, rompecabezas lógicos) donde los alumnos rápidos puedan ir sin interrumpir a los demás.",
            "Enviarlo al patio a jugar como recompensa por haber terminado rápido.",
            "Ponerle a borrar la pizarra y limpiar los pupitres de sus compañeros.",
            "Obligarlo a quedarse cruzado de brazos y en silencio absoluto hasta que termine el último estudiante."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Gestión de Aula y DUA. Los ritmos de aprendizaje difieren en el aula. Castigar al que termina rápido con inactividad (D) genera indisciplina. Las estaciones de enriquecimiento (A) proporcionan una extensión del aprendizaje, respetando su ritmo y fomentando la autonomía."
    },
    {
        id: 481,
        categoria: "Alfabetización",
        pregunta: "Al revisar el cuaderno de un estudiante de 2do grado que escribe de forma autónoma, la maestra nota que escribe 'caMioNeta' mezclando mayúsculas y minúsculas sin regla aparente. ¿Cómo debe interpretarse esto pedagógicamente?",
        opciones: [
            "Como una indisciplina visual, el estudiante debe ser penalizado para que escriba bonito.",
            "Como un trastorno grave de disgrafía que requiere la intervención de un psicólogo externo.",
            "Como una etapa normal y constructiva en el desarrollo de la escritura (alternancia grafémica), donde el niño prueba y estabiliza el trazo; el enfoque debe estar en la intención comunicativa y el mensaje.",
            "Como una deficiencia de la maestra de 1er grado que no le enseñó bien las vocales."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 01-2023. En las etapas tempranas, la hibridación de fuentes (mayúsculas, minúsculas, imprenta, cursiva) es parte de la exploración del sistema gráfico. La corrección ortográfica estricta llegará más adelante; la prioridad es que produzca sentido y logre comunicarse."
    },
    {
        id: 482,
        categoria: "Inclusión",
        pregunta: "En el centro educativo se ha matriculado una niña usuaria de silla de ruedas. La maestra de Educación Física debe impartir una unidad sobre 'Expresión Corporal y Danza'. ¿Cómo se aborda la inclusión en esta clase específica?",
        opciones: [
            "Exigirle que realice los mismos pasos de baile que los demás estudiantes de pie para no hacer distinciones discriminatorias.",
            "Eximirla de la actividad física y ponerla a investigar la historia de la danza dominicana en la biblioteca.",
            "Ponerla como jurado calificador de sus compañeros, ya que ella no puede bailar.",
            "Adaptar la coreografía enfocándose en la expresividad del tronco superior, brazos y rostro, asegurando su protagonismo y participación activa junto al resto del grupo."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 05-2024. El DUA establece la adaptación de la tarea a las posibilidades motrices del estudiante. La expresión corporal no requiere el uso de piernas exclusivamente. Modificar la coreografía garantiza su derecho al juego, al arte y a la inclusión real, sin roles pasivos (jurado/investigadora)."
    },
    {
        id: 483,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un maestro observa que un colega de otra sección somete constantemente a sus alumnos a humillaciones públicas, llamándoles 'brutos' y 'fracasados' frente a la clase. ¿Cuál es el compromiso ético y normativo ineludible del maestro observador?",
        opciones: [
            "Informar el caso inmediatamente al equipo de gestión (Director/Orientador) exigiendo el respeto al debido proceso, ya que la humillación es violencia psicológica y una vulneración grave de los derechos del menor.",
            "Mantener el silencio por lealtad profesional y espíritu de cuerpo institucional ('entre bomberos no nos pisamos la manguera').",
            "Enfrentar físicamente al colega delante de los niños para demostrarles a los alumnos que alguien los defiende.",
            "Publicar la situación anónimamente en redes sociales para que el escarnio público haga cambiar al maestro."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 136-03 y Código de Ética Docente. La violencia psicológica (tratos humillantes) está tipificada como delito. El maestro es garante de derechos, y el encubrimiento lo hace cómplice por omisión. Debe seguir la vía jerárquica institucional (nunca la vía violenta o redes sociales) para proteger al menor."
    },
    {
        id: 484,
        categoria: "Evaluación",
        pregunta: "Al término de una Unidad en 4to grado, el docente observa que 10 de sus 30 estudiantes no han logrado la competencia comunicativa escrita ('Iniciado'). Ante esto, el docente decide seguir adelante con la siguiente unidad porque 'ya se acabó el tiempo'. ¿Qué principio normativo está incumpliendo?",
        opciones: [
            "El principio de evaluación sumativa estricta.",
            "La obligación de implementar estrategias de Recuperación Pedagógica Inmediata y continua, ajustando su planificación para no dejar rezagados a esos estudiantes antes de avanzar a temáticas más complejas.",
            "El principio de delegación, ya que debió enviar a esos 10 niños al coordinador pedagógico.",
            "El derecho de los niños a repetir el año por su propia cuenta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación tiene un carácter formativo. Dejar a un 30% del aula con vacíos curriculares (rezago escolar) y avanzar ciegamente incumple el deber docente de garantizar el aprendizaje. La recuperación pedagógica debe ser en proceso, no al final del año."
    },
    {
        id: 485,
        categoria: "Planificación Pedagógica",
        pregunta: "Al diseñar una 'Situación de Aprendizaje', la docente debe redactar un escenario inicial. ¿Cuál de las siguientes redacciones corresponde a un verdadero CONTEXTO según la Adecuación Curricular?",
        opciones: [
            "'Aprender a multiplicar fracciones usando el método cruzado y simplificando resultados'.",
            "'Los estudiantes deberán presentar un examen final sobre la Revolución de Abril de 1965 para aprobar la asignatura de Sociales'.",
            "'En la escuela los índices de dengue han aumentado debido a los criaderos de mosquitos en el patio trasero después de las lluvias'.",
            "'Utilizar el libro de texto en las páginas 45 a 50 durante tres semanas consecutivas'."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Adecuación Curricular 2023. El 'contexto' en una Situación de Aprendizaje es el escenario real, simulado o problematizado del cual surge la necesidad de aprender. No es un listado de contenidos (A), ni un examen (B), ni un recurso (D), es una situación vital (C)."
    },
    {
        id: 486,
        categoria: "Convivencia",
        pregunta: "Un alumno de 5to grado, al ser corregido por hablar durante la clase, se levanta, tira su silla al suelo y desafía a gritos a la maestra frente a todos. ¿Cuál es la reacción inmediata más profesional, basada en la gestión de conflictos?",
        opciones: [
            "Gritarle más fuerte y exigirle que recoja la silla inmediatamente para no perder la autoridad.",
            "Aplicar fuerza física y expulsarlo del aula empujándolo hacia el pasillo.",
            "Llamar a los demás niños para que se burlen de él y vea lo ridículo que se ve.",
            "Mantener la calma absoluta, no entrar en lucha de poder, solicitar el apoyo del orientador o coordinador para retirar al estudiante del foco de tensión, salvaguardando la seguridad del grupo y aplicando el protocolo a posteriori."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Manual de Convivencia (OD 22-2023). Ante un 'secuestro amigdalar' (crisis de ira), el adulto debe mantener la regulación emocional. Entrar en lucha de poder (gritar) o agredir físicamente agrava la crisis y constituye una falta grave. Se desescala separando al niño del grupo con apoyo institucional."
    },
    {
        id: 487,
        categoria: "Alfabetización",
        pregunta: "En 3er grado, la maestra está leyendo 'Caperucita Roja' y pregunta: '¿Qué opinan ustedes de que Caperucita haya desobedecido a su mamá al irse por el bosque?'. ¿Qué nivel de comprensión lectora está estimulando?",
        opciones: [
            "Nivel Crítico (Valorativo), ya que exige al estudiante emitir un juicio de valor o postura personal frente al texto.",
            "Nivel Literal, ya que la respuesta está escrita textualmente en el cuento.",
            "Nivel Inferencial, porque deben deducir el camino que tomó el lobo.",
            "Nivel de Caligrafía, ya que luego deberán copiar la respuesta."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Enfoque Textual, Funcional y Comunicativo (Diseño Curricular). La pregunta exige emitir un juicio ('¿Qué opinan...?') basándose en el análisis de las acciones de un personaje, lo cual corresponde al nivel de pensamiento crítico, el nivel más alto de la comprensión lectora."
    },
    {
        id: 488,
        categoria: "Inclusión",
        pregunta: "La escuela diagnostica que un niño necesita adaptaciones significativas y apoyo especializado (posible maestra sombra/tutor). Los padres niegan la condición, se ofenden y rechazan cualquier ayuda externa. ¿Qué debe hacer el docente?",
        opciones: [
            "Expulsar al niño hasta que los padres traigan un certificado médico y acepten la realidad.",
            "Ignorar las necesidades del niño y tratarlo como a cualquier otro, ya que sin autorización de los padres no se puede hacer nada.",
            "Aplicar de oficio los ajustes razonables dentro de su aula (DUA) para asegurar su aprendizaje, documentar el caso y trabajar de la mano con Orientación para sensibilizar gradualmente a la familia sin generar rupturas.",
            "Reprobar al estudiante sistemáticamente para demostrarle a los padres que estaban equivocados."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024. El derecho a la educación del niño prima sobre la negación (duelo) de la familia. El docente no puede condicionar la inclusión a la aceptación de los padres; debe aplicar ajustes en su ámbito de acción pedagógica (aula) y dejar la intervención psicosocial al área de Orientación."
    },
    {
        id: 489,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una clase expositiva en 6to grado, la maestra hace una pregunta abierta. Al ver que nadie responde en los primeros dos segundos, ella misma da la respuesta inmediatamente y sigue hablando. ¿Cuál es el error en la gestión de esta técnica de preguntas?",
        opciones: [
            "Ninguno, la maestra demostró dominio del tema y evitó que la clase cayera en silencios incómodos.",
            "No haber respetado el 'Tiempo de Espera' (Wait Time) necesario para que los estudiantes procesen cognitivamente la pregunta, busquen información y formulen una respuesta estructurada.",
            "Haber hecho una pregunta abierta; solo se deben hacer preguntas de 'Sí' o 'No'.",
            "No haber castigado a los estudiantes que se quedaron en silencio por no haber estudiado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias Socráticas / Constructivismo. El 'tiempo de espera' es vital. Al responder su propia pregunta de inmediato, la docente fomenta la pasividad y el conformismo en el alumno, eliminando la oportunidad del esfuerzo cognitivo e invalidando el propósito de la pregunta."
    },
    {
        id: 490,
        categoria: "Comportamiento Profesional",
        pregunta: "Un profesor de 5to grado faltó varios días por una licencia médica. Al reincorporarse, nota que está atrasado en el cronograma curricular oficial. Faltan tres semanas para los exámenes del periodo. ¿Cuál es la decisión técnica correcta?",
        opciones: [
            "Pedir a los niños que se lleven los libros de texto a casa y lean solos todos los temas que no se impartieron.",
            "Ignorar los temas faltantes y evaluar a los niños únicamente con lo que se dio, aunque no logren las competencias del grado.",
            "Dar los temas de manera superficial y acelerada (dictados rápidos) para garantizar que todo el programa quede plasmado en el cuaderno de los estudiantes.",
            "Priorizar y readecuar su planificación, seleccionando los indicadores de logro y competencias imprescindibles, integrando áreas donde sea posible para garantizar aprendizajes profundos en el tiempo restante."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Flexibilidad Curricular (Adecuación 2023). Cubrir el programa a toda prisa (C) o delegarlo a casa (A) no genera aprendizaje. El docente profesional prioriza, adecúa e integra saberes, prefiriendo la profundidad y el dominio de competencias clave sobre la cobertura exhaustiva y superficial de temas."
    },

    {
        id: 491,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, la docente desea evaluar la competencia de Producción Escrita. ¿Cuál de las siguientes actividades corresponde al enfoque textual, funcional y comunicativo de la lengua?",
        opciones: [
            "Dictar un párrafo del libro de Ciencias Naturales para evaluar la ortografía y la limpieza del trazo.",
            "Hacer que los estudiantes copien de la pizarra la lección sobre los sustantivos tres veces.",
            "Solicitar a los niños que escriban planas de palabras trabadas (bra, bre, bri) para soltar la mano.",
            "Pedir a los estudiantes que redacten una invitación real (con borradores previos) para que sus padres asistan a la presentación de su proyecto escolar."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 01-2023. La producción escrita no se desarrolla copiando o mediante dictados mecánicos. Se logra cuando el estudiante escribe con un propósito real y un destinatario específico (enfoque comunicativo), viviendo el proceso de planificación, redacción y revisión."
    },
    {
        id: 492,
        categoria: "Evaluación",
        pregunta: "Un padre se presenta a la escuela exigiendo saber por qué su hijo tiene una calificación de 'En Proceso' (EP) en Ciencias de la Naturaleza. ¿Cuál debe ser la intervención del docente basándose en la evaluación criterial?",
        opciones: [
            "Mostrarle al padre la rúbrica y las evidencias del portafolio del estudiante, señalando los criterios específicos que ya alcanzó y aquellos que aún requieren apoyo para llegar al nivel 'Logrado'.",
            "Indicarle que es una exigencia del nuevo registro del MINERD y que no hay nada que él pueda hacer al respecto.",
            "Promediar matemáticamente las tareas del cuaderno para demostrarle que el número equivale a un 'EP'.",
            "Evadir la conversación diciendo que el niño se porta mal y por eso no saca 'Logrado'."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación criterial requiere transparencia. Las letras no son un promedio subjetivo, sino el reflejo de un nivel de dominio evidenciado a través de instrumentos (rúbricas) y producciones. El docente debe retroalimentar a la familia con pruebas objetivas."
    },
    {
        id: 493,
        categoria: "Inclusión",
        pregunta: "Se inscribe en 5to grado un estudiante con hipoacusia moderada (pérdida parcial de la audición). No utiliza lenguaje de señas y lee los labios. ¿Qué ajuste razonable de acceso es obligatorio implementar de inmediato en el aula?",
        opciones: [
            "Sentarlo al final del aula para que no se sienta presionado por las miradas de sus compañeros.",
            "Hablarle exageradamente lento y gritando durante toda la jornada escolar.",
            "Ubicarlo en la primera fila, garantizar contacto visual al hablar de frente (sin taparse la boca) y apoyar las explicaciones verbales con material visual o escrito en la pizarra.",
            "Eximirlo de las exposiciones orales y evaluarlo solo con exámenes escritos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes de acceso buscan eliminar las barreras del entorno. Para un estudiante que realiza lectura labiofacial, la ubicación estratégica, la buena iluminación del rostro del docente y el soporte visual constante (DUA) son medidas que garantizan su aprendizaje sin segregarlo."
    },
    {
        id: 494,
        categoria: "Ética",
        pregunta: "Una maestra de 3er grado decide vender dulces y meriendas dentro del aula a sus propios estudiantes durante la hora de recreo, argumentando que el dinero será usado para comprar material didáctico para el curso. ¿Es correcta esta práctica?",
        opciones: [
            "Sí, siempre y cuando ella demuestre con facturas que el dinero se invirtió en el salón de clases.",
            "No, constituye una falta ética y un conflicto de interés. El docente no debe realizar actividades comerciales con sus alumnos, y las recaudaciones corresponden a la APMAE bajo los debidos protocolos.",
            "Sí, porque fomenta la competencia de Resolución de Problemas y el emprendimiento en los estudiantes.",
            "No, a menos que el director del centro le dé un permiso verbal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley General de Educación 66-97 y Estatuto Docente. El docente no puede ejercer actos de comercio con sus estudiantes ni manejar efectivo directamente. Esto desvirtúa el rol pedagógico y genera inequidad. Las necesidades del aula se canalizan institucionalmente."
    },
    {
        id: 495,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para realizar un proyecto de investigación en 6to grado, el docente decide formar los grupos de trabajo. Según los principios del constructivismo y la Zona de Desarrollo Próximo, ¿cuál es el criterio más efectivo para agrupar a los estudiantes?",
        opciones: [
            "Dejar que los estudiantes elijan por afinidad para que no haya peleas.",
            "Agrupar a todos los estudiantes de alto rendimiento juntos, y a los de bajo rendimiento en otro grupo.",
            "Separarlos por género: niñas con niñas y niños con niños.",
            "Conformar grupos heterogéneos, mezclando diferentes niveles de habilidades y talentos para fomentar el andamiaje, el aprendizaje entre pares y la tutoría mutua."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Estrategias de Socialización). La heterogeneidad es clave en el aprendizaje colaborativo. Permite que estudiantes con mayor dominio en un área sirvan de 'andamio' (Vygotsky) para los demás, desarrollando a la vez competencias sociales y empatía."
    },
    {
        id: 496,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente convocado a la Etapa V (ERP) llega al Centro Sede con un bulto grande y su teléfono celular en la mano. Según las instrucciones oficiales del Instructivo del ERP, ¿qué debe suceder?",
        opciones: [
            "Puede entrar con el celular siempre que lo ponga en modo vibración y no lo use.",
            "Se le permite tener el bulto en el piso junto a su asiento.",
            "No se le permitirá el acceso con dispositivos electrónicos ni bultos grandes al aula, debiendo acatar las normas de seguridad del proceso.",
            "El aplicador debe guardarle el celular en su propio bolsillo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Instructivo para la Etapa V ERP 2026[cite: 215, 216]. Las normas de seguridad y organización establecen claramente que no se permite llevar bultos ni carteras grandes, ni se permite el acceso con dispositivos electrónicos para garantizar la integridad del proceso."
    },
    {
        id: 497,
        categoria: "Convivencia",
        pregunta: "En 4to grado, un estudiante trae a escondidas un juguete electrónico, lo enciende durante la clase y distrae a varios compañeros. ¿Cuál es la intervención adecuada desde la disciplina positiva?",
        opciones: [
            "Retener temporalmente el objeto sin humillar al estudiante, recordarle las normas del aula y devolvérselo al final del día o a sus padres, dialogando sobre el momento adecuado para jugar.",
            "Tirar el juguete a la basura para que aprenda que en la escuela solo se estudia.",
            "Bajarle 10 puntos en la calificación de Matemáticas por falta de atención.",
            "Dejarlo jugar si ya terminó de copiar la clase de la pizarra."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Manual de Convivencia (OD 22-2023). La disciplina positiva establece consecuencias lógicas y proporcionadas, no humillantes. Retener el objeto distractor hasta el final de la jornada es una consecuencia lógica; botarlo o bajar puntos académicos son medidas abusivas y prohibidas."
    },
    {
        id: 498,
        categoria: "Planificación Pedagógica",
        pregunta: "El equipo docente de primaria debe integrar el Eje Transversal 'Desarrollo Sostenible'. ¿Qué acción metodológica evidencia correctamente su aplicación transversal?",
        opciones: [
            "Impartir una charla sobre reciclaje en el patio durante la hora de recreo.",
            "Diseñar una Situación de Aprendizaje donde los estudiantes elaboren un plan de reducción de plásticos en la escuela, integrando cálculos matemáticos (estadísticas) y redacción de ensayos (lengua española).",
            "Pegar carteles verdes en todas las paredes del aula al inicio del año.",
            "Evaluar la definición de 'Sostenibilidad' en un examen de Ciencias Sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La transversalidad requiere que las áreas curriculares trabajen en conjunto para abordar una temática social mediante la movilización de competencias (ej. usando matemáticas y lengua para resolver un problema ambiental), y no como una actividad decorativa o paralela."
    },
    {
        id: 499,
        categoria: "Alfabetización",
        pregunta: "Antes de leer un cuento a sus estudiantes de 1er grado, la maestra les muestra la portada, les lee el título y les pregunta: '¿De qué creen que tratará esta historia?'. ¿Qué estrategia de comprensión lectora está aplicando?",
        opciones: [
            "Evaluación sumativa del vocabulario.",
            "Medición de la velocidad lectora.",
            "Estrategia de anticipación (hipótesis) para activar saberes previos e involucrar cognitivamente al niño con el texto.",
            "Identificación de la ortografía convencional de las palabras."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Fascículos de Alfabetización Inicial / Enfoque Comunicativo. La comprensión lectora consta de tres momentos: antes, durante y después de la lectura. Las preguntas de anticipación (antes) activan conocimientos previos y generan hipótesis, lo que predispone positivamente el cerebro para comprender el texto."
    },
    {
        id: 500,
        categoria: "Evaluación",
        pregunta: "Tras aplicar la evaluación diagnóstica en septiembre, una maestra de 5to grado descubre que sus alumnos ya dominan los conceptos que ella había planificado para la primera unidad. ¿Cuál es el propósito legal y pedagógico de este hallazgo?",
        opciones: [
            "Modificar inmediatamente su planificación, elevando el nivel de complejidad y avanzando hacia nuevos indicadores de logro, ajustándose al nivel real del grupo.",
            "Impartir la unidad tal como estaba planificada porque no se puede alterar el currículo.",
            "Asignarles a todos un 'Logrado' (L) automático en el registro y dejarlos jugar ese mes.",
            "Pedir a la dirección que promueva a los estudiantes a 6to grado por ser muy inteligentes."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica sirve para tomar decisiones pedagógicas. Si los estudiantes ya poseen el saber, enseñar lo mismo provoca desmotivación. El currículo es flexible, permitiendo al docente adaptar la intervención a la Zona de Desarrollo Próximo del grupo."
    },
    {
        id: 501,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 4to grado presenta una discapacidad visual severa (ceguera). Durante la clase de Ciencias, la maestra utilizará imágenes del sistema solar. ¿Qué ajuste razonable es obligatorio para garantizar el Diseño Universal para el Aprendizaje (DUA)?",
        opciones: [
            "Exigirle que se imagine el sistema solar basándose solo en lo que recuerda.",
            "Dejarlo exento de la clase de Ciencias de la Naturaleza.",
            "Asignarle un examen más fácil donde no tenga que identificar planetas.",
            "Proveerle de materiales táctiles (modelos 3D de los planetas) y ofrecer descripciones verbales ricas y detalladas durante la exposición visual."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes para estudiantes con ceguera deben compensar la falta de input visual mediante otros canales sensoriales (táctil, auditivo). El DUA promueve múltiples formas de representación, asegurando que el estudiante adquiera el mismo conocimiento a través de un medio accesible."
    },
    {
        id: 502,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Para una clase de debate en Ciencias Sociales, el docente organiza los pupitres del aula en forma de 'U' en lugar de las tradicionales filas indias. ¿Qué intención pedagógica justifica esta decisión de gestión del ambiente?",
        opciones: [
            "Vigilar mejor a los estudiantes para que no utilicen sus teléfonos celulares.",
            "Favorecer el contacto visual entre todos los estudiantes, promover la escucha activa y facilitar una participación equitativa en el diálogo horizontal.",
            "Cumplir con una norma de ornato que exige cambiar el aula todos los viernes.",
            "Ahorrar espacio en el aula para poder guardar materiales de limpieza."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategias de Gestión de Aula (Adecuación Curricular). La organización espacial debe ser coherente con la estrategia didáctica. Un debate en filas indias dificulta la interacción, ya que los niños se hablan a las espaldas. La disposición en 'U' o círculo fomenta la comunicación dialógica."
    },
    {
        id: 503,
        categoria: "Comportamientos Profesionales",
        pregunta: "Durante la realización del Ejercicio de Rendimiento Profesional (ERP), un docente presenta una dificultad técnica y nota que su plataforma se ha congelado. Según las instrucciones oficiales, ¿qué debe hacer?",
        opciones: [
            "Reiniciar la computadora por su cuenta y volver a entrar.",
            "Abandonar el centro sede porque la prueba ya no será válida.",
            "Notificar la incidencia oportunamente al personal aplicador en el centro sede para que quede registrada y se brinde la asistencia requerida.",
            "Sacar su celular y llamar al Ministerio de Educación."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Instructivo para la Etapa V ERP 2026[cite: 275]. El instructivo señala claramente que ante una dificultad técnica, se debe notificar oportunamente al personal responsable (centro de ayuda al docente/aplicador) para registrar la incidencia el mismo día."
    },
    {
        id: 504,
        categoria: "Planificación Pedagógica",
        pregunta: "Al planificar su clase, un docente inexperto confunde los términos 'Estrategia' y 'Actividad'. ¿Cuál de las siguientes afirmaciones establece la diferencia técnica correcta según el currículo dominicano?",
        opciones: [
            "Son sinónimos y pueden usarse indistintamente en la malla curricular.",
            "La actividad es lo que hace el maestro en la pizarra, y la estrategia es lo que hace el estudiante en su cuaderno.",
            "La estrategia es el recurso didáctico, y la actividad es la evaluación final.",
            "La estrategia es el conjunto de acciones pedagógicas intencionadas (ej. Indagación dialógica), y la actividad es la acción concreta y medible que ejecuta el estudiante (ej. Entrevistar a un experto)."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Adecuación Curricular 2023. La estrategia es el 'cómo' metodológico general diseñado por el docente. Las actividades son las tareas concretas y operativas que realizan los estudiantes en un tiempo determinado para materializar esa estrategia."
    },
    {
        id: 505,
        categoria: "Alfabetización",
        pregunta: "En 3er grado, un estudiante comprende perfectamente lo que lee en silencio (lectura silenciosa), pero al pedirle que lea en voz alta, tartamudea, suda y se equivoca. ¿Cuál es la decisión docente más asertiva?",
        opciones: [
            "Priorizar la comprobación de la comprensión silenciosa, y trabajar la fluidez oral gradualmente mediante modelado y lecturas dramatizadas sin forzarlo al estrés de leer frente a todo el grupo.",
            "Evaluarlo con 'Iniciado' (I) porque la lectura en voz alta es obligatoria en 3er grado.",
            "Obligarlo a leer el párrafo más largo del texto frente a la clase hasta que pierda el miedo.",
            "Mandarlo a 1er grado durante las horas de Lengua Española para que repase."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Enfoque Comunicativo y Psicopedagogía. La lectura en voz alta bajo presión eleva el 'filtro afectivo', bloqueando al estudiante (ansiedad). Si comprende en silencio, el objetivo central de la lectura se cumple. La prosodia se trabaja con andamiaje y confianza, no con exposición forzada."
    },
    {
        id: 506,
        categoria: "Ética",
        pregunta: "En tiempos de campaña electoral, un candidato político local, que es familiar de un estudiante, le pide al docente repartir volantes de su candidatura a los niños al finalizar la clase. ¿Qué procede ética y legalmente?",
        opciones: [
            "Repartirlos discretamente a la hora de la salida para no ofender al familiar.",
            "Aceptar solo si el candidato pertenece al partido de gobierno actual.",
            "Negarse rotundamente y de forma cortés, explicando que la escuela es un recinto apartidista y el proselitismo político estudiantil está estrictamente prohibido por la ley educativa.",
            "Pedir permiso a los padres a través del grupo de WhatsApp antes de repartirlos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley General de Educación 66-97 y Estatuto Docente. Los recintos escolares son espacios neutrales destinados a la educación. El proselitismo político y religioso está prohibido para salvaguardar la integridad institucional y los derechos de los menores a un entorno libre de coerción ideológica."
    },
    {
        id: 507,
        categoria: "Evaluación",
        pregunta: "Según el Sistema de Evaluación de los Aprendizajes (Ordenanza 04-2023), ¿cuál es la función central del 'Indicador de Logro'?",
        opciones: [
            "Indicar el tema específico que se va a tratar en la semana.",
            "Servir como pista, señal o rasgo observable que permite evidenciar en qué medida el estudiante ha desarrollado una competencia específica.",
            "Definir la calificación numérica exacta que el estudiante obtendrá al final del trimestre.",
            "Establecer la sanción que recibirá el estudiante si no hace la tarea."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las competencias son constructos amplios (ej. Resolución de problemas). Para saber si se ha logrado, el docente necesita evidencias medibles: los indicadores de logro son esos descriptores concretos que 'indican' si la competencia se está movilizando o no."
    },
    {
        id: 508,
        categoria: "Inclusión",
        pregunta: "Un estudiante de 2do grado diagnosticado con TDAH presenta hiperactividad motora; le es imposible permanecer sentado durante los 45 minutos de la clase. ¿Qué ajuste en la gestión de aula favorece su inclusión sin interrumpir al resto?",
        opciones: [
            "Solicitar a la familia que lo mantenga medicado o que no lo envíen a la escuela.",
            "Castigarlo dejándolo de pie en la esquina del aula.",
            "Colocarle una mesa especial lejos de todos para que no moleste.",
            "Incorporar pausas activas para todo el grupo y asignarle tareas motoras con propósito (ej. recoger cuadernos, borrar la pizarra) que canalicen su necesidad de movimiento."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 05-2024. El TDAH requiere adaptaciones conductuales preventivas. Canalizar la hiperactividad mediante roles lícitos en el aula (repartir materiales) valida su necesidad biológica de movimiento sin penalizarlo y evita que la conducta se convierta en disrupción."
    },
    {
        id: 509,
        categoria: "Convivencia",
        pregunta: "Se descubre que un alumno de 6to grado tomó sin permiso el dinero del estuche de un compañero. ¿Cuál es el abordaje correcto según el Manual de Convivencia?",
        opciones: [
            "Abordar el hecho en privado, indagar los motivos sin etiquetar al niño de 'ladrón', promover la devolución del dinero y establecer un compromiso formativo (práctica restaurativa), notificando a Orientación.",
            "Revisar públicamente todas las mochilas del curso y avergonzar al culpable para que sirva de escarmiento.",
            "Expulsarlo del centro educativo inmediatamente por cometer un acto delictivo.",
            "Suspenderle el recreo por un mes consecutivo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Manual de Convivencia Escolar (OD 22-2023). La falta no se ignora, pero el abordaje debe ser formativo. Etiquetar o humillar públicamente es violencia psicológica. La restitución del daño (devolver lo tomado) y el diálogo privado preservan la dignidad y logran un verdadero cambio conductual."
    },
    {
        id: 510,
        categoria: "Gestión del Aprendizaje",
        pregunta: "La maestra de 5to grado realiza preguntas abiertas a la clase. Cuando nadie responde en los primeros tres segundos, selecciona siempre a los dos estudiantes más rápidos para que contesten. ¿Qué impacto negativo tiene esta práctica en el aprendizaje grupal?",
        opciones: [
            "Ninguno, ya que mantiene el ritmo acelerado y eficiente de la clase.",
            "Que los estudiantes rápidos se aburrirán si la maestra no les pregunta.",
            "Impide que el resto del grupo procese la información (falta de 'tiempo de espera' o wait time), generando pasividad y exclusión cognitiva en los estudiantes de ritmo de aprendizaje más lento.",
            "Que se gastan muy rápido las preguntas de la planificación."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estrategias Constructivistas. El 'tiempo de espera' (3 a 5 segundos) es crucial. Si el docente siempre recurre a los más rápidos, los demás aprenden que no necesitan esforzarse cognitivamente porque alguien más lo hará por ellos, anulando la participación equitativa."
    },

    {
        id: 511,
        categoria: "Evaluación",
        pregunta: "En una Unidad de Aprendizaje de 5to grado, el docente planifica un proyecto de investigación evaluado mediante una rúbrica. Un estudiante realiza un excelente trabajo de investigación escrita y de recolección de datos, pero durante la presentación oral frente al curso sufre un bloqueo por ansiedad escénica y no logra emitir palabra. El indicador de logro específico evalúa la 'comunicación oral de ideas científicas'. ¿Cuál es la decisión evaluativa correcta y formativa según la Ordenanza 04-2023?",
        opciones: [
            "Calificar con 'Logrado' (L), promediando la excelencia de su investigación escrita con su desempeño oral, ya que el esfuerzo demostrado en la fase previa compensa el bloqueo escénico.",
            "Valorar el indicador con 'Iniciado' (I) y obligar al estudiante a repetir la exposición en la siguiente clase frente a todos para que confronte su miedo.",
            "Valorar el indicador de comunicación oral como 'En Proceso' (EP), reconocer y registrar los logros del trabajo escrito, y diseñar una estrategia escalonada (ej. exponer solo ante el docente o mediante un video pregrabado) para superar la barrera comunicativa.",
            "Eximir al estudiante de la presentación oral de forma definitiva y calificar la competencia comunicativa utilizando exclusivamente el reporte escrito."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023 y Diseño Universal para el Aprendizaje. La evaluación es criterial. Si el indicador evalúa la comunicación oral, no se puede marcar como 'Logrado' basándose en un texto escrito, pero tampoco se debe penalizar punitivamente un bloqueo emocional. El nivel 'En Proceso' refleja la realidad y obliga al docente a diversificar los medios de expresión (DUA) para que el estudiante desarrolle la competencia gradualmente."
    },
    {
        id: 512,
        categoria: "Inclusión",
        pregunta: "Una maestra de 2do grado tiene un aula superpoblada (35 estudiantes). Entre ellos, hay un niño con un diagnóstico severo de TDAH (Trastorno por Déficit de Atención e Hiperactividad) que constantemente se levanta, deambula y toma los útiles de sus compañeros. Los padres se niegan a medicarlo. Ante la presión del grupo, ¿cuál es la medida de gestión pedagógica idónea según la normativa de inclusión?",
        opciones: [
            "Ubicar el pupitre del estudiante aislado junto al escritorio de la maestra para mantenerlo bajo estricta vigilancia y evitar que moleste al resto de sus compañeros.",
            "Implementar estrategias DUA para toda el aula que incluyan pausas activas regulares, y asignarle al estudiante roles específicos que requieran movimiento lícito (ej. repartir materiales, borrar la pizarra) para canalizar su necesidad motora.",
            "Solicitar a la Dirección la suspensión del estudiante los días que se muestre muy inquieto, argumentando que vulnera el derecho al aprendizaje de los otros 34 niños.",
            "Exigir que uno de los padres permanezca dentro del aula durante la jornada escolar para que asuma la responsabilidad de controlar la disciplina de su hijo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 (Educación Inclusiva). Condicionar la educación a la medicación o a la presencia de los padres es ilegal. Aislarlo (A) es excluyente. La inclusión exige que el docente adapte el entorno y la metodología. Canalizar la energía del estudiante mediante responsabilidades motoras integradas a la rutina beneficia su autorregulación sin segregarlo."
    },
    {
        id: 513,
        categoria: "Planificación",
        pregunta: "El equipo docente de 6to grado debe diseñar una 'Situación de Aprendizaje' centrada en la Competencia Ambiental y de la Salud. Desean abordar la problemática de las olas de calor extremo. ¿Cuál de los siguientes diseños metodológicos cumple rigurosamente con la estructura de la Adecuación Curricular 2023?",
        opciones: [
            "Elaborar un listado de los conceptos sobre el calentamiento global, pedir a los estudiantes que los copien del libro, los memoricen y presenten una prueba escrita de selección múltiple al final del mes.",
            "Asignar a cada estudiante la lectura de un capítulo diferente sobre el clima mundial para que lo expongan frente a la clase utilizando papelógrafos.",
            "Plantear el aumento de temperatura en las aulas del centro como un problema real; organizar a los estudiantes en equipos para medir la temperatura, investigar causas y diseñar una propuesta de arborización o ventilación pasiva, presentando un informe a la dirección.",
            "Proyectar un documental exhaustivo sobre el cambio climático durante una semana completa y solicitar a los niños que hagan un resumen en sus cuadernos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Adecuación Curricular 2023. Una Situación de Aprendizaje válida exige un contexto problematizado (el calor en las aulas), un rol activo del estudiante (investigador/proponente) y un producto final o punto de llegada (informe/propuesta de arborización) que movilice competencias, alejándose del modelo pasivo, receptivo y puramente memorístico."
    },
    {
        id: 514,
        categoria: "Alfabetización",
        pregunta: "Durante una supervisión de rutina en 1er grado, el coordinador pedagógico revisa los cuadernos y nota que un niño, al intentar escribir 'CABALLO', ha escrito sistemáticamente 'A A O'. El coordinador reprende a la docente indicando que el niño 'está omitiendo consonantes y tiene un grave atraso'. Como docente fundamentado en la Ordenanza 01-2023, ¿cuál es su argumento técnico?",
        opciones: [
            "Aceptar la observación del coordinador y proceder a imponer planas de las consonantes 'C', 'B' y 'LL' para corregir el déficit motor.",
            "Explicar que el estudiante se encuentra en la etapa presilábica inicial y que requiere intervención del departamento de psicología para descartar un problema neurológico.",
            "Argumentar que el niño se encuentra en el nivel silábico con valor sonoro convencional (usando vocales), lo cual representa un avance cognitivo significativo al establecer correspondencia entre la pauta sonora y la escritura, siendo una fase natural y necesaria.",
            "Señalar que la escritura no es importante en esa etapa del año y que el enfoque principal debe ser exclusivamente la fluidez de la lectura oral."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Fascículos de Alfabetización Inicial del MINERD (Enfoque Psicogenético). La escritura 'A A O' para 'ca-ba-llo' demuestra que el niño logró el salto conceptual de aislar las sílabas sonoras y asignarles una grafía pertinente (valor sonoro). Entender esto evita patologizar o retroceder a métodos mecanicistas ineficaces."
    },
    {
        id: 515,
        categoria: "Ética",
        pregunta: "Durante el recreo, un estudiante de 4to grado confiesa aterrado a su maestra que un compañero de su mismo curso trajo una navaja escondida en su mochila con la intención de 'asustar' a otros niños a la salida. ¿Cuál es el protocolo de actuación inmediata, legal y ética que debe seguir la maestra?",
        opciones: [
            "Entrar inmediatamente al aula, abrir la mochila del estudiante sospechoso frente a todo el curso para incautar el arma y exponerlo como una medida ejemplarizante.",
            "Ignorar la información hasta que ocurra un incidente real, ya que actuar basándose en rumores puede acarrear demandas legales por difamación de parte de los padres.",
            "Informar de urgencia a la Dirección o Coordinación para aislar de forma discreta al estudiante sospechoso, asegurar el área, y que el equipo de gestión y/o Policía Escolar realice la revisión garantizando el debido proceso y la seguridad de todos.",
            "Retener a todos los estudiantes dentro del aula y exigirles que nadie salga hasta que el culpable entregue el arma voluntariamente."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03, Manual de Convivencia (OD 22-2023) y Protocolos de Seguridad. El cacheo de pertenencias de un menor es sumamente delicado y no debe hacerse en público por el docente de aula. Debe escalarse a la autoridad del centro (Dirección/Policía Escolar) para intervenir con tacto, protegiendo la integridad física de la comunidad sin vulnerar el debido proceso del menor implicado."
    },
    {
        id: 516,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una sesión de Matemáticas de 3er grado sobre la multiplicación, la docente explica el algoritmo tradicional en la pizarra (factores y productos). Al asignar problemas de la vida real, el 80% de los estudiantes aplica operaciones aleatorias y se frustra. ¿Qué error metodológico cometió la docente en la secuencia didáctica?",
        opciones: [
            "No haber proporcionado una tabla de multiplicar impresa para que los estudiantes la usen como referencia durante los problemas.",
            "Haber omitido la fase concreta y pictórica del aprendizaje (agrupación de objetos, sumas iteradas, arreglos rectangulares), pasando directamente de la abstracción del algoritmo a la resolución de problemas.",
            "Asignar problemas de la vida real demasiado pronto; debió limitarse a operaciones aisladas hasta que memoricen el proceso.",
            "Haber explicado la multiplicación en lugar de enseñar primero la división, ya que son operaciones inversas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Enfoque Didáctico de la Matemática (Adecuación Curricular 2023). El aprendizaje matemático en primaria debe seguir el enfoque CPA (Concreto, Pictórico, Abstracto). Introducir un algoritmo sin que el niño haya manipulado y comprendido el sentido de la operación (agrupar) genera mecanicismo sin comprensión lógica, lo que impide la resolución de problemas."
    },
    {
        id: 517,
        categoria: "Comportamientos Profesionales",
        pregunta: "Tras someterse al Ejercicio de Rendimiento Profesional (ERP), un docente recibe su informe de resultados, el cual muestra un puntaje deficiente en la dimensión de 'Planificación y Gestión del Aprendizaje'. El docente considera que las situaciones planteadas en la prueba no reflejan su realidad diaria. ¿Cuál es la actitud y proceder profesional idóneo ante esta situación?",
        opciones: [
            "Hacer un descargo público en redes sociales denunciando que el sistema de evaluación del MINERD está sesgado y diseñado para perjudicar a los maestros.",
            "Negarse a firmar el acuse de recibo de los resultados y amenazar con paralizar la docencia si no le cambian la calificación.",
            "Solicitar formalmente una revisión de los resultados a través de los canales institucionales, mientras asume una postura reflexiva para identificar áreas de mejora y participa en las formaciones de actualización que se deriven del proceso.",
            "Ignorar los resultados del informe ya que, al ser un docente titular con nombramiento fijo, estas evaluaciones no afectan su permanencia en el sistema."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Instructivo Etapa V ERP y Reglamento del Estatuto del Docente. El profesionalismo exige utilizar las vías oficiales para las reclamaciones (debido proceso) sin caer en la insubordinación. Además, la evaluación de desempeño tiene un propósito formativo para el sistema, requiriendo que el docente asuma los planes de mejora derivados de sus resultados."
    },
    {
        id: 518,
        categoria: "Evaluación",
        pregunta: "Al finalizar el año escolar, un grupo de padres de familia del 1er ciclo solicita a la dirección del centro que se apliquen 'exámenes completivos o extraordinarios' para que sus hijos que obtuvieron varias 'I' (Iniciado) puedan ser promovidos de grado. Como experto en la Ordenanza 04-2023, ¿cuál es la normativa que debe aplicarse en este caso?",
        opciones: [
            "Acceder a la petición y preparar un examen de 100 puntos sobre los contenidos básicos para brindar una oportunidad de recuperación.",
            "Informar a las familias que en el Nivel Primario la evaluación es procesual y continua, por lo que la recuperación no se realiza mediante un examen final extraordinario, sino a través de un Plan de Apoyo a los Aprendizajes que debió implementarse y evidenciarse a lo largo de todo el año.",
            "Aprobar a los estudiantes condicionalmente bajo el compromiso de que los padres paguen tutorías durante las vacaciones de verano.",
            "Permitir que los niños tomen los exámenes completivos junto con los estudiantes del Nivel Secundario."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. En el Nivel Primario no existen los 'exámenes completivos' o 'extraordinarios' al estilo del Nivel Secundario. La recuperación pedagógica es inmanente al proceso formativo (se hace día a día y periodo a periodo). Si al final del año las competencias no se han logrado, las decisiones de promoción o retención se toman en base al nivel de dominio evidenciado a lo largo del proceso."
    },
    {
        id: 519,
        categoria: "Inclusión",
        pregunta: "Un docente de 5to grado tiene a un estudiante con Discapacidad Intelectual Leve. El curso está analizando críticamente una novela histórica compleja. Para garantizar el principio de equidad y los ajustes razonables, ¿qué adaptación curricular de acceso debe proveer el docente para este estudiante?",
        opciones: [
            "Entregarle un cuento infantil de 1er grado con ilustraciones simples para que se mantenga ocupado durante la lectura de la novela.",
            "Eximirlo del análisis de la novela y evaluarlo exclusivamente en tareas manuales y de recorte.",
            "Obligarlo a leer la misma novela que sus compañeros, pero dándole tres semanas más de plazo para entregar el análisis escrito.",
            "Proporcionar una versión adaptada del mismo texto (formato de Lectura Fácil, uso de pictogramas o macrotipo) o permitirle escuchar un audiolibro, asegurando que acceda a la misma trama para participar en el debate oral."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 05-2024 (Ajustes Razonables y DUA). La inclusión no significa dar tareas infantiles irrelevantes a un preadolescente (A), ni excluirlo del desafío cognitivo (B). El ajuste correcto implica modificar el *medio de representación* de la información (Lectura Fácil o audio) para que el estudiante acceda al mismo contenido cultural que sus pares y participe en la socialización."
    },
    {
        id: 520,
        categoria: "Alfabetización",
        pregunta: "Una docente de 2do grado rechaza utilizar las cartillas estandarizadas de silabeo ('ma-me-mi') y en su lugar desarrolla la alfabetización mediante recetas de cocina reales, afiches de prevención del dengue y cuentos de la biblioteca. Un colega le advierte que 'sin cartilla los niños se van a confundir'. ¿Cuál es el argumento técnico de la docente basado en la normativa dominicana?",
        opciones: [
            "La docente argumenta que usar textos reales garantiza que los niños entiendan la función social y comunicativa del lenguaje escrito, fomentando estrategias de lectura integral y comprensión del mensaje, mientras que el silabeo aislado fomenta el mecanicismo sin sentido.",
            "Argumenta que las cartillas son muy costosas y los padres de su sector no pueden comprarlas.",
            "Argumenta que la enseñanza por sílabas está prohibida por la UNESCO y es ilegal en el país.",
            "Indica que ella combinará la cartilla de silabeo con las recetas de cocina solo los días viernes para equilibrar ambos métodos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 01-2023 y Fascículos de Alfabetización. El currículo dominicano asume el Enfoque Textual, Funcional y Comunicativo. Leer no es descifrar sonidos mecánicamente ('mi mamá me mima'); es construir significado a partir de textos que tienen un uso real en la sociedad (recetas, noticias, cuentos). El uso de textos auténticos es la estrategia primaria recomendada."
    },
    {
        id: 521,
        categoria: "Planificación",
        pregunta: "Al abordar la unidad sobre 'El Sistema Digestivo' en Ciencias de la Naturaleza en 6to grado, la maestra integra el Eje Transversal de 'Salud y Bienestar'. Sin embargo, su planificación solo incluye una nota al pie que dice: 'Recuerden a los niños masticar bien la comida'. ¿Por qué esta integración es metodológicamente deficiente?",
        opciones: [
            "Porque el Eje de Salud y Bienestar corresponde únicamente al profesor de Educación Física.",
            "Porque una nota verbal no moviliza competencias. La integración transversal exige diseñar actividades donde los alumnos investiguen, analicen críticamente (ej. el valor nutricional de la merienda escolar) y tomen decisiones sustentadas relacionadas con el contenido científico.",
            "Porque debió incluir al menos tres ejes transversales simultáneamente para que la planificación sea válida.",
            "Porque no se le solicitó a los padres que enviaran meriendas más saludables."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. La transversalidad es una perspectiva que debe permear la práctica educativa y movilizar competencias. Un simple 'consejo' verbal no constituye una articulación curricular. El eje transversal debe vivirse a través de la resolución de problemas y el análisis crítico dentro de la Situación de Aprendizaje."
    },
    {
        id: 522,
        categoria: "Convivencia",
        pregunta: "Durante una discusión en 6to grado por el turno en una computadora, dos estudiantes intercambian insultos fuertes y están a punto de agredirse físicamente. El maestro interviene y logra separarlos. Una vez calmados, ¿qué estrategia del enfoque restaurativo debe aplicar?",
        opciones: [
            "Enviar inmediatamente a ambos estudiantes a sus casas por 3 días para que reflexionen de manera autónoma.",
            "Llevar a los estudiantes frente a la bandera del centro educativo y hacerlos pedir perdón públicamente para que sientan vergüenza.",
            "Facilitar un espacio de mediación seguro donde ambos escuchen cómo sus palabras afectaron al otro, asuman su responsabilidad y co-construyan un acuerdo de respeto mutuo y reparación del vínculo.",
            "Asignarles un trabajo de investigación escrito de 10 páginas sobre la paz mundial como medida disciplinaria."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual de Convivencia Escolar (OD 22-2023). Las prácticas restaurativas, como la mediación y los círculos de diálogo, buscan que el estudiante comprenda el impacto de sus acciones, asuma la responsabilidad y repare el daño en el tejido social. La expulsión o la humillación pública (prácticas punitivas tradicionales) están contraindicadas."
    },
    {
        id: 523,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Una maestra de 4to grado organiza un Proyecto Participativo. Para la fase de investigación, agrupa a los estudiantes, pero al poco tiempo nota que los grupos están fragmentando el trabajo ('tú buscas la página 1, yo la 2, y luego lo pegamos'). No hay discusión ni síntesis. ¿Qué decisión de gestión debe tomar la maestra para fomentar el verdadero aprendizaje colaborativo?",
        opciones: [
            "Dejar que continúen así, ya que la autonomía implica que los estudiantes decidan su propio método de trabajo.",
            "Cancelar el trabajo en grupo y ordenar que cada niño haga el proyecto completo de manera individual en su cuaderno.",
            "Intervenir para reestructurar la tarea exigiendo 'interdependencia positiva', por ejemplo, solicitando que el producto final sea un mapa mental consensuado que no pueda elaborarse sin el análisis conjunto de todas las partes investigadas.",
            "Bajar la calificación grupal al final del proyecto por no haber sabido trabajar en equipo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estrategias Pedagógicas (Adecuación Curricular 2023). El trabajo cooperativo efectivo requiere de la interdependencia positiva, la responsabilidad individual y grupal, y la interacción promotora. Si la tarea permite la simple fragmentación (el 'corta y pega'), el diseño didáctico ha fallado. El docente debe estructurar la exigencia para obligar a la síntesis conjunta."
    },
    {
        id: 524,
        categoria: "Ética",
        pregunta: "Al iniciar la jornada, un maestro de 1er grado nota que un estudiante llega con un fuerte dolor abdominal. Al llamar a los padres, estos indican que están trabajando y no pueden ir a buscarlo. El niño comienza a vomitar y muestra signos de deshidratación. ¿Cuál es el proceder ético, legal y humano del docente y el centro?",
        opciones: [
            "Acomodar al niño en una colchoneta al fondo del aula y esperar a que termine la jornada para entregarlo a sus padres.",
            "Administrar un medicamento para el dolor que la maestra tiene en su cartera personal para aliviar su sufrimiento.",
            "Enviar al niño solo a su casa si vive cerca, ya que los padres están avisados.",
            "El centro educativo, en su rol de garante, debe activar el protocolo de emergencia, contactar al 911 o trasladar al menor al centro de salud más cercano acompañado de personal directivo o de orientación, documentando el hecho e informando a la familia."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ley 136-03 (Derecho a la Salud y Rol Garante de la Escuela) e Instructivos del MINERD. Ante una emergencia médica evidente y la omisión de la familia (por negligencia o fuerza mayor), la institución asume la guarda y custodia provisional para preservar la vida e integridad del menor. Administrar medicamentos sin receta o abandonar al menor son negligencias graves."
    },
    {
        id: 525,
        categoria: "Evaluación",
        pregunta: "Un docente de 5to grado evalúa los ensayos escritos de sus alumnos. En lugar de limitarse a colocar una nota y marcar los errores de ortografía con un bolígrafo rojo, devuelve los textos subrayando con marcador amarillo ciertas frases y agregando la nota: 'Revisa la regla de acentuación de las palabras agudas aquí'. ¿Qué práctica evaluativa de alto impacto está aplicando?",
        opciones: [
            "El principio de evaluación diagnóstica estandarizada.",
            "La retroalimentación formativa y proactiva (feedforward), que transfiere al estudiante la responsabilidad de analizar, reflexionar y corregir su propio error, promoviendo la metacognición.",
            "Una técnica para evitar confrontaciones con los padres por las bajas calificaciones.",
            "La delegación de la responsabilidad de corrección, evadiendo su deber docente de enseñar ortografía."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La retroalimentación es el elemento más potente de la evaluación formativa. Marcar el error y dar la respuesta hecha fomenta un rol pasivo. Ofrecer 'pistas' u 'orientaciones' obliga al estudiante a movilizar procesos cognitivos para auto-corregirse (agencia del aprendizaje)."
    },
    {
        id: 526,
        categoria: "Inclusión",
        pregunta: "Durante una reunión de grado, un maestro se queja de un estudiante que tiene 'Altas Capacidades'. El maestro afirma: 'Me tiene harto, termina todo en 5 minutos y luego sabotea la clase. Yo no soy maestro de educación especial para atender superdotados'. ¿Qué principio normativo está ignorando este docente?",
        opciones: [
            "Que los estudiantes superdotados no deben asistir a la escuela regular, sino a centros de talentos exclusivos.",
            "Que la Ordenanza 05-2024 establece que las Altas Capacidades son Necesidades Específicas de Apoyo Educativo (NEAE) y requieren obligatoriamente de adaptaciones como el enriquecimiento curricular para responder a su ritmo y profundidad cognitiva.",
            "Que el estudiante debe ser promovido automáticamente hasta la universidad.",
            "Que su deber es asignar castigos más severos para controlar el sabotaje a la clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 (Inclusión y Atención a la Diversidad). La inclusión no solo abarca las discapacidades, sino también la superdotación. Un niño con altas capacidades no atendido pedagógicamente se frustrará y mostrará conductas disruptivas. Es obligación del docente regular proveer enriquecimiento (investigaciones autónomas, mayor abstracción) dentro del aula."
    },
    {
        id: 527,
        categoria: "Comportamientos Profesionales",
        pregunta: "Al recibir los materiales didácticos enviados por el distrito educativo para un simulacro de Pruebas Nacionales, un docente especializado en el área detecta que una de las respuestas marcadas como 'correctas' en la plantilla del maestro contiene un error factual grave. ¿Cuál es el proceder profesional adecuado?",
        opciones: [
            "Enseñar a los estudiantes el dato erróneo tal cual está en la plantilla para asegurar que obtengan los puntos en la prueba, priorizando la calificación sobre la verdad científica.",
            "Hacer una denuncia pública en las redes sociales sobre la incompetencia de los técnicos del distrito educativo.",
            "Corregir el error en el aula con sus estudiantes pero guardar silencio frente a las autoridades para evitar represalias.",
            "Canalizar la observación técnica a través del Coordinador Pedagógico o la Dirección del centro, sustentada con evidencias, para que se solicite formalmente la revisión y fe de erratas al distrito, garantizando el aprendizaje correcto de todos los estudiantes."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Estándares Profesionales (Compromiso Ético e Institucional). El docente ético no propaga el error (A), ni recurre al escándalo destructivo (B), ni actúa desde el aislamiento (C). Utiliza los canales institucionales para lograr una mejora sistémica que beneficie a la comunidad educativa en general."
    },
    {
        id: 528,
        categoria: "Alfabetización",
        pregunta: "Para desarrollar la fluidez lectora en el 1er ciclo, una docente utiliza frecuentemente la estrategia de 'Teatro de Lectores' y la 'Lectura en Eco'. Un supervisor le sugiere que es mejor hacer que cada niño lea un párrafo nuevo a primera vista frente a todos (lectura en cadena). ¿Por qué la docente debe defender su estrategia inicial basada en la normativa?",
        opciones: [
            "Porque la lectura en cadena fomenta la indisciplina ya que los niños se ríen de los que leen mal.",
            "Porque la lectura en voz alta a primera vista ('en frío') genera alta ansiedad y estrés, bloqueando la comprensión. Las estrategias de modelaje (eco/teatro) brindan andamiaje, práctica repetida con propósito y seguridad emocional, factores críticos para adquirir verdadera fluidez.",
            "Porque a la docente no le gusta escuchar a los niños leer de manera individual.",
            "Porque la lectura no debe evaluarse en el 1er ciclo de primaria, solo la escritura."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Enfoque Textual Funcional y Psicopedagogía del Lenguaje. La fluidez no se alcanza por exposición estresante (leer en cadena frente a todos sin ensayo). Se alcanza mediante la práctica oral guiada, el modelaje prosódico del docente y la repetición lúdica y segura que ofrecen estrategias como el Teatro de Lectores."
    },
    {
        id: 529,
        categoria: "Planificación",
        pregunta: "Una docente en su planificación mensual confunde las Competencias Específicas con los Indicadores de Logro. ¿Cuál de las siguientes afirmaciones establece la diferencia conceptual y normativa correcta entre ambos elementos del currículo dominicano?",
        opciones: [
            "Las Competencias Específicas son las capacidades que el estudiante desarrollará vinculadas a un área particular (ej. 'Comprende textos narrativos'), mientras que los Indicadores de Logro son las pistas o evidencias concretas y medibles que demuestran ese desarrollo (ej. 'Reconstruye la secuencia de acciones del cuento').",
            "Las Competencias Específicas son exclusivas del nivel secundario, y los Indicadores de Logro son para primaria.",
            "Son exactamente lo mismo y pueden intercambiarse en el formato de planificación sin afectar el diseño didáctico.",
            "Las Competencias Específicas son las actividades que hace el maestro, y los Indicadores de Logro son las calificaciones que pone en el registro."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Bases de la Revisión y Actualización Curricular / Adecuación 2023. Esta es una distinción técnica crítica. La competencia es la capacidad global e integral. El indicador es el criterio de evaluación: la conducta observable, medible y específica que el docente utiliza para verificar que dicha capacidad realmente se movilizó en una situación dada."
    },
    {
        id: 530,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una actividad matemática que involucra un juego de competencia por equipos en 2do grado, el nivel de ruido, entusiasmo y movilidad de los estudiantes aumenta considerablemente. El Director pasa por el pasillo y observa con desaprobación el aparente 'desorden'. ¿Cómo debe fundamentar la docente su gestión de aula?",
        opciones: [
            "Interrumpir el juego de inmediato, ordenar a los niños que se sienten en silencio y pedir disculpas al director por el descontrol.",
            "Justificar la actividad argumentando que el ruido es sinónimo de un aprendizaje activo (cognitivo y emocional) indispensable en la etapa concreta, demostrando que existe una rutina de autorregulación (ej. un aplauso para volver a la calma) y que la actividad cumple un objetivo curricular específico.",
            "Cerrar la puerta del aula y las persianas para que nadie vea ni escuche lo que sucede adentro.",
            "Enviarle una nota a los padres informando que los niños se portaron mal y por eso no se volverán a hacer juegos en el aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Gestión del Ambiente (Adecuación Curricular) y Desarrollo Psicoevolutivo. El orden tradicional absolutista (silencio y niños estáticos) choca con el constructivismo. El aprendizaje lúdico genera un 'ruido productivo'. El docente profesional defiende su estrategia demostrando la intencionalidad pedagógica y su capacidad para retornar al grupo a la calma mediante rutinas de transición efectivas, sin anular la actividad."
    },

    {
        id: 531,
        categoria: "Evaluación",
        pregunta: "Una maestra de 3er grado se encuentra evaluando la producción de textos instructivos. El indicador de logro exige que el estudiante 'produzca textos instructivos sencillos respetando la estructura (título, materiales, procedimiento)'. Un estudiante entrega una receta donde los pasos están desordenados lógicamente y faltan algunos ingredientes esenciales, pero el texto no tiene ni una sola falta ortográfica y la caligrafía es excelente. ¿Cómo debe asentar la valoración de este indicador en el registro y cuál es la justificación técnica?",
        opciones: [
            "'Logrado' (L), ya que la ortografía perfecta y la caligrafía son las competencias comunicativas más difíciles de adquirir en el primer ciclo y compensan el desorden del texto.",
            "'En Proceso' (EP), porque aunque el estudiante domina aspectos formales de la escritura (ortografía/caligrafía), el indicador evalúa específicamente el dominio de la *estructura textual y lógica* del instructivo, la cual aún no se ha consolidado y requiere mediación para organizar el pensamiento secuencial.",
            "'Iniciado' (I), y obligar al estudiante a repetir la tarea desde cero porque un texto desordenado no tiene ningún valor pedagógico.",
            "'Logrado' (L), bajo la condición de que en la próxima tarea el estudiante ordene mejor sus ideas, para no desmotivarlo por un simple error de formato."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 (Evaluación por Competencias). La evaluación debe ser fiel al indicador. Si el indicador mide 'estructura del texto instructivo', la ortografía (aunque positiva) es un elemento secundario en ese ítem específico. El 'EP' refleja que hay avances (escribe bien las palabras) pero no ha logrado el propósito comunicativo central (secuencia lógica), requiriendo andamiaje docente."
    },
    {
        id: 532,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de Ciencias Sociales de 6to grado, el docente está impartiendo el tema de 'La migración'. Al hacer una pregunta al grupo, un estudiante interviene utilizando estereotipos fuertemente despectivos hacia una nacionalidad específica, lo que genera risas en una parte del aula y el silencio incómodo de un estudiante extranjero. Ante esta disrupción que afecta el clima de aula, ¿cuál es la intervención pedagógica inmediata y restaurativa que debe aplicar el docente?",
        opciones: [
            "Detener la clase expositiva de inmediato, validar la incomodidad generada, y abrir un espacio de diálogo estructurado (círculo) sobre el impacto de los estereotipos en la dignidad humana, conectando el incidente con la Competencia Ética y Ciudadana y los acuerdos de convivencia.",
            "Ignorar el comentario para no darle protagonismo al estudiante disruptivo y continuar rápidamente con el tema planificado para no perder el tiempo de la clase.",
            "Expulsar inmediatamente al estudiante que hizo el comentario del aula y enviarlo a la dirección con un reporte por xenofobia grave, sin darle oportunidad de réplica.",
            "Reprender al curso entero por reírse y amenazar con reprobarlos a todos en Formación Humana si vuelven a hacer un comentario similar."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Adecuación Curricular (Competencia Ética y Ciudadana) y Manual de Convivencia (OD 22-2023). El docente no puede ignorar el 'currículo oculto' ni permitir vulneraciones a la dignidad (B). Tampoco debe aplicar castigos punitivos expulsivos como primera opción (C, D). El enfoque restaurativo exige transformar el conflicto en una oportunidad formativa, desarticulando el prejuicio mediante la reflexión guiada."
    },
    {
        id: 533,
        categoria: "Planificación Pedagógica",
        pregunta: "Al diseñar una Situación de Aprendizaje para la asignatura de Lengua Española en 4to grado, el equipo docente define el siguiente contexto: 'La comunidad escolar está preocupada por el aumento de basura en los alrededores del centro'. Para que esta situación movilice efectivamente las competencias comunicativas, ¿cuál debe ser el producto o punto de llegada exigido a los estudiantes?",
        opciones: [
            "Que los estudiantes salgan al patio durante el recreo a recoger la basura en brigadas de limpieza organizadas por el maestro.",
            "Que los estudiantes escuchen una charla de 45 minutos impartida por el alcalde de la ciudad sobre el manejo de residuos sólidos.",
            "Que investiguen sobre el tema, diseñen y redacten una campaña de concientización (afiches y cartas formales) dirigida a los vecinos y autoridades locales, y la presenten oralmente en una asamblea escolar.",
            "Que resuelvan problemas matemáticos calculando la cantidad de kilos de basura que se producen diariamente en el sector."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Adecuación Curricular 2023. La Situación de Aprendizaje debe estar anclada a las competencias específicas del área. Si el área es Lengua Española, el producto debe exigir la producción y comprensión de textos (afiches, cartas, discurso oral). Limpiar (A) o escuchar pasivamente (B) no evidencia la competencia comunicativa."
    },
    {
        id: 534,
        categoria: "Inclusión",
        pregunta: "Durante el primer mes de clases, una maestra de 2do grado observa que una estudiante presenta serias dificultades motrices para sostener el lápiz y trazar las letras, quejándose constantemente de dolor en la mano. La estudiante tiene un desarrollo del lenguaje oral y una comprensión lectora sobresalientes. Siguiendo la ruta de atención a la diversidad estipulada en la Ordenanza 05-2024, ¿cuál es el primer paso procedimental que debe ejecutar la maestra en su aula?",
        opciones: [
            "Remitir el caso inmediatamente al equipo de Orientación y Psicología solicitando que el estudiante sea transferido a un centro de educación especial.",
            "Aplicar 'Ajustes Razonables de Acceso' de manera proactiva e inmediata en el aula, como permitirle el uso de lápices con adaptadores de agarre grueso, tabletas para producción escrita o evaluar su aprendizaje de forma oral, mientras documenta sus observaciones para solicitar apoyo especializado.",
            "Obligar a la estudiante a realizar planas diarias durante el recreo para fortalecer los músculos de la mano mediante la práctica repetitiva.",
            "Dejar de evaluarle la competencia de producción escrita hasta que un médico especialista traiga un diagnóstico oficial que justifique su incapacidad motora."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El DUA (Diseño Universal para el Aprendizaje) establece que el docente de aula es el primer responsable de la inclusión. No debe esperar un diagnóstico formal para aplicar ajustes razonables que derriben barreras inmediatas (adaptadores, formatos digitales, oralidad). Forzar la escritura (C) o excluirla (A) viola sus derechos."
    },
    {
        id: 535,
        categoria: "Comportamientos Profesionales",
        pregunta: "El equipo de gestión escolar convoca a los docentes a una reunión de Comunidad de Aprendizaje (CAP) para analizar los bajos resultados obtenidos en las evaluaciones diagnósticas de Matemáticas del centro. Un docente se opone abiertamente en la reunión, argumentando: 'Mis alumnos salieron mal porque en el grado anterior no les enseñaron bien; yo no tengo nada que analizar de mi práctica'. ¿Qué estándar de desempeño profesional se ve vulnerado por esta actitud?",
        opciones: [
            "La dimensión de 'Desarrollo Profesional y Trabajo Colaborativo', ya que el docente rechaza la cultura de evaluación formativa institucional, evade la autorreflexión crítica sobre su propia práctica y rompe la corresponsabilidad necesaria para la mejora continua del centro.",
            "El estándar de 'Gestión Administrativa', puesto que el docente no está cumpliendo con su obligación de llenar correctamente los registros de grado.",
            "Ninguno, ya que el Estatuto Docente protege la libertad de opinión y el maestro está en su derecho de señalar las deficiencias de sus colegas si tiene pruebas.",
            "El estándar de 'Relación Escuela-Comunidad', porque debió llamar a los padres antes de opinar en la reunión."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Estándares de Desempeño Profesional Docente. El trabajo colaborativo y la reflexión sobre la práctica ('practicante reflexivo') son exigencias fundamentales. Culpar a colegas anteriores y negarse al análisis conjunto de resultados bloquea las Comunidades de Aprendizaje y demuestra una grave falta de madurez profesional y corresponsabilidad."
    },
    {
        id: 536,
        categoria: "Alfabetización",
        pregunta: "Una maestra de 1er ciclo desea evaluar el nivel de apropiación del sistema de escritura de sus alumnos. Para ello, utiliza la técnica de 'Dictado de Palabras'. Sin embargo, en lugar de dictar sílabas sueltas, dicta una lista de palabras de un mismo campo semántico (ej. animales: GATO, MARIPOSA, PEZ, RINOCERONTE) y pide a los niños que las escriban como ellos creen que se escriben, sin decirles si está bien o mal. ¿Cuál es el propósito técnico y pedagógico de esta estrategia según el MINERD?",
        opciones: [
            "Identificar a los estudiantes que tienen mala memoria visual para asignarlos a tutorías de recuperación obligatorias en horario extendido.",
            "Obtener una calificación sumativa rápida y fácil de corregir para llenar las casillas vacías del registro de grado al final del mes.",
            "Diagnosticar de manera objetiva el nivel de conceptualización de la escritura en el que se encuentra cada niño (Presilábico, Silábico, Silábico-Alfabético, Alfabético) analizando sus hipótesis ('errores' constructivos) frente al reto de escribir sin copia ni andamiaje.",
            "Demostrar a los padres de familia durante las reuniones de entrega de notas lo atrasados que están sus hijos en ortografía."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 01-2023 y Fascículos de Alfabetización Inicial. El 'dictado diagnóstico' (con palabras de diversa longitud y complejidad silábica de un mismo campo semántico) no busca sancionar la ortografía. Su fin es que el docente analice las producciones libres del niño para descubrir qué hipótesis sobre la escritura está utilizando (ej. si asigna una letra por sílaba), permitiendo ajustar la intervención a su nivel cognitivo real."
    },
    {
        id: 537,
        categoria: "Ética",
        pregunta: "Al finalizar el año escolar, un maestro de 5to grado constata que un estudiante con el que ha tenido serios conflictos de disciplina no alcanzó las competencias mínimas y debe repetir el grado. La madre del menor, desesperada, le ofrece de manera privada y directa una compensación económica sustancial a cambio de que modifique las valoraciones en el registro de 'I' a 'EP' para que el niño sea promovido. ¿Cuál es el deber ineludible del docente frente a este dilema ético y legal?",
        opciones: [
            "Aceptar el dinero considerando que el salario docente es bajo, pero exigir que el estudiante firme una carta comprometiéndose a portarse bien el próximo año escolar.",
            "Rechazar la oferta, pero realizar la modificación de la nota gratuitamente para demostrar compasión y evitarle un trauma psicológico al niño por la repitencia.",
            "Rechazar categóricamente la oferta, mantener las valoraciones reales sustentadas en las evidencias del proceso, y reportar inmediatamente el intento de soborno a la Dirección del centro levantando un acta formal para proteger su integridad profesional y la legalidad del documento.",
            "Tomar el dinero de la madre y donarlo íntegramente a la Asociación de Padres, Madres y Amigos de la Escuela (APMAE) para la compra de materiales didácticos del aula."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Código de Ética, Estatuto Docente y Ordenanza 04-2023. El registro de grado es un documento público y oficial. Alterarlo por presiones, sobornos o 'compasión' constituye un fraude académico, falsificación de documentos y una violación ética gravísima pasible de destitución. El docente debe proteger su accionar mediante el reporte institucional."
    },
    {
        id: 538,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una actividad de comprensión lectora en 4to grado, la docente nota que la mayoría de los estudiantes leen el texto fluido y rápido, pero al finalizar, son incapaces de responder preguntas inferenciales sobre las motivaciones de los personajes, limitándose a repetir frases literales. ¿Qué ajuste inmediato en su estrategia de mediación pedagógica debe realizar la docente para desarrollar el pensamiento crítico?",
        opciones: [
            "Obligar al grupo a leer el mismo texto en voz alta cinco veces consecutivas hasta que logren memorizar todos los detalles de la trama.",
            "Aplicar la estrategia de 'Pensamiento en Voz Alta' (Modelado Metacognitivo), deteniendo la lectura en puntos clave y mostrando a los alumnos cómo ella misma conecta pistas del texto con sus conocimientos previos para deducir lo que no está escrito explícitamente.",
            "Asignarles un cuestionario de selección múltiple con preguntas más fáciles para no frustrarlos y poder avanzar con el programa de contenidos.",
            "Culpar a los maestros de los grados anteriores por no haberles enseñado a leer correctamente y derivar al grupo al orientador escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Estrategias de Enseñanza). La inferencia no surge por repetición mecánica (A). Es una habilidad cognitiva superior que requiere andamiaje. El modelado metacognitivo ('Yo pienso que el personaje está triste porque el texto dice que miraba el suelo...') enseña al estudiante la *ruta de pensamiento* necesaria para 'leer entre líneas'."
    },
    {
        id: 539,
        categoria: "Evaluación",
        pregunta: "En una sección de 6to grado, el profesor aplica consistentemente la 'Heteroevaluación' (el maestro evalúa al alumno) a través de pruebas escritas semanales. Sin embargo, el coordinador pedagógico le observa que su práctica evaluativa está incompleta y no cumple con la Ordenanza 04-2023. ¿Qué argumento normativo sustenta la observación del coordinador?",
        opciones: [
            "La Ordenanza exige que la evaluación sea exclusivamente participativa, por lo que el docente debe incluir de forma sistemática y evidenciable procesos de Autoevaluación (reflexión del propio alumno) y Coevaluación (evaluación entre pares), usando instrumentos idóneos para desarrollar la metacognición.",
            "El coordinador se equivoca, ya que las pruebas escritas semanales son la única garantía objetiva de que el currículo se está impartiendo correctamente.",
            "La Ordenanza prohíbe evaluar a los alumnos de manera semanal; la evaluación debe hacerse estrictamente una vez al final de cada periodo lectivo.",
            "La heteroevaluación solo es válida si se realiza utilizando recursos digitales o plataformas tecnológicas en lugar de papel y lápiz."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 04-2023. El sistema de evaluación por competencias dominicano requiere obligatoriamente la participación de los actores a través de la autoevaluación y coevaluación. Limitarse a la heteroevaluación tradicional (maestro juez) anula el desarrollo de la autonomía, el pensamiento crítico y la ética del estudiante en su propio proceso."
    },
    {
        id: 540,
        categoria: "Planificación",
        pregunta: "Al inicio del año escolar, una docente de 3er grado revisa la Adecuación Curricular 2023 y nota que los 'Contenidos' ya no son el centro estructurador de la planificación, sino que están subordinados a las 'Competencias'. Un colega tradicionalista le recomienda: 'Olvida eso, planifica por los temas del libro que es más fácil'. ¿Cuál es el fundamento pedagógico que la docente debe esgrimir para defender la planificación por competencias?",
        opciones: [
            "Argumentar que los libros de texto del MINERD están desactualizados y contienen errores insalvables.",
            "Explicar que el enfoque por competencias asume que la acumulación pasiva de saberes (contenidos) es insuficiente para la vida actual. Los contenidos son solo 'mediadores' o vehículos; el objetivo real es que el estudiante aprenda a movilizar esos conceptos, procedimientos y actitudes para resolver problemas reales y actuar en contexto.",
            "Indicar que la planificación por competencias requiere menos esfuerzo escrito que la planificación por contenidos tradicionales.",
            "Justificar que las competencias solo se utilizan para la evaluación final, mientras que los contenidos rigen el trabajo diario en el cuaderno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Fundamentos del Currículo (Adecuación Curricular 2023). En el enfoque por competencias, el 'saber' teórico (contenido) pierde valor si no está acompañado del 'saber hacer' y el 'saber ser'. Enseñar temas aislados (el enfoque enciclopédico del colega) no garantiza que el estudiante desarrolle la capacidad de actuar eficazmente ante los retos de la vida real."
    },
    {
        id: 541,
        categoria: "Convivencia",
        pregunta: "En un aula de 5to grado, se detecta que un grupo de alumnos ha creado un perfil falso en una red social exclusivamente para burlarse de las características físicas de una compañera del aula, subiendo fotos tomadas a escondidas durante el recreo. La estudiante afectada está deprimida y se niega a asistir a clases. ¿Qué medida de gestión escolar es acorde a los protocolos del MINERD frente al Ciberacoso?",
        opciones: [
            "Considerar que, al ocurrir en una plataforma digital fuera del control del MINERD, el centro educativo no tiene jurisdicción y orientar a la familia afectada a interponer una demanda en la fiscalía de menores.",
            "Obligar a los creadores del perfil a borrarlo inmediatamente, darles una suspensión de 15 días y exigirles que pidan disculpas por el grupo de WhatsApp del curso.",
            "Convocar una asamblea con todos los padres del curso para exponer públicamente a las familias de los agresores y someterlos al escrutinio de la comunidad.",
            "Activar de inmediato el protocolo de actuación ante acoso escolar: brindar contención psicológica a la víctima, citar a las familias involucradas por separado (debido proceso), aplicar medidas disciplinarias formativas (no expulsivas) a los agresores y ejecutar un plan de intervención grupal sobre ciudadanía digital responsable."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Protocolos de Cultura de Paz y Buen Trato / Ordenanza 22-2023. El ciberacoso es una falta grave que afecta el clima escolar, independientemente de la plataforma utilizada. La escuela DEBE intervenir. Las acciones humillantes (C) o puramente expulsivas (B) no reparan el daño. Se requiere intervención psicosocial articulada con Orientación (D) garantizando la privacidad y el debido proceso."
    },
    {
        id: 542,
        categoria: "Inclusión",
        pregunta: "Durante las actividades de lectura en 2do grado, el maestro se da cuenta de que un estudiante acerca el rostro excesivamente al cuaderno, entrecierra los ojos al mirar la pizarra y se salta renglones al copiar. Las evaluaciones de lectoescritura muestran un rendimiento muy bajo. Antes de asumir que el estudiante tiene una 'dificultad de aprendizaje cognitivo', ¿cuál es el procedimiento normativo de atención a la diversidad que el docente debe iniciar?",
        opciones: [
            "Remitir inmediatamente al estudiante a una clase de recuperación pedagógica intensiva en horario de tarde para nivelar su lectura.",
            "Registrar las conductas observadas que sugieren una barrera sensorial (posible déficit visual), aplicar ajustes de acceso primarios (ubicarlo en primera fila, macrotipos) y referir el caso al equipo de Orientación y Psicología para que coordinen con la familia una evaluación oftalmológica externa urgente.",
            "Prohibirle al estudiante sentarse en las filas de atrás y bajarle puntos si no copia la clase completa a tiempo.",
            "Asumir que el estudiante tiene dislexia y comenzar a aplicarle un programa de intervención psicopedagógica para trastornos del neurodesarrollo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El docente es el primer eslabón en la detección de barreras. Muchas 'dificultades de aprendizaje' son en realidad problemas sensoriales no detectados (miopía, astigmatismo). El docente no diagnostica médicamente, pero sí identifica signos de alerta, aplica ajustes preventivos (DUA) y canaliza el apoyo institucional y familiar."
    },
    {
        id: 543,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Una maestra de 4to grado está frustrada porque, a pesar de dar instrucciones claras ('Abran el libro en la página 20, lean el segundo párrafo y respondan las tres preguntas en su cuaderno'), la mitad de la clase no sabe qué hacer, se levanta, pregunta repetidamente y el ambiente se torna caótico. ¿Qué estrategia de gestión de aula y mediación pedagógica le falta implementar para asegurar la comprensión de las consignas?",
        opciones: [
            "Gritar las instrucciones más fuerte y aplicar sanciones disciplinarias a todo el que se levante a preguntar nuevamente.",
            "Fragmentar la instrucción en pasos cortos y, fundamentalmente, aplicar la estrategia de 'verificación de la comprensión' (Checking for Understanding), pidiendo a uno o dos estudiantes que repitan con sus propias palabras qué es exactamente lo que deben hacer antes de iniciar la tarea independiente.",
            "Escribir las instrucciones en un lenguaje extremadamente complejo en la pizarra para obligar a los estudiantes a mejorar su nivel de lectura.",
            "Dejar que los estudiantes que no entendieron copien de los que sí entendieron para fomentar el trabajo en equipo autónomo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Criterios de Gestión Efectiva de Aula. Las instrucciones orales múltiples y rápidas sobrepasan la memoria de trabajo de los niños. La técnica de 'Checking for Understanding' (pedir a un niño que parafrasee la instrucción) garantiza que el mensaje fue recibido correctamente y establece claridad antes de la ejecución, previniendo el caos conductual."
    },
    {
        id: 544,
        categoria: "Alfabetización",
        pregunta: "En una sesión de 'Escritura a través del maestro' en 1er grado, los niños están dictando a la maestra una carta de agradecimiento para los bomberos que visitaron la escuela. Un niño dice: 'Ponle que eyo apagan er fuego'. La maestra escribe en la pizarra en tamaño grande: 'Ustedes apagan el fuego'. ¿Por qué esta intervención es metodológicamente correcta en el proceso de alfabetización inicial?",
        opciones: [
            "Porque la maestra demuestra que ella tiene mejor ortografía que los estudiantes de 1er grado.",
            "Porque la maestra no debe permitir que los niños utilicen su dialecto regional dentro del salón de clases bajo ninguna circunstancia.",
            "Porque al actuar como 'escriba', el docente modela sutilmente la traducción del lenguaje oral coloquial al registro formal de la lengua escrita, respetando las convenciones ortográficas y sintácticas sin censurar la idea original del niño.",
            "Porque la maestra debe ahorrar tiempo y escribir lo más rápido posible para terminar la clase."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 01-2023 (Estrategias de Producción Escrita). La lengua oral y la lengua escrita tienen registros distintos. Al escribir lo que el niño dicta de forma convencional, el maestro ofrece un 'andamiaje' perfecto: el niño se concentra en 'qué decir' (composición) mientras observa y aprende 'cómo se escribe convencionalmente' (sistema gráfico y sintaxis), sin ser corregido de forma humillante."
    },
    {
        id: 545,
        categoria: "Evaluación",
        pregunta: "El equipo docente de 5to grado debate sobre cómo llenar los Registros de Grado en la sección de 'Recuperación Pedagógica'. Un maestro sugiere: 'Dejemos en blanco a los que tienen 'I' o 'EP', les damos un trabajito final en junio, y si lo traen, les ponemos la 'L''. ¿Por qué esta sugerencia constituye una falta grave a los principios de la Ordenanza 04-2023?",
        opciones: [
            "Porque la recuperación pedagógica no es un evento sumativo de fin de año ('un trabajito' para pasar), sino un proceso continuo y formativo que debe implementarse inmediatamente después de detectar la dificultad en cada periodo, y debe quedar evidenciado en el registro como una intervención sistemática.",
            "Porque el 'trabajito final' debe ser un examen escrito de selección múltiple obligatoriamente.",
            "Porque la sugerencia es correcta, ya que permite ahorrar tiempo administrativo al no tener que documentar recuperaciones mes por mes.",
            "Porque los estudiantes con 'I' deben ser promovidos automáticamente por mandato del Ministerio."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 04-2023 (Artículos sobre Recuperación). La evaluación es procesual. Acumular deficiencias para resolverlas con una 'tarea de última hora' en junio anula el derecho del estudiante a recibir apoyo cuando realmente lo necesita. El registro debe reflejar qué acciones pedagógicas diferentes aplicó el maestro durante el periodo para ayudar al alumno a avanzar."
    },
    {
        id: 546,
        categoria: "Planificación",
        pregunta: "Al inicio del ciclo escolar, la maestra de 2do grado aplica las herramientas de evaluación diagnóstica recomendadas por el MINERD. Los resultados revelan una gran heterogeneidad: un grupo lee fluidamente, otro está en etapa silábica y un pequeño grupo no reconoce vocales. Frente a esta realidad, ¿cuál debe ser la respuesta en su planificación didáctica?",
        opciones: [
            "Ignorar la heterogeneidad y planificar una enseñanza estandarizada para el alumno 'promedio', esperando que los más atrasados se nivelen solos con el tiempo.",
            "Diseñar una planificación diversificada (DUA) que proponga un mismo objetivo de aprendizaje (ej. comprensión de un cuento) pero que ofrezca múltiples formas de implicación, acción y expresión ajustadas a los distintos niveles de alfabetización del aula, implementando estaciones de trabajo y tutorías de pares.",
            "Dividir el aula físicamente con una cortina, enseñando a los avanzados por la mañana y a los rezagados por la tarde.",
            "Entregar a los padres de los niños rezagados una constancia de que no podrán aprender los contenidos del grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023 (Función Diagnóstica) y DUA. La heterogeneidad es la norma, no la excepción. La evaluación diagnóstica obliga a la diversificación de la enseñanza. Planificar 'talla única' discrimina y genera fracaso escolar. El diseño de actividades multinivel y el uso flexible del espacio y los roles permite atender la diversidad sin segregar."
    },
    {
        id: 547,
        categoria: "Comportamientos Profesionales",
        pregunta: "Una maestra titular de 4to grado recibe en su aula a un practicante universitario (pasante) que está realizando sus horas de observación. Durante una clase, la maestra le dice al pasante frente a los niños: 'Estos estudiantes no sirven para nada, son igual de vagos que sus padres, te vas a volver loco aquí'. ¿Qué dimensiones del marco ético y profesional vulnera gravemente la docente?",
        opciones: [
            "Ninguna, la docente solo está siendo transparente y preparando al practicante para la realidad del sistema educativo.",
            "Vulnera el Compromiso Ético y el Clima Institucional, incurriendo en estigmatización y violencia verbal hacia los menores, violando el deber de confidencialidad y respeto, y modelando una práctica antipedagógica e indigna frente a un profesional en formación.",
            "Vulnera únicamente el reglamento del programa de pasantías universitarias, que prohíbe hablar en el aula.",
            "Vulnera su propia libertad de expresión al no decir la verdad de manera más técnica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código de Ética, Estatuto Docente y Ley 136-03. El docente es un modelo de conducta. Las etiquetas ('vagos', 'no sirven') constituyen maltrato psicológico y vulneran el derecho al buen trato. Expresarlo frente a los niños y un pasante demuestra una grave incompetencia ética, dañando el clima emocional indispensable para el aprendizaje."
    },
    {
        id: 548,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de Educación Artística de 6to grado, el profesor pide a los estudiantes que creen una obra libre usando materiales reciclables. Dos estudiantes varones deciden tejer collares con hilo, actividad tradicionalmente asignada a las niñas en su comunidad. Varios compañeros comienzan a burlarse de ellos. ¿Cuál es la intervención pedagógica adecuada alineada al currículo?",
        opciones: [
            "Detener las burlas y pedir a los dos varones que elijan otra actividad 'más adecuada para su género' para evitar conflictos mayores.",
            "Ignorar las burlas asumiendo que los niños están bromeando y que los estudiantes deben aprender a defenderse solos.",
            "Intervenir para frenar la burla, validar el trabajo creativo de los dos estudiantes, y aprovechar el momento para abrir un diálogo crítico sobre los roles de género estereotipados y el derecho a la libre expresión artística, fortaleciendo la equidad en el aula.",
            "Expulsar a los alumnos que se burlaron y reprobarlos en Educación Artística automáticamente."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Enfoque de Equidad de Género y Competencia Ética y Ciudadana (Adecuación Curricular). La escuela es un espacio para deconstruir prejuicios. Prohibir la actividad artística a los varones (A) refuerza el estereotipo. El docente debe mediar para garantizar el respeto, valorando la creatividad por encima de las construcciones sociales discriminatorias."
    },
    {
        id: 549,
        categoria: "Evaluación",
        pregunta: "Una maestra de 3er grado diseña una evaluación escrita de Ciencias Naturales sobre 'Los Animales Invertebrados'. El 90% de las preguntas requieren que el estudiante memorice y escriba definiciones literales copiadas del libro de texto. ¿Por qué este instrumento es inválido desde la perspectiva de la Ordenanza 04-2023?",
        opciones: [
            "Porque en 3er grado está estrictamente prohibido utilizar lápiz y papel para evaluar Ciencias Naturales.",
            "Porque las definiciones deben ser escritas en inglés y no en español.",
            "Porque la evaluación por competencias no busca medir la capacidad de memorización repetitiva de datos aislados, sino la capacidad del estudiante para aplicar ese conocimiento conceptual en situaciones significativas (ej. clasificar animales del entorno, inferir características).",
            "Porque la prueba debió ser oral en su totalidad."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023 (Evaluación por Competencias). La memorización (aprendizaje factual) es un nivel cognitivo bajo e insuficiente para evidenciar una competencia. Los instrumentos deben proponer 'situaciones problema' donde el niño demuestre que comprende y sabe usar la información, no solo que puede repetirla como un loro."
    },
    {
        id: 560,
        categoria: "Inclusión",
        pregunta: "El equipo de gestión escolar decide que los estudiantes con necesidades específicas de apoyo educativo (NEAE) no participarán en las excursiones y paseos escolares fuera del centro por 'razones de seguridad' y para 'evitar inconvenientes logísticos'. Como docente conocedor de sus derechos, ¿cuál es su postura frente a esta decisión directiva?",
        opciones: [
            "Oponerse argumentando que la Ordenanza 05-2024 y la Ley General de Educación prohíben la exclusión de estudiantes con NEAE de las actividades complementarias y extracurriculares. La obligación del centro es realizar los ajustes de logística y apoyos necesarios para garantizar su participación en igualdad de condiciones.",
            "Apoyar la decisión de la dirección, ya que los docentes no reciben pago extra por cuidar estudiantes con discapacidad fuera de la escuela.",
            "Sugerir que los estudiantes con NEAE solo vayan a las excursiones si sus padres alquilan un transporte privado separado para ellos.",
            "Aceptar la medida en silencio, ya que los directores tienen autoridad absoluta sobre las políticas de inclusión del centro, por encima de las ordenanzas."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 05-2024 y Enfoque de Derechos. La segregación en actividades lúdicas o extracurriculares es un acto de discriminación flagrante. El 'inconveniente logístico' no justifica la exclusión. Las instituciones educativas tienen el mandato ineludible de adaptar sus actividades (transporte, rutas, acompañamiento) para que todos los estudiantes ejerzan su derecho al aprendizaje en todo contexto."
    },

    {
        id: 561,
        categoria: "Evaluación",
        pregunta: "En una unidad sobre 'El Informe de Lectura' en 5to grado, el docente nota que un grupo de estudiantes logra identificar las ideas principales, pero al redactar el informe, copian párrafos enteros del texto original sin usar conectores ni paráfrasis. Según la Ordenanza 04-2023, ¿cuál es la acción evaluativa que garantiza el carácter formativo del proceso?",
        opciones: [
            "Calificar la producción con 'Iniciado' (I) y asignar una sanción por intento de plagio para que aprendan la importancia de la autoría.",
            "Devolver los borradores con una rúbrica de retroalimentación que señale específicamente la necesidad de usar conectores de causa-efecto y organizar sesiones de modelado sobre cómo parafrasear ideas sin perder el sentido original.",
            "Aceptar los informes tal cual, ya que lo más importante es que los niños lean y si copiaron es porque al menos identificaron la información relevante.",
            "Pedir a los estudiantes que transcriban el texto original diez veces para que memoricen el uso de los signos de puntuación y conectores de manera mecánica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación formativa requiere que el docente identifique la brecha de aprendizaje (falta de paráfrasis y conectores) y provea mediación (modelado) y retroalimentación específica. El castigo (A) o la indiferencia (C) no generan desarrollo de competencias comunicativas."
    },
    {
        id: 562,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante una clase de Matemática en 4to grado sobre resolución de problemas de compra y venta, un estudiante utiliza un procedimiento mental no convencional que lo lleva al resultado correcto, pero que no sigue el algoritmo de la suma que el docente explicó en la pizarra. ¿Cómo debe reaccionar el docente ante esta situación?",
        opciones: [
            "Indicar al estudiante que el resultado es válido por coincidencia, pero que debe borrarlo y realizar la operación siguiendo estrictamente los pasos del algoritmo tradicional para obtener los puntos.",
            "Invalidar el ejercicio porque el currículo dominicano solo permite el uso de algoritmos estandarizados para garantizar la uniformidad en las Pruebas Nacionales.",
            "Valorar el razonamiento del estudiante, pedirle que explique su estrategia al resto de la clase para fomentar la socialización de procesos matemáticos, y luego contrastar su método con el algoritmo convencional.",
            "Ignorar la intervención del estudiante y pedirle a otro compañero que sí hizo el algoritmo tradicional que pase a la pizarra."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Enfoque de Resolución de Problemas). El desarrollo del pensamiento lógico-matemático valora las estrategias personales y el cálculo mental. Fomentar la explicación de estos métodos promueve la metacognición y permite que otros estudiantes vean diferentes rutas para llegar a una solución."
    },
    {
        id: 563,
        categoria: "Inclusión",
        pregunta: "Un docente de 6to grado recibe a un estudiante con discapacidad auditiva parcial (hipoacusia) que utiliza audífonos. El docente nota que, a pesar del aparato, el niño se distrae y no sigue las instrucciones cuando hay mucho ruido ambiental o cuando el docente habla de espaldas escribiendo en la pizarra. ¿Qué ajuste razonable es obligatorio aplicar según la Ordenanza 05-2024?",
        opciones: [
            "Solicitar que el estudiante sea ubicado en un aula separada con un intérprete de señas a tiempo completo, ya que la escuela regular no puede atenderlo.",
            "Asegurarse de hablar siempre de frente al estudiante para facilitar la lectura labiofacial, reducir el ruido de fondo durante las explicaciones y apoyarse en apoyos visuales (gráficos, esquemas en la pizarra) para reforzar el mensaje oral.",
            "Exigir a la familia que compre audífonos de mayor potencia para que el niño pueda escuchar igual que sus compañeros sin necesidad de cambios en la metodología.",
            "Asignar a un compañero de clase para que le pase todos los apuntes y el estudiante con hipoacusia no tenga que esforzarse en escuchar la explicación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 (Ajustes Razonables). Los ajustes de acceso (posición frente al alumno, apoyos visuales) son responsabilidad del docente y son sencillos de implementar. Segregar al niño (A) o culpar a la tecnología (C) vulnera el derecho a la educación inclusiva."
    },
    {
        id: 564,
        categoria: "Planificación",
        pregunta: "En la elaboración de una Situación de Aprendizaje para Ciencias de la Naturaleza, un docente propone: 'Los estudiantes aprenderán sobre las plantas sembrando una semilla en un pote'. El coordinador indica que esto es una 'actividad aislada' y no una 'situación de aprendizaje'. ¿Qué elemento le falta para cumplir con la Adecuación Curricular 2023?",
        opciones: [
            "Un título más creativo y llamativo para que los niños se motiven a comprar el pote.",
            "Un contexto problematizado (ej. la falta de áreas verdes en la escuela), un rol activo (ser investigadores botánicos) y un punto de llegada que resuelva el problema o comunique lo aprendido (ej. crear un jardín vertical o un herbario escolar).",
            "Que la siembra de la semilla sea evaluada con un examen de 20 preguntas sobre la fotosíntesis al final de la semana.",
            "Que el docente traiga la planta ya crecida para ahorrar tiempo y avanzar con los contenidos de la célula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Una Situación de Aprendizaje no es una simple tarea manual. Requiere un contexto real o simulado que genere un desafío (problema) y un producto final que evidencie la movilización de competencias, no solo la ejecución de una instrucción técnica."
    },
    {
        id: 565,
        categoria: "Ética y Convivencia",
        pregunta: "Un docente observa que un estudiante de su curso presenta signos físicos de descuido (ropa sucia, olor persistente) y, en una conversación privada, el niño menciona que 'a veces no cena porque no hay nadie en casa'. ¿Cuál es la responsabilidad legal del docente según la Ley 136-03?",
        opciones: [
            "Comprar comida para el niño todos los días y llevarle ropa limpia de sus propios hijos para resolver el problema de forma personal.",
            "No intervenir, ya que la vida privada de las familias y su situación económica no son competencia de la escuela y podría buscarse problemas con los padres.",
            "Informar inmediatamente al Departamento de Orientación y Psicología y a la Dirección para activar el protocolo de protección por posible negligencia o vulneración de derechos, remitiendo el caso a las autoridades competentes (CONANI/Fiscalía) si fuera necesario.",
            "Reprender al niño frente a sus compañeros para que le diga a sus padres que deben ser más responsables con su higiene."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03 (Código para la Protección de los Derechos de Niños, Niñas y Adolescentes). El docente es un garante de derechos. Ante sospecha de negligencia o falta de cuidado básico, la ley obliga a reportar por los canales institucionales. La ayuda personal (A) es loable pero no resuelve la vulneración de derechos subyacente."
    },
    {
        id: 566,
        categoria: "Alfabetización Inicial",
        pregunta: "Una docente de 1er grado utiliza 'Nombres Propios' como primer referente de lectura en el aula. ¿Cuál es la justificación técnica de esta estrategia según el enfoque del MINERD?",
        opciones: [
            "Que el nombre propio es la palabra con mayor carga emocional y significado para el niño, lo que sirve como base para comprender que las letras representan sonidos y para establecer comparaciones con otras palabras (longitud, letras iniciales, etc.).",
            "Que el nombre propio es lo único que el Ministerio exige que el niño aprenda a escribir en el primer periodo para ser promovido.",
            "Que los nombres propios son más fáciles de memorizar que las vocales aisladas porque no cambian de forma.",
            "Que permite pasar la asistencia más rápido y mantener el orden en la fila."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Fascículos de Alfabetización Inicial. El nombre propio funciona como un 'patrimonio de letras' que el niño domina. A partir de él, realiza inferencias ('mi nombre empieza como manzana'), lo cual es un paso crítico en la construcción del sistema de escritura bajo un enfoque funcional."
    },
    {
        id: 567,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Al trabajar la competencia comunicativa en 2do ciclo de primaria, el docente organiza un debate. Nota que tres estudiantes dominan la conversación y el resto permanece pasivo. Para fomentar la participación equitativa y democrática, ¿qué técnica de gestión debe implementar?",
        opciones: [
            "Bajarle puntos a los tres estudiantes que hablan mucho para que aprendan a quedarse callados.",
            "Asignar roles específicos (moderador, secretario, portavoces por equipos) y utilizar técnicas como 'palitos de participación' o tiempos limitados de habla, garantizando que cada estudiante tenga un turno asignado.",
            "Dar la clase por terminada y decir que el curso no tiene capacidad para debatir temas complejos.",
            "Permitir que solo hablen los que saben, para que los demás aprendan escuchando a los mejores."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estándares de Desempeño (Gestión del Clima de Aula). El docente debe estructurar la participación para que no sea un privilegio de pocos. La asignación de roles y el uso de herramientas de control de turno promueven un ambiente inclusivo y democrático acorde con la Competencia Ética y Ciudadana."
    },
    {
        id: 568,
        categoria: "Evaluación",
        pregunta: "Un docente aplica una prueba de fin de unidad en Ciencias Sociales. Un estudiante que siempre participa y entrega excelentes trabajos, se bloquea y reprueba el examen con una nota muy baja. Siguiendo la Ordenanza 04-2023 sobre la 'Evaluación Integral', ¿qué debe hacer el docente?",
        opciones: [
            "Registrar la nota del examen como calificación final del periodo, ya que las pruebas son el único instrumento objetivo y legal.",
            "Considerar las otras evidencias recolectadas durante el proceso (rúbricas de proyectos, portafolio, observaciones) para determinar el nivel de logro real, entendiendo que una sola prueba no define la competencia del estudiante.",
            "Permitir que el estudiante se lleve el examen a su casa para que lo corrija con ayuda de sus padres y luego ponerle la nota máxima.",
            "Obligar al estudiante a tomar el examen de nuevo todos los días después de clase hasta que logre pasar con buena nota."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es de proceso y multitécnica. No puede depender de un solo instrumento (el examen). Si hay evidencias previas de logro, estas deben ponderarse para que la valoración sea justa y refleje el nivel de dominio real de la competencia."
    },
    {
        id: 569,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente se percata de que un compañero de grado suele dejar a sus estudiantes solos en el aula para irse a la cafetería o hablar por teléfono en el pasillo durante 20 minutos. ¿Cuál es el proceder profesional ético del docente que observa esta conducta?",
        opciones: [
            "Unirse al compañero en la cafetería, ya que el estrés docente justifica esos descansos fuera de programa.",
            "Tomarle fotos a escondidas y subirlas a un grupo de padres de WhatsApp para que ellos pongan la queja en el Distrito.",
            "Conversar con el colega de forma asertiva sobre el riesgo que corren los niños solos y, de persistir la conducta, informar a la dirección del centro, ya que la seguridad de los estudiantes es una responsabilidad compartida.",
            "No decir nada, porque entre maestros debe existir un código de silencio para protegerse de los directivos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estatuto Docente y Código de Ética. La supervisión de los estudiantes es un deber inalienable. El docente que observa la falta tiene el deber ético de priorizar el bienestar de los menores y la institucionalidad, siguiendo la cadena de mando después de un intento de comunicación entre pares."
    },
    {
        id: 570,
        categoria: "Planificación Pedagógica",
        pregunta: "En 3er grado, la docente planifica una actividad de Educación Física vinculada a Matemática: 'Carrera de relevos sumando puntos'. Al finalizar, los niños deben registrar sus puntajes y compararlos. ¿Qué tipo de articulación curricular está aplicando la docente según la Adecuación Curricular?",
        opciones: [
            "Articulación Intradisciplinar, porque solo se queda dentro de la Educación Física.",
            "Articulación Multidisciplinar o Interdisciplinar, ya que conecta competencias de dos áreas distintas (Pensamiento Lógico-Matemático y Desarrollo Psicomotor) para dar sentido y utilidad al aprendizaje en un contexto lúdico.",
            "Ninguna, es una pérdida de tiempo porque la Matemática debe darse con el cuaderno y la tiza dentro del aula.",
            "Articulación por azar, ya que no tiene intención pedagógica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023 (Estrategias de Articulación). La conexión entre áreas busca la integralidad del conocimiento. Usar el movimiento para reforzar conceptos numéricos es una estrategia recomendada para el primer ciclo de primaria, facilitando la comprensión desde lo vivencial."
    },

      {
    id: 571,
    categoria: "Evaluación",
    pregunta:
      "En tu aula de 3.er grado, al cerrar el primer trimestre, detectas que 6 estudiantes no han alcanzado los indicadores de logro esperados en Lengua Española. Al revisar tus registros, notas que has registrado actividades de clase, pero no tienes evidencias de evaluaciones formativas individualizadas con retroalimentación escrita. Estás a punto de llenar el boletín de calificaciones. ¿Cuál es la acción profesional correcta según la Ordenanza 04-2023?",
    opciones: [
      "Otorgar una calificación promedio basada en las actividades de clase registradas, ya que representan el desempeño general del trimestre.",
      "Antes de emitir el boletín, documentar en el registro de grado las observaciones del proceso evaluativo de cada estudiante, asignando EP (En Proceso) a quienes no alcanzaron los indicadores, y planificar acciones de recuperación para el siguiente trimestre.",
      "Aplicar una prueba escrita de recuperación trimestral para obtener evidencias objetivas y asignar la calificación final basándote en ese resultado.",
      "Comunicar a los padres y madres la situación para que apoyen en el hogar antes de emitir las calificaciones finales del trimestre.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 15-18 (Sistema de Evaluación L, EP, I) y Art. 22 (Registro de Grado como instrumento oficial). La Ordenanza 04-2023 establece que el registro de grado debe reflejar el proceso evaluativo completo del estudiante con evidencias de cada etapa. Asignar EP documenta con honestidad el estado del proceso y obliga institucionalmente a la docente a planificar recuperación, garantizando el derecho a aprender. Las opciones A y C no abordan la ausencia de evidencias formativas previas, y la D traslada la responsabilidad pedagógica al hogar sin resolver el problema de documentación institucional.",
  },
  {
    id: 572,
    categoria: "Planificación",
    pregunta:
      "Una maestra de 2.do grado planifica una secuencia didáctica sobre 'Los seres vivos' integrando Ciencias de la Naturaleza y Lengua Española. Al diseñar los indicadores de logro, escribe: 'El estudiante conocerá y entenderá las características de los seres vivos.' Su directora de área le señala durante la revisión que los indicadores no están correctamente formulados según la Adecuación Curricular 2023. ¿Cuál sería la formulación correcta según el enfoque por competencias del MINERD?",
    opciones: [
      "'El estudiante identifica y describe las características principales de los seres vivos mediante la observación directa y la comunicación oral y escrita.'",
      "'El estudiante demostrará conocimiento sobre las características de los seres vivos al finalizar la unidad temática.'",
      "'El estudiante será capaz de estudiar y aprender las características de los seres vivos a través de actividades variadas.'",
      "'El estudiante comprende las características de los seres vivos y puede explicarlas cuando se le solicite.'",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Diseño Curricular del Nivel Primario – Estructura de los indicadores de logro por competencias. La Adecuación Curricular 2023 establece que los indicadores de logro deben formularse con verbos en tiempo presente y en modo indicativo que describan acciones observables y medibles, integrando el proceso cognitivo, el contenido y el contexto o medio de demostración. La opción A usa verbos de desempeño observable (identifica, describe), especifica el medio (observación directa) y el canal de comunicación (oral y escrita), cumpliendo con la estructura del enfoque por competencias. Las opciones B, C y D usan verbos abstractos no observables ('demostrará', 'ser capaz de', 'comprende') que no permiten evidenciar el logro de la competencia.",
  },
  {
    id: 573,
    categoria: "Inclusión",
    pregunta:
      "En tu aula de 4.to grado se integra un estudiante con diagnóstico de Trastorno por Déficit de Atención e Hiperactividad (TDAH) remitido por el psicólogo escolar. Al aplicar una evaluación escrita, el niño entrega su hoja en blanco argumentando que 'no pudo concentrarse'. Sus compañeros ya finalizaron. ¿Cuál es la respuesta pedagógica correcta de la maestra según la Ordenanza 05-2024 de Educación Inclusiva?",
    opciones: [
      "Aplicar la evaluación en otro momento del día en un espacio separado, con tiempo extendido, como adecuación de acceso, y registrar la incidencia en el expediente del estudiante.",
      "Calificar con I (Iniciando) la evaluación entregada en blanco, ya que todos los estudiantes tuvieron las mismas condiciones de tiempo y espacio durante la prueba.",
      "Suspender la evaluación escrita para este estudiante y sustituirla por una evaluación oral inmediata para que pueda demostrar sus aprendizajes.",
      "Coordinar con el orientador escolar para que el estudiante reciba apoyo psicológico adicional antes de ser evaluado nuevamente.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Base Legal: Ordenanza 05-2024 de Educación Inclusiva, Art. 12 (Adecuaciones de Acceso) y Art. 20 (Evaluación diferenciada). La Ordenanza 05-2024 establece que los estudiantes con necesidades educativas especiales asociadas a condiciones como el TDAH tienen derecho a adecuaciones de acceso que incluyen tiempo extendido y condiciones ambientales apropiadas, sin que esto modifique los indicadores de logro evaluados. La opción A aplica correctamente esta adecuación y documenta el proceso. La opción B vulnera el derecho a la educación inclusiva al no contemplar las adecuaciones. La opción C cambia el instrumento sin planificación previa. La opción D dilata innecesariamente la evaluación sin resolver la situación inmediata.",
  },
  {
    id: 574,
    categoria: "Ética",
    pregunta:
      "Al finalizar la jornada escolar, una madre se acerca y te entrega un sobre con dinero como 'agradecimiento' porque su hijo obtuvo buenas calificaciones en el trimestre. Ella insiste en que es un gesto personal y que no quiere que lo veas como algo inapropiado. Como docente del MINERD, ¿cuál es la conducta éticamente correcta según la normativa vigente?",
    opciones: [
      "Aceptar el sobre con discreción, ya que es un gesto voluntario de la madre y no fue solicitado por la docente, por lo que no compromete la imparcialidad evaluativa.",
      "Rechazar el sobre con amabilidad, explicar a la madre que la labor docente es un servicio público y que las calificaciones reflejan el trabajo del estudiante, y registrar la situación si persiste la presión.",
      "Rechazar el sobre, pero sugerir a la madre que puede hacer una donación de materiales didácticos al aula, lo que sería un apoyo legítimo para el proceso educativo.",
      "Informar de inmediato al director del centro sobre el ofrecimiento antes de dar cualquier respuesta a la madre.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Orden Departamental 22-2023 (Código de Ética del Servidor Público Docente), Art. 8 (Probidad e integridad) y Art. 11 (Prohibición de recibir dádivas). La Orden Departamental 22-2023 prohíbe expresamente a los docentes recibir cualquier tipo de dádiva, regalo o compensación económica de parte de los miembros de la comunidad educativa que pueda comprometer o aparentar comprometer la objetividad de su función. La opción B es la correcta porque rechaza la dádiva, explica el fundamento ético y registra el hecho si es necesario, cumpliendo con los principios de probidad, transparencia e imparcialidad. La opción C redirige la dádiva, lo cual también puede constituir una falta ética. La opción D puede ser un paso posterior si la situación se repite, pero no reemplaza la respuesta ética inmediata de la docente.",
  },
  {
    id: 575,
    categoria: "Alfabetización",
    pregunta:
      "Estás en el proceso de enseñanza de la lectura en 1.er grado y utilizas el método fonético. Al evaluar a mitad del trimestre, identificas que 8 estudiantes dominan la correspondencia grafema-fonema de las vocales y consonantes básicas, pero no logran fusionar sílabas para leer palabras completas. Según la Ordenanza 01-2023 de Alfabetización Inicial, ¿cuál debe ser tu próxima acción pedagógica?",
    opciones: [
      "Continuar con la secuencia programada del método fonético introduciendo nuevas consonantes, ya que los estudiantes tienen la base necesaria para avanzar.",
      "Diseñar actividades de conciencia fonológica a nivel silábico, específicamente ejercicios de síntesis o fusión fonémica, para consolidar el puente entre el reconocimiento de grafemas y la decodificación de palabras.",
      "Remitir a estos 8 estudiantes al psicopedagogo del centro para una evaluación diagnóstica que determine si presentan dificultades de aprendizaje específicas.",
      "Solicitar a los padres que practiquen la lectura en voz alta con libros del nivel inicial en casa para reforzar las habilidades de fusión silábica.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 01-2023 de Alfabetización Inicial, Sección III (Proceso de adquisición del código alfabético: Conciencia Fonológica como base de la decodificación). La Ordenanza 01-2023 establece que el proceso de alfabetización inicial requiere que la docente intervenga directamente sobre las dificultades identificadas en el continuo de habilidades fonológicas antes de avanzar en la secuencia. La síntesis o fusión fonémica es el proceso cognitivo que permite al estudiante unir sonidos para formar palabras y debe ser trabajado explícitamente antes de avanzar a nuevas unidades del código. La opción A ignora la brecha detectada. La opción C patologiza una dificultad de aprendizaje que primero debe ser atendida pedagógicamente. La opción D transfiere la responsabilidad de intervención pedagógica al hogar.",
  },
  {
    id: 576,
    categoria: "Evaluación",
    pregunta:
      "Una maestra de 5.to grado aplica una prueba escrita sobre fracciones. Al revisar los resultados, encuentra que 15 de 28 estudiantes obtuvieron resultados que corresponden a 'Iniciando'. Antes de registrar las calificaciones, la coordinadora pedagógica le sugiere que suba los resultados 'para que el grupo no quede tan mal en el informe distrital'. ¿Cuál es la actuación profesional correcta de la maestra?",
    opciones: [
      "Aceptar la sugerencia de la coordinadora, ya que ella tiene mayor experiencia y conoce las implicaciones institucionales de resultados bajos en el informe distrital.",
      "Rechazar la modificación, registrar los resultados reales según lo evidenciado, y documentar la sugerencia recibida; si hay presión, reportarlo al director del centro o instancias superiores.",
      "Proponer aplicar una segunda evaluación de recuperación inmediata para que los estudiantes mejoren sus resultados antes de registrar la calificación final.",
      "Registrar los resultados reales, pero incluir en el informe una nota explicativa sobre las dificultades contextuales que afectaron el rendimiento del grupo.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 25 (Integridad del registro evaluativo) y Orden Departamental 22-2023 (Ética docente, Art. 6: Honestidad y transparencia en la función pública). Modificar calificaciones sin base en evidencias pedagógicas reales constituye una falta grave a la ética profesional y una violación a la integridad del sistema de evaluación. La Ordenanza 04-2023 establece que las calificaciones deben reflejar con exactitud el nivel de logro evidenciado. La opción B es la correcta porque protege la integridad del proceso, documenta la presión indebida y establece el canal de denuncia institucional correcto. La opción C puede ser válida pedagógicamente como proceso de recuperación en el trimestre siguiente, pero no justifica alterar el registro de la evaluación aplicada.",
  },
  {
    id: 577,
    categoria: "Planificación",
    pregunta:
      "Al inicio del año escolar, la maestra de 1.er grado recibe su grupo y aplica una evaluación diagnóstica. Los resultados revelan que el 60% de los estudiantes no reconoce las letras del abecedario y el 40% restante identifica solo vocales. Al elaborar su planificación anual, ¿qué ajuste curricular es pedagógicamente correcto según la Adecuación Curricular 2023?",
    opciones: [
      "Seguir la secuencia del libro de texto oficial del MINERD para 1.er grado, ya que está diseñado específicamente para el nivel inicial del proceso lector y cubre los prerrequisitos necesarios.",
      "Incorporar en las primeras unidades de planificación actividades de conciencia fonológica y reconocimiento de grafemas, tomando el diagnóstico como punto de partida para contextualizar el logro de las competencias del grado.",
      "Solicitar al orientador escolar que evalúe a los estudiantes que no reconocen el abecedario para determinar si deben ser remitidos al grado anterior o a programas de educación especial.",
      "Planificar el año normalmente y destinar los primeros 30 minutos diarios al refuerzo de lectoescritura inicial como actividad paralela al currículo del grado.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Principio de contextualización curricular y Ordenanza 01-2023, Art. 5 (La evaluación diagnóstica como base de la planificación en alfabetización inicial). La Adecuación Curricular 2023 establece que la planificación debe partir del diagnóstico del grupo para asegurar que las competencias del grado se alcancen desde donde se encuentran los estudiantes. Ignorar el diagnóstico y seguir el libro de texto (opción A) sin ajustes desconecta la enseñanza de la realidad del grupo. La opción C patologiza prematuramente una realidad de entrada que corresponde a un proceso pedagógico. La opción D segmenta el aprendizaje en lugar de integrarlo coherentemente en las competencias del nivel.",
  },
  {
    id: 578,
    categoria: "Inclusión",
    pregunta:
      "En tu aula de 6.to grado hay una estudiante con baja visión que utiliza lentes correctivos pero aún tiene dificultades para leer el texto escrito en la pizarra desde su pupitre. El centro no cuenta con material en macrotipo. Durante una evaluación, la estudiante solicita acercarse a la pizarra para copiar las instrucciones. Un colega te sugiere que la ubiques permanentemente en la primera fila. ¿Cuál es la acción más completa y correcta según la Ordenanza 05-2024?",
    opciones: [
      "Permitir que la estudiante se acerque a la pizarra durante la evaluación y ubicarla en la primera fila como medida permanente, ya que esto resuelve la barrera de acceso de manera inmediata.",
      "Ubicarla en la primera fila, solicitar al equipo de orientación la elaboración de un Plan de Adecuación Curricular Individual (PACI), gestionar la producción de material en macrotipo o en formato digital accesible, y documentar todas las adecuaciones en el expediente de la estudiante.",
      "Remitir el caso al psicólogo escolar para que evalúe el impacto emocional de la condición visual en el rendimiento académico de la estudiante antes de tomar medidas.",
      "Solicitar a los padres que gestionen con un optometrista una nueva prescripción de lentes y que provean al centro los materiales en el formato que necesita la estudiante.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 05-2024 de Educación Inclusiva, Art. 14 (Plan de Adecuación Curricular Individual – PACI), Art. 9 (Barreras de acceso físico y comunicacional) y Art. 22 (Documentación del proceso inclusivo). La Ordenanza 05-2024 establece que ante una barrera de acceso identificada, la docente debe implementar adecuaciones inmediatas (ubicación), pero además tiene la responsabilidad de formalizar el proceso a través del PACI con el equipo interdisciplinario, garantizar materiales accesibles y documentar el caso. La opción A es parcialmente correcta pero insuficiente. La opción C desvía el foco a lo emocional cuando la barrera es física y de acceso. La opción D traslada la responsabilidad institucional al hogar.",
  },
  {
    id: 579,
    categoria: "Evaluación",
    pregunta:
      "Una maestra de 3.er grado registra en el boletín la calificación L (Logrado) a todos sus estudiantes al finalizar el segundo trimestre, aunque sus notas de clase muestran que al menos 7 estudiantes no alcanzaron todos los indicadores de logro. Al ser cuestionada por la coordinadora pedagógica, la maestra argumenta que lo hizo para 'motivarlos' y evitar que se desanimen. ¿Cómo se clasifica esta conducta según la normativa docente?",
    opciones: [
      "Es una práctica pedagógica aceptable basada en la evaluación formativa y el enfoque de motivación intrínseca que promueve el currículo dominicano basado en competencias.",
      "Constituye una falta a la integridad del proceso evaluativo establecido en la Ordenanza 04-2023, ya que las calificaciones deben reflejar fielmente el nivel de logro evidenciado, y puede implicar consecuencias disciplinarias.",
      "Es una decisión válida dentro de la autonomía pedagógica del docente, siempre que esté fundamentada en el conocimiento del proceso individual de cada estudiante.",
      "Se considera aceptable si los estudiantes efectivamente alcanzaron los indicadores de forma oral aunque no lo hayan demostrado por escrito.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 25 (Integridad y veracidad del registro evaluativo) y Orden Departamental 22-2023, Art. 6 (Honestidad en el ejercicio de la función docente). La Ordenanza 04-2023 establece explícitamente que las calificaciones deben ser el reflejo exacto del nivel de logro alcanzado por el estudiante según la evidencia recogida durante el proceso. Inflar calificaciones, aunque sea con buena intención, viola la integridad evaluativa, afecta la toma de decisiones pedagógicas del centro, distorsiona los informes institucionales y puede derivar en medidas disciplinarias. La autonomía pedagógica (opción C) no faculta al docente a falsear registros oficiales.",
  },
  {
    id: 580,
    categoria: "Ética",
    pregunta:
      "Durante una reunión de padres, madres y tutores de 4.to grado, una madre te pide en público que expliques por qué su hijo recibió EP (En Proceso) en Matemáticas cuando 'otros niños con menos capacidad' obtuvieron L (Logrado). Al mismo tiempo, otro padre interrumpe para defender a la maestra. La reunión se tensa. ¿Cuál es la respuesta profesional y ética correcta según la normativa del MINERD?",
    opciones: [
      "Explicar públicamente el caso del estudiante mencionado, detallando sus resultados y comparándolos con el grupo para que la madre entienda la objetividad del proceso evaluativo.",
      "Agradecer la pregunta con calma, indicar que las calificaciones individuales son un asunto de privacidad que se aborda en una reunión particular, explicar brevemente el sistema de evaluación L-EP-I a todos los presentes, y acordar una cita privada con esa madre.",
      "Pedir al director del centro que intervenga inmediatamente para controlar la situación y responder las preguntas sobre el sistema de evaluación en su lugar.",
      "Responder a la madre explicando que las calificaciones reflejan el desempeño individual y que todos los estudiantes son evaluados con los mismos criterios, sin entrar en detalles del caso particular.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ley 136-03 (Código del Menor, Art. 15: Derecho a la privacidad del niño), Orden Departamental 22-2023 (Ética docente, manejo de conflictos y comunicación con la comunidad) y Ordenanza 04-2023 (Comunicación de resultados evaluativos). La Ley 136-03 protege la privacidad del menor, lo que prohíbe exponer públicamente el desempeño individual de un estudiante. La opción B maneja el conflicto con asertividad profesional, protege el derecho a la privacidad del niño, orienta a la comunidad sobre el sistema evaluativo y canaliza la queja individual al espacio correcto: la reunión privada. La opción A viola la privacidad del estudiante. La opción D es parcialmente correcta pero no establece el mecanismo de seguimiento privado.",
  },
  {
    id: 581,
    categoria: "Planificación",
    pregunta:
      "La maestra de 2.do grado diseña una secuencia didáctica e incluye como estrategia principal una exposición oral del docente de 40 minutos sobre el tema 'El agua y sus estados'. Su coordinadora pedagógica, durante la revisión de la planificación, señala que la estrategia predominante no se corresponde con el enfoque metodológico del currículo dominicano vigente. ¿Cuál es el fundamento de esa observación y cuál sería la corrección adecuada?",
    opciones: [
      "La coordinadora tiene razón porque las exposiciones orales están prohibidas en el nivel primario; la maestra debe sustituirla por trabajo en grupos cooperativos exclusivamente.",
      "La coordinadora tiene razón porque el currículo basado en competencias de la Adecuación Curricular 2023 establece que el estudiante debe ser el protagonista del aprendizaje; la maestra debe rediseñar la secuencia priorizando estrategias de indagación, experimentación y construcción activa del conocimiento.",
      "La coordinadora tiene razón porque 40 minutos de exposición superan el límite de 20 minutos recomendado por el MINERD para intervenciones directas del docente en el aula.",
      "La coordinadora tiene razón porque el tema del agua requiere obligatoriamente estrategias experimentales; no se pueden usar estrategias expositivas en Ciencias de la Naturaleza.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Principio pedagógico de centralidad del estudiante y Enfoque Sociocrítico e Investigativo. La Adecuación Curricular 2023 establece que el proceso de enseñanza-aprendizaje debe centrar al estudiante como sujeto activo de su propio aprendizaje, mediante estrategias que promuevan la indagación, el descubrimiento, la resolución de problemas y la construcción colaborativa del conocimiento. Una exposición de 40 minutos como estrategia principal contradice este principio. La corrección no es prohibir la exposición docente (opción A) sino equilibrarla con estrategias activas. La opción C inventa un límite de tiempo no establecido en la normativa. La opción D restringe erróneamente las estrategias a una sola área.",
  },
  {
    id: 582,
    categoria: "Alfabetización",
    pregunta:
      "En 1.er grado, durante la evaluación diagnóstica de enero, identificas que 5 estudiantes aún no han consolidado la escritura de su nombre completo con letra convencional, aunque sí lo hacen con letra de imprenta. Según la Ordenanza 01-2023 de Alfabetización Inicial, ¿qué acción pedagógica procede?",
    opciones: [
      "Enviar un informe al orientador para que determine si estos estudiantes requieren una evaluación psicopedagógica, ya que a mitad del 1.er grado deben haber consolidado la escritura de su nombre.",
      "Diseñar actividades específicas de psicomotricidad fina y escritura cursiva con los 5 estudiantes, como parte de la atención diferenciada dentro del aula, documentando el proceso en el registro de grado.",
      "Continuar con la secuencia programada y dedicar los últimos 15 minutos de cada jornada al refuerzo de escritura en cuadernos adicionales para estos estudiantes.",
      "Notificar a los padres para que practiquen la escritura del nombre en casa con materiales de apoyo provistos por la maestra.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 01-2023 de Alfabetización Inicial, Art. 8 (Atención a la diversidad en el proceso de alfabetización) y Art. 12 (Registro y seguimiento del proceso individual). La Ordenanza 01-2023 establece que la maestra de 1.er grado es la primera responsable de la intervención pedagógica diferenciada ante dificultades en el proceso de alfabetización. La remisión al orientador (opción A) es prematura si no se ha agotado la intervención pedagógica directa. La Ordenanza señala expresamente que se deben diseñar actividades diferenciadas dentro del aula y documentarlas en el registro de grado antes de derivar a otros profesionales. La opción C fragmenta el aprendizaje. La opción D transfiere la responsabilidad pedagógica al hogar.",
  },
  {
    id: 583,
    categoria: "Inclusión",
    pregunta:
      "Se integra a tu aula de 5.to grado un estudiante que es sordo y se comunica en Lengua de Señas Dominicana (LSD). El centro no cuenta con intérprete asignado. Durante la primera semana, el estudiante permanece sentado sin participar. La directora te informa que el intérprete llegará en 3 semanas. ¿Cuál es tu responsabilidad como docente de aula según la Ordenanza 05-2024 mientras no hay intérprete?",
    opciones: [
      "Esperar la llegada del intérprete antes de diseñar estrategias específicas, ya que sin este apoyo no es posible garantizar un proceso de aprendizaje efectivo para el estudiante sordo.",
      "Implementar de inmediato adecuaciones de acceso a la comunicación: uso de apoyo visual, instrucciones escritas, asignación de un compañero de apoyo, y coordinar con el equipo de orientación para documentar las barreras identificadas y el plan de atención provisional.",
      "Solicitar por escrito a la dirección del centro que el estudiante sea transferido temporalmente a una escuela con servicios de interpretación mientras se asigna el intérprete.",
      "Comunicar a los padres que el proceso de aprendizaje de su hijo estará limitado hasta que se cuente con el intérprete y solicitar su comprensión.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 05-2024 de Educación Inclusiva, Art. 7 (Eliminación de barreras para la participación), Art. 14 (Responsabilidad del docente de aula en la atención inmediata) y Ley 136-03, Art. 45 (Derecho a la educación sin discriminación). La Ordenanza 05-2024 establece que el derecho a la educación inclusiva es inmediato y que la ausencia de recursos de apoyo no exime a la docente de implementar adecuaciones de acceso disponibles. El docente de aula tiene la responsabilidad de garantizar la participación del estudiante con los medios a su alcance mientras se gestiona el apoyo especializado. Esperar (opción A) o transferir (opción C) al estudiante violan su derecho a permanecer en el aula inclusiva.",
  },
  {
    id: 584,
    categoria: "Evaluación",
    pregunta:
      "Estás evaluando la competencia lectora en 3.er grado. Diseñas una prueba escrita de comprensión lectora con preguntas de selección múltiple. Tu coordinadora pedagógica te señala que el instrumento no recoge suficientemente el nivel de competencia lectora según la Adecuación Curricular 2023. ¿Por qué es correcta esa observación y qué instrumento sería más adecuado?",
    opciones: [
      "Porque las preguntas de selección múltiple solo evalúan el nivel literal de comprensión; un instrumento más completo incluiría preguntas abiertas que evidencien los niveles inferencial y crítico-valorativo.",
      "Porque la evaluación de la competencia lectora en primaria debe realizarse exclusivamente mediante la observación directa del proceso de lectura en voz alta, no mediante pruebas escritas.",
      "Porque las pruebas escritas no son válidas para evaluar competencias en el nivel primario según el currículo por competencias del MINERD.",
      "Porque la selección múltiple solo puede usarse en el tercer ciclo de primaria (5.to y 6.to grado), no en 3.er grado.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Base Legal: Adecuación Curricular 2023 (Niveles de comprensión lectora: literal, inferencial y crítico-valorativo) y Ordenanza 04-2023, Art. 10 (Diversidad de instrumentos de evaluación). La Adecuación Curricular 2023 establece que la competencia comunicativa lectora implica tres niveles de procesamiento: literal (qué dice el texto), inferencial (qué quiere decir) y crítico-valorativo (qué pienso sobre lo que dice). Las preguntas de selección múltiple tienden a evaluar principalmente el nivel literal. Un instrumento completo para evaluar la competencia debe incluir preguntas abiertas de inferencia y valoración crítica. Las opciones B, C y D establecen restricciones que no existen en la normativa vigente.",
  },
  {
    id: 585,
    categoria: "Ética",
    pregunta:
      "Una maestra detecta que una estudiante de 3.er grado llega frecuentemente con marcas en los brazos, ropa sucia, sin merienda y con aspecto de no haber dormido bien. Cuando la maestra le pregunta en privado, la niña dice que 'a veces mi tío me jala fuerte'. La maestra conoce a la familia y sabe que son personas 'de bien' en la comunidad. ¿Cuál es la obligación legal y ética de la maestra?",
    opciones: [
      "Hablar directamente con los padres de la niña para informarles de las observaciones y darles la oportunidad de explicar la situación antes de tomar medidas institucionales.",
      "Documentar las observaciones y el relato de la niña, informar de inmediato al director del centro y, en conjunto, reportar la situación al CONANI o al Ministerio Público, sin importar el estatus social de la familia.",
      "Mantener una vigilancia cercana de la estudiante durante las próximas semanas para acumular más evidencias antes de hacer un reporte formal que podría afectar a la familia.",
      "Hablar con el orientador escolar para que él se encargue de evaluar el caso y determinar si amerita una denuncia formal, ya que es el profesional capacitado para este tipo de situaciones.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ley 136-03 (Código del Menor), Art. 48 (Obligación de denuncia de todo funcionario público que tenga conocimiento de maltrato infantil) y Art. 124 (Responsabilidad penal por omisión de denuncia). La Ley 136-03 establece que todo funcionario público, incluyendo los docentes, está obligado a denunciar ante las autoridades competentes (CONANI, Ministerio Público) cualquier situación de presunto maltrato infantil. Esta obligación es inmediata y no está condicionada al estatus social de la familia, a la acumulación de evidencias adicionales ni a la intermediación de otros profesionales. La demora o la omisión constituyen una falta legal y ética grave. El orientador puede acompañar el proceso pero no reemplaza la responsabilidad directa de la docente.",
  },
  {
    id: 586,
    categoria: "Planificación",
    pregunta:
      "Al planificar una unidad de Matemáticas para 4.to grado sobre fracciones, una maestra diseña todas las actividades con operaciones algorítmicas escritas. La supervisora distrital, durante una visita de acompañamiento, le señala que la planificación no evidencia el enfoque de resolución de problemas del currículo. ¿Qué ajuste debe hacer la maestra para alinear su planificación a la Adecuación Curricular 2023?",
    opciones: [
      "Añadir al final de cada actividad una 'situación de la vida real' como contexto introductorio, manteniendo las operaciones algorítmicas como el núcleo del aprendizaje.",
      "Rediseñar las actividades partiendo de situaciones problemáticas contextualizadas de la vida cotidiana del estudiante, en las que las fracciones emerjan como herramienta para resolver el problema, desarrollando el razonamiento matemático antes que el algoritmo.",
      "Incluir en la planificación el uso de material concreto (regletas, fichas) en la fase introductoria y luego pasar a los algoritmos escritos como cierre de cada sesión.",
      "Agregar preguntas de selección múltiple al final de la unidad que evalúen los procedimientos algorítmicos en contextos de la vida real.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Competencias Fundamentales (Competencia de Resolución de Problemas) y Diseño Curricular de Matemáticas, Nivel Primario. La Adecuación Curricular 2023 establece que el aprendizaje matemático debe partir de situaciones problemáticas auténticas y contextualizadas que tengan sentido para el estudiante, y que los algoritmos son herramientas para resolver problemas, no el objetivo en sí mismo. La opción A mantiene el algoritmo como centro y solo añade contexto decorativo. La opción C usa material concreto pero sigue subordinando todo al algoritmo. La opción D solo agrega evaluación contextualizada sin cambiar la metodología de enseñanza.",
  },
  {
    id: 587,
    categoria: "Inclusión",
    pregunta:
      "En tu aula de 2.do grado hay un niño haitiano recién llegado al país que no habla español. Sus compañeros se ríen cuando él intenta comunicarse. La maestra no habla creole. ¿Cuál es la respuesta pedagógica e institucional correcta según la Ordenanza 05-2024 y la Ley 136-03?",
    opciones: [
      "Permitir que el estudiante observe las clases sin participar activamente hasta que adquiera suficiente vocabulario en español para integrarse al proceso de aprendizaje.",
      "Diseñar estrategias de comunicación multimodal (visual, gestual, pictográfica) para incluirlo en las actividades, abordar con el grupo una reflexión sobre el respeto a la diversidad cultural, coordinar con orientación la elaboración de su PACI y gestionar con la dirección el apoyo de mediadores culturales o lingüísticos.",
      "Comunicar a los padres del niño que deben inscribirlo en un programa de español como segunda lengua antes de que pueda participar plenamente en el aula regular.",
      "Ubicar al estudiante en el nivel de 1.er grado mientras aprende español, para que la brecha lingüística no afecte su proceso de alfabetización.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 05-2024 (Educación Inclusiva, Art. 7: Eliminación de barreras lingüísticas y culturales), Ley 136-03 (Art. 45: Derecho a la educación sin discriminación por origen nacional) y Adecuación Curricular 2023 (Principio de respeto a la diversidad). La normativa establece que la barrera lingüística no puede ser obstáculo para la participación del estudiante en el aula inclusiva. La docente debe implementar estrategias multimodales de comunicación, promover un clima de respeto, documentar el caso con el PACI y gestionar los apoyos institucionales disponibles. Excluir (opción A), condicionar la participación (opción C) o rebajar de grado (opción D) violan el derecho a la educación sin discriminación.",
  },
  {
    id: 588,
    categoria: "Evaluación",
    pregunta:
      "Al finalizar el año escolar, una maestra de 6.to grado tiene un estudiante con promedio de EP (En Proceso) en tres áreas. Según la Ordenanza 04-2023, ¿cuál es el proceso correcto para determinar la promoción o retención del estudiante?",
    opciones: [
      "El estudiante debe ser retenido automáticamente, ya que tener EP en tres áreas al finalizar el año escolar implica que no alcanzó los estándares mínimos de promoción.",
      "Revisar el historial de evaluación del estudiante durante el año, convocar una reunión del equipo docente y del equipo de apoyo para analizar el caso de manera integral, aplicar evaluaciones de recuperación en las áreas con EP, y tomar la decisión de promoción o retención basándose en la evidencia acumulada y el análisis colectivo.",
      "Consultar con el director del centro y los padres del estudiante para que entre todos decidan si el niño debe ser promovido o retenido según el criterio familiar.",
      "Promover al estudiante condicionalmente al nivel siguiente con la obligación de que los padres contraten refuerzo académico privado durante el verano.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 30-34 (Proceso de promoción y retención: criterios, evaluaciones de recuperación y decisión colegiada). La Ordenanza 04-2023 establece un proceso estructurado que incluye: revisión integral del expediente, evaluaciones de recuperación previas a la decisión final, análisis colegiado del equipo docente y de apoyo, y documentación de la decisión. La retención automática (opción A) no existe como mecanismo en la normativa sin agotar el proceso de recuperación. La decisión no puede delegarse a la familia (opción C) ni condicionarse a apoyos privados (opción D), ya que es responsabilidad institucional del centro.",
  },
  {
    id: 589,
    categoria: "Alfabetización",
    pregunta:
      "Una maestra de 2.do grado detecta en diciembre que un estudiante lee en voz alta con fluidez, pero al hacerle preguntas sobre el texto, solo puede responder las que están explícitamente escritas ('copiadas del texto'). No logra inferir ni relacionar información. Según la Ordenanza 01-2023, ¿cómo se denomina esta dificultad y qué intervención corresponde?",
    opciones: [
      "El estudiante presenta dislexia comprensiva; debe ser remitido al psicólogo escolar para una evaluación diagnóstica formal antes de cualquier intervención pedagógica.",
      "El estudiante ha consolidado la decodificación pero presenta una brecha en la comprensión lectora, específicamente en el nivel inferencial; la intervención debe incluir actividades explícitas de estrategias de comprensión: predicción, inferencia, identificación de ideas principales y conexiones texto-experiencia.",
      "El estudiante está en el nivel esperado para 2.do grado, ya que la comprensión inferencial se desarrolla a partir de 3.er grado según la secuencia curricular del MINERD.",
      "La dificultad es de vocabulario; la intervención más efectiva es incrementar la lectura en voz alta en el hogar con textos de mayor complejidad léxica.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 01-2023 de Alfabetización Inicial, Sección V (Comprensión Lectora: niveles literal, inferencial y crítico) y Adecuación Curricular 2023 (Lengua Española: indicadores de comprensión lectora por ciclo). La Ordenanza 01-2023 establece que la fluidez decodificadora no garantiza la comprensión lectora y que la comprensión inferencial debe comenzar a desarrollarse desde el nivel primario inicial con intervención pedagógica explícita. Un estudiante de 2.do grado que solo comprende en el nivel literal requiere intervención pedagógica directa con estrategias de comprensión, no una remisión psicológica (opción A). La opción C es incorrecta porque el currículo dominicano incluye indicadores inferenciales desde 1.er grado.",
  },
  {
    id: 590,
    categoria: "Ética",
    pregunta:
      "Eres maestra de 5.to grado. Un colega docente te comenta en privado que ha estado usando el horario de clases para actividades personales (llamadas telefónicas prolongadas, atención de negocios particulares) y te pide que no lo reportes porque 'todos lo hacen y total los niños están tranquilos'. Al día siguiente observas directamente que los estudiantes de ese colega están solos en el aula durante 20 minutos. ¿Cuál es tu responsabilidad ética y legal?",
    opciones: [
      "Respetar la confidencialidad que te pidió el colega, ya que reportarlo podría afectar la relación profesional en el centro y generar un clima de desconfianza entre docentes.",
      "Intervenir de inmediato para garantizar la seguridad de los estudiantes que están solos, reportar la situación observada directamente al director del centro, y si la situación persiste, documentarla y escalarla a las instancias correspondientes.",
      "Hablar nuevamente con el colega en privado para que corrija su conducta antes de reportarlo, dándole la oportunidad de solucionar el problema por su cuenta.",
      "Reportar la situación al orientador escolar para que mediaticé entre el docente y la dirección del centro, preservando el anonimato del informante.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Orden Departamental 22-2023 (Ética docente, Art. 14: Responsabilidad ante situaciones que comprometen el bienestar del estudiante) y Ley 136-03 (Art. 48: Obligación de protección inmediata del menor). La situación involucra dos responsabilidades: primero, la seguridad inmediata de los estudiantes que están solos (responsabilidad inmediata de cualquier docente presente), y segundo, la denuncia institucional de una conducta que viola los deberes del docente. La Orden Departamental 22-2023 establece que la omisión ante faltas que afectan a los estudiantes también constituye una falta ética. La confidencialidad profesional (opción A) no protege conductas que ponen en riesgo a los estudiantes. La opción C dilata la protección de los niños.",
  },

  {
    id: 591,
    categoria: "Planificación",
    pregunta:
      "Eres maestra de 3.er grado y debes planificar la unidad sobre 'La comunidad y sus servicios' integrando Ciencias Sociales y Lengua Española. Al revisar tu planificación, la coordinadora pedagógica observa que las actividades propuestas son las mismas para todos los estudiantes, sin considerar los diferentes niveles de desempeño identificados en el diagnóstico inicial. Según la Adecuación Curricular 2023, ¿cuál es el ajuste que debes realizar a tu planificación?",
    opciones: [
      "Diseñar actividades de refuerzo adicionales para los estudiantes con niveles más bajos, aplicadas fuera del horario regular de clases, mientras el resto del grupo avanza con la planificación original.",
      "Incorporar en la planificación actividades diferenciadas por niveles de desempeño dentro de la misma jornada, de modo que todos los estudiantes trabajen la misma competencia con distintos grados de complejidad y tipos de apoyo, garantizando participación activa de todos.",
      "Dividir el grupo en dos subgrupos según nivel de desempeño y planificar secuencias didácticas independientes para cada uno durante las sesiones de clase.",
      "Mantener la planificación uniforme, ya que el currículo por competencias establece los mismos indicadores de logro para todos los estudiantes del mismo grado, sin distinción de niveles.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Principio de atención a la diversidad y diferenciación pedagógica; Ordenanza 05-2024, Art. 11 (Diferenciación como práctica inclusiva en el aula regular). La Adecuación Curricular 2023 establece que la diferenciación pedagógica no implica currículos distintos ni exclusión del grupo, sino la variación en el nivel de complejidad, el tipo de apoyo y los recursos utilizados para que todos los estudiantes alcancen las mismas competencias desde donde se encuentran. La opción A segrega el aprendizaje fuera del aula. La opción C fragmenta el grupo contradiciendo el principio de inclusión. La opción D ignora el diagnóstico y el principio de contextualización curricular.",
  },
  {
    id: 592,
    categoria: "Evaluación",
    pregunta:
      "Una maestra de 4.to grado aplica únicamente pruebas escritas como instrumento de evaluación durante todo el trimestre. Al final, varios estudiantes que demuestran comprensión oral, participación activa y producción de proyectos obtienen EP porque sus pruebas escritas no reflejan ese desempeño. La coordinadora señala que el proceso evaluativo presenta una limitación metodológica. ¿Cuál es el fundamento de esa observación según la Ordenanza 04-2023?",
    opciones: [
      "La Ordenanza 04-2023 prohíbe el uso de pruebas escritas como único instrumento de evaluación en el nivel primario, por lo que la maestra debe sustituirlas por portafolios y rúbricas.",
      "La Ordenanza 04-2023 establece que la evaluación debe ser integral, continua y utilizar diversidad de instrumentos que recojan evidencias del desempeño en distintos contextos y modalidades, por lo que evaluar exclusivamente mediante pruebas escritas no captura la totalidad del proceso competencial del estudiante.",
      "El problema es que las pruebas escritas no están alineadas a los indicadores de logro del grado; si se corrigen los ítems, las pruebas escritas son suficientes para evaluar todas las competencias.",
      "La Ordenanza 04-2023 exige que cada competencia sea evaluada con al menos tres instrumentos distintos por trimestre, requisito que la maestra no cumplió.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 10 (Principios de la evaluación: integridad, continuidad y diversidad de instrumentos) y Art. 13 (Tipos de instrumentos: observación, portafolio, rúbrica, prueba escrita, producción oral, entre otros). La Ordenanza 04-2023 no prohíbe las pruebas escritas ni exige un número mínimo de instrumentos por competencia, pero establece como principio la diversidad instrumental para capturar el desempeño en distintos contextos. Usar exclusivamente pruebas escritas reduce la evaluación a una sola dimensión del desempeño, afectando la validez del juicio evaluativo sobre la competencia integral del estudiante.",
  },
  {
    id: 593,
    categoria: "Alfabetización",
    pregunta:
      "Estás en 1.er grado, mes de marzo. Al evaluar la escritura espontánea de tus estudiantes, identificas que la mayoría escribe palabras con hipersegmentación (por ejemplo, escribe 'la pe lota' en lugar de 'la pelota') y omisión de letras ('plota' en lugar de 'pelota'). Según la Ordenanza 01-2023 de Alfabetización Inicial, ¿cómo debes interpretar estos resultados y qué intervención corresponde?",
    opciones: [
      "Estos errores indican un retraso significativo en el proceso de alfabetización; los estudiantes deben ser remitidos al psicopedagogo para una evaluación diagnóstica formal.",
      "Estos son errores constructivos propios del proceso de adquisición del sistema de escritura; la intervención debe centrarse en actividades de segmentación léxica, conciencia fonémica y correspondencia grafema-fonema, documentando la evolución en el registro de grado.",
      "El problema principal es de motricidad fina; la intervención debe priorizar ejercicios caligráficos y de trazado antes de avanzar en la producción escrita.",
      "Estos errores son normales y se corrigen solos con la maduración; la maestra debe esperar al segundo semestre antes de intervenir para no presionar a los estudiantes.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 01-2023 de Alfabetización Inicial, Sección IV (Escritura: niveles de conceptualización del sistema de escritura y errores constructivos). La Ordenanza 01-2023 establece, basándose en la psicogénesis de la escritura, que la hipersegmentación y la omisión de letras son errores constructivos esperados en la etapa de adquisición del código alfabético, no indicadores de patología ni de retraso. La intervención pedagógica correcta actúa sobre las habilidades de base: segmentación léxica (separación de palabras), conciencia fonémica (identificación de todos los fonemas) y correspondencia grafema-fonema, con registro sistemático del proceso evolutivo de cada estudiante.",
  },
  {
    id: 594,
    categoria: "Inclusión",
    pregunta:
      "En tu aula de 3.er grado hay un estudiante con Síndrome de Down que tiene un Plan de Adecuación Curricular Individual (PACI) vigente. Durante una actividad grupal, un compañero le dice en voz alta: 'Tú no puedes hacer eso porque eres tonto.' Varios estudiantes ríen. El estudiante con Síndrome de Down baja la cabeza y deja de participar. ¿Cuál es la respuesta pedagógica correcta e inmediata de la maestra?",
    opciones: [
      "Interrumpir la actividad, llamar la atención al estudiante que hizo el comentario en privado después de la clase para no avergonzarlo frente al grupo, y continuar con la actividad para no perder el tiempo planificado.",
      "Detener la actividad en ese momento, abordar la situación con el grupo de manera reflexiva y formativa sin señalar al responsable individualmente, reincorporar activamente al estudiante afectado en la dinámica, y documentar la incidencia para dar seguimiento con el equipo de orientación.",
      "Enviar al estudiante que hizo el comentario a la dirección del centro para que reciba la sanción disciplinaria correspondiente según el reglamento interno.",
      "Ignorar el incidente para no interrumpir la actividad y hablar con ambos estudiantes por separado al finalizar la jornada escolar.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 05-2024 (Art. 19: Clima escolar inclusivo y manejo de situaciones de discriminación), Ley 136-03 (Art. 20: Derecho del niño a la dignidad y al trato respetuoso) y Manual de Convivencia Escolar (Orden Departamental 22-2023, sección de gestión de conflictos). La normativa establece que las situaciones de discriminación o exclusión en el aula deben atenderse de manera inmediata y formativa, ya que ignorarlas o postergarlas valida implícitamente la conducta. La intervención correcta no busca la sanción punitiva inmediata sino la reflexión colectiva, la reintegración del estudiante afectado y el registro institucional del incidente. La opción C aplica sanción sin proceso formativo previo.",
  },
  {
    id: 595,
    categoria: "Ética",
    pregunta:
      "Una maestra de 6.to grado es también madre de una estudiante del mismo grado, aunque no del mismo salón. La directora le solicita que forme parte del comité que revisará y calificará las pruebas finales del grado, incluyendo las del grupo donde estudia su hija. ¿Cuál es la conducta éticamente correcta de la maestra según la Orden Departamental 22-2023?",
    opciones: [
      "Aceptar participar en el comité, ya que su hija no está en su grupo y eso garantiza la objetividad; además, su experiencia como maestra del grado es valiosa para el proceso.",
      "Comunicar a la directora el conflicto de interés que representa tener una hija en el grado cuyas pruebas va a calificar, y solicitar ser excluida del comité o, al menos, de la calificación de las pruebas del grupo de su hija, documentando la situación.",
      "Aceptar participar, pero calificar únicamente las pruebas de los grupos que no incluyen a su hija, sin necesidad de informarlo formalmente a la directora.",
      "Rechazar categóricamente cualquier participación en actividades evaluativas de todo el grado, ya que tener una hija en ese nivel implica conflicto de interés en cualquier función evaluativa.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Orden Departamental 22-2023 (Código de Ética del Servidor Público Docente, Art. 9: Conflicto de interés y transparencia en la función pública). La Orden Departamental 22-2023 establece que el funcionario docente tiene la obligación de declarar y comunicar formalmente cualquier situación que pueda constituir o aparentar un conflicto de interés, y solicitar las medidas institucionales pertinentes. La opción B es correcta porque declara el conflicto formalmente, propone una solución proporcional y documenta la situación. La opción C actúa unilateralmente sin comunicación formal. La opción D es excesiva ya que el conflicto específico se limita al grupo de su hija, no al grado completo.",
  },
  {
    id: 596,
    categoria: "Planificación",
    pregunta:
      "Al inicio del segundo trimestre, la maestra de 5.to grado recibe los resultados de la evaluación trimestral: el 70% del grupo está en EP en comprensión lectora. Al planificar el nuevo trimestre, su coordinadora le sugiere 'retomar los contenidos del primer trimestre antes de avanzar'. La maestra, sin embargo, planifica avanzar con los contenidos del segundo trimestre e incorpora estrategias de comprensión lectora de manera transversal en todas las áreas. ¿Cuál de las dos posturas es más coherente con la Adecuación Curricular 2023?",
    opciones: [
      "La coordinadora tiene razón; repetir los contenidos del primer trimestre es necesario para garantizar las bases antes de avanzar, ya que sin ellas los nuevos contenidos no podrán ser comprendidos.",
      "La postura de la maestra es más coherente con el currículo por competencias, ya que las competencias se desarrollan de manera continua y en espiral; incorporar estrategias de comprensión lectora de forma transversal en el segundo trimestre permite trabajar la brecha detectada sin interrumpir el avance curricular ni segregar el proceso de aprendizaje.",
      "Ambas posturas son igualmente válidas; la decisión debe tomarse en reunión de todo el equipo docente del grado para garantizar coherencia institucional.",
      "La maestra debe combinar ambas posturas: destinar los lunes de cada semana a repasar contenidos del primer trimestre y el resto de la semana a los nuevos contenidos del segundo trimestre.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Principio de desarrollo curricular en espiral y continuidad de las competencias; Ordenanza 04-2023, Art. 19 (Las evaluaciones de un trimestre informan la planificación del siguiente sin implicar repetición de contenidos). El currículo dominicano por competencias tiene una estructura en espiral donde las habilidades se retoman con mayor profundidad en contextos nuevos. Repetir mecánicamente los contenidos del primer trimestre (opción A) contradice este principio y puede desmotivar al grupo. El enfoque transversal de la maestra permite atender la brecha de comprensión lectora en el contexto de nuevos aprendizajes, respetando la continuidad curricular.",
  },
  {
    id: 597,
    categoria: "Evaluación",
    pregunta:
      "Una maestra de 2.do grado utiliza una rúbrica para evaluar la producción de un texto descriptivo. Al calificar, se da cuenta de que un estudiante que presenta necesidades educativas especiales con PACI vigente no alcanzó los mismos indicadores que el resto del grupo, pero sí los indicadores adaptados establecidos en su plan individual. ¿Cómo debe registrar la calificación de este estudiante según la Ordenanza 04-2023 y la Ordenanza 05-2024?",
    opciones: [
      "Registrar I (Iniciando) porque objetivamente el estudiante no alcanzó los indicadores del grado, y los indicadores adaptados no tienen validez en el registro oficial de calificaciones.",
      "Registrar la calificación correspondiente al nivel de logro alcanzado según los indicadores establecidos en su PACI, anotando en el expediente que la evaluación se realizó con adecuaciones curriculares, de modo que el registro refleje su proceso real sin compararlo con los indicadores generales del grupo.",
      "Promediarlo con el grupo general y otorgarle L (Logrado) para proteger su autoestima y evitar que se sienta excluido del proceso evaluativo.",
      "Omitir su calificación en el boletín general y enviar a los padres un informe narrativo separado elaborado por el orientador escolar.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 05-2024, Art. 16 (Evaluación diferenciada según el PACI) y Ordenanza 04-2023, Art. 26 (Registro de calificaciones con adecuaciones curriculares documentadas). Ambas ordenanzas establecen que los estudiantes con PACI deben ser evaluados según los indicadores de logro adaptados establecidos en su plan individual, y que la calificación registrada debe reflejar su desempeño real en relación con esos indicadores, con la debida anotación de que se aplicaron adecuaciones. Calificar con I sin considerar el PACI (opción A) viola el derecho a la evaluación inclusiva. Inflar la calificación (opción C) falsea el registro. Omitir del boletín (opción D) no tiene respaldo normativo.",
  },
  {
    id: 598,
    categoria: "Alfabetización",
    pregunta:
      "En 1.er grado aplicas una evaluación de fluidez lectora oral en febrero. El estudiante Lee con precisión pero a una velocidad de 12 palabras por minuto, haciendo pausas largas entre palabras. Según la Ordenanza 01-2023, ¿qué dimensión de la lectura presenta esta dificultad y cuál es la intervención más adecuada?",
    opciones: [
      "El estudiante presenta una dificultad de decodificación; la intervención debe reforzar el reconocimiento de grafemas y fonemas hasta que la correspondencia sea automatizada.",
      "El estudiante ha superado la etapa de decodificación básica pero presenta baja automaticidad lectora; la intervención debe incluir prácticas de lectura repetida, lectura en parejas y lectura coral para desarrollar la fluidez como puente hacia la comprensión.",
      "La velocidad de lectura de 12 palabras por minuto es adecuada para febrero de 1.er grado; no se requiere intervención en esta etapa del proceso.",
      "El estudiante presenta una dificultad visual que afecta la velocidad lectora; debe ser remitido a un especialista en optometría antes de continuar con el proceso de intervención pedagógica.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 01-2023 de Alfabetización Inicial, Sección VI (Fluidez lectora: precisión, velocidad y prosodia como dimensiones interdependientes). La Ordenanza 01-2023 distingue entre la etapa de decodificación (correspondencia grafema-fonema) y la etapa de automatización lectora (fluidez). Un estudiante que lee con precisión pero muy lentamente ha superado la barrera de la decodificación pero no ha automatizado el proceso, lo que consume recursos cognitivos que deberían estar disponibles para la comprensión. La intervención específica para esta dificultad es la práctica de lectura repetida y en contextos de apoyo (lectura en parejas, coral), no el refuerzo de decodificación (opción A).",
  },
  {
    id: 599,
    categoria: "Inclusión",
    pregunta:
      "La maestra de 4.to grado tiene en su aula a un estudiante que ha sido identificado con altas capacidades intelectuales. El estudiante finaliza todas las actividades en la mitad del tiempo asignado, se aburre, interrumpe a sus compañeros y en ocasiones falta el respeto a la maestra porque 'ya sabe todo'. La maestra consulta con la coordinadora qué hacer. Según la Ordenanza 05-2024, ¿cuál es el enfoque correcto?",
    opciones: [
      "Remitir al estudiante al psicólogo escolar para que maneje las conductas disruptivas, ya que el comportamiento irrespetuoso es un problema disciplinario que debe atenderse antes que cualquier ajuste académico.",
      "Diseñar actividades de enriquecimiento y ampliación curricular que representen un reto cognitivo real para el estudiante, coordinar con el equipo de orientación la elaboración de un PACI de enriquecimiento, y abordar el clima de aula desde la convivencia y el respeto mutuo.",
      "Ubicar al estudiante en un grado superior donde los contenidos representen mayor desafío, ya que sus capacidades superan claramente el nivel actual.",
      "Asignar al estudiante el rol de monitor o tutor de sus compañeros en todas las actividades, aprovechando sus capacidades para apoyar al grupo y mantenerlo ocupado.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 05-2024 de Educación Inclusiva, Art. 6 (Las altas capacidades como parte de la diversidad que requiere atención diferenciada) y Art. 14 (PACI para estudiantes con necesidades educativas especiales por altas capacidades). La Ordenanza 05-2024 reconoce explícitamente que los estudiantes con altas capacidades tienen necesidades educativas especiales que requieren adecuaciones de enriquecimiento. Las conductas disruptivas suelen ser síntoma del desajuste entre el nivel de exigencia y las capacidades del estudiante. La aceleración de grado (opción C) no siempre es pertinente y requiere un proceso formal. Usar al estudiante permanentemente como tutor (opción D) no es una adecuación curricular válida y puede generar nuevas problemáticas.",
  },
  {
    id: 600,
    categoria: "Ética",
    pregunta:
      "Una maestra de 5.to grado detecta que varios estudiantes utilizan respuestas generadas por inteligencia artificial para completar sus tareas escritas en casa. Los textos son claramente superiores al nivel de los estudiantes y son idénticos entre sí. Al confrontarlos, los estudiantes argumentan que 'la maestra también usa tecnología para preparar sus clases'. ¿Cuál es la respuesta pedagógica y ética correcta según la normativa vigente del MINERD?",
    opciones: [
      "Anular las tareas y asignar una calificación de I (Iniciando) a todos los estudiantes involucrados, aplicando el principio de integridad académica del reglamento escolar.",
      "Abordar con el grupo una reflexión sobre la diferencia entre usar tecnología como herramienta de apoyo al aprendizaje y sustituir el proceso de aprendizaje propio; rediseñar las tareas como actividades que requieran evidencia del proceso (borradores, preguntas orales, registros de proceso) y ajustar los instrumentos de evaluación para que valoren el desempeño auténtico en el aula.",
      "Prohibir el uso de tecnología en las tareas del hogar y exigir que todas las producciones escritas sean elaboradas exclusivamente con papel y lápiz.",
      "Aceptar las tareas sin penalización, ya que la normativa vigente del MINERD no contempla disposiciones específicas sobre el uso de inteligencia artificial en el nivel primario.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023 (Competencia digital y uso ético de las tecnologías como parte del perfil de egreso), Orden Departamental 22-2023 (Ética en el proceso educativo: integridad académica) y Ordenanza 04-2023, Art. 10 (La evaluación debe recoger evidencias auténticas del desempeño del estudiante). La respuesta correcta no es punitiva ni prohibicionista, sino formativa. El currículo dominicano incluye la competencia digital y el uso ético de la tecnología como parte del perfil de egreso. La maestra debe aprovechar la situación para desarrollar esta competencia y rediseñar sus instrumentos de evaluación para capturar desempeño auténtico que no pueda ser suplantado por tecnología.",
  },
  {
    id: 601,
    categoria: "Planificación",
    pregunta:
      "La maestra de 6.to grado planifica una secuencia de Matemáticas sobre estadística y probabilidad. Diseña los indicadores de logro exclusivamente en el nivel de conocimiento y comprensión (definir, identificar, calcular). Durante la revisión, la supervisora señala que los indicadores no alcanzan el nivel de complejidad cognitiva esperado para 6.to grado según la Adecuación Curricular 2023. ¿Cuál sería la reformulación correcta?",
    opciones: [
      "Agregar verbos de memorización más específicos: 'memorizar la definición de media, moda y mediana y aplicar las fórmulas correspondientes en ejercicios estructurados.'",
      "Reformular los indicadores incorporando niveles de análisis, aplicación y valoración: 'interpreta y comunica conclusiones a partir del análisis de datos estadísticos de su contexto escolar o comunitario, tomando decisiones fundamentadas en la información obtenida.'",
      "Añadir un indicador de nivel superior al final de la unidad: 'el estudiante elaborará un informe estadístico como actividad integradora del trimestre', manteniendo los indicadores originales para las clases regulares.",
      "Los indicadores de conocimiento y comprensión son adecuados para 6.to grado porque la estadística es un contenido nuevo en ese nivel; los niveles superiores se trabajan en la secundaria.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Taxonomía de niveles cognitivos en el diseño de indicadores de logro para el tercer ciclo del nivel primario (análisis, síntesis, evaluación como niveles esperados en 5.to y 6.to grado). La Adecuación Curricular 2023 establece que en el tercer ciclo del nivel primario los indicadores de logro deben alcanzar niveles cognitivos superiores: análisis, aplicación en contextos reales, síntesis y valoración crítica. Los indicadores de mera definición y cálculo (opción A) son apropiados para la introducción del concepto pero insuficientes como nivel de logro esperado. La opción C añade un indicador superior de forma aislada sin reformular la estructura de la unidad.",
  },
  {
    id: 602,
    categoria: "Evaluación",
    pregunta:
      "Al revisar el expediente de una estudiante de 5.to grado que se incorpora como nueva al centro, la maestra encuentra que la estudiante fue promovida el año anterior con L en casi todas las áreas, pero al evaluarla diagnósticamente, su desempeño corresponde a un nivel de EP en Lengua Española y Matemáticas. La maestra está confundida sobre cómo proceder. ¿Cuál es la acción correcta según la Ordenanza 04-2023?",
    opciones: [
      "Solicitar a la dirección del centro que investigue la irregularidad en el expediente del centro de origen antes de proceder con la planificación del nuevo año escolar.",
      "Tomar el diagnóstico actual como punto de partida real del proceso de enseñanza-aprendizaje, planificar atención diferenciada según los resultados, documentar el diagnóstico en el registro de grado y trabajar las brechas identificadas sin cuestionar ni invalidar el expediente anterior.",
      "Retener a la estudiante en 4.to grado porque su desempeño real no corresponde al nivel de 5.to grado y el expediente anterior no es confiable.",
      "Aplicar una segunda evaluación diagnóstica más rigurosa antes de tomar cualquier decisión, para confirmar si efectivamente existe una discrepancia entre el expediente y el desempeño actual.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 5 (La evaluación diagnóstica como instrumento de planificación) y Adecuación Curricular 2023 (Principio de contextualización: la enseñanza parte del estado real del estudiante). La responsabilidad inmediata de la maestra no es investigar la calificación de otro centro ni retener a la estudiante sin proceso, sino garantizar que el proceso de enseñanza parta de donde realmente se encuentra la estudiante según el diagnóstico actual. La discrepancia entre el expediente y el diagnóstico es información pedagógica valiosa que debe registrarse, pero no invalida la matrícula ni justifica la retención automática. Las investigaciones sobre irregularidades en otros centros son competencia de la dirección y las instancias distritales.",
  },
  {
    id: 603,
    categoria: "Inclusión",
    pregunta:
      "En tu aula de 2.do grado hay una niña cuya familia practica una religión que prohíbe celebraciones como el Día de las Madres, Navidad y cumpleaños. Cuando el centro organiza la celebración del Día de las Madres con actividades en el aula, la niña se niega a participar y llora. Sus compañeros la presionan para que participe. ¿Cuál es la respuesta pedagógica e inclusiva correcta según la Ley 136-03 y la normativa del MINERD?",
    opciones: [
      "Insistir amablemente en que la niña participe al menos en la parte artística de la celebración, ya que las actividades del Día de las Madres son parte del calendario escolar oficial y la participación es obligatoria.",
      "Respetar la decisión de la niña y de su familia, garantizar que tenga una actividad alternativa significativa durante ese período, abordar con el grupo el valor del respeto a las diferencias culturales y religiosas, y comunicar a la familia las medidas adoptadas.",
      "Solicitar a la familia que firme un acuerdo aceptando que su hija participe en todas las actividades del calendario escolar como condición de permanencia en el centro.",
      "Enviar a la niña a la biblioteca o a otro espacio del centro durante la actividad para evitar el conflicto con sus compañeros y respetar sus creencias sin interrumpir la celebración del grupo.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ley 136-03 (Art. 10: Derecho a la identidad cultural y religiosa del niño) y Ordenanza 05-2024 (Art. 7: Eliminación de barreras culturales y religiosas como dimensión de la inclusión educativa). La normativa establece que el derecho a la identidad religiosa y cultural del niño debe ser respetado en el ámbito escolar. La respuesta correcta no es la exclusión pasiva (opción D, que aísla a la niña) ni la presión para participar (opción A), sino la inclusión activa mediante una actividad alternativa con sentido pedagógico y el aprovechamiento de la situación para trabajar la competencia ciudadana del respeto a la diversidad con todo el grupo.",
  },
  {
    id: 604,
    categoria: "Ética",
    pregunta:
      "Durante una visita de acompañamiento pedagógico, la supervisora distrital le señala a la maestra de 4.to grado varias debilidades en su práctica: falta de estrategias diferenciadas, uso excesivo del libro de texto y baja participación estudiantil. La maestra, molesta, argumenta que lleva 15 años de experiencia y que 'siempre ha obtenido buenos resultados'. Al salir la supervisora, la maestra comenta con una colega que la visita fue 'una persecución'. ¿Cuál sería la actitud profesional correcta según la Orden Departamental 22-2023?",
    opciones: [
      "Solicitar formalmente a la dirección del centro que medie entre ella y la supervisora, ya que considera que las observaciones son subjetivas y no reflejan su trayectoria profesional.",
      "Recibir las observaciones como información para el desarrollo profesional, analizar con objetividad las debilidades señaladas, diseñar un plan de mejora basado en esas observaciones y mantener una actitud de apertura y respeto hacia los procesos de acompañamiento pedagógico como parte de la cultura de mejora continua.",
      "Responder por escrito a la supervisora rebatiendo cada observación con ejemplos de sus prácticas exitosas, para que quede documentada su posición antes de que el informe sea enviado al distrito.",
      "Continuar con su práctica habitual, ya que sus resultados de promoción hablan por sí solos y el acompañamiento pedagógico no tiene carácter vinculante sobre las decisiones metodológicas del docente.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Orden Departamental 22-2023 (Código de Ética Docente, Art. 5: Compromiso con el desarrollo profesional continuo; Art. 12: Apertura al acompañamiento y la supervisión como parte del ejercicio ético de la docencia). La normativa establece que la disposición para el aprendizaje profesional continuo y la apertura a la retroalimentación son componentes éticos del ejercicio docente, no amenazas a la autonomía profesional. La experiencia no es garantía automática de buena práctica, y los procesos de acompañamiento pedagógico son mecanismos institucionales de mejora. Defenderse con resultados de promoción (opción D) confunde cantidad con calidad del proceso educativo.",
  },
  {
    id: 605,
    categoria: "Planificación",
    pregunta:
      "La maestra de 1.er grado diseña una secuencia didáctica de Lengua Española para la primera semana del año escolar. Planifica directamente con el texto escrito, dictados y planas de letras. La coordinadora observa la planificación y señala que no se evidencia la fase oral del proceso de alfabetización inicial. ¿Cuál es el fundamento pedagógico de esa observación según la Ordenanza 01-2023?",
    opciones: [
      "La coordinadora tiene razón porque los dictados y planas están prohibidos en 1.er grado según la Ordenanza 01-2023, ya que generan ansiedad en los estudiantes.",
      "La coordinadora tiene razón porque la Ordenanza 01-2023 establece que el proceso de alfabetización inicial debe comenzar por el desarrollo de la oralidad y la conciencia fonológica como base para el aprendizaje del código escrito; iniciar directamente con texto escrito omite la fase oral que es fundamento del proceso lector y escritor.",
      "La observación es incorrecta porque en 1.er grado se supone que los estudiantes ya dominan la oralidad desde el nivel inicial, por lo que la planificación puede comenzar directamente con el código escrito.",
      "La coordinadora tiene razón porque el primer mes de 1.er grado debe dedicarse exclusivamente a actividades de aprestamiento motor y grafomotricidad antes de cualquier acercamiento al texto escrito.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 01-2023 de Alfabetización Inicial, Sección II (La oralidad como base del proceso de alfabetización) y Sección III (Conciencia fonológica como prerrequisito del código escrito). La Ordenanza 01-2023 establece una secuencia explícita del proceso de alfabetización que comienza con el fortalecimiento de la oralidad (vocabulario, narración, descripción), avanza hacia la conciencia fonológica (reconocimiento de sonidos, rimas, sílabas, fonemas) y luego aborda la correspondencia grafema-fonema y la producción escrita. Omitir la fase oral desconecta el código escrito del sistema lingüístico oral que el estudiante ya posee, dificultando la comprensión del principio alfabético.",
  },
  {
    id: 606,
    categoria: "Evaluación",
    pregunta:
      "Al finalizar el primer trimestre, la maestra de 3.er grado convoca a una reunión de padres para entregar boletines. Un padre se niega a firmar el boletín de su hijo argumentando que las calificaciones son injustas y que su hijo 'sabe más de lo que dice el papel'. Solicita que se cambie la calificación de EP a L en Matemáticas. ¿Cuál es la respuesta institucional y ética correcta de la maestra?",
    opciones: [
      "Explicar al padre el proceso evaluativo, mostrarle las evidencias del desempeño del estudiante registradas durante el trimestre, ofrecerle información sobre cómo el niño puede mejorar en el próximo trimestre, y dejar constancia escrita de que el padre se negó a firmar.",
      "Acceder parcialmente a la petición del padre, modificando la calificación a EP+ para indicar que el estudiante está cerca de lograr el indicador, y así evitar el conflicto.",
      "Llamar al director del centro para que intervenga de inmediato y asuma la responsabilidad de explicar al padre el sistema de evaluación.",
      "Explicar al padre que las calificaciones son definitivas una vez registradas y que no puede hacer nada al respecto, pero que puede presentar una queja formal ante el distrito educativo.",
    ],
    respuestaCorrecta: 0,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 28 (Comunicación de resultados a la familia: transparencia y sustentación en evidencias) y Orden Departamental 22-2023 (Ética en la comunicación con la comunidad educativa). La Ordenanza 04-2023 establece que la maestra debe ser capaz de sustentar cualquier calificación con las evidencias recogidas durante el proceso evaluativo. La respuesta correcta combina transparencia (mostrar evidencias), orientación pedagógica (próximos pasos para mejorar) y documentación institucional (constancia de negativa a firmar). Modificar calificaciones sin base en evidencias (opción B) viola la integridad evaluativa. Transferir inmediatamente al director (opción C) elude la responsabilidad profesional directa de la maestra.",
  },
  {
    id: 607,
    categoria: "Inclusión",
    pregunta:
      "Una maestra de 5.to grado recibe a un estudiante que estuvo hospitalizado durante 6 semanas por una enfermedad grave y se reintegra al aula visiblemente delgado, cansado y emocionalmente frágil. Sus compañeros le hacen preguntas incómodas sobre su enfermedad. La maestra debe tomar decisiones inmediatas sobre su reintegración académica. ¿Cuál es la respuesta más completa según la Ley 136-03 y la Ordenanza 05-2024?",
    opciones: [
      "Poner al estudiante al día con todos los contenidos perdidos durante las 6 semanas mediante un plan de recuperación académica intensivo para que no se atrase respecto al grupo.",
      "Coordinar con el equipo de orientación una reintegración gradual que priorice primero el bienestar emocional y físico del estudiante, diseñar un plan de nivelación flexible, trabajar con el grupo la empatía y el respeto a la privacidad, y comunicar a la familia las estrategias adoptadas.",
      "Solicitar a la familia un certificado médico que especifique las limitaciones físicas del estudiante antes de incorporarlo plenamente a las actividades del aula.",
      "Tratar al estudiante exactamente igual que al resto del grupo para evitar que se sienta diferente o señalado por su condición.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ley 136-03 (Art. 28: Derecho del niño a la protección de su salud y a la reintegración social plena) y Ordenanza 05-2024 (Art. 8: Barreras emocionales y de salud como dimensión de la inclusión educativa; Art. 17: Planes de reintegración flexible). La normativa reconoce que una reintegración tras una enfermedad grave requiere atención integral que contemple primero el bienestar emocional como condición para el aprendizaje académico. La opción A prioriza lo académico sobre el bienestar. La opción C burocratiza la reintegración. La opción D ignora las necesidades específicas del estudiante bajo una premisa de igualdad que en este contexto produce inequidad.",
  },
  {
    id: 608,
    categoria: "Alfabetización",
    pregunta:
      "Una maestra de 1.er grado decide organizar su proceso de alfabetización inicial usando exclusivamente el método global (reconocimiento de palabras completas por su forma visual). Al mes, varios estudiantes pueden 'leer' las palabras trabajadas pero no pueden descifrar palabras nuevas. La coordinadora pedagógica señala una limitación metodológica. ¿Cuál es el fundamento de esa observación según la Ordenanza 01-2023?",
    opciones: [
      "El método global está prohibido en las escuelas del MINERD; la maestra debe usar exclusivamente el método fonético-sintético establecido en la Ordenanza 01-2023.",
      "La Ordenanza 01-2023 establece que el proceso de alfabetización inicial debe desarrollar en el estudiante la comprensión del principio alfabético, es decir, la capacidad de descifrar palabras nuevas a partir del conocimiento de las correspondencias grafema-fonema; un método que no desarrolla esta capacidad de decodificación independiente limita la autonomía lectora del estudiante.",
      "El problema no es el método sino la selección de palabras; si se usan palabras con mayor frecuencia de aparición en textos del entorno, los estudiantes podrán generalizar el reconocimiento a palabras nuevas.",
      "El método global es adecuado para la primera etapa; la coordinadora debe esperar al segundo trimestre antes de evaluar sus resultados, ya que el proceso de generalización toma tiempo.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 01-2023 de Alfabetización Inicial, Sección III (El principio alfabético como meta central del proceso de alfabetización inicial: comprensión de la relación sistemática entre grafemas y fonemas). La Ordenanza 01-2023 establece que el objetivo central del proceso de alfabetización no es el reconocimiento memorístico de palabras específicas sino la comprensión del principio alfabético: que las letras representan sonidos y que esta relación es sistemática y generalizable. Un método que no desarrolla esta comprensión impide al estudiante descifrar palabras nuevas de manera autónoma, lo que constituye la base de la lectura independiente. La normativa no prohíbe el método global pero señala la necesidad de que el proceso incluya el desarrollo del principio alfabético.",
  },
  {
    id: 609,
    categoria: "Ética",
    pregunta:
      "Una maestra de 6.to grado descubre que en las redes sociales existe un grupo privado de padres donde circulan mensajes que cuestionan su capacidad profesional, comparten capturas de pantalla de comunicaciones privadas con ella y organizan una queja colectiva ante el distrito. La maestra está muy afectada emocionalmente. ¿Cuál es la respuesta profesional y ética correcta según la normativa del MINERD?",
    opciones: [
      "Responder en el mismo grupo de redes sociales aclarando su posición y defendiendo su trabajo con argumentos profesionales para que los padres tengan su versión de los hechos.",
      "Documentar las situaciones de las que tiene conocimiento, comunicar el caso a la dirección del centro para que active los canales institucionales de mediación, abstenerse de responder en redes sociales, y si corresponde, buscar orientación sobre los mecanismos de protección del servidor público ante situaciones de hostigamiento.",
      "Solicitar a la dirección que convoque una reunión de emergencia con todos los padres del grupo para aclarar la situación antes de que la queja llegue al distrito.",
      "Ignorar completamente la situación en redes sociales y continuar con su trabajo normalmente, ya que los comentarios en redes no tienen validez oficial.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Orden Departamental 22-2023 (Código de Ética del Servidor Público Docente, Art. 16: Manejo de conflictos con la comunidad educativa; Art. 18: Uso responsable de medios digitales y redes sociales en el ámbito educativo) y normativa sobre protección del servidor público. La respuesta correcta combina documentación (evidencia institucional), canalización institucional (la dirección activa los mecanismos formales), prudencia comunicativa (no responder en redes sociales donde el conflicto escalaría) y autoprotección legal del servidor público. Responder en redes (opción A) escala el conflicto al ámbito público. Ignorar (opción D) puede permitir que la situación se agrave sin registro institucional.",
  },
  {
    id: 610,
    categoria: "Planificación",
    pregunta:
      "La maestra de 4.to grado planifica todas sus clases de Ciencias Sociales usando únicamente el libro de texto como recurso. La supervisora, durante una visita, le señala que la planificación no refleja el enfoque investigativo del currículo dominicano. Al revisar la Adecuación Curricular 2023, ¿cuál es el argumento correcto de la supervisora y qué cambio debe hacer la maestra?",
    opciones: [
      "La supervisora tiene razón porque el libro de texto está desactualizado; la maestra debe sustituirlo por recursos digitales y materiales impresos de otras fuentes más actualizadas.",
      "La supervisora tiene razón porque la Adecuación Curricular 2023 establece que las Ciencias Sociales deben abordarse desde un enfoque investigativo y crítico, donde el estudiante formule preguntas, explore fuentes diversas, contraste información y construya su propio conocimiento sobre la realidad social; el libro de texto puede ser un recurso entre varios, pero no el único.",
      "La observación de la supervisora no tiene fundamento porque el libro de texto del MINERD fue diseñado precisamente para implementar el enfoque por competencias del currículo dominicano.",
      "La supervisora tiene razón porque el enfoque investigativo exige obligatoriamente el uso de trabajo de campo y entrevistas a la comunidad en todas las unidades de Ciencias Sociales.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Enfoque Sociocrítico e Investigativo de las Ciencias Sociales y Principio de diversidad de fuentes y recursos para el aprendizaje. La Adecuación Curricular 2023 establece que el aprendizaje de las Ciencias Sociales debe desarrollar en el estudiante la capacidad de explorar, cuestionar, analizar fuentes diversas y construir comprensión crítica de la realidad social. El libro de texto es un recurso válido pero insuficiente como único medio, ya que su uso exclusivo reduce el proceso a la reproducción de información en lugar de la investigación y el pensamiento crítico. La opción D impone una metodología específica (trabajo de campo obligatorio) que no está prescrita de manera excluyente en la normativa.",
  },

   {
    id: 611,
    categoria: "Evaluación",
    pregunta:
      "Eres maestra de 4.to grado. Al cerrar el segundo trimestre, revisas tu registro de grado y constatas que tienes evidencias de evaluación formativa de 22 de tus 30 estudiantes. Para los 8 restantes solo tienes registradas asistencias y participación oral sin descripción cualitativa. La coordinadora te presiona para entregar los boletines ese mismo día. Uno de los 8 estudiantes con evidencias incompletas es hijo de un miembro de la junta de padres que tiene influencia en el centro. Ante esta situación, ¿cuál es la actuación profesional correcta según la Ordenanza 04-2023?",
    opciones: [
      "Completar el boletín de los 8 estudiantes asignando EP de manera general, ya que la ausencia de evidencias es precisamente un indicador de que no han logrado los indicadores esperados.",
      "Solicitar a la coordinadora una extensión del plazo, aunque sea de un día, para completar las evidencias faltantes mediante una evaluación formativa rápida de los 8 estudiantes, y registrar el resultado en el instrumento correspondiente antes de emitir cualquier calificación, sin distinción por el estatus familiar de ningún estudiante.",
      "Emitir el boletín completo basándote en la participación oral registrada para los 8 estudiantes, ya que la participación es una forma válida de evidencia evaluativa reconocida por la Ordenanza 04-2023.",
      "Emitir el boletín de los 22 estudiantes con evidencias completas y solicitar autorización a la dirección para diferir la entrega del boletín de los 8 estudiantes hasta completar el proceso.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 13 (Diversidad de instrumentos) y Art. 22 (El registro de grado debe contener evidencias específicas de cada indicador evaluado, no solo registros de asistencia o participación genérica); Orden Departamental 22-2023, Art. 9 (Imparcialidad: igual trato independientemente del estatus social de la familia). El dilema combina dos presiones: la urgencia institucional y la presión social implícita del padre influyente. La respuesta correcta resuelve ambos problemas con integridad: gestiona el plazo para completar evidencias reales y trata a todos los estudiantes con el mismo criterio. La opción A asigna calificación sin proceso. La opción C infla el valor de una evidencia insuficiente. La opción D genera un boletín parcial que puede interpretarse como trato diferenciado.",
  },
  {
    id: 612,
    categoria: "Planificación",
    pregunta:
      "Eres maestra de 5.to grado. Tu planificación anual fue aprobada por la coordinadora en agosto. En noviembre, una evaluación distrital revela que tu grupo está significativamente por debajo del promedio en comprensión lectora inferencial respecto a los otros centros del distrito. Tu coordinadora te indica que debes 'acelerar los contenidos pendientes del segundo trimestre para recuperar el tiempo perdido'. Sin embargo, tú identificas que la causa raíz es una brecha en la comprensión inferencial que no se resolverá acelerando contenidos. ¿Cuál es la decisión pedagógica más correcta según la Adecuación Curricular 2023?",
    opciones: [
      "Seguir la instrucción de la coordinadora y acelerar los contenidos, ya que ella tiene la autoridad institucional para orientar el proceso pedagógico y hay que cumplir con la planificación aprobada.",
      "Documentar por escrito tu análisis diagnóstico de la brecha identificada, proponer a la coordinadora una reestructuración de la planificación que priorice el desarrollo de estrategias explícitas de comprensión inferencial de manera transversal en todas las áreas, sustentando la decisión en la Adecuación Curricular 2023 y en los resultados de la evaluación distrital.",
      "Implementar tu propuesta de forma autónoma sin comunicarla a la coordinadora, ya que como profesional tienes la autonomía pedagógica para ajustar tu planificación según el diagnóstico de tu grupo.",
      "Solicitar al psicopedagogo del centro una evaluación grupal para determinar si la brecha responde a dificultades de aprendizaje individualizadas antes de tomar cualquier decisión sobre la planificación.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Principio de flexibilidad curricular y pertinencia pedagógica; Ordenanza 04-2023, Art. 5 (La evaluación diagnóstica orienta la planificación) y Art. 19 (Ajuste de la planificación basado en evidencia). La Adecuación Curricular 2023 establece que la planificación es un instrumento flexible que debe responder a la realidad del grupo, no un contrato rígido. La respuesta correcta ejerce liderazgo pedagógico: documenta la evidencia, sustenta la propuesta en normativa y la canaliza institucionalmente. La opción A subordina el criterio pedagógico a la jerarquía. La opción C ejerce autonomía sin rendición de cuentas institucional. La opción D patologiza una brecha pedagógica que primero debe ser atendida didácticamente.",
  },
  {
    id: 613,
    categoria: "Ética",
    pregunta:
      "Eres maestra de 3.er grado. Durante una actividad de escritura libre, una estudiante entrega un texto donde describe detalladamente situaciones de violencia entre adultos en su hogar, incluyendo frases como 'cuando papi le pega a mami yo me escondo debajo de la cama'. Al leerlo, reconoces que la familia tiene buena reputación en la comunidad y el padre es amigo del director del centro. Al consultar con una colega de confianza, ella te dice: 'Eso es cosa de familia, no te metas.' ¿Cuál es tu obligación profesional y legal?",
    opciones: [
      "Hablar en privado con la estudiante para confirmar si lo que escribió es real o es producto de su imaginación creativa, antes de tomar cualquier medida institucional que pueda afectar a la familia.",
      "Documentar el texto como evidencia, reportar la situación de inmediato al orientador y al director del centro activando el protocolo de protección establecido, independientemente de la reputación de la familia o la relación del padre con el director, y si el director no actúa, escalar al distrito.",
      "Guardar el texto en el expediente de la estudiante y hacer un seguimiento cercano durante las próximas semanas para determinar si hay más señales de alerta antes de activar el protocolo de denuncia.",
      "Hablar con la madre de la estudiante de manera reservada para informarle que su hija escribió ese texto y preguntarle si necesita apoyo, sin involucrar al padre ni a la dirección del centro.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ley 136-03, Art. 48 (Obligación de denuncia inmediata ante señales de violencia doméstica que afecten al menor, sin condicionarla a confirmación previa) y Art. 125 (Responsabilidad penal por omisión). La producción escrita espontánea de un niño que describe violencia doméstica es una señal de alerta que activa el protocolo de protección sin necesidad de confirmación previa ni investigación por parte del docente, cuya responsabilidad es reportar, no investigar. El estatus social de la familia, la relación del padre con el director o el consejo del colega no modifican esta obligación legal. Si el director no actúa, la maestra tiene la obligación de escalar al distrito o al CONANI directamente para no incurrir en omisión.",
  },
  {
    id: 614,
    categoria: "Inclusión",
    pregunta:
      "En tu aula de 6.to grado hay una estudiante con diagnóstico de Trastorno del Espectro Autista (TEA) nivel 1, con PACI vigente. Su adecuación establece instrucciones escritas paso a paso y anticipación de cambios en la rutina. Un día, por una actividad especial del centro, el horario cambia sin previo aviso. La estudiante entra en crisis: se tapa los oídos, se agita y comienza a gritar. Sus compañeros se alarman. Tienes 28 estudiantes más en el aula. ¿Cuál es tu respuesta inmediata y correcta según la Ordenanza 05-2024?",
    opciones: [
      "Pedir a un estudiante de confianza que llame al orientador mientras tú intentas calmar a la estudiante con palabras y contacto físico para que sus compañeros vean que la situación está bajo control.",
      "Mantener la calma, reducir los estímulos sensoriales del ambiente de inmediato (bajar el volumen, crear espacio), comunicarte con la estudiante usando el sistema de comunicación establecido en su PACI, asignar una actividad autónoma al resto del grupo, y activar el apoyo del equipo especializado del centro sin abandonar el aula.",
      "Solicitar a la estudiante con voz firme pero calmada que salga al pasillo con un acompañante para que sus compañeros puedan continuar la clase sin interrupciones.",
      "Suspender la actividad especial para toda la clase y retomar la rutina habitual, ya que la estabilidad de la rutina es la medida más efectiva para manejar la crisis de la estudiante con TEA.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 05-2024, Art. 14 (El PACI como guía de actuación en situaciones de crisis) y Art. 21 (Responsabilidad del docente de aula en la gestión de situaciones de crisis en el contexto inclusivo). La Ordenanza 05-2024 establece que el PACI debe incluir protocolos de actuación ante crisis y que el docente de aula es el primer respondiente. La respuesta correcta actúa simultáneamente sobre el ambiente (reducción de estímulos), la comunicación con la estudiante (usando su sistema preferente) y el grupo (actividad autónoma), sin excluir a la estudiante del aula. El contacto físico no solicitado (opción A) puede escalar la crisis en TEA. Sacar a la estudiante (opción C) puede interpretarse como exclusión. La opción D altera la dinámica de toda la clase de manera desproporcionada.",
  },
  {
    id: 615,
    categoria: "Evaluación",
    pregunta:
      "Eres maestra de 2.do grado. Diseñas una rúbrica para evaluar la producción de textos narrativos. Al aplicarla, te das cuenta de que los criterios que definiste son tan generales ('el texto tiene inicio, desarrollo y cierre') que prácticamente todos los estudiantes obtienen L aunque sus producciones son muy heterogéneas en calidad. Tu coordinadora te señala que la rúbrica tiene un problema de validez. ¿Cuál es el problema técnico identificado y cómo debe corregirse según la Ordenanza 04-2023?",
    opciones: [
      "El problema es que la rúbrica tiene muy pocos criterios; debe ampliarse a al menos 8 criterios de evaluación para capturar mejor la complejidad del texto narrativo.",
      "El problema es que los descriptores de la rúbrica no distinguen con claridad los niveles de desempeño L, EP e I para cada criterio, lo que hace que el instrumento no discrimine la calidad del desempeño; los descriptores deben ser reformulados con indicadores observables y graduados que describan concretamente qué hace un estudiante en cada nivel.",
      "El problema es que la rúbrica está midiendo estructura textual cuando debería medir comprensión lectora, que es la competencia base para la producción escrita en 2.do grado.",
      "El problema es que una rúbrica no es el instrumento adecuado para evaluar producción textual en 2.do grado; debe sustituirse por una lista de cotejo con criterios de sí o no.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 14 (Validez y confiabilidad de los instrumentos de evaluación) y Art. 13 (Descripción de los niveles L, EP e I: deben reflejar diferencias cualitativas observables en el desempeño). El problema técnico identificado es de discriminación entre niveles: una rúbrica cuyos descriptores son tan generales que todos los estudiantes obtienen el mismo resultado no cumple su función de diferenciar niveles de desempeño. La solución no es agregar criterios (opción A) sino profundizar la especificidad de los descriptores para que cada nivel describa con precisión observable qué hace el estudiante en L, EP e I. Las opciones C y D desvían el problema hacia el instrumento o la competencia equivocada.",
  },
  {
    id: 616,
    categoria: "Alfabetización",
    pregunta:
      "Eres maestra de 1.er grado, tercer trimestre. Tienes tres estudiantes que aún no han logrado la correspondencia grafema-fonema de todas las consonantes, mientras el resto del grupo ya lee y escribe palabras y oraciones simples. Has implementado actividades diferenciadas durante todo el año sin los avances esperados. La coordinadora te pregunta si debes retenerlos. Antes de responder, ¿qué proceso establece la normativa que debes haber completado según la Ordenanza 01-2023 y la Ordenanza 04-2023?",
    opciones: [
      "Haber aplicado al menos tres pruebas de velocidad lectora durante el año para documentar cuantitativamente la progresión o ausencia de avance de los tres estudiantes.",
      "Haber documentado en el registro de grado el proceso de intervención diferenciada con sus resultados, haber activado la ruta de atención interdisciplinaria (orientador, psicopedagogo) cuando la intervención pedagógica no produjo avance, haber comunicado a las familias el proceso con evidencias, y haber agotado las instancias de apoyo antes de considerar la retención como última medida.",
      "Haber solicitado formalmente al distrito la asignación de un maestro de apoyo para estos tres estudiantes durante el año escolar, ya que sin ese apoyo especializado la maestra de aula no puede ser responsabilizada del resultado.",
      "Haber realizado una reunión con los padres de los tres estudiantes al inicio del tercer trimestre para informarles sobre la posibilidad de retención, obteniendo su consentimiento por escrito antes de proceder.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 01-2023, Sección VIII (Ruta de atención para estudiantes con dificultades persistentes en alfabetización inicial) y Ordenanza 04-2023, Art. 31-33 (La retención como medida excepcional que requiere agotamiento de instancias previas: intervención pedagógica documentada, evaluación interdisciplinaria y comunicación familiar). Ambas ordenanzas establecen que la retención es la última medida de un proceso que debe haber incluido: intervención pedagógica diferenciada con registro sistemático, activación del equipo de apoyo cuando la intervención del aula no es suficiente, y comunicación continua con la familia. La retención sin este proceso previo no tiene sustento normativo y puede implicar responsabilidades para la docente y el centro.",
  },
  {
    id: 617,
    categoria: "Planificación",
    pregunta:
      "Eres maestra de 3.er grado. Al planificar la unidad de Educación Artística, incorporas únicamente actividades de dibujo y coloreado con los mismos materiales para todos los estudiantes. La supervisora, durante el acompañamiento, señala que la planificación no evidencia el enfoque competencial del área según la Adecuación Curricular 2023. Adicionalmente, observa que no hay integración curricular con otras áreas. ¿Cuál de las siguientes respuestas refleja la comprensión correcta del enfoque de Educación Artística en el currículo dominicano vigente?",
    opciones: [
      "La Educación Artística en primaria tiene como objetivo principal el desarrollo de la motricidad fina, por lo que las actividades de dibujo y coloreado son pertinentes; la integración con otras áreas es optativa y depende de la creatividad de la maestra.",
      "La Adecuación Curricular 2023 concibe la Educación Artística como un área de desarrollo de competencias expresivas, creativas, críticas y culturales; la planificación debe incluir actividades que promuevan la creación original, la apreciación crítica, la exploración de lenguajes artísticos diversos y su integración con competencias de otras áreas como Lengua Española y Ciencias Sociales.",
      "La observación de la supervisora sobre la integración curricular no tiene sustento, ya que la Adecuación Curricular 2023 establece que cada área debe planificarse de manera autónoma para garantizar el desarrollo específico de sus competencias.",
      "La maestra debe añadir a la planificación una actividad de apreciación musical y otra de teatro para cubrir los distintos lenguajes artísticos exigidos por el currículo, manteniendo el dibujo y el coloreado como actividades base.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Diseño Curricular de Educación Artística, Nivel Primario (Competencias: expresión creativa, apreciación estética, identidad cultural) y Principio de Interdisciplinariedad como eje transversal. La Adecuación Curricular 2023 establece que la Educación Artística no es una asignatura de relleno o de desarrollo psicomotor, sino un área con competencias específicas que incluyen la creación original, la apreciación crítica de obras y la vinculación con la identidad cultural. La integración curricular no es optativa sino un principio metodológico del currículo dominicano. Añadir actividades aisladas (opción D) no resuelve el problema de enfoque si la lógica de la planificación sigue siendo reproductiva.",
  },
  {
    id: 618,
    categoria: "Ética",
    pregunta:
      "Eres maestra de 5.to grado. Una colega del mismo grado comparte contigo su planificación trimestral completa y te pide que la uses en tu aula 'porque total los dos damos el mismo grado y así nos ahorramos trabajo'. Aceptas y presentas esa planificación como tuya a la coordinadora, sin adaptarla al diagnóstico de tu grupo. Al cabo de un mes, los resultados de tu grupo son notoriamente más bajos que los de tu colega porque las estrategias no responden a las necesidades de tu grupo. ¿Qué falta ética y pedagógica cometiste según la Orden Departamental 22-2023 y la Adecuación Curricular 2023?",
    opciones: [
      "Ninguna falta significativa, ya que compartir planificaciones entre docentes del mismo grado es una práctica colaborativa que el MINERD fomenta; el problema fue únicamente no adaptar las estrategias.",
      "Cometiste una falta de probidad profesional al presentar como propia una planificación ajena, y una falta pedagógica al no contextualizar la planificación al diagnóstico de tu grupo, vulnerando el principio de planificación pertinente establecido en la Adecuación Curricular 2023 y el principio de honestidad de la Orden Departamental 22-2023.",
      "La única falta fue pedagógica: no adaptar las estrategias al diagnóstico de tu grupo; presentar la planificación como propia no constituye una falta ética si la colega dio su consentimiento.",
      "La falta es de tu colega, quien debió advertirte que su planificación no funcionaría en un grupo diferente; tu responsabilidad queda limitada por la información que tenías disponible al momento de aceptar.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Orden Departamental 22-2023 (Art. 6: Honestidad e integridad en el ejercicio profesional; Art. 7: Responsabilidad personal sobre los productos del ejercicio docente) y Adecuación Curricular 2023 (Principio de contextualización: toda planificación debe partir del diagnóstico específico del grupo). La normativa establece dos faltas concurrentes: la ética (presentar como propio un trabajo ajeno, independientemente del consentimiento de la colega, ya que la responsabilidad profesional sobre la planificación es individual) y la pedagógica (una planificación sin contextualización diagnóstica viola el principio de pertinencia curricular). El resultado académico bajo es la consecuencia natural y evidente de la segunda falta.",
  },
  {
    id: 619,
    categoria: "Inclusión",
    pregunta:
      "En tu aula de 4.to grado hay tres estudiantes en situación de pobreza extrema que frecuentemente no tienen materiales escolares (lápiz, cuaderno, libro de texto). En repetidas ocasiones no pueden participar en actividades que requieren esos materiales. La maestra anterior los calificaba con I argumentando 'falta de responsabilidad'. Tú identificas que el problema es de acceso, no de voluntad. ¿Cuál es tu respuesta pedagógica, institucional y ética correcta según la Ley 136-03 y la Ordenanza 05-2024?",
    opciones: [
      "Prestarles materiales de tu propio dinero cuando sea posible, y cuando no sea posible, asignarles las mismas calificaciones que al resto ya que las normas deben aplicarse por igual para todos los estudiantes.",
      "Garantizar el acceso inmediato a materiales compartidos en el aula como medida de corto plazo, reportar la situación a la dirección para activar los mecanismos institucionales de apoyo social (gestión ante el MINERD, programas de asistencia, coordinación con trabajo social), no penalizar evaluativamente la ausencia de materiales, y documentar las barreras de acceso en el expediente de cada estudiante.",
      "Comunicar a los padres que la falta de materiales afecta las calificaciones de sus hijos, para motivar a la familia a buscar los recursos necesarios para cumplir con los requisitos escolares.",
      "Solicitar al director que estos tres estudiantes sean trasladados a un centro con programa de dotación de útiles escolares donde puedan recibir la atención que necesitan.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ley 136-03 (Art. 45: Derecho a la educación en condiciones de igualdad; Art. 56: Obligación del Estado de eliminar barreras socioeconómicas al acceso educativo) y Ordenanza 05-2024 (Art. 9: Las barreras socioeconómicas como dimensión de la exclusión educativa que debe ser eliminada institucionalmente). Penalizar evaluativamente una condición de pobreza es una doble exclusión: primero el contexto excluye al estudiante de los recursos, y luego la escuela lo excluye del reconocimiento de su aprendizaje. La respuesta correcta actúa en dos planos: el pedagógico inmediato (acceso a materiales en el aula) y el institucional (activar los mecanismos de apoyo social del sistema). Responsabilizar a la familia (opción C) desconoce la realidad estructural de la pobreza.",
  },
  {
    id: 620,
    categoria: "Evaluación",
    pregunta:
      "Eres maestra de 6.to grado. Diseñas una prueba trimestral de Ciencias de la Naturaleza. Al revisarla, la supervisora identifica que el 90% de los ítems evalúan memorización de conceptos (definir, mencionar, completar) y solo el 10% evalúan aplicación. Te señala que el instrumento no está alineado al nivel cognitivo esperado para el tercer ciclo de primaria según la Adecuación Curricular 2023. ¿Cuál es la distribución de niveles cognitivos que debería reflejar una prueba alineada al currículo para 6.to grado?",
    opciones: [
      "La supervisora exagera; en Ciencias de la Naturaleza es necesario que los estudiantes dominen primero los conceptos básicos mediante memorización antes de poder aplicarlos, por lo que una distribución 70% conocimiento y 30% aplicación es pedagógicamente justificable.",
      "Para 6.to grado, el instrumento debe reflejar una distribución que privilegie los niveles superiores del pensamiento: análisis de situaciones, aplicación de conceptos en contextos nuevos, interpretación de datos e inferencia de conclusiones, relegando la memorización pura a una proporción mínima coherente con el enfoque competencial del currículo.",
      "La distribución correcta según el MINERD es exactamente 33% conocimiento, 33% comprensión y 33% aplicación, distribución que garantiza el equilibrio entre los niveles cognitivos en todos los grados del nivel primario.",
      "La observación de la supervisora solo aplica a las áreas de Lengua Española y Matemáticas; en Ciencias de la Naturaleza, los conceptos tienen mayor peso que los procesos de pensamiento superior porque el área es fundamentalmente conceptual.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023, Diseño Curricular de Ciencias de la Naturaleza – Tercer Ciclo (Niveles cognitivos esperados: análisis, aplicación, síntesis y evaluación como predominantes en 5.to y 6.to grado) y Ordenanza 04-2023, Art. 11 (Los instrumentos de evaluación deben ser coherentes con el nivel de complejidad cognitiva establecido en los indicadores de logro del grado). La Adecuación Curricular 2023 no establece porcentajes fijos (opción C inventa esa distribución), pero sí establece que en el tercer ciclo los niveles de análisis, aplicación e inferencia deben predominar sobre la memorización. Las Ciencias de la Naturaleza en el currículo dominicano tienen un enfoque investigativo que exige procesos cognitivos superiores en todos sus áreas.",
  },
  {
    id: 621,
    categoria: "Alfabetización",
    pregunta:
      "Eres maestra de 2.do grado, primer trimestre. Durante la evaluación oral de lectura, identificas que una estudiante lee con mucha expresividad y entonación pero cuando le preguntas sobre el texto no puede responder ni siquiera preguntas literales. Sus compañeros y compañeras, que leen con menos fluidez expresiva, demuestran mejor comprensión. La familia insiste en que su hija 'lee muy bien porque lo hace con mucha emoción'. ¿Cómo interpretas este caso según la Ordenanza 01-2023 y qué intervención corresponde?",
    opciones: [
      "La estudiante está en un nivel superior de lectura; la fluidez expresiva indica comprensión profunda del texto y los problemas para responder preguntas se deben a timidez o ansiedad durante la evaluación oral.",
      "La estudiante presenta lectura de superficie o lectura de 'barquillo': ha desarrollado la dimensión prosódica de la fluidez (entonación, expresividad) sin comprensión del significado, posiblemente imitando modelos de lectura expresiva; la intervención debe trabajar explícitamente la comprensión literal como base, mediante estrategias de monitoreo de comprensión durante la lectura.",
      "La situación no requiere intervención específica en este momento; la comprensión lectora se desarrolla naturalmente a medida que aumenta la fluidez expresiva, por lo que basta con continuar fomentando la lectura en voz alta.",
      "El problema es de vocabulario receptivo; la estudiante no comprende porque no conoce el significado de las palabras del texto, aunque las decodifique con buena prosodia; la intervención debe centrarse en ampliar el vocabulario con actividades de definición y uso contextualizado.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 01-2023 de Alfabetización Inicial, Sección VI (Fluidez lectora: las tres dimensiones –precisión, velocidad y prosodia– no garantizan comprensión si no están integradas con el procesamiento semántico). La Ordenanza 01-2023 distingue explícitamente entre fluidez lectora y comprensión lectora como procesos relacionados pero no equivalentes. Un estudiante puede desarrollar la prosodia imitando modelos sin activar el procesamiento de significado. Este fenómeno, conocido como lectura de superficie, requiere intervención específica en el monitoreo activo de comprensión durante la lectura (hacerse preguntas, verificar que lo leído tiene sentido) y no simplemente más exposición a lectura expresiva.",
  },
  {
    id: 622,
    categoria: "Planificación",
    pregunta:
      "Eres maestra de 4.to grado. Planificas una secuencia de Educación Física e integras contenidos de Ciencias de la Naturaleza sobre el sistema locomotor. La coordinadora aprueba la planificación, pero durante la ejecución de la clase, el director del centro te interrumpe para decirte que 'Educación Física es para hacer ejercicio, no para dar ciencias' y te ordena separar las áreas. Tú has fundamentado la integración en la Adecuación Curricular 2023. ¿Cuál es tu respuesta profesional correcta?",
    opciones: [
      "Acatar de inmediato la indicación del director, ya que él tiene la autoridad máxima en el centro y contradecirlo frente a los estudiantes afectaría la imagen institucional.",
      "Continuar la clase sin alterar la planificación en ese momento para no interrumpir el proceso de aprendizaje de los estudiantes, y solicitar posteriormente una reunión con el director para sustentar pedagógica y normativamente el enfoque de integración curricular aprobado por la coordinadora.",
      "Detener la clase, pedir disculpas a los estudiantes por la interrupción y separar inmediatamente las actividades de Ciencias de la Naturaleza para retomarlas en el aula, atendiendo la instrucción del director.",
      "Solicitar al director en ese momento que su instrucción quede por escrito, ya que contradice la planificación aprobada por la coordinadora y debes tener documentación antes de modificar tu práctica.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023 (Principio de interdisciplinariedad y enfoque integrado como metodología pedagógica oficial del MINERD) y Orden Departamental 22-2023 (Art. 13: El docente tiene el deber de defender con fundamento normativo sus decisiones pedagógicas a través de los canales institucionales correctos, sin confrontación que afecte el proceso de aprendizaje). La respuesta correcta protege dos cosas simultáneamente: el proceso de aprendizaje de los estudiantes (no se interrumpe la clase) y el ejercicio profesional fundamentado (se canalizan las discrepancias en el espacio correcto, la reunión posterior con el director). Acatar sin cuestionar (opción A) renuncia al ejercicio pedagógico fundamentado. Exigir constancia escrita en plena clase (opción D) crea un conflicto institucional innecesario frente a los estudiantes.",
  },
  {
    id: 623,
    categoria: "Evaluación",
    pregunta:
      "Eres maestra de 5.to grado. Al revisar los resultados del segundo trimestre, identificas que en tu registro de grado tienes calificaciones de EP para 12 estudiantes en Matemáticas, pero en el informe que el centro envió al distrito, esas calificaciones aparecen como L. Al preguntar a la secretaria docente, te dice que 'la directora las corrigió porque no quería que el centro saliera mal en las estadísticas distritales'. Tú no fuiste consultada. ¿Cuál es tu obligación profesional y ética ante esta situación?",
    opciones: [
      "Aceptar la situación en silencio, ya que la directora tiene autoridad sobre los informes del centro y modificar las calificaciones del informe sin cambiar el registro de grado no afecta directamente a los estudiantes.",
      "Documentar la discrepancia entre tu registro de grado y el informe enviado al distrito, comunicarla por escrito a la directora solicitando la corrección del informe, y si la directora no actúa, reportar la irregularidad a las instancias distritales o regionales correspondientes.",
      "Corregir tú misma las calificaciones en tu registro de grado para que coincidan con el informe enviado al distrito, ya que la discrepancia entre ambos documentos podría generarte problemas en una auditoría.",
      "Hablar con los padres de los 12 estudiantes afectados para informarles que sus hijos en realidad tienen EP y no L, para que estén informados de la situación real.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 25 (Integridad e inviolabilidad del registro de grado como documento oficial del docente) y Orden Departamental 22-2023 (Art. 6: Honestidad; Art. 15: Obligación del docente de reportar irregularidades en el proceso evaluativo a través de los canales institucionales competentes). La adulteración de calificaciones en informes institucionales es una irregularidad grave que afecta la validez del sistema de evaluación y la toma de decisiones pedagógicas a nivel distrital. La maestra no es responsable de la adulteración, pero tiene la obligación ética y profesional de no silenciarla. Corregir su propio registro para que coincida con el informe adulterado (opción C) la convierte en copartícipe de la irregularidad. Informar directamente a los padres (opción D) sin haber agotado los canales institucionales es una escalada desproporcionada.",
  },
  {
    id: 624,
    categoria: "Inclusión",
    pregunta:
      "Eres maestra de 3.er grado. Tienes en tu aula una estudiante recién integrada que proviene de una comunidad rural con escolaridad previa muy limitada. Su nivel de lectura y escritura corresponde a 1.er grado. Su madre te pide que 'no la haga sentir diferente' y se opone a que reciba atención diferenciada porque 'eso la va a marcar'. Al mismo tiempo, sin atención diferenciada, la estudiante no puede acceder a los contenidos del grado. ¿Cómo equilibras el derecho de la madre a ser escuchada y el derecho de la estudiante a una educación pertinente según la Ley 136-03 y la Ordenanza 05-2024?",
    opciones: [
      "Respetar la decisión de la madre, ya que como tutora legal tiene la potestad de decidir sobre el proceso educativo de su hija, y trabajar con la estudiante exactamente igual que con el grupo.",
      "Escuchar a la madre con empatía, explicarle con evidencias el nivel real de su hija y cómo la atención diferenciada es una herramienta que garantiza su éxito y no la marca negativamente, llegar a un acuerdo sobre la forma de implementar las adecuaciones respetando la dignidad de la estudiante, y documentar el proceso en el expediente.",
      "Aplicar las adecuaciones curriculares sin informar a la madre, ya que el derecho de la estudiante a una educación pertinente es superior a la objeción de la tutora cuando esta objeción perjudica el desarrollo de la niña.",
      "Solicitar al orientador escolar que convenza a la madre de aceptar la atención diferenciada, ya que él tiene mayor habilidad para manejar este tipo de resistencias familiares.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ley 136-03 (Art. 18: El interés superior del niño como principio rector; Art. 22: La familia tiene derecho a participar en el proceso educativo pero ese derecho no puede ejercerse en detrimento del interés superior del niño) y Ordenanza 05-2024 (Art. 23: La participación informada de la familia como componente del proceso inclusivo). La normativa crea una tensión real entre el derecho de la madre a ser escuchada y el interés superior de la niña. La solución no es ignorar a la madre ni ceder ante su oposición, sino transformar su resistencia a través de información empática y evidencias, llegando a un acuerdo que respete tanto la dignidad de la niña como el derecho de la familia a participar. Actuar sin informar (opción C) viola el principio de participación familiar establecido en la Ordenanza 05-2024.",
  },
  {
    id: 625,
    categoria: "Ética",
    pregunta:
      "Eres maestra de 6.to grado, último mes del año escolar. Un estudiante que ha sido tu favorito durante el año (participativo, carismático, buen comportamiento) tiene un promedio final de EP en Matemáticas. Sin embargo, un estudiante con quien has tenido dificultades relacionales durante el año (introvertido, a veces desafiante) tiene evidencias sólidas de haber alcanzado L en todas las áreas. Al revisar tus registros antes de emitir los boletines finales, te das cuenta de que inconscientemente has sido más rigurosa en los criterios para el segundo estudiante. ¿Qué principio ético y evaluativo ha sido vulnerado y cuál es la acción correcta?",
    opciones: [
      "No se ha vulnerado ningún principio si las calificaciones reflejan lo registrado; el sesgo es una percepción subjetiva que no tiene relevancia si los documentos son consistentes.",
      "Se ha vulnerado el principio de imparcialidad evaluativa establecido en la Orden Departamental 22-2023 y la Ordenanza 04-2023; la acción correcta es revisar con honestidad las evidencias de ambos estudiantes aplicando los mismos criterios, corregir las calificaciones si las evidencias lo justifican, y reflexionar sobre el impacto del sesgo afectivo en el proceso evaluativo como parte del desarrollo ético profesional.",
      "El principio vulnerado es el de objetividad; la solución es pedir a otro docente que revise los instrumentos de ambos estudiantes para obtener una calificación externa más imparcial.",
      "El principio vulnerado es la equidad; la solución es aplicar una evaluación adicional a ambos estudiantes al final del año para obtener una medición objetiva que no esté afectada por el sesgo relacional acumulado durante el año.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Orden Departamental 22-2023 (Art. 9: Imparcialidad como principio ético del ejercicio docente; Art. 5: Compromiso con el autodesarrollo profesional incluyendo el reconocimiento y gestión de sesgos) y Ordenanza 04-2023 (Art. 8: La evaluación debe aplicar los mismos criterios a todos los estudiantes). Este caso evalúa la integridad ética en su dimensión más compleja: la honestidad con uno mismo. La normativa establece que la imparcialidad no es solo la ausencia de favoritismo declarado, sino el compromiso activo de identificar y corregir sesgos incluso cuando son inconscientes. La opción B es la única que combina corrección del error (revisión honesta de evidencias), acción concreta (corregir si procede) y crecimiento profesional (reflexión sobre el sesgo). Las opciones C y D externalizan la solución sin abordar el desarrollo ético personal.",
  },
  {
    id: 626,
    categoria: "Alfabetización",
    pregunta:
      "Eres maestra de 2.do grado, segundo trimestre. Tienes un estudiante que escribe todas las palabras en mayúsculas, sin espacios entre palabras y sin signos de puntuación: 'ELNIÑOJUEGAENELPATIO'. Lee con precisión y comprende bien los textos que lee. Al evaluar su producción escrita con la rúbrica del trimestre, la calificación obtenida es EP. Su madre, que es docente universitaria, te exige que le expliques por qué su hijo no obtiene L si 'sabe leer perfectamente'. ¿Cómo sustentas técnica y normativamente tu calificación?",
    opciones: [
      "Cedes ante la presión de la madre porque es docente universitaria y reconoces que el nivel de lectura del estudiante es superior; le explicas que la calificación fue un error de apreciación y la corriges a L.",
      "Explicas a la madre, con los indicadores de logro del trimestre como evidencia, que la competencia de producción escrita en 2.do grado incluye la segmentación léxica, el uso de mayúsculas en contexto y los signos de puntuación básicos como indicadores observables del nivel de logro; la calificación EP refleja con exactitud que esos indicadores específicos aún están en proceso, independientemente del nivel de lectura del estudiante.",
      "Explicas que la escritura en mayúsculas sin espacios es una etapa normal del desarrollo que se resolverá sola con el tiempo, y que la calificación es preventiva para motivar al estudiante a mejorar.",
      "Propones a la madre que el estudiante presente una evaluación adicional de producción escrita en condiciones de mayor motivación, ya que posiblemente el desempeño del trimestre no refleja su nivel real.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 04-2023, Art. 28 (La comunicación de resultados debe sustentarse en los indicadores de logro específicos evaluados) y Adecuación Curricular 2023 (Indicadores de logro de Lengua Española, 2.do grado: la producción escrita convencional incluye segmentación léxica, uso normativo de mayúsculas y puntuación básica como indicadores diferenciados de la comprensión lectora). La respuesta correcta demuestra dominio técnico: la competencia lectora y la competencia de producción escrita son dimensiones distintas con indicadores distintos. El nivel de lectura no compensa las brechas en producción escrita. La sustentación debe hacerse con los indicadores específicos del instrumento, no con apreciaciones generales. La presión del estatus profesional de la madre no modifica la obligación de imparcialidad.",
  },
  {
    id: 627,
    categoria: "Planificación",
    pregunta:
      "Eres maestra de 6.to grado. Al diseñar tu secuencia didáctica de Lengua Española sobre 'El texto argumentativo', planificas que los estudiantes escriban un ensayo argumentativo al final de la unidad como actividad integradora. Tu coordinadora aprueba la planificación, pero durante la ejecución observas que los estudiantes no tienen las herramientas para argumentar: no distinguen entre opinión y argumento, no conocen los conectores argumentativos y no han sido expuestos a modelos de texto argumentativo. Estás en la tercera sesión de diez planificadas. ¿Cuál es la decisión pedagógica correcta según la Adecuación Curricular 2023?",
    opciones: [
      "Continuar con la planificación original porque fue aprobada y los estudiantes aprenderán argumentando directamente en la escritura del ensayo; los errores son parte del proceso de aprendizaje por descubrimiento.",
      "Ajustar la secuencia desde la sesión cuatro para incorporar de manera explícita la distinción entre opinión y argumento, el análisis de modelos textuales argumentativos y el uso de conectores antes de solicitar la producción del ensayo, reprogramando la actividad integradora sin eliminarla.",
      "Eliminar la actividad del ensayo argumentativo y sustituirla por una actividad de producción de textos descriptivos, que es un tipo textual que los estudiantes ya dominan y que permitirá obtener mejores resultados en la evaluación.",
      "Avanzar con las sesiones planificadas y asignar el ensayo argumentativo como tarea en casa, donde los estudiantes podrán buscar información y modelos sin la limitación del tiempo de clase.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Adecuación Curricular 2023 (Principio de flexibilidad y pertinencia curricular: el docente ajusta la secuencia cuando el diagnóstico en proceso revela brechas en los prerrequisitos) y Ordenanza 04-2023, Art. 5 (La evaluación formativa durante el proceso orienta los ajustes a la planificación). El diagnóstico en proceso (sesión 3 de 10) revela que los estudiantes carecen de los prerrequisitos para producir el texto argumentativo. La respuesta correcta no elimina el objetivo ni la actividad integradora, sino que incorpora las fases de construcción de herramientas que faltaban, reprogramando los tiempos. Continuar ignorando la brecha (opción A) garantizará el fracaso de la actividad integradora. Eliminar el ensayo (opción C) empobrece el alcance de la unidad. Asignar como tarea (opción D) traslada al hogar la responsabilidad del andamiaje pedagógico.",
  },
  {
    id: 628,
    categoria: "Evaluación",
    pregunta:
      "Eres maestra de 3.er grado. Al final del año, debes tomar la decisión de promover o retener a un estudiante que tiene EP en Lengua Española y Matemáticas, pero L en todas las demás áreas. El estudiante tiene PACI vigente con adecuaciones curriculares en esas dos áreas. Sus padres quieren que sea promovido. La directora sugiere retenerlo 'para que consolide las bases'. El equipo de orientación concluye que el estudiante ha tenido avances significativos en relación con sus indicadores adaptados y que la retención podría afectar su autoestima y motivación. ¿Cuál es el proceso y la decisión correcta según la Ordenanza 04-2023 y la Ordenanza 05-2024?",
    opciones: [
      "Retener al estudiante siguiendo la sugerencia de la directora, ya que ella tiene mayor experiencia y responsabilidad institucional sobre los resultados del centro.",
      "Basar la decisión en el análisis colegiado del equipo (docente, orientador, psicólogo, dirección y familia): si el estudiante alcanzó los indicadores establecidos en su PACI, la retención no está justificada normativamente; la Ordenanza 05-2024 establece que los estudiantes con PACI son evaluados y promovidos según sus indicadores adaptados, no los indicadores generales del grado.",
      "Promover al estudiante para respetar la voluntad de los padres, ya que la Ley 136-03 establece que las familias tienen el derecho de participar en las decisiones educativas de sus hijos.",
      "Tomar la decisión de manera autónoma como maestra de aula, ya que eres quien mejor conoce el proceso del estudiante durante el año y tienes la evidencia más directa para fundamentar la decisión.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ordenanza 05-2024, Art. 16 (Los estudiantes con PACI son evaluados según sus indicadores adaptados; la decisión de promoción debe basarse en el logro de esos indicadores) y Ordenanza 04-2023, Art. 31-34 (La decisión de retención es colegiada e involucra al equipo completo incluyendo la familia). El caso presenta el dilema más complejo de la evaluación inclusiva: un estudiante con PACI que tiene EP en indicadores generales pero L en sus indicadores adaptados. La normativa es clara: el criterio de promoción para un estudiante con PACI son sus indicadores adaptados, no los generales del grado. La retención sin sustento en el incumplimiento de los indicadores del PACI sería una violación al derecho a la educación inclusiva. La decisión no puede ser unilateral ni del director ni de la maestra.",
  },
  {
    id: 629,
    categoria: "Inclusión",
    pregunta:
      "Eres maestra de 5.to grado. Uno de tus estudiantes tiene VIH. Solo la directora, el orientador y tú lo saben, por confidencialidad médica. Un día, el estudiante se hace un pequeño corte en la mano durante una actividad en el aula y sus compañeros entran en pánico. Uno de ellos grita: '¡No lo toquen, tiene SIDA!' La situación se descontrola. Tienes que responder en ese momento frente a todo el grupo. ¿Cuál es tu actuación correcta según la Ley 136-03 y la Ordenanza 05-2024?",
    opciones: [
      "Pedir a los estudiantes que se calmen, atender la herida con guantes (protocolo de primeros auxilios para cualquier herida, independientemente de la condición del estudiante), y no responder a los comentarios para no amplificar el rumor.",
      "Atender la herida con el protocolo de primeros auxilios estándar aplicable a cualquier herida con sangre, restablecer la calma con autoridad, aprovechar el momento para trabajar con el grupo los derechos a la dignidad y privacidad de las personas, desmontar los mitos sobre el VIH sin revelar la condición del estudiante, y reportar el incidente al orientador para seguimiento.",
      "Confirmar discretamente al grupo que el estudiante tiene una condición de salud que requiere cuidados especiales, sin mencionar cuál, para que entiendan la reacción de su compañero y sean más empáticos.",
      "Sacar al estudiante del aula con un asistente para que reciba atención médica y continuar la clase normalmente para que el incidente no interrumpa más el proceso de enseñanza.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ley 136-03 (Art. 15: Derecho a la privacidad y confidencialidad de la condición de salud del menor; Art. 20: Derecho a la dignidad y no discriminación) y Ordenanza 05-2024 (Art. 7: Las barreras de discriminación por condición de salud son una dimensión de la exclusión educativa que debe eliminarse). La respuesta correcta opera en tres planos simultáneamente: la seguridad física (protocolo de primeros auxilios estándar para cualquier herida), la protección de la privacidad del estudiante (sin revelar ni confirmar su condición) y la formación ciudadana del grupo (trabajar los derechos y desmontar mitos). Confirmar indirectamente la condición (opción C) viola la confidencialidad médica aunque sea con intención empática. Sacar al estudiante (opción D) lo segrega y amplifica la estigmatización.",
  },
  {
    id: 630,
    categoria: "Ética",
    pregunta:
      "Eres maestra de 4.to grado. Durante el recreo, escuchas a dos colegas comentando en la sala de maestros los resultados académicos y las dificultades familiares de estudiantes específicos, mencionándolos por su nombre completo, en un tono burlón. Uno de los estudiantes mencionados es hijo de una familia con situación de pobreza extrema conocida en el barrio. Hay tres maestros escuchando sin intervenir. ¿Cuál es tu respuesta ética correcta según la Orden Departamental 22-2023 y la Ley 136-03?",
    opciones: [
      "No intervenir en ese momento para no generar conflicto con tus colegas, pero hablar con cada uno de ellos en privado posteriormente para hacerles ver que esa conducta es inapropiada.",
      "Intervenir en ese momento señalando con respeto pero con firmeza que comentar información privada de estudiantes de manera burlona viola la confidencialidad de la información educativa y la dignidad del niño, y que ese espacio no es apropiado para ese tipo de conversación, independientemente de la incomodidad que genere.",
      "Retirarte de la sala de maestros para no ser partícipe de la situación, ya que tu presencia podría interpretarse como aprobación tácita de la conducta de tus colegas.",
      "Reportar directamente a la directora lo que escuchaste para que ella tome las medidas disciplinarias correspondientes con los colegas involucrados.",
    ],
    respuestaCorrecta: 1,
    explicacion:
      "Base Legal: Ley 136-03 (Art. 15: Derecho del menor a la privacidad de su información personal, académica y familiar) y Orden Departamental 22-2023 (Art. 10: Confidencialidad de la información de los estudiantes; Art. 14: Responsabilidad del docente ante conductas que vulneran los derechos de los estudiantes; Art. 17: Deber de intervención oportuna). La normativa establece que la información académica y familiar de los estudiantes es confidencial y que su exposición pública, especialmente con tono discriminatorio, viola los derechos del menor. La Orden Departamental 22-2023 no se limita a establecer lo que el docente no debe hacer, sino que establece el deber de intervención cuando presencia vulneraciones. Retirarse (opción C) es pasividad ética. Reportar sin intervención inmediata (opción D) dilata la protección del derecho vulnerado.",
  },
    {
        id: 631,
        categoria: "Planificación Pedagógica",
        pregunta: "Una maestra de 5to grado diseña una Situación de Aprendizaje sobre 'La prevención del dengue en el sector'. En su secuencia didáctica, el producto final es que los estudiantes llenen un cuestionario impreso con definiciones sobre el mosquito transmisor. Un técnico distrital le señala que este diseño no se alinea con el Enfoque por Competencias. ¿Cuál es la razón técnica de esta observación?",
        opciones: [
            "A) Porque el tema del dengue es exclusivo de Ciencias Naturales y no permite la articulación con otras áreas del saber.",
            "B) Porque el producto final (un cuestionario de memoria) no moviliza competencias ni resuelve el problema planteado en el contexto; el estudiante debe asumir un rol activo, por ejemplo, creando una campaña de descacharrización comunitaria.",
            "C) Porque las Situaciones de Aprendizaje solo deben durar una semana y un cuestionario toma menos tiempo.",
            "D) Porque debió utilizar un examen oral en lugar de un cuestionario escrito para evaluar las competencias comunicativas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Adecuación Curricular 2023. Una Situación de Aprendizaje parte de un problema del entorno y exige un 'producto' que evidencie el 'saber hacer'. Un cuestionario memorístico representa el enfoque tradicional centrado en contenidos (saber pasivo), fallando en movilizar la capacidad de acción del estudiante frente al problema real."
    },
    {
        id: 632,
        categoria: "Inclusión",
        pregunta: "En un aula de 4to grado hay un estudiante con Discapacidad Intelectual Leve. Al impartir el tema de las fracciones, el estudiante muestra niveles severos de frustración con las operaciones simbólicas abstractas. Como garante de los derechos educativos, ¿qué ajuste curricular de proceso debe implementar la docente?",
        opciones: [
            "A) Modificar el indicador de logro bajando el nivel de complejidad, permitiéndole operar con material concreto (regletas de Cuisenaire, pizzas recortables) para que adquiera el concepto de 'parte-todo' a su ritmo, evaluando su progreso desde ese nivel.",
            "B) Evaluarlo con la misma prueba escrita que al resto del grupo, pero multiplicando su calificación final por dos para compensar su dificultad intelectual.",
            "C) Solicitar que sea retirado de la clase de Matemáticas y enviado a la biblioteca a colorear mandalas para evitar que sufra estrés emocional.",
            "D) Exigirle que memorice las tablas de multiplicar como requisito indispensable antes de permitirle trabajar con fracciones."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 05-2024. El DUA (Diseño Universal para el Aprendizaje) y los ajustes razonables exigen adaptar el medio de representación y acción. Para la discapacidad intelectual, el uso de material concreto y la flexibilización de la exigencia abstracta permiten que el niño desarrolle la competencia lógica desde sus propias posibilidades, sin ser segregado (C) ni sometido a equidad falsa (B)."
    },
    {
        id: 633,
        categoria: "Evaluación",
        pregunta: "Durante la entrega de informes de progreso (boletines), una madre de 6to grado compara el reporte de su hijo con el de otro compañero y le reclama al docente: '¿Por qué mi hijo tiene EP (En Proceso) si hizo todas las mismas tareas que Juan, que tiene L (Logrado)?'. ¿Cómo debe fundamentar el docente su respuesta basándose en el sistema de evaluación vigente?",
        opciones: [
            "A) Explicar que la calificación depende del comportamiento en el aula, y Juan es mucho más disciplinado que su hijo.",
            "B) Argumentar que hubo un error de cálculo matemático al promediar las tareas y ofrecer revisar la libreta de calificaciones.",
            "C) Indicar que el MINERD exige tener una cuota de estudiantes en 'EP' para demostrar que el maestro es estricto evaluando.",
            "D) Explicar que la evaluación es 'Criterial' y no normativa; no se evalúa por la simple entrega de tareas o por comparación con otros, sino por el nivel de dominio evidenciado frente al Indicador de Logro, apoyándose en la rúbrica personal del estudiante."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en el sistema dominicano es criterial. Esto significa que el referente es el indicador de logro, no el grupo. La simple 'entrega de tareas' no garantiza la competencia si estas no reflejan la calidad y profundidad del desempeño esperado en la rúbrica."
    },
    {
        id: 634,
        categoria: "Ética y Comportamientos Profesionales",
        pregunta: "En la sala de profesores, una maestra de 3er grado comenta en voz alta detalles confidenciales sobre el diagnóstico psiquiátrico de la madre de uno de sus alumnos, justificando con ello el mal comportamiento del niño frente a otros colegas que no le dan clases a ese estudiante. ¿Qué falta profesional está cometiendo?",
        opciones: [
            "A) Ninguna, el diálogo entre colegas es un espacio seguro para el desahogo pedagógico y ayuda a comprender los contextos familiares.",
            "B) Falta de solidaridad profesional, ya que debió enviar un memorándum a la dirección antes de hablar.",
            "C) Vulneración grave del Secreto Profesional, la Ética Docente y el derecho a la intimidad del estudiante y su familia, ya que la información sensible solo debe ser manejada institucionalmente y con el personal directamente implicado en el apoyo al menor.",
            "D) Una falta administrativa leve que se resuelve pidiendo disculpas en la próxima reunión de maestros."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estatuto Docente y Ley 136-03 (Protección de la intimidad). El docente maneja información altamente sensible. Divulgar diagnósticos médicos, psiquiátricos o situaciones de vulnerabilidad familiar fuera de los protocolos institucionales (Orientación/Dirección) constituye una falta ética grave por violación a la confidencialidad."
    },
    {
        id:635,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Al realizar un experimento de Ciencias en 5to grado, la clase se sale de control: los niños no respetan los turnos para usar los materiales, el ruido es ensordecedor y dos estudiantes rompen un termómetro. Al reflexionar sobre su práctica, ¿qué elemento clave de la gestión de aula omitió el docente?",
        opciones: [
            "A) No haber amenazado al grupo con reprobar la asignatura si rompían algo antes de comenzar.",
            "B) Omitir el establecimiento y modelado previo de normas, rutinas claras y roles específicos (quién busca material, quién anota, niveles de voz permitidos) necesarios para estructurar el trabajo colaborativo complejo.",
            "C) Haber elegido un experimento aburrido que no captó la atención de los estudiantes más imperactivos.",
            "D) No haber solicitado que los padres estuvieran presentes para vigilar el comportamiento de sus hijos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estándares de Desempeño (Gestión de Aula). El trabajo práctico o colaborativo genera caos si no hay 'andamiaje conductual'. El docente efectivo invierte tiempo previo en modelar rutinas y asignar roles claros, creando una estructura predecible que permite el aprendizaje activo sin derivar en desorden."
    },
    {
        id: 636,
        categoria: "Alfabetización Inicial",
        pregunta: "En el 1er grado, la docente nota que un estudiante no logra diferenciar el sonido inicial de las palabras (ej. no sabe que 'Mesa' y 'Mano' empiezan con el mismo sonido). ¿Qué tipo de intervención pedagógica es prioritaria para evitar un rezago severo en su alfabetización?",
        opciones: [
            "A) Implementar rutinas lúdicas intensivas centradas en la Conciencia Fonológica, utilizando rimas, canciones, juegos de aliteración y segmentación de sonidos, antes de forzar la lectura de textos complejos.",
            "B) Asignarle cien planas de la letra 'M' en mayúscula y minúscula para que logre grabarla en su memoria visual.",
            "C) Referirlo de inmediato a un neurólogo porque la incapacidad de escuchar letras es síntoma de daño cerebral irreversible.",
            "D) Avanzar al siguiente tema, ya que la conciencia de los sonidos se adquiere de forma natural cuando el niño madura en 3er grado."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 01-2023. La conciencia fonológica es el pilar de la decodificación. Si un niño no identifica fonemas (sonidos), no podrá asociarlos a los grafemas (letras). Obligar a hacer planas visuales (B) o ignorar el problema (D) genera lagunas graves. La intervención a través del juego oral es urgente y necesaria."
    },
    {
        id: 637,
        categoria: "Convivencia",
        pregunta: "Una niña de 4to grado llega al aula llorando porque compañeros de grados superiores le quitaron su merienda en el pasillo y la amenazaron para que no diga nada. La maestra de la niña confronta a los agresores en el patio y los castiga obligándolos a darle su propio dinero a la niña. ¿Es este el procedimiento correcto según el MINERD?",
        opciones: [
            "A) Sí, porque enseña a los agresores el principio de restitución del daño de forma inmediata y empática.",
            "B) Sí, la intervención rápida del docente de aula evita que el acoso escale a situaciones de mayor violencia física.",
            "C) No. Como se trata de alumnos de otro grado, la maestra debió ignorar la situación y dejar que la niña lo resuelva sola para fomentar su resiliencia.",
            "D) No. Constituye una violación al debido proceso. La maestra debe contener a la víctima, documentar el hecho y reportarlo a la Dirección y Orientación para que intervengan formalmente con las familias y apliquen las medidas disciplinarias institucionales, evitando actuar como juez y parte."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Manual de Convivencia (OD 22-2023). Un docente no tiene potestad para aplicar sanciones económicas (confiscar dinero) ni saltarse el debido proceso disciplinario, especialmente con alumnos que no son de su grado. El acoso/extorsión es una falta grave que activa un protocolo institucional estricto, no una medida improvisada de patio."
    },
    {
        id: 638,
        categoria: "Comportamientos Profesionales",
        pregunta: "Durante la aplicación del Ejercicio de Rendimiento Profesional (ERP), un docente descubre que olvidó su Cédula de Identidad en casa y exige que le permitan realizar la prueba mostrando una foto de la cédula en su celular. ¿Cuál debe ser la respuesta del equipo aplicador según las normas de la Etapa V?",
        opciones: [
            "A) Permitirle el acceso validando su identidad con la foto digital, demostrando flexibilidad y empatía magisterial.",
            "B) Denegar el acceso y no permitirle realizar la prueba, ya que la presentación del documento de identidad original es un requisito de seguridad innegociable para habilitar la plataforma.",
            "C) Dejarlo entrar pero ponerle una nota condicional en el sistema hasta que envíe el documento físico por correo al día siguiente.",
            "D) Buscar su nombre en la nómina de la escuela sede para que el director valide que él es verdaderamente docente y dejarlo tomar el ERP."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Instructivo Etapa V ERP. En los procesos de evaluación estandarizada y certificación (como el ERP o Pruebas Nacionales), la identidad debe comprobarse con documento original (cédula física) sin excepciones. El uso de celulares está prohibido en el recinto, por lo que la foto digital es doblemente invalidante."
    },
    {
        id: 639,
        categoria: "Planificación",
        pregunta: "El equipo docente de primaria decide trabajar un Proyecto de Intervención de Aula centrado en la problemática: 'Violencia y vocabulario inadecuado durante el recreo'. Para que el proyecto promueva eficazmente la Competencia Ética y Ciudadana, ¿qué estrategia deben implementar con los estudiantes?",
        opciones: [
            "A) Obligar a los estudiantes a memorizar el Manual de Convivencia del MINERD completo y evaluarlos con un examen escrito.",
            "B) Diseñar afiches sobre la paz y pegarlos en las paredes del aula, dejando el patio en manos de los directores.",
            "C) Promover que los propios estudiantes investiguen las causas de la violencia, debatan consecuencias y diseñen acuerdos de mediación y una 'Campaña de Buen Trato' que ellos mismos lideren en la escuela.",
            "D) Instaurar un sistema de castigos severos donde cada mala palabra cueste puntos menos en las calificaciones finales del grado."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Adecuación Curricular 2023. La Competencia Ética y Ciudadana exige empoderamiento y agencia cívica. Imponer normas (A) o castigos (D) es un enfoque conductista heterónomo. El enfoque por competencias requiere que el estudiante analice el problema social y construya (co-cree) las soluciones ciudadanas de forma proactiva."
    },
    {
        id: 640,
        categoria: "Evaluación",
        pregunta: "Una maestra de 6to grado está preocupada porque, a tres semanas de terminar el año escolar, un estudiante transferido recientemente carece de varias evidencias en su portafolio de evaluación. El estudiante ha demostrado dominar los indicadores de logro en las clases recientes. ¿Cómo debe proceder la maestra para asentar la calificación final?",
        opciones: [
            "A) Calificarlo con 'En Proceso' (EP) obligatoriamente, porque no cuenta con el 100% de las tareas acumulativas requeridas desde el inicio de año.",
            "B) Diseñar una 'Situación de Aprendizaje' integradora de cierre o una rúbrica de desempeño final que permita al estudiante evidenciar el nivel de dominio actual de la competencia, validando su conocimiento sin penalizarlo por el tiempo no cursado en el centro.",
            "C) Dejar la calificación en blanco y enviar al estudiante a que el Ministerio de Educación le asigne una nota administrativa.",
            "D) Promediar con cero (0) las notas de los meses que no asistió, para ser justo con los estudiantes que sí estuvieron todo el año escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación por competencias no es una sumatoria acumulativa y punitiva de tareas (D). Si un estudiante demuestra al final del proceso que posee la capacidad de resolver el problema y domina el indicador, se le debe reconocer el logro (L). La maestra debe priorizar la demostración de la competencia actual."
    },
    {
        id:641,
        categoria: "Inclusión",
        pregunta: "En una sesión de 5to grado, una alumna presenta mutismo selectivo (no habla en la escuela por un trastorno de ansiedad severa, pero sí comprende y escribe). El currículo demanda evaluar la competencia de 'Expresión Oral' mediante una exposición sobre la Independencia Nacional. ¿Qué ajuste razonable es ética y técnicamente correcto?",
        opciones: [
            "A) Forzar a la alumna a pararse frente al grupo, asumiendo que enfrentar sus miedos es la única forma de que logre superar su trastorno y alcance la competencia oral.",
            "B) Adaptar el medio de expresión: permitirle grabar su exposición en video desde su casa, utilizar un programa de texto-a-voz en el aula, o realizar la exposición exclusivamente frente al docente, garantizando que demuestre el dominio del tema sin detonar crisis de ansiedad.",
            "C) Exonerarla totalmente de la exposición y colocarle la calificación máxima por compasión, ya que no es su culpa tener ese trastorno psicológico.",
            "D) Reprobarla en el indicador de expresión oral, argumentando que el currículo nacional es estricto y si no habla, no hay forma legal de ponerle 'Logrado'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 (Ajustes Razonables - DUA). El mutismo selectivo es una barrera neurobiológica y emocional. Forzar la exposición (A) es negligencia pedagógica. Reprobarla (D) es discriminación. El DUA permite múltiples medios de expresión. Un video pregrabado o texto-a-voz demuestran la estructuración de ideas (competencia) saltando la barrera de la ansiedad fóbica."
    },
    {
        id: 642,
        categoria: "Gestión del Aprendizaje",
        pregunta: "Durante el trabajo de grupos en 4to grado, la maestra nota que el nivel cognitivo de las discusiones es muy bajo. Los estudiantes solo copian del libro sin analizar. Ella decide intervenir aplicando la 'Mediación Cognitiva'. ¿Cuál de estas acciones corresponde a dicha estrategia?",
        opciones: [
            "A) Caminar por el aula y dictarles las respuestas correctas al oído a cada grupo para que terminen la tarea a tiempo.",
            "B) Detener la clase y amenazar con bajar puntos si no piensan de forma más crítica y analítica.",
            "C) Acercarse a los grupos y realizar preguntas andamiadas y socráticas (ej. '¿Qué pasaría si cambiamos este elemento?', '¿Por qué creen que el autor dice esto?'), obligando a los estudiantes a argumentar y elevar el nivel de pensamiento sin darles la respuesta.",
            "D) Cambiar la actividad a una de dibujo libre, porque los niños no tienen madurez para el análisis crítico."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Enfoque Constructivista Histórico-Cultural (Vygotsky). El docente es un mediador. Cuando el estudiante se estanca en un nivel inferior, el docente interviene en la Zona de Desarrollo Próximo no para dar respuestas (A), sino para 'movilizar' el pensamiento mediante preguntas reflexivas que fuercen la reestructuración cognitiva."
    },
    {
        id: 643,
        categoria: "Comportamientos Profesionales",
        pregunta: "La dirección del centro educativo informa a los docentes que, por una contingencia comunitaria (ej. lluvias extremas que aislaron el sector), las clases serán virtuales durante tres días. Un docente de 6to grado se niega a enviar actividades o contactar a sus estudiantes, argumentando que su contrato es solo presencial. ¿Qué dimensión del perfil docente se infringe con esta negativa?",
        opciones: [
            "A) La dimensión de 'Compromiso Ético y Vocación', ya que el docente ignora el derecho superior del niño a la continuidad educativa ante emergencias, demostrando falta de flexibilidad, resiliencia y adaptación a contextos de crisis.",
            "B) Ninguna, porque el MINERD no puede obligar a usar internet y planes de datos personales para la docencia.",
            "C) La dimensión de 'Gestión Financiera', por no querer invertir en recursos tecnológicos propios.",
            "D) El derecho a la desconexión digital establecido en las leyes laborales dominicanas."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Estándares Profesionales Docentes (Dimensión Compromiso Personal y Profesional). El docente como servidor público tiene un compromiso de resiliencia y adaptabilidad para garantizar el derecho a la educación (Constitución / Ley 66-97). Negarse a aplicar planes de contingencia (previamente estandarizados pospandemia) vulnera el mandato ético de continuidad."
    },
    {
        id: 644,
        categoria: "Planificación",
        pregunta: "Al diseñar una clase, un docente inexperto confunde la función de los 'Criterios de Evaluación' y las 'Estrategias de Aprendizaje'. Para aclararlo basándose en el diseño curricular, ¿cuál de las siguientes explicaciones es la correcta?",
        opciones: [
            "A) Las estrategias son los exámenes y pruebas, y los criterios son las dinámicas y juegos que se hacen en el patio.",
            "B) Los criterios de evaluación dictan el qué se va a enseñar, y las estrategias de aprendizaje definen cómo se va a calificar numéricamente al estudiante.",
            "C) Las estrategias de aprendizaje son las rutas o métodos pedagógicos (ej. ABP, Indagación) para construir el saber, mientras que los criterios de evaluación son los referentes de calidad que indican qué tan bien el estudiante logró adquirir ese saber frente a la competencia esperada.",
            "D) Ambos términos son sinónimos absolutos y se pueden colocar en la misma casilla de la planificación del MINERD."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Bases de la Revisión y Actualización Curricular. Esta es una distinción fundamental. La estrategia (el 'cómo' aprendo: debate, juego de roles, proyecto) es la mediación didáctica. El criterio de evaluación es el estándar de calidad (el 'qué y qué tan bien' aprendo: argumenta con fluidez, resuelve operaciones). Confundirlos anula la lógica del diseño."
    },
    {
        id:645,
        categoria: "Alfabetización",
        pregunta: "En 2do grado, una maestra realiza una lectura interactiva de un texto informativo sobre los dinosaurios. Al final, pide a los estudiantes que ubiquen en el texto el nombre del dinosaurio más grande, el cual está escrito explícitamente en el segundo párrafo. ¿Qué tipo de habilidad de comprensión lectora está evaluando?",
        opciones: [
            "A) Habilidad Inferencial, ya que el niño debe deducir la respuesta leyendo entre líneas.",
            "B) Habilidad Literal, ya que requiere localizar y recuperar información explícita y directa del texto.",
            "C) Habilidad Crítica o Valorativa, porque el niño debe emitir su opinión sobre el tamaño del dinosaurio.",
            "D) Habilidad de Decodificación Fonológica, ya que el objetivo es que el niño pronuncie la palabra 'dinosaurio' correctamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Fascículos de Comprensión Lectora (Ordenanza 01-2023). La comprensión literal es el primer nivel. Consiste en la retención y recuperación de información que aparece explícitamente escrita en la superficie del texto (datos, nombres, fechas). Es un nivel básico pero fundamental para luego poder inferir."
    },
    {
        id: 646,
        categoria: "Evaluación",
        pregunta: "Una maestra utiliza una 'Lista de Cotejo' para observar la participación de sus alumnos en un proyecto. Sin embargo, todos los indicadores están redactados de manera negativa (ej. 'No interrumpe a sus compañeros', 'No tira basura'). ¿Por qué esta práctica es técnicamente incorrecta en el enfoque formativo?",
        opciones: [
            "A) Porque es metodológicamente correcto; la disciplina debe controlarse resaltando lo que el estudiante no debe hacer.",
            "B) Porque las listas de cotejo solo sirven para evaluar Matemáticas y Ciencias, no comportamientos.",
            "C) Porque en la evaluación de competencias, los indicadores o criterios deben redactarse en positivo, describiendo el desempeño o la conducta esperada que el estudiante SÍ debe alcanzar (ej. 'Escucha con respeto el turno de sus compañeros').",
            "D) Porque la lista de cotejo no es un instrumento aprobado por el MINERD para el Nivel Primario."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual de Elaboración de Instrumentos (Ordenanza 04-2023). Un indicador de logro o criterio evalúa la presencia de una capacidad o competencia. Redactar en negativo no orienta al estudiante hacia lo que debe hacer (desempeño esperado), sino que lo estigmatiza. La evaluación formativa se centra en los logros (enfoque positivo)."
    },
    {
        id: 647,
        categoria: "Inclusión",
        pregunta: "Llega al aula de 3er grado una estudiante que pertenece a una comunidad religiosa que no permite saludar a la bandera nacional por motivos de fe. La directora y varios maestros quieren sancionar a la niña y obligarla a cantar el himno 'por respeto a la Patria'. ¿Cómo debe intervenir el docente a cargo fundamentado en el marco legal dominicano?",
        opciones: [
            "A) Expulsar a la niña de su clase todos los días durante el acto cívico para evitar que contamine al resto de los estudiantes con ideas antinacionales.",
            "B) Obligar a la niña a cantar el himno bajo amenaza de reprobarla en Ciencias Sociales, ya que el currículo nacional está por encima de cualquier religión.",
            "C) Burlarse de las creencias de la familia frente a la niña para que sienta vergüenza y decida cantar.",
            "D) Exigir el respeto a la libertad de culto y conciencia garantizada en la Constitución. La niña debe mantener una actitud de respeto y orden durante el acto cívico, pero no se le puede obligar ni coaccionar a realizar actos contrarios a sus creencias religiosas, prohibiendo cualquier tipo de sanción académica o disciplinaria por esta causa."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Constitución de la República Dominicana, Ley 136-03 y Ley General de Educación. La libertad de culto es un derecho fundamental. El Tribunal Constitucional y el MINERD han dictaminado que obligar a un niño a cantar el himno contra sus creencias religiosas es inconstitucional. El deber cívico se cumple manteniendo una postura respetuosa."
    },
    {
        id: 648,
        categoria: "Gestión del Aprendizaje",
        pregunta: "En una clase de 5to grado, el profesor hace una pregunta sobre fracciones y Juan levanta la mano, pero da una respuesta completamente errónea. Algunos compañeros se ríen. El profesor le dice a Juan: 'Totalmente mal, siéntate y presta atención'. Acto seguido, señala a la niña más inteligente para que dé la respuesta correcta. ¿Qué impacto profundo tiene esta gestión del error en el clima de aprendizaje?",
        opciones: [
            "A) Fomenta un 'clima de aula punitivo', donde el error es penalizado y humillado, lo que genera ansiedad, bloquea la participación futura de los estudiantes por miedo al ridículo y destruye la confianza necesaria para asumir retos cognitivos.",
            "B) Impacto positivo, porque ahorra tiempo y permite que la clase avance rápidamente hacia la respuesta correcta.",
            "C) Ningún impacto, los niños olvidan rápido y saben que el maestro es la autoridad.",
            "D) Fomenta la competitividad sana, motivando a Juan a estudiar más duro en su casa para no volver a equivocarse en público."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Clima de Aula (Estándares de Desempeño y Constructivismo). El aprendizaje requiere seguridad emocional. Si el error es sancionado y humillado públicamente, el cerebro infantil activa mecanismos de defensa (silencio/evasión). El docente efectivo 'celebra' el error como un paso lógico hacia el aprendizaje, utilizando preguntas para guiar al niño hacia la respuesta."
    },
    {
        id:649,
        categoria: "Comportamientos Profesionales",
        pregunta: "Un docente está inconforme con los resultados de su evaluación en el Ejercicio de Rendimiento Profesional (ERP) y planea no asistir al centro educativo en forma de protesta individual. Según las normativas del MINERD y los procedimientos de la Etapa V, ¿cuál es la vía correcta e institucional si existe inconformidad?",
        opciones: [
            "A) El docente debe agotar los recursos de revisión y apelación establecidos en el Reglamento de Evaluación del Desempeño a través de las instancias formales del MINERD (Distrito, Dirección de Evaluación), sin abandonar sus responsabilidades laborales y garantizando el derecho a la educación de sus alumnos.",
            "B) Iniciar una protesta abandonando el aula, ya que la huelga es la única vía reconocida para revisar evaluaciones docentes.",
            "C) Convocar a los padres para que firmen cartas pidiendo que le modifiquen la nota.",
            "D) Modificar su planificación para no dar clases completas hasta que le resuelvan el problema administrativo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Estatuto Docente y Reglamentación ERP. El abandono de aula por inconformidades personales o de evaluación es una falta grave. El sistema cuenta con mecanismos de apelación e instancias de revisión técnica (debido proceso) que el docente debe utilizar manteniendo la ética, su rol como servidor público y el interés superior del niño."
    },
    {
        id:650,
        categoria: "Planificación",
        pregunta: "El equipo de gestión escolar orienta a los maestros de primaria a no usar 'Contenidos Conceptuales' en sus planificaciones, argumentando que 'con el enfoque por competencias los conceptos ya no importan, solo importa lo procedimental y actitudinal'. ¿Cómo debe rebatir técnicamente un docente esta indicación errónea?",
        opciones: [
            "A) Aceptar la indicación del equipo de gestión, ya que ellos son la autoridad y el docente debe obedecer sin cuestionar.",
            "B) Argumentar que la competencia se define como la movilización integral de 'saber', 'saber hacer' y 'saber ser'. Los contenidos conceptuales (el saber) son imprescindibles porque constituyen la base teórica y cognitiva sobre la cual se apoyan los procedimientos y actitudes para resolver problemas.",
            "C) Sugerir que los conceptos solo se enseñen el último viernes del mes como un repaso extracurricular.",
            "D) Estar de acuerdo, ya que los conceptos se buscan en Google hoy en día y no vale la pena enseñarlos en la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular Dominicano (Naturaleza de las Competencias). Es un mito común creer que las competencias eliminan el contenido. No hay pensamiento crítico ni saber hacer sin un sustrato de conocimientos conceptuales sólidos. El cambio radica en que el concepto no es el fin último a memorizar, sino la herramienta (mediador) para actuar eficazmente."
    },
  {
    id: 651,
    categoria: "Alfabetización Inicial",
    grado: "1er grado de Primaria",
    pregunta: "Durante el mes de noviembre, un docente de 1er grado nota que tres de sus estudiantes aún se encuentran en una etapa presilábica de escritura, mientras el resto del grupo ha avanzado a niveles silábicos y alfabéticos. Ante esta situación, ¿cuál es la decisión pedagógica más adecuada según el enfoque de la Política Nacional de Alfabetización Inicial?",
    opciones: [
      "Derivar inmediatamente a los estudiantes al Espacio de Apoyo para que la especialista asuma la enseñanza de la lectura y escritura, ya que presentan un evidente retraso en su desarrollo.",
      "Asignarles cuadernillos de caligrafía y repetición de vocales de forma aislada para que refuercen la motricidad fina antes de integrarlos a las actividades de escritura del grupo.",
      "Integrar a los estudiantes en actividades de escritura y lectura con textos de circulación social, modelando el proceso, utilizando el nombre propio y fomentando la escritura espontánea sin penalizar el error.",
      "Eximir a los estudiantes de las actividades de producción escrita para evitar la frustración, esperando a que alcancen la madurez neurológica necesaria en el segundo cuatrimestre."
    ],
    respuestaCorrecta: 2,
    explicacion: "La alfabetización inicial concibe al sujeto como activo en la construcción del conocimiento. El enfoque oficial prohíbe la fragmentación (planas, sílabas aisladas) y promueve la inmersión en la cultura escrita mediante textos reales y significativos, respetando los niveles de conceptualización y utilizando el error como indicador de aprendizaje.",
    fundamentoNormativo: {
      documento: "Ordenanza 01-2023 (Política Nacional de Alfabetización Inicial)",
      seccion: "Enfoque Pedagógico de la Alfabetización",
      criterio: "Uso de textos en contextos sociales y respeto a los niveles de conceptualización",
      justificacion: "Se establece que la enseñanza debe partir de situaciones comunicativas reales, desechando métodos mecanicistas y respetando los ritmos de aprendizaje."
    },
    competenciaEvaluada: "Toma de decisiones pedagógicas y aplicación de estrategias de alfabetización inicial.",
    nivelDificultad: "Alta"
  },
  {
    id: 652,
    categoria: "Evaluación de los Aprendizajes",
    grado: "3er grado de Primaria",
    pregunta: "Al finalizar un proyecto sobre 'Mi comunidad', la docente debe asentar las calificaciones en el registro anecdótico y en el informe de aprendizaje. Un estudiante ha demostrado comprensión oral de los conceptos geográficos y participa activamente, pero sus producciones escritas presentan omisiones que no le permiten alcanzar plenamente el indicador de logro evaluado. ¿Cuál es la actuación correcta del docente?",
    opciones: [
      "Calificar con 'I' (Iniciado) en el indicador, ya que la producción escrita es el medio oficial e indispensable para evidenciar el logro de las competencias específicas.",
      "Calificar con 'EP' (En Proceso) y diseñar un plan de apoyo y retroalimentación que diversifique las formas de evaluación, permitiendo al estudiante evidenciar el logro mediante exposiciones u otros medios.",
      "Calificar con 'L' (Logrado) para proteger la autoestima del estudiante, dado que demostró oralmente que maneja el contenido, aunque no pueda plasmarlo en papel.",
      "Promediar las calificaciones de participación oral (Logrado) y producción escrita (Iniciado) para obtener una calificación intermedia justa y asentar 'EP'."
    ],
    respuestaCorrecta: 1,
    explicacion: "La evaluación en el Nivel Primario es criterial y formativa. El estado 'En Proceso' (EP) indica que el estudiante está en la ruta de alcanzar el indicador pero requiere andamiaje. Promediar o regalar la calificación invalida la naturaleza formativa, y calificar como 'I' ignorando sus fortalezas orales contradice los principios del DUA integrados en la evaluación.",
    fundamentoNormativo: {
      documento: "Ordenanza 04-2023 (Sistema de Evaluación de los Aprendizajes)",
      seccion: "Escala de Valoración y Evaluación Formativa",
      criterio: "Uso de la escala cualitativa (L, EP, I) y diseño de estrategias de recuperación",
      justificacion: "La ordenanza estipula que la evaluación debe ser continua e inclusiva, obligando al docente a ofrecer estrategias de apoyo (retroalimentación) cuando un indicador se encuentra en proceso."
    },
    competenciaEvaluada: "Interpretación de indicadores de logro y uso ético de la evaluación formativa.",
    nivelDificultad: "Alta"
  },
  {
    id: 653,
    categoria: "Educación Inclusiva y DUA",
    grado: "4to grado de Primaria",
    pregunta: "En un aula regular, un estudiante con diagnóstico de TDAH presenta severas dificultades para mantener la atención durante las lecturas prolongadas requeridas en el área de Lengua Española. Según las normativas de Educación Inclusiva, ¿cuál es la medida pedagógica apropiada que debe implementar el docente?",
    opciones: [
      "Solicitar a la dirección que el estudiante asista solo media jornada escolar para evitar disrupciones en el desarrollo de la secuencia didáctica del resto del grupo.",
      "Reducir las expectativas de logro del estudiante, eximiéndolo de las competencias de comprensión lectora compleja y evaluando solo la copia de textos cortos.",
      "Aplicar Ajustes Razonables fragmentando los textos, incorporando organizadores gráficos, permitiendo pausas activas y utilizando formatos multimodales (audiolibros) para evaluar la misma competencia.",
      "Condicionar la participación del estudiante en las clases de lectura a que asista acompañado de un tutor sombra costeado por la familia, garantizando el orden del aula."
    ],
    respuestaCorrecta: 2,
    explicacion: "El Diseño Universal para el Aprendizaje (DUA) y los Ajustes Razonables buscan eliminar barreras para el aprendizaje sin disminuir las expectativas de la competencia. Proporcionar múltiples formas de representación (audiolibros, organizadores) y de implicación (pausas activas) es un mandato normativo para estudiantes con TDAH.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 (Educación Inclusiva)",
      seccion: "Diseño Universal para el Aprendizaje y Ajustes Razonables",
      criterio: "Provisión de apoyos pedagógicos sin exclusión ni disminución de expectativas",
      justificacion: "Establece la obligatoriedad de realizar ajustes razonables en la metodología, los materiales y la evaluación para garantizar el acceso, permanencia y aprendizaje de los estudiantes con necesidades específicas."
    },
    competenciaEvaluada: "Aplicación de ajustes razonables y principios del DUA en la planificación y evaluación.",
    nivelDificultad: "Alta"
  },
  {
    id: 654,
    categoria: "Espacios de Apoyo / Trabajo Colaborativo",
    grado: "2do grado de Primaria",
    pregunta: "El equipo de gestión y la docente de aula regular deciden referir a un estudiante al Espacio de Apoyo a los Aprendizajes por presentar barreras significativas en el razonamiento lógico-matemático. ¿Cuál debe ser la dinámica de trabajo entre la docente regular y el especialista del Espacio de Apoyo?",
    opciones: [
      "La docente regular transfiere la responsabilidad de la calificación de Matemática al especialista, quien diseñará un currículo paralelo exclusivo para el estudiante.",
      "Ambos docentes co-planifican: la docente de aula realiza las adecuaciones en su plan diario y el especialista brinda intervenciones psicopedagógicas específicas, evaluando conjuntamente los progresos.",
      "El especialista del Espacio de Apoyo retira al estudiante del aula regular durante todas las horas de Matemática para evitar que se atrase más en relación con sus compañeros.",
      "La docente regular envía las tareas inacabadas al Espacio de Apoyo para que el especialista funcione como un tutor de reforzamiento escolar en horario extendido."
    ],
    respuestaCorrecta: 1,
    explicacion: "Los Espacios de Apoyo no son aulas de segregación ni centros de tutoría para hacer tareas. Su función es ofrecer apoyo psicopedagógico especializado en coordinación estrecha y co-planificación con el docente titular, manteniendo al estudiante en su entorno natural (aula regular) el mayor tiempo posible y evaluando de forma conjunta.",
    fundamentoNormativo: {
      documento: "Orientaciones para Espacios de Apoyo del MINERD y Ordenanza 05-2024",
      seccion: "Funciones y Articulación del Espacio de Apoyo",
      criterio: "Trabajo colaborativo y corresponsabilidad en el proceso educativo",
      justificacion: "La normativa dicta que el docente de aula es el responsable principal del estudiante, pero trabaja de manera articulada con el especialista para diseñar y ejecutar los apoyos requeridos."
    },
    competenciaEvaluada: "Gestión de apoyos pedagógicos y articulación colaborativa entre docentes.",
    nivelDificultad: "Alta"
  },
  {
    id: 655,
    categoria: "Gestión del Aula y Convivencia Escolar",
    grado: "5to grado de Primaria",
    pregunta: "Durante el recreo, dos estudiantes de 5to grado se enfrascan en una pelea física. Al intervenir, el docente observa que uno de los estudiantes tiene un golpe en el rostro. Siguiendo las Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa y la Ley 136-03, ¿qué procedimiento de actuación es el legal y éticamente correcto?",
    opciones: [
      "Suspender a ambos estudiantes por 3 días para dar el ejemplo al resto del centro educativo, asegurando así un ambiente de disciplina rígida.",
      "Ignorar el incidente si ambos estudiantes se piden disculpas y se dan la mano, ya que son conflictos típicos de la preadolescencia que se resuelven entre pares.",
      "Garantizar la atención médica inmediata, separar a los estudiantes sin violencia, reportar al equipo de gestión/orientación, informar a las familias y aplicar medidas de reparación y diálogo.",
      "Retener a los estudiantes en el aula durante todo el mes en los horarios de recreo como medida correctiva para evitar futuras agresiones físicas."
    ],
    respuestaCorrecta: 2,
    explicacion: "La Ley 136-03 (Código para la Protección de NNA) y las Normas de Convivencia prohíben las medidas punitivas, denigrantes o que violen el derecho a la educación (como suspensiones arbitrarias o encierros). Se debe priorizar la integridad física, la comunicación con las familias, el debido proceso y la aplicación de prácticas restaurativas a través de Orientación y Psicología.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      seccion: "Procedimientos ante Faltas Graves y Medidas Educativas",
      criterio: "Atención integral, debido proceso y enfoque restaurativo",
      justificacion: "Se prohíbe la expulsión o medidas que vulneren derechos. Se exige un abordaje pedagógico, disciplinario y formativo, garantizando la intervención de los equipos multidisciplinarios."
    },
    competenciaEvaluada: "Manejo de conflictos, protección integral y aplicación de normativas de convivencia.",
    nivelDificultad: "Alta"
  },
  {
    id: 656,
    categoria: "Planificación por Competencias",
    grado: "6to grado de Primaria",
    pregunta: "Un docente está planificando una Unidad de Aprendizaje en Ciencias de la Naturaleza. Al seleccionar las Competencias Específicas del grado, se da cuenta de que los estudiantes tienen un bajo dominio de los contenidos conceptuales previos. ¿Cómo debe proceder el docente para mantener el enfoque de la Adecuación Curricular 2023?",
    opciones: [
      "Abandonar temporalmente la enseñanza por competencias y dedicar el primer mes exclusivamente al dictado y memorización de los conceptos base requeridos.",
      "Diseñar situaciones de aprendizaje donde los contenidos conceptuales previos y nuevos se movilicen como medios (no como fines) para resolver problemas del contexto, evaluando las competencias específicas.",
      "Avanzar con la planificación tal como está en el diseño curricular para cumplir con el cronograma, ya que no es responsabilidad del docente de 6to grado subsanar las deficiencias de grados anteriores.",
      "Sustituir los indicadores de logro de 6to grado por los de 5to grado en el registro de evaluación oficial para evitar altos índices de reprobación."
    ],
    respuestaCorrecta: 1,
    explicacion: "En el currículo dominicano, los contenidos (conceptuales, procedimentales y actitudinales) son mediadores para el desarrollo de competencias. No se enseñan de forma aislada o memorística. El docente debe partir del nivel real de los estudiantes y utilizar situaciones de aprendizaje contextualizadas para movilizar los saberes, sin alterar los indicadores de evaluación oficiales del grado.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Adecuación Curricular 2023",
      seccion: "Estrategias de Planificación y Concepto de Competencia",
      criterio: "Los contenidos como mediadores de aprendizajes significativos",
      justificacion: "Las normativas establecen que la competencia es la capacidad de actuar de manera eficaz y autónoma en contextos diversos, integrando conceptos, procedimientos y actitudes, proscribiendo el enfoque enciclopedista."
    },
    competenciaEvaluada: "Diseño de situaciones de aprendizaje y articulación de elementos curriculares bajo el enfoque por competencias.",
    nivelDificultad: "Alta"
  },
  {
    id: 657,
    categoria: "Atención a la Diversidad / Discapacidad Intelectual",
    grado: "3er grado de Primaria",
    pregunta: "Una estudiante con Discapacidad Intelectual leve está integrada en el aula. En la clase de Matemática, el grupo está resolviendo problemas de multiplicación de dos dígitos. Según los lineamientos de Adecuaciones Curriculares, ¿qué acción docente garantiza el aprendizaje de la estudiante?",
    opciones: [
      "Exigirle que resuelva los mismos problemas que sus compañeros para no discriminarla, ofreciéndole únicamente más tiempo para entregar el examen.",
      "Asignarle dibujos para colorear mientras los demás trabajan en la multiplicación, garantizando que esté tranquila y no se sienta presionada.",
      "Realizar una adecuación curricular significativa: utilizar material concreto (bloques lógicos), simplificar el problema a sumas iteradas simples o multiplicaciones de un dígito, alineado a su Plan de Apoyo Individualizado (PAI).",
      "Solicitar a la familia que le enseñen las tablas de multiplicar en casa, ya que el docente de aula regular no tiene formación en Educación Especial."
    ],
    respuestaCorrecta: 2,
    explicacion: "Cuando un estudiante tiene una discapacidad cognitiva comprobada, se requieren Adecuaciones Curriculares (que pueden ser significativas). Esto implica modificar el nivel de complejidad del contenido y la evaluación, utilizando materiales concretos y garantizando una participación activa y significativa basada en su PAI, sin relegarla a actividades sin propósito académico (colorear).",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 y Lineamientos de Atención a la Diversidad",
      seccion: "Adecuaciones Curriculares Individualizadas",
      criterio: "Modificación de indicadores y contenidos según el perfil de apoyo",
      justificacion: "Se establece el derecho a recibir una educación pertinente mediante adecuaciones metodológicas, de contenido y evaluación (Plan de Apoyo Individualizado - PAI) elaboradas de forma conjunta."
    },
    competenciaEvaluada: "Implementación de adecuaciones curriculares significativas para estudiantes con discapacidad.",
    nivelDificultad: "Alta"
  },
  {
    id: 658,
    categoria: "Ética Profesional y Protección de NNA",
    grado: "1er a 6to grado de Primaria",
    pregunta: "Un docente de nivel primario nota reiteradamente que una estudiante llega a la escuela con signos de desnutrición, falta de higiene severa y, en ocasiones, moretones en los brazos. Al preguntarle, la niña se muestra evasiva y temerosa. ¿Cuál es el deber insoslayable del docente según el Código de Ética y la Ley 136-03?",
    opciones: [
      "Confrontar directamente al padre, madre o tutor a la salida de la escuela para exigirle explicaciones y amenazarlo con ir a la policía.",
      "Comprar alimentos para la niña y proporcionarle útiles de aseo personal de forma discreta, manteniendo el secreto para no causar problemas a la familia.",
      "Registrar objetivamente las observaciones, activar de inmediato el protocolo de prevención comunicando el caso a la unidad de Orientación y Psicología y a la Dirección para la debida notificación a las autoridades competentes (CONANI/Ministerio Público).",
      "Evitar involucrarse en asuntos familiares, ya que el rol del docente se limita exclusivamente al ámbito académico y de alfabetización dentro del aula."
    ],
    respuestaCorrecta: 2,
    explicacion: "La Ley 136-03 establece la obligación de denuncia (Sistema de Protección). El docente, como garante de derechos y servidor público, incurre en negligencia si calla. El protocolo exige no confrontar al agresor para no poner en mayor riesgo a la víctima, sino canalizar la situación institucionalmente a través de Orientación/Dirección hacia las autoridades.",
    fundamentoNormativo: {
      documento: "Ley 136-03 (Código para la Protección de NNA) y Orden Departamental 22-2023",
      seccion: "Sistema de Protección y Deber de Denuncia",
      criterio: "Obligación de denunciar vulneración de derechos ante autoridades competentes",
      justificacion: "La legislación nacional obliga a todo profesional de la educación a reportar cualquier sospecha de abuso, maltrato o negligencia contra un menor, estableciendo sanciones por omisión."
    },
    competenciaEvaluada: "Aplicación de protocolos de protección integral de la infancia y ética docente.",
    nivelDificultad: "Alta"
  },
  {
    id: 659,
    categoria: "Didáctica de las Ciencias Sociales / Pensamiento Crítico",
    grado: "4to grado de Primaria",
    pregunta: "Para desarrollar la competencia específica de 'Análisis del entorno geográfico y social', un docente de 4to grado desea abordar el tema de la migración campo-ciudad en la República Dominicana. ¿Cuál estrategia metodológica es la más coherente con el currículo por competencias?",
    opciones: [
      "Realizar un dictado extenso sobre las causas y consecuencias de la migración y evaluar mediante un examen de selección múltiple sobre fechas y estadísticas.",
      "Asignar como tarea que los estudiantes busquen en el diccionario la palabra 'migración' y la copien 10 veces en su cuaderno para mejorar la caligrafía.",
      "Presentar el relato de una familia local que se mudó a la ciudad, promover un debate guiado sobre los motivos (educación, salud, trabajo) y solicitar a los estudiantes que propongan mejoras para la vida en el campo.",
      "Proyectar un documental sobre la migración en Europa durante el siglo XIX para garantizar que los estudiantes adquieran una cultura general globalizada."
    ],
    respuestaCorrecta: 2,
    explicacion: "El currículo dominicano exige partir del contexto inmediato y significativo del estudiante (situación de aprendizaje). El análisis de un caso cercano (relato local) fomenta el pensamiento crítico y la propuesta de soluciones, movilizando conceptos sociales reales frente a la simple memorización o descontextualización (opciones A y D).",
    fundamentoNormativo: {
      documento: "Adecuación Curricular 2023",
      seccion: "Estrategias de Enseñanza y Aprendizaje",
      criterio: "Aprendizaje Basado en Casos y Problemas del Contexto",
      justificacion: "Establece que las Ciencias Sociales deben promover la criticidad, la identidad y la ciudadanía activa a través del análisis de problemáticas del contexto histórico y geográfico dominicano."
    },
    competenciaEvaluada: "Selección de estrategias didácticas activas para el desarrollo del pensamiento crítico.",
    nivelDificultad: "Alta"
  },
  {
    id: 660,
    categoria: "Evaluación Diagnóstica",
    grado: "1er grado de Primaria",
    pregunta: "Durante las primeras tres semanas del año escolar, el docente de 1er grado debe aplicar la evaluación diagnóstica. ¿Cuál es el propósito fundamental de este proceso según el Sistema de Evaluación de los Aprendizajes vigente?",
    opciones: [
      "Calificar a los estudiantes con notas numéricas preliminares para agruparlos en 'avanzados', 'regulares' y 'rezagados', ubicándolos en diferentes filas dentro del aula.",
      "Identificar los saberes previos, los estilos de aprendizaje, las fortalezas y las posibles barreras, con el fin de adecuar la planificación curricular a las necesidades reales del grupo.",
      "Cumplir con un requisito burocrático del Ministerio de Educación enviando las evidencias al distrito, para luego comenzar a impartir el programa oficial sin modificaciones.",
      "Determinar qué estudiantes no tienen el nivel de madurez para estar en 1er grado y solicitar a la dirección que los devuelva al Nivel Inicial."
    ],
    respuestaCorrecta: 1,
    explicacion: "La evaluación diagnóstica en el MINERD no tiene fines sumativos, punitivos ni de segregación. Su objetivo es estrictamente pedagógico: conocer el punto de partida bio-psico-social y cognitivo del estudiante para que el docente tome decisiones oportunas (ajustes a la planificación, estrategias diferenciadas). La retrogradación de grado es ilegal.",
    fundamentoNormativo: {
      documento: "Ordenanza 04-2023 (Sistema de Evaluación de los Aprendizajes)",
      seccion: "Tipos de Evaluación (Diagnóstica)",
      criterio: "Función de la evaluación al inicio de los procesos educativos",
      justificacion: "Se define la evaluación diagnóstica como un proceso continuo y sistemático al inicio del año o tema, que no lleva calificación sumativa, diseñado para adaptar las intervenciones pedagógicas a la diversidad del aula."
    },
    competenciaEvaluada: "Comprensión y aplicación de la función de la evaluación diagnóstica para la toma de decisiones curriculares.",
    nivelDificultad: "Alta"
  },
  {
    id: 661,
    categoria: "Comprensión Lectora y Evaluación",
    grado: "4to grado de Primaria",
    pregunta: "Durante la evaluación de una unidad sobre 'La Fábula', el docente desea comprobar si los estudiantes han alcanzado el indicador de logro relacionado con la comprensión inferencial. ¿Cuál de las siguientes actividades evaluativas es la correcta según el enfoque por competencias?",
    opciones: [
      "Solicitar a los estudiantes que subrayen con color rojo los nombres de todos los personajes y con azul los escenarios donde ocurre la historia.",
      "Pedir a los estudiantes que copien textualmente la moraleja de la fábula en sus cuadernos asegurando una correcta ortografía.",
      "Plantear preguntas donde los estudiantes deban deducir las motivaciones no explícitas de los personajes y explicar cómo esas acciones llevaron al desenlace, utilizando pistas del texto.",
      "Aplicar una prueba escrita de selección múltiple donde se evalúe exclusivamente la memorización de la biografía del autor de la fábula."
    ],
    respuestaCorrecta: 2,
    explicacion: "La comprensión inferencial exige que el estudiante trascienda la información literal (explícita) y construya significados a partir de pistas en el texto y sus saberes previos. Las opciones A y B evalúan niveles literales o motricidad/ortografía, mientras que la D es puramente memorística y desvinculada de la competencia de comprensión textual.",
    fundamentoNormativo: {
      documento: "Adecuación Curricular 2023",
      seccion: "Área de Lengua Española - Competencias Específicas",
      criterio: "Desarrollo de la comprensión literal, inferencial y crítica",
      justificacion: "El currículo establece que la lectura debe ser un proceso de construcción de significado, donde la inferencia es fundamental para el desarrollo del pensamiento crítico y la competencia comunicativa."
    },
    competenciaEvaluada: "Diseño de instrumentos y actividades para la evaluación formativa de la comprensión lectora inferencial.",
    nivelDificultad: "Alta"
  },
  {
    id: 662,
    categoria: "Espacios de Apoyo / Dificultades Específicas de Aprendizaje",
    grado: "3er grado de Primaria",
    pregunta: "Un estudiante de 3er grado presenta inversiones frecuentes de letras (b/d, p/q) y una lectura silabeada muy lenta, lo que afecta su comprensión. El equipo de gestión sospecha de una Dificultad Específica del Aprendizaje (Dislexia). ¿Cuál es la ruta de acción articulada entre el docente regular y el especialista del Espacio de Apoyo?",
    opciones: [
      "El docente de aula suspende la evaluación de lectura del estudiante y espera a que el especialista del Espacio de Apoyo lo diagnostique médicamente para poder actuar.",
      "El docente regular y el especialista diseñan un Plan de Apoyo que incluye estrategias multisensoriales, fomento de la conciencia fonológica y tiempo extendido en las evaluaciones, manteniendo al estudiante integrado.",
      "El especialista del Espacio de Apoyo retira al estudiante permanentemente de las clases de Lengua Española, ya que el currículo regular es inaccesible para él.",
      "Se califica al estudiante con 'I' (Iniciado) en todos los indicadores de lectura hasta que supere la dificultad motriz, sin realizar modificaciones en la metodología de enseñanza."
    ],
    respuestaCorrecta: 1,
    explicacion: "Las Dificultades Específicas de Aprendizaje (DEA) requieren intervenciones psicopedagógicas (no médicas) centradas en la estimulación de rutas de acceso al léxico (multisensorial, fonológica). La Ordenanza 05-2024 prohíbe la segregación; el trabajo debe ser colaborativo (docente-especialista) aplicando ajustes razonables como el tiempo extendido o la evaluación oral.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 y Orientaciones para Espacios de Apoyo",
      seccion: "Atención a Estudiantes con Dificultades Específicas de Aprendizaje (DEA)",
      criterio: "Implementación de apoyos psicopedagógicos inclusivos",
      justificacion: "Los Espacios de Apoyo promueven la inclusión temporal o intermitente de apoyos, priorizando siempre que el aprendizaje y la evaluación con ajustes razonables ocurran dentro del aula regular."
    },
    competenciaEvaluada: "Toma de decisiones pedagógicas frente a Dificultades Específicas del Aprendizaje mediante el trabajo colaborativo.",
    nivelDificultad: "Alta"
  },
  {
    id: 663,
    categoria: "Matemática / Resolución de Problemas",
    grado: "2do grado de Primaria",
    pregunta: "Para introducir la suma con reagrupación (llevando) en 2do grado, una docente busca movilizar la competencia de 'Resolución de Problemas'. ¿Qué estrategia metodológica es la más adecuada según las Bases de la Adecuación Curricular?",
    opciones: [
      "Escribir en la pizarra la regla matemática de 'sumar las unidades y llevar a las decenas', exigiendo que los estudiantes la memoricen antes de practicar.",
      "Diseñar una 'situación de aprendizaje' simulando un colmado en el aula, donde los estudiantes deban juntar cantidades de dinero escolar para comprar productos que exceden la decena.",
      "Entregar una ficha impresa con 50 operaciones aritméticas descontextualizadas para desarrollar la velocidad y el cálculo mental mecánico.",
      "Explicar el procedimiento paso a paso durante 45 minutos y luego evaluar inmediatamente a los estudiantes en la pizarra para verificar si prestaron atención."
    ],
    respuestaCorrecta: 1,
    explicacion: "El currículo dominicano es constructivista y sociocrítico. El aprendizaje de la matemática debe ser significativo y partir de situaciones del contexto real del estudiante (como un colmado). El uso de material concreto y representaciones lúdicas permite construir el concepto de reagrupación de forma comprensiva, evitando el mecanicismo de las opciones A, C y D.",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular / Adecuación 2023",
      seccion: "Estrategias de Enseñanza y Aprendizaje",
      criterio: "El juego y las situaciones de aprendizaje como estrategias didácticas",
      justificacion: "Se prioriza el aprendizaje basado en la resolución de problemas cotidianos, el uso de material concreto y la matematización del entorno del estudiante."
    },
    competenciaEvaluada: "Diseño de estrategias metodológicas activas y contextualizadas para el área de Matemática.",
    nivelDificultad: "Alta"
  },
  {
    id: 664,
    categoria: "Evaluación Formativa / Retroalimentación",
    grado: "5to grado de Primaria",
    pregunta: "Un estudiante de 5to grado entrega el primer borrador de un artículo expositivo. El texto contiene información valiosa, pero carece de una estructura lógica (introducción, desarrollo, conclusión). ¿Cuál es la forma normativamente correcta de ofrecer retroalimentación formativa?",
    opciones: [
      "Devolver el texto con las correcciones estructurales hechas en bolígrafo rojo por el docente, pidiendo al estudiante que pase el texto a limpio.",
      "Calificar el borrador con una nota baja para que el estudiante comprenda la gravedad de su error y se esfuerce más en la versión final.",
      "Elogiar el esfuerzo del estudiante diciendo '¡Muy buen trabajo!' sin señalar las deficiencias, para proteger su motivación intrínseca.",
      "Resaltar las ideas valiosas del texto y realizar preguntas orientadoras (ej. '¿Qué información crees que debería ir al principio para atrapar al lector?'), devolviendo el borrador para su revisión."
    ],
    respuestaCorrecta: 3,
    explicacion: "La evaluación formativa exige que la retroalimentación sea descriptiva, reflexiva y prospectiva. Corregir todo en rojo (A) anula la autonomía; penalizar un borrador (B) contradice la evaluación procesual; y elogiar sin guía (C) no genera aprendizaje. Las preguntas orientadoras obligan al estudiante a activar su metacognición y reconstruir su texto.",
    fundamentoNormativo: {
      documento: "Ordenanza 04-2023 (Sistema de Evaluación de los Aprendizajes)",
      seccion: "Evaluación Formativa y Retroalimentación",
      criterio: "Uso de la retroalimentación como andamiaje para el aprendizaje",
      justificacion: "La ordenanza define la retroalimentación como un proceso dialógico que permite al estudiante identificar sus aciertos y aspectos a mejorar, siendo protagonista de la regulación de su propio aprendizaje."
    },
    competenciaEvaluada: "Aplicación de estrategias de retroalimentación efectiva en procesos de producción escrita.",
    nivelDificultad: "Alta"
  },
  {
    id: 665,
    categoria: "Educación Inclusiva / TEA",
    grado: "1er grado de Primaria",
    pregunta: "En un aula de 1er grado, un estudiante con Trastorno del Espectro Autista (TEA) Nivel 1 experimenta crisis de ansiedad, tapándose los oídos y llorando cuando se realizan cambios abruptos de actividad o durante actos cívicos ruidosos. ¿Qué ajuste razonable es imperativo aplicar?",
    opciones: [
      "Obligar al estudiante a permanecer en los actos cívicos sin protección para que se 'desensibilice' y se adapte al mundo real.",
      "Reportar las crisis como 'indisciplina' en el registro anecdótico y solicitar a la familia que lo mantenga en casa durante los días de actividades ruidosas.",
      "Anticipar los cambios de rutina mediante una agenda visual (pictogramas) en su butaca y permitir el uso de auriculares canceladores de ruido o la retirada a un espacio de calma cuando la sobrecarga sensorial lo requiera.",
      "Eximirlo de todas las competencias de Ciencias Sociales relacionadas con los símbolos patrios, ya que no puede asistir a los actos cívicos."
    ],
    respuestaCorrecta: 2,
    explicacion: "Los estudiantes con TEA frecuentemente presentan desórdenes de procesamiento sensorial y necesidad de predictibilidad. Obligarlos a soportar el ruido es maltrato; excluirlos vulnera su derecho a la educación. Los ajustes razonables (agendas visuales, auriculares, espacios de calma) eliminan la barrera del entorno sin disminuir la expectativa académica.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 (Educación Inclusiva)",
      seccion: "Ajustes Razonables y Apoyos Individualizados",
      criterio: "Modificación del entorno y provisión de apoyos materiales/organizativos",
      justificacion: "Garantiza el derecho a apoyos específicos que respondan a las características sensoriales y de neurodesarrollo del estudiantado, asegurando su confort y participación."
    },
    competenciaEvaluada: "Implementación de ajustes razonables en el entorno y las rutinas para estudiantes neurodivergentes.",
    nivelDificultad: "Alta"
  },
  {
    id: 666,
    categoria: "Convivencia Escolar / Prevención de Acoso",
    grado: "6to grado de Primaria",
    pregunta: "El docente titular nota que un grupo de tres estudiantes de 6to grado emite constantemente burlas crueles sobre el aspecto físico de una compañera, quien se muestra retraída y ha bajado su rendimiento. Según las Normas de Convivencia, ¿cuál es el proceder inicial obligatorio?",
    opciones: [
      "Ignorar la situación asumiendo que los niños a esa edad deben aprender a defenderse por sí mismos para fortalecer su carácter.",
      "Obligar a los tres agresores a pedir disculpas públicas frente a toda el aula para que sientan vergüenza y no lo vuelvan a hacer.",
      "Intervenir de inmediato para detener las burlas, documentar las incidencias, notificar al Departamento de Orientación y Psicología para activar el protocolo de acoso escolar e informar a las familias.",
      "Expulsar a los tres estudiantes involucrados de manera definitiva del centro educativo para garantizar un ambiente seguro para la víctima."
    ],
    respuestaCorrecta: 2,
    explicacion: "El acoso escolar (bullying) es una falta tipificada que exige intervención inmediata. Las disculpas públicas forzadas (B) victimizan y humillan; la expulsión (D) viola el derecho a la educación de los agresores menores de edad. El protocolo correcto exige frenar la acción, proteger a la víctima, documentar e involucrar al equipo multidisciplinario para aplicar medidas restaurativas y socioeducativas.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      seccion: "Clasificación de Faltas y Protocolo de Actuación ante Acoso",
      criterio: "Intervención inmediata, protección y debido proceso",
      justificacion: "Establece los pasos obligatorios ante el acoso escolar: detección, comunicación a Orientación y Psicología, protección de la víctima, entrevista con familias y aplicación de medidas educativas, prohibiendo prácticas humillantes."
    },
    competenciaEvaluada: "Aplicación de protocolos de convivencia escolar y abordaje temprano del acoso.",
    nivelDificultad: "Alta"
  },
  {
    id: 667,
    categoria: "Planificación por Competencias",
    grado: "4to grado de Primaria",
    pregunta: "Al planificar el tema de 'La hidrósfera y la contaminación del agua', el docente debe articular las Competencias Específicas de Ciencias de la Naturaleza con las Competencias Fundamentales. ¿De qué manera se evidencia correctamente esta articulación en el diseño de las actividades?",
    opciones: [
      "Mencionando la 'Competencia Ambiental y de la Salud' en el encabezado de la planificación, aunque la evaluación consista solo en definir qué es la hidrósfera.",
      "Diseñando un proyecto de aula donde los estudiantes investiguen las fuentes de agua de su comunidad, propongan una campaña de concientización y asuman compromisos para su cuidado.",
      "Asignando una tarea de investigación sobre los ríos más largos del mundo para que los estudiantes adquieran cultura general.",
      "Realizando un examen sorpresa sobre los estados del agua para garantizar la Competencia de Pensamiento Lógico, Creativo y Crítico."
    ],
    respuestaCorrecta: 1,
    explicacion: "En el currículo dominicano, las Competencias Fundamentales son transversales y deben movilizarse a través de las Competencias Específicas. No basta con declararlas en papel (opción A). Deben evidenciarse en la acción (saber actuar) mediante metodologías activas (como un proyecto) que integren conceptos, procedimientos y actitudes hacia la resolución de un problema real (opción B).",
    fundamentoNormativo: {
      documento: "Bases de la Revisión y Actualización Curricular",
      seccion: "Articulación de las Competencias Fundamentales y Específicas",
      criterio: "Transversalidad y coherencia metodológica",
      justificacion: "Las Competencias Fundamentales expresan las intenciones educativas de mayor relevancia y se desarrollan de manera transversal a través de situaciones de aprendizaje significativas en todas las áreas curriculares."
    },
    competenciaEvaluada: "Articulación coherente entre competencias fundamentales, específicas y actividades de aprendizaje.",
    nivelDificultad: "Alta"
  },
  {
    id: 668,
    categoria: "Ciencias de la Naturaleza / Indagación Científica",
    grado: "5to grado de Primaria",
    pregunta: "La Adecuación Curricular 2023 en Ciencias de la Naturaleza enfatiza la competencia de 'Resolución de problemas científicos y tecnológicos'. Si un docente desea desarrollar esta competencia al enseñar los circuitos eléctricos, ¿cuál es la intervención pedagógica adecuada?",
    opciones: [
      "Dictar a los estudiantes las definiciones de circuito en serie y en paralelo para que las copien íntegramente en sus cuadernos.",
      "Mostrar una lámina de un circuito eléctrico y pedir a los estudiantes que calquen el dibujo en sus mascotas y lo coloreen.",
      "Proveer baterías, cables y bombillas a pequeños grupos y retarlos a lograr que la bombilla encienda, registrando sus intentos, fallos y conclusiones (hipótesis y comprobación).",
      "Proyectar un video explicativo de 40 minutos sobre cómo funcionan los circuitos sin permitir preguntas o interacción, para asegurar que escuchen a un experto."
    ],
    respuestaCorrecta: 2,
    explicacion: "El área de Ciencias de la Naturaleza se basa en la indagación, la observación y el método científico adaptado al nivel. Proveer materiales y un desafío (reto) permite a los estudiantes construir el conocimiento a través del ensayo, el error y la formulación de hipótesis, lo cual desarrolla genuinamente la competencia científica, superando la transmisión pasiva de información.",
    fundamentoNormativo: {
      documento: "Adecuación Curricular 2023",
      seccion: "Área de Ciencias de la Naturaleza - Enfoque del Área",
      criterio: "Alfabetización científica y tecnológica a través de la indagación",
      justificacion: "El currículo establece que las ciencias se aprenden haciendo ciencias, promoviendo la experimentación, el trabajo colaborativo y la construcción activa del conocimiento mediante la indagación."
    },
    competenciaEvaluada: "Diseño de estrategias basadas en la indagación para el desarrollo de competencias científicas.",
    nivelDificultad: "Alta"
  },
  {
    id: 669,
    categoria: "Alfabetización Inicial / Producción Escrita",
    grado: "2do grado de Primaria",
    pregunta: "Al revisar las producciones escritas (un cuento corto) de sus estudiantes de 2do grado, la docente nota que varios de ellos presentan 'hiposegmentación' (escriben varias palabras juntas sin espacios, ej: 'elperrocorre'). Según la Política Nacional de Alfabetización Inicial, ¿qué intervención docente es pertinente?",
    opciones: [
      "Arrancar la hoja de la mascota y ordenarles que escriban el cuento nuevamente de forma correcta, como castigo por su descuido.",
      "Bajar puntos en la calificación final del período porque a estas alturas del 2do grado los estudiantes ya no deberían cometer errores básicos de segmentación.",
      "Realizar ejercicios de revisión guiada: leer la oración en voz alta dando palmadas por cada palabra, y pedir al estudiante que cuente las palmadas para identificar dónde deben ir los espacios.",
      "Ignorar el error completamente porque corregir la escritura puede traumatizar al estudiante y frenar su proceso de libre expresión."
    ],
    respuestaCorrecta: 2,
    explicacion: "La hiposegmentación es una etapa evolutiva normal en el proceso de adquisición de la escritura. El docente no debe castigar ni ignorar el error, sino utilizarlo como oportunidad de aprendizaje. Las estrategias fonológicas (como las palmadas por palabra) ayudan al estudiante a tomar conciencia léxica (separación de palabras) y a autorregular su propia escritura (revisión de borradores).",
    fundamentoNormativo: {
      documento: "Ordenanza 01-2023 (Política Nacional de Alfabetización Inicial)",
      seccion: "Procesos de Producción Escrita y Revisión",
      criterio: "Intervención docente constructiva y uso de estrategias de conciencia fonológica y léxica",
      justificacion: "Plantea que el error es un indicador del nivel de conceptualización del estudiante, y el docente debe proveer andamiajes (como separar auditivamente las palabras) para que el niño alcance la escritura convencional."
    },
    competenciaEvaluada: "Análisis de producciones escritas e intervención pedagógica ante errores constructivos de segmentación.",
    nivelDificultad: "Alta"
  },
  {
    id: 670,
    categoria: "Ética Docente y Participación Familiar",
    grado: "1er a 6to grado de Primaria",
    pregunta: "Al finalizar el primer período de evaluación, una madre se presenta en la escuela visiblemente alterada y le grita a la docente frente a otros padres en el pasillo, exigiendo saber por qué su hijo tiene 'EP' (En Proceso) en matemáticas. ¿Cuál es el proceder ético y profesional que debe asumir la docente?",
    opciones: [
      "Responder con el mismo tono de voz para imponer autoridad y dejar claro quién es la profesional dentro del centro educativo.",
      "Invitar a la madre a pasar a un espacio privado, mantener la calma, aplicar la escucha activa y mostrarle el portafolio de evidencias del estudiante junto a la rúbrica de evaluación para explicar el proceso objetivamente.",
      "Modificar inmediatamente la calificación de 'EP' a 'L' (Logrado) en el registro oficial para evitar un conflicto mayor que pueda perjudicar la imagen del centro.",
      "Negarse rotundamente a conversar con la madre y llamar a la seguridad escolar para que la expulse del recinto por falta de respeto."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Código de Ética y los Estándares de Desempeño exigen que el docente demuestre inteligencia emocional, respete a las familias y garantice la transparencia de la evaluación. Discutir en público, alterar actas (falta grave) o negar la información son acciones inaceptables. El docente debe desescalar el conflicto, privatizar la conversación y basar sus argumentos en evidencias pedagógicas (portafolio/rúbrica).",
    fundamentoNormativo: {
      documento: "Orden Departamental 22-2023 (Código de Ética) y Estándares de Desempeño Docente",
      seccion: "Relación con las Familias y Transparencia en la Evaluación",
      criterio: "Manejo profesional de conflictos y rendición de cuentas basada en evidencias",
      justificacion: "Se requiere del docente una actitud de respeto, empatía y comunicación asertiva con las familias, utilizando los instrumentos de evaluación oficiales para justificar los niveles de logro de manera objetiva y transparente."
    },
    competenciaEvaluada: "Manejo ético de las relaciones con las familias, resolución de conflictos y sustentación de la evaluación.",
    nivelDificultad: "Alta"
  },
  {
    id: 671,
    categoria: "Espacios de Apoyo / Trabajo Colaborativo",
    grado: "3er grado de Primaria",
    pregunta: "En un centro educativo del Distrito 0707, la orientadora escolar, como parte del programa de inducción, se encuentra estructurando el horario y la dinámica del Espacio de Apoyo a los Aprendizajes. Un docente de 3er grado le envía a cinco estudiantes argumentando que 'tienen mala conducta y no prestan atención', solicitando que el Espacio de Apoyo asuma su escolaridad diaria hasta que mejoren su comportamiento. ¿Cuál es la respuesta técnica y normativa correcta que debe ofrecer la orientadora?",
    opciones: [
      "Aceptar a los cinco estudiantes en el Espacio de Apoyo durante toda la jornada escolar, diseñando un plan de modificación de conducta basado en castigos y recompensas hasta que estén listos para volver al aula.",
      "Aclarar al docente que el Espacio de Apoyo tiene una naturaleza psicopedagógica para intervenir barreras específicas del aprendizaje, no disciplinaria. En su lugar, proponer una co-evaluación en el aula regular para identificar posibles barreras metodológicas y diseñar estrategias de DUA y convivencia de manera conjunta.",
      "Rechazar a los estudiantes y enviar un reporte de indisciplina directamente al Distrito Educativo, ya que la gestión del comportamiento es responsabilidad exclusiva del docente titular y no compete al equipo de Orientación y Psicología.",
      "Asignar a los estudiantes al Espacio de Apoyo, pero solo durante las horas de recreo y educación física, utilizándolo como un espacio de aislamiento reflexivo para que comprendan las consecuencias de su mala conducta."
    ],
    respuestaCorrecta: 1,
    explicacion: "Los Espacios de Apoyo no son aulas de castigo, aislamiento ni segregación para estudiantes con dificultades conductuales. Según las Orientaciones del MINERD, su propósito es ofrecer apoyo psicopedagógico frente a barreras de aprendizaje específicas, promoviendo el trabajo colaborativo (co-enseñanza) con el docente titular para que el estudiante permanezca y participe en su aula regular aplicando el DUA.",
    fundamentoNormativo: {
      documento: "Orientaciones para los Espacios de Apoyo a los Aprendizajes y Ordenanza 05-2024",
      seccion: "Naturaleza y Funciones de los Espacios de Apoyo",
      criterio: "Prohibición de uso del Espacio de Apoyo con fines disciplinarios o de exclusión",
      justificacion: "Se establece claramente que los Espacios de Apoyo brindan respuestas pedagógicas a las Necesidades Específicas de Apoyo Educativo (NEAE) y no deben utilizarse para segregar por problemas de conducta."
    },
    competenciaEvaluada: "Gestión de los Espacios de Apoyo y articulación docente-orientador basada en el enfoque inclusivo.",
    nivelDificultad: "Alta"
  },
  {
    id: 672,
    categoria: "Planificación por Competencias / Situación de Aprendizaje",
    grado: "5to grado de Primaria",
    pregunta: "El equipo docente de 5to grado de la Regional 07 está diseñando una unidad didáctica integral. Al revisar la Adecuación Curricular 2023, constatan que deben articular las áreas de Ciencias de la Naturaleza (cambio climático) y Lengua Española (el artículo expositivo). ¿Cuál es la estrategia de planificación más coherente con el enfoque por competencias para lograr un aprendizaje profundo y articulado?",
    opciones: [
      "Dividir el horario estrictamente: impartir los conceptos climáticos el lunes mediante copiado de pizarra, y el martes enseñar las reglas gramaticales del artículo expositivo utilizando ejemplos genéricos de libros de texto.",
      "Diseñar un 'Eje Temático' donde los estudiantes primero memoricen un glosario de términos ambientales y luego realicen un examen escrito de respuestas cortas para evaluar ambas áreas por separado.",
      "Formular una Situación de Aprendizaje basada en un problema ambiental de la comunidad local. A partir de ella, estructurar un Proyecto de Aula donde la investigación de las causas del cambio climático (Ciencias) sirva como insumo real para planificar, redactar y publicar artículos expositivos (Lengua Española) dirigidos a la comunidad.",
      "Solicitar a los estudiantes que recorten noticias sobre el clima en los periódicos y las peguen en una cartulina, calificando esta actividad con una 'L' (Logrado) en los indicadores de logro de ambas asignaturas simultáneamente."
    ],
    respuestaCorrecta: 2,
    explicacion: "El currículo dominicano promueve la integración de las áreas a través de estrategias como el Aprendizaje Basado en Proyectos (ABP) y las Situaciones de Aprendizaje. Articular Ciencias y Lengua Española significa usar los contenidos conceptuales (cambio climático, estructura del texto expositivo) como mediadores para desarrollar competencias comunicativas y científicas en un contexto real y significativo (publicar para la comunidad).",
    fundamentoNormativo: {
      documento: "Bases de la Adecuación Curricular 2023",
      seccion: "Estrategias de Articulación de las Áreas Curriculares",
      criterio: "Uso de proyectos de aula y situaciones de aprendizaje contextualizadas",
      justificacion: "Se mandata la integración de los saberes superando la fragmentación disciplinar, permitiendo que el estudiante movilice conocimientos de diferentes áreas para resolver un problema o crear un producto."
    },
    competenciaEvaluada: "Diseño de planificaciones articuladas interdisciplinarmente mediante metodologías activas.",
    nivelDificultad: "Alta"
  },
  {
    id: 673,
    categoria: "Evaluación de los Aprendizajes / Escala Cualitativa",
    grado: "2do grado de Primaria",
    pregunta: "Al finalizar el primer período académico, un docente de 2do grado asienta las evaluaciones en el registro escolar. Observa que una estudiante tiene 'I' (Iniciado) en la mayoría de los indicadores de logro correspondientes a la competencia de Resolución de Problemas Matemáticos. Ante este escenario, ¿cuál es el mandato normativo que debe seguir el docente?",
    opciones: [
      "Mantener la calificación y sugerir formalmente a la dirección que la estudiante repita el 2do grado al finalizar el año, argumentando que no posee las habilidades cognitivas necesarias para avanzar.",
      "Ignorar el nivel 'I' y colocar 'EP' (En Proceso) por lástima, para no desmotivar a la estudiante y evitar cuestionamientos por parte de las autoridades distritales.",
      "Registrar la calificación real ('I') e inmediatamente diseñar e implementar un Plan de Apoyo Pedagógico (recuperación) con estrategias diferenciadas, informando a la familia y al equipo de gestión para dar seguimiento durante el siguiente período.",
      "Exigir a la familia que inscriba a la estudiante en tutorías privadas fuera de la escuela como condición obligatoria para permitirle continuar asistiendo a las clases de matemáticas."
    ],
    respuestaCorrecta: 2,
    explicacion: "La evaluación en el Sistema Educativo Dominicano es formativa y continua. La calificación 'I' (Iniciado) no es un sello de fracaso, sino una alerta temprana. La normativa obliga al docente a intervenir pedagógicamente mediante un Plan de Apoyo/Recuperación durante el año escolar, involucrando a la familia, sin recurrir a falsificación de notas (B) ni a condicionamientos ilegales (D).",
    fundamentoNormativo: {
      documento: "Ordenanza 04-2023 (Sistema de Evaluación de los Aprendizajes)",
      seccion: "Estrategias de Apoyo y Recuperación Pedagógica",
      criterio: "Obligatoriedad de planes de apoyo oportunos frente al rezago",
      justificacion: "Establece que cuando un estudiante no alcanza los indicadores previstos (Iniciado), el centro educativo debe implementar estrategias de intervención pedagógica inmediata y continua, evitando esperar al final del año escolar."
    },
    competenciaEvaluada: "Interpretación ética de los resultados de evaluación y diseño de intervenciones de recuperación.",
    nivelDificultad: "Alta"
  },
  {
    id: 674,
    categoria: "Alfabetización Inicial / Conciencia Fonológica y Léxica",
    grado: "1er grado de Primaria",
    pregunta: "Durante una extensa secuencia didáctica sobre los 'Nombres Propios', un docente de 1er grado identifica que la mayoría de sus estudiantes se encuentra en una etapa de conceptualización silábico-alfabética (asignan valor sonoro a algunas letras, pero omiten otras en una misma palabra). ¿Qué intervención pedagógica es la más efectiva y apegada a la Política de Alfabetización Inicial?",
    opciones: [
      "Abandonar el trabajo con textos y nombres propios, regresando a la enseñanza exclusiva del abecedario en orden estricto (A, B, C...) hasta que lo reciten de memoria sin equivocaciones.",
      "Entregar planas intensivas de sílabas trabadas y compuestas (pra, pre, pri / bra, bre, bri) para forzar la maduración neurológica de la escritura convencional.",
      "Promover situaciones donde los estudiantes escriban de manera espontánea (por ejemplo, listas de asistencia o carteles del aula) e interactúen con el docente como 'escriba', formulando preguntas de reflexión metalingüística (¿Qué letras nos faltan aquí para que diga 'Camila'?).",
      "Corregir todas las producciones escritas de los estudiantes con un lápiz rojo, obligándoles a borrar y copiar la palabra correcta de la pizarra sin mayor explicación."
    ],
    respuestaCorrecta: 2,
    explicacion: "La transición de la etapa silábica a la alfabética requiere conflicto cognitivo mediado por el docente. Las planas mecánicas y la memorización aislada del abecedario están proscritas por la Política de Alfabetización. La mediación (docente como escriba) y la reflexión sobre el sistema de escritura (preguntas metalingüísticas sobre textos reales) son las estrategias que garantizan la apropiación de la lectoescritura.",
    fundamentoNormativo: {
      documento: "Ordenanza 01-2023 (Política Nacional de Alfabetización Inicial)",
      seccion: "Estrategias de Enseñanza de la Lectura y la Escritura",
      criterio: "Intervención docente basada en el socioconstructivismo y la reflexión",
      justificacion: "El enfoque demanda que los estudiantes participen en prácticas sociales del lenguaje. El docente debe problematizar las hipótesis infantiles sobre la escritura mediante la lectura compartida y la escritura mediada."
    },
    competenciaEvaluada: "Aplicación de estrategias constructivistas frente a los distintos niveles de apropiación del sistema de escritura.",
    nivelDificultad: "Alta"
  },
  {
    id: 675,
    categoria: "Educación Inclusiva / Ajustes Razonables (Discapacidad Visual)",
    grado: "4to grado de Primaria",
    pregunta: "Una estudiante de 4to grado presenta 'Baja Visión' diagnosticada, lo que le dificulta acceder a la información escrita en la pizarra y en los libros de texto regulares, generándole frustración y rezago. Como parte del Plan de Apoyo Individualizado (PAI), ¿qué Ajustes Razonables de acceso al currículo debe implementar el docente de aula?",
    opciones: [
      "Ubicar a la estudiante preferencialmente cerca de la pizarra, utilizar macrotipos (fuentes ampliadas), aumentar el contraste en los materiales impresos, verbalizar todo lo que se escribe en la pizarra y permitirle grabar las clases explicativas.",
      "Disminuir la dificultad de los contenidos de 4to grado y evaluarla con los indicadores de 1er grado, ya que su baja visión le impide desarrollar un pensamiento abstracto de un nivel superior.",
      "Delegar toda la responsabilidad de enseñanza a un compañero 'tutor' que tenga buena visión, para que le dicte todas las clases y le lea los libros durante el año escolar, liberando al docente de esa carga.",
      "Solicitar a la dirección que exija a la familia la compra de una máquina Braille; hasta que no la adquieran, la estudiante solo será evaluada mediante participación oral."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Baja Visión requiere 'Ajustes Razonables de Acceso' (modificación del entorno, materiales y vías de comunicación), no necesariamente ajustes curriculares significativos (bajar el nivel del contenido). Usar macrotipos, ubicar estratégicamente, usar alto contraste y verbalizar la pizarra garantizan el acceso a la información cumpliendo los principios del Diseño Universal para el Aprendizaje (DUA).",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 y Diseño Universal para el Aprendizaje (DUA)",
      seccion: "Ajustes Razonables y Medidas de Accesibilidad",
      criterio: "Provisión de formatos múltiples de representación visual y auditiva",
      justificacion: "Establece el derecho a recibir formatos accesibles y la obligación del centro de modificar el entorno físico y metodológico para eliminar las barreras de aprendizaje derivadas de una condición sensorial."
    },
    competenciaEvaluada: "Diseño e implementación de ajustes razonables de acceso para estudiantes con discapacidad sensorial.",
    nivelDificultad: "Alta"
  },
  {
    id: 676,
    categoria: "Convivencia Escolar / Cultura de Paz y Disciplina Positiva",
    grado: "6to grado de Primaria",
    pregunta: "Un docente de 6to grado enfrenta un clima de aula tenso: los estudiantes se interrumpen constantemente, se levantan sin permiso y utilizan un vocabulario inapropiado, impidiendo el desarrollo de las secuencias didácticas. Conforme a las Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa, ¿cuál es el abordaje pedagógico inicial correcto para esta problemática amplia?",
    opciones: [
      "Amenazar a todo el grupo con restar 10 puntos de la calificación final de cada estudiante y suspender los recreos durante un mes completo como medida de castigo ejemplarizante.",
      "Ignorar las disrupciones y continuar dictando la clase, asumiendo que los estudiantes que realmente quieren aprender prestarán atención, dejando a los demás a su suerte.",
      "Detener temporalmente el avance del programa de contenidos para realizar círculos de diálogo restaurativo, analizando las causas del clima de aula y construyendo colectivamente Acuerdos de Convivencia con compromisos y consecuencias lógicas claras.",
      "Remitir un listado con los nombres de todos los estudiantes del curso al Ministerio Público de Niños, Niñas y Adolescentes, alegando ingobernabilidad del salón de clases."
    ],
    respuestaCorrecta: 3,
    explicacion: "La disciplina punitiva, las sanciones colectivas, la restricción de derechos (quitar recreos) o la disminución de calificaciones por conducta son acciones ilegales según las normativas dominicanas. La solución debe ser formativa: aplicar prácticas restaurativas (círculos de diálogo) y co-construir normas de aula (Acuerdos de Convivencia) fomenta la autorregulación, la responsabilidad y una genuina Cultura de Paz.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      seccion: "Estrategias Preventivas y de Intervención Formativa",
      criterio: "Uso de prácticas restaurativas y construcción colectiva de normas de aula",
      justificacion: "Promueve la disciplina positiva y prohíbe el uso de la evaluación académica como instrumento de castigo conductual, exigiendo un abordaje pedagógico del conflicto escolar."
    },
    competenciaEvaluada: "Gestión de un clima de aula positivo mediante prácticas restaurativas y disciplina formativa.",
    nivelDificultad: "Alta"
  },
  {
    id: 677,
    categoria: "Matemáticas / Modelización y Representación",
    grado: "3er grado de Primaria",
    pregunta: "En 3er grado, la docente va a introducir el concepto de fracción como 'parte de un todo' (1/2, 1/4). Para asegurar que los estudiantes desarrollen la competencia de Pensamiento Lógico, Creativo y Crítico y no solo mecanicen la escritura de números fraccionarios, ¿qué secuencia didáctica plantea el enfoque oficial de la Adecuación Curricular?",
    opciones: [
      "Escribir directamente en la pizarra: 'Numerador indica las partes que se toman y el Denominador las partes en que se divide el entero', exigiendo que lo repitan en voz alta.",
      "Partir de un problema real (ej. repartir de manera equitativa frutas reales o de plástico entre los miembros de un grupo), transitar al uso de material concreto estructurado (regletas o bloques), luego pasar a la representación gráfica (dibujos) y finalmente a la simbólica (números).",
      "Asignar una plana en el cuaderno donde los estudiantes deban copiar el número '1/2' repetidas veces hasta llenar la hoja para desarrollar la caligrafía matemática.",
      "Proyectar un video donde un profesor extranjero explica las fracciones algebraicas complejas, para que los niños se vayan adaptando al rigor del Nivel Secundario."
    ],
    respuestaCorrecta: 2,
    explicacion: "El aprendizaje de la Matemática en el Nivel Primario sigue el enfoque CPA (Concreto - Pictórico/Gráfico - Abstracto/Simbólico). Introducir un concepto abstracto (fracciones) únicamente de forma verbal o simbólica genera dificultades severas de aprendizaje. Partir de la manipulación concreta para resolver un problema cotidiano garantiza la comprensión profunda del concepto antes de llegar a la notación numérica.",
    fundamentoNormativo: {
      documento: "Adecuación Curricular 2023",
      seccion: "Área de Matemática - Estrategias de Enseñanza",
      criterio: "Progresión de representaciones: de lo concreto a lo abstracto",
      justificacion: "Indica que la matemática debe enseñarse modelando situaciones de la vida real, utilizando recursos manipulativos que permitan a los estudiantes construir gradualmente el sentido de las operaciones y los números."
    },
    competenciaEvaluada: "Aplicación de la secuencia didáctica Concreto-Pictórico-Abstracto (CPA) en la enseñanza matemática.",
    nivelDificultad: "Alta"
  },
  {
    id: 678,
    categoria: "Ciencias Sociales / Pensamiento Histórico",
    grado: "4to grado de Primaria",
    pregunta: "Al abordar el proceso de la Independencia Nacional Dominicana, el docente busca desarrollar la competencia específica que requiere que los estudiantes 'identifiquen el pasado histórico y su relación con el presente'. ¿Qué actividad promueve este nivel de pensamiento sociocrítico, alejándose del memorismo tradicional?",
    opciones: [
      "Realizar un dictado extenso sobre las batallas del 27 de febrero, exigiendo a los estudiantes que memoricen la fecha exacta y los nombres completos de todos los próceres.",
      "Organizar un certamen donde los estudiantes reciten la biografía de Juan Pablo Duarte sin cometer ningún error de dicción, premiando a quien hable más rápido.",
      "Analizar de forma guiada fragmentos sencillos del Juramento Trinitario (como fuente primaria) y organizar un debate o juego de roles donde los estudiantes comparen los ideales de libertad de esa época con los derechos ciudadanos en la actualidad.",
      "Evaluar a los estudiantes mediante una prueba de 'Falso o Verdadero' que contenga únicamente preguntas sobre los años en que nacieron los padres de la Patria."
    ],
    respuestaCorrecta: 3,
    explicacion: "El área de Ciencias Sociales en la actual Adecuación Curricular rechaza el enfoque enciclopedista e historicista puro (nombres y fechas aisladas). El objetivo es formar sujetos críticos. Analizar documentos (adaptados) y hacer conexiones entre el pasado y el presente (juegos de rol, debates) desarrolla verdaderamente el 'pensamiento histórico' y la competencia de ciudadanía responsable.",
    fundamentoNormativo: {
      documento: "Adecuación Curricular 2023",
      seccion: "Área de Ciencias Sociales - Enfoque Curricular",
      criterio: "Construcción de la ciudadanía y análisis de continuidad y cambio",
      justificacion: "Se fundamenta en la formación ético-ciudadana, donde la historia no es letra muerta, sino un medio para entender el presente, fomentando el análisis crítico y la valoración de la identidad nacional."
    },
    competenciaEvaluada: "Diseño de actividades para el desarrollo del pensamiento crítico-histórico en Ciencias Sociales.",
    nivelDificultad: "Alta"
  },
  {
    id: 679,
    categoria: "Evaluación Formativa / Rúbricas de Evaluación",
    grado: "5to grado de Primaria",
    pregunta: "Para el cierre de un Proyecto de Ciencias, los estudiantes de 5to grado deberán presentar un experimento frente a la comunidad educativa. El docente ha diseñado una rúbrica analítica detallada para evaluar la competencia de 'Comunicación Científica'. Según los principios de la Evaluación Formativa del MINERD, ¿cuál es el uso metodológicamente correcto de este instrumento?",
    opciones: [
      "Mantener la rúbrica en secreto y utilizarla únicamente durante el evento final para sorprender a los estudiantes y obtener una calificación más objetiva sin sesgos.",
      "Entregar la rúbrica a la dirección del centro como mero requisito administrativo, pero calificar a los estudiantes basándose en su impresión general y esfuerzo el día del evento.",
      "Compartir, analizar y explicar la rúbrica a los estudiantes desde el inicio del proyecto, utilizándola como guía de trabajo durante las fases de preparación para promover la autoevaluación y la mejora continua.",
      "Usar la rúbrica exclusivamente para calificar negativamente a los grupos que no trajeron los materiales, registrando el cero de forma automática en el sistema."
    ],
    respuestaCorrecta: 3,
    explicacion: "La rúbrica no es solo un instrumento de calificación sumativa, es fundamentalmente una herramienta de aprendizaje y andamiaje. Transparentar los criterios de evaluación desde el inicio permite a los estudiantes comprender las expectativas, regular su propio esfuerzo, y practicar la autoevaluación y co-evaluación, pilares del modelo formativo dominicano.",
    fundamentoNormativo: {
      documento: "Ordenanza 04-2023 (Sistema de Evaluación de los Aprendizajes)",
      seccion: "Instrumentos de Evaluación y Transparencia",
      criterio: "Uso de la rúbrica para la autorregulación de los aprendizajes",
      justificacion: "La evaluación debe ser transparente, participativa y formativa. El estudiante tiene derecho a conocer previamente los criterios con los que será evaluado para orientar su propio proceso de aprendizaje."
    },
    competenciaEvaluada: "Uso transparente y formativo de los instrumentos de evaluación (rúbricas).",
    nivelDificultad: "Alta"
  },
  {
    id: 680,
    categoria: "Atención a la Diversidad / Prevención del Rezago y la Exclusión",
    grado: "1er grado de Primaria",
    pregunta: "En una comunidad rural vulnerable, una docente de 1er grado tiene un estudiante que falta frecuentemente a clases (ausentismo crónico) porque debe cuidar a sus hermanos menores. Su nivel de alfabetización es muy inicial respecto al grupo. Ante este caso amplio y multifactorial, ¿qué actuación docente salvaguarda el derecho a la educación integral?",
    opciones: [
      "Dar de baja al estudiante en el registro escolar por inasistencia prolongada, asumiendo que la familia no está interesada en su educación y cediendo el cupo a otro niño.",
      "Acumular las tareas y enviarlas a la casa al final del mes, advirtiendo a la familia que, si el niño no las trae resueltas, no será promovido al siguiente grado.",
      "Notificar inmediatamente al equipo de gestión/orientación para indagar las causas (visita domiciliaria preventiva), diseñar un plan de apoyo curricular flexible para los días que asiste, y articular con instancias de protección si hay vulneración de derechos.",
      "Ignorar sus ausencias y limitarse a ponerle un 'EP' (En Proceso) permanente en las calificaciones, dejando que apruebe por edad sin importar que no aprenda a leer."
    ],
    respuestaCorrecta: 3,
    explicacion: "El ausentismo crónico y el trabajo infantil (cuidado de hermanos) constituyen vulneraciones de derechos. La expulsión o 'dar de baja' es una práctica ilegal. El rol docente trasciende lo pedagógico: debe reportar la situación para activar la red de protección escolar (Orientación, visitas domiciliarias), mientras provee apoyos flexibles para garantizar el aprendizaje inclusivo sin promover una promoción automática irresponsable.",
    fundamentoNormativo: {
      documento: "Ley 136-03 y Lineamientos de Atención a la Diversidad del MINERD",
      seccion: "Garantía del Derecho a la Educación y Retención Escolar",
      criterio: "Prevención del abandono escolar y articulación interinstitucional",
      justificacion: "El Estado y sus agentes (docentes/escuelas) deben garantizar la permanencia escolar, interviniendo activamente frente a situaciones sociales o familiares que obstaculicen el acceso continuo a la educación, priorizando el interés superior del niño."
    },
    competenciaEvaluada: "Identificación de factores de riesgo escolar, prevención del abandono y garantía del derecho a la educación.",
    nivelDificultad: "Alta"
  },
  {
    id: 681,
    categoria: "Educación Inclusiva / Altas Capacidades",
    grado: "4to grado de Primaria",
    pregunta: "En una escuela de Jornada Escolar Extendida, un estudiante de 4to grado completa todas las actividades de resolución de problemas matemáticos complejos en los primeros 10 o 15 minutos de la clase, mostrando una precisión del 100%. Durante el resto del período (que dura 45 minutos), el estudiante se muestra impaciente, interrumpe a sus compañeros que aún trabajan con material concreto o se aísla a dibujar. Ante esta situación amplia de potencial Alta Capacidad intelectual, ¿cuál es la respuesta pedagógica correcta según la Ordenanza 05-2024?",
    opciones: [
      "Asignarle el doble de operaciones matemáticas del mismo nivel de complejidad para mantenerlo ocupado durante todo el período y evitar que altere el orden del aula.",
      "Nombrarlo de forma permanente como 'monitor' o 'ayudante' para que les explique y les resuelva los problemas a los compañeros rezagados, liberando de esta carga al docente titular.",
      "Implementar una estrategia de enriquecimiento curricular dentro del aula regular, diseñando desafíos de mayor complejidad cognitiva, de investigación o de aplicación tecnológica, alineados con su Plan de Apoyo Individualizado (PAI).",
      "Solicitar al equipo de gestión la promoción automática e inmediata del estudiante al 6to grado de Primaria de manera administrativa, sin pasar por una evaluación psicopedagógica exhaustiva."
    ],
    respuestaCorrecta: 2,
    explicacion: "Para los estudiantes con Altas Capacidades, la normativa dominicana establece la estrategia de enriquecimiento curricular y la profundización de los contenidos dentro de su propio entorno inclusivo. Aumentar la cantidad de tareas repetitivas (opción A) genera frustración; usarlo permanentemente de monitor (opción B) vulnera su derecho a seguir aprendiendo a su ritmo; y la aceleración o promoción anticipada (opción D) requiere un protocolo riguroso de evaluación psicopedagógica y aprobación distrital, nunca de forma automática.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 (Educación Inclusiva) y Lineamientos de Atención a la Diversidad",
      seccion: "Atención Educativa a Estudiantes con Altas Capacidades",
      criterio: "Enriquecimiento curricular y diseño de planes de apoyo individualizados",
      justificacion: "La normativa dictamina que se deben ofrecer respuestas educativas diferenciadas a través de adaptaciones curriculares por enriquecimiento o ampliación vertical de los contenidos, evitando el estancamiento cognitivo del estudiante."
    },
    competenciaEvaluada: "Diseño de estrategias de enriquecimiento curricular para la atención a estudiantes con altas capacidades bajo un enfoque inclusivo.",
    nivelDificultad: "Alta"
  },
  {
    id: 682,
    categoria: "Alfabetización Inicial / Comprensión Lectora",
    grado: "2do grado de Primaria",
    pregunta: "Durante una evaluación formativa de lectura fluida en 2do grado de Primaria, el docente utiliza un texto narrativo breve. Un estudiante realiza la decodificación de manera sumamente veloz y con una entonación aceptable; sin embargo, al retirarle el texto y plantearle preguntas literales e inferenciales sencillas (como '¿Por qué se marchó el personaje principal?'), el niño es incapaz de responder o inventa datos ajenos a la lectura. Basado en la Política Nacional de Alfabetización Inicial, ¿qué enfoque de intervención debe priorizar el docente?",
    opciones: [
      "Continuar aplicando pruebas cronometradas de velocidad lectora (palabras por minuto) diariamente, asumiendo que la velocidad eventualmente generará la comprensión de forma automática.",
      "Desplazar el foco de la decodificación mecánica hacia la enseñanza explícita de estrategias de comprensión lectora, tales como el monitoreo cognitivo, las predicciones guiadas, el uso de organizadores gráficos y el diálogo reflexivo sobre el texto antes, durante y después de la lectura.",
      "Remitir al estudiante inmediatamente al Espacio de Apoyo bajo la sospecha de un trastorno del lenguaje expresivo, ya que su capacidad de lectura oral no coincide con su nivel de lenguaje comprensivo.",
      "Sustituir la lectura de textos reales por el copiado de enunciados largos y el dictado de palabras sueltas para que el estudiante fije la estructura de las frases en su memoria a largo plazo."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Política Nacional de Alfabetización Inicial postula que saber leer no es simplemente decodificar o emitir sonidos de forma fluida (lectura mecánica), sino construir activamente el significado del texto. Cuando un estudiante presenta fluidez pero nula comprensión, el docente debe intervenir enseñando estrategias metacognitivas y de andamiaje textual, evitando enfoques fragmentados (planas, dictados) o derivaciones apresuradas sin intervención áulica previa.",
    fundamentoNormativo: {
      documento: "Ordenanza 01-2023 (Política Nacional de Alfabetización Inicial)",
      seccion: "Comprensión Lectora en el Primer Ciclo de Primaria",
      criterio: "Desarrollo de la lectura comprensiva frente a la decodificación mecánica",
      justificacion: "Establece que la alfabetización es un proceso integral e interactivo donde la prioridad absoluta es el desarrollo de las competencias comunicativas y el procesamiento crítico de la información escrita, desestimando la memorización o repetición descontextualizada."
    },
    competenciaEvaluada: "Identificación de necesidades de comprensión lectora y diseño de intervenciones didácticas de andamiaje cognitivo.",
    nivelDificultad: "Alta"
  },
  {
    id: 683,
    categoria: "Evaluación de los Aprendizajes / Promoción y Rezago",
    grado: "6to grado de Primaria",
    pregunta: "Al cierre del tercer período de evaluación en 6to grado de Primaria, un estudiante presenta una situación académica crítica: ha obtenido la valoración de 'Iniciado' (I) en tres de los indicadores esenciales de la competencia específica de 'Resolución de Problemas' en Matemática y en dos indicadores de 'Producción Escrita' en Lengua Española. Conforme al Sistema de Evaluación de los Aprendizajes de la República Dominicana, ¿cuál es el procedimiento normativo obligatorio que debe ejecutar el docente?",
    opciones: [
      "Declarar al estudiante automáticamente reprobado en el grado debido a la cantidad de indicadores en estado 'Iniciado', notificando a la familia que no tiene derecho a participar en el proceso de recuperación final.",
      "Promover al estudiante al Nivel Secundario asignándole una calificación de 'Logrado' (L) por concepto de 'promoción social', con la intención de evitar la sobreedad y proteger sus indicadores socioemocionales.",
      "Diseñar, registrar y ejecutar de forma obligatoria un Plan de Recuperación Pedagógica Intensiva específico para esos indicadores rezagados durante el período fijado por el calendario escolar, evaluando posteriormente mediante instrumentos diversificados si el estudiante logra la transición a 'En Proceso' o 'Logrado'.",
      "Aplicar una única prueba escrita sumativa tradicional de 50 preguntas que abarque todo el programa del año; si el estudiante la reprueba, se le mantendrá en el mismo grado sin más oportunidades."
    ],
    respuestaCorrecta: 2,
    explicacion: "La Ordenanza 04-2023 establece que ningún estudiante de Primaria puede ser reprobado o abandonado a su suerte sin que el centro educativo agote formalmente los períodos y planes de recuperación pedagógica intensiva. El docente debe estructurar un plan enfocado de forma precisa en los indicadores que están en 'Iniciado' y evaluarlos de manera diversificada para determinar su promoción legítima, prohibiendo tanto la reprobación arbitraria como la promoción automática sin evidencias de aprendizaje.",
    fundamentoNormativo: {
      documento: "Ordenanza 04-2023 (Sistema de Evaluación de los Aprendizajes)",
      seccion: "Procesos de Recuperación Pedagógica y Condiciones de Promoción",
      criterio: "Derecho a la recuperación continua y diversificación de las técnicas de evaluación",
      justificacion: "Dispone que las escuelas deben garantizar espacios de andamiaje y tutorías a los estudiantes que muestren dificultades acumuladas, evaluando sus progresos respecto a los indicadores específicos antes de emitir un dictamen final de permanencia en el grado."
    },
    competenciaEvaluada: "Gestión normativa de los procesos de recuperación pedagógica y toma de decisiones de promoción basadas en criterios oficiales.",
    nivelDificultad: "Alta"
  },
  {
    id: 684,
    categoria: "Convivencia Escolar / Entornos Digitales y Protección",
    grado: "5to grado de Primaria",
    pregunta: "Una docente de 5to grado de Primaria descubre, durante el transcurso de la jornada escolar, que un grupo sustancial de estudiantes del aula ha creado un grupo de mensajería digital fuera del horario escolar. En dicho espacio virtual, comparten imágenes editadas (memes) de carácter denigrante y ofensivo sobre el aspecto físico y el origen social de una estudiante del curso. La estudiante afectada se encuentra llorando en el baño y manifiesta no querer regresar a la escuela. ¿Cuál es el curso de acción institucional correcto y prioritario según las Normas de Convivencia Armoniosa?",
    opciones: [
      "Archivar el caso argumentando que, al haberse originado el grupo virtual fuera del horario y del recinto escolar, el centro educativo carece de jurisdicción legal para intervenir en las conductas digitales privadas de los estudiantes.",
      "Confiscar de manera indefinida los teléfonos móviles de todos los implicados y prohibir el uso de cualquier tecnología dentro de la escuela, eximiendo a las familias de la discusión para evitar fricciones comunitarias.",
      "Contener emocionalmente a la estudiante afectada, reportar la situación de forma inmediata a la dirección y al equipo de Orientación y Psicología, citar formalmente a las familias de los estudiantes involucrados (tanto agresores como víctima) para levantar un acta y aplicar medidas educativas de carácter restaurativo y de concienciación digital.",
      "Exponer públicamente los nombres de los estudiantes agresores durante el acto cívico de la mañana para que reciban la sanción moral de la comunidad escolar y sirva como desincentivo general."
    ],
    respuestaCorrecta: 2,
    explicacion: "Las Normas de Convivencia Armoniosa del MINERD establecen que cualquier situación que altere significativamente el bienestar socioemocional de un estudiante y afecte su permanencia escolar debe ser abordada por la escuela, aun si se origina digitalmente. El protocolo impone la intervención del equipo multidisciplinario, el trabajo obligatorio con los padres, madres o tutores, y el diseño de medidas socioeducativas y restaurativas, prohibiendo las humillaciones públicas o la inacción por razones de horario.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      seccion: "Abordaje del Ciberacoso y Faltas Graves contra la Integridad Moral",
      criterio: "Corresponsabilidad de la escuela y aplicación de medidas formativas restaurativas",
      justificacion: "La normativa obliga al personal docente y administrativo a intervenir ante cualquier manifestación de acoso (físico, verbal o digital) que vulnere los derechos de los niños, niñas y adolescentes, vinculando a las familias en la resolución formativa del conflicto."
    },
    competenciaEvaluada: "Aplicación de protocolos de convivencia escolar frente a situaciones complejas de ciberacoso y protección de NNA.",
    nivelDificultad: "Alta"
  },
  {
    id: 685,
    categoria: "Matemática / Resolución de Problemas (Geometría)",
    grado: "5to grado de Primaria",
    pregunta: "En la planificación del bloque de Geometría para 5to grado de Primaria, el docente identifica un indicador de logro que evalúa la 'capacidad de calcular el perímetro y el área de superficies poligonales regulares en situaciones del contexto'. Para evitar la memorización mecánica de fórmulas descontextualizadas ($P = n \times l$, $A = \frac{P \times a}{2}$), ¿cuál situación de aprendizaje resulta metodológicamente idónea bajo el enfoque curricular vigente?",
    opciones: [
      "Escribir las fórmulas en cartulinas grandes, pegarlas en las paredes del aula y exigir que los estudiantes las copien en sus cuadernos y las reciten al inicio de cada clase durante dos semanas.",
      "Plantear un problema real de la escuela: calcular la cantidad de metros de malla ciclónica necesarios para cercar el huerto escolar de forma pentagonal y la cantidad de abono orgánico requerido para cubrir toda su superficie, guiando a los estudiantes a deducir los conceptos mediante la medición directa con cinta métrica.",
      "Asignar como tarea que los estudiantes busquen en internet la definición de 'apotema' y resuelvan una guía impresa de 30 ejercicios numéricos abstractos sin vinculación con objetos reales.",
      "Eximir de la evaluación del área a los estudiantes que presenten dificultades de cálculo, permitiéndoles únicamente medir el perímetro con una regla para no complicar su proceso de aprendizaje."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Adecuación Curricular 2023 promueve la modelización y la matematización de la realidad. Enfrentar a los estudiantes a un problema real de su entorno (como el huerto escolar) les exige movilizar los conceptos procedimentales de medición, comprender la diferencia cualitativa entre longitud (perímetro) y superficie (área) y construir el pensamiento lógico antes de la formalización simbólica de las fórmulas abstractas.",
    fundamentoNormativo: {
      documento: "Adecuación Curricular 2023",
      seccion: "Área de Matemática - Competencia de Resolución de Problemas",
      criterio: "Uso del entorno inmediato para la construcción de conceptos geométricos",
      justificacion: "Establece que el aprendizaje de la geometría y las magnitudes debe cimentarse en la exploración del espacio, la estimación y la resolución de situaciones prácticas del contexto comunitario o escolar."
    },
    competenciaEvaluada: "Diseño de situaciones de aprendizaje contextualizadas para el desarrollo de competencias del pensamiento lógico-matemático.",
    nivelDificultad: "Alta"
  },
  {
    id: 686,
    categoria: "Espacios de Apoyo / Detección y Referimiento",
    grado: "1er grado de Primaria",
    pregunta: "Transcurridos los dos primeros meses del año escolar, una docente de 1er grado de Primaria observa que un estudiante muestra un retraso psicomotor severo, dificultades extremas para articular frases de más de dos palabras y una ausencia casi total de respuestas a los estímulos de lectoescritura, mostrando además conductas de aislamiento. La docente desea que el niño sea evaluado de manera especializada. Según la Ordenanza 05-2024 y las orientaciones para Espacios de Apoyo, ¿cuál es el procedimiento formal y secuencial correcto que debe seguir?",
    opciones: [
      "Redactar una nota en la libreta de comunicaciones ordenando a la madre que no vuelva a enviar al niño a la escuela hasta que traiga un diagnóstico médico definitivo emitido por un neurólogo privado.",
      "Llevar al estudiante directamente al Espacio de Apoyo durante su hora de clases sin previo aviso y dejarlo bajo el cuidado de la especialista para que esta asuma su diagnóstico y escolarización exclusiva.",
      "Sustentar el caso con evidencias (producciones, registro anecdótico), aplicar ajustes razonables iniciales de forma interna en el aula, consultar con el equipo de Orientación y Psicología del centro para iniciar el proceso de evaluación psicopedagógica y, si es necesario, tramitar el referimiento conjunto al Espacio de Apoyo o al CAD.",
      "Esperar a que finalice el año escolar y calificar al estudiante con 'I' (Iniciado) en todos los campos, asumiendo que el proceso de maduración biológica corregirá las dificultades de forma natural en el siguiente grado."
    ],
    respuestaCorrecta: 2,
    explicacion: "El protocolo de atención a las Necesidades Específicas de Apoyo Educativo (NEAE) en la República Dominicana exige un proceso escalonado: detección por el docente, recolección de evidencias objetivas, implementación de ajustes en el aula regular, interconsulta con Orientación y Psicología de la escuela y, a partir de ahí, la intervención articulada con el Espacio de Apoyo o el Centro de Atención a la Diversidad (CAD). No se puede excluir al estudiante ni saltarse las instancias del centro de forma unilateral.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 (Educación Inclusiva) y Orientaciones para Espacios de Apoyo",
      seccion: "Proceso de Identificación, Evaluación Psicopedagógica y Referimiento",
      criterio: "Actuación protocolarizada y corresponsabilidad institucional del equipo docente",
      justificacion: "Determina de forma estricta la ruta para la solicitud de apoyos especializados, colocando al docente de aula y al orientador del centro como los primeros agentes responsables de la detección y adaptaciones iniciales."
    },
    competenciaEvaluada: "Aplicación de la ruta normativa e institucional para la detección, evaluación y referimiento de estudiantes con presuntas NEAE.",
    nivelDificultad: "Alta"
  },
  {
    id: 687,
    categoria: "Ciencias Sociales / Educación Ciudadana",
    grado: "3er grado de Primaria",
    pregunta: "En el marco del desarrollo de la competencia específica 'Ciudadanía responsable y democrática', un docente de 3er grado de Primaria planifica una unidad sobre las instituciones gubernamentales locales y los derechos ciudadanos en el municipio. Para lograr un aprendizaje sociocrítico y evitar el dictado pasivo de las funciones del Ayuntamiento, ¿qué estrategia didáctica es la idónea según el enfoque de la Adecuación Curricular?",
    opciones: [
      "Organizar una simulación en el aula de una 'Asamblea Comunitaria del Ayuntamiento Infantil', donde los estudiantes identifiquen un problema real de su entorno (como la acumulación de basura o la falta de iluminación en los parques), asuman roles (Alcalde, Regidores, Ciudadanos) y propongan soluciones basadas en sus derechos y deberes.",
      "Ordenar a los estudiantes que memoricen el organigrama completo del Ayuntamiento de su municipio y los nombres de todos los regidores actuales para evaluarlos en una prueba oral cronometrada.",
      "Asignar la lectura individual de la Ley de Municipios en su formato legal original y solicitar un resumen escrito de 5 páginas para entregar al día siguiente.",
      "Proyectar fotografías de los monumentos históricos de la provincia y pedir a los estudiantes que las calquen en sus cuadernos utilizando papel transparente."
    ],
    respuestaCorrecta: 0,
    explicacion: "La simulación de procesos democráticos (como un ayuntamiento infantil) constituye una estrategia didáctica activa recomendada en el currículo dominicano para las Ciencias Sociales. Permite a los estudiantes del primer ciclo comprender conceptos cívicos abstractos a través de la vivencia, la argumentación y la búsqueda de soluciones a problemas comunitarios reales, logrando un aprendizaje significativo y funcional alejado de la memorización estéril de datos políticos.",
    fundamentoNormativo: {
      documento: "Adecuación Curricular 2023",
      seccion: "Área de Ciencias Sociales - Enfoque Pedagógico del Primer Ciclo",
      criterio: "Promoción de la participación democrática y el aprendizaje vivencial",
      justificacion: "Señala que las Ciencias Sociales deben potenciar la formación de una ciudadanía crítica y participativa a través de estrategias metodológicas que recreen la vida social y democrática en el entorno escolar."
    },
    competenciaEvaluada: "Selección y diseño de estrategias didácticas vivenciales para el desarrollo de competencias ciudadanas en Ciencias Sociales.",
    nivelDificultad: "Alta"
  },
  {
    id: 688,
    categoria: "Ciencias de la Naturaleza / Indagación y Sostenibilidad",
    grado: "6to grado de Primaria",
    pregunta: "Un docente de 6to grado de Primaria observa que los estudiantes desperdician grandes cantidades de papel y plástico durante las horas de recreo, dejando los desechos esparcidos en el patio del plantel. Con el propósito de desarrollar de manera transversal la Competencia Fundamental Ambiental y de la Salud y la competencia específica del área sobre 'Ofrecer soluciones a problemas ambientales', ¿cuál es el diseño didáctico correcto para abordar esta problemática amplia?",
    opciones: [
      "Establecer una jornada de castigo donde los estudiantes que tiren basura deban permanecer después de la hora de salida a limpiar todo el centro educativo de forma obligatoria.",
      "Diseñar e implementar un Proyecto de Investigación de Aula (PIA) enfocado en la gestión de residuos sólidos en el centro, donde los estudiantes cuantifiquen la basura generada, investiguen los tiempos de degradación de los materiales, diseñen estaciones de clasificación de desechos y realicen campañas de concienciación basadas en evidencias científicas.",
      "Dictar una conferencia magistral de dos horas sobre la historia del ecologismo global, prohibiendo la intervención de los alumnos para optimizar el tiempo de transmisión de los datos teóricos.",
      "Suspender las clases de Ciencias de la Naturaleza del mes y sustituirlas por la visualización pasiva de documentales sobre la contaminación de los océanos en otros continentes."
    ],
    respuestaCorrecta: 1,
    explicacion: "El Proyecto de Investigación de Aula (PIA) es una de las estrategias de articulación curricular y metodológica de mayor relevancia en el enfoque dominicano por competencias, especialmente en Ciencias de la Naturaleza. Al involucrar activamente a los estudiantes en la recolección de datos de su propia realidad, el análisis científico de su entorno y la propuesta de soluciones viables, se promueve el pensamiento científico, el cambio actitudinal y el aprendizaje con impacto social.",
    fundamentoNormativo: {
      documento: "Bases de la Adecuación Curricular 2023 y Documentos Orientadores del MINERD",
      seccion: "Estrategias de Enseñanza-Aprendizaje: El Proyecto de Investigación de Aula",
      criterio: "Investigación científica escolar y asunción de posturas proambientales",
      justificacion: "El currículo determina que el estudiante debe aprender a aplicar el método de indagación científica frente a problemas socioambientales locales, generando un impacto directo en el desarrollo sostenible de su comunidad educativa."
    },
    competenciaEvaluada: "Diseño y gestión de Proyectos de Investigación de Aula orientados al desarrollo de competencias de indagación y cuidado ambiental.",
    nivelDificultad: "Alta"
  },
  {
    id: 689,
    categoria: "Ética Docente / Conducta Profesional y Transparencia",
    grado: "1er a 6to grado de Primaria",
    pregunta: "Un grupo de madres de un centro educativo en San Francisco de Macorís se organiza para ofrecerle al docente de sus hijos un obsequio económico significativo en efectivo y el pago de un curso técnico privado, argumentando que desean manifestar su gratitud por las atenciones brindadas. Al mismo tiempo, solicitan de manera sutil que el docente 'considere con flexibilidad' las bajas calificaciones de sus hijos en los reportes del registro del próximo período. Según la Orden Departamental 22-2023 sobre Ética y Conducta Profesional, ¿cuál es el comportamiento imperativo del docente?",
    opciones: [
      "Aceptar el dinero y el curso privado discretamente, asumiendo que es un incentivo justo a su labor pedagógica y modificando las calificaciones de los niños en el registro como muestra de reciprocidad y cortesía.",
      "Rechazar categóricamente el beneficio económico y los favores formativos propuestos, explicar de forma asertiva a las familias que la evaluación se rige estrictamente por indicadores de logro objetivos y reportar de inmediato el intento de condicionamiento a la Dirección del centro educativo.",
      "Aceptar el obsequio material para no ofender la cultura local y la generosidad de las familias, pero mantener las calificaciones bajas de los estudiantes sin realizar los cambios prometidos.",
      "Sugerir a las madres que entreguen el dinero en forma de materiales de lujo para la remodelación del aula del docente, evitando así el rastro de dinero en efectivo y eludiendo las normativas del Ministerio."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Orden Departamental 22-2023 y el Código de Ética de la Carrera Docente prohíben de forma absoluta la recepción de beneficios económicos, dádivas, regalos valiosos o favores personales que comprometan la objetividad, la transparencia y la honestidad de la función pública docente, de manera especial cuando se pretende coaccionar o alterar el proceso criterial de evaluación de los aprendizajes, lo cual constituye una falta grave pasible de sanción disciplinaria.",
    fundamentoNormativo: {
      documento: "Orden Departamental 22-2023 (Código de Ética y Conducta Profesional del MINERD)",
      seccion: "De los Conflictos de Interés, Prohibiciones y Régimen de Integridad",
      criterio: "Prohibición absoluta de recibir dádivas o prebendas a cambio de favores académicos",
      justificacion: "Establece que el personal docente debe actuar bajo los principios de integridad, probidad y transparencia, teniendo estrictamente prohibido aceptar compensaciones externas que alteren la objetividad de sus funciones evaluativas y del registro escolar."
    },
    competenciaEvaluada: "Resolución de dilemas éticos profesionales y aplicación del régimen de integridad del servidor público docente.",
    nivelDificultad: "Alta"
  },
  {
    id: 690,
    categoria: "Alfabetización Inicial / Niveles de Conceptualización de la Escritura",
    grado: "1er grado de Primaria",
    pregunta: "Al inicio del segundo cuatrimestre en 1er grado de Primaria, el docente realiza un análisis de las escrituras espontáneas del grupo. Nota que un estudiante realiza grafismos continuos y pseudoletras alineadas de izquierda a derecha, exigiendo que para que diga una palabra debe haber un mínimo de tres caracteres distintos (aplicando las hipótesis de cantidad mínima y variedad interna). El niño afirma con convicción que allí dice 'Mariposa'. Según el enfoque oficial de alfabetización, ¿en qué nivel de conceptualización se encuentra el estudiante y qué estrategia de mediación es la normativamente adecuada?",
    opciones: [
      "Se encuentra en el nivel Alfabético. Se debe proceder a enseñarle el uso correcto de las reglas ortográficas complejas ($b/v$, $c/s/z$) mediante el dictado de textos formales extensos.",
      "Se encuentra en el nivel Silábico. La estrategia idónea es obligarlo a repetir las sílabas aisladas de la palabra ($ma-ri-po-sa$) en la pizarra hasta que memorice la combinación convencional de las letras.",
      "Se encuentra en el nivel Presilábico. La estrategia de mediación consiste en confrontar sus hipótesis promoviendo la lectura de textos reales, el uso de letras móviles para armar su nombre y palabras cortas, y la comparación de escrituras con sus compañeros para generar conflicto cognitivo.",
      "Se encuentra en un estado de Rezago Cognitivo Irreversible. Debe ser excluido del proceso regular de alfabetización de 1er grado y remitido de forma definitiva a un centro de educación especial."
    ],
    respuestaCorrecta: 2,
    explicacion: "El estudiante demuestra de forma clara características del nivel Presilábico, donde aún no establece una correspondencia entre los sonidos de la lengua oral y las grafías de la lengua escrita, pero ya maneja criterios de legibilidad (cantidad y variedad). El enfoque constructivista de la Ordenanza 01-2023 prescribe que la mediación docente debe respetar esta hipótesis evolutiva y plantear situaciones retadoras (letras móviles, textos de circulación social) que desestabilicen su pensamiento presilábico para avanzar al nivel silábico, proscribiendo los castigos o las visiones mecanicistas de las opciones B y D.",
    fundamentoNormativo: {
      documento: "Ordenanza 01-2023 e Indicadores de Desarrollo de la Alfabetización Inicial del MINERD",
      seccion: "Niveles de Conceptualización de la Lengua Escrita y Enfoque Didáctico",
      criterio: "Reconocimiento de las hipótesis infantiles e intervención mediadora constructivista",
      justificacion: "La Política Nacional de Alfabetización exige que los docentes identifiquen con precisión científica el nivel psicogenético del estudiante (presilábico, silábico, silábico-alfabético, alfabético) para diseñar situaciones de aprendizaje personalizadas que movilicen la reflexión metalingüística real."
    },
    competenciaEvaluada: "Diagnóstico psicogenético de la escritura e implementación de estrategias de mediación didáctica socioconstructivista.",
    nivelDificultad: "Alta"
  }
    
];
    


// Exportar (opcional según necesidad)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = bancoPrimaria;
}   
