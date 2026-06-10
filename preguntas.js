const bancoPreguntas = [
    {
        id: 1,
        categoria: "Familia",
        pregunta: "Durante una entrevista, un estudiante de 3er grado de primaria revela que su tío, quien vive en la misma casa, le hace 'caricias incómodas' cuando su madre sale a trabajar. Según el protocolo dominicano, ¿Cuál es la acción inmediata e innegociable de la Unidad de Orientación y Psicología?",
        opciones: [
            "Convocar a la madre de forma urgente para que ella decida si presenta la denuncia.",
            "Realizar una investigación exhaustiva en la escuela para validar si el relato del niño es cierto.",
            "Denunciar el caso de manera inmediata ante CONANI o el Ministerio Público (Línea Vida) e informar a la dirección.",
            "Referir al estudiante a un psicólogo clínico privado para contención emocional antes de actuar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03 (Código para el Sistema de Protección de los Derechos Fundamentales de NNA). Establece la obligatoriedad de denuncia inmediata por parte del personal de los centros educativos ante la presunción de abuso. La escuela no investiga, reporta."
    },
    {
        id: 2,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un docente reporta que un estudiante de nuevo ingreso diagnosticado con TDAH se levanta constantemente e interrumpe. El docente solicita que el orientador se lleve al niño al departamento durante su clase para poder avanzar. ¿Cómo debe proceder el orientador según el Manual de Orientación?",
        opciones: [
            "Aceptar la solicitud para garantizar el derecho a la educación del resto del grupo.",
            "Diseñar adecuaciones curriculares no significativas junto al docente y sugerir estrategias como roles activos dentro del aula.",
            "Solicitar a los padres que mediquen al estudiante para que pueda permanecer en el salón regular.",
            "Suspender al estudiante temporalmente hasta que adquiera madurez conductual."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016 (Inclusión Escolar). El orientador acompaña al docente en el diseño de apoyos dentro del entorno natural (aula). Aislar al estudiante en el departamento vulnera su derecho a la inclusión."
    },
    {
        id: 3,
        categoria: "Convivencia",
        pregunta: "Se produce una pelea física entre dos estudiantes de 4to de secundaria. Según el protocolo de Cultura de Paz, al aplicar medidas disciplinarias, el enfoque principal debe ser:",
        opciones: [
            "Retributivo: asegurar que el castigo sea proporcional al nivel de violencia ejercida.",
            "Restaurativo: enfocarse en la responsabilización, la reparación del daño y el restablecimiento del vínculo.",
            "Punitivo preventivo: expulsar a los involucrados para dar un escarmiento al resto del liceo.",
            "Clínico: diagnosticar a los estudiantes con trastornos de control de impulsos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa. El sistema desecha el modelo punitivo a favor del enfoque de justicia restaurativa."
    },
    {
        id: 4,
        categoria: "Gestión/POA",
        pregunta: "Al inicio del año escolar, el equipo de gestión solicita a la Unidad de Orientación su Plan Operativo Anual (POA). ¿Cuál debe ser el punto de partida técnico para elaborar este documento?",
        opciones: [
            "Los intereses personales y áreas de especialización clínica de la orientadora.",
            "Copiar las actividades del año anterior porque el currículo no ha cambiado.",
            "Las demandas de disciplina emitidas únicamente por la dirección del centro.",
            "La evaluación diagnóstica de las necesidades psicosociales y psicopedagógicas del centro y la comunidad."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Manual de Orientación y Psicología 2024. Toda planificación (POA) debe responder a un diagnóstico contextualizado basado en datos reales del centro educativo."
    },
    {
        id: 5,
        categoria: "Familia",
        pregunta: "El equipo docente detecta que un estudiante de 13 años falta a clases frecuentemente los viernes porque asiste a un mercado a vender productos para ayudar económicamente a su familia. ¿Qué acción corresponde al centro?",
        opciones: [
            "Adaptarle el horario para que pueda asistir a clases de lunes a jueves sin penalidad.",
            "Entender la situación económica y justificar las faltas en el registro de grado.",
            "Realizar intervención familiar, concientizar sobre el derecho a la educación y notificar a la red de protección si persiste el trabajo infantil.",
            "Expulsar al estudiante por inasistencia crónica e incumplimiento del deber escolar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03. El trabajo infantil que interfiere con la escolaridad es una vulneración de derechos. La escuela debe intervenir mediante acompañamiento familiar y redes locales."
    },
    {
        id: 6,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Para derivar a un estudiante a evaluación psicopedagógica profunda por dificultades severas de lectura, ¿cuál es el requisito ético y administrativo fundamental previo a la aplicación de pruebas estandarizadas?",
        opciones: [
            "La aprobación directa del Distrito Educativo correspondiente.",
            "El reporte anecdótico firmado por el docente guía.",
            "El consentimiento informado firmado por la familia o tutores legales.",
            "La autorización escrita del director del centro educativo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ética profesional y Manual de Orientación. Ningún menor puede ser sometido a evaluación psicométrica sin la autorización expresa (Consentimiento Informado) de sus tutores legales."
    },
    {
        id: 7,
        categoria: "Convivencia",
        pregunta: "Una adolescente de secundaria reporta que un compañero difunde rumores sexuales sobre ella en un grupo de WhatsApp, causándole aislamiento y llanto. ¿Qué tipo de falta constituye esto y qué protocolo se activa?",
        opciones: [
            "Falta leve; se maneja con un diálogo reflexivo entre ambos en el recreo.",
            "Falta muy grave (Ciberacoso); requiere intervención con familias, apoyo psicológico a la víctima y medidas socioeducativas al agresor.",
            "Asunto externo; la escuela no interviene porque WhatsApp ocurre fuera del horario escolar.",
            "Falta grave del docente por no supervisar los teléfonos móviles de los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolo de actuación ante situaciones de acoso escolar. El ciberacoso que afecta el entorno escolar es tipificado como falta grave/muy grave y exige activación inmediata de la ruta de atención."
    },
    {
        id: 8,
        categoria: "Gestión/POA",
        pregunta: "Según el Estatuto del Docente (Ley 66-97), el rol del psicólogo escolar está clasificado como personal de apoyo a la docencia. En el marco de sus funciones, ¿qué NO le corresponde hacer?",
        opciones: [
            "Acompañar a los docentes en el diseño de estrategias inclusivas.",
            "Cubrir de manera permanente las aulas cuando los maestros titulares faltan.",
            "Dirigir la Escuela de Padres y Madres del centro educativo.",
            "Participar en la elaboración del Proyecto Educativo de Centro (PEC)."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Funciones de Orientación (Manual 2024). Cubrir ausencias docentes desvirtúa el rol y bloquea el cumplimiento del POA. Es una función puramente administrativa/docente."
    },
    {
        id: 9,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Se identifica a un estudiante con alta capacidad intelectual (superdotación) que se muestra desmotivado y disruptivo en clase. ¿Qué ajuste es el indicado según la Ordenanza 02-2016?",
        opciones: [
            "Ponerlo como monitor o ayudante del profesor para que le enseñe a los que no entienden.",
            "Enriquecimiento y flexibilización curricular para ofrecerle retos cognitivos acordes a su nivel.",
            "Acelerarlo (brincarlo) de grado inmediatamente sin evaluación previa.",
            "Exigirle que modere su comportamiento y se adapte al ritmo de la mayoría."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016 sobre NEAE. Las Altas Capacidades requieren respuestas de enriquecimiento curricular, no simplemente darle más cantidad del mismo trabajo o usarlo de ayudante."
    },
    {
        id: 10,
        categoria: "Convivencia",
        pregunta: "Un docente decomisa un 'vape' a un estudiante dentro del aula. El docente exige a la psicóloga que llame a la policía de inmediato. Según el MINERD, ¿cómo debe procesarse este caso?",
        opciones: [
            "Cumplir la orden del docente y llamar a la policía para que requise a todos.",
            "Entregar el vape al estudiante al final del día advirtiéndole que no lo vuelva a hacer.",
            "Retener el objeto, notificar a la familia, aplicar medida formativa y referir a programas de prevención de adicciones.",
            "Expulsar al estudiante y transferirlo a la modalidad de educación de adultos (PREPARA)."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas de Convivencia. El consumo/porte de sustancias permitidas para adultos pero prohibidas para menores se maneja como falta disciplinaria con enfoque formativo, involucrando a la familia y la prevención."
    },
    {
        id: 11,
        categoria: "Familia",
        pregunta: "Padres de un alumno en proceso de divorcio conflictivo solicitan a la escuela informes contradictorios sobre el rendimiento del niño para usarlos en el juzgado. ¿Cómo debe proceder Orientación?",
        opciones: [
            "Negarse a entregar cualquier información a ambos padres para no involucrarse.",
            "Entregar el informe únicamente al padre que paga la colegiatura o aporta económicamente.",
            "Mantener la neutralidad escolar, emitiendo informes psicopedagógicos estrictamente académicos solicitados por vía judicial oficial.",
            "Tomar partido por el padre que se note más preocupado por el bienestar del niño."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ética Profesional. El centro debe resguardar al menor del conflicto parental. Los informes se emiten objetivamente sobre el desarrollo escolar, idealmente a solicitud de una instancia legal o compartidos equitativamente si ambos mantienen la patria potestad."
    },
    {
        id: 12,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Una niña de origen extranjero no domina el idioma español, dificultando su evaluación de aprendizajes. El docente desea calificarla con 'Insuficiente'. ¿Qué recomienda la normativa de Inclusión?",
        opciones: [
            "Sugerir que la estudiante asista de oyente hasta que aprenda el idioma.",
            "Recomendar la reprobación del grado para que gane tiempo.",
            "Aplicar la evaluación en su idioma natal temporalmente.",
            "Realizar adecuaciones curriculares de acceso (barrera lingüística) y evaluar sus competencias mediante formatos visuales o prácticos.",
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Legal: Ordenanza 02-2016. La barrera del idioma es una Necesidad Específica de Apoyo Educativo (NEAE) transitoria. Se debe garantizar el acceso a la evaluación mediante ajustes metodológicos, no penalizar por el idioma."
    },
    {
        id: 13,
        categoria: "Convivencia",
        pregunta: "Un estudiante confiesa tener ideaciones suicidas y muestra marcas de 'cutting'. Ruega a la orientadora que no se lo diga a sus padres. ¿Qué principio ético prevalece aquí?",
        opciones: [
            "El principio de confidencialidad y secreto profesional a toda costa.",
            "El principio de autonomía del estudiante adolescente.",
            "El principio de protección a la vida (excepción a la confidencialidad), activando ruta de atención en salud mental y notificando a la familia.",
            "El principio de no maleficencia, dándole terapia en la escuela para que no se autolesione más."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Protocolo ante ideación suicida y ética psicológica. La confidencialidad se rompe de inmediato ante riesgo inminente de daño a sí mismo o a terceros. La escuela no hace terapia clínica, deriva."
    },
    {
        id: 14,
        categoria: "Gestión/POA",
        pregunta: "Dentro del seguimiento individual a un estudiante, la herramienta técnica donde el orientador debe asentar las entrevistas, acuerdos e incidencias de manera formal se llama:",
        opciones: [
            "Registro Anecdótico del Docente.",
            "Ficha Integral del Estudiante (Expediente Psicopedagógico).",
            "Boletín de Calificaciones.",
            "Libro de Novedades de la Policía Escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual Operativo. El expediente o ficha integral es el documento confidencial y oficial donde reposa el historial de intervenciones realizadas por el área de Orientación y Psicología."
    },
    {
        id: 15,
        categoria: "Familia",
        pregunta: "El principal objetivo de la 'Escuela de Padres y Madres' en el centro educativo dominicano es:",
        opciones: [
            "Recaudar fondos (APMAE) para el mantenimiento del plantel.",
            "Citar a los padres de los alumnos con problemas de conducta para llamarles la atención en grupo.",
            "Promover un espacio formativo y de reflexión para fortalecer las habilidades de crianza y la corresponsabilidad educativa.",
            "Darles clases formales a los padres analfabetos para que terminen la educación básica."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 09-2000 (Modificada). Las Escuelas de Padres son espacios psicosociales preventivos destinados a fortalecer la alianza familia-escuela en pro del desarrollo integral del estudiantado."
    },



    // BLOQUE 2: PREGUNTAS 16 A 35
    {
        id: 16,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Una estudiante de 5to de primaria presenta dislexia diagnosticada. Durante los exámenes escritos, se bloquea y deja el examen en blanco, aunque oralmente demuestra dominar el tema. ¿Qué adecuación exige la Ordenanza 02-2016?",
        opciones: [
            "Eximirla de tomar las pruebas y calificarla solo por asistencia.",
            "Aplicar adecuaciones de acceso y metodológicas, como permitirle responder de forma oral o darle tiempo extendido.",
            "Transferirla a una escuela de educación especial.",
            "Bajarle el nivel de los contenidos para que el examen sea de 2do grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. Las NEAE asociadas a dislexia no requieren bajar el nivel del currículo (adecuación significativa), sino cambiar la forma de evaluación (adecuación de acceso/metodológica)."
    },
    {
        id: 17,
        categoria: "Convivencia",
        pregunta: "Una estudiante de 15 años de un liceo nocturno notifica que está embarazada. Un grupo de docentes exige su retiro o traslado a PREPARA argumentando que es 'un mal ejemplo' para las demás. ¿Qué dicta el marco legal?",
        opciones: [
            "Se debe aceptar la solicitud docente para mantener la moral del centro.",
            "Se garantiza su permanencia, se prohíbe toda discriminación y se le brindan apoyos para evitar la deserción escolar.",
            "Se suspende temporalmente hasta que dé a luz y luego se reintegra.",
            "Se le obliga a tomar clases exclusivamente virtuales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Normas de Convivencia. El embarazo no es motivo de expulsión ni traslado forzoso. Es un derecho constitucional la protección a la maternidad y el acceso a la educación."
    },
    {
        id: 18,
        categoria: "Familia",
        pregunta: "Un niño de nivel inicial llega recurrentemente al centro sin desayunar, con evidentes signos de falta de higiene, ropa sucia y bajo peso. La escuela ha citado a la familia tres veces sin éxito. ¿Cuál es el paso a seguir?",
        opciones: [
            "Bañarlo y alimentarlo en la escuela sin notificar a nadie más.",
            "Expulsar al niño hasta que los padres se presenten.",
            "Emitir un reporte de presunta negligencia y abandono a CONANI y al Ministerio Público.",
            "Ir a la casa con la Policía Escolar a arrestar a los padres."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03. La negligencia severa (omisión de cuidados básicos de salud, higiene y alimentación) es una forma de maltrato infantil. Ante la inasistencia de la familia, la escuela está obligada a reportar a las autoridades de protección."
    },
    {
        id: 19,
        categoria: "Gestión/POA",
        pregunta: "Fallece de forma trágica un docente muy querido en la comunidad educativa. Los estudiantes están consternados y llorando. ¿Cuál es el protocolo inmediato de intervención desde Orientación y Psicología?",
        opciones: [
            "Suspender la docencia por una semana para que todos guarden luto en casa.",
            "Ignorar el hecho y obligar a los estudiantes a tomar sus exámenes para mantener la rutina.",
            "Activar el protocolo de intervención en crisis, realizar contención emocional grupal y permitir espacios guiados para la expresión del duelo.",
            "Remitir a todos los estudiantes a psiquiatría."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Protocolo de Intervención en Crisis del MINERD. El rol del psicólogo/orientador es liderar la contención de primer orden y psicoeducación sobre el duelo dentro del recinto escolar."
    },
    {
        id: 20,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al recibir a un estudiante con Trastorno del Espectro Autista (TEA) nivel 1, el docente nota que el ruido del timbre escolar le provoca crisis sensoriales. ¿Qué ajuste razonable debe sugerir el orientador?",
        opciones: [
            "Obligar al estudiante a tolerar el timbre para que se acostumbre al mundo real.",
            "Sugerir el uso de audífonos canceladores de ruido y anticiparle visualmente cuándo va a sonar el timbre.",
            "Desconectar el timbre de toda la escuela para que no sufra.",
            "Dejarlo en la biblioteca todo el día."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016 y Diseño Universal para el Aprendizaje (DUA). Se deben proveer apoyos técnicos (audífonos) y estrategias de anticipación para mitigar barreras sensoriales."
    },
    {
        id: 21,
        categoria: "Convivencia",
        pregunta: "El director sorprende a un estudiante alterando las calificaciones en el registro de grado. Según las Normas de Convivencia, esta acción se tipifica como:",
        opciones: [
            "Falta Leve.",
            "Falta Grave.",
            "Falta Muy Grave.",
            "Un simple error de adolescencia."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa. La alteración de documentos oficiales del centro educativo está tipificada explícitamente como una Falta Muy Grave."
    },
    {
        id: 22,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Durante la evaluación diagnóstica inicial, el equipo de orientación detecta que el 60% de los estudiantes de 1er grado de secundaria tienen un fuerte rezago en lectoescritura. ¿Qué procede técnicamente?",
        opciones: [
            "Diseñar un plan de intervención psicopedagógica grupal en articulación con el equipo docente.",
            "Reprobar a todos los estudiantes de forma preventiva.",
            "Culpar a los maestros de primaria y enviar una queja al Distrito Educativo.",
            "Ignorar el dato, ya que Orientación solo atiende problemas de conducta."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Manual de Orientación. Los datos de la evaluación diagnóstica deben usarse para el diseño de planes de apoyo y nivelación integrados a la planificación docente."
    },
    {
        id: 23,
        categoria: "Familia",
        pregunta: "Un estudiante comete una falta grave y se cita a los padres para firmar un acta de compromiso. El padre se niega a firmar, mostrándose agresivo y validando la mala conducta de su hijo. ¿Qué debe hacer el centro?",
        opciones: [
            "Obligar al padre a firmar usando al guardia escolar.",
            "Expulsar definitivamente al estudiante al no contar con el apoyo familiar.",
            "Levantar un acta de comparecencia detallando la negativa del padre, firmada por testigos del centro, y notificar al Distrito Educativo o CONANI.",
            "Romper el acta y dejar el caso impune."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Protocolos del MINERD y Ley 136-03. La negativa del tutor no paraliza el proceso. Se documenta la falta de corresponsabilidad (acta con testigos) y se escala al nivel superior o de protección."
    },
    {
        id: 24,
        categoria: "Gestión/POA",
        pregunta: "En la estructura del MINERD, la Unidad de Orientación y Psicología rinde cuentas operativamente y entrega sus informes estadísticos de manera directa a:",
        opciones: [
            "La Asociación de Padres (APMAE).",
            "El equipo docente.",
            "El/la Director(a) del Centro Educativo.",
            "El Ministerio de Salud Pública."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual Operativo de Centro Público. El personal de Orientación pertenece al equipo de gestión y responde jerárquicamente a la dirección del centro, canalizando luego la información al técnico distrital."
    },
    {
        id: 25,
        categoria: "Convivencia",
        pregunta: "Un grupo de alumnos acorrala a un compañero, lo graba humillándolo, le quita el dinero de la merienda y difunde el video. ¿Qué medidas disciplinarias y de protección corresponden?",
        opciones: [
            "Diálogo mediado, suspensión temporal del grupo agresor por Falta Muy Grave y derivación de la víctima para apoyo psicológico.",
            "Castigo físico a los agresores según la gravedad del caso.",
            "Solo reportar a la policía y desvincular al centro del problema.",
            "Expulsar al agredido por dejarse quitar el dinero."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Normas de Convivencia y Protocolo de Acoso. El acoso agravado con extorsión y difusión (ciberacoso) es Falta Muy Grave. Conlleva suspensión, apoyo a la víctima y posible derivación al Ministerio Público (Policía Especializada NNA)."
    },
    {
        id: 26,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El maestro de matemáticas se niega a realizar ajustes curriculares para un estudiante con discapacidad intelectual, alegando que 'el currículo nacional es uno solo y no se puede alterar'. ¿Qué principio legal le recuerda el orientador?",
        opciones: [
            "Principio de elitismo académico.",
            "Principio de Equidad e Inclusión, donde el currículo es flexible y adaptable a las características del estudiante.",
            "Principio de estandarización.",
            "El maestro tiene razón, no se puede alterar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97 y Ordenanza 02-2016. El currículo dominicano es abierto, flexible y participativo, permitiendo adecuaciones para garantizar el derecho a la educación de calidad para todos (Inclusión)."
    },
    {
        id: 27,
        categoria: "Familia",
        pregunta: "Una madre solicita al psicólogo escolar que le aplique una prueba de coeficiente intelectual (WISC) a su hija porque quiere saber 'si es superdotada' para presumirlo. ¿Cuál es la postura ética del psicólogo MINERD?",
        opciones: [
            "Aplicarla inmediatamente para complacer a la madre.",
            "Explicarle que el centro educativo solo evalúa con fines psicopedagógicos cuando hay indicadores de NEAE que afectan el aprendizaje, no por curiosidad.",
            "Cobrarle a la madre por hacer la prueba fuera de horario.",
            "Aplicar una prueba descargada de internet para salir del paso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación. El servicio público no tiene fines clínicos generales ni se aplica psicometría a petición sin justificación pedagógica fundamentada."
    },
    {
        id: 28,
        categoria: "Gestión/POA",
        pregunta: "Para garantizar el impacto de los programas de prevención (ej: prevención de embarazo o drogas), estos deben diseñarse preferiblemente basándose en:",
        opciones: [
            "Las fechas efemérides del calendario escolar exclusivamente.",
            "El Diagnóstico de Necesidades y Línea Base del Centro Educativo.",
            "Materiales comprados de editoriales privadas.",
            "Las opiniones personales del director."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño de POA. Todo programa de orientación debe tener base empírica contextual, partiendo de un diagnóstico o línea base que identifique los riesgos reales de esa población."
    },
    {
        id: 29,
        categoria: "Convivencia",
        pregunta: "Durante una revisión rutinaria (operativo mochila), coordinada con la dirección escolar, se encuentra un arma blanca (cuchillo) en la mochila de un estudiante de secundaria. ¿Cuál es el protocolo?",
        opciones: [
            "Botar el cuchillo y no decirle a nadie.",
            "Devolverlo a la hora de salida con una advertencia.",
            "Decomiso, notificación a la familia, intervención de Policía Escolar por porte de armas y suspensión preventiva.",
            "Hacer que el estudiante corte frutas en el receso para darle un uso positivo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas de Convivencia. El porte de armas blancas es una Falta Muy Grave y constituye un delito penal juvenil. Requiere activación inmediata de la Policía Escolar."
    },
    {
        id: 30,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un estudiante de 16 años cursa el 6to grado de primaria. Presenta desmotivación y conflictos por la diferencia de edad con sus compañeros (11 años). ¿A qué programa del MINERD debe ser referido?",
        opciones: [
            "Programa Nacional de Becas.",
            "PREPARA, al alcanzar la edad normativa para educación de adultos.",
            "Aceleración de aprendizajes (si aplica) o Educación de Jóvenes y Adultos.",
            "Programa de alimentación escolar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Reglamentos de Evaluación. La condición descrita se llama 'Sobreedad severa'. Se gestionan programas de aceleración o el traspaso a subsistemas de adultos para preservar su autoestima y adecuación social."
    },
    {
        id: 31,
        categoria: "Familia",
        pregunta: "En una entrevista familiar, la madre admite que disciplina a su hijo con golpes usando cables y correas, argumentando que 'así se cría en este país'. ¿Qué rol asume el psicólogo?",
        opciones: [
            "Validar la cultura dominicana y apoyar el método.",
            "Realizar psicoeducación urgente sobre pautas de crianza positiva, advirtiendo sobre las consecuencias legales del maltrato, y notificar a la red de protección.",
            "Golpear a la madre para que vea lo que se siente.",
            "Denunciar a la madre de forma anónima en redes sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Protocolos de Crianza Positiva. El maltrato físico no es justificable culturalmente. Se hace intervención psicoeducativa obligatoria, pero el deber de denunciar el abuso sigue activo si hay daño."
    },
    {
        id: 32,
        categoria: "Convivencia",
        pregunta: "Un docente reporta a Orientación que ha notado que un alumno siempre se aísla, llora sin motivo aparente y ha bajado drásticamente sus notas en el último mes. ¿Cuál es el primer paso del psicólogo?",
        opciones: [
            "Citar a los padres inmediatamente para referirlo a psiquiatría.",
            "Observar al estudiante en su entorno natural (aula, recreo) y realizar una entrevista de exploración inicial.",
            "Aplicar una batería de pruebas de personalidad.",
            "Diagnosticarlo con depresión infantil en el registro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Proceso de Evaluación Psicopedagógica. Antes de citar o diagnosticar, se debe triangular información mediante observación estructurada y exploración clínica inicial en el contexto escolar."
    },
    {
        id: 33,
        categoria: "Gestión/POA",
        pregunta: "¿Cuál es el instrumento oficial donde el docente asienta los indicadores de logro de los estudiantes y que sirve de insumo clave para que Orientación detecte alertas académicas?",
        opciones: [
            "El Cuaderno anecdótico.",
            "El Registro de Grado.",
            "La Ficha de Inscripción.",
            "El Diseño Curricular."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. El Registro de Grado es la herramienta oficial de evaluación continua. Sus informes de progreso son la fuente principal para derivar a apoyo psicopedagógico."
    },
    {
        id: 34,
        categoria: "Convivencia",
        pregunta: "Frente a un conflicto entre estudiantes, la 'Mediación Escolar' (Estrategia de Cultura de Paz) requiere fundamentalmente que:",
        opciones: [
            "El mediador (orientador o estudiante líder) imponga el castigo correspondiente.",
            "La participación de las partes en conflicto sea voluntaria y el mediador sea imparcial.",
            "Se invite a los padres para que defiendan a sus hijos.",
            "Se grabe en video para tener pruebas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Mediación de Conflictos MINERD. La mediación no es un juicio; es un proceso voluntario, confidencial e imparcial donde las partes buscan el acuerdo guiados por un tercero."
    },
    {
        id: 35,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "La profesora de lengua española solicita que la orientadora saque de su aula a un niño con Síndrome de Down de manera permanente porque 'atrasa al resto'. ¿Qué mandato legal se está violando directamente?",
        opciones: [
            "La Ley de Tránsito.",
            "El Estatuto del Docente y la Ley 66-97.",
            "La Ley 136-03 y la Política Nacional de Educación Inclusiva (Ordenanza 02-2016).",
            "El Reglamento Interno de la APMAE."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 02-2016. Todo niño, independientemente de su condición, tiene derecho a permanecer en el aula regular, recibiendo los apoyos necesarios. La segregación está legalmente prohibida."
    },



    // BLOQUE 3: PREGUNTAS 36 A 60
    {
        id: 36,
        categoria: "Convivencia",
        pregunta: "Un docente castiga a un estudiante de 2do de secundaria poniéndolo de rodillas frente a la pizarra por interrumpir la clase. Al enterarse, ¿qué principio legal debe invocar el orientador para intervenir?",
        opciones: [
            "La autonomía del docente para manejar la disciplina en su aula.",
            "La prohibición absoluta de castigos corporales, tratos crueles y humillantes, según la Ley 136-03 y las Normas de Convivencia.",
            "El respeto a los mayores, justificando que el estudiante lo provocó.",
            "El derecho del estudiante a elegir su castigo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (Art. 45). El Estado y los centros educativos prohíben explícitamente cualquier castigo físico o trato humillante. Es una vulneración de derechos que debe detenerse de inmediato y reportarse."
    },
    {
        id: 37,
        categoria: "Gestión/POA",
        pregunta: "Durante la elaboración del Proyecto Educativo de Centro (PEC), el equipo de gestión indica que Orientación y Psicología no debe participar, ya que su rol es solo atender estudiantes problemáticos. ¿Es esto correcto?",
        opciones: [
            "Sí, porque Orientación es un departamento clínico independiente.",
            "Sí, el PEC es responsabilidad exclusiva del director y el coordinador pedagógico.",
            "No, el psicólogo escolar es parte del Equipo de Gestión y debe articular su Plan Operativo Anual (POA) directamente con las metas del PEC.",
            "No, porque el psicólogo es quien debe redactar todo el PEC por sí solo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Manual Operativo de Centro. Orientación y Psicología es un componente estratégico del Equipo de Gestión y su POA debe estar alineado y transversalizado en el PEC."
    },
    {
        id: 38,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un estudiante de secundaria presenta dificultades severas en la resolución de problemas matemáticos básicos, invierte los números y no comprende conceptos de cantidad, a pesar de tener un rendimiento normal en otras áreas. Esto es un indicador de:",
        opciones: [
            "Disgrafía.",
            "Discalculia (Trastorno Específico del Aprendizaje con dificultad en las matemáticas).",
            "Dislexia profunda.",
            "Retraso mental severo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Técnica: Criterios diagnósticos psicopedagógicos. La dificultad específica para el procesamiento numérico y el cálculo, aislando otras habilidades cognitivas, corresponde a la discalculia."
    },
    {
        id: 39,
        categoria: "Familia",
        pregunta: "El centro educativo exige el acta de nacimiento actualizada para inscribir a una niña. La madre, de escasos recursos, indica que no la tiene y que el proceso tardará meses. El director le niega la inscripción. ¿Qué establece la ley?",
        opciones: [
            "La niña no puede estudiar hasta que traiga el documento original.",
            "Se garantiza la matriculación provisional, protegiendo el derecho a la educación (Ley 136-03), y la escuela apoya a la familia en la gestión del documento.",
            "Se inscribe a la niña pero con un nombre falso temporal.",
            "Se manda a la niña a trabajar hasta que consiga el acta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y circulares del MINERD. La falta de documentación de identidad no es un impedimento para acceder al derecho fundamental a la educación. La inscripción es obligatoria mientras se regulariza el estatus."
    },
    {
        id: 40,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "¿Qué modelo pedagógico exige la Ordenanza 02-2016 que sea aplicado por los docentes para minimizar las barreras de aprendizaje antes de requerir una evaluación psicopedagógica individualizada?",
        opciones: [
            "El Conductismo Operante.",
            "El Diseño Universal para el Aprendizaje (DUA).",
            "El Modelo Clínico-Médico.",
            "La Educación Exclusiva."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. El DUA promueve proporcionar múltiples formas de representación, expresión y compromiso en el aula regular para atender a la diversidad desde la planificación inicial."
    },
    {
        id: 41,
        categoria: "Convivencia",
        pregunta: "Durante una excursión escolar, varios estudiantes de 6to de secundaria son sorprendidos consumiendo bebidas alcohólicas. Según las Normas de Convivencia, el procedimiento a seguir es:",
        opciones: [
            "Dejarlos continuar en la excursión y hablarles al regresar.",
            "Retirarlos de la actividad, notificar de inmediato a los padres, aplicar suspensión según la gravedad (Falta Muy Grave) y referir a prevención.",
            "Obligarlos a tomar agua y ponerlos a limpiar el autobús.",
            "Cancelar la graduación de toda la promoción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Normas de Convivencia. El consumo de sustancias prohibidas para menores en actividades oficiales del centro es una Falta Muy Grave que requiere cese inmediato de la conducta, notificación familiar y medida socioeducativa."
    },
    {
        id: 42,
        categoria: "Gestión/POA",
        pregunta: "El psicólogo escolar planifica dar 'terapia psicológica individual de 45 minutos semanales' a 15 estudiantes con depresión. ¿Es esta una función pertinente en el sistema educativo dominicano?",
        opciones: [
            "Sí, es la función principal de la plaza de psicología clínica en la escuela.",
            "No, el servicio de orientación escolar no es clínico. Debe brindar apoyo psicoeducativo, contención inicial y derivar los casos terapéuticos a Salud Pública o centros especializados.",
            "Sí, siempre y cuando los padres paguen una cuota de recuperación.",
            "No, porque los estudiantes con depresión no deben estar en la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación y Psicología 2024. El rol en el centro es psicoeducativo y preventivo, no clínico-terapéutico. Se realiza intervención breve, acompañamiento pedagógico y derivación a redes de salud."
    },
    {
        id: 43,
        categoria: "Familia",
        pregunta: "La madre de un estudiante, quien tiene una orden de alejamiento contra el padre del niño por violencia de género, notifica a la escuela que el padre ha intentado ir a buscar al niño a la salida. ¿Qué debe hacer el centro?",
        opciones: [
            "Mantenerse neutral, ya que es el padre biológico y tiene derechos.",
            "Entregar el niño al padre si este trae un juguete o regalo.",
            "Acatar la orden judicial de protección, alertar a la Policía Escolar y no entregar al niño bajo ninguna circunstancia, notificando a la madre.",
            "Citar a ambos a la escuela para que arreglen sus problemas de pareja."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 24-97 y protocolos de seguridad escolar. El centro educativo está obligado a respetar las órdenes judiciales de protección. Entregar al menor viola el mandato legal y pone en riesgo su vida."
    },
    {
        id: 44,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Se inscribe un estudiante con discapacidad visual (ceguera total). La maestra indica que no sabe Braille y solicita que lo saquen de su clase. ¿Cuál es el rol del equipo de Orientación y Psicología?",
        opciones: [
            "Darle la razón a la maestra y mandarlo a un centro de educación especial.",
            "Asesorar a la docente en adecuaciones de acceso (lectores de pantalla, materiales en alto relieve, audios) y gestionar el apoyo técnico a través de los Centros de Recursos para la Atención a la Diversidad (CAD).",
            "Que la orientadora le dé las clases de todas las materias en el departamento.",
            "Sugerir que el estudiante solo asista a la clase de educación física."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. El estudiante pertenece al aula regular. El orientador articula con los CAD y acompaña al docente en las adaptaciones de acceso a la información (tiflotecnología, audios)."
    },
    {
        id: 45,
        categoria: "Convivencia",
        pregunta: "¿Cuál de las siguientes sanciones está ESTRÍCTAMENTE PROHIBIDA en las Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa?",
        opciones: [
            "La suspensión temporal por un máximo de 5 días con asignación de tareas.",
            "Los trabajos de reparación del daño causado.",
            "La expulsión definitiva del sistema educativo (desescolarización total).",
            "Los diálogos reflexivos con compromiso firmado."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas de Convivencia y Ley 136-03. Ninguna medida disciplinaria puede significar la pérdida del derecho a la educación. Las expulsiones 'para la calle' están prohibidas; los traslados deben ser fundamentados y garantizando cupo."
    },
    {
        id: 46,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al aplicar una prueba de detección de estilos de aprendizaje, la orientadora nota que un grupo aprende mejor interactuando físicamente y manipulando objetos. El docente solo da clases magistrales dictadas. ¿Qué corresponde hacer?",
        opciones: [
            "Decirles a los alumnos que se esfuercen más en escuchar.",
            "Compartir los resultados con el docente y acompañarle en la diversificación de estrategias metodológicas (incorporar actividades kinestésicas).",
            "Ignorar la prueba porque el estilo magistral es el único oficial.",
            "Quejarse del maestro con la dirección inmediatamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación. El perfil psicopedagógico de los grupos es un insumo que el orientador devuelve a los docentes para la mejora de la práctica y la planificación (trabajo colaborativo)."
    },
    {
        id: 47,
        categoria: "Gestión/POA",
        pregunta: "Un orientador de nuevo ingreso decide publicar en sus redes sociales personales fotos de los estudiantes realizando dinámicas en su departamento, sin censurar los rostros, para mostrar 'su buen trabajo'. ¿Qué falta está cometiendo?",
        opciones: [
            "Ninguna, es una excelente estrategia de marketing educativo.",
            "Violación al derecho a la intimidad, propia imagen y confidencialidad de niños, niñas y adolescentes tipificada en la Ley 136-03.",
            "Falta leve de puntualidad.",
            "Violación de derechos de autor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Código de Ética de CODOPSI. Está terminantemente prohibida la exposición pública o difusión de imágenes de NNA sin consentimiento explícito escrito de los padres, y menos en el contexto de intervenciones psicopedagógicas."
    },
    {
        id: 48,
        categoria: "Familia",
        pregunta: "Una adolescente solicita ayuda indicando que su familia la va a obligar a casarse y vivir con un hombre de 35 años por un acuerdo económico. ¿Qué mandato legal debe ejecutar la escuela?",
        opciones: [
            "Respetar las decisiones y la cultura de esa familia.",
            "Activar de urgencia el protocolo de protección, denunciando al Ministerio Público y CONANI, ya que el matrimonio infantil y las uniones tempranas son delitos penalizados en la República Dominicana.",
            "Llamar al hombre de 35 años para que firme un acta de compromiso en la escuela.",
            "Recomendarle a la adolescente métodos anticonceptivos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-21 (que prohíbe el matrimonio infantil en RD) y Ley 136-03. La escuela tiene el deber irrenunciable de denunciar las uniones tempranas forzadas, tipificadas como abuso y violación de derechos fundamentales."
    },
    {
        id: 49,
        categoria: "Convivencia",
        pregunta: "Dos estudiantes de 3er grado de primaria están jugando agresivamente (golpeándose de manera constante en los recreos), aunque ambos dicen que es 'jugando'. Un docente dice que son 'cosas de niños'. El orientador debe:",
        opciones: [
            "Estar de acuerdo con el docente y no intervenir.",
            "Intervenir para frenar la conducta, identificar factores de riesgo, realizar psicoeducación sobre límites y buen trato, e informar a las familias.",
            "Suspender a ambos niños por 10 días.",
            "Mandarlos a jugar fútbol para que se golpeen con la pelota."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolos de Cultura de Paz. Los 'juegos bruscos' normalizados en la infancia temprana pueden ser antesala de violencia. La intervención oportuna, formativa y preventiva es el estándar."
    },
    {
        id: 50,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En el proceso de Evaluación Psicopedagógica de un estudiante con sospecha de NEAE, el equipo interdisciplinario mínimo del centro educativo para realizar el levantamiento de información debe involucrar a:",
        opciones: [
            "Solamente al psicólogo escolar.",
            "El médico de la comunidad y el director.",
            "El docente, el orientador/psicólogo escolar y la familia (con apoyo del equipo de gestión).",
            "La secretaria del centro y el conserje."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 02-2016. La evaluación psicopedagógica en el centro no es aislada ni exclusiva del psicólogo; es un proceso colaborativo que requiere la visión del docente (contexto áulico), Orientación (técnica) y Familia (contexto socio-familiar)."
    },
    {
        id: 51,
        categoria: "Gestión/POA",
        pregunta: "Una de las líneas de acción prioritarias en el POA de Orientación y Psicología en el nivel Secundario, según el currículo vigente, es:",
        opciones: [
            "Enseñar a los estudiantes a cocinar.",
            "El Programa de Orientación Vocacional y Transición a la Vida Adulta o Laboral.",
            "Realizar diagnósticos psiquiátricos masivos.",
            "Organizar las fiestas de graduación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular de Secundaria y Manual de Orientación. Acompañar el proyecto de vida y la toma de decisiones vocacionales/profesionales es una meta estatutaria del nivel secundario."
    },
    {
        id: 52,
        categoria: "Familia",
        pregunta: "El centro educativo determina que un estudiante necesita evaluación profunda por un CAD (Centro de Atención a la Diversidad). La familia se niega rotundamente a llevarlo por miedo a que lo 'etiqueten'. ¿Qué acción sigue?",
        opciones: [
            "Sensibilizar a la familia sobre los beneficios de la evaluación, documentar la negativa en acta y continuar ofreciendo las adecuaciones de acceso posibles dentro del aula regular.",
            "Expulsar al estudiante por falta de cooperación de los padres.",
            "Engañar a los padres, llevar al niño al CAD sin que se enteren.",
            "Quitarle todas las ayudas escolares hasta que los padres cedan."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 02-2016. Se respeta el proceso de la familia mediante sensibilización (no coerción), pero la escuela no puede paralizar su deber de ofrecer una educación accesible con los recursos internos disponibles."
    },
    {
        id: 53,
        categoria: "Convivencia",
        pregunta: "Un grupo de estudiantes vandaliza (pinta con spray y rompe) los baños del centro educativo. Según las Normas de Convivencia, la medida restaurativa más apropiada, además de la suspensión, es:",
        opciones: [
            "Darles una paliza ejemplar.",
            "Que paguen el doble de lo que cuesta el baño en efectivo a la dirección.",
            "Trabajo socioeducativo como participar en la limpieza y restauración del espacio físico dañado, involucrando a los padres.",
            "Que pidan perdón por el micrófono en el acto de la bandera."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas de Convivencia. El enfoque restaurativo exige que la medida disciplinaria tenga un carácter reparador del daño causado al bien común (limpiar/pintar lo vandalizado), fomentando la responsabilización."
    },
    {
        id: 54,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un docente pregunta al psicólogo escolar cómo manejar a un estudiante hiperactivo (TDAH) que termina rápido y empieza a molestar a los demás. Una estrategia de adecuación metodológica correcta es:",
        opciones: [
            "Sentarlo al final del aula, de cara a la pared.",
            "Asignarle tareas fragmentadas, roles activos (como repartir material) y permitirle descansos o 'tiempos fuera' acordados positivamente.",
            "Dejarlo salir al patio a jugar hasta que la clase termine.",
            "Multiplicarle por tres la cantidad de ejercicios para mantenerlo ocupado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Técnica: Estrategias DUA y atención a la diversidad. Fragmentar tareas y canalizar la necesidad motora a través de roles útiles mejora la autorregulación sin castigar la condición neurobiológica del estudiante."
    },
    {
        id: 55,
        categoria: "Gestión/POA",
        pregunta: "Se ausenta la secretaria del centro educativo por una semana. El director instruye a la psicóloga escolar a sentarse en la recepción a responder el teléfono y recibir visitantes. ¿Qué debe argumentar la psicóloga?",
        opciones: [
            "Aceptar inmediatamente para mostrar disposición.",
            "Recordar amparada en sus funciones (Manual Operativo) que su rol es el apoyo psicosocial y pedagógico; asumir roles administrativos vulnera el derecho de atención a los estudiantes y la confidencialidad de su departamento.",
            "Aceptar, pero solo si le pagan horas extras.",
            "Renunciar al puesto inmediatamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Funciones del cargo (Manual Operativo de Centro Público). Desviar al profesional de la psicología hacia tareas administrativas (recepción, digitación de notas) es una mala práctica que anula la ejecución de su POA."
    },
    {
        id: 56,
        categoria: "Familia",
        pregunta: "Un niño llega con moretones en la espalda y brazos. Al preguntarle, dice que su padre lo golpeó con un palo por no hacer la tarea. El protocolo oficial del MINERD indica que el centro debe:",
        opciones: [
            "Llamar al padre a la escuela para confrontarlo a solas.",
            "Esperar a ver si los golpes desaparecen en unos días.",
            "Informar al director, no confrontar al presunto agresor, y realizar la derivación/denuncia inmediata a Línea Vida o fiscalía de NNA, resguardando al menor.",
            "Curar al niño y decirle que se porte mejor para evitar castigos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Hoja de Ruta para la prevención y atención a la violencia (MINERD/CONANI). Ante abuso físico evidente, confrontar al agresor pone en riesgo mayor a la víctima. Se activa el sistema de protección estatal directamente."
    },
    {
        id: 57,
        categoria: "Convivencia",
        pregunta: "Un estudiante llega tarde al centro educativo por tercera vez en la semana. La medida inmediata según las normativas vigentes NO debe ser:",
        opciones: [
            "Devolverlo a su casa perdiendo el día de clases.",
            "Permitir el ingreso, registrar la tardanza en el anecdotario e indagar la causa.",
            "Contactar a la familia para identificar obstáculos logísticos.",
            "Aplicar un llamado de atención verbal."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Normas de Convivencia y Ley 136-03. Devolver a un estudiante a su casa vulnera el derecho a la educación y lo expone a riesgos de calle. Las tardanzas (Faltas Leves) se manejan dentro del centro y con la familia."
    },
    {
        id: 58,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El 'Plan de Apoyo a los Aprendizajes' que se diseña al finalizar el primer periodo (evaluación diagnóstica y formativa) es responsabilidad directa de:",
        opciones: [
            "El conserje del centro.",
            "El docente de la asignatura, en acompañamiento con Orientación y Psicología cuando se requieren diversificaciones metodológicas.",
            "Exclusivamente del departamento de psicología.",
            "La policía escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza sobre el Sistema de Evaluación. La recuperación y apoyo a los aprendizajes es una responsabilidad docente ineludible, con el asesoramiento técnico del orientador en caso de barreras identificadas."
    },
    {
        id: 59,
        categoria: "Gestión/POA",
        pregunta: "El fortalecimiento de la 'Red de Apoyo Institucional' en el POA de Orientación se refiere a:",
        opciones: [
            "Comprar routers para mejorar el WiFi de la escuela.",
            "Crear lazos operativos formales con el centro de salud local, CONANI, Policía Escolar, fiscalía y juntas de vecinos para la derivación de casos.",
            "Crear grupos de WhatsApp con los docentes.",
            "Redes de pesca para actividades recreativas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación. El trabajo comunitario y de articulación institucional es una línea estratégica clave. La escuela no resuelve todo sola, necesita un mapeo y vinculación con la red comunitaria de protección e intervención."
    },
    {
        id: 60,
        categoria: "Convivencia",
        pregunta: "Durante un operativo de la Policía Escolar se solicita que la psicóloga escolar requise (revise corporalmente e íntimamente) a una estudiante bajo sospecha de llevar sustancias. ¿Qué debe responder la psicóloga?",
        opciones: [
            "Hacer la revisión íntima porque ella es mujer y psicóloga.",
            "Negarse, ya que las revisiones corporales vulneran la intimidad, no son función de Orientación, y la inspección debe ceñirse estrictamente a las pertenencias (mochila) bajo el debido proceso legal.",
            "Obligar a la estudiante a que ella misma se quite la ropa.",
            "Grabar la requisa para tener pruebas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolos de Seguridad y Ley 136-03 (Derecho a la integridad y dignidad). El personal docente/psicológico no tiene autoridad legal ni ética para realizar registros corporales invasivos a menores. Solo se revisan útiles escolares con testigos y causa probada."
    },


    // BLOQUE 4: PREGUNTAS 61 A 85
    {
        id: 61,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un estudiante de 1er grado con Mutismo Selectivo no habla con el docente ni sus compañeros, pero realiza todas las tareas escritas correctamente. El docente quiere reprobarlo por no participar oralmente. ¿Qué adecuación debe aplicarse?",
        opciones: [
            "Obligarlo a exponer frente a todos para que pierda el miedo.",
            "Aplicar una adecuación metodológica y de evaluación, permitiendo que su participación y evaluación sean exclusivamente escritas o mediante proyectos visuales.",
            "Suspenderlo hasta que un terapeuta certifique que ya puede hablar.",
            "Bajarle los puntos de participación a cero sin reprobarlo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. El Mutismo Selectivo es una barrera emocional/ansiosa. Evaluar oralmente a un niño con esta condición es punitivo. Se debe diversificar el instrumento de evaluación asegurando que demuestre la competencia por otras vías (DUA)."
    },
    {
        id: 62,
        categoria: "Convivencia",
        pregunta: "Una estudiante denuncia que un grupo de compañeras la excluye, se burlan de su aspecto y le esconden la mochila a diario. El maestro guía responde: 'Eso es normal a esa edad, no le hagas caso y ya se cansarán'. ¿Qué error técnico y legal comete el maestro?",
        opciones: [
            "Ninguno, la resiliencia se desarrolla enfrentando problemas.",
            "Omisión de socorro escolar ante indicadores claros de acoso escolar (Bullying), lo cual constituye una Falta Grave del personal docente al no activar el protocolo de protección.",
            "Error de diagnóstico, ya que debió referir a la niña a psiquiatría.",
            "Error administrativo por no cobrarles una multa a las acosadoras."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolo de actuación ante situaciones de acoso escolar en los centros educativos. El acoso nunca debe normalizarse o minimizarse como 'cosas de la edad'. La omisión del docente vulnera el derecho a un entorno seguro."
    },
    {
        id: 63,
        categoria: "Gestión/POA",
        pregunta: "Según el Manual de Orientación y Psicología, el proceso de Evaluación del Plan Operativo Anual (POA) de la Unidad debe realizarse:",
        opciones: [
            "Únicamente al final del año escolar.",
            "De forma continua, sistemática y mediante informes mensuales que permitan reorientar las acciones si es necesario.",
            "Cada 5 años cuando cambien las autoridades.",
            "Solo si lo solicita el Distrito Educativo de sorpresa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación y Psicología 2024. La planificación no es estática. Se requiere un monitoreo continuo (rendición de cuentas mensual) para evaluar el impacto de las intervenciones y ajustar cronogramas."
    },
    {
        id: 64,
        categoria: "Familia",
        pregunta: "El psicólogo escolar detecta que una adolescente se está autolesionando por ideación suicida. Al citar a los padres, estos minimizan el hecho diciendo que es 'para llamar la atención' y se niegan a llevarla a salud mental. ¿Qué paso sigue?",
        opciones: [
            "Respetar la decisión de los padres, ya que tienen la patria potestad.",
            "Activar la ruta de protección de derechos, notificando a CONANI y al Ministerio Público por negligencia médica/psicológica grave que atenta contra la vida del menor.",
            "Darle pastillas antidepresivas a la niña en la escuela a escondidas.",
            "Hacerle prometer a la niña que no lo volverá a hacer."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Protocolo de Salud Mental. La negativa de los padres a buscar atención psiquiátrica de urgencia ante un riesgo de vida inminente constituye negligencia severa. El Estado interviene en protección del menor."
    },
    {
        id: 65,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Se aprueba una Adecuación Curricular Significativa (ACS) para un estudiante con Discapacidad Intelectual Moderada en 4to grado. Al final del periodo, ¿con base en qué criterios se le debe calificar?",
        opciones: [
            "Con los mismos criterios y competencias del currículo regular de 4to grado.",
            "Con los criterios establecidos de forma individualizada en su Plan de Adecuación Curricular (PAC), reconociendo sus propios avances.",
            "No se le califica, solo se le promueve automáticamente.",
            "Se le califica con el currículo de 1er grado oficial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016 y Normativa de Evaluación. Cuando un estudiante requiere Adecuaciones Significativas (cambio o eliminación de competencias del grado), se le evalúa y promueve en base a las metas trazadas en su propio PAC, no compitiendo con el estándar del grado."
    },
    {
        id: 66,
        categoria: "Convivencia",
        pregunta: "Una maestra encuentra el diario íntimo de una alumna, lo lee frente a toda la clase para 'dar una lección de moral' porque encontró lenguaje soez. ¿Qué derecho constitucional e institucional vulneró la docente?",
        opciones: [
            "Derecho a la educación pública.",
            "Derecho a la libre asociación.",
            "Derecho a la intimidad, al honor y a la reputación, protegido por la Ley 136-03.",
            "Ninguno, en la escuela la maestra tiene autoridad absoluta sobre las pertenencias."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03 (Art. 18). Los niños, niñas y adolescentes tienen derecho a la intimidad personal y familiar. Leer correspondencia o diarios privados frente a terceros es un abuso de poder y trato humillante."
    },
    {
        id: 67,
        categoria: "Gestión/POA",
        pregunta: "Dentro de la estructura de participación escolar, ¿cuál es el rol del profesional de Orientación y Psicología respecto a los Consejos de Curso y Comités Estudiantiles?",
        opciones: [
            "Elegir directamente a los líderes estudiantiles.",
            "Asesorar, acompañar y formar en liderazgo, cultura de paz y resolución de conflictos a los estudiantes electos.",
            "Prohibir los Consejos de Curso porque causan desorden.",
            "Ser el presidente del Consejo de Curso en todos los grados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2019 (Reglamentos Estudiantiles). Orientación asesora la conformación de organismos de participación estudiantil, brindando herramientas socioemocionales, mediación y liderazgo democrático."
    },
    {
        id: 68,
        categoria: "Familia",
        pregunta: "Un estudiante de 8 años confiesa a la orientadora que, cuando se porta mal, su abuela (tutora legal) lo encierra en una habitación oscura por horas sin comida. ¿Cómo se tipifica este acto según la normativa dominicana?",
        opciones: [
            "Medida disciplinaria severa pero legal en el hogar.",
            "Privación de libertad y maltrato infantil continuado, requiriendo denuncia inmediata a las autoridades competentes.",
            "Trastorno de ansiedad infantil.",
            "Adecuación conductual casera."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 (Protección contra el abuso). El encierro forzado y la privación de alimentos son tipificados penalmente como maltrato y tortura infantil, activando inmediatamente el protocolo de denuncia (Línea Vida)."
    },
    {
        id: 69,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un adolescente de 3ero de secundaria tiene diagnóstico formal de Disgrafía y Disortografía severa. El profesor de Sociales le resta 10 puntos en cada trabajo por faltas ortográficas. ¿Es esto correcto según las normativas inclusivas?",
        opciones: [
            "Sí, para que aprenda a escribir bien.",
            "Sí, la ortografía es innegociable en el currículo dominicano.",
            "No, penalizar errores ortográficos asociados a una NEAE diagnosticada es una práctica excluyente; se debe evaluar el contenido y competencia, permitiendo herramientas compensatorias (ej. corrector digital).",
            "No, el profesor de Sociales no evalúa ortografía."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 02-2016. Castigar un síntoma directo de un Trastorno del Aprendizaje viola el principio de equidad. Se debe ofrecer la adecuación metodológica (uso de laptop, procesador de texto) y evaluar la competencia histórica o social, no el déficit."
    },
    {
        id: 70,
        categoria: "Convivencia",
        pregunta: "Dos estudiantes se pelean a golpes a tres cuadras del liceo, usando el uniforme escolar, y el video se viraliza. ¿Tiene competencia el centro educativo para aplicar medidas disciplinarias?",
        opciones: [
            "No, porque ocurrió fuera del recinto escolar físico.",
            "Sí, porque portan el uniforme institucional, afectando la imagen del centro y la convivencia de la comunidad educativa, tipificándose como Falta Grave o Muy Grave.",
            "No, eso es competencia exclusiva de la Policía Nacional.",
            "Sí, pero solo se les puede llamar la atención en privado sin sanción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Normas de Convivencia MINERD. El uso del uniforme y la afectación directa del clima escolar extienden la jurisdicción disciplinaria y formativa del centro educativo ante incidentes en las inmediaciones o redes sociales."
    },
    {
        id: 71,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "La dirección del centro le pide al psicólogo escolar que emita una carta obligando a los padres de un niño muy inquieto a medicarlo con Ritalina para dejarlo entrar al aula. ¿Cuál es la postura ética y legal correcta?",
        opciones: [
            "Redactar la carta, ya que la disciplina del centro es prioridad.",
            "Explicar que el centro educativo no prescribe medicamentos, no diagnostica clínicamente, ni puede condicionar el derecho a la educación a un tratamiento farmacológico.",
            "Darle remedios naturales al niño en el departamento.",
            "Obligar a los padres verbalmente sin dejar rastro escrito."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ética profesional y Ley 136-03. Condicionar el acceso a la educación a la medicación es discriminatorio y una exclusión ilegal. La indicación farmacológica es competencia exclusiva y soberana del médico especialista (psiquiatra/neurólogo) y la familia."
    },
    {
        id: 72,
        categoria: "Gestión/POA",
        pregunta: "Para prevenir los conflictos violentos de manera sistemática, el Manual de Orientación establece que las Unidades deben conformar y capacitar a un grupo de estudiantes líderes para que funjan como:",
        opciones: [
            "Espías o informantes del director.",
            "Red de Mediadores Escolares Pares.",
            "Policías escolares juveniles.",
            "Jueces de un tribunal de disciplina estudiantil."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estrategia de Cultura de Paz y Mediación Escolar. El programa de mediación entre pares entrena a los alumnos para facilitar diálogos y resolver conflictos leves de manera pacífica entre sus iguales, guiados por orientación."
    },
    {
        id: 73,
        categoria: "Familia",
        pregunta: "Una adolescente de 17 años que está embarazada y convive con su pareja (menor emancipado de hecho) acude a inscribir a su hijo recién nacido en la estancia infantil escolar y a firmar sus propias notas. ¿Se le permite?",
        opciones: [
            "No, debe venir su padre o madre hasta que cumpla los 18.",
            "Sí, la condición de madre/padre adolescente y la vida independiente les otorga emancipación de hecho para las decisiones sobre su educación y la de sus hijos.",
            "No, los menores embarazados pierden sus derechos civiles.",
            "Solo si la directora la autoriza."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Los adolescentes madres/padres tienen el derecho y la responsabilidad de representar a sus hijos, y al vivir de forma independiente asumen representatividad sobre sus propios procesos escolares."
    },
    {
        id: 74,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un estudiante de 8 años con TEA (Trastorno del Espectro Autista) tiende a huir del aula ('fuga') ante cambios imprevistos en la rutina. ¿Cuál es la estrategia psicopedagógica preventiva más efectiva?",
        opciones: [
            "Cerrar la puerta del aula con llave para que no escape.",
            "Castigarlo severamente si se levanta de la silla.",
            "Uso de agendas visuales/pictogramas, estructuración del tiempo y anticipación clara de los cambios de rutina o transiciones.",
            "Ignorar la conducta, ya que es parte de su autismo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal/Técnica: Adecuaciones de Acceso (Ordenanza 02-2016). Las personas con TEA requieren estructuración y predictibilidad. La anticipación visual y verbal de las transiciones reduce la ansiedad severa que provoca la conducta de fuga."
    },
    {
        id: 75,
        categoria: "Convivencia",
        pregunta: "Desaparece un teléfono celular dentro del aula. La docente cierra la puerta y amenaza con revisar la ropa interior de todos los estudiantes si no aparece. ¿Qué acción corresponde al orientador?",
        opciones: [
            "Ayudar a la docente a hacer la revisión más rápido.",
            "Intervenir de inmediato para detener el proceso, recordando que los cateos corporales son ilegales y violan la dignidad e integridad (Ley 136-03), y aplicar el protocolo de mediación e investigación sin coerción.",
            "Llamar a la prensa.",
            "Decirle al estudiante al que le robaron que no traiga cosas de valor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Normas de Convivencia y Constitución de la República. Las requisas corporales forzadas o vejatorias en escuelas son ilegales. El hurto (Falta Grave) se investiga mediante entrevistas, resguardando los derechos fundamentales."
    },
    {
        id: 76,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Falso o Verdadero: Según la normativa de Inclusión (Ordenanza 02-2016), los estudiantes con Altas Capacidades Intelectuales (Superdotación) NO presentan Necesidades Específicas de Apoyo Educativo (NEAE) porque ya son muy inteligentes.",
        opciones: [
            "Verdadero, las NEAE son solo para estudiantes con déficit.",
            "Falso, la sobredotación es una NEAE que requiere de programas de enriquecimiento curricular, ya que el currículo estándar les genera barreras de desmotivación y posible deserción.",
            "Verdadero, solo necesitan que se les ponga a dar clases.",
            "Falso, porque necesitan medicación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. La excepcionalidad superior (altas capacidades) está tipificada formalmente como una condición NEAE que exige respuesta educativa especializada (flexibilización y enriquecimiento)."
    },
    {
        id: 77,
        categoria: "Gestión/POA",
        pregunta: "El equipo de gestión decide realizar una reunión abierta con los docentes donde analizan en voz alta los historiales de abuso sexual de los estudiantes para 'tenerles pena'. ¿Qué principio ético y legal se violó?",
        opciones: [
            "Principio de Solidaridad.",
            "El Principio del Interés Superior del Niño y el deber de estricta Confidencialidad y protección de datos sensibles (Ley 136-03).",
            "No se violó nada, los maestros deben saberlo todo.",
            "Principio de Calidad Educativa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Ética CODOPSI. La divulgación de antecedentes de abuso (revictimización institucional) es una falta ética grave. Solo se comparten informaciones estrictamente necesarias para el manejo en aula, bajo anonimato de los detalles traumáticos."
    },
    {
        id: 78,
        categoria: "Familia",
        pregunta: "En la primera semana de adaptación del Nivel Inicial, una niña llora desconsoladamente al separarse de su madre. La maestra ordena a la madre irse corriendo a escondidas para que la niña no la vea. Según las prácticas recomendadas por MINERD:",
        opciones: [
            "Es la técnica correcta para evitar apego.",
            "Es una práctica dañina; la transición debe ser gradual, permitiendo despedidas afectuosas, tiempos reducidos progresivos y presencia de la familia si es necesario, generando seguridad.",
            "Se debe castigar a la niña por no madurar.",
            "Se le debe dar un calmante a la niña."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Pedagógica: Diseño Curricular del Nivel Inicial y Guía de Adaptación. Huir a escondidas genera ansiedad de abandono traumática. El proceso de adaptación exige rutinas de transición seguras, predecibles y de vinculación positiva."
    },
    {
        id: 79,
        categoria: "Convivencia",
        pregunta: "Se detecta que un estudiante de primaria de 10 años está mostrando imágenes pornográficas explícitas en su tableta a otros niños. El protocolo MINERD para este caso estipula:",
        opciones: [
            "Retener el dispositivo, informar de inmediato a la familia, derivar a evaluación psicosocial (indicador de posible vulneración de derechos/abuso en el entorno) y aplicar medida formativa.",
            "Romper la tableta frente a todos.",
            "Expulsarlo definitivamente por corromper menores.",
            "Dejarlo pasar porque en internet se ve de todo."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Normas de Convivencia y Protocolo de Protección. El consumo y distribución de pornografía infantil/adulta a esa edad no es solo una falta disciplinaria, es una alerta roja (bandera) de que el menor podría estar siendo víctima de exposición a material nocivo o abuso en su hogar."
    },
    {
        id: 80,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Una estudiante con baja visión severa (no ceguera total) es inscrita en el centro. El ajuste razonable de acceso más básico e inmediato que el orientador debe pautar con el docente es:",
        opciones: [
            "Enviarla al área de Orientación todos los días.",
            "Ubicación preferencial cerca de la pizarra, uso de macrotipos (letras ampliadas), buena iluminación y verbalización de todo lo que se escribe en el pizarrón.",
            "Que aprenda Braille de forma obligatoria.",
            "Eximirla de leer y escribir."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Técnica: DUA y Ordenanza 02-2016 (Adecuaciones de Acceso). Las modificaciones ambientales (luz, ubicación) y de formato (letra grande) son el primer nivel de intervención para garantizar la participación autónoma sin mermar la exigencia académica."
    },
    {
        id: 81,
        categoria: "Convivencia",
        pregunta: "En el marco de la Disciplina Positiva, los 'Círculos Restaurativos' tienen como finalidad principal:",
        opciones: [
            "Que el infractor sea avergonzado públicamente.",
            "Que todos se sienten en círculo a rezar.",
            "Construir comunidad y responder al conflicto reuniendo a los afectados para expresar cómo se sintieron y acordar conjuntamente cómo reparar el daño.",
            "Obligar a los estudiantes a memorizar las leyes."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Estrategias de Cultura de Paz y Buen Trato MINERD. El modelo de justicia restaurativa utiliza los círculos para fomentar empatía, responsabilidad y resarcir el tejido social roto por la falta disciplinaria."
    },
    {
        id: 82,
        categoria: "Gestión/POA",
        pregunta: "Al finalizar el 6to grado de primaria, la Unidad de Orientación desarrolla actividades para preparar emocional y académicamente a los estudiantes hacia el 1er grado de secundaria. ¿Cómo se llama este proceso clave del POA?",
        opciones: [
            "Graduación de octavo.",
            "Acompañamiento a la Transición de Nivel o Ciclo.",
            "Exámenes de Admisión.",
            "Diagnóstico Clínico de Salida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Orientación. Los programas de transición (tanto de Inicial a Primaria, como de Primaria a Secundaria) son responsabilidad del orientador para mitigar la deserción, el estrés adaptativo y el rezago académico producto de los cambios de sistema."
    },
    {
        id: 83,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El diagnóstico de disfasia en un niño impacta directamente en su capacidad de:",
        opciones: [
            "Caminar correctamente.",
            "Comprensión y expresión del lenguaje hablado (Trastorno específico del desarrollo del lenguaje).",
            "Ver la pizarra a larga distancia.",
            "Entender conceptos matemáticos complejos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Técnica: Perfiles de NEAE. La disfasia o Trastorno Específico del Lenguaje (TEL) afecta la estructuración, comprensión y expresión lingüística, requiriendo apoyos directos en el área de comunicación y acompañamiento fonoaudiológico."
    },
    {
        id: 84,
        categoria: "Familia",
        pregunta: "Un estudiante revela incidentalmente que un vecino lo tocó de forma indebida. La orientadora lo lleva a su departamento e inicia un interrogatorio profundo con 20 preguntas directas sobre el evento para 'estar segura antes de denunciar'. ¿Cuál es el error técnico gravísimo?",
        opciones: [
            "No haber invitado a la directora al interrogatorio.",
            "Realizar preguntas sugestivas e insistentes que provocan revictimización traumática y pueden invalidar el testimonio legalmente. El protocolo exige escuchar sin interrumpir ni interrogar, y derivar a CONANI/Ministerio Público.",
            "No haber llamado al vecino acusado.",
            "Ningún error, la orientadora debe investigar a fondo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolo ante presunción de abuso sexual MINERD/CONANI. El personal escolar tiene estrictamente prohibido investigar o interrogar pericialmente. Solo se acoge el develamiento (escucha empática y pasiva) y se denuncia, evitando la revictimización."
    },
    {
        id: 85,
        categoria: "Convivencia",
        pregunta: "El equipo docente nota que varios alumnos portan collares idénticos de ciertos colores, utilizan saludos corporales específicos codificados y marcan el baño con símbolos y un 'número'. Estos son indicadores de alerta de:",
        opciones: [
            "Una nueva tendencia de TikTok inofensiva.",
            "Presencia e infiltración de pandillas o bandas juveniles (asociación ilícita) en el centro educativo.",
            "Un club de lectura secreto.",
            "Alumnos superdotados jugando."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolos de Seguridad Escolar y Prevención de Violencia. La exhibición de códigos visuales, territoriales (grafitis) y de indumentaria coordinada son banderas rojas de la presencia de pandillas, requiriendo prevención y articulación con Policía Escolar Comunitaria."
    },


    // BLOQUE 5: PREGUNTAS 86 A 100 (CIERRE)
    {
        id: 86,
        categoria: "Ética Profesional",
        pregunta: "Un psicólogo escolar recibe un regalo costoso (una laptop de última generación) de parte de un padre para 'agradecerle' que su hijo haya pasado de grado tras un proceso de recuperación. Según el Código de Ética y el Estatuto Docente, el profesional debe:",
        opciones: [
            "Aceptar el regalo discretamente sin que el director se entere.",
            "Rechazar amablemente el regalo, explicando que su labor es un deber profesional remunerado por el Estado y que aceptar dádivas compromete su integridad y objetividad.",
            "Aceptarlo y rifarlo entre los estudiantes del curso.",
            "Pedirle al padre que mejor le dé el dinero en efectivo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estatuto del Docente y Código de Ética de CODOPSI. El personal educativo tiene prohibido solicitar o aceptar recompensas, regalos o beneficios por el cumplimiento de sus funciones oficiales (conflicto de intereses)."
    },
    {
        id: 87,
        categoria: "Gestión/POA",
        pregunta: "La 'Estrategia de Cultura de Paz' en los centros educativos dominicanos se fundamenta principalmente en:",
        opciones: [
            "El aumento de la vigilancia policial y las cámaras de seguridad.",
            "El desarrollo de competencias emocionales, la mediación de conflictos y la promoción del buen trato y los derechos humanos.",
            "La aplicación de reglamentos de disciplina cada vez más rígidos y punitivos.",
            "Prohibir que los estudiantes hablen durante el recreo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Lineamientos de Orientación y Psicología. La cultura de paz no es ausencia de conflicto, sino la capacidad de gestionarlos mediante el diálogo, la empatía y la resolución no violenta."
    },
    {
        id: 88,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al realizar una observación de aula, la orientadora nota que el docente utiliza un lenguaje despectivo con los estudiantes que tienen dificultades, llamándolos 'brutos' o 'perezosos'. ¿Cuál es la acción inmediata correcta?",
        opciones: [
            "Gritarle al docente frente a los alumnos para defenderlos.",
            "Realizar un acompañamiento reflexivo individual con el docente, recordándole las Normas de Convivencia y el impacto del clima afectivo en el aprendizaje, y reportar a la dirección.",
            "No intervenir, pues cada maestro tiene su estilo de enseñanza.",
            "Decirle a los estudiantes que ignoren al maestro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Estatuto del Docente y Normas de Convivencia. El maltrato verbal por parte del personal es una falta ética y administrativa. El orientador debe asesorar al docente hacia prácticas de respeto y disciplina positiva."
    },
    {
        id: 89,
        categoria: "Familia",
        pregunta: "La Ordenanza 02-2019 establece la conformación de las 'Escuelas de Padres y Madres'. ¿Cuál es el objetivo principal de este espacio coordinado por Orientación?",
        opciones: [
            "Cobrar las cuotas mensuales para el mantenimiento del centro.",
            "Fortalecer las competencias parentales y la corresponsabilidad de las familias en el proceso formativo de sus hijos.",
            "Que los padres vigilen a los maestros durante las clases.",
            "Organizar únicamente las fiestas de fin de año."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2019 y Ley 66-97. La Escuela de Padres es un espacio de formación sistemática para que la familia se involucre activamente en el apoyo académico y emocional desde el hogar."
    },
    {
        id: 90,
        categoria: "Convivencia",
        pregunta: "Un estudiante de secundaria es sorprendido fumando vape (cigarrillo electrónico) en el baño. Esta acción se clasifica según las normas vigentes como:",
        opciones: [
            "Falta Leve.",
            "Falta Grave.",
            "Falta Muy Grave.",
            "Acción permitida si el vape no tiene nicotina."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa. El consumo de tabaco o sustancias similares (vapeo) dentro de instituciones educativas es una Falta Muy Grave por el riesgo a la salud propia y ajena."
    },
    {
        id: 91,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En el Diseño Curricular Dominicano, las 'Competencias Fundamentales' son transversales a todas las áreas. ¿Cuál de ellas es responsabilidad directa y prioritaria del área de Orientación y Psicología?",
        opciones: [
            "Competencia Ética y Ciudadana, y Competencia de Desarrollo Personal y Espiritual.",
            "Competencia Científica y Tecnológica.",
            "Competencia Comunicativa en lenguas extranjeras.",
            "Competencia de Pensamiento Lógico en matemáticas."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Diseño Curricular Nivel Primario/Secundario. Aunque todas las áreas las trabajan, Orientación lidera el fortalecimiento del autoconocimiento, la autoestima y los valores éticos-sociales."
    },
    {
        id: 92,
        categoria: "Gestión/POA",
        pregunta: "Si un psicólogo escolar nota indicadores de agotamiento extremo (Burnout), pérdida de empatía y estrés crónico que afectan su labor, ¿qué principio de autocuidado ético debe aplicar?",
        opciones: [
            "Seguir trabajando sin decir nada para que no lo cancelen.",
            "Solicitar supervisión técnica, buscar apoyo profesional externo y notificar a su superior para gestionar un plan de bienestar laboral.",
            "Faltar al trabajo todos los lunes sin permiso.",
            "Desquitarse con los estudiantes más ruidosos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal/Ética: Código de Ética de CODOPSI. El profesional de la salud mental tiene la responsabilidad ética de velar por su propia salud para no perjudicar a sus usuarios y garantizar la calidad del servicio."
    },
    {
        id: 93,
        categoria: "Convivencia",
        pregunta: "Falso o Verdadero: El centro educativo puede prohibir la entrada a un estudiante por tener el pelo largo o un peinado afro, alegando 'higiene o disciplina'.",
        opciones: [
            "Verdadero, las normas internas de cada centro están por encima de todo.",
            "Falso, es una práctica discriminatoria que viola el derecho a la educación, la identidad personal y el libre desarrollo de la personalidad (Constitución Dominicana).",
            "Verdadero, solo si es un colegio privado.",
            "Falso, pero solo si el estudiante es excelente académicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución de la República y circulares del MINERD. El aspecto físico (pelo, peinados) no puede ser barrera para el acceso a la educación. La higiene no depende del largo o forma del cabello."
    },
    {
        id: 94,
        categoria: "Familia",
        pregunta: "Ante un caso de divorcio conflictivo, uno de los padres se presenta a la escuela y exige que NO se le dé ninguna información escolar al otro padre. ¿Cómo debe proceder la Unidad de Orientación?",
        opciones: [
            "Obedecer al primer padre que dio la orden.",
            "Informar que, mientras no exista una sentencia judicial que prive de la autoridad parental (patria potestad) a uno de ellos, ambos tienen derecho legal a recibir información sobre el progreso de su hijo.",
            "No darle información a ninguno de los dos para evitar líos.",
            "Cobrarle a ambos por cada boletín de notas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código Civil y Ley 136-03. La patria potestad es compartida. Solo un juez puede suspender el derecho de un padre/madre a estar informado sobre la vida escolar de su hijo."
    },
    {
        id: 95,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un niño de 3er grado de primaria aún no sabe leer ni escribir oraciones simples. El equipo de orientación debe priorizar:",
        opciones: [
            "Mandarlo a repetir el grado inmediatamente.",
            "Realizar una evaluación psicopedagógica completa para identificar si existe un Trastorno del Aprendizaje o si es un problema de mediación pedagógica (rezago).",
            "Ignorarlo, ya que cada niño tiene su ritmo y aprenderá solo a los 12 años.",
            "Decirle a la madre que lo ponga a trabajar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. La falta de adquisición de la lectoescritura en el primer ciclo es una alerta roja que exige intervención diagnóstica y apoyo inmediato para evitar el fracaso escolar."
    },
    {
        id: 96,
        categoria: "Gestión/POA",
        pregunta: "El 'Calendario Escolar' dominicano es un documento oficial que el orientador debe usar para:",
        opciones: [
            "Saber cuáles días no hay que ir a trabajar.",
            "Planificar las actividades de prevención, efemérides socioemocionales y periodos de evaluación en el POA.",
            "Anotar sus compromisos personales.",
            "Usarlo como cuaderno de notas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Resolución anual del MINERD. El calendario es la guía obligatoria de cumplimiento para la organización del tiempo docente y las actividades de apoyo psicopedagógico."
    },
    {
        id: 97,
        categoria: "Convivencia",
        pregunta: "El uso de la mediación de conflictos NO es recomendable cuando existe:",
        opciones: [
            "Un desacuerdo por un préstamo de un lápiz.",
            "Una situación de abuso sexual o violencia física grave con desequilibrio de poder evidente.",
            "Una discusión por un turno en la fila del almuerzo.",
            "Una diferencia de opiniones sobre un juego."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolos de Mediación. La mediación requiere igualdad de condiciones entre las partes. En casos de delitos (abuso sexual, agresiones físicas graves), no se media; se aplica la ley y la protección."
    },
    {
        id: 98,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "¿Qué organismo del MINERD se encarga de dar apoyo técnico directo a las escuelas para la atención de estudiantes con discapacidad, cuando el centro ya agotó sus recursos internos?",
        opciones: [
            "La Policía Escolar.",
            "Los CAD (Centros de Atención a la Diversidad).",
            "El Banco Central.",
            "La Junta de Vecinos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 02-2016. Los CAD son las instancias externas de apoyo que colaboran en la evaluación profunda y pautas de adecuación para estudiantes con discapacidad o NEAE complejas."
    },
    {
        id: 99,
        categoria: "Ética Profesional",
        pregunta: "Un docente le pide al psicólogo que le pase el test de personalidad de un alumno para leerlo en la sala de profesores. El psicólogo debe:",
        opciones: [
            "Prestárselo de inmediato para llevarse bien con el colega.",
            "Negarse, explicando que los protocolos de evaluación son confidenciales y solo se comparte con el docente el informe de recomendaciones pedagógicas derivadas de los resultados.",
            "Cobrarle por el préstamo del test.",
            "Publicar el test en el mural de la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ética profesional (CODOPSI) y Manual de Orientación. Los materiales brutos (tests, dibujos, notas de sesiones) son confidenciales. Al docente solo se le entregan las pautas de manejo y resultados interpretados que le ayuden en el aula."
    },
    {
        id: 100,
        categoria: "Marco Legal",
        pregunta: "La Ley General de Educación de la República Dominicana es la:",
        opciones: [
            "Ley 136-03.",
            "Ley 66-97.",
            "Ley 87-01.",
            "Ley 41-08."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Es el cimiento de todo el sistema educativo nacional. La 66-97 garantiza el derecho de todos los habitantes a la educación."
    },

    {
        id: 101,
        categoria: "Ética Profesional",
        pregunta: "Un orientador recibe un obsequio costoso de parte de los padres de un estudiante poco antes de la entrega de informes de evaluación. Según el Código de Ética (Orden Departamental 22-2023), usted debe:",
        opciones: [
            "Aceptar el regalo para no ofender la amabilidad de la familia.",
            "Rechazar el regalo cortésmente, ya que el personal educativo tiene prohibido recibir dádivas que comprometan su imparcialidad.",
            "Aceptarlo y donarlo a la dirección del centro educativo.",
            "Recibirlo solo si el estudiante tiene excelentes calificaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El Código de Ética prohíbe al personal docente y administrativo aceptar regalos o beneficios que puedan interpretarse como un conflicto de interés o favoritismo."
    },
    {
        id: 102,
        categoria: "Derecho Constitucional",
        pregunta: "De acuerdo con el Artículo 63 de la Constitución Dominicana, la educación tiene como objeto:",
        opciones: [
            "La formación de mano de obra técnica para el sector privado.",
            "La formación integral del ser humano a lo largo de toda la vida y la formación de ciudadanos libres, críticos y creativos.",
            "Únicamente la alfabetización inicial en el primer ciclo de primaria.",
            "El cumplimiento de los objetivos de los partidos políticos de turno."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución de la República Dominicana, Art. 63. Define la educación como un derecho humano y establece sus fines esenciales de desarrollo integral y ciudadanía."
    },
    {
        id: 103,
        categoria: "Evaluación de Aprendizajes",
        pregunta: "La Ordenanza 04-2023 establece que la evaluación de los aprendizajes en los niveles Inicial, Primario y Secundario debe ser:",
        opciones: [
            "Sumativa y centrada solo en los exámenes finales.",
            "Un proceso pedagógico, sistemático, participativo, continuo y basado en competencias.",
            "Un método para clasificar a los estudiantes según su inteligencia.",
            "Responsabilidad exclusiva del psicólogo escolar y no del docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Esta norma redefine el sistema de evaluación para alinearlo con el currículo por competencias vigente."
    },
    {
        id: 104,
        categoria: "Protección de Menores",
        pregunta: "Un psicólogo escolar detecta sospechas fundadas de abuso sexual en un menor. Según la Ley 136-03, ¿cuál es el protocolo obligatorio?",
        opciones: [
            "Confrontar a la familia antes de cualquier reporte externo.",
            "Realizar una terapia psicológica profunda para confirmar antes de denunciar.",
            "Notificar de inmediato al Ministerio Público o a la Fiscalía de Niños, Niñas y Adolescentes.",
            "Solicitar autorización previa al Director del Distrito Educativo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 136-03 (Código para el Sistema de Protección). La denuncia es obligatoria e inmediata ante la sospecha de vulneración de derechos, prevaleciendo el Interés Superior del Niño."
    },
    {
        id: 105,
        categoria: "Inclusión Educativa",
        pregunta: "Según la Ordenanza 05-2024, si un centro educativo no posee rampas o materiales adaptados para un estudiante con discapacidad, el centro debe:",
        opciones: [
            "Sugerir a los padres que busquen un centro con mejores condiciones.",
            "Gestionar y aplicar los Ajustes Razonables y apoyos necesarios para garantizar la educación inclusiva.",
            "Exonerar al estudiante de asistir a clases presenciales.",
            "Esperar a que el Ministerio de Educación realice una remodelación general del plantel."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Establece los lineamientos para la educación inclusiva, obligando al sistema a adaptarse a la diversidad del alumnado."
    },
    {
        id: 106,
        categoria: "Participación Familiar",
        pregunta: "La reciente Ordenanza 03-2025 establece que el organismo base para la participación de los padres en el aula es:",
        opciones: [
            "La Junta de Centro.",
            "El Comité de Curso de Padres, Madres y Tutores.",
            "El Consejo de Estudiantes.",
            "La Asociación de Ex-alumnos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Regula la participación de la familia, colocando al Comité de Curso como la célula fundamental de apoyo al docente guía."
    },
    {
        id: 107,
        categoria: "Función Pública",
        pregunta: "Un orientador abandona su puesto de trabajo por tres días consecutivos sin justificación legal. Según la Ley 41-08 de Función Pública, esto se tipifica como:",
        opciones: [
            "Una falta leve.",
            "Una falta grave que puede dar lugar a la destitución.",
            "Un derecho del trabajador por estrés laboral.",
            "Una acción que solo requiere reposición del tiempo perdido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 de Función Pública. El abandono injustificado del cargo es una violación directa a los deberes del servidor público."
    },
    {
        id: 108,
        categoria: "Transparencia",
        pregunta: "Un grupo de ciudadanos solicita información sobre el uso de los fondos descentralizados de un centro educativo. Según la Ley 200-04, el centro debe:",
        opciones: [
            "Negar la información por ser de seguridad institucional.",
            "Entregar la información solicitada en el plazo legal, garantizando el libre acceso a los datos públicos.",
            "Cobrar una tarifa especial por el servicio de búsqueda.",
            "Solicitar que la persona explique para qué usará la información."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04 de Libre Acceso a la Información Pública. Establece que toda institución que reciba fondos del Estado debe rendir cuentas a cualquier ciudadano que lo solicite."
    },
    {
        id: 109,
        categoria: "Alfabetización",
        pregunta: "La Ordenanza 01-2023 prioriza la Política Nacional de Alfabetización Inicial para asegurar que los niños dominen la lectura y escritura en:",
        opciones: [
            "El Nivel Inicial solamente.",
            "La Etapa Oportuna (primer ciclo del Nivel Primario).",
            "El primer año del Nivel Secundario.",
            "Programas de educación de adultos exclusivamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El foco del MINERD es garantizar que el aprendizaje de la lengua escrita ocurra en los grados 1ro, 2do y 3ro de primaria."
    },
    {
        id: 110,
        categoria: "Discapacidad",
        pregunta: "La Ley 5-13 sobre Discapacidad en RD establece que el Ministerio de Educación debe garantizar:",
        opciones: [
            "Escuelas separadas para cada tipo de discapacidad.",
            "El acceso, permanencia y progreso de las personas con discapacidad en un sistema educativo inclusivo.",
            "La exención de impuestos para los padres de niños con discapacidad.",
            "Únicamente becas para estudios en el extranjero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13. Esta ley fundamenta el derecho a la no discriminación y la obligación de adaptar los entornos educativos."
    },
    {
        id: 111,
        categoria: "Ética y Relaciones",
        pregunta: "Según la Orden Departamental 22-2023, ¿cuál de estas acciones está prohibida para el personal docente?",
        opciones: [
            "Realizar tutorías académicas grupales en el aula.",
            "Transportar estudiantes en vehículos privados sin autorización previa y justificación de emergencia.",
            "Participar en las reuniones de la APMAE.",
            "Colaborar con el psicólogo en el seguimiento de un caso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 (Código de Ética). Establece límites claros para evitar situaciones de riesgo o interpretaciones de abuso de poder."
    },
    {
        id: 112,
        categoria: "Desarrollo Nacional",
        pregunta: "El cuarto eje estratégico de la Estrategia Nacional de Desarrollo 2030 (Ley 1-12) se enfoca en:",
        opciones: [
            "La construcción de nuevos aeropuertos.",
            "Una sociedad de producción y consumo ambientalmente sostenible.",
            "La exportación de minerales.",
            "La privatización del servicio eléctrico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. El cuarto eje de la END busca la sostenibilidad ambiental y la adaptación al cambio climático como base del desarrollo."
    },
    {
        id: 113,
        categoria: "Evaluación y Promoción",
        pregunta: "Bajo la Ordenanza 04-2023, si un estudiante de Primaria no logra los aprendizajes requeridos tras las estrategias de recuperación pedagógica, se debe:",
        opciones: [
            "Promoverlo automáticamente por su edad.",
            "Realizar un informe detallado y aplicar la normativa de permanencia o promoción correspondiente.",
            "Suspenderlo del centro educativo.",
            "Obligarlo a tomar clases nocturnas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Regula la promoción basada en el logro de competencias e indicadores definidos en el diseño curricular."
    },
    {
        id: 114,
        categoria: "Derechos Humanos",
        pregunta: "El Artículo 26 de la Declaración Universal de los Derechos Humanos, vinculado al Artículo 63 constitucional, establece que la educación debe:",
        opciones: [
            "Ser gratuita, al menos en la instrucción elemental y fundamental.",
            "Ser obligatoria solo para los varones.",
            "Depender de la posición económica de los padres.",
            "Centrarse solo en la formación militar."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Declaración Universal de los Derechos Humanos. Establece la gratuidad y obligatoriedad de la enseñanza básica como un derecho universal."
    },
    {
        id: 115,
        categoria: "Necesidades Específicas",
        pregunta: "La Ordenanza 04-2018 norma los servicios para estudiantes con Necesidades Específicas de Apoyo Educativo (NEAE). ¿Cuál es su objetivo principal?",
        opciones: [
            "Identificar a los estudiantes con dificultades para retirarlos del sistema regular.",
            "Establecer normas para la atención a la diversidad y asegurar ajustes curriculares.",
            "Crear un currículo totalmente distinto para estos estudiantes.",
            "Delegar la responsabilidad total en los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2018. Es la norma pionera en regular cómo el currículo debe ser flexible para atender a la diversidad."
    },
    {
        id: 116,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante agrede físicamente a un compañero provocándole una lesión. Según las Normas del Sistema Educativo Dominicano (Ordenanza 05-2023), esta falta es:",
        opciones: [
            "Leve.",
            "Grave.",
            "Muy Grave.",
            "Un conflicto menor entre pares."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2023. La violencia física que atenta contra la integridad de los miembros de la comunidad educativa es calificada como Falta Muy Grave."
    },
    {
        id: 117,
        categoria: "Estructura del Sistema",
        pregunta: "La Ley 66-97 establece que el organismo superior de decisión en materia de política educativa en la República Dominicana es:",
        opciones: [
            "El Congreso Nacional.",
            "El Consejo Nacional de Educación.",
            "La ADP (Asociación Dominicana de Profesores).",
            "El Despacho de la Primera Dama."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97, Art. 76. El Consejo Nacional de Educación es el máximo órgano de dirección del sistema educativo preuniversitario."
    },
    {
        id: 118,
        categoria: "Participación Comunitaria",
        pregunta: "Según la Ordenanza 03-2025, ¿cuál es la función de la APMAE respecto a los recursos del centro?",
        opciones: [
            "Gastar el dinero de la Junta de Centro a su discreción.",
            "Colaborar con la fiscalización y el apoyo a la ejecución de los planes del centro.",
            "Establecer cuotas obligatorias a los padres para pagar maestros.",
            "Administrar las cuentas bancarias personales de los docentes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. La Asociación de Padres, Madres, Amigos y Tutores de la Escuela tiene un rol de apoyo y vigilancia, no de administración directa del presupuesto del Estado."
    },
    {
        id: 119,
        categoria: "Evaluación por Competencias",
        pregunta: "Bajo la Ordenanza 04-2023, la evaluación que se realiza al inicio de un proceso para conocer los saberes previos se denomina:",
        opciones: [
            "Evaluación Sumativa.",
            "Evaluación Diagnóstica.",
            "Evaluación Final.",
            "Examen Completivo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica es fundamental para ajustar la planificación docente a la realidad del grupo."
    },
    {
        id: 120,
        categoria: "Código de Ética",
        pregunta: "Si un psicólogo escolar es testigo de un acto de corrupción administrativa en el centro, según el Código de Ética y la Ley 41-08, debe:",
        opciones: [
            "Callar para evitar conflictos con sus compañeros.",
            "Denunciar el hecho ante las autoridades superiores siguiendo los canales institucionales.",
            "Publicarlo en redes sociales de forma anónima.",
            "Renunciar inmediatamente sin decir nada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y Orden Departamental 22-2023. Los servidores públicos tienen el deber ético y legal de denunciar irregularidades que afecten el patrimonio público."
    },


    {
        id: 121,
        categoria: "Ética Profesional",
        pregunta: "Según la Orden Departamental 22-2023, ¿cuál es el protocolo a seguir si un docente necesita comunicarse con un estudiante vía WhatsApp por un tema académico urgente?",
        opciones: [
            "Escribirle directamente al número personal del estudiante en cualquier horario.",
            "Hacerlo preferiblemente a través del grupo oficial del curso o mediante el contacto con el padre, madre o tutor legal.",
            "Pedirle al estudiante que borre la conversación después de leerla.",
            "Está estrictamente prohibido usar WhatsApp, incluso para temas académicos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El Código de Ética establece que la comunicación debe ser transparente y a través de los canales institucionales o tutores para evitar la privacidad inadecuada con menores."
    },
    {
        id: 122,
        categoria: "Evaluación de Aprendizajes",
        pregunta: "De acuerdo con la Ordenanza 04-2023, ¿qué sucede con un estudiante que no logra los indicadores de logro mínimos después de las estrategias de recuperación?",
        opciones: [
            "Es promovido automáticamente por el principio de flexibilidad.",
            "El docente debe realizar ajustes en su planificación y ofrecer nuevas oportunidades de aprendizaje según los criterios de promoción vigentes.",
            "Se le asigna una calificación de 70 para que pueda pasar de grado.",
            "Debe abandonar el centro educativo y buscar una escuela técnica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es procesual y el sistema obliga a agotar todas las estrategias pedagógicas antes de decidir la permanencia o promoción."
    },
    {
        id: 123,
        categoria: "Derechos de la Infancia",
        pregunta: "La Ley 136-03 define el 'Interés Superior del Niño' como:",
        opciones: [
            "El derecho de los padres a decidir sobre la vida de sus hijos sin intervención del Estado.",
            "El principio que obliga a que toda decisión que afecte a un menor deba priorizar su bienestar y derechos fundamentales.",
            "La obligación de que los niños tengan las calificaciones más altas del curso.",
            "El derecho de los niños a no recibir correcciones disciplinarias de ningún tipo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Este principio es transversal a toda la normativa dominicana y obliga a jueces, docentes y psicólogos a decidir siempre lo más beneficioso para el menor."
    },
    {
        id: 124,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 define las 'Barreras para el Aprendizaje y la Participación' (BAP) como:",
        opciones: [
            "La falta de inteligencia de algunos estudiantes.",
            "Factores del entorno (físico, curricular o actitudinal) que dificultan el acceso pleno a la educación en igualdad de condiciones.",
            "El muro perimetral que rodea los centros educativos.",
            "La resistencia de los padres a inscribir a sus hijos en la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El enfoque inclusivo moderno se centra en eliminar las barreras del contexto en lugar de ver la 'discapacidad' como un problema del estudiante."
    },
    {
        id: 125,
        categoria: "Participación Comunitaria",
        pregunta: "Según la Ordenanza 03-2025, ¿cuál es la vigencia de la directiva de la Asociación de Padres, Madres, Amigos y Tutores de la Escuela (APMAE)?",
        opciones: [
            "1 año.",
            "2 años.",
            "4 años.",
            "Es vitalicia mientras tengan hijos en la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. La nueva normativa establece periodos de 2 años para permitir la renovación y participación democrática de las familias."
    },
    {
        id: 126,
        categoria: "Gestión Administrativa",
        pregunta: "La Ley 41-08 establece que los servidores públicos (incluyendo docentes) tienen derecho a una licencia por matrimonio de:",
        opciones: [
            "1 día laborable.",
            "3 días laborables.",
            "5 días laborables.",
            "15 días calendario."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 41-08 de Función Pública. Es un derecho establecido para todos los servidores públicos del Estado Dominicano."
    },
    {
        id: 127,
        categoria: "Legislación Educativa",
        pregunta: "La Ley 66-97 establece que la Educación Inicial es obligatoria para el último año, el cual corresponde a la edad de:",
        opciones: [
            "3 años.",
            "4 años.",
            "5 años.",
            "6 años."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 66-97. Aunque el Nivel Inicial comienza antes, el Estado dominicano garantiza la obligatoriedad y gratuidad del último año (Pre-primario)."
    },
    {
        id: 128,
        categoria: "Transparencia",
        pregunta: "Si un ciudadano solicita información pública y el centro educativo no responde en un plazo de 15 días hábiles, según la Ley 200-04 se produce:",
        opciones: [
            "La cancelación automática de la solicitud.",
            "El silencio administrativo positivo, y el ciudadano puede reclamar ante el Tribunal Superior Administrativo.",
            "Una multa automática para el portero del centro.",
            "El cierre temporal del centro educativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. El incumplimiento del plazo de respuesta genera responsabilidad legal para el funcionario a cargo."
    },
    {
        id: 129,
        categoria: "Ética Escolar",
        pregunta: "Un psicólogo escolar observa que un compañero docente humilla verbalmente a un estudiante frente a la clase. ¿Cuál es su deber según la Orden Departamental 22-2023?",
        opciones: [
            "No intervenir para no dañar la relación con su compañero.",
            "Reportar el incidente a la dirección y orientar al docente sobre el trato digno y el Código de Ética.",
            "Humillar al docente para que sienta lo que sintió el alumno.",
            "Decirle al estudiante que no le preste atención."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El personal debe velar por la integridad emocional de los estudiantes y reportar cualquier conducta que vulnere su dignidad."
    },
    {
        id: 130,
        categoria: "Alfabetización Inicial",
        pregunta: "La Política Nacional de Alfabetización Inicial (Ordenanza 01-2023) se enfoca principalmente en fortalecer:",
        opciones: [
            "El aprendizaje de lenguas extranjeras en primaria.",
            "La comprensión lectora, la producción de textos y el pensamiento lógico-matemático en el primer ciclo.",
            "El uso de redes sociales en el aula.",
            "La caligrafía artística únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Esta política busca saldar la deuda histórica de aprendizaje de lectura y escritura en los grados iniciales."
    },
    {
        id: 131,
        categoria: "Constitución y Educación",
        pregunta: "El Artículo 63 de la Constitución establece que el Estado tiene la obligación de garantizar la gratuidad de la educación en los niveles:",
        opciones: [
            "Inicial y Primario únicamente.",
            "Primario y Secundario únicamente.",
            "Inicial, Primario y Secundario.",
            "Desde el nivel inicial hasta el nivel doctoral."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Constitución Dominicana, Art. 63. El Estado garantiza la educación preuniversitaria gratuita y obligatoria."
    },
    {
        id: 132,
        categoria: "Sistema de Evaluación",
        pregunta: "Según la Ordenanza 04-2023, la calificación mínima para promover una asignatura en el Nivel Secundario es de:",
        opciones: [
            "60 puntos.",
            "65 puntos.",
            "70 puntos.",
            "80 puntos."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. Se mantiene el criterio de 70 puntos como el mínimo aprobatorio para el Nivel Secundario."
    },
    {
        id: 133,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante es encontrado con un arma blanca en su mochila. Según las Normas del Sistema Educativo (05-2023), esto se clasifica como:",
        opciones: [
            "Falta Leve.",
            "Falta Grave.",
            "Falta Muy Grave.",
            "No es una falta si no la usó."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2023. La posesión de objetos peligrosos (armas blancas, de fuego, etc.) pone en riesgo la seguridad colectiva y es una Falta Muy Grave."
    },
    {
        id: 134,
        categoria: "Derechos Humanos",
        pregunta: "El Artículo 26 de la Declaración Universal de Derechos Humanos establece que los padres tienen derecho preferente a:",
        opciones: [
            "Recibir un sueldo por enviar a sus hijos a la escuela.",
            "Escoger el tipo de educación que habrá de darse a sus hijos.",
            "Castigar físicamente a sus hijos en presencia de los maestros.",
            "No enviar a sus hijos a la escuela si así lo desean."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Art. 26 de la Declaración de DD.HH. Reconoce la libertad de las familias para elegir el centro y enfoque educativo."
    },
    {
        id: 135,
        categoria: "Función Pública",
        pregunta: "Según la Ley 41-08, los servidores de carrera administrativa solo pueden ser destituidos por:",
        opciones: [
            "Cambio de gobierno o partido político.",
            "Decisión arbitraria del director del centro.",
            "Causas legales justificadas y siguiendo el debido proceso.",
            "No caerle bien a la comunidad educativa."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ley 41-08. La estabilidad laboral es un derecho del servidor de carrera, protegiéndolo de despidos políticos."
    },
    {
        id: 136,
        categoria: "Ordenanza 05-2024",
        pregunta: "¿Qué es el DUA dentro del marco de la Educación Inclusiva?",
        opciones: [
            "Documento Único de Alumno.",
            "Diseño Universal para el Aprendizaje, que busca crear currículos accesibles para todos desde el inicio.",
            "Departamento de Unidades Académicas.",
            "Derecho Universal al Alimento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El DUA es el enfoque pedagógico recomendado para atender la diversidad en el aula ordinaria."
    },
    {
        id: 137,
        categoria: "Planificación Estratégica",
        pregunta: "La Ley 1-12 (Estrategia Nacional de Desarrollo) establece que para el año 2030, la República Dominicana debe ser:",
        opciones: [
            "Una potencia militar regional.",
            "Una sociedad democrática, cohesionada, territorialmente equilibrada y que garantiza igualdad de oportunidades.",
            "Un país donde solo se hable inglés.",
            "Una economía basada únicamente en la agricultura."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. Define la visión de nación a largo plazo como un país socialmente justo y desarrollado."
    },
    {
        id: 138,
        categoria: "Estructura Educativa",
        pregunta: "Según la Ley 66-97, el sistema educativo preuniversitario se divide en los siguientes niveles:",
        opciones: [
            "Básico, Medio y Superior.",
            "Inicial, Primario y Secundario.",
            "Maternal, Primario y Técnico.",
            "Pre-escolar, Escolar y Liceo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97 (actualizada por estructura actual). Los tres niveles fundamentales son Inicial, Primario y Secundario."
    },
    {
        id: 139,
        categoria: "Participación Comunitaria",
        pregunta: "Bajo la Ordenanza 03-2025, ¿quién preside la Junta de Centro Educativo?",
        opciones: [
            "El presidente de la APMAE.",
            "El Director del Centro Educativo.",
            "El Alcalde de la comunidad.",
            "El representante de los docentes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. El director es la máxima autoridad ejecutiva y preside la junta como órgano descentralizado."
    },
    {
        id: 140,
        categoria: "Justificación Técnica",
        pregunta: "Un docente decide no evaluar a un estudiante con autismo porque 'no entiende nada'. ¿Qué principio de la Ordenanza 05-2023 y 05-2024 viola?",
        opciones: [
            "El principio de ahorro de tiempo docente.",
            "El principio de equidad y el derecho a una evaluación adaptada a las necesidades del estudiante.",
            "El principio de autonomía pedagógica.",
            "Ninguno, el docente tiene la razón si el alumno no habla."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanzas 05-2023 y 05-2024. Todo estudiante tiene derecho a ser evaluado mediante los ajustes curriculares necesarios según su condición."
    },

    {
        id: 141,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante de secundaria es sorprendido consumiendo bebidas alcohólicas dentro del plantel. Según la Ordenanza 05-2023, esta conducta se considera una:",
        opciones: [
            "Falta Leve.",
            "Falta Grave.",
            "Falta Muy Grave.",
            "Falta de respeto simple."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2023. El consumo, posesión o promoción de sustancias prohibidas (alcohol, tabaco, drogas) dentro de los centros educativos es una Falta Muy Grave."
    },
    {
        id: 142,
        categoria: "Evaluación de Aprendizajes",
        pregunta: "Según la Ordenanza 04-2023, ¿cuál es la función de la 'Evaluación Formativa' durante el proceso de enseñanza?",
        opciones: [
            "Poner una nota definitiva al final de cada mes.",
            "Identificar progresos, dificultades y ajustar la intervención pedagógica mientras el aprendizaje ocurre.",
            "Determinar si el estudiante aprueba o reprueba el año.",
            "Comparar el rendimiento de un estudiante con el de sus compañeros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación formativa no busca calificar, sino regular el proceso de aprendizaje y enseñanza en tiempo real."
    },
    {
        id: 143,
        categoria: "Legislación Educativa",
        pregunta: "La Ley 66-97 establece que el 'Gasto Público Anual en Educación' no debe ser inferior al:",
        opciones: [
            "2% del PIB o el 10% del gasto público total.",
            "4% del PIB o el 16% del gasto público total, de ambos el que sea mayor.",
            "5% del PIB fijado por la Constitución.",
            "3% del PIB según el Banco Mundial."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Es el mandato legal que fundamenta el presupuesto educativo dominicano."
    },
    {
        id: 144,
        categoria: "Código de Ética",
        pregunta: "Usted se entera de que un colega docente utiliza a los estudiantes para realizar compras personales fuera del centro durante el horario de clases. Según la Orden Departamental 22-2023, esto es:",
        opciones: [
            "Una muestra de confianza docente-estudiante.",
            "Una violación al Código de Ética que prohíbe el uso de estudiantes para fines personales o domésticos.",
            "Permitido si el estudiante tiene permiso escrito de sus padres.",
            "Una falta leve que solo requiere reporte verbal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El personal educativo debe garantizar la seguridad y el tiempo académico de los menores, prohibiéndose su uso para tareas personales."
    },
    {
        id: 145,
        categoria: "Inclusión y Discapacidad",
        pregunta: "Bajo la Ley 5-13 y la Ordenanza 05-2024, ¿qué son los 'Ajustes Curriculares Individualizados' (ACI)?",
        opciones: [
            "Un currículo especial para que el estudiante no tenga que estudiar lo mismo que los demás.",
            "Modificaciones y adaptaciones en los elementos del currículo para dar respuesta a las NEAE de un estudiante.",
            "La eliminación de los exámenes para los estudiantes con discapacidad.",
            "Un documento para justificar que el estudiante no puede aprender."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ACI permiten que el estudiante acceda al mismo currículo que sus pares mediante los apoyos necesarios."
    },
    {
        id: 146,
        categoria: "Función Pública",
        pregunta: "Según la Ley 41-08, ¿cuál de los siguientes es un deber de los servidores públicos?",
        opciones: [
            "Realizar actividades proselitistas en el lugar de trabajo.",
            "Desempeñar con dedicación y honestidad las funciones a su cargo.",
            "Delegar sus funciones en personas ajenas a la institución.",
            "Recibir gratificaciones por agilizar trámites de los ciudadanos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 de Función Pública. La honestidad y dedicación son principios rectores del servicio civil."
    },
    {
        id: 147,
        categoria: "Participación Comunitaria",
        pregunta: "La Ordenanza 03-2025 indica que la participación de las familias en la gestión escolar es:",
        opciones: [
            "Opcional según lo decida el Director del centro.",
            "Un derecho y un deber constitucional y legal para fortalecer la calidad educativa.",
            "Solo para los padres que pagan la cuota de la APMAE.",
            "Limitada únicamente a la firma de boletines de notas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Esta nueva norma refuerza que la gestión educativa es compartida entre escuela, familia y comunidad."
    },
    {
        id: 148,
        categoria: "Alfabetización",
        pregunta: "En el marco de la Ordenanza 01-2023, ¿cuál es el papel del equipo de orientación y psicología en la alfabetización?",
        opciones: [
            "Enseñar a leer y escribir directamente en lugar del maestro.",
            "Identificar de forma temprana barreras de aprendizaje y brindar apoyo psicopedagógico a los estudiantes rezagados.",
            "Sancionar a los estudiantes que no aprenden al ritmo del grupo.",
            "Evaluar solo a los estudiantes que terminan el bachillerato."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El apoyo psicopedagógico es vital para la política de alfabetización inicial oportuna."
    },
    {
        id: 149,
        categoria: "Derecho a la Información",
        pregunta: "Según la Ley 200-04, si una información solicitada ya está disponible en la página web de la institución, la autoridad debe:",
        opciones: [
            "Ignorar la solicitud.",
            "Indicar al solicitante la fuente, dirección o sitio exacto donde puede acceder a la información.",
            "Obligar al ciudadano a ir presencialmente a buscarla.",
            "Cobrar por el diseño de la página web."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Se busca la eficiencia en el acceso; si es público y digital, se facilita el enlace directo."
    },
    {
        id: 150,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante falta a clases de manera recurrente sin causa justificada. Según la Ordenanza 05-2023, esto es una:",
        opciones: [
            "Falta Leve.",
            "Falta Grave.",
            "Falta Muy Grave.",
            "Situación que no le compete a la escuela."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 05-2023. La impuntualidad y la inasistencia injustificada se consideran Faltas Leves, pero requieren seguimiento para evitar el abandono escolar."
    },
    {
        id: 151,
        categoria: "Sistema de Evaluación",
        pregunta: "¿Qué técnica de evaluación es priorizada por la Ordenanza 04-2023 para evaluar competencias en el Nivel Secundario?",
        opciones: [
            "El dictado y la repetición de textos.",
            "El uso de rúbricas, listas de cotejo, portafolios y resolución de problemas.",
            "La memorización de fechas históricas.",
            "Únicamente los exámenes de selección múltiple."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El enfoque por competencias exige instrumentos que evidencien el desempeño real del estudiante."
    },
    {
        id: 152,
        categoria: "Ley 136-03",
        pregunta: "Bajo la Ley 136-03, la 'Disciplina Escolar' debe ser:",
        opciones: [
            "Administrada mediante castigos físicos moderados.",
            "Compatible con la dignidad del niño y sus derechos fundamentales, prohibiendo el maltrato físico y psicológico.",
            "Responsabilidad única de la policía escolar.",
            "Aplicada solo en casos de extrema urgencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Prohíbe cualquier forma de disciplina que degrade o violente la integridad del menor."
    },
    {
        id: 153,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 04-2018 establece que el Centro de Atención a la Diversidad (CAD) tiene como función:",
        opciones: [
            "Sacar a los estudiantes con discapacidad de las aulas regulares.",
            "Asesorar y acompañar a los centros educativos en la implementación de apoyos para estudiantes con NEAE.",
            "Decidir qué niños pueden estudiar y cuáles no.",
            "Administrar las becas de los estudiantes de secundaria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2018. El CAD es el soporte técnico para que la inclusión sea una realidad en los centros."
    },
    {
        id: 154,
        categoria: "Estrategia Nacional",
        pregunta: "Uno de los objetivos de la Ley 1-12 (END) en materia de educación es:",
        opciones: [
            "Universalizar la educación inicial, primaria y secundaria con calidad.",
            "Reducir el número de docentes para ahorrar recursos.",
            "Privatizar la educación universitaria.",
            "Sustituir los libros impresos por tabletas sin supervisión pedagógica."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 1-12. Busca la cobertura universal y la calidad educativa como derecho fundamental."
    },
    {
        id: 155,
        categoria: "Constitución Dominicana",
        pregunta: "Según el Art. 63, ¿quién tiene el derecho y la responsabilidad primaria de la educación de sus hijos?",
        opciones: [
            "El Estado dominicano.",
            "El Ministerio de Educación.",
            "La familia.",
            "Los tribunales de niños, niñas y adolescentes."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Constitución Dominicana. Reconoce a la familia como el núcleo inicial de la educación y el Estado como garante del servicio."
    },
    {
        id: 156,
        categoria: "Ética Profesional",
        pregunta: "Un orientador difunde fotos de un estudiante que cometió una falta en un grupo de WhatsApp de amigos. Según la Orden Departamental 22-2023, esto es:",
        opciones: [
            "Una forma de alertar a la sociedad.",
            "Una falta grave que viola el derecho a la intimidad, la imagen del menor y el deber de confidencialidad.",
            "Permitido si el estudiante no se ve bien en la foto.",
            "Solo una falta leve si no hubo mala intención."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 136-03. La protección de la imagen y la privacidad del menor es sagrada y su violación conlleva sanciones legales y éticas."
    },
    {
        id: 157,
        categoria: "Ordenanza 05-2024",
        pregunta: "¿Qué establece la Ordenanza 05-2024 respecto al currículo dominicano?",
        opciones: [
            "Que es rígido y no admite cambios.",
            "Que debe ser flexible y abierto para permitir los ajustes necesarios a favor de la inclusión.",
            "Que solo se puede modificar cada 20 años.",
            "Que es exclusivo para personas sin discapacidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La flexibilidad curricular es la clave para atender a la diversidad en el aula inclusiva."
    },
    {
        id: 158,
        categoria: "Gestión Escolar",
        pregunta: "Según la Ley 66-97, ¿quién preside el Consejo Nacional de Educación?",
        opciones: [
            "El Presidente de la República.",
            "El Ministro de Educación.",
            "El Director Ejecutivo del INABIMA.",
            "El presidente de la Cámara de Diputados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. El Ministro de Educación dirige este órgano máximo del sistema."
    },
    {
        id: 159,
        categoria: "Participación Comunitaria",
        pregunta: "Bajo la Ordenanza 03-2025, ¿cuál es el propósito de la 'Escuela de Padres y Madres'?",
        opciones: [
            "Que los padres vuelvan a cursar el bachillerato.",
            "Proporcionar un espacio de formación y reflexión para fortalecer las competencias parentales y el apoyo al aprendizaje.",
            "Recaudar fondos para la construcción de aulas.",
            "Elegir al nuevo director del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Es un componente estratégico para que la familia sepa cómo acompañar el proceso educativo de sus hijos."
    },
    {
        id: 160,
        categoria: "Sistema de Evaluación",
        pregunta: "En el Nivel Primario, según la Ordenanza 04-2023, el informe que se entrega a los padres para comunicar los resultados se llama:",
        opciones: [
            "Acta de Calificaciones.",
            "Informe de Aprendizaje.",
            "Récord de Notas.",
            "Certificado de Aptitud."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El nombre busca reflejar que lo que se comunica es el progreso en el aprendizaje, no solo números."
    },


    {
        id: 161,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante altera o falsifica las calificaciones en su Informe de Aprendizaje. Según la Ordenanza 05-2023, esta acción es una:",
        opciones: [
            "Falta Leve.",
            "Falta Grave.",
            "Falta Muy Grave.",
            "Acción sin importancia si el estudiante tiene buenas notas."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 05-2023. El fraude documental y la alteración de documentos oficiales del sistema educativo se tipifican como una Falta Muy Grave."
    },
    {
        id: 162,
        categoria: "Función Pública",
        pregunta: "Según la Ley 41-08, ¿cuál de las siguientes es una falta de tercer grado que conlleva la destitución del cargo?",
        opciones: [
            "Incumplimiento del horario de trabajo por primera vez.",
            "La comisión de actos de acoso sexual en el ámbito laboral.",
            "No usar el uniforme de la institución.",
            "Tomar café fuera del tiempo de descanso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 de Función Pública. El acoso sexual es una falta gravísima que implica la separación inmediata del servicio público y procesos legales."
    },
    {
        id: 163,
        categoria: "Evaluación de Aprendizajes",
        pregunta: "La Ordenanza 04-2023 establece que en el Nivel Primario, los resultados de la evaluación se expresan de manera:",
        opciones: [
            "Numérica exclusivamente (0-100).",
            "Literal y descriptiva mediante niveles de desempeño e indicadores de logro.",
            "Por colores (Rojo, Amarillo y Verde).",
            "Solo mediante el promedio general al final del año."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Se prioriza la descripción cualitativa del avance del estudiante sobre la simple asignación de un número en los primeros niveles."
    },
    {
        id: 164,
        categoria: "Educación Inclusiva",
        pregunta: "De acuerdo con la Ordenanza 05-2024, el término 'Población con Necesidades Específicas de Apoyo Educativo (NEAE)' incluye a:",
        opciones: [
            "Solo estudiantes con discapacidad física.",
            "Estudiantes con discapacidad, trastornos del aprendizaje, altas capacidades intelectuales y condiciones de vulnerabilidad.",
            "Únicamente estudiantes que no hablan español.",
            "Estudiantes que han repetido más de dos veces el mismo grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El concepto de NEAE es amplio y busca proteger a cualquier estudiante que requiera apoyos distintos a los habituales."
    },
    {
        id: 165,
        categoria: "Participación Comunitaria",
        pregunta: "La Ordenanza 03-2025 establece que los fondos que recibe la Junta de Centro deben ser ejecutados de acuerdo con:",
        opciones: [
            "El criterio personal del Director.",
            "El Proyecto Educativo de Centro (PEC) y el Plan Operativo Anual (POA).",
            "Las peticiones directas de los vecinos de la comunidad.",
            "Las órdenes del sindicato de maestros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. La transparencia financiera obliga a que cada peso gastado esté vinculado a las metas pedagógicas planificadas."
    },
    {
        id: 166,
        categoria: "Ética Profesional",
        pregunta: "Un docente castiga a un grupo de estudiantes dejándolos sin recreo o sin almuerzo escolar. Según el Código de Ética (22-2023), esta medida es:",
        opciones: [
            "Una técnica de disciplina efectiva.",
            "Una falta ética, ya que no se puede privar a los estudiantes de sus derechos básicos como la alimentación o el descanso.",
            "Permitida si el curso está muy indisciplinado.",
            "Solo permitida si el director firma una autorización."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Manuales de Convivencia. Las sanciones deben ser pedagógicas y nunca vulnerar derechos fundamentales del menor."
    },
    {
        id: 167,
        categoria: "Legislación Educativa",
        pregunta: "La Ley 66-97 indica que la educación es un servicio público que tiene como fin:",
        opciones: [
            "El enriquecimiento de los dueños de colegios privados.",
            "El desarrollo de la conciencia nacional y el respeto a los símbolos patrios.",
            "La formación de atletas de alto rendimiento solamente.",
            "Que todos los ciudadanos piensen de la misma manera."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Uno de los fines de la educación dominicana es el fortalecimiento de la identidad y los valores patrios."
    },
    {
        id: 168,
        categoria: "Transparencia",
        pregunta: "Según la Ley 200-04, ¿quién es el responsable final de garantizar el acceso a la información en una institución pública?",
        opciones: [
            "El encargado de seguridad.",
            "La máxima autoridad ejecutiva de la institución (en este caso, el Director).",
            "El Ministerio de Hacienda.",
            "La secretaria de recepción."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. La responsabilidad legal recae sobre el titular de la institución, quien debe asegurar que el Oficial de Acceso a la Información cumpla sus funciones."
    },
    {
        id: 169,
        categoria: "Código de Ética",
        pregunta: "La Orden Departamental 22-2023 prohíbe al personal docente y administrativo tener relaciones sentimentales con estudiantes. Si esto ocurre, la sanción es:",
        opciones: [
            "Un traslado a otro centro educativo.",
            "Una suspensión de 15 días.",
            "La destitución inmediata y puesta a disposición de la justicia.",
            "Un llamado de atención escrito."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 136-03. Es una violación gravísima a la integridad del menor y a la ética profesional, con implicaciones penales."
    },
    {
        id: 170,
        categoria: "Evaluación y Promoción",
        pregunta: "En el Nivel Secundario, la Ordenanza 04-2023 establece que el estudiante que repruebe hasta dos asignaturas debe:",
        opciones: [
            "Repetir el año completo automáticamente.",
            "Ir a pruebas completivas en las fechas establecidas.",
            "Ser promovido y recuperar las asignaturas el año siguiente.",
            "Tomar clases de verano pagadas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Se mantiene el sistema de pruebas completivas para aquellos que no alcanzaron el mínimo de 70 puntos durante el año."
    },
    {
        id: 171,
        categoria: "Convivencia Armoniosa",
        pregunta: "El 'Acoso Escolar' o Bullying, según la Ordenanza 05-2023, debe ser manejado mediante:",
        opciones: [
            "La expulsión definitiva de ambos estudiantes.",
            "Un protocolo de mediación, apoyo psicológico y medidas restaurativas.",
            "Ignorar el conflicto si ocurre fuera del aula.",
            "Dejar que los estudiantes resuelvan sus problemas solos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. La normativa busca la solución pacífica de conflictos y la reeducación de los involucrados."
    },
    {
        id: 172,
        categoria: "Derechos Humanos",
        pregunta: "La Declaración Universal de Derechos Humanos (Art. 26) establece que la instrucción técnica y profesional habrá de ser:",
        opciones: [
            "Generalizada y accesible a todos en función de los méritos.",
            "Limitada a una élite de la sociedad.",
            "Solo para quienes puedan pagarla.",
            "Obligatoria para todos los ciudadanos hasta los 30 años."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Declaración Universal de DD.HH. Establece que mientras la básica es obligatoria, la técnica/superior debe ser accesible por mérito."
    },
    {
        id: 173,
        categoria: "Alfabetización Inicial",
        pregunta: "La Política Nacional de Alfabetización Inicial (01-2023) enfatiza que los docentes deben utilizar:",
        opciones: [
            "Libros de texto de hace 20 años.",
            "Diversas estrategias y recursos que respeten los ritmos de aprendizaje de cada niño.",
            "Solo el método de la copia del pizarrón.",
            "Una sola metodología estándar para todo el país."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La flexibilidad metodológica es clave para lograr que ningún niño se quede atrás en la alfabetización."
    },
    {
        id: 174,
        categoria: "Discapacidad",
        pregunta: "Según la Ley 5-13, ¿qué porcentaje de vacantes en el sector público debe ser reservado para personas con discapacidad?",
        opciones: [
            "No menos del 2%.",
            "No menos del 5%.",
            "No menos del 10%.",
            "El porcentaje es opcional según la institución."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13 sobre Discapacidad. Esta ley fomenta la inclusión laboral en las instituciones del Estado."
    },
    {
        id: 175,
        categoria: "Función Pública",
        pregunta: "Un servidor público tiene derecho a una licencia por fallecimiento de un pariente cercano (padres, hijos, cónyuge) de:",
        opciones: [
            "1 día.",
            "3 días laborables.",
            "5 días laborables.",
            "Una semana completa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. Es un derecho de licencia con goce de sueldo ante situaciones de duelo familiar."
    },
    {
        id: 176,
        categoria: "Participación Comunitaria",
        pregunta: "Bajo la Ordenanza 03-2025, el Consejo de Curso es un organismo de participación formado por:",
        opciones: [
            "Solo los padres del curso.",
            "Los estudiantes del curso y su docente guía.",
            "El director y los maestros del grado.",
            "Los vecinos más cercanos a la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. El Consejo de Curso es el espacio donde los estudiantes ejercen su derecho a la participación y democracia escolar."
    },
    {
        id: 177,
        categoria: "Ordenanza 05-2024",
        pregunta: "El enfoque de 'Educación Inclusiva' según la Ordenanza 05-2024 implica que:",
        opciones: [
            "El alumno debe cambiar para encajar en la escuela.",
            "La escuela debe transformarse para responder a la diversidad de todos los alumnos.",
            "Solo se aceptan niños con discapacidad si hay cupo.",
            "Los niños con NEAE deben estar en un aula aparte todo el día."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Se basa en el modelo social de la discapacidad, donde el entorno es el que debe adaptarse."
    },
    {
        id: 178,
        categoria: "Constitución Dominicana",
        pregunta: "El Artículo 63 establece que la inversión del Estado en educación, ciencia y tecnología debe ser:",
        opciones: [
            "Reducida en tiempos de crisis económica.",
            "Creciente y sostenida, en correspondencia con los niveles de desempeño macroeconómico.",
            "Fija sin importar el crecimiento del país.",
            "Dependiente de préstamos internacionales solamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana. Protege la inversión educativa como un pilar estratégico del Estado."
    },
    {
        id: 179,
        categoria: "Evaluación Técnica",
        pregunta: "Según la Ordenanza 04-2023, los indicadores de logro son:",
        opciones: [
            "Las tareas que el alumno hace en casa.",
            "Señales o evidencias que permiten observar el nivel de dominio de las competencias.",
            "El número de páginas que tiene el libro de texto.",
            "Las asistencias del estudiante al centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Son los referentes que usa el docente para evaluar de manera objetiva el progreso del alumno."
    },
    {
        id: 180,
        categoria: "Convivencia Escolar",
        pregunta: "Un docente que utiliza el castigo físico como método de corrección está violando:",
        opciones: [
            "La Ley 136-03 y la Ordenanza 05-2023.",
            "Solo las reglas internas de su centro.",
            "Únicamente el contrato con el Ministerio.",
            "Ninguna ley, si el padre le dio permiso."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 136-03 y Ordenanza 05-2023. El maltrato físico está prohibido por ley y es causa de sanciones graves o penales."
    },
    
    {
        id: 181,
        categoria: "Ética Profesional",
        pregunta: "Un docente publica en sus redes sociales personales críticas ofensivas hacia la dirección del centro y sus colegas. Según la Orden Departamental 22-2023, esto se considera:",
        opciones: [
            "Uso legítimo de la libertad de expresión.",
            "Una violación al Código de Ética que exige respeto y decoro hacia los miembros de la comunidad educativa.",
            "Una falta leve que no tiene consecuencias.",
            "Permitido si las críticas son ciertas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El personal debe mantener una conducta pública y digital que no lesione la imagen del sistema educativo ni la integridad de sus compañeros."
    },
    {
        id: 122,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 establece que la 'Evaluación Psicopedagógica' debe ser utilizada para:",
        opciones: [
            "Clasificar a los estudiantes en 'aptos' y 'no aptos'.",
            "Identificar las capacidades, barreras y apoyos específicos que requiere un estudiante con NEAE.",
            "Justificar la expulsión de un estudiante conflictivo.",
            "Exonerar al estudiante de cursar las materias de matemáticas y lengua."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Es una herramienta diagnóstica para diseñar los ajustes y apoyos necesarios, nunca para segregar."
    },
    {
        id: 183,
        categoria: "Participación Comunitaria",
        pregunta: "Según la Ordenanza 03-2025, ¿qué organismo representa a los estudiantes en el manejo de los conflictos y la mejora del centro?",
        opciones: [
            "El Consejo de Estudiantes.",
            "El Comité de Disciplina de los Padres.",
            "La Junta Municipal.",
            "El sindicato de maestros."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 03-2025. El Consejo de Estudiantes es el órgano de representación democrática del alumnado en la gestión escolar."
    },
    {
        id: 184,
        categoria: "Legislación Educativa",
        pregunta: "La Ley 66-97 define que la 'Educación No Formal' es aquella que:",
        opciones: [
            "Se imparte en las universidades.",
            "Tiene por objeto ofrecer conocimientos y capacitación sin sujeción a los grados del sistema formal.",
            "No requiere ningún tipo de evaluación.",
            "Es solo para personas que no terminaron la primaria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Es un subsistema flexible destinado a la capacitación técnica y social de los ciudadanos."
    },
    {
        id: 185,
        categoria: "Función Pública",
        pregunta: "Bajo la Ley 41-08, si un servidor público considera que una orden de un superior es manifiestamente ilegal, debe:",
        opciones: [
            "Cumplirla sin cuestionar.",
            "Objetarla por escrito ante el superior que la emitió o la autoridad correspondiente.",
            "Renunciar inmediatamente.",
            "Hacer lo contrario a lo que se le pidió sin avisar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El servidor público tiene el deber de no cumplir órdenes que violen la ley, protegiendo la integridad de la administración pública."
    },
    {
        id: 186,
        categoria: "Evaluación de Aprendizajes",
        pregunta: "La Ordenanza 04-2023 introduce los 'Registros de Grado' actualizados. ¿Cuál es su utilidad principal?",
        opciones: [
            "Guardar las excusas médicas de los estudiantes.",
            "Consignar de forma sistemática el seguimiento de los indicadores de logro y el progreso de los estudiantes.",
            "Llevar el control de los uniformes entregados.",
            "Anotar los nombres de los padres que no asisten a reuniones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El registro es el documento oficial donde se evidencia la evaluación procesual y el desarrollo de competencias."
    },
    {
        id: 187,
        categoria: "Convivencia Escolar",
        pregunta: "Un estudiante es víctima de ciberacoso por parte de un compañero fuera del horario escolar. ¿Qué establece la Ordenanza 05-2023 sobre la intervención del centro?",
        opciones: [
            "El centro no interviene porque ocurrió fuera de la escuela.",
            "El centro debe intervenir si el acoso afecta la convivencia o el clima escolar y el bienestar del estudiante.",
            "Es un problema exclusivo de la policía nacional.",
            "Se debe expulsar a ambos para evitar problemas en el centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. Las normas de convivencia extienden su protección a situaciones externas que repercutan en el entorno educativo y emocional del alumno."
    },
    {
        id: 188,
        categoria: "Estrategia Nacional",
        pregunta: "La Ley 1-12 (END) propone que la educación dominicana debe fomentar:",
        opciones: [
            "Una cultura de ahorro y emprendimiento.",
            "El pensamiento crítico, la innovación y el respeto a la diversidad.",
            "La dependencia de los subsidios estatales.",
            "El estudio exclusivo de carreras tradicionales como medicina y derecho."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. Son pilares para transformar la sociedad dominicana hacia una economía del conocimiento."
    },
    {
        id: 189,
        categoria: "Derecho a la Información",
        pregunta: "Según la Ley 200-04, la solicitud de información puede ser rechazada si:",
        opciones: [
            "El director está muy ocupado.",
            "La información solicitada afecta la seguridad nacional o la privacidad de datos personales de menores.",
            "El ciudadano no tiene título universitario.",
            "La información es de hace más de dos años."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Existen excepciones legales para proteger derechos superiores como la seguridad del Estado o la intimidad de las personas."
    },
    {
        id: 190,
        categoria: "Legislación Escolar",
        pregunta: "La Ordenanza 05-2023 clasifica como 'Falta Grave' el incumplimiento de:",
        opciones: [
            "Llegar 5 minutos tarde una vez al mes.",
            "El uso reiterado de celulares o dispositivos electrónicos para fines ajenos al aprendizaje en el aula.",
            "Olvidar un libro en la casa.",
            "Pedir permiso para ir al baño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. El uso disruptivo de la tecnología que afecta el proceso de enseñanza es una falta grave sujeta a medidas correctivas."
    },
    {
        id: 191,
        categoria: "Inclusión y Apoyo",
        pregunta: "Según la Ordenanza 04-2018, los 'Servicios de Apoyo a la Educación Inclusiva' deben estar conformados por:",
        opciones: [
            "Solo personal de seguridad.",
            "Orientadores, psicólogos y docentes de apoyo pedagógico.",
            "Miembros de la comunidad que sepan de carpintería.",
            "Médicos especialistas externos únicamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2018. Define el equipo multidisciplinario necesario para garantizar la atención a la diversidad."
    },
    {
        id: 192,
        categoria: "Alfabetización",
        pregunta: "La Ordenanza 01-2023 establece que la alfabetización es una responsabilidad de:",
        opciones: [
            "Solo el maestro de lengua española.",
            "Toda la comunidad educativa y el sistema en su conjunto.",
            "La familia de forma exclusiva en el hogar.",
            "Las instituciones de educación superior solamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Se define como un compromiso sistémico para garantizar el éxito escolar futuro."
    },
    {
        id: 193,
        categoria: "Código de Ética",
        pregunta: "Bajo la Orden Departamental 22-2023, el personal del centro debe evitar 'Relaciones de Intimidad' con:",
        opciones: [
            "Estudiantes, ex-estudiantes menores de edad y padres de familia si afecta su imparcialidad.",
            "Solo estudiantes de su propia aula.",
            "Sus propios hijos que estudian en el centro.",
            "Nadie, la vida privada no está regulada."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Orden Departamental 22-2023. Establece perímetros de seguridad ética para proteger a los menores y la integridad del servicio educativo."
    },
    {
        id: 194,
        categoria: "Sistema de Evaluación",
        pregunta: "En el Nivel Secundario (Ordenanza 04-2023), ¿qué ocurre si un estudiante reprueba una asignatura en las pruebas extraordinarias?",
        opciones: [
            "Debe repetir el grado completo.",
            "Tiene derecho a una tercera oportunidad inmediata.",
            "Debe cursarla de nuevo en la modalidad de tutoría o según disponga la norma de permanencia.",
            "Se le regalan los puntos para evitar el abandono escolar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. Regula la trayectoria del estudiante asegurando que los aprendizajes no logrados sean completados."
    },
    {
        id: 195,
        categoria: "Participación Comunitaria",
        pregunta: "La Ordenanza 03-2025 prohíbe explícitamente que los organismos de participación (como APMAE):",
        opciones: [
            "Realicen reuniones en el centro.",
            "Participen en actividades partidistas o de proselitismo político dentro del centro educativo.",
            "Ayuden a pintar la escuela.",
            "Sugieran mejoras pedagógicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Los organismos de participación deben ser neutrales y enfocarse únicamente en el bienestar educativo."
    },
    {
        id: 196,
        categoria: "Ordenanza 05-2024",
        pregunta: "El principio de 'Equidad' en la educación inclusiva significa:",
        opciones: [
            "Darle a todos exactamente lo mismo.",
            "Dar a cada uno lo que necesita para garantizar la igualdad de oportunidades y resultados.",
            "Que todos los estudiantes deben comprar el mismo uniforme.",
            "Que todos deben obtener la misma calificación sin importar su esfuerzo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La equidad reconoce la diversidad y aplica apoyos diferenciados para lograr la justicia educativa."
    },
    {
        id: 197,
        categoria: "Constitución Dominicana",
        pregunta: "Según el Art. 63, la educación superior es competencia del Estado, pero su gestión debe basarse en:",
        opciones: [
            "La autonomía universitaria y la libertad de cátedra.",
            "El control total del gobierno central sobre los programas.",
            "La prohibición de la investigación científica.",
            "Que solo se imparta en la capital del país."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Constitución Dominicana. Protege la libertad académica y la autogestión de las universidades."
    },
    {
        id: 198,
        categoria: "Legislación Educativa",
        pregunta: "La Ley 66-97 clasifica a los docentes como:",
        opciones: [
            "Trabajadores manuales.",
            "Profesionales de la educación encargados de impartir enseñanza y dirigir el proceso de aprendizaje.",
            "Empleados administrativos de apoyo.",
            "Contratistas temporales del Estado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Reconoce el estatus profesional del docente y sus responsabilidades directas en el aula."
    },
    {
        id: 199,
        categoria: "Manuales de Convivencia",
        pregunta: "Si un estudiante comete una falta muy grave, la medida educativa debe ser aplicada por:",
        opciones: [
            "El docente solo en su aula.",
            "El Equipo de Gestión y el Consejo Escolar de Centro, garantizando el derecho a la defensa.",
            "El presidente de la junta de vecinos.",
            "El psicólogo sin avisar a los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. Asegura el debido proceso y la participación de los órganos de gestión en las sanciones más delicadas."
    },
    {
        id: 200,
        categoria: "Evaluación Técnica",
        pregunta: "La Ordenanza 04-2023 establece que la 'Metaevaluación' es:",
        opciones: [
            "El examen final de todo el sistema educativo.",
            "La evaluación de los propios procesos e instrumentos de evaluación para mejorarlos.",
            "Una evaluación que se hace en el espacio exterior.",
            "La calificación que ponen los padres a los maestros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Es un proceso de reflexión sobre la práctica evaluativa para asegurar su calidad y objetividad."
    },


    {
        id: 201,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Según la Ordenanza 04-2023, ¿cuál es la escala oficial para registrar la valoración de los indicadores de logro en el Nivel Inicial?",
        opciones: [
            "0 a 100 puntos.",
            "Logrado (L), En Proceso (EP) y Todavía no Logrado (TNL).",
            "Excelente, Muy Bueno, Bueno e Insuficiente.",
            "Aprobado y Reprobado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El Nivel Inicial evalúa de forma cualitativa basándose en el progreso del niño respecto a los indicadores."
    },
    {
        id: 202,
        categoria: "Promoción Nivel Inicial",
        pregunta: "En el Nivel Inicial, si un niño no ha alcanzado la mayoría de los indicadores de logro al finalizar el año escolar, el protocolo establece que:",
        opciones: [
            "Debe repetir el grado para nivelarse.",
            "La promoción es automática; el niño avanza al grado siguiente según su edad cronológica.",
            "Se le debe realizar una prueba extraordinaria de conocimiento.",
            "Debe permanecer en el centro en horario extendido obligatoriamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La promoción en el Nivel Inicial es automática por edad, garantizando la permanencia en su grupo de pares."
    },
    {
        id: 203,
        categoria: "Rol de la Psicóloga - NEAE",
        pregunta: "Ante la sospecha de una Necesidad Específica de Apoyo Educativo (NEAE) en un niño de Pre-Primario, ¿cuál es la primera acción de la psicóloga según la Ordenanza 05-2024?",
        opciones: [
            "Referir inmediatamente a un neurólogo externo.",
            "Realizar una evaluación psicopedagógica inicial para identificar barreras y diseñar apoyos.",
            "Solicitar a los padres que cambien al niño a un centro de educación especial.",
            "Esperar a que el niño llegue a Primaria para intervenir."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La detección temprana y la evaluación psicopedagógica en el centro son el primer paso para la inclusión."
    },
    {
        id: 204,
        categoria: "Ley 136-03",
        pregunta: "Si un niño de Inicial llega al centro con hematomas sospechosos de maltrato físico, la Ley 136-03 obliga al personal a:",
        opciones: [
            "Interrogar al niño frente a sus padres.",
            "Notificar de inmediato a las autoridades competentes (CONANI o Fiscalía) bajo principio de confidencialidad.",
            "No intervenir para no perder la confianza de la familia.",
            "Aplicar una sanción administrativa al padre cuando vaya a recoger al niño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El personal educativo es garante de derechos y tiene el deber de denuncia ante sospecha de abuso."
    },
    {
        id: 205,
        categoria: "Alfabetización Inicial",
        pregunta: "La Ordenanza 01-2023 sobre Alfabetización Inicial en la Etapa Oportuna, destaca que el Nivel Inicial debe centrarse en:",
        opciones: [
            "Enseñar a escribir frases complejas y párrafos.",
            "El desarrollo de la conciencia fonológica y el contacto con el mundo escrito de forma lúdica.",
            "Evaluar con exámenes escritos mensuales.",
            "Prohibir el uso de imágenes para que solo vean letras."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Se busca crear las bases del lenguaje y la alfabetización funcional desde el juego."
    },
    {
        id: 206,
        categoria: "Ética Profesional",
        pregunta: "Según la Orden Departamental 22-2023, un comportamiento ético de la psicóloga hacia los padres de Nivel Inicial es:",
        opciones: [
            "Compartir los diagnósticos de los niños en el grupo de WhatsApp de padres.",
            "Mantener la confidencialidad de la información privada de las familias obtenida en entrevistas.",
            "Aceptar regalos costosos para priorizar la atención de un niño.",
            "Dar consejos legales sobre procesos de divorcio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Código de Ética. El secreto profesional y la imparcialidad son pilares del personal docente y administrativo."
    },
    {
        id: 207,
        categoria: "Ordenanza 05-2023",
        pregunta: "Un niño de 5 años presenta conductas disruptivas constantes (muerde o empuja). Según las Normas de Convivencia, la respuesta debe ser:",
        opciones: [
            "Suspenderlo por 3 días para que reflexione en casa.",
            "Aplicar medidas educativas acordes a su nivel de desarrollo, priorizando el diálogo y la orientación.",
            "Expulsarlo definitivamente del centro.",
            "Dejarlo solo en el patio como castigo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. En el Nivel Inicial las medidas son estrictamente formativas y proporcionales a la edad."
    },
    {
        id: 208,
        categoria: "Constitución Dominicana",
        pregunta: "El Artículo 63 de la Constitución establece que la educación es un derecho de toda persona. En el caso del Nivel Inicial, el Estado tiene la obligación de:",
        opciones: [
            "Cobrar una cuota mínima para mantenimiento.",
            "Garantizar su gratuidad y universalidad, especialmente en el último año (Pre-Primario).",
            "Solo permitir la inscripción de niños con excelente conducta.",
            "Dejar la educación inicial exclusivamente en manos del sector privado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana, Art. 63. El Estado debe garantizar la oferta pública gratuita para el Nivel Inicial."
    },
    {
        id: 209,
        categoria: "Gestión Escolar",
        pregunta: "Según la Ordenanza 03-2025, los organismos de participación de los padres en el Nivel Inicial buscan:",
        opciones: [
            "Decidir qué maestra debe ser contratada o despedida.",
            "Colaborar con el bienestar de los niños y fortalecer el vínculo escuela-familia.",
            "Administrar la nómina del centro educativo.",
            "Organizar rifas para beneficio personal de la directiva."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Los organismos como la APMAE son de apoyo y participación comunitaria, no de gestión administrativa directa."
    },
    {
        id: 210,
        categoria: "Desarrollo Infantil",
        pregunta: "Como psicóloga de Inicial, al observar el desarrollo motor, usted identifica que un niño no realiza pinza digital. Este indicador pertenece principalmente a la dimensión:",
        opciones: [
            "Cognitiva.",
            "Motricidad Fina.",
            "Socio-afectiva.",
            "Lingüística."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Diseño Curricular Nivel Inicial. La pinza digital es un hito clave de la motricidad fina evaluada en el registro."
    },
    {
        id: 211,
        categoria: "Ley 5-13 Discapacidad",
        pregunta: "La Ley 5-13 prohíbe a los centros educativos:",
        opciones: [
            "Pedir el acta de nacimiento.",
            "Negar la matriculación a un niño por su condición de discapacidad física o cognitiva.",
            "Realizar actos de bandera.",
            "Tener psicólogos en el centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13. La negativa de inscripción por discapacidad constituye un acto de discriminación sancionado por ley."
    },
    {
        id: 212,
        categoria: "Función Pública",
        pregunta: "Un psicólogo escolar del sistema público que falta tres días consecutivos al centro sin causa justificada incurre en:",
        opciones: [
            "Una falta leve con amonestación verbal.",
            "El abandono de cargo, según la Ley 41-08 de Función Pública.",
            "Un derecho adquirido por antigüedad.",
            "Nada, si luego repone las horas el sábado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El cumplimiento del horario es un deber sagrado del servidor público."
    },
    {
        id: 213,
        categoria: "Evaluación Diagnóstica",
        pregunta: "¿En qué momento del año escolar se debe aplicar la evaluación diagnóstica en el Nivel Inicial?",
        opciones: [
            "Solo al final del año.",
            "Al inicio del año escolar para conocer los saberes previos y el estado de desarrollo.",
            "Únicamente cuando el director lo solicite.",
            "Después de cada recreo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La diagnóstica es el punto de partida para la planificación docente y la intervención psicopedagógica."
    },
    {
        id: 214,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 define los 'Ajustes Curriculares' como:",
        opciones: [
            "Hacer un examen más fácil para que el niño no llore.",
            "Modificaciones en los elementos del currículo para dar respuesta a las necesidades de aprendizaje del estudiante.",
            "Eliminar las materias que al niño no le gustan.",
            "Cambiar al niño de aula cada mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes garantizan que el estudiante con NEAE pueda acceder a los mismos aprendizajes que sus compañeros."
    },
    {
        id: 215,
        categoria: "Derecho a la Información",
        pregunta: "Si un padre solicita ver el Registro de Grado para conocer el progreso de su hijo, el centro basado en la Ley 200-04 debe:",
        opciones: [
            "Negarlo porque es un documento secreto del maestro.",
            "Facilitar el acceso a la información que concierne estrictamente a su hijo.",
            "Cobrarle una tarifa por la consulta.",
            "Decirle que espere al final del año."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Los padres tienen derecho a acceder a la información académica de sus tutelados."
    },
    {
        id: 216,
        categoria: "Manual de Convivencia",
        pregunta: "En el Nivel Inicial, la estrategia principal para resolver conflictos entre pares es:",
        opciones: [
            "El aislamiento en la dirección.",
            "La mediación del adulto y el aprendizaje de la empatía.",
            "La anotación en el expediente para futura expulsión.",
            "Ignorar el conflicto para que aprendan solos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual de Convivencia y Ordenanza 05-2023. En Inicial los conflictos son oportunidades de aprendizaje socioemocional."
    },
    {
        id: 217,
        categoria: "Código de Ética",
        pregunta: "La Orden Departamental 22-2023 prohíbe al personal educativo el uso de celulares para:",
        opciones: [
            "Llamar a una ambulancia en una emergencia.",
            "Grabar o fotografiar a los estudiantes menores de edad sin autorización oficial y fines pedagógicos.",
            "Usar la calculadora en clases de matemáticas.",
            "Revisar el calendario escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Protege la imagen y privacidad de los niños, niñas y adolescentes."
    },
    {
        id: 218,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "La Ley 1-12 (END) plantea como objetivo para la educación:",
        opciones: [
            "Que todos los estudiantes sean militares.",
            "Lograr una educación de calidad que forme ciudadanos críticos y capaces de integrarse a la sociedad del conocimiento.",
            "Reducir los días de clase para ahorrar presupuesto.",
            "Que los padres den las clases en lugar de los maestros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. Busca la transformación social a través de un sistema educativo moderno y eficiente."
    },
    {
        id: 219,
        categoria: "Alfabetización Inicial",
        pregunta: "En la Política Nacional de Alfabetización (01-2023), el psicólogo apoya principalmente en:",
        opciones: [
            "Comprar los libros de texto.",
            "Identificar barreras cognitivas o emocionales que dificulten el proceso de adquisición de la lectura y escritura.",
            "Limpiar la biblioteca del centro.",
            "Dar clases de lengua española todos los días."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El psicólogo es parte clave del equipo que asegura el éxito de la alfabetización oportuna."
    },
    {
        id: 220,
        categoria: "Relaciones Internacionales",
        pregunta: "El Artículo 26 de la Declaración Universal de los Derechos Humanos, citado en la normativa dominicana, establece que:",
        opciones: [
            "La educación es solo para los que pueden pagarla.",
            "Toda persona tiene derecho a la educación, la cual debe ser gratuita al menos en la instrucción elemental.",
            "Los niños no tienen derecho a opinar.",
            "La educación debe ser solo técnica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Art. 26 Derechos Humanos. Es el fundamento internacional del derecho a la educación que asume la República Dominicana."
    },



    {
        id: 221,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "En el Nivel Inicial, ¿cómo se concibe el error del niño durante el proceso de aprendizaje según la Ordenanza 04-2023?",
        opciones: [
            "Como una falta de capacidad cognitiva.",
            "Como una oportunidad para que el docente y el psicólogo reorienten la enseñanza y el apoyo.",
            "Como un motivo para bajar la calificación en el Registro de Grado.",
            "Como algo que debe evitarse mediante el castigo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación en Inicial es procesual y el error es parte natural del desarrollo que guía la intervención."
    },
    {
        id: 222,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 establece que el 'Diseño Universal para el Aprendizaje' (DUA) debe ser aplicado para:",
        opciones: [
            "Solo estudiantes con discapacidad visual.",
            "Todos los estudiantes, eliminando barreras desde la planificación inicial.",
            "Estudiantes que tengan problemas de conducta únicamente.",
            "Los niños que no pagan la mensualidad en colegios privados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El DUA es un enfoque inclusivo para que todos los niños aprendan juntos según sus ritmos."
    },
    {
        id: 223,
        categoria: "Código de Ética",
        pregunta: "Si un familiar de un estudiante le ofrece dinero a la psicóloga para 'limpiar' un expediente conductual, según la Orden Departamental 22-2023, esto se considera:",
        opciones: [
            "Una muestra de gratitud aceptable.",
            "Un acto de soborno y una falta gravísima al Código de Ética.",
            "Un ingreso extra por servicios profesionales.",
            "Un préstamo que debe devolverse al mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La integridad y la honestidad son irrenunciables para el personal del MINERD."
    },
    {
        id: 224,
        categoria: "Desarrollo Socioemocional",
        pregunta: "En el Nivel Inicial, el proceso de 'Socialización' es evaluado principalmente para observar:",
        opciones: [
            "Si el niño sabe leer el abecedario.",
            "La capacidad de relacionarse con otros, respetar turnos y expresar emociones de forma adecuada.",
            "Si el niño sabe correr 100 metros.",
            "La rapidez con la que el niño termina la merienda."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Diseño Curricular Nivel Inicial. El desarrollo socio-afectivo es un eje central de la evaluación cualitativa."
    },
    {
        id: 225,
        categoria: "Ley 136-03",
        pregunta: "El derecho a la 'Integridad Personal' del niño en la Ley 136-03 implica que ningún personal escolar puede:",
        opciones: [
            "Ponerle tareas en casa.",
            "Someterlo a castigos físicos, humillaciones o tratos degradantes.",
            "Pedirle que guarde silencio en la biblioteca.",
            "Evaluar su rendimiento académico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03, Art. 12. Se prohíbe cualquier forma de violencia como método de disciplina."
    },
    {
        id: 226,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Qué instrumento es fundamental para que la psicóloga de Inicial registre las observaciones de comportamientos atípicos o sobresalientes?",
        opciones: [
            "El examen trimestral.",
            "El anecdotario o diario de observación.",
            "La factura de inscripción.",
            "El carnet de vacunación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Las técnicas de observación y registro son las más adecuadas para el Nivel Inicial."
    },
    {
        id: 227,
        categoria: "Gestión Administrativa",
        pregunta: "Según la Ley 41-08, la 'Evaluación del Desempeño' del personal docente y administrativo tiene como fin:",
        opciones: [
            "Identificar a quién despedir por razones políticas.",
            "Promover la mejora continua, identificar necesidades de capacitación y otorgar incentivos.",
            "Humillar al personal frente a los padres.",
            "Eliminar las vacaciones de verano."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 de Función Pública. La evaluación es una herramienta de desarrollo profesional."
    },
    {
        id: 228,
        categoria: "Derecho a la Educación",
        pregunta: "La Ordenanza 05-2023 establece que la educación debe ser 'Asequible'. Esto significa que:",
        opciones: [
            "Solo los niños inteligentes pueden entrar.",
            "El Estado debe garantizar cupos y recursos suficientes para toda la población infantil.",
            "Los padres deben pagar el transporte escolar.",
            "Las escuelas solo deben estar en las ciudades grandes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023 y Art. 63 Constitución. El Estado tiene la obligación de crear la oferta educativa."
    },
    {
        id: 229,
        categoria: "Atención a la Diversidad",
        pregunta: "Cuando un niño de Inicial presenta una discapacidad severa que requiere apoyos que el centro ordinario no puede ofrecer, la psicóloga debe:",
        opciones: [
            "Expulsar al niño.",
            "Coordinar con el CAD (Centro de Atención a la Diversidad) para una evaluación y posible escolarización en un centro de Educación Especial.",
            "Decirle a la maestra que lo ignore.",
            "Dejar que el niño se quede en su casa sin estudiar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El tránsito a la educación especial es una medida excepcional basada en el bienestar del niño."
    },
    {
        id: 230,
        categoria: "Alfabetización Inicial",
        pregunta: "En el marco de la Ordenanza 01-2023, ¿cuál es el papel de la familia en la alfabetización?",
        opciones: [
            "Enseñar a leer al niño antes de que entre a la escuela.",
            "Fomentar el hábito de la lectura en casa y participar en las actividades propuestas por el centro.",
            "Comprar libros de caligrafía obligatoriamente.",
            "No involucrarse para no confundir al niño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La corresponsabilidad familia-escuela es clave para el éxito educativo."
    },
    {
        id: 231,
        categoria: "Convivencia Escolar",
        pregunta: "Una 'Falta Grave' según las normas de convivencia en un contexto administrativo (personal adulto) sería:",
        opciones: [
            "Llegar 2 minutos tarde un día.",
            "Incumplir con el registro de las evaluaciones de los estudiantes de forma reiterada.",
            "Usar un lapicero azul en lugar de negro.",
            "Saludar cordialmente al portero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023 y Ley 41-08. El incumplimiento de los deberes técnicos es una falta que afecta el proceso educativo."
    },
    {
        id: 232,
        categoria: "Ética y Redes Sociales",
        pregunta: "La Orden Departamental 22-2023 prohíbe que el personal del centro mantenga con los estudiantes:",
        opciones: [
            "Conversaciones grupales sobre tareas.",
            "Relaciones de amistad íntima o comunicaciones privadas por redes sociales fuera de fines educativos.",
            "Contacto visual durante las clases.",
            "Reuniones con los padres presentes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Busca prevenir el acoso y mantener la distancia profesional adecuada."
    },
    {
        id: 233,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "Uno de los indicadores de éxito de la Ley 1-12 (END) para el 2030 en educación es:",
        opciones: [
            "Que el 100% de los niños terminen el nivel primario con competencias básicas de lecto-escritura y matemática.",
            "Que no existan escuelas públicas.",
            "Que los uniformes cambien de color cada año.",
            "Que todos los psicólogos sean directores."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 1-12 END 2030. El objetivo es la calidad educativa medida en aprendizajes concretos."
    },
    {
        id: 234,
        categoria: "Organismos de Participación",
        pregunta: "La Ordenanza 03-2025 define que la Junta de Centro es el organismo encargado de:",
        opciones: [
            "Solo limpiar el centro educativo.",
            "Gestionar los recursos económicos y velar por el mantenimiento del centro educativo.",
            "Dar clases de psicología.",
            "Elegir al Ministro de Educación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025 y Ley 66-97. La descentralización se ejecuta a través de las Juntas de Centro."
    },
    {
        id: 235,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Cuando un indicador de logro aparece como 'TNL' (Todavía No Logrado) al final de un periodo en Inicial, la psicóloga debe sugerir:",
        opciones: [
            "Repetición del grado.",
            "Estrategias de apoyo diferenciadas y seguimiento psicopedagógico para fortalecer esa área.",
            "Que el niño se retire del centro.",
            "No hacer nada, el niño aprenderá solo cuando crezca."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación diagnóstica y continua sirve para ajustar el apoyo, no para sancionar."
    },
    {
        id: 236,
        categoria: "Ley 200-04",
        pregunta: "Según la Ley de Libre Acceso a la Información Pública, las instituciones educativas deben publicar:",
        opciones: [
            "Las fotos de los niños llorando.",
            "El presupuesto recibido y la ejecución de los gastos (vía Junta de Centro).",
            "Las contraseñas de los correos de los maestros.",
            "La dirección de la casa de todos los empleados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. La transparencia financiera es obligatoria en la gestión pública."
    },
    {
        id: 237,
        categoria: "Constitución Dominicana",
        pregunta: "El derecho a la libertad de conciencia y de cultos en las escuelas (Art. 45 de la Constitución) significa que:",
        opciones: [
            "La escuela puede obligar a todos a ser de una sola religión.",
            "Se debe respetar la creencia religiosa de los niños y sus familias sin discriminación.",
            "No se permite hablar de Dios en ninguna escuela.",
            "Solo los niños católicos pueden inscribirse."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana y Ley 66-97. El sistema educativo respeta la libertad religiosa."
    },
    {
        id: 238,
        categoria: "Atención Primaria en Salud Escolar",
        pregunta: "Si un niño de Inicial presenta una dificultad visual evidente (se acerca mucho a los libros), el protocolo de la psicóloga es:",
        opciones: [
            "Operar al niño en el centro.",
            "Informar a la familia y coordinar la referencia a un servicio de salud oftalmológica para diagnóstico.",
            "Comprarle unos lentes en el mercado.",
            "Sentarlo en la última fila."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 (Inclusión). La detección de barreras físicas/sensoriales es parte del rol de apoyo educativo."
    },
    {
        id: 239,
        categoria: "Ley 5-13 Discapacidad",
        pregunta: "El principio de 'Igualdad de Oportunidades' en la Ley 5-13 significa que los niños con discapacidad:",
        opciones: [
            "Tienen derecho a los mismos servicios educativos de calidad que los demás, con los apoyos necesarios.",
            "Deben tener una escuela diferente lejos de los demás niños.",
            "No deben ser evaluados.",
            "Tienen permiso para llegar tarde todos los días."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 5-13. Busca la inclusión plena en igualdad de condiciones."
    },
    {
        id: 240,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "En el Registro de Grado del Nivel Inicial, la sección de 'Observaciones' sirve para:",
        opciones: [
            "Escribir chismes sobre la familia.",
            "Anotar datos relevantes sobre el contexto, salud o ritmos de aprendizaje que expliquen el progreso del niño.",
            "Dibujar caricaturas cuando el maestro está aburrido.",
            "Solo poner la fecha de cumpleaños."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Es una herramienta cualitativa vital para la continuidad del proceso educativo."
    },

    {
        id: 241,
        categoria: "Inclusión Educativa",
        pregunta: "Según la Ordenanza 05-2024, ¿cuál es el documento donde se registran formalmente los ajustes curriculares individuales para un niño con NEAE en Inicial?",
        opciones: [
            "En el cuaderno de tareas del niño.",
            "En el Plan de Apoyo a la Diversidad (PAD) o expediente psicopedagógico.",
            "En una hoja suelta pegada en la puerta del aula.",
            "No se registran, se dicen de forma verbal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes deben estar documentados para garantizar el seguimiento técnico y pedagógico."
    },
    {
        id: 242,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "La evaluación en el Nivel Inicial se caracteriza por ser 'Globalizadora' porque:",
        opciones: [
            "Evalúa a todos los niños del mundo por igual.",
            "Considera todas las dimensiones del desarrollo del niño (cognitiva, emocional, física, social) de forma integrada.",
            "Solo evalúa si el niño sabe usar el globo terráqueo.",
            "Se realiza una sola vez al año de forma general."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. En Inicial no se dividen las competencias como materias aisladas, sino como un desarrollo integral."
    },
    {
        id: 243,
        categoria: "Ley 136-03",
        pregunta: "El principio de 'Corresponsabilidad' en la Ley 136-03 establece que la protección de los niños es obligación de:",
        opciones: [
            "Solo la Policía Nacional.",
            "La familia, la escuela, la comunidad y el Estado.",
            "Solo de los padres biológicos.",
            "Exclusivamente del psicólogo escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. Todos los actores de la sociedad deben velar por el cumplimiento de los derechos del menor."
    },
    {
        id: 244,
        categoria: "Convivencia Escolar",
        pregunta: "Si un docente de Inicial le grita palabras despectivas a un estudiante frente al curso, según la Ordenanza 05-2023 esto es una falta:",
        opciones: [
            "Leve, se resuelve con una disculpa.",
            "Grave o Muy Grave, dependiendo del daño psicológico y la reincidencia.",
            "Inexistente, ya que el docente tiene derecho a disciplinar.",
            "Administrativa que solo compete al director."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023 y Orden Departamental 22-2023. El maltrato verbal está estrictamente prohibido y sancionado."
    },
    {
        id: 245,
        categoria: "Desarrollo Evolutivo",
        pregunta: "Como psicóloga de Inicial, usted sabe que el juego simbólico (jugar a la casita, al doctor) es un indicador de:",
        opciones: [
            "Falta de atención en clase.",
            "Desarrollo cognitivo y capacidad de representación de la realidad.",
            "Que el niño necesita más horas de caligrafía.",
            "Pereza por parte de la maestra."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Diseño Curricular Nivel Inicial. El juego simbólico es vital para el desarrollo de funciones superiores en la etapa preoperacional."
    },
    {
        id: 246,
        categoria: "Ley 41-08 Función Pública",
        pregunta: "Un derecho de la psicóloga como servidora pública de carrera, según la Ley 41-08, es:",
        opciones: [
            "Elegir sus propios horarios de entrada y salida.",
            "Recibir capacitación continua y participar en los sistemas de incentivos por desempeño.",
            "Nombrar a sus familiares en el mismo centro.",
            "Negarse a trabajar con niños que no le caigan bien."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. La ley protege el derecho al desarrollo profesional y la estabilidad basada en el mérito."
    },
    {
        id: 247,
        categoria: "Código de Ética",
        pregunta: "La Orden Departamental 22-2023 indica que la relación entre el personal del centro y los estudiantes debe basarse en:",
        opciones: [
            "La familiaridad extrema y el afecto físico constante.",
            "El respeto mutuo, la distancia profesional y la protección de la integridad del menor.",
            "La autoridad absoluta del docente sin derecho a réplica.",
            "La indiferencia para evitar problemas legales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Define límites claros para prevenir situaciones de riesgo o abuso de poder."
    },
    {
        id: 248,
        categoria: "Evaluación Diagnóstica",
        pregunta: "Durante la evaluación diagnóstica en Inicial, si se detecta un retraso significativo en el lenguaje, la psicóloga debe:",
        opciones: [
            "Recomendar que el niño no hable en clase.",
            "Realizar una entrevista con los padres y sugerir una evaluación especializada (terapia de habla).",
            "Decirle a la maestra que el niño es 'lento'.",
            "No intervenir hasta que el niño cumpla 7 años."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La intervención temprana es la clave para reducir las barreras de aprendizaje futuras."
    },
    {
        id: 249,
        categoria: "Ley 66-97",
        pregunta: "La Ley General de Educación 66-97 establece que el patrimonio del centro educativo es:",
        opciones: [
            "Propiedad privada del director.",
            "Bien público y debe ser cuidado por toda la comunidad educativa.",
            "Propiedad de la APMAE únicamente.",
            "Responsabilidad solo del sereno o portero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Los recursos y la planta física son propiedad del Estado para el servicio de la comunidad."
    },
    {
        id: 250,
        categoria: "Inclusión Educativa",
        pregunta: "Según la Ordenanza 05-2024, ¿cuál es el rol del equipo de gestión frente a un estudiante con discapacidad?",
        opciones: [
            "Buscar la forma de que se traslade a otro centro rápidamente.",
            "Garantizar la accesibilidad física y los apoyos pedagógicos necesarios en el centro.",
            "Ignorar la condición para que el niño se sienta 'normal'.",
            "Cobrarle una cuota extra por atención personalizada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El centro tiene la obligación de adaptarse al estudiante, no al revés."
    },
    {
        id: 251,
        categoria: "Alfabetización Inicial",
        pregunta: "La 'Etapa Oportuna' descrita en la Ordenanza 01-2023 se refiere a que el niño debe estar plenamente alfabetizado al finalizar:",
        opciones: [
            "El Nivel Inicial.",
            "El Tercer Grado de Primaria.",
            "El Sexto Grado de Primaria.",
            "El Bachillerato."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. La meta país es que a los 8 años (3ero primaria) todos los niños lean y escriban con fluidez."
    },
    {
        id: 252,
        categoria: "Gestión de Riesgos",
        pregunta: "En el Nivel Inicial, ante un simulacro de sismo, la psicóloga escolar apoya principalmente en:",
        opciones: [
            "Grabar el video para las redes sociales.",
            "La contención emocional de los niños para evitar crisis de pánico y asegurar una evacuación tranquila.",
            "Salir primero para dar el ejemplo.",
            "Quedarse en la oficina revisando expedientes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Manual de Gestión de Riesgos MINERD. El apoyo psicosocial es fundamental en situaciones de emergencia."
    },
    {
        id: 253,
        categoria: "Ordenanza 03-2025",
        pregunta: "La participación de la familia en la evaluación de los niños de Inicial se realiza mediante:",
        opciones: [
            "La entrega de informes de progreso y entrevistas periódicas de retroalimentación.",
            "Dejar que los padres pongan la nota en el Registro.",
            "No informar nada a los padres para no estresarlos.",
            "Publicar las notas en el mural de la entrada."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 04-2023 y 03-2025. La comunicación familia-escuela sobre el progreso es un derecho y un deber."
    },
    {
        id: 254,
        categoria: "Constitución Dominicana",
        pregunta: "El Artículo 63 de la Constitución establece que la familia es:",
        opciones: [
            "Un actor secundario en la educación.",
            "La primera responsable de la educación de sus hijos, con apoyo del Estado.",
            "Quien decide si el niño va o no a la escuela sin dar explicaciones.",
            "La encargada de comprar los uniformes al Ministerio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana. Define la prioridad de la familia en la formación de los menores."
    },
    {
        id: 255,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "En el Nivel Inicial, ¿se aplican exámenes de fin de año para determinar si el niño pasa de curso?",
        opciones: [
            "Sí, son obligatorios según la Ley 66-97.",
            "No, la evaluación es continua y la promoción es por edad.",
            "Solo si el niño tiene mala conducta.",
            "Solo en los colegios privados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Se prohíbe el uso de exámenes estandarizados de aprobación/reprobación en Inicial."
    },
    {
        id: 256,
        categoria: "Ley 200-04",
        pregunta: "Según la Ley de Libre Acceso a la Información, una respuesta de la institución ante una solicitud de información debe darse en un plazo máximo de:",
        opciones: [
            "24 horas.",
            "15 días hábiles (con posibilidad de prórroga en casos complejos).",
            "Un año.",
            "No hay plazo legal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Establece tiempos claros para garantizar la transparencia."
    },
    {
        id: 257,
        categoria: "Ética y Regalos",
        pregunta: "El Código de Ética del MINERD prohíbe que los psicólogos reciban beneficios de proveedores de servicios (ej. centros de terapia) por:",
        opciones: [
            "Referirles estudiantes del centro educativo.",
            "Saludarles en la calle.",
            "Asistir a conferencias gratuitas organizadas por ellos.",
            "Leer sus folletos informativos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Código de Ética y Orden Departamental 22-2023. El tráfico de influencias y el beneficio personal son faltas graves."
    },
    {
        id: 258,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "La Ley 1-12 busca que el sistema educativo dominicano fomente:",
        opciones: [
            "La memorización de datos históricos solamente.",
            "El pensamiento crítico, la creatividad y los valores éticos.",
            "La obediencia ciega a los superiores.",
            "La competencia agresiva entre estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. Son los pilares del ciudadano que requiere la Estrategia Nacional."
    },
    {
        id: 259,
        categoria: "Atención a la Diversidad",
        pregunta: "Un niño con Aptitudes Sobresalientes (Talento) en Inicial, según la Ordenanza 05-2024, requiere:",
        opciones: [
            "Que lo pasen a 5to de Primaria de inmediato.",
            "Actividades de enriquecimiento curricular que desafíen sus capacidades dentro de su grupo de edad.",
            "Que le pongan a limpiar el aula para que no se aburra.",
            "No necesita nada porque ya es inteligente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La alta capacidad también es una NEAE que requiere atención diferenciada."
    },
    {
        id: 260,
        categoria: "Rol del Psicólogo - Convivencia",
        pregunta: "En la resolución de un conflicto entre dos familias de Inicial, la postura de la psicóloga debe ser:",
        opciones: [
            "Apoyar a la familia que tenga más dinero.",
            "Imparcial, mediadora y siempre buscando el interés superior del niño.",
            "No involucrarse en absoluto.",
            "Decidir quién tiene la razón y castigar a la otra parte."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023 y Manual de Convivencia. La neutralidad y la mediación son funciones técnicas de la unidad de orientación."
    },

    {
        id: 261,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Cuando un niño de Inicial muestra un avance significativo en un indicador pero aún necesita apoyo intermitente, ¿qué valoración corresponde según la Ordenanza 04-2023?",
        opciones: [
            "Logrado (L).",
            "En Proceso (EP).",
            "Todavía No Logrado (TNL).",
            "75 puntos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. 'En Proceso' se usa cuando el niño muestra la conducta o habilidad con ayuda o de manera inconstante."
    },
    {
        id: 262,
        categoria: "Inclusión y NEAE",
        pregunta: "Usted recibe un niño con un diagnóstico de Autismo en Inicial. Según la Ordenanza 05-2024, la primera respuesta del centro debe ser:",
        opciones: [
            "Solicitar una sombra pagada por los padres de forma obligatoria.",
            "Aplicar el Diseño Universal para el Aprendizaje (DUA) y realizar los ajustes curriculares necesarios.",
            "Decir que el centro no está preparado y referir a otro lugar.",
            "Poner al niño en un aula aparte para no distraer a los demás."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La educación inclusiva obliga al centro a realizar ajustes razonables para garantizar el acceso al currículo."
    },
    {
        id: 263,
        categoria: "Protección Infantil",
        pregunta: "Un padre de familia se presenta al centro de Inicial en estado de embriaguez a retirar a su hijo. ¿Cuál es el protocolo correcto basándose en la Ley 136-03?",
        opciones: [
            "Entregar al niño para evitar conflictos con el padre.",
            "Retener al niño por su seguridad, contactar a otro tutor autorizado y, si es necesario, a las autoridades (CONANI/Policía).",
            "Llamar a la prensa para denunciar el hecho.",
            "Cobrarle una multa al padre antes de entregarle al niño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Protocolos de Cultura de Paz. El interés superior y la integridad física del niño son la prioridad absoluta."
    },
    {
        id: 264,
        categoria: "Función Pública",
        pregunta: "Según la Ley 41-08, ¿cuál de estos es un deber de la psicóloga escolar?",
        opciones: [
            "Realizar proselitismo político dentro del centro educativo.",
            "Denunciar ante sus superiores o autoridades competentes cualquier acto de corrupción que tenga conocimiento.",
            "Cobrar consultas privadas a los padres del mismo centro donde labora.",
            "Ausentarse sin avisar si no tiene casos pendientes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. La denuncia de actos ilícitos y la probidad son deberes éticos del servidor público."
    },
    {
        id: 265,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Cuál es el propósito fundamental de la evaluación en el Nivel Inicial de acuerdo con la Ordenanza 04-2023?",
        opciones: [
            "Seleccionar a los niños más brillantes para un grupo especial.",
            "Recoger información relevante para retroalimentar el proceso de enseñanza y potenciar el desarrollo integral.",
            "Certificar que el niño ya sabe leer antes de ir a Primaria.",
            "Clasificar a los niños según su nivel económico."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es formativa y busca mejorar el aprendizaje, no etiquetar al niño."
    },
    {
        id: 266,
        categoria: "Relación Escuela-Familia",
        pregunta: "La Ordenanza 03-2025 establece que los padres tienen derecho a ser informados sobre la evaluación de sus hijos:",
        opciones: [
            "Solo si el niño va a reprobar.",
            "De manera periódica, sistemática y clara sobre los avances y dificultades.",
            "Solo una vez al año al finalizar el ciclo.",
            "Solo si pagan la cuota de la APMAE."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. La transparencia en el progreso educativo es un derecho de los tutores legales."
    },
    {
        id: 267,
        categoria: "Código de Ética",
        pregunta: "La Orden Departamental 22-2023 prohíbe al personal docente y administrativo en el Nivel Inicial:",
        opciones: [
            "Abrazar a un niño de forma afectiva y protectora frente a testigos.",
            "Besar a los estudiantes en la boca o tener cualquier contacto físico de carácter erótico o inapropiado.",
            "Cantar canciones infantiles con los niños.",
            "Ayudar a un niño a abrocharse los zapatos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Establece límites de contacto físico para prevenir abusos y proteger la integridad del menor."
    },
    {
        id: 268,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "En relación a la Ley 1-12, la formación en valores en el Nivel Inicial busca crear ciudadanos:",
        opciones: [
            "Que solo obedezcan sin preguntar.",
            "Responsables, solidarios y con respeto a los derechos humanos y la identidad nacional.",
            "Que prefieran vivir en otros países.",
            "Que solo se interesen por el dinero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12 END 2030. La formación ciudadana empieza desde la primera infancia."
    },
    {
        id: 269,
        categoria: "Detección Temprana",
        pregunta: "Un niño de 4 años en el centro no establece contacto visual y no responde a su nombre. La psicóloga, bajo un enfoque preventivo, debe considerar esto como:",
        opciones: [
            "Un comportamiento normal de timidez.",
            "Una señal de alerta que requiere observación detallada y posible referimiento a evaluación diagnóstica.",
            "Una falta de respeto que debe ser sancionada.",
            "Un signo de que el niño es muy independiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Guía de señales de alerta del MINERD. La detección temprana es responsabilidad del psicólogo escolar."
    },
    {
        id: 270,
        categoria: "Convivencia Escolar",
        pregunta: "Según la Ordenanza 05-2023, cuando ocurre un conflicto en Inicial, la medida a aplicar debe ser 'Restaurativa'. Esto significa:",
        opciones: [
            "Que el niño que hizo algo malo debe ser humillado públicamente.",
            "Que se busca reparar el daño, aprender de la situación y restaurar la armonía en el grupo.",
            "Que el niño debe pagar los materiales que rompió de su bolsillo.",
            "Que el niño debe ser cambiado de aula inmediatamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. El enfoque restaurativo prioriza el aprendizaje social sobre el castigo punitivo."
    },
    {
        id: 271,
        categoria: "Transparencia (Ley 200-04)",
        pregunta: "La Ley 200-04 garantiza que cualquier ciudadano puede solicitar al centro educativo información sobre:",
        opciones: [
            "La vida privada de los profesores.",
            "El uso de los recursos del fondo de descentralización entregados a la Junta de Centro.",
            "Los expedientes psicológicos confidenciales de los niños.",
            "Las notas personales que la psicóloga toma en su diario privado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. La información financiera pública es de libre acceso, la información personal sensible es protegida."
    },
    {
        id: 272,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "El Registro de Grado de Nivel Inicial debe completarse de manera:",
        opciones: [
            "Mensual, sin importar si hay cambios.",
            "Sistemática y continua, reflejando el progreso real observado en el niño.",
            "Al final del año, basándose en la memoria del docente.",
            "Solo cuando el distrito educativo anuncie una supervisión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La veracidad y sistematicidad del registro garantizan una evaluación justa."
    },
    {
        id: 273,
        categoria: "Constitución Dominicana",
        pregunta: "El Artículo 63 de la Constitución Dominicana indica que la erradicación del analfabetismo es:",
        opciones: [
            "Tarea exclusiva de las iglesias.",
            "Una obligación del Estado.",
            "Opcional para los ayuntamientos.",
            "Responsabilidad solo de los padres que no saben leer."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana, Art. 63. Es un mandato constitucional erradicar el analfabetismo en toda la población."
    },
    {
        id: 274,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 prohíbe el uso de términos despectivos o etiquetas para referirse a estudiantes con discapacidad. El término correcto es:",
        opciones: [
            "Enfermito.",
            "Estudiante con discapacidad o estudiante con NEAE.",
            "Niño especial.",
            "Minusválido."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024 y Ley 5-13. Se debe utilizar un lenguaje basado en derechos y respeto a la persona."
    },
    {
        id: 275,
        categoria: "Ley 66-97",
        pregunta: "Según la Ley 66-97, el sistema educativo dominicano se fundamenta en principios:",
        opciones: [
            "Militares y de control social.",
            "Cristianos, democráticos y de justicia social.",
            "Exclusivamente tecnológicos.",
            "De competencia económica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Define la filosofía que sustenta la educación nacional."
    },
    {
        id: 276,
        categoria: "Desarrollo del Lenguaje",
        pregunta: "Un niño de Inicial que presenta dificultades para pronunciar la 'rr' a los 4 años, la psicóloga debe saber que:",
        opciones: [
            "Es una falta grave de aprendizaje.",
            "Puede ser parte del proceso normal de adquisición fonológica, pero debe observarse.",
            "Debe ser reprobado inmediatamente.",
            "Ya debería hablar como un adulto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Desarrollo evolutivo del lenguaje. El fonema 'rr' es uno de los últimos en adquirirse (hacia los 5-6 años)."
    },
    {
        id: 277,
        categoria: "Ordenanza 01-2023",
        pregunta: "La Política Nacional de Alfabetización Inicial prioriza que el aprendizaje sea 'Significativo'. Esto ocurre cuando:",
        opciones: [
            "El niño memoriza muchas palabras sin entenderlas.",
            "El niño conecta los nuevos conocimientos con sus experiencias previas y su entorno.",
            "El niño copia 20 páginas de un libro.",
            "El niño recibe un premio por cada letra aprendida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Enfoque Constructivista del currículo."
    },
    {
        id: 278,
        categoria: "Ética Profesional",
        pregunta: "Si una psicóloga escolar de Inicial nota que un docente está siendo negligente con la higiene de los niños, su deber según el Código de Ética es:",
        opciones: [
            "Ignorarlo para no buscarse problemas con el compañero.",
            "Conversar con el docente de forma asertiva y, si no hay cambio, informar al equipo de gestión para proteger el bienestar del niño.",
            "Contárselo a los padres en la salida de forma secreta.",
            "Publicarlo en su estado de Facebook sin decir nombres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código de Ética y Orden Departamental 22-2023. El bienestar del estudiante prima sobre la camaradería profesional."
    },
    {
        id: 279,
        categoria: "Administración Educativa",
        pregunta: "La 'Descentralización Educativa' mencionada en la Ley 66-97 busca:",
        opciones: [
            "Que el Ministro de Educación haga todo el trabajo solo.",
            "Transferir poder de decisión y recursos a las regiones, distritos y centros educativos para una gestión más eficiente.",
            "Que cada escuela se mande sola sin seguir las leyes del MINERD.",
            "Eliminar el Ministerio de Educación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Es el modelo que permite que las comunidades participen en la gestión escolar."
    },
    {
        id: 280,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Qué significa que la evaluación en Inicial sea 'Continua'?",
        opciones: [
            "Que el niño tiene que estar tomando exámenes todo el día.",
            "Que se realiza durante todo el proceso de enseñanza-aprendizaje, no solo al final.",
            "Que la maestra no puede dejar de escribir nunca.",
            "Que el niño nunca sale a recreo para que lo evalúen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación es parte intrínseca del día a día pedagógico."
   },

    {
        id: 281,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "En el Nivel Inicial, el informe de progreso que se entrega a la familia debe estar redactado en un lenguaje:",
        opciones: [
            "Altamente técnico y médico para demostrar profesionalismo.",
            "Claro, sencillo y descriptivo, resaltando los logros y las áreas que requieren apoyo.",
            "Inglés, para preparar a los niños para el futuro.",
            "Códigos numéricos que solo el psicólogo entienda."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El objetivo es que la familia comprenda el desarrollo del niño para colaborar en su proceso."
    },
    {
        id: 282,
        categoria: "Inclusión Educativa",
        pregunta: "La Ordenanza 05-2024 establece que la 'Educación Inclusiva' implica:",
        opciones: [
            "Crear escuelas especiales en cada barrio para separar a los niños.",
            "Transformar el sistema educativo para eliminar barreras y asegurar la participación de todos sin discriminación.",
            "Inscribir a los niños con discapacidad pero dejarlos en una esquina sin hacer nada.",
            "Que solo los niños con NEAE asistan a la escuela tres días a la semana."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión es un derecho humano que exige cambios sistémicos para la equidad."
    },
    {
        id: 283,
        categoria: "Ley 136-03",
        pregunta: "Si un psicólogo escolar identifica que un niño de inicial es víctima de negligencia grave por parte de sus padres (falta de alimentación o higiene extrema), debe:",
        opciones: [
            "No hacer nada porque es un problema privado de la familia.",
            "Intervenir orientando a la familia y, de persistir, reportar a las autoridades de protección (CONANI).",
            "Adoptar al niño de manera informal.",
            "Expulsar al niño del centro para evitar mala imagen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. La negligencia es una forma de maltrato por omisión que debe ser abordada por el sistema de protección."
    },
    {
        id: 284,
        categoria: "Función Pública (Ley 41-08)",
        pregunta: "¿Cuál de las siguientes es una 'Prohibición' para los servidores públicos según la Ley 41-08?",
        opciones: [
            "Tomar vacaciones en el periodo escolar correspondiente.",
            "Solicitar o aceptar gratificaciones, dádivas u obsequios a cambio de servicios propios de su cargo.",
            "Participar en talleres de capacitación del MINERD.",
            "Afiliarse a un sindicato docente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El soborno y el cohecho son faltas gravísimas que conllevan la destitución."
    },
    {
        id: 285,
        categoria: "Gestión Escolar",
        pregunta: "Según la Ordenanza 03-2025, el Consejo Estudiantil es un organismo de participación. En el Nivel Inicial, este se fomenta principalmente para:",
        opciones: [
            "Organizar huelgas contra la dirección.",
            "Iniciar el aprendizaje de la vida democrática y la expresión de opiniones de forma organizada.",
            "Que los niños elijan qué merienda se va a comprar.",
            "Sustituir el trabajo de los maestros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025 y Ley 66-97. La formación ciudadana comienza con la participación temprana."
    },
    {
        id: 286,
        categoria: "Ética Profesional",
        pregunta: "Ante un caso de divorcio conflictivo donde ambos padres disputan la tutoría, la psicóloga de Inicial debe:",
        opciones: [
            "Elegir al padre que mejor le caiga.",
            "Mantener la neutralidad, enfocarse en el bienestar emocional del niño y basarse solo en documentos legales oficiales (sentencias).",
            "No dejar que el niño entre al centro hasta que los padres se arreglen.",
            "Testificar en favor de la madre sin que un juez se lo pida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Código de Ética y Orden Departamental 22-2023. La actuación del psicólogo debe ser técnica, legal e imparcial."
    },
    {
        id: 287,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "La 'Evaluación Formativa' en el Nivel Inicial se realiza:",
        opciones: [
            "Solo cuando el niño se porta mal.",
            "Durante todo el proceso para ajustar las estrategias pedagógicas a las necesidades del niño.",
            "Únicamente mediante exámenes de opción múltiple.",
            "Al final de cada ciclo de 6 años."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. Permite tomar decisiones a tiempo para no esperar al final del año."
    },
    {
        id: 288,
        categoria: "Inclusión y DUA",
        pregunta: "En el Diseño Universal para el Aprendizaje (DUA), proporcionar 'Múltiples Formas de Expresión' significa:",
        opciones: [
            "Que todos los niños deben hablar tres idiomas.",
            "Permitir que los niños demuestren lo aprendido de diferentes maneras (dibujo, señas, lenguaje oral, etc.).",
            "Que el aula debe tener muchos juguetes diferentes.",
            "Que la psicóloga debe hablar en voz alta siempre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Reconoce que cada niño tiene diferentes habilidades para comunicar sus logros."
    },
    {
        id: 289,
        categoria: "Derecho a la Información",
        pregunta: "La Ley 200-04 indica que si la información solicitada ya está disponible en la página web institucional, el centro debe:",
        opciones: [
            "Negar la respuesta.",
            "Indicar al solicitante el enlace o fuente exacta donde puede consultarla.",
            "Imprimirla y cobrar por las copias.",
            "Ignorar la solicitud."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Facilita el acceso rápido a la información pública existente."
    },
    {
        id: 290,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "La Ley 1-12 (END) busca que la República Dominicana sea un país donde:",
        opciones: [
            "No sea necesario ir a la escuela.",
            "Exista igualdad de oportunidades y justicia social para todos los ciudadanos.",
            "Solo los ricos tengan acceso a la tecnología.",
            "El sistema educativo sea el más caro del mundo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. La educación es el motor principal para lograr la equidad social planteada en la END."
    },
    {
        id: 291,
        categoria: "Código de Ética",
        pregunta: "La Orden Departamental 22-2023 establece que el personal educativo que tenga conocimiento de una falta ética de un compañero y lo oculte:",
        opciones: [
            "Es un buen compañero.",
            "Incurre en una falta por omisión y puede ser sancionado.",
            "Recibirá un premio por lealtad.",
            "No tiene responsabilidad alguna."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El encubrimiento de faltas graves daña la institucionalidad y la seguridad de los niños."
    },
    {
        id: 292,
        categoria: "Convivencia Escolar",
        pregunta: "En el Nivel Inicial, la 'Disciplina Positiva' se basa en:",
        opciones: [
            "Dejar que los niños hagan lo que quieran sin límites.",
            "Establecer límites claros basados en el respeto, la firmeza y el cariño, sin violencia.",
            "Premiar con dulces cada vez que un niño se queda sentado.",
            "Usar el miedo como herramienta de control."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. Busca el desarrollo de la autorregulación en el niño."
    },
    {
        id: 293,
        categoria: "Ley 5-13 Discapacidad",
        pregunta: "La Ley 5-13 establece que los edificios escolares deben cumplir con normas de:",
        opciones: [
            "Decoración de lujo.",
            "Accesibilidad universal (rampas, baños adaptados, etc.).",
            "Tener solo dos pisos.",
            "Colores azul y blanco obligatoriamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13. El entorno físico no debe ser una barrera para el acceso a la educación."
    },
    {
        id: 294,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Quién es el responsable directo de completar el Registro de Grado en el Nivel Inicial?",
        opciones: [
            "El conserje del centro.",
            "La docente de aula, con el apoyo y orientación de la psicóloga.",
            "Los padres de familia en las reuniones trimestrales.",
            "El digitador del distrito educativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La docente es quien observa el día a día, pero la psicóloga orienta sobre casos especiales."
    },
    {
        id: 295,
        categoria: "Constitución Dominicana",
        pregunta: "El derecho a la libertad de expresión (Art. 49) en el contexto escolar significa que:",
        opciones: [
            "Los niños pueden decir palabras obscenas.",
            "Los estudiantes tienen derecho a expresar sus ideas y opiniones libremente, acorde a su etapa de desarrollo.",
            "El director puede prohibir que los psicólogos hablen con los padres.",
            "No se puede criticar ninguna decisión del Ministerio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana. La libertad de expresión es un derecho fundamental que se educa en la escuela."
    },
    {
        id: 296,
        categoria: "Inclusión y NEAE",
        pregunta: "Un niño con 'Dificultades Específicas de Aprendizaje' (DEA) en Inicial suele presentar señales en:",
        opciones: [
            "El tamaño de sus zapatos.",
            "El desarrollo del lenguaje, la percepción visual o la coordinación motora.",
            "Su preferencia por colores oscuros.",
            "La cantidad de agua que bebe."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Estas son funciones básicas que impactarán el aprendizaje posterior de la lectura y el cálculo."
    },
    {
        id: 297,
        categoria: "Ordenanza 01-2023",
        pregunta: "La Política Nacional de Alfabetización considera que la lectura es un proceso de:",
        opciones: [
            "Construcción de significados, no solo decodificación de letras.",
            "Repetición de sonidos en voz alta.",
            "Copiado de textos del libro a la mascota.",
            "Adorno para la biblioteca."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ordenanza 01-2023. Leer implica comprender y usar el lenguaje para comunicarse."
    },
    {
        id: 298,
        categoria: "Ley 66-97",
        pregunta: "El Consejo Nacional de Educación es el organismo que:",
        opciones: [
            "Solo se encarga de limpiar las escuelas.",
            "Dicta las políticas educativas generales y aprueba las ordenanzas.",
            "Paga los sueldos de los maestros directamente.",
            "Vende los uniformes escolares."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Es la máxima autoridad en materia de política educativa en el país."
    },
    {
        id: 299,
        categoria: "Manual de Convivencia",
        pregunta: "Cuando se aplica una medida educativa en el Nivel Inicial, la prioridad es:",
        opciones: [
            "Que el niño pase vergüenza para que no lo repita.",
            "La protección de los derechos del niño y su formación integral.",
            "Que los padres paguen una multa económica.",
            "Que el niño sea suspendido por un mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. El enfoque es siempre pedagógico y de respeto a la dignidad humana."
    },
    {
        id: 300,
        categoria: "Evaluación de Desempeño",
        pregunta: "La evaluación de desempeño para una psicóloga escolar busca fundamentalmente:",
        opciones: [
            "Crear miedo entre el personal.",
            "Fortalecer la calidad del servicio educativo mediante la retroalimentación y la mejora de las competencias profesionales.",
            "Eliminar los puestos de psicología en los centros.",
            "Solo contar cuántas horas estuvo sentada en la oficina."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y reglamentos del MINERD. Es un proceso de crecimiento institucional y personal."
    },

    {
        id: 301,
        categoria: "Evaluación de Desempeño",
        pregunta: "Durante su Evaluación de Desempeño, se le presenta un caso donde una docente de Pre-Primario le exige aplicar una prueba de coeficiente intelectual (CI) a un niño de 5 años porque 'aprende lento'. Según la Ordenanza 05-2024, su respuesta técnica debe ser:",
        opciones: [
            "Aplicar la prueba inmediatamente para complacer a la docente.",
            "Explicar que la evaluación en Inicial es ecológica y procesual, priorizando la identificación de barreras y no la medición de un CI estático.",
            "Referir al niño al psiquiatra para que él aplique la prueba.",
            "Decirle a la docente que el niño no tiene solución."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El modelo inclusivo dominicano rechaza el enfoque clínico/médico (etiquetas de CI) en favor del modelo social (identificar barreras en el entorno)."
    },
    {
        id: 302,
        categoria: "Ordenanza 01-2023 (Alfabetización)",
        pregunta: "Una docente de Kínder (4 años) castiga a un niño dejándolo sin recreo porque no sabe escribir su nombre completo con letra cursiva. Como psicóloga, usted interviene basándose en:",
        opciones: [
            "Felicitar a la maestra por su exigencia.",
            "La Ordenanza 01-2023, que establece que la alfabetización inicial es un proceso lúdico y emergente, y las normas de convivencia prohíben suprimir el recreo.",
            "Sugerir que el niño copie su nombre 100 veces.",
            "Citar a los padres para decirles que el niño fracasará."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y 05-2023. Exigir habilidades no acordes a la etapa evolutiva genera frustración; quitar el recreo es una medida prohibida."
    },
    {
        id: 303,
        categoria: "Ley 136-03",
        pregunta: "Usted nota que una niña de 4 años acude al centro con el mismo uniforme sucio toda la semana y presenta bajo peso severo. El director le sugiere 'no meterse en problemas familiares'. Su deber legal es:",
        opciones: [
            "Obedecer al director por respeto a la jerarquía.",
            "Documentar el caso, intervenir con la familia y, de no haber cambios, notificar al Sistema Nacional de Protección (CONANI), pues es negligencia (Ley 136-03).",
            "Comprarle comida a escondidas.",
            "Burlarse de la niña frente al curso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El deber de denuncia ante el maltrato u omisión de cuidados es obligatorio e indelegable para el personal escolar."
    },
    {
        id: 304,
        categoria: "Ordenanza 04-2023 (Registro de Grado)",
        pregunta: "En la reunión de evaluación del primer periodo, la maestra le informa que pondrá 'Todavía No Logrado' (TNL) a la mayoría de los niños para que los padres 'se asusten y ayuden más'. Su orientación debe ser:",
        opciones: [
            "Apoyar la estrategia para integrar a las familias.",
            "Recordar que la evaluación debe ser ética y objetiva, reflejando el progreso real, no usarse como herramienta de castigo o presión.",
            "Decirle que mejor ponga números rojos.",
            "Cambiar las notas usted misma sin avisarle a la maestra."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación tiene un carácter ético y formativo, no punitivo."
    },
    {
        id: 305,
        categoria: "Inclusión (Ordenanza 05-2024)",
        pregunta: "Al planificar los 'Ajustes Curriculares' para un estudiante sordo en el Nivel Inicial, la estrategia principal en el aula ordinaria debe ser:",
        opciones: [
            "Obligarlo a hablar oralmente sin usar señas.",
            "Incorporar apoyos visuales, material concreto y promover el aprendizaje básico de Lengua de Señas Dominicana (LSD) en el entorno.",
            "Dejarlo dibujando todo el día para que no moleste.",
            "Pedirle a la madre que se quede con él en el aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El entorno debe proveer los medios de comunicación alternativos o aumentativos que requiera el estudiante."
    },
    {
        id: 306,
        categoria: "Código de Ética",
        pregunta: "En una fiesta de cumpleaños fuera del horario escolar, los padres de un estudiante de su centro le invitan a tomar bebidas alcohólicas con ellos y subir fotos a Instagram. Según la Orden Departamental 22-2023:",
        opciones: [
            "Puede hacerlo porque es fuera del horario de trabajo.",
            "Debe declinar, ya que el personal educativo debe mantener una imagen de decoro y distancia profesional dentro y fuera de la escuela.",
            "Puede hacerlo solo si no lleva el uniforme del MINERD.",
            "Puede hacerlo si las fotos duran solo 24 horas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El código regula la imagen pública y las relaciones extralaborales que puedan comprometer la figura de autoridad y respeto."
    },
    {
        id: 307,
        categoria: "Evaluación Diagnóstica",
        pregunta: "¿Qué técnica es la más pertinente y válida para que la psicóloga evalúe la motricidad gruesa de un grupo de niños de 3 años en su etapa diagnóstica?",
        opciones: [
            "Un examen escrito de opción múltiple.",
            "La observación sistemática durante actividades de juego guiado en el patio o área de psicomotricidad.",
            "Una entrevista a solas en el departamento de orientación.",
            "Pedirles que lean un cuento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Currículo de Nivel Inicial y Ordenanza 04-2023. La observación en contextos naturales de juego es la principal técnica de recolección de datos."
    },
    {
        id: 308,
        categoria: "Convivencia (05-2023)",
        pregunta: "Un niño de Pre-Primario muerde frecuentemente a sus compañeros. La madre de un niño agredido exige la expulsión del agresor. Su proceder como psicóloga es:",
        opciones: [
            "Expulsar al niño agresor para evitar demandas.",
            "Explicar a la madre que en Inicial las medidas son formadoras, no punitivas, y aplicar un plan de modificación conductual con la familia del agresor.",
            "Permitir que la madre agredida le grite al niño agresor.",
            "Decirle a la maestra que amarre al niño agresor a la silla."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. Protege el derecho a la educación de todos los menores; en Inicial no existe la expulsión como medida disciplinaria."
    },
    {
        id: 309,
        categoria: "Función Pública (Ley 41-08)",
        pregunta: "Durante el horario laboral, el director le pide que salga del centro para ir a un mitin político del partido de gobierno. Según la Ley 41-08, usted debe:",
        opciones: [
            "Ir con entusiasmo para asegurar su puesto.",
            "Negarse, ya que está prohibido realizar proselitismo político durante la jornada laboral.",
            "Ir pero quedarse escondida en la parte de atrás.",
            "Obligar a los maestros a ir también."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El ejercicio de la función pública es apartidista y el proselitismo en horario laboral es falta grave."
    },
    {
        id: 310,
        categoria: "Constitución Art. 63",
        pregunta: "Una familia inmigrante indocumentada intenta inscribir a su hijo de 5 años en el centro. El director se niega por falta de papeles. Según el Art. 63 de la Constitución y las normativas del MINERD, usted aconseja:",
        opciones: [
            "Apoyar al director porque los extranjeros no tienen derechos.",
            "Recordar que el derecho a la educación es universal; se inscribe al niño y se le da un código temporal escolar mientras regularizan.",
            "Llamar a migración inmediatamente.",
            "Cobrarles en dólares para aceptarlo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Art. 63 Constitución y normativas de inscripción MINERD. El derecho a la educación prima sobre el estatus migratorio del menor."
    },
    {
        id: 311,
        categoria: "Participación Familiar (03-2025)",
        pregunta: "Al conformar el Comité de Curso en un aula de Pre-Primario, la docente sugiere elegir solo a madres que no trabajen para que 'tengan tiempo'. Su intervención técnica, basada en la Ordenanza 03-2025, es:",
        opciones: [
            "Estar de acuerdo, es más práctico.",
            "Promover que la elección sea democrática e inclusiva, permitiendo la participación de padres, madres o tutores independientemente de su ocupación.",
            "Imponer a dedo quiénes serán del comité.",
            "Prohibir que se forme el comité."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. La participación debe ser democrática, equitativa y sin discriminación."
    },
    {
        id: 312,
        categoria: "Ley 5-13 (Discapacidad)",
        pregunta: "El centro está organizando el acto cívico del 27 de febrero. Un niño con parálisis cerebral en silla de ruedas es dejado en el aula 'para que no se acalore'. Esto constituye:",
        opciones: [
            "Una medida de protección adecuada.",
            "Un acto de exclusión y discriminación contrario a la Ley 5-13.",
            "Una decisión exclusiva de la maestra de educación física.",
            "Un favor para la madre del niño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13 y Ordenanza 05-2024. Los estudiantes con discapacidad tienen derecho a participar en todas las actividades socioculturales del centro."
    },
    {
        id: 313,
        categoria: "Rol del Psicólogo - Planificación",
        pregunta: "En las comunidades de aprendizaje (grupos pedagógicos), el rol de la psicóloga de Inicial frente a la planificación docente es:",
        opciones: [
            "Dictarle a la maestra lo que tiene que hacer.",
            "Asesorar en la incorporación del DUA y en estrategias para atender los diferentes ritmos y estilos de aprendizaje de los niños.",
            "Revisar la ortografía de la planificación exclusivamente.",
            "No participar porque eso es trabajo solo de la coordinadora."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Funciones del Departamento de Orientación y Psicología MINERD. El apoyo psicopedagógico en la planificación garantiza la atención a la diversidad."
    },
    {
        id: 314,
        categoria: "Ley 200-04 (Transparencia)",
        pregunta: "Una organización comunitaria solicita formalmente el POA (Plan Operativo Anual) del centro educativo. La respuesta institucional adecuada es:",
        opciones: [
            "Entregarlo, ya que es un documento de carácter público y planificación institucional.",
            "Negarlo argumentando confidencialidad de Estado.",
            "Entregar solo la portada.",
            "Cobrar 10,000 pesos por la información."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Legal: Ley 200-04. Los planes operativos y presupuestos de instituciones públicas son de libre acceso."
    },
    {
        id: 315,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Si en el segundo periodo de evaluación (mitad de año) un niño de Inicial tiene casi todos sus indicadores en 'TNL', el protocolo del equipo de gestión y psicología es:",
        opciones: [
            "Enviar una carta de expulsión preventiva.",
            "Activar un plan de intervención psicopedagógica, realizar ajustes en el aula y tener tutorías con la familia.",
            "Esperar a junio a ver si mejora milagrosamente.",
            "Regalarle los indicadores ('L') para que los padres no se quejen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La evaluación procesual sirve precisamente para activar apoyos a tiempo y evitar rezagos."
    },
    {
        id: 316,
        categoria: "Ley 1-12 (Estrategia Nacional)",
        pregunta: "La Estrategia Nacional de Desarrollo al 2030 promueve en el Nivel Inicial la política de:",
        opciones: [
            "Reducir la inversión en la primera infancia.",
            "La atención integral a la primera infancia (ej. INAIPI) y la universalización de la educación inicial de calidad.",
            "Privatizar todos los Kínder.",
            "Eliminar el desayuno escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. El Eje Estratégico 2 prioriza la educación desde la primera infancia como base del desarrollo humano."
    },
    {
        id: 317,
        categoria: "Código de Ética",
        pregunta: "Una maestra de su centro publica un video en TikTok donde los niños de su aula aparecen bailando una canción con letras explícitas. Según la Orden Departamental 22-2023, esto es:",
        opciones: [
            "Excelente para promover el talento artístico.",
            "Una falta grave por exponer la imagen de menores sin consentimiento y usar material no pedagógico y moralmente inapropiado.",
            "Permitido si los niños están de espaldas.",
            "Problema exclusivo de los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La hipersexualización infantil y la exposición mediática sin fin educativo son severamente sancionadas."
    },
    {
        id: 318,
        categoria: "Desarrollo Evolutivo",
        pregunta: "Un indicador clave del desarrollo socio-emocional que usted esperaría observar y evaluar en un niño de 5 años (Pre-Primario) es:",
        opciones: [
            "Capacidad para resolver ecuaciones de primer grado.",
            "Reconocer y nombrar emociones básicas propias y ajenas, mostrando incipiente empatía.",
            "Leer 100 palabras por minuto sin equivocarse.",
            "Quedarse sentado sin moverse durante 4 horas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Currículo de Nivel Inicial. El desarrollo de la inteligencia emocional es un pilar en esta etapa."
    },
    {
        id: 319,
        categoria: "Convivencia (Rutas de Actuación)",
        pregunta: "Ante un posible caso de Abuso Sexual Infantil (ASI) detectado por un cambio abrupto en los dibujos y conducta de una niña de Inicial, la psicóloga DEBE:",
        opciones: [
            "Confrontar directamente al presunto abusador.",
            "Aplicar la ruta de actuación del MINERD: asegurar a la niña, no revictimizar con preguntas repetitivas, y derivar el caso a la fiscalía/CONANI inmediatamente.",
            "Llamar a los padres a una reunión grupal.",
            "Ocultar el caso por falta de pruebas médicas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Protocolos de Cultura de Paz MINERD y Ley 136-03. La escuela no investiga, detecta y deriva a las autoridades judiciales."
    },
    {
        id: 320,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "En el contexto de la evaluación, el Portafolio en el Nivel Inicial se utiliza para:",
        opciones: [
            "Guardar basura del aula.",
            "Evidenciar el proceso y progreso del niño a través de la recopilación sistemática de sus producciones y trabajos.",
            "Mostrar solo los trabajos que están perfectos.",
            "Dárselo al director para que decida quién pasa de curso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El portafolio es un instrumento cualitativo que muestra la evolución cronológica del aprendizaje."
    },

    {
        id: 321,
        categoria: "Inclusión y DUA",
        pregunta: "Un estudiante de Kínder tiene Trastorno por Déficit de Atención e Hiperactividad (TDAH). Una medida basada en el DUA para la gestión del aula sería:",
        opciones: [
            "Sentarlo castigado frente a la pared.",
            "Alternar actividades pasivas con actividades de movimiento, y estructurar el tiempo con apoyos visuales (agendas pictóricas).",
            "Quitarle el recreo hasta que termine la tarea.",
            "Exigirle a los padres que lo mediquen para aceptarlo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El DUA busca modificar el entorno y la metodología (ej. agendas visuales) para facilitar la participación."
    },
    {
        id: 322,
        categoria: "Ley 41-08 (Derechos)",
        pregunta: "Una psicóloga del MINERD solicita una licencia por maternidad. Según el marco legal dominicano, este derecho le otorga un descanso remunerado de:",
        opciones: [
            "2 semanas.",
            "14 semanas (según las últimas modificaciones del Ministerio de Administración Pública y OIT).",
            "1 año completo.",
            "No tiene derecho si es de nuevo ingreso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y resoluciones del MAP. Es un derecho fundamental de las servidoras públicas."
    },
    {
        id: 323,
        categoria: "Ordenanza 01-2023",
        pregunta: "En la Alfabetización Inicial, el concepto de 'Ambiente Letrado' en el aula de Nivel Inicial significa:",
        opciones: [
            "Que el aula no tenga dibujos, solo letras negras.",
            "Que el espacio esté intencionalmente organizado con rótulos funcionales, cuentos accesibles y carteles elaborados junto a los niños.",
            "Que la maestra obligue a leer desde el primer día.",
            "Comprar láminas caras y no dejar que los niños las toquen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El ambiente letrado promueve la inmersión natural y significativa en la cultura escrita."
    },
    {
        id: 324,
        categoria: "Ley 136-03 (Derecho al Juego)",
        pregunta: "El Artículo 18 de la Ley 136-03 consagra el derecho al descanso, esparcimiento, juego y actividades recreativas. En el centro educativo, esto se garantiza al:",
        opciones: [
            "Eliminar los recreos para tener más horas de matemáticas.",
            "Considerar el juego como la principal estrategia pedagógica en Inicial y proteger los tiempos de recreo.",
            "Dejar que los niños jueguen en la calle sin supervisión.",
            "Cobrar una cuota para usar los juegos del patio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Diseño Curricular de Inicial. El juego es un derecho y el motor del aprendizaje en la primera infancia."
    },
    {
        id: 325,
        categoria: "Código de Ética",
        pregunta: "Usted descubre que el director del centro está alterando los datos de la edad de los niños en el SIGERD (Sistema de Gestión) para poder matricularlos antes de tiempo. Su acción ética es:",
        opciones: [
            "Guardar silencio porque él es el jefe.",
            "Reportar la irregularidad al Distrito Educativo (Departamento de Orientación o Supervisión), ya que es una falsificación de documentos oficiales.",
            "Ayudarle a alterar los documentos para ser su amiga.",
            "Publicarlo anónimamente en redes sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023 y Ley 41-08. El encubrimiento de fraude es una falta grave que conlleva responsabilidad compartida."
    },
    {
        id: 326,
        categoria: "Participación Familiar (03-2025)",
        pregunta: "El rol principal de la Asamblea General de la APMAE al inicio del año escolar es:",
        opciones: [
            "Decidir qué niños pueden inscribirse.",
            "Elegir la Directiva de la Asociación de Padres, Madres y Tutores, y aprobar el plan de trabajo anual.",
            "Recaudar dinero obligatoriamente para pagarle a los maestros.",
            "Criticar la vestimenta de las maestras."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Es el máximo órgano de participación familiar y funciona de forma democrática."
    },
    {
        id: 327,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Qué técnica cualitativa permite a la psicóloga y docente registrar un evento inusual o significativo del comportamiento de un niño en un momento específico?",
        opciones: [
            "El examen estandarizado.",
            "El Registro Anecdótico.",
            "La rúbrica sumativa.",
            "El pase de lista."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El registro anecdótico capta situaciones contextuales que explican conductas o avances."
    },
    {
        id: 328,
        categoria: "Ley 66-97",
        pregunta: "Según el Estatuto del Docente y la Ley 66-97, ¿cómo se logra el ingreso a la carrera docente (incluyendo orientadores y psicólogos)?",
        opciones: [
            "Por designación política directa del Ministro.",
            "Mediante la superación de un Concurso de Oposición que evalúa competencias profesionales.",
            "Por recomendación de un amigo que trabaje en el distrito.",
            "Pagando una cuota de ingreso al sindicato."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97 y Estatuto Docente. El mérito y la capacidad son los únicos criterios para el ingreso al sistema público."
    },
    {
        id: 329,
        categoria: "Inclusión y Transición",
        pregunta: "Cuando un niño con una NEAE asociada a discapacidad pasa de Pre-Primario a Primero de Primaria, la psicóloga de Inicial debe:",
        opciones: [
            "Romper su expediente para proteger su privacidad.",
            "Coordinar un proceso de 'Transición' con el equipo de Primaria, transfiriendo su Plan de Apoyo a la Diversidad (PAD) para garantizar la continuidad.",
            "Desearle buena suerte y olvidarse del caso.",
            "Recomendarle a los padres que lo dejen en Inicial un año más por pena."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La transición articulada evita la interrupción de los apoyos psicopedagógicos entre niveles."
    },
    {
        id: 330,
        categoria: "Constitución (Derecho a la Intimidad)",
        pregunta: "El Artículo 44 de la Constitución protege el derecho a la intimidad y el honor personal. En el contexto escolar de Inicial, esto impide que el personal:",
        opciones: [
            "Salude a los niños por su nombre.",
            "Divulgue información clínica, familiar o psicológica del estudiante sin autorización de los tutores (salvo requerimiento judicial).",
            "Llame a los padres por teléfono.",
            "Entregue el informe de notas en un sobre cerrado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Art. 44 y Ley 136-03. El secreto profesional y la confidencialidad son mandatos constitucionales."
    },
    {
        id: 331,
        categoria: "Convivencia (Tipificación de Faltas)",
        pregunta: "Una docente abandona el aula de niños de 3 años por 20 minutos para ir a hablar por celular, dejándolos solos. Según las normas disciplinarias laborales del MINERD, esto es:",
        opciones: [
            "Una falta leve.",
            "Una falta grave o muy grave por abandono de funciones que pone en riesgo inminente la integridad de los menores.",
            "Un derecho a su hora libre.",
            "Una costumbre aceptable."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y Ordenanza 05-2023. La negligencia en la supervisión de la primera infancia es altamente penada."
    },
    {
        id: 332,
        categoria: "Ordenanza 01-2023 (Alfabetización)",
        pregunta: "El enfoque curricular para enseñar a leer y escribir en el nivel inicial dominicano NO es:",
        opciones: [
            "Constructivista.",
            "Funcional y comunicativo.",
            "Mecanicista y repetitivo (ej. planas de 'ma me mi mo mu').",
            "Lúdico y experiencial."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 01-2023. Se ha superado el método silábico tradicional en favor de la comprensión del sentido de los textos."
    },
    {
        id: 333,
        categoria: "Evaluación de Desempeño",
        pregunta: "Al momento de ser evaluada su competencia de 'Liderazgo y Relaciones Interpersonales', los evaluadores observarán si usted:",
        opciones: [
            "Trabaja completamente aislada en su oficina.",
            "Fomenta un clima de colaboración, maneja constructivamente los conflictos y se integra activamente al trabajo de la comunidad educativa.",
            "Grita para imponer su autoridad.",
            "Solo habla con el director."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Estándares Profesionales y del Desempeño (MINERD). El trabajo en equipo es una competencia cardinal."
    },
    {
        id: 334,
        categoria: "Ley 200-04 (Acceso a la Información)",
        pregunta: "Si un padre solicita copias de los cheques de pago de la Junta de Centro, ¿el director puede negarse argumentando que los padres no son auditores?",
        opciones: [
            "Sí, la contabilidad es privada.",
            "No, todo ciudadano tiene derecho a escrutar el manejo de los fondos públicos asignados al centro (Ley 200-04).",
            "Sí, porque los padres no saben de finanzas.",
            "Solo si la APMAE lo autoriza."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04 y Manual de Juntas Descentralizadas. Transparencia total en el uso del presupuesto."
    },
    {
        id: 335,
        categoria: "Rol del Psicólogo - Familia",
        pregunta: "En una 'Escuela de Padres' (espacio de formación) del Nivel Inicial, un tema altamente pertinente propuesto por la psicóloga sería:",
        opciones: [
            "Historia de la Revolución Francesa.",
            "Pautas de crianza positiva, límites con amor y prevención del abuso infantil.",
            "Cómo invertir en la bolsa de valores.",
            "Técnicas avanzadas de química orgánica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Manual de Orientación y Psicología MINERD. El apoyo psicosocial a la crianza previene factores de riesgo."
    },
    {
        id: 336,
        categoria: "Código de Ética",
        pregunta: "Una maestra le comenta en confianza que un padre soltero de su curso le está invitando a salir románticamente y ella quiere aceptar. Según la Orden Departamental 22-2023, usted le orienta que:",
        opciones: [
            "Acepte porque encontrar pareja es difícil.",
            "Se abstenga, pues el código prohíbe las relaciones de carácter sexo-afectivo con padres o tutores de los estudiantes mientras estén en el centro.",
            "Salgan pero a escondidas.",
            "Le pida regalos costosos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. Protege la objetividad pedagógica y evita conflictos de intereses o favoritismos."
    },
    {
        id: 337,
        categoria: "Ley 5-13 Discapacidad",
        pregunta: "Según la Convención sobre los Derechos de las Personas con Discapacidad y la Ley 5-13, ¿quién debe adaptarse en el proceso educativo?",
        opciones: [
            "El niño debe curarse para poder entrar a la escuela.",
            "La escuela y el sistema educativo deben proveer los ajustes y eliminar las barreras para acoger al niño.",
            "Los padres deben buscar una escuela especial siempre.",
            "La sociedad no tiene que hacer nada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 5-13. Consagra el modelo social de la discapacidad: la barrera está en el entorno, no en el individuo."
    },
    {
        id: 338,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Si la rúbrica de evaluación indica que un niño 'Logrado' (L) arma rompecabezas de 20 piezas, y un niño logra armar uno de 10 piezas con ayuda, su calificación es:",
        opciones: [
            "Excelente.",
            "En Proceso (EP) o Todavía No Logrado (TNL), dependiendo de la frecuencia de la ayuda y la edad evolutiva.",
            "Reprobado.",
            "50 puntos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La valoración cualitativa mide la aproximación a la meta esperada (indicador)."
    },
    {
        id: 339,
        categoria: "Desarrollo del Niño",
        pregunta: "En la primera infancia, la 'Lateralidad' (preferencia por usar más el lado derecho o izquierdo del cuerpo) suele definirse claramente alrededor de los:",
        opciones: [
            "6 meses de nacido.",
            "4 a 5 años de edad.",
            "15 años.",
            "Nunca se define."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Hitos del desarrollo psicomotor (Currículo Nivel Inicial). Es fundamental no forzar al niño a usar una mano específica antes de tiempo."
    },
    {
        id: 340,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "El enfoque de 'Equidad de Género' transversalizado en la Ley 1-12 aplicado al Nivel Inicial significa que:",
        opciones: [
            "Solo las niñas pueden jugar con muñecas.",
            "Se promueve la igualdad de oportunidades y trato, evitando estereotipos de género desde los primeros años de vida.",
            "Los niños varones son más inteligentes.",
            "Se debe separar a niños y niñas en aulas distintas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12 y Currículo. La educación debe deconstruir roles sociales discriminatorios desde el preescolar."
    },


    {
        id: 341,
        categoria: "Ley 136-03 (Derecho a la Identidad)",
        pregunta: "Un niño de 5 años asiste al centro, pero su madre no tiene Acta de Nacimiento. La Ley 136-03 y las normas del MINERD dictan que la escuela debe:",
        opciones: [
            "Echar al niño a la calle.",
            "Inscribirlo provisionalmente y orientar/acompañar a la madre en el proceso de declaración tardía a través de las instituciones competentes.",
            "Llamar a la policía para que arreste a la madre.",
            "Cobrarle una mensualidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El derecho a la identidad y el nombre es inalienable, y la escuela actúa como ente garante facilitando la ruta institucional."
    },
    {
        id: 342,
        categoria: "Convivencia y Cultura de Paz",
        pregunta: "En una discusión entre maestras frente a los niños de Kínder, una de ellas lanza un cuaderno. La psicóloga debe intervenir considerando que:",
        opciones: [
            "Es algo normal por el estrés.",
            "Constituye una falta grave al clima escolar, violando la Ordenanza 05-2023, y es un pésimo modelaje de resolución de conflictos para los menores.",
            "Solo debe intervenir si el cuaderno golpea a un niño.",
            "Debe grabar un video y enviarlo por WhatsApp."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023 y Código de Ética. El personal adulto debe ser el principal modelo de autorregulación emocional."
    },
    {
        id: 343,
        categoria: "Ordenanza 05-2024 (Inclusión)",
        pregunta: "El 'Ajuste Curricular Significativo' se diferencia del 'No Significativo' en que el Significativo:",
        opciones: [
            "Solo cambia el color del lápiz.",
            "Modifica los indicadores de logro o competencias fundamentales adaptándolos a las posibilidades del estudiante, y se registra formalmente en el PAD.",
            "Significa que el niño no va a clases.",
            "Lo aprueba el Presidente de la República."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. Los ajustes significativos alteran la complejidad de lo que se enseña y evalúa."
    },
    {
        id: 344,
        categoria: "Evaluación de Desempeño",
        pregunta: "En la evaluación de desempeño, el portafolio profesional de la psicóloga debe contener evidencias de:",
        opciones: [
            "Sus recibos de compra de ropa.",
            "Planificación anual, informes psicopedagógicos (protegiendo identidad), actas de escuelas de padres y registros de acompañamiento docente.",
            "Fotos de sus vacaciones.",
            "Exámenes de matemáticas que aplicó."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Instrumentos de Evaluación de Desempeño MINERD. El portafolio es la evidencia empírica de su labor técnica."
    },
    {
        id: 345,
        categoria: "Ley 41-08 (Régimen Disciplinario)",
        pregunta: "Una amonestación escrita a una servidora pública de carrera (como una psicóloga escolar) procede cuando:",
        opciones: [
            "Asesina a alguien.",
            "Comete faltas de segundo grado, como reincidir en ausencias injustificadas, tras haber agotado las amonestaciones verbales.",
            "Llega 1 minuto tarde una sola vez.",
            "Hace bien su trabajo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El régimen disciplinario es progresivo: amonestación verbal, escrita, suspensión y destitución."
    },
    {
        id: 346,
        categoria: "Ley 66-97 (Fines de la Educación)",
        pregunta: "Según el Artículo 5 de la Ley 66-97, uno de los fines de la educación dominicana es:",
        opciones: [
            "Formar personas dependientes del Estado.",
            "Formar ciudadanos amantes de su familia y de su Patria, conscientes de sus deberes, derechos y libertades.",
            "Promover la cultura de otros países por encima de la dominicana.",
            "Enseñar a los niños a trabajar en fábricas desde los 5 años."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. La identidad nacional y la formación ciudadana son pilares teleológicos del sistema."
    },
    {
        id: 347,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "Al finalizar el año escolar, el docente de Pre-Primario debe elaborar un informe final que sintetice los logros del niño. La psicóloga acompaña este proceso verificando que:",
        opciones: [
            "El informe tenga mínimo 50 páginas.",
            "Exista coherencia entre lo registrado durante los tres periodos evaluativos y el perfil de egreso descrito en el informe final.",
            "El informe solo mencione las cosas malas del niño.",
            "Todos los niños tengan exactamente el mismo informe copiado y pegado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La objetividad y la personalización del informe cualitativo garantizan una transición adecuada a Primaria."
    },
    {
        id: 348,
        categoria: "Código de Ética",
        pregunta: "Un orientador de un centro educativo privado cercano le ofrece una comisión de dinero por cada estudiante que usted, desde el centro público, le refiera a su consulta vespertina. Su accionar debe ser:",
        opciones: [
            "Aceptar la oferta para ganar dinero extra.",
            "Rechazar la oferta tajantemente, ya que la Orden Departamental 22-2023 y la Ley 41-08 prohíben recibir beneficios económicos por el ejercicio del cargo o generar conflictos de interés.",
            "Aceptar pero pedir que le pague en efectivo para no dejar rastro.",
            "Referir a todos los niños posibles para ganar más."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El tráfico de influencias y el cohecho violan el principio de probidad."
    },
    {
        id: 349,
        categoria: "Ordenanza 01-2023 (Alfabetización)",
        pregunta: "Según las orientaciones curriculares, la 'Conciencia Fonológica' en el Nivel Inicial se desarrolla a través de:",
        opciones: [
            "Repetir reglas gramaticales teóricas.",
            "Juegos con rimas, separación oral de sílabas a través de palmadas y canciones que manipulan los sonidos del habla.",
            "Exámenes de dictado sorpresa.",
            "Ver televisión en silencio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023 y Diseño Curricular. Es el pilar fundamental pre-lector que se trabaja desde los 3 años."
    },
    {
        id: 350,
        categoria: "Participación Familiar (03-2025)",
        pregunta: "La Junta de Centro es el organismo descentralizado que administra los fondos operativos. ¿La APMAE tiene representación en la Junta de Centro?",
        opciones: [
            "No, el dinero solo lo maneja el director.",
            "Sí, los padres tienen representación con voz y voto para garantizar la transparencia y la participación de la comunidad.",
            "Solo pueden ir de oyentes pero no opinar.",
            "Sí, pero solo los padres que aporten dinero a la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025 y Reglamento de Juntas Descentralizadas. La cogestión es obligatoria."
    },
    {
        id: 351,
        categoria: "Inclusión y Equidad",
        pregunta: "La diferencia principal entre 'Integración' e 'Inclusión' según la normativa del MINERD (05-2024) es:",
        opciones: [
            "Son exactamente lo mismo.",
            "La integración pide que el niño se adapte a la escuela; la Inclusión exige que la escuela se transforme para atender a la diversidad de todos los niños.",
            "La inclusión es solo para escuelas privadas.",
            "La integración es obligatoria, la inclusión es opcional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El paradigma dominicano actual es inclusivo, garantizando que el diseño del entorno sea accesible desde el inicio."
    },
    {
        id: 352,
        categoria: "Ley 136-03 (Derecho a la Educación)",
        pregunta: "Una adolescente queda embarazada. El director de la escuela quiere expulsarla 'para que no sea mal ejemplo' para los niños de Inicial. La ley establece que:",
        opciones: [
            "El director tiene razón, debe ser expulsada.",
            "Es ilegal. El Estado prohíbe la expulsión por embarazo, debiendo garantizar modalidades de estudio que aseguren su permanencia en el sistema (Ley 136-03).",
            "Debe pagar una multa para seguir estudiando.",
            "Solo puede estudiar de noche."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y normativas del MINERD. La discriminación por embarazo está expresamente prohibida y sancionada."
    },
    {
        id: 353,
        categoria: "Evaluación Diagnóstica Inicial",
        pregunta: "Durante las dos primeras semanas de adaptación (evaluación diagnóstica), una niña de 3 años llora inconsolablemente cuando la madre se va. La acción psicopedagógica pertinente es:",
        opciones: [
            "Castigar a la niña por inmadura.",
            "Trabajar el apego seguro, permitir la entrada escalonada de la familia y brindar contención emocional, ya que es una reacción evolutiva esperable (ansiedad de separación).",
            "Obligar a la madre a irse corriendo.",
            "Encerrar a la niña sola hasta que se calme."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Documento de Apoyo de Nivel Inicial (Periodo de Adaptación). El acompañamiento socioemocional es clave para la transición del hogar a la escuela."
    },
    {
        id: 354,
        categoria: "Constitución Dominicana",
        pregunta: "El derecho al 'Libre Desarrollo de la Personalidad' (Art. 43 de la Constitución) en la escuela implica:",
        opciones: [
            "Que el niño puede romper los muebles de la escuela.",
            "El respeto a la individualidad, ritmos y formas de ser de cada estudiante, sin discriminación ni imposición de modelos estandarizados opresivos.",
            "Que los docentes no pueden poner reglas.",
            "Que no hay horarios de entrada ni salida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Art. 43. Protege la autonomía y dignidad en la construcción del ser humano."
    },
    {
        id: 355,
        categoria: "Normas de Convivencia (05-2023)",
        pregunta: "El proceso de mediación en conflictos escolares, establecido en las normativas, tiene como característica principal ser:",
        opciones: [
            "Un juicio público con jurado.",
            "Un proceso voluntario, imparcial y confidencial donde las partes buscan soluciones con la ayuda de un tercero neutral (como la psicóloga).",
            "Una obligación donde el director dicta la sentencia.",
            "Una reunión para insultarse ordenadamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2023. La mediación es el núcleo de la resolución pacífica de conflictos escolares."
    },
    {
        id: 356,
        categoria: "Evaluación de Desempeño",
        pregunta: "Si en su Evaluación de Desempeño obtiene una calificación en la escala de 'Insuficiente', la Ley 41-08 y los reglamentos del MINERD establecen que:",
        opciones: [
            "Será ascendida a directora.",
            "Será sometida a un programa intensivo de capacitación y desarrollo profesional, y si en la siguiente evaluación vuelve a fallar, procede la desvinculación.",
            "Recibirá un aumento salarial.",
            "No pasa nada, todo sigue igual."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. La evaluación busca mejorar, pero la insuficiencia reiterada conlleva la pérdida del estatus de carrera."
    },
    {
        id: 357,
        categoria: "Evaluación Nivel Inicial",
        pregunta: "¿Qué papel juega la Autoevaluación en los niños de Nivel Inicial (Pre-Primario) según la Ordenanza 04-2023?",
        opciones: [
            "Ninguno, son muy pequeños para autoevaluarse.",
            "Es fundamental; se promueve a través de asambleas, preguntas metacognitivas simples ('¿Qué aprendimos hoy?', '¿Cómo te sentiste?') para desarrollar su autonomía.",
            "Se usa para que ellos mismos se pongan la nota final.",
            "Solo sirve para perder tiempo de clases."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La metacognición y autorregulación inician en la primera infancia con el acompañamiento docente."
    },
    {
        id: 358,
        categoria: "Ley 200-04 y Privacidad",
        pregunta: "Un periodista invoca la Ley de Libre Acceso a la Información para solicitar los nombres y direcciones de todos los estudiantes del centro para una nota de prensa. ¿Qué procede?",
        opciones: [
            "Entregar los datos rápidamente para no ser multado.",
            "Denegar la solicitud amparándose en que la Ley 200-04 exceptúa el acceso a datos personales cuya divulgación pueda invadir la intimidad y poner en riesgo a los menores (Art. 18).",
            "Entregar solo los de las niñas.",
            "Pedirle al periodista que pague por la lista."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04 (Excepciones) y Ley 136-03. La protección de los datos de menores es absoluta frente al escrutinio público."
    },
    {
        id: 359,
        categoria: "Orden Departamental 22-2023",
        pregunta: "La prohibición de 'Uso de lenguaje inapropiado' hacia los estudiantes incluye específicamente:",
        opciones: [
            "Hablarles en voz suave.",
            "El uso de apodos, sarcasmos, gritos, groserías o comentarios humillantes que vulneren su autoestima y dignidad humana.",
            "Corregir un error de matemáticas.",
            "Pedirles que hagan una fila ordenada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El maltrato psicológico y verbal está erradicado por norma de las prácticas docentes."
    },
    {
        id: 360,
        categoria: "Rol de la Psicóloga (Integral)",
        pregunta: "De acuerdo a los lineamientos del MINERD, el modelo de intervención en Orientación y Psicología debe ser predominantemente:",
        opciones: [
            "Clínico, reactivo y enfocado solo en el niño problema.",
            "Preventivo, proactivo, sistémico (involucrando familia y docentes) y enfocado en el desarrollo integral de toda la comunidad educativa.",
            "Administrativo, solo llenando formularios en la oficina.",
            "Punitivo, decidiendo los castigos diarios."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Manual Operativo del Departamento de Orientación y Psicología MINERD. El modelo psicopedagógico nacional prioriza la prevención."
    },

    {
        id: 361,
        categoria: "Inclusión (Ordenanza 05-2024)",
        pregunta: "Un niño de 4 años presenta conductas compatibles con el Espectro Autista (TEA), pero no tiene diagnóstico médico. La docente se niega a realizar ajustes hasta que los padres traigan un certificado. Su postura técnica es:",
        opciones: [
            "Darle la razón a la docente para evitar errores médicos.",
            "Aplicar los ajustes razonables basados en las barreras observadas de inmediato, ya que la Ordenanza 05-2024 establece que la atención a la diversidad no está condicionada a un diagnóstico clínico.",
            "Suspender al niño hasta que tenga el diagnóstico.",
            "Realizar los ajustes solo si los padres pagan una evaluación privada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El centro debe responder a la necesidad educativa detectada pedagógicamente, sin esperar el trámite clínico."
    },
    {
        id: 362,
        categoria: "Ética Profesional (22-2023)",
        pregunta: "Usted recibe una queja de que una docente de Inicial usa su celular para chatear durante la 'Siesta' o el 'Descanso' de los niños, descuidando la vigilancia. ¿Cómo procede usted como parte del equipo de gestión?",
        opciones: [
            "No hace nada, es el tiempo libre de la maestra.",
            "Aborda a la docente y le recuerda que, según el Código de Ética, el personal debe garantizar la seguridad y supervisión continua de los menores sin distracciones tecnológicas.",
            "Le pide que le preste el cargador.",
            "Publica la queja en el grupo de WhatsApp de los padres."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La supervisión en Inicial es ininterrumpida por la vulnerabilidad de la edad."
    },
    {
        id: 363,
        categoria: "Evaluación (Ordenanza 04-2023)",
        pregunta: "En el Registro de Grado de Inicial, el apartado 'Observaciones' debe utilizarse para:",
        opciones: [
            "Escribir que el niño es 'malo' o 'molesto'.",
            "Describir de forma objetiva hechos significativos que expliquen el progreso del niño o las barreras que enfrenta, evitando juicios de valor.",
            "Anotar si la madre debe dinero al centro.",
            "Dejarlo en blanco para no trabajar de más."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. El registro es un documento técnico-legal; las observaciones deben ser profesionales y descriptivas."
    },
    {
        id: 364,
        categoria: "Ley 136-03",
        pregunta: "Un niño de 5 años le cuenta que su padrastro le obliga a trabajar vendiendo golosinas en el semáforo por las tardes. Usted debe:",
        opciones: [
            "Felicitar al niño por ser emprendedor.",
            "Activar inmediatamente el protocolo de protección por Trabajo Infantil, notificando al CONANI y al Ministerio de Trabajo.",
            "Decirle al niño que no lo haga más.",
            "No intervenir porque ocurre fuera de la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El trabajo infantil es una violación grave a los derechos fundamentales y la escuela debe denunciarlo."
    },
    {
        id: 365,
        categoria: "Desarrollo Organizacional",
        pregunta: "¿Qué documento orienta las acciones de prevención y apoyo emocional que la psicóloga ejecutará durante todo el año escolar?",
        opciones: [
            "El libro de cuentos del aula.",
            "El Plan Anual de Orientación y Psicología, alineado al Proyecto Educativo de Centro (PEC).",
            "La lista de merienda.",
            "El horario de limpieza del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Manual operativo de Orientación y Psicología. Toda acción debe estar planificada y responder a las necesidades del centro."
    },
    {
        id: 366,
        categoria: "Convivencia (05-2023)",
        pregunta: "Una docente le pide 'una técnica' para que los niños de 3 años dejen de moverse tanto y se queden callados por una hora. Su respuesta técnica es:",
        opciones: [
            "Sugerirles que les ponga una película larga.",
            "Explicar que evolutivamente los niños de esa edad necesitan movimiento y que las actividades deben ser cortas, dinámicas y variadas.",
            "Recomendarles que les dé un dulce si se callan.",
            "Decirle que les grite fuerte."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Psicología del Desarrollo y Currículo de Inicial. La inmovilidad prolongada es contraria al desarrollo natural en la primera infancia."
    },
    {
        id: 367,
        categoria: "Ley 41-08",
        pregunta: "Si una psicóloga escolar es evaluada dos veces consecutivas con 'Satisfactorio' (en lugar de Excelente), ¿tiene derecho a bonos por desempeño?",
        opciones: [
            "No, solo los Excelentes cobran.",
            "Sí, la escala de 'Satisfactorio' hacia arriba da derecho a los beneficios e incentivos previstos en la ley.",
            "Solo si el director quiere dárselo.",
            "Debe renunciar por no ser excelente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y reglamentos de incentivos. El desempeño satisfactorio cumple con las expectativas institucionales."
    },
    {
        id: 368,
        categoria: "Alfabetización (01-2023)",
        pregunta: "La 'Lectura en Voz Alta' por parte de la docente o psicóloga a los niños de Inicial tiene como fin principal:",
        opciones: [
            "Que los niños se duerman.",
            "Desarrollar el placer por la lectura, el vocabulario y la comprensión de estructuras narrativas.",
            "Que los niños aprendan a leer solos en una semana.",
            "Cumplir con un requisito del Ministerio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. Es una estrategia clave de modelado y fomento de la alfabetización emergente."
    },
    {
        id: 369,
        categoria: "Derechos Humanos / Constitución",
        pregunta: "El principio de 'Interés Superior del Niño' significa que:",
        opciones: [
            "Los niños mandan sobre los adultos.",
            "En toda decisión que afecte a un menor, se debe priorizar lo que más beneficie su desarrollo integral y sus derechos.",
            "Los padres siempre tienen la razón.",
            "La escuela puede hacer lo que quiera si es por el bien del niño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Dominicana y Ley 136-03. Es el principio rector de toda actuación con menores."
    },
    {
        id: 370,
        categoria: "Inclusión y Tecnología",
        pregunta: "En el marco de la Ordenanza 05-2024, el uso de software de comunicación para un niño con discapacidad motora severa se considera:",
        opciones: [
            "Un gasto innecesario.",
            "Una Tecnología de Apoyo (Producto de Apoyo) necesaria para garantizar su derecho a la expresión.",
            "Un juguete para que se distraiga.",
            "Algo que solo debe usarse en la casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El acceso a la tecnología es parte de los apoyos para la eliminación de barreras."
    },
    {
        id: 371,
        categoria: "Gestión de Riesgos",
        pregunta: "Ante un sismo durante el horario escolar, la prioridad de la psicóloga es:",
        opciones: [
            "Salir corriendo la primera para pedir ayuda.",
            "Colaborar en la evacuación calmada de los niños hacia el punto de encuentro y brindar primeros auxilios psicológicos post-evento.",
            "Quedarse debajo de su escritorio hasta que alguien la busque.",
            "Llamar a los padres para que vengan en medio del sismo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Protocolos de Gestión de Riesgos MINERD. El personal debe modelar la calma y guiar a los más vulnerables."
    },
    {
        id: 372,
        categoria: "Participación Familiar",
        pregunta: "Si una familia se niega sistemáticamente a asistir a las convocatorias para tratar el rezago de su hijo, usted debe:",
        opciones: [
            "Rendirse y no llamarlos más.",
            "Documentar las ausencias, realizar una visita domiciliaria si es posible, y agotar las rutas de apoyo antes de reportar por falta de compromiso parental.",
            "Expulsar al niño por culpa de los padres.",
            "Ponerle notas excelentes para que no tengan que venir."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 03-2025. Se debe agotar el acompañamiento y la búsqueda de la familia."
    },
    {
        id: 373,
        categoria: "Evaluación (04-2023)",
        pregunta: "Un indicador de logro en Inicial dice: 'Agrupa objetos por dos criterios (color y forma)'. Un niño solo lo hace por color. Su valoración es:",
        opciones: [
            "Logrado (L).",
            "En Proceso (EP).",
            "Todavía No Logrado (TNL).",
            "Deficiente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. 'En Proceso' indica que ya domina una parte del indicador pero necesita seguir trabajando para completarlo."
    },
    {
        id: 374,
        categoria: "Código de Ética",
        pregunta: "Un psicólogo escolar publica en sus estados de WhatsApp críticas negativas sobre la inteligencia de los padres de sus estudiantes. Esto viola el principio de:",
        opciones: [
            "Libertad de cátedra.",
            "Respeto, decoro y confidencialidad profesional (Orden Departamental 22-2023).",
            "Honestidad financiera.",
            "Higiene personal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. El respeto a la dignidad de la familia es obligatorio."
    },
    {
        id: 375,
        categoria: "Ley 66-97 (Gratuidad)",
        pregunta: "Una maestra de Pre-Primario pide a los padres una cuota mensual de 500 pesos para comprar materiales que el MINERD no envió. ¿Es esto legal?",
        opciones: [
            "Sí, si es por el bien de los niños.",
            "No, la educación pública es gratuita y obligatoria; cualquier requerimiento económico es ilegal (Ley 66-97).",
            "Sí, si lo aprueba la APMAE.",
            "Solo si le dan recibo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97 y Constitución. No se puede condicionar el servicio educativo a pagos de ninguna especie."
    },
    {
        id: 376,
        categoria: "Liderazgo en el Centro",
        pregunta: "Cuando hay un conflicto entre dos docentes que afecta el clima del aula de Inicial, el papel de la psicóloga es:",
        opciones: [
            "Elegir un bando y defenderlo.",
            "Facilitar un proceso de mediación para restaurar la armonía y asegurar que el conflicto no afecte a los niños.",
            "Ignorar el problema porque no son niños.",
            "Contarle el chisme a los otros maestros."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Funciones del orientador/psicólogo. La convivencia escolar incluye las relaciones entre adultos."
    },
    {
        id: 377,
        categoria: "Investigación-Acción",
        pregunta: "La psicóloga observa que en el recreo hay muchos accidentes. Decide investigar por qué ocurre y proponer un 'Recreo Divertido y Seguro'. Esto se llama:",
        opciones: [
            "Perder el tiempo.",
            "Innovación educativa e investigación-acción para la mejora del clima escolar.",
            "Vigilar a los conserjes.",
            "Terapia de grupo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Estándares de desempeño. El profesional debe proponer soluciones basadas en la evidencia de su entorno."
    },
    {
        id: 378,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "La END 2030 busca que la formación de los estudiantes incluya el uso ético de las TIC. En Inicial esto se traduce en:",
        opciones: [
            "Que cada niño tenga un celular propio.",
            "Introducción gradual a recursos digitales educativos bajo supervisión docente pedagógica.",
            "No usar tecnología nunca hasta los 18 años.",
            "Aprender a programar en Java a los 4 años."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. El uso pedagógico y supervisado de las TIC inicia desde la educación temprana."
    },
    {
        id: 379,
        categoria: "Inclusión y Género",
        pregunta: "Un niño de Inicial quiere jugar en el área de 'Dramatización' (la casita) y la maestra lo saca diciendo que 'eso es de niñas'. Usted interviene porque:",
        opciones: [
            "La casita es muy pequeña para él.",
            "El juego simbólico no tiene género y se debe promover la igualdad de oportunidades (Ley 1-12).",
            "Quiere que el niño aprenda a cocinar de verdad.",
            "No tiene nada más que hacer."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Currículo Inicial y END. La escuela debe romper estereotipos limitantes."
    },
    {
        id: 380,
        categoria: "Evaluación Final",
        pregunta: "¿Cuál es el fin último de que usted sea evaluada en su desempeño?",
        opciones: [
            "Que la despidan.",
            "Identificar fortalezas y necesidades de capacitación para elevar la calidad del sistema educativo.",
            "Comparar quién es la mejor psicóloga del distrito.",
            "Llenar papeles que nadie lee."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. La evaluación es para el desarrollo y la excelencia institucional."
    },

    {
        id: 381,
        categoria: "Inclusión (PAD)",
        pregunta: "El 'Plan de Apoyo a la Diversidad' (PAD) es un documento que:",
        opciones: [
            "Solo llena la maestra de educación especial.",
            "Elabora la docente con apoyo de la psicóloga para planificar los ajustes y apoyos específicos de un estudiante con NEAE.",
            "Se entrega a los padres para que ellos eduquen al niño.",
            "Es opcional si el niño se porta bien."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. El PAD es la herramienta formal de planificación inclusiva."
    },
    {
        id: 382,
        categoria: "Ley 136-03 (Disciplina)",
        pregunta: "Un directivo del centro propone crear un 'cuarto de reflexión' (aislamiento) para los niños de Inicial que muerden. Según la Ley 136-03:",
        opciones: [
            "Es una excelente idea pedagógica.",
            "Es una violación a la integridad psíquica y está prohibido como método disciplinario.",
            "Solo puede usarse si tiene aire acondicionado.",
            "Se puede usar si el psicólogo está adentro también."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03 y Ordenanza 05-2023. El aislamiento y los tratos crueles o degradantes son ilegales."
    },
    {
        id: 383,
        categoria: "Ética (Denuncia)",
        pregunta: "Usted observa que una colega psicóloga está cobrando a los padres por aplicarles pruebas que son gratuitas por el MINERD. Su deber es:",
        opciones: [
            "Pedirle una parte del dinero.",
            "Reportar el hecho a la Dirección y al Distrito, ya que es una falta ética y legal gravísima (Ley 41-08).",
            "Quedarse callada para no ser 'chivata'.",
            "Aconsejarle que suba el precio."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y Código de Ética. El aprovechamiento del cargo para beneficio económico es causa de destitución."
    },
    {
        id: 384,
        categoria: "Evaluación (04-2023)",
        pregunta: "En el Nivel Inicial, un niño que no asiste al menos al 80% de las clases sin justificación válida:",
        opciones: [
            "Pasa de curso automáticamente.",
            "Podría estar en riesgo de no promover, aunque en Inicial la promoción es casi automática, se debe reportar la negligencia familiar.",
            "Es expulsado del país.",
            "Se le regala un premio por asistencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 04-2023. La asistencia es obligatoria y su falta es señal de alerta para el equipo de psicología."
    },
    {
        id: 385,
        categoria: "Protocolos de Cultura de Paz",
        pregunta: "En una pelea física entre dos niños de 5 años, la primera acción de la psicóloga es:",
        opciones: [
            "Grabar el video para evidencia.",
            "Separarlos físicamente con cuidado, asegurar que no haya lesiones y calmar emocionalmente a ambos antes de investigar.",
            "Gritarles para que se asusten y se detengan.",
            "Llamar a la policía."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Protocolos de Cultura de Paz. La contención y seguridad física es la prioridad inmediata."
    },
    {
        id: 386,
        categoria: "Ley 200-04",
        pregunta: "La Ley de Libre Acceso a la Información Pública promueve el principio de 'Publicidad', el cual indica que:",
        opciones: [
            "Hay que pagar anuncios en TV.",
            "Toda información en poder del Estado se presume pública, salvo las excepciones legales.",
            "Solo los políticos pueden saber lo que pasa.",
            "Las escuelas deben ser secretas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 200-04. Es un pilar de la democracia y la transparencia."
    },
    {
        id: 387,
        categoria: "Estrategia Nacional de Desarrollo",
        pregunta: "Dentro de la END 2030, el objetivo de 'Educación de Calidad' para el Nivel Inicial se mide principalmente por:",
        opciones: [
            "La cantidad de niños que saben inglés.",
            "El desarrollo de las competencias fundamentales y el bienestar integral de los niños.",
            "Que todos los niños tengan uniformes nuevos.",
            "Que la escuela sea de cristal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 1-12. La calidad se define por el logro de competencias para la vida."
    },
    {
        id: 388,
        categoria: "Hitos del Desarrollo",
        pregunta: "A los 5 años, un niño debería ser capaz de realizar cuál de estas tareas de autocuidado:",
        opciones: [
            "Cocinar su propio desayuno.",
            "Ir al baño solo, lavarse las manos y vestirse con poca ayuda.",
            "Conducir una bicicleta por la avenida.",
            "Administrar su dinero de la merienda para el mes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Currículo de Inicial. La autonomía en el autocuidado es un indicador clave de madurez en Pre-Primario."
    },
    {
        id: 389,
        categoria: "Código de Ética (Regalos)",
        pregunta: "Un padre muy agradecido le lleva un perfume de 10,000 pesos como regalo personal a la psicóloga. Según la normativa:",
        opciones: [
            "Debe aceptarlo porque es un regalo de corazón.",
            "Debe declinarlo amablemente, explicando que el código prohíbe aceptar obsequios de valor económico significativo de los usuarios.",
            "Debe aceptarlo y rifarlo en el centro.",
            "Debe pedirle que mejor le dé el dinero en efectivo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08 y Orden Departamental 22-2023. Evita el favoritismo o la percepción de soborno."
    },
    {
        id: 390,
        categoria: "Evaluación (04-2023)",
        pregunta: "¿Cuál de estos NO es un instrumento de evaluación en el Nivel Inicial?",
        opciones: [
            "Pauta de observación.",
            "Registro de grado.",
            "Prueba nacional escrita estandarizada.",
            "Portafolio."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Legal: Ordenanza 04-2023. En Inicial no existen las pruebas nacionales; la evaluación es puramente cualitativa."
    },
    {
        id: 391,
        categoria: "Inclusión y Comunidad",
        pregunta: "La psicóloga organiza una charla sobre 'Aceptación de la Diversidad' para toda la comunidad. Esto responde a la función de:",
        opciones: [
            "Perder el tiempo de clase.",
            "Sensibilización y creación de culturas inclusivas (Ordenanza 05-2024).",
            "Buscar votos para el director.",
            "Reemplazar a la maestra de sociales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 05-2024. La inclusión requiere educar no solo al niño, sino a todo el entorno."
    },
    {
        id: 392,
        categoria: "Ley 66-97 (Estructura)",
        pregunta: "El órgano encargado de la participación de los maestros en la gestión escolar a través de la representación sindical es:",
        opciones: [
            "El Senado de la República.",
            "La ADP (Asociación Dominicana de Profesores) reconocida por la ley.",
            "El club de madres.",
            "La junta de vecinos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 66-97. Reconoce la libertad de asociación profesional."
    },
    {
        id: 393,
        categoria: "Salud Mental Escolar",
        pregunta: "Un niño de 4 años presenta mutismo selectivo (no habla en la escuela pero sí en casa). Su intervención inicial es:",
        opciones: [
            "Obligarlo a hablar frente a todos para que pierda el miedo.",
            "Crear un ambiente de confianza, usar comunicación no verbal y coordinar con un especialista externo para manejo de ansiedad.",
            "Ignorarlo hasta que decida hablar.",
            "Castigarlo sin merienda por no saludar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Guía de intervenciones psicopedagógicas. El mutismo selectivo es un trastorno de ansiedad y requiere empatía, no presión."
    },
    {
        id: 394,
        categoria: "Derecho a la Recreación",
        pregunta: "La directora decide convertir el patio de juegos en un parqueo para los maestros. Usted interviene alegando que:",
        opciones: [
            "Los carros se van a ensuciar.",
            "Se está violando el derecho al juego y esparcimiento de los niños (Ley 136-03) y el diseño curricular de Inicial.",
            "No hay problema, los niños pueden jugar en el aula.",
            "Solo si le dejan un espacio para su carro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 136-03. El espacio físico para el juego es una garantía del desarrollo infantil."
    },
    {
        id: 395,
        categoria: "Constitución (Igualdad)",
        pregunta: "El Artículo 39 de la Constitución prohíbe la discriminación. Si un centro rechaza a un niño por tener el cabello largo o ricitos, está:",
        opciones: [
            "Aplicando normas de higiene correctas.",
            "Incurriendo en un acto de discriminación ilegal que vulnera el derecho a la educación y la libre personalidad.",
            "Siguiendo las órdenes del Ministerio.",
            "Educando en valores tradicionales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Constitución Art. 39 y fallos del Tribunal Constitucional. El aspecto físico no puede ser barrera para la educación."
    },
    {
        id: 396,
        categoria: "Ética (Relación con Colegas)",
        pregunta: "Una colega psicóloga le pide que le pase las respuestas de su evaluación de desempeño por chat. Su respuesta debe ser:",
        opciones: [
            "Pasárselas para ser solidaria.",
            "Negarse, ya que la evaluación es personal, ética y busca reflejar la realidad profesional de cada uno.",
            "Cobrarle por las respuestas.",
            "Pasarle respuestas incorrectas a propósito."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Orden Departamental 22-2023. La integridad en los procesos de evaluación es un deber ético."
    },
    {
        id: 397,
        categoria: "Alfabetización (01-2023)",
        pregunta: "¿A qué edad promedio se espera que un niño en el sistema dominicano inicie formalmente el contacto con la cultura escrita a través de su nombre propio?",
        opciones: [
            "A los 10 años.",
            "Desde los 3 años (Nivel Inicial) de forma significativa y lúdica.",
            "Solo en la universidad.",
            "Cuando aprenda a hablar perfectamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ordenanza 01-2023. El nombre propio es la primera 'palabra con sentido' que el niño aprende a reconocer y producir."
    },
    {
        id: 398,
        categoria: "Ley 41-08 (Servicio al Ciudadano)",
        pregunta: "El principio de 'Cortesía' en la Ley 41-08 obliga a la psicóloga a:",
        opciones: [
            "Invitar a café a todos los que lleguen.",
            "Tratar con amabilidad, respeto y diligencia a los padres, estudiantes y compañeros.",
            "No decir nunca que 'no' a un favor.",
            "Sonreír aunque no quiera."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Legal: Ley 41-08. El buen trato es un deber del servidor público."
    },
    {
        id: 399,
        categoria: "Evaluación de Desempeño (Meta)",
        pregunta: "La meta de que usted alcance el nivel de 'Excelente' en esta evaluación es:",
        opciones: [
            "Ganar más dinero solamente.",
            "Garantizar que los niños del Nivel Inicial reciban el mejor apoyo psicopedagógico posible para su éxito escolar.",
            "Ser la favorita del Distrito.",
            "Que le den más vacaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Referencia: Visión del MINERD. El centro de todo el sistema es el aprendizaje y bienestar del estudiante."
    },
    {
        id: 400,
        categoria: "Reflexión Profesional",
        pregunta: "Al terminar estas 400 preguntas, la psicóloga escolar demuestra:",
        opciones: [
            "Que tiene mucha paciencia.",
            "Un alto nivel de compromiso con su actualización legal, curricular y ética para su evaluación de desempeño.",
            "Que sabe usar mucho la computadora.",
            "Que ya no necesita estudiar más nunca."
        ],
        respuestaCorrecta: 1,
        explicacion: "La preparación constante es la marca de un profesional de excelencia. ¡Mucho éxito en su evaluación!"
    },



    {
        id: 401,
        categoria: "Protección",
        pregunta: "Durante la jornada escolar en un centro de educación primaria del Distrito 15-03, el psicólogo escolar observa que una estudiante de 3.° grado presenta hematomas recurrentes en los brazos y una actitud de retraimiento sistemático. Al indagar con la docente, esta reporta que la niña ha manifestado que 'en casa a veces le pegan fuerte'. El psicólogo escolar debe, como primera acción protocolaria:",
        opciones: [
            "Documentar la situación en el expediente psicosocial de la estudiante, notificar de inmediato al director/a del centro educativo y activar la Ruta Crítica de Protección, coordinando la comunicación con la Procuraduría de NNA o el CONANI según corresponda.",
            "Citar a los padres o tutores para una entrevista de orientación familiar en el centro educativo y ofrecer consejería psicológica a la niña antes de elevar el caso a ninguna instancia superior.",
            "Remitir el caso directamente al Equipo de Gestión del Centro (EGC) para que este decida, en reunión ordinaria, si se activa o no el protocolo de protección.",
            "Contactar personalmente al CONANI sin informar previamente al director/a del plantel, a fin de agilizar la intervención y evitar posibles filtros institucionales."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica para la Prevención y Atención de la Violencia (GRC-MINERD), Fase I: Detección y Notificación Interna; Ley 136-03, Art. 48 (obligación de denuncia) y Art. 56 (protección inmediata). El psicólogo/a es mandatario/a en la detección, pero la acción protocolaria primaria es la notificación al director/a del centro como autoridad máxima del plantel, quien activa el mecanismo institucional hacia las instancias externas. Omitir al director constituye ruptura del conducto regular establecido en el MOCP-2015, Sección 4.2."
    },

    {
        id: 402,
        categoria: "NEAE",
        pregunta: "En un centro educativo del nivel primario, la maestra de 1.° grado refiere al Centro de Orientación y Psicología (COP) a un estudiante de 6 años porque 'no aprende a leer como los demás y se distrae constantemente'. El psicólogo/a escolar, tras aplicar las herramientas de cribado disponibles en el centro, identifica indicadores compatibles con una posible necesidad específica de aprendizaje. La acción subsiguiente que corresponde al perfil del psicólogo/a escolar, conforme a la normativa vigente, es:",
        opciones: [
            "Elaborar el informe psicológico preliminar con los hallazgos del cribado, presentarlo al director/a y al docente, y coordinar con el Equipo de Apoyo a la Inclusión (EADI) del Distrito Educativo la evaluación psicopedagógica interdisciplinaria para determinar el tipo de apoyo requerido.",
            "Diagnosticar al estudiante con un trastorno específico del aprendizaje y emitir las adecuaciones curriculares correspondientes para su implementación inmediata por parte del docente de aula.",
            "Remitir al estudiante directamente a un neurólogo o psiquiatra privado, informando a la familia sobre la necesidad de una evaluación médica especializada como condición previa a cualquier intervención escolar.",
            "Implementar un plan de apoyo psicopedagógico individual de manera autónoma dentro del COP, sin requerir la participación del EADI distrital, dado que la detección fue realizada por el propio psicólogo/a del centro."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024, Art. 12 (proceso de evaluación inclusiva multidisciplinaria) y Art. 18 (rol del EADI en la evaluación de NEAE); LPOP-2024, Componente 2 (Apoyo Psicopedagógico), Protocolo de Detección Temprana. El psicólogo/a escolar no tiene competencia para diagnosticar trastornos clínicos ni para emitir adecuaciones curriculares de forma unilateral. Su función es el cribado, la documentación y la articulación con el EADI distrital, que es la instancia técnica habilitada para la evaluación interdisciplinaria según la O05-2024."
    },

    {
        id: 403,
        categoria: "Clima Escolar",
        pregunta: "El director/a de un centro de educación inicial reporta al psicólogo/a escolar que se han registrado tres incidentes en dos semanas en los que un grupo de niños de 5 años excluye sistemáticamente a un compañero durante el recreo, utilizando lenguaje descalificador. Los docentes de aula manifiestan sentirse sin herramientas para abordar la situación. La intervención del psicólogo/a escolar que se ajusta al protocolo institucional vigente es:",
        opciones: [
            "Diseñar e implementar, en coordinación con el director/a y los docentes involucrados, un plan de intervención para el mejoramiento del clima escolar que incluya estrategias de convivencia para el aula, registro de incidentes y seguimiento sistemático, conforme a los lineamientos del COP.",
            "Suspender a los estudiantes agresores por el tiempo reglamentario y convocar a sus padres para una sesión de orientación correctiva, como medida de choque para detener el comportamiento.",
            "Aplicar una batería de evaluación psicológica individual a cada uno de los niños involucrados para determinar perfiles de riesgo antes de diseñar cualquier tipo de intervención grupal.",
            "Elevar el caso directamente a la Dirección Regional de Educación, solicitando la intervención de un equipo técnico externo al centro, dado que la situación excede las competencias del COP."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: MOCP-2015, Sección 6.3 (Función del COP en la Promoción del Clima Escolar); LPOP-2024, Componente 3 (Convivencia y Clima Escolar), que establece que el psicólogo/a escolar debe coordinar con la dirección del centro las acciones de mejora del clima, sin desplazar al docente sino fortaleciéndole. La suspensión es medida disciplinaria que no compete al psicólogo/a. La evaluación individual como paso previo obligatorio no está indicada para incidentes de convivencia grupal a este nivel."
    },

    {
        id: 404,
        categoria: "Protección",
        pregunta: "Un docente de 4.° grado informa al psicólogo/a escolar que un estudiante de 9 años le confesó que un adulto de su vecindario 'le toca de formas que no le gustan' y le ha pedido que no lo cuente. El estudiante está presente en el COP y se muestra angustiado. El psicólogo/a escolar debe:",
        opciones: [
            "Garantizar la contención emocional inmediata del estudiante, comunicar el hecho al director/a del centro de forma inmediata, documentar lo manifestado con las palabras exactas del niño sin presionarlo a ampliar el relato, y activar la Ruta Crítica de Protección conforme al GRC-MINERD.",
            "Iniciar una sesión de psicoterapia con el estudiante para procesar el trauma, asegurando la confidencialidad de lo relatado hasta tanto se tenga mayor certeza sobre los hechos.",
            "Llamar al tutor legal del estudiante para que esté presente durante la entrevista y así obtener mayor información antes de proceder a cualquier notificación institucional.",
            "Orientar al docente para que conduzca él mismo una entrevista más detallada con el estudiante, registre la información y la presente por escrito al psicólogo/a al día siguiente."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: GRC-MINERD, Fase I (Detección), principio de no re-victimización: está expresamente prohibido someter al niño/a a múltiples entrevistas o presionarlo a ampliar el relato. Ley 136-03, Art. 48: la sospecha de abuso sexual infantil activa la obligación inmediata de notificación. MOCP-2015, Sección 4.3: el psicólogo/a no inicia psicoterapia de trauma en el entorno escolar ni llama al tutor cuando este pudiera ser el agresor o estar vinculado. La notificación al director/a es el paso institucional inmediato obligatorio."
    },

    {
        id: 405,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En un centro de educación primaria, una docente de 2.° grado solicita orientación al psicólogo/a escolar porque un estudiante de 7 años presenta dificultades sostenidas en la adquisición de la lectoescritura, pese a haber recibido apoyo dentro del aula. El psicólogo/a escolar ha realizado el cribado correspondiente y no encuentra indicadores de NEAE de carácter clínico. ¿Cuál es el nivel de intervención que corresponde al psicólogo/a escolar en esta fase?",
        opciones: [
            "Brindar orientación técnica al docente sobre estrategias pedagógicas diferenciadas para el área de lectoescritura, registrar el caso en el sistema de seguimiento del COP y establecer un plan de monitoreo conjunto con el docente, sin desplazar la responsabilidad pedagógica del aula.",
            "Asumir la intervención directa y exclusiva con el estudiante mediante sesiones individuales de refuerzo de lectoescritura dentro del COP, retirándolo del aula durante las horas de Lengua Española.",
            "Declarar el caso cerrado dado que el cribado no arrojó indicadores clínicos, e informar a la docente que el seguimiento corresponde exclusivamente al ámbito pedagógico.",
            "Solicitar al director/a la aplicación de una evaluación psicométrica formal (test estandarizado de CI) para descartar discapacidad intelectual antes de ofrecer cualquier tipo de orientación al docente."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: LPOP-2024, Componente 2, Nivel I de Intervención: cuando no se identifican NEAE de carácter clínico, el psicólogo/a actúa como orientador técnico del docente, no como sustituto del proceso pedagógico. MOCP-2015, Sección 5.1: la función del COP es de apoyo y orientación al docente, no de extracción del estudiante del aula regular. La aplicación de tests psicométricos de CI no es la respuesta protocolaria de primera línea ante dificultades de aprendizaje sin indicadores clínicos."
    },

    {
        id: 406,
        categoria: "Protección",
        pregunta: "El psicólogo/a escolar de un centro del nivel primario recibe una llamada de un familiar que no es el tutor legal registrado, solicitando información sobre el expediente psicológico de una estudiante de 8 años, argumentando que es 'la abuela que la cría'. La estudiante tiene un tutor legal debidamente registrado en el centro. El psicólogo/a escolar debe:",
        opciones: [
            "Informar al solicitante que el expediente psicológico es un documento de carácter confidencial; que únicamente puede ser accedido por el tutor legal debidamente registrado, instancias judiciales competentes o autoridades educativas habilitadas; y que para cualquier gestión debe acudir al centro con la documentación legal correspondiente.",
            "Proveer la información solicitada dado que la abuela manifiesta ser quien cuida a la niña en la práctica, aplicando el principio de interés superior del niño y la necesidad de involucrar a la familia en el proceso.",
            "Solicitar autorización verbal al director/a del centro para compartir la información con la abuela, registrando la llamada en el libro de novedades del COP.",
            "Consultar con la estudiante si autoriza que se comparta su información con la abuela antes de tomar una decisión sobre la solicitud."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: MOCP-2015, Sección 7.1 (Confidencialidad del Expediente Psicológico): el expediente es de acceso restringido y su divulgación a personas no autorizadas legalmente constituye una falta grave. Ley 136-03, Art. 15: la representación legal del NNA corresponde al tutor legalmente reconocido. El principio de interés superior no opera como habilitante para saltarse el marco legal de confidencialidad. La autorización verbal del director no suple el requisito de acreditación legal del solicitante."
    },

    {
        id: 407,
        categoria: "NEAE",
        pregunta: "Un estudiante de 6 años del nivel inicial ha sido evaluado por el EADI distrital y presenta un diagnóstico de Trastorno del Espectro Autista (TEA) nivel 1. El informe del EADI recomienda la aplicación de adecuaciones curriculares de acceso. La maestra del aula solicita al psicólogo/a escolar que le indique qué adecuaciones debe aplicar. ¿Cuál es la actuación correcta del psicólogo/a escolar?",
        opciones: [
            "Orientar a la docente sobre las adecuaciones de acceso recomendadas en el informe del EADI, explicar su fundamentación desde el enfoque inclusivo, y coordinar con la dirección del centro la inclusión de dichas adecuaciones en el Plan Individual de Ajustes Razonables (PIAR) del estudiante, conforme a la O05-2024.",
            "Redactar directamente el PIAR del estudiante de forma autónoma y entregarlo firmado a la docente para su implementación inmediata, dado que el psicólogo/a es el profesional más calificado del centro para esta función.",
            "Informar a la docente que las adecuaciones curriculares son competencia exclusiva del EADI distrital, y que el centro debe esperar una nueva visita de dicho equipo antes de implementar ningún ajuste.",
            "Recomendar a la familia que el estudiante sea trasladado a un centro de educación especial, dado que el TEA requiere una atención que excede la capacidad del aula regular."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024, Art. 22 (PIAR como instrumento de planificación inclusiva) y Art. 14 (responsabilidad compartida del centro educativo en la implementación de adecuaciones). El PIAR es elaborado de forma colaborativa entre el centro y el EADI, no de forma unilateral por el psicólogo/a. La O05-2024, Art. 5, establece el derecho a la educación inclusiva en el centro regular como principio rector; la derivación a educación especial no es la respuesta protocolaria ante un TEA nivel 1."
    },

    {
        id: 408,
        categoria: "Clima Escolar",
        pregunta: "El psicólogo/a escolar de un centro de primaria identifica, mediante la revisión del registro de incidentes, que en los últimos dos meses se han reportado ocho casos de agresión física entre estudiantes de 5.° y 6.° grado, todos ocurridos en el área de recreo. El director/a no ha convocado al EGC para tratar la situación. ¿Cuál es la actuación que corresponde al psicólogo/a escolar?",
        opciones: [
            "Presentar al director/a un informe técnico sistematizado de los incidentes registrados, con análisis de patrones y recomendaciones de intervención, solicitando formalmente la convocatoria del EGC para la elaboración de un plan de mejora del clima escolar, conforme al MOCP-2015.",
            "Convocar directamente al EGC sin la mediación del director/a, dado que la situación representa un riesgo para la integridad de los estudiantes y requiere acción inmediata.",
            "Implementar de forma autónoma un programa de mediación entre pares, iniciando sesiones grupales con los estudiantes involucrados sin requerir autorización formal de la dirección del centro.",
            "Reportar la situación directamente al Distrito Educativo, omitiendo al director/a, por considerar que la inacción de este constituye una omisión de sus deberes directivos."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: MOCP-2015, Sección 3.2 (Relación del COP con la Dirección del Centro): el psicólogo/a actúa en función de apoyo técnico a la dirección; no tiene potestad para convocar al EGC ni para reportar al Distrito sin agotar el conducto interno. LPOP-2024, Componente 3: el informe técnico al director/a es el mecanismo formal establecido para escalar situaciones de clima escolar. Saltar al Distrito sin informar al director constituye ruptura del conducto regular, sancionable conforme al EDD."
    },

    {
        id: 409,
        categoria: "Protección",
        pregunta: "Una estudiante de 11 años del 5.° grado solicita hablar con el psicólogo/a escolar en privado. Durante la entrevista, revela que está siendo víctima de acoso sexual por parte de un docente del centro, y suplica que 'no se lo digan a nadie porque tiene miedo'. El psicólogo/a escolar debe:",
        opciones: [
            "Contener emocionalmente a la estudiante, explicarle de forma comprensible que su protección está por encima de la confidencialidad, notificar de inmediato al director/a (o a la máxima autoridad disponible si el implicado es el propio director/a), activar la Ruta Crítica de Protección y preservar el relato sin presionar a la estudiante a repetirlo.",
            "Mantener la confidencialidad de lo relatado en respeto a la solicitud explícita de la estudiante, y trabajar con ella en sesiones sucesivas para fortalecer su capacidad de denuncia autónoma ante las instancias competentes.",
            "Informar al propio docente señalado sobre la queja de la estudiante para que pueda ejercer su derecho a la defensa antes de que el caso sea elevado a la dirección del centro.",
            "Notificar a los padres o tutores de la estudiante y dejar en manos de estos la decisión sobre si procede o no la denuncia formal ante las autoridades competentes."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: GRC-MINERD, Ruta Crítica (Caso de violencia sexual por parte de personal del centro): la confidencialidad no aplica cuando está en riesgo la integridad del NNA. Ley 136-03, Art. 48: la notificación es obligatoria e inmediata. GRC-MINERD: cuando el presunto agresor es miembro del personal, la notificación se eleva a la instancia inmediatamente superior al señalado (si es el director/a, se notifica al Distrito). Informar al agresor constituye una violación grave del protocolo y pone en riesgo a la víctima."
    },

    {
        id: 410,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El psicólogo/a escolar de un centro primario recibe la solicitud de una docente para que intervenga con un estudiante de 8 años que 'llora todos los días sin causa aparente, no quiere comer en el recreo y se ha vuelto muy callado en las últimas tres semanas'. La docente indica que antes era un niño muy activo. El psicólogo/a escolar, como primera acción protocolaria, debe:",
        opciones: [
            "Realizar una entrevista de exploración individual con el estudiante en el COP, aplicar las herramientas de cribado de bienestar emocional disponibles, entrevistar a la docente y al tutor legal para recoger información contextual, y determinar si el caso requiere intervención en el COP, derivación a salud mental o activación de la Ruta de Protección.",
            "Diagnosticar al estudiante con un cuadro depresivo y remitirlo de inmediato a un psiquiatra infantil, informando al director/a sobre la gravedad del caso.",
            "Orientar a la docente para que cambie la ubicación del estudiante en el aula y le asigne un compañero de apoyo, como estrategia de ajuste ambiental antes de realizar cualquier evaluación formal.",
            "Citar a los padres o tutores para una reunión de orientación y psicoeducación sobre el desarrollo emocional infantil, sin entrevistar previamente al estudiante para no generarle mayor angustia."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: MOCP-2015, Sección 5.2 (Proceso de Atención Individual en el COP): el primer paso ante una referencia por cambio conductual significativo es la entrevista de exploración y el cribado multiaxial (estudiante, docente, familia). LPOP-2024, Protocolo de Atención Emocional: el psicólogo/a escolar no emite diagnósticos clínicos; su función es el cribado, la orientación y la derivación fundamentada cuando corresponda. Actuar sin evaluación previa (opciones C y D) vulnera el protocolo de atención."
    },

    {
        id: 411,
        categoria: "NEAE",
        pregunta: "En un centro del nivel primario, los padres de una estudiante de 9 años con discapacidad visual (baja visión) acuden al COP solicitando que su hija sea exonerada de las evaluaciones escritas de manera permanente. El psicólogo/a escolar debe:",
        opciones: [
            "Informar a los padres que las adecuaciones evaluativas para estudiantes con discapacidad visual se determinan mediante la evaluación del EADI distrital y se formalizan en el PIAR; orientarlos para solicitar dicha evaluación a través del director/a del centro, conforme a la Ordenanza 05-2024.",
            "Aprobar la exoneración solicitada por los padres de forma inmediata, emitiendo una resolución del COP que exima a la estudiante de evaluaciones escritas, en aplicación del principio de ajustes razonables.",
            "Informar a los padres que las exoneraciones de evaluaciones no están contempladas en la normativa dominicana de educación inclusiva, y que la estudiante debe completar todas las evaluaciones en las mismas condiciones que sus compañeros.",
            "Elevar la solicitud de los padres directamente al Departamento de Currículo de la Regional de Educación, omitiendo la participación del EADI distrital, para agilizar la respuesta a la familia."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024, Art. 19 (adecuaciones de acceso y evaluativas): las adecuaciones evaluativas son determinadas técnicamente por el EADI y formalizadas en el PIAR, no por decisión unilateral del COP ni por solicitud directa de los padres. Art. 7: los ajustes razonables deben ser técnicamente fundamentados. El psicólogo/a orienta a la familia sobre el proceso formal, sin aprobar ni negar de forma autónoma lo que corresponde a una instancia técnica-interdisciplinaria."
    },

    {
        id: 412,
        categoria: "Clima Escolar",
        pregunta: "Un grupo de padres y madres del nivel inicial acude al COP para quejarse de que una maestra 'grita mucho a los niños y los pone en el rincón castigados por horas'. El psicólogo/a escolar escucha los testimonios. ¿Cuál es la actuación que se corresponde con el conducto regular establecido?",
        opciones: [
            "Escuchar y registrar formalmente los testimonios de los padres; informarles que el canal institucional para este tipo de situación es la dirección del centro; elaborar un informe técnico confidencial dirigido al director/a con los hallazgos y recomendaciones; y, si los hechos descritos configuran maltrato infantil, activar la Ruta Crítica de Protección.",
            "Convocar de manera inmediata a la docente señalada para una entrevista de orientación y retroalimentación sobre prácticas pedagógicas adecuadas, resolviendo la situación dentro del COP sin elevar el caso a la dirección.",
            "Recomendar a los padres que presenten una denuncia formal ante el Distrito Educativo o la Procuraduría General de la República, dado que la situación descrita podría constituir maltrato institucional.",
            "Solicitar a los padres que aporten evidencias adicionales (videos, fotos) antes de proceder a cualquier tipo de registro o notificación institucional."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: MOCP-2015, Sección 4.1 (Recepción de Quejas y Situaciones de Protección): el COP recibe, registra y eleva al director/a; no tiene competencia sancionatoria sobre el personal docente. GRC-MINERD: si los hechos descritos configuran indicadores de maltrato institucional, se activa la Ruta Crítica independientemente de quien haga la denuncia. El EDD, Art. 97, establece que las medidas disciplinarias al personal corresponden a la instancia directiva y a la Junta de Docentes, no al psicólogo/a escolar."
    },

    {
        id: 413,
        categoria: "Protección",
        pregunta: "El psicólogo/a escolar recibe la visita de un funcionario de la Procuraduría Especializada para NNA quien solicita verbalmente el expediente psicológico de un estudiante del centro, en el marco de una investigación judicial en curso. El funcionario no presenta documentación escrita. El psicólogo/a escolar debe:",
        opciones: [
            "Informar al funcionario que la entrega de expedientes psicológicos a instancias externas requiere una solicitud escrita formal con membrete institucional, número de expediente judicial y firma del funcionario competente; comunicar de inmediato al director/a del centro; y no entregar ningún documento hasta que se cumpla el procedimiento legal establecido.",
            "Entregar el expediente al funcionario de la Procuraduría de forma inmediata, dado que se trata de una autoridad judicial competente cuya intervención está amparada por la Ley 136-03 en materia de protección de NNA.",
            "Contactar al padre o tutor legal del estudiante para obtener su autorización antes de entregar cualquier información al funcionario de la Procuraduría.",
            "Fotocopiar el expediente y entregarlo al funcionario, conservando los documentos originales en el COP como medida de resguardo institucional."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: MOCP-2015, Sección 7.1 (Confidencialidad y Entrega de Expedientes): la entrega de expedientes a instancias externas, incluyendo instancias judiciales, requiere documentación escrita formal y debe canalizarse a través de la dirección del centro. Ley 136-03, Art. 125: las autoridades judiciales pueden acceder a información sobre NNA mediante los procedimientos legales formales. La entrega sin documentación, aunque sea a una autoridad competente, constituye una irregularidad procedimental que puede comprometer tanto la investigación como la institución."
    },

    {
        id: 414,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El psicólogo/a escolar de un centro primario identifica que cuatro estudiantes de 3.° grado presentan indicadores de ansiedad escolar relacionados con las evaluaciones. Decide diseñar una intervención. ¿Cuál es el formato de intervención que se ajusta a las funciones del COP según el MOCP-2015?",
        opciones: [
            "Diseñar un taller de técnicas de regulación emocional y manejo del estrés académico, de carácter grupal, coordinado con los docentes de aula para reforzar las estrategias en el contexto pedagógico, e informar al director/a sobre el plan antes de su implementación.",
            "Iniciar un proceso de psicoterapia cognitivo-conductual individual con cada uno de los cuatro estudiantes, con sesiones semanales de 45 minutos dentro del COP, durante el horario de clases.",
            "Remitir a los cuatro estudiantes a un psicólogo clínico externo para tratamiento de trastorno de ansiedad, dado que la intervención terapéutica de este tipo excede las competencias del COP.",
            "Aplicar de forma individual a cada estudiante el Inventario de Ansiedad de Beck (BAI) para cuantificar el nivel de afectación y determinar si amerita intervención dentro o fuera del centro."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: MOCP-2015, Sección 5.3 (Intervención Grupal en el COP): el COP está habilitado para desarrollar talleres y grupos de orientación de carácter preventivo y psicoeducativo. La psicoterapia clínica individual de larga duración no es la función del psicólogo/a escolar. LPOP-2024, Componente 2: la intervención grupal es el nivel preferencial para situaciones que afectan a múltiples estudiantes con características similares. La aplicación de instrumentos clínicos estandarizados de adultos (BAI) en estudiantes del nivel primario no está indicada en el protocolo escolar dominicano."
    },

    {
        id: 415,
        categoria: "NEAE",
        pregunta: "Los padres de un estudiante de 7 años con diagnóstico externo de TDAH (emitido por un médico particular) solicitan al psicólogo/a escolar que imparta instrucciones directas al docente de aula sobre cómo tratar a su hijo, presentando el diagnóstico médico como único fundamento. El psicólogo/a escolar debe:",
        opciones: [
            "Recibir y registrar el diagnóstico externo, explicar a los padres que para la formalización de apoyos escolares se requiere la evaluación del EADI distrital que valide y complemente el diagnóstico médico desde el ámbito educativo, e iniciar el proceso de referencia al EADI a través del director/a del centro.",
            "Aceptar el diagnóstico médico como suficiente y emitir de inmediato un plan de ajustes pedagógicos para el docente de aula, dado que el diagnóstico clínico es el insumo principal requerido por la normativa.",
            "Informar a los padres que los diagnósticos médicos privados no tienen validez en el sistema educativo público dominicano y que deben obtener un diagnóstico emitido por un centro de salud del Estado.",
            "Derivar el caso directamente a la Dirección Regional de Educación Inclusiva para que esta determine, sin intervención del EADI distrital, qué apoyos debe recibir el estudiante en el centro."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024, Art. 11 (Proceso de Evaluación para la Determinación de NEAE): el diagnóstico médico externo es un insumo relevante pero no suficiente; la evaluación psicopedagógica del EADI es la que determina el tipo y nivel de apoyos en el contexto escolar. Art. 13: el psicólogo/a escolar no puede emitir planes de apoyo individualizados de forma autónoma sin la participación del EADI cuando se trata de NEAE formalmente diagnosticadas. El diagnóstico médico privado tiene validez como insumo, pero no activa automáticamente los mecanismos escolares sin el proceso de evaluación interdisciplinaria."
    },

    {
        id: 416,
        categoria: "Protección",
        pregunta: "Una estudiante de 10 años del 4.° grado acude al COP llorando y refiere que un compañero de clase le envió por el grupo de WhatsApp de la sección fotografías con contenido sexual y mensajes amenazantes, indicándole que si lo reporta 'le irá peor'. El psicólogo/a escolar debe identificar esta situación como:",
        opciones: [
            "Un caso de ciberacoso con componente de amenaza y posible distribución de contenido sexual que involucra a un menor; debe ser documentado preservando las evidencias (capturas de pantalla si la estudiante las tiene), notificado al director/a del centro de forma inmediata, y activar la Ruta Crítica de Protección con posible comunicación al CONANI y/o a las autoridades competentes.",
            "Un conflicto interpersonal entre pares propio de la edad, que debe ser abordado mediante una sesión de mediación entre la víctima y el agresor dentro del COP, sin necesidad de elevar el caso a la dirección.",
            "Un asunto que compete exclusivamente a las familias de los involucrados, dado que el incidente ocurrió fuera del entorno escolar físico; el psicólogo/a debe orientar a la estudiante a reportarlo directamente a sus padres.",
            "Una situación de acoso escolar convencional que debe ser registrada en el libro de incidentes del centro y abordada mediante el protocolo estándar de convivencia, sin activar la Ruta Crítica de Protección."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: GRC-MINERD, Sección de Violencia Digital: el ciberacoso con contenido sexual que involucra a NNA activa la Ruta Crítica independientemente del espacio físico donde ocurrió. Ley 136-03, Art. 56: la amenaza y el contenido sexual hacia un menor son situaciones de protección inmediata. El hecho de que ocurra en entornos digitales no exime al centro educativo de su responsabilidad de activar los mecanismos de protección. La mediación entre víctima y agresor en casos de acoso sexual está expresamente contraindicada en el GRC-MINERD."
    },

    {
        id: 417,
        categoria: "Clima Escolar",
        pregunta: "Al inicio del año escolar, el psicólogo/a escolar de un centro primario detecta, mediante la revisión del diagnóstico institucional, que el 40% de los docentes no conoce el protocolo de referencia al COP. El director/a solicita al psicólogo/a que aborde esta situación. La intervención más pertinente conforme al MOCP-2015 es:",
        opciones: [
            "Diseñar e implementar, en el marco del plan de trabajo del COP, una jornada de sensibilización y capacitación dirigida al colectivo docente sobre los servicios del COP, los criterios de referencia y los procedimientos de seguimiento, coordinada con la dirección del centro y registrada en el plan operativo anual.",
            "Elaborar y distribuir individualmente a cada docente un instructivo escrito sobre el protocolo de referencia al COP, sin requerir jornadas presenciales que afecten el tiempo pedagógico.",
            "Solicitar al Distrito Educativo que envíe un técnico de orientación para impartir la capacitación a los docentes, dado que la formación del personal docente excede las funciones del psicólogo/a escolar.",
            "Incorporar en el expediente de cada docente una nota sobre su desconocimiento del protocolo, como insumo para la evaluación docente anual, y dejar la capacitación para el segundo semestre."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: MOCP-2015, Sección 3.4 (Función Preventiva y de Sensibilización del COP): una de las funciones explícitas del COP es la orientación y sensibilización de la comunidad educativa, incluido el personal docente, sobre los servicios y procedimientos del Centro. LPOP-2024, Componente 1 (Prevención): la capacitación al colectivo docente es una acción de prevención primaria que corresponde al plan operativo del COP. La incorporación de notas en expedientes docentes como medida de respuesta a una brecha de capacitación constituye una práctica administrativamente improcedente y éticamente cuestionable."
    },

    {
        id: 418,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El director/a de un centro del nivel inicial solicita al psicólogo/a escolar que elabore el informe psicológico anual de todos los estudiantes del nivel, para ser incluido en los expedientes académicos individuales. El centro tiene matrícula de 180 estudiantes en el nivel inicial. El psicólogo/a escolar debe:",
        opciones: [
            "Informar al director/a que el informe psicológico individual es un instrumento que se genera a partir de un proceso de evaluación con referencia específica, no de forma universal y sistemática para toda la matrícula; y proponer en su lugar la inclusión en el plan del COP de acciones de seguimiento grupal y detección temprana conforme al MOCP-2015.",
            "Proceder a elaborar los 180 informes psicológicos individuales solicitados, priorizando los estudiantes que los docentes identifican como más vulnerables y completando los restantes de forma progresiva durante el año.",
            "Elaborar un informe psicológico grupal por sección que sintetice el perfil general de los estudiantes de cada aula, como alternativa viable a los informes individuales, y entregarlo al director/a para su inclusión en los expedientes.",
            "Solicitar al Distrito Educativo la asignación de un psicólogo/a adicional para el centro, dado que la carga de 180 informes supera la capacidad operativa establecida para un solo profesional."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: MOCP-2015, Sección 6.1 (Uso del Informe Psicológico): el informe psicológico es un instrumento técnico que se genera como resultado de un proceso evaluativo con referencia justificada, no es un documento de elaboración universal y rutinaria para toda la matrícula. Su elaboración masiva sin referencia clínica ni psicoeducativa vulnera los principios de proporcionalidad y confidencialidad. LPOP-2024: el trabajo preventivo universal se instrumenta mediante acciones grupales y de seguimiento, no mediante evaluaciones individuales masivas."
    },

    {
        id: 419,
        categoria: "Protección",
        pregunta: "El psicólogo/a escolar ha activado la Ruta Crítica de Protección ante un caso de presunto maltrato físico de un estudiante de 3.° grado. Dos semanas después de la notificación inicial, el director/a informa que la familia del estudiante ha llegado a un 'acuerdo' con el docente señalado y que 'ya el asunto está resuelto'. El psicólogo/a escolar, ante esta información, debe:",
        opciones: [
            "Informar al director/a que una vez activada la Ruta Crítica de Protección, el proceso institucional y legal no puede ser cerrado por acuerdo entre las partes al nivel del centro educativo; documentar la situación; y comunicar el estado del caso a la instancia del Distrito Educativo que esté dando seguimiento, conforme al GRC-MINERD.",
            "Aceptar el cierre del caso dado que el director/a, como autoridad máxima del centro, tiene potestad para resolver institucionalmente los conflictos entre los miembros de la comunidad educativa.",
            "Citar nuevamente al estudiante para una entrevista individual de cierre, y si este manifiesta que ya 'está bien', documentar el alta y cerrar el expediente de protección.",
            "Solicitar a la familia que firme un documento de desistimiento de la queja y archivar el caso, garantizando que el acuerdo entre las partes quede debidamente registrado en el COP."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: GRC-MINERD, Fase de Seguimiento: una vez activada la Ruta Crítica, el caso pasa a seguimiento institucional por las instancias competentes (Distrito, CONANI, Procuraduría). Ley 136-03, Art. 48: la obligación de denuncia y seguimiento es irrenunciable para el funcionario que la activó. Un 'acuerdo' entre la familia y el agresor al nivel del centro no tiene efecto extintivo sobre el proceso de protección. Cerrar el caso a instancias del director/a o de la familia, sin que las instancias externas competentes lo validen, constituye una obstrucción del proceso de protección."
    },

    {
        id: 420,
        categoria: "NEAE",
        pregunta: "Una docente de 3.° grado solicita al psicólogo/a escolar que 'evalúe' a un estudiante de 8 años porque 'no puede estar quieto y molesta mucho en clase'. No hay referencia escrita ni documentación previa de la situación. El psicólogo/a escolar debe, como primer paso protocolario:",
        opciones: [
            "Solicitar a la docente que complete el formulario de referencia oficial del COP, con descripción detallada de los comportamientos observados, frecuencia, contextos y acciones ya intentadas en el aula; y a partir de esa referencia formal, programar la entrevista inicial con el estudiante y la familia.",
            "Llamar al estudiante al COP de forma inmediata y aplicar una batería de observación conductual para determinar si hay indicadores de TDAH u otro trastorno del neurodesarrollo, reportando los resultados a la docente el mismo día.",
            "Informar a la docente que la descripción presentada no justifica una evaluación psicológica formal, y recomendarle estrategias de manejo conductual en el aula para implementar de manera autónoma.",
            "Notificar a los padres del estudiante sobre la solicitud de evaluación de la docente y obtener su consentimiento informado antes de recibir formalmente la referencia del COP."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: MOCP-2015, Sección 5.1 (Proceso de Referencia al COP): toda atención del COP debe iniciarse mediante referencia formal documentada, que constituye el insumo técnico mínimo para iniciar el proceso. Sin referencia escrita, el psicólogo/a no puede iniciar una evaluación formal. Este paso garantiza que la intervención sea pertinente, documentada y trazable. El consentimiento informado de la familia es un paso subsiguiente, una vez recibida y valorada la referencia formal. Actuar sin referencia escrita vulnera el protocolo de atención establecido en el MOCP-2015."
    },


    {
        id: 401,
        categoria: "Protección",
        pregunta: "Durante el receso, una docente de Nivel Inicial reporta al Departamento de Orientación y Psicología que un estudiante de 5 años presenta hematomas en patrón circular en los antebrazos. Al ser abordado, el menor indica de forma evasiva que 'se cayó'. De acuerdo con la Guía de Ruta Crítica, ¿cuál es el procedimiento administrativo inmediato?",
        opciones: [
            "Citar a los progenitores con carácter de urgencia para confrontarlos sobre las marcas físicas del menor.",
            "Remitir al estudiante a la unidad de salud pública más cercana para una evaluación médico-legal de carácter privado.",
            "Notificar a la Dirección del centro y proceder con la denuncia inmediata ante la fiscalía de NNA o el CONANI.",
            "Realizar una evaluación psicológica profunda al menor para determinar indicadores clínicos de abuso antes de emitir un informe."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica para la Prevención y Atención de la Violencia. Ante la sospecha de abuso físico (marcas no accidentales), la escuela debe proceder con la denuncia inmediata sin realizar diagnósticos clínicos previos ni confrontar a los tutores, cumpliendo con la Ley 136-03."
    },
    {
        id: 402,
        categoria: "NEAE",
        pregunta: "Un docente de 2do grado de Nivel Primario remite una solicitud formal para la exclusión de un estudiante con diagnóstico de Trastorno del Espectro Autista (TEA), argumentando disrupción en el ritmo académico del grupo clase. Conforme a la Ordenanza 05-2024, ¿qué acción institucional procede?",
        opciones: [
            "Asesorar al docente en el diseño y aplicación de Ajustes Curriculares Individualizados (ACI) para garantizar el acceso al currículo.",
            "Recomendar la transferencia inmediata del estudiante a un Centro de Educación Especial para garantizar su derecho a la educación.",
            "Emitir un informe solicitando la reducción del horario de permanencia del estudiante en el recinto escolar.",
            "Exigir a los tutores la contratación de una maestra sombra como prerrequisito para la continuidad en el aula regular."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024 sobre los Lineamientos para la Educación Inclusiva. El sistema educativo establece que la respuesta a la diversidad se ejecuta mediante ajustes curriculares y apoyos en el aula regular, estando terminantemente prohibida la exclusión o el condicionamiento por discapacidad."
    },
    {
        id: 403,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En la revisión del Sistema de Información para la Gestión Escolar (SIGERD), se evidencia que múltiples estudiantes de 3er grado de Primaria no han consolidado la alfabetización inicial. Según los Lineamientos del Proceso de Orientación y Psicología (2023-2024), ¿cuál es la intervención técnica requerida?",
        opciones: [
            "Asumir la enseñanza directa de lectoescritura mediante la extracción de los estudiantes durante el horario de tutoría.",
            "Aplicar baterías de pruebas psicométricas estandarizadas a toda la matrícula del grado para clasificar el nivel cognitivo.",
            "Articular con el equipo docente la identificación de barreras al aprendizaje y acompañar en el diseño de estrategias de apoyo psicopedagógico en el aula.",
            "Gestionar la remisión masiva de los estudiantes rezagados al Centro de Atención a la Diversidad (CAD) del Distrito Educativo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024). El rol del profesional es el acompañamiento y asesoría al docente para mitigar barreras, no sustituir la función pedagógica de alfabetización ni patologizar el rezago académico."
    },
    {
        id: 404,
        categoria: "Clima Escolar",
        pregunta: "Un estudiante de 6to grado de Nivel Primario ha incurrido en una falta calificada como 'grave' en las Normas del Sistema Educativo. La Dirección del centro instruye la separación definitiva del recinto. ¿Cuál es el dictamen técnico que debe emitir el psicólogo escolar?",
        opciones: [
            "Avalar la separación definitiva argumentando la necesidad de salvaguardar el orden y la disciplina del resto de la población estudiantil.",
            "Gestionar el traslado del estudiante a la modalidad de educación básica de adultos (PREPARA) como medida de contingencia.",
            "Suspender al estudiante de manera indefinida hasta que los tutores presenten constancia de intervención psiquiátrica externa.",
            "Oponerse a la separación definitiva, proponiendo medidas socioeducativas que garanticen el debido proceso y la permanencia en el sistema educativo."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Normativa REAL: Ley 136-03 y Normas del Sistema de Convivencia del MINERD. El derecho a la educación es inalienable. Las medidas disciplinarias deben tener un enfoque formativo y restituir derechos, estando estrictamente prohibida la expulsión definitiva o el abandono del debido proceso."
    },
    {
        id: 405,
        categoria: "Protección",
        pregunta: "El centro educativo recibe una notificación judicial sobre una orden de alejamiento en contra del progenitor de una estudiante de Nivel Inicial. Al concluir la jornada, el individuo se presenta exigiendo el retiro de la menor. Según el Manual Operativo (2015), ¿cuál es el protocolo a seguir?",
        opciones: [
            "Ejecutar la entrega de la menor condicionado a la firma de un acta de responsabilidad civil ante la Dirección.",
            "Denegar el egreso de la menor con el individuo, resguardarla en el centro y notificar de inmediato al Ministerio Público y a la madre/tutora.",
            "Facilitar un espacio de mediación dentro de las instalaciones para que ambos progenitores alcancen un acuerdo transitorio.",
            "Autorizar la salida si el progenitor figura como responsable financiero en los registros de inscripción del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo de los Centros de Orientación y Psicología (2015). El centro asume la corresponsabilidad en la protección integral del NNA, teniendo carácter vinculante acatar las disposiciones judiciales para evitar vulneraciones de derechos e integridad."
    },
    {
        id: 406,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El Equipo de Gestión consolida informes que evidencian un declive generalizado en la motivación académica en el segundo ciclo de Primaria. ¿Qué línea de intervención es pertinente según los Lineamientos 2023-2024?",
        opciones: [
            "Remitir oficios de amonestación a las familias de los estudiantes con desempeño académico deficiente.",
            "Someter a evaluación clínica individualizada a todos los estudiantes para descartar Trastornos de Ansiedad y Depresión.",
            "Diseñar y ejecutar programas preventivos sobre hábitos de estudio y construcción del proyecto de vida adaptados a la etapa evolutiva.",
            "Solicitar formalmente la sustitución del personal docente asignado argumentando carencia de competencias didácticas."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024). La función preventiva y de desarrollo exige abordar las necesidades de motivación escolar desde intervenciones grupales y programas formativos integrales."
    },
    {
        id: 407,
        categoria: "NEAE",
        pregunta: "Se procesa la matriculación en 1er grado de un NNA con discapacidad físico-motora usuario de silla de ruedas. La infraestructura del centro carece de accesibilidad arquitectónica. Conforme a la Ordenanza 05-2024, ¿cuál es la primera medida administrativa?",
        opciones: [
            "Proceder con la matriculación, reubicar el aula en la planta baja y emitir requerimiento formal al Distrito Educativo para las adecuaciones de infraestructura.",
            "Rechazar la inscripción argumentando imposibilidad material y direccionar a los tutores hacia un centro educativo privado con condiciones óptimas.",
            "Condicionar la inscripción a que la Asociación de Padres, Madres, Tutores y Amigos de la Escuela (APMAE) asuma la construcción de las rampas.",
            "Admitir al estudiante bajo la premisa estricta de que los tutores deben garantizar el traslado físico inter-plantas durante la jornada escolar."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024 (Educación Inclusiva). Es obligación del Estado proveer los ajustes razonables. El centro debe garantizar el acceso adaptando su propia logística (reubicando el espacio) y gestionar los recursos pertinentes vía Distrito Educativo."
    },
    {
        id: 408,
        categoria: "Clima Escolar",
        pregunta: "Se detecta la circulación de material multimedia de carácter denigrante hacia una docente de Nivel Primario, distribuido a través de una plataforma de mensajería (WhatsApp) administrada por estudiantes. Según la Guía de Ruta Crítica, ¿qué tipificación y proceder corresponde?",
        opciones: [
            "Se tipifica como conflicto interpersonal privado, requiriendo exclusivamente una intervención restaurativa entre la docente y los implicados.",
            "Se cataloga como violencia digital (ciberacoso), demandando la activación inmediata del protocolo de convivencia, intervención del Equipo de Gestión y citación a tutores.",
            "Se clasifica como falta leve vinculada al uso de dispositivos, resolviéndose mediante la retención de los equipos celulares hasta final de ciclo.",
            "Se considera un hecho extraescolar exento de la jurisdicción institucional, debiendo la docente tramitarlo por la vía civil particular."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica para la Prevención y Atención de la Violencia. La violencia digital ejecutada por estudiantes que impacte a un miembro de la comunidad educativa es jurisdicción de la escuela, exigiéndose el abordaje mediante el reglamento de convivencia."
    },
    {
        id: 409,
        categoria: "Protección",
        pregunta: "Una estudiante de 11 años, cursante del 6to grado de Primaria, notifica al departamento de psicología cursar un embarazo. Tras informar a la familia, ¿cuál es el referimiento externo de carácter obligatorio para el profesional de psicología?",
        opciones: [
            "Derivar a la menor exclusivamente a organizaciones no gubernamentales (ONG) orientadas a la maternidad temprana.",
            "Mantener el caso en estricta confidencia institucional, limitando la intervención al acompañamiento socioafectivo interno.",
            "Emitir referimiento formal al Consejo Nacional para la Niñez y la Adolescencia (CONANI) y a la red de salud pública.",
            "Notificar al Tribunal de Niños, Niñas y Adolescentes para que determine la emancipación legal de la menor."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ley 136-03 y Protocolos de Prevención de Embarazo en Adolescentes. Un embarazo en menores de 15 años constituye una situación de vulnerabilidad extrema y posible delito de abuso estatutario, obligando la intervención estatal para protección de derechos."
    },
    {
        id: 410,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Durante una intervención de acompañamiento áulico, el psicólogo observa al docente aplicar sanciones físicas de baja intensidad (uso de regla en las extremidades superiores) argumentando fines correctivos. ¿Qué mandato establece el Estatuto del Docente Dominicano frente a esta praxis?",
        opciones: [
            "Es una metodología disciplinaria con tolerancia institucional siempre que exista consentimiento expreso de la APMAE.",
            "Es una falta grave, violatoria de los derechos del NNA, que demanda la detención inmediata del acto y el levantamiento de un acta administrativa.",
            "Es un incidente menor que debe abordarse únicamente si resulta en lesiones cutáneas comprobables por el personal de salud.",
            "Constituye un ejercicio de autonomía docente en el cual el profesional de la psicología carece de potestad jurisdiccional para intervenir."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Estatuto del Docente Dominicano y Ley 136-03. El castigo físico o trato humillante está absoluta e inexcusablemente prohibido, tipificándose como falta grave sujeta a régimen disciplinario y acciones legales."
    },
    {
        id: 421,
        categoria: "NEAE",
        pregunta: "Una estudiante de Nivel Inicial exhibe alteraciones significativas en la articulación de fonemas, comprometiendo su comunicación expresiva. Siguiendo el protocolo técnico, ¿cuál es la secuencia de intervención del psicólogo?",
        opciones: [
            "Implementar sesiones intensivas de terapia fonoaudiológica durante el horario de recreo para evitar la estigmatización en el aula.",
            "Exigir repeticiones orales forzadas frente al grupo clase para fortalecer la musculatura articulatoria.",
            "Diferir cualquier tipo de intervención asumiendo inmadurez neurológica transitoria hasta su ingreso formal al Nivel Primario.",
            "Ejecutar evaluación psicopedagógica inicial, derivar a un especialista en logopedia externo y orientar al docente en pautas de comunicación inclusiva."
        ],
        respuestaCorrecta: 3,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología (2023-2024). El psicólogo escolar carece de aval clínico para aplicar terapias especializadas de lenguaje; su deber es la detección, referimiento oportuno y gestión de apoyos áulicos."
    },
    {
        id: 422,
        categoria: "Protección",
        pregunta: "El registro de asistencia revela que un estudiante de 4to grado acumula 12 inasistencias consecutivas sin justificación. Los contactos telefónicos con los tutores han sido infructuosos. Conforme al Manual Operativo, ¿qué acción institucional se impone?",
        opciones: [
            "Procesar la baja administrativa del estudiante en el SIGERD bajo el renglón de deserción escolar.",
            "Coordinar y ejecutar una visita domiciliaria para indagar las causales del ausentismo y garantizar la restitución del derecho a la educación.",
            "Diferir cualquier acción administrativa hasta que los tutores se presenten de manera voluntaria a las oficinas de la Dirección.",
            "Delegar la búsqueda física del estudiante a miembros operativos de la comunidad educativa, como el personal de conserjería."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo de los Centros de Orientación y Psicología (2015). La retención escolar es prioridad. Agotados los medios de contacto remoto, la visita domiciliaria es la estrategia protocolar para verificar estados de vulnerabilidad."
    },
    {
        id: 423,
        categoria: "Clima Escolar",
        pregunta: "Se documenta una escalada de hostilidad entre dos docentes de Primaria que compromete el clima organizacional y la colaboración en las planificaciones de ciclo. ¿Cuál es la competencia del psicólogo escolar en esta coyuntura?",
        opciones: [
            "Inhibirse del caso, argumentando que sus funciones operativas se circunscriben de manera exclusiva a la atención del estudiantado.",
            "Intervenir como facilitador en un proceso de mediación y resolución pacífica de conflictos, en coordinación estratégica con el Equipo de Gestión.",
            "Remitir un informe disciplinario al Distrito Educativo recomendando la desvinculación inmediata o el traslado de los implicados.",
            "Asumir el arbitraje vinculante del conflicto, dictaminando sanciones administrativas unilaterales para el docente infractor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024. El rol del profesional de psicología abarca la mejora del clima escolar de toda la comunidad educativa, actuando como mediador neutral en la gestión de conflictos interpersonales."
    },
    {
        id: 424,
        categoria: "NEAE",
        pregunta: "Ante la necesidad de aplicar una batería de evaluación psicopedagógica individualizada para determinar Necesidades Específicas de Apoyo Educativo (NEAE), ¿cuál es el requisito pre-operativo de carácter obligatorio?",
        opciones: [
            "La obtención del consentimiento informado, expreso y por escrito de los progenitores o tutores legales.",
            "La emisión de una ordenanza aprobatoria firmada por el Técnico Distrital del área de Orientación y Psicología.",
            "La constatación documentada de un promedio académico reprobatorio durante dos periodos evaluativos consecutivos.",
            "La autorización verbal del Director del centro educativo registrada en el libro de incidencias diarias."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Manual Operativo y Ley 136-03. Por preceptos éticos y de garantía de derechos fundamentales, ninguna intervención evaluativa de carácter individual en menores de edad puede ejecutarse sin el aval explícito de las familias."
    },
    {
        id: 425,
        categoria: "Protección",
        pregunta: "Durante una actividad de expresión artística libre en Nivel Inicial, un estudiante de 4 años realiza representaciones gráficas con contenido explícito de índole sexual. ¿Cuál es el protocolo prioritario de acción?",
        opciones: [
            "Convocar una asamblea docente extraordinaria para exhibir los gráficos y establecer vigilancia colectiva sobre el estudiante.",
            "Retener el material, entrevistar al menor bajo el principio de no revictimización y activar de inmediato la Ruta Crítica por presunción de abuso.",
            "Suprimir el material gráfico y emitir una amonestación verbal al estudiante por trasgresión del manual de convivencia.",
            "Citar a la familia para devolverles los gráficos y sugerir mayor supervisión en el consumo de medios digitales en el hogar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica para la Prevención y Atención de la Violencia. Los indicadores gráficos de contenido sexual a edades tempranas son fuertes presunciones de ASI. Requiere resguardo de evidencias y denuncia sin confrontar a los posibles agresores."
    },
    {
        id: 426,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En la fase de adaptación de Preprimario, un estudiante manifiesta desregulación severa ante estímulos auditivos cotidianos (timbre escolar, cantos grupales). La conducta técnica pertinente es:",
        opciones: [
            "Sugerir a los tutores la retención en el hogar hasta que el menor desarrolle madurez sensorial adecuada para la escolarización.",
            "Orientar al docente sobre estrategias de anticipación de estímulos, derivando al estudiante para evaluación neuropsicológica externa.",
            "Asentar en el expediente un diagnóstico definitivo de Trastorno de Procesamiento Sensorial para justificar futuras ausencias.",
            "Aplicar técnicas de desensibilización sistemática forzada exponiendo al estudiante de manera reiterada al estímulo aversivo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024. El equipo de orientación no emite diagnósticos clínicos definitivos; debe realizar la detección temprana, implementar apoyos preventivos áulicos y facilitar la derivación a especialistas."
    },
    {
        id: 427,
        categoria: "Clima Escolar",
        pregunta: "En asamblea de padres del 5to grado, se registra una queja colectiva sobre el volumen excesivo de asignaciones extracurriculares (tareas), generando fricción con el equipo docente. El proceder del psicólogo escolar es:",
        opciones: [
            "Desestimar las objeciones de las familias, argumentando que la política de tareas es potestad exclusiva y soberana del docente.",
            "Conceder exención formal de tareas a los estudiantes cuyos tutores hayan protocolizado la queja en la Dirección.",
            "Fomentar espacios de diálogo estructurado entre familias y docentes para consensuar acuerdos pedagógicos y equilibrar la carga académica.",
            "Reestructurar unilateralmente las planificaciones docentes, eliminando competencias para reducir la carga de asignaciones."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Manual Operativo (2015). Promover la integración familia-escuela es una función insoslayable. El psicólogo actúa como ente articulador para mediar y armonizar expectativas formativas sin vulnerar la autonomía didáctica."
    },
    {
        id: 428,
        categoria: "NEAE",
        pregunta: "Se identifica a un estudiante de 3er grado de Primaria que domina con holgura y antelación las competencias curriculares del ciclo, mostrando episodios de aburrimiento y disrupción. De acuerdo con la Ordenanza 05-2024, ¿cómo se aborda este perfil de Altas Capacidades?",
        opciones: [
            "Aceleración automática al grado superior sin requerir evaluación colegiada previa por parte del Distrito Educativo.",
            "Aplicación de medidas punitivas y correctivas ante las conductas disruptivas para garantizar el orden disciplinario del aula.",
            "Diseño de un programa de enriquecimiento curricular y profundización académica dentro de su mismo grupo de pares.",
            "Asignación de rol de docente auxiliar, delegando la tutoría permanente de sus compañeros con rezago académico."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024 (Lineamientos para la Educación Inclusiva). Las Altas Capacidades se tipifican como NEAE. La respuesta oficial primaria es el enriquecimiento curricular (ampliación horizontal) en su contexto ordinario."
    },
    {
        id: 429,
        categoria: "Protección",
        pregunta: "Durante una entrevista de seguimiento, un estudiante de 12 años informa que falta de manera recurrente porque labora como obrero en una construcción para sustentar económicamente a su hogar. ¿Qué estipula la ley dominicana al respecto?",
        opciones: [
            "Es una realidad socioeconómica insalvable, debiendo el centro educativo otorgar permisos formales para legitimar las inasistencias.",
            "Constituye Trabajo Infantil en sus peores formas, obligando la notificación a CONANI y autoridades competentes para la restitución de derechos.",
            "Se requiere transferir al estudiante a la modalidad de educación nocturna (PREPARA) para que no interrumpa sus compromisos laborales.",
            "El centro educativo debe proveer un subsidio económico directo a la familia con fondos descentralizados para suplir el ingreso del menor."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03 (Código para el Sistema de Protección). El trabajo infantil en labores peligrosas (construcción) está tipificado y penado. El MINERD debe articularse interinstitucionalmente para proteger al NNA."
    },
    {
        id: 430,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En la fase final del año escolar, el equipo docente de Preprimario manifiesta reservas sobre la madurez de varios estudiantes para ingresar al 1er grado de Primaria. ¿Cuál es la estrategia técnica dictada por los Lineamientos operativos?",
        opciones: [
            "Coordinar encuentros de articulación pedagógica entre docentes de ambos niveles para garantizar la continuidad y fluidez de los procesos de desarrollo.",
            "Reprobar y retener automáticamente en el nivel a los estudiantes que no evidencien dominio instrumental total de la lectoescritura.",
            "Requerir a las familias, como condición sine qua non de inscripción, la contratación de tutorías privadas durante el periodo vacacional.",
            "Clasificar y agrupar a los estudiantes en las secciones de 1er grado estrictamente según sus resultados en pruebas de cociente intelectual."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024 y Diseño Curricular. La transición Inicial-Primaria debe ser un proceso articulado. El Nivel Inicial no posee carácter reprobatorio; se prioriza la continuidad de los apoyos en el nuevo ciclo."
    },


    {
        id: 431,
        categoria: "Protección",
        pregunta: "En un centro educativo del municipio de Salcedo, una estudiante de 9 años revela durante una sesión de orientación que un familiar cercano 'le acaricia sus partes íntimas' cuando se quedan solos. Acatando la Guía de Ruta Crítica y la Ley 136-03, ¿cuál es el procedimiento impostergable?",
        opciones: [
            "Citar al familiar implicado al Departamento de Psicología para un careo y advertirle sobre las consecuencias legales.",
            "Aplicar pruebas proyectivas (como el Test del Dibujo de la Familia) para confirmar la veracidad del relato antes de actuar.",
            "Garantizar el resguardo de la menor en el centro y notificar de manera inmediata al Ministerio Público o Línea Vida sin confrontar a los tutores.",
            "Derivar el caso a la Asociación de Padres, Madres, Tutores y Amigos de la Escuela (APMAE) para que ofrezcan apoyo a la familia."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica para la Prevención y Atención de la Violencia. Ante la revelación de Abuso Sexual Infantil (ASI), el personal educativo tiene la obligación legal de denunciar inmediatamente. Indagar o confrontar revictimiza y entorpece la investigación penal."
    },
    {
        id: 432,
        categoria: "NEAE",
        pregunta: "Un docente de 3er grado de Primaria remite a un estudiante diagnosticado con Trastorno por Déficit de Atención e Hiperactividad (TDAH), solicitando que se le resten puntos en su calificación final por 'conducta inquieta constante'. ¿Cuál es el dictamen técnico amparado en la Ordenanza 05-2024?",
        opciones: [
            "Denegar la solicitud, instruyendo al docente sobre la aplicación de Ajustes Curriculares Individualizados (ACI) y estrategias de flexibilización metodológica en el aula.",
            "Avalar la reducción de calificaciones como medida de condicionamiento operante para extinguir la conducta disruptiva.",
            "Suspender al estudiante temporalmente hasta que la familia presente constancia de medicación psiquiátrica actualizada.",
            "Transferir al estudiante de manera permanente al aula de recursos, excluyéndolo de la evaluación ordinaria del grado."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024 (Educación Inclusiva). Está prohibido penalizar académicamente a un estudiante por sintomatología propia de su condición neurodesarrollal. Se exige la implementación de ACI y apoyos psicopedagógicos pertinentes."
    },
    {
        id: 433,
        categoria: "Clima Escolar",
        pregunta: "El progenitor de un estudiante de Nivel Inicial irrumpe de forma violenta en las instalaciones del centro educativo, profiriendo insultos y amenazas contra la maestra titular frente a los estudiantes. Conforme al Manual Operativo y la Ruta Crítica, la intervención de gestión demanda:",
        opciones: [
            "Exigir a la docente que ofrezca disculpas públicas al progenitor para desescalar el conflicto rápidamente.",
            "Activar el protocolo de seguridad, resguardar a la docente y al estudiantado, y requerir intervención de la fuerza pública o Policía Escolar si la amenaza persiste.",
            "Ignorar la situación asumiendo que es un exabrupto temporal que se resolverá por medios informales fuera del recinto.",
            "Grabar el incidente y difundirlo en las redes sociales de la escuela para evidenciar la falta de colaboración familiar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica. La violencia contra el personal docente en el recinto escolar requiere contención inmediata, protección de la integridad de la comunidad y notificación a las autoridades correspondientes."
    },
    {
        id: 434,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En la elaboración del Plan Operativo Anual (POA) del Departamento de Orientación y Psicología, se contempla la aplicación de pruebas psicométricas estandarizadas de inteligencia a estudiantes de Nivel Primario. Según los Lineamientos 2023-2024, esto procede únicamente si:",
        opciones: [
            "Se realiza de manera masiva y obligatoria a inicio del año escolar para clasificar las secciones por rendimiento.",
            "Lo autoriza verbalmente el Técnico Distrital durante su visita de acompañamiento semestral.",
            "Existe una demanda específica en el marco de una evaluación psicopedagógica individualizada, contando con el consentimiento informado de la familia.",
            "El centro cuenta con fondos descentralizados suficientes para la adquisición de las baterías de pruebas."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología 2023-2024. El uso de instrumentos estandarizados está restringido a necesidades puntuales de evaluación psicopedagógica, rigurosamente sujetos al consentimiento parental y a fines estrictamente educativos."
    },
    {
        id: 435,
        categoria: "Protección",
        pregunta: "Un estudiante de 1er grado de Primaria asiste de manera reiterada con notable déficit de higiene, pediculosis severa y signos de desnutrición (falta de merienda y pérdida de peso). ¿Qué tipificación y acción dicta la normativa del Sistema de Protección?",
        opciones: [
            "Se tipifica como negligencia parental; procede entrevista exploratoria con la familia y, de persistir la omisión de cuidados, referimiento al CONANI.",
            "Se considera un asunto del ámbito privado familiar en el cual la institución educativa no tiene competencia legal.",
            "Amerita la expulsión temporal del estudiante para evitar la propagación de pediculosis en el resto de la matrícula.",
            "Corresponde realizar una colecta monetaria entre el cuerpo docente para comprarle alimentos y útiles de aseo diarios al menor."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ley 136-03 y Guía de Ruta Crítica. La negligencia u omisión de cuidados básicos constituye una vulneración de derechos. El centro agota el abordaje orientativo familiar, pero debe dar parte a la autoridad competente si no hay restitución del derecho."
    },
    {
        id: 436,
        categoria: "NEAE",
        pregunta: "Se recibe en matrícula de Nivel Inicial a una niña con discapacidad visual (baja visión). El equipo de gestión argumenta que el centro carece de materiales macrotipo. Atendiendo a la Ordenanza 05-2024, el proceder administrativo es:",
        opciones: [
            "Condicionar el ingreso de la menor hasta que la APMAE provea los materiales tiflotecnológicos requeridos.",
            "Admitir a la estudiante, asegurar ubicación preferencial en el aula, orientar al docente y tramitar formalmente la dotación de recursos específicos al Distrito Educativo.",
            "Sugerir formalmente la escolarización en el hogar (homeschooling) bajo supervisión parental exclusiva.",
            "Eximir a la estudiante de todas las actividades que requieran discriminación visual, calificándola únicamente por participación oral."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024 (Educación Inclusiva). La falta de recursos no exime al Estado de garantizar la matriculación. El centro realiza ajustes razonables inmediatos (ubicación, contraste) y gestiona institucionalmente los apoyos especializados."
    },
    {
        id: 437,
        categoria: "Clima Escolar",
        pregunta: "En el 5to grado de Primaria, un grupo de estudiantes somete a otro de manera continua a burlas sistemáticas, exclusión de juegos y sustracción de útiles, evidenciando un desbalance de poder. Según la tipificación del MINERD, la intervención procede bajo el protocolo de:",
        opciones: [
            "Conflicto aislado, ameritando únicamente amonestación verbal genérica al grupo.",
            "Acoso escolar (Bullying), exigiendo intervención con la víctima, el victimario y el grupo de espectadores, mediante enfoque restaurativo y comunicación a las familias.",
            "Dinámica evolutiva normal de preadolescentes, recomendando a la víctima ignorar las provocaciones.",
            "Alteración del orden público, requiriendo intervención directa de la Policía Escolar dentro del aula."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas del Sistema de Convivencia y Guía de Ruta Crítica. La reiteración, intencionalidad y desequilibrio de poder configuran acoso escolar, demandando un abordaje sistémico que incluye a la comunidad de pares y familias, priorizando la restauración."
    },
    {
        id: 438,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El análisis de los resultados del primer periodo académico refleja un índice de reprobación del 40% en el área de Matemáticas en todo el segundo ciclo de Primaria. Según las funciones del psicólogo escolar, este debe:",
        opciones: [
            "Impartir docencia directa de Matemáticas a los estudiantes en riesgo durante las horas de Educación Física.",
            "Diagnosticar a los estudiantes reprobados con Discalculia y eximirlos de la asignatura.",
            "Articular con las coordinadoras pedagógicas para asesorar a los docentes en la implementación de metodologías diversificadas y evaluación formativa.",
            "Emitir un reporte recomendando la desvinculación inmediata de los docentes de Matemáticas por incompetencia técnica."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología 2023-2024. Ante fallas académicas sistémicas, la intervención se dirige al apoyo pedagógico y revisión metodológica en coordinación con el equipo de gestión, no a la patologización masiva ni a funciones punitivas."
    },
    {
        id: 439,
        categoria: "Protección",
        pregunta: "Una docente remite a una estudiante de 6to grado tras identificar lesiones lineales superficiales (cortes) en sus antebrazos. La estudiante alega que se los hizo su gato, pero las lesiones son simétricas. ¿Cuál es la ruta de atención obligatoria?",
        opciones: [
            "Contactar a la familia para notificar el hallazgo de autolesiones no suicidas, brindar primeros auxilios psicológicos y referir a evaluación clínica de salud mental externa.",
            "Minimizar el evento para no generar alarma, asumiendo que se trata de una conducta de búsqueda de atención propia de la edad.",
            "Convocar al grupo curso para dictar una charla preventiva sobre el suicidio, utilizando a la estudiante como caso de análisis.",
            "Asumir el tratamiento psicoterapéutico clínico de la estudiante en el centro escolar durante todo el año."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Protocolo de Intervención en Situaciones de Riesgo Psicosocial. Las autolesiones son indicadores de vulnerabilidad emocional grave. Requieren abordaje confidencial, integración familiar y derivación perentoria al sistema de salud, ya que exceden el rol preventivo escolar."
    },
    {
        id: 440,
        categoria: "NEAE",
        pregunta: "Se detecta en un estudiante de 4to grado de Primaria omisión recurrente de letras, inversión de grafemas (b por d) y lectura silábica con escasa comprensión. Agotada la fase de observación sistemática, el procedimiento técnico exige:",
        opciones: [
            "Realizar evaluación psicopedagógica para determinar si existen indicadores de Dificultades Específicas del Aprendizaje (Dislexia) y establecer ACI.",
            "Obligar al estudiante a realizar planas repetitivas de caligrafía como castigo disciplinario por no retener la ortografía.",
            "Referir al estudiante a la modalidad de Educación Especial por incapacidad de cursar la educación regular.",
            "Instruir a la familia a que el estudiante abandone la escuela y repita el grado el año siguiente cuando esté maduro."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Lineamientos de Orientación y Ordenanza 05-2024. Ante indicadores de Dificultades Específicas del Aprendizaje, procede la evaluación psicopedagógica (previa autorización) para determinar barreras y ejecutar apoyos que garanticen el acceso al currículo."
    },
    {
        id: 441,
        categoria: "Clima Escolar",
        pregunta: "Durante una clase en Nivel Primario, se comprueba que un estudiante sustrajo dinero de la mochila de un compañero. Conforme a las Normas de Convivencia, la intervención disciplinaria debe caracterizarse por:",
        opciones: [
            "Un enfoque retributivo punitivo, exponiendo públicamente al menor ante el centro para generar escarnio y prevenir réplicas.",
            "Un enfoque formativo y restaurativo, fomentando el reconocimiento del daño, la restitución del bien y el compromiso conductual junto a las familias.",
            "La judicialización inmediata del menor ante el tribunal penal ordinario por delito de hurto.",
            "La omisión administrativa si el monto sustraído es menor a 500 pesos dominicanos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas del Sistema de Convivencia Educativa. Toda medida disciplinaria debe ser de carácter socioeducativo, salvaguardando la dignidad del NNA y orientada a la reparación del daño sin prácticas humillantes."
    },
    {
        id: 442,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Ante la ausencia imprevista de un docente de Nivel Inicial por licencia médica, la Dirección solicita al psicólogo escolar que asuma la titularidad del aula por un periodo de tres semanas. ¿Qué establece el Manual Operativo ante esta directriz?",
        opciones: [
            "El psicólogo debe acatar la instrucción como muestra de colaboración institucional incuestionable.",
            "Es competencia del psicólogo negarse formalmente, ya que asumir docencia sustituta desvirtúa y paraliza los servicios técnicos de orientación.",
            "El psicólogo debe negociar impartir clases solo medio tiempo y atender casos de crisis el resto del horario.",
            "Procede la renuncia inmediata del profesional alegando acoso laboral continuado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo de los Centros de Orientación y Psicología (2015). Las funciones del profesional de psicología son técnicas, de asesoría y acompañamiento. La sustitución docente contraviene la naturaleza del cargo y vulnera el derecho del resto de la población a recibir los servicios de orientación."
    },
    {
        id: 443,
        categoria: "Protección",
        pregunta: "Una maestra confía al psicólogo tener indicios sólidos de que una estudiante de 2do grado es víctima de violencia intrafamiliar, pero se niega a firmar el formulario de reporte por temor a represalias de la familia. El deber del orientador es:",
        opciones: [
            "Archivar la información y esperar a que la docente se sienta segura para proceder institucionalmente.",
            "Acompañar a la docente informando que la Ley 136-03 obliga al personal educativo a denunciar y que existen mecanismos institucionales para el anonimato y protección de la identidad del denunciante.",
            "Confrontar directamente a los padres de la estudiante en la vía pública para evitar involucrar al centro educativo.",
            "Sancionar administrativamente a la maestra por complicidad y encubrimiento de maltrato."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03 y Guía de Ruta Crítica. La denuncia es un mandato ineludible (Art. 14). El orientador asesora al personal sobre la obligatoriedad jurídica y las vías para canalizar el reporte ante el Ministerio Público, garantizando la confidencialidad."
    },
    {
        id: 444,
        categoria: "NEAE",
        pregunta: "Los tutores de un estudiante con Síndrome de Down de 1er grado solicitan formalmente que no se le enseñe a leer ni escribir, alegando que 'solo lo enviaron para que socialice y no se aburra en casa'. El argumento institucional amparado en la Ordenanza 05-2024 es:",
        opciones: [
            "Acatar la petición familiar, dejando al estudiante en juego libre mientras el resto del curso recibe alfabetización.",
            "Garantizar el derecho a la educación de calidad, explicando que la escuela debe desarrollar al máximo sus potencialidades cognitivas mediante ACI y el Diseño Universal para el Aprendizaje (DUA).",
            "Amenazar a los padres con someterlos por negligencia educativa ante el tribunal de menores.",
            "Retirar la matriculación, argumentando que el centro es una entidad académica y no una guardería."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024 y Ley General de Educación. La educación inclusiva persigue el aprendizaje y la participación plena de todos los estudiantes. No se puede privar a un NNA del desarrollo de competencias por un prejuicio limitante, incluso si proviene de la familia."
    },
    {
        id: 445,
        categoria: "Clima Escolar",
        pregunta: "Pese a las restricciones de las Normas de Convivencia, varios estudiantes del segundo ciclo de Primaria utilizan dispositivos móviles en el aula para jugar, interrumpiendo la docencia. La medida a recomendar por el Departamento de Psicología es:",
        opciones: [
            "La retención temporal de los equipos por parte de la Dirección, custodiándolos hasta ser devueltos a los tutores legales, previo diálogo reflexivo.",
            "El decomiso permanente y la destrucción de los dispositivos frente al grupo curso como medida ejemplarizante.",
            "La expulsión de los estudiantes por alteración grave y continuada del orden escolar.",
            "La revisión forzosa del contenido privado de los dispositivos antes de entregarlos a las familias."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Normas del Sistema de Convivencia. Ante el uso indebido de distractores electrónicos, procede la aplicación de medidas formativas, siendo legal la retención institucional temporal para su entrega exclusiva a los responsables legales, sin vulnerar el derecho a la privacidad (no revisión)."
    },
    {
        id: 446,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Durante el mes de abril, en un centro de Nivel Primario, ¿qué acción corresponde a la línea de Orientación Vocacional según los Lineamientos del MINERD?",
        opciones: [
            "La aplicación de inventarios de preferencias profesionales exhaustivos para determinar la carrera universitaria que cursarán en el futuro.",
            "La omisión total del tema, ya que la vocación solo se trabaja en el Nivel Secundario.",
            "La exploración lúdica de intereses, aptitudes y oficios de la comunidad, fomentando el autoconocimiento en el marco del Proyecto de Vida.",
            "La asignación obligatoria de oficios técnicos a los estudiantes con bajo rendimiento académico."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024. La orientación vocacional es un proceso continuo. En los niveles Inicial y Primario se aborda desde el conocimiento de sí mismo, la exploración del entorno y la dignificación del trabajo (fase pre-vocacional)."
    },
    {
        id: 447,
        categoria: "Protección",
        pregunta: "Un estudiante de 3er grado presenta episodios repentinos de agresividad y enuresis. La madre revela que están en un proceso de separación conyugal altamente conflictivo con el padre. ¿Qué límite ético-técnico rige la intervención del psicólogo escolar?",
        opciones: [
            "Asumir la terapia de pareja y mediación de divorcio de los padres dentro del recinto escolar.",
            "Realizar diagnóstico clínico del menor, recetar ansiolíticos y emitir peritaje de custodia para tribunales.",
            "Brindar contención emocional al estudiante, orientar pautas de crianza positiva a ambos progenitores y referir al sistema de salud mental si la sintomatología clínica persiste.",
            "Prohibir el ingreso del padre a la escuela de manera unilateral para evitar que el estudiante se altere."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Lineamientos de Orientación 2023-2024. El rol escolar es de prevención, apoyo emocional y referimiento. El psicólogo escolar tiene prohibido legal y éticamente fungir como terapeuta clínico o perito judicial de las familias de la comunidad educativa."
    },
    {
        id: 448,
        categoria: "NEAE",
        pregunta: "Una vez entregado el informe psicopedagógico con las recomendaciones de Ajustes Curriculares Individualizados (ACI), la docente titular se niega sistemáticamente a aplicarlos argumentando 'falta de tiempo'. El Estatuto del Docente Dominicano establece que:",
        opciones: [
            "La docente incurre en incumplimiento de sus deberes funcionales (atención a la diversidad), ameritando la intervención del Equipo de Gestión y Coordinación Pedagógica.",
            "La docente ejerce su legítimo derecho a la libertad de cátedra, eximiéndose de atender ritmos de aprendizaje particulares.",
            "El estudiante debe ser reasignado a otra sección donde el docente sí tenga disposición voluntaria.",
            "El psicólogo escolar debe ingresar al aula a impartir los contenidos ajustados al estudiante de forma personal."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Estatuto del Docente Dominicano y Ordenanza 05-2024. Es un deber contractual y pedagógico del docente adecuar su práctica a la diversidad del aula. La negligencia en la aplicación de ACI es una falta administrativa gestionable por la Dirección."
    },
    {
        id: 449,
        categoria: "Clima Escolar",
        pregunta: "Se detectan comentarios discriminatorios y xenófobos por parte de estudiantes de 6to grado hacia una compañera de ascendencia migrante. ¿Qué mandato institucional exige el MINERD para esta coyuntura?",
        opciones: [
            "Separar a la estudiante migrante del grupo para protegerla de agresiones futuras.",
            "Abordaje transversal del enfoque de Derechos Humanos, aplicando medidas formativas a los agresores y promoviendo la inclusión e interculturalidad en el centro.",
            "Sugerir a los tutores de la menor que la matriculen en un centro exclusivo para personas de su nacionalidad.",
            "Omitir la intervención bajo la premisa de que los prejuicios sociales escapan a la jurisdicción escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03, Ley General de Educación y Normas de Convivencia. La educación dominicana condena toda forma de discriminación. La escuela debe garantizar un ambiente equitativo, promoviendo el respeto a la diversidad y aplicando las normas correctivas ante actos discriminatorios."
    },
    {
        id: 450,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Para la construcción de la Planificación Anual del Departamento de Orientación y Psicología, el insumo matriz obligatorio y vinculante en el cual se deben enmarcar las acciones es:",
        opciones: [
            "El criterio personal e intuitivo del psicólogo basado en su experiencia clínica previa.",
            "Un modelo de planificación genérico descargado de internet sin contextualización.",
            "El Proyecto Educativo de Centro (PEC) y las necesidades detectadas en el Diagnóstico o Línea Base institucional.",
            "Exclusivamente las directrices emanadas de la Asociación de Padres, Madres, Tutores y Amigos de la Escuela (APMAE)."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Manual Operativo de los Centros de Orientación y Psicología (2015). Toda planificación del área debe nacer de la evaluación de necesidades (diagnóstico de centro) y estar alienada estratégicamente al Proyecto Educativo de Centro (PEC) para asegurar pertinencia."
    },

    {
        id: 451,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Durante el proceso de revisión de la planificación docente, el psicólogo identifica que las estrategias no consideran los diferentes ritmos de aprendizaje del aula. Según los Lineamientos 2023-2024, ¿cuál es la acción técnica correcta?",
        opciones: [
            "Redactar personalmente las planificaciones de los docentes para asegurar la inclusión.",
            "Asesorar al docente en el diseño de actividades diversificadas basadas en el Diseño Universal para el Aprendizaje (DUA).",
            "Solicitar al Distrito que sancione al docente por falta de sensibilidad pedagógica.",
            "Evaluar clínicamente a los estudiantes que no aprenden para que sean retirados del aula regular."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología (2023-2024). El rol del psicólogo es de asesoría técnica y acompañamiento pedagógico para eliminar barreras al aprendizaje mediante el DUA."
    },
    {
        id: 452,
        categoria: "Protección",
        pregunta: "Un estudiante de 5to grado de Primaria confía al orientador que sus padres lo dejan solo en casa durante las noches para irse a trabajar. Según la Ley 136-03, ¿cómo se tipifica esta situación?",
        opciones: [
            "Resiliencia familiar ante la crisis económica.",
            "Falta leve que no requiere intervención institucional.",
            "Negligencia y abandono, constituyendo una vulneración de derechos que requiere reporte al CONANI.",
            "Autonomía infantil temprana, sujeta solo a seguimiento verbal."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ley 136-03 (Código para el sistema de protección de NNA). Dejar a un menor sin supervisión de un adulto constituye una forma de negligencia que pone en riesgo su integridad física y emocional."
    },
    {
        id: 453,
        categoria: "NEAE",
        pregunta: "La madre de un estudiante con discapacidad auditiva solicita que su hijo sea eximido de la asignatura de Lengua Española. Según la Ordenanza 05-2024, ¿qué debe responder el centro?",
        opciones: [
            "Acceder a la petición, ya que el estudiante no puede escuchar la pronunciación.",
            "Informar que la educación es un derecho inclusivo y que se aplicarán los ajustes razonables (como Lengua de Señas) sin exonerar la materia.",
            "Recomendar que el estudiante se inscriba en una escuela especial fuera del sistema regular.",
            "Sustituir Lengua Española por una asignatura de artes manuales de forma unilateral."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. Los lineamientos de educación inclusiva prohíben la exoneración de asignaturas por discapacidad; en su lugar, se deben garantizar los apoyos y ajustes necesarios."
    },
    {
        id: 454,
        categoria: "Clima Escolar",
        pregunta: "Un grupo de padres se queja de que el psicólogo escolar dedica demasiado tiempo a reuniones de gestión y poco a 'dar terapia' a los niños. Según el Manual Operativo (2015), ¿cuál es la respuesta técnica?",
        opciones: [
            "Acceder a dar terapia clínica individual para evitar conflictos con la APMAE.",
            "Explicar que las funciones del psicólogo escolar son preventivas, de orientación y apoyo psicopedagógico, no clínicas ni terapéuticas.",
            "Pedir permiso al Director para instalar un consultorio privado dentro de la escuela.",
            "Renunciar al cargo por incomprensión de la comunidad educativa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo de los Centros de Orientación y Psicología (2015). El documento delimita claramente que el ámbito de intervención es educativo y preventivo, derivando los casos clínicos a la red de salud."
    },
    {
        id: 455,
        categoria: "Protección",
        pregunta: "Un docente reporta haber visto fotos inapropiadas del director del centro en el celular de una estudiante de 6to grado. De acuerdo con la Guía de Ruta Crítica, ¿qué debe hacer el psicólogo?",
        opciones: [
            "Confrontar al director de manera privada para pedirle una explicación.",
            "Borrar las fotos del celular para proteger la imagen de la institución.",
            "Reportar de inmediato al Distrito Educativo y a las autoridades competentes (Fiscalía de NNA) siguiendo el protocolo de abuso.",
            "Esperar a que la estudiante o sus padres pongan la denuncia formal por su cuenta."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica para la Prevención y Atención de la Violencia. Ante sospecha de abuso por parte de un adulto del centro, se debe activar el protocolo externo de protección de manera inmediata."
    },
    {
        id: 456,
        categoria: "NEAE",
        pregunta: "Para un estudiante con Altas Capacidades en 4to grado, el Equipo de Gestión sugiere 'adelantarlo' dos grados de forma inmediata. ¿Qué procedimiento establece la Ordenanza 05-2024?",
        opciones: [
            "La aceleración de grado es posible, pero requiere una evaluación psicopedagógica profunda y la aprobación del Distrito Educativo.",
            "El director puede firmar la promoción automática sin consultar a otras instancias.",
            "Está prohibido adelantar estudiantes independientemente de su capacidad intelectual.",
            "Solo se puede adelantar si el estudiante gana un concurso de conocimientos nacional."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. La flexibilización del periodo de escolarización (aceleración) es una medida excepcional que requiere un proceso formal de evaluación y autorización técnica administrativa."
    },
    {
        id: 457,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al inicio del año escolar, ¿cuál es el primer paso que debe dar el Departamento de Orientación y Psicología para elaborar su planificación?",
        opciones: [
            "Comprar un libro de dinámicas grupales.",
            "Realizar el Diagnóstico de Necesidades del Centro (Línea Base).",
            "Esperar a que el Director le asigne las tareas del mes.",
            "Aplicar pruebas de inteligencia a todos los estudiantes de nuevo ingreso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo (2015). La planificación debe responder a la realidad del contexto, por lo que el diagnóstico inicial es el insumo obligatorio para el plan anual."
    },
    {
        id: 458,
        categoria: "Clima Escolar",
        pregunta: "Se descubre que un estudiante de 12 años introdujo un arma blanca (cuchillo) al centro 'para defenderse'. Según las Normas de Convivencia, esta falta se clasifica como:",
        opciones: [
            "Falta leve, se resuelve con un diálogo.",
            "Falta grave o muy grave, requiriendo confiscación, reporte a la familia y medidas socioeducativas inmediatas.",
            "Falta administrativa del conserje por no revisar las mochilas.",
            "Incidente menor si no llegó a herir a nadie."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas del Sistema de Convivencia Educativa. La introducción de objetos peligrosos es una falta de alta gravedad que compromete la seguridad colectiva."
    },
    {
        id: 459,
        categoria: "Protección",
        pregunta: "Una estudiante de 11 años manifiesta conductas de retraimiento y rechazo al contacto físico con docentes varones. El psicólogo sospecha de abuso sexual intrafamiliar. ¿Cuál es su deber ético según el Estatuto del Docente?",
        opciones: [
            "Mantener el secreto profesional para no destruir la familia de la niña.",
            "Denunciar por sospecha, ya que el interés superior del niño prevalece sobre el secreto profesional en casos de abuso.",
            "Investigar por su cuenta visitando la casa de la niña disfrazado de encuestador.",
            "Pedirle a la niña que le cuente los detalles frente a una cámara de video."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Estatuto del Docente y Ley 136-03. El personal educativo no puede invocar secreto profesional cuando se trata de la protección de la integridad de un menor."
    },
    {
        id: 460,
        categoria: "NEAE",
        pregunta: "Un estudiante con Trastorno del Espectro Autista (TEA) tiene crisis sensoriales por el ruido del timbre. ¿Qué 'ajuste razonable' es pertinente según la Ordenanza 05-2024?",
        opciones: [
            "Excluir al estudiante de la escuela durante las horas de recreo.",
            "Permitir el uso de auriculares canceladores de ruido y anticipar los cambios de actividad visualmente.",
            "Apagar el timbre de toda la escuela de forma permanente.",
            "Obligar al estudiante a permanecer junto al timbre para que se 'acostumbre'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. Los ajustes razonables buscan adaptar el entorno a la necesidad del estudiante para garantizar su permanencia y bienestar."
    },
    {
        id: 461,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un docente de 1er grado se niega a recibir a un estudiante que no sabe leer ni escribir, alegando que 'eso debieron enseñárselo en Inicial'. ¿Qué establece la normativa dominicana?",
        opciones: [
            "El docente tiene razón; el niño debe volver a Inicial.",
            "La alfabetización es un proceso del Nivel Primario y el docente debe garantizar el derecho a la educación sin discriminación.",
            "El psicólogo debe dar clases particulares de lectura al niño en su oficina.",
            "El niño debe ser inscrito en una escuela nocturna para adultos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos del Nivel Primario y Ley 66-97. La educación es obligatoria y el docente de primaria es responsable de los procesos de alfabetización inicial."
    },
    {
        id: 462,
        categoria: "Protección",
        pregunta: "El psicólogo recibe información de que un estudiante está siendo utilizado para vender sustancias prohibidas fuera de la escuela. ¿Qué ruta debe activar?",
        opciones: [
            "La de conflictos de aula.",
            "La de protección frente a riesgos sociales, notificando a la Dirección y a la Policía Escolar/DNCD para protección del menor.",
            "Organizar una charla sobre botánica.",
            "No intervenir porque el hecho ocurre 'fuera' del recinto."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica. La escuela tiene el deber de proteger al NNA de cualquier forma de explotación o riesgo social, incluso si los agentes son externos."
    },
    {
        id: 463,
        categoria: "Clima Escolar",
        pregunta: "Un docente de Primaria utiliza el castigo de 'no dejar salir al recreo' a todo el curso por el mal comportamiento de un solo estudiante. Según las Normas de Convivencia, esto es:",
        opciones: [
            "Una estrategia de presión grupal efectiva.",
            "Una medida incorrecta, ya que las sanciones deben ser individuales y no privar del derecho al descanso/recreación.",
            "Una falta leve del psicólogo por no supervisar el recreo.",
            "Permitido si el director está de acuerdo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas del Sistema de Convivencia. Las sanciones colectivas están prohibidas y el recreo es un derecho que contribuye al desarrollo integral."
    },
    {
        id: 464,
        categoria: "NEAE",
        pregunta: "Un niño de 2do grado presenta dificultades motrices finas severas que le impiden escribir con fluidez. El psicólogo recomienda permitir que el estudiante realice sus evaluaciones de forma oral. ¿Cómo se llama técnicamente esta acción?",
        opciones: [
            "Favoritismo pedagógico.",
            "Ajuste Curricular Significativo.",
            "Ajuste en la metodología y evaluación (Ajuste no significativo).",
            "Exoneración de competencias."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. Cambiar la forma en que se evalúa (de escrito a oral) sin cambiar el contenido es un ajuste de acceso y metodología."
    },
    {
        id: 465,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El psicólogo nota que el centro educativo no tiene un comité de mediación escolar. Según los Lineamientos, su función es:",
        opciones: [
            "Ser el único juez de todos los conflictos.",
            "Promover la conformación del Consejo de Curso y los comités de mediación para fomentar la cultura de paz.",
            "Delegar toda la mediación en el portero del centro.",
            "Cobrar una multa a los estudiantes que peleen."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024. La promoción de la participación estudiantil y la resolución pacífica de conflictos es una tarea central del departamento."
    },
    {
        id: 466,
        categoria: "Protección",
        pregunta: "Se confirma que una estudiante de 6to grado está siendo víctima de ciberacoso por parte de estudiantes de secundaria del mismo distrito. ¿Qué debe hacer el centro de primaria?",
        opciones: [
            "Nada, porque los agresores no son de su centro.",
            "Comunicarse con la dirección del centro de secundaria y activar la Ruta Crítica de Violencia entre Pares vía Distrito.",
            "Recomendar a la niña que cierre sus redes sociales y ya.",
            "Darle una charla de autoestima solo a la víctima."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica. El acoso escolar, incluso si involucra a estudiantes de distintos centros, requiere la articulación distrital para proteger a la víctima."
    },
    {
        id: 467,
        categoria: "NEAE",
        pregunta: "Un estudiante extranjero llega al centro a mitad de año sin documentos de escolaridad previa. Según la normativa del MINERD, ¿qué debe hacerse?",
        opciones: [
            "Negar la inscripción hasta que traiga sus notas legalizadas por el consulado.",
            "Inscribirlo provisionalmente en el grado que corresponda a su edad y realizar una evaluación de nivel para ubicación.",
            "Ponerlo en Nivel Inicial sin importar su edad.",
            "Cobrarle una cuota especial por ser extranjero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 66-97 y convenios internacionales de protección. Ningún niño puede quedar fuera de la escuela por falta de documentos; el sistema debe garantizar su ingreso y regularización posterior."
    },
    {
        id: 468,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En una reunión de docentes, se decide que los niños con dificultades de aprendizaje deben ser sentados todos juntos al final del aula. El psicólogo debe intervenir alegando que:",
        opciones: [
            "Es una excelente idea para que se ayuden entre ellos.",
            "Es una práctica segregadora que contradice los principios de la Educación Inclusiva (Ordenanza 05-2024).",
            "Deben sentarse en el pasillo para que tengan más aire.",
            "Es mejor que no asistan a la escuela esos días."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. La inclusión exige la participación de todos en el mismo entorno de aprendizaje, evitando la segregación dentro del aula."
    },
    {
        id: 469,
        categoria: "Clima Escolar",
        pregunta: "Un padre exige que se le dé el nombre del estudiante que golpeó a su hijo para ir a su casa a 'resolver'. El psicólogo debe:",
        opciones: [
            "Darle la dirección y el nombre completo.",
            "Explicar que los datos de los estudiantes son confidenciales y que el centro manejará la situación bajo las Normas de Convivencia.",
            "Acompañar al padre para servir de testigo en la pelea.",
            "No hacer nada y dejar que el padre investigue por su cuenta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03 y Normas de Convivencia. La confidencialidad y la protección de los datos de menores es un deber legal del personal escolar."
    },
    {
        id: 470,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al finalizar el año escolar, el psicólogo debe entregar una memoria de gestión. ¿A quién se le entrega formalmente este documento?",
        opciones: [
            "Al presidente de la Junta de Vecinos.",
            "A la Dirección del Centro con copia a la Unidad de Orientación y Psicología del Distrito Educativo.",
            "Se lo queda él para su archivo personal.",
            "Se lo entrega a los estudiantes para que lo lean."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo (2015). El reporte de fin de año es un requisito administrativo de rendición de cuentas ante las autoridades inmediatas."
    },

    {
        id: 471,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En la planificación de las intervenciones del segundo semestre, el orientador debe priorizar el apoyo a los estudiantes de 6to grado de Primaria en:",
        opciones: [
            "La realización de exámenes de ingreso a universidades extranjeras.",
            "El proceso de transición hacia el Nivel Secundario, trabajando el autoconocimiento y la adaptación al nuevo entorno.",
            "La enseñanza técnica de contabilidad y finanzas avanzadas.",
            "La selección de una carrera técnica profesional definitiva."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024. Uno de los ejes centrales en 6to grado es el apoyo a la transición entre niveles educativos para prevenir la deserción y facilitar la adaptación emocional."
    },
    {
        id: 472,
        categoria: "Protección",
        pregunta: "Un estudiante confiesa que un compañero lo amenaza con golpearlo a la salida si no le entrega su merienda cada día. Según la Guía de Ruta Crítica, ¿cómo debe proceder el psicólogo?",
        opciones: [
            "Sugerir al estudiante que traiga doble merienda para evitar el conflicto.",
            "Activar el protocolo de acoso escolar (bullying), realizar entrevistas individuales, informar a las familias y establecer un plan de seguimiento.",
            "Ignorar la situación por ocurrir fuera del horario escolar.",
            "Expulsar inmediatamente al estudiante que amenaza sin mediar palabra."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica. La extorsión y la amenaza sistemática entre pares son formas de violencia escolar que requieren una intervención protocolar establecida."
    },
    {
        id: 473,
        categoria: "NEAE",
        pregunta: "Un niño con Discapacidad Intelectual Leve está matriculado en 3er grado. El docente afirma que no puede evaluarlo porque el niño no cumple los indicadores de grado. ¿Cuál es la orientación técnica correcta?",
        opciones: [
            "El niño no debe ser evaluado y debe quedar como 'oyente'.",
            "El docente debe evaluar basándose en los indicadores de logro ajustados en el Plan Educativo Individualizado (PEI) o los Ajustes Curriculares.",
            "Se debe promover al niño automáticamente al siguiente grado sin evaluar nada.",
            "El psicólogo es quien debe poner las notas de ese estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. Los estudiantes con NEAE deben ser evaluados en función de los ajustes razonables realizados a su proceso de aprendizaje."
    },
    {
        id: 474,
        categoria: "Clima Escolar",
        pregunta: "Se detecta que un grupo de WhatsApp de padres se está utilizando para difamar a una docente del centro. ¿Cuál es la acción del psicólogo dentro del marco de la cultura de paz?",
        opciones: [
            "Entrar al grupo para discutir con los padres.",
            "Convocar a una asamblea de padres y madres para recordar los canales institucionales de quejas y promover el uso ético de la tecnología.",
            "Cerrar el centro educativo hasta que los padres se disculpen.",
            "Recomendar a la docente que demande legalmente a todos los padres del grupo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual de Familia y Escuela. El orientador debe mediar y fortalecer los vínculos familia-escuela, reorientando los conflictos hacia el diálogo y el respeto mutuo."
    },
    {
        id: 475,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Según el Manual Operativo (2015), ¿cuál es el porcentaje de tiempo que el psicólogo escolar debe dedicar al trabajo directo con los estudiantes y la comunidad educativa?",
        opciones: [
            "El 20%, el resto es para tareas administrativas del Director.",
            "El 80%, priorizando la intervención, prevención y acompañamiento.",
            "El 100%, no debe realizar ningún reporte escrito.",
            "El 50%, el otro 50% es para sustituir docentes ausentes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo de los Centros de Orientación y Psicología. El rol es técnico-operativo, exigiendo que la mayor parte del tiempo se dedique a las funciones sustantivas de la unidad."
    },
    {
        id: 476,
        categoria: "Protección",
        pregunta: "Una estudiante de 5to grado presenta un cambio drástico en su conducta, pasando de ser muy participativa a estar aislada y llorar sin motivo aparente. Tras la entrevista, no revela nada. ¿Qué debe hacer el psicólogo?",
        opciones: [
            "Cerrar el caso por falta de evidencia.",
            "Mantener la observación sistemática, entrevistar a la familia y, de sospechar riesgo, consultar con el equipo distrital.",
            "Obligar a la niña a hablar bajo amenaza de enviarla a la dirección.",
            "Asumir que es una etapa normal del desarrollo y no intervenir."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos de Orientación y Psicología. Los cambios bruscos de comportamiento son indicadores de alerta que requieren seguimiento e investigación del contexto familiar y social."
    },
    {
        id: 477,
        categoria: "NEAE",
        pregunta: "Se recibe a un estudiante con movilidad reducida (usa silla de ruedas). El centro tiene escaleras y no tiene rampas. La respuesta inmediata de gestión es:",
        opciones: [
            "Decirle a la familia que no puede ser inscrito hasta que el gobierno construya rampas.",
            "Ubicar el curso del estudiante en el primer nivel y gestionar ante el Distrito la adecuación arquitectónica del centro.",
            "Pedirle a los compañeros que carguen al niño por las escaleras todos los días.",
            "Exigirle a la familia que pague la construcción de una rampa privada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. El centro debe realizar ajustes de acceso inmediatos (como reubicación de aula) para garantizar el derecho a la educación mientras se tramitan soluciones definitivas."
    },
    {
        id: 478,
        categoria: "Clima Escolar",
        pregunta: "Un docente expulsa a un estudiante del aula por 'mal comportamiento' y lo deja solo en el pasillo durante dos horas. El psicólogo debe intervenir porque:",
        opciones: [
            "El pasillo está sucio.",
            "Dejar a un estudiante sin supervisión y privarlo de clase vulnera su derecho a la educación y a la protección (Normas de Convivencia).",
            "El psicólogo quiere el pasillo despejado para caminar.",
            "El estudiante podría escaparse de la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas del Sistema de Convivencia. Las medidas disciplinarias no pueden excluir al estudiante del proceso de aprendizaje ni dejarlo sin la debida vigilancia de un adulto."
    },
    {
        id: 479,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Para evaluar la efectividad de las charlas impartidas sobre prevención de embarazo en la adolescencia, el psicólogo debe utilizar:",
        opciones: [
            "La cantidad de aplausos de los estudiantes.",
            "Instrumentos de evaluación (pre-test y post-test) y el seguimiento de indicadores de conducta en el centro.",
            "Su propia opinión subjetiva.",
            "Fotos para las redes sociales del centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024. Toda intervención debe ser evaluada mediante evidencias técnicas para medir el impacto de las acciones preventivas."
    },
    {
        id: 480,
        categoria: "Protección",
        pregunta: "Un estudiante de 4to grado llega con marcas de quemaduras de cigarrillo en la espalda. La madre dice que fue un accidente. El deber del psicólogo es:",
        opciones: [
            "Creerle a la madre para no tener problemas.",
            "Activar la Ruta Crítica de Maltrato Físico Grave, notificando inmediatamente al Ministerio Público de NNA.",
            "Ponerle crema en la herida y mandarlo al curso.",
            "Darle una charla a la madre sobre los peligros del cigarrillo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03 y Ruta Crítica. Ante señales físicas evidentes de maltrato o tortura, la denuncia es obligatoria y no admite demora bajo ninguna justificación familiar."
    },
    {
        id: 481,
        categoria: "NEAE",
        pregunta: "Un estudiante extranjero de habla inglesa se integra a 5to grado de Primaria. No habla español. ¿Qué acción técnica procede?",
        opciones: [
            "Reprobarlo en todas las materias hasta que aprenda español solo.",
            "Implementar un plan de acogida y ajustes curriculares de acceso para la enseñanza del español como segunda lengua.",
            "Prohibirle hablar en inglés dentro de la escuela.",
            "Pedirle que no asista hasta que sus padres le paguen un curso privado de español."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. La barrera lingüística se considera una necesidad de apoyo educativo que requiere ajustes por parte del centro para asegurar la inclusión."
    },
    {
        id: 482,
        categoria: "Clima Escolar",
        pregunta: "Al abordar un conflicto entre dos docentes que afecta el clima del centro, el psicólogo escolar actúa como:",
        opciones: [
            "Juez que decide quién tiene la culpa.",
            "Mediador técnico que facilita la comunicación y el cumplimiento de las normas éticas del centro.",
            "Espía del Director para reportar qué dicen los docentes.",
            "Abogado defensor de uno de los docentes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual de Convivencia y Lineamientos de Psicología. El psicólogo promueve la resolución pacífica de conflictos en toda la comunidad educativa, incluyendo al personal adulto."
    },
    {
        id: 483,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un estudiante de nuevo ingreso presenta un informe de un psicólogo clínico privado que indica que tiene 'Depresión Infantil'. ¿Qué debe hacer el psicólogo escolar?",
        opciones: [
            "Ignorar el informe porque es privado.",
            "Validar la información, integrarla al expediente del estudiante y coordinar con el docente ajustes emocionales y seguimiento en el aula.",
            "Darle terapia de choque en la escuela para que se le quite la depresión.",
            "Publicar la condición del niño en el mural de la escuela para que lo traten con cariño."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024. El centro educativo debe articularse con los especialistas externos que atienden a los estudiantes para dar continuidad al apoyo desde el ámbito escolar."
    },
    {
        id: 484,
        categoria: "Protección",
        pregunta: "Se descubre que un estudiante de 6to grado está siendo víctima de 'Grooming' (acoso por un adulto en internet). ¿Cuál es la prioridad del psicólogo?",
        opciones: [
            "Quitarle el celular y romperlo.",
            "Resguardar las evidencias digitales, informar a la familia y activar la denuncia ante el DICAT y la Fiscalía de NNA.",
            "Darle una charla al estudiante sobre por qué no debe hablar con extraños.",
            "No hacer nada porque el acosador no es de la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 53-07 sobre Crímenes y Delitos de Alta Tecnología y Ruta Crítica. El ciberdelito contra menores requiere intervención legal inmediata y preservación de pruebas."
    },
    {
        id: 485,
        categoria: "NEAE",
        pregunta: "En una evaluación psicopedagógica, se determina que un estudiante tiene un nivel de competencia curricular de dos grados por debajo del que cursa. Esto implica:",
        opciones: [
            "Bajarlo de grado inmediatamente.",
            "Realizar un Ajuste Curricular Significativo en las áreas necesarias.",
            "Expulsarlo por no tener el nivel.",
            "Ponerle un tutor privado pagado por el psicólogo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. Los desfasamientos curriculares significativos en estudiantes con NEAE se abordan mediante ajustes a la planificación, no con la desvinculación del grado."
    },
    {
        id: 486,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El psicólogo escolar debe participar en las reuniones de los Equipos de Gestión (EGE) principalmente para:",
        opciones: [
            "Tomar el dictado de las actas únicamente.",
            "Aportar la mirada técnica sobre el bienestar estudiantil, clima escolar y necesidades de apoyo.",
            "Organizar las fiestas de los docentes.",
            "Decidir a quién se le cancela el contrato de trabajo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo (2015). El psicólogo es parte integral del EGE y su rol es asesorar sobre aspectos socioemocionales y pedagógicos."
    },
    {
        id: 487,
        categoria: "Clima Escolar",
        pregunta: "Un estudiante de 1er grado muerde a otro durante el recreo. La medida formativa correcta es:",
        opciones: [
            "Morder al estudiante para que sepa lo que se siente.",
            "Diálogo reflexivo acorde a su edad, reparación del daño (pedir disculpas) y orientación a la familia sobre manejo de conducta.",
            "Suspensión por 15 días.",
            "Ponerle un bozal durante el horario de clases."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas de Convivencia. En el Nivel Inicial y primer ciclo de Primaria, las medidas deben ser altamente pedagógicas y adaptadas al nivel de desarrollo."
    },
    {
        id: 488,
        categoria: "Protección",
        pregunta: "Según la Ley 136-03, ¿a partir de qué edad un NNA tiene derecho a que su opinión sea escuchada y tomada en cuenta en los procesos que le afecten?",
        opciones: [
            "A partir de los 18 años.",
            "En todas las edades, de acuerdo a su madurez y desarrollo.",
            "Solo si sabe leer y escribir.",
            "Solo si sus padres le dan permiso."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03 (Art. 12). El derecho a la participación y a ser escuchado es un principio fundamental del sistema de protección."
    },
    {
        id: 489,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El 'Expediente del Estudiante' bajo custodia del orientador debe ser:",
        opciones: [
            "De acceso público para cualquier docente.",
            "Confidencial, archivado bajo llave y con acceso restringido solo al personal técnico autorizado.",
            "Guardado en la biblioteca del centro.",
            "Destruido al finalizar cada año escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Código de Ética del Psicólogo y Lineamientos del MINERD. La protección de la información personal es un deber legal y ético estricto."
    },
    {
        id: 490,
        categoria: "Clima Escolar",
        pregunta: "Un docente reporta que un estudiante de 3er grado se 'burla' de los símbolos patrios durante el izamiento de la bandera. La acción del orientador es:",
        opciones: [
            "Solicitar la expulsión del estudiante por traición a la patria.",
            "Trabajar con el estudiante y su familia sobre el respeto a la identidad nacional y los valores cívicos como parte de su formación integral.",
            "Obligar al estudiante a quedarse bajo el sol todo el día como castigo.",
            "No hacer nada, la bandera es solo un trapo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley General de Educación 66-97 y Normas de Convivencia. El fomento de los valores nacionales es un fin de la educación dominicana, y su abordaje ante faltas debe ser formativo."
    },


    {
        id: 491,
        categoria: "Protección",
        pregunta: "Padres en proceso de divorcio sin sentencia judicial de custodia. La madre (quien matriculó a la niña) informa verbalmente a la escuela que el padre no puede retirar a la estudiante de 2do grado. En la salida, el padre se presenta a buscarla. Según el Manual Operativo y la Ley 136-03, ¿cuál es la decisión técnico-administrativa correcta?",
        opciones: [
            "Negar la entrega de la menor al padre amparándose en la solicitud verbal de la madre para evitar conflictos en el recinto.",
            "Entregar a la menor al padre, ya que al no existir una orden de restricción o sentencia judicial, ambos mantienen la patria potestad inalienable.",
            "Retener a la menor en la Dirección, contactar inmediatamente a la madre para que se presente, e informar al padre que por protocolo de seguridad no se puede efectuar la entrega sin el consentimiento de quien firmó la matriculación.",
            "Requerir la intervención de la Policía Escolar para que arreste al padre por alteración del orden institucional."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ley 136-03 y Manual Operativo (2015). Aunque ambos tienen patria potestad (opción B es la trampa legal), la escuela debe salvaguardar la integridad emocional del menor y respetar el contrato de matriculación. Ante un conflicto de custodia in situ sin orden judicial, el centro retiene preventivamente y convoca a la parte matriculante para mediar, evitando entregar al NNA en un escenario de vulnerabilidad o sustracción."
    },
    {
        id: 492,
        categoria: "NEAE",
        pregunta: "Un docente de 4to grado aplica el Diseño Universal para el Aprendizaje (DUA) en su planificación. Sin embargo, un estudiante con Discapacidad Intelectual Moderada no logra alcanzar los indicadores de logro. El docente exige su traslado a un centro especial. Según la Ordenanza 05-2024, ¿qué procede?",
        opciones: [
            "Avalar el traslado, ya que el DUA demostró ser ineficaz y el aula regular no garantiza su derecho al aprendizaje.",
            "Articular con el docente el diseño de Ajustes Curriculares Significativos (ACS), modificando los indicadores de logro y los contenidos, previa evaluación psicopedagógica y consentimiento familiar.",
            "Obligar al docente a seguir aplicando el DUA genérico hasta que el estudiante se adapte por repetición.",
            "Promover al estudiante administrativamente sin evaluación para no vulnerar su autoestima, eximiéndolo de los contenidos no logrados."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. El DUA es el primer nivel de respuesta (preventivo). Si este no es suficiente, la normativa exige pasar al segundo nivel: Ajustes Curriculares Individualizados (en este caso Significativos, pues modifican el currículo), manteniendo la escolarización en el entorno menos restrictivo (aula regular)."
    },
    {
        id: 493,
        categoria: "Clima Escolar",
        pregunta: "Durante una revisión aleatoria de mochilas (operativo de seguridad), se le incauta un cigarrillo electrónico (vape) a un estudiante de 6to grado. La Dirección, amparada en la política de 'Cero Tolerancia', decide su expulsión. Como psicólogo escolar, usted debe establecer que:",
        opciones: [
            "La expulsión es válida y legal, ya que la introducción de sustancias controladas es una falta tipificada como muy grave.",
            "La incautación fue legal, pero la expulsión viola el derecho a la educación. Procede retener el objeto, citar a la familia, derivar a programas de salud y aplicar medidas socioeducativas de permanencia.",
            "El operativo de revisión de mochilas fue ilegal por violar la intimidad del NNA, por lo que el hallazgo es nulo y no procede sanción.",
            "Se debe someter al estudiante a pruebas toxicológicas obligatorias dentro del centro antes de emitir una sanción disciplinaria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas del Sistema de Convivencia Educativa. Introducir sustancias es una falta grave/muy grave, pero la sanción máxima permitida NO es la expulsión definitiva, sino la suspensión temporal acompañada de un proceso restaurativo, formativo y de referimiento al sistema de salud."
    },
    {
        id: 494,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "La Dirección del centro le instruye formalmente organizar y ejecutar un diagnóstico de lectura a todos los estudiantes de 1er ciclo de Primaria con el fin de utilizar los resultados para 'evaluar el desempeño y eficiencia de los docentes'. ¿Cuál es su postura técnica fundamentada?",
        opciones: [
            "Acatar la instrucción, diseñando una rúbrica estandarizada para medir la competencia lectora de manera objetiva.",
            "Declinar la instrucción de evaluar el desempeño docente, aclarando que la función del psicólogo es identificar barreras de aprendizaje en los estudiantes para asesorar pedagógicamente, no realizar auditorías laborales al personal.",
            "Realizar la evaluación, pero entregar los resultados de forma anónima para proteger la identidad de los docentes con bajo rendimiento.",
            "Delegar la aplicación de la prueba a los coordinadores pedagógicos para mantener la neutralidad clínica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo (2015) y Lineamientos 2023-2024. El rol del psicólogo escolar es de apoyo al estudiante y acompañamiento al docente. Utilizar evaluaciones psicopedagógicas como mecanismo punitivo o de auditoría laboral desvirtúa el rol, rompe el clima de confianza y viola las funciones del puesto."
    },
    {
        id: 495,
        categoria: "Protección",
        pregunta: "Una estudiante de Nivel Inicial relata de manera espontánea en el aula que su padrastro le tomó fotografías sin ropa en el baño. La madre, al ser citada, se muestra ofendida, niega el hecho, acusa a la niña de mentir e intenta retirarla de la escuela de forma agresiva. ¿Qué establece la Ruta Crítica?",
        opciones: [
            "Retener a la madre en la escuela mediante la Policía Escolar e interrogar a la niña en su presencia para buscar contradicciones.",
            "Entregar a la menor a la madre para no escalar el conflicto, pero agendar una cita con el padrastro al día siguiente.",
            "Resguardar a la menor en un espacio seguro del centro (no entregarla si hay riesgo inminente), activar a la Dirección y notificar inmediatamente a la Línea Vida, CONANI o Ministerio Público por sospecha de ASI.",
            "Convencer a la madre mediante técnicas de persuasión psicológica para que sea ella quien ponga la denuncia voluntariamente."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica y Ley 136-03. Ante la revelación de Abuso Sexual Infantil (ASI) donde el agresor es del núcleo convivencial y la madre encubre o reacciona con hostilidad, el centro asume el rol de garante primario. No se entrega a la víctima a su presunto entorno agresor sin directriz del Ministerio Público o CONANI."
    },
    {
        id: 496,
        categoria: "NEAE",
        pregunta: "A un estudiante de 3er grado con diagnóstico clínico externo de TDAH se le prescribió medicación controlada. La familia notifica que suspenderá la medicación por problemas económicos. El docente titular se niega a recibir al niño en el aula 'hasta que vuelva a estar medicado'. ¿Qué principio legal aplica?",
        opciones: [
            "El docente tiene la potestad de salvaguardar el orden de su aula exigiendo la continuidad del tratamiento médico.",
            "El centro debe proveer los recursos económicos de sus fondos descentralizados para comprar el medicamento del NNA.",
            "Condicionar el acceso a la educación a un tratamiento farmacológico es un acto discriminatorio, ilegal y violatorio de la Ordenanza 05-2024; el centro debe aplicar estrategias de autorregulación y DUA.",
            "El psicólogo escolar debe suplir la falta de medicación aplicando terapia cognitivo-conductual intensiva diaria en su cubículo."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024 y Ley 136-03. El derecho a la escolarización es incondicional. Ningún actor del sistema educativo puede exigir o condicionar la permanencia de un estudiante a la ingesta de fármacos."
    },
    {
        id: 497,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En la estructuración de su Plan Operativo Anual (POA), usted identifica la necesidad de trabajar la Orientación Vocacional en el segundo ciclo de Primaria. Según los Lineamientos del MINERD, ¿cuál es el enfoque metodológico para este nivel?",
        opciones: [
            "Aplicación de baterías de pruebas de aptitud (Ej. Test de Kuder) para definir un perfil profesional cerrado.",
            "Exploración lúdica de intereses, dignificación de los oficios del entorno y fomento del autoconocimiento como base del Proyecto de Vida.",
            "Orientación exclusiva hacia los liceos de modalidad Técnico-Profesional que existen en el Distrito.",
            "Omitir esta línea de intervención, ya que la orientación vocacional es competencia exclusiva del Nivel Secundario."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos de Orientación y Psicología 2023-2024. En Primaria no se aplican pruebas definitorias de vocación; se trabaja la fase exploratoria y pre-vocacional mediante el autoconocimiento y la valoración del trabajo."
    },
    {
        id: 498,
        categoria: "Clima Escolar",
        pregunta: "Durante una revisión de los expedientes disciplinarios, usted nota que la medida más utilizada por los docentes ante faltas leves (hablar en clase, pararse) es enviar al estudiante fuera del aula por periodos prolongados. Conforme a las Normas de Convivencia, esta práctica:",
        opciones: [
            "Es una estrategia válida de 'tiempo fuera' (time out) respaldada por la psicología conductual.",
            "Es una falta del docente, ya que vulnera el derecho al aprendizaje y el deber de cuidado (supervisión) del menor, exponiéndolo a riesgos.",
            "Solo es permitida si el estudiante es enviado a la oficina del psicólogo para recibir consejería.",
            "Es correcta siempre que el estudiante sea mayor de 10 años y pueda cuidarse solo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas del Sistema de Convivencia del MINERD. Queda expresamente prohibido expulsar a los estudiantes del aula como medida disciplinaria, pues interrumpe su derecho constitucional a la educación y los deja en estado de vulnerabilidad institucional."
    },
    {
        id: 499,
        categoria: "Protección",
        pregunta: "Se detecta que un estudiante de 12 años trabaja de 10:00 p.m. a 3:00 a.m. en una panadería, lo que genera somnolencia diurna extrema y bajo rendimiento escolar. Los padres afirman que 'el trabajo dignifica'. Institucionalmente, el deber del psicólogo es:",
        opciones: [
            "Respetar los valores y pautas de crianza de la familia, limitándose a motivar al estudiante a esforzarse más en clase.",
            "Flexibilizar el horario de entrada del estudiante para que pueda dormir las horas necesarias.",
            "Tipificarlo como Trabajo Infantil en sus Peores Formas (horario nocturno) y notificar al CONANI y Ministerio de Trabajo para restitución de derechos.",
            "Ofrecer al estudiante un trabajo dentro del centro escolar (ej. en la cafetería) para que renuncie al empleo nocturno."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ley 136-03 y Guía de Ruta Crítica. El trabajo nocturno en menores de 14 años es ilegal y constituye una vulneración grave de derechos. La escuela no puede ser cómplice adaptando su currículo a una práctica de explotación laboral."
    },
    {
        id: 500,
        categoria: "NEAE",
        pregunta: "Un estudiante extranjero recién llegado no domina el idioma español (habla creole haitiano). El docente argumenta barrera comunicativa insalvable. Según la Ordenanza 05-2024, ¿cómo se clasifica y aborda esta situación?",
        opciones: [
            "Como barrera sociocultural ajena a la escuela; el estudiante debe permanecer como oyente hasta aprender el idioma por sus medios.",
            "Como Necesidad Específica de Apoyo Educativo (NEAE) transitoria, requiriendo un plan de acogida, ajustes de acceso (comunicación) y apoyo para el aprendizaje del español como segunda lengua.",
            "Como una Discapacidad Intelectual Leve debido a la falta de comprensión de los mandatos áulicos.",
            "El centro debe exigir a la embajada correspondiente un intérprete permanente como condición para la escolarización."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. El desconocimiento del idioma de instrucción es tipificado como una NEAE vinculada a historia personal o sociocultural. Exige respuesta institucional mediante ajustes de acceso y metodológicos, no exclusión."
    },
    {
        id: 501,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Usted es designado a un centro educativo de nueva creación. Para elaborar el Plan Operativo Anual (POA) del Departamento de Psicología, ¿cuál es la primera acción técnica estipulada en los Lineamientos?",
        opciones: [
            "Implementar el mismo POA de su centro anterior, ya que los lineamientos nacionales son universales.",
            "Esperar la primera asamblea de padres para levantar quejas y basar el plan en sus demandas.",
            "Diseñar y aplicar una Evaluación Diagnóstica de Necesidades (Línea Base) dirigida a estudiantes, docentes y familias para contextualizar las intervenciones.",
            "Copiar los objetivos directamente del currículo oficial de Nivel Primario y aplicarlos sin modificaciones."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Manual Operativo y Lineamientos 2023-2024. Toda planificación en Orientación y Psicología parte obligatoriamente de un diagnóstico de contexto (Línea Base) para responder a la realidad biopsicosocial específica de esa comunidad."
    },
    {
        id: 502,
        categoria: "Clima Escolar",
        pregunta: "Estudiantes de 5to grado realizan un 'reto viral' de redes sociales dentro del centro, el cual resulta en el daño físico leve de un compañero. ¿Cuál es el protocolo de abordaje de la Ruta Crítica?",
        opciones: [
            "Considerarlo un juego de niños que salió mal y pedir que se disculpen entre ellos en el recreo.",
            "Prohibir el uso de celulares y suspender de la escuela a todos los que sigan cuentas de redes sociales.",
            "Tratarlo como violencia/riesgo psicosocial: brindar atención al afectado, citar a familias, aplicar medidas formativas y ejecutar prevención grupal sobre ciberseguridad y presión de grupo.",
            "Exigir a los padres del niño herido que presenten una demanda penal contra los compañeros."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica y Normas de Convivencia. Los retos virales que atentan contra la integridad son situaciones de riesgo psicosocial que requieren abordaje correctivo (sanción formativa) y preventivo (educación digital institucional)."
    },
    {
        id: 503,
        categoria: "Protección",
        pregunta: "Una docente reporta que un estudiante de 1er grado presenta constante irritación en su zona genital y conductas sexualizadas inapropiadas para su etapa evolutiva. Según el protocolo del MINERD, ¿cuál es el paso técnico inmediato del psicólogo?",
        opciones: [
            "Realizar un examen físico superficial al menor en el departamento de psicología para confirmar la irritación.",
            "Entrevistar directamente a los padres para indagar si han notado los síntomas y preguntarles si alguien abusa del niño.",
            "Consolidar los indicadores (reporte docente, observación) y notificar al Ministerio Público de NNA por sospecha de ASI, evitando interrogar a la familia.",
            "Aplicar pruebas proyectivas exhaustivas durante varias semanas para tener certeza diagnóstica antes de reportar."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ruta Crítica de Violencia. El profesional escolar NO realiza exámenes físicos ni interrogatorios periciales a sospechosos. Agrupa indicadores observables y ejerce la obligación de denuncia inmediata."
    },
    {
        id: 504,
        categoria: "NEAE",
        pregunta: "Un estudiante con parálisis cerebral es matriculado. El Equipo de Gestión indica que la escuela no puede responsabilizarse si el estudiante no logra controlar sus esfínteres. La Ordenanza 05-2024 dicta que:",
        opciones: [
            "La escuela tiene razón; el control de esfínteres es requisito administrativo para el Nivel Primario.",
            "La familia debe estar presente durante toda la jornada escolar para atender exclusivamente estas necesidades biomédicas.",
            "El centro debe promover la autonomía paulatina, coordinando con la familia los apoyos (ajustes de acceso) necesarios para su higiene y dignidad sin condicionar su escolarización.",
            "El estudiante debe ser derivado a la modalidad de educación a distancia."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. Los requisitos de madurez biomédica no pueden ser usados como barreras de exclusión. La escuela gestiona apoyos y establece acuerdos de corresponsabilidad con la familia garantizando el acceso."
    },
    {
        id: 505,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En una reunión del Equipo de Gestión (EGE), el Director solicita que el psicólogo asuma las horas de docencia de un maestro de Educación Física que está de licencia por un mes. Usted, basándose en el Manual Operativo, responde:",
        opciones: [
            "Aceptar de manera incondicional, ya que el psicólogo es un empleado administrativo sujeto a las órdenes directas del Director.",
            "Rechazar la solicitud, explicando que sus funciones son técnico-asesoras y asumir titularidad de aula paraliza los servicios de prevención, atención a la diversidad y protección del centro.",
            "Aceptar la sustitución, pero exigir un pago doble por asumir funciones ajenas a su contrato.",
            "Negociar impartir Educación Física solo a los cursos que tengan estudiantes con NEAE."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo de los Centros de Orientación y Psicología (2015). El rol técnico está protegido normativamente. Asumir sustituciones docentes constituye una desviación de funciones que vulnera la planificación y la atención psicosocial de toda la matrícula."
    },
    {
        id: 506,
        categoria: "Clima Escolar",
        pregunta: "Una madre se presenta furiosa al centro acusando a un docente de discriminar a su hijo por su religión (pelo largo por voto nazareo). Exige la destitución del maestro. El proceder mediador del orientador es:",
        opciones: [
            "Explicarle a la madre que las normas de higiene del centro están por encima de las creencias religiosas personales.",
            "Apoyar a la madre incondicionalmente y levantar un acta de amonestación contra el docente por intolerancia.",
            "Facilitar un espacio de diálogo respetuoso, amparado en el respeto a la diversidad (Ley 136-03), para armonizar la normativa escolar con el derecho a la identidad religiosa del menor.",
            "Remitir el caso de manera directa al Ministerio de Defensa por tratarse de seguridad nacional."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Manual de Convivencia y Ley 136-03. El derecho a la identidad y libertad de culto es constitucional. El rol del orientador es la mediación para evitar conflictos, asegurando la inclusión y el respeto a la diversidad cultural y religiosa."
    },
    {
        id: 507,
        categoria: "Protección",
        pregunta: "Durante una evaluación psicopedagógica, un niño de 8 años revela que su hermano mayor (17 años), quien también asiste a la misma escuela en secundaria, lo obliga a tocar sus partes íntimas. ¿Cuál es el accionar institucional según la ley dominicana?",
        opciones: [
            "Abordarlo como un conflicto entre pares, realizando mediación entre ambos hermanos en el departamento de psicología.",
            "Informar a los padres para que resuelvan el tema dentro del hogar, ya que ambos son menores de edad de la misma familia.",
            "Garantizar la separación física de ambos en el recinto, notificar al Equipo de Gestión y derivar el reporte de presunto ASI a la fiscalía de NNA/CONANI para su abordaje legal.",
            "Expulsar inmediatamente al hermano de 17 años por constituir un peligro para la comunidad educativa."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ley 136-03 y Ruta Crítica. Un agresor adolescente no exime la figura de Abuso Sexual ni la obligación de denuncia institucional. La escuela debe proteger a la víctima y canalizar el caso por la vía legal para que el Estado intervenga con el agresor menor de edad."
    },
    {
        id: 508,
        categoria: "NEAE",
        pregunta: "Para certificar las adecuaciones realizadas a un estudiante con NEAE asociadas a discapacidad, el docente y el psicólogo deben consolidar la información en un documento técnico legal llamado:",
        opciones: [
            "Registro Anecdótico de Comportamiento Diario.",
            "Plan Educativo Individualizado (PEI) o Documento de Ajustes Curriculares Individualizados (ACI).",
            "Certado de Deficiencia Cognitiva.",
            "Reporte Epidemiológico Escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. El ACI o PEI es el documento oficial y vinculante que operativiza y legitima las modificaciones curriculares (metodología, indicadores, evaluación) para el estudiante."
    },
    {
        id: 509,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al detectar altos niveles de agresividad en los estudiantes durante la hora del almuerzo escolar, la intervención preventiva más adecuada desde el área de Orientación es:",
        opciones: [
            "Suspender el almuerzo escolar para los grupos que presenten mayor incidencia de conflictos.",
            "Diseñar un programa transversal de habilidades para la vida y resolución pacífica de conflictos, articulado con las rutinas de aula.",
            "Patologizar el comportamiento y emitir diagnósticos de Trastorno Negativista Desafiante de forma masiva.",
            "Solicitar la presencia militar (Policía Escolar) armada dentro del comedor estudiantil permanentemente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología 2023-2024. El abordaje preventivo ante disrupciones sistémicas demanda programas formativos en habilidades socioemocionales, promoción de cultura de paz y articulación docente, no respuestas punitivas o restrictivas de derechos fundamentales (como la alimentación)."
    },
    {
        id: 510,
        categoria: "Clima Escolar",
        pregunta: "Ante un estudiante que reiteradamente se niega a realizar las actividades en el aula, desafía al docente y altera el orden (falta grave), el conducto regular para la aplicación de medidas disciplinarias formales requiere la participación de:",
        opciones: [
            "El orientador actuando como figura sancionadora y punitiva primaria.",
            "El Equipo de Gestión, el docente titular, el orientador (como garante del debido proceso y enfoque formativo) y la citación a la familia.",
            "Exclusivamente el Director del centro, quien tiene la potestad de decidir unilateralmente.",
            "El Consejo Estudiantil, quienes deben votar para decidir el castigo de su compañero."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas del Sistema de Convivencia. El debido proceso ante faltas graves es colegiado. El psicólogo no sanciona, sino que asesora para que la medida elegida por el Equipo de Gestión sea pedagógica, proporcional y restituya la convivencia."
    },
    
    {
        id: 511,
        categoria: "Protección",
        pregunta: "Un estudiante de 4to grado de Primaria confía al orientador que su padre, quien tiene un cargo de alta jerarquía en la comunidad, lo golpea con un cinturón 'cuando se porta mal'. El estudiante ruega que no se diga nada por miedo. Según la Ley 136-03 y la ética profesional del MINERD, ¿cuál es la acción imperativa?",
        opciones: [
            "Respetar el deseo del menor para mantener el vínculo de confianza y trabajar pautas de crianza con el padre de forma discreta.",
            "Notificar al Distrito Educativo y al Ministerio Público de NNA inmediatamente, ya que el maltrato físico grave no está sujeto a confidencialidad ni depende del estatus social del agresor.",
            "Realizar una visita domiciliaria sorpresa para constatar las condiciones de la vivienda antes de emitir un reporte formal.",
            "Derivar el caso al consejo de ancianos o líderes religiosos de la comunidad para que medien con el padre."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03 (Art. 14) y Guía de Ruta Crítica. La obligación de denunciar el maltrato físico es absoluta para el personal docente y técnico. No se puede invocar el secreto profesional ni el temor del menor cuando hay una vulneración de integridad física."
    },
    {
        id: 412,
        categoria: "NEAE",
        pregunta: "En una evaluación psicopedagógica, se identifica que un estudiante de 5to grado posee un Coeficiente Intelectual (CI) muy superior al promedio (Altas Capacidades), pero muestra desinterés y bajo rendimiento en las tareas rutinarias. ¿Qué respuesta educativa dicta la Ordenanza 05-2024?",
        opciones: [
            "Exigirle el doble de tareas que a sus compañeros para mantenerlo ocupado y evitar que se aburra.",
            "Implementar Ajustes Curriculares de Enriquecimiento (vertical u horizontal), profundizando en los contenidos o permitiendo proyectos de investigación autónomos.",
            "Promoverlo de grado inmediatamente sin realizar ninguna evaluación adicional para no frenar su desarrollo.",
            "Sugerir a los padres que lo retiren de la escuela pública y lo inscriban en un centro para superdotados, ya que el sistema regular no tiene recursos para él."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. El enriquecimiento curricular es la estrategia de inclusión para altas capacidades dentro del aula regular. La aceleración (promoción de grado) es una opción posterior, pero requiere un proceso administrativo de certificación previo."
    },
    {
        id: 513,
        categoria: "Clima Escolar",
        pregunta: "Un docente de 6to grado solicita al orientador que aplique un 'correctivo psicológico' a un estudiante que usa lenguaje soez. Al indagar, el orientador descubre que el docente suele gritar y ridiculizar al estudiante frente al grupo. ¿Cuál es el abordaje técnico del orientador?",
        opciones: [
            "Aplicar una técnica de modificación de conducta solo al estudiante para que aprenda a respetar la autoridad.",
            "Intervenir de forma sistémica: brindar apoyo socioemocional al estudiante y asesorar al docente en estrategias de disciplina positiva y gestión de aula, recordándole el deber de respeto a la dignidad del NNA.",
            "Reportar al docente ante el Distrito para que sea desvinculado por maltrato verbal sin hablar con él previamente.",
            "Organizar un careo entre el docente y el estudiante en el patio del recreo para que 'se digan sus verdades'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024 y Normas de Convivencia. El orientador no es una figura sancionadora. Su intervención debe ser integral, abordando tanto la conducta del estudiante como la práctica pedagógica del docente que pudiera estar detonando el conflicto."
    },
    {
        id: 514,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Durante la elaboración del informe psicopedagógico de un estudiante con dificultades de aprendizaje, el psicólogo debe incluir 'recomendaciones para el hogar'. ¿Cuál de estas es una recomendación técnicamente alineada al MINERD?",
        opciones: [
            "Indicar a los padres que contraten a un tutor privado que realice las tareas por el niño.",
            "Sugerir el establecimiento de rutinas claras de estudio, fomento de la lectura compartida y refuerzo positivo de los logros, sin sustituir la labor docente.",
            "Recetar vitaminas o suplementos cerebrales para mejorar la retención de memoria.",
            "Pedir a los padres que castiguen al niño sin televisión hasta que sus notas suban a 90 puntos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología. Las recomendaciones para la familia deben ser orientaciones piscoeducativas que fortalezcan el hábito y el entorno, no medidas punitivas ni médicas."
    },
    {
        id: 515,
        categoria: "Protección",
        pregunta: "Un centro educativo recibe una orden judicial de alejamiento contra el padre de una estudiante de 3er grado. El padre se presenta al centro alegando que 'solo quiere ver a su hija cinco minutos'. ¿Cuál es el procedimiento legal del personal?",
        opciones: [
            "Permitir la visita en la oficina de orientación bajo supervisión del psicólogo para no ser inhumanos.",
            "Impedir el acceso de manera tajante, resguardar a la menor y llamar a la Policía Escolar/911 si el padre insiste, respetando estrictamente la orden judicial.",
            "Llamar a la madre para pedirle permiso y ver si ella accede a que el padre la vea.",
            "Entregar a la niña al padre rápidamente para que se vaya y no cause un escándalo en la escuela."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03 y Protocolos de Seguridad Escolar. El incumplimiento de una orden judicial de protección es un delito. La escuela es garante de la seguridad de la menor y debe ejecutar la restricción sin excepciones."
    },
    {
        id: 516,
        categoria: "NEAE",
        pregunta: "Para un estudiante con Discapacidad Motriz que requiere el uso de un andador, ¿cuál de las siguientes acciones se considera un 'Ajuste de Acceso' según la Ordenanza 05-2024?",
        opciones: [
            "Modificar los contenidos de la asignatura de Matemáticas para que sean más fáciles.",
            "Asegurar que los pasillos estén despejados, instalar rampas y colocar el mobiliario de forma que permita el desplazamiento del estudiante.",
            "Eximir al estudiante de participar en todas las actividades fuera del aula.",
            "Asignar a un compañero para que le mueva la silla de ruedas siempre, impidiendo su autonomía."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. Los ajustes de acceso son aquellos que modifican el entorno físico o los materiales para permitir la participación, sin alterar los objetivos de aprendizaje."
    },
    {
        id: 517,
        categoria: "Clima Escolar",
        pregunta: "En una asamblea de la APMAE, varios padres expresan su preocupación porque un estudiante con VIH está matriculado en el centro. Exigen que sea segregado o expulsado. La respuesta institucional del orientador debe ser:",
        opciones: [
            "Acceder a la demanda para calmar a la mayoría de los padres y mantener la paz escolar.",
            "Informar que, por ley, la condición de salud no es motivo de exclusión ni discriminación, y realizar una jornada de sensibilización sobre el derecho a la educación y salud sin revelar la identidad del menor.",
            "Confirmar públicamente quién es el niño para que los padres tomen sus propias medidas de precaución.",
            "Pedir a la familia del niño con VIH que lo retire voluntariamente para 'evitarle problemas'."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Constitución Dominicana, Ley 66-97 y Ley 135-11 sobre VIH. La discriminación por salud es ilegal. El orientador debe educar a la comunidad y proteger el derecho a la educación y la confidencialidad del estudiante."
    },
    {
        id: 518,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un psicólogo escolar detecta que el 60% de los estudiantes de un grado presentan dificultades de comprensión lectora. Según su función de 'asesoría a la práctica pedagógica', ¿qué debe hacer?",
        opciones: [
            "Atender a todos los niños de forma individual en su oficina durante todo el año.",
            "Coordinar con la unidad pedagógica para analizar las estrategias de enseñanza del docente y sugerir metodologías activas y diversificadas de lectura.",
            "Elaborar un reporte diciendo que los niños no sirven para estudiar.",
            "Aplicar una prueba de CI a todos los niños para ver si tienen discapacidad intelectual masiva."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024. Cuando una dificultad afecta a la mayoría de un grupo, el problema suele ser de índole pedagógica o metodológica, no clínica individual."
    },
    {
        id: 519,
        categoria: "Protección",
        pregunta: "Se descubre que una estudiante de 12 años está embarazada. El Equipo de Gestión sugiere que sea transferida a la modalidad de educación para adultos para evitar 'mal ejemplo'. ¿Qué establece la normativa dominicana?",
        opciones: [
            "La transferencia es obligatoria para proteger la moral del centro.",
            "La estudiante tiene derecho a permanecer en su centro y grado habitual; el centro debe garantizar su protección, apoyo emocional y evitar cualquier forma de discriminación o expulsión.",
            "La estudiante debe ser suspendida hasta que dé a luz.",
            "Solo puede seguir si los padres de los demás estudiantes firman un acuerdo de aceptación."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Constitución Dominicana y Ley 136-03. El embarazo no es motivo de exclusión del sistema educativo regular. El centro debe realizar ajustes para su seguimiento médico pero nunca expulsarla o segregarla."
    },
    {
        id: 520,
        categoria: "NEAE",
        pregunta: "El 'Documento de Ajustes Curriculares Individualizados' (ACI) debe ser elaborado por:",
        opciones: [
            "El psicólogo escolar de manera aislada en su cubículo.",
            "El docente de aula de manera unilateral sin consultar a nadie.",
            "El docente de aula con la asesoría técnica del psicólogo/orientador y el aval de la coordinación pedagógica.",
            "El conserje del centro junto con el comité de padres."
        ],
        respuestaCorrecta: 2,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. El ACI es un trabajo colaborativo donde el docente (dueño del proceso pedagógico) recibe el apoyo técnico del psicólogo para realizar las adecuaciones necesarias."
    },
    {
        id: 521,
        categoria: "Clima Escolar",
        pregunta: "Un estudiante de 1er grado tiene crisis de llanto incontrolable cada vez que su madre lo deja en la puerta. ¿Cuál es la intervención técnica inicial recomendada?",
        opciones: [
            "Dejar que el niño llore hasta que se canse para que aprenda que la madre no volverá pronto.",
            "Implementar un plan de acogida afectivo, permitiendo una transición gradual y trabajando vínculos de seguridad con el docente y el orientador.",
            "Llamar a la madre para que se lleve al niño y lo intente de nuevo el próximo año.",
            "Administrar un sedante ligero al menor con autorización del Director."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos del Nivel Inicial/Primaria. El proceso de adaptación requiere un abordaje empático y estrategias de transición que aseguren el bienestar emocional del menor."
    },
    {
        id: 522,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En una visita de acompañamiento distrital, se observa que el orientador no tiene al día el 'Registro Anecdótico' de los casos de protección. ¿Qué tipo de falta constituye esto según el Manual Operativo?",
        opciones: [
            "Ninguna, el registro es opcional.",
            "Una debilidad en el desempeño de sus funciones técnicas de documentación y seguimiento, sujeta a recomendaciones de mejora administrativa.",
            "Un delito penal que conlleva arresto inmediato.",
            "Una razón para que el Distrito le asigne más horas de clase."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo y Estatuto del Docente. El manejo de registros técnicos es una obligación del cargo para asegurar la continuidad y legalidad de los procesos."
    },
    {
        id: 523,
        categoria: "Protección",
        pregunta: "Se sospecha que un estudiante es víctima de trata de personas (explotación mendicante en las calles). ¿Cuál es la institución principal a la que el centro debe referir el caso tras activar la Ruta Crítica?",
        opciones: [
            "Al Ayuntamiento municipal.",
            "Al Ministerio Público y al CONANI.",
            "A la Cruz Roja.",
            "A una ONG de protección animal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03. CONANI y el Ministerio Público son los entes rectores del sistema de protección ante vulneraciones graves de derechos."
    },
    {
        id: 524,
        categoria: "NEAE",
        pregunta: "Un estudiante con Trastorno del Espectro Autista (TEA) no verbal utiliza un tablero de comunicación con pictogramas. ¿Esto se considera?",
        opciones: [
            "Una trampa para no aprender a hablar.",
            "Un Sistema Alternativo y Aumentativo de Comunicación (SAAC), que constituye un ajuste de acceso fundamental.",
            "Un juguete que distrae a los demás compañeros.",
            "Una herramienta que solo debe usarse en la casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. Los SAAC son apoyos técnicos esenciales para garantizar el derecho a la comunicación y participación de estudiantes con discapacidades específicas."
    },
    {
        id: 525,
        categoria: "Clima Escolar",
        pregunta: "Un grupo de estudiantes de 6to grado ha creado una página de 'confesiones' en Instagram donde se burlan de la apariencia física de otros niños. El orientador debe:",
        opciones: [
            "Ignorarlo porque las redes sociales no son propiedad de la escuela.",
            "Identificar a los administradores, aplicar medidas restaurativas (concientización sobre el daño) y trabajar el uso ético de la tecnología con el grupo y familias.",
            "Reportar la página a la policía para que todos los niños vayan presos.",
            "Pedirle al informático de la escuela que hackee la cuenta."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas de Convivencia y Guía de Ruta Crítica (Ciberacoso). El acoso fuera del centro que repercute en el clima escolar debe ser abordado formativamente por la institución."
    },
    {
        id: 526,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Según el Calendario Escolar vigente, el mes de noviembre se destaca por la promoción de:",
        opciones: [
            "La salud bucal.",
            "La Familia y la prevención de la violencia contra la mujer.",
            "El carnaval dominicano.",
            "El ahorro nacional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Calendario Escolar MINERD. Noviembre es el mes de la familia y se conmemora la No Violencia contra la Mujer (hermanas Mirabal), temas ejes de la planificación de orientación."
    },
    {
        id: 527,
        categoria: "Protección",
        pregunta: "Al entrevistar a un estudiante que presenta moretones, este dice: 'Mi mamá me dio porque rompí un plato, pero ella me quiere'. ¿Cómo debe actuar el profesional?",
        opciones: [
            "Aceptar que fue un método de corrección culturalmente aceptado y no intervenir.",
            "Informar que el castigo físico está prohibido por ley, reportar el caso según el protocolo y orientar a la madre sobre métodos de disciplina no violentos.",
            "Llamar a la madre para decirle que el niño la 'delató'.",
            "Darle un plato nuevo al niño para que no lo vuelvan a golpear."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03. El derecho a la integridad física es absoluto. La 'intención de educar' no justifica el uso de la violencia física contra un NNA."
    },
    {
        id: 528,
        categoria: "NEAE",
        pregunta: "Un estudiante de 2do grado no ha logrado la alfabetización inicial, mientras que el resto del curso sí. El psicólogo sospecha de una dificultad específica de aprendizaje. ¿Cuál es el paso previo a la evaluación psicopedagógica profunda?",
        opciones: [
            "Dejarlo repetir el grado automáticamente.",
            "Agotar la fase de intervención pedagógica intensiva y observación sistemática por parte del docente con apoyo del orientador.",
            "Enviarlo a neurología de una vez.",
            "Pedirle a la madre que le enseñe ella en la casa."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos de Orientación. Antes de diagnosticar, se debe asegurar que el estudiante haya recibido las oportunidades pedagógicas adecuadas y observar su respuesta a la intervención."
    },
    {
        id: 529,
        categoria: "Clima Escolar",
        pregunta: "Se produce una pelea física entre dos estudiantes en el patio. Tras separarlos, la primera acción del psicólogo es:",
        opciones: [
            "Determinar quién empezó para castigarlo.",
            "Garantizar la integridad física de ambos (primeros auxilios si aplica) y proporcionar un espacio de calma antes de iniciar el proceso de mediación.",
            "Obligarlos a darse un abrazo frente a todos.",
            "Llamar a los padres para que se los lleven suspendidos de inmediato."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas de Convivencia. La prioridad inicial es la contención emocional y la seguridad física, antes de proceder con la investigación o medidas disciplinarias."
    },
    {
        id: 530,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "La participación de los estudiantes en los Consejos de Curso es una estrategia para:",
        opciones: [
            "Que los estudiantes limpien el aula.",
            "Fomentar el liderazgo, la participación democrática y el sentido de pertenencia en el marco de la cultura de paz.",
            "Que los estudiantes elijan a qué docente quieren despedir.",
            "Evitar que el docente trabaje durante una hora."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 66-97 y Lineamientos de Orientación. El Consejo de Curso es el órgano de participación estudiantil por excelencia para el desarrollo de valores ciudadanos."
    },

    {
        id: 531,
        categoria: "Protección",
        pregunta: "Un orientador recibe información confidencial de que un grupo de estudiantes de 6to grado está siendo captado por una red de 'prestamistas' externos que operan cerca del centro. ¿Cuál es el protocolo de actuación inmediata según la gestión de riesgos?",
        opciones: [
            "Confrontar a los prestamistas personalmente fuera del centro para advertirles sobre las consecuencias legales.",
            "Documentar los casos identificados, informar al Equipo de Gestión y activar la denuncia ante la Policía Escolar y el Ministerio Público para la protección del entorno escolar.",
            "Prohibir que los estudiantes salgan del centro durante el recreo hasta que la red desaparezca por sí sola.",
            "Dar una charla general sobre ahorro y finanzas personales a los estudiantes sin mencionar el peligro real."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica y Manual Operativo. El centro educativo debe garantizar un entorno seguro; ante amenazas externas que vulneren a los menores, la articulación con las autoridades de seguridad y el Ministerio Público es el paso legal obligatorio."
    },
    {
        id: 532,
        categoria: "NEAE",
        pregunta: "Un estudiante con discapacidad visual parcial solicita realizar sus exámenes en formato digital con un lector de pantalla. El docente se niega alegando que esto le da una 'ventaja injusta'. Según la Ordenanza 05-2024, usted debe:",
        opciones: [
            "Aceptar la postura del docente para evitar conflictos en el cuerpo docente.",
            "Establecer que el uso de tecnologías asistivas es un 'Ajuste de Acceso' obligatorio y un derecho que garantiza la equidad, no una ventaja competitiva.",
            "Sugerir que el estudiante aprenda Braille de inmediato para que pueda examinarse en papel como los demás.",
            "Pedirle a otro estudiante que le lea las preguntas en voz alta durante el examen regular."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. El uso de recursos tecnológicos para compensar una discapacidad es un derecho fundamental dentro de la educación inclusiva para eliminar barreras de acceso al currículo."
    },
    {
        id: 533,
        categoria: "Clima Escolar",
        pregunta: "Se detecta que un estudiante de 5to grado es objeto de burlas constantes por su peso (body shaming) en el grupo de WhatsApp del curso. El orientador interviene y los estudiantes agresores dicen que 'solo es una broma'. ¿Cuál es la medida socioeducativa correcta?",
        opciones: [
            "Obligar a los agresores a pedir disculpas públicas en el izamiento de bandera.",
            "Realizar un proceso restaurativo donde los agresores comprendan el impacto emocional de sus actos y se establezcan compromisos de cambio de conducta supervisados.",
            "Expulsar a los líderes del grupo de WhatsApp por 3 días para que reflexionen.",
            "Borrar el grupo de WhatsApp y prohibir el uso de tecnología a todos los estudiantes del grado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas del Sistema de Convivencia. Las medidas ante el acoso escolar deben ser restaurativas y formativas, buscando la empatía y la reparación del daño, evitando acciones que humillen aún más a los involucrados."
    },
    {
        id: 534,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El psicólogo escolar observa que la mayoría de los informes de aprendizaje de los estudiantes con NEAE están incompletos en el registro de grado. ¿A qué instancia debe reportar técnicamente esta necesidad de apoyo?",
        opciones: [
            "Directamente al Ministro de Educación mediante una carta pública.",
            "A la Unidad de Orientación y Psicología y a la Coordinación Pedagógica del centro para organizar un taller de capacitación sobre registros inclusivos.",
            "Al comité de padres y madres para que presionen a los docentes.",
            "No reportar, ya que el llenado del registro no es responsabilidad del psicólogo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo (2015). El psicólogo asesora la práctica pedagógica. Detectar fallas en el registro de los apoyos a la diversidad requiere una intervención de capacitación y acompañamiento técnico interno."
    },
    {
        id: 535,
        categoria: "Protección",
        pregunta: "Un niño de 1er grado llega al centro con evidencias de desnutrición severa y falta de higiene personal persistente. Los padres no asisten a las citas. Tras agotar las visitas domiciliarias, el centro debe:",
        opciones: [
            "Seguir enviando circulares hasta que los padres respondan.",
            "Referir el caso al CONANI por negligencia parental grave, ya que la salud y el bienestar del menor están en riesgo inminente.",
            "Comprar comida para el niño con los fondos del centro sin reportar a nadie.",
            "Solicitar que el niño sea transferido a un internado privado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03 y Ruta Crítica. La negligencia que afecta la salud y el desarrollo del menor es una forma de maltrato. Si la familia no responde a la intervención escolar, el Estado (CONANI) debe intervenir."
    },
    {
        id: 536,
        categoria: "NEAE",
        pregunta: "Ante un estudiante con Trastorno de Conducta diagnosticado, el docente titular pierde la paciencia y le dice 'tú no sirves para estar aquí'. El orientador, al presenciar esto, debe:",
        opciones: [
            "Darle la razón al docente, ya que el comportamiento del niño es difícil.",
            "Intervenir para modelar una comunicación asertiva, proteger la integridad emocional del menor y posteriormente realizar un acompañamiento técnico al docente sobre manejo conductual.",
            "Ignorar el comentario para no restarle autoridad al docente frente a los estudiantes.",
            "Llevarse al niño del aula y decirle que no vuelva hasta que el docente se calme."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Estatuto del Docente y Normas de Convivencia. El respeto a la dignidad del estudiante es innegociable. El orientador debe garantizar el buen trato y apoyar al docente en el manejo de crisis."
    },
    {
        id: 537,
        categoria: "Clima Escolar",
        pregunta: "Para fortalecer la 'Cultura de Paz' en un centro con altos niveles de conflictividad, ¿cuál es la estrategia técnica más efectiva según los Lineamientos del MINERD?",
        opciones: [
            "Contratar más agentes de seguridad privada para vigilar los pasillos.",
            "Implementar el programa de Mediación de Pares, capacitando a estudiantes para que ayuden a resolver conflictos menores entre ellos.",
            "Instalar cámaras de seguridad en todos los baños y aulas.",
            "Suspender las actividades artísticas y deportivas para que los estudiantes solo se enfoquen en estudiar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología (2023-2024). La mediación de pares es una estrategia clave para empoderar a los estudiantes y reducir la violencia escolar mediante el diálogo."
    },
    {
        id: 538,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Se le solicita al psicólogo escolar que realice una evaluación de 'madurez para el aprendizaje' a niños de Nivel Inicial que van a ingresar a 1er grado de Primaria. El psicólogo debe saber que:",
        opciones: [
            "La evaluación es obligatoria para decidir quién entra y quién se queda fuera del sistema.",
            "Los resultados deben usarse únicamente para planificar los apoyos pedagógicos iniciales, nunca para negar la inscripción o el acceso al grado.",
            "Solo deben evaluarse los niños que se portan mal.",
            "La evaluación de madurez es un proceso clínico que solo se hace en hospitales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza de Evaluación del Nivel Primario. La evaluación diagnóstica tiene fines pedagógicos y de apoyo, no es un criterio de exclusión para el ingreso a la educación obligatoria."
    },
    {
        id: 539,
        categoria: "Protección",
        pregunta: "Se confirma que un estudiante es víctima de abuso sexual por parte de un vecino. La familia pide que 'no se haga un escándalo' y que la escuela no reporte a la justicia. El deber del orientador es:",
        opciones: [
            "Respetar el derecho a la privacidad de la familia y no reportar.",
            "Explicar a la familia que el centro tiene la obligación legal irrenunciable de denunciar, procediendo a activar la Ruta Crítica de inmediato.",
            "Esperar a que el niño cumpla 18 años para que él decida si quiere denunciar.",
            "Mudarse de barrio para no tener que lidiar con el problema."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03. El personal educativo que tenga conocimiento de un delito contra un menor y no lo reporte incurre en responsabilidad penal por omisión."
    },
    {
        id: 540,
        categoria: "NEAE",
        pregunta: "Un estudiante con TDAH olvida constantemente sus materiales. El docente le quita 5 puntos de su nota final por cada olvido. Esta práctica es:",
        opciones: [
            "Correcta, para que el estudiante aprenda a ser responsable.",
            "Incorrecta, ya que la evaluación debe considerar las características de la NEAE del estudiante; se deben aplicar apoyos organizativos en lugar de sanciones académicas.",
            "Permitida si el psicólogo no ha entregado un informe formal todavía.",
            "Válida solo si se aplica a todos los estudiantes por igual."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. La evaluación para estudiantes con NEAE debe ajustarse a sus necesidades. Sancionar síntomas de un trastorno (como la desorganización en el TDAH) es una barrera pedagógica injusta."
    },
    {
        id: 541,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al recibir un nuevo grupo de estudiantes, el psicólogo identifica un alto índice de familias monoparentales con jefatura femenina en situación de vulnerabilidad. ¿Cuál es la intervención prioritaria?",
        opciones: [
            "Dar una charla sobre por qué es mejor tener una familia tradicional.",
            "Fortalecer los vínculos escuela-familia mediante programas de Escuela de Padres contextualizados y coordinar con redes de apoyo social locales.",
            "Pedir a las madres que no trabajen para que cuiden mejor a sus hijos.",
            "No intervenir, ya que la estructura familiar no afecta el aprendizaje."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual de Familia y Escuela. El orientador debe trabajar con la realidad de las familias del centro, brindando herramientas que fortalezcan su rol protector y educativo en su contexto real."
    },
    {
        id: 542,
        categoria: "Protección",
        pregunta: "En el marco del ERP, si un estudiante presenta ideación suicida expresada en un dibujo, la acción de mayor nivel de desempeño profesional es:",
        opciones: [
            "Guardar el dibujo en el expediente y esperar a ver si el niño vuelve a dibujar algo similar.",
            "Realizar una entrevista de valoración de riesgo inmediata, contactar a la familia, asegurar que el menor no se quede solo y referir de urgencia a salud mental.",
            "Darle una charla sobre por qué la vida es bella y mandarlo a clases.",
            "Llamar a los bomberos para que hablen con el estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Protocolos de Intervención en Crisis del MINERD. La ideación suicida requiere una respuesta inmediata de protección, vigilancia y referimiento clínico para salvaguardar la vida."
    },
    {
        id: 543,
        categoria: "Clima Escolar",
        pregunta: "Un grupo de docentes se queja de que el orientador 'no hace nada' porque no ven que esté castigando a los estudiantes. El orientador debe explicar que:",
        opciones: [
            "Su función no es castigar, sino mediar, prevenir y acompañar procesos socioemocionales para mejorar la convivencia.",
            "Empezará a dar correazos para que los docentes vean que sí trabaja.",
            "Los docentes tienen razón y debe disculparse.",
            "Solo castiga a los estudiantes que el Director le ordena."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Manual Operativo (2015). El rol del orientador y psicólogo es técnico-pedagógico y preventivo, no disciplinario-punitivo. Es vital clarificar las funciones para una buena gestión del clima laboral."
    },
    {
        id: 544,
        categoria: "NEAE",
        pregunta: "Un estudiante con Discapacidad Intelectual Leve en 6to grado está en proceso de transición a secundaria. El orientador debe asegurar que:",
        opciones: [
            "El expediente psicopedagógico con todos los ajustes realizados (ACI/PEI) sea transferido formalmente al nuevo centro para garantizar la continuidad del apoyo.",
            "El nuevo centro no sepa nada de la discapacidad para que el niño 'empiece de cero'.",
            "El niño sea inscrito en una escuela técnica de alto nivel de dificultad.",
            "El estudiante abandone los estudios para que no sufra en secundaria."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. La continuidad de los apoyos educativos es un principio de la educación inclusiva; el expediente es la herramienta técnica que garantiza este derecho en la transición."
    },
    {
        id: 545,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "En la planificación de las intervenciones grupales, el orientador debe incluir temas de 'Cuidado del Medio Ambiente' porque:",
        opciones: [
            "Es un tema de moda en las redes sociales.",
            "Es un Eje Transversal del Currículo Dominicano que contribuye a la formación de ciudadanos responsables.",
            "El Director quiere ganar un premio de reciclaje.",
            "Es una forma de perder el tiempo cuando no hay clases."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Currículo Dominicano (Base de la Revisión Curricular). Los ejes transversales deben ser integrados en las intervenciones de orientación para una formación integral."
    },
    {
        id: 546,
        categoria: "Protección",
        pregunta: "Un estudiante de 12 años ha comenzado a faltar a clases dos veces por semana. Al indagar, se descubre que está trabajando como 'cobrador' en una ruta de transporte local. Según el protocolo:",
        opciones: [
            "Se le debe permitir trabajar si ayuda económicamente a su abuela.",
            "Se debe activar el protocolo de prevención de deserción escolar y notificar al Ministerio de Trabajo por tratarse de trabajo infantil prohibido.",
            "El orientador debe ir a trabajar con el niño para cuidarlo.",
            "Expulsar al niño de la escuela por no cumplir con la asistencia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03 y Guía de Ruta Crítica. La escuela debe intervenir para reintegrar al estudiante y denunciar la explotación laboral de menores."
    },
    {
        id: 547,
        categoria: "Clima Escolar",
        pregunta: "Se produce un rumor malintencionado sobre la vida privada de una estudiante, lo que genera que sus compañeras la aíslen. Esta forma de violencia se denomina:",
        opciones: [
            "Conflicto de intereses.",
            "Violencia relacional o social (Bullying indirecto).",
            "Disciplina positiva fallida.",
            "Falta de higiene escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Normas de Convivencia. El aislamiento social provocado por rumores es una forma de acoso escolar que requiere intervención inmediata para restaurar el clima."
    },
    {
        id: 548,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Un docente de nuevo ingreso no sabe cómo trabajar con los estudiantes de 'bajo rendimiento'. El orientador debe:",
        opciones: [
            "Decirle que lea los libros de pedagogía en su casa.",
            "Brindarle acompañamiento técnico, compartiendo estrategias de diversificación de la enseñanza y manejo de grupos heterogéneos.",
            "Pedirle al Director que despida al docente por incompetente.",
            "Hacerse cargo de todos los niños con bajo rendimiento en su oficina."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología. El apoyo técnico al docente es una función sustantiva para mejorar la calidad educativa del centro."
    },
    {
        id: 549,
        categoria: "NEAE",
        pregunta: "La 'evaluación psicopedagógica' es un proceso que busca identificar:",
        opciones: [
            "Quién es el niño más inteligente del aula.",
            "Las barreras al aprendizaje y las necesidades específicas de apoyo educativo para diseñar una respuesta inclusiva.",
            "El grado de culpabilidad de los padres en el fracaso del niño.",
            "Qué medicación necesita el estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024. La evaluación psicopedagógica es una herramienta diagnóstica para la inclusión, no para el etiquetado clínico o la exclusión."
    },
    {
        id: 550,
        categoria: "Clima Escolar",
        pregunta: "Al finalizar una charla sobre prevención de drogas, varios estudiantes se acercan con dudas personales. El orientador debe:",
        opciones: [
            "Decirles que ya terminó su hora de trabajo y que se vayan a sus casas.",
            "Brindar un espacio de escucha individual segura, evaluar factores de riesgo y dar seguimiento o referimiento si es necesario.",
            "Contarles sus experiencias personales con las drogas para que aprendan.",
            "Ignorarlos para no fomentar que los niños hablen de temas prohibidos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos 2023-2024. Las intervenciones grupales suelen detonar necesidades individuales; el orientador debe estar disponible para canalizar estas inquietudes de forma técnica y ética."
    },

{
        id: 551,
        categoria: "Protección",
        pregunta: "Durante una sesión de seguimiento individual en el nivel Primario, una estudiante de 9 años manifiesta espontáneamente que su padrastro 'le toca cuando está dormida'. La maestra de grado desconoce la situación. Conforme al protocolo institucional vigente del MINERD, ¿cuál es la acción inmediata que debe ejecutar el/la psicólogo/a escolar?",
        opciones: [
            "Registrar el relato textual de la estudiante en el expediente psicológico, notificar de forma verbal y escrita al director/a del centro educativo ese mismo día, y activar la Ruta Crítica institucional comunicando el caso al equipo de gestión para su reporte obligatorio ante las autoridades de protección competentes (CONANI o Ministerio Público).",
            "Citar a la madre biológica de la estudiante para corroborar la información antes de proceder con cualquier notificación institucional, a fin de evitar consecuencias precipitadas para la familia.",
            "Derivar el caso directamente al orientador/a escolar del centro para que este gestione la comunicación con la familia y determine si la situación amerita notificación externa.",
            "Elaborar un informe psicológico detallado de la estudiante durante las próximas 72 horas y remitirlo al técnico distrital de psicología para que este centralice la decisión de notificación."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ley 136-03, Art. 19 (obligación de denuncia inmediata de toda persona que tenga conocimiento de maltrato o abuso sexual a NNA); Guía de Ruta Crítica MINERD (la notificación al director/a es el primer eslabón interno obligatorio ese mismo día); Manual Operativo de los COP (2015), sección de protección: el psicólogo/a activa la ruta interna y registra el relato sin cuestionar al niño/a ni confrontar al posible agresor. Ninguna otra opción cumple la secuencia correcta: la opción B viola el protocolo al anteponer la verificación familiar; la C traslada una responsabilidad indelegable; la D incumple la inmediatez que exige la Ruta Crítica."
    },
 
    {
        id: 552,
        categoria: "NEAE",
        pregunta: "El director de un centro de Primaria solicita al/la psicólogo/a escolar que emita de manera urgente, en un plazo de 24 horas, un diagnóstico psicológico formal de un estudiante de 2.º grado con presuntas dificultades de aprendizaje, con el propósito de justificar ante los padres la ubicación del niño en un aula de apoyo. ¿Cuál es la respuesta procedimental correcta del/la psicólogo/a escolar conforme a los lineamientos del MINERD?",
        opciones: [
            "Aceptar el requerimiento del director/a y emitir un informe preliminar en 24 horas basado en la observación conductual del estudiante en el aula, difiriendo la evaluación formal para una etapa posterior.",
            "Informar al director/a que el proceso de evaluación psicopedagógica para determinar Necesidades Específicas de Apoyo Educativo (NEAE) requiere la aplicación de un protocolo de evaluación estructurado, la obtención del consentimiento informado de los padres o tutores, y no puede comprimirse a 24 horas, procediendo a establecer un cronograma evaluativo conforme a los Lineamientos de Orientación y Psicología 2023-2024.",
            "Solicitar al técnico distrital de psicología que realice la evaluación dada la urgencia planteada por el director/a, reservándose la función de acompañamiento familiar.",
            "Aplicar de forma inmediata una prueba de inteligencia estandarizada disponible en el centro y entregar los resultados al director/a dentro del plazo solicitado, dejando constancia escrita de la instrucción recibida."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024): el proceso de identificación de NEAE contempla etapas secuenciales que incluyen revisión de expediente, entrevista con docentes y familia, aplicación de instrumentos estandarizados y elaboración de informe. Ordenanza 05-2024, Art. 8: la evaluación para fines de educación inclusiva exige consentimiento informado de la familia. Manual Operativo COP (2015): el psicólogo/a escolar no puede emitir diagnósticos bajo presión administrativa que comprometan la validez técnica del proceso. Las opciones A y D vulneran los estándares éticos y técnicos; la C transfiere una responsabilidad que corresponde al psicólogo/a del centro."
    },
 
    {
        id: 553,
        categoria: "Clima Escolar",
        pregunta: "Tres maestros del nivel Primario reportan al/la psicólogo/a escolar que un grupo de estudiantes de 5.º grado manifiesta conductas de rechazo sistemático y exclusión deliberada hacia un compañero con discapacidad física, que incluyen burlas en el recreo y negativa colectiva a trabajar con él en actividades grupales. El director/a del centro no ha sido informado. ¿Cuál es la secuencia de intervención institucional correcta?",
        opciones: [
            "Convocar de manera inmediata a los estudiantes identificados como agresores a una sesión grupal de confrontación directa facilitada por el psicólogo/a, para que reconozcan el impacto de sus conductas ante el estudiante afectado.",
            "Registrar la situación, informar al director/a del centro, coordinar con el equipo de gestión una intervención en tres niveles (estudiante afectado, grupo-aula y comunidad educativa), y articular acciones con el docente de aula conforme al protocolo de convivencia escolar y los lineamientos de educación inclusiva de la Ordenanza 05-2024.",
            "Remitir el caso al orientador/a escolar para que este gestione la intervención con el grupo, limitando la actuación del psicólogo/a al acompañamiento individual del estudiante afectado.",
            "Citar a los padres y madres de los estudiantes involucrados antes de realizar cualquier intervención en el centro, con el objetivo de obtener su autorización para trabajar con los menores."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024 (Lineamientos para la Educación Inclusiva): prohíbe toda forma de discriminación hacia estudiantes con discapacidad y establece la responsabilidad del equipo de gestión en garantizar entornos inclusivos. Manual Operativo COP (2015): la intervención en clima escolar es competencia del psicólogo/a e implica actuación sistémica (individual, grupal e institucional). Lineamientos 2023-2024: el director/a debe ser informado antes de ejecutar intervenciones grupales. La opción A puede revictimizar o escalar el conflicto; la C fracciona la responsabilidad indebidamente; la D antepone el permiso familiar a la intervención institucional obligatoria."
    },
 
    {
        id: 554,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Una maestra de 1.er grado del nivel Primario refiere al/la psicólogo/a escolar a un estudiante de 6 años porque 'no aprende igual que los demás', presenta dificultades para reconocer letras y números, se distrae frecuentemente y en ocasiones llora sin razón aparente. Los padres refieren que el niño 'es sano'. ¿Cuál es el primer paso procedimental que debe ejecutar el/la psicólogo/a escolar?",
        opciones: [
            "Iniciar directamente la aplicación de una batería de evaluación neuropsicológica para descartar un trastorno del neurodesarrollo, dado que los indicadores clínicos presentados justifican la evaluación especializada sin demora.",
            "Revisar el expediente académico y de salud del estudiante, realizar una observación estructurada en el aula, entrevistar a la maestra referidora y solicitar entrevista con los padres o tutores para obtener historia de desarrollo, como parte del proceso de evaluación inicial conforme a los Lineamientos de Orientación y Psicología 2023-2024.",
            "Orientar a la maestra para que adapte sus estrategias pedagógicas durante un período de 30 días calendario antes de iniciar cualquier proceso de evaluación psicológica, conforme al principio de intervención en el aula previa a la derivación.",
            "Elaborar un informe de derivación externa hacia un especialista en neurología pediátrica, dado que los síntomas descritos superan el ámbito de acción del psicólogo/a escolar en el nivel Primario."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024): establecen que el proceso de evaluación psicológica escolar comienza con la revisión del expediente, la observación en contexto y las entrevistas con actores clave (docente y familia) antes de aplicar instrumentos formales. Manual Operativo COP (2015): la recogida de información multicontextual es un requisito previo ineludible. La opción A omite pasos esenciales del protocolo; la C demora indebidamente el proceso evaluativo cuando hay señales que requieren atención; la D realiza una derivación externa prematura sin haber completado la evaluación institucional."
    },
 
    {
        id: 555,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar de un centro de Inicial detecta, durante una evaluación de rutina, que una niña de 4 años presenta moretones en los brazos y muslos en distintos estadios de cicatrización. Al ser preguntada con lenguaje apropiado para su edad, la niña responde que 'papi la pega con el cinturón cuando llora'. La tutora del aula no estaba al tanto. Conforme a la Ley 136-03 y la Ruta Crítica del MINERD, ¿qué acción es mandatoria e impostergable?",
        opciones: [
            "Registrar los hallazgos físicos y el relato de la niña, notificar al director/a del centro ese mismo día mediante comunicación escrita, y gestionar conjuntamente con el equipo de gestión la denuncia ante el CONANI o el Ministerio Público dentro de las siguientes 24 horas, sin confrontar al padre ni informarle previamente.",
            "Informar a la tutora del aula para que convoque a los padres a una reunión, durante la cual el psicólogo/a mediará entre la familia y el centro a fin de establecer compromisos de cambio en las prácticas disciplinarias.",
            "Solicitar al médico escolar o al personal de salud del centro que documente los signos físicos antes de proceder con cualquier notificación institucional, para garantizar la validez evidentística del caso.",
            "Elaborar un plan de intervención psicológica de cuatro sesiones con la niña y comunicar los hallazgos al técnico distrital de orientación y psicología en el informe mensual correspondiente."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ley 136-03, Art. 19: toda persona que tenga conocimiento de una situación de maltrato a un NNA está obligada a denunciarla de forma inmediata. Guía de Ruta Crítica MINERD: prohíbe explícitamente alertar al presunto agresor antes de la denuncia, pues ello puede poner en mayor riesgo al NNA. Manual Operativo COP (2015): el psicólogo/a notifica al director/a el mismo día; el equipo de gestión activa la ruta externa. La opción B confronta a la familia y viola el principio de no re-victimización; la C antepone la documentación médica a la notificación inmediata; la D difiere la denuncia al ciclo mensual de informes, lo que es inaceptable en casos de maltrato activo."
    },
 
    {
        id: 556,
        categoria: "NEAE",
        pregunta: "Los padres de un estudiante de 3.er grado con diagnóstico externo de Trastorno por Déficit de Atención e Hiperactividad (TDAH) presentan al psicólogo/a escolar un informe médico privado y solicitan que el centro implemente de inmediato 'lo que diga el doctor'. El informe recomienda reducir la carga de tareas en un 50%, ubicar al niño en un aula especial separada y exonerarle de evaluaciones escritas. ¿Cuál es la actuación correcta del/la psicólogo/a escolar?",
        opciones: [
            "Implementar de inmediato todas las recomendaciones del informe médico externo, dado que provienen de un especialista y prevalecen sobre los criterios institucionales del MINERD.",
            "Recibir y registrar el informe externo como insumo diagnóstico, convocar una reunión del equipo interdisciplinario del centro (director/a, docente, psicólogo/a, orientador/a) para analizar las recomendaciones a la luz de los Lineamientos de Orientación y Psicología 2023-2024 y la Ordenanza 05-2024, y diseñar un Plan de Apoyo Individualizado (PAI) que articule las adecuaciones curriculares pertinentes según la normativa del MINERD.",
            "Solicitar a los padres un segundo informe de un especialista vinculado al sistema de salud público antes de iniciar cualquier tipo de adecuación curricular en el centro educativo.",
            "Derivar la solicitud de los padres al técnico distrital de psicología para que este valide el informe externo y autorice las adecuaciones curriculares específicas señaladas por el médico privado."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024, Art. 11-14: las adecuaciones curriculares para estudiantes con NEAE se establecen mediante un proceso institucional liderado por el equipo del centro, no por prescripción médica unilateral. Lineamientos de Orientación y Psicología 2023-2024: el informe externo es un insumo, no una orden ejecutable directamente; debe analizarse en equipo. Manual Operativo COP (2015): la ubicación en aula separada como primera medida contraviene el principio de inclusión educativa. La opción A transfiere la autoridad pedagógica al sector salud; la C demora sin justificación el apoyo al estudiante; la D renuncia a la función técnica del psicólogo/a del centro."
    },
 
    {
        id: 557,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Durante el primer trimestre, el/la psicólogo/a escolar identifica que cuatro estudiantes de 4.º grado presentan un patrón común de bajo rendimiento académico, ausentismo intermitente y retraimiento social. Al revisar sus expedientes, constata que los cuatro provienen de familias en situación de vulnerabilidad socioeconómica severa y que ninguno ha recibido intervención psicológica previa. ¿Cuál es el procedimiento institucional adecuado?",
        opciones: [
            "Iniciar sesiones de terapia psicológica individual con cada uno de los cuatro estudiantes de manera simultánea, priorizando la intervención clínica sobre cualquier otra acción institucional.",
            "Sistematizar los hallazgos, presentarlos al equipo de gestión del centro, diseñar un plan de intervención psicológica y psicosocial que incluya seguimiento individualizado, coordinación con los docentes para estrategias diferenciadas en aula, y articulación con redes de protección social del territorio, conforme al Manual Operativo COP (2015).",
            "Remitir los cuatro casos al orientador/a escolar para la gestión familiar, dado que el origen de las dificultades es de naturaleza social y no psicológica, reservando la intervención del psicólogo/a para casos con diagnóstico clínico formal.",
            "Elaborar informes de derivación externa para cada estudiante hacia servicios de salud mental comunitaria, dado que la complejidad de los casos supera las competencias del psicólogo/a escolar en el contexto de un centro educativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el psicólogo/a escolar tiene competencia en intervención psicosocial, no solo clínica individual; la articulación con el equipo de gestión y las redes externas es parte de su función. Lineamientos de Orientación y Psicología 2023-2024: ante patrones de vulnerabilidad múltiple, la intervención debe ser sistémica e institucional, no exclusivamente individual. La opción A reduce la intervención a lo clínico individual; la C hace una distinción falsa entre lo social y lo psicológico; la D realiza derivaciones externas antes de agotar la intervención institucional."
    },
 
    {
        id: 558,
        categoria: "Protección",
        pregunta: "Un estudiante de 5.º grado entrega al/la psicólogo/a escolar una nota escrita en la que manifiesta: 'ya no quiero vivir, me quiero morir, nadie me quiere en esta escuela ni en mi casa'. El estudiante solicita que el psicólogo/a 'no le diga nada a nadie'. ¿Cuál es la acción institucional correcta e inmediata?",
        opciones: [
            "Respetar la solicitud de confidencialidad del estudiante, dado que la relación terapéutica se fundamenta en la confianza, y programar una sesión individual para la próxima semana con el objetivo de evaluar el nivel de riesgo.",
            "Explicar al estudiante de manera empática que existen situaciones en que la confidencialidad no puede mantenerse por razones de seguridad, evaluar de forma inmediata el nivel de riesgo suicida mediante un protocolo de valoración de crisis, notificar al director/a del centro ese mismo día, contactar a los padres o tutores, y garantizar que el estudiante no quede solo hasta que se establezca un plan de seguridad, conforme a los Lineamientos de Orientación y Psicología 2023-2024.",
            "Notificar únicamente al director/a del centro mediante una nota escrita y aguardar sus instrucciones antes de tomar cualquier medida adicional, dado que la autoridad máxima del proceso recae en la dirección.",
            "Derivar de inmediato al estudiante a un servicio de salud mental externo sin informar a la familia, dado que la situación supera el nivel de intervención del psicólogo/a escolar y requiere atención especializada urgente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos de Orientación y Psicología (Actualización 2023-2024): ante indicadores de riesgo suicida, la confidencialidad tiene límites claros; la seguridad del NNA prevalece. Manual Operativo COP (2015): el psicólogo/a escolar debe realizar valoración de riesgo inmediata, activar la ruta interna e involucrar a la familia ese mismo día. Ley 136-03, Art. 15: el interés superior del NNA obliga a priorizar su seguridad sobre cualquier otro principio procedimental. La opción A diferida vulnera el deber de protección; la C delega la decisión al director sin actuar; la D excluye a la familia de una situación de emergencia."
    },
 
    {
        id: 559,
        categoria: "Clima Escolar",
        pregunta: "El/la psicólogo/a escolar es informado/a por varios estudiantes de 6.º grado que un compañero está siendo víctima de acoso escolar (bullying) sostenido por parte de un grupo de estudiantes, que incluye agresiones verbales, exclusión de grupos de mensajería digital y sustracción de materiales escolares. El estudiante víctima ha pedido a sus compañeros que no 'lo digan'. ¿Cuál es el procedimiento institucional correcto?",
        opciones: [
            "Entrevistar de manera conjunta y simultánea al estudiante víctima y a los presuntos agresores en una sesión de mediación facilitada por el psicólogo/a, con el fin de que las partes lleguen a un acuerdo directo.",
            "Realizar entrevistas individuales y separadas con el estudiante víctima (garantizando su seguridad y confidencialidad apropiada), documentar los hechos, informar al director/a del centro, y coordinar un plan de intervención escalonado que incluya trabajo con los agresores, el grupo-aula y las familias, conforme a la Guía de Ruta Crítica y los Lineamientos 2023-2024.",
            "Comunicar la situación únicamente al orientador/a escolar para que este active el protocolo de convivencia, dado que el bullying es una problemática de convivencia y no de salud mental.",
            "Citar a los padres de los presuntos agresores antes de entrevistar al estudiante víctima, para garantizar el debido proceso y evitar posibles reclamaciones de las familias hacia el centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica MINERD: prohíbe la mediación directa entre víctima y agresor en casos de acoso escolar, pues genera revictimización. Manual Operativo COP (2015): el psicólogo/a escolar es actor clave en la identificación e intervención en situaciones de violencia escolar, con un rol específico diferenciado del orientador/a. Lineamientos 2023-2024: la intervención en bullying es sistémica e incluye todos los actores de la comunidad educativa. Ley 136-03: la protección de la integridad del NNA es prioritaria. La opción A revictimiza; la C fracciona artificialmente la responsabilidad; la D antepone el proceso familiar a la seguridad de la víctima."
    },
 
    {
        id: 560,
        categoria: "NEAE",
        pregunta: "Una maestra de Inicial refiere al/la psicólogo/a escolar a un niño de 5 años porque 'no habla como los demás', solo produce algunas palabras aisladas, presenta dificultades para mantener contacto visual, realiza movimientos repetitivos con las manos y muestra interés exclusivo en alinear objetos. Los padres refieren que 'así es él, es tímido'. ¿Cuál es la actuación técnicamente correcta del/la psicólogo/a escolar como primer paso institucional?",
        opciones: [
            "Comunicar a los padres que el niño presenta signos compatibles con Trastorno del Espectro Autista (TEA) y debe ser evaluado por un neurólogo pediátrico de manera urgente, antes de iniciar cualquier proceso de evaluación interna.",
            "Iniciar el proceso de evaluación psicológica escolar conforme al protocolo institucional: revisión del expediente, observación estructurada en el aula, entrevista de historia de desarrollo con los padres, aplicación de instrumentos de tamizaje del desarrollo disponibles en el centro, y elaboración de un informe con recomendaciones que puede incluir derivación externa especializada si los hallazgos lo justifican, conforme a los Lineamientos 2023-2024 y la Ordenanza 05-2024.",
            "Orientar a la maestra para que implemente estrategias de estimulación del lenguaje en el aula durante 60 días antes de iniciar el proceso de evaluación psicológica, dado que el niño aún está en el rango de variabilidad del desarrollo normal para su edad.",
            "Registrar la referencia de la maestra en el expediente del estudiante y aguardar a que los padres soliciten formalmente la evaluación psicológica, dado que sin el consentimiento parental no es posible iniciar ningún proceso de valoración."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos de Orientación y Psicología (Actualización 2023-2024): ante señales de alerta del desarrollo, el psicólogo/a inicia el protocolo de evaluación institucional sin demora; la derivación externa es una posible recomendación posterior, no el primer paso. Ordenanza 05-2024: la identificación temprana de necesidades es una responsabilidad del sistema educativo. Manual Operativo COP (2015): el psicólogo/a no puede emitir diagnósticos clínicos (como TEA), pero sí aplicar tamizajes y elaborar recomendaciones. La opción A excede el rol del psicólogo/a escolar al aproximarse a un diagnóstico; la C demora una evaluación que los indicadores hacen prioritaria; la D confunde el consentimiento para evaluar (que la escuela puede gestionar) con la inacción."
    },
 
    {
        id: 561,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al inicio del año escolar, el/la psicólogo/a escolar revisa los expedientes de los estudiantes promovidos a 3.er grado y detecta que 8 de ellos fueron referidos el año anterior por dificultades lectoras significativas, pero ninguno recibió seguimiento psicológico formal durante ese período. El técnico distrital no ha emitido lineamientos específicos para este grupo. ¿Cuál es la acción institucional correcta?",
        opciones: [
            "Esperar los lineamientos del técnico distrital antes de iniciar cualquier acción, dado que la planificación de intervenciones psicológicas a nivel de grupo requiere autorización del nivel distrital.",
            "Incluir a estos estudiantes en el plan de trabajo anual del psicólogo/a escolar, priorizar su evaluación durante el primer trimestre, informar al director/a y coordinar con los docentes de 3.er grado estrategias de acompañamiento pedagógico diferenciado, conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024.",
            "Elaborar un informe colectivo dirigido al técnico distrital describiendo la situación de los ocho estudiantes y aguardar la validación de dicho nivel antes de proceder con la evaluación individual.",
            "Referir los ocho casos directamente a un especialista en dificultades de aprendizaje externo al sistema, dado que la acumulación de rezago sin intervención indica que la situación supera la capacidad de respuesta del psicólogo/a escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el plan de trabajo anual del psicólogo/a escolar debe incluir la atención prioritaria a estudiantes con historial de dificultades no atendidas; la planificación es una responsabilidad autónoma del psicólogo/a a nivel de centro. Lineamientos 2023-2024: la coordinación con docentes es parte integral del rol del psicólogo/a. La opción A subordina la intervención institucional a la validación distrital, vulnerando la autonomía técnica del psicólogo/a; la C demora la acción; la D realiza derivaciones externas prematuras sin haber completado la evaluación institucional."
    },
 
    {
        id: 562,
        categoria: "Protección",
        pregunta: "Una madre se presenta al centro educativo visiblemente alterada y exige hablar con el/la psicólogo/a escolar para que 'le diga todo lo que su hijo ha contado en las sesiones', argumentando que tiene derecho a saber lo que ocurre con su hijo menor de edad. El estudiante (10 años) ha compartido en sesiones información sobre conflictos familiares graves. ¿Cuál es la respuesta institucional correcta del/la psicólogo/a escolar?",
        opciones: [
            "Facilitar a la madre toda la información compartida por el estudiante durante las sesiones, dado que los padres y tutores tienen autoridad legal sobre sus hijos menores de edad y el psicólogo/a no puede anteponer la confidencialidad ante la tutela parental.",
            "Explicar a la madre los alcances y límites de la confidencialidad en el ámbito escolar conforme a los lineamientos del MINERD, informarle sobre el proceso y los objetivos de la intervención de manera general, sin revelar el contenido específico de las sesiones, a menos que exista un riesgo inminente para la seguridad del estudiante que lo justifique, conforme al Manual Operativo COP (2015).",
            "Derivar a la madre al director/a del centro para que este decida el nivel de información que debe ser compartido con la familia, eximiéndose el psicólogo/a de gestionar directamente el conflicto con la tutora.",
            "Suspender de inmediato el proceso de intervención psicológica con el estudiante hasta tanto los padres firmen un nuevo consentimiento informado que aclare los límites de la confidencialidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): la confidencialidad en el proceso psicológico escolar protege la relación terapéutica y el bienestar del estudiante; los padres reciben información general del proceso, no el contenido de las sesiones, salvo riesgo comprobado. Lineamientos 2023-2024: el psicólogo/a gestiona directamente la comunicación con las familias dentro de los límites éticos y normativos establecidos. La opción A vulnera la confidencialidad sin justificación de riesgo; la C delega la función al director sin razón técnica; la D penaliza al estudiante por la demanda de la madre."
    },
 
    {
        id: 563,
        categoria: "Clima Escolar",
        pregunta: "El/la psicólogo/a escolar observa durante el recreo que un docente del nivel Primario increpa públicamente a un estudiante de 2.º grado frente a sus compañeros, le grita que 'es un burro' y lo empuja hacia la fila. Ningún otro adulto del centro presencia el episodio. ¿Cuál es la actuación institutionalmente correcta del/la psicólogo/a escolar?",
        opciones: [
            "Intervenir verbalmente en el momento para detener la situación, confrontar al docente frente a los estudiantes y exigirle que se retire del patio, ejerciendo la autoridad del psicólogo/a sobre el personal docente.",
            "Registrar los hechos observados con fecha, hora y descripción detallada, atender al estudiante afectado para valorar su estado emocional, y reportar la situación al director/a del centro mediante comunicación formal ese mismo día, conforme a la Guía de Ruta Crítica y el Estatuto del Docente Dominicano, sin confrontar públicamente al docente para preservar el orden institucional.",
            "Conversar de manera privada con el docente involucrado al final de la jornada para orientarle sobre el manejo adecuado de la disciplina en el aula, resolviendo la situación en el nivel de relaciones entre pares profesionales sin escalarla a la dirección.",
            "Documentar la situación en el informe mensual que se remite al técnico distrital, dado que los conflictos entre docentes y estudiantes son competencia del nivel distrital cuando involucran a miembros del personal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica MINERD: el maltrato de un adulto hacia un NNA en el contexto escolar activa la ruta interna; el primer eslabón es el director/a. Ley 136-03, Art. 19: obliga a reportar situaciones de maltrato conocidas por testigos directos. Estatuto del Docente Dominicano: el maltrato verbal y físico de docentes hacia estudiantes está tipificado como falta grave sujeta a proceso administrativo. Manual Operativo COP (2015): el psicólogo/a no tiene autoridad disciplinaria sobre el personal docente; su rol es atender al estudiante y reportar formalmente. La opción A excede el rol del psicólogo/a; la C omite la notificación obligatoria al director; la D demora inaceptablemente la denuncia."
    },
 
    {
        id: 564,
        categoria: "NEAE",
        pregunta: "Los padres de una estudiante de 4.º grado solicitan al/la psicólogo/a escolar que retire del expediente académico de su hija el informe de evaluación psicológica elaborado el año anterior, argumentando que dicho informe 'la discrimina y la etiqueta'. La estudiante recibe actualmente adecuaciones curriculares basadas en ese informe. ¿Cuál es la respuesta institucional correcta?",
        opciones: [
            "Retirar el informe del expediente académico en atención a la solicitud legítima de los padres como tutores legales, y suspender las adecuaciones curriculares hasta que se realice una nueva evaluación.",
            "Explicar a los padres la función técnica y el carácter confidencial del informe psicológico dentro del expediente escolar, el impacto que su retiro tendría en la continuidad del apoyo a su hija, y escalar la solicitud al director/a para que el equipo de gestión y el psicólogo/a definan conjuntamente una respuesta institucional, sin proceder a retirar el informe de manera unilateral, conforme al Manual Operativo COP (2015).",
            "Aceptar la solicitud de los padres, retirar el informe del expediente y elaborar un nuevo proceso de evaluación desde cero, dado que el derecho de los padres prevalece sobre el criterio técnico del psicólogo/a.",
            "Remitir la solicitud al técnico distrital de psicología para que este emita una resolución vinculante sobre si el informe debe o no mantenerse en el expediente académico de la estudiante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): los informes psicológicos son documentos técnicos del expediente escolar; su modificación o retiro requiere análisis institucional y no puede realizarse unilateralmente por el psicólogo/a ni por los padres. Ordenanza 05-2024: las adecuaciones curriculares se sustentan en documentación técnica evaluativa; su interrupción sin proceso afecta el derecho a la educación inclusiva de la estudiante. Lineamientos 2023-2024: las decisiones sobre expedientes de estudiantes con NEAE son competencia del equipo de gestión. Las opciones A y C vulneran el proceso institucional; la D transfiere indebidamente al nivel distrital una decisión que inicia en el centro."
    },
 
    {
        id: 565,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al finalizar el segundo trimestre, el/la psicólogo/a escolar constata que de los 12 estudiantes incluidos en su plan de intervención individual, solamente 4 han asistido con regularidad a las sesiones programadas. Los padres de los 8 restantes no han respondido a las citaciones enviadas. El director/a no ha dado seguimiento a la situación. ¿Cuál es el procedimiento institucional correcto?",
        opciones: [
            "Cerrar los casos de los 8 estudiantes por inasistencia, dado que sin la participación de la familia no es posible sostener un proceso de intervención psicológica efectivo en el contexto escolar.",
            "Documentar formalmente el patrón de inasistencia, presentar la situación al director/a mediante informe escrito, proponer estrategias alternativas de vinculación con las familias (contacto telefónico, visitas coordinadas con el orientador/a, coordinación con redes comunitarias), y mantener activos los expedientes, conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024.",
            "Visitar de manera individual los hogares de los 8 estudiantes durante el horario extracurricular para establecer contacto directo con las familias y garantizar su participación en el proceso de intervención.",
            "Remitir los 8 casos al técnico distrital de orientación y psicología como situaciones de abandono del proceso, para que este determine la pertinencia de continuar o cerrar la intervención desde el nivel distrital."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el cierre de casos requiere un proceso formal, no puede hacerse por inasistencia sin agotar estrategias de vinculación; el director/a debe ser informado y es parte del equipo responsable. Lineamientos 2023-2024: el psicólogo/a escolar tiene entre sus funciones la articulación con familias y la coordinación con otros actores institucionales para garantizar la continuidad de los procesos. La opción A cierra casos sin agotar el protocolo; la C excede el rol del psicólogo/a escolar (las visitas domiciliarias son una acción que requiere coordinación institucional y no se realizan de manera individual por el psicólogo/a); la D delega al nivel distrital una decisión que corresponde al centro."
    },
 
    {
        id: 566,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar recibe la visita de un funcionario que se identifica como trabajador social del CONANI, quien solicita información sobre el expediente psicológico de un estudiante que está bajo investigación por presunto maltrato intrafamiliar. El funcionario no presenta orden escrita ni credencial formal, solo una identificación verbal. ¿Cuál es la actuación correcta?",
        opciones: [
            "Facilitar de inmediato el expediente psicológico del estudiante al funcionario del CONANI, dado que dicha institución tiene autoridad legal sobre los casos de protección infantil y la colaboración interinstitucional es un deber del psicólogo/a escolar.",
            "Solicitar al funcionario la presentación de credenciales formales y documentación escrita que acredite la solicitud oficial de información, informar al director/a del centro de la situación antes de facilitar cualquier documento, y canalizar la solicitud a través de los mecanismos formales de coordinación interinstitucional establecidos por el MINERD, conforme al Manual Operativo COP (2015).",
            "Entregar al funcionario un resumen verbal del caso sin revelar el expediente físico, dado que la información verbal no constituye entrega formal de documentos y permite la colaboración sin violar la confidencialidad.",
            "Negar toda información al funcionario externo, dado que la confidencialidad del expediente psicológico escolar no admite excepciones bajo ninguna circunstancia, ni siquiera ante organismos de protección estatal."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el expediente psicológico es un documento de acceso restringido; su entrega a terceros requiere documentación formal y la autorización del director/a del centro. Ley 136-03: establece mecanismos de coordinación interinstitucional formal entre el sistema educativo y los organismos de protección; no autoriza el acceso informal a expedientes. Lineamientos 2023-2024: la coordinación con entidades externas debe documentarse y canalizarse institucionalmente. La opción A omite los controles de seguridad documental; la C vulnera la confidencialidad mediante información verbal no documentada; la D niega absolutamente la colaboración interinstitucional que la Ley 136-03 sí contempla por vías formales."
    },
 
    {
        id: 567,
        categoria: "Clima Escolar",
        pregunta: "El/la psicólogo/a escolar es convocado/a por el director/a para participar en una reunión con los padres de un estudiante de 5.º grado que presenta conductas disruptivas graves y reiteradas en el aula. El director/a le solicita al psicólogo/a que en la reunión le comunique a los padres que 'si el niño no mejora, será excluido del centro'. ¿Cuál es la actuación correcta del/la psicólogo/a escolar?",
        opciones: [
            "Cumplir la instrucción del director/a y comunicar a los padres la posibilidad de exclusión, dado que el director/a es la autoridad máxima del centro y el psicólogo/a debe acatar sus directrices en el ámbito administrativo.",
            "Informar al director/a, antes de la reunión, que la comunicación de una posible exclusión escolar no es parte de la función del psicólogo/a; participar en la reunión desde su rol técnico, presentando una valoración del estudiante, las intervenciones realizadas y las recomendaciones de apoyo, conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024, y señalando que la exclusión escolar no está contemplada como medida en la normativa del MINERD para casos de conducta.",
            "Ausentarse de la reunión para no verse involucrado/a en una comunicación que no corresponde a su función técnica, remitiendo al director/a al orientador/a escolar para que este lo acompañe en dicha reunión.",
            "Participar en la reunión y asumir el rol de mediador/a entre el director/a y los padres, evitando tomar posición sobre la pertinencia o no de la posible exclusión escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el psicólogo/a escolar tiene un rol técnico definido; no es su función comunicar medidas administrativas disciplinarias. Ley 136-03, Art. 45: todo NNA tiene derecho a la educación; la exclusión como medida disciplinaria contraviene este derecho. Lineamientos 2023-2024: ante conductas disruptivas, el protocolo de intervención implica evaluación, apoyo y coordinación, no exclusión. Estatuto del Docente Dominicano: establece conductos regulares para conflictos estudiantiles. La opción A subordina el criterio técnico al mandato administrativo; la C abandona el proceso sin justificación; la D asume un rol de mediador neutral que elude la responsabilidad técnica."
    },
 
    {
        id: 568,
        categoria: "NEAE",
        pregunta: "Un estudiante de 1.er grado del nivel Primario con diagnóstico de discapacidad auditiva moderada asiste al centro sin ningún tipo de adecuación curricular implementada, porque el docente de aula manifiesta que 'no sabe cómo trabajar con él' y que 'debería estar en una escuela especial'. Los padres no han sido informados de esta posición del docente. ¿Cuál es la actuación correcta del/la psicólogo/a escolar?",
        opciones: [
            "Acordar con el docente que el estudiante sea promovido al siguiente grado sin evaluación formal, para evitar que permanezca en un entorno donde el docente no tiene las competencias para atenderlo adecuadamente.",
            "Documentar la situación, informar al director/a del centro, coordinar con el equipo de gestión la implementación de adecuaciones curriculares conforme a la Ordenanza 05-2024, orientar al docente sobre estrategias inclusivas desde el rol del psicólogo/a, informar a los padres de la situación y del plan de apoyo diseñado, y de ser necesario, solicitar acompañamiento del técnico distrital de educación inclusiva.",
            "Derivar al estudiante a una escuela especial conforme a la opinión del docente, dado que el centro ordinario no cuenta con los recursos ni el personal capacitado para garantizar una educación de calidad al estudiante.",
            "Citar a los padres para comunicarles que el centro no tiene capacidad para atender las necesidades del estudiante y orientarles sobre centros especializados disponibles en el distrito, sin involucrar al director/a ni al equipo de gestión en la decisión."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024 (Lineamientos para la Educación Inclusiva): el sistema educativo dominicano es inclusivo por mandato normativo; ningún estudiante con discapacidad puede ser excluido de la escuela regular sin un proceso institucional formal. La derivación a escuela especial requiere evaluación integral y decisión del equipo de gestión, no opinión unilateral del docente. Manual Operativo COP (2015): el psicólogo/a escolar tiene un rol clave en la orientación docente y la coordinación del equipo de gestión en casos de inclusión. La opción A vulnera el derecho a la educación; la C ejecuta una exclusión sin proceso formal; la D excluye al director/a de una decisión que le corresponde."
    },
 
    {
        id: 569,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El/la psicólogo/a escolar diseña e implementa, de manera autónoma y sin informar al director/a ni coordinar con los docentes, un taller grupal de habilidades socioemocionales para todos los estudiantes de 3.er grado, ocupando dos horas de las asignaturas de Lengua Española y Matemáticas durante tres semanas consecutivas. Al finalizar, los docentes se quejan ante el director/a. ¿Qué principio del Manual Operativo COP (2015) fue vulnerado en este proceso?",
        opciones: [
            "El principio de interdisciplinariedad, dado que el taller debió ser cofacilitado con el orientador/a escolar para garantizar la integralidad de la intervención.",
            "El principio de coordinación institucional e integración curricular: las intervenciones del psicólogo/a escolar que afectan el tiempo curricular deben ser coordinadas y autorizadas por el director/a del centro e integradas al plan de trabajo institucional, sin interrumpir unilateralmente los procesos de enseñanza de otras áreas.",
            "El principio de evaluación de impacto, dado que el psicólogo/a debió aplicar pre y post test para medir la efectividad del taller antes de ejecutarlo con toda la población estudiantil.",
            "El principio de participación familiar, dado que los padres debieron ser consultados y dar su consentimiento antes de que sus hijos participaran en talleres de habilidades socioemocionales."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): todas las intervenciones del psicólogo/a escolar que afectan la dinámica institucional, incluyendo el uso del tiempo curricular, deben ser planificadas, coordinadas y autorizadas por el director/a del centro como parte del plan de trabajo anual. La autonomía técnica del psicólogo/a no incluye la decisión unilateral de modificar el horario escolar. Lineamientos 2023-2024: la coordinación con el equipo directivo es un principio rector de la función psicológica escolar. Estatuto del Docente: el director/a es la autoridad académica del centro. Las demás opciones señalan principios reales pero no son el que fue vulnerado de manera primaria en el escenario descrito."
    },
 
    {
        id: 570,
        categoria: "Protección",
        pregunta: "Durante el proceso de evaluación psicológica de un estudiante de 4.º grado, el/la psicólogo/a escolar identifica que el niño presenta indicadores compatibles con exposición crónica a violencia doméstica (testigo de violencia entre sus padres), aunque no hay evidencia de maltrato directo hacia el niño. Los padres conviven juntos y el niño no ha sido objeto de ninguna denuncia. ¿Cuál es la actuación institucional correcta?",
        opciones: [
            "No activar ninguna ruta de protección, dado que el estudiante no es víctima directa de maltrato y la violencia entre adultos convivientes es una situación de la esfera privada familiar que no corresponde al ámbito de intervención del psicólogo/a escolar.",
            "Documentar los indicadores identificados, informar al director/a del centro, diseñar un plan de intervención psicológica para el estudiante que aborde el impacto de la exposición a la violencia doméstica, y valorar conjuntamente con el equipo de gestión si la situación requiere la activación de la Ruta Crítica de protección conforme a la Ley 136-03 y los Lineamientos 2023-2024, dado que la exposición a violencia doméstica constituye una forma de maltrato emocional reconocida.",
            "Citar a ambos padres de manera conjunta para una sesión de orientación sobre los efectos de la violencia doméstica en el desarrollo infantil, con el objetivo de promover un cambio en la dinámica familiar desde el centro educativo.",
            "Referir el caso directamente al Ministerio Público sin informar previamente al director/a del centro, dado que la violencia doméstica es un delito que debe ser reportado directamente a las autoridades penales por quien lo conoce."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03, Art. 3 y 5: la exposición de un NNA a violencia doméstica es reconocida como una forma de maltrato emocional y pone en riesgo su desarrollo integral, independientemente de que sea victima directa de agresión física. Guía de Ruta Crítica MINERD: la valoración del riesgo y la decisión de activar la ruta de protección es una decisión del equipo de gestión del centro, no unilateral del psicólogo/a. Manual Operativo COP (2015): el psicólogo/a documenta, informa e interviene con el estudiante afectado. La opción A normaliza una situación de riesgo para el NNA; la C convoca conjuntamente a dos adultos en conflicto, lo que puede escalar el riesgo; la D omite el conducto regular interno obligatorio (director/a) antes de la notificación externa."
    },

   {
        id: 571,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El/la psicólogo/a escolar de un centro de Primaria recibe la referencia de una maestra de 4.º grado que reporta que un estudiante de 9 años ha bajado significativamente su rendimiento académico en el último mes, se muestra aislado, llora con frecuencia y ha manifestado que 'extraña mucho a su papá'. Al indagar, el psicólogo/a se entera de que el padre del niño falleció hace seis semanas en un accidente. La familia no ha buscado apoyo externo. ¿Cuál es la intervención psicológica escolar correcta en esta situación?",
        opciones: [
            "Remitir de inmediato al estudiante a un servicio de salud mental externo especializado en duelo, dado que el proceso de pérdida parental supera el nivel de intervención del psicólogo/a en el contexto escolar y requiere atención clínica especializada.",
            "Abrir un expediente de seguimiento, iniciar acompañamiento psicológico individual al estudiante dentro del centro educativo con enfoque en el proceso de duelo, coordinar con la maestra estrategias de apoyo en el aula, establecer contacto con la familia para orientación y acompañamiento, e informar al director/a del centro sobre el caso y el plan de intervención, conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024.",
            "Orientar a la maestra para que brinde apoyo emocional al estudiante en el aula durante el período de adaptación al duelo, sin abrir un expediente psicológico formal para evitar estigmatizar al niño en un momento de vulnerabilidad familiar.",
            "Citar únicamente a la madre o tutor/a del estudiante para orientarla sobre recursos externos de apoyo en duelo disponibles en la comunidad, limitando la intervención del psicólogo/a escolar al rol de gestor de derivaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el acompañamiento en situaciones de crisis vitales como el duelo es una función específica del psicólogo/a escolar dentro del centro; la derivación externa es una posible medida complementaria, no la primera respuesta. Lineamientos de Orientación y Psicología 2023-2024: el psicólogo/a escolar tiene competencia en intervención ante crisis emocionales y debe actuar con la familia y el equipo docente de manera coordinada. La opción A deriva prematuramente sin agotar la intervención institucional; la C invisibiliza la situación sin abrir proceso formal; la D reduce el rol del psicólogo/a a gestor de derivaciones, lo cual contradice el Manual Operativo."
    },
 
    {
        id: 572,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar es informado/a por la conserje del centro de que frecuentemente observa a un estudiante de 2.º grado llegar sin desayunar, con la misma ropa varios días seguidos y con señales visibles de descuido en su higiene personal. La maestra del grado confirma que el niño a veces dice tener hambre y que sus útiles están deteriorados. Los padres no han asistido a ninguna reunión del año. ¿Cuál es la actuación institucional correcta del/la psicólogo/a escolar?",
        opciones: [
            "Registrar los indicadores observados, informar al director/a del centro mediante comunicación formal, coordinar con el equipo de gestión la activación de la Ruta Crítica por posible situación de negligencia o descuido parental conforme a la Ley 136-03, y articular con las redes de protección social disponibles en el territorio, garantizando el seguimiento al estudiante desde el centro.",
            "Visitar el hogar del estudiante de manera individual para verificar directamente las condiciones de vida de la familia antes de activar cualquier ruta de protección, con el objetivo de no perjudicar injustamente a los padres con una denuncia precipitada.",
            "Orientar a la maestra para que, en la medida de lo posible, facilite al estudiante alimentos del merienda escolar y útiles adicionales, y aguardar hasta reunir más evidencias antes de informar al director/a o activar cualquier protocolo institucional.",
            "Elaborar un informe de situación y remitirlo al técnico distrital de orientación y psicología en el próximo informe mensual, dado que la decisión de activar la Ruta Crítica por negligencia requiere validación del nivel distrital."
        ],
        respuestaCorrecta: 0,
        explicacion: "Base Normativa REAL: Ley 136-03, Art. 3: la negligencia o descuido parental que afecta la salud, higiene y alimentación del NNA constituye una forma de maltrato por omisión. Guía de Ruta Crítica MINERD: los indicadores múltiples y sostenidos de descuido activan la ruta interna de protección; el primer paso es informar al director/a. Manual Operativo COP (2015): el psicólogo/a escolar no realiza visitas domiciliarias de manera individual; estas se coordinan institucionalmente. La opción B expone al psicólogo/a y a la institución sin seguir el protocolo. La opción C normaliza la situación y retrasa la protección. La opción D demora inaceptablemente la notificación ante indicadores activos de negligencia."
    },
 
    {
        id: 573,
        categoria: "NEAE",
        pregunta: "El/la psicólogo/a escolar concluye el proceso de evaluación de un estudiante de 3.er grado e identifica que presenta dificultades específicas de aprendizaje en el área de la lectura (dislexia) que requieren adecuaciones curriculares. Al presentar los resultados al equipo de gestión, el coordinador pedagógico señala que 'en este centro no hacemos adecuaciones porque bajan el nivel del salón'. ¿Cuál es la respuesta correcta del/la psicólogo/a escolar ante esta posición?",
        opciones: [
            "Aceptar el criterio del coordinador pedagógico, dado que las adecuaciones curriculares son una decisión pedagógica que compete al coordinador y no al psicólogo/a, y registrar su desacuerdo en el expediente del estudiante.",
            "Fundamentar técnicamente ante el equipo de gestión que las adecuaciones curriculares son un derecho del estudiante establecido en la Ordenanza 05-2024 y que su negativa constituye una vulneración del derecho a la educación inclusiva; escalar la situación al director/a si el coordinador mantiene su posición, y de persistir la negativa, informar al técnico distrital correspondiente para su intervención, dejando constancia escrita de todo el proceso.",
            "Implementar de manera unilateral las adecuaciones curriculares recomendadas coordinándolas directamente con la maestra de aula, prescindiendo de la autorización del coordinador pedagógico, dado que el bienestar del estudiante prevalece sobre los criterios administrativos del centro.",
            "Orientar a los padres del estudiante para que soliciten formalmente las adecuaciones curriculares mediante una comunicación escrita dirigida al director/a del centro, dado que la solicitud familiar tiene mayor peso institucional que la recomendación técnica del psicólogo/a."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024, Art. 6: las adecuaciones curriculares son un derecho del estudiante con NEAE y una obligación del sistema educativo; su negativa por criterios no técnicos constituye discriminación. Manual Operativo COP (2015): el psicólogo/a escolar tiene la responsabilidad de defender técnicamente sus recomendaciones y escalar la situación cuando un derecho del estudiante es vulnerado. Lineamientos 2023-2024: el escalamiento al nivel distrital procede cuando el equipo de gestión no actúa conforme a la normativa. La opción A renuncia a la responsabilidad técnica; la C actúa de manera unilateral violando la coordinación institucional; la D transfiere a la familia una carga que es responsabilidad institucional."
    },
 
    {
        id: 574,
        categoria: "Clima Escolar",
        pregunta: "El/la psicólogo/a escolar recibe la solicitud del director/a para diseñar e implementar un programa de prevención de violencia escolar para el año lectivo. Al revisar el contexto del centro, identifica que no existen datos sistematizados sobre los tipos de violencia presentes, las áreas del centro donde se concentran los incidentes ni los grados más afectados. ¿Cuál es el primer paso técnico correcto antes de diseñar el programa?",
        opciones: [
            "Diseñar el programa de prevención basándose en los modelos de intervención en violencia escolar reconocidos internacionalmente, dado que son aplicables a cualquier contexto educativo independientemente del diagnóstico situacional específico del centro.",
            "Realizar un diagnóstico situacional del centro mediante la revisión del registro de incidencias, la aplicación de instrumentos de valoración del clima escolar a estudiantes y docentes, y entrevistas con actores clave, para que el programa de prevención responda a las necesidades reales identificadas, conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024.",
            "Solicitar al técnico distrital de orientación y psicología que facilite un programa de prevención de violencia estandarizado ya diseñado, dado que el desarrollo de programas institucionales desde el nivel de centro requiere validación y recursos del nivel distrital.",
            "Iniciar directamente las actividades de prevención con los grados superiores del centro (5.º y 6.º), dado que estadísticamente son los que presentan mayor incidencia de violencia escolar en los centros de Primaria a nivel nacional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): toda intervención psicológica a nivel institucional debe partir de un diagnóstico situacional que identifique las características específicas del problema en ese centro. Lineamientos de Orientación y Psicología 2023-2024: el diseño de programas de prevención es una función del psicólogo/a escolar y debe ser contextualizado. Guía de Ruta Crítica MINERD: la prevención de la violencia requiere conocimiento del tipo, frecuencia y actores involucrados en cada institución específica. La opción A aplica modelos genéricos sin diagnóstico; la C renuncia a la función técnica autónoma del psicólogo/a; la D actúa sobre supuestos estadísticos nacionales sin verificar el contexto local."
    },
 
    {
        id: 575,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar recibe a una estudiante de 6.º grado que llega espontáneamente a su oficina durante el recreo y le muestra, desde su teléfono, mensajes de un adulto desconocido que le solicita fotografías de su cuerpo a cambio de dinero. La estudiante dice que 'todavía no le ha enviado nada' pero que el hombre sabe dónde vive. ¿Cuál es la secuencia de actuación inmediata correcta conforme a la normativa dominicana?",
        opciones: [
            "Orientar a la estudiante para que bloquee al contacto en el teléfono y elimine los mensajes, y convoque a sus padres para que hagan la denuncia correspondiente ante las autoridades policiales, dado que la situación ya está controlada porque la estudiante no envió nada.",
            "Preservar las evidencias digitales sin eliminar los mensajes, mantener a la estudiante en un espacio seguro, notificar al director/a del centro de inmediato, contactar a los padres o tutores ese mismo día, y activar la Ruta Crítica de protección reportando la situación al CONANI y/o al Ministerio Público por configurarse como un caso de grooming o intento de explotación sexual comercial de NNA, conforme a la Ley 136-03 y la Guía de Ruta Crítica MINERD.",
            "Escuchar a la estudiante, registrar la situación en el expediente psicológico, y programar una sesión con sus padres para la próxima semana con el objetivo de abordar el tema de la seguridad digital en familia.",
            "Notificar al técnico distrital de orientación y psicología de manera urgente para que este determine si la situación requiere la activación de la Ruta Crítica o si puede ser manejada desde el nivel del centro educativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03, Art. 408 y ss.: el grooming y el intento de obtención de imágenes sexuales de NNA constituyen delitos que requieren denuncia penal inmediata. Guía de Ruta Crítica MINERD: cuando existe un riesgo inminente para la seguridad de un NNA, la respuesta es inmediata; no se demora para esperar sesiones o validaciones del nivel distrital. La eliminación de los mensajes (opción A) destruye evidencia digital del delito. La opción C programa una respuesta diferida ante una emergencia de protección activa. La opción D transfiere al técnico distrital una decisión que la ruta interna del centro debe iniciar de inmediato."
    },
 
    {
        id: 576,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al revisar el plan de trabajo del año anterior, el/la psicólogo/a escolar constata que el 70% de las intervenciones realizadas fueron de tipo reactivo (atención a crisis y referidos urgentes) y solo el 30% correspondió a acciones preventivas planificadas. Para el nuevo año lectivo, el director/a solicita al psicólogo/a que mantenga el mismo esquema porque 'así siempre se ha hecho'. ¿Cuál es la respuesta técnicamente correcta del/la psicólogo/a escolar?",
        opciones: [
            "Acatar la instrucción del director/a y mantener el esquema reactivo predominante, dado que la demanda espontánea de atención determina la dinámica de trabajo del psicólogo/a escolar y no puede planificarse de manera rígida.",
            "Presentar al director/a una propuesta de plan de trabajo anual que reequilibre la distribución entre intervención preventiva y atención a casos, fundamentando técnicamente que el Manual Operativo COP (2015) y los Lineamientos 2023-2024 establecen que la función preventiva y de promoción es prioritaria en el rol del psicólogo/a escolar, sin descuidar la atención a situaciones emergentes.",
            "Elaborar el plan de trabajo manteniendo el esquema reactivo solicitado por el director/a, pero añadiendo en el informe trimestral una nota técnica que explique las limitaciones del modelo para cumplir con los lineamientos del MINERD.",
            "Solicitar al técnico distrital que intervenga ante el director/a para que este autorice al psicólogo/a a modificar el esquema de trabajo, dado que el director/a tiene autoridad sobre el plan de trabajo del psicólogo/a en el centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): establece explícitamente que la función preventiva y de promoción del bienestar es el eje central del rol del psicólogo/a escolar; la atención reactiva es necesaria pero no debe ser el modelo predominante. Lineamientos de Orientación y Psicología 2023-2024: el plan de trabajo anual del psicólogo/a debe privilegiar la prevención y la intervención temprana. El psicólogo/a tiene responsabilidad técnica de fundamentar su plan conforme a la normativa, no simplemente ejecutar lo que dicte la tradición institucional. La opción A renuncia a la función técnica; la C registra el incumplimiento sin corregirlo; la D delega al nivel distrital una responsabilidad técnica del psicólogo/a."
    },
 
    {
        id: 577,
        categoria: "NEAE",
        pregunta: "Durante la aplicación de una evaluación de inteligencia estandarizada a un estudiante de 5.º grado, el/la psicólogo/a escolar detecta que el instrumento utilizado fue estandarizado exclusivamente en población de otro país y no cuenta con baremos validados para la población dominicana. El director/a insiste en que se use porque 'es el único disponible en el centro'. ¿Cuál es la actuación técnica y ética correcta del/la psicólogo/a escolar?",
        opciones: [
            "Aplicar el instrumento siguiendo la instrucción del director/a, dado que la disponibilidad de recursos en el centro determina las herramientas evaluativas que puede usar el psicólogo/a, e incluir una nota metodológica en el informe señalando la limitación.",
            "Aplicar el instrumento con precaución, pero complementarlo obligatoriamente con observación sistemática, análisis de desempeño escolar y entrevistas, y señalar explícitamente en el informe de evaluación las limitaciones del instrumento para la población dominicana, absteniéndose de emitir conclusiones diagnósticas basadas exclusivamente en ese puntaje, conforme a los estándares técnicos del Manual Operativo COP (2015).",
            "Negarse a aplicar el instrumento y solicitar formalmente al director/a que gestione ante el nivel distrital la adquisición de instrumentos estandarizados para población dominicana antes de iniciar cualquier proceso de evaluación.",
            "Aplicar el instrumento y usar los baremos disponibles del país de estandarización, dado que los estándares psicométricos internacionales son equivalentes y los resultados son igualmente válidos para cualquier población hispanohablante."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el psicólogo/a escolar tiene responsabilidad técnica sobre la validez de los instrumentos que aplica; cuando un instrumento tiene limitaciones, estas deben señalarse explícitamente en el informe y los resultados no pueden interpretarse de manera aislada. Lineamientos de Orientación y Psicología 2023-2024: la evaluación psicológica escolar es un proceso multimodal que no depende exclusivamente de pruebas estandarizadas. La opción A aplica sin señalar limitaciones, lo que puede conducir a decisiones equivocadas sobre el estudiante. La opción C paraliza el proceso sin justificación absoluta. La opción D ignora la validez de constructo y las diferencias culturales en la estandarización."
    },
 
    {
        id: 578,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar recibe a la madre de un estudiante de 1.er grado quien, entre lágrimas, le refiere que su expareja (padre del niño) viene al centro frecuentemente a buscarlo sin autorización, que tiene una orden de protección en su contra, y que teme que el niño sea sustraído del centro. Solicita al psicólogo/a que 'haga algo'. ¿Cuál es la actuación institucional correcta?",
        opciones: [
            "Escuchar a la madre, orientarla emocionalmente y recomendarle que contacte a su abogado para que gestione la modificación de la orden de protección, dado que la situación legal entre los progenitores está fuera del ámbito de intervención del psicólogo/a escolar.",
            "Registrar la información aportada por la madre, solicitar copia de la orden de protección vigente, notificar de inmediato al director/a del centro para que se establezca un protocolo de seguridad institucional que impida el acceso del padre sin autorización, informar al personal del centro sobre la situación, y orientar a la madre sobre los canales de apoyo disponibles, conforme al Manual Operativo COP (2015) y la Guía de Ruta Crítica MINERD.",
            "Citar al padre del niño a una reunión con el psicólogo/a y la madre para mediar entre ambos progenitores y establecer acuerdos sobre las visitas al centro educativo, aplicando un enfoque de mediación familiar.",
            "Comunicar la situación únicamente al orientador/a escolar para que este gestione la relación con la familia y determine las medidas de seguridad necesarias en el centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica MINERD: ante riesgo de sustracción o contacto no autorizado de un NNA en el centro educativo, la respuesta es inmediata e institucional; el director/a activa los protocolos de seguridad del centro. Ley 136-03, Art. 60: la protección de la integridad física y emocional del NNA en todos los espacios donde se encuentre, incluido el escolar, es obligación del sistema. Manual Operativo COP (2015): el psicólogo/a no media entre progenitores en conflictos legales (opción C); escala al director/a y apoya a la familia desde su rol. La opción A limita el rol del psicólogo/a a orientación emocional sin acción institucional; la D delega a otro actor sin informar al director/a."
    },
 
    {
        id: 579,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Una estudiante de 6.º grado es referida al/la psicólogo/a escolar por presentar síntomas de ansiedad intensa: llanto frecuente antes de los exámenes, dolores de estómago recurrentes sin causa médica identificada, dificultad para dormir y expresiones de miedo al fracaso escolar. La maestra informa que la niña tiene las mejores calificaciones del grado. ¿Cuál es la intervención psicológica escolar correcta?",
        opciones: [
            "Comunicar a la maestra y a los padres que la estudiante 'está bien académicamente' y que la ansiedad es normal ante los exámenes, sin abrir expediente ni iniciar intervención formal, dado que los síntomas son proporcionales al nivel de exigencia del 6.º grado.",
            "Abrir expediente de seguimiento, realizar una evaluación de los indicadores de ansiedad escolar de la estudiante, diseñar un plan de intervención que incluya técnicas de regulación emocional adecuadas a su edad, coordinar con la familia y la maestra estrategias de acompañamiento, e informar al director/a sobre el caso, conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024.",
            "Recomendar a los padres que lleven a la estudiante a un psicólogo clínico privado, dado que la ansiedad con síntomas somáticos como los descritos requiere intervención clínica especializada fuera del ámbito escolar.",
            "Solicitar a la maestra que reduzca la carga evaluativa de la estudiante durante el trimestre para disminuir la presión que genera la ansiedad, dado que la modificación del entorno de exigencia es la intervención más efectiva en estos casos."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): los síntomas de ansiedad escolar con manifestaciones somáticas recurrentes constituyen una situación que requiere apertura de expediente e intervención psicológica formal en el centro. El alto rendimiento académico no excluye la necesidad de apoyo psicológico. Lineamientos de Orientación y Psicología 2023-2024: la intervención ante ansiedad escolar es una competencia del psicólogo/a escolar; incluye trabajo con el estudiante, la familia y el equipo docente. La opción A normaliza síntomas que requieren atención. La opción C deriva externamente sin agotar la intervención institucional. La opción D modifica el entorno sin abordar los factores psicológicos subyacentes, lo cual es insuficiente."
    },
 
    {
        id: 580,
        categoria: "Clima Escolar",
        pregunta: "El/la psicólogo/a escolar es convocado/a por el director/a porque varios docentes han presentado quejas sobre el comportamiento de un grupo de padres que ingresa al centro en horas de clases, interrumpe las aulas para reclamar a los maestros y en una ocasión amenazó verbalmente a una docente. El director/a solicita al psicólogo/a que 'hable con los padres problemáticos'. ¿Cuál es la actuación institucional correcta?",
        opciones: [
            "Asumir la función solicitada por el director/a y reunirse individualmente con cada uno de los padres identificados como 'problemáticos' para orientarles sobre las normas de convivencia del centro y mediar en los conflictos con el personal docente.",
            "Informar al director/a que la gestión de conflictos con familias que afectan la seguridad del personal es una responsabilidad institucional que corresponde a la dirección del centro; ofrecer desde el rol del psicólogo/a un diagnóstico del clima institucional, una propuesta de protocolo de atención a familias y acciones de fortalecimiento de la convivencia escolar, sin asumir la función de mediador/a entre la dirección y los padres en conflictos de naturaleza disciplinaria o legal.",
            "Convocar una reunión conjunta de todos los padres del centro para abordar las normas de convivencia de manera colectiva, evitando identificar públicamente a las familias involucradas en los incidentes.",
            "Elaborar un informe de situación sobre el clima institucional y remitirlo al técnico distrital para que este diseñe e implemente un plan de intervención con las familias del centro desde el nivel distrital."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el psicólogo/a escolar no tiene función de mediador/a en conflictos disciplinarios o de seguridad entre la dirección y las familias; su función es el diagnóstico del clima y el diseño de intervenciones preventivas. Estatuto del Docente Dominicano: la protección del personal docente ante situaciones de amenaza es responsabilidad de la dirección del centro con apoyo del nivel distrital. Lineamientos 2023-2024: el psicólogo/a contribuye al clima escolar desde su rol técnico específico, no sustituyendo funciones directivas. La opción A desborda el rol del psicólogo/a hacia funciones de gestión disciplinaria. La opción C diluye la responsabilidad en una reunión general. La opción D delega al nivel distrital sin ofrecer la contribución técnica del psicólogo/a desde el centro."
    },
 
    {
        id: 581,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar recibe a un estudiante de 3.er grado que manifiesta que su maestra 'le baja puntos cuando no hace lo que ella dice' y que una vez 'le quitó el almuerzo porque llegó tarde'. El estudiante se muestra temeroso de que 'la maestra se moleste' si el psicólogo/a le pregunta algo. ¿Cuál es la actuación institucional correcta conforme a la normativa dominicana?",
        opciones: [
            "Devolver al estudiante al aula, dado que las decisiones sobre puntuación y manejo disciplinario dentro del aula son competencia exclusiva del docente, y la información del niño puede estar distorsionada por su perspectiva subjetiva.",
            "Escuchar al estudiante sin cuestionar su relato, registrar con precisión sus expresiones textuales, atender su estado emocional, notificar al director/a del centro mediante informe formal ese mismo día sin confrontar previamente a la maestra, y garantizar que el estudiante no quede expuesto a posibles represalias mientras se investiga la situación, conforme a la Guía de Ruta Crítica y la Ley 136-03.",
            "Citar a la maestra involucrada a una reunión con el psicólogo/a para escuchar su versión de los hechos antes de reportar la situación al director/a, aplicando el principio de escucha a todas las partes antes de tomar decisiones.",
            "Orientar al estudiante para que comente la situación con sus padres, de manera que sean estos quienes inicien la queja formal ante el director/a del centro, dado que la denuncia de un docente por parte del psicólogo/a puede afectar la relación institucional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica MINERD: cuando un estudiante revela una posible situación de maltrato o trato arbitrario por parte de un adulto del centro, el psicólogo/a notifica al director/a sin confrontar al señalado; la investigación corresponde a la dirección y no al psicólogo/a. Ley 136-03, Art. 19: el retiro de alimentos como medida disciplinaria y la privación arbitraria como castigo constituyen formas de maltrato institucional. La opción A descarta el relato del niño sin fundamento. La opción C confronta al docente antes del reporte, lo que puede comprometer la investigación y exponer al estudiante. La opción D transfiere la responsabilidad de reporte a la familia, cuando el psicólogo/a tiene la obligación institucional directa."
    },
 
    {
        id: 582,
        categoria: "NEAE",
        pregunta: "Un estudiante de 2.º grado con diagnóstico de Trastorno del Espectro Autista (TEA) nivel 1, debidamente documentado, asiste al centro sin que su maestra haya recibido ninguna orientación sobre cómo trabajar con él. La maestra refiere al psicólogo/a que el niño 'no atiende, interrumpe y no puede trabajar en grupo', y solicita que sea 'cambiado de grado o de centro'. ¿Cuál es la actuación correcta del/la psicólogo/a escolar?",
        opciones: [
            "Gestionar con el director/a el traslado del estudiante a un aula de educación especial dentro del mismo centro o a un centro especializado, dado que el TEA requiere ambientes estructurados que el aula regular no puede proveer sin recursos adicionales.",
            "Revisar el expediente y el diagnóstico del estudiante, brindar orientación técnica a la maestra sobre estrategias pedagógicas inclusivas para estudiantes con TEA nivel 1, coordinar con el equipo de gestión el diseño de un Plan de Apoyo Individualizado (PAI) con adecuaciones curriculares conforme a la Ordenanza 05-2024, e informar al director/a sobre la necesidad de formación del personal docente en educación inclusiva.",
            "Aplicar una nueva evaluación psicológica completa del estudiante para verificar si el diagnóstico externo de TEA es correcto y determinar si sus necesidades pueden ser atendidas en el aula regular antes de diseñar cualquier plan de apoyo.",
            "Orientar a los padres del estudiante para que busquen un centro de educación especial que cuente con los recursos necesarios para atender adecuadamente a su hijo, dado que el centro regular no está en condiciones de garantizarle una educación de calidad."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024: el sistema educativo dominicano es inclusivo; los estudiantes con TEA tienen derecho a permanecer en el aula regular con los apoyos necesarios. La exclusión del aula regular sin proceso formal viola este mandato. Manual Operativo COP (2015): la orientación al personal docente sobre estrategias de atención a la diversidad es una función específica del psicólogo/a escolar. Lineamientos 2023-2024: el PAI es el instrumento formal para la atención a estudiantes con NEAE documentadas. La opción A ejecuta una exclusión sin proceso formal. La opción C cuestiona un diagnóstico ya establecido por especialista externo sin justificación. La opción D orienta la exclusión desde el consejo del psicólogo/a, lo que contraviene directamente la Ordenanza 05-2024."
    },
 
    {
        id: 583,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El/la psicólogo/a escolar elabora el informe de evaluación psicológica de un estudiante de 4.º grado y lo entrega directamente a la maestra de aula para que esta lo comparta con los padres en la próxima reunión de entrega de calificaciones. El director/a del centro no recibe copia del informe. ¿Qué principio del Manual Operativo COP (2015) se vulnera en este procedimiento?",
        opciones: [
            "El principio de objetividad, dado que la entrega directa a la maestra puede comprometer la imparcialidad del informe al estar mediada por la perspectiva docente.",
            "El principio de confidencialidad y conducto regular: el informe psicológico es un documento técnico de acceso restringido; su entrega debe realizarse a los padres o tutores de manera directa por el psicólogo/a, previa notificación al director/a del centro como parte del equipo institucional que gestiona el caso, conforme al Manual Operativo COP (2015).",
            "El principio de interdisciplinariedad, dado que el informe debió ser elaborado en conjunto con el orientador/a escolar antes de ser entregado a cualquier actor de la comunidad educativa.",
            "El principio de pertinencia, dado que los informes psicológicos deben entregarse únicamente en espacios formales como reuniones del equipo de gestión y no en el contexto de reuniones de entrega de calificaciones."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el informe psicológico es un documento de acceso restringido; los padres o tutores son los destinatarios directos y la entrega debe realizarse en un contexto de orientación por parte del psicólogo/a, no a través de terceros (como la maestra). El director/a debe ser informado como parte del equipo institucional. La entrega a la maestra para que la comparta expone información sensible del estudiante y viola el principio de confidencialidad y el protocolo de comunicación de resultados. Las opciones A, C y D mencionan principios reales del Manual pero no son los que se vulneran de manera primaria y directa en el procedimiento descrito."
    },
 
    {
        id: 584,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar atiende a una estudiante de 5.º grado que le muestra fotos en su teléfono que ella misma tomó de sus brazos, donde se observan cicatrices de cortes superficiales recientes. La estudiante manifiesta que 'se corta cuando se siente muy mal' y que sus padres 'no saben nada y no pueden enterarse porque se van a poner bravos'. ¿Cuál es la secuencia de actuación institucional correcta?",
        opciones: [
            "Respetar la confidencialidad de la estudiante dado que los cortes son superficiales y no representan riesgo para su vida, programar sesiones de apoyo psicológico continuo e instruirla sobre estrategias alternativas para manejar sus emociones.",
            "Informar a la estudiante que su seguridad es prioritaria y que los padres deben ser notificados, valorar el nivel de riesgo de manera inmediata, notificar al director/a del centro ese mismo día, contactar a los padres o tutores para informarles de la situación, diseñar un plan de seguridad para la estudiante e iniciar proceso de intervención psicológica, conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024.",
            "Citar a los padres para la semana siguiente sin revelarles el motivo de la citación, con el objetivo de conocer el contexto familiar antes de comunicarles la situación de autolesión de su hija.",
            "Derivar de inmediato a la estudiante a un servicio de salud mental externo sin informar a los padres, dado que la autolesión requiere intervención clínica especializada que el psicólogo/a escolar no puede proveer."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos de Orientación y Psicología 2023-2024: la autolesión, independientemente de su nivel de gravedad aparente, rompe la confidencialidad y activa el protocolo de protección; los padres deben ser informados ese mismo día. Manual Operativo COP (2015): el psicólogo/a escolar realiza la valoración de riesgo inicial y activa la ruta interna inmediatamente. Ley 136-03: la integridad física del NNA es un derecho que el sistema educativo debe proteger. La opción A mantiene confidencialidad ante una situación de riesgo activo, lo que es una violación grave del protocolo. La opción C demora la notificación parental sin justificación. La opción D excluye a la familia de una situación de emergencia que les incumbe directamente."
    },
 
    {
        id: 585,
        categoria: "NEAE",
        pregunta: "El/la psicólogo/a escolar identifica, durante el proceso de evaluación de un estudiante de 3.er grado, que este presenta un coeficiente intelectual en el rango límite (borderline) según el instrumento aplicado. Al comunicar los resultados al equipo de gestión, el director/a solicita que en el informe se escriba 'retardo mental leve' para que el Seguro Nacional de Salud (SENASA) de la familia cubra las terapias externas. ¿Cuál es la actuación ética y técnica correcta del/la psicólogo/a escolar?",
        opciones: [
            "Acceder a la solicitud del director/a dado que el fin último es beneficiar al estudiante facilitando el acceso a terapias que necesita, y el psicólogo/a tiene la autoridad técnica para ajustar las conclusiones del informe a los requerimientos del sistema de salud.",
            "Negarse a modificar el informe para incluir un diagnóstico que no corresponde a los hallazgos de la evaluación, explicar al director/a que el informe psicológico escolar debe reflejar con exactitud los resultados obtenidos y que emitir un diagnóstico falso constituye una falta ética y legal, y ofrecer alternativas de apoyo al estudiante dentro del marco normativo del MINERD conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024.",
            "Redactar el informe con el diagnóstico correcto (rango límite) pero añadir en la sección de recomendaciones la frase 'podría beneficiarse de intervención terapéutica para condiciones del desarrollo', para que la familia gestione el acceso a SENASA con esa redacción.",
            "Elaborar dos versiones del informe: una con los resultados reales para el expediente escolar, y otra con el diagnóstico solicitado por el director/a para uso exclusivo de la familia ante SENASA."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el psicólogo/a escolar tiene la obligación ética de reflejar con exactitud los resultados de la evaluación en el informe; la emisión de diagnósticos falsos constituye una falta grave a la ética profesional y puede tener consecuencias legales. Lineamientos 2023-2024: el informe psicológico escolar es un documento oficial del MINERD sujeto a auditoría. Estatuto del Docente Dominicano: la comisión de actos dolosos en el ejercicio de la función docente está tipificada como falta grave. Las opciones A, C y D, en distintos grados, implican la falsificación o distorsión de un documento oficial del sistema educativo, lo cual es indefendible independientemente de la intención."
    },
 
    {
        id: 586,
        categoria: "Clima Escolar",
        pregunta: "El/la psicólogo/a escolar aplica un instrumento de valoración del clima escolar al inicio del año y los resultados indican que el 65% de los estudiantes de 5.º y 6.º grado percibe el centro como 'poco seguro' y que el 40% reporta haber sido testigo de peleas físicas entre compañeros en el último mes. El director/a minimiza los resultados y dice 'eso lo responden así porque quieren salir temprano'. ¿Cuál es la actuación correcta del/la psicólogo/a escolar?",
        opciones: [
            "Aceptar la interpretación del director/a y no escalar los resultados, dado que el director/a tiene mayor conocimiento del contexto del centro y su criterio prevalece sobre el instrumento aplicado por el psicólogo/a.",
            "Documentar los resultados del diagnóstico, presentarlos formalmente al equipo de gestión mediante un informe técnico con la metodología aplicada y los datos obtenidos, proponer un plan de intervención en clima escolar y, si el director/a persiste en ignorar los resultados, reportar la situación al técnico distrital correspondiente, dejando constancia escrita de todas las actuaciones, conforme al Manual Operativo COP (2015).",
            "Repetir la aplicación del instrumento de valoración del clima a una muestra diferente de estudiantes para verificar si los resultados se confirman antes de presentar el informe al equipo de gestión.",
            "Compartir los resultados directamente con los docentes del centro para generar presión institucional que motive al director/a a tomar acción sobre el clima escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el psicólogo/a escolar tiene la responsabilidad técnica de sostener los resultados de sus diagnósticos y proponer intervenciones; cuando la dirección no actúa ante situaciones que afectan la seguridad y el bienestar de los estudiantes, el escalamiento al nivel distrital es el conducto correcto. Lineamientos 2023-2024: los datos del diagnóstico del clima escolar son insumos para la planificación institucional, no para ser minimizados. Guía de Ruta Crítica: un centro donde los estudiantes reportan inseguridad y violencia requiere intervención activa. La opción A renuncia a la función técnica. La opción C duplica el diagnóstico innecesariamente. La opción D distribuye información sensible sin autorización del director/a, vulnerando el conducto regular."
    },
 
    {
        id: 587,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El/la psicólogo/a escolar es solicitado por un grupo de docentes para que realice 'una capacitación sobre cómo manejar niños difíciles en el aula' durante una tarde de la semana. El psicólogo/a no ha coordinado esta actividad con el director/a del centro ni la ha incluido en su plan de trabajo anual. ¿Cuál es la actuación institucional correcta antes de proceder?",
        opciones: [
            "Realizar la capacitación de inmediato dado que la solicitud parte de los docentes, quienes son los usuarios directos del servicio del psicólogo/a, y la demanda espontánea del personal docente justifica la respuesta inmediata sin necesidad de autorización formal.",
            "Valorar la pertinencia técnica de la solicitud, plantear la propuesta al director/a del centro para su autorización e incorporación al plan de trabajo institucional, definir el contenido de la capacitación conforme a los Lineamientos de Orientación y Psicología 2023-2024, y coordinar la logística con el equipo de gestión antes de ejecutar la actividad.",
            "Solicitar a los docentes que presenten la petición por escrito al director/a del centro para que este la eleve al técnico distrital de orientación y psicología, quien es el responsable de autorizar y diseñar las capacitaciones dirigidas al personal docente.",
            "Rechazar la solicitud dado que las capacitaciones docentes son una función del coordinador pedagógico del centro y no del psicólogo/a escolar, cuyo rol se limita a la atención directa de los estudiantes y sus familias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): la orientación y capacitación al personal docente en temas de gestión del comportamiento y bienestar estudiantil es una función explícita del psicólogo/a escolar; sin embargo, toda actividad que afecte el tiempo institucional debe ser autorizada por el director/a e integrada al plan de trabajo. Lineamientos 2023-2024: las acciones del psicólogo/a deben planificarse y documentarse dentro del plan anual del centro. La opción A actúa sin coordinación institucional, vulnerando el principio de planificación y autorización. La opción C escala innecesariamente al nivel distrital una decisión que corresponde al centro. La opción D niega equivocadamente que la capacitación docente sea una función del psicólogo/a escolar."
    },
 
    {
        id: 588,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar detecta que un estudiante de 4.º grado ha faltado al centro durante 12 días consecutivos sin justificación conocida. Al consultar el expediente, observa que este mismo estudiante tuvo una intervención por posibles indicadores de maltrato el año anterior, pero el caso fue cerrado sin conclusión formal. Los padres no han respondido a las comunicaciones enviadas por la maestra. ¿Cuál es la actuación institucional correcta?",
        opciones: [
            "Registrar las ausencias en el expediente del estudiante y aguardar a que los padres se presenten espontáneamente al centro para retomar el contacto con la familia, dado que las ausencias frecuentes pueden tener múltiples explicaciones no relacionadas con maltrato.",
            "Revisar el expediente previo de intervención, informar al director/a del centro sobre el patrón de ausentismo en el contexto de los antecedentes del caso, coordinar con el equipo de gestión una visita domiciliaria institucional o una notificación formal a las autoridades de protección para verificar el estado del estudiante, y documentar todas las acciones realizadas, conforme a la Guía de Ruta Crítica y la Ley 136-03.",
            "Contactar telefónicamente a los padres del estudiante desde el centro educativo para indagar sobre el motivo de las ausencias, y aguardar su respuesta antes de tomar cualquier medida institucional adicional.",
            "Elaborar un informe de ausentismo y remitirlo al técnico distrital de orientación y psicología junto con el expediente previo, para que el nivel distrital determine si la situación amerita la activación de la Ruta Crítica de protección."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica MINERD: el ausentismo prolongado e injustificado, en el contexto de antecedentes de posible maltrato, es un indicador de riesgo que activa la ruta de verificación del bienestar del NNA; no puede esperarse la presentación espontánea de la familia. Ley 136-03, Art. 45: el derecho a la educación incluye el deber del sistema de garantizar la asistencia y verificar la integridad del NNA cuando hay señales de alerta. Manual Operativo COP (2015): los antecedentes de intervención previa deben considerarse en la valoración de situaciones de riesgo activo. La opción A normaliza el ausentismo sin considerar el contexto de riesgo. La opción C aplaza la acción a la espera de una respuesta de los mismos padres que no han respondido. La opción D delega al nivel distrital una acción que la ruta interna del centro debe iniciar."
    },
 
    {
        id: 589,
        categoria: "NEAE",
        pregunta: "El/la psicólogo/a escolar recibe la solicitud de los padres de un estudiante de 5.º grado para que emita un certificado psicológico que acredite que su hijo 'tiene problemas de aprendizaje' con el fin de solicitar una prórroga en el pago de la matrícula en el centro educativo privado al que asiste. El psicólogo/a no ha evaluado al estudiante. ¿Cuál es la respuesta correcta?",
        opciones: [
            "Emitir el certificado basándose en el historial de observaciones de la maestra y las quejas de los padres, dado que la situación socioeconómica de la familia justifica el uso del criterio clínico del psicólogo/a para facilitar el acceso a un beneficio que favorece al estudiante.",
            "Informar a los padres que no es posible emitir ningún certificado, diagnóstico ni informe psicológico sin haber realizado un proceso de evaluación formal conforme a los protocolos del MINERD, que incluye el consentimiento informado, la aplicación de instrumentos y la elaboración del informe técnico; y ofrecerles iniciar el proceso de evaluación si lo consideran pertinente, conforme al Manual Operativo COP (2015).",
            "Emitir una nota de orientación (no un diagnóstico formal) señalando que el estudiante 'presenta dificultades académicas que requieren apoyo', para satisfacer la necesidad de los padres sin comprometer la ética profesional.",
            "Derivar la solicitud al orientador/a escolar para que este gestione la certificación desde su función de apoyo familiar, dado que las certificaciones para trámites administrativos externos no son competencia del psicólogo/a escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): ningún informe, certificado ni documento psicológico puede emitirse sin haber completado el proceso de evaluación formal; hacerlo constituye una falta grave a la ética profesional y compromete la validez del sistema. Lineamientos de Orientación y Psicología 2023-2024: el informe psicológico es un documento técnico que requiere proceso evaluativo previo. Estatuto del Docente Dominicano: la emisión de documentos falsos o sin sustento técnico es una falta sancionable. La opción A y C emiten documentos sin evaluación previa, lo que constituye una falta ética independientemente de la intención. La opción D traslada la responsabilidad al orientador/a cuando ningún actor puede emitir un diagnóstico psicológico sin evaluación."
    },
 
    {
        id: 590,
        categoria: "Clima Escolar",
        pregunta: "Al inicio del tercer trimestre, el/la psicólogo/a escolar constata que los indicadores de referidos al servicio de psicología han aumentado un 40% respecto al trimestre anterior, y que la mayoría corresponden a estudiantes de los grados que tienen a un mismo docente. Los referidos incluyen ansiedad, llanto frecuente, resistencia a asistir al centro y relatos de los niños sobre 'gritos y humillaciones' en el aula. ¿Cuál es la actuación institucional correcta del/la psicólogo/a escolar?",
        opciones: [
            "Atender individualmente a cada estudiante referido y registrar sus testimonios en los expedientes psicológicos, sin comunicar al director/a el patrón identificado para evitar generar un conflicto institucional basado en información que puede ser subjetiva.",
            "Sistematizar los datos del patrón de referidos (aumento, concentración en el mismo grado y docente, tipo de síntomas, relatos de los estudiantes), elaborar un informe técnico y presentarlo al director/a del centro de manera formal, señalando que el patrón observado constituye un indicador de posible maltrato institucional que requiere investigación por parte de la dirección, conforme a la Guía de Ruta Crítica y la Ley 136-03.",
            "Conversar de manera informal con el docente señalado para orientarle sobre el manejo emocional en el aula, dado que el docente puede desconocer el impacto de su estilo de enseñanza sobre los estudiantes, y evaluar si la situación mejora antes de escalarla al director/a.",
            "Citar a los padres de los estudiantes afectados de manera colectiva para que sean ellos quienes presenten formalmente la queja ante el director/a, dado que la denuncia de un docente resulta más sólida cuando proviene de las familias."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica MINERD: un patrón sistemático de síntomas emocionales y relatos de humillación asociados a un mismo actor adulto del centro constituye un indicador de maltrato institucional que activa la ruta de notificación al director/a. Ley 136-03: el maltrato emocional y la humillación reiterada de un adulto hacia NNA está tipificado como una forma de maltrato. Manual Operativo COP (2015): el psicólogo/a tiene la responsabilidad de identificar y reportar patrones sistémicos, no solo casos individuales. La opción A omite el reporte del patrón, que es la información más relevante. La opción C confronta al docente sin reporte previo al director/a, violando el conducto regular. La opción D transfiere la responsabilidad de denuncia a las familias cuando el psicólogo/a tiene obligación institucional directa."
    },

    
  {
        id: 591,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar de un centro de Primaria es abordado/a en el pasillo por la tía materna de una estudiante de 3.er grado, quien le informa que la niña le ha contado que 'el novio de su mamá la toca en sus partes privadas cuando la mamá trabaja de noche'. La tía solicita al psicólogo/a que 'hable con la niña hoy mismo y le pregunte todo lo que pasó' para tener más detalles antes de decidir si hace la denuncia. ¿Cuál es la actuación institucional correcta del/la psicólogo/a escolar?",
        opciones: [
            "Atender la solicitud de la tía y realizar una entrevista exhaustiva con la niña ese mismo día para obtener toda la información posible sobre los hechos, dado que la inmediatez en la recolección del relato es fundamental para preservar la evidencia del caso.",
            "Explicar a la tía que la entrevista investigativa a la niña no corresponde al psicólogo/a escolar sino a las autoridades competentes (Ministerio Público o CONANI); registrar la información aportada, notificar de inmediato al director/a del centro, activar la Ruta Crítica de protección, y orientar a la tía sobre cómo realizar la denuncia formal ante las autoridades, sin interrogar a la niña sobre los hechos, conforme a la Guía de Ruta Crítica MINERD y la Ley 136-03.",
            "Realizar una entrevista breve y cuidadosa con la niña utilizando técnicas de entrevista forense adaptadas al contexto escolar, registrar su relato y remitirlo al CONANI como evidencia documental para agilizar el proceso de investigación.",
            "Informar a la tía que el centro educativo no puede intervenir en situaciones que ocurren fuera del ámbito escolar y orientarla para que acuda directamente al Ministerio Público sin involucrar al centro en el proceso de denuncia."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica MINERD: el psicólogo/a escolar no realiza entrevistas investigativas sobre hechos de abuso sexual; esta función corresponde exclusivamente al Ministerio Público y al CONANI mediante personal especializado. La entrevista reiterada a la víctima puede contaminar el relato y afectar el proceso judicial. Ley 136-03, Art. 19: la obligación de denuncia es inmediata; la activación de la ruta interna (director/a) es el primer paso institucional. La opción A realiza una función que no le corresponde y puede dañar el proceso legal. La opción C aplica entrevista forense, lo que excede totalmente el rol del psicólogo/a escolar. La opción D excluye al centro de una responsabilidad de protección que le es propia."
    },
 
    {
        id: 592,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El/la psicólogo/a escolar lleva tres meses trabajando con un estudiante de 4.º grado que presenta dificultades de regulación emocional severas: episodios frecuentes de llanto incontrolable, rabietas y agresividad física hacia compañeros. A pesar de la intervención sostenida, los comportamientos no han mejorado significativamente y el equipo docente reporta que la situación está afectando el clima del aula. ¿Cuál es el paso institucional correcto en este momento del proceso?",
        opciones: [
            "Continuar la intervención psicológica individual durante tres meses adicionales antes de tomar cualquier otra medida, dado que los procesos de cambio conductual en niños de Primaria requieren períodos prolongados para mostrar resultados.",
            "Revisar el plan de intervención, documentar la evolución del caso y la falta de respuesta al tratamiento, presentar un informe de seguimiento al director/a del centro, valorar la necesidad de derivación a un servicio especializado externo (salud mental infantil), coordinar con la familia la búsqueda de apoyo complementario, y ajustar las estrategias de acompañamiento en el aula, conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024.",
            "Solicitar al director/a que el estudiante sea ubicado en un aula de apoyo especial mientras dura el proceso de intervención, para proteger el clima del aula regular y garantizar que el psicólogo/a pueda trabajar con él en un ambiente más controlado.",
            "Informar a los padres que el psicólogo/a escolar ha agotado sus posibilidades de intervención y que deben buscar atención psicológica privada para su hijo, cerrando el caso en el centro educativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): cuando la intervención psicológica escolar no produce resultados en un período razonable, el psicólogo/a revisa el plan, documenta la evolución y valora la derivación externa como medida complementaria, sin cerrar el acompañamiento institucional. Lineamientos 2023-2024: la derivación externa no implica cierre del caso en el centro; el psicólogo/a mantiene el seguimiento. La opción A prolonga sin justificación técnica una intervención que no está siendo efectiva. La opción C segrega al estudiante sin proceso formal de la Ordenanza 05-2024. La opción D cierra el caso unilateralmente, lo que contradice el principio de continuidad del apoyo institucional."
    },
 
    {
        id: 593,
        categoria: "NEAE",
        pregunta: "Una estudiante de Kínder (5 años) es referida al/la psicólogo/a escolar porque 'no habla en el salón': responde en casa, habla con sus padres y hermanos, pero en el centro educativo no emite ninguna palabra ni ante docentes ni ante compañeros, aunque sigue instrucciones gestuales. La maestra cree que 'es tímida o que está haciendo teatro'. ¿Cuál es la intervención técnicamente correcta del/la psicólogo/a escolar como primer paso?",
        opciones: [
            "Orientar a la maestra para que no presione a la estudiante a hablar en clase, dado que la timidez extrema en niños de Inicial es una variante del desarrollo normal que se resuelve espontáneamente con la adaptación al entorno escolar.",
            "Iniciar el proceso de evaluación psicológica escolar que incluya observación en distintos contextos del centro, entrevista con la familia para obtener historia de desarrollo y comportamiento en el hogar, y revisión del expediente; los hallazgos orientarán si se trata de mutismo selectivo u otra condición que requiera intervención especializada, coordinando con la familia y el equipo docente, conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024.",
            "Diagnosticar mutismo selectivo con base en la descripción de la maestra e iniciar de inmediato un protocolo de intervención conductual en el aula, dado que el cuadro descrito es clínicamente inequívoco y no requiere evaluación adicional.",
            "Derivar directamente a la estudiante a un servicio de salud mental infantil externo, dado que el mutismo selectivo es una condición clínica que requiere atención psicológica y/o psiquiátrica especializada que supera el ámbito de intervención del psicólogo/a escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Lineamientos de Orientación y Psicología 2023-2024: ante cualquier señal de alerta del desarrollo, el primer paso es siempre la evaluación institucional estructurada, no el diagnóstico inmediato ni la derivación prematura. Manual Operativo COP (2015): la observación multicontextual y la entrevista familiar son componentes ineludibles del proceso evaluativo. La opción A normaliza sin evaluar una situación que puede requerir intervención temprana. La opción C emite un diagnóstico sin evaluación formal, lo que excede el rol del psicólogo/a escolar. La opción D deriva externamente sin haber completado la evaluación institucional, que es el paso previo obligatorio."
    },
 
    {
        id: 594,
        categoria: "Clima Escolar",
        pregunta: "El/la psicólogo/a escolar es informado/a de que en el grupo de WhatsApp de padres y madres del 5.º grado circulan mensajes que señalan a un estudiante específico como 'el culpable de todos los problemas del salón', incluyendo su nombre completo y fotografías tomadas sin su consentimiento. Varios padres solicitan que 'sea sacado del centro'. El director/a está al tanto pero no ha tomado ninguna acción. ¿Cuál es la actuación correcta del/la psicólogo/a escolar?",
        opciones: [
            "Unirse al grupo de WhatsApp de padres para orientarles directamente sobre el impacto de sus mensajes en el estudiante señalado y facilitar desde esa plataforma un proceso de reflexión colectiva sobre convivencia.",
            "Informar al director/a mediante comunicación formal sobre el impacto que la situación tiene en el bienestar del estudiante señalado, solicitar que el centro tome medidas institucionales ante los padres involucrados, brindar apoyo psicológico al estudiante afectado, y documentar la situación como un caso de violencia digital contra un NNA conforme a la Ley 136-03 y la Guía de Ruta Crítica MINERD.",
            "Citar a los padres que participan en los mensajes a una reunión grupal mediada por el psicólogo/a para que dialoguen con el estudiante señalado y su familia, con el objetivo de resolver el conflicto de manera directa entre las partes.",
            "Orientar a los padres del estudiante afectado para que realicen la denuncia ante las autoridades competentes por difamación, dado que la situación ocurre en un espacio digital externo al centro y no es competencia del psicólogo/a ni del director/a intervenir en ella."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03: la difusión de imágenes de NNA sin consentimiento y la estigmatización pública de un menor constituyen vulneraciones de sus derechos, independientemente del medio utilizado. Guía de Ruta Crítica MINERD: cuando el bienestar de un estudiante es afectado por acciones de adultos de la comunidad educativa, el psicólogo/a actúa desde su rol técnico e informa al director/a. Manual Operativo COP (2015): el apoyo al estudiante afectado es prioritario; la mediación directa entre padres y el estudiante señalado (opción C) puede revictimizarlo. La opción A desborda el rol institucional. La opción D excluye al centro de una responsabilidad de protección que le corresponde aunque el medio sea digital."
    },
 
    {
        id: 595,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar de un centro de Inicial recibe a los padres de una niña de 4 años que solicitan que el psicólogo/a 'le diga a su hija que tiene que querer a su papá', dado que tras la separación conyugal la niña manifiesta no querer ir con el padre en los fines de semana y llora cuando lo ve. El padre tiene custodia compartida legalmente establecida. ¿Cuál es la respuesta institucional correcta del/la psicólogo/a escolar?",
        opciones: [
            "Acceder a la solicitud del padre y trabajar con la niña en sesiones individuales orientadas a fortalecer el vínculo afectivo con su progenitor, dado que la custodia compartida es un mandato legal que el sistema educativo debe apoyar.",
            "Explicar a los padres que el rol del psicólogo/a escolar no incluye intervenir en disputas de custodia ni influir en los vínculos afectivos de la niña por mandato de uno de los progenitores; evaluar el estado emocional de la niña en el contexto del proceso de separación familiar, y si los síntomas lo ameritan, diseñar un plan de acompañamiento centrado en el bienestar de la niña, no en satisfacer la demanda de ninguno de los progenitores, conforme al Manual Operativo COP (2015) y la Ley 136-03.",
            "Citar a ambos progenitores de manera conjunta para una sesión de orientación familiar sobre el impacto del conflicto parental en el desarrollo emocional de la niña, aplicando un enfoque de mediación familiar.",
            "Derivar el caso a un psicólogo clínico externo especializado en dinámicas familiares post-separación, dado que las disputas de custodia superan el ámbito de intervención del psicólogo/a en el contexto escolar."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el psicólogo/a escolar no puede ser instrumentalizado por ningún progenitor para influir en los vínculos afectivos de un NNA; su función es el bienestar del estudiante, no la gestión de disputas de custodia. Ley 136-03, Art. 15: el interés superior del NNA prevalece sobre los intereses de los progenitores. Lineamientos 2023-2024: la evaluación del estado emocional de la niña es pertinente; la intervención debe centrarse en su bienestar. La opción A convierte al psicólogo/a en instrumento de uno de los progenitores. La opción C convoca conjuntamente a progenitores en conflicto, lo que puede ser contraproducente. La opción D deriva externamente sin haber evaluado la necesidad desde el centro."
    },
 
    {
        id: 596,
        categoria: "NEAE",
        pregunta: "El/la psicólogo/a escolar concluye la evaluación de un estudiante de 2.º grado y determina que no presenta Necesidades Específicas de Apoyo Educativo (NEAE); sin embargo, la maestra insiste en que 'algo tiene ese niño' y solicita que el psicólogo/a repita la evaluación con instrumentos diferentes. El rendimiento académico del estudiante es bajo pero estable. ¿Cuál es la actuación técnicamente correcta?",
        opciones: [
            "Repetir la evaluación con instrumentos adicionales en atención a la solicitud de la maestra, dado que el criterio docente es un insumo valioso que puede revelar aspectos no captados por los instrumentos aplicados inicialmente.",
            "Presentar a la maestra los resultados de la evaluación de manera fundamentada, explicar los instrumentos utilizados y sus hallazgos, proponer estrategias pedagógicas diferenciadas en el aula para atender las dificultades académicas identificadas sin diagnóstico de NEAE, y registrar en el expediente tanto los resultados como la discrepancia con la percepción docente, sin repetir el proceso evaluativo sin justificación técnica que lo respalde, conforme al Manual Operativo COP (2015).",
            "Aceptar la discrepancia entre la percepción docente y los resultados de la evaluación como indicador suficiente para emitir un diagnóstico provisional de NEAE, con el objetivo de garantizar que el estudiante reciba apoyo adicional en el aula.",
            "Derivar el caso al técnico distrital de orientación y psicología para que este aplique una segunda evaluación y dirima la discrepancia entre el criterio del psicólogo/a escolar y la percepción de la maestra."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): la evaluación psicológica es un proceso técnico; su repetición requiere justificación clínica o evidencia de cambio en el estudiante, no simplemente la insistencia de un docente. El psicólogo/a presenta los resultados fundamentados y propone alternativas de apoyo. Lineamientos 2023-2024: las estrategias de apoyo en el aula no requieren diagnóstico de NEAE cuando los resultados no lo justifican; pueden implementarse como diferenciación pedagógica. La opción A repite la evaluación sin justificación técnica, lo que puede llevar a un diagnóstico incorrecto. La opción C emite un diagnóstico sin respaldo evaluativo, vulnerando la ética profesional. La opción D transfiere al nivel distrital una decisión técnica que corresponde al psicólogo/a del centro."
    },
 
    {
        id: 597,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El/la psicólogo/a escolar identifica durante el primer trimestre que ocho estudiantes de 1.er grado provienen de familias que migraron recientemente desde Haití y que presentan barreras idiomáticas, desorientación en el entorno escolar y señales de estrés adaptativo. Ninguno ha recibido atención psicológica. El director/a no ha planificado ninguna acción específica para este grupo. ¿Cuál es la actuación institucional correcta del/la psicólogo/a escolar?",
        opciones: [
            "Limitarse a atender individualmente a los estudiantes que sean referidos por sus maestras, dado que la intervención proactiva con grupos no referidos excede el mandato del psicólogo/a escolar en el contexto de un centro de Primaria.",
            "Incluir a este grupo en el plan de trabajo del psicólogo/a como población prioritaria, diseñar acciones de acompañamiento psicosocial que consideren el contexto migratorio y las barreras culturales, coordinar con el equipo docente estrategias de acogida e inclusión, informar al director/a sobre la situación y proponer acciones institucionales, conforme al Manual Operativo COP (2015), los Lineamientos 2023-2024 y la Ordenanza 05-2024.",
            "Remitir los ocho casos al orientador/a escolar para que gestione el proceso de adaptación de las familias migrantes al sistema educativo dominicano, dado que la adaptación sociocultural es una función de orientación y no de psicología escolar.",
            "Informar al técnico distrital sobre la presencia de estudiantes migrantes en el centro y solicitar lineamientos específicos antes de iniciar cualquier tipo de intervención psicológica con este grupo poblacional."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): la intervención preventiva y proactiva con grupos en situación de vulnerabilidad es una función explícita del psicólogo/a escolar; no requiere referido individual previo. Ordenanza 05-2024: la inclusión educativa aplica también a estudiantes en situación migratoria; el sistema debe garantizar condiciones de acogida y apoyo. Lineamientos 2023-2024: el estrés adaptativo en contextos migratorios es una situación que requiere acompañamiento psicosocial desde el centro. La opción A restringe el rol del psicólogo/a a la reactividad. La opción C fracciona artificialmente las funciones de orientación y psicología. La opción D paraliza la acción institucional a la espera de lineamientos distritales que no son necesarios para iniciar el acompañamiento."
    },
 
    {
        id: 598,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar atiende a un estudiante de 6.º grado que en sesión individual le confiesa que 'unos muchachos mayores del barrio lo obligan a vender cositas en la escuela a cambio de no pegarle'. El estudiante tiene miedo y pide que 'no se lo diga a nadie porque si no le van a hacer algo peor'. ¿Cuál es la secuencia de actuación institucional correcta?",
        opciones: [
            "Respetar la confidencialidad del estudiante y trabajar durante las próximas sesiones en estrategias de asertividad y manejo del miedo, sin notificar a ningún actor institucional hasta que el estudiante se sienta preparado para que se conozca su situación.",
            "Informar al estudiante que su seguridad es prioritaria y que esta situación requiere la intervención de adultos responsables; notificar de inmediato al director/a del centro, garantizar que el estudiante no quede desprotegido, activar la Ruta Crítica de protección ante la posible situación de extorsión y uso del estudiante como menor en actividades ilícitas, y coordinar con las autoridades competentes conforme a la Ley 136-03 y la Guía de Ruta Crítica MINERD.",
            "Citar a los padres del estudiante ese mismo día para informarles de la situación y orientarles para que sean ellos quienes realicen la denuncia ante las autoridades policiales, dado que la situación descrita ocurre fuera del centro educativo.",
            "Registrar la información en el expediente psicológico del estudiante y notificar la situación al técnico distrital de orientación y psicología en el próximo informe mensual, dado que la posible extorsión externa requiere análisis del nivel distrital antes de activar protocolos de protección."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03: la utilización de un NNA en actividades ilícitas y su sometimiento a amenazas y extorsión constituye una vulneración grave de sus derechos que requiere protección inmediata. Guía de Ruta Crítica MINERD: ante riesgo inminente para la seguridad de un NNA, la confidencialidad se suspende y la notificación es inmediata. La situación puede involucrar trata o explotación de menores, lo que eleva la urgencia. La opción A mantiene confidencialidad ante un riesgo activo y grave. La opción C transfiere la responsabilidad de denuncia a los padres sin activar primero la ruta interna. La opción D demora inaceptablemente la notificación ante una emergencia de protección."
    },
 
    {
        id: 599,
        categoria: "NEAE",
        pregunta: "El/la psicólogo/a escolar recibe la solicitud del director/a para que evalúe a todos los estudiantes del nivel Primario durante el primer mes del año con el objetivo de 'identificar cuáles tienen problemas y cuáles no'. El director/a justifica la solicitud señalando que 'el técnico distrital dijo que hay que hacer un tamizaje masivo'. ¿Cuál es la actuación técnica correcta del/la psicólogo/a escolar?",
        opciones: [
            "Iniciar de inmediato el proceso de evaluación masiva de todos los estudiantes, dado que la instrucción del director/a respaldada por el técnico distrital constituye un mandato institucional que el psicólogo/a debe ejecutar.",
            "Solicitar que el lineamiento del técnico distrital se formalice por escrito, clarificar con el director/a el objetivo específico del tamizaje, seleccionar instrumentos de tamizaje apropiados para aplicación colectiva (no evaluaciones psicológicas individuales completas), obtener los consentimientos informados de las familias, e integrar el proceso al plan de trabajo anual con cronograma factible, conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024.",
            "Rechazar la solicitud, dado que la evaluación psicológica escolar es siempre individual y por referido; una evaluación masiva sin referido previo no está contemplada en la normativa del MINERD y no puede ser ejecutada por el psicólogo/a escolar.",
            "Aplicar a todos los estudiantes el mismo instrumento de evaluación de inteligencia disponible en el centro durante el primer mes, dado que la instrucción del director/a justifica el uso de los recursos disponibles independientemente del protocolo habitual."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el psicólogo/a escolar puede realizar tamizajes colectivos como parte de la función preventiva; sin embargo, estos son diferentes a las evaluaciones psicológicas individuales y requieren instrumentos apropiados para aplicación colectiva, consentimiento informado y planificación técnica. Lineamientos 2023-2024: toda acción que involucre a la totalidad de los estudiantes requiere planificación, documentación y consentimiento. La opción A ejecuta sin protocolo técnico una acción de alto impacto. La opción C niega equivocadamente la posibilidad de tamizajes colectivos, que sí están contemplados. La opción D aplica instrumentos de evaluación individual de manera masiva, lo que invalida los resultados y es técnicamente incorrecto."
    },
 
    {
        id: 600,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al revisar su agenda de trabajo, el/la psicólogo/a escolar constata que tiene 22 casos activos de atención individual, 4 talleres grupales en ejecución, 3 procesos de evaluación psicológica en curso y dos reuniones semanales de equipo. El técnico distrital le solicita que además elabore un informe estadístico mensual detallado con indicadores de cada caso. El psicólogo/a percibe que la carga de trabajo es inmanejable y que la calidad de la atención está siendo comprometida. ¿Cuál es la actuación institucional correcta?",
        opciones: [
            "Asumir toda la carga de trabajo asignada sin reportar la situación, dado que la dedicación al servicio es un valor fundamental de la función docente y el psicólogo/a debe responder a todas las demandas institucionales sin cuestionar la asignación.",
            "Elaborar un informe técnico dirigido al director/a del centro que documente la carga de trabajo actual, sus implicaciones para la calidad del servicio y el bienestar de los estudiantes atendidos, y proponer una priorización de casos conforme a los criterios de riesgo establecidos en los Lineamientos 2023-2024, solicitando al director/a que medie ante el técnico distrital para ajustar las demandas a las posibilidades reales del servicio.",
            "Cerrar los casos de menor riesgo de manera unilateral para reducir la carga de trabajo a un nivel manejable, informando a las familias de los estudiantes afectados que el servicio no puede continuar su atención en este momento.",
            "Comunicar al técnico distrital directamente, sin informar al director/a del centro, que la carga de trabajo es excesiva y solicitar una reducción de las demandas de reporte estadístico para poder concentrarse en la atención directa a los estudiantes."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el psicólogo/a escolar tiene la responsabilidad técnica y ética de garantizar la calidad del servicio; cuando la carga de trabajo compromete esa calidad, debe reportarlo formalmente al director/a del centro como primer nivel de escalamiento. Lineamientos 2023-2024: la priorización de casos por nivel de riesgo es un criterio técnico establecido. Estatuto del Docente Dominicano: el docente tiene derecho a condiciones de trabajo adecuadas para cumplir sus funciones. La opción A asume una carga que compromete la ética del servicio. La opción C cierra casos unilateralmente sin proceso formal. La opción D comunica al nivel distrital sin pasar primero por el director/a, vulnerando el conducto regular."
    },
 
    {
        id: 601,
        categoria: "Protección",
        pregunta: "Durante una actividad grupal en el aula de 2.º grado, el/la psicólogo/a escolar observa que una estudiante de 7 años dibuja de manera reiterada figuras de personas adultas golpeando a niños, con detalles de sangre. Al preguntarle sobre el dibujo con lenguaje apropiado a su edad, la niña responde: 'así le hacen a mi hermanito cuando se porta mal'. ¿Cuál es la actuación institucional correcta del/la psicólogo/a escolar?",
        opciones: [
            "Interpretar el dibujo como una expresión artística propia del desarrollo infantil y continuar la actividad grupal sin interrumpir, programando una entrevista individual con la niña para la semana siguiente con el fin de profundizar en el significado de sus producciones.",
            "Concluir la actividad de manera natural sin generar ansiedad en la niña, registrar con precisión los dibujos y las palabras textuales de la estudiante, notificar al director/a del centro mediante comunicación formal ese mismo día señalando los indicadores observados, y activar la Ruta Crítica de protección para el hermano menor mencionado, conforme a la Guía de Ruta Crítica MINERD y la Ley 136-03.",
            "Continuar la actividad grupal y al finalizar conversar en privado con la niña para obtener más detalles sobre la situación del hermano antes de decidir si la información amerita notificación al director/a del centro.",
            "Notificar la situación a la maestra de aula para que esta cite a los padres de la niña y explore la situación familiar directamente con ellos antes de que el psicólogo/a intervenga formalmente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica MINERD: los indicadores indirectos de maltrato (como producciones gráficas y verbalizaciones espontáneas de un niño sobre situaciones de violencia hacia terceros, especialmente hacia otros NNA en el hogar) activan la Ruta Crítica de protección. El hermano mencionado es también una posible víctima. Ley 136-03, Art. 19: la obligación de reporte no se limita al NNA que está en el centro; se extiende a cualquier NNA en riesgo del que se tenga conocimiento. La opción A normaliza indicadores que requieren atención inmediata. La opción C interroga a la niña antes de reportar, lo que puede contaminar el proceso. La opción D delega al docente una responsabilidad de reporte que corresponde al psicólogo/a."
    },
 
    {
        id: 602,
        categoria: "Clima Escolar",
        pregunta: "El/la psicólogo/a escolar facilita un taller de convivencia con estudiantes de 5.º grado. Durante el taller, un estudiante manifiesta abiertamente frente al grupo: 'yo no trabajo con N. porque es haitiano y los haitianos son sucios y nos quitan todo'. Otros estudiantes asienten. ¿Cuál es la respuesta técnica correcta del/la psicólogo/a escolar en ese momento y posteriormente?",
        opciones: [
            "Ignorar el comentario para no interrumpir la dinámica del taller y abordar el tema de la discriminación de manera general en una actividad posterior, sin señalar el incidente específico para no exponer al estudiante que hizo el comentario.",
            "Intervenir en el momento de manera pedagógica y no punitiva para problematizar el comentario con el grupo, sin exponer individualmente al estudiante; continuar el taller abordando el tema de la diversidad, el respeto y los derechos; registrar el incidente al finalizar; atender individualmente al estudiante afectado (N.); informar al director/a del centro; y planificar acciones de educación en derechos e inclusión con el grupo, conforme a la Ordenanza 05-2024 y los Lineamientos 2023-2024.",
            "Interrumpir el taller de inmediato, sancionar verbalmente al estudiante que hizo el comentario frente al grupo y exigirle que se disculpe públicamente con su compañero, dado que los actos de discriminación deben tener consecuencias inmediatas y visibles.",
            "Registrar el incidente y reportarlo al director/a del centro para que sea este quien decida si el comentario del estudiante amerita una sanción disciplinaria o un proceso de intervención psicológica."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024: prohíbe toda forma de discriminación por origen nacional o étnico en el sistema educativo dominicano y establece el deber de intervención pedagógica ante actos discriminatorios. Manual Operativo COP (2015): el psicólogo/a interviene en el momento utilizando la situación como oportunidad de aprendizaje colectivo, sin exponer individualmente al estudiante que discriminó (lo que podría generar mayor conflicto) ni al estudiante afectado. Lineamientos 2023-2024: la intervención en clima escolar incluye el trabajo grupal inmediato y el seguimiento individual. La opción A omite la intervención ante un acto discriminatorio activo. La opción C sanciona públicamente, lo que puede escalar el conflicto. La opción D delega al director/a una intervención que corresponde al psicólogo/a en el contexto del taller."
    },
 
    {
        id: 603,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Los padres de un estudiante de 3.er grado solicitan al/la psicólogo/a escolar una reunión y le informan que su hijo ha sido diagnosticado con leucemia y que iniciará quimioterapia en dos semanas, lo que implicará ausentismo frecuente. Piden orientación sobre cómo manejar la situación con el centro. ¿Cuál es la actuación institucional correcta del/la psicólogo/a escolar?",
        opciones: [
            "Orientar a los padres para que tramiten la baja del estudiante del centro durante el período de tratamiento y lo reingresen cuando su condición de salud se lo permita, dado que el centro educativo no cuenta con las condiciones para atender a estudiantes con enfermedades crónicas graves.",
            "Brindar apoyo emocional a los padres, coordinar con el director/a y el equipo docente un plan de acompañamiento que contemple: comunicación fluida con la familia durante el tratamiento, estrategias de continuidad educativa durante los períodos de ausentismo, preparación del grupo de pares para acoger al estudiante, y apoyo psicológico al propio estudiante, conforme al Manual Operativo COP (2015), los Lineamientos 2023-2024 y la Ordenanza 05-2024.",
            "Remitir a los padres al orientador/a escolar para que este gestione los trámites administrativos relacionados con las ausencias justificadas y coordine con los docentes la entrega de tareas durante el período de tratamiento.",
            "Elaborar un informe psicológico del estudiante para adjuntarlo al expediente médico del hospital, dado que la información psicológica del centro puede ser útil para el equipo de salud que atiende al niño durante el tratamiento."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el acompañamiento psicosocial ante situaciones de enfermedad crónica que afectan la escolaridad es una función del psicólogo/a escolar; incluye el trabajo con la familia, el equipo docente y el grupo de pares. Ordenanza 05-2024: el derecho a la educación de estudiantes con condiciones de salud que generan ausentismo debe ser garantizado mediante adaptaciones y apoyos institucionales, no mediante la baja del centro. Lineamientos 2023-2024: la coordinación interinstitucional incluye la comunicación con el equipo de salud solo cuando el estudiante o la familia lo autoriza y con fines específicos. La opción A vulnera el derecho a la educación. La opción C reduce el rol del psicólogo/a a la gestión administrativa. La opción D elabora un informe sin solicitud formal del equipo médico ni consentimiento explícito de la familia."
    },
 
    {
        id: 604,
        categoria: "NEAE",
        pregunta: "El/la psicólogo/a escolar elabora el Plan de Apoyo Individualizado (PAI) de una estudiante de 4.º grado con discapacidad visual parcial. Al presentarlo al equipo de gestión, el coordinador pedagógico señala que las adecuaciones propuestas 'son demasiado trabajo para los maestros' y sugiere reducirlas a solo ampliar el tamaño de letra en los materiales. ¿Cuál es la actuación correcta del/la psicólogo/a escolar?",
        opciones: [
            "Aceptar la reducción propuesta por el coordinador pedagógico, dado que la viabilidad pedagógica de las adecuaciones debe ser determinada por el equipo docente y no puede imponerse desde la perspectiva técnica del psicólogo/a.",
            "Fundamentar técnicamente ante el equipo de gestión que el PAI debe responder a las necesidades reales de la estudiante conforme a la Ordenanza 05-2024 y no puede reducirse por razones de carga docente; proponer estrategias de acompañamiento al equipo docente para la implementación de las adecuaciones, y escalar al director/a si el coordinador mantiene su posición de reducir el PAI por debajo de lo técnicamente necesario.",
            "Modificar el PAI reduciendo las adecuaciones a las sugeridas por el coordinador pedagógico y registrar en el expediente de la estudiante que las adecuaciones completas fueron rechazadas por el equipo pedagógico, dejando así constancia de su recomendación original.",
            "Presentar el PAI completo directamente a los padres de la estudiante sin pasar por el equipo de gestión, para que sean ellos quienes presionen institucionalmente por la implementación de todas las adecuaciones propuestas."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ordenanza 05-2024, Art. 11-14: el PAI es un documento técnico que debe responder a las necesidades del estudiante; su reducción por razones de conveniencia docente constituye una vulneración del derecho a la educación inclusiva. Manual Operativo COP (2015): el psicólogo/a tiene la responsabilidad de defender técnicamente sus recomendaciones y escalar cuando un derecho del estudiante es comprometido. La opción A renuncia al criterio técnico ante presión administrativa. La opción C registra el rechazo pero acepta la reducción del PAI, lo que en la práctica vulnera el derecho de la estudiante. La opción D bypasea el equipo de gestión, vulnerando el conducto regular institucional."
    },
 
    {
        id: 605,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar atiende a un estudiante de 5.º grado que manifiesta que su padre 'toma mucho' y que 'cuando llega borracho en la noche grita mucho y a veces rompe cosas'. El niño dice que 'tiene miedo cuando pasa eso' pero que 'a él no le hace nada'. No hay evidencia de maltrato físico directo hacia el niño. ¿Cuál es la actuación institucional correcta?",
        opciones: [
            "No activar ninguna ruta de protección dado que el estudiante no reporta maltrato físico directo hacia su persona y la conducta del padre ocurre en el espacio privado del hogar sin afectar directamente al NNA.",
            "Registrar el relato del estudiante, brindarle apoyo psicológico para manejar el impacto emocional de la exposición a la violencia y el consumo de alcohol en el hogar, informar al director/a del centro, valorar conjuntamente con el equipo de gestión si la situación requiere la activación de la Ruta Crítica de protección por exposición a violencia doméstica y entorno de riesgo, y diseñar un plan de seguimiento al estudiante, conforme a la Ley 136-03 y los Lineamientos 2023-2024.",
            "Citar a la madre del estudiante para orientarla sobre los efectos del consumo de alcohol en el ambiente familiar e instalarla como figura de apoyo y protección para el niño, sin activar ningún protocolo de protección dado que la situación no alcanza el umbral de maltrato definido por la Ley 136-03.",
            "Orientar al estudiante sobre cómo protegerse durante los episodios de conducta violenta del padre y cómo buscar ayuda de vecinos o familiares si la situación se agrava, dado que el psicólogo/a escolar no puede intervenir en dinámicas familiares que no constituyen maltrato directo al NNA."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03, Art. 3 y 5: la exposición de un NNA a violencia doméstica y a un entorno de riesgo por consumo problemático de alcohol es reconocida como una forma de maltrato emocional y un factor de riesgo que requiere seguimiento e intervención. Guía de Ruta Crítica MINERD: la valoración del nivel de riesgo es una decisión del equipo de gestión, no unilateral del psicólogo/a; el miedo expresado por el niño es un indicador relevante. La opción A descarta el riesgo por ausencia de maltrato físico directo, ignorando el impacto emocional documentado. La opción C convoca solo a la madre sin activar la valoración de riesgo institucional. La opción D transfiere la responsabilidad de protección al propio NNA, lo que es inadmisible."
    },
 
    {
        id: 606,
        categoria: "NEAE",
        pregunta: "El/la psicólogo/a escolar elabora el informe de evaluación de un estudiante de 3.er grado e identifica que presenta dificultades en la velocidad de procesamiento y en la memoria de trabajo, sin alcanzar criterios para ningún diagnóstico clínico formal. Al presentar los resultados a los padres, estos insisten en que el psicólogo/a 'escriba en el papel que el niño tiene dislexia' para poder acceder a tiempo adicional en las evaluaciones del centro. ¿Cuál es la respuesta correcta?",
        opciones: [
            "Acceder a la solicitud de los padres y consignar dislexia en el informe dado que las dificultades identificadas son consistentes con este diagnóstico y el tiempo adicional beneficiará al estudiante en su desempeño académico.",
            "Explicar a los padres que el informe debe reflejar con exactitud los hallazgos de la evaluación; consignar en el informe las dificultades específicas identificadas (velocidad de procesamiento y memoria de trabajo) y recomendar las adecuaciones que estas justifican, incluyendo tiempo adicional si corresponde técnicamente, sin necesidad de consignar un diagnóstico que los resultados no respaldan, conforme al Manual Operativo COP (2015).",
            "Consignar en el informe 'posible dislexia' como diagnóstico diferencial, de manera que los padres puedan gestionar el tiempo adicional sin que el psicólogo/a asuma la responsabilidad de un diagnóstico definitivo.",
            "Derivar al estudiante a un especialista en dificultades de aprendizaje externo para que este confirme o descarte el diagnóstico de dislexia, y aguardar ese resultado antes de recomendar cualquier tipo de adecuación en el centro."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el informe psicológico debe reflejar con exactitud los hallazgos de la evaluación; la consignación de un diagnóstico no respaldado por los datos constituye una falta ética grave independientemente de la intención. Lineamientos 2023-2024: las adecuaciones curriculares y los apoyos evaluativos pueden recomendarse con base en las dificultades identificadas, sin requerir un diagnóstico clínico formal específico. Ordenanza 05-2024: las adecuaciones responden a necesidades documentadas, no necesariamente a diagnósticos categoriales. La opción A consigna un diagnóstico sin respaldo técnico. La opción C introduce un diagnóstico diferencial no fundamentado. La opción D demora innecesariamente el apoyo al estudiante cuando las dificultades ya están identificadas."
    },
 
    {
        id: 607,
        categoria: "Clima Escolar",
        pregunta: "El/la psicólogo/a escolar recibe información de que un grupo de estudiantes de 6.º grado creó un perfil falso en redes sociales usando el nombre y fotos de una compañera, publicando comentarios ofensivos en su nombre. La estudiante afectada está en el centro y se encuentra muy angustiada. Los hechos ocurrieron fuera del horario escolar. ¿Cuál es la actuación institucional correcta del/la psicólogo/a escolar?",
        opciones: [
            "Informar a la estudiante afectada y a sus padres que, dado que los hechos ocurrieron fuera del horario y espacio escolar, el centro educativo no tiene competencia para intervenir y deben acudir directamente a las autoridades competentes.",
            "Brindar atención psicológica inmediata a la estudiante afectada, registrar la situación, notificar al director/a del centro, coordinar con el equipo de gestión una intervención que incluya la identificación de los estudiantes involucrados, la comunicación con las familias de todas las partes y las acciones pertinentes conforme al reglamento del centro, orientar a la familia de la afectada sobre la denuncia formal ante las autoridades, y documentar el caso como violencia digital contra un NNA conforme a la Ley 136-03.",
            "Reunir a todos los estudiantes del 6.º grado en una asamblea para abordar el tema de la responsabilidad en redes sociales y solicitar que los responsables se identifiquen voluntariamente ante el grupo.",
            "Asesorar a la estudiante afectada para que reporte el perfil falso directamente a la plataforma de redes sociales y a sus padres para que interpongan la denuncia, dado que la ciberviolencia entre pares fuera del horario escolar no constituye un asunto de competencia del centro educativo."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Ley 136-03: la creación de perfiles falsos y la difusión de contenido ofensivo usando la identidad de un NNA constituye una vulneración de sus derechos fundamentales, independientemente del espacio donde ocurra. Guía de Ruta Crítica MINERD: cuando la violencia entre pares (incluyendo la digital) afecta el bienestar de un estudiante dentro del centro, el centro tiene responsabilidad de intervención. Manual Operativo COP (2015): la atención inmediata al estudiante afectado es prioritaria; la intervención del centro no está limitada a hechos ocurridos dentro del horario escolar cuando los actores son miembros de la comunidad educativa. Las opciones A y D excluyen indebidamente la responsabilidad del centro. La opción C expone públicamente la situación y puede revictimizar a la estudiante."
    },
 
    {
        id: 608,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "El/la psicólogo/a escolar recibe en su oficina a una maestra que llora y refiere que 'ya no puede más', que siente que 'ha fallado como docente', que no duerme bien y que algunos días no quiere venir al centro. Solicita al psicólogo/a que la ayude porque 'no quiere que el director/a se entere'. ¿Cuál es la actuación institucional correcta del/la psicólogo/a escolar?",
        opciones: [
            "Iniciar un proceso de acompañamiento psicológico formal con la maestra como si fuera un caso de atención a estudiante, dado que el bienestar del personal docente también es parte del rol del psicólogo/a escolar y la solicitud de confidencialidad debe ser respetada.",
            "Escuchar a la maestra de manera empática, brindarle contención emocional en ese momento, aclarar que el rol del psicólogo/a escolar es la atención a los estudiantes y no la psicoterapia al personal adulto del centro, orientarla sobre los recursos de apoyo al docente disponibles en el sistema (si los hay), e informarle que si la situación afecta su desempeño y el bienestar de sus estudiantes, el director/a deberá ser informado como parte del equipo de gestión, conforme al Manual Operativo COP (2015).",
            "Notificar de inmediato al director/a del centro que la maestra presenta un cuadro de agotamiento emocional severo que podría afectar su desempeño, dado que la situación de la maestra impacta directamente el bienestar de los estudiantes a su cargo.",
            "Elaborar un informe psicológico de la maestra y remitirlo al técnico distrital de orientación y psicología para que este gestione una licencia médica por salud mental a favor de la docente afectada."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): la población objetivo del psicólogo/a escolar son los estudiantes; el psicólogo/a no tiene función de psicoterapeuta del personal adulto del centro. Sin embargo, la contención empática inmediata y la orientación hacia recursos son respuestas humanamente adecuadas. Si la situación de la maestra afecta a sus estudiantes, el director/a debe ser informado. Lineamientos 2023-2024: el psicólogo/a no puede asumir funciones fuera de su rol institucional aunque sea solicitado por un colega. La opción A asume el rol de terapeuta de adultos, lo que excede el mandato del psicólogo/a escolar. La opción C notifica de inmediato sin haber valorado el impacto real sobre los estudiantes ni haber orientado a la maestra. La opción D elabora un informe clínico sobre un adulto, lo que está totalmente fuera del rol."
    },
 
    {
        id: 609,
        categoria: "Protección",
        pregunta: "El/la psicólogo/a escolar activa la Ruta Crítica de protección por indicadores de maltrato físico en un estudiante de 2.º grado e informa al director/a del centro. Tres días después, el director/a le comunica que habló con los padres y que 'todo está bien, los padres prometieron que no va a pasar más' y le indica que cierre el caso. ¿Cuál es la actuación correcta del/la psicólogo/a escolar?",
        opciones: [
            "Cerrar el caso conforme a la instrucción del director/a, dado que este es la autoridad máxima del centro y tiene la potestad de determinar cuándo una situación de riesgo ha sido resuelta mediante el diálogo con la familia.",
            "Informar al director/a que el cierre de un caso de maltrato activado mediante la Ruta Crítica no puede realizarse por decisión unilateral del director/a ni por el compromiso verbal de los padres; el caso debe continuar con seguimiento institucional y, si la denuncia ante las autoridades de protección aún no se ha realizado, debe hacerse de inmediato; documentar por escrito la instrucción del director/a y la respuesta técnica del psicólogo/a, y escalar al técnico distrital si el director/a insiste en cerrar el caso, conforme a la Guía de Ruta Crítica y la Ley 136-03.",
            "Aceptar el cierre del caso pero continuar haciendo seguimiento informal al estudiante sin registrarlo en el expediente, para no generar conflicto con el director/a pero garantizar de manera encubierta el bienestar del niño.",
            "Cerrar el caso en el expediente psicológico del centro pero notificar directamente al CONANI de manera anónima, para que las autoridades de protección investiguen la situación sin que el director/a sepa que el psicólogo/a escaló el caso externamente."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Guía de Ruta Crítica MINERD: una vez activada la Ruta Crítica de protección, su cierre no puede determinarse por el compromiso verbal de los padres ni por instrucción unilateral del director/a; requiere verificación del estado de protección del NNA y resolución formal. Ley 136-03: la obligación de denuncia persiste aunque los padres prometan cambiar; el riesgo no desaparece por un acuerdo verbal. Manual Operativo COP (2015): el psicólogo/a tiene la responsabilidad de documentar las instrucciones que contradicen la normativa y escalar al nivel distrital cuando el director/a actúa en contra del protocolo. La opción A acata una instrucción que viola la normativa. La opción C actúa sin registro, lo que invalida el proceso institucional. La opción D actúa encubiertamente, lo que viola el principio de transparencia institucional."
    },
 
    {
        id: 610,
        categoria: "Apoyo Psicopedagógico",
        pregunta: "Al finalizar el año escolar, el/la psicólogo/a escolar presenta su informe anual al director/a del centro. El informe incluye datos estadísticos de casos atendidos, pero no contiene un análisis de los resultados de las intervenciones, ni indicadores de impacto, ni propuestas de mejora para el próximo año. El director/a lo aprueba sin observaciones. ¿Qué elemento fundamental está ausente en este informe conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024?",
        opciones: [
            "La firma del técnico distrital de orientación y psicología que debe validar el informe anual antes de que el director/a lo apruebe, dado que los informes anuales de psicología son documentos que requieren revisión del nivel distrital.",
            "El análisis de resultados e impacto de las intervenciones realizadas, los indicadores de logro respecto a los objetivos planificados al inicio del año, y las recomendaciones y propuestas de mejora para el siguiente ciclo; estos son componentes obligatorios del informe anual conforme al Manual Operativo COP (2015) y los Lineamientos 2023-2024, y su ausencia impide la evaluación de la calidad del servicio psicológico escolar.",
            "El listado nominal de todos los estudiantes atendidos durante el año con sus diagnósticos respectivos, dado que la trazabilidad individual de los casos es el elemento central del informe anual del psicólogo/a escolar.",
            "La valoración del desempeño docente del psicólogo/a realizada por el director/a del centro, que debe incluirse en el informe anual como parte de la Evaluación del Desempeño Docente establecida en la Orden Departamental No. 18-2025."
        ],
        respuestaCorrecta: 1,
        explicacion: "Base Normativa REAL: Manual Operativo COP (2015): el informe anual del psicólogo/a escolar debe incluir obligatoriamente: estadísticas de atención, análisis de resultados de las intervenciones, evaluación del logro de los objetivos planificados e indicadores de impacto, y recomendaciones para el siguiente ciclo. Un informe que solo presenta datos estadísticos sin análisis de impacto no cumple con los requisitos del Manual. Lineamientos de Orientación y Psicología 2023-2024: la evaluación de la efectividad de las intervenciones es un componente ineludible del ciclo de mejora continua del servicio. La opción A introduce un requisito que no existe en la normativa. La opción C expone información nominativa protegida de los estudiantes, lo que viola la confidencialidad. La opción D confunde el informe anual del servicio con la Evaluación del Desempeño Docente, que son instrumentos distintos."
    },
{
"id": 611,
"categoria": "Ética",
"pregunta": "Un docente de 4to de Primaria remite a Orientación a una estudiante de 9 años por cambios bruscos de humor, retraimiento y dibujos con contenido sexual explícito. Durante la entrevista exploratoria inicial, la niña revela que el 'tío' que vive en su casa le pide que jueguen a tocarse cuando su madre no está. Ante esta situación crítica, ¿cuál es el procedimiento institucional y legal inmediato que debe ejecutar el profesional de Orientación y Psicología?",
"opciones": [
"Citar inmediatamente a la madre y al tío para confrontar la situación, documentar el caso en el registro anecdótico y ofrecer apoyo psicoterapéutico continuo en el centro.",
"Detener la indagación para no revictimizar, informar a la Dirección del centro y notificar de manera inmediata al Ministerio Público y a CONANI para garantizar la protección de la menor.",
"Realizar una evaluación psicológica profunda con pruebas proyectivas para confirmar el abuso antes de levantar la alerta al Sistema de Protección, evitando difamaciones.",
"Suspender temporalmente a la estudiante para protegerla del entorno escolar mientras se investiga el caso de manera confidencial con los padres."
],
"respuestaCorrecta": 1,
"explicacion": "Base Legal: Ley 136-03 (Código del Menor), Art. 14. Existe la obligación legal de denunciar de inmediato cualquier sospecha de abuso ante el Ministerio Público o CONANI. Citar al agresor (A) pone en riesgo la vida del menor e interfiere con la investigación judicial. La evaluación clínica (C) no es competencia escolar y retrasa la protección, constituyendo negligencia."
},
{
"id": 612,
"categoria": "Evaluación",
"pregunta": "En un centro de Secundaria, se reporta que un grupo de estudiantes ha agredido físicamente de forma reiterada a un compañero, causándole lesiones leves, y ha difundido un video de la agresión en redes sociales. El equipo de gestión solicita la intervención de Orientación. Según las Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa, ¿cuál es la acción prioritaria correcta?",
"opciones": [
"Organizar un círculo de diálogo y mediación grupal entre los agresores y la víctima para fomentar la cultura de paz y la empatía.",
"Aplicar la expulsión definitiva de los agresores del sistema educativo dominicano para garantizar un entorno seguro para los demás.",
"Tipificar el hecho como falta muy grave, activar el protocolo de protección a la víctima, notificar a las familias y al Distrito Educativo, y recomendar medidas socioeducativas y de reparación.",
"Referir inmediatamente a todos los involucrados a un psiquiatra externo y prohibirles el uso de dispositivos electrónicos dentro del plantel escolar."
],
"respuestaCorrecta": 2,
"explicacion": "Base Legal: Normas de Convivencia MINERD. El acoso escolar severo y la agresión física se tipifican como 'Faltas Muy Graves'. La mediación (A) está contraindicada en situaciones de desequilibrio de poder y violencia grave, ya que revictimiza. La expulsión (B) viola el derecho a la educación; se deben aplicar medidas disciplinarias con enfoque restaurativo y socioeducativo, previa protección de la víctima."
},
{
"id": 613,
"categoria": "Inclusión",
"pregunta": "Un estudiante de 2do de Secundaria presenta un diagnóstico reciente de Trastorno del Espectro Autista (Nivel 1). El docente de Matemáticas se queja de que el estudiante no mantiene contacto visual, se tapa los oídos durante trabajos grupales y no copia de la pizarra, por lo que le está reprobando. ¿Cuál es la intervención psicopedagógica adecuada basada en el Manual de Apoyo Psicopedagógico?",
"opciones": [
"Redactar un reporte de indisciplina, ya que el estudiante debe adaptarse a las normas del aula regular y el docente no tiene formación en educación especial.",
"Coordinar con el docente la implementación de Ajustes Razonables No Significativos (DUA), como permitir el uso de audífonos canceladores de ruido, ubicarlo cerca del docente y entregarle el material impreso.",
"Solicitar a la familia que el estudiante sea trasladado a un Centro de Educación Especial, ya que el currículo regular no está diseñado para sus necesidades sensoriales.",
"Diseñar un Ajuste Curricular Significativo eliminando las competencias matemáticas del grado escolar del estudiante para evitarle frustraciones."
],
"respuestaCorrecta": 1,
"explicacion": "Base Legal: Ordenanza 04-2018 (Educación Inclusiva) y Diseño Universal para el Aprendizaje (DUA). Las necesidades sensoriales del TEA Nivel 1 requieren ajustes de acceso y metodológicos (no significativos), no la eliminación de competencias (D) ni la segregación en centros de educación especial (C). El castigo (A) es una vulneración de derechos."
},
{
"id": 614,
"categoria": "Prevención",
"pregunta": "Durante una dinámica de tutoría grupal, una estudiante de 15 años entrega una carta al orientador manifestando que 'no encuentra sentido a su vida', se siente una carga y tiene un plan estructurado para ingerir medicamentos esa misma tarde. ¿Cuál es el protocolo de contención y derivación inmediato?",
"opciones": [
"Brindar consejería durante una hora, animarla a pensar en positivo, devolverla al aula y agendar una cita para la próxima semana para dar seguimiento.",
"No dejar a la estudiante sola en ningún momento, contactar inmediatamente a la familia o tutor legal, exigir su traslado a una emergencia psiquiátrica y levantar el acta de referimiento.",
"Llamar al 911 de inmediato sin avisar a los padres, ya que ellos podrían ser los causantes del problema, y acompañarla al hospital.",
"Reunir al grupo curso para hacer una dinámica de abrazos y apoyo grupal que la haga sentir valorada antes de que se vaya a su casa."
],
"respuestaCorrecta": 1,
"explicacion": "Base Legal: Manual de Servicios de Orientación y Psicología (Intervención en Crisis). Ante riesgo inminente y plan estructurado de suicidio, la norma dicta contención inmediata (no dejar solo), notificación obligatoria a la familia como primeros responsables y derivación urgente a salud mental. La opción A es negligencia letal; la D vulnera la privacidad y expone a la alumna."
},
{
"id": 615,
"categoria": "Evaluación",
"pregunta": "A inicio del año escolar, el orientador debe elaborar su Plan Operativo Anual (POA). Al revisar los indicadores de eficiencia interna del año anterior, nota un alto índice de repitencia en 1er grado de Secundaria y múltiples conflictos violentos. ¿Cuál es la acción de planificación estratégica más adecuada?",
"opciones": [
"Copiar la planificación del año anterior, ya que las actividades extracurriculares siempre generan buena convivencia, sin necesidad de adaptar al nuevo contexto.",
"Diseñar un plan de intervención basado en sus preferencias teóricas personales, enfocándose únicamente en dar charlas sobre valores éticos a los estudiantes de 1er grado.",
"Realizar una evaluación diagnóstica integral del contexto psicosocial, triangular datos con el equipo docente y diseñar líneas de acción priorizadas en prevención de riesgos y apoyo a los aprendizajes.",
"Exigir a la Dirección que expulse a los estudiantes que repitieron, ya que estadísticamente son los que generan los conflictos en el centro."
],
"respuestaCorrecta": 2,
"explicacion": "Base Legal: Manual de Servicios de Orientación y Psicología. La planificación del servicio de orientación debe ser contextualizada, basada en el análisis de necesidades (diagnóstico), con un enfoque preventivo, articulado con el equipo docente y en respuesta a los indicadores de eficiencia interna."
},
{
"id": 616,
"categoria": "Inclusión",
"pregunta": "Una estudiante de 16 años se encuentra en estado de embarazo. Un grupo de padres de familia recoge firmas y exige a la Dirección que la adolescente sea retirada del centro educativo o puesta en modalidad libre, argumentando que 'es un mal ejemplo' para las demás. ¿Cómo debe proceder Orientación y Psicología?",
"opciones": [
"Orientar a la Dirección para rechazar la petición, garantizar la permanencia de la estudiante en modalidad regular, coordinar ajustes para sus controles prenatales y realizar acciones de sensibilización comunitaria.",
"Sugerir a la familia de la adolescente que la inscriban en un programa nocturno para adultos (PREPA) para evitarle el acoso y cumplir con la petición de los padres.",
"Aprobar el paso a la modalidad libre permanentemente para proteger la imagen institucional del centro educativo, enviándole cuadernillos a su casa.",
"Citar a la estudiante y exigirle que firme una carta de compromiso donde asuma la responsabilidad si otras jóvenes resultan embarazadas."
],
"respuestaCorrecta": 0,
"explicacion": "Base Legal: Constitución de la República y Ley 136-03 (Derecho a la educación y no discriminación). Expulsar, segregar o forzar a una adolescente embarazada a ir a clases nocturnas (B) o modalidad libre contra su voluntad (C) viola sus derechos fundamentales. Se deben brindar apoyos psicopedagógicos y garantizar su permanencia."
},
{
"id": 617,
"categoria": "Ética",
"pregunta": "Un orientador recibe en su oficina a un estudiante que confiesa haber traído una navaja en su mochila porque un pandillero del barrio lo amenazó. El estudiante entrega la navaja voluntariamente al orientador y pide que no se lo digan a nadie por miedo a represalias. ¿Cuál es el proceder ético y normativo?",
"opciones": [
"Respetar estrictamente la confidencialidad profesional, guardar la navaja en la oficina y aconsejar al estudiante que cambie su ruta al irse a casa.",
"Retener el objeto, informar a la Dirección para activar el protocolo de seguridad, contactar a la familia y notificar a la Policía Escolar para garantizar la protección del menor y la comunidad.",
"Expulsar inmediatamente al estudiante por portar armas blancas (falta muy grave) y llamar a la prensa para que sirva de escarmiento público.",
"Devolverle la navaja a la hora de la salida argumentando que el orientador no es guardia de seguridad y no puede retener propiedad ajena."
],
"respuestaCorrecta": 1,
"explicacion": "Base Legal: Normas de Convivencia y Protocolos de Seguridad Escolar MINERD. Portar armas es una falta muy grave, pero la amenaza externa constituye un riesgo inminente a la vida (excepción a la confidencialidad). Se debe priorizar la seguridad integral mediante el equipo de gestión y la Policía Escolar (prevención de delitos)."
},
{
"id": 618,
"categoria": "Evaluación",
"pregunta": "Durante una reunión del Equipo de Gestión, el director informa que un estudiante con Discapacidad Intelectual Leve no está alcanzando los indicadores de logro. El docente exige que se le coloque la nota mínima aprobatoria automáticamente por 'inclusión', sin evaluar sus competencias reales. ¿Cuál debe ser la orientación técnica del especialista?",
"opciones": [
"Apoyar al docente, ya que el sistema dominicano prohíbe reprobar a estudiantes con discapacidad bajo cualquier circunstancia para evitar traumas.",
"Elaborar un Diseño Universal para el Aprendizaje global que exima al estudiante de toda evaluación escrita u oral durante el año escolar.",
"Aclarar que la inclusión no es regalar calificaciones; se debe evaluar al estudiante en función de los indicadores establecidos en su Ajuste Curricular Individualizado (ACI), reflejando sus progresos reales.",
"Recomendar que el estudiante sea evaluado con los mismos exámenes estandarizados que el resto del curso para no ser discriminado."
],
"respuestaCorrecta": 2,
"explicacion": "Base Legal: Manual de Apoyo Psicopedagógico y Sistema de Evaluación MINERD. La evaluación de estudiantes con Necesidades Específicas de Apoyo Educativo (NEAE) vinculadas a discapacidad se realiza con base en su plan de ajuste curricular (ACI). Regalar notas (A) o aplicar pruebas sin ajuste (D) violan el derecho al aprendizaje significativo."
},
{
"id": 619,
"categoria": "Prevención",
"pregunta": "Un estudiante de 5to de Secundaria ha acumulado 15 ausencias injustificadas en un mes. Durante una visita domiciliaria, la madre informa que el adolescente de 16 años está trabajando en construcción porque el padre abandonó el hogar y necesitan el dinero. ¿Cuál es la línea de intervención adecuada desde Orientación?",
"opciones": [
"Levantar un acta de abandono escolar, dar de baja al estudiante en el SIGERD y desearle suerte a la familia en su situación económica.",
"Sensibilizar a la familia sobre la importancia de la educación, coordinar flexibilización de horarios con la Dirección y articular con instituciones de bienestar social para apoyo a la familia.",
"Denunciar a la madre ante la fiscalía por explotación laboral infantil, procediendo a retirar de inmediato al menor del hogar con la policía.",
"Obligar al estudiante a elegir entre estudiar a tiempo completo o trabajar, advirtiendo que el reglamento escolar no contempla excepciones por pobreza."
],
"respuestaCorrecta": 1,
"explicacion": "Base Legal: Manual de Servicios (Prevención de abandono escolar) y Ley 136-03. A los 16 años, el trabajo adolescente está regulado, no prohibido de manera absoluta como el infantil, pero no debe interrumpir la educación. El rol del MINERD es retener al estudiante mediante la flexibilización, acompañamiento y derivación a programas de apoyo social."
},
{
"id": 620,
"categoria": "Ética",
"pregunta": "Un orientador de nuevo ingreso decide aplicar una batería de pruebas psicométricas clínicas (Bender, WISC-IV, MMPI) a todos los estudiantes de 1er grado de Primaria para 'descartar problemas mentales' al inicio de año, sin previo consentimiento informado de los padres. ¿Cuál es el error técnico y ético fundamental?",
"opciones": [
"Ninguno. Es una práctica proactiva recomendada por el MINERD para diagnosticar a tiempo y llenar el registro anecdótico.",
"El error es no haber cobrado por la aplicación de pruebas tan costosas dentro del sector público.",
"Constituye una infracción ética grave: el orientador escolar no realiza evaluación clínica, no aplicó el protocolo de derivación específica y violó el derecho al consentimiento informado de las familias.",
"El error radica en no haber incluido pruebas proyectivas gráficas que son más rápidas para diagnosticar a los 6 años."
],
"respuestaCorrecta": 2,
"explicacion": "Base Legal: Ley 22-01 (Colegio Dominicano de Psicólogos) y Manual de Servicios MINERD. La evaluación psicopedagógica escolar no tiene fines clínicos/psiquiátricos, se realiza ante demandas específicas (no masivas sin justificación), y la aplicación de cualquier instrumento requiere el consentimiento informado y firmado por los padres o tutores."
},
{
"id": 621,
"categoria": "Convivencia",
"pregunta": "Durante un recreo, el orientador observa a un docente gritando e insultando a un estudiante frente a sus compañeros, llamándolo 'bueno para nada' y jaloneándolo por el brazo. ¿Cuál es el procedimiento técnico administrativo que debe seguir el departamento de Orientación?",
"opciones": [
"Intervenir asertivamente para detener el maltrato, brindar contención al estudiante, documentar el hecho y levantar un informe a la Dirección para que aplique el régimen disciplinario docente y notifique al Distrito.",
"Ignorar la situación para no romper la colegialidad docente ni crear conflictos con el sindicato de maestros (ADP).",
"Citar a los padres del estudiante para que ellos mismos procedan a demandar al profesor civilmente, lavándose las manos como institución.",
"Confrontar públicamente al docente a gritos frente a los alumnos para demostrar que Orientación protege los derechos de la niñez."
],
"respuestaCorrecta": 0,
"explicacion": "Base Legal: Ley 136-03 (Protección contra el maltrato) y Estatuto del Docente. El maltrato físico/psicológico por parte de un adulto es inaceptable. El orientador es garante de derechos; debe detener el daño y utilizar la vía institucional jerárquica (Dirección, Distrito) para las sanciones administrativas correspondientes, protegiendo a la víctima."
},
{
"id": 622,
"categoria": "Prevención",
"pregunta": "Se detecta a un grupo de estudiantes de 6to de Secundaria consumiendo cigarrillos electrónicos (vapers) dentro de los baños del centro educativo. Según las Normas del Sistema Educativo Dominicano, ¿qué secuencia de acciones debe aplicarse?",
"opciones": [
"Expulsarlos de inmediato del centro, ya que el uso de sustancias nocivas en recintos escolares es un delito que anula su derecho a estudiar.",
"Dejar pasar el incidente si son estudiantes meritorios, y darles una advertencia verbal privada para no manchar su récord escolar.",
"Confiscar los dispositivos, tipificarlo como falta grave, citar a las familias, derivar a consejería en prevención de adicciones y asignar medidas socioeducativas en el centro.",
"Llamar a la policía antidrogas para que arreste a los menores de edad y los traslade al tribunal de tránsito."
],
"respuestaCorrecta": 2,
"explicacion": "Base Legal: Normas de Convivencia MINERD. El consumo de tabaco/vapers en el plantel es una Falta Grave. Conlleva medidas disciplinarias no excluyentes (retención del objeto, citación a familias, compromisos) combinadas con apoyo psicoeducativo, ya que el enfoque normativo es formativo y no puramente punitivo o judicial (como la D, que es desproporcionada)."
},
{
"id": 623,
"categoria": "Inclusión",
"pregunta": "Un estudiante de nuevo ingreso proviene de la zona rural fronteriza y tiene el creole como lengua materna, presentando un nivel muy bajo de español. Sus compañeros se burlan de su acento y los profesores reportan que no entiende las clases. ¿Qué estrategia debe promover la Unidad de Orientación y Psicología?",
"opciones": [
"Recomendar a la familia que el niño no asista a clases hasta que domine el español para que no retrase al resto del grupo.",
"Implementar un programa de acogida intercultural, sensibilizar al grupo curso sobre respeto a la diversidad, y coordinar con los docentes apoyo lingüístico y evaluación diferenciada.",
"Sancionar severamente a los docentes por no saber hablar creole y obligarlos a traducir todas sus planificaciones de inmediato.",
"Aplicar un test de inteligencia (CI) en español para demostrar que el problema del estudiante es cognitivo y no cultural."
],
"respuestaCorrecta": 1,
"explicacion": "Base Legal: Diseño Curricular Dominicano (Atención a la diversidad) y Derechos Humanos. La barrera es lingüística y sociocultural, no cognitiva. Excluir al alumno (A) o evaluarlo con sesgo cultural (D) discrimina y es antitécnico. Se debe promover un enfoque de inclusión, interculturalidad y apoyos curriculares de acceso."
},
{
"id": 624,
"categoria": "Planificación",
"pregunta": "En la elaboración de los programas de Prevención de Riesgos Psicosociales, el Departamento de Orientación planea una campaña sobre Educación Integral en Sexualidad (EIS). ¿En qué marco debe sustentarse técnica y legalmente esta intervención en el sector público dominicano?",
"opciones": [
"En las creencias religiosas predominantes del equipo de gestión, omitiendo cualquier tema que incomode a la asociación de padres.",
"En manuales extranjeros de la década de los 90, priorizando tácticas de miedo y castidad obligatoria como único método.",
"En los ejes transversales del Currículo Dominicano, el enfoque de derechos, la Ley 136-03 y las directrices técnico-pedagógicas del MINERD acordes al nivel de desarrollo.",
"En las opiniones personales que los estudiantes recojan libremente de redes sociales sin ninguna guía estructurada."
],
"respuestaCorrecta": 2,
"explicacion": "Base Legal: Diseño Curricular Nacional, Ley de Educación 66-97 y Política de Educación Integral. Las intervenciones psicoeducativas del MINERD deben ser laicas, científicas, basadas en el currículo nacional, adaptadas a la etapa evolutiva y fundamentadas en el enfoque de derechos humanos para prevenir embarazos, ITS y abusos."
},
{
"id": 625,
"categoria": "Evaluación",
"pregunta": "Un estudiante sufre una crisis de ansiedad severa (ataque de pánico) en medio de un examen de Pruebas Nacionales. Presenta hiperventilación, llanto incontrolable y temblores. ¿Cuál es el abordaje primario del orientador escolar?",
"opciones": [
"Retirar al estudiante a un ambiente tranquilo, aplicar primeros auxilios psicológicos (técnicas de respiración y grounding), notificar a la familia y coordinar la reprogramación de la prueba si la normativa lo permite.",
"Exigirle que termine la prueba inmediatamente en esas condiciones, ya que las Pruebas Nacionales son inamovibles y no se permiten pausas emocionales.",
"Diagnosticar al estudiante con Trastorno de Pánico Generalizado y medicarlo con ansiolíticos del botiquín escolar.",
"Hacer que respire en una funda plástica frente a todo el curso para demostrarles qué sucede cuando no estudian con tiempo."
],
"respuestaCorrecta": 0,
"explicacion": "Base Legal: Manual de Apoyo Psicopedagógico (Manejo de Crisis). El orientador brinda Primeros Auxilios Psicológicos (PAP). Medicar (C) es ilegal y penalizado (ejercicio ilegal de la medicina). Forzarlo o humillarlo (B, D) es maltrato y viola el bienestar emocional, que prima sobre cualquier evaluación estandarizada."
},
{
"id": 626,
"categoria": "Ética",
"pregunta": "Una profesora refiere a Orientación a un estudiante de 3er grado de Primaria por 'hiperactividad' y le exige al psicólogo escolar que redacte un referimiento médico indicando Ritalina (Metilfenidato) para poder admitirlo de nuevo en su clase. ¿Cuál debe ser la postura del profesional?",
"opciones": [
"Redactar la receta médica de inmediato para facilitar la labor docente y calmar el ambiente en el aula.",
"Explicar a la docente que el psicólogo escolar evalúa el contexto de aprendizaje y sugiere estrategias pedagógicas, pero el diagnóstico médico y la prescripción farmacológica son competencia exclusiva del psiquiatra o neurólogo.",
"Sugerir a la madre que compre remedios naturales en la farmacia y no le informe a la maestra.",
"Suspender al estudiante permanentemente porque el centro no cuenta con los recursos médicos para atender TDAH severos."
],
"respuestaCorrecta": 1,
"explicacion": "Base Legal: Ley 22-01 (Límites del ejercicio profesional). El psicólogo u orientador escolar no receta ni prescribe medicamentos; es una falta gravísima de intrusismo médico. Su rol es psicopedagógico (intervención áulica, DUA). La exigencia docente carece de fundamento normativo e institucional."
},
{
"id": 627,
"categoria": "Convivencia",
"pregunta": "Dos estudiantes de 4to de Secundaria inician un intercambio de insultos a través del grupo de WhatsApp del curso durante el fin de semana. El lunes, la tensión se traslada al aula y perturba la clase, aunque no ha llegado a la violencia física. ¿Qué mecanismo del sistema de convivencia se debe activar?",
"opciones": [
"Denunciar el caso en el DICAT (Departamento de Crímenes y Delitos de Alta Tecnología) por terrorismo cibernético.",
"Expulsar a ambos del centro porque los conflictos en redes sociales fuera del horario escolar son Faltas Muy Graves automáticas.",
"Ignorar el caso puesto que los hechos ocurrieron un domingo y fuera del recinto escolar, escapando a la jurisdicción del MINERD.",
"Considerarlo una falta que afecta el clima escolar, citar a ambos estudiantes para un proceso de mediación escolar y aplicar medidas educativas de reparación.",
],
"respuestaCorrecta": 3,
"explicacion": "Base Legal: Normas de Convivencia MINERD. Cuando un evento cibernético o externo afecta el clima escolar interno, el centro tiene potestad de intervención educativa. Un conflicto verbal sin violencia grave (Falta Leve/Grave dependiendo del nivel de daño) es el escenario ideal para la Mediación Escolar y el diálogo restaurativo."
},
{
"id": 628,
"categoria": "Inclusión",
"pregunta": "Un estudiante de 1er ciclo de Primaria es diagnosticado con Dislexia. Su nivel de comprensión oral es excelente, pero fracasa en todas las pruebas escritas debido a su lentitud y errores en la decodificación. ¿Qué adaptación evaluativa debe coordinar Orientación con los docentes?",
"opciones": [
"Reprobarlo en todas las materias hasta que alcance la fluidez lectora esperada para su edad de forma natural.",
"Implementar ajustes en los instrumentos de evaluación, como permitir exámenes orales, brindar tiempo adicional y no penalizar severamente los errores ortográficos.",
"Enviarlo al grado inferior donde los textos son más cortos para que no se frustre con sus compañeros de edad cronológica.",
"Designar a un compañero para que le haga las tareas y los exámenes a lo largo de todo el año escolar."
],
"respuestaCorrecta": 1,
"explicacion": "Base Legal: Diseño Universal para el Aprendizaje (DUA) y Ordenanza 04-2018. Las Dificultades Específicas del Aprendizaje (DEA) requieren ajustes metodológicos y de acceso a la evaluación. Evaluar oralmente permite medir las competencias curriculares reales (comprensión, análisis) esquivando la barrera neurobiológica de la decodificación."
},
{
"id": 629,
"categoria": "Ética",
"pregunta": "El orientador recibe el expediente clínico de un estudiante trasladado donde consta que vive con VIH. El Director del centro, preocupado, le pide al orientador que entregue la lista a todos los docentes y publique el estado del estudiante en la pizarra de maestros para que 'tengan cuidado al curarlo si se raspa'. ¿Cómo debe proceder?",
"opciones": [
"Obedecer al Director inmediatamente, ya que este es su superior jerárquico y la salud de la mayoría del plantel está en riesgo.",
"Negarse rotundamente basándose en la Ley 135-11 sobre VIH/SIDA, garantizando el secreto profesional y protegiendo al estudiante de la estigmatización; en su lugar, reforzar protocolos generales de bioseguridad en primeros auxilios para todo el centro.",
"Convocar una asamblea de padres para votar si están de acuerdo con que el estudiante permanezca en el aula.",
"Exigirle al estudiante que use guantes de látex y mascarilla en todo momento dentro del aula para tranquilizar al Director."
],
"respuestaCorrecta": 1,
"explicacion": "Base Legal: Ley 135-11 de VIH/SIDA (Artículos sobre confidencialidad y no discriminación). Revelar el estado serológico de un estudiante es un delito penado por la ley. La precaución sanitaria ante fluidos (bioseguridad) es universal y debe aplicarse siempre a todos los estudiantes por igual, sin estigmatizar."
},
{
"id": 630,
"categoria": "Prevención",
"pregunta": "Se identifica que un estudiante de 3er grado presenta moretones frecuentes, ropa descuidada, roba comida a sus compañeros y se muestra aterrorizado a la hora de salida. Los padres no asisten a las citaciones del centro. El orientador sospecha de maltrato por negligencia severa y abuso físico. ¿Cuál es el último paso del protocolo de protección tras confirmar la no comparecencia familiar?",
"opciones": [
"Levantar un reporte confidencial al Ministerio Público, Línea Vida o CONANI, detallando las evidencias y el agotamiento de la vía familiar, para que el Estado asuma la protección inmediata.",
"Esperar a final de año escolar para ver si la situación mejora espontáneamente o si el estudiante es trasladado de centro.",
"Comprarle comida al estudiante a diario y ocultarlo en la Dirección a la hora de salida, evitando involucrar a las autoridades judiciales.",
"Publicar fotos de los moretones del niño en las redes sociales de la escuela para crear presión pública y forzar a los padres a asistir."
],
"respuestaCorrecta": 0,
"explicacion": "Base Legal: Ley 136-03 (Código para el Sistema de Protección y los Derechos Fundamentales). Ante indicios de abuso y negligencia parental reiterada, la escuela agota su nivel preventivo y debe activar la ruta de restitución de derechos a través del Estado (Ministerio Público/CONANI). Ocultarlo o exponer su imagen en redes (D) revictimiza y es ilegal."
},

  {
    "id": 631,
    "categoria": "Prevención",
    "pregunta": "En un centro de Nivel Inicial, la maestra reporta que la niña Penélope (5 años) asiste reiteradamente con una falta de higiene extrema, carencia de merienda y ropa inadecuada para el clima. Además, presenta somnolencia constante en el aula. Tras dos citaciones, la madre asiste y alega que trabaja en horario nocturno y no tiene red de apoyo. ¿Cuál es el procedimiento técnico y administrativo procedente?",
    "opciones": [
      "Levantar de inmediato una denuncia en CONANI por negligencia y abuso infantil, solicitando que la niña sea retirada de la custodia de la madre.",
      "Establecer un acuerdo de corresponsabilidad con la madre mediante una entrevista comprensiva, ofreciendo pautas de crianza, derivando a programas de apoyo social (como Supérate) y estableciendo un monitoreo estricto.",
      "Solicitar a la Dirección que no reciba a la niña hasta que asista con las condiciones de higiene estipuladas en el reglamento del centro para proteger a los demás niños.",
      "Iniciar una colecta monetaria entre el personal docente para comprarle la merienda y ropa a la niña durante todo el año escolar."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Ley 136-03 y Manual de Servicios de Orientación y Psicología. Antes de judicializar un caso de negligencia que tiene raíz en la vulnerabilidad socioeconómica, el centro debe agotar el acompañamiento a la familia, brindar apoyo psicoeducativo y articular con redes de asistencia social. La denuncia (A) procede si, tras el agotamiento de estos recursos, persiste la vulneración del derecho."
  },
  {
    "id": 632,
    "categoria": "Inclusión",
    "pregunta": "Durante el periodo de adaptación en el Nivel Inicial, un niño de 4 años muerde y empuja frecuentemente a sus compañeros cuando no se le cede un juguete. La asociación de padres exige a la Dirección la expulsión del menor. ¿Cuál debe ser la intervención del profesional de Psicología Educativa?",
    "opciones": [
      "Recomendar la suspensión por tres días en cada ocasión que muerda para aplicar un condicionamiento operante estricto.",
      "Apoyar la decisión de los padres argumentando que el centro no cuenta con las condiciones para manejar trastornos de conducta en la primera infancia.",
      "Realizar observación áulica, aplicar una evaluación psicopedagógica para descartar barreras del neurodesarrollo, orientar a la docente en el diseño de un rincón de la calma (DUA) e iniciar un programa de psicoeducación con la familia.",
      "Diagnosticar al niño con Trastorno Negativista Desafiante (TND) e indicar a la familia que debe medicarlo antes de regresar al centro."
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Legal: Diseño Curricular del Nivel Inicial y Ley 136-03. El comportamiento agresivo en la etapa preoperacional es frecuentemente inmadurez en la regulación emocional, no una falta disciplinaria. Expulsar (B) o castigar (A) en el Nivel Inicial viola el derecho a la educación. El abordaje exige evaluación de barreras, apoyos de acceso (DUA) y trabajo sistémico familia-escuela."
  },
  {
    "id": 633,
    "categoria": "Ética",
    "pregunta": "Un docente de 2do de Primaria se acerca al departamento de Orientación exigiendo ver la carpeta confidencial de un estudiante, específicamente los resultados numéricos del test de inteligencia (WISC-V), alegando que 'necesita saber su CI exacto para decidir si vale la pena esforzarse en enseñarle'. ¿Cuál debe ser la postura del psicólogo?",
    "opciones": [
      "Entregar la carpeta completa, ya que los docentes son parte del sistema educativo y tienen derecho absoluto sobre toda la información del estudiante.",
      "Negarse a entregar los puntajes brutos basándose en el secreto profesional, y en su lugar, facilitar un informe psicopedagógico que traduzca el perfil cognitivo en estrategias áulicas específicas y ajustes curriculares.",
      "Entregarle únicamente el número de Cociente Intelectual (CI) anotado en un papel, sin las subescalas, para satisfacer su demanda rápidamente.",
      "Levantar una amonestación escrita al docente por discriminación e ignorar su solicitud de acompañamiento en el aula."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Ley 22-01 (Código de Ética del CODOPSI) y Normativa de Evaluación. Los datos clínicos y psicométricos brutos son confidenciales. El docente requiere la interpretación pedagógica (el 'qué hacer') y no la etiqueta clínica (el 'qué tiene'). Facilitar datos técnicos sin interpretación a personal no especializado fomenta la estigmatización y el efecto Pigmalión negativo."
  },
  {
    "id": 634,
    "categoria": "Protección",
    "pregunta": "Una estudiante de 2do de Secundaria (14 años) acude llorando a la Unidad de Orientación. Confiesa que sospecha estar embarazada de su novio, quien tiene 22 años y trabaja en un colmado cercano al centro educativo. ¿Cuál es la acción mandatoria e inmediata según el marco legal dominicano?",
    "opciones": [
      "Celebrar una reunión de conciliación entre los padres de la adolescente y el adulto de 22 años para que asuma su responsabilidad económica y garantizar que ella no abandone la escuela.",
      "Informar al Equipo de Gestión, contactar a los padres de la menor y notificar de manera obligatoria e inmediata al Ministerio Público o CONANI, ya que constituye un delito de abuso sexual estatutario por la minoría de edad.",
      "Enviar a la estudiante a la farmacia a comprar una prueba de embarazo y guardar el secreto para que sus padres no la castiguen.",
      "Expulsar a la estudiante temporalmente hasta que presente una ecografía formal y luego transferirla a la modalidad de educación de adultos (Prepara)."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Ley 136-03 (Código del Menor), Arts. sobre Abuso Sexual. En la República Dominicana, las relaciones sexuales de un adulto con una persona menor de 18 años constituyen seducción de menores o abuso (estatutario), sin importar el presunto 'consentimiento'. La denuncia es un mandato legal ineludible, omitirlo es complicidad."
  },
  {
    "id": 635,
    "categoria": "Planificación",
    "pregunta": "Al analizar el Sistema de Alerta Temprana (SAT) del centro, el orientador detecta que un 15% de los estudiantes de 3ero de Secundaria acumulan más de tres inasistencias injustificadas en un mes. De cara a la planificación preventiva, ¿cuál es el abordaje metodológico correcto?",
    "opciones": [
      "Redactar circulares de advertencia informando a las familias que perderán las ayudas del Estado (bono escolar) si no envían a sus hijos.",
      "Focalizar la intervención individual mediante visitas domiciliarias para identificar factores de riesgo (laborales, familiares, comunitarios) e implementar un plan de acogida y nivelación académica junto a los docentes.",
      "Eliminar el registro de ausencias en el SIGERD para mejorar artificialmente los indicadores de eficiencia interna ante el Distrito Educativo.",
      "Dejar que los estudiantes alcancen el límite de ausencias permitidas para aplicar la repitencia automática, ya que el ausentismo es responsabilidad exclusiva de la familia."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Manual Operativo de Centro Público y Lineamientos de Retención Escolar. El SAT exige intervenciones proactivas y focalizadas. El ausentismo es multifactorial; el MINERD prioriza la retención mediante la identificación de barreras en el entorno del estudiante y la aplicación de planes de nivelación que eviten la sobreedad o el abandono definitivo."
  },
  {
    "id": 636,
    "categoria": "Inclusión",
    "pregunta": "Un estudiante con discapacidad visual (ceguera total) ingresa a 1er grado de Primaria. El docente alega que no puede alfabetizarlo porque no sabe Braille y solicita a Orientación que el estudiante sea transferido al Centro Nacional de Recursos para la Discapacidad Visual. ¿Cuál es el rol del psicólogo/orientador escolar en este contexto?",
    "opciones": [
      "Gestionar inmediatamente el traslado del estudiante al centro de educación especial, argumentando que la escuela regular no está equipada para su condición.",
      "Articular con la Unidad de Atención a la Diversidad del Distrito, coordinar el entrenamiento docente en estrategias auditivo-táctiles, solicitar materiales adaptados y garantizar la permanencia del estudiante implementando un Ajuste Curricular de Acceso.",
      "Asumir personalmente la alfabetización del estudiante sacándolo del aula todos los días durante la clase de Lengua Española.",
      "Exigir a la familia que pague un maestro sombra (tutor) especializado en Braille para que permanezca con el niño durante toda la jornada escolar."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Ordenanza 04-2018 (Educación Inclusiva). El sistema dominicano prioriza la inclusión en aulas regulares con los apoyos necesarios. Transferir al estudiante (A) viola la política de inclusión. El orientador no es terapeuta de lenguaje ni maestro alfabetizador (C), su rol es articular los recursos (Distrito, UAD) y asesorar al docente en los Ajustes de Acceso."
  },
  {
    "id": 637,
    "categoria": "Ética",
    "pregunta": "El psicólogo de un centro educativo público recibe la solicitud de varios padres para que ofrezca terapias clínicas privadas a sus hijos (estudiantes del mismo centro) durante las tardes en su consultorio particular, pagando honorarios. Según el marco legal del ejercicio profesional, ¿cómo debe proceder?",
    "opciones": [
      "Aceptar los casos, aplicando un descuento especial a los padres por ser de la misma comunidad educativa.",
      "Aceptar únicamente a los estudiantes que no presenten problemas de conducta graves, para no contaminar su relación en la escuela.",
      "Rechazar la solicitud, explicando que incurriría en dualidad de roles y conflicto de intereses; procediendo a referir a los estudiantes a otros profesionales o centros de salud pública.",
      "Brindar la terapia clínica de manera clandestina en la oficina de la escuela al finalizar el horario laboral."
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Legal: Ley 22-01 (Código de Ética del CODOPSI). Constituye una falta ética grave (Dualidad de Roles / Conflicto de Intereses) que el psicólogo escolar evalúe, intervenga psicopedagógicamente o tome decisiones administrativas sobre un estudiante en la mañana y le cobre por terapia clínica en la tarde. Obligatoriamente debe derivar a terceros."
  },
  {
    "id": 638,
    "categoria": "Convivencia",
    "pregunta": "Dos docentes inician una discusión acalorada en el pasillo que escala a empujones y uso de vocabulario soez frente a un grupo de estudiantes de Secundaria. El Director solicita la intervención de Orientación. ¿Cuál es el límite de acción del orientador en este caso?",
    "opciones": [
      "Citar a ambos docentes, levantar un acta de indisciplina y recomendar al Director la cancelación de los contratos de ambos educadores.",
      "Intervenir en la mediación entre los docentes como pares, pero orientar la contención psicológica de los estudiantes espectadores; aclarando que el régimen disciplinario de los docentes es competencia exclusiva del Director y Recursos Humanos (Distrito).",
      "Ignorar la situación ya que el Departamento de Orientación y Psicología trabaja exclusivamente con estudiantes y familias, nunca con docentes.",
      "Aplicar una prueba de personalidad a los docentes para diagnosticar cuál de los dos tiene problemas de control de ira."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Estatuto del Docente (Ley 66-97) y Manual Operativo. El orientador apoya el clima escolar y puede facilitar mediación primaria, pero no tiene jerarquía administrativa para sancionar docentes (eso corresponde al Director y Distrito). Su principal obligación técnica aquí es mitigar el impacto emocional y formativo negativo en los estudiantes que presenciaron el hecho."
  },
  {
    "id": 639,
    "categoria": "Prevención",
    "pregunta": "Al aplicar un cuestionario de tamizaje socioemocional, un estudiante de 6to de Secundaria marca afirmativamente la premisa: 'A veces pienso que estaría mejor muerto', pero en la entrevista clínica de riesgo no se evidencia intencionalidad, plan estructurado ni intentos previos. ¿Qué nivel de intervención corresponde?",
    "opciones": [
      "Nivel de Emergencia: Llamar al 911 y trasladarlo involuntariamente a un hospital psiquiátrico bajo custodia.",
      "Nivel Preventivo: Ignorar el resultado asumiendo que es manipulación propia de la adolescencia para llamar la atención.",
      "Nivel de Riesgo Leve/Moderado: Informar a la familia, derivar a evaluación psicológica externa de manera ordinaria, y establecer un plan de seguimiento continuo en el centro (tutoría y apoyo emocional).",
      "Expulsión preventiva por riesgo para la institución, exigiendo una carta de descargo del psiquiatra para poder reingresar."
    ],
    "respuestaCorrecta": 2,
    "explicacion": "Base Legal: Manual de Prevención de Riesgos Psicosociales (Ideación Autolítica). Cuando hay ideación pasiva sin plan ni intención inminente (riesgo leve/moderado), la contención se basa en la red de apoyo (familia) y la derivación ambulatoria. Sobrerreaccionar con internamiento (A) o subestimar (B) son errores técnicos; expulsar (D) es ilegal."
  },
  {
    "id": 640,
    "categoria": "Evaluación",
    "pregunta": "El equipo de gestión discute el caso de un estudiante con Discapacidad Intelectual Moderada en 3er grado de Primaria. El docente pide un 'Ajuste Curricular Significativo'. ¿Qué requisito técnico indispensable, validado por Orientación, debe cumplirse antes de aprobar este tipo de ajuste?",
    "opciones": [
      "Que el estudiante haya reprobado al menos dos años consecutivos en el mismo grado para justificar el cambio de currículo.",
      "Que se demuestre, mediante evaluación psicopedagógica exhaustiva, que los Ajustes Razonables (DUA) y de Acceso aplicados previamente resultaron insuficientes, requiriendo modificar o eliminar competencias específicas del grado.",
      "Que la familia firme un documento aceptando que el estudiante nunca recibirá el certificado de conclusión de bachillerato.",
      "Que el orientador determine empíricamente, tras una semana de observación, que el estudiante no logrará aprender a leer."
    ],
    "respuestaCorrecta": 1,
    "explicacion": "Base Legal: Ordenanza 04-2018 y Manual de Apoyo Psicopedagógico. Un Ajuste Curricular Significativo (modificar competencias/indicadores de logro) es una medida extraordinaria y subsidiaria. Solo procede cuando la evaluación psicopedagógica formal evidencia que, tras agotar los ajustes metodológicos y de acceso (DUA), el estudiante requiere una adaptación en los elementos prescriptivos del currículo."
  },
  {
    id: 641,
    categoria: "Protección Infantil - Abuso Físico",
    pregunta: "Durante la primera hora de clases, una maestra de 3er grado de Primaria remite a la Unidad de Orientación y Psicología a un estudiante de 8 años. El niño presenta hematomas visibles en los brazos y el rostro, se muestra retraído y llora silenciosamente. Al ser abordado, el niño menciona que 'se portó mal y le dieron un castigo en casa'. Como psicólogo/a del centro, ¿cuál es la actuación profesional inmediata que corresponde según el marco normativo vigente?",
    opciones: [
      "Contactar inmediatamente a los padres o tutores para una entrevista en el centro educativo y confrontarlos sobre el origen de los hematomas antes de tomar cualquier otra medida legal.",
      "Realizar un interrogatorio exhaustivo al niño para documentar con exactitud los detalles del abuso, grabando la sesión para entregarla como evidencia concluyente al Ministerio Público.",
      "Garantizar un espacio seguro para el niño en el centro, notificar a la dirección escolar y activar de inmediato la Ruta Crítica denunciando el caso ante el Ministerio Público o CONANI, sin alertar a los agresores.",
      "Registrar las lesiones en el expediente anecdótico del estudiante y establecer un programa de observación de dos semanas para confirmar si existe un patrón de maltrato antes de realizar una denuncia formal."
    ],
    respuestaCorrecta: 2,
    explicacion: "Frente a una sospecha razonable o evidencia física de abuso, la normativa prohíbe la investigación paralela (interrogatorios) por parte del personal escolar para evitar la revictimización y la alteración de evidencias. Asimismo, está contraindicado confrontar a los padres, ya que pone en mayor riesgo al menor. La actuación obligatoria es proteger a la víctima y denunciar a las autoridades competentes de forma inmediata.",
    fundamentoNormativo: {
      documento: "Guía de Ruta Crítica para la Prevención y Atención de la Violencia / Ley 136-03",
      capitulo: "Procedimientos ante Casos de Violencia Intrafamiliar y Abuso",
      apartado: "Art. 14 de la Ley 136-03 (Obligación de Denunciar)",
      justificacion: "El personal docente y administrativo tiene la obligación legal de denunciar cualquier sospecha de abuso o vulneración de derechos de NNA a las autoridades (Ministerio Público/CONANI) sin demora, y no debe asumir roles de investigador judicial ni alertar al presunto agresor."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación de protocolos de protección infantil e intervención en crisis."
  },
  {
    id: 642,
    categoria: "Inclusión Educativa - Ajustes Razonables",
    pregunta: "Un estudiante de 1er grado de Secundaria ha recibido un diagnóstico reciente de Trastorno por Déficit de Atención e Hiperactividad (TDAH). El equipo docente reporta que el estudiante no logra terminar las evaluaciones escritas en el tiempo establecido y muestra altos niveles de frustración. El profesor de Matemáticas argumenta que 'no puede cambiar la prueba estándar porque sería injusto para el resto del grupo' y solicita orientación al psicólogo escolar. ¿Qué directriz debe emitir el psicólogo fundamentado en la normativa?",
    opciones: [
      "Recomendar la transferencia del estudiante a la modalidad de Educación Especial o a un centro especializado, ya que la escuela regular no puede modificar su currículo estándar por políticas de equidad.",
      "Diseñar en conjunto con el docente los Ajustes Razonables pertinentes (ej. extensión de tiempo, fraccionamiento de la prueba o evaluación oral) argumentando que la equidad implica dar a cada estudiante los apoyos necesarios según la EIP.",
      "Solicitar a la familia que el estudiante sea medicado obligatoriamente en horario escolar para garantizar que pueda adaptarse a las metodologías y evaluaciones estándar del centro sin requerir modificaciones.",
      "Eximir al estudiante de tomar pruebas escritas y sugerir que su calificación se base únicamente en la asistencia y el comportamiento en el aula para proteger su autoestima y evitar episodios de frustración."
    ],
    respuestaCorrecta: 1,
    explicacion: "La educación inclusiva no se basa en la uniformidad, sino en la equidad. Eximir al estudiante de la prueba reduce sus expectativas y su derecho a aprender, mientras que derivarlo a educación especial segrega al estudiante. La respuesta correcta es la aplicación de Ajustes Razonables tras una Evaluación Psicopedagógica (EIP), modificando la forma, no necesariamente el fondo de la competencia a evaluar.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva",
      capitulo: "De los Apoyos y Ajustes Razonables en los Centros Educativos",
      apartado: "Artículos referentes a la Evaluación y Ajustes Curriculares",
      justificacion: "La normativa obliga a los centros educativos regulares a realizar los ajustes razonables necesarios (metodológicos, de evaluación o de acceso) basados en la Evaluación Psicopedagógica para garantizar la participación y el aprendizaje de estudiantes con Necesidades Específicas de Apoyo Educativo (NEAE), sin que esto se considere una ventaja injusta."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Asesoramiento psicopedagógico y aplicación de políticas de inclusión educativa."
  },
  {
    id: 643,
    categoria: "Salud Mental Escolar - Riesgo Suicida",
    pregunta: "Una adolescente de 5to de Secundaria entrega a su maestra de Lengua Española una redacción donde expresa explícitamente: 'Ya no soporto más esta presión, pronto desapareceré y dejaré de ser una carga'. La maestra, alarmada por el contenido y por cortes recientes que notó en las muñecas de la estudiante, acude inmediatamente a la Unidad de Orientación y Psicología. ¿Cuál es el proceder ético y protocolar que debe asumir el psicólogo escolar?",
    opciones: [
      "Guardar estricta confidencialidad sobre el escrito para proteger el vínculo terapéutico con la estudiante e iniciar un proceso de psicoterapia clínica semanal dentro del centro educativo.",
      "Llamar a la estudiante para aplicarle un test proyectivo exhaustivo, y si se confirma el riesgo, notificar al Ministerio Público por tratarse de un intento de atentar contra la propia vida.",
      "Brindar primeros auxilios psicológicos, asegurar que la estudiante no se quede sola, citar de carácter urgente a los padres o tutores para notificarles y realizar una derivación inmediata a los servicios de salud mental pública.",
      "Convocar al equipo de gestión y sancionar a la estudiante con suspensión temporal por violar las normas de convivencia al introducir contenido inapropiado y perturbador al aula."
    ],
    respuestaCorrecta: 2,
    explicacion: "En situaciones de ideación suicida o autolesiones, el límite de la confidencialidad se rompe para salvaguardar la vida. El psicólogo escolar no hace terapia clínica ni peritajes. Su rol es la contención inmediata (primeros auxilios psicológicos), la articulación con la familia y la canalización urgente a los servicios de salud (psiquiatría/psicología clínica), manteniendo el seguimiento desde el ámbito escolar.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Ley 136-03",
      capitulo: "Intervención en Crisis y Prevención de Riesgos Psicosociales",
      apartado: "Ruta de atención ante ideación suicida y autolesiones",
      justificacion: "Los lineamientos establecen claramente que el rol del psicólogo escolar ante riesgo vital inminente es la contención, la notificación de urgencia a los tutores legales y la derivación externa a redes de salud mental, ya que el abordaje clínico excede las funciones del centro educativo."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Manejo de intervención en crisis, identificación de riesgos y derivación ética."
  },
  {
    id: 644,
    categoria: "Ética Profesional - Derivación y Referencia",
    pregunta: "El padre de un estudiante de Nivel Inicial, quien se encuentra en un proceso legal de divorcio conflictivo y disputa por la custodia, solicita formalmente al psicólogo de la escuela un 'informe psicológico clínico' que dictamine que la madre es inestable emocionalmente e incapaz de cuidar al niño, argumentando que 'el psicólogo de la escuela conoce bien al niño'. ¿Cómo debe responder el profesional de la psicología escolar?",
    opciones: [
      "Redactar el informe solicitado basándose en las observaciones anecdóticas del comportamiento del niño en el aula y emitir un juicio sobre las competencias parentales de la madre.",
      "Entrevistar a la madre de inmediato para escuchar su versión de los hechos antes de redactar el informe pericial que será enviado al tribunal de familia, garantizando así la objetividad.",
      "Rechazar la solicitud de informe clínico, explicando por escrito que el rol de la Unidad de Orientación y Psicología es exclusivamente psicoeducativo, ofreciendo en su lugar un reporte de desempeño escolar general aplicable para ambos padres.",
      "Ignorar la solicitud del padre y prohibirle la entrada al centro educativo para evitar que los conflictos intrafamiliares alteren la convivencia armoniosa de la escuela."
    ],
    respuestaCorrecta: 2,
    explicacion: "El psicólogo escolar ejerce sus funciones en el ámbito psicoeducativo, no en el clínico ni el forense. Emitir juicios de valor sobre las competencias parentales de un tutor para fines judiciales excede las competencias y el mandato institucional del MINERD, además de constituir una falta ética grave.",
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015) / Código de Ética",
      capitulo: "Funciones y Límites del Ejercicio en el Contexto Escolar",
      apartado: "De la emisión de informes y certificaciones",
      justificacion: "El Manual Operativo delimita las funciones del psicólogo al ámbito escolar (evaluación psicopedagógica, prevención, intervención socioeducativa). Está estrictamente prohibida la emisión de diagnósticos clínicos o informes forenses para tribunales que determinen custodia o aptitudes de los progenitores."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Manejo ético de expedientes y comprensión de los límites del rol profesional."
  },
  {
    id: 645,
    categoria: "Permanencia Escolar - Embarazo Adolescente",
    pregunta: "Una estudiante de 15 años informa al equipo de gestión que tiene 3 meses de embarazo. La Asociación de Padres, Madres y Amigos de la Escuela (APMAE) emite una queja formal exigiendo que la alumna sea expulsada o trasladada a un programa nocturno para adultos, alegando que su presencia 'fomenta el mal ejemplo' entre las demás estudiantes. ¿Cuál es el rol del psicólogo escolar para asegurar la actuación legal e institucional correcta del centro?",
    opciones: [
      "Apoyar la decisión de la APMAE para mantener el orden en el centro, y gestionar rápidamente una beca en un programa de educación acelerada nocturna para que la estudiante no pierda el año escolar.",
      "Orientar al equipo de gestión sobre la ilegalidad de la expulsión o el traslado forzoso, diseñar un plan de apoyo socioemocional y ajustes de asistencia para garantizar la permanencia de la estudiante en su tanda regular.",
      "Suspender a la estudiante temporalmente otorgándole módulos de trabajo en casa hasta que dé a luz, protegiéndola así de la estigmatización de la comunidad educativa y evitando el conflicto.",
      "Convocar a una asamblea general de estudiantes para que por voto democrático decidan si la alumna embarazada puede permanecer en el aula, fomentando la cultura de paz y el liderazgo."
    ],
    respuestaCorrecta: 1,
    explicacion: "La Constitución, la Ley 136-03 y las Normas de Convivencia protegen explícitamente el derecho a la educación de las adolescentes embarazadas en igualdad de condiciones. Cualquier medida de expulsión, suspensión o traslado forzoso por motivo de embarazo es un acto discriminatorio y violatorio de derechos fundamentales. El rol de psicología es garantizar su permanencia y brindarle acompañamiento.",
    fundamentoNormativo: {
      documento: "Ley 136-03 / Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      capitulo: "Derecho a la Educación (Ley 136-03) / Faltas y Medidas Educativas (Normas)",
      apartado: "Prohibición de discriminación por embarazo",
      justificacion: "La Ley 136-03 en sus principios fundamentales sobre la educación prohíbe taxativamente condicionar, limitar o impedir el acceso y la permanencia en el sistema educativo de niñas y adolescentes por encontrarse en estado de embarazo, obligando a los centros a brindar facilidades para la continuidad educativa."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Prevención del abandono escolar y aplicación de normativas de derechos de NNA."
  },
  {
    id: 646,
    categoria: "Convivencia Escolar - Acoso Escolar",
    pregunta: "Un estudiante de 2do de Secundaria reporta que tres compañeros de su aula llevan semanas burlándose de su apariencia física y creando 'memes' degradantes que comparten en un grupo de WhatsApp del curso. El estudiante manifiesta no querer asistir más a la escuela por vergüenza. El director sugiere convocar a todos los implicados a la dirección para que se pidan disculpas públicamente y se den un abrazo frente a la clase. Como psicólogo/a, ¿cuál es su actuación técnica basada en las normas de convivencia?",
    opciones: [
      "Aceptar la medida del director, ya que las disculpas públicas fomentan el arrepentimiento y refuerzan la autoridad del equipo de gestión escolar ante el resto del estudiantado.",
      "Rechazar la mediación forzada o disculpas públicas, intervenir por separado con la víctima (garantizando apoyo) y con los agresores (aplicando medidas educativas), y convocar a las familias de ambas partes.",
      "Sancionar inmediatamente a los agresores con la expulsión definitiva del centro educativo, debido a que el ciberacoso está penado por las leyes dominicanas de delitos de alta tecnología.",
      "Desestimar el caso indicando que, al ocurrir los hechos a través de WhatsApp (fuera del horario y recinto escolar), la escuela no tiene jurisdicción y es competencia exclusiva de las familias."
    ],
    respuestaCorrecta: 1,
    explicacion: "Las Normas de Convivencia prohíben la mediación forzada en casos de acoso escolar (bullying) debido al desequilibrio de poder, lo cual revictimiza al estudiante. Tampoco se debe ignorar el ciberacoso escolar, ya que impacta el clima del aula. La respuesta correcta implica una intervención diferenciada y la aplicación de consecuencias educativas, no meramente punitivas o de falsa reconciliación.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      capitulo: "Abordaje de Situaciones de Violencia y Acoso Escolar",
      apartado: "Prohibición de mediación en casos de acoso y abordaje integral",
      justificacion: "El protocolo de acoso escolar establece explícitamente que la mediación no es aplicable en situaciones de acoso (bullying) por la asimetría de poder. Obligar a la víctima a confrontar a sus agresores o aceptar disculpas forzadas vulnera sus derechos y bienestar emocional."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación de protocolos de convivencia escolar y protección frente al acoso."
  },
  {
    id: 647,
    categoria: "Gestión Institucional - Rol del Psicólogo",
    pregunta: "Durante la segunda semana del año escolar, tres docentes de nivel primario solicitan licencia médica. La dirección del centro educativo instruye al profesional de Orientación y Psicología a que asuma temporalmente la docencia de la asignatura de Ciencias Naturales en el 4to grado durante un mes, argumentando 'necesidades institucionales y sentido de pertenencia'. ¿Cuál es la respuesta técnica y normativa correcta del psicólogo/a?",
    opciones: [
      "Asumir la carga docente solicitada para mantener un clima de armonía institucional, suspendiendo temporalmente las atenciones psicológicas individuales hasta que retornen los maestros.",
      "Asumir la docencia pero solo a tiempo parcial, negociando con el director cubrir la clase tres días a la semana y dedicar los otros dos a sus funciones psicológicas.",
      "Rechazar cordialmente la instrucción amparándose en el Manual Operativo, explicando que asumir roles docentes regulares desvirtúa la naturaleza de su cargo y vulnera el derecho de los estudiantes a recibir asistencia psicoeducativa.",
      "Denunciar inmediatamente al director ante el Tribunal Contencioso Administrativo por abuso de poder y acoso laboral."
    ],
    respuestaCorrecta: 2,
    explicacion: "El Manual Operativo delimita claramente las funciones de la Unidad de Orientación y Psicología. Aunque se promueve el trabajo colaborativo, sustituir a un docente regular en la impartición de asignaturas del currículo es una distorsión del rol que desatiende el servicio de apoyo especializado que requieren los estudiantes.",
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Naturaleza y Funciones de la Unidad de Orientación y Psicología",
      apartado: "Delimitación del Rol Profesional",
      justificacion: "El manual establece las tareas específicas de la unidad (evaluación, prevención, intervención). No incluye la sustitución docente. Desviar al profesional de sus funciones preventivas e interventivas incumple los objetivos de la unidad."
    },
    nivelDificultad: "Media-Alta",
    competenciaEvaluada: "Defensa del rol profesional y gestión institucional ética."
  },
  {
    id: 648,
    categoria: "Protección Infantil - Negligencia Severa",
    pregunta: "Un niño de 6 años de Nivel Inicial falta a clases frecuentemente. Cuando asiste, presenta evidentes signos de desnutrición, mala higiene (ropa sucia, mal olor) y en ocasiones se queda dormido en el aula por fatiga extrema. El equipo de Orientación ha citado a los padres en tres ocasiones mediante comunicaciones escritas y llamadas telefónicas, pero estos han ignorado los llamados. ¿Cuál es la acción mandatoria a seguir?",
    opciones: [
      "Realizar una visita domiciliaria no anunciada junto a la maestra para confrontar a la familia y exigirles que cumplan con su rol bajo amenaza de retirar al niño de la escuela.",
      "Documentar el caso como negligencia severa y abandono de responsabilidades parentales, y remitir inmediatamente una denuncia formal a CONANI o al Ministerio Público de la jurisdicción.",
      "Integrar al niño al programa de alimentación escolar garantizando su desayuno y almuerzo, sin involucrar a las autoridades externas para no criminalizar la pobreza de la familia.",
      "Suspender al estudiante temporalmente hasta que los padres se presenten físicamente en el centro escolar a firmar una carta de compromiso."
    ],
    respuestaCorrecta: 1,
    explicacion: "El cuadro descrito corresponde a negligencia severa (vulneración de derechos a la salud, alimentación y educación). Al agotar las vías institucionales (citaciones sin respuesta), el centro no puede asumir pasividad frente al riesgo del menor ni tomar medidas excluyentes. La denuncia a los organismos de protección (CONANI/Ministerio Público) es obligatoria por ley.",
    fundamentoNormativo: {
      documento: "Ley 136-03 (Código para el Sistema de Protección y los Derechos Fundamentales de NNA)",
      capitulo: "Sistema Nacional de Protección / De los Derechos Fundamentales",
      apartado: "Artículos sobre Negligencia y Obligatoriedad de Denuncia",
      justificacion: "La Ley 136-03 obliga a todo ciudadano, y en especial a las autoridades educativas, a denunciar situaciones donde los padres o tutores falten a sus deberes fundamentales (alimentación, educación, cuidado), tipificando esto como negligencia."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de negligencia y aplicación de la ruta de protección."
  },
  {
    id: 649,
    categoria: "Ética Profesional - Confidencialidad y Expedientes",
    pregunta: "Un maestro guía de 1er grado de Secundaria se acerca al psicólogo escolar y le solicita una copia completa del expediente psicológico de un estudiante nuevo. El docente argumenta que necesita leer las entrevistas familiares, los resultados de los test psicométricos y el historial clínico para 'entender mejor la personalidad del joven' y poder tratarlo adecuadamente. ¿Cómo debe proceder el psicólogo?",
    opciones: [
      "Entregar una copia íntegra del expediente al docente, ya que ambos son parte de la misma institución y comparten la responsabilidad de educar al estudiante.",
      "Negar el acceso al expediente y prohibir al docente involucrarse en los aspectos conductuales del estudiante, indicando que eso es territorio exclusivo de la Unidad de Psicología.",
      "Denegar la entrega del expediente completo por confidencialidad, pero proveer al docente un informe escrito o resumen con pautas de intervención psicopedagógica y ajustes razonables específicos aplicables al aula.",
      "Solicitar al estudiante que firme un consentimiento informado en la dirección, autorizando al maestro a leer su historial familiar y clínico."
    ],
    respuestaCorrecta: 2,
    explicacion: "El expediente psicológico contiene información íntima y sensible amparada por el secreto profesional. Los docentes no necesitan conocer el historial traumático o detalles clínicos para enseñar. El psicólogo debe traducir esos datos en estrategias y orientaciones pedagógicas útiles para el maestro, salvaguardando la privacidad familiar y del estudiante.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Manejo Ético y Confidencialidad de la Información",
      apartado: "Resguardo de Expedientes y Devolución de Información",
      justificacion: "Los lineamientos dictan que el acceso directo al expediente de psicología es exclusivo del profesional del área. A la comunidad educativa (docentes, gestión) se le debe proporcionar únicamente la información estrictamente necesaria para la atención psicoeducativa del estudiante mediante informes de devolución."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Manejo ético de información confidencial e intervención colaborativa."
  },
  {
    id: 650,
    categoria: "Intervención en Crisis - Duelo en la Comunidad Escolar",
    pregunta: "Durante el fin de semana, un estudiante de 6to de Secundaria fallece trágicamente en un accidente de tránsito. El lunes por la mañana, los compañeros de aula están visiblemente afectados, algunos llorando y otros en estado de shock. El equipo de gestión propone cancelar las clases de esa sección por una semana para que 'descansen'. Como psicólogo escolar, ¿qué abordaje técnico postvención debe liderar?",
    opciones: [
      "Apoyar la cancelación de la docencia por una semana, indicando a las familias que busquen asistencia psiquiátrica externa para prevenir el trastorno de estrés postraumático.",
      "Recomendar mantener el centro abierto, pausar el currículo ordinario en esa sección ese día para facilitar un espacio guiado de expresión emocional (círculo de diálogo), identificar estudiantes de alto riesgo y orientar a los docentes sobre cómo manejar el duelo.",
      "Ignorar el suceso y exigir a los docentes que apliquen exámenes ese mismo lunes para distraer a los estudiantes y obligarlos a enfocarse en sus responsabilidades académicas inmediatas.",
      "Reunir a todos los estudiantes de la escuela en la cancha para realizar un simulacro de accidente, a fin de crear conciencia sobre la seguridad vial mientras están sensibles por la tragedia."
    ],
    respuestaCorrecta: 1,
    explicacion: "La cancelación prolongada de clases rompe la rutina estructurante que necesitan los adolescentes en crisis y aísla a los estudiantes de su red de apoyo. La intervención en crisis (postvención) requiere abrir espacios para la validación emocional, contención grupal, psicoeducación sobre el duelo y derivación de los casos más críticos, manteniendo un ambiente seguro.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Intervención en Crisis (Postvención)",
      apartado: "Abordaje de duelo por pérdida inesperada",
      justificacion: "Los protocolos de intervención en crisis señalan que ante una tragedia, el centro educativo debe fungir como espacio de contención. Se deben priorizar las intervenciones grupales de desahogo, la restitución gradual de la rutina y la no evitación del tema, orientando a la comunidad."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Diseño y ejecución de protocolos de intervención en crisis institucional (postvención)."
  },
  {
    id: 651,
    categoria: "Inclusión Educativa - Trastorno del Espectro Autista (TEA)",
    pregunta: "En un aula de 3er grado de Primaria hay un estudiante diagnosticado con TEA Nivel 1. Durante los actos cívicos matutinos (izamiento de la bandera con uso de altoparlantes y música a alto volumen), el estudiante sufre crisis sensoriales, tapándose los oídos y emitiendo gritos. El profesor de Educación Física exige que el niño sea obligado a participar para 'que se acostumbre a las reglas'. ¿Cuál es la intervención adecuada desde el servicio de psicología?",
    opciones: [
      "Apoyar al profesor y diseñar un programa de desensibilización sistemática forzada obligando al estudiante a permanecer 5 minutos adicionales cada día en el acto cívico.",
      "Suspender la participación del estudiante en todas las actividades sociales de la escuela para evitar crisis, confinando su estancia escolar únicamente al aula de clases.",
      "Intervenir formativamente con el docente sobre hiperreactividad sensorial, y establecer un Ajuste Razonable que permita al estudiante ubicarse en una zona de menor impacto acústico o usar auriculares canceladores de ruido durante la actividad.",
      "Remitir al estudiante a un neurólogo y condicionar su asistencia al centro educativo a la prescripción de sedantes psicofarmacológicos que controlen sus gritos."
    ],
    respuestaCorrecta: 2,
    explicacion: "Forzar a un estudiante con TEA a tolerar estímulos que le causan dolor o desregulación debido a hiperreactividad sensorial constituye una forma de maltrato. La inclusión requiere comprender el perfil neurobiológico y proveer los apoyos de acceso (ej. protectores auditivos) o modificaciones en el entorno, promoviendo la participación en condiciones de bienestar.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva",
      capitulo: "De los Ajustes Razonables y Apoyos de Acceso",
      apartado: "Diseño Universal y Ajustes Individualizados",
      justificacion: "La normativa estipula la obligación de los centros de proveer herramientas o modificaciones en el entorno (ajustes de acceso) para mitigar barreras sensoriales o físicas, permitiendo que los estudiantes con NEAE participen activamente sin ser sometidos a situaciones que atenten contra su integridad."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación de ajustes razonables y sensibilización docente en neurodivergencia."
  },
  {
    id: 652,
    categoria: "Salud Mental Escolar - Consumo de Sustancias",
    pregunta: "El conserje de un liceo secundario descubre a un estudiante de 14 años utilizando un cigarrillo electrónico (vapeador) dentro del baño del plantel. El director del centro retiene al adolescente y le solicita al psicólogo escolar que llame a la Policía Nacional para que lo arresten por 'consumo de drogas en el recinto'. Según las normativas educativas, ¿cuál es la orientación correcta que debe dar el psicólogo al director?",
    opciones: [
      "Indicar que la Ley 136-03 exige la judicialización automática de todos los menores encontrados con sustancias ilícitas o reguladas dentro de las escuelas.",
      "Aclarar que, aunque es una falta grave, el enfoque debe ser formativo y de salud: notificar a los padres, aplicar la consecuencia disciplinaria estipulada en las Normas y derivar al estudiante a consejería especializada, sin involucrar a la fuerza pública por consumo/porte simple.",
      "Llamar a la Policía Nacional de inmediato, pero solicitar que ingresen vestidos de civil para no alarmar al resto de la comunidad estudiantil, garantizando el protocolo.",
      "Devolver el dispositivo al estudiante, pedirle que no lo vuelva a hacer y mantener el caso en secreto entre el psicólogo y el estudiante para ganarse su confianza."
    ],
    respuestaCorrecta: 1,
    explicacion: "El consumo o porte de sustancias legales (como el tabaco/vape) o ilegales (en cantidades de consumo personal) dentro del centro escolar es una falta disciplinaria (grave/muy grave), pero no amerita intervención policial bajo la premisa de arresto en el recinto, lo cual viola el debido proceso y revictimiza. El abordaje debe ser psicoeducativo, disciplinario interno y de salud (derivación).",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      capitulo: "Clasificación de las Faltas y Medidas Educativas y Disciplinarias",
      apartado: "Abordaje de faltas muy graves (Consumo de Sustancias)",
      justificacion: "El documento cataloga el consumo de sustancias dentro del centro como falta muy grave. Su abordaje conlleva el aviso a la familia, derivación a centros de tratamiento (ej. CAID, Hogares Crea) y aplicación de medidas socioeducativas, prohibiendo el trato degradante o la criminalización directa por parte del centro."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Manejo de protocolos ante consumo de sustancias y orientación normativa al equipo de gestión."
  },
  {
    id: 653,
    categoria: "Orientación Vocacional - Trabajo con Familias",
    pregunta: "Durante el proceso de orientación vocacional en 5to de Secundaria, un estudiante muestra aptitudes sobresalientes y profundo interés por la carrera de Artes Plásticas. En la entrevista familiar, el padre rechaza rotundamente los resultados, amenazando con 'no pagarle la universidad y echarlo de la casa' si no estudia Ingeniería Civil. El estudiante se muestra ansioso y dispuesto a renunciar a su vocación por miedo. ¿Cuál es la intervención pertinente del psicólogo/a?",
    opciones: [
      "Incentivar al estudiante a enfrentar a su padre y salir de su casa para defender sus sueños, indicándole cómo aplicar a becas estatales para independizarse.",
      "Modificar el informe del perfil vocacional para que indique que el estudiante tiene aptitudes para Ingeniería Civil, evitando así la ruptura del núcleo familiar.",
      "Realizar un proceso de mediación familiar, presentando a los padres de forma objetiva el perfil de aptitudes e intereses del estudiante, psicoeducando sobre los riesgos de la imposición vocacional, pero permitiendo que la familia tome sus propias decisiones.",
      "Reportar al padre ante el Tribunal de Niños, Niñas y Adolescentes por violencia psicológica y coacción del libre desarrollo de la personalidad del menor."
    ],
    respuestaCorrecta: 2,
    explicacion: "El psicólogo no toma decisiones por la familia ni debe falsear instrumentos técnicos. Su rol es facilitar la comunicación, presentar los datos objetivos (resultados vocacionales) y psicoeducar sobre las consecuencias (frustración, deserción universitaria) de imponer una carrera, promoviendo el diálogo sin escalar el caso a nivel judicial a menos que haya violencia grave, lo cual no aplica como primera instancia aquí.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Apoyo Psicoafectivo y Orientación Vocacional",
      apartado: "Acompañamiento a las familias en la transición vocacional",
      justificacion: "Se establece que la orientación vocacional incluye el trabajo de sensibilización con las familias, ayudándolas a comprender las habilidades e intereses de sus hijos para la toma de decisiones informadas y consensuadas, previniendo el abandono escolar o universitario."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Manejo de conflictos familiares en el marco del asesoramiento vocacional."
  },
  {
    id: 654,
    categoria: "Convivencia Escolar - Mediación de Conflictos",
    pregunta: "Dos estudiantes de 4to de Secundaria inician una fuerte discusión verbal en el pasillo por un malentendido relacionado con un proyecto grupal. Un maestro los interrumpe antes de que haya agresión física y los remite al Departamento de Psicología. Ambos estudiantes están alterados, pero afirman querer resolver el problema porque eran buenos amigos. Según el modelo de cultura de paz del MINERD, ¿cuál es la estrategia inicial a implementar?",
    opciones: [
      "Sancionar a ambos estudiantes con tres días de suspensión, ya que las discusiones acaloradas en los pasillos alteran el orden del centro y constituyen una falta grave no negociable.",
      "Iniciar un proceso de mediación escolar formal, estableciendo reglas claras de respeto mutuo, permitiendo que ambos expresen sus necesidades y facilitando que ellos mismos construyan un acuerdo reparador.",
      "Interrogar a los estudiantes para determinar quién inició la discusión y obligar al culpable a realizar trabajos de limpieza en la escuela como castigo ejemplar.",
      "Remitir el caso directamente al Comité de Disciplina para que este determine quién tiene la razón técnica en el proyecto grupal y asigne las calificaciones correspondientes."
    ],
    respuestaCorrecta: 1,
    explicacion: "Cuando existe un conflicto interpersonal sin violencia grave o asimetría de poder (como en el acoso), y las partes tienen voluntad de resolverlo, la mediación es la herramienta por excelencia de la Cultura de Paz. Las suspensiones automáticas por discusiones menores no resuelven el conflicto de fondo y contradicen el enfoque restaurativo.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      capitulo: "Mecanismos de Resolución Alternativa de Conflictos",
      apartado: "La Mediación Escolar",
      justificacion: "Las Normas fomentan el uso de la mediación y el diálogo como primera opción para resolver conflictos interpersonales (faltas leves o conflictos de convivencia general) siempre que haya voluntad de las partes y no se trate de vulneración de derechos o violencia sistemática."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Aplicación de técnicas de resolución de conflictos y mediación escolar."
  },
  {
    id: 655,
    categoria: "Protección Infantil - Violencia Intrafamiliar",
    pregunta: "Durante una reunión de seguimiento académico, una madre irrumpe en llanto y le confiesa en privado al psicólogo escolar que su pareja la agrede físicamente de forma habitual y que anoche amenazó con un cuchillo a uno de los hijos (estudiante del centro) para que no llorara. La madre ruega: 'Por favor, no diga nada o él nos matará'. ¿Cómo debe actuar el psicólogo frente a esta revelación?",
    opciones: [
      "Respetar la voluntad de la madre manteniendo el secreto profesional absoluto, y ofrecerle un espacio de psicoterapia semanal en el centro para fortalecer su autoestima hasta que esté lista para denunciar.",
      "Garantizar la protección del niño reteniendo su salida del centro, notificar al Ministerio Público o a la línea de auxilio gubernamental (Línea Vida/911) inmediatamente, y activar la Ruta Crítica de atención a la violencia.",
      "Citar al agresor al centro educativo bajo un pretexto académico para realizarle una entrevista confrontativa, evaluando si realmente representa un peligro letal para la familia.",
      "Entregar un folleto informativo sobre violencia de género a la madre y documentar la situación en el expediente del estudiante como un factor atenuante si sus calificaciones bajan."
    ],
    respuestaCorrecta: 1,
    explicacion: "El secreto profesional tiene sus límites legales absolutos frente al riesgo inminente contra la vida y la integridad de un menor de edad. La amenaza con un arma blanca tipifica como violencia extrema e intento de homicidio. Ocultar la información (complicidad por omisión) o citar al agresor pondría en riesgo mortal a las víctimas. Se debe alertar a las autoridades correspondientes para extracción o protección.",
    fundamentoNormativo: {
      documento: "Guía de Ruta Crítica para la Prevención y Atención de la Violencia / Ley 136-03",
      capitulo: "Abordaje de la Violencia Intrafamiliar y de Género",
      apartado: "Ruptura del Secreto Profesional ante Riesgo Vital",
      justificacion: "La Ley 136-03 (Art. 14) y la Ruta Crítica establecen que ante revelaciones de abuso sexual, violencia física o riesgo vital contra menores, el profesional debe romper la confidencialidad y notificar inmediatamente a las autoridades judiciales (Ministerio Público/Línea Vida) para la intervención de emergencia."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de violencia intrafamiliar y ejecución de la Ruta Crítica priorizando el derecho a la vida."
  },

  {
    id: 656,
    categoria: "Inclusión Educativa - Discapacidad Intelectual",
    pregunta: "Un estudiante de 3er grado de Primaria ha sido evaluado externamente y diagnosticado con Discapacidad Intelectual Leve. La maestra titular, preocupada por su rezago en lectoescritura, solicita a la Unidad de Orientación y Psicología que el niño sea 'dejado en el mismo grado automáticamente' hasta que logre leer y escribir como el resto del grupo. ¿Cuál es el proceder técnico y normativo adecuado?",
    opciones: [
      "Aprobar la repitencia automática, ya que la promoción de un estudiante que no domina las competencias básicas de lectoescritura afectaría los indicadores de logro del centro educativo.",
      "Realizar una evaluación psicopedagógica para diseñar un Plan de Apoyos y Ajustes Razonables Individualizados (PIAR), orientando a la maestra sobre la diversificación curricular y promoviendo al estudiante basándose en su progreso respecto a sus propias metas, no al estándar del grupo.",
      "Derivar al estudiante de manera definitiva a una escuela de Educación Especial, ya que las escuelas regulares en República Dominicana no cuentan con la infraestructura para atender discapacidad intelectual.",
      "Eximir al estudiante de todas las evaluaciones de lectoescritura y calificarlo únicamente mediante pruebas orales hasta que finalice la primaria, sin modificar los contenidos."
    ],
    respuestaCorrecta: 1,
    explicacion: "La normativa dominicana de educación inclusiva establece que el sistema debe adaptarse al estudiante, no a la inversa. La repetición de curso basada únicamente en el diagnóstico o en la comparación con el grupo estándar es una práctica excluyente. La actuación correcta es el diseño de ajustes razonables (significativos o no significativos) basados en una evaluación de sus necesidades de apoyo.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva",
      capitulo: "De la Evaluación y Promoción de Estudiantes con NEAE",
      apartado: "Promoción basada en Ajustes Curriculares",
      justificacion: "La ordenanza dispone que la evaluación y promoción de los estudiantes con Necesidades Específicas de Apoyo Educativo (NEAE) asociadas a discapacidad se realizará en función de los objetivos y metas establecidos en su Plan Individualizado de Ajustes Razonables, evitando la repitencia como primera medida."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Diseño de ajustes razonables y manejo de políticas de promoción en educación inclusiva."
  },
  {
    id: 657,
    categoria: "Salud Mental Escolar - Trastornos de Ansiedad",
    pregunta: "Durante la aplicación de una prueba completiva, una estudiante de 6to de Secundaria comienza a hiperventilar, presenta taquicardia, llanto incontrolable y manifiesta sentir que 'se va a morir'. La maestra evaluadora le pide que salga del aula y se lave la cara para que regrese rápido a terminar. Como psicólogo/a escolar que es llamado a intervenir, ¿cuál es la primera acción a ejecutar?",
    opciones: [
      "Indicar a la maestra que le anule la prueba para evitar mayor estrés y asignar a la estudiante una calificación promedio basada en su rendimiento durante el año escolar.",
      "Llevar a la estudiante a la dirección para que el equipo de gestión documente el incidente, y llamar inmediatamente a una ambulancia por sospecha de infarto agudo al miocardio.",
      "Aplicar Primeros Auxilios Psicológicos (PAP) en un espacio privado y tranquilo, utilizando técnicas de respiración y grounding para estabilizarla; posteriormente, notificar a la familia y coordinar una evaluación clínica externa.",
      "Realizar una sesión de psicoterapia breve en ese mismo instante para indagar sobre traumas de la infancia que puedan estar detonando el ataque de pánico durante la prueba."
    ],
    respuestaCorrecta: 2,
    explicacion: "Ante un ataque de pánico o crisis de ansiedad severa, la prioridad absoluta es la contención emocional inmediata mediante Primeros Auxilios Psicológicos (PAP) para desescalar los síntomas fisiológicos y psicológicos. El psicólogo escolar no hace psicoterapia profunda en medio de una crisis, ni anula pruebas de forma unilateral sin un proceso de ajuste razonable posterior.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Intervención en Crisis y Apoyo Psicoafectivo",
      apartado: "Abordaje de crisis emocionales y Primeros Auxilios Psicológicos",
      justificacion: "Los lineamientos establecen el protocolo de intervención en crisis que manda al profesional a priorizar la estabilización emocional del estudiante mediante los PAP, garantizando su seguridad física y psicológica antes de cualquier otra medida académica o disciplinaria."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Aplicación de Primeros Auxilios Psicológicos y manejo de crisis en el contexto escolar."
  },
  {
    id: 658,
    categoria: "Protección Infantil - Abuso Sexual (Revelación)",
    pregunta: "Una niña de 5 años del Nivel Inicial se acerca a la orientadora durante el recreo y, de manera espontánea, le cuenta que un tío que vive en su casa 'le toca sus partes íntimas y le dice que es un secreto'. ¿Cuál es el procedimiento estricto que debe seguir la orientadora/psicóloga escolar según la Ruta Crítica?",
    opciones: [
      "Citar de urgencia a los padres de la niña al centro educativo para informarles sobre la revelación y exigirles que el tío sea expulsado de la vivienda antes de permitir que la niña regrese a la escuela.",
      "Llevar a la niña a un espacio privado, realizarle una entrevista estructurada con muñecos anatómicos para confirmar la veracidad del relato, y luego notificar al Ministerio Público.",
      "Escuchar activamente a la niña sin hacer preguntas inductivas, validar sus emociones, documentar las palabras exactas, notificar a la dirección y activar de inmediato la denuncia ante CONANI/Ministerio Público, evitando alertar a la familia si esto supone un riesgo.",
      "Documentar la revelación en el registro anecdótico y observar el comportamiento de la niña durante un mes para identificar cambios drásticos antes de iniciar un proceso judicial que pueda destruir a la familia."
    ],
    respuestaCorrecta: 2,
    explicacion: "Ante la revelación espontánea de abuso sexual infantil, el protocolo prohíbe terminantemente realizar interrogatorios o usar herramientas periciales (como muñecos anatómicos), ya que esto es competencia exclusiva de las entrevistas forenses y puede invalidar el testimonio. Tampoco se debe alertar a la familia de manera inmediata si el presunto agresor pertenece al núcleo, por el alto riesgo de encubrimiento o represalias.",
    fundamentoNormativo: {
      documento: "Guía de Ruta Crítica para la Prevención y Atención de la Violencia",
      capitulo: "Detección y Abordaje de Abuso Sexual Infantil",
      apartado: "Principios de actuación ante la revelación espontánea",
      justificacion: "La Ruta Crítica especifica que el rol escolar es la recepción de la noticia (creer a la víctima, no revictimizar, no investigar) y la derivación inmediata a las autoridades competentes (Ministerio Público/Línea Vida), manteniendo reserva absoluta."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación de la Ruta Crítica ante revelación de ASI y prevención de la revictimización."
  },
  {
    id: 659,
    categoria: "Convivencia Escolar - Faltas Graves y Debido Proceso",
    pregunta: "Dos estudiantes de 5to de Secundaria son sorprendidos por un conserje rompiendo intencionalmente los lavamanos del baño. El Director del liceo decide expulsarlos definitivamente esa misma tarde e instruye al psicólogo para que firme la carta de expulsión avalando que 'su conducta es un peligro para el centro'. ¿Cómo debe proceder el psicólogo frente a esta instrucción?",
    opciones: [
      "Firmar la carta de expulsión, ya que el vandalismo a la propiedad pública es un delito y el director es la máxima autoridad del centro, a quien se le debe subordinación administrativa.",
      "Rechazar la firma, explicando al Director que las Normas de Convivencia prohíben la expulsión definitiva o cancelación de matrícula durante el año escolar, y solicitar la apertura de un proceso disciplinario que garantice el derecho a la defensa y medidas socioeducativas.",
      "Firmar la carta pero añadir una nota al margen indicando que los estudiantes deben recibir terapia psicológica obligatoria como condición para ser aceptados en otro liceo público.",
      "Convocar a la policía para que arreste a los estudiantes por destrucción del patrimonio del Estado, evitando así tener que lidiar con el proceso disciplinario interno."
    ],
    respuestaCorrecta: 1,
    explicacion: "El debido proceso y el derecho a la educación limitan el poder punitivo de la dirección escolar. Las Normas de Convivencia no contemplan la expulsión definitiva como sanción aplicable por el director de manera unilateral y menos sin agotar el debido proceso (derecho a ser escuchado, notificación a padres, mediación o comité disciplinario). El psicólogo debe ser garante de los derechos del estudiante.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      capitulo: "Marco Disciplinario y Debido Proceso",
      apartado: "Medidas aplicables a faltas graves y muy graves",
      justificacion: "Las normativas prohíben categóricamente la expulsión escolar como medida disciplinaria, estableciendo en su lugar suspensiones temporales con acompañamiento pedagógico y medidas reparadoras, garantizando siempre el derecho a la educación y a la defensa del estudiante."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Asesoramiento normativo al equipo de gestión y defensa del debido proceso disciplinario."
  },
  {
    id: 660,
    categoria: "Trabajo Interdisciplinario - Límite del Rol Psicológico",
    pregunta: "Una estudiante de 4to de Secundaria regresa a clases tras estar hospitalizada por un cuadro de depresión clínica severa. El psiquiatra tratante envía una carta al colegio indicando que 'la psicóloga escolar debe realizar sesiones de psicoterapia cognitivo-conductual dos veces por semana con la joven para tratar su depresión'. ¿Cuál es la respuesta profesional e institucional correcta?",
    opciones: [
      "Asumir el mandato del psiquiatra y agendar las dos sesiones semanales de psicoterapia clínica, ya que proviene de un profesional médico de mayor jerarquía en el área de la salud mental.",
      "Responder formalmente al psiquiatra aclarando que la Unidad de Psicología Escolar no realiza psicoterapia clínica, ofreciendo en su lugar un plan de seguimiento psicoeducativo, monitoreo conductual y ajustes razonables coordinados con sus docentes.",
      "Ignorar la carta del psiquiatra y prohibir el reingreso de la estudiante hasta que presente un certificado de 'alta médica total', ya que la escuela no puede hacerse responsable de estudiantes inestables.",
      "Asumir la terapia cognitivo-conductual pero cobrar honorarios privados a la familia por estas sesiones, ya que exceden el horario y las funciones regulares del MINERD."
    ],
    respuestaCorrecta: 1,
    explicacion: "Existe una clara delimitación entre la psicología clínica y la psicología escolar. El psicólogo escolar trabaja en la prevención, el apoyo psicoeducativo y la adaptación escolar, no realiza intervenciones clínicas estructuradas (psicoterapia) para tratar psicopatologías. Acceder a esta petición sería una falta ética y un desvío de funciones.",
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Naturaleza y Funciones de la Unidad de Orientación y Psicología",
      apartado: "Limitaciones de la intervención en el contexto educativo",
      justificacion: "El Manual Operativo es claro al especificar que los profesionales de psicología en las escuelas no ejercen la práctica clínica. Su función ante estudiantes con trastornos mentales diagnosticados es el seguimiento, la coordinación interdisciplinaria (con el clínico externo) y la orientación a la comunidad educativa."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Delimitación ética del rol frente a demandas externas y trabajo interdisciplinario."
  },
  {
    id: 661,
    categoria: "Liderazgo Institucional - Programas Preventivos",
    pregunta: "Ante un preocupante aumento de embarazos en adolescentes en un centro educativo, la directora convoca al equipo de Psicología y les instruye organizar una 'charla de terror' de dos horas, mostrando imágenes crudas de partos complicados e infecciones de transmisión sexual para 'asustar a los jóvenes y que dejen de tener relaciones'. ¿Qué abordaje técnico debe proponer el psicólogo/a?",
    opciones: [
      "Acatar la instrucción de la directora y contactar a un médico patólogo para que imparta la conferencia, asegurando el impacto visual solicitado.",
      "Negarse a dar la charla y sugerir que se prohíba estrictamente el noviazgo dentro y fuera de la escuela, sancionando a cualquier estudiante que sea visto en actitudes románticas.",
      "Presentar una propuesta de Educación Integral en Sexualidad o Afectivo-Sexual, continua y basada en el currículo, enfocada en habilidades para la vida, autocuidado, proyecto de vida y toma de decisiones, argumentando que las intervenciones basadas en el miedo son ineficaces y revictimizantes.",
      "Realizar una campaña en las redes sociales de la escuela exponiendo los casos recientes de embarazo como ejemplos de fracaso personal, para generar conciencia social comunitaria."
    ],
    respuestaCorrecta: 2,
    explicacion: "La evidencia científica y los lineamientos del MINERD indican que las intervenciones preventivas basadas en el miedo (tácticas de choque) son ineficaces y éticamente cuestionables. La prevención del embarazo adolescente requiere un abordaje transversal, formativo y basado en derechos, enfocado en el desarrollo integral, la educación afectivo-sexual y la construcción de un proyecto de vida.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Programas de Prevención y Promoción de Estilos de Vida Saludables",
      apartado: "Educación Afectivo-Sexual y Proyecto de Vida",
      justificacion: "El sistema educativo dominicano asume un enfoque de promoción de derechos y habilidades para la vida. Las estrategias de Orientación y Psicología para la prevención de embarazos deben ser continuas, formativas, integradas al currículo y desprovistas de enfoques punitivos o fundamentados en el terror."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Diseño de estrategias preventivas basadas en evidencia y asesoramiento a la gestión directiva."
  },
  {
    id: 662,
    categoria: "Inclusión Educativa - Altas Capacidades",
    pregunta: "Un estudiante de 4to grado de Primaria termina sus asignaciones mucho antes que el resto, hace preguntas de alta complejidad y, al aburrirse, interrumpe constantemente la clase. Una evaluación psicopedagógica confirma que posee Altas Capacidades Intelectuales. El docente solicita que el niño asuma el rol de 'profesor asistente' y pase su tiempo libre corrigiendo cuadernos. ¿Es esta una estrategia de inclusión adecuada?",
    opciones: [
      "Sí, porque fomenta el liderazgo, mantiene al estudiante ocupado y reduce la carga laboral del maestro, beneficiando el clima del aula.",
      "No. La estrategia correcta es promover al estudiante inmediatamente a 6to grado de Primaria (aceleración total) sin importar su desarrollo socioemocional, para igualar su nivel cognitivo.",
      "No. La delegación de responsabilidades docentes vulnera su derecho a aprender. Se debe aplicar un enriquecimiento curricular, proponiendo actividades de mayor profundidad, investigación y complejidad sobre los temas tratados.",
      "Sí, pero solo si el estudiante recibe una calificación extra por su labor de asistente, de modo que se sienta recompensado por su capacidad cognitiva superior."
    ],
    respuestaCorrecta: 2,
    explicacion: "Convertir a un estudiante de altas capacidades en un 'asistente del maestro' o 'corrector' es una falsa inclusión que no responde a sus necesidades educativas y lo estanca cognitivamente. La inclusión de altas capacidades requiere el enriquecimiento y flexibilización curricular (profundización, proyectos de investigación), no la asignación de tareas mecánicas o administrativas.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva",
      capitulo: "Atención a Estudiantes con Necesidades Específicas de Apoyo Educativo",
      apartado: "Apoyos para Estudiantes con Altas Capacidades",
      justificacion: "La ordenanza estipula que los estudiantes con altas capacidades tienen derecho a ajustes razonables enfocados en el enriquecimiento curricular, la ampliación y flexibilización de contenidos, garantizando su desarrollo integral continuo y evitando la desmotivación."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Diseño de ajustes razonables y estrategias de enriquecimiento para altas capacidades."
  },
  {
    id: 663,
    categoria: "Salud Mental Escolar - Autolesiones",
    pregunta: "El profesor de Educación Física reporta al psicólogo que un estudiante de 2do de Secundaria siempre usa suéteres de manga larga, y que hoy, accidentalmente, le observó múltiples cortes superficiales recientes (cutting) en el antebrazo. Al ser entrevistado, el estudiante confiesa que se corta porque 'el dolor físico hace que olvide los problemas de casa'. ¿Cuál es el manejo protocolar correcto?",
    opciones: [
      "Inspeccionar las mochilas de todos los estudiantes del curso para confiscar objetos punzocortantes y dar una charla grupal señalando que cortarse es una conducta de manipulación.",
      "Realizar una contención emocional, evaluar el riesgo suicida de forma preliminar, contactar urgentemente a los padres o tutores para notificarles la situación y establecer una derivación obligatoria a psiquiatría/psicología clínica.",
      "Obligar al estudiante a firmar un 'contrato de no suicidio' y guardar el secreto para que confíe en el departamento, dándole seguimiento escolar mensual.",
      "Suspender al estudiante del centro por atentar contra su propia vida y contra las buenas costumbres, recomendando su ingreso a un internado o centro de rehabilitación."
    ],
    respuestaCorrecta: 1,
    explicacion: "Las autolesiones no suicidas son un indicador grave de desregulación emocional y riesgo psicosocial. El protocolo exige la ruptura del secreto profesional por riesgo a la integridad, notificación a los tutores legales, y derivación inmediata al sistema de salud mental externo, manteniendo un rol de apoyo en el centro. Sancionar o ridiculizar la conducta agrava profundamente la crisis.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Protocolo de Intervención ante Autolesiones y Riesgo Suicida",
      apartado: "Abordaje e involucramiento familiar",
      justificacion: "El documento oficial establece que toda conducta autolesiva, independientemente de su supuesta intencionalidad, debe ser tratada como una emergencia psicoeducativa. Implica la notificación inmediata a la familia y la canalización a servicios especializados de salud."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Evaluación de riesgo, intervención en crisis y aplicación de protocolos de salud mental."
  },
  {
    id: 664,
    categoria: "Ética Profesional - Manejo de Expedientes",
    pregunta: "Un estudiante se traslada a otro centro educativo privado. El psicólogo del nuevo colegio solicita formalmente a la Unidad de Orientación y Psicología del MINERD el envío del expediente psicológico original completo, argumentando que necesitan leer las notas de las sesiones, las entrevistas familiares íntimas y los test aplicados para 'no empezar desde cero'. ¿Cuál es la respuesta ética y normativa apropiada?",
    opciones: [
      "Fotocopiar el expediente completo y enviarlo en un sobre cerrado directamente al director del nuevo centro educativo para garantizar que la información fluya institucionalmente.",
      "Negarse a enviar cualquier tipo de información, alegando que la Ley de Protección de Datos prohíbe compartir información de un estudiante de una escuela pública a una institución privada.",
      "Redactar un 'Informe de Derivación o Psicopedagógico' que sintetice las fortalezas, necesidades de apoyo, ajustes razonables implementados y recomendaciones, resguardando el expediente clínico/anecdótico original.",
      "Entregar el expediente original físicamente a los padres para que ellos decidan si desean entregarlo o no al nuevo psicólogo escolar."
    ],
    respuestaCorrecta: 2,
    explicacion: "El expediente original es propiedad de la institución de origen y contiene información íntima (notas de evolución, secretos familiares) amparada por el secreto profesional, que no debe ser transferida crudamente. Lo ético y normativo es generar un informe de derivación o resumen psicopedagógico (Informe de Progreso) que traduzca los datos relevantes en pautas de intervención para el nuevo centro.",
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Manejo y Custodia de la Información Confidencial",
      apartado: "Traslado de estudiantes y emisión de informes",
      justificacion: "Las normas éticas y el manual operativo dictan que los expedientes crudos no se transfieren. En caso de traslado o derivación, se debe elaborar un informe técnico resumen que provea la información estrictamente necesaria para garantizar la continuidad de los apoyos educativos, salvaguardando la privacidad profunda del caso."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Gestión ética de la información confidencial y correcta elaboración de informes de derivación."
  },
  {
    id: 665,
    categoria: "Prevención del Abandono - Trabajo Infantil",
    pregunta: "El equipo de gestión está a punto de dar de baja por inasistencia crónica a un estudiante de 12 años (6to de Primaria). El psicólogo escolar investiga y descubre que el estudiante falta porque sus padres lo obligan a trabajar en un mercado local cargando mercancías desde la madrugada, lo que le provoca agotamiento físico extremo. ¿Cuál es la actuación legal e institucional obligatoria?",
    opciones: [
      "Permitir la baja estudiantil justificando que la familia necesita los recursos económicos y ofrecerle al estudiante la opción de estudiar educación para adultos (PREPARA) los fines de semana.",
      "Otorgar un permiso especial para que el niño falte a clases cuando necesite trabajar, evaluándolo únicamente con trabajos en casa para no afectar la economía familiar.",
      "Citar a los padres para psicoeducarles sobre la ilegalidad del trabajo infantil que interfiere con la educación; si hay resistencia, reportar el caso al CONANI o Ministerio Público por vulneración del derecho a la educación y explotación.",
      "Incentivar al estudiante a que denuncie a sus padres en la comisaría más cercana y buscarle un trabajo formal de medio tiempo dentro de la escuela para que pueda subsistir."
    ],
    respuestaCorrecta: 2,
    explicacion: "El trabajo infantil que obstaculiza la educación o afecta la salud de un menor (peor forma de trabajo infantil: carga pesada en la madrugada a los 12 años) es ilegal e innegociable. El centro educativo no puede facilitar ni condonar esta situación mediante bajas o traslados a sistemas de adultos (que son para mayores de 18 o casos excepcionales mayores de 14). Se debe confrontar normativamente a la familia e involucrar al sistema de protección si no ceden.",
    fundamentoNormativo: {
      documento: "Ley 136-03 (Código para el Sistema de Protección y los Derechos Fundamentales de NNA)",
      capitulo: "Derechos a la Educación / Protección contra la Explotación Laboral",
      apartado: "Prohibición del Trabajo Infantil",
      justificacion: "La Ley 136-03 prohíbe el trabajo para menores de 14 años y cualquier actividad laboral que ponga en riesgo la asistencia, retención escolar o desarrollo integral del menor. Obliga a las autoridades escolares a intervenir y denunciar situaciones de explotación laboral infantil."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Detección de trabajo infantil, prevención de la deserción e intervención con redes de protección."
  },
  {
    id: 666,
    categoria: "Salud Mental Escolar - Administración de Medicamentos",
    pregunta: "Los padres de un estudiante de 2do de Primaria, diagnosticado con TDAH, entregan al psicólogo escolar un frasco de metilfenidato (Ritalina) y le solicitan formalmente que se encargue de administrarle la pastilla todos los días a las 10:00 a.m., argumentando que ellos trabajan y el maestro se niega a hacerlo. ¿Cuál es la actuación institucional y normativa que debe asumir el profesional de psicología?",
    opciones: [
      "Aceptar la solicitud y guardar el medicamento bajo llave en el departamento, administrándolo diariamente en la hora acordada para garantizar el derecho a la salud y el rendimiento del estudiante.",
      "Negarse a recibir y administrar la medicación, explicando que el suministro de psicofármacos excede las competencias de la Unidad de Orientación y Psicología, debiendo la familia coordinar con el centro estrategias seguras que no impliquen responsabilidad médica del personal escolar.",
      "Modificar el horario de clases del estudiante para que asista únicamente en la tarde, cuando los padres puedan administrarle el medicamento en casa, evitando el riesgo en la escuela.",
      "Requerir una certificación médica notariada que exonere al centro educativo de cualquier responsabilidad legal en caso de efectos secundarios antes de acceder a administrar el fármaco."
    ],
    respuestaCorrecta: 1,
    explicacion: "El personal de Orientación y Psicología, al igual que los docentes, no tiene licencia médica ni de enfermería para administrar, dosificar o custodiar fármacos controlados. Asumir esta responsabilidad conlleva un altísimo riesgo legal por mala praxis o reacciones adversas. Su rol es el abordaje psicoeducativo y los ajustes razonables, no el tratamiento farmacológico.",
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Funciones y Límites del Ejercicio en el Contexto Escolar",
      apartado: "Limitaciones en el abordaje clínico y médico",
      justificacion: "El manual delimita el rol de los profesionales de la psicología al ámbito puramente psicoeducativo. La administración de psicofármacos es una competencia exclusiva de personal sanitario, estando contraindicado que el psicólogo asuma funciones médicas o de dispensación de medicamentos."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Identificación de los límites del rol profesional frente a demandas clínicas externas."
  },
  {
    id: 667,
    categoria: "Convivencia Escolar - Abordaje del Ciberacoso",
    pregunta: "El equipo de gestión recibe la denuncia de que un grupo de estudiantes de 3er grado de Secundaria creó una cuenta anónima en Instagram exclusivamente para difamar, publicar fotografías editadas y burlarse del aspecto físico de una compañera. La afectada no quiere asistir al centro. El director sugiere ignorar el caso porque 'ocurrió fuera de la escuela y en internet'. ¿Qué orientación normativa debe proporcionar el psicólogo escolar?",
    opciones: [
      "Secundar al director, orientando a los padres de la víctima para que ellos resuelvan el problema de manera privada o directamente con la Policía Nacional, desvinculando a la escuela.",
      "Orientar que el ciberacoso entre pares, aunque ocurra fuera del horario escolar, impacta el clima del aula y está tipificado como falta muy grave. Se debe abrir un proceso disciplinario, ofrecer contención a la víctima e intervenir socioeducativamente con los agresores.",
      "Crear perfiles falsos desde la Unidad de Psicología para infiltrarse en las redes sociales de los estudiantes e identificar a los culpables sin que se den cuenta.",
      "Suspender la conectividad Wi-Fi de toda la escuela e incautar los dispositivos móviles de todos los estudiantes del curso hasta que confiesen quién creó la página."
    ],
    respuestaCorrecta: 1,
    explicacion: "El ciberacoso (cyberbullying) entre miembros de la comunidad educativa no puede ser ignorado por el centro escolar, ya que sus efectos (miedo, exclusión, alteración del clima) se viven dentro del recinto. Las normativas lo clasifican como falta y exigen la intervención de las autoridades escolares, priorizando la protección de la víctima y la responsabilización de los agresores.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      capitulo: "Abordaje del Acoso Escolar (Bullying) y Ciberacoso",
      apartado: "Tipificación y consecuencias del Ciberacoso",
      justificacion: "Las Normas de Convivencia clasifican el ciberacoso (acoso cibernético) como una falta muy grave que amerita intervención inmediata del centro (contención, mediación denegada, medidas disciplinarias reparadoras y derivación), sin importar si el dispositivo o la conexión se usó fuera de la escuela."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Aplicación de normativas frente a nuevas formas de violencia escolar (Ciberacoso)."
  },
  {
    id: 668,
    categoria: "Protección Infantil - Negligencia en Salud",
    pregunta: "Un estudiante de 1er grado de Primaria asiste al centro escolar durante tres semanas con un absceso dental visible, inflamación severa en el rostro y fiebre intermitente. La maestra reporta que ha citado a la madre, pero esta responde por WhatsApp que 'se le pasará con remedios caseros y no tiene dinero para dentistas'. El niño llora de dolor en el aula. ¿Cuál es el paso inmediato a seguir por la Unidad de Psicología?",
    opciones: [
      "Recolectar dinero entre los maestros para pagar la consulta odontológica y llevar al niño al dentista personalmente, asumiendo la responsabilidad para aliviar su dolor.",
      "Contactar inmediatamente al CONANI y al Ministerio Público por evidente negligencia médica y vulneración del derecho a la salud, debido a que la familia se niega a garantizar la atención requerida, poniendo en riesgo la integridad del menor.",
      "Darle un analgésico de venta libre al niño en la escuela para calmar el dolor y permitirle que se quede durmiendo en el departamento de psicología.",
      "Expulsar temporalmente al estudiante argumentando que su estado de salud es un foco de infección para los demás compañeros y exigir un certificado médico para su retorno."
    ],
    respuestaCorrecta: 1,
    explicacion: "El derecho a la salud es fundamental. Cuando una condición médica causa sufrimiento, pone en riesgo al menor (una infección no tratada puede ser letal) y los padres se niegan deliberadamente a buscar atención médica o proveer soluciones (incluso en hospitales públicos gratuitos), se tipifica como negligencia grave. El personal escolar debe activar la Ruta de Protección.",
    fundamentoNormativo: {
      documento: "Ley 136-03 (Código de Niños, Niñas y Adolescentes)",
      capitulo: "Derechos de Supervivencia y Desarrollo / Obligación de Denunciar",
      apartado: "Derecho a la Salud y Tipificación de Negligencia",
      justificacion: "La Ley 136-03 establece que los padres tienen la obligación irrenunciable de garantizar la salud de los NNA. Ante la negativa y la vulneración evidente de este derecho, el profesional tiene el mandato legal de denunciar la negligencia ante CONANI o el Tribunal de NNA."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de negligencia médica y activación de protocolos de protección legal."
  },
  {
    id: 669,
    categoria: "Convivencia Escolar - Derechos Fundamentales",
    pregunta: "Durante un examen en 4to de Secundaria, una estudiante reporta que le robaron 2,000 pesos de su mochila. El director del centro, visiblemente molesto, ordena que todos los estudiantes del aula se pongan contra la pared para que la policía escolar realice cateos físicos (cacheo corporales) y vacíe todas sus mochilas en el piso. ¿Cómo debe asesorar el psicólogo escolar ante esta orden?",
    opciones: [
      "Apoyar la medida del director, ya que el robo es un delito penal y la escuela debe enviar un mensaje contundente de cero tolerancia ante la delincuencia en el aula.",
      "Participar activamente en el cateo asegurándose de que a las niñas solo las registren maestras mujeres, para cumplir con el protocolo de género.",
      "Intervenir y orientar al director sobre la ilegalidad de realizar cateos físicos masivos y humillantes, ya que vulneran la dignidad, el derecho a la intimidad y al debido proceso de los estudiantes, sugiriendo una investigación basada en el diálogo y la confidencialidad.",
      "Encerrar a todos los estudiantes en el aula y amenazarlos con que nadie saldrá a comer hasta que el dinero aparezca misteriosamente en el escritorio del maestro."
    ],
    respuestaCorrecta: 2,
    explicacion: "Las revisiones corporales, los cateos masivos y el trato degradante están estrictamente prohibidos en el sistema educativo porque violan la presunción de inocencia, el derecho a la intimidad y la dignidad de los estudiantes. El psicólogo debe ser un defensor de los derechos humanos y asesorar al equipo de gestión para evitar acciones ilegales o revictimizantes.",
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa / Ley 136-03",
      capitulo: "Derechos de los Estudiantes / Medidas Disciplinarias Prohibidas",
      apartado: "Prohibición de tratos crueles, inhumanos o degradantes",
      justificacion: "La Ley 136-03 y las Normas de Convivencia prohíben explícitamente cualquier medida disciplinaria que atente contra la dignidad, la integridad física, psicológica y el pudor de los NNA. Los cateos físicos masivos constituyen un abuso de autoridad y un trato degradante."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Defensa de los derechos humanos y asesoramiento ético en la resolución de conflictos institucionales."
  },
  {
    id: 670,
    categoria: "Salud Mental Escolar - Riesgo Suicida (Señales de Alerta)",
    pregunta: "Varios estudiantes acuden al Departamento de Psicología alarmados porque una compañera publicó en su estado de WhatsApp un mensaje despidiéndose y una foto de pastillas, borrándolo minutos después. Al llamar a la estudiante, ella ríe, minimiza la situación y asegura que 'solo era una broma para ganar seguidores' y que está perfectamente bien. ¿Cuál es el protocolo de actuación correcto?",
    opciones: [
      "Creer en la versión de la estudiante, ya que los adolescentes suelen buscar atención en redes sociales, y amonestarla levemente por hacer bromas inapropiadas.",
      "Asumir que toda señal o publicación sobre suicidio es un riesgo inminente, independientemente de que el estudiante lo niegue. Se debe aplicar Primeros Auxilios Psicológicos, no dejarla sola, notificar inmediatamente a la familia y derivar a evaluación psiquiátrica o clínica.",
      "Ignorar el caso, pero asignar a dos de sus amigas para que la vigilen de cerca durante las próximas semanas y avisen si ven algún comportamiento extraño.",
      "Expulsar a la estudiante por tres días como sanción por alterar el orden psicológico del centro y causar pánico innecesario entre sus compañeros."
    ],
    respuestaCorrecta: 1,
    explicacion: "En prevención del suicidio, ninguna amenaza, publicación o 'broma' se subestima. La negación es un mecanismo de defensa común, y el riesgo sigue siendo alto. El protocolo exige abordar la situación como una emergencia de salud mental, garantizando la seguridad, involucrando a la familia y realizando la derivación a especialistas, sin estigmatizar ni sancionar al estudiante.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Intervención ante Riesgo Suicida",
      apartado: "Abordaje de amenazas y señales de alerta",
      justificacion: "El protocolo indica que toda expresión (verbal, escrita, digital) relacionada con atentar contra la propia vida debe tomarse en serio. Se prohíbe minimizar el hecho. Requiere activación de red de apoyo, notificación a tutores y derivación urgente al sistema de salud."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Evaluación de señales de riesgo suicida y ejecución del protocolo de prevención."
  },
  {
    id: 671,
    categoria: "Inclusión Educativa - Equidad de Género y Orientación Vocacional",
    pregunta: "Durante la selección de la especialidad técnica en un Instituto Politécnico (Liceo Técnico), una estudiante con excelentes calificaciones solicita ingresar al área de Mecánica Automotriz. El Coordinador Técnico rechaza su solicitud indicándole que 'eso es trabajo de hombres, es muy pesado y ella debería elegir Enfermería o Contabilidad para evitar incomodidades'. Como orientador/psicólogo escolar, ¿cuál debe ser su intervención?",
    opciones: [
      "Respaldar al coordinador, ya que busca proteger a la estudiante del machismo en los talleres y garantizar que encaje socialmente en su futura área laboral.",
      "Asesorar a la estudiante para que acepte Contabilidad, explicándole que las estadísticas demuestran que las mujeres tienen más éxito en esas áreas tradicionales.",
      "Intervenir para garantizar el derecho de la estudiante a elegir su especialidad técnica basada en sus aptitudes, intereses y proyecto de vida, sensibilizando al equipo de gestión sobre la eliminación de sesgos y estereotipos de género en el ámbito educativo.",
      "Convocar a una huelga estudiantil para denunciar la discriminación de género y exigir la renuncia inmediata del Coordinador Técnico por sus comentarios misóginos."
    ],
    respuestaCorrecta: 2,
    explicacion: "La orientación vocacional debe estar libre de sesgos sexistas. Limitar el acceso de una estudiante a una especialidad técnica por su género viola el principio de equidad y el derecho a la educación integral. El rol de psicología/orientación es abogar por el estudiante, basándose en la evaluación vocacional de sus intereses y desmantelando prejuicios institucionales.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología / Ley 136-03",
      capitulo: "Orientación Vocacional y Profesional / Principio de No Discriminación",
      apartado: "Promoción de la igualdad de oportunidades",
      justificacion: "El sistema educativo fomenta la orientación vocacional basada en intereses y aptitudes, promoviendo la equidad de género. La Ley 136-03 en su principio de Igualdad y No Discriminación prohíbe restringir derechos educativos por motivos de género o estereotipos sociales."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Manejo de procesos vocacionales libres de estereotipos de género y promoción de la equidad."
  },
  {
    id: 672,
    categoria: "Intervención en Crisis - Emergencia Psiquiátrica",
    pregunta: "En medio del recreo, un estudiante de 6to de Secundaria que nunca había presentado problemas, comienza a gritar alterado, afirmando que 'las cámaras de seguridad le están hablando' y que 'hay demonios en el techo intentando atraparlo'. Se muestra desorientado, aterrorizado y trata de huir golpeando las puertas. ¿Cuál es el protocolo inmediato que debe liderar el psicólogo escolar?",
    opciones: [
      "Inmovilizar físicamente al estudiante entre varios maestros, atarlo a una silla para evitar que se haga daño y obligarlo a beber agua azucarada para que reaccione.",
      "Desalojar el área para reducir la estimulación (público), mantener una distancia de seguridad hablando con voz calmada, no confrontar sus delirios, solicitar apoyo al 911 (emergencias médicas) y contactar de urgencia a su familia.",
      "Confrontar sus alucinaciones demostrándole lógicamente que no hay demonios ni cámaras hablando, para anclarlo a la realidad de manera forzada.",
      "Diagnosticarlo inmediatamente con Esquizofrenia Paranoide, anotarlo en el registro y expulsarlo del centro por representar un peligro inminente para la comunidad educativa."
    ],
    respuestaCorrecta: 1,
    explicacion: "Ante un posible brote psicótico o alteración aguda del estado mental, confrontar los delirios genera más agitación, y la contención física forzada o violenta puede provocar lesiones graves. El manejo de la crisis exige asegurar el entorno (reducir estímulos, alejar curiosos), no invalidar el terror del estudiante pero no alimentar el delirio, y derivar la emergencia al sistema médico (911/familia) ya que requiere contención psiquiátrica.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Intervención en Crisis (Emergencias de Salud Mental)",
      apartado: "Manejo de crisis de agitación psicomotriz o alteraciones perceptivas",
      justificacion: "El protocolo de crisis demanda que el personal escolar garantice la seguridad física del estudiante sin utilizar fuerza excesiva, aísle el evento para evitar revictimización social y active inmediatamente la red de emergencias médicas y familiares, absteniéndose de emitir diagnósticos clínicos."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Manejo de primeros auxilios psicológicos ante emergencias psiquiátricas graves."
  },
  {
    id: 673,
    categoria: "Trabajo Interdisciplinario - Diseño de Ajustes Razonables",
    pregunta: "Se ha diseñado un Plan Individualizado de Ajustes Razonables (PIAR) para un estudiante con Necesidades Específicas de Apoyo Educativo (NEAE). La maestra titular se niega a aplicarlo en el aula argumentando: 'El PIAR fue hecho por psicología, por lo tanto, la psicóloga es quien debe venir a darle la clase diferente al niño'. ¿Cuál es el abordaje técnico y normativo adecuado ante esta resistencia?",
    opciones: [
      "Darle la razón a la maestra y extraer al estudiante del aula regular tres veces por semana para impartirle los contenidos adaptados dentro del Departamento de Psicología.",
      "Asesorar y recordar a la docente que el diseño del PIAR es un trabajo colaborativo, pero la ejecución de los ajustes metodológicos y de evaluación en el aula es responsabilidad indelegable del docente titular, con el acompañamiento del equipo de gestión y psicología.",
      "Reportar directamente a la maestra ante el Distrito Educativo para que sea amonestada o cancelada por insubordinación y negación de derechos.",
      "Cancelar el PIAR del estudiante para evitar conflictos laborales con la docente y solicitar a la familia que asuman la tutoría en casa."
    ],
    respuestaCorrecta: 1,
    explicacion: "La inclusión educativa es responsabilidad de toda la comunidad, especialmente del docente en su aula. Extraer al niño para que el psicólogo le enseñe es segregación e intrusismo profesional. El psicólogo y equipo de gestión orientan y acompañan el diseño de los ajustes, pero la transposición didáctica y la evaluación en el aula corresponden al docente titular.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva",
      capitulo: "Roles y Responsabilidades en la Inclusión Educativa",
      apartado: "Responsabilidad del Docente Titular",
      justificacion: "La ordenanza establece que el docente de aula es el principal responsable de la implementación de los ajustes razonables y diversificación curricular dentro de su espacio de enseñanza, contando con el apoyo y asesoría (no sustitución) del equipo de Orientación y Psicología."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Delimitación de responsabilidades interdisciplinarias en el proceso de inclusión educativa."
  },
  {
    id: 674,
    categoria: "Protección Infantil - Abuso Físico y Castigo Corporal",
    pregunta: "En una entrevista familiar motivada por la agresividad de un estudiante de 3er grado de Primaria, el padre confiesa abiertamente: 'Cuando se porta mal en la casa, yo le doy con una correa porque esa es la única forma en que los muchachos aprenden, la Biblia lo dice y es mi derecho como padre'. ¿Qué obligación legal e institucional tiene el psicólogo/a escolar?",
    opciones: [
      "Respetar las creencias religiosas y métodos de crianza del padre, manteniendo neutralidad para no interferir en la dinámica del hogar.",
      "Documentar la confesión, explicar al padre que la ley prohíbe el castigo físico corporal, brindar orientaciones sobre pautas de crianza positiva, y notificar al CONANI o Ministerio Público por maltrato infantil, ya que vulnera la integridad del menor.",
      "Recomendar al padre que en lugar de usar la correa, aplique castigos psicológicos severos como la humillación pública, que no dejan marcas físicas y son legales.",
      "Condicionar la permanencia del niño en la escuela a que el padre firme un documento prometiendo no volver a pegarle, y si no firma, dar de baja al estudiante."
    ],
    respuestaCorrecta: 1,
    explicacion: "El castigo corporal no está justificado bajo ninguna creencia religiosa, cultural o 'derecho de crianza'. La ley dominicana protege la integridad física de los menores. El psicólogo debe intentar psicoeducar (crianza positiva), pero la confesión de violencia física sistemática (correa) constituye maltrato y genera la obligación irrenunciable de reportarlo al sistema de protección (CONANI/Ministerio Público).",
    fundamentoNormativo: {
      documento: "Ley 136-03 / Guía de Ruta Crítica para la Prevención y Atención de la Violencia",
      capitulo: "Derecho a la Integridad Personal / Prevención del Maltrato",
      apartado: "Prohibición del Castigo Corporal",
      justificacion: "La Ley 136-03 prohíbe explícitamente cualquier forma de castigo físico, trato cruel o degradante por parte de los padres, tutores o maestros. Obliga a los profesionales a intervenir y denunciar estas prácticas como abuso infantil."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Confrontación del castigo corporal y aplicación del marco legal de protección infantil."
  },
  {
    id: 675,
    categoria: "Evaluación Psicopedagógica - Uso de Pruebas Psicométricas",
    pregunta: "A inicio de año escolar, la directora de un centro de primaria exige al psicólogo que aplique pruebas de coeficiente intelectual (IQ) a todos los estudiantes de 1er grado para agruparlos: poner a los 'más inteligentes' en la sección A y a los 'de aprendizaje lento' en la sección B. ¿Cómo debe proceder el profesional ante esta directriz?",
    opciones: [
      "Acatar la directriz y aplicar el test de Raven o WISC-V de manera masiva, procediendo a segregar las aulas para facilitar la labor docente.",
      "Rechazar la solicitud indicando que el MINERD no tiene fondos para comprar pruebas para todos, pero sugerir que los padres paguen las pruebas a nivel privado.",
      "Argumentar normativa y éticamente que el uso de pruebas psicométricas no debe usarse para segregar, etiquetar o discriminar estudiantes. El agrupamiento debe ser heterogéneo y la evaluación psicopedagógica se aplica de forma individualizada solo a quienes presentan señales de alerta o necesidades específicas.",
      "Aplicar las pruebas de inteligencia solicitadas pero alterar deliberadamente los resultados para que las secciones queden mezcladas equitativamente."
    ],
    respuestaCorrecta: 2,
    explicacion: "La evaluación psicopedagógica y psicométrica en el entorno escolar tiene un propósito diagnóstico-formativo y de diseño de apoyos, no de clasificación, exclusión o segregación. Agrupar a los estudiantes por 'nivel de inteligencia' viola los principios de la educación inclusiva y genera estigma. Las pruebas se aplican bajo criterio clínico/psicopedagógico individualizado, no de forma masiva e indiscriminada para etiquetar.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva / Manual Operativo",
      capitulo: "Proceso de Evaluación Psicopedagógica",
      apartado: "Fines de la Evaluación y Principio de Inclusión",
      justificacion: "La normativa sobre inclusión establece que la organización de los grupos debe fomentar la diversidad (heterogeneidad). Prohíbe expresamente el uso de evaluaciones estandarizadas para clasificar o excluir, reafirmando que el fin de la evaluación es identificar barreras y diseñar apoyos (Ajustes Razonables)."
    },
    nivelDificultad: "Media-Alta",
    competenciaEvaluada: "Uso ético de instrumentos de evaluación y promoción de políticas de inclusión educativa."
  },
  {
    id: 676,
    categoria: "Convivencia Escolar - Gestión de Faltas Disciplinarias",
    pregunta: "Un estudiante de 2do de Secundaria es sorprendido por un docente intentando copiar en un examen final utilizando dispositivos electrónicos. Según el Reglamento de Evaluación y las Normas de Convivencia, el profesor le retira el examen y le pone una calificación de 0. El padre del estudiante acude al centro exigiendo que se le permita repetir el examen porque 'su hijo es brillante y un error no debe arruinar su futuro'. ¿Qué debe hacer el psicólogo/a ante esta situación?",
    opciones: [
      "Interceder ante el profesor para que elimine el 0 y le permita repetir la prueba, garantizando así que el estudiante pueda aprobar y evitar el conflicto con la familia.",
      "Asesorar al equipo de gestión para que aplique lo establecido en el Reglamento de Evaluación sobre faltas en pruebas (anulación de la misma) y el debido proceso disciplinario, manteniendo la coherencia institucional y evitando tratos preferenciales.",
      "Sugerir al estudiante que admita que el profesor le tenía manía y que la prueba fue manipulada, para que el padre pueda presentar una queja formal en el Distrito Educativo.",
      "Invitar al padre a que se retire y prohibirle la entrada al centro escolar por interferir en el proceso evaluativo docente."
    ],
    respuestaCorrecta: 1,
    explicacion: "El psicólogo escolar debe ser garante de la equidad y la norma. La anulación de una prueba por copia es una medida pedagógica y disciplinaria estipulada en los reglamentos. Cambiar la calificación por presión familiar o mediación indebida deslegitima la autoridad docente y vulnera el Reglamento de Evaluación, enseñando al estudiante que las normas son relativas.",
    fundamentoNormativo: {
      documento: "Reglamento de Evaluación de los Aprendizajes / Normas de Convivencia",
      capitulo: "De las faltas en las evaluaciones / Debido proceso",
      apartado: "Consecuencias por uso de medios fraudulentos en pruebas",
      justificacion: "El Reglamento de Evaluación contempla la anulación de la prueba ante el uso de medios fraudulentos. El psicólogo escolar asesora a la gestión para que se aplique la norma de manera uniforme, respetando el debido proceso y la integridad del sistema de evaluación."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Asesoramiento sobre el cumplimiento de normativas de evaluación y clima institucional."
  },
  {
    id: 677,
    categoria: "Protección Infantil - Vulneración de Derechos (Derecho a la Identidad)",
    pregunta: "Se detecta que una estudiante de 4to grado de Primaria no tiene acta de nacimiento, no está registrada en el sistema y, por tanto, no tiene certificación de notas oficial a pesar de haber cursado grados anteriores. La familia explica que son inmigrantes irregulares y tienen miedo de ir al registro civil. ¿Cómo debe proceder el centro educativo?",
    opciones: [
      "Dar de baja a la estudiante inmediatamente, ya que el MINERD prohíbe la matriculación o certificación de estudiantes sin documentación legal dominicana.",
      "Mantener a la estudiante en el centro sin registro oficial, pero informarle a los padres que no podrá avanzar de grado ni recibir certificados oficiales nunca.",
      "Garantizar la escolarización de la estudiante en igualdad de condiciones, independientemente de su estatus migratorio, y articular con la dirección del centro y el Distrito Educativo el acompañamiento necesario para su regularización documental o inscripción provisional bajo el principio del interés superior del niño.",
      "Llamar a Migración para que se encarguen de la situación de la familia y el centro quede deslindado de responsabilidad."
    ],
    respuestaCorrecta: 2,
    explicacion: "El derecho a la educación es universal y prevalece sobre el estatus migratorio o documental. La Constitución y la Ley 136-03 establecen que ningún niño/a puede ser privado de acceso al sistema educativo por falta de documentos. El centro debe asegurar su permanencia y asesorar a la familia (o articular con entidades) para el proceso de documentación sin coaccionar ni discriminar.",
    fundamentoNormativo: {
      documento: "Ley 136-03 / Constitución de la República / Normas de Convivencia",
      capitulo: "Derecho a la Educación / Principio de No Discriminación",
      apartado: "Acceso universal a la educación",
      justificacion: "La legislación dominicana protege el derecho a la educación de todo NNA en el territorio nacional. Es obligación del centro educativo garantizar el acceso y permanencia escolar, trabajando con las autoridades educativas distritales para las vías de regularización administrativa del estudiante."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación del principio del interés superior del niño y derechos fundamentales."
  },
  {
    id: 678,
    categoria: "Salud Mental Escolar - Duelo",
    pregunta: "Una estudiante de 5to de Secundaria atraviesa un duelo profundo tras el fallecimiento de su madre. La estudiante falta constantemente, no realiza tareas y se muestra irritable con los docentes. El docente de Ciencias reporta: 'Si no se pone las pilas, se queda en la asignatura, yo no puedo hacer excepciones'. ¿Qué abordaje debe liderar el psicólogo escolar?",
    opciones: [
      "Aceptar que el docente tiene razón y decirle a la estudiante que el dolor no justifica el abandono académico, presionándola para que cumpla sus deberes.",
      "Realizar una reunión de coordinación con el equipo docente para psicoeducar sobre el proceso de duelo en la adolescencia y diseñar un plan flexible de recuperación de clases y evaluaciones, ajustado al ritmo de la estudiante, sin bajar el nivel de exigencia curricular pero adaptando los tiempos.",
      "Remitir a la estudiante a la dirección para que sea sancionada por sus constantes faltas, independientemente de su situación personal.",
      "Redactar una carta al docente ordenándole cambiar la nota de la estudiante y aprobarla automáticamente por razones humanitarias."
    ],
    respuestaCorrecta: 1,
    explicacion: "El duelo es una crisis vital que requiere flexibilidad pedagógica. El rol de psicología no es obligar al estudiante a cumplir como si nada pasara, ni forzar al docente a regalar notas, sino mediar para que se realicen los ajustes razonables necesarios (flexibilización de tiempos, entrega de trabajos, soporte emocional) que permitan la continuidad educativa mientras la estudiante atraviesa el proceso.",
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Intervención en situaciones de duelo",
      apartado: "Apoyo pedagógico y emocional en crisis",
      justificacion: "Los lineamientos promueven la flexibilización y el apoyo coordinado ante crisis vitales. Se busca que el centro educativo sea un espacio protector donde, mediante el trabajo colaborativo con docentes, se creen condiciones temporales para que el estudiante pueda continuar su trayectoria escolar."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Coordinación docente y diseño de estrategias de flexibilización ante crisis vitales."
  },
  {
    id: 679,
    categoria: "Inclusión Educativa - Discapacidad Intelectual",
    pregunta: "Un estudiante con discapacidad intelectual moderada ha sido integrado al aula regular. La madre solicita que se le asigne un 'sombra' (asistente personal pagado por la familia) que se siente al lado del niño todo el tiempo para hacerle las tareas. ¿Cuál es el criterio técnico sobre esta solicitud?",
    opciones: [
      "Aceptar la solicitud porque garantiza que el niño termine sus tareas y no moleste al docente, facilitando la inclusión.",
      "Rechazar la solicitud, ya que la presencia constante de un adulto externo impide la autonomía, estigmatiza al estudiante y rompe la dinámica docente-alumno. Se debe priorizar el fortalecimiento de la competencia del docente de aula y los ajustes razonables.",
      "Aceptar la solicitud, pero exigir que el asistente también ayude a otros estudiantes para que no parezca que el niño recibe un trato preferencial.",
      "Condicionar la aceptación a que el asistente tenga una licenciatura en Educación Especial para que pueda sustituir al docente en la instrucción del niño."
    ],
    respuestaCorrecta: 1,
    explicacion: "El modelo de inclusión actual busca la autonomía del estudiante y la profesionalización del docente titular para atender a la diversidad. La figura de la 'sombra' suele ser una barrera para la inclusión real, ya que el estudiante queda bajo el cuidado del asistente y no del docente, aislándolo del grupo. La respuesta técnica es fortalecer al docente y el entorno, no superponer adultos.",
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva",
      capitulo: "Del Diseño de Apoyos y Ajustes",
      apartado: "Sobre las figuras de acompañamiento y autonomía",
      justificacion: "La política de inclusión promueve la eliminación de barreras para el aprendizaje y la participación. La asignación de asistentes personales que realizan la labor del estudiante o del docente es contraria al principio de autonomía y participación activa promovido por la ordenanza."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Comprensión de los modelos de inclusión y promoción de la autonomía estudiantil."
  },
  {
    id: 680,
    categoria: "Ética Profesional - Liderazgo Institucional",
    pregunta: "Un orientador de un centro educativo descubre que un técnico distrital está filtrando exámenes de las pruebas nacionales a familiares de estudiantes de un colegio privado para obtener beneficio económico. ¿Cuál es la actuación ética correcta?",
    opciones: [
      "Hablar con el técnico distrital para pedirle una parte del beneficio, ya que el sistema educativo es poco eficiente y esa es una oportunidad de mejorar sus ingresos.",
      "Ignorar el hecho para evitar represalias profesionales, pues enfrentarse a un técnico distrital puede significar su traslado o cancelación.",
      "Documentar cualquier evidencia disponible y, garantizando la reserva de identidad, informar a través de los canales institucionales de auditoría o ética del MINERD, ya que se trata de un acto de corrupción que vulnera la equidad del sistema.",
      "Publicar la denuncia en Facebook etiquetando al Ministro de Educación para que el caso sea mediático y el técnico sea despedido."
    ],
    respuestaCorrecta: 2,
    explicacion: "La ética profesional implica integridad absoluta. La corrupción en los procesos de evaluación pone en riesgo la credibilidad del sistema educativo nacional. El psicólogo debe utilizar los canales formales de denuncia (Auditoría, Ética, instancias superiores del MINERD) para reportar actos ilícitos que atenten contra el servicio público.",
    fundamentoNormativo: {
      documento: "Ley 41-08 de Función Pública / Código de Ética del Psicólogo",
      capitulo: "Deberes de los Servidores Públicos / Ética Profesional",
      apartado: "Obligación de denunciar actos de corrupción",
      justificacion: "La Ley de Función Pública y el Código de Ética obligan a los servidores públicos a salvaguardar la integridad de la administración y a denunciar ante las instancias correspondientes cualquier irregularidad o acto de corrupción que detecten en el ejercicio de sus funciones."
    },
    nivelDificultad: "Media",
    competenciaEvaluada: "Ética profesional y compromiso con la integridad del sistema educativo."
  },

  {
    id: 681,
    categoria: "Protección Infantil – Abuso Sexual / Ruta Crítica",
    pregunta: `Una estudiante de 13 años le comenta en privado a la psicóloga escolar que su padrastro la toca de forma inapropiada cuando su madre trabaja de noche. La niña ruega que no se lo diga a nadie porque teme ser sacada del hogar. La directora del centro no está disponible en ese momento. ¿Cuál debe ser la actuación inmediata de la psicóloga?`,
    opciones: [
      "Respetar la confidencialidad solicitada por la estudiante y registrar el caso en el expediente para darle seguimiento discreto.",
      "Activar de inmediato la Ruta Crítica institucional notificando al equipo de gestión disponible y reportar el caso al CONANI, independientemente del pedido de la niña.",
      "Citar a la madre para informarle la situación antes de tomar cualquier otra medida, garantizando que la familia tome decisiones.",
      "Derivar el caso directamente a la psicóloga del distrito para que ella determine si amerita una denuncia formal."
    ],
    respuestaCorrecta: 1,
    explicacion: `En casos de presunto abuso sexual, la confidencialidad cede ante la obligación de protección del NNA. La Ruta Crítica establece que ante indicadores de abuso sexual el psicólogo escolar debe activar el protocolo institucional y notificar al CONANI sin demora, aun cuando el familiar señalado sea del entorno inmediato. Esperar a la directora, citar a la madre (posible encubridora) o delegar en el distrito vulneraría la integridad de la estudiante y contravendría la normativa de protección.`,
    fundamentoNormativo: {
      documento: "Guía de Ruta Crítica para la Prevención y Atención de la Violencia (MINERD) / Ley 136-03",
      capitulo: "Ruta Crítica – Proceso de Activación; Ley 136-03 Título II",
      apartado: "Pasos obligatorios ante indicadores de abuso sexual; Art. 52 y 53 sobre obligatoriedad de denuncia",
      justificacion: "La Ruta Crítica obliga al personal del centro educativo a reportar de forma inmediata todo indicio de abuso sexual al CONANI y a la Procuraduría de NNA. La Ley 136-03 establece la obligatoriedad de denuncia para cualquier persona que tenga conocimiento de situaciones de abuso contra NNA. El pedido de confidencialidad de la víctima no exime esta obligación."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación de protocolos de protección infantil y manejo ético ante conflicto confidencialidad vs. obligación de denuncia"
  },
  {
    id: 682,
    categoria: "Inclusión Educativa – TEA / Ajustes Razonables",
    pregunta: `Un estudiante de 9 años con diagnóstico de Trastorno del Espectro Autista (TEA) nivel 2 presenta conductas disruptivas recurrentes durante los cambios de rutina. El docente de aula solicita al psicólogo que el estudiante sea reubicado en un centro de educación especial argumentando que "no puede seguir el ritmo del aula regular". ¿Cuál es la respuesta profesionalmente correcta del psicólogo escolar?`,
    opciones: [
      "Coordinar con la familia la solicitud de traslado al centro especial, ya que la conducta disruptiva afecta el derecho a aprender de los demás estudiantes.",
      "Rechazar la solicitud de exclusión, diseñar junto al docente ajustes razonables contextualizados al TEA nivel 2, y documentar las adaptaciones en el expediente del estudiante.",
      "Aplicar una evaluación psicopedagógica exhaustiva durante 30 días antes de emitir cualquier criterio sobre permanencia o reubicación.",
      "Elevar el caso al equipo de gestión para que la dirección tome la decisión final sobre la permanencia del estudiante."
    ],
    respuestaCorrecta: 1,
    explicacion: `La Ordenanza 05-2024 establece que la educación inclusiva es un derecho y que la primera respuesta ante barreras al aprendizaje debe ser la implementación de ajustes razonables en el aula regular. La reubicación en educación especial no puede ser una respuesta ante conductas asociadas al diagnóstico sin agotar las estrategias inclusivas. El psicólogo escolar tiene la responsabilidad de asesorar al docente y co-diseñar estrategias, no de avalar una exclusión.`,
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva",
      capitulo: "Capítulo III – Ajustes Razonables y Apoyos",
      apartado: "Art. 18 – Ajustes razonables como respuesta prioritaria; Art. 7 – Derecho a la educación inclusiva en escuela regular",
      justificacion: "La Ordenanza 05-2024 prohíbe la exclusión de estudiantes con discapacidad o NEE de la escuela regular sin agotar previamente las estrategias de ajuste razonable. El rol del psicólogo incluye orientar al docente en la implementación de dichos ajustes."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación de normativa de educación inclusiva y rol de asesoría docente ante NEE"
  },
  {
    id: 683,
    categoria: "Salud Mental Escolar – Riesgo Suicida / Intervención en Crisis",
    pregunta: `Durante una sesión de orientación grupal en un 4to de secundaria, un joven de 16 años entrega al psicólogo una nota escrita que dice: "Ya no quiero seguir aquí, le pido perdón a mi familia". El estudiante no muestra agitación visible y afirma que "solo está bromeando". El resto del grupo está presente. ¿Cuál debe ser la actuación del psicólogo escolar?`,
    opciones: [
      "Retomar la sesión grupal con normalidad y citar al estudiante al finalizar la jornada para explorar la nota en privado.",
      "Interrumpir discretamente la sesión grupal, retirar al estudiante con acompañamiento, aplicar protocolo de valoración de riesgo suicida e informar inmediatamente al equipo de gestión y a la familia.",
      "Llamar a la familia del estudiante desde el aula para que vengan a buscarlo, minimizando la interrupción de la sesión grupal.",
      "Informar al orientador de grado para que explore la situación, ya que el psicólogo no debe abandonar la sesión grupal en curso."
    ],
    respuestaCorrecta: 1,
    explicacion: `Una nota con contenido suicida, aunque el estudiante la minimice como broma, constituye una señal de alerta de alta prioridad. Los protocolos del MINERD sobre intervención en crisis indican que el psicólogo debe actuar de inmediato: retirar al estudiante del contexto grupal, realizar valoración individualizada del riesgo, e informar al equipo de gestión y a la familia sin demora. Aplazar la atención o delegarla sin valoración previa pone en riesgo la vida del estudiante.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Intervención en Crisis – Protocolo de Riesgo Suicida",
      apartado: "Procedimiento ante señales de alerta suicida; Funciones del psicólogo escolar ante emergencias de salud mental",
      justificacion: "Los lineamientos 2023-2024 establecen que ante cualquier señal de riesgo suicida el psicólogo debe actuar de inmediato con valoración individual, notificación al equipo directivo y contacto familiar. La minimización del riesgo por parte del estudiante no exime la activación del protocolo."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Intervención en crisis, valoración de riesgo suicida y priorización de actuaciones"
  },
  {
    id: 684,
    categoria: "Convivencia Escolar – Acoso Escolar / Normas de Convivencia",
    pregunta: `El psicólogo escolar recibe quejas de tres estudiantes de 7mo grado que reportan que un compañero les exige dinero cada lunes amenazando con golpearlos si no cumplen. Los estudiantes piden que el asunto se maneje con discreción porque temen represalias. La directora sugiere resolver el conflicto con una mediación entre las partes involucradas. ¿Qué debe hacer el psicólogo?`,
    opciones: [
      "Aceptar la propuesta de mediación de la directora, dado que representa la autoridad máxima del centro.",
      "Explicar a la directora que la mediación no es apropiada en este caso por existir una relación de poder y amenazas; activar el protocolo de acoso escolar según las Normas de Convivencia e informar a las familias de todas las partes.",
      "Iniciar una investigación interna discreta durante una semana antes de involucrar a las familias o aplicar protocolos formales.",
      "Orientar individualmente a las víctimas para desarrollar estrategias de autoprotección mientras se documenta el caso."
    ],
    respuestaCorrecta: 1,
    explicacion: `Las Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa establecen que cuando existe una relación de poder asimétrica y amenazas, la mediación entre partes no es el mecanismo adecuado para el manejo del acoso escolar. El psicólogo debe aplicar el protocolo institucional de acoso, que incluye documentación del caso, protección de las víctimas e informar a las familias, sin subordinar el protocolo a la sugerencia directiva cuando esta contradice la normativa.`,
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa",
      capitulo: "Capítulo sobre Acoso Escolar – Procedimientos de Intervención",
      apartado: "Protocolo de acoso escolar; Criterios de exclusión de la mediación ante desequilibrio de poder",
      justificacion: "Las Normas de Convivencia excluyen expresamente la mediación directa en casos de acoso donde existe desequilibrio de poder y amenazas, estableciendo en su lugar un protocolo formal de intervención que protege a las víctimas e involucra a las familias."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de riesgos, aplicación de protocolos de convivencia y manejo ético de relaciones jerárquicas institucionales"
  },
  {
    id: 685,
    categoria: "Trabajo con Familias – Permanencia Escolar / Prevención del Abandono",
    pregunta: `El psicólogo escolar identifica que una estudiante de 14 años ha acumulado 18 días de ausencias injustificadas en el trimestre. Al visitar el hogar con el orientador, la madre informa que la niña cuida a sus hermanos menores mientras ella trabaja y que "no hay otra opción". La familia vive en condición de vulnerabilidad económica. ¿Cuál es la actuación más adecuada del psicólogo?`,
    opciones: [
      "Registrar el caso como abandono escolar inminente y notificar al distrito para que aplique el protocolo de baja definitiva.",
      "Activar el protocolo de prevención del abandono escolar: coordinar con trabajadora social, articular con programas de protección social del Estado, diseñar un plan de flexibilización con la familia y dar seguimiento documentado al caso.",
      "Citar a la madre al centro educativo para firmar un compromiso de envío regular de la estudiante como condición para mantener la matrícula.",
      "Remitir el caso directamente al CONANI por negligencia parental al no garantizar la asistencia escolar."
    ],
    respuestaCorrecta: 1,
    explicacion: `El Manual Operativo y los Lineamientos 2023-2024 establecen que ante riesgo de abandono escolar por causas socioeconómicas, el psicólogo debe activar el protocolo de permanencia, que incluye articulación intersectorial con programas sociales, flexibilización de la asistencia con plan de recuperación y acompañamiento familiar. El traslado a baja definitiva o la denuncia por negligencia sin agotar las estrategias de retención contraviene el principio de permanencia escolar.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Programa de Permanencia Escolar – Prevención del Abandono",
      apartado: "Protocolo ante ausentismo con causas socioeconómicas; Articulación con redes de protección social",
      justificacion: "Los lineamientos vigentes establecen que la prevención del abandono escolar requiere un abordaje integral que incluya la articulación con servicios sociales del Estado, antes de aplicar medidas sancionatorias o de baja."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Prevención del abandono escolar, trabajo intersectorial y toma de decisiones con enfoque de derechos"
  },
  {
    id: 686,
    categoria: "Ética Profesional – Confidencialidad / Manejo de Expedientes",
    pregunta: `El padre de un estudiante de 11 años que está siendo atendido por el psicólogo escolar por situaciones de ansiedad solicita acceso completo a las notas de sesión y al expediente psicológico de su hijo, argumentando su derecho como tutor legal. El estudiante ha pedido explícitamente que ciertos contenidos no sean revelados a su padre. ¿Cómo debe proceder el psicólogo?`,
    opciones: [
      "Entregar el expediente completo al padre de forma inmediata, ya que su condición de tutor legal le otorga acceso irrestricto.",
      "Informar al padre sobre los aspectos generales del proceso de atención y los acuerdos de trabajo, protegiendo las revelaciones específicas del estudiante cuya divulgación podría afectar la relación terapéutica y el bienestar del niño, y documentar la decisión.",
      "Negar el acceso total al padre argumentando que la confidencialidad es absoluta en todos los casos.",
      "Solicitar autorización escrita al estudiante antes de compartir cualquier información con su padre, dado que tiene 11 años y puede decidir por sí mismo."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los lineamientos y el manual operativo establecen que los padres y tutores tienen derecho a información sobre el proceso de atención de sus hijos menores, pero las notas de sesión y revelaciones confidenciales del NNA están protegidas cuando su divulgación pueda comprometer el bienestar del estudiante o la efectividad de la intervención. El psicólogo debe balancear el derecho de información del tutor con la protección del NNA, documentando sus decisiones. No es un derecho irrestricto ni una confidencialidad absoluta.`,
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015) / Lineamientos 2023-2024",
      capitulo: "Normas Éticas del Servicio – Confidencialidad y Expedientes",
      apartado: "Manejo de expedientes psicológicos; Límites de la confidencialidad con menores de edad; Derechos de tutores",
      justificacion: "El Manual Operativo establece normas sobre el manejo de expedientes que protegen la información del NNA al mismo tiempo que reconocen el rol de los tutores, requiriendo un balance profesional documentado que priorice el bienestar del estudiante."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Manejo ético de la confidencialidad, derechos del NNA y relación con familias"
  },
  {
    id: 687,
    categoria: "Evaluación Psicopedagógica – TDAH / Derivación y Referencia",
    pregunta: `Una docente de 3er grado refiere al psicólogo a un niño de 8 años porque "no puede quedarse quieto, no termina las tareas y molesta constantemente". El psicólogo realiza observación en aula y entrevista a la docente. La maestra pide que el psicólogo le dé un diagnóstico de TDAH para solicitar apoyo adicional de recursos al centro. ¿Qué debe hacer el psicólogo escolar?`,
    opciones: [
      "Emitir un informe provisional con presunción de TDAH para agilizar los apoyos que el estudiante necesita.",
      "Realizar una evaluación psicopedagógica completa en el ámbito de su competencia, identificar las barreras al aprendizaje presentes, implementar ajustes iniciales y derivar a especialista externo para diagnóstico clínico, sin emitir diagnóstico médico.",
      " Negar la evaluación hasta tanto la familia presente un diagnóstico médico previo que justifique la intervención del psicólogo escolar.",
      "Limitarse a orientar a la docente sobre estrategias de manejo conductual sin evaluar al estudiante, ya que el diagnóstico médico es requisito previo."
    ],
    respuestaCorrecta: 1,
    explicacion: `El psicólogo escolar tiene competencia para realizar evaluación psicopedagógica e identificar necesidades específicas de apoyo educativo, pero no para emitir diagnósticos clínicos como el TDAH. El procedimiento correcto es realizar la evaluación en el ámbito escolar, documentar las barreras identificadas, implementar ajustes razonables y referir al especialista clínico para diagnóstico. Emitir un diagnóstico clínico excede el rol del psicólogo escolar y puede causar perjuicio al estudiante.`,
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015) / Ordenanza 05-2024",
      capitulo: "Funciones del Psicólogo Escolar – Evaluación Psicopedagógica; Proceso de Derivación",
      apartado: "Alcance de la evaluación psicopedagógica; Protocolo de derivación a especialistas; Ajustes razonables previos al diagnóstico",
      justificacion: "El Manual Operativo delimita las funciones del psicólogo escolar a la evaluación psicopedagógica en el contexto educativo, distinguiéndola del diagnóstico clínico. La Ordenanza 05-2024 establece que los ajustes razonables no requieren diagnóstico médico previo para ser implementados."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Límites del rol profesional, evaluación psicopedagógica y protocolo de derivación"
  },
  {
    id: 688,
    categoria: "Salud Mental Escolar – Consumo de Sustancias / Trabajo Interdisciplinario",
    pregunta: `Un grupo de docentes informa al psicólogo que han observado a varios estudiantes de bachillerato con signos que podrían indicar consumo de sustancias: ojos enrojecidos, somnolencia excesiva, cambios bruscos de humor y ausencias frecuentes. Uno de los docentes exige que el psicólogo registre los nombres de los estudiantes sospechosos y los cite para "interrogarlos". ¿Cuál es la actuación profesionalmente adecuada del psicólogo?`,
    opciones: [
      "Seguir la recomendación del docente y citar a los estudiantes identificados para una entrevista de confrontación directa sobre el consumo.",
      "Diseñar un plan de intervención preventiva grupal, realizar entrevistas individuales confidenciales con enfoque motivacional a los estudiantes referidos, articular con el equipo de gestión y orientar a docentes sobre señales y abordaje, sin asumir culpabilidad previa.",
      "Informar a las familias de los estudiantes identificados de forma inmediata sobre la sospecha de consumo antes de hablar con los propios estudiantes.",
      "Solicitar al equipo de gestión que aplique el reglamento disciplinario a los estudiantes identificados mientras el psicólogo realiza la intervención clínica."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los lineamientos establecen que el abordaje del consumo de sustancias en el contexto escolar debe ser preventivo, con enfoque de salud pública y derechos, no punitivo. El psicólogo diseña intervenciones que incluyen orientación a docentes, entrevistas individuales confidenciales y articulación institucional. La confrontación directa o el abordaje punitivo previo a cualquier confirmación vulnera los derechos del estudiante y compromete la relación de ayuda.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Programas de Prevención – Consumo de Sustancias; Intervención Individual",
      apartado: "Protocolo de intervención ante consumo de sustancias; Enfoque preventivo y de derechos; Funciones de orientación a docentes",
      justificacion: "Los lineamientos 2023-2024 establecen el enfoque preventivo y de salud para el abordaje del consumo de sustancias, que incluye entrevistas individuales con enfoque motivacional y trabajo con la comunidad educativa, excluyendo abordajes punitivos o de confrontación sin evidencia."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Trabajo interdisciplinario, diseño de intervenciones preventivas y manejo ético en situaciones de consumo"
  },
  {
    id: 689,
    categoria: "Orientación Vocacional – Planificación / Programas Preventivos",
    pregunta: `El psicólogo escolar de un liceo planifica el programa anual de orientación vocacional. El director le informa que este año "no hay tiempo para orientación vocacional porque hay que priorizar las pruebas nacionales" y le pide que suspenda las actividades planificadas con los estudiantes de 4to de bachillerato. ¿Cuál es la respuesta profesionalmente correcta del psicólogo?`,
    opciones: [
      "Acatar la instrucción del director ya que este tiene autoridad sobre la planificación del centro.",
      "Presentar al director la planificación anual aprobada por la unidad de orientación, explicar el fundamento normativo del servicio y proponer un calendario de actividades que integre la preparación para las pruebas sin suprimir la orientación vocacional.",
      "Realizar las actividades de orientación vocacional de forma clandestina para no confrontar la instrucción directiva.",
      "Elevar inmediatamente el caso al distrito educativo como una violación del servicio de orientación, sin intentar resolverlo a nivel de centro."
    ],
    respuestaCorrecta: 1,
    explicacion: `La Planificación Anual de la Unidad de Orientación y Psicología y el Manual Operativo establecen que el servicio de orientación vocacional es parte integral y obligatoria del servicio de orientación en los liceos. El psicólogo debe sostener técnicamente la pertinencia del servicio ante la autoridad directiva, proponer soluciones integrativas y documentar la situación. Suprimir el servicio sin fundamento normativo, ejecutarlo clandestinamente o escalar sin intentar resolución interna no son respuestas profesionalmente adecuadas.`,
    fundamentoNormativo: {
      documento: "Planificación Anual Unidad de Orientación y Psicología / Manual de los Servicios de Orientación y Psicología en los Centros Educativos",
      capitulo: "Planificación del Servicio de Orientación – Orientación Vocacional",
      apartado: "Componentes obligatorios del programa anual de orientación; Funciones del psicólogo en orientación vocacional con estudiantes de bachillerato",
      justificacion: "La Planificación Anual y el Manual de Servicios establecen la orientación vocacional como un componente obligatorio del servicio de orientación en bachillerato, lo que obliga al psicólogo a sostener técnicamente su implementación."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Liderazgo institucional, defensa técnica del servicio y gestión de relaciones con autoridades del centro"
  },
  {
    id: 690,
    categoria: "Protección Infantil – Negligencia / Trabajo Interdisciplinario",
    pregunta: `El psicólogo escolar recibe información de la enfermera del centro de que un estudiante de 7 años llega regularmente sin desayunar, con ropa sucia y con evidencias de no haber dormido bien. El niño ha comentado que "en su casa no siempre hay comida". Los docentes han manejado la situación dándole alimento del propio bolsillo. El padre asiste ocasionalmente a las citaciones. ¿Cuál es la actuación integral correcta del psicólogo?`,
    opciones: [
      "Continuar el manejo informal con los docentes y registrar el caso para evaluarlo al final del período escolar.",
      "Documentar los indicadores de negligencia, activar la Ruta Crítica del centro con participación del equipo interdisciplinario, coordinar con los programas de protección social disponibles y notificar al CONANI si los indicadores persisten o se confirman.",
      "Citar al padre de forma urgente y advertirle que si no mejora la situación del niño se hará una denuncia formal, como medida de presión preventiva.",
      "Referir el caso exclusivamente al trabajador social del distrito para que gestione la articulación con los servicios sociales del Estado."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los indicadores descritos constituyen señales de presunta negligencia que obligan al psicólogo a documentar, articular el equipo interdisciplinario y activar la Ruta Crítica. La Ley 136-03 y la Ruta Crítica establecen que ante indicadores de negligencia el centro debe activar sus mecanismos de protección, coordinar con redes de protección social y notificar al CONANI cuando los indicadores se confirmen o persistan. El manejo informal, las amenazas preventivas al padre o la delegación exclusiva al distrito no constituyen respuestas adecuadas.`,
    fundamentoNormativo: {
      documento: "Guía de Ruta Crítica para la Prevención y Atención de la Violencia / Ley 136-03",
      capitulo: "Ruta Crítica – Indicadores de Negligencia; Ley 136-03 Título II – Derechos de NNA",
      apartado: "Procedimiento ante indicadores de negligencia en el hogar; Art. 52 – Obligación de denuncia; Articulación interinstitucional",
      justificacion: "La Ruta Crítica establece un proceso escalonado ante negligencia que incluye documentación, activación del equipo interdisciplinario, articulación con protección social y notificación al CONANI. La Ley 136-03 garantiza el derecho del NNA a la protección del Estado ante situaciones de negligencia."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de indicadores de negligencia, activación de Ruta Crítica y trabajo interdisciplinario"
  },
  {
    id: 691,
    categoria: "Protección Infantil – Abuso Físico / Ruta Crítica",
    pregunta: `Durante el recreo, la psicóloga escolar de una escuela primaria del Gran Santo Domingo observa que una niña de 9 años de 3er grado se niega a participar en los juegos, permanece sentada sola y cuando intenta levantarse hace gestos de dolor. Al acercarse discretamente, la niña dice que "se cayó en casa". La psicóloga la acompaña a enfermería donde la enfermera detecta múltiples hematomas en la espalda y en los brazos en diferentes estados de cicatrización. La niña llora y pide que no llamen a su mamá "porque ella se va a poner brava". Esa misma tarde, la madre llega al centro antes de la salida y solicita hablar con la psicóloga para preguntar cómo va su hija académicamente, sin hacer mención a ningún incidente. La directora del centro está en una reunión de distrito y no estará disponible en toda la tarde. ¿Cuál debe ser la actuación del psicólogo escolar en esta situación?`,
    opciones: [
      "Atender a la madre en la reunión solicitada sin revelar los hallazgos físicos, registrar el caso en el expediente y esperar la disponibilidad de la directora para activar cualquier protocolo, garantizando así la cadena de mando institucional.",
      "Activar de inmediato la Ruta Crítica institucional con el miembro del equipo de gestión disponible, documentar detalladamente los hallazgos físicos con apoyo de la enfermera, no revelar los hallazgos a la madre en la reunión mientras la investigación está en curso, y reportar el caso al CONANI sin esperar el regreso de la directora.",
      "Informar a la madre sobre los hematomas durante la reunión solicitada para obtener su explicación antes de tomar decisiones, ya que la versión de la familia es parte del proceso de valoración del caso.",
      "Derivar el caso al orientador del centro para que realice la entrevista con la niña y la familia, ya que la psicóloga no debe comprometer su relación de confianza con la estudiante interviniendo directamente en un posible caso de abuso."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los hematomas múltiples en diferentes estados de cicatrización constituyen indicadores físicos de maltrato que activan obligatoriamente la Ruta Crítica, independientemente de la disponibilidad de la directora. Informar a la madre antes de completar el reporte al CONANI podría comprometer la seguridad de la niña y destruir evidencia. La Ruta Crítica establece que ante la ausencia de la dirección, cualquier miembro del equipo de gestión disponible debe asumir la responsabilidad de activar el protocolo. La Ley 136-03 establece la obligación de denuncia inmediata sin necesidad de autorización jerárquica.`,
    fundamentoNormativo: {
      documento: "Guía de Ruta Crítica para la Prevención y Atención de la Violencia (MINERD) / Ley 136-03",
      capitulo: "Ruta Crítica – Indicadores de Maltrato Físico; Activación del Protocolo Institucional",
      apartado: "Indicadores físicos de abuso; Procedimiento de activación ante ausencia de dirección; Art. 52 y 53 Ley 136-03 – Obligatoriedad de denuncia; Manejo de la familia durante el proceso de reporte",
      justificacion: "La Ruta Crítica establece que los indicadores físicos de maltrato obligan a la activación inmediata del protocolo sin necesidad de esperar a la máxima autoridad del centro. La Ley 136-03 hace obligatoria la denuncia al CONANI por parte de cualquier persona con conocimiento del hecho. Alertar a la madre antes del reporte puede comprometer la seguridad del NNA."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación de Ruta Crítica ante maltrato físico, priorización de protección del NNA sobre cadena de mando y manejo estratégico de la familia durante el proceso"
  },
  {
    id: 692,
    categoria: "Inclusión Educativa – Discapacidad Intelectual / Ajustes Razonables / Trabajo Interdisciplinario",
    pregunta: `En un centro educativo del Cibao, el psicólogo escolar recibe la referencia de un estudiante de 12 años de 6to grado que ha repetido el grado dos veces. La maestra reporta que el niño no logra leer textos simples, tiene dificultades para seguir instrucciones de más de dos pasos, requiere asistencia constante en actividades de la vida cotidiana escolar y sus compañeros frecuentemente se burlan de él. Los padres afirman que "siempre ha sido así" y que en la familia "todos lo tratan como bebé". El equipo docente solicita al psicólogo que emita un informe para tramitar la exclusión del estudiante del aula regular y su traslado a un centro especial, argumentando que el nivel del niño "no corresponde con el currículo de primaria". No existe ninguna evaluación formal previa ni diagnóstico documentado. ¿Cuál es la secuencia de actuación correcta del psicólogo escolar?`,
    opciones: [
      "Elaborar el informe de reubicación solicitado por el equipo docente, ya que la trayectoria de doble repitencia y las observaciones acumuladas constituyen evidencia suficiente para justificar el traslado al centro especial.",
      "Realizar una evaluación psicopedagógica completa en el ámbito de competencia escolar, documentar las barreras al aprendizaje y los apoyos requeridos, orientar a la familia sobre el proceso, coordinar con el equipo de inclusión del distrito para determinar los apoyos necesarios, implementar ajustes razonables con los docentes y, si la evaluación especializada lo indica, gestionar la derivación adecuada respetando la decisión familiar informada.",
      "Negar cualquier intervención hasta tanto la familia presente un diagnóstico clínico de discapacidad intelectual emitido por un especialista externo, ya que sin diagnóstico el psicólogo no tiene base para actuar.",
      "Iniciar de forma inmediata el proceso de derivación al centro de educación especial más cercano, comunicando a la familia que es lo más conveniente para el niño y que el centro regular no cuenta con los recursos necesarios para atenderlo."
    ],
    respuestaCorrecta: 1,
    explicacion: `La Ordenanza 05-2024 establece que ningún estudiante puede ser excluido de la educación regular sin un proceso formal de evaluación y sin agotar las estrategias de ajuste razonable. La ausencia de evaluación previa hace inválida cualquier solicitud de reubicación. El psicólogo escolar debe iniciar la evaluación psicopedagógica, implementar ajustes, coordinar con el equipo de inclusión del distrito y orientar a la familia. La decisión de reubicación, si fuera pertinente, corresponde a un proceso formal interdisciplinario y con participación familiar informada, nunca a una solicitud docente sin sustento evaluativo.`,
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Capítulo IV – Proceso de Evaluación para Inclusión; Capítulo III – Ajustes Razonables",
      apartado: "Art. 22 – Proceso formal previo a cualquier reubicación; Art. 18 – Ajustes razonables como respuesta prioritaria; Art. 9 – Participación familiar en decisiones de escolarización; Funciones del psicólogo en evaluación psicopedagógica",
      justificacion: "La Ordenanza 05-2024 prohíbe la exclusión o reubicación sin proceso formal de evaluación y sin participación de la familia. El Manual Operativo establece que la evaluación psicopedagógica es competencia del psicólogo escolar y precede cualquier decisión de escolarización."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Protección del derecho a la educación inclusiva, evaluación psicopedagógica y resistencia a presiones institucionales que vulneran la normativa"
  },
  {
    id: 693,
    categoria: "Salud Mental Escolar – Autolesiones / Intervención en Crisis / Ética",
    pregunta: `Una estudiante de 15 años de 3ro de bachillerato es referida al psicólogo escolar por su tutora, quien notó que la joven usa mangas largas incluso en días de mucho calor. Durante la entrevista individual, la estudiante reconoce voluntariamente que se hace cortes en los brazos "para sentir algo diferente cuando todo se acumula", pero afirma que no tiene deseos de morir. Pide que esto quede entre ella y el psicólogo porque "si mis padres se enteran me van a castigar y todo empeorará". El psicólogo verifica que los cortes son superficiales y recientes. La estudiante asiste regularmente a clases, mantiene buenas relaciones con sus compañeras y no reporta otros factores de riesgo. La tutora espera afuera del consultorio para recibir información sobre la entrevista. ¿Cuál es la actuación profesionalmente correcta del psicólogo en este caso?`,
    opciones: [
      "Respetar íntegramente la confidencialidad solicitada por la estudiante, registrar el caso en el expediente, establecer un plan de seguimiento semanal y evitar informar a la familia para no deteriorar la confianza terapéutica ni generar consecuencias negativas en el hogar.",
      "Explicar con calidez a la estudiante los límites de la confidencialidad en situaciones de riesgo físico, informar al equipo de gestión, involucrar a la familia con un abordaje cuidadoso que no genere victimización secundaria, diseñar un plan de intervención con seguimiento estructurado y descartar riesgo suicida activo, documentando todo el proceso.",
      "Informar a la tutora que espera afuera sobre los hallazgos de la entrevista de forma inmediata, ya que ella fue quien realizó la referencia y tiene responsabilidad sobre el caso.",
      "Aplicar el protocolo de emergencia para riesgo suicida de forma inmediata, contactar a los padres por teléfono en ese momento y solicitar el traslado de la estudiante a un centro de salud mental, ya que las autolesiones siempre constituyen una emergencia de nivel máximo."
    ],
    respuestaCorrecta: 1,
    explicacion: `Las autolesiones, aunque el estudiante niegue ideación suicida, constituyen una conducta de riesgo físico que supera el límite de la confidencialidad. Los lineamientos establecen que el psicólogo debe informar a la familia y al equipo de gestión, pero con un abordaje que evite la victimización secundaria y que preserve la alianza terapéutica. La tutora no tiene derecho a la información de la entrevista individual. La activación de un protocolo de emergencia máxima sin valorar la gradación del riesgo sería una respuesta desproporcionada que podría dañar el proceso. El abordaje correcto incluye la valoración precisa del riesgo, la intervención familiar cuidadosa y el seguimiento estructurado.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Intervención en Salud Mental – Autolesiones; Límites de la Confidencialidad con NNA",
      apartado: "Protocolo ante conductas de autolesión; Criterios para ruptura de confidencialidad ante riesgo físico; Abordaje familiar en situaciones de salud mental; Documentación del proceso de intervención",
      justificacion: "Los lineamientos 2023-2024 establecen que las autolesiones activan los límites de la confidencialidad, requiriendo informar a la familia con un enfoque que minimice el daño. El manual operativo establece la gradación de respuestas según nivel de riesgo y la documentación obligatoria de todo el proceso."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Valoración graduada del riesgo, manejo ético de la confidencialidad ante autolesiones y abordaje familiar estratégico"
  },
  {
    id: 694,
    categoria: "Ciberacoso / Convivencia Escolar / Protección de NNA",
    pregunta: `El psicólogo escolar de un liceo del sur del país es contactado por la madre de una estudiante de 14 años quien le muestra capturas de pantalla de un grupo de WhatsApp donde compañeras del centro están publicando fotos editadas de forma humillante de su hija, difundiendo rumores sobre su vida sexual y coordinando que nadie le hable. La madre está muy angustiada y exige que el psicólogo identifique a todas las responsables y las expulse del centro ese mismo día. La estudiante afectada no ha ido a clases en tres días. La directora del centro está disponible. Al revisar el caso, el psicólogo identifica que varias de las estudiantes señaladas como agresoras también tienen historias de conflictos entre ellas y que algunas podrían estar actuando bajo presión de otras. ¿Cómo debe proceder el psicólogo escolar de manera integral?`,
    opciones: [
      "Satisfacer la demanda de la madre, identificar a las estudiantes del grupo de WhatsApp y recomendar a la directora la expulsión inmediata de todas, dado que la evidencia fotográfica es suficiente y la demora en actuar podría agravar el daño a la víctima.",
      "Activar el protocolo institucional de acoso y ciberacoso, garantizar el reingreso seguro de la estudiante afectada con medidas de protección, realizar entrevistas individuales a todas las partes involucradas para establecer roles y niveles de responsabilidad, orientar a la directora sobre las medidas disciplinarias proporcionales según la normativa, y acompañar terapéuticamente a la víctima documentando todo el proceso.",
      "Informar a la madre que el ciberacoso ocurrido fuera del horario escolar no es competencia del centro educativo y orientarla para que realice la denuncia directamente ante el Ministerio Público.",
      "Iniciar un proceso de mediación grupal entre la estudiante afectada y las compañeras señaladas como agresoras, con la participación de todas las familias, para restaurar las relaciones del grupo antes de aplicar medidas disciplinarias."
    ],
    respuestaCorrecta: 1,
    explicacion: `Las Normas de Convivencia Armoniosa y los Lineamientos 2023-2024 establecen que el ciberacoso entre estudiantes del centro, aunque ocurra en plataformas digitales externas, es competencia del centro educativo cuando afecta la convivencia escolar y la integridad de sus estudiantes. El protocolo exige proteger a la víctima, investigar con entrevistas individuales para determinar roles, y aplicar medidas disciplinarias proporcionales. La expulsión inmediata sin proceso de investigación viola el debido proceso. La mediación no es apropiada en casos de acoso con desequilibrio de poder. El ciberacoso con contenido sexual sobre una menor de edad también puede activar la Ruta Crítica.`,
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa / Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Ley 136-03",
      capitulo: "Protocolo de Ciberacoso; Procedimiento de Investigación en Casos de Acoso Escolar",
      apartado: "Competencia del centro ante ciberacoso entre estudiantes; Procedimiento de investigación y determinación de roles; Medidas disciplinarias proporcionales; Protección de la víctima durante el proceso; Art. 46 Ley 136-03 – Derecho a la integridad",
      justificacion: "Las Normas de Convivencia establecen que el ciberacoso entre estudiantes del mismo centro, independientemente del medio o el momento en que ocurra, es competencia del sistema educativo cuando impacta la convivencia escolar. El protocolo requiere investigación, protección de la víctima y proporcionalidad en las medidas."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación del protocolo de ciberacoso, protección de la víctima, proporcionalidad en medidas disciplinarias y manejo de la presión familiar"
  },
  {
    id: 695,
    categoria: "Embarazo Adolescente / Permanencia Escolar / Trabajo con Familias",
    pregunta: `La psicóloga escolar de una escuela secundaria del este del país es informada por una docente de que una estudiante de 16 años de 2do de bachillerato está embarazada de aproximadamente cuatro meses. La docente afirma que "se nota y los demás estudiantes ya hablan". La abuela, que es quien ejerce la tutoría, llega al centro muy alterada y pide que la joven sea "dada de baja voluntaria" porque "está en una situación que no corresponde a la escuela". La estudiante, al ser entrevistada de forma privada, expresa que quiere continuar sus estudios, que tiene miedo de quedarse sin educación y que la abuela tomará la decisión sin consultarle. El padre del bebé es mayor de edad y no es estudiante del centro. ¿Cuál debe ser la actuación del psicólogo escolar?`,
    opciones: [
      "Respetar la decisión de la tutora legal de dar de baja a la estudiante, ya que tiene autoridad sobre la menor, y orientar a la joven sobre opciones educativas alternativas como la educación de adultos.",
      "Garantizar el derecho de la estudiante a permanecer en el sistema educativo, explicar a la tutora el marco normativo que prohíbe la exclusión por embarazo, orientar emocionalmente a la joven, diseñar junto al equipo docente los ajustes necesarios para acompañar su trayectoria escolar, y valorar los indicadores del caso para determinar si la relación con el padre mayor de edad requiere activar la Ruta Crítica.",
      "Llamar al padre del bebé al centro educativo para que participe en la reunión familiar y contribuya a la decisión sobre la continuidad escolar de la joven.",
      "Citar al equipo de gestión para que la directora convenza a la abuela de no retirar a la estudiante, delegando en la autoridad directiva la defensa del derecho a la permanencia."
    ],
    respuestaCorrecta: 1,
    explicacion: `El embarazo adolescente no es causal de exclusión del sistema educativo según la normativa dominicana vigente. El psicólogo escolar debe defender activamente el derecho a la permanencia de la estudiante, orientar a la tutora sobre el marco legal, acompañar emocionalmente a la joven y coordinar los apoyos necesarios para su continuidad. Adicionalmente, el hecho de que el padre del bebé sea mayor de edad y la estudiante tenga 16 años obliga al psicólogo a valorar si existe una situación de abuso sexual que deba ser reportada según la Ley 136-03 y la Ruta Crítica. La delegación en la familia o en la dirección sin intervención directa del psicólogo no es adecuada.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Ley 136-03 / Guía de Ruta Crítica",
      capitulo: "Permanencia Escolar – Embarazo Adolescente; Protección ante Abuso Sexual",
      apartado: "Protocolo de acompañamiento a estudiantes embarazadas; Prohibición de exclusión por embarazo; Art. 408 Código Penal y Ley 136-03 sobre relaciones sexuales con menores; Activación de Ruta Crítica ante indicadores de abuso",
      justificacion: "Los lineamientos vigentes y la normativa dominicana prohíben la exclusión escolar por embarazo y establecen el acompañamiento como función del psicólogo. La Ley 136-03 obliga a valorar si la relación con un adulto mayor constituye una situación de abuso que requiera denuncia."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Defensa del derecho a la permanencia escolar, orientación a familias sobre normativa y activación de Ruta Crítica ante posible abuso sexual"
  },
  {
    id: 696,
    categoria: "Evaluación Psicopedagógica – Altas Capacidades / Inclusión / Trabajo Interdisciplinario",
    pregunta: `Un estudiante de 10 años de 5to grado en una escuela pública de Santiago es referido al psicólogo por conducta "problemática": interrumpe la clase con preguntas que los docentes describen como "fuera del tema", termina las asignaciones en una fracción del tiempo asignado, se aburre visiblemente y ha empezado a generar conflictos con compañeros argumentando que las actividades "son para niños pequeños". Su rendimiento académico es excelente, pero los docentes reportan que es "arrogante" y "difícil de manejar". La madre comenta que en casa hace experimentos por su cuenta, lee enciclopedias por placer y pregunta sobre temas de secundaria. Ningún docente ha considerado la posibilidad de altas capacidades. El equipo de gestión ha sugerido aplicarle un plan de convivencia por las conductas disruptivas. ¿Cuál debe ser la actuación del psicólogo escolar?`,
    opciones: [
      "Aplicar el plan de convivencia solicitado por el equipo de gestión para abordar las conductas disruptivas, ya que la conducta en el aula es la problemática principal y debe ser el foco de la intervención.",
      "Realizar una evaluación psicopedagógica que explore el perfil de altas capacidades, orientar al equipo docente sobre las características del estudiante, proponer al equipo de gestión y a la familia ajustes curriculares de enriquecimiento y ampliación en lugar de medidas disciplinarias, y coordinar con el equipo de inclusión del distrito para determinar los apoyos especializados requeridos.",
      "Informar a la familia que el niño debe ser evaluado por un psicólogo clínico externo para descartar TDAH u otros trastornos antes de que el psicólogo escolar pueda intervenir.",
      "Orientar a los docentes sobre estrategias de manejo conductual para reducir las interrupciones en el aula, sin realizar una evaluación formal ya que el rendimiento académico excelente indica que no hay ninguna necesidad de apoyo."
    ],
    respuestaCorrecta: 1,
    explicacion: `El perfil descrito es consistente con altas capacidades: rendimiento excepcional, curiosidad intelectual avanzada, aburrimiento ante tareas por debajo de su nivel y dificultades de convivencia derivadas de la falta de adecuación curricular. La Ordenanza 05-2024 incluye a los estudiantes con altas capacidades dentro del marco de la educación inclusiva y establece que requieren ajustes curriculares específicos. Aplicar un plan de convivencia sin valorar el origen de las conductas es una respuesta inadecuada que no aborda la causa real. El psicólogo debe liderar la evaluación e impulsar los ajustes curriculares de enriquecimiento.`,
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Capítulo II – Estudiantes con Necesidades Específicas de Apoyo Educativo; Altas Capacidades",
      apartado: "Art. 12 – Altas capacidades como NEE; Art. 18 – Ajustes curriculares de enriquecimiento; Evaluación psicopedagógica del perfil de altas capacidades; Rol del psicólogo en orientación al equipo docente",
      justificacion: "La Ordenanza 05-2024 reconoce las altas capacidades como una necesidad específica de apoyo educativo que requiere ajustes curriculares de enriquecimiento. El Manual Operativo establece que el psicólogo escolar debe evaluar y orientar al equipo docente ante estos perfiles, evitando la patologización de conductas que tienen origen en la inadecuación curricular."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de altas capacidades, aplicación de la Ordenanza 05-2024 y liderazgo técnico ante presiones institucionales hacia la disciplina"
  },
  {
    id: 697,
    categoria: "Violencia Intrafamiliar / Ruta Crítica / Ética Profesional",
    pregunta: `Un estudiante de 14 años de 1ro de bachillerato llega al consultorio del psicólogo escolar un lunes por la mañana con el labio partido y moretones visibles en el pómulo. Cuando el psicólogo le pregunta con calidez qué ocurrió, el joven, después de un largo silencio, explica que su padre llegó borracho el viernes por la noche y golpeó a su madre y también a él cuando intentó defenderla. Dice que esto "pasa seguido" pero que nunca habían sido golpes tan visibles. Pide al psicólogo que no haga "un escándalo" porque su padre es profesor en otro centro del mismo distrito y teme que si se denuncia "todo se complica". El psicólogo conoce personalmente al padre del estudiante. ¿Cuál es la actuación ética y profesionalmente correcta?`,
    opciones: [
      "Registrar el caso en el expediente y hablar de forma discreta con el padre del estudiante, aprovechando el conocimiento personal para mediar en la situación familiar y evitar una denuncia formal que podría dañar la carrera del padre.",
      "Documentar los indicadores físicos, activar la Ruta Crítica institucional reportando el caso al CONANI y a las autoridades competentes, garantizando la protección tanto del estudiante como de la madre, con independencia de la identidad o el cargo del agresor, y brindar acompañamiento psicológico al joven durante el proceso.",
      "Orientar al estudiante para que sea él quien decida si desea que se haga la denuncia, respetando su autonomía, y actuar solo si él otorga su consentimiento explícito.",
      "Reportar el caso únicamente al equipo de gestión del centro para que evalúe si es pertinente activar la Ruta Crítica, dado que la situación involucra a un docente del sistema y requiere un manejo institucional de mayor nivel."
    ],
    respuestaCorrecta: 1,
    explicacion: `La violencia física documentada con lesiones visibles obliga al psicólogo a activar la Ruta Crítica sin consideración al cargo, la identidad ni el conocimiento personal del agresor. La Ley 136-03 y la Ruta Crítica no establecen excepciones por condición laboral del victimario. La intervención directa personal del psicólogo con el padre agresor sería una violación ética grave que podría alertar al agresor y poner en riesgo a la víctima y a su madre. El consentimiento del adolescente no es requisito para la denuncia cuando existen lesiones físicas evidentes.`,
    fundamentoNormativo: {
      documento: "Guía de Ruta Crítica para la Prevención y Atención de la Violencia / Ley 136-03 / Estatuto del Docente Dominicano",
      capitulo: "Ruta Crítica – Violencia Intrafamiliar; Ética Profesional ante Conflicto de Interés",
      apartado: "Obligatoriedad de activación de la Ruta ante lesiones físicas; Art. 52-53 Ley 136-03 – Denuncia sin excepción por condición del agresor; Estatuto del Docente – Responsabilidad ética del personal educativo",
      justificacion: "La Ruta Crítica y la Ley 136-03 establecen la obligación de denuncia sin excepciones. El conocimiento personal del agresor y su condición de docente no modifican la obligación legal ni ética del psicólogo escolar. Actuar de forma encubierta con el agresor constituiría una falta ética grave."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Independencia ética ante conflicto de interés, obligatoriedad de la Ruta Crítica y protección de NNA ante violencia intrafamiliar"
  },
  {
    id: 698,
    categoria: "Trabajo Interdisciplinario – Liderazgo Institucional / Programas Preventivos / Planificación",
    pregunta: `Al inicio del año escolar, el psicólogo de un centro educativo multigrado del suroeste del país elabora su planificación anual con componentes de prevención del abuso, convivencia escolar, salud mental y orientación vocacional. Al presentarla al equipo de gestión, la subdirectora le comunica que "el psicólogo aquí está para atender casos, no para hacer talleres" y que el tiempo del psicólogo debe dedicarse exclusivamente a la atención individual de estudiantes referidos. Además, propone que los espacios de orientación grupal sean eliminados para no "quitar tiempo de clase". Varios docentes apoyan esta postura. ¿Cómo debe responder el psicólogo escolar?`,
    opciones: [
      "Aceptar la postura del equipo de gestión y dedicarse exclusivamente a la atención individual, ya que el equipo directivo tiene autoridad sobre la distribución del tiempo en el centro.",
      "Presentar al equipo de gestión el sustento normativo del Manual Operativo y de los Lineamientos que establecen las funciones preventivas y grupales como parte integral del servicio de orientación, proponer un modelo de planificación que integre ambas funciones sin afectar los tiempos de clase, y documentar la situación ante el distrito si la postura directiva persiste en contradecir la normativa.",
      "Implementar los programas preventivos de forma informal fuera del horario oficial para cumplir con la planificación sin generar conflicto con el equipo directivo.",
      "Consultar a los docentes sobre qué actividades preventivas están dispuestos a ceder para determinar qué parte del programa puede ejecutarse con el apoyo institucional disponible."
    ],
    respuestaCorrecta: 1,
    explicacion: `El Manual Operativo y los Lineamientos establecen explícitamente que el servicio de orientación y psicología tiene una función preventiva de primer orden, que incluye programas grupales y acciones de prevención comunitaria. Reducir el servicio exclusivamente a la atención individual contradice la normativa vigente. El psicólogo debe defender técnicamente su planificación basándose en la normativa, proponer soluciones y documentar la situación ante la instancia superior si la contradicción persiste. Actuar de forma clandestina o subordinar completamente el programa a la voluntad directiva compromete la calidad del servicio.`,
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015) / Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Planificación Anual Unidad de Orientación y Psicología",
      capitulo: "Funciones del Psicólogo Escolar – Componente Preventivo; Planificación del Servicio",
      apartado: "Funciones preventivas y grupales como parte integral del servicio; Estructura de la planificación anual; Componentes obligatorios del programa de orientación; Mecanismos de defensa técnica del servicio ante autoridades",
      justificacion: "El Manual Operativo y la Planificación Anual establecen que la prevención grupal es una función esencial del psicólogo escolar, no opcional. La subordinación total al modelo reactivo de atención individual contradice la normativa y limita el impacto del servicio."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Liderazgo técnico institucional, defensa normativa del rol del psicólogo y gestión de conflictos con la autoridad directiva"
  },
  {
    id: 699,
    categoria: "Duelo / Intervención en Crisis / Comunidad Educativa",
    pregunta: `Un lunes por la mañana, el psicólogo escolar de un liceo de una zona rural recibe la noticia de que un estudiante de 16 años de 2do de bachillerato murió el fin de semana en un accidente de tránsito. El joven era muy conocido y querido en el centro. Varios estudiantes llegan llorando, un grupo de compañeros cercanos se niega a entrar a clases, una docente que era su tutora está en estado de shock y no puede continuar su jornada, y la directora solicita al psicólogo que "normalice todo rápido para no perder más clases". Algunos padres comienzan a llegar al centro sin ser citados. ¿Cómo debe gestionar el psicólogo esta situación de manera integral?`,
    opciones: [
      "Acatar la instrucción de la directora, reiniciar las clases con normalidad y citar a los estudiantes más afectados para atención individual a lo largo de la semana, ya que la rutina es el mejor mecanismo de recuperación ante el duelo.",
      "Activar el protocolo de intervención en crisis por pérdida colectiva: coordinar con la directora un espacio de acogida para el grupo, atender de forma diferenciada a los estudiantes más afectados y a la docente en estado de shock, gestionar la presencia de las familias con información clara, implementar actividades de elaboración del duelo colectivo y establecer un plan de seguimiento para los próximos días, documentando el proceso.",
      "Informar a la directora que es imposible retomar las clases ese día y que el centro debe suspender la jornada por respeto al duelo, gestionando el cierre del centro ante las autoridades del distrito.",
      "Concentrar toda la atención del psicólogo en el grupo de amigos más cercanos al estudiante fallecido durante toda la jornada, delegando en los docentes el manejo del resto del estudiantado afectado."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los lineamientos establecen que la muerte de un estudiante activa el protocolo de intervención en crisis por duelo colectivo, que implica un abordaje diferenciado de toda la comunidad educativa: estudiantes, docentes y familias. El psicólogo lidera el proceso de acogida y elaboración colectiva, atiende de forma prioritaria a los más afectados, y establece un plan de seguimiento. Forzar la "normalidad" ante una pérdida colectiva puede generar duelos patológicos. La suspensión total sin protocolo tampoco es la respuesta adecuada. La gestión debe ser integral y documentada.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Intervención en Crisis – Duelo Colectivo; Protocolos de Respuesta ante Muerte de Estudiante",
      apartado: "Protocolo de intervención ante muerte de estudiante; Atención diferenciada a comunidad educativa en crisis; Rol del psicólogo como coordinador del proceso de duelo institucional; Plan de seguimiento post-crisis",
      justificacion: "Los lineamientos 2023-2024 establecen el protocolo de duelo colectivo como una intervención en crisis que requiere coordinación integral por parte del psicólogo, incluyendo acogida grupal, atención diferenciada, gestión familiar y seguimiento documentado."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Gestión de duelo colectivo, liderazgo en intervención en crisis y coordinación con la comunidad educativa completa"
  },
  {
    id: 700,
    categoria: "Orientación Vocacional – Seguimiento de Casos / Trabajo con Familias / Permanencia",
    pregunta: `El psicólogo escolar detecta que tres estudiantes de 4to de bachillerato con excelente expediente académico han comenzado a mostrar desinterés, ausentismo leve y una marcada desmotivación en los últimos dos meses. Al realizar entrevistas individuales, los tres estudiantes expresan variantes del mismo mensaje: sus familias les han dicho que "estudiar no sirve para nada aquí" y que lo mejor es irse al exterior o trabajar. Uno de ellos tiene una oferta de trabajo en una empresa familiar que implicaría abandonar el bachillerato a dos meses de graduarse. Otro ha sido presionado por su padre para viajar de forma irregular. El tercero dice que simplemente "no ve futuro". Los tres tienen potencial académico documentado y el psicólogo había trabajado previamente con ellos en orientación vocacional con resultados positivos. ¿Cuál debe ser la actuación del psicólogo escolar?`,
    opciones: [
      "Respetar la autonomía de los estudiantes y las decisiones familiares, registrar el riesgo de abandono en los expedientes y notificar al distrito para que aplique el protocolo de baja si alguno deja de asistir.",
      "Activar el protocolo de prevención del abandono escolar para cada caso con estrategias diferenciadas: retomar el proceso de orientación vocacional con proyección de futuro concreto, convocar a las familias para sesiones de orientación sobre oportunidades del sistema educativo y consecuencias del abandono, articular con programas de apoyo disponibles, y documentar el seguimiento individualizado de cada estudiante hasta su graduación.",
      "Concentrar la intervención en el estudiante con oferta de trabajo, ya que su caso es el más urgente, y dar seguimiento mensual a los otros dos hasta verificar si concretan el abandono.",
      "Informar a la directora del centro para que cite a las familias y les comunique la obligatoriedad de culminar el bachillerato, delegando en la autoridad directiva la gestión de la retención escolar."
    ],
    respuestaCorrecta: 1,
    explicacion: `El Manual Operativo y los Lineamientos establecen que el psicólogo escolar debe activar el protocolo de prevención del abandono ante señales tempranas de riesgo, con intervención individualizada y trabajo con familias. Estudiantes a dos meses de graduarse representan un caso de alta prioridad. La orientación vocacional es un instrumento clave de retención. Las familias deben ser involucradas con un enfoque orientador, no punitivo. Esperar a que el abandono se concrete o delegar exclusivamente en la dirección contradice las funciones preventivas del psicólogo establecidas en la normativa.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015) / Planificación Anual Unidad de Orientación y Psicología",
      capitulo: "Permanencia Escolar – Prevención del Abandono; Orientación Vocacional como Herramienta de Retención; Trabajo con Familias",
      apartado: "Protocolo de intervención ante señales tempranas de riesgo de abandono; Orientación vocacional con proyección de futuro; Estrategias de trabajo con familias en riesgo de abandono; Seguimiento individualizado documentado",
      justificacion: "Los lineamientos vigentes y el Manual Operativo establecen que la prevención del abandono es una función prioritaria del psicólogo escolar que requiere intervención temprana, diferenciada por caso, con involucramiento familiar y seguimiento documentado. La orientación vocacional es reconocida como herramienta de retención escolar."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Prevención del abandono escolar, orientación vocacional como herramienta de retención, trabajo con familias y gestión de casos múltiples con intervención diferenciada"
  },

  {
    id: 701,
    categoria: "Acoso Escolar – Identificación de Riesgos / Protocolos de Convivencia / Trabajo Interdisciplinario",
    pregunta: `El psicólogo escolar de una escuela básica del Distrito Nacional recibe en su consultorio a una madre visiblemente angustiada que relata que su hijo de 11 años de 5to grado lleva tres semanas negándose a asistir a la escuela, ha dejado de comer con normalidad, presenta insomnio y ha expresado que "no quiere seguir viviendo así". La madre pensó inicialmente que era "pereza", pero encontró en el cuaderno del niño frases como "soy un inútil" y "nadie me quiere en esa escuela". Al citar al niño, este revela entre lágrimas que un grupo de compañeros de su grado lo llaman "gordo" y "tonto" todos los días, le esconden los materiales, le rompen las tareas y en el recreo lo empujan cuando los maestros no ven. Dice que se lo contó a su maestra hace dos semanas y ella le respondió que "se pusiera firme porque los niños son así". Uno de los agresores identificados es hijo de un miembro de la Asociación de Padres del centro que tiene influencia política en la comunidad. La directora, al ser informada del caso, dice que hay que "manejarlo con cuidado para no crear problemas con esa familia".  ¿Cuál debe ser la actuación integral del psicólogo escolar en este caso?`,
    opciones: [
      "Seguir la orientación de la directora y manejar el caso con discreción, abordando la situación únicamente a través de la orientación individual del niño afectado para fortalecer su autoestima, sin activar formalmente el protocolo de acoso hasta verificar mejor los hechos.",
      "Activar el protocolo institucional de acoso escolar documentando los indicadores físicos, emocionales y conductuales del estudiante afectado, realizar entrevistas individuales a todas las partes sin revelar la identidad del denunciante, implementar medidas de protección inmediata para el niño, orientar al equipo docente sobre su responsabilidad ante situaciones de acoso, informar a las familias involucradas con los procedimientos establecidos, y elevar el caso al distrito si la presión institucional impide la correcta aplicación del protocolo, independientemente de la influencia de la familia del agresor.",
      "Convocar una reunión conjunta con las familias del niño afectado y de los agresores para mediar el conflicto y llegar a un acuerdo de convivencia, aprovechando la presencia de los padres para resolver la situación de forma rápida y pacífica.",
      "Remitir el caso directamente al orientador del grado para que maneje la situación, ya que el psicólogo escolar debe reservar su intervención para los casos de mayor complejidad clínica."
    ],
    respuestaCorrecta: 1,
    explicacion: `Las Normas de Convivencia Armoniosa establecen con claridad que el acoso escolar requiere la activación del protocolo institucional formal, que incluye documentación, protección de la víctima, entrevistas individuales separadas y notificación a familias. La mediación conjunta está contraindicada ante el desequilibrio de poder. La condición sociopolítica de la familia del agresor no modifica en ningún caso la obligación del psicólogo de aplicar el protocolo. Si la presión institucional impide la correcta aplicación, el psicólogo debe escalar al distrito educativo. La frase "no quiero seguir viviendo así" también obliga al psicólogo a realizar una valoración de riesgo emocional del estudiante afectado como parte de la intervención.`,
    fundamentoNormativo: {
      documento: "Normas del Sistema Educativo Dominicano para la Convivencia Armoniosa / Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Protocolo de Acoso Escolar – Procedimiento de Activación e Investigación; Ética Profesional ante Presiones Institucionales",
      apartado: "Procedimiento formal ante acoso escolar documentado; Protección de la víctima durante el proceso; Exclusión de la mediación ante desequilibrio de poder; Obligación del psicólogo de escalar ante obstáculos institucionales; Valoración de riesgo emocional asociado al acoso",
      justificacion: "Las Normas de Convivencia establecen el protocolo formal de acoso como obligatorio cuando existen indicadores documentados, sin excepciones por influencia familiar. Los lineamientos 2023-2024 establecen la obligación del psicólogo de defender la correcta aplicación de los protocolos ante presiones institucionales."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación de protocolo de acoso escolar, independencia ética ante presión institucional y valoración de riesgo emocional asociado"
  },
  {
    id: 702,
    categoria: "Salud Mental Escolar – Depresión / Derivación / Seguimiento de Casos",
    pregunta: `Una docente de 8vo grado de un centro educativo del Cibao refiere al psicólogo a una estudiante de 13 años porque "ya no participa en clase, se sienta al fondo, nunca habla y parece que está en otro mundo". Al entrevistarla, la psicóloga observa que la joven mantiene contacto visual mínimo, responde con monosílabos, refiere sentirse "vacía la mayor parte del tiempo", dice que ya nada le causa alegría, que duerme muchas horas pero aún se siente cansada, que ha perdido interés en actividades que antes le gustaban como el dibujo y que come muy poco. Afirma que esto lleva así "como dos meses o más". No reporta ideación suicida en ese momento. La psicóloga también identifica que la estudiante presenta manchas en el uniforme con frecuencia, que la madre no ha asistido a ninguna citación desde el año pasado y que sus calificaciones han bajado progresivamente. La directora académica le informa a la psicóloga que la estudiante "solo necesita motivación, que los jóvenes de ahora son muy flojos". ¿Cuál debe ser la actuación profesionalmente adecuada de la psicóloga escolar?`,
    opciones: [
      "Aceptar la apreciación de la directora académica y diseñar un plan de motivación académica para la estudiante, registrando el caso como bajo rendimiento escolar con seguimiento trimestral.",
      "Documentar los indicadores observados que apuntan a un estado depresivo prolongado, iniciar un proceso de acompañamiento psicológico en el ámbito escolar, gestionar la referencia a un especialista en salud mental externo con el respaldo de la documentación del caso, explorar los indicadores de posible negligencia en el hogar que podrían activar la Ruta Crítica, e insistir en el contacto con la familia con acompañamiento del equipo de gestión dado el historial de no respuesta.",
      "Remitir la estudiante de forma inmediata a un centro de salud mental sin proceso previo de acompañamiento escolar ni documentación, ya que la gravedad del cuadro supera las competencias del psicólogo escolar.",
      "Esperar a que la familia asista a una citación para obtener información del contexto familiar antes de intervenir, ya que sin el consentimiento del tutor no es posible iniciar ninguna acción de orientación con la estudiante."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los lineamientos establecen que el psicólogo escolar puede y debe iniciar el acompañamiento psicológico en el ámbito escolar ante indicadores de afectación emocional prolongada, documentar el caso y gestionar la referencia especializada. La apreciación de la directora académica no modifica la obligación profesional del psicólogo. La ausencia sostenida de la madre y los signos de descuido físico activan la valoración de posible negligencia según la Ruta Crítica. El acompañamiento y la derivación no son excluyentes; deben ocurrir en paralelo con documentación rigurosa.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015) / Guía de Ruta Crítica",
      capitulo: "Intervención en Salud Mental Escolar – Depresión; Proceso de Derivación y Referencia; Indicadores de Negligencia",
      apartado: "Funciones del psicólogo ante indicadores de depresión en adolescentes; Protocolo de referencia a especialistas con documentación del caso; Indicadores de negligencia que activan la Ruta Crítica; Gestión de casos con familias de baja respuesta",
      justificacion: "Los lineamientos 2023-2024 establecen que el psicólogo escolar inicia el acompañamiento psicológico escolar y gestiona la derivación de forma simultánea, con documentación rigurosa. Los indicadores físicos de descuido junto a la ausencia familiar sostenida deben ser valorados como posibles indicadores de negligencia."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de indicadores de depresión adolescente, gestión de derivación simultánea al acompañamiento escolar y valoración de negligencia"
  },
  {
    id: 703,
    categoria: "Educación Inclusiva – Necesidades Específicas de Apoyo Educativo / Evaluación / Familia",
    pregunta: `El psicólogo escolar de una escuela básica de zona rural del suroeste recibe la referencia de un niño de 8 años de 2do grado que a pesar de un año de intervención docente no logra reconocer las letras, invierte números y letras de forma sistemática, tiene dificultades para reproducir secuencias rítmicas y presenta una marcada diferencia entre su capacidad para expresarse oralmente, que es excelente, y su desempeño escrito, que es muy bajo. El niño es descrito por su maestra como "inteligente pero no le entra la lectura". Sus padres son agricultores con educación primaria incompleta y la madre afirma que "en la familia todos aprendemos tarde, no es nada malo". Cuando el psicólogo sugiere que el niño podría necesitar una evaluación especializada, la familia se niega porque "no quieren que lo etiqueten" y porque el centro especializado más cercano queda a dos horas de camino. El equipo docente ha agotado sus estrategias habituales y la brecha con sus compañeros se amplía cada mes. ¿Cuál es la actuación correcta del psicólogo escolar?`,
    opciones: [
      "Respetar la negativa familiar y continuar con las estrategias docentes actuales, registrando en el expediente que la familia rechazó la evaluación especializada como exoneración de responsabilidad del centro.",
      "Realizar la evaluación psicopedagógica en el ámbito de competencia escolar para documentar el perfil de aprendizaje del niño, implementar de inmediato ajustes razonables curriculares y metodológicos que no requieren diagnóstico externo, orientar a la familia con información clara y accesible sobre el beneficio de la evaluación especializada —no para etiquetar sino para apoyar— y explorar con la Dirección del Distrito alternativas de acceso al especialista que reduzcan las barreras geográficas y económicas.",
      "Emitir un diagnóstico presuntivo de dislexia en el informe escolar para que la familia comprenda la necesidad de apoyo especializado y se motive a buscar atención externa.",
      "Solicitar a la Dirección del Centro que la matrícula del niño sea condicionada a que la familia gestione la evaluación especializada, como medida de presión para garantizar el acceso del niño al apoyo que necesita."
    ],
    respuestaCorrecta: 1,
    explicacion: `La Ordenanza 05-2024 establece que los ajustes razonables no requieren diagnóstico clínico externo para ser implementados; la evaluación psicopedagógica escolar es suficiente para iniciar los apoyos. El psicólogo no tiene competencia para emitir diagnósticos clínicos como dislexia. Condicionar la matrícula a la evaluación especializada viola el derecho a la educación. El trabajo con la familia debe ser orientador y empático, y el psicólogo debe articular con el distrito para reducir las barreras de acceso geográfico, ya que la distancia no puede ser un obstáculo para el derecho a la evaluación.`,
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Ajustes Razonables sin Diagnóstico Previo; Evaluación Psicopedagógica Escolar; Articulación con Familias y Distrito",
      apartado: "Art. 18 – Los ajustes razonables no requieren diagnóstico clínico; Límites del diagnóstico del psicólogo escolar; Rol del distrito en el acceso a evaluación especializada; Orientación a familias con resistencia a la evaluación",
      justificacion: "La Ordenanza 05-2024 es explícita en que los ajustes razonables proceden desde la evaluación psicopedagógica escolar, sin esperar diagnóstico externo. El Manual Operativo delimita las competencias diagnósticas del psicólogo escolar y establece el proceso de articulación con el distrito para superar barreras de acceso."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación de ajustes razonables sin diagnóstico externo, límites del rol diagnóstico y trabajo con familias resistentes"
  },
  {
    id: 704,
    categoria: "Protección Infantil – Abuso Sexual por Adulto de la Comunidad / Ruta Crítica / Confidencialidad",
    pregunta: `Una estudiante de 12 años de 6to grado de una escuela del norte del país es enviada al consultorio del psicólogo por su maestra porque "parece distraída y asustada desde hace semanas". Durante una entrevista cuidadosa y no sugestiva, la niña revela que el señor que vive frente a su casa, a quien toda la comunidad conoce y respeta como "don Ramón", la ha tocado de forma inapropiada en varias ocasiones cuando ella pasa cerca de su casa sola. Dice que no le ha contado a su madre porque "me dijo que si hablo me va a echar a mí la culpa a mí" y que tiene miedo porque "él conoce a todo el mundo". El psicólogo identifica que la niña muestra signos claros de angustia, evitación y vergüenza. La madre de la niña trabaja en la misma escuela como personal de limpieza y está disponible en ese momento en las instalaciones. El acusado no tiene ninguna relación formal con el centro educativo. ¿Cómo debe actuar el psicólogo escolar?`,
    opciones: [
      "Llamar de inmediato a la madre, que está disponible en el centro, para informarle lo que la niña reveló y que sea ella quien decida los próximos pasos, ya que como tutora tiene el derecho y la responsabilidad de actuar primero.",
      "Documentar cuidadosamente la revelación de la niña sin presionarla a repetir los hechos, activar la Ruta Crítica institucional notificando al equipo de gestión disponible y reportar el caso al CONANI de forma inmediata, sin informar a la madre en ese momento si hay riesgo de que su reacción no controlada pueda comprometer la seguridad de la niña o la integridad del proceso, y garantizar el acompañamiento emocional de la estudiante durante todo el proceso.",
      "Orientar a la niña para que ella misma le cuente a su madre lo que ocurrió durante esa misma tarde, acompañándola emocionalmente en el proceso para que se sienta apoyada al hacer la revelación familiar.",
      "Esperar a que la niña autorice explícitamente la activación del protocolo antes de actuar, ya que forzar el proceso sin su consentimiento podría retraumatizarla y destruir la relación de confianza construida."
    ],
    respuestaCorrecta: 1,
    explicacion: `Ante una revelación de abuso sexual, la Ruta Crítica y la Ley 136-03 obligan al reporte inmediato al CONANI sin necesidad del consentimiento de la víctima ni de la autorización del tutor. En este caso específico, informar a la madre de forma impulsiva antes de completar el reporte puede comprometer el proceso: la madre podría confrontar al agresor, alertarlo o reaccionar de forma que revictimice a la niña. El psicólogo debe proteger la integridad del proceso y de la víctima, garantizar el acompañamiento emocional de la niña y activar el protocolo con el equipo de gestión disponible. La Ruta Crítica establece el orden correcto de actuaciones para estos casos.`,
    fundamentoNormativo: {
      documento: "Guía de Ruta Crítica para la Prevención y Atención de la Violencia / Ley 136-03",
      capitulo: "Ruta Crítica – Abuso Sexual Extrafamiliar; Manejo de la Revelación; Reporte al CONANI",
      apartado: "Procedimiento ante revelación de abuso sexual; Obligatoriedad del reporte sin consentimiento previo; Protección de la integridad del proceso ante familiares del NNA; Art. 52-53 Ley 136-03 – Denuncia obligatoria; Acompañamiento emocional durante el proceso",
      justificacion: "La Ruta Crítica establece que el reporte al CONANI es obligatorio e inmediato ante revelación de abuso sexual, y que el orden de activación del protocolo debe proteger tanto a la víctima como la integridad del proceso investigativo, lo que puede implicar gestionar con cautela la notificación familiar."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Manejo de la revelación de abuso sexual, activación de Ruta Crítica y gestión estratégica del entorno familiar durante el proceso"
  },
  {
    id: 705,
    categoria: "Convivencia Escolar – Cultura de Paz / Mediación / Programas Preventivos / Planificación",
    pregunta: `Al inicio del segundo trimestre, el psicólogo escolar de un liceo del este del país analiza los datos de su seguimiento institucional y detecta un incremento preocupante: 14 casos de conflictos físicos entre estudiantes en el primer trimestre, 9 referidos por conducta agresiva, 3 activaciones del protocolo de acoso y una percepción generalizada entre los docentes de que "el ambiente del centro está muy pesado". Al presentar estos datos al equipo de gestión para proponer un plan de intervención preventiva grupal con talleres de cultura de paz, resolución de conflictos y mediación entre pares, la directora responde que "los psicólogos de antes no necesitaban hacer eso y el centro funcionaba bien" y propone en cambio aumentar las sanciones disciplinarias para "poner orden". Dos docentes apoyan la postura de la directora y uno le pide al psicólogo que "se concrete a atender los casos referidos". ¿Cuál es la actuación técnicamente correcta del psicólogo en esta situación?`,
    opciones: [
      "Aceptar el criterio directivo y enfocarse en la atención individual de los casos referidos, ya que la directora tiene autoridad sobre la dinámica del centro y el psicólogo no debe generar conflictos institucionales.",
      "Presentar al equipo de gestión el análisis de datos como evidencia técnica de la necesidad de intervención preventiva, fundamentar la propuesta en el Manual Operativo y los Lineamientos que establecen la función preventiva del psicólogo como parte integral del servicio, proponer un plan que articule la intervención grupal con la atención individual de casos, y documentar por escrito la postura directiva para elevarla al distrito si persiste la contradicción con la normativa.",
      "Implementar los talleres de cultura de paz de forma autónoma sin informar al equipo de gestión, aprovechando los espacios de tutoría de los docentes que sí apoyan la iniciativa.",
      "Remitir todos los casos de conflicto al orientador de grado para reducir la carga de trabajo y así liberar tiempo para los programas preventivos, sin informar al equipo de gestión del cambio en la distribución de funciones."
    ],
    respuestaCorrecta: 1,
    explicacion: `El Manual Operativo y los Lineamientos 2023-2024 establecen que la función preventiva es un componente esencial e irrenunciable del servicio de orientación y psicología. El uso de datos institucionales para fundamentar la propuesta es una práctica técnica correcta que fortalece la posición del psicólogo. Ante la resistencia directiva, el psicólogo debe insistir con respaldo normativo documentado, proponer soluciones integrativas y escalar al distrito si la contradicción con la normativa persiste. Actuar de forma clandestina o delegar funciones sin autorización son respuestas inadecuadas que comprometen la integridad del servicio.`,
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015) / Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Planificación Anual Unidad de Orientación y Psicología",
      capitulo: "Función Preventiva del Servicio de Orientación; Programas de Cultura de Paz y Convivencia; Liderazgo Técnico Institucional",
      apartado: "Componente preventivo como función esencial del servicio; Uso de datos para la planificación de intervenciones; Mecanismos de defensa técnica ante resistencia directiva; Escalamiento al distrito ante contradicciones normativas",
      justificacion: "El Manual Operativo establece la función preventiva como parte integral del servicio de orientación, no como opcional. Los lineamientos 2023-2024 respaldan el uso de datos institucionales para la planificación y la defensa técnica del servicio ante presiones institucionales."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Liderazgo técnico basado en evidencia, defensa normativa de la función preventiva y gestión de resistencia institucional"
  },
  {
    id: 706,
    categoria: "Trabajo con Familias – Violencia Intrafamiliar / Protección / Ruta Crítica",
    pregunta: `Durante una visita domiciliaria de seguimiento a un estudiante de 10 años con ausentismo reiterado, el psicólogo escolar y la orientadora del centro observan que la vivienda presenta condiciones de hacinamiento severo, que hay varios niños menores sin supervisión adulta visible y que la madre, al atenderlos, tiene un moretón reciente en la cara. Al preguntarle discretamente cómo está, la madre dice que "está bien" y que "se dio un golpe". Mientras hablan, el niño estudiante del centro jala la mano del psicólogo y le susurra: "el papá le pega a mi mamá y a veces también a nosotros". La madre, al escuchar esto, le llama la atención al niño en tono elevado y le dice que "no invente". La visita domiciliaria no fue planificada para este propósito y el psicólogo no llevaba ningún instrumento de registro. ¿Cuál debe ser la actuación del psicólogo escolar a partir de este momento?`,
    opciones: [
      "No intervenir en el contexto del hogar ya que la visita fue para atender el ausentismo y actuar sobre lo observado sin instrumentos formales podría comprometer la validez de cualquier proceso posterior; registrar las observaciones al regresar al centro y planificar una intervención formal para la semana siguiente.",
      "Concluir la visita con normalidad para no generar tensión en el hogar, regresar al centro educativo de inmediato, documentar detalladamente todo lo observado y la revelación del niño, activar la Ruta Crítica institucional con el equipo de gestión, reportar al CONANI los indicadores de violencia intrafamiliar que afectan tanto a la madre como a los menores del hogar, y coordinar con servicios de protección social.",
      "Confrontar a la madre en el mismo momento de la visita sobre los indicadores de violencia observados, instándola a salir del hogar con sus hijos ese mismo día para garantizar su seguridad inmediata.",
      "Remitir el caso a la trabajadora social del distrito para que sea ella quien realice la evaluación formal del hogar, ya que la visita domiciliaria del psicólogo escolar no tiene competencia para activar protocolos de protección."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los indicadores observados durante la visita (moretón reciente en la madre, revelación espontánea del niño sobre violencia y reacción de la madre) constituyen indicadores de violencia intrafamiliar que activan la Ruta Crítica, independientemente del propósito original de la visita y de la ausencia de instrumentos formales. La falta de instrumentos no exime la obligación de documentar y reportar. Confrontar a la madre en el hogar puede poner en riesgo su seguridad y la de los niños. El regreso al centro y la documentación inmediata son el primer paso correcto, seguido de la activación del protocolo y el reporte al CONANI.`,
    fundamentoNormativo: {
      documento: "Guía de Ruta Crítica para la Prevención y Atención de la Violencia / Ley 136-03 / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Ruta Crítica – Violencia Intrafamiliar; Indicadores de Maltrato Observados en Visita Domiciliaria",
      apartado: "Obligación de reporte ante indicadores de violencia independientemente del contexto de detección; Procedimiento de documentación retrospectiva; Protección de la integridad del proceso en el hogar; Art. 52-53 Ley 136-03 – Denuncia obligatoria",
      justificacion: "La Ruta Crítica y la Ley 136-03 establecen que la obligación de reporte se activa ante cualquier indicador de violencia, sin importar el contexto en que se detecte ni la disponibilidad previa de instrumentos formales. La documentación posterior y el reporte al CONANI son obligatorios."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de indicadores de violencia en visita domiciliaria, activación de Ruta Crítica fuera del contexto planificado y protección de la integridad del proceso"
  },
  {
    id: 707,
    categoria: "Salud Mental Escolar – Ansiedad / Intervención Individual / Derivación / Familia",
    pregunta: `Una estudiante de 11 años de 4to grado de una escuela básica del Gran Santo Domingo es referida al psicólogo escolar por su maestra porque "llora sin razón aparente, no quiere salir al recreo, le tiemblan las manos cuando va a hablar en clase y ha vomitado dos veces esta semana antes de entrar a la escuela". Al entrevistarla, la niña describe un miedo intenso y constante a "hacerlo mal", a que sus compañeros se rían de ella y a que sus padres se decepcionen. Relata que en casa practica las lecciones varias horas al día porque teme reprobar. La madre, al ser citada, dice que "la niña siempre ha sido así, muy sensible, y que eso es bueno porque la hace responsable". El padre no asiste a la citación. La maestra ha comenzado a excusarla de las participaciones orales para "no estresarla más". ¿Cuál es la actuación correcta del psicólogo escolar en este caso?`,
    opciones: [
      "Validar la estrategia de la maestra de excusarla de las participaciones orales y orientar a la madre para que reduzca el tiempo de estudio en casa, ya que la reducción de demandas es la respuesta más inmediata para aliviar la ansiedad.",
      "Iniciar un proceso de acompañamiento psicológico individual en el ámbito escolar, orientar a la maestra sobre que la evitación de las participaciones orales refuerza la ansiedad en lugar de reducirla, trabajar con la familia para que comprendan la diferencia entre responsabilidad y ansiedad disfuncional, gestionar la referencia a un especialista en salud mental infantil dado el nivel de afectación funcional, y coordinar adaptaciones metodológicas graduales con el equipo docente.",
      "Solicitar a los padres que la niña sea evaluada por un neurólogo antes de realizar cualquier intervención psicológica escolar, ya que los síntomas físicos como el temblor y el vómito requieren descarte médico previo.",
      "Aplicar un programa grupal de manejo de ansiedad con todo el grupo de 4to grado, incorporando a la niña en ese contexto para que no se sienta señalada con una intervención individual."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los lineamientos establecen que el psicólogo escolar puede iniciar el acompañamiento psicológico individual ante indicadores de ansiedad funcional, sin necesidad de evaluación médica previa. La evitación de las participaciones, aunque bien intencionada, es una práctica que refuerza la ansiedad según los fundamentos del abordaje de la ansiedad escolar recogidos en los lineamientos. La orientación a docentes y la familia son funciones del psicólogo. El nivel de afectación funcional (vómitos, temblores, evitación social) justifica la referencia a especialista en paralelo al acompañamiento escolar. La intervención grupal no sustituye la atención individual cuando hay afectación funcional significativa.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Intervención en Salud Mental Escolar – Ansiedad; Orientación a Docentes y Familias; Proceso de Derivación",
      apartado: "Funciones del psicólogo ante ansiedad con afectación funcional; Orientación a docentes sobre el refuerzo inadvertido de la evitación; Trabajo con familias sobre ansiedad vs. responsabilidad; Criterios para derivación simultánea al acompañamiento escolar",
      justificacion: "Los lineamientos 2023-2024 establecen el acompañamiento psicológico escolar como primera respuesta ante ansiedad con afectación funcional, la orientación al equipo docente sobre el manejo adecuado, y la derivación simultánea cuando el nivel de afectación lo requiere."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Intervención ante ansiedad escolar, orientación a docentes sobre manejo inadecuado y gestión simultánea de acompañamiento y derivación"
  },
  {
    id: 708,
    categoria: "Ética Profesional – Manejo de Expedientes / Confidencialidad / Solicitud Institucional",
    pregunta: `El psicólogo escolar de un centro educativo del norte del país recibe una solicitud formal firmada por el Director Regional de Educación, requiriendo el acceso completo a los expedientes psicológicos de cuatro estudiantes que han sido identificados en un proceso disciplinario regional por participar en actos de vandalismo fuera del centro escolar. La solicitud indica que los expedientes son necesarios para "tomar decisiones sobre la continuidad de la matrícula de estos estudiantes". Los cuatro estudiantes tienen entre 14 y 16 años y sus familias no han sido notificadas de esta solicitud. El psicólogo no tiene certeza de que esta solicitud cumpla con los requisitos normativos para el acceso a expedientes. ¿Cómo debe proceder?`,
    opciones: [
      "Entregar los expedientes solicitados de forma inmediata dado que la solicitud proviene de la máxima autoridad regional, lo que constituye respaldo institucional suficiente para el acceso.",
      "Explicar respetuosamente a la Dirección Regional que los expedientes psicológicos están protegidos por normas de confidencialidad que establecen requisitos específicos para su acceso, verificar con la instancia normativa correspondiente del MINERD si la solicitud cumple dichos requisitos, informar a las familias de los estudiantes sobre la existencia de la solicitud, y no entregar los expedientes hasta tanto se confirme el cumplimiento de los requisitos normativos, documentando todo el proceso.",
      "Elaborar un informe resumen de cada caso con la información que considere pertinente compartir, entregarlo a la Dirección Regional como alternativa a la entrega del expediente completo, sin consultar a las familias ni verificar los requisitos normativos.",
      "Destruir los expedientes antes de responder a la solicitud para proteger la confidencialidad de los estudiantes, ya que una vez eliminados no pueden ser entregados."
    ],
    respuestaCorrecta: 1,
    explicacion: `El Manual Operativo establece que los expedientes psicológicos son documentos confidenciales con protección normativa específica. La jerarquía del solicitante no modifica los requisitos de acceso establecidos por la normativa. El psicólogo debe verificar si la solicitud cumple los requisitos formales, informar a las familias, y abstenerse de entregar hasta tener claridad normativa, documentando todo el proceso. Elaborar un resumen sin autorización o destruir expedientes son respuestas que generan responsabilidad profesional adicional.`,
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015) / Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Normas Éticas del Servicio – Confidencialidad; Manejo y Acceso a Expedientes Psicológicos",
      apartado: "Protección de los expedientes psicológicos; Requisitos normativos para el acceso por terceros; Derechos de las familias sobre los expedientes de NNA; Obligación de documentar solicitudes de acceso y las respuestas del psicólogo",
      justificacion: "El Manual Operativo establece que los expedientes psicológicos tienen protección de confidencialidad que no puede ser levantada por autoridad jerárquica sin el cumplimiento de requisitos normativos específicos. El psicólogo tiene la responsabilidad profesional de verificar el cumplimiento de esos requisitos antes de cualquier entrega."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Protección de la confidencialidad de expedientes ante presión jerárquica, verificación normativa y derechos de las familias"
  },
  {
    id: 709,
    categoria: "Intervención en Crisis – Intento de Suicidio en el Centro / Protocolos / Comunidad Educativa",
    pregunta: `A media mañana, una docente irrumpe en el consultorio del psicólogo escolar de un liceo del Distrito Nacional reportando que encontró a un estudiante de 17 años de 3ro de bachillerato en el baño del centro con cortes profundos en ambas muñecas, aparentemente autoinfligidos, con hemorragia activa. El estudiante está consciente pero muy callado. Un grupo de compañeros ya está en el pasillo y varios docentes han salido de sus aulas. La directora está ausente ese día en una actividad externa. El subdirector se encuentra en el centro. La enfermera escolar está presente. ¿Cuál debe ser la secuencia de actuación inmediata del psicólogo escolar?`,
    opciones: [
      "Atender emocionalmente al estudiante en el lugar donde fue encontrado, entrevistarlo para evaluar la intencionalidad del acto antes de llamar a emergencias médicas, ya que la evaluación psicológica debe preceder cualquier otra intervención para no agravarlo.",
      "Coordinar de forma inmediata la atención médica de emergencia con la enfermera y el sistema de emergencias, acompañar al estudiante con presencia calmada sin dejarlo solo, instruir a la docente para despejar el área y proteger la privacidad del estudiante, informar al subdirector para que active el protocolo institucional y contacte a la familia, gestionar con el equipo docente el manejo de la comunidad educativa para contener el impacto, y planificar la intervención de seguimiento con el grupo y con los testigos una vez atendida la emergencia médica.",
      "Llamar directamente a los padres del estudiante para que ellos autoricen el traslado a urgencias antes de activar el sistema de emergencias médicas, respetando el derecho de los tutores a ser los primeros en tomar decisiones sobre la atención de su hijo.",
      "Pedir al subdirector que cierre el centro ese día y envíe a todos los estudiantes a casa para protegerlos del impacto del evento, mientras el psicólogo permanece con el estudiante afectado hasta la llegada de la familia."
    ],
    respuestaCorrecta: 1,
    explicacion: `Ante una emergencia médica con hemorragia activa, la atención médica inmediata es la prioridad absoluta y no puede ser condicionada ni demorada por evaluación psicológica previa ni por autorización familiar. El psicólogo coordina la emergencia médica, protege la privacidad del estudiante, activa la cadena institucional disponible e inicia el manejo del impacto sobre la comunidad educativa. Los lineamientos establecen que en estas situaciones el psicólogo cumple un rol de coordinación de la respuesta integral, no solo de atención individual. Cerrar el centro sin protocolo específico o esperar la autorización familiar antes de la atención médica son respuestas que ponen en riesgo la vida del estudiante.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Intervención en Crisis – Emergencia de Salud Mental con Riesgo Vital; Protocolo de Intento de Suicidio en el Centro",
      apartado: "Priorización de atención médica en emergencias con riesgo vital; Rol coordinador del psicólogo en la respuesta institucional; Manejo del impacto sobre la comunidad educativa; Activación de la cadena institucional ante ausencia de la dirección; Seguimiento post-crisis con testigos y comunidad",
      justificacion: "Los lineamientos 2023-2024 establecen que ante una emergencia con riesgo vital, la atención médica inmediata es la primera prioridad y el psicólogo cumple un rol de coordinación integral que incluye la protección del estudiante, la activación institucional y el manejo del impacto comunitario."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Coordinación de respuesta ante emergencia de riesgo vital, priorización de actuaciones y manejo del impacto sobre la comunidad educativa"
  },
  {
    id: 710,
    categoria: "Programa Nacional de Inducción – Funciones del Psicólogo / Rol Institucional / Derivación",
    pregunta: `Un psicólogo escolar recién incorporado a un centro educativo del este del país a través del Programa Nacional de Inducción (PNI-ORE) detecta durante sus primeras semanas que el servicio de orientación del centro funciona exclusivamente como un espacio de sanción y control: los estudiantes son enviados al consultorio como "castigo" por mal comportamiento, el psicólogo anterior llevaba los registros de conducta para el equipo disciplinario y entregaba informes a los docentes sobre el contenido de las conversaciones individuales con los estudiantes. La comunidad educativa percibe el servicio como una extensión de la dirección disciplinaria. El nuevo psicólogo comprende que debe reorientar el servicio, pero enfrenta resistencia de los docentes que dicen "así siempre ha funcionado". ¿Cuál debe ser su estrategia de actuación para reorientar el servicio según la normativa?`,
    opciones: [
      "Adaptarse al modelo existente durante el primer año para ganarse la confianza del equipo docente y la dirección, e introducir cambios graduales en años posteriores para no generar resistencia institucional.",
      "Presentar formalmente al equipo de gestión y a los docentes el marco normativo del servicio de orientación y psicología según el Manual Operativo, el PNI-ORE y los Lineamientos, explicando con claridad las funciones del psicólogo, los límites éticos del servicio, la distinción entre orientación y disciplina, y los mecanismos correctos de referencia, iniciando desde el primer momento la aplicación del modelo correcto y documentando el proceso de reorientación.",
      "Negarse a atender a cualquier estudiante enviado por conducta hasta que los docentes comprendan el modelo correcto, como medida de presión para acelerar el cambio cultural en el centro.",
      "Informar al Distrito Educativo de inmediato sobre las irregularidades del servicio anterior para que se apliquen sanciones al personal que participó en el modelo incorrecto, antes de iniciar cualquier proceso de reorientación."
    ],
    respuestaCorrecta: 1,
    explicacion: `El PNI-ORE y el Manual Operativo establecen con claridad las funciones del psicólogo escolar, que incluyen la orientación, la prevención y el acompañamiento, diferenciándolas explícitamente del control disciplinario. El nuevo psicólogo tiene la responsabilidad de aplicar el modelo correcto desde el inicio, fundamentado en la normativa, y de orientar a la comunidad educativa sobre el funcionamiento adecuado del servicio. Adaptarse al modelo incorrecto, aunque sea temporalmente, compromete la ética profesional y el derecho de los estudiantes a un servicio de calidad. Negar la atención o escalar sin intentar la reorientación interna son respuestas desproporcionadas para el inicio del proceso.`,
    fundamentoNormativo: {
      documento: "Programa Nacional de Inducción a Orientadores Escolares (PNI-ORE) / Manual de los Servicios de Orientación y Psicología en los Centros Educativos / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Funciones del Psicólogo Escolar; Distinción entre Orientación y Disciplina; Ética del Servicio",
      apartado: "Funciones normativas del servicio de orientación y psicología; Prohibición de uso del servicio como instrumento de control disciplinario; Confidencialidad de las entrevistas individuales; Mecanismos correctos de referencia; Responsabilidad del psicólogo de aplicar el modelo correcto desde el inicio",
      justificacion: "El PNI-ORE y el Manual Operativo son explícitos en la naturaleza del servicio de orientación, diferenciándolo del control disciplinario. La confidencialidad de las entrevistas individuales es un principio ético irrenunciable. El psicólogo tiene la obligación de aplicar el modelo correcto desde su incorporación, orientando a la comunidad educativa con base normativa."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Aplicación del modelo normativo del servicio desde el inicio, reorientación institucional con base en el PNI-ORE y defensa ética del rol del psicólogo escolar"
  },
  {
    id: 711,
    categoria: "Negligencia / Protección de NNA / Ruta Crítica / Articulación Intersectorial",
    pregunta: `El psicólogo escolar de una escuela básica de una comunidad rural del suroeste del país atiende a un niño de 7 años de 1er grado que es referido por su maestra porque "huele mal, duerme en clase todos los días y a veces dice que no desayunó". Al entrevistarlo con técnicas apropiadas a su edad, el niño cuenta que en su casa "no siempre hay luz ni comida" y que su mamá "a veces no viene a dormir". Cuando el psicólogo revisa el expediente, encuentra que el niño llegó a la escuela con hematomas leves hace tres meses que fueron registrados por la enfermera como "caída en juego", que lleva dos trimestres con bajo rendimiento sostenido, y que la única persona que aparece como contacto de emergencia es una vecina. Al intentar contactar a la madre por teléfono durante tres días consecutivos, no hay respuesta. La vecina, al ser localizada, informa que la madre "viaja mucho" y que a veces el niño pasa días solo o con un hermano mayor de 12 años. No existe ningún reporte previo al CONANI ni ninguna gestión interinstitucional documentada. El psicólogo identifica que el director del centro conoce la situación del niño "de años" pero nunca ha activado ningún protocolo porque "la familia es así y no se puede hacer nada". ¿Cuál debe ser la actuación integral del psicólogo escolar?`,
    opciones: [
      "Continuar intentando contactar a la madre durante otra semana antes de activar cualquier protocolo, ya que la ausencia de contacto telefónico no es suficiente evidencia para una denuncia formal y el director del centro, que conoce mejor la comunidad, no ha considerado necesario actuar.",
      "Documentar de forma exhaustiva todos los indicadores acumulados incluyendo los antecedentes del expediente, activar la Ruta Crítica de forma inmediata con el equipo de gestión disponible independientemente de la postura del director, reportar el caso al CONANI detallando los indicadores de negligencia, abandono y posible maltrato previo, coordinar con la trabajadora social del distrito y con los programas de protección social del Estado, y garantizar el seguimiento del niño dentro del centro mientras el proceso institucional avanza, documentando cada paso.",
      "Hablar directamente con la vecina que cuida al niño para establecer un acuerdo informal de supervisión y alimentación mientras se localiza a la madre, gestionando donaciones de alimentos del centro como medida de apoyo inmediato.",
      "Elevar el caso al director regional solicitando que sea él quien active el protocolo, ya que la postura del director del centro impide la actuación del psicólogo a nivel institucional y se requiere una intervención de mayor jerarquía para desbloquearlo."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los indicadores acumulados en este caso, incluyendo la desatención alimentaria sostenida, la ausencia parental recurrente, los hematomas registrados previamente, el bajo rendimiento sostenido y la ausencia de red de apoyo familiar, configuran un cuadro de negligencia grave que activa la Ruta Crítica de forma obligatoria e inmediata. La Ley 136-03 establece que la obligación de denuncia es personal e independiente de la postura jerárquica del director. El psicólogo no puede subordinar una obligación legal a la opinión del director ni esperar más evidencia cuando el patrón ya es suficientemente claro. La articulación con el CONANI y los programas de protección social es parte integral de la Ruta Crítica. Las soluciones informales no sustituyen el protocolo.`,
    fundamentoNormativo: {
      documento: "Guía de Ruta Crítica para la Prevención y Atención de la Violencia / Ley 136-03 / Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Ruta Crítica – Negligencia y Abandono; Obligatoriedad del Reporte Independiente de la Jerarquía",
      apartado: "Indicadores acumulados de negligencia como activadores de la Ruta Crítica; Art. 52-53 Ley 136-03 – Obligación personal de denuncia sin excepción jerárquica; Articulación con CONANI y programas de protección social; Documentación del proceso ante resistencia directiva",
      justificacion: "La Ley 136-03 y la Ruta Crítica establecen que la obligación de denuncia es personal, directa e inmediata para cualquier persona con conocimiento de indicadores de maltrato o negligencia, sin que la postura del superior jerárquico pueda modificar dicha obligación. El patrón acumulado de indicadores activa el protocolo aunque ningún hecho aislado sea concluyente."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de patrón acumulado de negligencia, obligatoriedad personal de la Ruta Crítica ante resistencia jerárquica y articulación intersectorial"
  },
  {
    id: 712,
    categoria: "Inclusión Educativa – Estudiante con Discapacidad Visual / Ajustes Razonables / Trabajo Docente",
    pregunta: `Una estudiante de 14 años con diagnóstico documentado de baja visión severa se incorpora a un liceo del Cibao proveniente de otro centro donde, según el informe de traslado, contaba con materiales adaptados y asiento preferencial. Al llegar, la coordinadora académica informa al psicólogo que "el centro no tiene recursos para estudiantes especiales" y le asigna a la estudiante un pupitre al fondo del aula. Los docentes de tres materias distintos se quejan con el psicólogo porque "la estudiante no copia la pizarra, no entrega las tareas completas y distrae a los compañeros al pedirles que le lean". En la primera entrevista individual, la estudiante le cuenta al psicólogo que está avergonzada de pedir ayuda constantemente, que siente que "estorba" y que está pensando en abandonar el liceo porque "no vale la pena el esfuerzo si así va a ser todo el año". No existe ningún plan de ajustes en el centro para esta estudiante. ¿Cuál debe ser la actuación del psicólogo escolar?`,
    opciones: [
      "Orientar a los docentes para que tengan paciencia con la estudiante mientras la familia gestiona los materiales adaptados que usaba en el centro anterior, ya que la responsabilidad de los recursos especializados recae en la familia y no en el centro.",
      "Diseñar e implementar de forma inmediata un plan de ajustes razonables para la estudiante que incluya reubicación en asiento preferencial, adaptación de materiales accesibles en coordinación con los docentes, orientación al cuerpo docente sobre sus responsabilidades en la educación inclusiva, acompañar emocionalmente a la estudiante para sostener su permanencia, documentar el plan en el expediente y coordinar con el equipo de inclusión del distrito para gestionar los apoyos especializados requeridos.",
      "Solicitar a la dirección que la estudiante sea reubicada en el centro de origen donde ya contaba con los apoyos necesarios, ya que ese centro tenía mejor capacidad para atender sus necesidades y la reubicación garantizaría su bienestar.",
      "Referir el caso exclusivamente al equipo de inclusión del distrito para que ellos diseñen el plan de ajustes, ya que la complejidad del caso supera las competencias del psicólogo escolar del centro."
    ],
    respuestaCorrecta: 1,
    explicacion: `La Ordenanza 05-2024 establece que los ajustes razonables son obligatorios y no están condicionados a la disponibilidad de recursos especializados externos ni a la gestión familiar. El psicólogo escolar tiene la responsabilidad de liderar el diseño e implementación del plan de ajustes con los recursos disponibles en el centro, orientar a los docentes sobre sus responsabilidades normativas y articular con el distrito para los apoyos que excedan la capacidad institucional. Reubicar a la estudiante en otro centro sin agotar los ajustes razonables viola su derecho a la inclusión educativa. La sola derivación al distrito sin acción inmediata del psicólogo no es suficiente.`,
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Capítulo III – Ajustes Razonables Obligatorios; Responsabilidad del Centro ante Estudiantes con Discapacidad",
      apartado: "Art. 18 – Ajustes razonables como obligación del centro, no condicionada a recursos externos; Art. 7 – Derecho a la educación inclusiva en el centro de matrícula; Rol del psicólogo en el diseño del plan de ajustes; Acompañamiento emocional para la permanencia; Coordinación con equipo de inclusión del distrito",
      justificacion: "La Ordenanza 05-2024 es explícita en que los ajustes razonables son obligación del centro educativo y no pueden ser condicionados a la disponibilidad de recursos externos. La reubicación sin agotar los ajustes viola el derecho a la inclusión. El psicólogo lidera el proceso en el centro y articula con el distrito para apoyos adicionales."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Liderazgo en diseño de ajustes razonables inmediatos, orientación docente sobre educación inclusiva y acompañamiento emocional para la permanencia"
  },
  {
    id: 713,
    categoria: "Consumo de Sustancias – Intervención Preventiva / Familia / Trabajo Interdisciplinario",
    pregunta: `El psicólogo escolar de un liceo del Gran Santo Domingo es contactado por el padre de un estudiante de 16 años de 2do de bachillerato quien, muy angustiado, le muestra al psicólogo mensajes del teléfono de su hijo donde este y varios amigos del mismo liceo coordinan el consumo de marihuana los fines de semana en un área cercana al centro. El padre exige que el psicólogo identifique a todos los estudiantes involucrados en esos mensajes y que se apliquen sanciones disciplinarias inmediatas. El hijo no sabe que su padre ha leído sus mensajes ni que ha contactado al psicólogo. Al entrevistar al estudiante de forma individual días después bajo el pretexto de un seguimiento de rutina, el joven no revela nada y parece desconfiado. El psicólogo identifica que la dinámica familiar descrita por el padre en la reunión previa sugiere una relación muy tensa entre ambos y que el joven podría estar usando las sustancias como respuesta a conflictos familiares no resueltos. ¿Cuál debe ser la actuación del psicólogo escolar?`,
    opciones: [
      "Actuar sobre la información del padre, identificar a los estudiantes de los mensajes y reportar los nombres al equipo de gestión para que aplique el proceso disciplinario, ya que el padre tiene derecho a proteger a su hijo y la información recibida es suficiente para actuar.",
      "Iniciar un proceso de orientación individual con el estudiante desde un enfoque motivacional sin revelarle la fuente de la preocupación, diseñar una intervención preventiva grupal sobre consumo de sustancias para el grado, orientar al padre sobre cómo fortalecer la comunicación familiar sin confrontación, articular con el equipo de gestión para que la respuesta sea preventiva y no exclusivamente punitiva, y documentar el proceso sin exponer la identidad del estudiante ni de sus amigos a acciones disciplinarias basadas únicamente en la información del padre.",
      "Informar al estudiante de forma inmediata que su padre ha leído sus mensajes y que el psicólogo ha sido contactado, para restablecer la confianza y que el joven pueda hablar libremente sobre su situación.",
      "Citar a los padres de todos los estudiantes nombrados en los mensajes para una reunión de familia conjunta donde se aborde el tema del consumo con todas las partes presentes simultáneamente."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los lineamientos establecen que el abordaje del consumo de sustancias en el ámbito escolar debe ser preventivo, no punitivo, y basado en evidencia directa con el estudiante, no en información obtenida de terceros sin su conocimiento. Actuar sobre los mensajes como fuente de identificación disciplinaria viola la privacidad de los estudiantes y puede destruir la relación de confianza necesaria para la intervención. El enfoque correcto incluye la orientación individual motivacional, la intervención preventiva grupal y el trabajo con la familia para mejorar la comunicación. La articulación con el equipo de gestión debe orientarse hacia la prevención, no la sanción inmediata basada en información indirecta.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Programas de Prevención – Consumo de Sustancias; Ética Profesional ante Información de Terceros",
      apartado: "Enfoque preventivo y no punitivo ante consumo de sustancias; Entrevista motivacional como herramienta de intervención individual; Trabajo con familias en situaciones de consumo adolescente; Manejo ético de información recibida de terceros sobre NNA",
      justificacion: "Los lineamientos 2023-2024 establecen el enfoque preventivo como marco de intervención ante el consumo de sustancias y la entrevista motivacional como herramienta principal con el estudiante. El manejo ético de la información recibida de terceros protege la relación de confianza indispensable para la intervención efectiva."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Intervención preventiva ante consumo, manejo ético de información de terceros y trabajo con familias en conflicto"
  },
  {
    id: 714,
    categoria: "Orientación Vocacional – Toma de Decisiones / Presión Familiar / Permanencia",
    pregunta: `Una estudiante de 17 años que cursa el último año de bachillerato en un liceo del este del país acude al psicólogo escolar mostrándose muy angustiada. Explica que desde siempre ha querido estudiar medicina, que tiene un expediente académico excelente y que había sido preseleccionada en el programa de becas universitarias del MINERD. Sin embargo, su padre acaba de informarle que "en esta familia las mujeres no van a la universidad lejos de casa" y que lo que corresponde es que aprenda un oficio o que se case. La madre no contradice al padre. La estudiante dice que siente que "su vida está siendo decidida por otros" y que si no puede estudiar medicina "no sabe qué hará". Al explorar más, el psicólogo identifica signos de angustia significativa, llanto contenido y una frase que genera preocupación: "a veces pienso que para qué tanto esfuerzo si todo va a terminar igual". ¿Cuál debe ser la actuación del psicólogo escolar?`,
    opciones: [
      "Citar a los padres de forma inmediata para convencerlos de que permitan a su hija continuar sus estudios universitarios, presentando argumentos sobre las ventajas educativas, ya que el conflicto vocacional es el eje del problema y resolverlo beneficiará directamente la salud emocional de la estudiante.",
      "Realizar una valoración cuidadosa del riesgo emocional implícito en la frase de la estudiante, garantizar su seguridad emocional inmediata, continuar el proceso de orientación vocacional documentando sus aspiraciones y opciones disponibles, orientar a la familia con un enfoque de diálogo respetuoso sobre el derecho de la joven a decidir su proyecto de vida, y articular con el programa de becas del MINERD para que la estudiante conozca el proceso y pueda gestionar su participación con la información necesaria.",
      "Indicarle a la estudiante que ella tiene 17 años y que legalmente puede tomar sus propias decisiones educativas, instándola a confrontar a sus padres con esa información durante esa misma semana.",
      "Registrar el caso como conflicto familiar de orientación vocacional y programar el seguimiento para el siguiente trimestre, dando tiempo a que la situación familiar se resuelva de forma natural antes de una intervención del psicólogo."
    ],
    respuestaCorrecta: 1,
    explicacion: `La frase "a veces pienso que para qué tanto esfuerzo si todo va a terminar igual" en el contexto de angustia significativa obliga al psicólogo a realizar una valoración de riesgo emocional antes de cualquier otra intervención. La orientación vocacional continúa en paralelo pero no puede ignorar la señal de alerta. El trabajo con la familia debe ser de acompañamiento y diálogo, no de confrontación. El psicólogo debe informar a la estudiante sobre sus opciones reales, incluyendo el programa de becas, para que pueda tomar decisiones informadas. Aplazar la intervención o reducirla a la mediación familiar sin valorar el riesgo emocional es profesionalmente inadecuado.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015) / Planificación Anual Unidad de Orientación y Psicología",
      capitulo: "Orientación Vocacional – Proyecto de Vida; Valoración de Riesgo Emocional; Trabajo con Familias",
      apartado: "Detección de señales de riesgo emocional durante el proceso vocacional; Priorización del abordaje de salud mental ante señales de alerta; Orientación familiar desde el respeto al proyecto de vida del estudiante; Articulación con programas de becas y oportunidades educativas",
      justificacion: "Los lineamientos establecen que la orientación vocacional incluye el abordaje del proyecto de vida con enfoque de derechos y que cualquier señal de riesgo emocional detectada durante el proceso debe ser valorada y atendida con prioridad. El trabajo con familias se orienta desde el respeto a la autonomía del estudiante."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Detección de riesgo emocional en contexto vocacional, orientación familiar con enfoque de derechos y articulación con programas institucionales"
  },
  {
    id: 715,
    categoria: "Protección Infantil – Explotación Laboral / Ley 136-03 / Ruta Crítica / Permanencia Escolar",
    pregunta: `El psicólogo escolar de una escuela básica del suroeste del país identifica que un niño de 11 años de 4to grado lleva tres semanas llegando al centro con el uniforme sucio, los ojos enrojecidos, dormido en clase y con las manos lastimadas. Al entrevistar al niño con estrategias adecuadas a su edad, este cuenta que desde que su padre "se fue", su tío lo lleva todos los días de madrugada a trabajar en la construcción "para ayudar en la casa" y que regresa muy tarde por la noche. Dice que a veces no hace las tareas porque "llega muy cansado y sin luz". La madre, al ser citada, confirma la situación y dice que "no hay de otra" porque el tío les paga el alquiler a cambio del trabajo del niño. Agrega que el niño "está bien, no le pegan" y pide que "no se compliquen las cosas porque si el tío se molesta nos quedamos en la calle". El director del centro indica al psicólogo que "en estas comunidades es normal" y que no se debe intervenir porque "se va a enojar la familia y el niño dejará de venir". ¿Cuál debe ser la actuación del psicólogo escolar?`,
    opciones: [
      "Respetar el criterio del director del centro y el contexto socioeconómico de la familia, registrar el caso con seguimiento mensual y gestionar apoyo alimentario del centro para el niño como medida de compensación.",
      "Documentar detalladamente los indicadores de trabajo infantil y sus consecuencias sobre la salud y la escolaridad del niño, activar la Ruta Crítica de forma inmediata reportando al CONANI y al Ministerio de Trabajo según los indicadores de explotación laboral infantil, articular con programas de protección social para que la familia reciba apoyo económico alternativo, y garantizar el seguimiento del niño en el centro educativo durante todo el proceso, independientemente de la postura del director.",
      "Hablar directamente con el tío para convencerlo de que reduzca las horas de trabajo del niño a solo las tardes, de modo que pueda seguir asistiendo a la escuela sin que la familia pierda el ingreso económico que depende de esa situación.",
      "Orientar a la madre para que gestione de forma independiente una denuncia ante el CONANI, ya que ella es la tutora legal y corresponde a ella iniciar el proceso de protección de su hijo."
    ],
    respuestaCorrecta: 1,
    explicacion: `La Ley 136-03 prohíbe explícitamente el trabajo infantil que interfiere con la escolaridad y que somete al NNA a condiciones perjudiciales para su salud y desarrollo. Los indicadores descritos configuran explotación laboral infantil, que es una forma de maltrato que activa la Ruta Crítica y la obligación de reporte al CONANI. La normalización cultural señalada por el director no modifica la obligación legal. El psicólogo no puede delegar en la madre una denuncia cuando esta está en condición de vulnerabilidad y dependencia del victimario. La articulación con programas de protección social es parte de la respuesta integral para que la familia tenga alternativas económicas.`,
    fundamentoNormativo: {
      documento: "Ley 136-03 / Guía de Ruta Crítica para la Prevención y Atención de la Violencia / Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Protección contra la Explotación Laboral Infantil; Ruta Crítica ante Formas de Maltrato; Articulación Intersectorial",
      apartado: "Art. 40 Ley 136-03 – Prohibición del trabajo infantil perjudicial; Art. 52-53 – Obligación de denuncia; Indicadores de explotación laboral en el contexto escolar; Articulación con programas de protección social como parte de la respuesta integral; Independencia del psicólogo ante postura normalizadora del director",
      justificacion: "La Ley 136-03 prohíbe el trabajo infantil que afecta la escolaridad y la salud del NNA, clasificándolo como una forma de maltrato que activa la obligación de denuncia. El psicólogo tiene la obligación personal de reportar al CONANI sin que la postura del director o la vulnerabilidad de la familia modifiquen esa obligación."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de explotación laboral infantil, obligatoriedad de la Ruta Crítica ante normalización cultural y articulación intersectorial para protección integral"
  },
  {
    id: 716,
    categoria: "Salud Mental Escolar – Duelo Complicado / Intervención Individual / Familia / Derivación",
    pregunta: `Tres meses después del fallecimiento repentino de su madre en un accidente, una estudiante de 15 años de 2do de bachillerato de un liceo del norte del país es referida al psicólogo escolar por su tutora porque "ya no rinde igual, se aísla, y la semana pasada fue encontrada llorando sola en el baño durante el recreo". Al entrevistarla, la joven expresa que siente que "el tiempo se detuvo el día que murió su mamá", que no puede concentrarse en nada, que tiene pesadillas frecuentes, que evita pasar por los lugares que recuerdan a su madre, y que ha desarrollado un miedo intenso a que "le pase algo a su papá o a sus hermanos". Reporta que en casa "nadie habla del tema" y que su padre "no quiere que llore porque dice que hay que ser fuertes". La joven no reporta ideación suicida activa, pero dice que "a veces quisiera dormirse y no despertar para no sentir más". El psicólogo identifica que han pasado tres meses y que la intensidad de los síntomas no ha disminuido sino que se ha incrementado. ¿Cuál es la actuación profesionalmente adecuada?`,
    opciones: [
      "Continuar el acompañamiento individual semanal dentro del centro educativo durante otros tres meses antes de considerar la derivación, ya que el duelo por la pérdida de un progenitor es un proceso que requiere tiempo y la estudiante está funcionando en el ámbito escolar.",
      "Valorar con atención la frase sobre querer dormirse y no despertar como indicador de posible riesgo emocional, iniciar el acompañamiento psicológico de duelo en el ámbito escolar, gestionar la derivación urgente a especialista en salud mental dado el perfil de duelo complicado con incremento de síntomas, orientar al padre sobre la importancia de un espacio familiar de expresión del duelo y su rol en la recuperación de su hija, y documentar el proceso completo con el plan de intervención y seguimiento.",
      "Informar al padre de forma inmediata que su hija necesita hospitalización psiquiátrica urgente dado el tiempo transcurrido y la intensidad de los síntomas, para que la familia gestione el ingreso ese mismo día.",
      "Organizar un grupo de duelo con todos los estudiantes del liceo que hayan perdido a un familiar en el último año, incorporando a la estudiante en ese espacio colectivo como primera y principal estrategia de intervención."
    ],
    respuestaCorrecta: 1,
    explicacion: `Los lineamientos establecen que cuando los síntomas de duelo se intensifican en lugar de disminuir pasados tres meses y la persona experimenta evitación, pesadillas, miedo patológico y expresiones de deseo de no existir, se configura un perfil de duelo complicado que requiere derivación especializada en paralelo al acompañamiento escolar. La frase "quisiera dormirse y no despertar" debe ser valorada como señal de riesgo aunque no sea ideación suicida estructurada. El trabajo con el padre es indispensable para modificar el ambiente familiar que inhibe la expresión del duelo. La hospitalización inmediata sin evaluación gradual es desproporcionada. El grupo de duelo no sustituye la atención individual en este nivel de afectación.`,
    fundamentoNormativo: {
      documento: "Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024) / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Intervención en Salud Mental – Duelo; Protocolo de Derivación Especializada; Valoración de Riesgo Emocional",
      apartado: "Indicadores de duelo complicado que activan la derivación especializada; Valoración de expresiones de deseo de no existir como señal de riesgo; Trabajo con la familia para favorecer el proceso de duelo; Articulación entre acompañamiento escolar y atención especializada",
      justificacion: "Los lineamientos 2023-2024 establecen los criterios para identificar duelo complicado que requiere derivación especializada, incluyendo el incremento de síntomas pasados tres meses. El acompañamiento escolar y la derivación son procesos paralelos y complementarios, no excluyentes."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de duelo complicado, valoración de riesgo en expresiones ambiguas y gestión simultánea de acompañamiento escolar y derivación"
  },
  {
    id: 717,
    categoria: "Educación Inclusiva – TEA / Familia / Trabajo Docente / Ajustes Razonables",
    pregunta: `Un estudiante de 10 años con diagnóstico de Trastorno del Espectro Autista nivel 1 se ha incorporado por primera vez a un aula regular de 4to grado en una escuela del Cibao. Durante las primeras semanas, el estudiante presenta crisis de angustia ante los ruidos fuertes del recreo, dificultades para trabajar en grupo y repetición de frases fuera de contexto cuando está estresado. La maestra, aunque con buena voluntad, no tiene experiencia con TEA y ha comenzado a excluir al estudiante de las actividades grupales "para que no se angustie". El padre, en la primera reunión con el psicólogo, se muestra muy desconfiado y dice que en la escuela anterior "siempre le decían que su hijo molestaba" y que viene con la guardia alta. La madre no puede asistir a las reuniones porque trabaja doble turno. El coordinador académico sugiere que el estudiante asista solo medio día "mientras se adapta", como medida provisional. ¿Cuál es la actuación integral del psicólogo escolar?`,
    opciones: [
      "Aceptar la propuesta del coordinador académico de medio día como medida provisional razonable, ya que reduce el nivel de estrés del estudiante mientras el psicólogo diseña el plan de ajustes, y programar la revisión de esa medida para el próximo trimestre.",
      "Rechazar la medida de medio día como restricción no fundamentada en la normativa, diseñar un plan de ajustes razonables específicos para el perfil TEA del estudiante que incluya estrategias sensoriales, de comunicación y de participación en actividades grupales, orientar a la maestra con herramientas concretas de acompañamiento, construir una relación de confianza con el padre desde el reconocimiento de sus experiencias previas, coordinar con el equipo de inclusión del distrito para apoyos adicionales, y documentar el plan en el expediente con revisiones periódicas.",
      "Solicitar a la familia que contrate una asistente personal para el estudiante que lo acompañe durante la jornada completa, ya que el centro no cuenta con los recursos humanos necesarios para atender sus necesidades de forma adecuada.",
      "Esperar cuatro semanas para observar la evolución del estudiante en el aula antes de diseñar el plan de ajustes, ya que algunos estudiantes con TEA nivel 1 logran adaptarse solos con el tiempo y una intervención temprana podría estigmatizarlo innecesariamente."
    ],
    respuestaCorrecta: 1,
    explicacion: `La Ordenanza 05-2024 establece que ninguna medida de restricción de la jornada escolar puede ser aplicada como estrategia de adaptación para estudiantes con discapacidad sin fundamento evaluativo y sin proceso formal. Los ajustes razonables son la respuesta normativa ante las barreras descritas y deben diseñarse e implementarse de inmediato. La orientación concreta a la maestra es parte del rol del psicólogo. El trabajo con el padre requiere un enfoque que repare la desconfianza generada por experiencias previas. La coordinación con el distrito para apoyos especializados es necesaria dado el perfil del caso.`,
    fundamentoNormativo: {
      documento: "Ordenanza 05-2024 sobre Educación Inclusiva / Manual Operativo de los Centros de Orientación y Psicología (2015)",
      capitulo: "Ajustes Razonables para Estudiantes con TEA; Restricciones No Fundamentadas como Vulneración de Derechos",
      apartado: "Art. 18 – Ajustes razonables ante barreras al aprendizaje; Art. 20 – Prohibición de restricciones de jornada sin proceso formal; Orientación docente como función del psicólogo; Trabajo con familias con historial de experiencias negativas; Coordinación con equipo de inclusión del distrito",
      justificacion: "La Ordenanza 05-2024 prohíbe las restricciones de jornada no fundamentadas y establece los ajustes razonables como la respuesta obligatoria ante barreras al aprendizaje de estudiantes con discapacidad. El psicólogo lidera el proceso con el docente y articula con el distrito para apoyos adicionales."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Rechazo fundamentado de medidas restrictivas, diseño de ajustes razonables para TEA y trabajo con familias con desconfianza institucional"
  },
  {
    id: 718,
    categoria: "Ética Profesional – Doble Rol / Conflicto de Interés / Manejo de Casos",
    pregunta: `El psicólogo escolar de un liceo del Distrito Nacional recibe la referencia de un estudiante de 16 años que presenta signos de aislamiento y bajo rendimiento desde hace dos meses. Al revisar el expediente, identifica que ese estudiante es hijo de una colega docente del mismo centro con quien el psicólogo mantiene una relación de amistad cercana. La docente-madre se acerca al psicólogo en la sala de maestros y le dice que está muy preocupada por su hijo, que ya sabe que fue referido y que le pide "como amiga" que le cuente todo lo que el joven le diga en las sesiones. Además, le comenta que ella misma ha notado que su hijo "tiene una relación rara con un estudiante mayor" y le pide al psicólogo que investigue esa relación en las sesiones y le informe. Esa misma tarde, el estudiante llega al consultorio y, antes de comenzar, le dice al psicólogo: "mi mamá me dijo que todo lo que yo le diga usted se lo va a contar a ella, y por eso no voy a hablar nada". ¿Cómo debe actuar el psicólogo escolar?`,
    opciones: [
      "Tranquilizar al estudiante diciéndole que efectivamente comparte información con su madre solo lo que considera conveniente, para generar confianza y que la sesión pueda avanzar sin tensión.",
      "Explicar con claridad al estudiante los límites reales de la confidencialidad aplicables a su caso sin hacer promesas que no pueda cumplir, clarificar con la docente-madre de forma respetuosa pero firme que el proceso de atención de su hijo tiene normas éticas que no pueden ser modificadas por la relación de amistad, abstenerse de investigar la relación del estudiante según el encargo de la madre ya que eso comprometería la alianza terapéutica, y documentar ambas situaciones en el expediente como parte del manejo ético del caso.",
      "Transferir el caso al orientador del centro para evitar el conflicto de interés generado por la amistad con la madre, ya que cualquier intervención del psicólogo en este caso estará comprometida por esa relación previa.",
      "Acceder al pedido de la madre de forma parcial, compartiéndole únicamente los aspectos generales de las sesiones sin detalles, como equilibrio entre la relación de amistad y las normas éticas del servicio."
    ],
    respuestaCorrecta: 1,
    explicacion: `El Manual Operativo y los lineamientos establecen que la confidencialidad del proceso de orientación no puede ser modificada por relaciones personales del psicólogo con la familia del estudiante. El conflicto de interés debe ser manejado explicitando los límites éticos con la madre-colega, no evitándolos ni cediendo parcialmente. El psicólogo no puede asumir encargos de investigación que comprometan la alianza terapéutica. La transparencia con el estudiante sobre los límites reales de la confidencialidad es la base de la relación de ayuda. La transferencia del caso puede evaluarse si el conflicto de interés es insuperable, pero no es la primera respuesta; primero deben establecerse los límites con claridad.`,
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015) / Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Normas Éticas del Servicio – Conflicto de Interés; Confidencialidad; Manejo de Relaciones Duales",
      apartado: "Prohibición de modificar la confidencialidad por relaciones personales con la familia; Manejo explícito del conflicto de interés; Límites del psicólogo ante encargos que comprometen la alianza terapéutica; Transparencia con el estudiante sobre los límites reales de la confidencialidad",
      justificacion: "El Manual Operativo establece normas éticas que prohíben que las relaciones personales del psicólogo modifiquen las condiciones de confidencialidad del proceso. El manejo correcto implica establecer límites claros con todas las partes y documentar el proceso."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Manejo ético de conflicto de interés por relación dual, protección de la confidencialidad ante presión de familiar-colega y transparencia con el estudiante"
  },
  {
    id: 719,
    categoria: "Prevención del Abandono Escolar – Embarazo Adolescente / Trabajo Interdisciplinario / Permanencia",
    pregunta: `El psicólogo escolar de una escuela básica del norte del país detecta que una estudiante de 13 años de 6to grado ha comenzado a faltar con frecuencia y que cuando asiste, se muestra muy callada y evita la educación física. Al entrevistarla de forma individual, la estudiante, con mucha dificultad, le confía que está embarazada de aproximadamente cinco meses, que nadie en su familia lo sabe todavía y que tiene mucho miedo. Cuando el psicólogo le pregunta sobre el padre del bebé, la estudiante baja la cabeza y dice "es alguien grande, no es de aquí". Al explorar más cuidadosamente, la estudiante revela que el padre del bebé es un hombre de aproximadamente 35 años que "la cortejó" durante meses y que ahora "desapareció". La estudiante pide al psicólogo que no le diga nada a su mamá "porque la va a castigar". ¿Cuál debe ser la actuación del psicólogo escolar?`,
    opciones: [
      "Respetar la confidencialidad solicitada por la estudiante y orientarla para que sea ella quien le diga a su madre en los próximos días, acompañándola en ese proceso de revelación familiar antes de activar cualquier protocolo.",
      "Identificar que el embarazo de una niña de 13 años por parte de un adulto de 35 años constituye una situación de abuso sexual que activa de forma obligatoria la Ruta Crítica y la denuncia al CONANI independientemente del pedido de confidencialidad, garantizar el acompañamiento emocional inmediato de la estudiante, informar a la familia con apoyo del equipo de gestión y con un enfoque que minimice el riesgo de victimización secundaria, y diseñar un plan de permanencia escolar con ajustes que le permitan continuar sus estudios durante y después del embarazo.",
      "Contactar directamente a la policía para que localice al hombre de 35 años, ya que se trata de un delito y el psicólogo tiene la obligación de denunciar directamente ante las autoridades penales antes de informar al CONANI.",
      "Esperar a que la estudiante le dé autorización explícita para informar a su familia, ya que forzar la revelación antes de que ella esté lista podría traumatizarla más y comprometer su confianza en el psicólogo y en la institución educativa."
    ],
    respuestaCorrecta: 1,
    explicacion: `El embarazo de una niña de 13 años por parte de un hombre adulto constituye abuso sexual sin ninguna posibilidad de consentimiento según la Ley 136-03. Esta situación activa de forma inmediata y obligatoria la Ruta Crítica y la denuncia al CONANI, sin que el pedido de confidencialidad de la víctima pueda detener el proceso. La familia debe ser informada con un enfoque que proteja a la niña de victimización secundaria. El psicólogo debe también garantizar la permanencia escolar de la estudiante durante y después del embarazo, articulando los apoyos necesarios con el equipo de gestión y el distrito.`,
    fundamentoNormativo: {
      documento: "Ley 136-03 / Guía de Ruta Crítica para la Prevención y Atención de la Violencia / Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Abuso Sexual – Embarazo de NNA por Adulto; Ruta Crítica Obligatoria; Permanencia Escolar",
      apartado: "Art. 408 Código Penal y Art. 52-53 Ley 136-03 – Embarazo en menor de 15 años como indicador de abuso sexual; Obligatoriedad del reporte al CONANI sin consentimiento de la víctima; Informar a la familia con enfoque de protección; Protocolo de permanencia escolar durante el embarazo",
      justificacion: "La Ley 136-03 establece que el embarazo de una niña menor de 15 años producto de una relación con un adulto es indicador de abuso sexual que activa la obligación inmediata de denuncia al CONANI. El pedido de confidencialidad de la víctima no modifica esta obligación legal."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Identificación de abuso sexual en embarazo adolescente con adulto, obligatoriedad de la Ruta Crítica y protección de la permanencia escolar"
  },
  {
    id: 720,
    categoria: "Gestión Institucional – Planificación Anual / Seguimiento / Liderazgo del Servicio",
    pregunta: `Al finalizar el primer trimestre del año escolar, el psicólogo de una escuela básica del Gran Santo Domingo revisa los datos de su planificación anual y detecta las siguientes situaciones simultáneas: ha atendido individualmente 47 casos referidos por docentes, pero solo ha podido implementar el 20% de los talleres preventivos planificados; el registro de seguimiento de 12 casos activos está incompleto porque "no hay tiempo"; tres familias citadas nunca asistieron y no hay registro de las gestiones de recontacto; y los expedientes de 8 estudiantes del año anterior que fueron cerrados no tienen nota de cierre documentada. El director del centro le dice al psicólogo que "está haciendo un gran trabajo porque atiende muchos casos". El psicólogo siente que el volumen de atención individual está consumiendo todo el tiempo del servicio y que la función preventiva y el seguimiento están quedando fuera. ¿Cuál es la actuación correcta del psicólogo escolar ante esta situación?`,
    opciones: [
      "Continuar con el modelo actual ya que el director lo valida y el alto número de atenciones individuales demuestra que el servicio es muy necesario en el centro, registrando los pendientes como metas para el siguiente trimestre.",
      "Realizar un análisis técnico del funcionamiento del servicio usando los datos del trimestre como evidencia, presentar al equipo de gestión una propuesta de reorganización que equilibre la atención individual con la función preventiva, establecer criterios de priorización y referencia para el manejo de casos, completar la documentación pendiente de expedientes activos y cerrados, y diseñar un plan de gestión de familias no respondientes, documentando el proceso de reorientación del servicio con respaldo en el Manual Operativo y la Planificación Anual.",
      "Solicitar al director que asigne un docente como asistente del servicio de orientación para que gestione la documentación y el contacto con familias, liberando al psicólogo para enfocarse exclusivamente en la atención individual de los casos más graves.",
      "Reducir el número de sesiones individuales de seguimiento de los casos activos a una por mes para liberar tiempo para los talleres preventivos, sin informar al equipo de gestión del cambio en la frecuencia de atención."
    ],
    respuestaCorrecta: 1,
    explicacion: `El Manual Operativo y la Planificación Anual de la Unidad de Orientación y Psicología establecen que el servicio debe funcionar con equilibrio entre la atención individual, la función preventiva y el seguimiento documentado. La concentración exclusiva en la atención reactiva, aunque validada informalmente por el director, no representa un servicio de calidad según la normativa. El psicólogo tiene la responsabilidad de analizar su práctica con datos propios, proponer ajustes técnicos fundamentados y mantener la documentación al día. Los expedientes incompletos y sin cierre documentado representan una deficiencia técnica que debe ser corregida de forma inmediata y sistemática.`,
    fundamentoNormativo: {
      documento: "Manual Operativo de los Centros de Orientación y Psicología (2015) / Planificación Anual Unidad de Orientación y Psicología / Lineamientos del Proceso de Orientación y Psicología (Actualización 2023-2024)",
      capitulo: "Gestión del Servicio de Orientación y Psicología; Equilibrio entre Función Preventiva y Atención Individual; Documentación y Seguimiento de Casos",
      apartado: "Estructura del servicio con equilibrio preventivo-reactivo; Obligatoriedad de documentación completa de expedientes; Cierre documentado de casos; Gestión de familias no respondientes; Uso de datos propios para la autoevaluación y mejora del servicio",
      justificacion: "El Manual Operativo y la Planificación Anual establecen que el servicio de orientación y psicología tiene funciones preventivas y de seguimiento que son tan obligatorias como la atención individual. La documentación incompleta de expedientes y la ausencia de nota de cierre representan incumplimientos técnicos que el psicólogo debe corregir de forma sistemática."
    },
    nivelDificultad: "Alta",
    competenciaEvaluada: "Autoevaluación del servicio con base en datos propios, equilibrio entre función preventiva y atención individual, y gestión de la documentación obligatoria"
  }
    
];

// Exportación del módulo (compatible con Node.js y entornos de importación ES6)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { bancoPreguntasPsicologiaMINERD };
}




// Instrucción para el desarrollador:
// Para llegar a las 100 preguntas, continúa agregando objetos a este array utilizando
// exactamente la misma estructura (id, categoria, pregunta, opciones, respuestaCorrecta, explicacion).
